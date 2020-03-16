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
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AP_RefundDirectFromCashierH.cashierno"  ref="ref_cashierno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_RefundDirectFromCashierH.trxtype" :label="M_AP_RefundDirectFromCashierH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_refundno" v-model="M_AP_RefundDirectFromCashierH.refundno"  ref="ref_refundno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnrefunddateChange" :prop="PI_refunddate" v-model="M_AP_RefundDirectFromCashierH.refunddate"  ref="ref_refunddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_RefundDirectFromCashierH.creditorcd" :label="M_AP_RefundDirectFromCashierH.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_RefundDirectFromCashierH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_AP_RefundDirectFromCashierH.paymentcd" :label="M_AP_RefundDirectFromCashierH.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_AP_RefundDirectFromCashierH.bankcd" :label="M_AP_RefundDirectFromCashierH.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_RefundDirectFromCashierH.currencycd" :label="M_AP_RefundDirectFromCashierH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_RefundDirectFromCashierH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_receivedamt" v-model="M_AP_RefundDirectFromCashierH.receivedamt"  ref="ref_receivedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_overpaymentamt" v-model="M_AP_RefundDirectFromCashierH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_underpaymentamt" v-model="M_AP_RefundDirectFromCashierH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AP_RefundDirectFromCashierH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AP_RefundDirectFromCashierH.allocationamt"  ref="ref_allocationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AP_RefundDirectFromCashierH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AP_RefundDirectFromCashierH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AP_RefundDirectFromCashierH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_AP_RefundDirectFromCashierH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_AP_RefundDirectFromCashierH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_RefundDirectFromCashierH.remarks"  ref="ref_remarks" />
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
		FormType: "ListProcess",
		Module:"AP",
            propList: {
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_RefundDirectFromCashierH :{
                batchno: 0,
                cashierno: '',
                trxtype: '',
                refundno: '',
                refunddate: '',
                creditorcd: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                currencyrate: '0',
                bankcd: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                receivedamt: 0,
                allocationamt: 0,
                forexgainlossamt: 0,
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                creditorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                overpaymentamt: '0',
                underpaymentamt: '0',
                basecurrencycd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                headercurrencycd: '',
                rowid: 0,
                balanceamt: 0,
                totalallocationamt: 0
                    }
            ,
            RunningCd: '',
            PI_cashierno: { 
                cValidate :'', 
                cName: 'cashierno', 
                cLabel: 'Cashier No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '" +
                                  this.getDataUser().SubPortfolioCd +
                                  "' AND MODULECD = 'AP' AND TRXCLASS = 'R'", 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
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
                cMasterUrl: 'AP/AP_TransTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_refundno: { 
                cValidate :'required', 
                cName: 'refundno', 
                cLabel: 'Refund No', 
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
            PI_refunddate: { 
                cValidate :'', 
                cName: 'refunddate', 
                cLabel: 'Refund Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
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
            PI_receivedamt: { 
                cValidate :'', 
                cName: 'receivedamt', 
                cLabel: 'Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_overpaymentamt: { 
                cValidate :'required', 
                cName: 'overpaymentamt', 
                cLabel: 'Over Receipt Amount', 
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
                cValidate :'required', 
                cName: 'underpaymentamt', 
                cLabel: 'Under Receipt Amount', 
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
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocationamt: { 
                cValidate :'', 
                cName: 'allocationamt', 
                cLabel: 'Allocated Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_forexgainlossamt: { 
                cValidate :'', 
                cName: 'forexgainlossamt', 
                cLabel: 'Forex Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_balanceamt: { 
                cValidate :'', 
                cName: 'balanceamt', 
                cLabel: 'Balance Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequereferenceno: { 
                cValidate :'', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequereferencedate: { 
                cValidate :'', 
                cName: 'chequereferencedate', 
                cLabel: 'Cheque / Ref Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequeduedate: { 
                cValidate :'', 
                cName: 'chequeduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
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
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundDirectFromCashierH.trxtype = data.id
            this.M_AP_RefundDirectFromCashierH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
                  if (dt != null) { 
                    var dta = dt[0]
                    // this.RunningCd = dta.RunningCd
                    console.log(this.DataRow)
                  if (this.DataRow.RefundNo == null) {
                    this.M_AP_RefundDirectFromCashierH.trxtypedescs = dta.TrxTypeDescs
                    if (dta.RunningCd && dta.RunningCd != "") {
                      this.PI_refundno.cProtect = true
                      this.M_AP_RefundDirectFromCashierH.refundno = "(auto)"
                      this.RunningCd = dta.RunningCd
                    }
                    else {
                      this.PI_refundno.cProtect = false
                      this.M_AP_RefundDirectFromCashierH.refundno = ""
                      this.RunningCd = "" 
                    }
                  }
                  }
                })
            }
        })
        this.$forceUpdate()
        },
        OnrefunddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{refunddate}
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundDirectFromCashierH.creditorcd = data.id
            this.M_AP_RefundDirectFromCashierH.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundDirectFromCashierH.paymentcd = data.id
            this.M_AP_RefundDirectFromCashierH.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundDirectFromCashierH.bankcd = data.id
            this.M_AP_RefundDirectFromCashierH.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundDirectFromCashierH.currencycd = data.id
            this.M_AP_RefundDirectFromCashierH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OnchequereferencedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequereferencedate}
            }
        })
        this.$forceUpdate()
        },
        OnchequeduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequeduedate}
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
            this.getToolbar().statusFunction[0].disabled = true
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
           var dataPost = []
          var data = this.FormToABSList().getRowSelected()
          
          data.forEach((value) => {
            dataPost.push({
              SubPortfolioCd : this.getDataUser().SubPortfolioCd,
              BatchNo: value.BatchNo,
              ModuleCd: this.Module,
              UserInput: this.getDataUser().UserId,
              _Message_: "Refund No " + value.RefundNo
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
          if (this.DataRow.RefundNo && this.DataRow.RefundNo != null) {
            //update
            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              BatchNo: this.M_AP_RefundDirectFromCashierH.batchno ,
              Source: "F",
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              RefundNo: this.M_AP_RefundDirectFromCashierH.refundno,
              Descs: this.M_AP_RefundDirectFromCashierH.descs,
              TrxType: this.M_AP_RefundDirectFromCashierH.trxtype == '' || this.M_AP_RefundDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AP_RefundDirectFromCashierH.trxtype ,
              CurrencyRate: this.M_AP_RefundDirectFromCashierH.currencyrate,
              ReceivedAmt: this.M_AP_RefundDirectFromCashierH.receivedamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.receivedamt, ',', '', 'number') : 0,
              OverPaymentAmt: this.M_AP_RefundDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
              UnderPaymentAmt: this.M_AP_RefundDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
              Remarks: this.M_AP_RefundDirectFromCashierH.remarks,
              UserEdit: this.getDataUser().UserId ,
              LastUpdateStamp: this.M_AP_RefundDirectFromCashierH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
          }
          else {
            //insert
            if (this.RunningCd == "") {
              var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0 ,
                Source: "F",
                CashierNo: this.M_AP_RefundDirectFromCashierH.cashierno,
                CreditorCd: this.M_AP_RefundDirectFromCashierH.creditorcd,
                TrxType: this.M_AP_RefundDirectFromCashierH.trxtype == '' || this.M_AP_RefundDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AP_RefundDirectFromCashierH.trxtype ,
                ModuleCd: this.Module,
                RefundNo: this.M_AP_RefundDirectFromCashierH.refundno,
                RefundDate: this.M_AP_RefundDirectFromCashierH.refunddate,
                Descs: this.M_AP_RefundDirectFromCashierH.descs,
                PaymentCd: this.M_AP_RefundDirectFromCashierH.paymentcd,
                BankCd: this.M_AP_RefundDirectFromCashierH.bankcd,
                CurrencyCd: this.M_AP_RefundDirectFromCashierH.currencycd,
                CurrencyRate: this.M_AP_RefundDirectFromCashierH.currencyrate,
                ChequeReferenceNo: this.M_AP_RefundDirectFromCashierH.chequereferenceno,
                ChequeReferenceDate: this.M_AP_RefundDirectFromCashierH.chequereferencedate,
                ChequeDueDate: this.M_AP_RefundDirectFromCashierH.chequeduedate,
                ReceivedAmt: this.M_AP_RefundDirectFromCashierH.receivedamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.receivedamt, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AP_RefundDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_RefundDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
                Status: this.ARFieldHelper.REFUND_STATUS_ERROR,
                Remarks: this.M_AP_RefundDirectFromCashierH.remarks,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_RefundDirectFromCashierH.lastupdatestamp
              }

              this.postJSON(this.getUrlInsert(), param)
              .then((response) => {
                  if(response == null) return
                  this.$parent.resultInsert(response.Message)
              })
            }
            else {
              this.FnGenerateRunningCode(
                this.getDataUser().SubPortfolioCd,
                this.RunningCd,
                this.getDataUser().UserId,
                this.M_AP_RefundDirectFromCashierH.refunddate
              )
              .then(dt9 => {
                console.log(dt9)
                if (dt9 == null) {
                  return
                }

                this.M_AP_RefundDirectFromCashierH.refundno = dt9.RunningCode
                var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  BatchNo: 0 ,
                  Source: "F",
                  CashierNo: this.M_AP_RefundDirectFromCashierH.cashierno,
                  CreditorCd: this.M_AP_RefundDirectFromCashierH.creditorcd,
                  TrxType: this.M_AP_RefundDirectFromCashierH.trxtype == '' || this.M_AP_RefundDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AP_RefundDirectFromCashierH.trxtype ,
                  ModuleCd: this.Module,
                  RefundNo: this.M_AP_RefundDirectFromCashierH.refundno,
                  RefundDate: this.M_AP_RefundDirectFromCashierH.refunddate,
                  Descs: this.M_AP_RefundDirectFromCashierH.descs,
                  PaymentCd: this.M_AP_RefundDirectFromCashierH.paymentcd,
                  BankCd: this.M_AP_RefundDirectFromCashierH.bankcd,
                  CurrencyCd: this.M_AP_RefundDirectFromCashierH.currencycd,
                  CurrencyRate: this.M_AP_RefundDirectFromCashierH.currencyrate,
                  ChequeReferenceNo: this.M_AP_RefundDirectFromCashierH.chequereferenceno,
                  ChequeReferenceDate: this.M_AP_RefundDirectFromCashierH.chequereferencedate,
                  ChequeDueDate: this.M_AP_RefundDirectFromCashierH.chequeduedate,
                  ReceivedAmt: this.M_AP_RefundDirectFromCashierH.receivedamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.receivedamt, ',', '', 'number') : 0,
                  OverPaymentAmt: this.M_AP_RefundDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
                  UnderPaymentAmt: this.M_AP_RefundDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AP_RefundDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
                  Status: this.ARFieldHelper.REFUND_STATUS_ERROR,
                  Remarks: this.M_AP_RefundDirectFromCashierH.remarks,
                  UserInput: this.getDataUser().UserId ,
                  LastUpdateStamp: this.M_AP_RefundDirectFromCashierH.lastupdatestamp
                }

                this.postJSON(this.getUrlInsert(), param)
                .then((response) => {
                    if(response == null) return
                    this.$parent.resultInsert(response.Message)
                })
              })
            }
          }
        },
		M_ClearForm(){
            this.M_AP_RefundDirectFromCashierH = {
                batchno: 0,
                cashierno: '',
                trxtype: '',
                refundno: '',
                refunddate: '',
                creditorcd: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                currencyrate: '0',
                bankcd: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                receivedamt: 0,
                allocationamt: 0,
                forexgainlossamt: 0,
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                creditorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                overpaymentamt: '0',
                underpaymentamt: '0',
                basecurrencycd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                headercurrencycd: '',
                rowid: 0,
                balanceamt: 0,
                totalallocationamt: 0
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
					_Message_:'',
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo ,
                    RefundNo: value.RefundNo,
                    Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_REFUND,
                    UserEdit: this.getDataUser().UserId ,
                    LastUpdateStamp: value.LastUpdateStampforDelete,
                    CashierNo: value.CashierNo
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
          let sUrl = ""
          if (this.DataRow.RefundNo != null && this.DataRow.RefundNo != "") {
            // this.$store.commit('setDeleteStatus', true)
            sUrl = this.getUrlById2()
            var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubportfolioCd: this.getDataUser().SubPortfolioCd,
                  RefundNo: record.RefundNo
            }
          }
          else{
            // this.$store.commit('setDeleteStatus', false)
            sUrl = this.getUrlById()
             var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubportfolioCd: this.getDataUser().SubPortfolioCd,
                  cashierno: record.CashierNo
            }
          }
           

            this.postEncode( sUrl, param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_RefundDirectFromCashierH = {
                batchno: data.batchno,
                cashierno: data.cashierno,
                trxtype: data.trxtype,
                refundno: data.refundno,
                refunddate: data.refunddate,
                creditorcd: data.creditorcd,
                descs: data.descs,
                paymentcd: data.paymentcd,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                bankcd: data.bankcd,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                chequeduedate: data.chequeduedate,
                receivedamt: this.isCurrency(data.receivedamt, this.decimal),
                allocationamt: this.isCurrency(data.allocationamt, this.decimal),
                forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                documentcount: this.isCurrency(data.documentcount, this.decimal),
                batchtotal: this.isCurrency(data.batchtotal, this.decimal),
                batchstatus: data.batchstatus,
                lastupdatestamp: record.LastUpdateStamp,
                trxtypedescs: data.trxtypedescs,
                creditorname: data.creditorname,
                currentbatchtotal: this.isCurrency(data.currentbatchtotal, this.decimal),
                currentdocumentcount: this.isCurrency(data.currentdocumentcount, this.decimal),
                overpaymentamt: this.isCurrency(data.overpaymentamt, this.decimal),
                underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
                basecurrencycd: data.basecurrencycd,
                subportfoliocd: data.subportfoliocd,
                headercurrencycd: data.headercurrencycd,
                rowid: data.rowid,
                // balanceamt: data.balanceamt,
                totalallocationamt: this.isCurrency((data.receivedamt - data.overpaymentamt)+(data.underpaymentamt),this.decimal)
                    }
                 //Balance Amount

                 if(data.currencycd.toUpperCase() == data.basecurrencycd.toUpperCase()){
                    this.M_AP_RefundDirectFromCashierH.balanceamt = this.isCurrency(data.receivedamt - data.overpaymentamt - data.underpaymentamt - data.forexgainlossamt - data.allocationamt , this.decimal)
                 } else {
                    this.M_AP_RefundDirectFromCashierH.balanceamt = this.isCurrency(data.receivedamt - data.overpaymentamt - data.underpaymentamt - data.allocationamt , this.decimal)
                 }
                  console.log('balance amt',this.M_AP_RefundDirectFromCashierH.balanceamt)

                this.M_AP_RefundDirectFromCashierH.trxtypeLabel = this.M_AP_RefundDirectFromCashierH.trxtype != null && this.M_AP_RefundDirectFromCashierH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AP_RefundDirectFromCashierH.creditorcdLabel = this.M_AP_RefundDirectFromCashierH.creditorcd != null && this.M_AP_RefundDirectFromCashierH.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_RefundDirectFromCashierH.paymentcdLabel = this.M_AP_RefundDirectFromCashierH.paymentcd != null && this.M_AP_RefundDirectFromCashierH.paymentcd != '' ? data.paymentcd  :'' 
                this.M_AP_RefundDirectFromCashierH.bankcdLabel = this.M_AP_RefundDirectFromCashierH.bankcd != null && this.M_AP_RefundDirectFromCashierH.bankcd != '' ? data.bankcd   :'' 
                this.M_AP_RefundDirectFromCashierH.currencycdLabel = this.M_AP_RefundDirectFromCashierH.currencycd != null && this.M_AP_RefundDirectFromCashierH.currencycd != '' ? data.currencycd   :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

