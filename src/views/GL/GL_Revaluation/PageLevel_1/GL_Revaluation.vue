<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnRevaluationTransTypeChange" :prop="PI_RevaluationTransType" :value="M_GL_Revaluation.revaluationTransType" :label="M_GL_Revaluation.revaluationTransTypeLabel" ref="ref_totrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revreferenceno" v-model="M_GL_Revaluation.revreferenceno"  ref="ref_revreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revdescs" v-model="M_GL_Revaluation.revdescs"  ref="ref_revdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnrevdateChange" :prop="PI_revdate" v-model="M_GL_Revaluation.revdate"  ref="ref_revdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromaccountcdChange" :prop="PI_fromaccountcd" :value="M_GL_Revaluation.fromaccountcd" :label="M_GL_Revaluation.fromaccountcdLabel" ref="ref_fromaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoaccountcdChange" :prop="PI_toaccountcd" :value="M_GL_Revaluation.toaccountcd" :label="M_GL_Revaluation.toaccountcdLabel" ref="ref_toaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromtrxtypeChange" :prop="PI_fromtrxtype" :value="M_GL_Revaluation.fromtrxtype" :label="M_GL_Revaluation.fromtrxtypeLabel" ref="ref_fromtrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntotrxtypeChange" :prop="PI_totrxtype" :value="M_GL_Revaluation.totrxtype" :label="M_GL_Revaluation.totrxtypeLabel" ref="ref_totrxtypelll"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnfromjournaldateChange" :prop="PI_fromjournaldate" v-model="M_GL_Revaluation.fromjournaldate"  ref="ref_fromjournaldate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntojournaldateChange" :prop="PI_tojournaldate" v-model="M_GL_Revaluation.tojournaldate"  ref="ref_tojournaldate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnrevdcChange" :prop="PI_revdc" v-model="M_GL_Revaluation.revdc"  ref="ref_revdc" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->                             
                            </b-row>
                            <div class="div-collapse">
                                <span class="master-span-form">
                                    Currency Master 
                                </span>
                            </div>
                            <!-- <b-row>
                                        <b-col md="6" v-show="err1 || err2 || err3">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Rate Not Filled From Selected Currency</label></b-col>
                                            </b-row>
                                            <b-row v-show="err2">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Forex Gain Account Code Not Filled From Selected Currency</label></b-col>
                                            </b-row>
                                            <b-row v-show="err3">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Forex Loss Account Code Not Filled From Selected Currency</label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row> -->
                            <b-row>
                                <b-col offset="1" md="10">
                                <ABSGrid
                                    :prop="PI_grid"
                                    @CheckBoxActionLeftChange="changeCheckbox"
                                    @onChangeLookup_UnrealizeForexGainAccountCode="OnUnrealizeForexGainAccountCodeChange"
                                    @onChangeLookup_UnrealizeForexLossAccountCode="OnUnrealizeForexLossAccountCodeChange"
                                    :PageLevel="PageLevel"
                                    :TabIndex="TabIndex"
                                    v-model="dataDetail"
                                    ref="ref_GridRevaluation"
                                    />
                                </b-col>
                            </b-row>
                            
                            <ABSTAnalysis :prop="PTAnalysis" />
                        </b-form>
                    </b-col>                
                </b-row>
            </b-collapse>
        </div>
         
    </div>
</template>

<script>

