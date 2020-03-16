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
                                        <ABSCompute :prop="PI_debtorcd" v-model="M_AR_VATBatchAssignment.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebitnoChange" :prop="PI_debitno" :value="M_AR_VATBatchAssignment.debitno" :label="M_AR_VATBatchAssignment.debitnoLabel" ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_VATBatchAssignment.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxinvoicenoChange" :prop="PI_taxinvoiceno" :value="M_AR_VATBatchAssignment.taxinvoiceno" :label="M_AR_VATBatchAssignment.taxinvoicenoLabel" ref="ref_taxinvoiceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnvatdateChange" :prop="PI_vatdate" v-model="M_AR_VATBatchAssignment.vatdate"  ref="ref_vatdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_AR_VATBatchAssignment.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_VATBatchAssignment.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_VATBatchAssignment.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_VATBatchAssignment.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AR_VATBatchAssignment.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_paymenttaxcurrencyrate" v-model="M_AR_VATBatchAssignment.paymenttaxcurrencyrate"  ref="ref_paymenttaxcurrencyrate"/>
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
		Module:"AR",
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_VATBatchAssignment :{
                debtorcd: '',
                taxinvoiceno: '',
                vatdate: '',
                debitno: '',
                debitdate: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                paymenttaxcurrencyrate: '0',
                trxamt: '',
                netamt: '',
                vatamt: '',
                standardcommon: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                vatno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                cLabel: 'Debtor', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARVATInvoiceDebitNo1'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' And TaxStatus IN ('1','2') and VATStatus='N'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DebitNo' ,
            }, 
            PI_debitdate: { 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cValue: '',
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_taxinvoiceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARVATInvoiceBatchNo'    , 
                    ColumnDB: 'VATNo'   , 
                    InitialWhere: "( BaseOnTaxHandling='P') OR  ( SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' AND BaseOnTaxHandling ='S')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'taxinvoiceno', 
                cLabel: 'Tax Invoice No', 
                cKey: true, 
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
                cDisplayColumn: 'VATNo,TimeEdit' ,
            }, 
            PI_vatdate: { 
                cValidate :'required', 
                cName: 'vatdate', 
                cLabel: 'Tax Invoice Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencyrate: { 
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxamt: { 
                cLabel: 'Doc. Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_taxcurrencyrate: { 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_paymenttaxcurrencyrate: { 
                cValidate :'required', 
                cName: 'paymenttaxcurrencyrate', 
                cLabel: 'Payment Tax Currency Rate', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OndebitnoChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_AR_VATBatchAssignment.debitno = data.id
            this.M_AR_VATBatchAssignment.debitnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                // console.log(data.id)
                if (data.id && data.id != "") {
                this.GetTaxInvoiceHeaderData(data.id) 
//{debitno}
                }
            }
        })
        this.$forceUpdate()
        },
        OntaxinvoicenoChange (data) {
        this.$nextTick(() => {
            this.M_AR_VATBatchAssignment.taxinvoiceno = data.id
            this.M_AR_VATBatchAssignment.taxinvoicenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxinvoiceno}
            }
        })
        this.$forceUpdate()
        },
        OnvatdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatdate}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
        //    this.getToolbar().statusFunction[6].disabled = true
        },
         GetTaxInvoiceHeaderData (DebitNo) {
            //  console.log(DebitNo)
            var param = {
                OptionFunctionCd: "GetTaxInvoiceHeaderData",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: DebitNo
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return

                this.M_AR_VATBatchAssignment.debtorcd = ress[0].DebtorCd //this.M_FormatingDate(ress[0].DebitDate)
                this.M_AR_VATBatchAssignment.taxcurrencyrate = ress[0].TaxCurrencyRate
                this.M_AR_VATBatchAssignment.currencyrate = ress[0].CurrencyRate    
                this.M_AR_VATBatchAssignment.paymenttaxcurrencyrate = ress[0].TaxCurrencyRate
                this.M_AR_VATBatchAssignment.debitdate = ress[0].DebitDate
                this.M_AR_VATBatchAssignment.vatdate = ress[0].DebitDate
                this.M_AR_VATBatchAssignment.currencycd = ress[0].CurrencyCd
                this.M_AR_VATBatchAssignment.trxamt = ress[0].TrxAmt
                this.M_AR_VATBatchAssignment.vatamt = ress[0].VATAmt
                this.M_AR_VATBatchAssignment.standardcommon = ress[0].StandardCommon
            })
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_VATBatchAssignment.debitno == '' || this.M_AR_VATBatchAssignment.debitno == null ? 'NULL' : this.M_AR_VATBatchAssignment.debitno ,
                TaxInvoiceNo: this.M_AR_VATBatchAssignment.taxinvoiceno == '' || this.M_AR_VATBatchAssignment.taxinvoiceno == null ? 'NULL' : this.M_AR_VATBatchAssignment.taxinvoiceno ,
                VATDate: this.M_AR_VATBatchAssignment.vatdate == '' || this.M_AR_VATBatchAssignment.vatdate == null ? 'NULL' : this.M_AR_VATBatchAssignment.vatdate ,
                PaymentTaxCurrencyRate: this.M_AR_VATBatchAssignment.paymenttaxcurrencyrate ? this.replaceAllString(this.M_AR_VATBatchAssignment.paymenttaxcurrencyrate,',','','number') : 0 ,
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_VATBatchAssignment.debitno == '' || this.M_AR_VATBatchAssignment.debitno == null ? 'NULL' : this.M_AR_VATBatchAssignment.debitno ,
                TaxInvoiceNo: this.M_AR_VATBatchAssignment.taxinvoiceno == '' || this.M_AR_VATBatchAssignment.taxinvoiceno == null ? 'NULL' : this.M_AR_VATBatchAssignment.taxinvoiceno ,
                VATDate: this.M_AR_VATBatchAssignment.vatdate == '' || this.M_AR_VATBatchAssignment.vatdate == null ? 'NULL' : this.M_AR_VATBatchAssignment.vatdate ,
                PaymentTaxCurrencyRate: this.M_AR_VATBatchAssignment.paymenttaxcurrencyrate ? this.replaceAllString(this.M_AR_VATBatchAssignment.paymenttaxcurrencyrate,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_VATBatchAssignment.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_VATBatchAssignment = {
                debtorcd: '',
                taxinvoiceno: '',
                vatdate: '',
                debitno: '',
                debitdate: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                paymenttaxcurrencyrate: '0',
                trxamt: '',
                netamt: '',
                vatamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                vatno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            
            data.forEach((value) => {
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    TaxInvoiceNo: value.TaxInvoiceNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp: value.LastUpdateStamp,
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },        

        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo,
                taxinvoiceno: record.TaxInvoiceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_VATBatchAssignment = {
                debtorcd: data.debtorcd,
                taxinvoiceno: data.taxinvoiceno,
                vatdate: data.vatdate,
                debitno: data.debitno,
                debitdate: data.debitdate,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, data.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, data.decimal),
                paymenttaxcurrencyrate: this.isCurrency(data.paymenttaxcurrencyrate, data.decimal),
                trxamt: this.isCurrency(data.trxamt),
                netamt: data.netamt,
                vatamt: this.isCurrency(data.vatamt),
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                vatno: data.vatno,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_VATBatchAssignment.debitnoLabel = this.M_AR_VATBatchAssignment.debitno != null ? data.debitno :'' 
                this.M_AR_VATBatchAssignment.taxinvoicenoLabel = this.M_AR_VATBatchAssignment.taxinvoiceno != null ? data.taxinvoiceno  :'' 
         

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

