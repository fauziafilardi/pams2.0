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
                                        <ABSInputSelectList @change="OnRevaluationTransTypeChange" :prop="PI_RevaluationTransType" :value="M_GL_Revaluation_New.revaluationTransType" :label="M_GL_Revaluation_New.revaluationTransTypeLabel" ref="ref_totrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revreferenceno" v-model="M_GL_Revaluation_New.revreferenceno"  ref="ref_revreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revdescs" v-model="M_GL_Revaluation_New.revdescs"  ref="ref_revdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnrevdateChange" :prop="PI_revdate" v-model="M_GL_Revaluation_New.revdate"  ref="ref_revdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromaccountcdChange" :prop="PI_fromaccountcd" :value="M_GL_Revaluation_New.fromaccountcd" :label="M_GL_Revaluation_New.fromaccountcdLabel" ref="ref_fromaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoaccountcdChange" :prop="PI_toaccountcd" :value="M_GL_Revaluation_New.toaccountcd" :label="M_GL_Revaluation_New.toaccountcdLabel" ref="ref_toaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromtrxtypeChange" :prop="PI_fromtrxtype" :value="M_GL_Revaluation_New.fromtrxtype" :label="M_GL_Revaluation_New.fromtrxtypeLabel" ref="ref_fromtrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntotrxtypeChange" :prop="PI_totrxtype" :value="M_GL_Revaluation_New.totrxtype" :label="M_GL_Revaluation_New.totrxtypeLabel" ref="ref_totrxtypelll"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Currency Master
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrevcurrencycdChange" :prop="PI_revcurrencycd" :value="M_GL_Revaluation_New.revcurrencycd" :label="M_GL_Revaluation_New.revcurrencycdLabel" ref="ref_revcurrencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currrate" v-model="M_GL_Revaluation_New.currrate"  ref="ref_currrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnufgainChange" :prop="PI_ufgain" :value="M_GL_Revaluation_New.ufgain" :label="M_GL_Revaluation_New.ufgainLabel" ref="ref_ufgain"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnuflossChange" :prop="PI_ufloss" :value="M_GL_Revaluation_New.ufloss" :label="M_GL_Revaluation_New.uflossLabel" ref="ref_ufloss"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                                                    
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

            M_GL_Revaluation_New : {
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
                revcurrencycd: '',
                revcurrencycdLabel: '',
                currrate: '',
                ufgain: '',
                ufgainLabel: '',
                ufloss: '',
                uflossLabel: '',
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
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revdescs: { 
                cValidate :'', 
                cName: 'revdescs', 
                cLabel: 'Description   ', 
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
                cLabel: 'Revaluation Date ', 
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
                cDisplayColumn: 'AccountCd,Descs1' ,
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
                    InitialWhere: ""   , 
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
                    InitialWhere: ""   , 
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
            PI_revcurrencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'revcurrencycd', 
                cLabel: 'Currency ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currrate: { 
                cValidate :'required', 
                cName: 'currrate', 
                cLabel: 'Rate',
                cType: 'decimal',
                cDecimal: 2,
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ufgain: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'ufgain', 
                cLabel: 'Unrealize Forex Gain Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
            PI_ufloss: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'ufloss', 
                cLabel: 'Unrealize Forex Loss Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
        OnRevaluationTransTypeChange (data) {
            this.$nextTick(() => {
                this.M_GL_Revaluation_New.revaluationTransType = data.id
                this.M_GL_Revaluation_New.revaluationTransTypeLabel = data.label
                this.M_GL_Revaluation_New.revdescs = data.Descs

                if (this.inputStatus != "VIEW") {
                    var param = {
                        OptionFunctionCd: "GetTrxTypeMasterForGL",
                        ModuleCd: this.Module,
                        TrxType: data.id
                    }

                    this.FnDynamicFunction(param)
                    .then(ress => {
                        if (ress == null) return

                        var resp = ress[0]
                        if (resp.RunningCd != 'CodeG') {
                            this.PI_revreferenceno.cProtect = true
                            this.M_GL_Revaluation_New.revreferenceno = '(auto number)'
                        } else {
                            this.PI_revreferenceno.cProtect = false
                            this.M_GL_Revaluation_New.revreferenceno = ''
                        }
                    })
                }
            })
            this.$forceUpdate()
        },
        OnrevdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revdate}
            }
        })
        this.$forceUpdate()
        },
        OnfromaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.fromaccountcd = data.id
            this.M_GL_Revaluation_New.fromaccountcdLabel = data.label

            this.M_GL_Revaluation_New.toaccountcd = data.id
            this.M_GL_Revaluation_New.toaccountcdLabel = data.label

            if (this.inputStatus != "VIEW") {
//{fromaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OntoaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.toaccountcd = data.id
            this.M_GL_Revaluation_New.toaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnfromtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.fromtrxtype = data.id
            this.M_GL_Revaluation_New.fromtrxtypeLabel = data.label

            this.M_GL_Revaluation_New.totrxtype = data.id
            this.M_GL_Revaluation_New.totrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntotrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.totrxtype = data.id
            this.M_GL_Revaluation_New.totrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnrevcurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.revcurrencycd = data.id
            this.M_GL_Revaluation_New.revcurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{revcurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OnufgainChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.ufgain = data.id
            this.M_GL_Revaluation_New.ufgainLabel = data.label
            if (this.inputStatus != "VIEW") {
//{ufgain}
            }
        })
        this.$forceUpdate()
        },
        OnuflossChange (data) {
        this.$nextTick(() => {
            this.M_GL_Revaluation_New.ufloss = data.id
            this.M_GL_Revaluation_New.uflossLabel = data.label
            if (this.inputStatus != "VIEW") {
//{ufloss}
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
            this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit(true)
            // this.M_GL_Revaluation_New = {
            //     revaluationTransType: '',
            //     revaluationTransTypeLabel: '',
            //     revreferenceno: '',
            //     revdescs: '',
            //     revdate: '',
            //     fromaccountcd: '',
            //     fromaccountcdLabel: '',
            //     toaccountcd: '',
            //     toaccountcdLabel: '',
            //     fromtrxtype: '',
            //     fromtrxtypeLabel: '',
            //     totrxtype: '',
            //     totrxtypeLabel: '',
            //     revcurrencycd: '',
            //     revcurrencycdLabel: '',
            //     currrate: '',
            //     ufgain: '',
            //     ufgainLabel: '',
            //     ufloss: '',
            //     uflossLabel: '',
            // }
            // this.getDataBy()
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromTrxType: this.M_GL_Revaluation_New.fromtrxtype,
                ToTrxType: this.M_GL_Revaluation_New.totrxtype,
                FromAccountCd: this.M_GL_Revaluation_New.fromaccountcd,
                ToAccountCd: this.M_GL_Revaluation_New.toaccountcd,
                RevTrxType: this.M_GL_Revaluation_New.revaluationTransType,
                RevDate: this.M_GL_Revaluation_New.revdate,
                RevDescs: this.M_GL_Revaluation_New.revdescs,
                RevReferenceno: this.M_GL_Revaluation_New.revreferenceno,
                RevForexGain: this.M_GL_Revaluation_New.ufgain,
                RevForexLoss: this.M_GL_Revaluation_New.ufloss,
                RevCurrencyRate: this.M_GL_Revaluation_New.currrate,
                UserInput: this.getDataUser().UserId,
                RevCurrencyCd: this.M_GL_Revaluation_New.revcurrencycd
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess('Revaluation Succeed!')
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit(true)
                    // this.getToolbar().setButton(false)
                    // this.$store.commit('setStatus', 'view')

                    // this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_GL_Revaluation_New = {

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
                
                var data = response.Data[0]
                
                // this.M_GL_Revaluation_New = {
                // }

                // this.M_GL_Revaluation_New.totrxtypeLabel = this.M_GL_Revaluation_New.totrxtype != null ? data.totrxtype + this.separator + data.trxtypedescs :'' 
                // this.M_GL_Revaluation_New.fromaccountcdLabel = this.M_GL_Revaluation_New.fromaccountcd != null ? data.fromaccountcd + this.separator  :'' 
                // this.M_GL_Revaluation_New.toaccountcdLabel = this.M_GL_Revaluation_New.toaccountcd != null ? data.toaccountcd + this.separator  :'' 
                // this.M_GL_Revaluation_New.fromtrxtypeLabel = this.M_GL_Revaluation_New.fromtrxtype != null ? data.fromtrxtype + this.separator  :'' 
                // this.M_GL_Revaluation_New.totrxtypeLabel = this.M_GL_Revaluation_New.totrxtype != null ? data.totrxtype + this.separator  :'' 
                // this.M_GL_Revaluation_New.revcurrencycdLabel = this.M_GL_Revaluation_New.revcurrencycd != null ? data.revcurrencycd + this.separator + data.currencydescs :'' 
                // this.M_GL_Revaluation_New.ufgainLabel = this.M_GL_Revaluation_New.ufgain != null ? data.ufgain + this.separator + data.ufgain :'' 
                // this.M_GL_Revaluation_New.uflossLabel = this.M_GL_Revaluation_New.ufloss != null ? data.ufloss + this.separator + data.ufloss :'' 
         

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
        this.getDataBy()
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
