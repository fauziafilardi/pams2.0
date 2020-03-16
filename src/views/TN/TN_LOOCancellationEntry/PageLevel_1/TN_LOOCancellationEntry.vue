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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cancellationno" v-model="M_TN_LOOCancellationEntry.cancellationno"  ref="ref_cancellationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_marketingname" v-model="M_TN_LOOCancellationEntry.marketingname"  ref="ref_marketingname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncancellationdateChange" :prop="PI_cancellationdate" v-model="M_TN_LOOCancellationEntry.cancellationdate"  ref="ref_cancellationdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_customercat" v-model="M_TN_LOOCancellationEntry.customercat"  ref="ref_customercat" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_LOOCancellationEntry.applicationno" :label="M_TN_LOOCancellationEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loonodate" v-model="M_TN_LOOCancellationEntry.loonodate"  ref="ref_loonodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_LOOCancellationEntry.reasoncd" :label="M_TN_LOOCancellationEntry.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_rcdred" v-model="M_TN_LOOCancellationEntry.rcdred"  ref="ref_rcdred" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_LOOCancellationEntry.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_leasedperiod" v-model="M_TN_LOOCancellationEntry.leasedperiod"  ref="ref_leasedperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customername" v-model="M_TN_LOOCancellationEntry.customername"  ref="ref_customername" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_lotno" v-model="M_TN_LOOCancellationEntry.lotno"  ref="ref_lotno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_businessname" v-model="M_TN_LOOCancellationEntry.businessname"  ref="ref_businessname" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_contractamount" v-model="M_TN_LOOCancellationEntry.contractamount"  ref="ref_contractamount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOCancellationEntry.remarks"  ref="ref_remarks" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_tenantstatus" v-model="M_TN_LOOCancellationEntry.tenantstatus"  ref="ref_tenantstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_contractstatus" v-model="M_TN_LOOCancellationEntry.contractstatus"  ref="ref_contractstatus" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND [STATUS] = 'N' AND CustomerType = 'L' AND ContractStatus = '1'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LOOCancellationEntry :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                cancellationno: '',
                cancellationdate: this.M_FormatingDate(new Date()),
                reasoncd: '',
                reasondescs: '',
                cancelby: '',
                canceldate: '',
                status: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                orireasondesc: '',
                marketingname: '',
                customercat: '',
                loonodate: '',
                rcdred: '',
                customername: '',
                leasedperiod: '',
                lotno: '',
                contractamount: '',
                tenantstatus: '',
                contractstatus: '',
                businessname: ''
                    }
            ,
            PI_cancellationno: { 
                cValidate :'max:20', 
                cName: 'cancellationno', 
                cLabel: 'Cancellation No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_marketingname: { 
                cLabel: 'Marketing Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_cancellationdate: { 
                cValidate :'', 
                cName: 'cancellationdate', 
                cLabel: '	Cancellation Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customercat: { 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookup_ApplicationNo_Cancell'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "ContractStatus = '1' and CustomerType='L' AND Status = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo NOT IN (SELECT tcc.ApplicationNo FROM TN_ContractCancellation tcc WHERE tcc.SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "')", 
                    ParamWhere: ''  
                        }, 
                cValidate :'required',
                cName: 'applicationno',
                cLabel: 'Application No',
                cKey: false,
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: 'ApplicationNo,Name' ,
            }, 
            PI_loonodate: { 
                cLabel: 'LOO No-Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMReasonCd'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_rcdred: { 
                cLabel: 'RCD-RED', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:60', 
                cName: 'reasondescs', 
                cLabel: 'Description', 
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
            PI_leasedperiod: { 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customername: { 
                cLabel: 'Customer Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lotno: { 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_businessname: { 
                cLabel: 'Business Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_contractamount: { 
                cLabel: 'Contract Amount', 
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
            PI_tenantstatus: { 
                cLabel: 'Tenant Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_contractstatus: { 
                cLabel: 'Contract Status', 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      CekCancellationRunningCd(){
            var param = {
            OptionFunctionCd: "GetSpecification",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                if (ress.length < 1) return
                var data = ress[0]
                                
                if (data.CancellationRunningCd != null && data.CancellationRunningCd != "") {
                    // this.PI_cancellationdate.cProtect = true
                    // this.PI_cancellationdate.cancellationdate = "(auto)" 
                    this.PI_cancellationno.cProtect = true
                    this.M_TN_LOOCancellationEntry.cancellationno = "(auto)" 
                }else{
                    // this.PI_cancellationdate.cProtect = false
                    // this.PI_cancellationdate.cancellationdate = "" 
                    this.PI_cancellationno.cProtect = false
                    this.M_TN_LOOCancellationEntry.cancellationno = ""
                }
            })
        },		
        OncancellationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{cancellationdate}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCancellationEntry.applicationno = data.id
            this.M_TN_LOOCancellationEntry.applicationnoLabel = data.label                    
            if (this.inputStatus != "VIEW") {
                var param = {
                    OptionFunctionCd: "GetDataCancelltaion",
                    ModuleCd: this.Module,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: data.id
                }
              this.FnDynamicFunction(param)
              .then(ress => {
                if (ress == null) return
                if (ress.length < 1) return

                var data = ress[0]
                
 		        this.M_TN_LOOCancellationEntry.marketingname = data.MarketingName
                this.M_TN_LOOCancellationEntry.customercat = data.CustomerCategoryCd+' - '+data.CustomerCategoryDescs
                this.M_TN_LOOCancellationEntry.loonodate = data.LOONoDate
                this.M_TN_LOOCancellationEntry.rcdred = data.RCDRED
                this.M_TN_LOOCancellationEntry.customername = data.ContactName
                this.M_TN_LOOCancellationEntry.leasedperiod = data.LeasePeriod
                this.M_TN_LOOCancellationEntry.lotno = data.LotList
                this.M_TN_LOOCancellationEntry.contractamount = this.isCurrency(data.ContractAmt, this.decimal)
                this.M_TN_LOOCancellationEntry.tenantstatus = data.TenantStatus
                this.M_TN_LOOCancellationEntry.contractstatus = data.ContractStatus
                this.M_TN_LOOCancellationEntry.businessname = data.BrandName                
              })
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCancellationEntry.reasoncd = data.id
            this.M_TN_LOOCancellationEntry.reasoncdLabel = data.id
            if (this.inputStatus != "VIEW") {

            this.M_TN_LOOCancellationEntry.reasondescs = data.Descs
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
        },		
        M_Post(dt){
        },
        M_Insert() {
            if(this.M_TN_LOOCancellationEntry.cancellationno == "(auto)"){
              this.M_TN_LOOCancellationEntry.cancellationno = ""
            }else{
              this.M_TN_LOOCancellationEntry.cancellationno = this.M_TN_LOOCancellationEntry.cancellationno
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCancellationEntry.applicationno,
                CancellationNo: this.M_TN_LOOCancellationEntry.cancellationno,
                CancellationDate: this.M_TN_LOOCancellationEntry.cancellationdate == '' || this.M_TN_LOOCancellationEntry.cancellationdate == null ? 'NULL' : this.M_TN_LOOCancellationEntry.cancellationdate ,
                ReasonCd: this.M_TN_LOOCancellationEntry.reasoncd == '' || this.M_TN_LOOCancellationEntry.reasoncd == null ? 'NULL' : this.M_TN_LOOCancellationEntry.reasoncd ,
                ReasonDescs: this.M_TN_LOOCancellationEntry.reasondescs,
                CancelBy: this.getDataUser().UserId,
                CancelDate: this.M_FormatingDate(new Date()),
                Status: 'N',
                Remarks: this.M_TN_LOOCancellationEntry.remarks,
                UserInput: this.getDataUser().UserId ,
                LeasingOrCasualLeasing: 'L'                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCancellationEntry.applicationno,
                CancellationNo: this.M_TN_LOOCancellationEntry.cancellationno,
                CancellationDate: this.M_TN_LOOCancellationEntry.cancellationdate == '' || this.M_TN_LOOCancellationEntry.cancellationdate == null ? 'NULL' : this.M_TN_LOOCancellationEntry.cancellationdate ,
                ReasonCd: this.M_TN_LOOCancellationEntry.reasoncd == '' || this.M_TN_LOOCancellationEntry.reasoncd == null ? 'NULL' : this.M_TN_LOOCancellationEntry.reasoncd ,
                ReasonDescs: this.M_TN_LOOCancellationEntry.reasondescs,
                CancelBy: this.getDataUser().UserId,
                CancelDate: this.M_TN_LOOCancellationEntry.canceldate,
                Status: this.M_TN_LOOCancellationEntry.status,
                Remarks: this.M_TN_LOOCancellationEntry.remarks,
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
            this.M_TN_LOOCancellationEntry = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                cancellationno: '',
                cancellationdate: this.M_FormatingDate(new Date()),
                reasoncd: '',
                reasondescs: '',
                cancelby: '',
                canceldate: '',
                status: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                orireasondesc: '',
                marketingname: '',
                customercat: '',
                loonodate: '',
                rcdred: '',
                customername: '',
                leasedperiod: '',
                lotno: '',
                contractamount: '',
                tenantstatus: '',
                contractstatus: '',
                businessname: ''
                    }
            		
		},
        M_New(){
          this.CekCancellationRunningCd()
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: value.ApplicationNo,
                    CancellationNo: value.CancellationNo,
                    _Message_:''


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
                cancellationno: record.CancellationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_LOOCancellationEntry = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                cancellationno: data.cancellationno,
                cancellationdate: data.cancellationdate,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                cancelby: data.cancelby,
                canceldate: data.canceldate,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                orireasondesc: data.orireasondesc,
                marketingname: data.marketingname,
                customercat: data.customercategorycd+' - '+data.customercategorydescs,
                loonodate: data.loonodate,
                rcdred: data.rcdred,
                customername: data.contactname,
                leasedperiod: data.leaseperiod,
                lotno: data.lotlist,
                contractamount: this.isCurrency(data.contractamt, this.decimal),
                tenantstatus: data.tenantstatus,
                contractstatus: data.contractstatus,
                businessname: data.brandname
                    }
                 

                this.M_TN_LOOCancellationEntry.applicationnoLabel = this.M_TN_LOOCancellationEntry.applicationno != null && this.M_TN_LOOCancellationEntry.applicationno != '' ? data.applicationno + this.separator + data.applicationno :'' 
                this.M_TN_LOOCancellationEntry.reasoncdLabel = this.M_TN_LOOCancellationEntry.reasoncd != null && this.M_TN_LOOCancellationEntry.reasoncd != '' ? data.reasoncd + this.separator + data.orireasondesc :'' 
         

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

