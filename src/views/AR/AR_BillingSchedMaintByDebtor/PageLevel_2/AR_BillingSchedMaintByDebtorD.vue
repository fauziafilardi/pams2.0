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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_BillingSchedMaintByDebtorD.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_BillingSchedMaintByDebtorD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxcd" v-model="M_AR_BillingSchedMaintByDebtorD.taxcd"  ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_AR_BillingSchedMaintByDebtorD.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_includediscount" v-model="M_AR_BillingSchedMaintByDebtorD.includediscount"  ref="ref_includediscount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AR_BillingSchedMaintByDebtorD.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdiscount" v-model="M_AR_BillingSchedMaintByDebtorD.amountafterdiscount"  ref="ref_amountafterdiscount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baseamt" v-model="M_AR_BillingSchedMaintByDebtorD.baseamt"  ref="ref_baseamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxamt" v-model="M_AR_BillingSchedMaintByDebtorD.taxamt"  ref="ref_taxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamount" v-model="M_AR_BillingSchedMaintByDebtorD.totalamount"  ref="ref_totalamount"/>
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
			Module:"AR",
            propList: {
                initialWhere:"TemporaryNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_BillingSchedMaintByDebtorD :{
                trxtype: '',
                descs: '',
                taxcd: '',
                billingamt: '0',
                discountamt: '0',
                baseamt: '0',
                taxamt: '0',
                includediscount: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                temporaryno: 0,
                billingsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0,
                amountafterdiscount: '0',
                totalamount: '0'
                
                    }
                    
            ,
            
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcd: { 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_includediscount: { 
                cName: 'includediscount',
                cLabel: 'Include Discount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amountafterdiscount: { 
                cValidate :'', 
                cName: 'amountafterdiscount', 
                cLabel: 'Amount After Discount ', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_baseamt: { 
                cValidate :'', 
                cName: 'baseamt', 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxamt: { 
                cValidate :'', 
                cName: 'taxamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalamount: { 
                cValidate :'', 
                cName: 'totalamount', 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cOrder: 20, 
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
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[1].disabled = true
           this.getToolbar().statusFunction[2].disabled = false
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
            this.M_AR_BillingSchedMaintByDebtorD.temporaryno = data.TemporaryNo 
            this.propList.initialWhere =" TemporaryNo = '" + data.TemporaryNo + "' "
        

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
            this.M_AR_BillingSchedMaintByDebtorD = {
                trxtype: '',
                descs: '',
                taxcd: '',
                billingamt: '0',
                discountamt: '0',
                baseamt: '0',
                taxamt: '0',
                includediscount: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                temporaryno: 0,
                billingsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0,
                amountafterdiscount: '0',
                totalamount: '0'
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_BillingSchedMaintByDebtorD.temporaryno = data.TemporaryNo 



        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TemporaryNo: value.TemporaryNo,
                    BillingSequenceNo: value.BillingSequenceNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: ''
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

                this.$parent.resultDelete("Deleting Data Successfully")
                this.refreshListParent(true, 'delete')
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               temporaryno: record.TemporaryNo,
                billingsequenceno: record.BillingSequenceNo				
            }
            // console.log(M_AR_BillingSchedMaintByDebtorD.amountafterdiscount)    

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]

                var includediscount = ""
                if(data.includediscount) {
                  if(data.includediscount == 'N') {
                    includediscount = "No"
                  }
                  else {
                    includediscount = "Yes"
                  }
                }
this.M_AR_BillingSchedMaintByDebtorD = {
                trxtype: data.trxtype,
                descs: data.descs,
                taxcd: data.taxcd,
                billingamt: this.isCurrency(data.billingamt),
                discountamt: this.isCurrency(data.discountamt),
                baseamt: this.isCurrency(data.baseamt),
                taxamt: this.isCurrency(data.taxamt),
                includediscount: includediscount,
                userinput: data.userinput,
                useredit: data.useredit,
                temporaryno: data.temporaryno,
                billingsequenceno: data.billingsequenceno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                amountafterdiscount: this.isCurrency(data.billingamt - data.discountamt) ,
                totalamount: this.isCurrency(data.baseamt + data.taxamt)
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

