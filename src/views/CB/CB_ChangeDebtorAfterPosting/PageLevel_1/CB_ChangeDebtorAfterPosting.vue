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

                    <span style="float:Left; color: #81b3e9 !important;letter-spacing: 1px;margin-top: 2px;margin-left: 3px" >
                        Record Information <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                    </span>
                    <span v-show="IEBy.Input && IEBy.Edit" class="master-span">
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
                                        <ABSinputTextVuex :prop="PI_batchno" v-model="M_CB_ChangeDebtorAfterPosting.batchno"  ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputCheckBox @input="OnbatchtotalChange" :prop="PI_batchtotal" v-model="M_CB_ChangeDebtorAfterPosting.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_CB_ChangeDebtorAfterPosting.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_CB_ChangeDebtorAfterPosting.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_CB_ChangeDebtorAfterPosting.trxtypeLabel"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_CB_ChangeDebtorAfterPosting.paymentno"  ref="ref_paymentno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputDateTime @input="OnpaymentdateChange" :prop="PI_paymentdate" v-model="M_CB_ChangeDebtorAfterPosting.paymentdate"  ref="ref_paymentdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_ChangeDebtorAfterPosting.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpaymentcategoryChange" :prop="PI_paymentcategory" v-model="M_CB_ChangeDebtorAfterPosting.paymentcategory"  ref="ref_paymentcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnidentifiedtrxstatusChange" :prop="PI_identifiedtrxstatus" v-model="M_CB_ChangeDebtorAfterPosting.identifiedtrxstatus"  ref="ref_identifiedtrxstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_CB_ChangeDebtorAfterPosting.debtorcd" :label="M_CB_ChangeDebtorAfterPosting.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_CB_ChangeDebtorAfterPosting.creditorcd" :label="M_CB_ChangeDebtorAfterPosting.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentcd" v-model="M_CB_ChangeDebtorAfterPosting.paymentcdLabel"  ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_customerbankaccountno" v-model="M_CB_ChangeDebtorAfterPosting.customerbankaccountno"  ref="ref_customerbankaccountno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_ChangeDebtorAfterPosting.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankcd" v-model="M_CB_ChangeDebtorAfterPosting.bankcdLabel"  ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_ChangeDebtorAfterPosting.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_CB_ChangeDebtorAfterPosting.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_ChangeDebtorAfterPosting.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferencedate" v-model="M_CB_ChangeDebtorAfterPosting.chequereferencedate"  ref="ref_chequereferencedate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_ChangeDebtorAfterPosting.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_chequeduedate" v-model="M_CB_ChangeDebtorAfterPosting.chequeduedate"  ref="ref_chequeduedate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_ChangeDebtorAfterPosting.remarks"  ref="ref_remarks" />
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
		Module:"CB",
            propList: {
                initialWhere: "Source = 'P' AND PaymentStatus = 'P' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND PaymentNo IN (SELECT PaymentNo FROM VW_CB_ChangeDebtorAfterPosting WHERE SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "')",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_ChangeDebtorAfterPosting :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: '0',
                source: '',
                runningcd: '',
                trxtype: '',
                trxtypeLabel: '',
                modulecd: '',
                paymentno: '',
                paymentdate: '',
                descs: '',
                identifiedtrxstatus: '',
                debtorcd: '',
                creditorcd: '',
                paymentcd: '',
                paymentcdLabel: '',
                bankcd: '',
                bankcdLabel: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '',
                originalcurrencyrate: '',
                tobankcd: '',
                tocurrencycd: '',
                currencyoperator: '',
                trxamt: '0',
                totrxamt: '',
                netamt: '',
                vatamt: '',
                withholdingamt: '',
                underpaymentamt: '',
                bankchargesamt: '',
                customerbankaccountno: '',
                referenceno: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                lastrevaluationdate: '',
                lastrevaluationcurrencyrate: '',
                postby: '',
                postingdate: '',
                paymentstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                paymentadviceno: '',
                advancereceiverpersonnelid: '',
                paymentvoucherreceiverid: '',
                controlsequenceno: 0,
                receiveraccount: '',
                bankname: '',
                receivername: '',
                overpaymentamt: '',
                lotno: '',
                previousprocesscontrolsequenceno: 0,
                onebillreceipttype: '',
                onebillcontactid: '',
                vauploaddate: '',
                mandatorybudget: '',
                rowid: 0,
                debtorcreditorcd: '',
                paymentcategory: '',
                batchstatus: '',
                translatedsource: '',
                processcontrolsequenceno: 0,
                contactid: '',
                batchtotal: '',
                currentdocumentcount: '',
                currentbatchtotal: ''
                    }
            ,
            PI_batchno: { 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: 'Batch No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchtotal: { 
                cValidate :'', 
                cName: 'batchtotal', 
                cLabel: 'Batch Total', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 1, 
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
                cLabel: 'Curr. Batch Total', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
            PI_paymentno: { 
                cValidate :'', 
                cName: 'paymentno', 
                cLabel: 'Payment No', 
                cLabelSie: 4, 
                cOrder: 3, 
                cKey: true,
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentdate: { 
                cValidate :'', 
                cName: 'paymentdate', 
                cLabel: 'Payment Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true,
                cVisible:  true, 
                cProtect: false, 
                cFormat: 'dd/MM/yyyy', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentcategory: { 
                cValidate :'', 
                cName: 'paymentcategory', 
                cId: 'rdbpaymentcategory', 
                cRadioOptions: [{ text: 'Cash In', value: 'I' }, { text: 'Cash Out', value: 'O' }], 
                cRadioDefaultOption: '', 
                cLabel:'Payment Category', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_identifiedtrxstatus: { 
                cValidate :'', 
                cName: 'identifiedtrxstatus', 
                cId: 'rdbidentifiedtrxstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Identified Trans.', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And Status='Y' And DebtorCd Not IN (Select ISNULL(UnidentifiedDebtorCd,'') From AR_Specification Where SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
            PI_paymentcd: { 
                cValidate :'max:8', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customerbankaccountno: { 
                cValidate :'max:30', 
                cName: 'customerbankaccountno', 
                cLabel: 'Bank Account No', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: true,
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: true,
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankcd: { 
                cValidate :'', 
                cName: 'bankcd', 
                cLabel: 'Bank', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: true,
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: true,
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: true,
                cType: 'decimal',
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
                cOrder: 16, 
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
                cOrder: 17, 
                cKey: true,
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_issuedbank: { 
                cValidate :'', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 18, 
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
                cOrder: 19, 
                cKey: true,
                cType: 'text',
                cVisible: true, 
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
                cOrder:20, 
                cKey: true,
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
        OnbatchtotalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchtotal}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{paymentdate}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{paymentcategory}
            }
        })
        this.$forceUpdate()
        },
        OnidentifiedtrxstatusChange (data) {
        this.$nextTick(() => {
          if (this.inputStatus != "VIEW") {
            if (data == "N") {
              
              this.M_CB_ChangeDebtorAfterPosting.debtorcd = "D-MrX"
              this.M_CB_ChangeDebtorAfterPosting.debtorcdLabel = "D-MrX"
              this.M_CB_ChangeDebtorAfterPosting.creditorcd = ""
              this.M_CB_ChangeDebtorAfterPosting.creditorcdLabel = ""
              this.PI_debtorcd.cKey = true
              this.PI_creditorcd.cKey = true
              this.PI_currencycd.cKey = true
              // mendisable debtorcd dan creditorcd
            }
            else {
              this.M_CB_ChangeDebtorAfterPosting.debtorcd = ""
              this.M_CB_ChangeDebtorAfterPosting.debtorcdLabel = ""
              this.M_CB_ChangeDebtorAfterPosting.creditorcd = ""
              this.M_CB_ChangeDebtorAfterPosting.creditorcdLabel = ""
              this.PI_debtorcd.cKey = false
              this.PI_creditorcd.cKey = false
              this.PI_creditorcd.cProtect = false
              // men enable debtorcd dan creditorcd
            }
          }
        })
        this.$forceUpdate()
        },
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_ChangeDebtorAfterPosting.debtorcd = data.id
            this.M_CB_ChangeDebtorAfterPosting.debtorcdLabel = data.label
            this.PI_creditorcd.cKey = true
            if (this.inputStatus != "VIEW") {
              if(this.M_CB_ChangeDebtorAfterPosting.debtorcd == '' && this.M_CB_ChangeDebtorAfterPosting.debtorcdLabel == ''){
                this.PI_creditorcd.cKey = false
              }
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_ChangeDebtorAfterPosting.creditorcd = data.id
            this.M_CB_ChangeDebtorAfterPosting.creditorcdLabel = data.label
            this.PI_debtorcd.cKey = true
            if (this.inputStatus != "VIEW") {
             if(this.M_CB_ChangeDebtorAfterPosting.creditorcd == '' && this.M_CB_ChangeDebtorAfterPosting.creditorcdLabel == ''){
                this.PI_debtorcd.cKey = false
              } 
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
          this.getToolbar().statusFunction[2].disabled = true
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
        },
        M_Update() {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            PaymentNo: this.M_CB_ChangeDebtorAfterPosting.paymentno,
            Descs: this.M_CB_ChangeDebtorAfterPosting.descs,
            IdentifiedTrxStatus: this.M_CB_ChangeDebtorAfterPosting.identifiedtrxstatus,
            DebtorCd: this.M_CB_ChangeDebtorAfterPosting.debtorcd == '' || this.M_CB_ChangeDebtorAfterPosting.debtorcd == null ? 'NULL' : this.M_CB_ChangeDebtorAfterPosting.debtorcd,
            CreditorCd: this.M_CB_ChangeDebtorAfterPosting.creditorcd == '' || this.M_CB_ChangeDebtorAfterPosting.creditorcd == null ? 'NULL' : this.M_CB_ChangeDebtorAfterPosting.creditorcd,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            UserEdit: this.getDataUser().UserId ,
            LastUpdateStamp: this.M_CB_ChangeDebtorAfterPosting.lastupdatestamp                
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
            this.M_CB_ChangeDebtorAfterPosting = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: '0',
                source: '',
                runningcd: '',
                trxtype: '',
                trxtypeLabel: '',
                modulecd: '',
                paymentno: '',
                paymentdate: '',
                descs: '',
                identifiedtrxstatus: '',
                debtorcd: '',
                creditorcd: '',
                paymentcd: '',
                paymentcdLabel: '',
                bankcd: '',
                bankcdLabel: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '',
                originalcurrencyrate: '',
                tobankcd: '',
                tocurrencycd: '',
                currencyoperator: '',
                trxamt: '0',
                totrxamt: '',
                netamt: '',
                vatamt: '',
                withholdingamt: '',
                underpaymentamt: '',
                bankchargesamt: '',
                customerbankaccountno: '',
                referenceno: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                lastrevaluationdate: '',
                lastrevaluationcurrencyrate: '',
                postby: '',
                postingdate: '',
                paymentstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                paymentadviceno: '',
                advancereceiverpersonnelid: '',
                paymentvoucherreceiverid: '',
                controlsequenceno: 0,
                receiveraccount: '',
                bankname: '',
                receivername: '',
                overpaymentamt: '',
                lotno: '',
                previousprocesscontrolsequenceno: 0,
                onebillreceipttype: '',
                onebillcontactid: '',
                vauploaddate: '',
                mandatorybudget: '',
                rowid: 0,
                debtorcreditorcd: '',
                paymentcategory: '',
                batchstatus: '',
                translatedsource: '',
                processcontrolsequenceno: 0,
                contactid: '',
                batchtotal: '',
                currentdocumentcount: '',
                currentbatchtotal: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
          this.$refs.ref_descs.focus()
        },
        M_Delete(dt){       

          //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                paymentno: record.PaymentNo,
                debtorcd: record.DebtorCreditorCd 
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CB_ChangeDebtorAfterPosting = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                source: data.source,
                runningcd: data.runningcd,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                paymentno: data.paymentno,
                paymentdate: data.paymentdate,
                descs: data.descs,
                identifiedtrxstatus: data.identifiedtrxstatus,
                debtorcd: data.debtorcd,
                creditorcd: data.creditorcd,
                paymentcd: data.paymentcd,
                bankcd: data.bankcd,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: data.taxcurrencyrate,
                originalcurrencyrate: data.originalcurrencyrate,
                tobankcd: data.tobankcd,
                tocurrencycd: data.tocurrencycd,
                currencyoperator: data.currencyoperator,
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                totrxamt: data.totrxamt,
                netamt: data.netamt,
                vatamt: data.vatamt,
                withholdingamt: data.withholdingamt,
                underpaymentamt: data.underpaymentamt,
                bankchargesamt: data.bankchargesamt,
                customerbankaccountno: data.customerbankaccountno,
                referenceno: data.referenceno,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                issuedbank: data.issuedbank,
                chequeduedate: data.chequeduedate,
                lastrevaluationdate: data.lastrevaluationdate,
                lastrevaluationcurrencyrate: data.lastrevaluationcurrencyrate,
                postby: data.postby,
                postingdate: data.postingdate,
                paymentstatus: data.paymentstatus,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                paymentadviceno: data.paymentadviceno,
                advancereceiverpersonnelid: data.advancereceiverpersonnelid,
                paymentvoucherreceiverid: data.paymentvoucherreceiverid,
                controlsequenceno: data.controlsequenceno,
                receiveraccount: data.receiveraccount,
                bankname: data.bankname,
                receivername: data.receivername,
                overpaymentamt: data.overpaymentamt,
                lotno: data.lotno,
                previousprocesscontrolsequenceno: data.previousprocesscontrolsequenceno,
                onebillreceipttype: data.onebillreceipttype,
                onebillcontactid: data.onebillcontactid,
                vauploaddate: data.vauploaddate,
                mandatorybudget: data.mandatorybudget,
                rowid: data.rowid,
                debtorcreditorcd: data.debtorcreditorcd,
                paymentcategory: data.paymentcategory,
                batchstatus: data.batchstatus,
                translatedsource: data.translatedsource,
                processcontrolsequenceno: data.processcontrolsequenceno,
                contactid: data.contactid,
                batchtotal: data.batchtotal,
                currentdocumentcount: data.currentdocumentcount,
                currentbatchtotal: data.currentbatchtotal
                    }

                this.M_CB_ChangeDebtorAfterPosting.trxtypeLabel = this.M_CB_ChangeDebtorAfterPosting.trxtype != null && this.M_CB_ChangeDebtorAfterPosting.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_CB_ChangeDebtorAfterPosting.debtorcdLabel = this.M_CB_ChangeDebtorAfterPosting.debtorcd != null && this.M_CB_ChangeDebtorAfterPosting.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_CB_ChangeDebtorAfterPosting.creditorcdLabel = this.M_CB_ChangeDebtorAfterPosting.creditorcd != null && this.M_CB_ChangeDebtorAfterPosting.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_CB_ChangeDebtorAfterPosting.bankcdLabel = this.M_CB_ChangeDebtorAfterPosting.bankcd != null && this.M_CB_ChangeDebtorAfterPosting.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                this.M_CB_ChangeDebtorAfterPosting.paymentcdLabel = this.M_CB_ChangeDebtorAfterPosting.paymentcd != null && this.M_CB_ChangeDebtorAfterPosting.paymentcd != '' ? data.paymentcd + this.separator + data.paymentdescs :'' 

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                if(data.paymentcategory == 'I'){
                  this.PI_debtorcd.cProtect = false
                  this.PI_creditorcd.cProtect = true
                }else{
                  this.PI_debtorcd.cProtect = true
                  this.PI_creditorcd.cProtect = false
                }
                 
                 if(data.identifiedtrxstatus == 'Y'){
                   if(M_CB_ChangeDebtorAfterPosting.debtorcd && M_CB_ChangeDebtorAfterPosting.debtorcdLabel == ''){
                     this.PI_debtorcd.cKey = true
                     this.PI_creditorcd.cKey = false
                   }
                   else{
                    this.PI_debtorcd.cKey = false
                    this.PI_creditorcd.cKey = true
                  }
                 }
                else{
                  this.PI_debtorcd.cKey = true
                  this.PI_creditorcd.cKey = true
                }


            // this.$forceUpdate()

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

