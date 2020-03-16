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
                                        <ABSInputSelectList @change="OnformatcodeChange" :prop="PI_formatcode" :value="M_GL_LedgerAnalysisExecutor.formatcode" :label="M_GL_LedgerAnalysisExecutor.formatcodeLabel" ref="ref_formatcode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfiletypeChange" :prop="PI_filetype" v-model="M_GL_LedgerAnalysisExecutor.filetype"  ref="ref_filetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentperiod" v-model="M_GL_LedgerAnalysisExecutor.currentperiod"  ref="ref_currentperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnfromaccperiodChange" :prop="PI_fromaccperiod" v-model="M_GL_LedgerAnalysisExecutor.fromaccperiod"  ref="ref_fromaccperiod"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntoaccperiodChange" :prop="PI_toaccperiod" v-model="M_GL_LedgerAnalysisExecutor.toaccperiod"  ref="ref_toaccperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnfromaccyearChange" :prop="PI_fromaccyear" v-model="M_GL_LedgerAnalysisExecutor.fromaccyear"  ref="ref_fromaccyear"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_toaccyear" v-model="M_GL_LedgerAnalysisExecutor.toaccyear"  ref="ref_toaccyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_supplementarydescs" v-model="M_GL_LedgerAnalysisExecutor.supplementarydescs"  ref="ref_supplementarydescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_ledgersource" v-model="M_GL_LedgerAnalysisExecutor.ledgersource"  ref="ref_ledgersource"/> -->
                                        <ABSInputSelect2 @change="OnledgersourceChange" :prop="PI_ledgersource" :value="M_GL_LedgerAnalysisExecutor.ledgersource" :label="M_GL_LedgerAnalysisExecutor.ledgersourceLabel" ref="ref_ledgersource"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincluderoughtransChange" :prop="PI_includeroughtrans" v-model="M_GL_LedgerAnalysisExecutor.includeroughtrans"  ref="ref_includeroughtrans" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onfromselection1Change" :prop="PI_fromselection1" :value="M_GL_LedgerAnalysisExecutor.fromselection1" :label="M_GL_LedgerAnalysisExecutor.fromselection1Label" ref="ref_fromselection1"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Ontoselection1Change" :prop="PI_toselection1" :value="M_GL_LedgerAnalysisExecutor.toselection1" :label="M_GL_LedgerAnalysisExecutor.toselection1Label" ref="ref_toselection1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onfromselection2Change" :prop="PI_fromselection2" :value="M_GL_LedgerAnalysisExecutor.fromselection2" :label="M_GL_LedgerAnalysisExecutor.fromselection2Label" ref="ref_fromselection2"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Ontoselection2Change" :prop="PI_toselection2" :value="M_GL_LedgerAnalysisExecutor.toselection2" :label="M_GL_LedgerAnalysisExecutor.toselection2Label" ref="ref_toselection2"/>
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

            M_GL_LedgerAnalysisExecutor :{
                formatcode: '',
                formatcodedescs: '',
                filetype: '',
                fromaccperiod: '',
                fromaccyear: '',
                toaccperiod: '',
                toaccyear: '',
                supplementarydescs: '',
                ledgersource: '',
                includeroughtrans: '',
                fromselection1: '',
                toselection1: '',
                fromselection2: '',
                toselection2: '',
                currentperiod:''
                    }
            ,					
            PI_formatcode: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLLedgerAnalysisFormat', 
                    ColumnDB: 'LedgerFormatCd', 
                    InitialWhere: "", 
                    OrderBy:'',
                    ParamWhere: '' ,
                        }, 
                cValidate :'required', 
                cName: 'formatcode', 
                cLabel: 'Format Code ', 
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
                cMasterUrl: 'GL/GL_LedgerAnalysisFormat' ,
                cDisplayColumn: 'LedgerFormatCd,Descs1' ,
            }, 
            PI_filetype: { 
                cValidate :'', 
                cName: 'filetype', 
                cId: 'rdbfiletype', 
                cRadioOptions: [{ text: 'Excel', value: 'E' },{ text: 'Text', value: 'T' },{ text: 'PDF', value: 'P' },], 
                cRadioDefaultOption: 'E', 
                cLabel:'File Type', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currentperiod: { 
                cLabel: 'Current Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_fromaccperiod: { 
                cValidate :'required|cRequired:Accounting Period From is Required!|max:2|min_value:1|max_value:12|cmax_value:Periode must be less then or equal 12', 
                cName: 'fromaccperiod', 
                cLabel: 'Accounting Period From', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromaccyear: { 
                cValidate :'required|cRequired:Accounting Year From is Required!|max:4', 
                cName: 'fromaccyear', 
                cLabel: 'Accounting Year From', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_toaccperiod: { 
                cValidate :'required|cRequired:Accounting Period To is Required!|max:2|min_value:1|max_value:12|cmax_value:Periode must be less then or equal 12', 
                cName: 'toaccperiod', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_toaccyear: { 
                cValidate :'required|cRequired:Accounting Year To is Required!|max:4', 
                cName: 'toaccyear', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_supplementarydescs: { 
                cValidate :'max:60', 
                cName: 'supplementarydescs', 
                cLabel: 'Supplementary Description', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            // PI_ledgersource: { 
            //     cValidate :'', 
            //     cName: 'ledgersource', 
            //     cLabel: 'Ledger Source', 
            //     cLabelSize: 4, 
            //     cOrder: 8, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_ledgersource: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'ledgersource', 
                cLabel: 'Ledger Source', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [
                    { label: 'A | Active', id: 'A' },
                    { label: 'B | Budget', id: 'B' },
                    { label: 'L | Budget', id: 'L' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_includeroughtrans: { 
                cValidate :'', 
                cName: 'includeroughtrans', 
                cId: 'rdbincluderoughtrans', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Include Rough Transaction', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromselection1: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'FromSelection1'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'fromselection1', 
                cLabel: 'FROM', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_toselection1: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'ToSelection1'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'toselection1', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_fromselection2: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'FromSelection2'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'fromselection2', 
                cLabel: 'from', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_toselection2: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'ToSelection2'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'toselection2', 
                cLabel: 'To', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 7, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            
            PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },

            fromCd1:'',
            fromCd2:''
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
        OnfromaccperiodChange(data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    if(data && data != 0){
                        this.M_GL_LedgerAnalysisExecutor.toaccperiod = data
                    }else{
                        this.M_GL_LedgerAnalysisExecutor.fromaccperiod = ''

                    }
                }
            })
            this.$forceUpdate()
        },
        OnfromaccyearChange(data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    this.M_GL_LedgerAnalysisExecutor.toaccyear = data
                }
            })
            this.$forceUpdate()
        },
        OntoaccperiodChange(data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                     if(data && data != 0){
                        this.M_GL_LedgerAnalysisExecutor.toaccperiod = data
                    }else{
                        this.M_GL_LedgerAnalysisExecutor.toaccperiod = ''

                    }
                }
            })
            this.$forceUpdate()
        },
        OnledgersourceChange(data){
            this.$nextTick(() => {
                this.M_GL_LedgerAnalysisExecutor.ledgersource = data.id
                this.M_GL_LedgerAnalysisExecutor.ledgersourceLabel = data.label
                if (this.inputStatus != "VIEW") {}
            })
            this.$forceUpdate()
        },
        OnformatcodeChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisExecutor.formatcode = data.id
            this.M_GL_LedgerAnalysisExecutor.formatcodeLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.CreateTableSelection(data.id)
