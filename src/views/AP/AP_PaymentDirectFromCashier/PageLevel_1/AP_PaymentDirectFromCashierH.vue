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
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AP_PaymentDirectFromCashierH.cashierno"  ref="ref_cashierno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_PaymentDirectFromCashierH.trxtype" :label="M_AP_PaymentDirectFromCashierH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AP_PaymentDirectFromCashierH.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OndebitdateChange" :prop="PI_debitdate" v-model="M_AP_PaymentDirectFromCashierH.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_PaymentDirectFromCashierH.creditorcd" :label="M_AP_PaymentDirectFromCashierH.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_PaymentDirectFromCashierH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_PaymentDirectFromCashierH.currencycd" :label="M_AP_PaymentDirectFromCashierH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_PaymentDirectFromCashierH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_AP_PaymentDirectFromCashierH.paymentcd" :label="M_AP_PaymentDirectFromCashierH.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_AP_PaymentDirectFromCashierH.bankcd" :label="M_AP_PaymentDirectFromCashierH.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AP_PaymentDirectFromCashierH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_AP_PaymentDirectFromCashierH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_AP_PaymentDirectFromCashierH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AP_PaymentDirectFromCashierH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalnetallocated" v-model="M_AP_PaymentDirectFromCashierH.totalnetallocated"  ref="ref_totalnetallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_holdvatamt" v-model="M_AP_PaymentDirectFromCashierH.holdvatamt"  ref="ref_holdvatamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalvatallocated" v-model="M_AP_PaymentDirectFromCashierH.totalvatallocated"  ref="ref_totalvatallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_holdwithholdingamt" v-model="M_AP_PaymentDirectFromCashierH.holdwithholdingamt"  ref="ref_holdwithholdingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalwithholdingallocated" v-model="M_AP_PaymentDirectFromCashierH.totalwithholdingallocated"  ref="ref_totalwithholdingallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnbankchargesamtChange" :prop="PI_bankchargesamt" v-model="M_AP_PaymentDirectFromCashierH.bankchargesamt"  ref="ref_bankchargesamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnoverpaymentamtChange" :prop="PI_overpaymentamt" v-model="M_AP_PaymentDirectFromCashierH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnunderpaymentamtChange" :prop="PI_underpaymentamt" v-model="M_AP_PaymentDirectFromCashierH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AP_PaymentDirectFromCashierH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AP_PaymentDirectFromCashierH.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AP_PaymentDirectFromCashierH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AP_PaymentDirectFromCashierH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_PaymentDirectFromCashierH.remarks"  ref="ref_remarks" />
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
  props: {PageLevel: '', TabIndex: '', data: ''},
  data() {
    return {
      cInsertKey:'',
      FormType: "ListProcess",
      Module:"AP",
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
      M_AP_PaymentDirectFromCashierH :{
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        batchno: 0,
        cashierno: '',
        trxtype: '',
        debitno: '',
        debitdate: '',
        creditorcd: '',
        descs: '',
        paymentcd: '',
        currencycd: '',
        bankcd: '',
        chequereferenceno: '',
        currencyrate: 0,
        chequereferencedate: '',
        chequeduedate: '',
        creditamt: 0,
        holdvatamt: 0,
        holdwithholdingamt: 0,
        bankchargesamt: '0',
        overpaymentamt: '0',
        underpaymentamt: '0',
        allocatedamt: 0,
        forexgainlossamt: 0,
        totalallocationamt: 0,
        remarks: '',
        status: '',
        userinput: '',
        useredit: this.getDataUser().UserId,
        documentcount: 0,
        batchtotal: 0,
        batchstatus: '',
        totalnetallocated: 0,
        totalvatallocated: 0,
        totalwithholdingallocated: 0,
        lastupdatestamp: 0,
        trxtypedescs: '',
        currentbatchtotal: 0,
        currentdocumentcount: 0,
        creditorname: '',
        basecurrencycd: '',
        maximumoverpaymentamt: 0,
        maximumunderpaymentamt: 0,
        maximumbankchargesamt: 0,
        rowid: 0,
        balanceamt: ''
      },
      PI_cashierno: { 
        cValidate :'', 
        cName: 'cashierno', 
        cLabel: 'Cashier No', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cType: 'text',
        cVisible: true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_trxtype: { 
        dataLookUp: { 
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SUBPORTFOLIOCD = '" +
            this.getDataUser().SubPortfolioCd +
            "' AND MODULECD = 'AP' AND TrxClass='M'",
          ParamWhere: ""
        }, 
        cValidate :'required', 
        cName: 'trxtype', 
        cLabel: 'Trans. Type', 
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
        cMasterUrl: "AR/AR_TransactionTypeSubPortfolioMaintenance",
        cDisplayColumn: "TransactionType,Descs"
      }, 
      PI_debitno: { 
        cValidate :'required|max:20', 
        cName: 'debitno', 
        cLabel: 'Payment No ', 
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
      PI_debitdate: { 
        cValidate :'', 
        cName: 'debitdate', 
        cLabel: 'Payement Date', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cVisible:  true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_creditorcd: { 
        dataLookUp: { 
          LookUpCd: ''    , 
          ColumnDB: ''   , 
          InitialWhere: ""   , 
          ParamWhere: '' ,
          SourceField: ''  ,
          DisplayLookup: '' 
        }, 
        cValidate :'', 
        cName: 'creditorcd', 
        cLabel: 'Creditor Code', 
        cKey: true, 
        cLabelSize: 4, 
        cOrder: -1, 
        cTriggered: false, 
        cDefault: '', 
        cProtect: true, 
        cVisible:  true, 
        cAsync:  false, 
        cFilter: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
        cStatic: false, 
        cOption: [], 
        cMasterUrl: '' ,
        cDisplayColumn: '' ,
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
      PI_currencycd: { 
        dataLookUp: { 
          LookUpCd: ''    , 
          ColumnDB: ''   , 
          InitialWhere: ""   , 
          ParamWhere: '' ,
          SourceField: ''  ,
          DisplayLookup: '' 
        }, 
        cValidate :'', 
        cName: 'currencycd', 
        cLabel: 'Currency', 
        cKey: true, 
        cLabelSize: 4, 
        cOrder: -1, 
        cTriggered: false, 
        cDefault: '', 
        cProtect: true, 
        cVisible:  true, 
        cAsync:  false, 
        cFilter: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
        cStatic: false, 
        cOption: [], 
        cMasterUrl: '' ,
        cDisplayColumn: '' ,
      }, 
      PI_currencyrate: { 
        cValidate :'', 
        cName: 'currencyrate', 
        cLabel: 'Currency Rate', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cType: 'decimal',
        cDecimal: 2, 
        cVisible: true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_paymentcd: { 
        dataLookUp: { 
          LookUpCd: ''    , 
          ColumnDB: ''   , 
          InitialWhere: ""   , 
          ParamWhere: '' ,
          SourceField: ''  ,
          DisplayLookup: '' 
        }, 
        cValidate :'', 
        cName: 'paymentcd', 
        cLabel: 'Payment Type', 
        cKey: true, 
        cLabelSize: 4, 
        cOrder: -1, 
        cTriggered: false, 
        cDefault: '', 
        cProtect: true, 
        cVisible:  true, 
        cAsync:  false, 
        cFilter: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
        cStatic: false, 
        cOption: [], 
        cMasterUrl: '' ,
        cDisplayColumn: '' ,
      }, 
      PI_bankcd: { 
        dataLookUp: { 
          LookUpCd: ''    , 
          ColumnDB: ''   , 
          InitialWhere: ""   , 
          ParamWhere: '' ,
          SourceField: ''  ,
          DisplayLookup: '' 
        }, 
        cValidate :'', 
        cName: 'bankcd', 
        cLabel: 'Bank', 
        cKey: true, 
        cLabelSize: 4, 
        cOrder: -1, 
        cTriggered: false, 
        cDefault: '', 
        cProtect: true, 
        cVisible:  true, 
        cAsync:  false, 
        cFilter: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
        cStatic: false, 
        cOption: [], 
        cMasterUrl: '' ,
        cDisplayColumn: '' ,
      }, 
      PI_chequereferenceno: { 
        cValidate :'', 
        cName: 'chequereferenceno', 
        cLabel: 'Cheque / Ref. No', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cType: 'text',
        cVisible: true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_chequereferencedate: { 
        cValidate :'', 
        cName: 'chequereferencedate', 
        cLabel: 'Cheque / Ref Date', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cVisible:  true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_chequeduedate: { 
        cValidate :'', 
        cName: 'chequeduedate', 
        cLabel: 'Due Date', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cVisible:  true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_creditamt: { 
        cValidate :'', 
        cName: 'creditamt', 
        cLabel: 'Payment Amount', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cType: 'decimal',
        cDecimal: 2, 
        cVisible: true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_totalnetallocated: { 
        cValidate :'', 
        cName: 'totalnetallocated', 
        cLabel: 'Net Allocated', 
        cLabelSize: 4, 
        cOrder: -1, 
        cKey: true, 
        cType: 'decimal',
        cDecimal: 2, 
        cVisible: true, 
        cProtect: true, 
        cPageLevel: this.PageLevel, 
        cTabIndex: this.TabIndex, 
        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_holdvatamt: { 
          cValidate :'', 
          cName: 'holdvatamt', 
          cLabel: 'Hold VAT Amount', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_totalvatallocated: { 
          cValidate :'', 
          cName: 'totalvatallocated', 
          cLabel: 'VAT Allocated', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_holdwithholdingamt: { 
          cValidate :'', 
          cName: 'holdwithholdingamt', 
          cLabel: 'Hold Withholding Amount', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_totalwithholdingallocated: { 
          cValidate :'', 
          cName: 'totalwithholdingallocated', 
          cLabel: 'Withholding Allocated', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_bankchargesamt: { 
          cValidate :'', 
          cName: 'bankchargesamt', 
          cLabel: 'Bank Charges', 
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
      PI_overpaymentamt: { 
          cValidate :'', 
          cName: 'overpaymentamt', 
          cLabel: 'Over Payment Amount', 
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
      PI_underpaymentamt: { 
          cValidate :'', 
          cName: 'underpaymentamt', 
          cLabel: 'Under Payment Amount', 
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
      PI_totalallocationamt: { 
          cValidate :'', 
          cName: 'totalallocationamt', 
          cLabel: 'Total Allocation Amount', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_allocatedamt: { 
          cValidate :'', 
          cName: 'allocatedamt', 
          cLabel: 'Total Allocated', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_forexgainlossamt: { 
          cValidate :'', 
          cName: 'forexgainlossamt', 
          cLabel: 'Forex', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_balanceamt: { 
          cValidate :'', 
          cName: 'balanceamt', 
          cLabel: 'Balance Amount', 
          cLabelSize: 4, 
          cOrder: -1, 
          cKey: true, 
          cType: 'decimal',
          cDecimal: 2, 
          cVisible: true, 
          cProtect: true, 
          cPageLevel: this.PageLevel, 
          cTabIndex: this.TabIndex, 
          cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
      }, 
      PI_remarks: { 
          cValidate :'', 
          cName:'remarks', 
          cLabel:'Remarks', 
          cLabelSize: 4, 
          cOrder:0, 
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
    OntrxtypeChange (data) {
      this.$nextTick(() => {
        this.M_AP_PaymentDirectFromCashierH.trxtype = data.id
        this.M_AP_PaymentDirectFromCashierH.trxtypeLabel = data.label
        if (this.inputStatus != "VIEW") {
          this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
            if (dt != null && dt.length > 0) { 
              var dta = dt[0]
              this.M_AP_PaymentDirectFromCashierH.runningcd = dta.RunningCd
              this.M_AP_PaymentDirectFromCashierH.trxtypeLabel = data.id + this.separator + dta.TrxTypeDescs
              // this.M_AP_PaymentDirectFromCashierH.descs = dta.TrxTypeDescs
              
              if (this.DataRow.DebitNo == null || this.DataRow.DebitNo == "") {
                if (dta.RunningCd != '') {
                  this.M_AP_PaymentDirectFromCashierH.debitno = "(auto)"
                  this.PI_debitno.cProtect = true
                }
                else {
                  this.M_AP_PaymentDirectFromCashierH.debitno = ""
                  this.PI_debitno.cProtect = false
                }
              }
            }
          })
        }
      })
      this.$forceUpdate()
    },
    OndebitdateChange (data) {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OncreditorcdChange (data) {
      this.$nextTick(() => {
          this.M_AP_PaymentDirectFromCashierH.creditorcd = data.id
          this.M_AP_PaymentDirectFromCashierH.creditorcdLabel = data.label
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OncurrencycdChange (data) {
      this.$nextTick(() => {
          this.M_AP_PaymentDirectFromCashierH.currencycd = data.id
          this.M_AP_PaymentDirectFromCashierH.currencycdLabel = data.label
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OnpaymentcdChange (data) {
      this.$nextTick(() => {
          this.M_AP_PaymentDirectFromCashierH.paymentcd = data.id
          this.M_AP_PaymentDirectFromCashierH.paymentcdLabel = data.label
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OnbankcdChange (data) {
      this.$nextTick(() => {
          this.M_AP_PaymentDirectFromCashierH.bankcd = data.id
          this.M_AP_PaymentDirectFromCashierH.bankcdLabel = data.label
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OnchequereferencedateChange (data) {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OnchequeduedateChange (data) {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    OnbankchargesamtChange() {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
            this.CalculateTotalAllocationAmount()
          }
      })
      this.$forceUpdate()
    },
    OnoverpaymentamtChange() {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
            this.CalculateTotalAllocationAmount()
          }
      })
      this.$forceUpdate()
    },
    OnunderpaymentamtChange() {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
            this.CalculateTotalAllocationAmount()
          }
      })
      this.$forceUpdate()
    },
    OnremarksChange (data) {
      this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
          }
      })
      this.$forceUpdate()
    },
    setToolbarButton () {
      this.$store.commit('setNewStatus', false)
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
    },	
    M_CheckboxChecked(data, status, index){
    },
    M_Post(dt){
      var dataPost = []
      var data = this.FormToABSList().getRowSelected()
      
      data.forEach((value) => {
        dataPost.push({
          SubPortfolioCd : this.getDataUser().SubPortfolioCd,
          BatchNo: value.BatchNo,
          ModuleCd: this.Module,
          UserInput: this.getDataUser().UserId,
          _Message_: "Payment No: " + value.DebitNo
        })
      })

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataPost
      }
      
      this.postJSONMulti( this.getUrlPostMulti(), param )
      .then(response => {
        if (response == null) return
        this.$parent.resultPost()
      })
    },
    M_Insert() {
    },
    M_Update() {
      if (this.DataRow.DebitNo == null || this.DataRow.DebitNo == "") {
        if (this.M_AP_PaymentDirectFromCashierH.runningcd != "") {
          this.FnGenerateRunningCode(
            this.getDataUser().SubPortfolioCd,
            this.M_AP_PaymentDirectFromCashierH.runningcd,
            this.getDataUser().UserId,
            this.M_AP_PaymentDirectFromCashierH.debitdate
          )
          .then(dt9 => {
            if (dt9 != null) {
              this.M_AP_PaymentDirectFromCashierH.debitno = dt9.RunningCode
              var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AP_PaymentDirectFromCashierH.batchno == '' || this.M_AP_PaymentDirectFromCashierH.batchno == null ? '0' : this.M_AP_PaymentDirectFromCashierH.batchno ,
                Source: 'P',
                CashierNo: this.M_AP_PaymentDirectFromCashierH.cashierno,
                CreditorCd: this.M_AP_PaymentDirectFromCashierH.creditorcd == '' || this.M_AP_PaymentDirectFromCashierH.creditorcd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.creditorcd ,
                TrxType: this.M_AP_PaymentDirectFromCashierH.trxtype == '' || this.M_AP_PaymentDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.trxtype ,
                ModuleCd: this.Module,
                DebitNo: this.M_AP_PaymentDirectFromCashierH.debitno,
                DebitDate: this.M_AP_PaymentDirectFromCashierH.debitdate == '' || this.M_AP_PaymentDirectFromCashierH.debitdate == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.debitdate ,
                Descs: this.M_AP_PaymentDirectFromCashierH.descs,
                PaymentCd: this.M_AP_PaymentDirectFromCashierH.paymentcd == '' || this.M_AP_PaymentDirectFromCashierH.paymentcd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.paymentcd ,
                BankCd: this.M_AP_PaymentDirectFromCashierH.bankcd == '' || this.M_AP_PaymentDirectFromCashierH.bankcd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.bankcd ,
                CurrencyCd: this.M_AP_PaymentDirectFromCashierH.currencycd == '' || this.M_AP_PaymentDirectFromCashierH.currencycd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.currencycd ,
                CurrencyRate: this.M_AP_PaymentDirectFromCashierH.currencyrate ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.currencyrate,',','','number') : 0 ,
                ChequeReferenceNo: this.M_AP_PaymentDirectFromCashierH.chequereferenceno,
                ChequeReferenceDate: this.M_AP_PaymentDirectFromCashierH.chequereferencedate == '' || this.M_AP_PaymentDirectFromCashierH.chequereferencedate == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.chequereferencedate ,
                ChequeDueDate: this.M_AP_PaymentDirectFromCashierH.chequeduedate == '' || this.M_AP_PaymentDirectFromCashierH.chequeduedate == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.chequeduedate ,
                CreditAmt: this.M_AP_PaymentDirectFromCashierH.creditamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.creditamt,',','','number') : 0 ,
                BankChargesAmt: this.M_AP_PaymentDirectFromCashierH.bankchargesamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.bankchargesamt,',','','number') : 0 ,
                OverPaymentAmt: this.M_AP_PaymentDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_PaymentDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AP_PaymentDirectFromCashierH.remarks,
                UserInput: this.getDataUser().UserId ,
                AutoAllocate: 'N',
                LastUpdateStamp: this.M_AP_PaymentDirectFromCashierH.lastupdatestamp
              }

              this.postEncode(this.getUrlInsert(), param)
              .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
              })
            }
          })
        }
        else {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BatchNo: this.M_AP_PaymentDirectFromCashierH.batchno == '' || this.M_AP_PaymentDirectFromCashierH.batchno == null ? '0' : this.M_AP_PaymentDirectFromCashierH.batchno ,
            Source: 'P',
            CashierNo: this.M_AP_PaymentDirectFromCashierH.cashierno,
            CreditorCd: this.M_AP_PaymentDirectFromCashierH.creditorcd == '' || this.M_AP_PaymentDirectFromCashierH.creditorcd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.creditorcd ,
            TrxType: this.M_AP_PaymentDirectFromCashierH.trxtype == '' || this.M_AP_PaymentDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.trxtype ,
            ModuleCd: this.Module,
            DebitNo: this.M_AP_PaymentDirectFromCashierH.debitno,
            DebitDate: this.M_AP_PaymentDirectFromCashierH.debitdate == '' || this.M_AP_PaymentDirectFromCashierH.debitdate == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.debitdate ,
            Descs: this.M_AP_PaymentDirectFromCashierH.descs,
            PaymentCd: this.M_AP_PaymentDirectFromCashierH.paymentcd == '' || this.M_AP_PaymentDirectFromCashierH.paymentcd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.paymentcd ,
            BankCd: this.M_AP_PaymentDirectFromCashierH.bankcd == '' || this.M_AP_PaymentDirectFromCashierH.bankcd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.bankcd ,
            CurrencyCd: this.M_AP_PaymentDirectFromCashierH.currencycd == '' || this.M_AP_PaymentDirectFromCashierH.currencycd == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.currencycd ,
            CurrencyRate: this.M_AP_PaymentDirectFromCashierH.currencyrate ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.currencyrate,',','','number') : 0 ,
            ChequeReferenceNo: this.M_AP_PaymentDirectFromCashierH.chequereferenceno,
            ChequeReferenceDate: this.M_AP_PaymentDirectFromCashierH.chequereferencedate == '' || this.M_AP_PaymentDirectFromCashierH.chequereferencedate == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.chequereferencedate ,
            ChequeDueDate: this.M_AP_PaymentDirectFromCashierH.chequeduedate == '' || this.M_AP_PaymentDirectFromCashierH.chequeduedate == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.chequeduedate ,
            CreditAmt: this.M_AP_PaymentDirectFromCashierH.creditamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.creditamt,',','','number') : 0 ,
            BankChargesAmt: this.M_AP_PaymentDirectFromCashierH.bankchargesamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.bankchargesamt,',','','number') : 0 ,
            OverPaymentAmt: this.M_AP_PaymentDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
            UnderPaymentAmt: this.M_AP_PaymentDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
            Remarks: this.M_AP_PaymentDirectFromCashierH.remarks,
            UserInput: this.getDataUser().UserId ,
            AutoAllocate: 'N',
            LastUpdateStamp: this.M_AP_PaymentDirectFromCashierH.lastupdatestamp
          }

          this.postEncode(this.getUrlInsert(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultInsert(response.Message)
          })
        }
      }
      else {
        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo: this.M_AP_PaymentDirectFromCashierH.batchno == '' || this.M_AP_PaymentDirectFromCashierH.batchno == null ? '0' : this.M_AP_PaymentDirectFromCashierH.batchno ,
          Source: 'P',
          TrxType: this.M_AP_PaymentDirectFromCashierH.trxtype == '' || this.M_AP_PaymentDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AP_PaymentDirectFromCashierH.trxtype ,
          DebitNo: this.M_AP_PaymentDirectFromCashierH.debitno,
          Descs: this.M_AP_PaymentDirectFromCashierH.descs,
          CreditAmt: this.M_AP_PaymentDirectFromCashierH.creditamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.creditamt,',','','number') : 0 ,
          BankChargesAmt: this.M_AP_PaymentDirectFromCashierH.bankchargesamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.bankchargesamt,',','','number') : 0 ,
          OverPaymentAmt: this.M_AP_PaymentDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
          UnderPaymentAmt: this.M_AP_PaymentDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AP_PaymentDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
          Remarks: this.M_AP_PaymentDirectFromCashierH.remarks,
          UserEdit: this.getDataUser().UserId ,
          LastUpdateStamp: this.M_AP_PaymentDirectFromCashierH.lastupdatestamp
        }

        this.postEncode(this.getUrlUpdate(), param)
        .then((response) => {
          if(response == null) return
          this.$parent.resultUpdate(response.Message)
        })
      }
    },
    M_ClearForm(){
      this.M_AP_PaymentDirectFromCashierH = {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        batchno: 0,
        cashierno: '',
        trxtype: '',
        debitno: '',
        debitdate: '',
        creditorcd: '',
        descs: '',
        paymentcd: '',
        currencycd: '',
        bankcd: '',
        chequereferenceno: '',
        currencyrate: 0,
        chequereferencedate: '',
        chequeduedate: '',
        creditamt: 0,
        holdvatamt: 0,
        holdwithholdingamt: 0,
        bankchargesamt: '0',
        overpaymentamt: '0',
        underpaymentamt: '0',
        allocatedamt: 0,
        forexgainlossamt: 0,
        totalallocationamt: 0,
        remarks: '',
        status: '',
        userinput: '',
        useredit: this.getDataUser().UserId,
        documentcount: 0,
        batchtotal: 0,
        batchstatus: '',
        totalnetallocated: 0,
        totalvatallocated: 0,
        totalwithholdingallocated: 0,
        lastupdatestamp: 0,
        trxtypedescs: '',
        currentbatchtotal: 0,
        currentdocumentcount: 0,
        creditorname: '',
        basecurrencycd: '',
        maximumoverpaymentamt: 0,
        maximumunderpaymentamt: 0,
        maximumbankchargesamt: 0,
        rowid: 0,
        balanceamt: ''
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
          BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo ,
          Source: 'P',
          DebitNo: value.DebitNo,
          UserEdit: this.getDataUser().UserId ,
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
      console.log(record);
      var param = {};
      var url = this.getUrlById();
      if (record.DebitNo == null || record.DebitNo == "") {
        this.PI_debitno.cProtect = false
        param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          cashierno: record.CashierNo
        };
      } else {
        this.PI_debitno.cProtect = true
        url += "2";
        param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          debitno: record.DebitNo
        };
      }

      this.postEncode( url, param )
      .then(response => {
          // response from API
          if(response == null) return
          
          var data = response.Data[0]
          this.M_AP_PaymentDirectFromCashierH = {
            subportfoliocd: data.subportfoliocd,
            batchno: data.batchno,
            cashierno: data.cashierno,
            trxtype: data.trxtype,
            debitno: data.debitno,
            debitdate: data.debitdate,
            creditorcd: data.creditorcd,
            descs: data.descs,
            paymentcd: data.paymentcd,
            currencycd: data.currencycd,
            bankcd: data.bankcd,
            chequereferenceno: data.chequereferenceno,
            currencyrate: this.isCurrency(data.currencyrate, this.decimal),
            chequereferencedate: data.chequereferencedate,
            chequeduedate: data.chequeduedate,
            creditamt: this.isCurrency(data.creditamt, this.decimal),
            holdvatamt: this.isCurrency(data.holdvatamt, this.decimal),
            holdwithholdingamt: this.isCurrency(data.holdwithholdingamt, this.decimal),
            bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
            overpaymentamt: this.isCurrency(data.overpaymentamt, this.decimal),
            underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
            allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
            forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
            totalallocationamt: this.isCurrency(data.totalallocationamt, this.decimal),
            remarks: data.remarks,
            status: data.status,
            userinput: data.userinput,
            useredit: data.useredit,
            documentcount: this.isCurrency(data.documentcount, this.decimal),
            batchtotal: this.isCurrency(data.batchtotal, this.decimal),
            batchstatus: data.batchstatus,
            totalnetallocated: this.isCurrency(data.totalnetallocated, this.decimal),
            totalvatallocated: this.isCurrency(data.totalvatallocated, this.decimal),
            totalwithholdingallocated: this.isCurrency(data.totalwithholdingallocated, this.decimal),
            lastupdatestamp: data.lastupdatestamp,
            trxtypedescs: data.trxtypedescs,
            currentbatchtotal: this.isCurrency(data.currentbatchtotal, this.decimal),
            currentdocumentcount: this.isCurrency(data.currentdocumentcount, this.decimal),
            creditorname: data.creditorname,
            basecurrencycd: data.basecurrencycd,
            maximumoverpaymentamt: this.isCurrency(data.maximumoverpaymentamt, this.decimal),
            maximumunderpaymentamt: this.isCurrency(data.maximumunderpaymentamt, this.decimal),
            maximumbankchargesamt: this.isCurrency(data.maximumbankchargesamt, this.decimal),
            rowid: data.rowid,
            balanceamt: data.balanceamt
          }

          this.CalculateTotalAllocationAmount()
          
          this.M_AP_PaymentDirectFromCashierH.trxtypeLabel = this.M_AP_PaymentDirectFromCashierH.trxtype != null && this.M_AP_PaymentDirectFromCashierH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
          this.M_AP_PaymentDirectFromCashierH.creditorcdLabel = this.M_AP_PaymentDirectFromCashierH.creditorcd != null && this.M_AP_PaymentDirectFromCashierH.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
          this.M_AP_PaymentDirectFromCashierH.currencycdLabel = this.M_AP_PaymentDirectFromCashierH.currencycd != null && this.M_AP_PaymentDirectFromCashierH.currencycd != '' ? data.currencycd :'' 
          this.M_AP_PaymentDirectFromCashierH.paymentcdLabel = this.M_AP_PaymentDirectFromCashierH.paymentcd != null && this.M_AP_PaymentDirectFromCashierH.paymentcd != '' ? data.paymentcd :'' 
          this.M_AP_PaymentDirectFromCashierH.bankcdLabel = this.M_AP_PaymentDirectFromCashierH.bankcd != null && this.M_AP_PaymentDirectFromCashierH.bankcd != '' ? data.bankcd :'' 
          
          this.IEBy.Input = data.user_input
          this.IEBy.Edit = data.user_edit
      })
    },
    CalculateTotalAllocationAmount() {
      // if (this.inputStatus == 'VIEW') return
      var PaymentAmt = this.M_AP_PaymentDirectFromCashierH.creditamt
      var HoldVATAmt = this.M_AP_PaymentDirectFromCashierH.holdvatamt
      var HoldWithHoldingAmt = this.M_AP_PaymentDirectFromCashierH.holdwithholdingamt
      var BankCharges = this.M_AP_PaymentDirectFromCashierH.bankchargesamt == null || this.M_AP_PaymentDirectFromCashierH.bankchargesamt == "" ? 0 : this.M_AP_PaymentDirectFromCashierH.bankchargesamt
      var OverPaymentAmt = this.M_AP_PaymentDirectFromCashierH.overpaymentamt == null || this.M_AP_PaymentDirectFromCashierH.overpaymentamt == "" ? 0 : this.M_AP_PaymentDirectFromCashierH.overpaymentamt
      var UnderPaymentAmt = this.M_AP_PaymentDirectFromCashierH.underpaymentamt == null || this.M_AP_PaymentDirectFromCashierH.underpaymentamt == "" ? 0 : this.M_AP_PaymentDirectFromCashierH.underpaymentamt
      var AllocatedAmt = this.M_AP_PaymentDirectFromCashierH.allocatedamt
      var ForexGainLossAmt = this.M_AP_PaymentDirectFromCashierH.forexgainlossamt
      var CurrencyCd = this.M_AP_PaymentDirectFromCashierH.currencycd
      var BaseCurrencyCd = this.M_AP_PaymentDirectFromCashierH.basecurrencycd
      var TotalAllocationAmt = 0
      var BalanceAmt = 0

      PaymentAmt = this.replaceAllString(PaymentAmt, ',', '', 'number')
      HoldVATAmt = this.replaceAllString(HoldVATAmt, ',', '', 'number')
      HoldWithHoldingAmt = this.replaceAllString(HoldWithHoldingAmt, ',', '', 'number')
      BankCharges = this.replaceAllString(BankCharges, ',', '', 'number')
      OverPaymentAmt = this.replaceAllString(OverPaymentAmt, ',', '', 'number')
      UnderPaymentAmt = this.replaceAllString(UnderPaymentAmt, ',', '', 'number')
      AllocatedAmt = this.replaceAllString(AllocatedAmt, ',', '', 'number')
      ForexGainLossAmt = this.replaceAllString(ForexGainLossAmt, ',', '', 'number')

      TotalAllocationAmt = 
        parseFloat(PaymentAmt) + 
        parseFloat(HoldVATAmt) + 
        parseFloat(HoldWithHoldingAmt) - 
        parseFloat(BankCharges) - 
        parseFloat(OverPaymentAmt) + 
        parseFloat(UnderPaymentAmt)

      BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
      if (TotalAllocationAmt.toString() == "Infinity") TotalAllocationAmt = 0
      if (TotalAllocationAmt.toString() == "NaN") TotalAllocationAmt = 0
      this.M_AP_PaymentDirectFromCashierH.totalallocationamt = this.isCurrency(TotalAllocationAmt, this.decimal)

      if (BaseCurrencyCd.toUpperCase() == CurrencyCd.toUpperCase()) {
        BalanceAmt =
          parseFloat(TotalAllocationAmt) -
          parseFloat(AllocatedAmt)
      } else {
        BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
      }

      if (BalanceAmt.toString() == "Infinity") BalanceAmt = 0
      if (BalanceAmt.toString() == "NaN") BalanceAmt = 0
      this.M_AP_PaymentDirectFromCashierH.balanceamt = this.isCurrency(BalanceAmt, this.decimal)
    }
  },
  beforeCreate: function () {
  },
  created: function() {
    this.$store.commit('setFormType','ListProcess')
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

