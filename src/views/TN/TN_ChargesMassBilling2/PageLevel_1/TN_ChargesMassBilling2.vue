<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_ChargesMassBilling2.fromapplicationno" :label="M_TN_ChargesMassBilling2.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_ChargesMassBilling2.toapplicationno" :label="M_TN_ChargesMassBilling2.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ChargesMassBilling2.trxtype" :label="M_TN_ChargesMassBilling2.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndiscountcdChange" :prop="PI_discountcd" :value="M_TN_ChargesMassBilling2.discountcd" :label="M_TN_ChargesMassBilling2.discountcdLabel" ref="ref_discountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ChargesMassBilling2.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_TN_ChargesMassBilling2.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdatefromChange" :prop="PI_trxdatefrom" v-model="M_TN_ChargesMassBilling2.trxdatefrom"  ref="ref_trxdatefrom" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdatetoChange" :prop="PI_trxdateto" v-model="M_TN_ChargesMassBilling2.trxdateto"  ref="ref_trxdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_ChargesMassBilling2.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ChargesMassBilling2.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>    
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ChargesMassBilling2.currencycd" :label="M_TN_ChargesMassBilling2.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_ChargesMassBilling2.credittermscd" :label="M_TN_ChargesMassBilling2.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_ChargesMassBilling2.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargetypeChange" :prop="PI_chargetype" v-model="M_TN_ChargesMassBilling2.chargetype"  ref="ref_chargetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingrate" v-model="M_TN_ChargesMassBilling2.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_ChargesMassBilling2.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_ChargesMassBilling2.billingmethod"  ref="ref_billingmethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_ChargesMassBilling2.termspayment"  ref="ref_termspayment" />
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
            FormType: "Form",
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_ChargesMassBilling2 :{
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                discountcd: '',
                descs: '',
                discountamt: '',
                remarks: '',
                currencycd: '',
                trxdatefrom: '',
                trxdateto: '',
                credittermscd: '',
                chargetype: 'A',
                billingdate: this.getToday(),
                billingduedate: this.getToday(),
                billingrate: '',
                billingamt: '',
                billingmethod: 'F',
                termspayment: 'R'
                    }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'required', 
                cName: 'fromapplicationno', 
                cLabel: 'From Application No', 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_toapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'required', 
                cName: 'toapplicationno', 
                cLabel: 'To Application No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_trxdatefrom: { 
                cValidate :'', 
                cName: 'trxdatefrom', 
                cLabel: 'Amortize Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdateto: { 
                cValidate :'', 
                cName: 'trxdateto', 
                cLabel: 'Amortize Date to', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio1'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AR'"   , 
                    ParamWhere: ''  ,
                    SourceField: "TransactionType=TrxType,Descs,TimeEdit",
                    DisplayLookUp:'TransactionType,Descs'
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_discountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMDiscount'    , 
                    ColumnDB: 'DiscountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
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
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
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
                cOrder: 5, 
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
                cOrder:15, 
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
                cOrder: 6, 
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
            PI_billingdate: { 
                cValidate :'', 
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
            PI_billingduedate: { 
                cValidate :'', 
                cName: 'billingduedate', 
                cLabel: 'Billing Due Date', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargetype: { 
                cValidate :'', 
                cName: 'chargetype', 
                cId: 'rdbchargetype', 
                cRadioOptions: [{ text: 'Fix', value: 'F' },{ text: 'Area', value: 'A' },], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Basis', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingrate: { 
                cValidate :'required', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'required', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: 'F', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 10, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' },{ text: 'In Arrear', value: 'C' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
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
    }
  },
    methods: {		
        OnfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargesMassBilling2.fromapplicationno = data.id
            this.M_TN_ChargesMassBilling2.fromapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_TN_ChargesMassBilling2.toapplicationno = data.id
                this.M_TN_ChargesMassBilling2.toapplicationnoLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargesMassBilling2.toapplicationno = data.id
            this.M_TN_ChargesMassBilling2.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_TN_ChargesMassBilling2.trxtype = data.id
            this.M_TN_ChargesMassBilling2.trxtypeLabel = data.label
            this.M_TN_ChargesMassBilling2.descs = data.Descs
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != "") {
                    this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                    .then(dt => {
                        if (dt == null) return
                        if (dt.length == 0) return
                        var datas = dt[0]
                        this.M_TN_ChargesMassBilling2.descs = datas.TrxTypeDescs
                        if (datas.JournalType == 'D' && datas.AmortizeStatus == 'A') {
                            this.PI_trxdatefrom.cProtect = false
                            this.PI_trxdateto.cProtect = false
                        }
                        else {
                            this.PI_trxdatefrom.cProtect = true
                            this.PI_trxdateto.cProtect = true

                            this.M_TN_ChargesMassBilling2.trxdatefrom = ''
                            this.M_TN_ChargesMassBilling2.trxdateto = ''
                        }
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OndiscountcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargesMassBilling2.discountcd = data.id
            this.M_TN_ChargesMassBilling2.discountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != '') {
                    var billingamt = this.M_TN_ChargesMassBilling2.billingamt ? this.replaceAllString(this.M_TN_ChargesMassBilling2.billingamt, ',', '', 'number') : 0
                    this.FnGetDiscountAmount(billingamt, data.id)
                    .then(ress => {
                        var data = ress[0]
                        this.M_TN_ChargesMassBilling2.discountamt = this.isCurrency(data.DiscountAmt, this.decimal)
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OntrxdatefromChange  (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{discountcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxdatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{discountcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_TN_ChargesMassBilling2.currencycd = data.id
            this.M_TN_ChargesMassBilling2.currencycdLabel = data.label
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
        OncredittermscdChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_TN_ChargesMassBilling2.credittermscd = data.id
            this.M_TN_ChargesMassBilling2.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetCreditTermsData(data.id).then(dt => {
                if (dt != null) {
                  var data = dt[0]
                  this.M_TN_ChargesMassBilling2.dueday = data.Dueday
                  if (data.Dueday != null && data.Dueday != '') {
                    if (this.M_TN_ChargesMassBilling2.billingdate && this.M_TN_ChargesMassBilling2.billingdate != '') {
                      this.M_TN_ChargesMassBilling2.billingduedate = this.dateAdd2( 'd', this.M_TN_ChargesMassBilling2.billingdate, data.Dueday )
                    }
                  }
                }
              })
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (this.M_TN_ChargesMassBilling2.dueday && this.M_TN_ChargesMassBilling2.dueday != '') {
                  this.M_TN_ChargesMassBilling2.billingduedate = this.dateAdd2( 'd', data, this.M_TN_ChargesMassBilling2.dueday )
                }
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
        OnchargetypeChange (data) {
            this.M_TN_ChargesMassBilling2.chargetype = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data == 'A') {
                    this.PI_billingrate.cProtect = false
                    this.PI_billingamt.cProtect = true
                } 
                else {
                    this.PI_billingrate.cProtect = true
                    this.PI_billingamt.cProtect = false
                    this.M_TN_ChargesMassBilling2.billingrate = 1
                    this.M_TN_ChargesMassBilling2.billingamt = ""
                }
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
	
		setToolbarButton () {
           this.getToolbar().doEdit(true)   
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
            this.M_Update()
        },
        M_Update() {
            // console.log(this.M_TN_ChargesMassBilling2)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromApplicationNo: this.M_TN_ChargesMassBilling2.fromapplicationno == '' || this.M_TN_ChargesMassBilling2.fromapplicationno == null ? 'NULL' : this.M_TN_ChargesMassBilling2.fromapplicationno,
                ToApplicationNo: this.M_TN_ChargesMassBilling2.toapplicationno == '' || this.M_TN_ChargesMassBilling2.toapplicationno == null ? 'NULL' : this.M_TN_ChargesMassBilling2.toapplicationno,
                TrxType: this.M_TN_ChargesMassBilling2.trxtype == '' || this.M_TN_ChargesMassBilling2.trxtype == null ? 'NULL' : this.M_TN_ChargesMassBilling2.trxtype,
                Descs: this.M_TN_ChargesMassBilling2.descs,
                BillingDate: this.M_TN_ChargesMassBilling2.billingdate,
                BillingDueDate: this.M_TN_ChargesMassBilling2.billingduedate,
                CreditTermsCd: this.M_TN_ChargesMassBilling2.credittermscd,
                TrxDateFrom: this.M_TN_ChargesMassBilling2.trxdatefrom,
                TrxDateTo: this.M_TN_ChargesMassBilling2.trxdateto,
                CurrencyCd: this.M_TN_ChargesMassBilling2.currencycd,
                ChargeType: this.M_TN_ChargesMassBilling2.chargetype,
                BillingRate: this.M_TN_ChargesMassBilling2.billingrate ? this.replaceAllString(this.M_TN_ChargesMassBilling2.billingrate, ',', '', 'number') : 0,
                BillingAmt: this.M_TN_ChargesMassBilling2.billingamt ? this.replaceAllString(this.M_TN_ChargesMassBilling2.billingamt, ',', '', 'number') : 0,
                DiscountCd: this.M_TN_ChargesMassBilling2.discountcd,
                DiscountAmt: this.M_TN_ChargesMassBilling2.discountamt ? this.replaceAllString(this.M_TN_ChargesMassBilling2.discountamt, ',', '', 'number') : 0,
                Remarks: this.M_TN_ChargesMassBilling2.remarks,
                BillingMethod: this.M_TN_ChargesMassBilling2.billingmethod,
                TermsPayment: this.M_TN_ChargesMassBilling2.termspayment,
                UserInput: this.getDataUser().UserId
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doEdit()
                })
            })
        },
		M_ClearForm(){
            this.$nextTick(() => {
                this.M_TN_ChargesMassBilling2 = {
                    dummy: '',
                    fromapplicationno: '',
                    toapplicationno: '',
                    trxtype: '',
                    discountcd: '',
                    descs: '',
                    discountamt: '',
                    remarks: '',
                    currencycd: '',
                    trxdatefrom: '',
                    trxdateto: '',
                    credittermscd: '',
                    chargetype: 'A',
                    billingdate: this.getToday(),
                    billingduedate: this.getToday(),
                    billingrate: '',
                    billingamt: '',
                    billingmethod: 'F',
                    termspayment: 'R'
                }
            })
            this.$forceUpdate()
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },
        getDataBy (record) {
            this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
            this.getToolbar().doEdit()
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
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
