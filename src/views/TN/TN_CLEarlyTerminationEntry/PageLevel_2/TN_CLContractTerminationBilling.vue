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
                                        <ABSCompute :prop="PI_billingtype" v-model="M_TN_CLContractTerminationBilling.chargetypedescs"  ref="ref_billingtype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_CLContractTerminationBilling.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="4">
                                        <ABSCompute :prop="PI_debtorcd" v-model="M_TN_CLContractTerminationBilling.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_CLContractTerminationBilling.trxtype" :label="M_TN_CLContractTerminationBilling.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_CLContractTerminationBilling.addresscd" :label="M_TN_CLContractTerminationBilling.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="4">
                                        <ABSCompute :prop="PI_chargetypedescs" v-model="M_TN_CLContractTerminationBilling.chargetypedescs"  ref="ref_chargetypedescs" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_TN_CLContractTerminationBilling.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_CLContractTerminationBilling.billingmethod"  ref="ref_billingmethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_CLContractTerminationBilling.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_CLContractTerminationBilling.termspayment"  ref="ref_termspayment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_trxdate" :valueFrom="M_TN_CLContractTerminationBilling.trxdatefrom" :valueTo="M_TN_CLContractTerminationBilling.trxdateto" ref="ref_trxdate" @from="MdtRange_trxdatefrom" @to="MdtRange_trxdateto" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLContractTerminationBilling.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_CLContractTerminationBilling.currencycd" :label="M_TN_CLContractTerminationBilling.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_CLContractTerminationBilling.credittermscd" :label="M_TN_CLContractTerminationBilling.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_CLContractTerminationBilling.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntotalareaChange" :prop="PI_totalarea" v-model="M_TN_CLContractTerminationBilling.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_CLContractTerminationBilling.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnbillingamtChange" :prop="PI_billingamt" v-model="M_TN_CLContractTerminationBilling.billingamt"  ref="ref_billingamt"/>
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

            M_TN_CLContractTerminationBilling :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                terminationno: '',
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
                status: '',
                inputmethod: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: '',
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
                ar_terminationbillingschedule_id: 0,
                duedate: '',
                dueday: 0,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                statusdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                chargetypedescs: ''
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
            PI_debtorcd: { 
                cLabel: '', 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeTN'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
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
            PI_chargetypedescs: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddress'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Billing Address ', 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'AddressCd,TranslatedAddressType' ,
            },             
            PI_descs: { 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:3, 
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
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 4, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' },{ text: 'In Arrear', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Terms of Payment ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdate: { 
                cValidate :'', 
                cName: 'trxdate', 
                cLabel: 'Income Period Date', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
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
                cOrder: 11, 
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
                cOrder: 12, 
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
            PI_billingrate: { 
                cValidate :'', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
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
            PI_billingamt: { 
                cValidate :'required', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount ', 
                cLabelSize: 4, 
                cOrder: 15, 
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
            },
            ContractData: null,
            DueDay: 0
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
          var ttlArea = this.M_TN_CLContractTerminationBilling.totalarea == '' || this.M_TN_CLContractTerminationBilling.totalarea == null? 0 : this.M_TN_CLContractTerminationBilling.totalarea
          var bilRate = this.M_TN_CLContractTerminationBilling.billingrate == '' || this.M_TN_CLContractTerminationBilling.billingrate == null? 0 : this.M_TN_CLContractTerminationBilling.billingrate
          var bilAmt  = this.M_TN_CLContractTerminationBilling.billingamt == '' || this.M_TN_CLContractTerminationBilling.billingamt == null? 0 : this.M_TN_CLContractTerminationBilling.billingamt

          this.M_TN_CLContractTerminationBilling.billingamt = this.isCurrency(parseInt(ttlArea) * parseInt(bilRate), this.decimal)
      },
      OnbillingamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })        
        this.$forceUpdate()
        },
        OntotalareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              console.log(data)
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
        OntrxtypeChange (data) {
        this.$nextTick(() => {
          this.M_TN_CLContractTerminationBilling.trxtype = data.id
          this.M_TN_CLContractTerminationBilling.trxtypeLabel = data.label
          if (this.inputStatus != "VIEW") {
            this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, 'AR', data.id)
            .then(dt25 =>  {
              if (dt25 != null) {
                var datas = dt25[0]
                this.M_TN_CLContractTerminationBilling.descs = datas.TrxTypeDescs
                this.M_TN_CLContractTerminationBilling.currencycd = datas.CurrencyCd
                this.M_TN_CLContractTerminationBilling.currencycdLabel = datas.CurrencyCd

                var param2 = {
                    OptionFunctionCd: "GetChargeType",
                    ModuleCd: "TN",
                    TrxType: data.id
                }

                this.FnDynamicFunction(param2)
                .then(ress2 => {
                    if (ress2 == null || ress2.length < 1) {
                        return
                    }
                    this.M_TN_CLContractTerminationBilling.billingtype = ress2[0].TenancyChargeType
                    this.M_TN_CLContractTerminationBilling.chargetypedescs = ress2[0].ChargeTypeDescs
                })
              }
            })
          }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLContractTerminationBilling.addresscd = data.id
            this.M_TN_CLContractTerminationBilling.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
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
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (this.DueDay) {
                    this.M_TN_CLContractTerminationBilling.billingduedate = this.dateAdd2('d', data, this.DueDay)
                }
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
        OntrxdatefromChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdatefrom}
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
        OntrxdatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdateto}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLContractTerminationBilling.currencycd = data.id
            this.M_TN_CLContractTerminationBilling.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLContractTerminationBilling.credittermscd = data.id
            this.M_TN_CLContractTerminationBilling.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetCreditTermsData(data.id)
                .then(ress => {
                    if (ress == null) return
                    if (ress.length < 1) return
                    var dta = ress[0]
                    this.DueDay = dta.Dueday
                    if (this.M_TN_CLContractTerminationBilling.billingdate && this.M_TN_CLContractTerminationBilling.billingdate !== "") {
                    this.M_TN_CLContractTerminationBilling.billingduedate = this.dateAdd2('d', this.M_TN_CLContractTerminationBilling.billingdate, dta.Dueday)
                    }
                })
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

            if(data.StatusCode=='N'){
              this.$store.commit('setEditStatus', true)
            }else{
              this.$store.commit('setEditStatus', false)
            }
            this.M_TN_CLContractTerminationBilling.applicationno = data.ApplicationNo
            this.M_TN_CLContractTerminationBilling.terminationno = data.TerminationNo
            this.propList.initialWhere = " Status <> 'X' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and TerminationNo = '" + data.TerminationNo + "' AND ApplicationNo = '" + data.ApplicationNo + "' "
            // this.propList.initialWhere = " BillingType = 'O' AND Status <> 'X' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and TerminationNo = '" + data.TerminationNo + "' AND ApplicationNo = '" + data.ApplicationNo + "' " //with condition

            this.PI_trxtype.dataLookUp.InitialWhere = "ModuleCd = 'AR' AND TenancyChargeType IN ('K','L') and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"
            // this.PI_trxtype.dataLookUp.InitialWhere = "ModuleCd = 'AR' AND TrxClass = 'P' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'" //with condition
            this.getContractData(data.ApplicationNo)
            this.FormToABSList().doGetList('','eb_getList')
        },
        getContractData (appNo) {
          var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: appNo
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) {
              return
            }
            this.ContractData = ress[0]
            this.PI_addresscd.dataLookUp.InitialWhere = "BillingStatus = 'Y' AND (ContactId='" + ress[0].ContactId + "' OR ContactID IN (SELECT ContactID FROM TN_ContractOccupant WHERE SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + appNo + "'))"

            if (this.inputStatus == 'NEW') {
              this.M_TN_CLContractTerminationBilling.trxdatefrom = ress[0].StartDate
              this.M_TN_CLContractTerminationBilling.trxdateto = ress[0].EndDate
            }
          })
        },
        M_Insert() {
        if (this.M_TN_CLContractTerminationBilling.addresscontactid == "" || this.M_TN_CLContractTerminationBilling.addresscontactid == null)
             { this.M_TN_CLContractTerminationBilling.addresscontactid = this.M_TN_CLContractTerminationBilling.contactid }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TerminationNo: this.M_TN_CLContractTerminationBilling.terminationno,
                ApplicationNo: this.M_TN_CLContractTerminationBilling.applicationno,
                BillingType: this.M_TN_CLContractTerminationBilling.billingtype,
                TrxType: this.M_TN_CLContractTerminationBilling.trxtype == '' || this.M_TN_CLContractTerminationBilling.trxtype == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.trxtype ,
                Descs: this.M_TN_CLContractTerminationBilling.descs,
                BillingDate: this.M_TN_CLContractTerminationBilling.billingdate == '' || this.M_TN_CLContractTerminationBilling.billingdate == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.billingdate ,
                BillingDueDate: this.M_TN_CLContractTerminationBilling.billingduedate == '' || this.M_TN_CLContractTerminationBilling.billingduedate == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.billingduedate ,
                TrxDateFrom: this.M_TN_CLContractTerminationBilling.trxdatefrom == '' || this.M_TN_CLContractTerminationBilling.trxdatefrom == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.trxdatefrom ,
                TrxDateTo: this.M_TN_CLContractTerminationBilling.trxdateto == '' || this.M_TN_CLContractTerminationBilling.trxdateto == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.trxdateto ,
                CurrencyCd: this.M_TN_CLContractTerminationBilling.currencycd,
                CreditTermsCd: this.M_TN_CLContractTerminationBilling.credittermscd == '' || this.M_TN_CLContractTerminationBilling.credittermscd == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.credittermscd ,
                LotNo: this.M_TN_CLContractTerminationBilling.lotno,
                TotalArea: this.M_TN_CLContractTerminationBilling.totalarea ? this.replaceAllString(this.M_TN_CLContractTerminationBilling.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_CLContractTerminationBilling.billingrate ? this.replaceAllString(this.M_TN_CLContractTerminationBilling.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_CLContractTerminationBilling.billingamt ? this.replaceAllString(this.M_TN_CLContractTerminationBilling.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_CLContractTerminationBilling.addresscd == '' || this.M_TN_CLContractTerminationBilling.addresscd == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.addresscd ,
                AddressContactId: this.M_TN_CLContractTerminationBilling.addresscontactid,
                Remarks: this.M_TN_CLContractTerminationBilling.remarks,
                DebtorCd: this.M_TN_CLContractTerminationBilling.debtorcd,
                BillingMethod: this.M_TN_CLContractTerminationBilling.billingmethod,
                TermsPayment: this.M_TN_CLContractTerminationBilling.termspayment,
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
        if (this.M_TN_CLContractTerminationBilling.addresscontactid == "" || this.M_TN_CLContractTerminationBilling.addresscontactid == null)
             { this.M_TN_CLContractTerminationBilling.addresscontactid = this.M_TN_CLContractTerminationBilling.contactid }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TerminationNo: this.M_TN_CLContractTerminationBilling.terminationno,
                ApplicationNo: this.M_TN_CLContractTerminationBilling.applicationno,
                BillingType: this.M_TN_CLContractTerminationBilling.billingtype,
                BillingSequenceNo: this.M_TN_CLContractTerminationBilling.billingsequenceno,
                TrxType: this.M_TN_CLContractTerminationBilling.trxtype == '' || this.M_TN_CLContractTerminationBilling.trxtype == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.trxtype ,
                Descs: this.M_TN_CLContractTerminationBilling.descs,
                BillingDate: this.M_TN_CLContractTerminationBilling.billingdate == '' || this.M_TN_CLContractTerminationBilling.billingdate == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.billingdate ,
                BillingDueDate: this.M_TN_CLContractTerminationBilling.billingduedate == '' || this.M_TN_CLContractTerminationBilling.billingduedate == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.billingduedate ,
                TrxDateFrom: this.M_TN_CLContractTerminationBilling.trxdatefrom == '' || this.M_TN_CLContractTerminationBilling.trxdatefrom == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.trxdatefrom ,
                TrxDateTo: this.M_TN_CLContractTerminationBilling.trxdateto == '' || this.M_TN_CLContractTerminationBilling.trxdateto == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.trxdateto ,
                CurrencyCd: this.M_TN_CLContractTerminationBilling.currencycd,
                CreditTermsCd: this.M_TN_CLContractTerminationBilling.credittermscd == '' || this.M_TN_CLContractTerminationBilling.credittermscd == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.credittermscd ,
                LotNo: this.M_TN_CLContractTerminationBilling.lotno,
                TotalArea: this.M_TN_CLContractTerminationBilling.totalarea ? this.replaceAllString(this.M_TN_CLContractTerminationBilling.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_CLContractTerminationBilling.billingrate ? this.replaceAllString(this.M_TN_CLContractTerminationBilling.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_CLContractTerminationBilling.billingamt ? this.replaceAllString(this.M_TN_CLContractTerminationBilling.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_CLContractTerminationBilling.addresscd == '' || this.M_TN_CLContractTerminationBilling.addresscd == null ? 'NULL' : this.M_TN_CLContractTerminationBilling.addresscd ,
                AddressContactId: this.M_TN_CLContractTerminationBilling.addresscontactid,
                Remarks: this.M_TN_CLContractTerminationBilling.remarks,
                BillingMethod: this.M_TN_CLContractTerminationBilling.billingmethod,
                TermsPayment: this.M_TN_CLContractTerminationBilling.termspayment,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLContractTerminationBilling.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })


        },
		M_ClearForm(){
            this.M_TN_CLContractTerminationBilling = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                terminationno: '',
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
                totalarea: '',
                billingrate: '',
                billingamt: '',
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
                status: 'New',
                inputmethod: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: '',
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
                ar_terminationbillingschedule_id: 0,
                duedate: '',
                dueday: 0,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                statusdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                chargetypedescs: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_CLContractTerminationBilling.applicationno = data.ApplicationNo
            this.M_TN_CLContractTerminationBilling.terminationno = data.TerminationNo
        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            
			data.forEach((value) => {	
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TerminationNo: this.DataRowPage1.TerminationNo,
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                terminationno: record.TerminationNo,
                applicationno: record.ApplicationNo,
                billingsequenceno: record.BillingSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_CLContractTerminationBilling = {
                subportfoliocd: data.subportfoliocd,
                billingsequenceno: data.billingsequenceno,
                terminationno: data.terminationno,
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
                billingtype: data.billingtype,
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
                status: data.statusdescs,
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
                ar_terminationbillingschedule_id: this.isCurrency(data.ar_terminationbillingschedule_id, this.decimal),
                duedate: data.duedate,
                dueday: this.isCurrency(data.dueday, this.decimal),
                trxdescs: data.trxdescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                discountdescs: data.discountdescs,
                statusdescs: data.statusdescs,
                address1: data.address1,
                credittermsdescs: data.credittermsdescs,
                contactid: data.contactid,
                chargetypedescs: data.chargetypedescs
                    }
                 

                this.M_TN_CLContractTerminationBilling.trxtypeLabel = this.M_TN_CLContractTerminationBilling.trxtype != null && this.M_TN_CLContractTerminationBilling.trxtype != '' ? data.trxtype + this.separator + data.trxdescs :'' 
                this.M_TN_CLContractTerminationBilling.addresscdLabel = this.M_TN_CLContractTerminationBilling.addresscd != null && this.M_TN_CLContractTerminationBilling.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_CLContractTerminationBilling.currencycdLabel = this.M_TN_CLContractTerminationBilling.currencycd != null && this.M_TN_CLContractTerminationBilling.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_CLContractTerminationBilling.credittermscdLabel = this.M_TN_CLContractTerminationBilling.credittermscd != null && this.M_TN_CLContractTerminationBilling.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_trxdatefrom (data) {
            this.M_TN_CLContractTerminationBilling.trxdatefrom = data
        }
        ,MdtRange_trxdateto (data) {
            this.M_TN_CLContractTerminationBilling.trxdateto = data
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