//{formatcode}
            }
        })
        this.$forceUpdate()
        },
        OnfiletypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{filetype}
            }
        })
        this.$forceUpdate()
        },
        OnincluderoughtransChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{includeroughtrans}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisExecutor.fromselection1 = data.id
            this.M_GL_LedgerAnalysisExecutor.fromselection1Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection1}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisExecutor.toselection1 = data.id
            this.M_GL_LedgerAnalysisExecutor.toselection1Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection1}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisExecutor.fromselection2 = data.id
            this.M_GL_LedgerAnalysisExecutor.fromselection2Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection2}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisExecutor.toselection2 = data.id
            this.M_GL_LedgerAnalysisExecutor.toselection2Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection2}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().isNew = true
            this.getToolbar().statusFunction[0].disabled = true
            // this.getToolbar().statusFunction[5].disabled = false
           this.getToolbar().statusFunction[7].disabled = true
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
            this.$store.commit('setStatus','new')
            this.getSpec()

            this.PI_fromselection1.cVisible = false
            this.PI_toselection1.cVisible = false
            this.PI_fromselection2.cVisible = false
            this.PI_toselection2.cVisible = false

            this.getToolbar().doEdit(true)
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
         
        },
        M_Update() {
             var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                FormatCode: this.M_GL_LedgerAnalysisExecutor.formatcode == '' || this.M_GL_LedgerAnalysisExecutor.formatcode == null ? 'NULL' : this.M_GL_LedgerAnalysisExecutor.formatcode ,
                FileType: this.M_GL_LedgerAnalysisExecutor.filetype,
                CurrentPeriod: this.M_GL_LedgerAnalysisExecutor.currentperiod,
                AccPeriodFrom: this.M_GL_LedgerAnalysisExecutor.fromaccperiod,
                AccYearFrom:this.M_GL_LedgerAnalysisExecutor.fromaccyear,
                AccPeriodTo:this.M_GL_LedgerAnalysisExecutor.toaccperiod,
                AccYearTo:this.M_GL_LedgerAnalysisExecutor.toaccyear,
                SuppDescs:this.M_GL_LedgerAnalysisExecutor.supplementarydescs,
                LedgerSource:this.M_GL_LedgerAnalysisExecutor.ledgersource,                   
                IncludeRoughTrans:this.M_GL_LedgerAnalysisExecutor.includeroughtrans,  
                IsDailyCashflow:'Y',   
                lblSelectionFrom1: this.fromCd1,
                lblSelectionFrom2: this.fromCd2,
                SelectionFrom1: this.M_GL_LedgerAnalysisExecutor.fromselection1 == null ? '' : this.M_GL_LedgerAnalysisExecutor.fromselection1 ,
                SelectionTo1: this.M_GL_LedgerAnalysisExecutor.toselection1 == null ? '' : this.M_GL_LedgerAnalysisExecutor.toselection1 ,
                SelectionFrom2: this.M_GL_LedgerAnalysisExecutor.fromselection2 == null ? '' : this.M_GL_LedgerAnalysisExecutor.fromselection2 ,
                SelectionTo2: this.M_GL_LedgerAnalysisExecutor.toselection2 == null ? '' : this.M_GL_LedgerAnalysisExecutor.toselection2 

                                  
            }
            // return
            this.postJSON(this.getUrlLedgerAnalysisExecutor(), param)
            .then((response) => {
                if(response == null) return
                
                this.$parent.resultUpdate(response.Message)
                this.getToolbar().doEdit(true)
                this.$store.commit('setFormType','Form')

                this.getToolbar().FormStatus = 'NEW'
            })
        },
		M_ClearForm(){
			// this.$nextTick(() => {
            this.M_GL_LedgerAnalysisExecutor = {
                fromselection1: '',
                formatcodedescs: '',
                filetype: 'E',
                fromaccperiod: '',
                fromaccyear: '',
                toaccperiod: '',
                toaccyear: '',
                supplementarydescs: '',
                ledgersource: '',
                includeroughtrans: 'Y',
                fromselection1: '',
                toselection1: '',
                fromselection2: '',
                toselection2: '',
                currentperiod:''
                    }
            	
		//    })
		//    this.$forceUpdate()	
		},
        M_New(){
			this.$refs.ref_formatcode.focus()
        },
        M_Edit(){
            this.$refs.ref_formatcode.focus()
        },
        M_Delete(dt){       

        },        
        getDataBy (record) {
           
        },
        CreateTableSelection(data){
            var param = {
                    OptionFunctionCd: "GetLedgerAnalysisFormat",
                    ModuleCd: this.Module,
                    LedgerFormatCd: data
                  }

                  this.FnDynamicFunction(param)
                  .then(ress => {
                    if (ress == null ||ress.length == 0) return
                
                    var data = ress[0]
                    var sSelection1 = data.Selection1.toUpperCase()
                    var sSelection2 = data.Selection2.toUpperCase()
                    this.fromCd1 = sSelection1
                    this.fromCd2 = sSelection2
                    switch(sSelection1){
                        case "AC":
                                
                                this.PI_fromselection1.cVisible = true
                                this.PI_toselection1.cVisible = true

                                this.PI_fromselection1.cProtect = true
                                this.PI_toselection1.cProtect = true

                                this.PI_fromselection1.cLabel = 'Account Code From '
                                this.PI_fromselection1.cMasterUrl = 'GL/GL_ChartOfAccount'
                                this.PI_fromselection1.dataLookUp.InitialWhere = ""
                                this.PI_fromselection1.dataLookUp.LookUpCd = "GetLookupGLAccountCodeReport"
                                this.PI_fromselection1.dataLookUp.ColumnDB = "AccountCd"
                                this.PI_fromselection1.cDisplayColumn = "AccountCd,Descs1"  

                                this.PI_toselection1.cLabel = 'TO'
                                this.PI_toselection1.cMasterUrl = 'GL/GL_ChartOfAccount'
                                this.PI_toselection1.dataLookUp.InitialWhere = ""
                                this.PI_toselection1.dataLookUp.LookUpCd = "GetLookupGLAccountCodeReport"
                                this.PI_toselection1.dataLookUp.ColumnDB = "AccountCd"
                                this.PI_toselection1.cDisplayColumn = "AccountCd,Descs1"
                            break;
                        case "RF":
                                this.PI_fromselection1.cVisible = true
                                this.PI_toselection1.cVisible = true

                                this.PI_fromselection1.cProtect = true
                                this.PI_toselection1.cProtect = true

                                this.PI_fromselection1.cLabel = 'Reference No From '
                                this.PI_fromselection1.cMasterUrl = ''
                                this.PI_fromselection1.dataLookUp.InitialWhere = "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"
                                this.PI_fromselection1.dataLookUp.LookUpCd = "GetLookupGLReferenceNo"
                                this.PI_fromselection1.dataLookUp.ColumnDB = "SubPortfolioCd"
                                this.PI_fromselection1.cDisplayColumn = "ReferenceNo,Descs"  

                                this.PI_toselection1.cLabel = 'TO'
                                this.PI_toselection1.cMasterUrl = ''
                                this.PI_toselection1.dataLookUp.InitialWhere = "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"
                                this.PI_toselection1.dataLookUp.LookUpCd = "GetLookupGLReferenceNo"
                                this.PI_toselection1.dataLookUp.ColumnDB = "SubPortfolioCd"
                                this.PI_toselection1.cDisplayColumn = "ReferenceNo,Descs"
                            break;
                        default:
                                this.PI_fromselection1.cVisible = false
                                this.PI_toselection1.cVisible = false
                            break;
                    }

                    switch(sSelection2){
                        case "AC":
                                this.PI_fromselection2.cVisible = true
                                this.PI_toselection2.cVisible = true

                                 this.PI_fromselection2.cProtect = true
                                this.PI_toselection2.cProtect = true

                                this.PI_fromselection2.cLabel = 'Account Code From '
                                this.PI_fromselection2.cMasterUrl = 'GL/GL_ChartOfAccount'
                                this.PI_fromselection2.dataLookUp.InitialWhere = ""
                                this.PI_fromselection2.dataLookUp.LookUpCd = "GetLookupGLAccountCodeReport"
                                this.PI_fromselection2.dataLookUp.ColumnDB = "AccountCd"
                                this.PI_fromselection2.cDisplayColumn = "AccountCd,Descs1"  

                                this.PI_toselection2.cLabel = 'TO'
                                this.PI_toselection2.cMasterUrl = 'GL/GL_ChartOfAccount'
                                this.PI_toselection2.dataLookUp.InitialWhere = ""
                                this.PI_toselection2.dataLookUp.LookUpCd = "GetLookupGLAccountCodeReport"
                                this.PI_toselection2.dataLookUp.ColumnDB = "AccountCd"
                                this.PI_toselection2.cDisplayColumn = "AccountCd,Descs1"
                            break;
                        case "RF":
                                this.PI_fromselection2.cVisible = true
                                this.PI_toselection2.cVisible = true

                                this.PI_fromselection2.cProtect = true
                                this.PI_toselection2.cProtect = true

                                this.PI_fromselection2.cLabel = 'Reference No From '
                                this.PI_fromselection2.cMasterUrl = ''
                                this.PI_fromselection2.dataLookUp.InitialWhere = "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"
                                this.PI_fromselection2.dataLookUp.LookUpCd = "GetLookupGLReferenceNo"
                                this.PI_fromselection2.dataLookUp.ColumnDB = "SubPortfolioCd"
                                this.PI_fromselection2.cDisplayColumn = "ReferenceNo,Descs"  

                                this.PI_toselection2.cLabel = 'TO'
                                this.PI_toselection2.cMasterUrl = ''
                                this.PI_toselection2.dataLookUp.InitialWhere = "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"
                                this.PI_toselection2.dataLookUp.LookUpCd = "GetLookupGLReferenceNo"
                                this.PI_toselection2.dataLookUp.ColumnDB = "SubPortfolioCd"
                                this.PI_toselection2.cDisplayColumn = "ReferenceNo,Descs"
                            break;
                        default:
                                this.PI_fromselection2.cVisible = false
                                this.PI_toselection2.cVisible = false
                            break;
                    }


         
                  })

        },
        getSpec(){
            var param = {
                    OptionFunctionCd: "GetGLSpecification",
                    ModuleCd: this.Module
                  }

                  this.FnDynamicFunction(param)
                  .then(ress => {
                    if (ress == null ||ress.length == 0) return
                
                    var data = ress[0]
                    console.log(data)
                    this.M_GL_LedgerAnalysisExecutor.currentperiod = data.CurrentFinPeriod +'/'+data.CurrentFinYear
                    this.M_GL_LedgerAnalysisExecutor.filetype = 'E'
                    this.M_GL_LedgerAnalysisExecutor.includeroughtrans ='Y'
         
                  })
        }
		
    }, 
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','new')
        this.getSpec()
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.getToolbar().doEdit(true)
        this.$store.commit('setFormType','Form')

        this.getToolbar().FormStatus = 'NEW'

        this.getToolbar().ProcessPS()
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
