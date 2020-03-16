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
                                        <ABSCompute :prop="PI_stepno" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.stepno"  ref="ref_stepno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OncontractstatusChange" :prop="PI_contractstatus" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.contractstatus"  ref="ref_contractstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_descs" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.descs"  ref="ref_descs" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_applicationno" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.applicationno"  ref="ref_applicationno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_estimatedstartdate" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.estimatedstartdate"  ref="ref_estimatedstartdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loonodate" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.loonodate"  ref="ref_loonodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnprocessindicatorChange" :prop="PI_processindicator" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.processindicator"  ref="ref_processindicator" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loinodate" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.loinodate"  ref="ref_loinodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.status"  ref="ref_status" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_lanodate" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.lanodate"  ref="ref_lanodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnactualstartdateChange" :prop="PI_actualstartdate" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualstartdate"  ref="ref_actualstartdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_customername" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.customername"  ref="ref_customername" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnactualfinishdateChange" :prop="PI_actualfinishdate" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualfinishdate"  ref="ref_actualfinishdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_businessname" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.businessname"  ref="ref_businessname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_updatedescs" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.updatedescs"  ref="ref_updatedescs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_marketingname" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.marketingname"  ref="ref_marketingname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                         <ABSCompute :prop="PI_rcdred" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.rcdred"  ref="ref_rcdred" /> 
                                        <!-- <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.rcd" :valueTo="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" /> -->
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.remarks"  ref="ref_remarks" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_themeclasscat" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.themeclasscat"  ref="ref_themeclasscat" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6"></b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossseminetarea" v-model="M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.grossseminetarea"  ref="ref_grossseminetarea" />
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
			Module:"TN",
            propList: {
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LeaseProgressMonitoringByLOO_LeaseProgress :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                sequenceno: 0,
                stepno: 0,
                descs: '',
                estimatedstartdate: '',
                actualstartdate: '',
                actualfinishdate: '',
                leasingprogresssequencno: 0,
                updatedescs: '',
                referenceno: '',
                processtype: '',
                mandatory: '',
                parentleasingprogresssequenceno: 0,
                documentrequired: '',
                processindicator: '',
                updateuser: '',
                updatedate: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                applicationno: '',
                contractstatus: '',
                lastupdatestamp: 0,
                rowid: 0,
                loonodate: '',
                loinodate: '',
                lanodate: '',
                rcdred: '',
                marketingname: '',
                businessname: '',
                customername: '',
                themeclasscategory: '',
                grossseminetarea: '',
				rcd: '',
                red: ''
                    }
            ,
            PI_stepno: { 
                cLabel: 'Step No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_contractstatus: { 
                cValidate :'', 
                cName: 'contractstatus', 
                cId: 'rdbcontractstatus', 
                cRadioOptions: [{ text: 'LOO', value: '1' },{ text: 'LOO Confirmed', value: '2' },{ text: 'LOI Confirmed', value: '3' },{ text: 'LA Confirmed', value: '4' },{ text: 'Reservation', value: '5' }], 
                cRadioDefaultOption: '', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
				cKey: true				
            }, 
            PI_descs: { 
                cLabel: 'Step Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                cLabel: 'Application No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_estimatedstartdate: { 
                cValidate :'', 
                cName: 'estimatedstartdate', 
                cLabel: 'Estimated Start Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loonodate: { 
                cLabel: 'LOO No/Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_processindicator: { 
                cValidate :'', 
                cName: 'processindicator', 
                cId: 'rdbprocessindicator', 
                cRadioOptions: [{ text: 'None', value: '1' },{ text: 'Hand Over', value: '2' },{ text: 'FitOut Start', value: '3' },{ text: 'FitOut Finished', value: '4' },{ text: 'Opening', value: '5' }], 
                cRadioDefaultOption: '', 
                cLabel:'Process Indicator', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
				cKey: true
            }, 
            PI_loinodate: { 
                cLabel: 'LOI No/Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Pending', value: 'N' },{ text: 'Done', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
				cKey: true
            }, 
            PI_lanodate: { 
                cLabel: 'LA No/Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_actualstartdate: { 
                cValidate :'', 
                cName: 'actualstartdate', 
                cLabel: 'Actual Start Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customername: { 
                cLabel: 'Customer Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_actualfinishdate: { 
                cValidate :'', 
                cName: 'actualfinishdate', 
                cLabel: 'Completed Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_businessname: { 
                cLabel: 'Business Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },         
            PI_updatedescs: { 
                cValidate :'max:150', 
                cName:'updatedescs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder: 3, 
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
            PI_marketingname: { 
                cLabel: 'Marketing Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rcdred: { 
                cLabel: 'RCD-RED', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder: 5, 
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
            PI_themeclasscat: { 
                cLabel: 'Theme/Class/Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_grossseminetarea: { 
                cLabel: 'Gross/Semi/Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            // PI_rcd: { 
            //     cLabel: 'RCD - RED', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // },
            // PI_rcd: { 
            //     cValidate :'', 
            //     cName: 'rcd', 
            //     cLabel: 'RCD - RED', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: true, 
            //     cVisible:  true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 

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
  },
    methods: {
        OncontractstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{contractstatus}
            }
        })
        this.$forceUpdate()
        },
        OnprocessindicatorChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{processindicator}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
            }
        })
        this.$forceUpdate()
        },
        OnactualstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{actualstartdate}
            }
        })
        this.$forceUpdate()
        },
        OnactualfinishdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{actualfinishdate}
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
           this.getToolbar().statusFunction[0].disabled = true //matiin button new
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
            this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" ApplicationNo = '" + data.ApplicationNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
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
          console.log(this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.sequenceno,
                ApplicationNo: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.applicationno,
                Status: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.status,
                ActualStartDate: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualstartdate == '' || this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualstartdate == null ? 'NULL' : this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualstartdate ,
                ActualFinishDate: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualfinishdate == '' || this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualfinishdate == null ? 'NULL' : this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualfinishdate ,
                UpdateDescs: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.updatedescs,
                ReferenceNo: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.referenceno,
                Remarks: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                sequenceno: 0,
                stepno: 0,
                descs: '',
                estimatedstartdate: '',
                actualstartdate: '',
                actualfinishdate: '',
                leasingprogresssequencno: 0,
                updatedescs: '',
                referenceno: '',
                processtype: '',
                mandatory: '',
                parentleasingprogresssequenceno: 0,
                documentrequired: '',
                processindicator: '',
                updateuser: '',
                updatedate: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                applicationno: '',
                contractstatus: '',
                lastupdatestamp: 0,
                rowid: 0,
                loonodate: '',
                loinodate: '',
                lanodate: '',
                rcdred: '',
                marketingname: '',
                businessname: '',
                customername: '',
                themeclasscategory: '',
                grossseminetarea: '',
				rcd: '',
                red: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.applicationno = data.ApplicationNo 



        },
        M_Edit(){
			this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualstartdate = this.getToday() 
            this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.actualfinishdate = this.getToday()
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({


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

                this.$parent.resultPost()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                sequenceno: record.SequenceNo,
                stepno: record.StepNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
				console.log(data)
this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress = {
                subportfoliocd: data.subportfoliocd,
                sequenceno: data.sequenceno,
                stepno: data.stepno,
                descs: data.descs,
                estimatedstartdate: data.estimatedstartdate,
                actualstartdate: data.actualstartdate,
                actualfinishdate: data.actualfinishdate,
                leasingprogresssequencno: data.leasingprogresssequencno,
                updatedescs: data.updatedescs,
                referenceno: data.referenceno,
                processtype: data.processtype,
                mandatory: data.mandatory,
                parentleasingprogresssequenceno: data.parentleasingprogresssequenceno,
                documentrequired: data.documentrequired,
                processindicator: data.processindicator,
                updateuser: data.updateuser,
                updatedate: data.updatedate,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                applicationno: data.applicationno,
                contractstatus: data.contractstatus,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                loonodate: data.loonodate,
                loinodate: data.loinodate,
                lanodate: data.lanodate,
                rcdred: data.rcdred,
                marketingname: data.name,
                businessname: data.brandname,
                customername: data.name,                
                grossseminetarea: data.grossseminetarea,
				red: data.red,
				rcd: data.rcd
				
                    }

                    if(data.status == 'N'){
                  this.PI_status.cKey = false
                  this.PI_actualstartdate.cKey = false
                  this.PI_customername.cKey = false
                }
                else{
                  this.PI_status.cKey = true
                  this.PI_actualstartdate.cKey = true
                  this.PI_customername.cKey = true
                }

                 this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.loonodate = data.loono + ' / ' + this.momentDateFormatting(data.loodate, "DD/MM/YYYY")
                 this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.loinodate = data.loino != '' || data.loino != null ? data.loino : '' + ' / ' + data.loidate != '' || data.loidate != null ? this.momentDateFormatting(data.loidate, "DD/MM/YYYY") : ''
                 this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.lanodate = data.lano + ' / ' + this.momentDateFormatting(data.ladate, "DD/MM/YYYY HH:mm:ss")
                 this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.themeclasscat = data.themename + ' / ' + data.classname + ' / ' + data.catname
                 this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.grossseminetarea = this.isCurrency(data.grossarea, this.decimal) +' / '+this.isCurrency(data.semigrossarea, this.decimal)+' / '+this.isCurrency(data.netarea, this.decimal)
                 
                this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.rcdred = this.momentDateFormatting(data.red, "DD/MM/YYYY")+' - '+this.momentDateFormatting(data.rcd, "DD/MM/YYYY")
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_LeaseProgressMonitoringByLOO_LeaseProgress.red = data
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

