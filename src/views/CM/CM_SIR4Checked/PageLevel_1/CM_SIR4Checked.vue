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
                                        <ABSCompute :prop="PI_subportfoliocd" v-model="M_CM_SIR4Checked.subportfoliocd"  ref="ref_subportfoliocd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_sirno" v-model="M_CM_SIR4Checked.sirno"  ref="ref_sirno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnsirdateChange" :prop="PI_sirdate" v-model="M_CM_SIR4Checked.sirdate"  ref="ref_sirdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_requestname" v-model="M_CM_SIR4Checked.requestname"  ref="ref_requestname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_CM_SIR4Checked.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsirtypeChange" :prop="PI_sirtype" v-model="M_CM_SIR4Checked.sirtype"  ref="ref_sirtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnmodulecdChange" :prop="PI_modulecd" :value="M_CM_SIR4Checked.modulecd" :label="M_CM_SIR4Checked.modulecdLabel" ref="ref_modulecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnformcdChange" :prop="PI_formcd" :value="M_CM_SIR4Checked.formcd" :label="M_CM_SIR4Checked.formcdLabel" ref="ref_formcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncategoryChange" :prop="PI_category" v-model="M_CM_SIR4Checked.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OndescsChange" :prop="PI_descs" v-model="M_CM_SIR4Checked.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnreasonChange" :prop="PI_reason" v-model="M_CM_SIR4Checked.reason"  ref="ref_reason" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsirstatusChange" :prop="PI_sirstatus" v-model="M_CM_SIR4Checked.sirstatus"  ref="ref_sirstatus" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncompleteddateChange" :prop="PI_completeddate" v-model="M_CM_SIR4Checked.completeddate"  ref="ref_completeddate" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputDateVuex @input="OncompleteddateChange" :prop="PI_authorizeddate" v-model="M_CM_SIR4Checked.authorizeddate"  ref="ref_authorizeddate" /> -->
                                        <ABSinputDateVuex @input="OncheckdateChange" :prop="PI_checkdate" v-model="M_CM_SIR4Checked.checkdate"  ref="ref_checkdate" />
                                        
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_CM_SIR4Checked.reasoncd" :label="M_CM_SIR4Checked.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_CM_SIR4Checked.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_remarks" v-model="M_CM_SIR4Checked.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex  :prop="PI_expecteddate" v-model="M_CM_SIR4Checked.expecteddate"  ref="ref_expecteddate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnassigntoChange" :prop="PI_assignto" :value="M_CM_SIR4Checked.assignto"  :label="M_CM_SIR4Checked.assigntoLabel" ref="ref_assignto" />
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
		FormType: "List",
		Module:"CM",
            propList: {
                initialWhere: "SIRstatus = 'C'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_SIR4Checked :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                sirno: '',
                sirdate: '',
                sirtype: 'F',
                referenceno: '',
                requestid: '',
                requestname: '',
                modulecd: '',
                formcd: '',
                descs: '',
                category: 'N',
                expecteddate: '',
                reason: '',
                approvedby: '',
                approveddate: '',
                checkby: '',
                checkdate: '',
                descriptionchecker: '',
                authorizedby: '',
                authorizeddate: '',
                completedby: '',
                completeddate: '',
                doneby: '',
                donedate: '',
                acceptedby: '',
                accepteddate: '',
                testedby: '',
                testeddate: '',
                assignto: '',
                canceldate: '',
                mandays: 0,
                reasoncd: '',
                reasondescs: '',
                remarks: '',
                sirstatus: 'C',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_subportfoliocd: { 
                cLabel: 'SubPortfolio Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_sirno: { 
                cLabel: 'SIR No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_sirdate: {
                cValidate :'', 
                cName: 'sirdate', 
                cLabel: 'SIR Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_requestid: { 
                cLabel: 'Request By', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sirtype: { 
                cValidate :'', 
                cName: 'sirtype', 
                cId: 'rdbsirtype', 
                cRadioOptions: [{ text: 'Form', value: 'F' },{ text: 'Process', value: 'P' },{ text: 'Report', value: 'R' },{ text: 'Data Correction', value: 'B' },{ text: 'Other', value: 'O' },], 
                cRadioDefaultOption: 'F', 
                cLabel:'Type', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            }, 
            PI_modulecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSModule'    , 
                    ColumnDB: 'ModuleCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'modulecd', 
                cLabel: 'Module Code', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'ModuleCd,Descs' ,
            }, 
            PI_formcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSPageCode'    , 
                    ColumnDB: 'FormCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'formcd', 
                cLabel: 'Form Code', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_category: { 
                cValidate :'', 
                cName: 'category', 
                cId: 'rdbcategory', 
                cRadioOptions: [{ text: 'New', value: 'N' },{ text: 'Existing', value: 'E' },{ text: 'Bug', value: 'B' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Category', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:7, 
                cKey: true, 
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
            PI_reason: { 
                cValidate :'', 
                cName:'reason', 
                cLabel:'Reason', 
                cLabelSize: 4, 
                cOrder:8, 
                cKey: true, 
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
            PI_sirstatus: { 
                cValidate :'', 
                cName: 'sirstatus', 
                cId: 'rdbsirstatus', 
                cRadioOptions: [{ text: 'Checked', value: 'C' }, { text: 'Authorized', value: 'U' }, { text: 'Cancel', value: 'X' }], 
                cRadioDefaultOption: 'C', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            // PI_completeddate: {
            //     cValidate :'required', 
            //     cName: 'completeddate', 
            //     cLabel: 'Program Done Date', 
            //     cLabelSize: 4, 
            //     cOrder: 14, 
            //     cKey: true, 
            //     cVisible:  true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            // },
            PI_checkdate: {
                cValidate :'', 
                cName: 'checkdate', 
                cLabel: 'Checked Date', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSSIRReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: true, 
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
                cMasterUrl: 'CM/CM_SIRReason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:13, 
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
            PI_expecteddate: { 
                cValidate :'', 
                cName: 'expecteddate', 
                cLabel: 'Expected Date', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assignto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSSIRProgrammer'    , 
                    ColumnDB: 'ProgrammerID'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'assignto', 
                cLabel: 'Assigned To',
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
                cMasterUrl: 'CM/CM_Programmer' ,
                cDisplayColumn: 'ProgrammerID,Name' ,
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OnsirtypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{sirtype}
            }
        })
        this.$forceUpdate()
        },
        OnmodulecdChange (data) {
        if (this.M_CM_SIR4Checked.modulecd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SIR4Checked.modulecd = data.id
            this.M_CM_SIR4Checked.modulecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{modulecd}
            }
        })
        this.$forceUpdate()
        },
        OnformcdChange (data) {
        if (this.M_CM_SIR4Checked.formcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SIR4Checked.formcd = data.id
            this.M_CM_SIR4Checked.formcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{formcd}
            }
        })
        this.$forceUpdate()
        },
        OncategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{category}
            }
        })
        this.$forceUpdate()
        },
        OndescsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{descs}
            }
        })
        this.$forceUpdate()
        },
        OnreasonChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{reason}
            }
        })
        this.$forceUpdate()
        },
        OnsirstatusChange (data) {
        this.$nextTick(() => {
            if (data == "C")
             { this.M_CM_SIR4Checked.authorizedby = ""
             this.M_CM_SIR4Checked.authorizeddate = null
             this.M_CM_SIR4Checked.canceldate = null
             this.M_CM_SIR4Checked.reasoncd = ""
             this.M_CM_SIR4Checked.reasondescs = ""
             this.PI_reasoncd.cProtect = true
             this.PI_reasondescs.cProtect = true
             this.M_CM_SIR4Checked.expecteddate = null
             this.M_CM_SIR4Checked.assignto = ""
             this.PI_expecteddate.cProtect = false
             this.PI_assignto.cProtect = false }
        if (data == "U")
             { this.M_CM_SIR4Checked.authorizedby = this.getDataUser().UserId
             this.M_CM_SIR4Checked.authorizeddate = this.getToday()
             this.M_CM_SIR4Checked.canceldate = null
             this.M_CM_SIR4Checked.reasoncd = ""
             this.M_CM_SIR4Checked.reasondescs = ""
             this.PI_reasoncd.cProtect = true
             this.PI_reasondescs.cProtect = true
             this.M_CM_SIR4Checked.expecteddate = null
             this.M_CM_SIR4Checked.assignto = ""
             this.PI_expecteddate.cProtect = false
             this.PI_assignto.cProtect = false }
        if (data == "X")
             { this.M_CM_SIR4Checked.authorizedby = ""
             this.M_CM_SIR4Checked.authorizeddate = null
             this.M_CM_SIR4Checked.canceldate = this.getToday()
             this.M_CM_SIR4Checked.reasoncd = ""
             this.M_CM_SIR4Checked.reasondescs = ""
             this.PI_reasoncd.cProtect = false
             this.PI_reasoncd.cKey = false
             this.PI_reasondescs.cProtect = false
             this.PI_reasondescs.cKey = false
             this.PI_reasoncd.cValidate = 'required'
             this.PI_reasondescs.cValidate = 'required'
             this.M_CM_SIR4Checked.expecteddate = null
             this.M_CM_SIR4Checked.assignto = ""
             this.PI_expecteddate.cProtect = true
             this.PI_assignto.cProtect = true }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        if (this.M_CM_SIR4Checked.reasoncd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SIR4Checked.reasoncd = data.id
            this.M_CM_SIR4Checked.reasoncdLabel = data.label
            this.M_CM_SIR4Checked.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
            }
        })
        this.$forceUpdate()
        },
        OnassigntoChange(data) {
          console.log(data)
        if (this.M_CM_SIR4Checked.assignto == data.id) return
        this.$nextTick(() => {
            this.M_CM_SIR4Checked.assignto = data.id
            this.M_CM_SIR4Checked.assigntoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{reasoncd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
        },		
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
        
            if (this.M_CM_SIR4Checked.sirstatus == "C")
             { this.M_CM_SIR4Checked.authorizedby = ""
             this.M_CM_SIR4Checked.authorizeddate = null
             this.M_CM_SIR4Checked.canceldate = null
             this.M_CM_SIR4Checked.reasoncd = ""
             this.M_CM_SIR4Checked.reasondescs = ""
             this.PI_reasoncd.cProtect = false
             this.PI_reasondescs.cProtect = false
             this.M_CM_SIR4Checked.expecteddate = null
             this.M_CM_SIR4Checked.assignto = ""
             this.PI_expecteddate.cProtect = false
             this.PI_assignto.cProtect = false }
        if (this.M_CM_SIR4Checked.sirstatus == "U")
             { this.M_CM_SIR4Checked.authorizedby = this.getDataUser().UserId
             this.M_CM_SIR4Checked.authorizeddate = this.getToday()
             this.M_CM_SIR4Checked.canceldate = null
             this.M_CM_SIR4Checked.reasoncd = ""
             this.M_CM_SIR4Checked.reasondescs = ""
             this.PI_reasoncd.cProtect = false
             this.PI_reasondescs.cProtect = false
             this.M_CM_SIR4Checked.expecteddate = null
             this.M_CM_SIR4Checked.assignto = ""
             this.PI_expecteddate.cProtect = false
             this.PI_assignto.cProtect = false }
        if (this.M_CM_SIR4Checked.sirstatus == "X")
             { this.M_CM_SIR4Checked.authorizedby = ""
             this.M_CM_SIR4Checked.authorizeddate = null
             this.M_CM_SIR4Checked.canceldate = this.getToday()
            //  this.M_CM_SIR4Checked.reasoncd = ""
            //  this.M_CM_SIR4Checked.reasondescs = ""
             this.PI_reasoncd.cProtect = true
             this.PI_reasondescs.cProtect = true
             this.M_CM_SIR4Checked.expecteddate = null
             this.M_CM_SIR4Checked.assignto = ""
             this.PI_expecteddate.cProtect = true
             this.PI_assignto.cProtect = true }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SIRNo: this.M_CM_SIR4Checked.sirno,
                SIRType: this.M_CM_SIR4Checked.sirtype,
                ReferenceNo: this.M_CM_SIR4Checked.referenceno,
                RequestName: this.M_CM_SIR4Checked.requestname,
                ModuleCd: this.M_CM_SIR4Checked.modulecd == '' || this.M_CM_SIR4Checked.modulecd == null ? 'NULL' : this.M_CM_SIR4Checked.modulecd ,
                FormCd: this.M_CM_SIR4Checked.formcd == '' || this.M_CM_SIR4Checked.formcd == null ? 'NULL' : this.M_CM_SIR4Checked.formcd ,
                Descs: this.M_CM_SIR4Checked.descs,
                Category: this.M_CM_SIR4Checked.category,
                ExpectedDate: this.M_CM_SIR4Checked.expecteddate,
                Reason: this.M_CM_SIR4Checked.reason,
                ApprovedBy: this.M_CM_SIR4Checked.approvedby,
                ApprovedDate: this.M_CM_SIR4Checked.approveddate,
                CheckBy: this.M_CM_SIR4Checked.checkby,
                CheckDate: this.M_CM_SIR4Checked.checkdate,
                DescriptionChecker: this.M_CM_SIR4Checked.descriptionchecker,
                AuthorizedBy: this.M_CM_SIR4Checked.authorizedby,
                AuthorizedDate: this.M_CM_SIR4Checked.authorizeddate,
                CompletedBy: this.M_CM_SIR4Checked.completedby,
                CompletedDate: this.M_CM_SIR4Checked.completeddate,
                DoneBy: this.getDataUser().UserId,
                DoneDate: this.M_CM_SIR4Checked.donedate,
                AcceptedBy: this.M_CM_SIR4Checked.acceptedby,
                AcceptedDate: this.M_CM_SIR4Checked.accepteddate,
                TestedBy: this.M_CM_SIR4Checked.testedby,
                TestedDate: this.M_CM_SIR4Checked.testeddate,
                AssignTo: this.M_CM_SIR4Checked.assignto == '' || this.M_CM_SIR4Checked.assignto == null ? 'NULL' : this.M_CM_SIR4Checked.assignto ,
                CancelDate: this.M_CM_SIR4Checked.canceldate,
                Mandays: this.M_CM_SIR4Checked.mandays,
                ReasonCd: this.M_CM_SIR4Checked.reasoncd,
                ReasonDescs: this.M_CM_SIR4Checked.reasondescs,
                Remarks: this.M_CM_SIR4Checked.remarks,
                SIRStatus: this.M_CM_SIR4Checked.sirstatus,
                UserEdit: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })


        },
		M_ClearForm(){
            this.M_CM_SIR4Checked = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                sirno: '',
                sirdate: '',
                sirtype: 'F',
                referenceno: '',
                requestid: '',
                requestname: '',
                modulecd: '',
                formcd: '',
                descs: '',
                category: 'N',
                expecteddate: '',
                reason: '',
                approvedby: '',
                approveddate: '',
                checkby: '',
                checkdate: '',
                descriptionchecker: '',
                authorizedby: '',
                authorizeddate: '',
                completedby: '',
                completeddate: '',
                doneby: '',
                donedate: '',
                acceptedby: '',
                accepteddate: '',
                testedby: '',
                testeddate: '',
                assignto: '',
                canceldate: '',
                mandays: 0,
                reasoncd: '',
                reasondescs: '',
                remarks: '',
                sirstatus: 'C',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
          this.$refs.ref_sirdate.focus()
        },
        M_Edit(){
          this.$refs.ref_remarks.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
			      var dataDelete = []

			
            data.forEach((value) => {
              dataDelete.push({
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
,                sirno: record.SIRNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
this.M_CM_SIR4Checked = {
                subportfoliocd: data.subportfoliocd,
                sirno: data.sirno,
                sirdate: data.sirdate,
                sirtype: data.sirtype,
                referenceno: data.referenceno,
                requestid: data.requestid,
                requestname: data.requestname,
                modulecd: data.modulecd,
                formcd: data.formcd,
                descs: data.descs,
                category: data.category,
                expecteddate: data.expecteddate,
                reason: data.reason,
                approvedby: data.approvedby,
                approveddate: data.approveddate,
                checkby: data.checkby,
                checkdate: data.checkdate,
                descriptionchecker: data.descriptionchecker,
                authorizedby: data.authorizedby,
                authorizeddate: data.authorizeddate,
                completedby: data.completedby,
                completeddate: data.completeddate,
                doneby: data.doneby,
                donedate: data.donedate,
                acceptedby: data.acceptedby,
                accepteddate: data.accepteddate,
                testedby: data.testedby,
                testeddate: data.testeddate,
                assignto: data.assignto,
                canceldate: data.canceldate,
                mandays: data.mandays,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                remarks: data.remarks,
                sirstatus: data.sirstatus,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                
                this.M_CM_SIR4Checked.modulecdLabel = this.M_CM_SIR4Checked.modulecd != null && this.M_CM_SIR4Checked.modulecd != '' ? data.modulecd :'' 
                this.M_CM_SIR4Checked.formcdLabel = this.M_CM_SIR4Checked.formcd != null && this.M_CM_SIR4Checked.formcd != '' ? data.formcd :''
                this.M_CM_SIR4Checked.reasoncdLabel = this.M_CM_SIR4Checked.reasoncd != null ? data.reasoncd + this.separator + data.reasondescs  :'' 
                this.M_CM_SIR4Checked.assigntoLabel = this.M_CM_SIR4Checked.assignto != null ? data.assignto + this.separator + data.reasondescs  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')

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

