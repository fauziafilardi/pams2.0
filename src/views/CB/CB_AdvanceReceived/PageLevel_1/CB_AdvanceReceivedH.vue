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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_CB_AdvanceReceivedH.batchno" :label="M_CB_AdvanceReceivedH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_CB_AdvanceReceivedH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_CB_AdvanceReceivedH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchtotalChange" :prop="PI_batchtotal" v-model="M_CB_AdvanceReceivedH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_CB_AdvanceReceivedH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_CB_AdvanceReceivedH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_AdvanceReceivedH.trxtype" :label="M_CB_AdvanceReceivedH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_CB_AdvanceReceivedH.paymentno"  ref="ref_paymentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnpaymentdateChange" :prop="PI_paymentdate" v-model="M_CB_AdvanceReceivedH.paymentdate"  ref="ref_paymentdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_AdvanceReceivedH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_AdvanceReceivedH.paymentcd" :label="M_CB_AdvanceReceivedH.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_AdvanceReceivedH.bankcd" :label="M_CB_AdvanceReceivedH.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_AdvanceReceivedH.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_CB_AdvanceReceivedH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_AdvanceReceivedH.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnadvancereceiverpersonnelidChange" :prop="PI_advancereceiverpersonnelid" v-model="M_CB_AdvanceReceivedH.advancereceiverpersonnelid" :label="M_CB_AdvanceReceivedH.advancereceiverpersonnelidLabel" ref="ref_advancereceiverpersonnelid" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_AdvanceReceivedH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_CB_AdvanceReceivedH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_AdvanceReceivedH.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_AdvanceReceivedH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_AdvanceReceivedH.remarks"  ref="ref_remarks" />
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
		Module:"CB",
            propList: {
                initialWhere: "Source = 'D' AND PaymentStatus = 'N' AND SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_AdvanceReceivedH :{
                batchno: 0,
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.momentDate(new Date()),
                descs: '',
                paymentcategory: '',
                paymentno: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                paymentcd: '',
                bankcd: '',
                currencycd: '',
                currencyrate: '0',
                taxrate: '',
                originalcurrencyrate: '',
                trxamt: '0',
                netamt: '',
                withholdingamt: '',
                vatamt: '',
                totalamt: '',
                underpaymentamt: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                issuedbank: '',
                remarks: '',
                trxtypedescs: '',
                paymentdescs: '',
                paymenttype: '',
                bankname: '',
                runningdescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                advancereceiverpersonnelid: '',
                advancereceiverpersonnelname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBatch'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: '', 
                cKey: false, 
                cLabelSize: 4,
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CB/CB_BatchMaster' ,
                cDisplayColumn: 'BatchNo,DocumentCount' ,
            }, 
            PI_documentcount: { 
                cLabel: 'Doc. Count', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_batchtotal: { 
                cLabel: 'Batch Total', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_batchtotal: { 
                cValidate :'', 
                cName: 'batchtotal', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currentdocumentcount: { 
                cLabel: 'Curr. Doc. Count', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_currentbatchtotal: { 
                cLabel: 'Curr. Batch Total  ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'CB' AND TrxClass = 'D' AND STATUS = 'A'", 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_paymentno: { 
                cValidate :'max:20', 
                cName: 'paymentno', 
                cLabel: 'Advance Receive No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentdate: { 
                cValidate :'required', 
                cName: 'paymentdate', 
                cLabel: 'Receive Date ', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false,                 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'PaymentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type ', 
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
                cMasterUrl: 'CM/CM_PaymentType' ,
                cDisplayColumn: 'PaymentCd,Descs' ,
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank', 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_currencycd: { 
                cValidate :'max:13', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'required|max:12', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Received. Amount', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_advancereceiverpersonnelid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAdvancePersonnel'    , 
                    ColumnDB: 'AdvanceReceiverPersonnelID'   , 
                    InitialWhere: "Status='A' AND SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentvoucherreceiverid', 
                cLabel: 'Receiver ID ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'AdvanceReceiverPersonnelID,PersonnelName' , 
            }, 
            PI_chequereferenceno: { 
                cValidate :'max:20', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
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
            PI_chequereferencedate: { 
                cValidate :'', 
                cName: 'chequereferencedate', 
                cLabel: 'Cheque / Ref. Date', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_issuedbank: { 
                cValidate :'max:30', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
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
                cOrder: 14, 
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
        OnadvancereceiverpersonnelidChange (data){
          this.$nextTick(() => {
            this.M_CB_AdvanceReceivedH.advancereceiverpersonnelid = data.id
            this.M_CB_AdvanceReceivedH.advancereceiverpersonnelidLabel = data.label
            if(this.inputStatus != 'VIEW'){

            }
          })
        },	
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_CB_AdvanceReceivedH.batchno = data.id
            this.M_CB_AdvanceReceivedH.batchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{batchno}
            }
        })
        this.$forceUpdate()
        },
        OnbatchtotalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchtotal}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_AdvanceReceivedH.trxtype = data.id
            this.M_CB_AdvanceReceivedH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id)
              .then(dt => {
                if (dt != null) {
                  var dt25 = dt[0]
                  this.M_CB_AdvanceReceivedH.descs = dt25.TrxTypeDescs
                  // this.M_CB_AdvanceReceivedH.trxtypedescs = dt25.TrxTypeDescs
                  this.M_CB_AdvanceReceivedH.bankcd = dt25.DefaultBankCd
                  this.M_CB_AdvanceReceivedH.bankcdLabel = dt25.DefaultBankCd && dt25.DefaultBankCd != "" ? dt25.DefaultBankCd : ""
                  this.M_CB_AdvanceReceivedH.runningcd = dt25.RunningCd
                  if (this.inputStatus != "EDIT") {
                    if (dt25.RunningCd != '') {
                      this.M_CB_AdvanceReceivedH.paymentno = "(auto)"
                      this.PI_paymentno.cProtect = true
                    }
                    else {
                      this.M_CB_AdvanceReceivedH.paymentno = ""
                      this.PI_paymentno.cProtect = false
                    }
                  }

                  if (dt25.DefaultBankCd && dt25.DefaultBankCd != "") {
                    var paramcurrencycd = {
                      OptionFunctionCd: "GetBankCurrencyCd",
                      ModuleCd: this.Module,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      BankCd: dt25.DefaultBankCd,
                      BankCurrencyCd_Output: ""
                    }

                    this.FnDynamicFunction(paramcurrencycd)
                    .then(currCd => {
                        if (currCd == null) return
                        this.M_CB_AdvanceReceivedH.currencycd = currCd.BankCurrencyCd
                        if (this.M_CB_AdvanceReceivedH.paymentdate && this.M_CB_AdvanceReceivedH.paymentdate != "") {
                          var paramcurrencyrate = {
                            OptionFunctionCd: "GetRevaluationCurrencyRate",
                            ModuleCd: this.Module,
                            RevaluationCurrencyRate_Output: "",
                            BankCd: currCd.BankCurrencyCd,
                            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                            PaymentDate: this.M_CB_AdvanceReceivedH.paymentdate
                          }

                          this.FnDynamicFunction(paramcurrencyrate).then(dtCurrRate => {
                            this.M_CB_AdvanceReceivedH.currencyrate = this.isCurrency(dtCurrRate.RevaluationCurrencyRate, this.decimal)
                          })
                        }
                    })
                  }
                } 
              })
            }
        })
        this.$forceUpdate()
        },
        OnpaymentdateChange (data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if ((this.M_CB_AdvanceReceivedH.currencycd && this.M_CB_AdvanceReceivedH.currencycd != '') && (data && data != "")) {
                this.FnGetCurrencyMiddleRate(this.getDataUser().SubPortfolioCd, data, this.M_CB_AdvanceReceivedH.currencycd).then(dtCurrRate => {
                  this.M_CB_AdvanceReceivedH.currencyrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                })
              }
            }
          })
          this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_AdvanceReceivedH.paymentcd = data.id
            this.M_CB_AdvanceReceivedH.paymentcdLabel = data.label
            if(data.PaymentType == 'Cash')
            {
              this.PI_chequereferenceno.cValidate = ''
              this.PI_chequereferencedate.cValidate = ''
              this.PI_issuedbank.cValidate = ''
              this.PI_chequeduedate.cValidate = ''
            }
            else{
              this.PI_chequereferenceno.cValidate = 'required'
              this.PI_chequereferencedate.cValidate = 'required'
              this.PI_issuedbank.cValidate = 'required'
              this.PI_chequeduedate.cValidate = 'required'
            }
            if (this.inputStatus != "VIEW") {
//{paymentcd}
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_AdvanceReceivedH.bankcd = data.id
            this.M_CB_AdvanceReceivedH.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              var paramcurrencycd = {
                OptionFunctionCd: "GetBankCurrencyCd",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: data.id,
                BankCurrencyCd_Output: ""
              }

              this.FnDynamicFunction(paramcurrencycd)
              .then(currCd => {
                if (currCd == null) return
                this.M_CB_AdvanceReceivedH.currencycd = currCd.BankCurrencyCd

                if (this.M_CB_AdvanceReceivedH.paymentdate && this.M_CB_AdvanceReceivedH.paymentdate != "") {
                  this.FnGetCurrencyMiddleRate(this.getDataUser().SubPortfolioCd, this.M_CB_AdvanceReceivedH.paymentdate, currCd.BankCurrencyCd).then(dtCurrRate => {
                    this.M_CB_AdvanceReceivedH.currencyrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                  })
                  this.FnGetTaxCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_CB_AdvanceReceivedH.paymentdate, currCd.BankCurrencyCd).then(dtCurrRate => {
                    this.M_CB_AdvanceReceivedH.taxrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                  })
                }
              })
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
           //this.getToolbar().statusFunction[4].disabled = false
           this.getToolbar().statusFunction[4].text = "Post"
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
          var data = this.FormToABSList().getRowSelected()
          var dataPost = []
            
            data.forEach((value) => {
                dataPost.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    CheckedBatchNo: value.BatchNo,
                    PostBy: this.getDataUser().UserId,
                    _Message_: "Payment No "+ value.PaymentNo
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
        if (this.M_CB_AdvanceReceivedH.runningcd != "") {
            this.FnGenerateRunningCode(
              this.getDataUser().SubPortfolioCd,
              this.M_CB_AdvanceReceivedH.runningcd,
              this.getDataUser().UserId,
              this.M_CB_AdvanceReceivedH.paymentdate
            ).then(dt => {
              if (dt == null) return

              this.M_CB_AdvanceReceivedH.paymentno = dt.RunningCode

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: this.M_CB_AdvanceReceivedH.trxtype == '' || this.M_CB_AdvanceReceivedH.trxtype == null ? 'NULL' : this.M_CB_AdvanceReceivedH.trxtype ,
                PaymentNo: this.M_CB_AdvanceReceivedH.paymentno,
                BatchNo: this.M_CB_AdvanceReceivedH.batchno == '' || this.M_CB_AdvanceReceivedH.batchno == null ? 0 : this.M_CB_AdvanceReceivedH.batchno ,
                EntryType: this.M_CB_AdvanceReceivedH.entrytype,
                PaymentCategory: this.M_CB_AdvanceReceivedH.paymentcategory,
                PaymentDate: this.M_CB_AdvanceReceivedH.paymentdate,
                Descs: this.M_CB_AdvanceReceivedH.descs,
                PaymentCd: this.M_CB_AdvanceReceivedH.paymentcd == '' || this.M_CB_AdvanceReceivedH.paymentcd == null ? 'NULL' : this.M_CB_AdvanceReceivedH.paymentcd ,
                BankCd: this.M_CB_AdvanceReceivedH.bankcd == '' || this.M_CB_AdvanceReceivedH.bankcd == null ? 'NULL' : this.M_CB_AdvanceReceivedH.bankcd ,
                CurrencyCd: this.M_CB_AdvanceReceivedH.currencycd,
                CurrencyRate: this.M_CB_AdvanceReceivedH.currencyrate ? this.replaceAllString(this.M_CB_AdvanceReceivedH.currencyrate,',','','number') : 0 ,
                TrxAmt: this.M_CB_AdvanceReceivedH.trxamt ? this.replaceAllString(this.M_CB_AdvanceReceivedH.trxamt,',','','number') : 0 ,
                ChequeReferenceNo: this.M_CB_AdvanceReceivedH.chequereferenceno,
                ChequeReferenceDate: this.M_CB_AdvanceReceivedH.chequereferencedate == '' || this.M_CB_AdvanceReceivedH.chequereferencedate == null ? 'NULL' : this.M_CB_AdvanceReceivedH.chequereferencedate ,
                ChequeDueDate: this.M_CB_AdvanceReceivedH.chequeduedate == '' || this.M_CB_AdvanceReceivedH.chequeduedate == null ? 'NULL' : this.M_CB_AdvanceReceivedH.chequeduedate ,
                IssuedBank: this.M_CB_AdvanceReceivedH.issuedbank,
                Remarks: this.M_CB_AdvanceReceivedH.remarks,
                UserInput: this.getDataUser().UserId ,
                AdvanceReceiverPersonnelID: this.M_CB_AdvanceReceivedH.advancereceiverpersonnelid,
                EntryType: 'D',
                PaymentCategory: 'I'                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
      })
        }

        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: this.M_CB_AdvanceReceivedH.trxtype == '' || this.M_CB_AdvanceReceivedH.trxtype == null ? 'NULL' : this.M_CB_AdvanceReceivedH.trxtype ,
                PaymentNo: this.M_CB_AdvanceReceivedH.paymentno,
                PaymentDate: this.M_CB_AdvanceReceivedH.paymentdate,
                Descs: this.M_CB_AdvanceReceivedH.descs,
                PaymentCd: this.M_CB_AdvanceReceivedH.paymentcd == '' || this.M_CB_AdvanceReceivedH.paymentcd == null ? 'NULL' : this.M_CB_AdvanceReceivedH.paymentcd ,
                BankCd: this.M_CB_AdvanceReceivedH.bankcd == '' || this.M_CB_AdvanceReceivedH.bankcd == null ? 'NULL' : this.M_CB_AdvanceReceivedH.bankcd ,
                CurrencyCd: this.M_CB_AdvanceReceivedH.currencycd,
                CurrencyRate: this.M_CB_AdvanceReceivedH.currencyrate ? this.replaceAllString(this.M_CB_AdvanceReceivedH.currencyrate,',','','number') : 0 ,
                ChequeReferenceNo: this.M_CB_AdvanceReceivedH.chequereferenceno,
                ChequeReferenceDate: this.M_CB_AdvanceReceivedH.chequereferencedate == '' || this.M_CB_AdvanceReceivedH.chequereferencedate == null ? 'NULL' : this.M_CB_AdvanceReceivedH.chequereferencedate ,
                ChequeDueDate: this.M_CB_AdvanceReceivedH.chequeduedate == '' || this.M_CB_AdvanceReceivedH.chequeduedate == null ? 'NULL' : this.M_CB_AdvanceReceivedH.chequeduedate ,
                IssuedBank: this.M_CB_AdvanceReceivedH.issuedbank,
                Remarks: this.M_CB_AdvanceReceivedH.remarks,
                UserEdit: this.getDataUser().UserId ,
                EntryType: this.M_CB_AdvanceReceivedH.entrytype,
                LastUpdateStamp: this.M_CB_AdvanceReceivedH.lastupdatestamp,
                AdvanceReceiverPersonnelID: this.M_CB_AdvanceReceivedH.advancereceiverpersonnelid,
                EntryType: 'D'                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_AdvanceReceivedH = {
                batchno: 0,
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.momentDate(new Date()),
                descs: '',
                paymentcategory: '',
                paymentno: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                paymentcd: '',
                bankcd: '',
                currencycd: '',
                currencyrate: '',
                taxrate: '',
                originalcurrencyrate: '',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                vatamt: '',
                totalamt: '',
                underpaymentamt: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                issuedbank: '',
                remarks: '',
                trxtypedescs: '',
                paymentdescs: '',
                paymenttype: '',
                bankname: '',
                runningdescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                advancereceiverpersonnelid: '',
                advancereceiverpersonnelname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
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
          PaymentNo: value.PaymentNo,
          BatchNo: value.BatchNo,
          UserEdit: this.getDataUser().UserId,
          EntryType: 'D',
          LastUpdateStamp: value.LastUpdateStamp,
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
              }) 
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                paymentno: record.PaymentNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
this.M_CB_AdvanceReceivedH = {
                batchno: data.batchno,
                source: data.source,
                runningcd: data.runningcd,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                paymentdate: data.paymentdate,
                descs: data.descs,
                paymentcategory: data.paymentcategory,
                paymentno: data.paymentno,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                paymentcd: data.paymentcd,
                bankcd: data.bankcd,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxrate: this.isCurrency(data.taxrate, this.decimal),
                originalcurrencyrate: this.isCurrency(data.originalcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                chequeduedate: data.chequeduedate,
                issuedbank: data.issuedbank,
                remarks: data.remarks,
                trxtypedescs: data.trxtypedescs,
                paymentdescs: data.paymentdescs,
                paymenttype: data.paymenttype,
                bankname: data.bankname,
                runningdescs: data.runningdescs,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                advancereceiverpersonnelid: data.advancereceiverpersonnelid,
                advancereceiverpersonnelname: data.advancereceiverpersonnelname,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                rowid: data.rowid
                    }
                 

                this.M_CB_AdvanceReceivedH.batchnoLabel = this.M_CB_AdvanceReceivedH.batchno != null && this.M_CB_AdvanceReceivedH.batchno != '' ? data.batchno + this.separator  :'' 
                this.M_CB_AdvanceReceivedH.trxtypeLabel = this.M_CB_AdvanceReceivedH.trxtype != null && this.M_CB_AdvanceReceivedH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_CB_AdvanceReceivedH.paymentcdLabel = this.M_CB_AdvanceReceivedH.paymentcd != null && this.M_CB_AdvanceReceivedH.paymentcd != '' ? data.paymentcd + this.separator + data.paymentdescs :'' 
                this.M_CB_AdvanceReceivedH.bankcdLabel = this.M_CB_AdvanceReceivedH.bankcd != null && this.M_CB_AdvanceReceivedH.bankcd != '' ? data.bankcd + this.separator + data.bankname :''
                this.M_CB_AdvanceReceivedH.advancereceiverpersonnelidLabel = this.M_CB_AdvanceReceivedH.advancereceiverpersonnelid != null && this.M_CB_AdvanceReceivedH.advancereceiverpersonnelid != '' ? data.advancereceiverpersonnelid + this.separator + data.advancereceiverpersonnelname :''
         

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

