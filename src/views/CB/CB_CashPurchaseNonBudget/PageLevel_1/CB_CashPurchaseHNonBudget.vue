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
                                          <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_CB_CashPurchaseHNonBudget.batchno" :label="M_CB_CashPurchaseHNonBudget.batchnoLabel" ref="ref_batchno"/>
                                        </b-col>
                                        <b-col md="3">
                                          <ABSCompute :prop="PI_documentcount" v-model="M_CB_CashPurchaseHNonBudget.documentcount"  ref="ref_documentcount" />
                                        </b-col>
                                        <b-col md="3">
                                          <ABSCompute :prop="PI_batchtotal" v-model="M_CB_CashPurchaseHNonBudget.batchtotal"  ref="ref_batchtotal" />
                                        </b-col>
                                        <b-col md="3">
                                          <ABSinputCheckBox @input="OnbatchtotalChange" :prop="PI_batchtotal" v-model="M_CB_CashPurchaseHNonBudget.batchtotal"  ref="ref_batchtotal" />
                                        </b-col>
                                      </b-row>
                                      <b-row>
                                        <b-col  md="6">
                                          <ABSCompute :prop="PI_currentdocumentcount" v-model="M_CB_CashPurchaseHNonBudget.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                        </b-col>
                                        <b-col md="6">
                                          <ABSCompute :prop="PI_currentbatchtotal" v-model="M_CB_CashPurchaseHNonBudget.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                        </b-col>
                                      </b-row>
                                  </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_CashPurchaseHNonBudget.trxtype" :label="M_CB_CashPurchaseHNonBudget.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_CB_CashPurchaseHNonBudget.paymentno"  ref="ref_paymentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_paymentdate" v-model="M_CB_CashPurchaseHNonBudget.paymentdate"  ref="ref_paymentdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_CB_CashPurchaseHNonBudget.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_CashPurchaseHNonBudget.paymentcd" :label="M_CB_CashPurchaseHNonBudget.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_CashPurchaseHNonBudget.bankcd" :label="M_CB_CashPurchaseHNonBudget.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_CashPurchaseHNonBudget.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_CB_CashPurchaseHNonBudget.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_CashPurchaseHNonBudget.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxrate" v-model="M_CB_CashPurchaseHNonBudget.taxrate"  ref="ref_taxrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_CB_CashPurchaseHNonBudget.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_CB_CashPurchaseHNonBudget.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_CB_CashPurchaseHNonBudget.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_CB_CashPurchaseHNonBudget.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_underpaymentamt" v-model="M_CB_CashPurchaseHNonBudget.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_CashPurchaseHNonBudget.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_CB_CashPurchaseHNonBudget.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_CashPurchaseHNonBudget.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_CashPurchaseHNonBudget.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6"></b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreceiveraccountChange" :prop="PI_receiveraccount" :value="M_CB_CashPurchaseHNonBudget.receiveraccount" :label="M_CB_CashPurchaseHNonBudget.receiveraccountLabel" ref="ref_receiveraccount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_CashPurchaseHNonBudget.remarks"  ref="ref_remarks" />
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
                initialWhere: "PaymentSource = 'C' AND PaymentStatus = 'N' AND SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND MandatoryBudget = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_CashPurchaseHNonBudget :{
                batchno: 0,
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.getToday(),
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
                taxrate: '0',
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
                receiveraccount: '',
                banknamereceiveraccount: '',
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
                cOrder: 0, 
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
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'CB' AND TrxClass = 'C' AND [STATUS] = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: 'CM/CM_TransactionTypeGroup' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_paymentno: { 
                cValidate :'max:20', 
                cName: 'paymentno', 
                cLabel: 'Payment No', 
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
            PI_paymentdate: { 
                cValidate :'required', 
                cName: 'paymentdate', 
                cLabel: 'Payment Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false,
                cRows: 2, 
                cMaxRows: 2, 
                cSize: 'md',   
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
                cMasterUrl: 'CM/CM_PaymentType' ,
                cDisplayColumn: 'PaymentCd,Descs' ,
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' And STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank', 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
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
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
            }, 
            PI_taxrate: { 
                cValidate :'required', 
                cName: 'taxrate', 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            },
            PI_vatamt: { 
                cLabel: 'Vat Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            },  
            PI_withholdingamt: { 
                cLabel: 'Withholding Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_underpaymentamt: { 
                cLabel: 'Under Payment Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_chequereferenceno: { 
                cValidate :'max:20', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
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
             PI_chequereferencedate: { 
                cValidate :'', 
                cName: 'chequereferencedate', 
                cLabel: 'Cheque / Ref Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder: 0, 
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
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },             
            PI_receiveraccount: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCreditorReceiverCd'    , 
                    ColumnDB: 'ReceiverCd'   , 
                    InitialWhere: "CreditorCd"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'receiveraccount', 
                cLabel: 'Receiver Account', 
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
                cDisplayColumn: 'ReceiverCd,ReceiverName' ,
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
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cResize: false, 
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
        GetCashPurchaseCreditorCd(){
          var param = {
                OptionFunctionCd: "GetCBCashPurchaseCreditorCd",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
              }

              this.FnDynamicFunction(param)
              .then(ress => {
                if (ress == null) return
                if (ress.length < 1) return

                var datas = ress[0]
                // console.log(datas)
                this.PI_receiveraccount.dataLookUp.InitialWhere = "CreditorCd='"+datas.CashPurchaseCreditorCd+"'"
                
              })
        },	
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseHNonBudget.batchno = data.id
            this.M_CB_CashPurchaseHNonBudget.batchnoLabel = data.label
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
        GetBankCurrencyCd(BankCd){
          var param = {
                OptionFunctionCd: "GetBankCurrencyCd",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: BankCd,
                BankCurrencyCd_Output: ''
            }

            return this.FnDynamicFunction(param)
            // .then(ress => {
            //     if (ress == null) return
            //       this.M_CB_CashPurchaseHNonBudget.currencycd = ress.BankCurrencyCd
            //       this.M_CB_CashPurchaseHNonBudget.bankcdLabel = this.M_CB_CashPurchaseHNonBudget.bankcd != null && this.M_CB_CashPurchaseHNonBudget.bankcd != '' ? BankCd + this.separator :''                   
            // })
        },
        GetRevaluationCurrencyRate(BankCd,PaymentDate){
          var param = {
                OptionFunctionCd: "GetRevaluationCurrencyRate",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: BankCd,
                PaymentDate: PaymentDate,
                RevaluationCurrencyRate_Output: ''
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                  // console.log(ress)
                  this.M_CB_CashPurchaseHNonBudget.currencyrate = ress.RevaluationCurrencyRate                                   
            })
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseHNonBudget.trxtype = data.id
            this.M_CB_CashPurchaseHNonBudget.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              if(this.M_CB_CashPurchaseHNonBudget.trxtype != ''){
                // this.FnValidateTrxType(
                //   this.getDataUser().SubPortfolioCd, this.Module, data.id
                // ).then(data => {

                // })

                this.FnGetTrxTypeData(
                    this.getDataUser().SubPortfolioCd, this.Module, data.id
                ).then(ress => {
                    // console.log(ress)
                    if (ress != null) {
                        var data = ress[0]
                        // console.log(data)                        
                        this.M_CB_CashPurchaseHNonBudget.runningcd = data.RunningCd
                        this.M_CB_CashPurchaseHNonBudget.trxtypeLabel = data.TrxTypeDescs
                        this.M_CB_CashPurchaseHNonBudget.bankcd = data.DefaultBankCd

                        // if(this.M_CB_CashPurchaseHNonBudget.bankcd != ''){
                        //   this.GetBankCurrencyCd(this.M_CB_CashPurchaseHNonBudget.bankcd)
                        //   if(this.M_CB_CashPurchaseHNonBudget.paymentdate != ''){
                        //     this.GetRevaluationCurrencyRate(this.M_CB_CashPurchaseHNonBudget.bankcd, this.M_CB_CashPurchaseHNonBudget.paymentdate)
                        //   }
                        // }
                          if(this.M_CB_CashPurchaseHNonBudget.bankcd != ''){
                          this.GetBankCurrencyCd(this.M_CB_CashPurchaseHNonBudget.bankcd)
                          .then(ress => {
                          if (ress == null) return
                            this.M_CB_CashPurchaseHNonBudget.currencycd = ress.BankCurrencyCd
                            // this.M_CB_CashPurchaseHNonBudget.bankcdLabel = this.M_CB_CashPurchaseHNonBudget.bankcd != null && this.M_CB_CashPurchaseHNonBudget.bankcd != '' ? BankCd + this.separator :''

                            if(this.M_CB_CashPurchaseHNonBudget.paymentdate != ''){
                              this.GetRevaluationCurrencyRate(this.M_CB_CashPurchaseHNonBudget.bankcd, this.M_CB_CashPurchaseHNonBudget.paymentdate)
                            }
                          })
                        }   

                        if(this.inputStatus == "NEW"){
                          if(this.M_CB_CashPurchaseHNonBudget.runningcd != ''){
                            this.M_CB_CashPurchaseHNonBudget.runningcd = this.M_CB_CashPurchaseHNonBudget.runningcd
                            this.M_CB_CashPurchaseHNonBudget.paymentno = "(AUTO)"
                            this.PI_paymentno.cProtect = true
                          }
                        }

                        // if(this.inputStatus != "EDIT"){
                        //   this.M_CB_CashPurchaseHNonBudget.runningcd = ""
                        //   this.M_CB_CashPurchaseHNonBudget.paymentno = ""
                        //   this.PI_paymentno.cProtect = true
                        // }
                        
                        // if (data.JournalType == "D") {
                        //     this.M_AR_InvoiceD.AmortizeStatus = "M"
                        // }

                        // if (data.FixAmt >= 0) {
                        //     this.M_AR_InvoiceD.TrxAmt = parseInt(data.FixAmt)

                        //     if (this.M_AR_InvoiceD.DiscountCd && this.M_AR_InvoiceD.DiscountCd != '') {
                        //         this.FnGetARDiscountAmount(
                        //             parseInt(data.FixAmt), this.M_AR_InvoiceD.DiscountCd
                        //         ).then(disc => {
                        //             if (disc != null) {
                        //                 var dataDisc = disc[0]
                        //                 this.M_AR_InvoiceD.DiscountAmt = parseInt(dataDisc.DiscountAmt)
                        //                 this.M_AR_InvoiceD.AmtAfterDisc = parseInt(dataDisc.AmountAfterDisc)
                        //             }
                        //         })
                        //     }
                        // }
                    }
                })
                this.$forceUpdate()
              }else{
                this.M_CB_CashPurchaseHNonBudget.trxtypeLabel = ''
              }
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseHNonBudget.paymentcd = data.id
            this.M_CB_CashPurchaseHNonBudget.paymentcdLabel = data.label
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
            this.M_CB_CashPurchaseHNonBudget.bankcd = data.id
            this.M_CB_CashPurchaseHNonBudget.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              // this.GetBankCurrencyCd(this.M_CB_CashPurchaseHNonBudget.bankcd)
              // if(this.M_CB_CashPurchaseHNonBudget.paymentdate == ''){
              //   this.getElementbyId(paymentdate).focus()  
              // }else{
              //   this.FnGetCurrencyMiddleRate(
              //       this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseHNonBudget.paymentdate, this.M_CB_CashPurchaseHNonBudget.currencycd
              //   )
              //   .then(ress => {
              //       if (ress != null) { 
              //         console.log(ress)                     
              //           this.M_CB_CashPurchaseHNonBudget.currencyrate = ress.CurrencyRate 
              //       }                      
              //   })

              //   this.FnGetTaxCurrencyRate(
              //       this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseHNonBudget.paymentdate, this.M_CB_CashPurchaseHNonBudget.currencycd
              //   )
              //   .then(ress => {
              //       if (ress != null) {
              //         console.log(ress)
              //           this.M_CB_CashPurchaseHNonBudget.taxrate = ress.CurrencyRate 
              //       }                      
              //   })

              // }
              this.GetBankCurrencyCd(this.M_CB_CashPurchaseHNonBudget.bankcd)
                .then(ress => {
                if (ress == null) return
                  this.M_CB_CashPurchaseHNonBudget.currencycd = ress.BankCurrencyCd
                  // this.M_CB_CashPurchaseHNonBudget.bankcdLabel = this.M_CB_CashPurchaseHNonBudget.bankcd != null && this.M_CB_CashPurchaseHNonBudget.bankcd != '' ? data + this.separator :''
                  
                  if(this.M_CB_CashPurchaseHNonBudget.paymentdate == ''){
                    this.getElementbyId(paymentdate).focus()  
                  }else{
                    this.FnGetCurrencyMiddleRate(
                        this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseHNonBudget.paymentdate, this.M_CB_CashPurchaseHNonBudget.currencycd
                    )
                    .then(ress => {
                        if (ress != null) { 
                          // console.log(ress)                     
                            this.M_CB_CashPurchaseHNonBudget.currencyrate = ress.CurrencyRate 
                        }                      
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseHNonBudget.paymentdate, this.M_CB_CashPurchaseHNonBudget.currencycd
                    )
                    .then(ress => {
                        if (ress != null) {
                          // console.log(ress)
                            this.M_CB_CashPurchaseHNonBudget.taxrate = ress.CurrencyRate 
                        }                      
                    })

                  }
              })
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
        OnreceiveraccountChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseHNonBudget.receiveraccount = data.id
            this.M_CB_CashPurchaseHNonBudget.receiveraccountLabel = data.label
            if (this.inputStatus != "VIEW") {
//{receiveraccount}
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
          this.getToolbar().statusFunction[4].text = "Post"
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
        M_Post(dt){
          var dataPost = []
          var data = this.FormToABSList().getRowSelected()            
            
            
            data.forEach((value) => {
                dataPost.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    CheckedBatchNo: value.BatchNo,
                    PostBy: this.getDataUser().UserId,
                    _Message_: "Payment No = "+value.PaymentNo
                })
            })

            var param ={
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                this.$parent.resultPost()
            })
        },
        M_Insert() {          
          if(this.M_CB_CashPurchaseHNonBudget.runningcd != ""){            
            this.FnGenerateRunningCode(
              this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseHNonBudget.runningcd, this.getDataUser().UserId, this.M_CB_CashPurchaseHNonBudget.paymentdate
            ).then(dt9 => { 
              if (dt9 != null) {
                this.M_CB_CashPurchaseHNonBudget.paymentno = dt9.RunningCode
                var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  TrxType: this.M_CB_CashPurchaseHNonBudget.trxtype == '' || this.M_CB_CashPurchaseHNonBudget.trxtype == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.trxtype ,
                  PaymentNo: this.M_CB_CashPurchaseHNonBudget.paymentno,
                  BatchNo: 0,
                  PaymentDate: this.M_CB_CashPurchaseHNonBudget.paymentdate,
                  Descs: this.M_CB_CashPurchaseHNonBudget.descs,
                  PaymentCd: this.M_CB_CashPurchaseHNonBudget.paymentcd == '' || this.M_CB_CashPurchaseHNonBudget.paymentcd == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.paymentcd ,
                  BankCd: this.M_CB_CashPurchaseHNonBudget.bankcd == '' || this.M_CB_CashPurchaseHNonBudget.bankcd == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.bankcd ,
                  CurrencyCd: this.M_CB_CashPurchaseHNonBudget.currencycd,
                  CurrencyRate: this.M_CB_CashPurchaseHNonBudget.currencyrate ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.currencyrate,',','','number') : 0 ,
                  TrxAmt: this.M_CB_CashPurchaseHNonBudget.trxamt ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.trxamt,',','','number') : 0 ,
                  TaxCurrencyRate: this.M_CB_CashPurchaseHNonBudget.taxcurrencyrate ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.taxcurrencyrate,',','','number') : 0 ,
                  ChequeReferenceNo: this.M_CB_CashPurchaseHNonBudget.chequereferenceno,
                  ChequeReferenceDate: this.M_CB_CashPurchaseHNonBudget.chequereferencedate,
                  ChequeDueDate: this.M_CB_CashPurchaseHNonBudget.chequeduedate == '' || this.M_CB_CashPurchaseHNonBudget.chequeduedate == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.chequeduedate ,
                  IssuedBank: this.M_CB_CashPurchaseHNonBudget.issuedbank,
                  Remarks: this.M_CB_CashPurchaseHNonBudget.remarks,
                  UserInput: this.getDataUser().UserId ,
                  EntryType: 'C',
                  PaymentCategory: 'O',
                  ReceiverAccount: this.M_CB_CashPurchaseHNonBudget.receiveraccount == '' || this.M_CB_CashPurchaseHNonBudget.receiveraccount == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.receiveraccount                 
                }
              
                this.postJSON(this.getUrlInsert(), param)
                .then((response) => {
                  if(response == null) return
                  this.$parent.resultInsert(response.Message)
                })
              }
            })
          } else {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            TrxType: this.M_CB_CashPurchaseHNonBudget.trxtype == '' || this.M_CB_CashPurchaseHNonBudget.trxtype == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.trxtype ,
            PaymentNo: this.M_CB_CashPurchaseHNonBudget.paymentno,
            BatchNo: 0,
            PaymentDate: this.M_CB_CashPurchaseHNonBudget.paymentdate,
            Descs: this.M_CB_CashPurchaseHNonBudget.descs,
            PaymentCd: this.M_CB_CashPurchaseHNonBudget.paymentcd == '' || this.M_CB_CashPurchaseHNonBudget.paymentcd == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.paymentcd ,
            BankCd: this.M_CB_CashPurchaseHNonBudget.bankcd == '' || this.M_CB_CashPurchaseHNonBudget.bankcd == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.bankcd ,
            CurrencyCd: this.M_CB_CashPurchaseHNonBudget.currencycd,
            CurrencyRate: this.M_CB_CashPurchaseHNonBudget.currencyrate ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.currencyrate,',','','number') : 0 ,
            TrxAmt: this.M_CB_CashPurchaseHNonBudget.trxamt ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.trxamt,',','','number') : 0 ,
            TaxCurrencyRate: this.M_CB_CashPurchaseHNonBudget.taxcurrencyrate ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.taxcurrencyrate,',','','number') : 0 ,
            ChequeReferenceNo: this.M_CB_CashPurchaseHNonBudget.chequereferenceno,
            ChequeReferenceDate: this.M_CB_CashPurchaseHNonBudget.chequereferencedate,
            ChequeDueDate: this.M_CB_CashPurchaseHNonBudget.chequeduedate == '' || this.M_CB_CashPurchaseHNonBudget.chequeduedate == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.chequeduedate ,
            IssuedBank: this.M_CB_CashPurchaseHNonBudget.issuedbank,
            Remarks: this.M_CB_CashPurchaseHNonBudget.remarks,
            UserInput: this.getDataUser().UserId ,
            EntryType: 'C',
            PaymentCategory: 'O',
            ReceiverAccount: this.M_CB_CashPurchaseHNonBudget.receiveraccount == '' || this.M_CB_CashPurchaseHNonBudget.receiveraccount == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.receiveraccount                 
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
                TrxType: this.M_CB_CashPurchaseHNonBudget.trxtype == '' || this.M_CB_CashPurchaseHNonBudget.trxtype == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.trxtype ,
                PaymentNo: this.M_CB_CashPurchaseHNonBudget.paymentno,
                PaymentDate: this.M_CB_CashPurchaseHNonBudget.paymentdate,
                Descs: this.M_CB_CashPurchaseHNonBudget.descs,
                PaymentCd: this.M_CB_CashPurchaseHNonBudget.paymentcd == '' || this.M_CB_CashPurchaseHNonBudget.paymentcd == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.paymentcd ,
                BankCd: this.M_CB_CashPurchaseHNonBudget.bankcd == '' || this.M_CB_CashPurchaseHNonBudget.bankcd == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.bankcd ,
                CurrencyCd: this.M_CB_CashPurchaseHNonBudget.currencycd,
                CurrencyRate: this.M_CB_CashPurchaseHNonBudget.currencyrate ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_CB_CashPurchaseHNonBudget.taxcurrencyrate ? this.replaceAllString(this.M_CB_CashPurchaseHNonBudget.taxcurrencyrate,',','','number') : 0 ,
                ChequeReferenceNo: this.M_CB_CashPurchaseHNonBudget.chequereferenceno,
                ChequeReferenceDate: this.M_CB_CashPurchaseHNonBudget.chequereferencedate,
                ChequeDueDate: this.M_CB_CashPurchaseHNonBudget.chequeduedate == '' || this.M_CB_CashPurchaseHNonBudget.chequeduedate == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.chequeduedate ,
                IssuedBank: this.M_CB_CashPurchaseHNonBudget.issuedbank,
                Remarks: this.M_CB_CashPurchaseHNonBudget.remarks,
                UserEdit: this.getDataUser().UserId ,
                EntryType: this.M_CB_CashPurchaseHNonBudget.entrytype,
                LastUpdateStamp: this.M_CB_CashPurchaseHNonBudget.lastupdatestamp,
                ReceiverAccount: this.M_CB_CashPurchaseHNonBudget.receiveraccount == '' || this.M_CB_CashPurchaseHNonBudget.receiveraccount == null ? 'NULL' : this.M_CB_CashPurchaseHNonBudget.receiveraccount                 ,
                EntryType: 'C'
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_CashPurchaseHNonBudget = {
                batchno: 0,
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.getToday(),
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
                receiveraccount: '',
                banknamereceiveraccount: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0
                    }
            		
		},
        M_New(){
          this.GetCashPurchaseCreditorCd()
			
        },
        M_Edit(){
          this.GetCashPurchaseCreditorCd()
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
            EntryType: 'C',
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
this.M_CB_CashPurchaseHNonBudget = {
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
                receiveraccount: data.receiveraccount,
                banknamereceiveraccount: data.banknamereceiveraccount,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                rowid: data.rowid
                    }
                 

                this.M_CB_CashPurchaseHNonBudget.batchnoLabel = this.M_CB_CashPurchaseHNonBudget.batchno != null && this.M_CB_CashPurchaseHNonBudget.batchno != '' ? data.batchno + this.separator  :'' 
                this.M_CB_CashPurchaseHNonBudget.trxtypeLabel = this.M_CB_CashPurchaseHNonBudget.trxtype != null && this.M_CB_CashPurchaseHNonBudget.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_CB_CashPurchaseHNonBudget.paymentcdLabel = this.M_CB_CashPurchaseHNonBudget.paymentcd != null && this.M_CB_CashPurchaseHNonBudget.paymentcd != '' ? data.paymentcd + this.separator + data.paymentdescs :'' 
                this.M_CB_CashPurchaseHNonBudget.bankcdLabel = this.M_CB_CashPurchaseHNonBudget.bankcd != null && this.M_CB_CashPurchaseHNonBudget.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                this.M_CB_CashPurchaseHNonBudget.receiveraccountLabel = this.M_CB_CashPurchaseHNonBudget.receiveraccount != null && this.M_CB_CashPurchaseHNonBudget.receiveraccount != '' ? data.receiveraccount + this.separator + data.banknamereceiveraccount :'' 
         

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

