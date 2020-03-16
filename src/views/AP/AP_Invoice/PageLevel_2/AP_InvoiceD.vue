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
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_InvoiceD.trxtype" :label="M_AP_InvoiceD.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_InvoiceD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournaltypeChange" :prop="PI_journaltype" v-model="M_AP_InvoiceD.journaltype"  ref="ref_journaltype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnamortizestatusChange" :prop="PI_amortizestatus" v-model="M_AP_InvoiceD.amortizestatus"  ref="ref_amortizestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_trxdatefrom" :valueFrom="M_AP_InvoiceD.trxdatefrom" :valueTo="M_AP_InvoiceD.trxdateto" ref="ref_trxdatefrom" @from="MdtRange_trxdatefrom" @to="MdtRange_trxdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amortizemonthlyamt" v-model="M_AP_InvoiceD.amortizemonthlyamt"  ref="ref_amortizemonthlyamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_InvoiceD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AP_InvoiceD.taxcd" :label="M_AP_InvoiceD.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincludediscountChange" :prop="PI_includediscount" v-model="M_AP_InvoiceD.includediscount"  ref="ref_includediscount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndiscountcdChange" :prop="PI_discountcd" :value="M_AP_InvoiceD.discountcd" :label="M_AP_InvoiceD.discountcdLabel" ref="ref_discountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AP_InvoiceD.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdiscount" v-model="M_AP_InvoiceD.amountafterdiscount"  ref="ref_amountafterdiscount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AP_InvoiceD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AP_InvoiceD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AP_InvoiceD.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->

							</b-row>
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
			Module:"AP",
            propList: {
                initialWhere:"GRNControl = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_InvoiceD :{
                creditsequenceno: 0,
                creditno: '',
                trxtype: '',
                descs: '',
                accountcd: '',
                taxcd: '',
                includediscount: 'N',
                discountcd: '',
                discountamt: '0',
                trxamt: '0',
                netamt: 0,
                vatamt: 0,
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                taxdescs: '',
                category: '',
                discountdescs: '',
                taxbasepercent: 0,
                amountafterdiscount: 0,
                journaltype: 'E',
                amortizestatus: 'M',
                trxdatefrom: '',
                trxdateto: '',
                defaultamortizedatefrom: '',
                budgetcd: '',
                incomeexpenseaccountcd: '',
                amortizemonthlyamt: '0',
                creditorcd: '',
                currencycd: '',
                credittype: '',
                grncontrol: '',
                lastupdatestamp: 0,
                rowid: 0,
                totalamt: 0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AP' AND TrxClass = 'I'", 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_descs: { 
                cValidate :'', 
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
            PI_journaltype: { 
                cValidate :'', 
                cName: 'journaltype', 
                cId: 'rdbjournaltype', 
                cRadioOptions: [{ text: 'Expense', value: 'E' }, { text: 'Prepaid', value: 'D' }], 
                cRadioDefaultOption: 'E', 
                cLabel:'Journal Type', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizestatus: { 
                cValidate :'', 
                cName: 'amortizestatus', 
                cId: 'rdbamortizestatus', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Auto', value: 'A' }], 
                cRadioDefaultOption: 'M', 
                cLabel:'Amotize Status', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdatefrom: { 
                cValidate :'', 
                cName: 'trxdatefrom', 
                cLabel: 'Amortize Date From', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizemonthlyamt: { 
                cValidate :'', 
                cName: 'amortizemonthlyamt', 
                cLabel: 'Amortize Monthly Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans .Amount ', 
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
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TaxCd, Descs' 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_includediscount: { 
                cValidate :'', 
                cName: 'includediscount', 
                cId: 'rdbincludediscount', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Include Discount', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMDiscount'    , 
                    ColumnDB: 'DiscountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'DiscountCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
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
                cMasterUrl: 'CM/CM_Discount' ,
                cDisplayColumn: 'DiscountCd,Descs' ,
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amountafterdiscount: { 
                cValidate :'', 
                cName: 'amountafterdiscount', 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
       
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
        GetTaxValidationErrorMessage(){
          var param = {
              OptionFunctionCd: "GetTaxValidationErrorMessage",
              ModuleCd: this.Module,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CreditNo: this.M_AP_InvoiceD.creditno,
              TaxCd: this.M_AP_InvoiceD.taxcd,
              InsertFlag: 1              
          }

          this.FnDynamicFunction(param)
          .then(ress => {
              if (ress == null) return
              console.log(ress[0]);
                            
          })
        },
        GetDiscountAmount(){
          var param = {
              OptionFunctionCd: "GetDiscountAmount",
              ModuleCd: 'TN',
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              TrxAmt: this.M_AP_InvoiceD.trxamt ? this.replaceAllString(this.M_AP_InvoiceD.trxamt,',','','number') : 0,
              DiscountCd: this.M_AP_InvoiceD.discountcd          
          }

          this.FnDynamicFunction(param)
          .then(ress => {
              if (ress == null) return
              console.log(ress[0]);
              this.M_AP_InvoiceD.discountamt = this.isCurrency(ress[0].DiscountAmt, this.decimal)
              this.M_AP_InvoiceD.amountafterdiscount = this.isCurrency(ress[0].AmountAfterDisc, this.decimal)
                            
          })
        },
        OntrxtypeChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_AP_InvoiceD.trxtype = data.id
            this.M_AP_InvoiceD.trxtypeLabel = data.label
            this.M_AP_InvoiceD.descs = data.Descs
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnjournaltypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data == 'D' ){
                this.PI_amortizestatus.cProtect = false
              }else{
                this.M_AP_InvoiceD.amortizestatus = 'M'
                this.PI_amortizestatus.cProtect = true
                this.PI_trxdatefrom.cProtect = true
                this.PI_amortizemonthlyamt.cProtect = true

              }
            }
        })
        this.$forceUpdate()
        },
        OnamortizestatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data == 'A'){
                this.PI_trxdatefrom.cProtect = false
                this.PI_amortizemonthlyamt.cProtect = false
                this.M_AP_InvoiceD.trxdatefrom = this.getToday()
                // this.PI_amortizemonthlyamt = 0
              }else{
                this.PI_trxdatefrom.cProtect = true
                this.PI_amortizemonthlyamt.cProtect = true
                this.M_AP_InvoiceD.trxdatefrom = ''
                // this.PI_amortizemonthlyamt = ''
              }
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_InvoiceD.taxcd = data.id
            this.M_AP_InvoiceD.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OnincludediscountChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{includediscount}
            }
        })
        this.$forceUpdate()
        },
        OndiscountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_InvoiceD.discountcd = data.id
            this.M_AP_InvoiceD.discountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetDiscountAmount()
            }
        })
        this.$forceUpdate()
        },

		setToolbarButton () {
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
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceD.grncontrol = data.GRNControl
            this.M_AP_InvoiceD.creditorcd = data.CreditorCd
            this.M_AP_InvoiceD.currencycd = data.CurrencyCd
            this.M_AP_InvoiceD.credittype = data.CreditType
            this.propList.initialWhere =" SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND CreditNo = '"+ data.InvoiceNo +"'"


            this.FormToABSList().doGetList('','eb_getList')
        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditorCd: this.M_AP_InvoiceD.creditorcd,
                CurrencyCd: this.M_AP_InvoiceD.currencycd,
                CreditType: this.M_AP_InvoiceD.credittype,
                CreditNo: this.M_AP_InvoiceD.creditno,
                Source: 'I',
                TrxType: this.M_AP_InvoiceD.trxtype == '' || this.M_AP_InvoiceD.trxtype == null ? 'NULL' : this.M_AP_InvoiceD.trxtype ,
                ModuleCd: 'AP',
                Descs: this.M_AP_InvoiceD.descs,
                TaxCd: this.M_AP_InvoiceD.taxcd == '' || this.M_AP_InvoiceD.taxcd == null ? 'NULL' : this.M_AP_InvoiceD.taxcd ,
                JournalType: this.M_AP_InvoiceD.journaltype == '' || this.M_AP_InvoiceD.journaltype == null ? 'NULL' : this.M_AP_InvoiceD.journaltype,
                AmortizeStatus: this.M_AP_InvoiceD.amortizestatus == '' || this.M_AP_InvoiceD.amortizestatus == null ? 'NULL' : this.M_AP_InvoiceD.amortizestatus,
                TrxDateFrom: this.M_AP_InvoiceD.trxdatefrom == '' || this.M_AP_InvoiceD.trxdatefrom == null ? 'NULL' : this.M_AP_InvoiceD.trxdatefrom ,
                TrxDateTo: this.M_AP_InvoiceD.trxdateto,
                AmortizeMonthlyAmt: this.M_AP_InvoiceD.amortizemonthlyamt ? this.replaceAllString(this.M_AP_InvoiceD.amortizemonthlyamt,',','','number') : 0 ,
                IncludeDiscount: this.M_AP_InvoiceD.includediscount,
                DiscountCd: this.M_AP_InvoiceD.discountcd == '' || this.M_AP_InvoiceD.discountcd == null ? 'NULL' : this.M_AP_InvoiceD.discountcd ,
                DiscountAmt: this.M_AP_InvoiceD.discountamt ? this.replaceAllString(this.M_AP_InvoiceD.discountamt,',','','number') : 0 ,
                TrxAmt: this.M_AP_InvoiceD.trxamt ? this.replaceAllString(this.M_AP_InvoiceD.trxamt,',','','number') : 0 ,
                UserInput: this.getDataUser().UserId ,
                GRNControl: this.M_AP_InvoiceD.grncontrol,
                BudgetCd: this.M_AP_InvoiceD.budgetcd
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                  this.$parent.resultInsert(response.Message)
                  this.refreshListParent()
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditorCd: this.M_AP_InvoiceD.creditorcd,
                CreditNo: this.M_AP_InvoiceD.creditno,
                CreditType: this.M_AP_InvoiceD.credittype,
                CurrencyCd: this.M_AP_InvoiceD.currencycd,
                Source: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                CreditSequenceNo: this.M_AP_InvoiceD.creditsequenceno,
                TrxType: this.M_AP_InvoiceD.trxtype == '' || this.M_AP_InvoiceD.trxtype == null ? 'NULL' : this.M_AP_InvoiceD.trxtype ,
                ModuleCd: 'AP',
                Descs: this.M_AP_InvoiceD.descs,
                TaxCd: this.M_AP_InvoiceD.taxcd == '' || this.M_AP_InvoiceD.taxcd == null ? 'NULL' : this.M_AP_InvoiceD.taxcd ,
                JournalType: this.M_AP_InvoiceD.journaltype == '' || this.M_AP_InvoiceD.journaltype == null ? 'NULL' : this.M_AP_InvoiceD.journaltype,
                AmortizeStatus: this.M_AP_InvoiceD.amortizestatus == '' || this.M_AP_InvoiceD.amortizestatus == null ? 'NULL' : this.M_AP_InvoiceD.amortizestatus,
                TrxDateFrom: this.M_AP_InvoiceD.trxdatefrom == '' || this.M_AP_InvoiceD.trxdatefrom == null ? 'NULL' : this.M_AP_InvoiceD.trxdatefrom ,
                TrxDateTo: this.M_AP_InvoiceD.trxdateto,
                AmortizeMonthlyAmt: this.M_AP_InvoiceD.amortizemonthlyamt ? this.replaceAllString(this.M_AP_InvoiceD.amortizemonthlyamt,',','','number') : 0 ,
                IncludeDiscount: this.M_AP_InvoiceD.includediscount,
                DiscountCd: this.M_AP_InvoiceD.discountcd == '' || this.M_AP_InvoiceD.discountcd == null ? 'NULL' : this.M_AP_InvoiceD.discountcd ,
                DiscountAmt: this.M_AP_InvoiceD.discountamt ? this.replaceAllString(this.M_AP_InvoiceD.discountamt,',','','number') : 0 ,
                TrxAmt: this.M_AP_InvoiceD.trxamt ? this.replaceAllString(this.M_AP_InvoiceD.trxamt,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_InvoiceD.lastupdatestamp,
                GRNControl: this.M_AP_InvoiceD.grncontrol,
                BudgetCd: this.M_AP_InvoiceD.budgetcd
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
                this.refreshListParent()
            })
        },
		M_ClearForm(){
            this.M_AP_InvoiceD = {
                creditsequenceno: 0,
                creditno: '',
                trxtype: '',
                descs: '',
                accountcd: '',
                taxcd: '',
                includediscount: 'N',
                discountcd: '',
                discountamt: '0',
                trxamt: '0',
                netamt: 0,
                vatamt: 0,
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                taxdescs: '',
                category: '',
                discountdescs: '',
                taxbasepercent: 0,
                amountafterdiscount: 0,
                journaltype: 'E',
                amortizestatus: 'M',
                trxdatefrom: '',
                trxdateto: '',
                defaultamortizedatefrom: '',
                budgetcd: '',
                incomeexpenseaccountcd: '',
                amortizemonthlyamt: '0',
                creditorcd: '',
                currencycd: '',
                credittype: '',
                grncontrol: '',
                lastupdatestamp: 0,
                rowid: 0,
                totalamt: 0
                    }
            
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceD.creditorcd = data.CreditorCd
            this.M_AP_InvoiceD.grncontrol = data.GRNControl
            this.M_AP_InvoiceD.currencycd = data.CurrencyCd
            this.M_AP_InvoiceD.creditno = data.InvoiceNo

            // console.log(data)
            // No: 1
            // SubPortfolioCd: "001"
            // BatchNo: 10003584
            // CreditorCd: "acder"
            // CurrencyCd: "CNY"
            // CreditType: "M"
            // InvoiceNo: "APINV/001/02/20/0004"
            // Descs: "EDIT"
            // BatchStatus: "Balance"
            // TimeEdit: "13/02/2020"
            // GRNControl: "N"
            // LastUpdateStamp: 870278910 



        },
        M_Edit(){
          let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceD.grncontrol = data.GRNControl
            this.M_AP_InvoiceD.creditorcd = data.CreditorCd
            this.M_AP_InvoiceD.currencycd = data.CurrencyCd
            this.M_AP_InvoiceD.credittype = data.CreditType
        },
        M_Delete(dt){       
          let dataD = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceD.grncontrol = dataD.GRNControl
            this.M_AP_InvoiceD.creditorcd = dataD.CreditorCd
            this.M_AP_InvoiceD.currencycd = dataD.CurrencyCd
            this.M_AP_InvoiceD.credittype = dataD.CreditType    

          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []	
          		
          data.forEach((value) => {            
            dataDelete.push({                
                CreditSequenceNo: ""+ value.CreditSequenceNo +"",
                UserEdit: this.getDataUser().UserId ,
                CreditorCd: this.M_AP_InvoiceD.creditorcd,
                CurrencyCd: this.M_AP_InvoiceD.currencycd,
                CreditType: this.M_AP_InvoiceD.credittype,
                CreditNo: value.CreditNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                LastUpdateStamp: value.LastUpdateStamp,
                GRNControl: this.M_AP_InvoiceD.grncontrol,
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

                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceD.grncontrol = data.GRNControl
            this.M_AP_InvoiceD.creditorcd = data.CreditorCd
            this.M_AP_InvoiceD.currencycd = data.CurrencyCd
            this.M_AP_InvoiceD.credittype = data.CreditType
                      
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditSequenceNo: record.CreditSequenceNo,
                CreditNo: record.CreditNo,
                CreditorCd: this.M_AP_InvoiceD.creditorcd,
                CurrencyCd: this.M_AP_InvoiceD.currencycd,
                CreditType: this.M_AP_InvoiceD.credittype,
                GRNControl: this.M_AP_InvoiceD.grncontrol
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AP_InvoiceD = {
                creditsequenceno: data.creditsequenceno,
                creditno: data.creditno,
                trxtype: data.trxtype,
                descs: data.descs,
                accountcd: data.accountcd,
                taxcd: data.taxcd,
                includediscount: data.includediscount,
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
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
                userinput: data.userinput,
                useredit: data.useredit,
                trxtypedescs: data.trxtypedescs,
                taxdescs: data.taxdescs,
                category: data.category,
                discountdescs: data.discountdescs,
                taxbasepercent: this.isCurrency(data.taxbasepercent, this.decimal),
                amountafterdiscount: this.isCurrency(data.amountafterdiscount, this.decimal),
                journaltype: data.journaltype,
                amortizestatus: data.amortizestatus,
                trxdatefrom: data.trxdatefrom,
                trxdateto: data.trxdateto,
                defaultamortizedatefrom: data.defaultamortizedatefrom,
                budgetcd: data.budgetcd,
                incomeexpenseaccountcd: data.incomeexpenseaccountcd,
                amortizemonthlyamt: this.isCurrency(data.amortizemonthlyamt, this.decimal),
                creditorcd: data.creditorcd,
                currencycd: data.currencycd,
                credittype: data.credittype,
                grncontrol: data.grncontrol,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                totalamt: this.isCurrency(data.netamt + data.vatamt, this.decimal)
                    }
            

                this.M_AP_InvoiceD.trxtypeLabel = this.M_AP_InvoiceD.trxtype != null && this.M_AP_InvoiceD.trxtype != '' ? data.trxtype + this.separator + data.descs :'' 
                this.M_AP_InvoiceD.taxcdLabel = this.M_AP_InvoiceD.taxcd != null && this.M_AP_InvoiceD.taxcd != '' ? data.taxcd + this.separator + data.taxdescs :'' 
                this.M_AP_InvoiceD.discountcdLabel = this.M_AP_InvoiceD.discountcd != null && this.M_AP_InvoiceD.discountcd != '' ? data.discountcd + this.separator + data.discountdescs :'' 


                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_trxdatefrom (data) {
            this.M_AP_InvoiceD.trxdatefrom = data
        }
        ,MdtRange_trxdateto (data) {
            this.M_AP_InvoiceD.trxdateto = data
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

