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
                                        <ABSCompute :prop="PI_subportfoliocd" v-model="M_CM_SIR6ProgramDone.subportfoliocd"  ref="ref_subportfoliocd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_sirno" v-model="M_CM_SIR6ProgramDone.sirno"  ref="ref_sirno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnsirdateChange" :prop="PI_sirdate" v-model="M_CM_SIR6ProgramDone.sirdate"  ref="ref_sirdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_requestid" v-model="M_CM_SIR6ProgramDone.requestid"  ref="ref_requestid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_CM_SIR6ProgramDone.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsirtypeChange" :prop="PI_sirtype" v-model="M_CM_SIR6ProgramDone.sirtype"  ref="ref_sirtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnmodulecdChange" :prop="PI_modulecd" :value="M_CM_SIR6ProgramDone.modulecd" :label="M_CM_SIR6ProgramDone.modulecdLabel" ref="ref_modulecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnformcdChange" :prop="PI_formcd" :value="M_CM_SIR6ProgramDone.formcd" :label="M_CM_SIR6ProgramDone.formcdLabel" ref="ref_formcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncategoryChange" :prop="PI_category" v-model="M_CM_SIR6ProgramDone.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OndescsChange" :prop="PI_descs" v-model="M_CM_SIR6ProgramDone.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnreasonChange" :prop="PI_reason" v-model="M_CM_SIR6ProgramDone.reason"  ref="ref_reason" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsirstatusChange" :prop="PI_sirstatus" v-model="M_CM_SIR6ProgramDone.sirstatus"  ref="ref_sirstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncompleteddateChange" :prop="PI_completeddate" v-model="M_CM_SIR6ProgramDone.completeddate"  ref="ref_completeddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnexpecteddateChange" :prop="PI_expecteddate" v-model="M_CM_SIR6ProgramDone.expecteddate"  ref="ref_expecteddate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_assignto" v-model="M_CM_SIR6ProgramDone.assignto"  ref="ref_assignto" />
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
                initialWhere: "SIRstatus = 'D'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_SIR6ProgramDone :{
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
                sirstatus: 'D',
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
                cRadioOptions: [{ text: 'Program Done', value: 'D' },{ text: 'Completed', value: 'L' },], 
                cRadioDefaultOption: 'L', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_completeddate: {
                cValidate :'', 
                cName: 'completeddate', 
                cLabel: 'Program Done Date', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_expecteddate: { 
                cValidate :'', 
                cName: 'expecteddate', 
                cLabel: 'Expected Date', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: true, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assignto: { 
                cLabel: 'Assigned To', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
          console.log(data)
        if (this.M_CM_SIR6ProgramDone.modulecd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SIR6ProgramDone.modulecd = data.id
            this.M_CM_SIR6ProgramDone.modulecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{modulecd}
            }
        })
        this.$forceUpdate()
        },
        OnformcdChange (data) {
        if (this.M_CM_SIR6ProgramDone.formcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SIR6ProgramDone.formcd = data.id
            this.M_CM_SIR6ProgramDone.formcdLabel = data.label
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
            if (this.inputStatus != "VIEW") {
              if (data == "D") { 
                this.M_CM_SIR6ProgramDone.completedby = ""
                this.M_CM_SIR6ProgramDone.completeddate = null 
             }
              if (data == "L") { 
                this.M_CM_SIR6ProgramDone.completedby = this.getDataUser().UserId
                this.M_CM_SIR6ProgramDone.completeddate = this.getToday() 
              }
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
            if (this.M_CM_SIR6ProgramDone.sirstatus == "D")
             { this.M_CM_SIR6ProgramDone.completedby = ""
             this.M_CM_SIR6ProgramDone.completeddate = null }
        if (this.M_CM_SIR6ProgramDone.sirstatus == "L")
             { this.M_CM_SIR6ProgramDone.completedby = this.getDataUser().UserId
             this.M_CM_SIR6ProgramDone.completeddate = this.getToday() }
        
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SIRNo: this.M_CM_SIR6ProgramDone.sirno,
                SIRType: this.M_CM_SIR6ProgramDone.sirtype,
                ReferenceNo: this.M_CM_SIR6ProgramDone.referenceno,
                RequestName: this.M_CM_SIR6ProgramDone.requestname,
                ModuleCd: this.M_CM_SIR6ProgramDone.modulecd == '' || this.M_CM_SIR6ProgramDone.modulecd == null ? 'NULL' : this.M_CM_SIR6ProgramDone.modulecd ,
                FormCd: this.M_CM_SIR6ProgramDone.formcd == '' || this.M_CM_SIR6ProgramDone.formcd == null ? 'NULL' : this.M_CM_SIR6ProgramDone.formcd ,
                Descs: this.M_CM_SIR6ProgramDone.descs,
                Category: this.M_CM_SIR6ProgramDone.category,
                ExpectedDate: this.M_CM_SIR6ProgramDone.expecteddate,
                Reason: this.M_CM_SIR6ProgramDone.reason,
                ApprovedBy: this.M_CM_SIR6ProgramDone.approvedby,
                ApprovedDate: this.M_CM_SIR6ProgramDone.approveddate,
                CheckBy: this.M_CM_SIR6ProgramDone.checkby,
                CheckDate: this.M_CM_SIR6ProgramDone.checkdate,
                DescriptionChecker: this.M_CM_SIR6ProgramDone.descriptionchecker,
                AuthorizedBy: this.M_CM_SIR6ProgramDone.authorizedby,
                AuthorizedDate: this.M_CM_SIR6ProgramDone.authorizeddate,
                CompletedBy: this.M_CM_SIR6ProgramDone.completedby,
                CompletedDate: this.M_CM_SIR6ProgramDone.completeddate,
                DoneBy: this.M_CM_SIR6ProgramDone.doneby,
                DoneDate: this.M_CM_SIR6ProgramDone.donedate,
                AcceptedBy: this.getDataUser().UserId,
                AcceptedDate: this.M_CM_SIR6ProgramDone.accepteddate,
                TestedBy: this.M_CM_SIR6ProgramDone.testedby,
                TestedDate: this.M_CM_SIR6ProgramDone.testeddate,
                AssignTo: this.M_CM_SIR6ProgramDone.assignto,
                CancelDate: this.M_CM_SIR6ProgramDone.canceldate,
                Mandays: this.M_CM_SIR6ProgramDone.mandays,
                ReasonCd: this.M_CM_SIR6ProgramDone.reasoncd,
                ReasonDescs: this.M_CM_SIR6ProgramDone.reasondescs,
                Remarks: this.M_CM_SIR6ProgramDone.remarks,
                SIRStatus: this.M_CM_SIR6ProgramDone.sirstatus,
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
            this.M_CM_SIR6ProgramDone = {
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
                sirstatus: 'D',
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
          this.$refs.ref_sirstatus.focus()
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
this.M_CM_SIR6ProgramDone = {
                subportfoliocd: data.subportfoliocd,
                sirno: data.sirno,
                sirdate: data.sirdate,
                sirtype: data.sirtype,
                referenceno: data.referenceno,
                requestid: data.requestid + ' | ' + data.requestname,
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
                completeddate: data.donedate,
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
                
                this.M_CM_SIR6ProgramDone.modulecdLabel = this.M_CM_SIR6ProgramDone.modulecd != null && this.M_CM_SIR6ProgramDone.modulecd != '' ? data.modulecd :'' 
                this.M_CM_SIR6ProgramDone.formcdLabel = this.M_CM_SIR6ProgramDone.formcd != null && this.M_CM_SIR6ProgramDone.formcd != '' ? data.formcd :'' 
         

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

