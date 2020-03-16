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
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AP_DepositPaymentDirectFromCashier.cashierno"  ref="ref_cashierno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_DepositPaymentDirectFromCashier.trxtype" :label="M_AP_DepositPaymentDirectFromCashier.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AP_DepositPaymentDirectFromCashier.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OndebitdateChange" :prop="PI_debitdate" v-model="M_AP_DepositPaymentDirectFromCashier.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_DepositPaymentDirectFromCashier.creditorcd" :label="M_AP_DepositPaymentDirectFromCashier.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnestimatedusagedateChange" :prop="PI_estimatedusagedate" v-model="M_AP_DepositPaymentDirectFromCashier.estimatedusagedate"  ref="ref_estimatedusagedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_DepositPaymentDirectFromCashier.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentseqnoChange" :prop="PI_paymentseqno" :value="M_AP_DepositPaymentDirectFromCashier.paymentseqno" :label="M_AP_DepositPaymentDirectFromCashier.paymentseqnoLabel" ref="ref_paymentseqno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_AP_DepositPaymentDirectFromCashier.paymentcd" :label="M_AP_DepositPaymentDirectFromCashier.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_AP_DepositPaymentDirectFromCashier.bankcd" :label="M_AP_DepositPaymentDirectFromCashier.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_DepositPaymentDirectFromCashier.currencycd" :label="M_AP_DepositPaymentDirectFromCashier.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_DepositPaymentDirectFromCashier.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankchargesamt" v-model="M_AP_DepositPaymentDirectFromCashier.bankchargesamt"  ref="ref_bankchargesamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AP_DepositPaymentDirectFromCashier.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AP_DepositPaymentDirectFromCashier.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_AP_DepositPaymentDirectFromCashier.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_AP_DepositPaymentDirectFromCashier.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_DepositPaymentDirectFromCashier.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_DepositPaymentDirectFromCashier :{
                batchno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
                chequereferencedate: '',
                chequeduedate: '',
                creditamt: 0,
                currencyrate: '0',
                bankchargesamt: '0',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                remarks: '',
                currentdocumentcount: 0,
                currentbatchtotal: 0,
                creditorname: '',
                rowid: 0,
                runningcd: '',
                estimatedusagedate: '',
                paymentseqno: ''
                    }
            ,
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
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ModuleCd = 'AP' AND TrxClass = 'A'"   , 
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
            PI_debitno: { 
                cValidate :'max:20', 
                cName: 'debitno', 
                cLabel: 'Payment No', 
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
                cLabel: 'Payment Date', 
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
            PI_estimatedusagedate: { 
                cValidate :'', 
                cName: 'estimatedusagedate', 
                cLabel: 'Estimated Usage Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentseqno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPAdvancePaymentScheduleSequenceNo'    , 
                    ColumnDB: 'PaymentSequenceNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PaymentSequenceNo,POContractNo' 
                        }, 
                cValidate :'', 
                cName: 'paymentseqno', 
                cLabel: 'PO Contract Adv. Schedule Seq No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'PaymentSequenceNo,POContractNo' ,
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
                cLabel: 'Currency Rate ', 
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
            PI_bankchargesamt: { 
                cValidate :'required', 
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
            PI_creditamt: { 
                cValidate :'', 
                cName: 'creditamt', 
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
        GetTrxTypeData(){
          this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, this.M_AP_DepositPaymentDirectFromCashier.trxtype)
          .then(dt =>  {
            console.log(dt[0].RunningCd)
            this.M_AP_DepositPaymentDirectFromCashier.runningcd = dt[0].RunningCd
          })
          
        },
        OnestimatedusagedateChange () {

        },	
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_DepositPaymentDirectFromCashier.trxtype = data.id
            this.M_AP_DepositPaymentDirectFromCashier.trxtypeLabel = data.label
            
            if (this.inputStatus != "VIEW") {
              if(data == ''){
                this.PI_debitno.cProtect = false
                this.M_AP_DepositPaymentDirectFromCashier.debitno = ''
              }else{
                this.GetTrxTypeData()
                this.PI_debitno.cProtect = true
                this.M_AP_DepositPaymentDirectFromCashier.debitno = '(auto)'
              }
            }
        })
        this.$forceUpdate()
        },
        OnpaymentseqnoChange (data) {
          this.M_AP_DepositPaymentDirectFromCashier.paymentseqno = data.id
            this.M_AP_DepositPaymentDirectFromCashier.paymentseqnoLabel = data.label
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OndebitdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{debitdate}
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DepositPaymentDirectFromCashier.creditorcd = data.id
            this.M_AP_DepositPaymentDirectFromCashier.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DepositPaymentDirectFromCashier.paymentcd = data.id
            this.M_AP_DepositPaymentDirectFromCashier.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DepositPaymentDirectFromCashier.bankcd = data.id
            this.M_AP_DepositPaymentDirectFromCashier.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DepositPaymentDirectFromCashier.currencycd = data.id
            this.M_AP_DepositPaymentDirectFromCashier.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
        OnchequereferencedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequereferencedate}
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
      if(this.M_AP_DepositPaymentDirectFromCashier.batchstatus == 'Balance'){
        this.getToolbar().statusFunction[2].disabled = true
      }else{
        this.getToolbar().statusFunction[2].disabled = false
      }
      this.getToolbar().statusFunction[0].disabled = true      
      this.getToolbar().statusFunction[4].text = 'Post'
      this.$store.commit('setIsPost', true)
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
          console.log(record)
        },
        rowLink: function(url){
        },		
		paramFromParent(){
        },	
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
          var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                dataPost.push({
                    _Message_: "Invoice No = "+value.DebitNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId,
                    Source: 'A'
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
            if(this.M_AP_DepositPaymentDirectFromCashier.debitno == '(auto)' ||  this.M_AP_DepositPaymentDirectFromCashier.debitno == null || this.M_AP_DepositPaymentDirectFromCashier.debitno == '' ){              
                this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.M_AP_DepositPaymentDirectFromCashier.runningcd,this.getDataUser().UserId,this.M_AP_DepositPaymentDirectFromCashier.debitdate)
                .then(dt => {
                  this.M_AP_DepositPaymentDirectFromCashier.debitno = dt.RunningCode
                  var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    // BatchNo: this.M_AP_DepositPaymentDirectFromCashier.batchno == '' || this.M_AP_DepositPaymentDirectFromCashier.batchno == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.batchno ,
                    BatchNo: 0,
                    Source: 'A',
                    CashierNo: this.M_AP_DepositPaymentDirectFromCashier.cashierno,
                    CreditorCd: this.M_AP_DepositPaymentDirectFromCashier.creditorcd == '' || this.M_AP_DepositPaymentDirectFromCashier.creditorcd == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.creditorcd ,
                    TrxType: this.M_AP_DepositPaymentDirectFromCashier.trxtype == '' || this.M_AP_DepositPaymentDirectFromCashier.trxtype == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.trxtype ,
                    ModuleCd: 'AP',
                    DebitNo: this.M_AP_DepositPaymentDirectFromCashier.debitno,
                    DebitDate: this.M_AP_DepositPaymentDirectFromCashier.debitdate == '' || this.M_AP_DepositPaymentDirectFromCashier.debitdate == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.debitdate ,
                    Descs: this.M_AP_DepositPaymentDirectFromCashier.descs,
                    PaymentCd: this.M_AP_DepositPaymentDirectFromCashier.paymentcd == '' || this.M_AP_DepositPaymentDirectFromCashier.paymentcd == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.paymentcd ,
                    BankCd: this.M_AP_DepositPaymentDirectFromCashier.bankcd == '' || this.M_AP_DepositPaymentDirectFromCashier.bankcd == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.bankcd ,
                    CurrencyCd: this.M_AP_DepositPaymentDirectFromCashier.currencycd == '' || this.M_AP_DepositPaymentDirectFromCashier.currencycd == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.currencycd ,
                    CurrencyRate: this.M_AP_DepositPaymentDirectFromCashier.currencyrate ? this.replaceAllString(this.M_AP_DepositPaymentDirectFromCashier.currencyrate,',','','number') : 0 ,
                    ChequeReferenceNo: this.M_AP_DepositPaymentDirectFromCashier.chequereferenceno,
                    ChequeReferenceDate: this.M_AP_DepositPaymentDirectFromCashier.chequereferencedate == '' || this.M_AP_DepositPaymentDirectFromCashier.chequereferencedate == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.chequereferencedate ,
                    ChequeDueDate: this.M_AP_DepositPaymentDirectFromCashier.chequeduedate == '' || this.M_AP_DepositPaymentDirectFromCashier.chequeduedate == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.chequeduedate ,
                    EstimatedUsageDate: this.M_AP_DepositPaymentDirectFromCashier.estimatedusagedate == '' || this.M_AP_DepositPaymentDirectFromCashier.estimatedusagedate == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.estimatedusagedate ,
                    CreditAmt: this.M_AP_DepositPaymentDirectFromCashier.creditamt ? this.replaceAllString(this.M_AP_DepositPaymentDirectFromCashier.creditamt,',','','number') : 0 ,
                    BankChargesAmt: this.M_AP_DepositPaymentDirectFromCashier.bankchargesamt ? this.replaceAllString(this.M_AP_DepositPaymentDirectFromCashier.bankchargesamt,',','','number') : 0 ,
                    PaymentSequenceNo: this.M_AP_DepositPaymentDirectFromCashier.paymentseqno == '' || this.M_AP_DepositPaymentDirectFromCashier.paymentseqno == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.paymentseqno ,
                    Remarks: this.M_AP_DepositPaymentDirectFromCashier.remarks,
                    UserInput: this.getDataUser().UserId ,
                    LastUpdateStamp: this.M_AP_DepositPaymentDirectFromCashier.lastupdatestamp
                  }

                  this.postJSON(this.getUrlUpdate(), param)
                  .then((response) => {
                      if(response == null) return
                      this.$parent.resultUpdate(response.Message)
              
                  })
                })              
            }else{
              var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 1,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AP_DepositPaymentDirectFromCashier.debitno,
                Descs: this.M_AP_DepositPaymentDirectFromCashier.descs,
                TrxType: this.M_AP_DepositPaymentDirectFromCashier.trxtype == '' || this.M_AP_DepositPaymentDirectFromCashier.trxtype == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.trxtype ,                
                CurrencyRate: this.M_AP_DepositPaymentDirectFromCashier.currencyrate ? this.replaceAllString(this.M_AP_DepositPaymentDirectFromCashier.currencyrate,',','','number') : 0 ,                
                CreditAmt: this.M_AP_DepositPaymentDirectFromCashier.creditamt ? this.replaceAllString(this.M_AP_DepositPaymentDirectFromCashier.creditamt,',','','number') : 0 ,
                BankChargesAmt: this.M_AP_DepositPaymentDirectFromCashier.bankchargesamt ? this.replaceAllString(this.M_AP_DepositPaymentDirectFromCashier.bankchargesamt,',','','number') : 0 ,
                Remarks: this.M_AP_DepositPaymentDirectFromCashier.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_DepositPaymentDirectFromCashier.lastupdatestamp,
                EstimatedUsageDate: this.M_AP_DepositPaymentDirectFromCashier.estimatedusagedate == '' || this.M_AP_DepositPaymentDirectFromCashier.estimatedusagedate == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.estimatedusagedate ,
                PaymentSequenceNo: this.M_AP_DepositPaymentDirectFromCashier.paymentseqno == '' || this.M_AP_DepositPaymentDirectFromCashier.paymentseqno == null ? 'NULL' : this.M_AP_DepositPaymentDirectFromCashier.paymentseqno ,
              }

              this.postJSON(this.getUrlUpdate(), param)
              .then((response) => {
                  if(response == null) return
                  this.$parent.resultUpdate(response.Message)
          
              })
            }            
        },
		M_ClearForm(){
            this.M_AP_DepositPaymentDirectFromCashier = {
                batchno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
                chequereferencedate: '',
                chequeduedate: '',
                creditamt: 0,
                currencyrate: '0',
                bankchargesamt: '0',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                remarks: '',
                currentdocumentcount: 0,
                currentbatchtotal: 0,
                creditorname: '',
                rowid: 0,
                runningcd: '',
                estimatedusagedate: '',
                paymentseqno: ''
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
                    CashierNo: value.CashierNo,
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
            console.log(record)
            if(record.DebitNo == '' || record.DebitNo == null){
              var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,                
                CashierNo: record.CashierNo
              }
            }else{
                var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: 1,
                  SubportfolioCd: this.getDataUser().SubPortfolioCd,
                  DebitNo: record.DebitNo
                }            
            }            

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_DepositPaymentDirectFromCashier = {
                batchno: data.batchno,
                subportfoliocd: data.subportfoliocd,
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
                chequereferencedate: data.chequereferencedate,
                chequeduedate: data.chequeduedate,
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                documentcount: this.isCurrency(data.documentcount, this.decimal),
                batchtotal: this.isCurrency(data.batchtotal, this.decimal),
                batchstatus: data.batchstatus,
                lastupdatestamp: record.LastUpdateStamp,
                trxtypedescs: data.trxtypedescs,
                remarks: data.remarks,
                currentdocumentcount: this.isCurrency(data.currentdocumentcount, this.decimal),
                currentbatchtotal: this.isCurrency(data.currentbatchtotal, this.decimal),
                creditorname: data.creditorname,
                rowid: data.rowid,
                estimatedusagedate: data.estimatedusagedate,
                paymentsequenceno: data.paymentsequenceno
                    }
            

                this.M_AP_DepositPaymentDirectFromCashier.trxtypeLabel = this.M_AP_DepositPaymentDirectFromCashier.trxtype != null && this.M_AP_DepositPaymentDirectFromCashier.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AP_DepositPaymentDirectFromCashier.creditorcdLabel = this.M_AP_DepositPaymentDirectFromCashier.creditorcd != null && this.M_AP_DepositPaymentDirectFromCashier.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_DepositPaymentDirectFromCashier.paymentcdLabel = this.M_AP_DepositPaymentDirectFromCashier.paymentcd != null && this.M_AP_DepositPaymentDirectFromCashier.paymentcd != '' ? data.paymentcd :'' 
                this.M_AP_DepositPaymentDirectFromCashier.bankcdLabel = this.M_AP_DepositPaymentDirectFromCashier.bankcd != null && this.M_AP_DepositPaymentDirectFromCashier.bankcd != '' ? data.bankcd :'' 
                this.M_AP_DepositPaymentDirectFromCashier.currencycdLabel = this.M_AP_DepositPaymentDirectFromCashier.currencycd != null && this.M_AP_DepositPaymentDirectFromCashier.currencycd != '' ? data.currencycd :'' 
                this.M_AP_DepositPaymentDirectFromCashier.paymentseqnoLabel = this.M_AP_DepositPaymentDirectFromCashier.paymentseqno != null && this.M_AP_DepositPaymentDirectFromCashier.paymentseqno != '' ? data.paymentsequenceno :'' 

                this.PI_paymentseqno.dataLookUp.InitialWhere = "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND CreditorCd = '"+ data.creditorcd +"' AND CurrencyCd = '"+ data.currencycd +"' AND STATUS = 'P'"


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

