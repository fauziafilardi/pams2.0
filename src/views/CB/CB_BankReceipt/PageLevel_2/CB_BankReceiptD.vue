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
                                        <!-- <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_CB_BankReceiptD.accountcd" :label="M_CB_BankReceiptD.accountcdLabel" ef="ref_accountcd"/> -->
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_CB_BankReceiptD.accountcd" :label="M_CB_BankReceiptD.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_BankReceiptD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_BankReceiptD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_CB_BankReceiptD.taxcd" :label="M_CB_BankReceiptD.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_CB_BankReceiptD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_CB_BankReceiptD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_CB_BankReceiptD.totalamt"  ref="ref_totalamt"/>
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
                initialWhere:"PaymentNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_BankReceiptD :{
                paymentsequenceno: 0,
                accountcd: '',
                descs: '',
                taxcd: '',
                trxamt: '0',
                vatamt: '',
                netamt: '',
                totalamt: '',
                withholdingamt: '',
                underpaymentamt: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                taxdescs: '',
                accountdescs: '',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                budgetcd: '',
                paymentno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'accountcd', 
                cLabel: 'Account Code ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cDisplayColumn: 'AccountCd, Description' ,
            }, 
            // PI_accountcd: { 
            //     dataLookUp: { 
            //         LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
            //         ColumnDB: 'AccountCd'   , 
            //         InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
            //         ParamWhere: ''  
            //             }, 
            //     cValidate :'required', 
            //     cName: 'accountcd', 
            //     cLabel: 'Account Code ', 
            //     cKey: false, 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cTriggered: false, 
            //     cDefault: '', 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cAsync:  false, 
            //     cFilter: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //     cStatic: false, 
            //     cOption: [], 
            //     cMasterUrl: 'GL/GL_ChartOfAccount' ,
            //     cDisplayColumn: 'AccountCd,AccountCd,Description' ,
            // }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'taxcd', 
                cLabel: 'Tax ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cMasterUrl: 'CM/CM_TaxSubPortfolio' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_netamt: { 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true, 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true, 
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true, 
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
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankReceiptD.accountcd = data.id
            this.M_CB_BankReceiptD.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankReceiptD.taxcd = data.id
            this.M_CB_BankReceiptD.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
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
            this.M_CB_BankReceiptD.paymentno = data.PaymentNo
            this.propList.initialWhere =" SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND PaymentNo = '" + data.PaymentNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                PaymentNo: this.M_CB_BankReceiptD.paymentno,
                AccountCd: this.M_CB_BankReceiptD.accountcd == '' || this.M_CB_BankReceiptD.accountcd == null ? 'NULL' : this.M_CB_BankReceiptD.accountcd ,
                Descs: this.M_CB_BankReceiptD.descs,
                TrxAmt: this.M_CB_BankReceiptD.trxamt ? this.replaceAllString(this.M_CB_BankReceiptD.trxamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_CB_BankReceiptD.underpaymentamt,
                TaxCd: this.M_CB_BankReceiptD.taxcd == '' || this.M_CB_BankReceiptD.taxcd == null ? 'NULL' : this.M_CB_BankReceiptD.taxcd ,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
                this.refreshListParent(true)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                PaymentNo: this.M_CB_BankReceiptD.paymentno,
                AccountCd: this.M_CB_BankReceiptD.accountcd == '' || this.M_CB_BankReceiptD.accountcd == null ? 'NULL' : this.M_CB_BankReceiptD.accountcd ,
                Descs: this.M_CB_BankReceiptD.descs,
                TrxAmt: this.M_CB_BankReceiptD.trxamt ? this.replaceAllString(this.M_CB_BankReceiptD.trxamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_CB_BankReceiptD.underpaymentamt,
                TaxCd: this.M_CB_BankReceiptD.taxcd == '' || this.M_CB_BankReceiptD.taxcd == null ? 'NULL' : this.M_CB_BankReceiptD.taxcd ,
                UserEdit: this.getDataUser().UserId ,
                PaymentSequenceNo: this.M_CB_BankReceiptD.paymentsequenceno,
                LastUpdateStamp: this.M_CB_BankReceiptD.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
                this.refreshListParent(true)
            })
        },
		M_ClearForm(){
            this.M_CB_BankReceiptD = {
                paymentsequenceno: 0,
                accountcd: '',
                descs: '',
                taxcd: '',
                trxamt: '0',
                vatamt: '',
                netamt: '',
                totalamt: '',
                withholdingamt: '',
                underpaymentamt: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                taxdescs: '',
                accountdescs: '',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                budgetcd: '',
                paymentno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CB_BankReceiptD.paymentno = data.PaymentNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()
            var dataDelete = [] 

            data.forEach((value) => {
              
                dataDelete.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    PaymentNo: value.PaymentNo,
                    PaymentSequenceNo: value.PaymentSequenceNo,
                    UserEdit: this.getDataUser().UserId,
                    lastupdatestamp: value.LastUpdateStamp,
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
                this.refreshListParent(true)
            })   
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                paymentsequenceno: record.PaymentSequenceNo,
                paymentno: record.PaymentNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CB_BankReceiptD = {
                paymentsequenceno: data.paymentsequenceno,
                accountcd: data.accountcd,
                descs: data.descs,
                taxcd: data.taxcd,
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                withholdingamt: data.withholdingamt,
                underpaymentamt: data.underpaymentamt,
                userinput: data.userinput,
                useredit: data.useredit,
                taxdescs: data.taxdescs,
                accountdescs: data.accountdescs,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                budgetcd: data.budgetcd,
                paymentno: data.paymentno,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CB_BankReceiptD.accountcdLabel = this.M_CB_BankReceiptD.accountcd != null && this.M_CB_BankReceiptD.accountcd != '' ? data.accountcd + this.separator + data.accountdescs :'' 
                this.M_CB_BankReceiptD.taxcdLabel = this.M_CB_BankReceiptD.taxcd != null && this.M_CB_BankReceiptD.taxcd != '' ? data.taxcd + this.separator + data.taxdescs :'' 
  

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

