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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cancellationno" v-model="M_SM_SalesCancellationEntry.cancellationno"  ref="ref_cancellationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_marketingname" v-model="M_SM_SalesCancellationEntry.marketingname"  ref="ref_marketingname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncancellationdateChange" :prop="PI_cancellationdate" v-model="M_SM_SalesCancellationEntry.cancellationdate"  ref="ref_cancellationdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_salestype" v-model="M_SM_SalesCancellationEntry.salestype"  ref="ref_salestype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnordernoChange" :prop="PI_orderno" :value="M_SM_SalesCancellationEntry.orderno" :label="M_SM_SalesCancellationEntry.ordernoLabel" ref="ref_orderno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_snpnodate" v-model="M_SM_SalesCancellationEntry.snpnodate"  ref="ref_snpnodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_SM_SalesCancellationEntry.reasoncd" :label="M_SM_SalesCancellationEntry.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_commisionstatusdescs" v-model="M_SM_SalesCancellationEntry.commisionstatusdescs"  ref="ref_commisionstatusdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_SM_SalesCancellationEntry.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customername" v-model="M_SM_SalesCancellationEntry.customername"  ref="ref_customername" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotno" v-model="M_SM_SalesCancellationEntry.lotno"  ref="ref_lotno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_SM_SalesCancellationEntry.remarks"  ref="ref_remarks" />
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
		Module:"SM",
            propList: {
                initialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_SM_SalesCancellationEntry :{
                cancellationno: '',
                cancellationdate: this.getToday(),
                salestype: '',
                marketingname: '',
                snpnodate: '',
                commisionstatusdescs: '',
                remarks: '',
                lotno: '',
                customername: '',
                reasondescs: '',
                orderno: ''
                    }
            ,
            PI_cancellationno: { 
                cValidate :'', 
                cName: 'cancellationno', 
                cLabel: 'Cancellation No', 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cLabel: 'Cancellation Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_salestype: { 
                cLabel: 'Sales Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_orderno: { 
                dataLookUp: { 
                    LookUpCd: 'GetSMLookupAppNo', 
                    ColumnDB: 'OrderNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: "" ,
                    SourceField: ''  ,
                    DisplayLookup: 'OrderNo,OrderNo',
                    ParamView: "'"+this.getDataUser().SubPortfolioCd+"'"
                        }, 
                cValidate :'required', 
                cName: 'orderno', 
                cLabel: 'Order No', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cDisplayColumn: 'OrderNo,OrderNo' ,
            }, 
            PI_snpnodate: { 
                cLabel: 'Snp No-Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupReasonCd'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'ReasonCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 23, 
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
            PI_commisionstatusdescs: { 
                cLabel: 'Commision Status', 
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
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customername: { 
                cLabel: 'Contact Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lotno: { 
                cLabel: 'Unit No', 
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
                cOrder:33, 
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
		return this.$store.getters.GetPage1Data
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        CekCancellationRunningCd(){
            var param = {
            OptionFunctionCd: "CheckRunningCd",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                if (ress.length < 1) return
                var data = ress[0]
                
                 if (data.OrderCancellationRunningCd != null && data.OrderCancellationRunningCd != "") { 
                    this.PI_cancellationno.cProtect = true
                    this.M_SM_SalesCancellationEntry.cancellationno = "(auto)" 
                }else{
                    this.PI_cancellationno.cProtect = false
                    this.M_SM_SalesCancellationEntry.cancellationno = ""
                }
            })
        },
        GetSales(OrderNo){
            var param = {
            OptionFunctionCd: "GetSalesData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            OrderNo: OrderNo
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress.length > 0) {
                    var data = ress[0]
                    // console.log(ress)
                  this.M_SM_SalesCancellationEntry.marketingname = data.MarketingName
                  this.M_SM_SalesCancellationEntry.salestype = data.PaymentDescs
                  this.M_SM_SalesCancellationEntry.snpnodate = data.SnPNo + ' - ' + this.momentDateFormatting(data.SnPDate, 'DD/MM/YYYY')
                  this.M_SM_SalesCancellationEntry.commisionstatusdescs = data.CommisionStatusDescs
                  this.M_SM_SalesCancellationEntry.customername = data.ContactName
                  this.M_SM_SalesCancellationEntry.lotno = data.LotDescs
                  this.M_SM_SalesCancellationEntry.remarks = data.Remarks
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
        OnordernoChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_SM_SalesCancellationEntry.orderno = data.id
            this.M_SM_SalesCancellationEntry.ordernoLabel = data.label
            this.GetSales(data.id)
            if (this.inputStatus != "VIEW") {
//{orderno}
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_SM_SalesCancellationEntry.reasoncd = data.id
            this.M_SM_SalesCancellationEntry.reasoncdLabel = data.label
            this.M_SM_SalesCancellationEntry.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
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
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
        },
        M_Insert() {
            if(this.M_SM_SalesCancellationEntry.cancellationno == "(auto)"){
                this.M_SM_SalesCancellationEntry.cancellationno = ""
            }else{
                this.M_SM_SalesCancellationEntry.cancellationno = this.M_SM_SalesCancellationEntry.cancellationno
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                OrderNo: this.M_SM_SalesCancellationEntry.orderno == '' || this.M_SM_SalesCancellationEntry.orderno == null ? 'NULL' : this.M_SM_SalesCancellationEntry.orderno ,
                CancellationNo: this.M_SM_SalesCancellationEntry.cancellationno,
                CancellationDate: this.M_SM_SalesCancellationEntry.cancellationdate == '' || this.M_SM_SalesCancellationEntry.cancellationdate == null ? 'NULL' : this.M_SM_SalesCancellationEntry.cancellationdate ,
                ReasonCd: this.M_SM_SalesCancellationEntry.reasoncd == '' || this.M_SM_SalesCancellationEntry.reasoncd == null ? 'NULL' : this.M_SM_SalesCancellationEntry.reasoncd ,
                ReasonDescs: this.M_SM_SalesCancellationEntry.reasondescs,
                CancelBy: this.getDataUser().UserId,
                CancelDate: this.getToday(),
                Status: 'N',
                Remarks: this.M_SM_SalesCancellationEntry.remarks,
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                OrderNo: this.M_SM_SalesCancellationEntry.orderno == '' || this.M_SM_SalesCancellationEntry.orderno == null ? 'NULL' : this.M_SM_SalesCancellationEntry.orderno ,
                CancellationNo: this.M_SM_SalesCancellationEntry.cancellationno,
                CancellationDate: this.M_SM_SalesCancellationEntry.cancellationdate == '' || this.M_SM_SalesCancellationEntry.cancellationdate == null ? 'NULL' : this.M_SM_SalesCancellationEntry.cancellationdate ,
                ReasonCd: this.M_SM_SalesCancellationEntry.reasoncd == '' || this.M_SM_SalesCancellationEntry.reasoncd == null ? 'NULL' : this.M_SM_SalesCancellationEntry.reasoncd ,
                ReasonDescs: this.M_SM_SalesCancellationEntry.reasondescs,
                CancelBy: this.getDataUser().UserId,
                CancelDate: this.getToday(),
                Status: 'N',
                Remarks: this.M_SM_SalesCancellationEntry.remarks,
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
            this.M_SM_SalesCancellationEntry = {
                cancellationno: '',
                cancellationdate: this.getToday(),
                salestype: '',
                marketingname: '',
                snpnodate: '',
                commisionstatusdescs: '',
                remarks: '',
                lotno: '',
                customername: '',
                reasondescs: '',
                orderno: ''
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
					_Message_:'',
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    OrderNo: value.OrderNo == '' || value.OrderNo == null ? 'NULL' : value.OrderNo ,
                    CancellationNo: value.CancellationNo,


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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                orderno: record.OrderNo,
                cancellationno: record.CancellationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_SM_SalesCancellationEntry = {
                cancellationno: data.cancellationno,
                cancellationdate: data.cancellationdate,
                salestype: data.salestype,
                marketingname: data.marketingname,
                snpnodate: data.snpnodate,
                commisionstatusdescs: data.commisionstatusdescs,
                remarks: data.remarks,
                lotno: data.lotno,
                customername: data.customername,
                reasondescs: data.reasondescs,
                orderno: data.orderno,
                reasoncd: data.reasoncd
                    }
                 

                this.M_SM_SalesCancellationEntry.ordernoLabel = this.M_SM_SalesCancellationEntry.orderno != null && this.M_SM_SalesCancellationEntry.orderno != '' ? data.orderno + this.separator + data.orderno :'' 
                this.M_SM_SalesCancellationEntry.reasoncdLabel = this.M_SM_SalesCancellationEntry.reasoncd != null && this.M_SM_SalesCancellationEntry.reasoncd != '' ? data.reasoncd + this.separator + data.reasondescs  :'' 
         
                this.GetSales(data.orderno)

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

