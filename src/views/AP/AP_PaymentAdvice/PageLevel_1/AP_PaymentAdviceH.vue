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
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_PaymentAdviceH.creditorcd" :label="M_AP_PaymentAdviceH.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_AP_PaymentAdviceH.runningcd" :label="M_AP_PaymentAdviceH.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AP_PaymentAdviceH.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OndebitdateChange" :prop="PI_debitdate" v-model="M_AP_PaymentAdviceH.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AP_PaymentAdviceH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_PaymentAdviceH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_PaymentAdviceH.currencycd" :label="M_AP_PaymentAdviceH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AP_PaymentAdviceH.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AP_PaymentAdviceH.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AP_PaymentAdviceH.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AP_PaymentAdviceH.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_overpaymentamt" v-model="M_AP_PaymentAdviceH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_underpaymentamt" v-model="M_AP_PaymentAdviceH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AP_PaymentAdviceH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_PaymentAdviceH.remarks"  ref="ref_remarks" />
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
		FormType: "List",
		Module:"AP",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_PaymentAdviceH :{
                batchno: 0,
                cashierno: '',
                trxtype: '',
                debitno: '',
                debitdate: '',
                creditorcd: '',
                descs: '',
                debitreferenceno: '',
                currencycd: '',
                currencyrate: 0,
                creditamt: 0,
                holdvatamt: 0,
                holdwithholdingamt: 0,
                bankchargesamt: 0,
                overpaymentamt: '0',
                underpaymentamt: '0',
                allocatedamt: 0,
                forexgainlossamt: 0,
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                netamt: 0,
                withholdingamt: 0,
                vatamt: 0,
                creditorname: '',
                referenceno: '',
                runningcd: '',
                totalamt: 0,
                totalallocationamt: 0,
                runningcddescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditorCd,Name' 
                        }, 
                cValidate :'required', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code', 
                cKey: true, 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "ModuleCd IS NULL	OR ModuleCd = 'AP'" , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'RunningCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Running Code', 
                cKey: true, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_debitno: { 
                cValidate :'required|max:30', 
                cName: 'debitno', 
                cLabel: 'Payment Advice No', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitdate: { 
                cValidate :'required', 
                cName: 'debitdate', 
                cLabel: 'Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cOrder: 11, 
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
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CurrencyCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
                cKey: true, 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Allocated Amount', 
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
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Allocated Amount', 
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
            PI_withholdingamt: { 
                cValidate :'', 
                cName: 'withholdingamt', 
                cLabel: 'Withholding Allocated Amount', 
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
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Allocated Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_overpaymentamt: { 
                cValidate :'required', 
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
                cValidate :'required', 
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
                cLabel: 'Payment Advice Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder:25, 
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
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentAdviceH.creditorcd = data.id
            this.M_AP_PaymentAdviceH.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentAdviceH.runningcd = data.id
            this.M_AP_PaymentAdviceH.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_AP_PaymentAdviceH.debitno = "(auto)"
              this.PI_debitno.cProtect = true
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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentAdviceH.currencycd = data.id
            this.M_AP_PaymentAdviceH.currencycdLabel = data.label
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
        },	
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
        },
        M_Insert() {
          if (this.M_AP_PaymentAdviceH.runningcd && this.M_AP_PaymentAdviceH.runningcd != "") {
              this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.M_AP_PaymentAdviceH.runningcd,this.getDataUser().UserId,this.M_AP_PaymentAdviceH.debitdate)
                .then(dt => {                  
                  this.M_AP_PaymentAdviceH.debitno = dt.RunningCode
                  var param = {			
                      OptionSeq: this.getOptionSeq().OptionSeq,
                      LineNo: this.$parent.data.PageOrder,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      DebitNo: this.M_AP_PaymentAdviceH.debitno,
                      DebitDate: this.M_AP_PaymentAdviceH.debitdate == '' || this.M_AP_PaymentAdviceH.debitdate == null ? 'NULL' : this.M_AP_PaymentAdviceH.debitdate ,
                      RunningCd: this.M_AP_PaymentAdviceH.runningcd == '' || this.M_AP_PaymentAdviceH.runningcd == null ? 'NULL' : this.M_AP_PaymentAdviceH.runningcd ,
                      ReferenceNo: this.M_AP_PaymentAdviceH.referenceno,
                      Descs: this.M_AP_PaymentAdviceH.descs,
                      CreditorCd: this.M_AP_PaymentAdviceH.creditorcd == '' || this.M_AP_PaymentAdviceH.creditorcd == null ? 'NULL' : this.M_AP_PaymentAdviceH.creditorcd ,
                      CurrencyCd: this.M_AP_PaymentAdviceH.currencycd == '' || this.M_AP_PaymentAdviceH.currencycd == null ? 'NULL' : this.M_AP_PaymentAdviceH.currencycd ,
                      OverPaymentAmt: this.M_AP_PaymentAdviceH.overpaymentamt ? this.replaceAllString(this.M_AP_PaymentAdviceH.overpaymentamt,',','','number') : 0 ,
                      UnderPaymentAmt: this.M_AP_PaymentAdviceH.underpaymentamt ? this.replaceAllString(this.M_AP_PaymentAdviceH.underpaymentamt,',','','number') : 0 ,
                      Remarks: this.M_AP_PaymentAdviceH.remarks,
                      UserInput: this.getDataUser().UserId 
                  }

                  this.postJSON(this.getUrlInsert(), param)
                  .then((response) => {
                      if(response == null) return
                      this.$parent.resultInsert(response.Message)              
                  })     
                })
          }
          else {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AP_PaymentAdviceH.debitno,
                DebitDate: this.M_AP_PaymentAdviceH.debitdate == '' || this.M_AP_PaymentAdviceH.debitdate == null ? 'NULL' : this.M_AP_PaymentAdviceH.debitdate ,
                RunningCd: this.M_AP_PaymentAdviceH.runningcd == '' || this.M_AP_PaymentAdviceH.runningcd == null ? 'NULL' : this.M_AP_PaymentAdviceH.runningcd ,
                ReferenceNo: this.M_AP_PaymentAdviceH.referenceno,
                Descs: this.M_AP_PaymentAdviceH.descs,
                CreditorCd: this.M_AP_PaymentAdviceH.creditorcd == '' || this.M_AP_PaymentAdviceH.creditorcd == null ? 'NULL' : this.M_AP_PaymentAdviceH.creditorcd ,
                CurrencyCd: this.M_AP_PaymentAdviceH.currencycd == '' || this.M_AP_PaymentAdviceH.currencycd == null ? 'NULL' : this.M_AP_PaymentAdviceH.currencycd ,
                OverPaymentAmt: this.M_AP_PaymentAdviceH.overpaymentamt ? this.replaceAllString(this.M_AP_PaymentAdviceH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_PaymentAdviceH.underpaymentamt ? this.replaceAllString(this.M_AP_PaymentAdviceH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AP_PaymentAdviceH.remarks,
                UserInput: this.getDataUser().UserId 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)        
            })
          }            
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AP_PaymentAdviceH.debitno,
                DebitDate: this.M_AP_PaymentAdviceH.debitdate == '' || this.M_AP_PaymentAdviceH.debitdate == null ? 'NULL' : this.M_AP_PaymentAdviceH.debitdate ,
                ReferenceNo: this.M_AP_PaymentAdviceH.referenceno,
                Descs: this.M_AP_PaymentAdviceH.descs,
                OverPaymentAmt: this.M_AP_PaymentAdviceH.overpaymentamt ? this.replaceAllString(this.M_AP_PaymentAdviceH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_PaymentAdviceH.underpaymentamt ? this.replaceAllString(this.M_AP_PaymentAdviceH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AP_PaymentAdviceH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_PaymentAdviceH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_PaymentAdviceH = {
                batchno: 0,
                cashierno: '',
                trxtype: '',
                debitno: '',
                debitdate: this.getToday(),
                creditorcd: '',
                descs: '',
                debitreferenceno: '',
                currencycd: '',
                currencyrate: 0,
                creditamt: 0,
                holdvatamt: 0,
                holdwithholdingamt: 0,
                bankchargesamt: 0,
                overpaymentamt: '0',
                underpaymentamt: '0',
                allocatedamt: 0,
                forexgainlossamt: 0,
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                netamt: 0,
                withholdingamt: 0,
                vatamt: 0,
                creditorname: '',
                referenceno: '',
                runningcd: '',
                totalamt: 0,
                totalallocationamt: 0,
                runningcddescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_PaymentAdviceH = {
                batchno: data.batchno,
                cashierno: data.cashierno,
                trxtype: data.trxtype,
                debitno: data.debitno,
                debitdate: data.debitdate,
                creditorcd: data.creditorcd,
                descs: data.descs,
                debitreferenceno: data.debitreferenceno,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                holdvatamt: this.isCurrency(data.holdvatamt, this.decimal),
                holdwithholdingamt: this.isCurrency(data.holdwithholdingamt, this.decimal),
                bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
                overpaymentamt: this.isCurrency(data.overpaymentamt, this.decimal),
                underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                netamt: this.isCurrency(data.netamt, this.decimal),
                withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                creditorname: data.creditorname,
                referenceno: data.referenceno,
                runningcd: data.runningcd,
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                totalallocationamt: this.isCurrency(data.totalallocationamt, this.decimal),
                runningcddescs: data.runningcddescs,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
            

                this.M_AP_PaymentAdviceH.creditorcdLabel = this.M_AP_PaymentAdviceH.creditorcd != null && this.M_AP_PaymentAdviceH.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_PaymentAdviceH.runningcdLabel = this.M_AP_PaymentAdviceH.runningcd != null && this.M_AP_PaymentAdviceH.runningcd != '' ? data.runningcd + this.separator + data.runningcddescs :'' 
                this.M_AP_PaymentAdviceH.currencycdLabel = this.M_AP_PaymentAdviceH.currencycd != null && this.M_AP_PaymentAdviceH.currencycd != '' ? data.currencycd :'' 


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

