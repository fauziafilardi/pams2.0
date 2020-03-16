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
                        <b-col md="6" id="col-left"> <!-- table open -->
                            <b-row>
                              <b-col  md="12">
                                <ABSCompute :prop="PI_billingtype" v-model="M_TN_StrataBilling.billingtype"  ref="ref_billingtype" />
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_StrataBilling.trxtype" :label="M_TN_StrataBilling.trxtypeLabel" ref="ref_trxtype"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSTextAreaVuex :prop="PI_descs" v-model="M_TN_StrataBilling.descs"  ref="ref_descs"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_StrataBilling.billingdate"  ref="ref_billingdate" />
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSinputDateRangeVuex :prop="PI_trxdatefrom" :valueFrom="M_TN_StrataBilling.trxdatefrom" :valueTo="M_TN_StrataBilling.trxdateto" ref="ref_trxdatefrom" @from="MdtRange_trxdatefrom" @to="MdtRange_trxdateto" />
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_StrataBilling.currencycd" :label="M_TN_StrataBilling.currencycdLabel" ref="ref_currencycd"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_StrataBilling.credittermscd" :label="M_TN_StrataBilling.credittermscdLabel" ref="ref_credittermscd"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_StrataBilling.billingduedate"  ref="ref_billingduedate" />
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSinputTextVuex @input="OntotalareaChange" :prop="PI_totalarea" v-model="M_TN_StrataBilling.totalarea"  ref="ref_totalarea"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_StrataBilling.billingrate"  ref="ref_billingrate"/>
                              </b-col>
                            </b-row>
                            <b-row>
                              <b-col  md="12">
                                <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_StrataBilling.billingamt"  ref="ref_billingamt"/>
                              </b-col>
                            </b-row>
                        </b-col> <!-- table close -->
                        <b-col md="6" id="col-left"> <!-- table open -->
                          <b-row>
                              <b-col md="12">
                                  <ABSCompute :prop="PI_status" v-model="M_TN_StrataBilling.status"  ref="ref_status" />
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col md="12">
                                  <ABSCompute :prop="PI_invoiceno" v-model="M_TN_StrataBilling.invoiceno"  ref="ref_invoiceno" />
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col md="12">
                                  <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_StrataBilling.addresscd" :label="M_TN_StrataBilling.addresscdLabel" ref="ref_addresscd"/>
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col md="12">
                                  <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_StrataBilling.billingmethod"  ref="ref_billingmethod" />
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col md="12">
                                  <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_StrataBilling.termspayment"  ref="ref_termspayment" />
                              </b-col>
                          </b-row>
                          <b-row>
                              <b-col md="12">
                                  <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataBilling.remarks"  ref="ref_remarks" />
                              </b-col>
                          </b-row>
                        </b-col>
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
                initialWhere:"Status <> 'X' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And LotNo = '" + this.ValKey + "' and ApplicationNo IS NULL",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'BillingDate ASC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_StrataBilling :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                trxtype: '',
                modulecd: '',
                applicationno: '',
                lotno: '',
                wono: '',
                pmcontractno: '',
                facilitybookingno: '',
                debtorcd: '',
                installmentno: 0,
                descs: '',
                billingdate: '',
                billingduedate: '',
                trxdatefrom: '',
                trxdateto: '',
                currencycd: '',
                taxcd: '',
                credittermscd: '',
                includediscount: '',
                discountcd: '',
                discountamt: 0,
                totalarea: '0',
                billingrate: '0',
                billingamt: '0',
                baseamt: 0,
                taxamt: 0,
                billingtype: '',
                journaltype: '',
                billingmethod: 'F',
                termspayment: 'R',
                amortizestatus: '',
                journalcategory: '',
                addresscontactid: '',
                addresscd: '',
                tempno: '',
                debitno: '',
                postingdate: '',
                postedby: '',
                reasoncd: '',
                reasondescs: '',
                cancelby: '',
                canceldate: '',
                status: 'New/Pending',
                inputmethod: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
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
                controlsequenceno: 0,
                amortizemonthlyamt: 0,
                blno: '',
                rowid: 0,
                duedate: '',
                dueday: 0,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                invoiceno: ''
                    }
            ,
            PI_billingtype: { 
                cLabel: 'Charge Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debtorcd: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxType_ALL'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType IN ('Y','D','E') and SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
                cKey: false, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_invoiceno: { 
                cLabel: 'Invoice No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            
            PI_descs: { 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:2, 
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
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddressSubportfolio'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Address', 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'AddressCd,Address1' ,
            }, 
            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod2', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: 'F', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdatefrom: { 
                cValidate :'', 
                cName: 'trxdatefrom', 
                cLabel: 'Income Period Date From', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment2', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' },{ text: 'In Arrear', value: 'C' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:9, 
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
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_billingduedate: { 
                cValidate :'', 
                cName: 'billingduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalarea: { 
                cValidate :'', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingrate: { 
                cValidate :'', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'required', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount ', 
                cLabelSize: 4, 
                cOrder: 14, 
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
      BillingAmount(){
            var ttlArea = this.M_TN_StrataBilling.totalarea == '' || this.M_TN_StrataBilling.totalarea == null? 0 : this.replaceAllString(this.M_TN_StrataBilling.totalarea, ',', '', 'number')
            var bilRate = this.M_TN_StrataBilling.billingrate == '' || this.M_TN_StrataBilling.billingrate == null? 0 : this.replaceAllString(this.M_TN_StrataBilling.billingrate, ',', '', 'number')
            // var bilAmt  = this.M_TN_StrataBilling.billingamt == '' || this.M_TN_StrataBilling.billingamt == null? 0 : this.M_TN_StrataBilling.billingamt

            this.M_TN_StrataBilling.billingamt = this.isCurrency(parseInt(ttlArea) * parseInt(bilRate), this.decimal)
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBilling.trxtype = data.id
            this.M_TN_StrataBilling.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {

              if (data.id && data.id != "") {            
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                .then(dt => {
                  if (dt.length == 0) return
                  var datas = dt[0]
                  this.M_TN_StrataBilling.descs = datas.TrxTypeDescs
                  this.M_TN_StrataBilling.currencycd = datas.CurrencyCd
                  this.M_TN_StrataBilling.currencycdLabel = datas.CurrencyCd
                  this.M_TN_StrataBilling.credittermscd = datas.CreditTermsCd
                  this.M_TN_StrataBilling.credittermscdLabel = datas.CreditTermsCd

                  var paramGetChargeType = {
                    OptionFunctionCd: "GetChargeType",
                    ModuleCd: "TN",
                    TrxType: data.id
                  }

                  this.FnDynamicFunction(paramGetChargeType)
                  .then(ress => {
                    if (ress == null ||ress.length == 0) return

                    var datas2 = ress[0]
                    this.M_TN_StrataBilling.billingtype = datas2.TenancyChargeType
                  })
                })
              }
            }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBilling.addresscd = data.id
            this.M_TN_StrataBilling.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingdate}
            }
        })
        this.$forceUpdate()
        },
        OnbillingmethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingmethod}
            }
        })
        this.$forceUpdate()
        },
        OntermspaymentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{termspayment}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBilling.currencycd = data.id
            this.M_TN_StrataBilling.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
        OntotalareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.BillingAmount()
            }
        })        
        this.$forceUpdate()
        },
        OnbillingrateChange (data) {
        this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
            this.BillingAmount()
          }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBilling.credittermscd = data.id
            this.M_TN_StrataBilling.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
                    this.M_TN_StrataBilling.billingduedate = this.dateAdd2('D', this.M_TN_StrataBilling.billingdate, data.DueDay)    
            }
        })
        this.$forceUpdate()
        },
        OnbillingduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingduedate}
            }
        })
        this.$forceUpdate()
        },
        GetContract(){
          var param = {
                  OptionFunctionCd: "GetStrataGetDefault",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  LotNo: this.DataRowPage1.LotNo
            }
            
            this.FnDynamicFunction(param)
                .then(ress => {
                  if(ress ==null) return

                  var data = ress[0]
                  
                  // this.M_TN_ContractBilling2.totalarea = this.isCurrency(data.TotalArea, this.decimal)    
                  this.M_TN_StrataBilling.credittermscd = data.CreditTermsCd
                  this.M_TN_StrataBilling.credittermscdLabel = data.CreditTermsCd != null && data.CreditTermsCd != '' ? data.CreditTermsCd + this.separator + data.CreditTermDescs :'' 
                  
                  this.M_TN_StrataBilling.addresscd = data.AddressCd    
                  this.M_TN_StrataBilling.addresscdLabel = data.AddressCd != null && data.AddressCd != '' ? data.AddressCd + this.separator + data.Address1 :'' 
                })
        }
		
		,setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
           if(this.DataRowPage1.OwnerID == null || this.DataRowPage1.OwnerID == ''){
             this.getToolbar().statusFunction[0].disabled = true
             this.getToolbar().statusFunction[1].disabled = true
             this.$store.commit('setEditStatus', false)
           }else{
             this.getToolbar().statusFunction[0].disabled = false
             this.getToolbar().statusFunction[1].disabled = false
             this.$store.commit('setEditStatus', true)
           }
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
        
            this.M_TN_StrataBilling.lotno = data.LotNo
            this.M_TN_StrataBilling.addresscontactid = data.OwnerID
            
            
            this.propList.initialWhere ="Status <> 'X' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and LotNo = '"+ data.LotNo + "'and ApplicationNo IS NULL"

            
            var where = "SubPortfoliCd = '" + this.getDataUser().SubPortfolioCd + "' AND BillingStatus = 'Y' AND (ContactId='" + data.OwnerID + "' Or ContactID In (Select ContactID From TN_ContractOccupant Where LotNo='" + data.LotNo + "'))"
            
            this.$refs.ref_addresscd.prop.dataLookUp.InitialWhere = where
        
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BillingType: this.M_TN_StrataBilling.billingtype,
                TrxType: this.M_TN_StrataBilling.trxtype == '' || this.M_TN_StrataBilling.trxtype == null ? 'NULL' : this.M_TN_StrataBilling.trxtype ,
                Descs: this.M_TN_StrataBilling.descs,
                BillingDate: this.M_TN_StrataBilling.billingdate == '' || this.M_TN_StrataBilling.billingdate == null ? 'NULL' : this.M_TN_StrataBilling.billingdate ,
                BillingDueDate: this.M_TN_StrataBilling.billingduedate == '' || this.M_TN_StrataBilling.billingduedate == null ? 'NULL' : this.M_TN_StrataBilling.billingduedate ,
                TrxDateFrom: this.M_TN_StrataBilling.trxdatefrom == '' || this.M_TN_StrataBilling.trxdatefrom == null ? 'NULL' : this.M_TN_StrataBilling.trxdatefrom ,
                TrxDateTo: this.M_TN_StrataBilling.trxdateto == '' || this.M_TN_StrataBilling.trxdateto == null ? 'NULL' : this.M_TN_StrataBilling.trxdateto ,
                CurrencyCd: this.M_TN_StrataBilling.currencycd == '' || this.M_TN_StrataBilling.currencycd == null ? 'NULL' : this.M_TN_StrataBilling.currencycd ,
                CreditTermsCd: this.M_TN_StrataBilling.credittermscd == '' || this.M_TN_StrataBilling.credittermscd == null ? 'NULL' : this.M_TN_StrataBilling.credittermscd ,
                LotNo: this.M_TN_StrataBilling.lotno,
                TotalArea: this.M_TN_StrataBilling.totalarea ? this.replaceAllString(this.M_TN_StrataBilling.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_StrataBilling.billingrate ? this.replaceAllString(this.M_TN_StrataBilling.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_StrataBilling.billingamt ? this.replaceAllString(this.M_TN_StrataBilling.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_StrataBilling.addresscd,
                AddressContactId: this.M_TN_StrataBilling.addresscontactid,
                Remarks: this.M_TN_StrataBilling.remarks,
                DebtorCd: this.M_TN_StrataBilling.debtorcd,
                BillingMethod: this.M_TN_StrataBilling.billingmethod,
                TermsPayment: this.M_TN_StrataBilling.termspayment,
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
                BillingType: this.M_TN_StrataBilling.billingtype,
                BillingSequenceNo: this.M_TN_StrataBilling.billingsequenceno,
                TrxType: this.M_TN_StrataBilling.trxtype == '' || this.M_TN_StrataBilling.trxtype == null ? 'NULL' : this.M_TN_StrataBilling.trxtype ,
                Descs: this.M_TN_StrataBilling.descs,
                BillingDate: this.M_TN_StrataBilling.billingdate == '' || this.M_TN_StrataBilling.billingdate == null ? 'NULL' : this.M_TN_StrataBilling.billingdate ,
                BillingDueDate: this.M_TN_StrataBilling.billingduedate == '' || this.M_TN_StrataBilling.billingduedate == null ? 'NULL' : this.M_TN_StrataBilling.billingduedate ,
                TrxDateFrom: this.M_TN_StrataBilling.trxdatefrom == '' || this.M_TN_StrataBilling.trxdatefrom == null ? 'NULL' : this.M_TN_StrataBilling.trxdatefrom ,
                TrxDateTo: this.M_TN_StrataBilling.trxdateto == '' || this.M_TN_StrataBilling.trxdateto == null ? 'NULL' : this.M_TN_StrataBilling.trxdateto ,
                CurrencyCd: this.M_TN_StrataBilling.currencycd == '' || this.M_TN_StrataBilling.currencycd == null ? 'NULL' : this.M_TN_StrataBilling.currencycd ,
                CreditTermsCd: this.M_TN_StrataBilling.credittermscd == '' || this.M_TN_StrataBilling.credittermscd == null ? 'NULL' : this.M_TN_StrataBilling.credittermscd ,
                LotNo: this.M_TN_StrataBilling.lotno,
                TotalArea: this.M_TN_StrataBilling.totalarea ? this.replaceAllString(this.M_TN_StrataBilling.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_StrataBilling.billingrate ? this.replaceAllString(this.M_TN_StrataBilling.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_StrataBilling.billingamt ? this.replaceAllString(this.M_TN_StrataBilling.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_StrataBilling.addresscd,
                AddressContactId: this.M_TN_StrataBilling.addresscontactid,
                Remarks: this.M_TN_StrataBilling.remarks,
                BillingMethod: this.M_TN_StrataBilling.billingmethod,
                TermsPayment: this.M_TN_StrataBilling.termspayment,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_StrataBilling.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_StrataBilling = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                trxtype: '',
                modulecd: '',
                applicationno: '',
                lotno: '',
                wono: '',
                pmcontractno: '',
                facilitybookingno: '',
                debtorcd: '',
                installmentno: 0,
                descs: '',
                billingdate: '',
                billingduedate: '',
                trxdatefrom: '',
                trxdateto: '',
                currencycd: '',
                taxcd: '',
                credittermscd: '',
                includediscount: '',
                discountcd: '',
                discountamt: 0,
                totalarea: '0',
                billingrate: '0',
                billingamt: '0',
                baseamt: 0,
                taxamt: 0,
                billingtype: '',
                journaltype: '',
                billingmethod: 'F',
                termspayment: 'R',
                amortizestatus: '',
                journalcategory: '',
                addresscontactid: '',
                addresscd: '',
                tempno: '',
                debitno: '',
                postingdate: '',
                postedby: '',
                reasoncd: '',
                reasondescs: '',
                cancelby: '',
                canceldate: '',
                status: 'New/Pending',
                inputmethod: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
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
                controlsequenceno: 0,
                amortizemonthlyamt: 0,
                blno: '',
                rowid: 0,
                duedate: '',
                dueday: 0,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                invoiceno: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_StrataBilling.lotno = data.LotNo 
            this.M_TN_StrataBilling.totalarea = this.isCurrency(data.NetArea, this.decimal)
            this.M_TN_StrataBilling.addresscontactid = data.OwnerID
            
            this.GetContract()  


        },
        M_Edit(){
        },
        M_Delete(dt){           
          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            console.log(value)
            dataDelete.push({
                LotNo: value.LotNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BillingSequenceNo: value.BillingSequenceNo,
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

                    this.$parent.resultDelete()
                })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                lotno: record.LotNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: record.BillingSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                
                var status = ""
                if(data.status) {
                  if(data.status == 'N') {
                    status = "New/Pending"
                  }
                  else if(data.status == 'P') {
                    status = "Posted"
                  }
                  else if(data.status == 'T') {
                    status = "Billed Unposted"
                  }
                }

                var chargetype = ""
                if(data.billingtype) {
                  if(data.billingtype == 'C') {
                    chargetype = "C (Service Charge)"
                  }
                  else if(data.billingtype == 'F') {
                    chargetype = "F (Singking Fund)"
                  }
                  else if(data.billingtype == 'O') {
                    chargetype = "O (Other)"
                  }
                  else{
                    chargetype = "Unknown"
                  }
                }

this.M_TN_StrataBilling = {
                subportfoliocd: data.subportfoliocd,
                billingsequenceno: data.billingsequenceno,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                applicationno: data.applicationno,
                lotno: data.lotno,
                wono: data.wono,
                pmcontractno: data.pmcontractno,
                facilitybookingno: data.facilitybookingno,
                debtorcd: data.debtorcd,
                installmentno: this.isCurrency(data.installmentno, this.decimal),
                descs: data.descs,
                billingdate: data.billingdate,
                billingduedate: data.billingduedate,
                trxdatefrom: data.trxdatefrom,
                trxdateto: data.trxdateto,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                credittermscd: data.credittermscd,
                includediscount: data.includediscount,
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                totalarea: this.isCurrency(data.totalarea, this.decimal),
                billingrate: this.isCurrency(data.billingrate, this.decimal),
                billingamt: this.isCurrency(data.billingamt, this.decimal),
                baseamt: this.isCurrency(data.baseamt, this.decimal),
                taxamt: this.isCurrency(data.taxamt, this.decimal),
                billingtype: chargetype,
                journaltype: data.journaltype,
                billingmethod: data.billingmethod,
                termspayment: data.termspayment,
                amortizestatus: data.amortizestatus,
                journalcategory: data.journalcategory,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                tempno: data.tempno,
                debitno: data.debitno,
                postingdate: data.postingdate,
                postedby: data.postedby,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                cancelby: data.cancelby,
                canceldate: data.canceldate,
                status: status,
                inputmethod: data.inputmethod,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
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
                controlsequenceno: data.controlsequenceno,
                amortizemonthlyamt: this.isCurrency(data.amortizemonthlyamt, this.decimal),
                blno: data.blno,
                rowid: data.rowid,
                duedate: data.duedate,
                dueday: this.isCurrency(data.dueday, this.decimal),
                trxdescs: data.trxdescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                discountdescs: data.discountdescs,
                address1: data.address1,
                credittermsdescs: data.credittermsdescs,
                contactid: data.contactid,
                invoiceno: data.invoiceno
                    }
                 

                this.M_TN_StrataBilling.trxtypeLabel = this.M_TN_StrataBilling.trxtype != null && this.M_TN_StrataBilling.trxtype != '' ? data.trxtype + this.separator + data.descs :'' 
                this.M_TN_StrataBilling.addresscdLabel = this.M_TN_StrataBilling.addresscd != null && this.M_TN_StrataBilling.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_StrataBilling.currencycdLabel = this.M_TN_StrataBilling.currencycd != null && this.M_TN_StrataBilling.currencycd != '' ? data.currencycd + this.separator + data.currencydescs  :'' 
                this.M_TN_StrataBilling.credittermscdLabel = this.M_TN_StrataBilling.credittermscd != null && this.M_TN_StrataBilling.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_trxdatefrom (data) {
            this.M_TN_StrataBilling.trxdatefrom = data
        }
        ,MdtRange_trxdateto (data) {
            this.M_TN_StrataBilling.trxdateto = data
        },
        setColumnChargeTypeTransSCWhere() {
            // Lookup Trans Class SC
            var where = "ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType = 'D' and SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'"
            this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_trxtype.onChangeTriggered = true
            this.$refs.ref_trxtype.prop.cDefault = this.M_TN_StrataBilling.trxtype
        },
        setColumnChargeTypeTransSFWhere() {
            // Lookup trans Class
            var where = "ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType = 'E' and SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'"
            this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_trxtype.onChangeTriggered = true
            this.$refs.ref_trxtype.prop.cDefault = this.M_TN_StrataBilling.trxtype
        },
        setColumnChargeTypeTransOCWhere() {
            // Lookup Class
            var where = "ModuleCd = 'AR' AND TrxClass in ('I','T','P') AND TenancyChargeType = 'Y' and SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'"
            this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_trxtype.onChangeTriggered = true
            this.$refs.ref_trxtype.prop.cDefault = this.M_TN_StrataBilling.trxtype
        },
		
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

