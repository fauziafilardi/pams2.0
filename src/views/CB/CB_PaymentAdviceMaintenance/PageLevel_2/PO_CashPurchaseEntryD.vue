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
                                        <ABSinputTextVuex :prop="PI_itemcd" v-model="M_PO_CashPurchaseEntryD.itemcd"  ref="ref_itemcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_measurement" v-model="M_PO_CashPurchaseEntryD.measurementcd"  ref="ref_measurement"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_unitprice" v-model="M_PO_CashPurchaseEntryD.unitprice"  ref="ref_unitprice"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requestqty" v-model="M_PO_CashPurchaseEntryD.requestqty"  ref="ref_requestqty"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_approvedqty" v-model="M_PO_CashPurchaseEntryD.approvedqty"  ref="ref_approvedqty"/>
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
			Module:"CB",
            propList: {
                initialWhere:"SRnIRNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_PO_CashPurchaseEntryD :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                srnirno: '',
                srnirsequenceno: 0,
                itemcd: '',
                descs: '',
                measurementcd: '',
                locationcd: '',
                requestqty: '0',
                approvedqty: '0',
                storedapprovedqty: '',
                purchasedplanningqty: '',
                purchasedrequisitionqty: '',
                storedpurchasedrequisitionqty: '',
                purchasedqty: '',
                storedpurchasedqty: '',
                receivedqty: '',
                storedreceivedqty: '',
                unitprice: '0',
                recommendation: '',
                cancelby: '',
                canceldate: '',
                reasoncd: '',
                reasondescs: '',
                requeststatus: '',
                status: '',
                remarks: '',
                budgetcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                cmreasondescs: '',
                itemdescs: '',
                itemtype: '',
                newsrnirno: '',
                cashpurchasestatus: ''
                    }
            ,
            PI_itemcd: { 
                cValidate :'', 
                cName: 'itemcd', 
                cLabel: 'Item Code', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_measurement: { 
                cValidate :'', 
                cName: 'measurement', 
                cLabel: 'Measurement', 
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
            PI_unitprice: { 
                cValidate :'', 
                cName: 'unitprice', 
                cLabel: 'Unit Price', 
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
            PI_requestqty: { 
                cValidate :'', 
                cName: 'requestqty', 
                cLabel: 'Request Qty', 
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
            PI_approvedqty: { 
                cValidate :'', 
                cName: 'approvedqty', 
                cLabel: 'Approved Qty ', 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
		
		setToolbarButton () {
           this.getToolbar().statusFunction[1].disabled = true
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_PO_CashPurchaseEntryD.srnirno = data.SRnIRNo 
            this.propList.initialWhere =" SRnIRNo = '" + data.SRnIRNo + "' "
        

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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_PO_CashPurchaseEntryD = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                srnirno: '',
                srnirsequenceno: 0,
                itemcd: '',
                descs: '',
                measurementcd: '',
                locationcd: '',
                requestqty: '0',
                approvedqty: '0',
                storedapprovedqty: '',
                purchasedplanningqty: '',
                purchasedrequisitionqty: '',
                storedpurchasedrequisitionqty: '',
                purchasedqty: '',
                storedpurchasedqty: '',
                receivedqty: '',
                storedreceivedqty: '',
                unitprice: '0',
                recommendation: '',
                cancelby: '',
                canceldate: '',
                reasoncd: '',
                reasondescs: '',
                requeststatus: '',
                status: '',
                remarks: '',
                budgetcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                cmreasondescs: '',
                itemdescs: '',
                itemtype: '',
                newsrnirno: '',
                cashpurchasestatus: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_PO_CashPurchaseEntryD.srnirno = data.SRnIRNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()
          var dataDelete = []          

          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              PaymentNo: value.PaymentNo,
              PaymentSequenceNo: value.PaymentSequenceNo,
              UserEdit: this.getDataUser().UserId,
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
,                srnirsequenceno: record.SRnIRSequenceNo,
                srnirno: record.SRnIRNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_PO_CashPurchaseEntryD = {
                subportfoliocd: data.subportfoliocd,
                srnirno: data.srnirno,
                srnirsequenceno: data.srnirsequenceno,
                itemcd: data.itemcd,
                descs: data.descs,
                measurementcd: data.measurementcd,
                locationcd: data.locationcd,
                requestqty: this.isCurrency(data.requestqty, this.decimal),
                approvedqty: this.isCurrency(data.approvedqty, this.decimal),
                storedapprovedqty: data.storedapprovedqty,
                purchasedplanningqty: data.purchasedplanningqty,
                purchasedrequisitionqty: data.purchasedrequisitionqty,
                storedpurchasedrequisitionqty: data.storedpurchasedrequisitionqty,
                purchasedqty: data.purchasedqty,
                storedpurchasedqty: data.storedpurchasedqty,
                receivedqty: data.receivedqty,
                storedreceivedqty: data.storedreceivedqty,
                unitprice: this.isCurrency(data.unitprice, this.decimal),
                recommendation: data.recommendation,
                cancelby: data.cancelby,
                canceldate: data.canceldate,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                requeststatus: data.requeststatus,
                status: data.status,
                remarks: data.remarks,
                budgetcd: data.budgetcd,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                cmreasondescs: data.cmreasondescs,
                itemdescs: data.itemdescs,
                itemtype: data.itemtype,
                newsrnirno: data.newsrnirno,
                cashpurchasestatus: data.cashpurchasestatus
                    }
                 

  

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

