<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      @rowClicked = "$parent.rowClicked"
      @rowDblClicked = "$parent.doDoubleClick"
      @rowLinkClick = "$parent.rowLink"
      @pageSize = "$parent.M_PageSize"
      @pagination = "$parent.M_Pagination"
      @filter = "$parent.M_Advance_Filter"
      @headTable = "$parent.M_Head_Table"
      @refreshColumn = "$parent.refreshColumn"
      @checkboxChecked = "$parent.checkboxChecked"
    />


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_columnno" v-model="M_GL_LedgerAnalysisColumnDetail.columnno"  ref="ref_columnno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnfieldcdChange" :prop="PI_fieldcd" :value="M_GL_LedgerAnalysisColumnDetail.fieldcd" :label="M_GL_LedgerAnalysisColumnDetail.fieldcdLabel" ref="ref_fieldcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_heading1" v-model="M_GL_LedgerAnalysisColumnDetail.heading1"  ref="ref_heading1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_heading2" v-model="M_GL_LedgerAnalysisColumnDetail.heading2"  ref="ref_heading2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_heading3" v-model="M_GL_LedgerAnalysisColumnDetail.heading3"  ref="ref_heading3"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_heading4" v-model="M_GL_LedgerAnalysisColumnDetail.heading4"  ref="ref_heading4"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnnormalsignChange" :prop="PI_normalsign" v-model="M_GL_LedgerAnalysisColumnDetail.normalsign"  ref="ref_normalsign" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Selection 1</label>
                                          </b-col>
                                          <b-col md="5" style="margin-left: 5px;">
                                            <ABSTextBoxOnly @input="Onselection1Change" :prop="PI_selection1" v-model="M_GL_LedgerAnalysisColumnDetail.selection1"  ref="ref_selection1"/>   
                                          </b-col>
                                          <b-col md="2">
                                            T0-T30, CC, D, C
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err1">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red">  Data not valid !  </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onfromselection1Change" :prop="PI_fromselection1" :value="M_GL_LedgerAnalysisColumnDetail.fromselection1" :label="M_GL_LedgerAnalysisColumnDetail.fromselection1Label" ref="ref_fromselection1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="Ontoselection1Change" :prop="PI_toselection1" :value="M_GL_LedgerAnalysisColumnDetail.toselection1" :label="M_GL_LedgerAnalysisColumnDetail.toselection1Label" ref="ref_toselection1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Selection 2</label>
                                          </b-col>
                                          <b-col md="5" style="margin-left: 5px;">
                                            <ABSTextBoxOnly @input="Onselection2Change" :prop="PI_selection2" v-model="M_GL_LedgerAnalysisColumnDetail.selection2"  ref="ref_selection2"/>
                                          </b-col>
                                          <b-col md="2">
                                            T0-T30, CC, D, C
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err2">
                                            <b-row v-show="err2">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red">  Data not valid !  </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onfromselection2Change" :prop="PI_fromselection2" :value="M_GL_LedgerAnalysisColumnDetail.fromselection2" :label="M_GL_LedgerAnalysisColumnDetail.fromselection2Label" ref="ref_fromselection2"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="Ontoselection2Change" :prop="PI_toselection2" :value="M_GL_LedgerAnalysisColumnDetail.toselection2" :label="M_GL_LedgerAnalysisColumnDetail.toselection2Label" ref="ref_toselection2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_LedgerAnalysisColumnDetail.remarks"  ref="ref_remarks" />
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "List",
            Module:"GL",
            error: false,
            err1: false,
            err2: false,
            propList: {
                initialWhere:"LedgerColumnCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},

            isValid: ['T0','T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12','T13','T14','T15','T16','T17','T18','T19','T20','T21','T22','T23','T24','T25','T26','T27','T28','T29','T30','CC','D','C'],
            isValidT: ['T0','T1','T2','T3','T4','T5','T6','T7','T8','T9','T10','T11','T12','T13','T14','T15','T16','T17','T18','T19','T20','T21','T22','T23','T24','T25','T26','T27','T28','T29','T30'],
            


            M_GL_LedgerAnalysisColumnDetail :{
                ledgercolumncd: '',
                columnno: '0',
                fieldcd: '',
                heading1: '',
                heading2: '',
                heading3: '',
                heading4: '',
                normalsign: 'D',
                selection1: '',
                fromselection1: '',
                toselection1: '',
                selection2: '',
                fromselection2: '',
                toselection2: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_columnno: { 
                cValidate :'required|max:9', 
                cName: 'columnno', 
                cLabel: 'Column No', 
                cLabelSize: 4, 
                cOrder: 101, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fieldcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLFieldName'    , 
                    ColumnDB: 'FieldCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'FieldCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'fieldcccd', 
                cLabel: 'Field Name ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 102, 
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
                cDisplayColumn: 'FieldCd,Descs' ,
            }, 
            PI_heading1: { 
                cValidate :'', 
                cName: 'heading1', 
                cLabel: 'Heading Title 1', 
                cLabelSize: 4, 
                cOrder: 103, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_heading2: { 
                cValidate :'', 
                cName: 'heading2', 
                cLabel: 'Heading Title 2  ', 
                cLabelSize: 4, 
                cOrder: 104, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_heading3: { 
                cValidate :'', 
                cName: 'heading3', 
                cLabel: 'Heading Title 3', 
                cLabelSize: 4, 
                cOrder: 105, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_heading4: { 
                cValidate :'', 
                cName: 'heading4', 
                cLabel: 'Heading Title 4', 
                cLabelSize: 4, 
                cOrder: 106, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_normalsign: { 
                cValidate :'', 
                cName: 'normalsigggn', 
                cId: 'rdbbbnormalsign', 
                cRadioOptions: [{ text: 'Debit', value: 'D' },{ text: 'Credit', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Normal Sign ', 
                cLabelSize: 4, 
                cDefault: 'D', 
                cOrder: 107, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_selection1: { 
                cValidate :'', 
                cName: 'selection1', 
                cLabel: 'Selection 1  ', 
                cLabelSize: 4, 
                cOrder: 108, 
                cLastLabel: 'T0-T30, CC, D, C',
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromselection1: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'fromselection1', 
                cLabel: 'From  ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 109, 
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
                cDisplayColumn: '' ,
            }, 
            PI_toselection1: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTransactionAnalysis'    , 
                    ColumnDB: 'TrxAnalysisCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TrxAnalysisCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'toselection1', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 110, 
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
                cDisplayColumn: 'TrxAnalysisCd,Descs' ,
            }, 
            PI_selection2: { 
                cValidate :'', 
                cName: 'selection2', 
                cLabel: 'Selection 2', 
                cLabelSize: 4, 
                cOrder: 111, 
                cKey: false, 
                cLastLabel: 'T0-T30, CC, D, C',
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromselection2: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTransactionAnalysis'    , 
                    ColumnDB: 'TrxAnalysisCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TrxAnalysisCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'fromselection2', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 112, 
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
                cDisplayColumn: 'TrxAnalysisCd,Descs' ,
            }, 
            PI_toselection2: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTransactionAnalysis'    , 
                    ColumnDB: 'TrxAnalysisCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TrxAnalysisCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'toselection2', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 113, 
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
                cDisplayColumn: 'TrxAnalysisCd,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder: 114, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
    },
	DataRow(){
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        OnfieldcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisColumnDetail.fieldcd = data.id
            this.M_GL_LedgerAnalysisColumnDetail.fieldcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fieldcd}
            }
        })
        this.$forceUpdate()
        },
        OnnormalsignChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{normalsign}
            }
        })
        this.$forceUpdate()
        },
        Onselection1Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data && data != ''){
                    if (this.isValid.indexOf(data.toUpperCase()) < 0) {
                        // disabled
                        this.PI_fromselection1.cProtect = true
                        this.PI_toselection1.cProtect = true
                        this.error = true
                        this.err1 = true
                    }
                    else {
                        // enabled lagi
                        this.PI_fromselection1.cProtect = false
                        this.PI_toselection1.cProtect = false
                        this.err1 = false
                        this.error = false
                     
                        if(this.isValidT.indexOf(data.toUpperCase()) > 0){
                            this.PI_fromselection1.dataLookUp.InitialWhere = "TrxAnalysisCategory ='"+data+"'"
                            this.PI_fromselection1.dataLookUp.LookUpCd = 'GetLookupGLTransactionAnalysis'
                            this.PI_fromselection1.dataLookUp.ColumnDB = 'TrxAnalysisCd'
                            this.PI_fromselection1.dataLookUp.DisplayLookup = 'TrxAnalysisCd,Descs'
                            this.PI_fromselection1.cDisplayColumn = 'TrxAnalysisCd,Descs'
                            
                            this.PI_toselection1.dataLookUp.InitialWhere = "TrxAnalysisCategory ='"+data+"'"
                            this.PI_toselection1.dataLookUp.LookUpCd = 'GetLookupGLTransactionAnalysis'
                            this.PI_toselection1.dataLookUp.ColumnDB = 'TrxAnalysisCd'
                            this.PI_toselection1.dataLookUp.DisplayLookup = 'TrxAnalysisCd,Descs'
                            this.PI_toselection1.cDisplayColumn = 'TrxAnalysisCd,Descs'

                        }else {
                            this.PI_fromselection1.dataLookUp.InitialWhere = ""
                            this.PI_fromselection1.dataLookUp.LookUpCd = 'GetLookupCMCurrency'
                            this.PI_fromselection1.dataLookUp.ColumnDB = 'CurrencyCd'
                            this.PI_fromselection1.dataLookUp.DisplayLookup = 'CurrencyCd,Descs'
                            this.PI_fromselection1.cDisplayColumn = 'CurrencyCd,Descs'
                            
                            this.PI_toselection1.dataLookUp.InitialWhere = ""
                            this.PI_toselection1.dataLookUp.LookUpCd = 'GetLookupCMCurrency'
                            this.PI_toselection1.dataLookUp.ColumnDB = 'CurrencyCd'
                            this.PI_toselection1.dataLookUp.DisplayLookup = 'CurrencyCd,Descs'
                            this.PI_toselection1.cDisplayColumn = 'CurrencyCd,Descs'
                        }
                    }    
                }else{
                    this.err1 = false
                    this.error = false
                    this.PI_fromselection1.cProtect = true
                    this.PI_toselection1.cProtect = true
                }
                    // var letters = "T0, T1";
                    // if(data.includes(letters))
                    // {
                    //     return true;    
                    // }
                    // else
                    // {
                    //     alert("message");
                    // // return false;
                    // }
                }
            })
            this.$forceUpdate()
        },
        Onfromselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisColumnDetail.fromselection1 = data.id
            this.M_GL_LedgerAnalysisColumnDetail.fromselection1Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection1}
            }
        })
        this.$forceUpdate()
        },
        Onselection2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data && data != ''){
                    if (this.isValid.indexOf(data.toUpperCase()) < 0) {
                        // disabled
                        this.PI_fromselection2.cProtect = true
                        this.PI_toselection2.cProtect = true
                        this.error = true
                        this.err2 = true
                    }
                    else {
                        // enabled lagi
                        this.PI_fromselection2.cProtect = false
                        this.PI_toselection2.cProtect = false
                        this.err2 = false
                        this.error = false
                    }    
                }else{
                    this.err2 = false
                    this.error = false
                    this.PI_fromselection2.cProtect = true
                    this.PI_toselection2.cProtect = true
                }
                
                this.PI_fromselection2.dataLookUp.InitialWhere = "TrxAnalysisCategory ='"+data+"'"
                this.PI_toselection2.dataLookUp.InitialWhere = "TrxAnalysisCategory ='"+data+"'"
            }
        })
        this.$forceUpdate()
        },
        Ontoselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisColumnDetail.toselection1 = data.id
            this.M_GL_LedgerAnalysisColumnDetail.toselection1Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection1}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisColumnDetail.fromselection2 = data.id
            this.M_GL_LedgerAnalysisColumnDetail.fromselection2Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection2}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisColumnDetail.toselection2 = data.id
            this.M_GL_LedgerAnalysisColumnDetail.toselection2Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection2}
            }
        })
        this.$forceUpdate()
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
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
		},		
		doDoubleClick(){
        },
		rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_GL_LedgerAnalysisColumnDetail.ledgercolumncd = data.LedgerColumnCd 
            this.propList.initialWhere =" LedgerColumnCd = '" + data.LedgerColumnCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {
            if (this.M_GL_LedgerAnalysisColumnDetail.selection1 != this.isValid.indexOf(data.toUpperCase())){
                this.error = true
                this.err1 = true
                return
            }else{
                this.error = false
                this.err1 = false
            }

            if (this.M_GL_LedgerAnalysisColumnDetail.selection2 != this.isValid.indexOf(data.toUpperCase())){
                this.error = true
                this.err2 = true
                return
            }else{
                this.error = false
                this.err2 = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                LedgerColumnCd: this.M_GL_LedgerAnalysisColumnDetail.ledgercolumncd,
                ColumnNo: this.M_GL_LedgerAnalysisColumnDetail.columnno,
                FieldCd: this.M_GL_LedgerAnalysisColumnDetail.fieldcd == '' || this.M_GL_LedgerAnalysisColumnDetail.fieldcd == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.fieldcd ,
                Heading1: this.M_GL_LedgerAnalysisColumnDetail.heading1,
                Heading2: this.M_GL_LedgerAnalysisColumnDetail.heading2,
                Heading3: this.M_GL_LedgerAnalysisColumnDetail.heading3,
                Heading4: this.M_GL_LedgerAnalysisColumnDetail.heading4,
                NormalSign: this.M_GL_LedgerAnalysisColumnDetail.normalsign,
                Selection1: this.M_GL_LedgerAnalysisColumnDetail.selection1,
                FromSelection1: this.M_GL_LedgerAnalysisColumnDetail.fromselection1 == '' || this.M_GL_LedgerAnalysisColumnDetail.fromselection1 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.fromselection1 ,
                ToSelection1: this.M_GL_LedgerAnalysisColumnDetail.toselection1 == '' || this.M_GL_LedgerAnalysisColumnDetail.toselection1 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.toselection1 ,
                Selection2: this.M_GL_LedgerAnalysisColumnDetail.selection2,
                FromSelection2: this.M_GL_LedgerAnalysisColumnDetail.fromselection2 == '' || this.M_GL_LedgerAnalysisColumnDetail.fromselection2 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.fromselection2 ,
                ToSelection2: this.M_GL_LedgerAnalysisColumnDetail.toselection2 == '' || this.M_GL_LedgerAnalysisColumnDetail.toselection2 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.toselection2 ,
                Remarks: this.M_GL_LedgerAnalysisColumnDetail.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })


        },
        M_Update() {
            if (this.M_GL_LedgerAnalysisColumnDetail.selection1 != this.isValid.indexOf(data.toUpperCase())){
                this.error = true
                this.err1 = true
                return
            }else{
                this.error = false
                this.err1 = false
            }
            
            if (this.M_GL_LedgerAnalysisColumnDetail.selection2 != this.isValid.indexOf(data.toUpperCase())){
                this.error = true
                this.err2 = true
                return
            }else{
                this.error = false
                this.err2 = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                LedgerColumnCd: this.M_GL_LedgerAnalysisColumnDetail.ledgercolumncd,
                ColumnNo: this.M_GL_LedgerAnalysisColumnDetail.columnno,
                FieldCd: this.M_GL_LedgerAnalysisColumnDetail.fieldcd == '' || this.M_GL_LedgerAnalysisColumnDetail.fieldcd == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.fieldcd ,
                Heading1: this.M_GL_LedgerAnalysisColumnDetail.heading1,
                Heading2: this.M_GL_LedgerAnalysisColumnDetail.heading2,
                Heading3: this.M_GL_LedgerAnalysisColumnDetail.heading3,
                Heading4: this.M_GL_LedgerAnalysisColumnDetail.heading4,
                NormalSign: this.M_GL_LedgerAnalysisColumnDetail.normalsign,
                Selection1: this.M_GL_LedgerAnalysisColumnDetail.selection1,
                FromSelection1: this.M_GL_LedgerAnalysisColumnDetail.fromselection1 == '' || this.M_GL_LedgerAnalysisColumnDetail.fromselection1 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.fromselection1 ,
                ToSelection1: this.M_GL_LedgerAnalysisColumnDetail.toselection1 == '' || this.M_GL_LedgerAnalysisColumnDetail.toselection1 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.toselection1 ,
                Selection2: this.M_GL_LedgerAnalysisColumnDetail.selection2,
                FromSelection2: this.M_GL_LedgerAnalysisColumnDetail.fromselection2 == '' || this.M_GL_LedgerAnalysisColumnDetail.fromselection2 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.fromselection2 ,
                ToSelection2: this.M_GL_LedgerAnalysisColumnDetail.toselection2 == '' || this.M_GL_LedgerAnalysisColumnDetail.toselection2 == null ? '' : this.M_GL_LedgerAnalysisColumnDetail.toselection2 ,
                Remarks: this.M_GL_LedgerAnalysisColumnDetail.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_LedgerAnalysisColumnDetail.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })


        },
		M_ClearForm(){
			this.$nextTick(() => {
            this.M_GL_LedgerAnalysisColumnDetail = {
                ledgercolumncd: '',
                columnno: '',
                fieldcd: '',
                heading1: '',
                heading2: '',
                heading3: '',
                heading4: '',
                normalsign: 'D',
                selection1: '',
                fromselection1: '',
                toselection1: '',
                selection2: '',
                fromselection2: '',
                toselection2: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            	
		   })
		   this.$forceUpdate()
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_LedgerAnalysisColumnDetail.ledgercolumncd = data.LedgerColumnCd 

            this.$refs.ref_columnno.focus()

        },
        M_Edit(){
            this.$refs.ref_fieldcd.focus()
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    LedgerColumnCd: value.LedgerColumnCd,
                    ColumnNo: value.ColumnNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: ""

                })
			})
			
			var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataDelete
            }
            
            this.postJSONMulti( this.getUrlNewDeleteMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                ledgercolumncd: record.LedgerColumnCd,
                columnno: record.ColumnNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_GL_LedgerAnalysisColumnDetail = {
                ledgercolumncd: data.ledgercolumncd,
                columnno: this.isCurrency(data.columnno, this.decimal),
                fieldcd: data.fieldcd,
                heading1: data.heading1,
                heading2: data.heading2,
                heading3: data.heading3,
                heading4: data.heading4,
                normalsign: data.normalsign,
                selection1: data.selection1,
                fromselection1: data.fromselection1,
                toselection1: data.toselection1,
                selection2: data.selection2,
                fromselection2: data.fromselection2,
                toselection2: data.toselection2,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_LedgerAnalysisColumnDetail.fieldcdLabel = this.M_GL_LedgerAnalysisColumnDetail.fieldcd != null && this.M_GL_LedgerAnalysisColumnDetail.fieldcd != '' ? data.fieldcd + this.separator  :'' 
                this.M_GL_LedgerAnalysisColumnDetail.fromselection1Label = this.M_GL_LedgerAnalysisColumnDetail.fromselection1 != null && this.M_GL_LedgerAnalysisColumnDetail.fromselection1 != '' ? data.fromselection1 + this.separator  :'' 
                this.M_GL_LedgerAnalysisColumnDetail.toselection1Label = this.M_GL_LedgerAnalysisColumnDetail.toselection1 != null && this.M_GL_LedgerAnalysisColumnDetail.toselection1 != '' ? data.toselection1 + this.separator  :'' 
                this.M_GL_LedgerAnalysisColumnDetail.fromselection2Label = this.M_GL_LedgerAnalysisColumnDetail.fromselection2 != null && this.M_GL_LedgerAnalysisColumnDetail.fromselection2 != '' ? data.fromselection2 + this.separator  :'' 
                this.M_GL_LedgerAnalysisColumnDetail.toselection2Label = this.M_GL_LedgerAnalysisColumnDetail.toselection2 != null && this.M_GL_LedgerAnalysisColumnDetail.toselection2 != '' ? data.toselection2 + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
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