export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
			cInsertKey:'',
            FormType: "Form",
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},
            RevReferenceNo: '',
            // error: false,
            // err1: false,
            // err2: false,
            // err3: false,

            M_GL_Revaluation : {
                revaluationTransType: '',
                revaluationTransTypeLabel: '',
                revreferenceno: '',
                revdescs: '',
                revdate: '',

                fromaccountcd: '',
                fromaccountcdLabel: '',

                toaccountcd: '',
                toaccountcdLabel: '',
                
                fromtrxtype: '',
                fromtrxtypeLabel: '',
                totrxtype: '',
                totrxtypeLabel: '',
                
                fromjournaldate: '',
                tojournaldate: '',

                revdc: 'All'
            },
            PI_RevaluationTransType: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster', 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'revaluationTransType', 
                cLabel: 'Revaluation Transaction Type ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            },
            PI_revreferenceno: { 
                cValidate :'required|max:20', 
                cName: 'revreferenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revdescs: { 
                cValidate :'', 
                cName: 'revdescs', 
                cLabel: 'Description   ', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revdate: { 
                cValidate :'required', 
                cName: 'revdate', 
                cLabel: 'Revaluation Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromaccountcd', 
                cLabel: 'Account From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_toaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toaccountcd', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            },
            PI_fromtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromtrxtype', 
                cLabel: 'Transaction Type From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_totrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'totrxtype', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_fromjournaldate: { 
                cValidate :'', 
                cName: 'fromjournaldate', 
                cLabel: 'From Journal Date  ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tojournaldate: { 
                cValidate :'', 
                cName: 'tojournaldate', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revdc: { 
                cValidate :'', 
                cName: 'revdc', 
                cId: 'rdbrevdc', 
                cRadioOptions: [{ text: 'All', value: 'All' },{ text: 'Debit', value: 'D' },{ text: 'Credit', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Revaluation Type', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            dataDetail: [],
             PI_grid: {
                 propList: {
                    initialWhere:"",
                    LineNo: this.$parent.data.PageOrder,
                    PageLevel: this.PageLevel,
                    TabIndex: this.TabIndex, 
                    OrderBy: '', 
                    SourceField: '', 
                    ParamView: "'" + this.getDataUser().SubPortfolioCd + "','" + this.getToday() + "'" 
                },
                cDisplayColumn: 'Currency,Rate=decimal,UnrealizeForexGainAccountCode,UnrealizeForexLossAccountCode',
                showCheckBoxDelete: false,
                showNumber: false,
                // divStyle: '120',
                comp: [
                    {
                        slot: 'CheckBoxActionLeft',
                        compType: 'CheckBoxActionLeft',
                        checkedDefault: true
                    },
                    // {
                    //     slot: 'CurrCheck',
                    //     compType: 'ABSi  nputCheckBoxOnly',
                    //     cValidate :'',
                    //     cName: 'CurrCheck',
                    //     cLabel: '',
                    //     cLabelSize: 4,
                    //     cOptions: [{text:'', value: 'Y'}],
                    //     cOrder: 12,
                    //     cKey: false,
                    //     cVisible: true,
                    //     cProtect: false,
                    //     cDefault: '',
                    //     cPageLevel: this.PageLevel,
                    //     cTabIndex: this.TabIndex,
                    //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                    //     cHideRowColumnCSS: true
                    // },
                    {
                        slot: 'Rate',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'Rate', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 13, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    },
                    {
                        slot: 'UnrealizeForexGainAccountCode',
                        compType: 'ABSInputSelectListOnly',
                        dataLookUp: { 
                            LookUpCd: 'GetLookupGLAccountCode'    , 
                            ColumnDB: 'AccountCd'   , 
                            InitialWhere: "SuppressRevaluation <> 'Y'"   , 
                            ParamWhere: ''  
                                }, 
                        cValidate :'', 
                        cName: 'UnrealizeForexGainAccountCode', 
                        cLabel: '', 
                        cKey: false, 
                        cLabelSize: 4, 
                        cOrder: 14, 
                        cTriggered: false, 
                        cDefault: '', 
                        cProtect: false, 
                        cVisible:  true, 
                        cAsync:  false, 
                        cFilter: true, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                        cStatic: false, 
                        cOption: [], 
                        cMasterUrl: 'GL/GL_ChartOfAccount' ,
                        cDisplayColumn: 'AccountCd,Description_1' ,
                    },
                    {
                        slot: 'UnrealizeForexLossAccountCode',
                        compType: 'ABSInputSelectListOnly',
                        dataLookUp: { 
                            LookUpCd: 'GetLookupGLAccountCode'    , 
                            ColumnDB: 'AccountCd'   , 
                            InitialWhere: "SuppressRevaluation <> 'Y'"   , 
                            ParamWhere: ''  
                                }, 
                        cValidate :'', 
                        cName: 'UnrealizeForexLossAccountCode', 
                        cLabel: '', 
                        cKey: false, 
                        cLabelSize: 4, 
                        cOrder: 15, 
                        cTriggered: false, 
                        cDefault: '', 
                        cProtect: false, 
                        cVisible:  true, 
                        cAsync:  false, 
                        cFilter: true, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                        cStatic: false, 
                        cOption: [], 
                        cMasterUrl: 'GL/GL_ChartOfAccount' ,
                        cDisplayColumn: 'AccountCd,Description_1' ,
                    },
                ]
            },
            
            PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
        return this.$store.getters.getStatus.toUpperCase()
      }
      else {
        return 'VIEW'
      }
    }
  },
    methods: {
        changeCheckbox (index, isChecked) {
            this.dataDetail[index].Rate
            this.dataDetail[index].UnrealizeForexGainAccountCode
            this.dataDetail[index].UnrealizeForexLossAccountCode
        },
        OnUnrealizeForexGainAccountCodeChange(index){
        },
        OnUnrealizeForexLossAccountCodeChange(index){
        },
        OnRevaluationTransTypeChange (data) {
            this.$nextTick(() => {
                this.M_GL_Revaluation.revaluationTransType = data.id
                this.M_GL_Revaluation.revaluationTransTypeLabel = data.label
                this.M_GL_Revaluation.revdescs = data.Descs
                if (this.inputStatus != "VIEW") {
                     var param = {
                        OptionFunctionCd: "GetTrxTypeMasterForGL",
                        ModuleCd: this.Module,
                        TrxType: data.id
                    }

                    this.FnDynamicFunction(param)
                    .then(ress => {
                        if (ress == null) return

                        var data = ress[0]
                        if (data.RunningCd != 'CodeG') {
                            this.PI_revreferenceno.cProtect = true
                            this.M_GL_Revaluation.revreferenceno = '(auto number)'
                        } else {
                            this.PI_revreferenceno.cProtect = false
                            this.M_GL_Revaluation.revreferenceno = ''
                        }
                    })  
                    
                }
            })
            this.$forceUpdate()
        },
        OntotrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation.totrxtype = data.id
            this.M_GL_Revaluation.totrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnrevdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                for (var x = 0; x < this.dataDetail.length; x ++) {
                    this.dataDetail[x].Rate = this.isCurrency(this.dataDetail[x].Rate2, this.decimal)
                }
            }
        })
        this.$forceUpdate()
        },
        OnfromaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation.fromaccountcd = data.id
            this.M_GL_Revaluation.fromaccountcdLabel = data.label

            this.M_GL_Revaluation.toaccountcd = data.id
            this.M_GL_Revaluation.toaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OntoaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation.toaccountcd = data.id
            this.M_GL_Revaluation.toaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnfromtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation.fromtrxtype = data.id
            this.M_GL_Revaluation.fromtrxtypeLabel = data.label

            this.M_GL_Revaluation.totrxtype = data.id
            this.M_GL_Revaluation.totrxtypeLabel = data.label

            if (this.inputStatus != "VIEW") {
//{fromtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntotrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation.totrxtype = data.id
            this.M_GL_Revaluation.totrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnfromjournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fromjournaldate}
            }
        })
        this.$forceUpdate()
        },
        OntojournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tojournaldate}
            }
        })
        this.$forceUpdate()
        },
        OnrevdcChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revdc}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
		},
        M_Head_Table () {
        },
        M_PageSize(){
        },
        M_TabClick(){
        },
        M_Pagination(){
        },
        M_Advance_Filter(){
        },
        M_Search(data){
        },
        M_Refresh(){
        },
		M_Cancel() {
            this.M_GL_Revaluation = {
                revaluationTransType: '',
                revaluationTransTypeLabel: '',
                revreferenceno: '',
                revdescs: '',
                revdate: '',

                fromaccountcd: '',
                fromaccountcdLabel: '',

                toaccountcd: '',
                toaccountcdLabel: '',
                
                fromtrxtype: '',
                fromtrxtypeLabel: '',
                totrxtype: '',
                totrxtypeLabel: '',
                
                fromjournaldate: '',
                tojournaldate: '',

                revdc: 'All'
            }
            this.PI_grid.cDisplayColumn = 'Currency,Rate=decimal,UnrealizeForexGainAccountCode,UnrealizeForexLossAccountCode'
		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
            // var param = {			
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: this.$parent.data.PageOrder,
            //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            //     FromTrxType: this.M_GL_Revaluation.fromtrxtype == '' || this.M_GL_Revaluation.fromtrxtype == null ? 'NULL' : this.M_GL_Revaluation.fromtrxtype ,
            //     ToTrxType: this.M_GL_Revaluation.totrxtype == '' || this.M_GL_Revaluation.totrxtype == null ? 'NULL' : this.M_GL_Revaluation.totrxtype ,
            //     FromJournalDate: this.M_GL_Revaluation.fromjournaldate == '' || this.M_GL_Revaluation.fromjournaldate == null ? 'NULL' : this.M_GL_Revaluation.fromjournaldate ,
            //     ToJournalDate: this.M_GL_Revaluation.tojournaldate == '' || this.M_GL_Revaluation.tojournaldate == null ? 'NULL' : this.M_GL_Revaluation.tojournaldate ,
            //     FromAccountCd: this.M_GL_Revaluation.fromaccountcd == '' || this.M_GL_Revaluation.fromaccountcd == null ? 'NULL' : this.M_GL_Revaluation.fromaccountcd ,
            //     ToAccountCd: this.M_GL_Revaluation.toaccountcd == '' || this.M_GL_Revaluation.toaccountcd == null ? 'NULL' : this.M_GL_Revaluation.toaccountcd ,
            //     RevTrxType: this.M_GL_Revaluation.trxtypedescs,
            //     RevDate: this.M_GL_Revaluation.revdate == '' || this.M_GL_Revaluation.revdate == null ? 'NULL' : this.M_GL_Revaluation.revdate ,
            //     RevDescs: this.M_GL_Revaluation.revdescs,
            //     RevReferenceNo: this.M_GL_Revaluation.revreferenceno,
            //     UserInput: this.getDataUser().UserId ,
            //     RevDC: this.M_GL_Revaluation.revdc,
            //     RevCurrencyRate: this.M_GL_Revaluation.revcurrencyrate,
            //     RevForexGain: this.M_GL_Revaluation.revforexgain,
            //     RevForexLoss: this.M_GL_Revaluation.revforexloss,
            //     T0: this.M_GL_Revaluation.this.getdatauser().portfoliocd,
            //     T1: this.M_GL_Revaluation.this.getdatauser().subportfoliocd                
            // }

            // this.postJSON(this.getUrlInsert(), param)
            // .then((response) => {
            //     if(response == null) return
                
            //     this.alertSuccess(response.Message)
            //     .then(() => {
            //         this.getToolbar().FormStatus = 'EDIT'
            //         this.getToolbar().ProcessPS()
            //         this.$store.commit('setStatus', 'view')
			// 		this.$store.commit('setEventStatus', 'Save')

            //         this.FormToMasterPage().ValidasiPage()
										
					
            //     })
            // })
        },
        M_Update() {
            var Rate = ''
            var ForexGain = ''
            var ForexLoss = ''
            for (var x = 0; x < this.dataDetail.length; x++) {
                var rates = this.replaceAllString(this.dataDetail[x].Rate, ',', '', 'number')
                if (this.dataDetail[x]._CheckBoxActionLeft !== false && this.dataDetail[x]._CheckBoxActionLeft == x) {
                    if (!rates || rates == '') {
                        this.alertError("Rate Not Filled From Selected Currency")
                        break
                    }
                    else {
                        if (!this.dataDetail[x].UnrealizeForexGainAccountCode || this.dataDetail[x].UnrealizeForexGainAccountCode == '') {
                            this.alertError("Forex Gain Account Code Not Filled From Selected Currency")
                            break
                        }
                        else {
                            if (!this.dataDetail[x].UnrealizeForexLossAccountCode || this.dataDetail[x].UnrealizeForexLossAccountCode == '') {
                                this.alertError("Forex Loss Account Code Not Filled From Selected Currency")
                                break
                            }
                            else {
                                // kalau berhasil ngapain, lanjutin sendiri ya
                                ForexGain += this.dataDetail[x].Currency + "\u2020" + this.dataDetail[x].UnrealizeForexGainAccountCode + "\u2021"
                                ForexLoss += this.dataDetail[x].Currency + "\u2020" + this.dataDetail[x].UnrealizeForexLossAccountCode + "\u2021"
                                Rate += this.dataDetail[x].Currency + "\u2020" + rates + "\u2021"

                                // console.log(Rate)
                                // console.log(ForexGain)
                                // console.log(ForexLoss)
                            }
                        }
                    }
                }
            }
            // console.log(Rate)
            // console.log(ForexGain)
            // console.log(ForexLoss)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromTrxType: this.M_GL_Revaluation.fromtrxtype == '' || this.M_GL_Revaluation.fromtrxtype == null ? 'NULL' : this.M_GL_Revaluation.fromtrxtype ,
                ToTrxType: this.M_GL_Revaluation.totrxtype == '' || this.M_GL_Revaluation.totrxtype == null ? 'NULL' : this.M_GL_Revaluation.totrxtype ,
                FromJournalDate: this.M_GL_Revaluation.fromjournaldate == '' || this.M_GL_Revaluation.fromjournaldate == null ? 'NULL' : this.M_GL_Revaluation.fromjournaldate ,
                ToJournalDate: this.M_GL_Revaluation.tojournaldate == '' || this.M_GL_Revaluation.tojournaldate == null ? 'NULL' : this.M_GL_Revaluation.tojournaldate ,
                FromAccountCd: this.M_GL_Revaluation.fromaccountcd == '' || this.M_GL_Revaluation.fromaccountcd == null ? 'NULL' : this.M_GL_Revaluation.fromaccountcd ,
                ToAccountCd: this.M_GL_Revaluation.toaccountcd == '' || this.M_GL_Revaluation.toaccountcd == null ? 'NULL' : this.M_GL_Revaluation.toaccountcd ,
                RevTrxType: this.M_GL_Revaluation.revaluationTransType == '' || this.M_GL_Revaluation.revaluationTransType == null ? 'NULL' : this.M_GL_Revaluation.revaluationTransType ,
                RevDate: this.M_GL_Revaluation.revdate == '' || this.M_GL_Revaluation.revdate == null ? 'NULL' : this.M_GL_Revaluation.revdate,
                RevDescs: this.M_GL_Revaluation.revdescs,
                RevReferenceNo: this.M_GL_Revaluation.revreferenceno,
                UserInput: this.getDataUser().UserId,
                RevDC: this.M_GL_Revaluation.revdc,
                RevCurrencyRate: Rate,
                RevForexGain: ForexGain,
                RevForexLoss: ForexLoss,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'edit')

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_GL_Revaluation = {
                totrxtype: '',
                revreferenceno: '',
                revdescs: '',
                revdate: this.getToday(),
                fromaccountcd: '',
                toaccountcd: '',
                fromtrxtype: '',
                totrxtype: '',
                fromjournaldate: '',
                tojournaldate: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_totrxtype.focus()
        },
        M_Edit(){
            this.$refs.ref_totrxtype.focus()
        },
        M_Delete(dt){       

        //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                for (var i = 0; i < response.Data.length; i++) {
                    // hit api 2
                    param = {
                        OptionSeq: this.getOptionSeq().OptionSeq,
                        LineNo: 1,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        CurrencyCd: response.Data[i].currencycd,
                        CurrDate: this.M_FormatingDate(new Date())
                    }

                    this.postEncode( this.getUrlById(), param )
                    .then(response => {
                        // response from API
                        if(response == null) return
                        
                        // param.CurrencyCd
                        var rate = response.Data[0].rate
                        
                    })
                }
                // var data = response.Data[0]
                
                

                // this.M_GL_Revaluation = {
                //     totrxtype: data.totrxtype,
                //     revreferenceno: data.revreferenceno,
                //     revdescs: data.revdescs,
                //     revdate: data.revdate,
                //     fromaccountcd: data.fromaccountcd,
                //     toaccountcd: data.toaccountcd,
                //     fromtrxtype: data.fromtrxtype,
                //     totrxtype: data.totrxtype,
                //     fromjournaldate: data.fromjournaldate,
                //     tojournaldate: data.tojournaldate
                // }
                 

                // this.M_GL_Revaluation.totrxtypeLabel = this.M_GL_Revaluation.totrxtype != null ? data.totrxtype + this.separator + data.trxtypedescs :'' 
                // this.M_GL_Revaluation.fromaccountcdLabel = this.M_GL_Revaluation.fromaccountcd != null ? data.fromaccountcd + this.separator  :'' 
                // this.M_GL_Revaluation.toaccountcdLabel = this.M_GL_Revaluation.toaccountcd != null ? data.toaccountcd + this.separator  :'' 
                // this.M_GL_Revaluation.fromtrxtypeLabel = this.M_GL_Revaluation.fromtrxtype != null ? data.fromtrxtype + this.separator  :'' 
                // this.M_GL_Revaluation.totrxtypeLabel = this.M_GL_Revaluation.totrxtype != null ? data.totrxtype + this.separator  :'' 
         

                // this.IEBy.Input = data.userinput
                // this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.$refs.ref_GridRevaluation.doGetList('','eb_getList')
        this.getToolbar().doEdit(true)
        this.hideSideBarMenu()
    },
    beforeUpdate: function() {  
    },
    updated: function() {
    },
    beforeDestroy: function() {
    },
    destroyed: function() {
    }
}
</script>
