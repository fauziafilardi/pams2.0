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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_CB_CashPurchaseH.batchno" :label="M_CB_CashPurchaseH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_CB_CashPurchaseH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_CB_CashPurchaseH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchtotalChange" :prop="PI_batchtotal" v-model="M_CB_CashPurchaseH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_CB_CashPurchaseH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_CB_CashPurchaseH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_CashPurchaseH.trxtype" :label="M_CB_CashPurchaseH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_CB_CashPurchaseH.paymentno"  ref="ref_paymentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_paymentdate" v-model="M_CB_CashPurchaseH.paymentdate"  ref="ref_paymentdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_CB_CashPurchaseH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_CashPurchaseH.paymentcd" :label="M_CB_CashPurchaseH.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_CashPurchaseH.bankcd" :label="M_CB_CashPurchaseH.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_CashPurchaseH.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_CB_CashPurchaseH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_CashPurchaseH.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxrate" v-model="M_CB_CashPurchaseH.taxrate"  ref="ref_taxrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_CB_CashPurchaseH.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_CB_CashPurchaseH.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_CB_CashPurchaseH.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_CB_CashPurchaseH.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_underpaymentamt" v-model="M_CB_CashPurchaseH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_CashPurchaseH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex  :prop="PI_chequereferencedate" v-model="M_CB_CashPurchaseH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_CashPurchaseH.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_CashPurchaseH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreceiveraccountChange" :prop="PI_receiveraccount" :value="M_CB_CashPurchaseH.receiveraccount" :label="M_CB_CashPurchaseH.receiveraccountLabel" ref="ref_receiveraccount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_CashPurchaseH.remarks"  ref="ref_remarks" />
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
                initialWhere: "PaymentSource = 'C' AND PaymentStatus = 'N' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND BatchStatus <> 'Posted'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   		
            DataSelected: [],
            CanPost: true,	

            M_CB_CashPurchaseH :{
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
                cOrder: 1, 
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
                cOrder: 2, 
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
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'CB' AND TrxClass = 'C' AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_paymentno: { 
                cValidate :'max:20', 
                cName: 'paymentno', 
                cLabel: 'Payment No', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cLabel: 'Payment Date', 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cRows: 2, 
                cMaxRows: 3, 
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
                cOrder: 7, 
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
                    InitialWhere: " SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank ', 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,BankName' ,
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate ', 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cOrder: 11, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxrate: { 
                cValidate :'required', 
                cName: 'taxrate', 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_withholdingamt: { 
                cLabel: 'Withholding Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_underpaymentamt: { 
                cLabel: 'Under Payment Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_chequereferenceno: { 
                cValidate :'max:20', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
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
            PI_issuedbank: { 
                cValidate :'max:30', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cLabel: 'Cheque / Ref Date', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
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
                cOrder: 16, 
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
                    ColumnDB: 'ReceiverAccount'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'receiveraccount', 
                cLabel: 'Receiver Account', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:18, 
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
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseH.batchno = data.id
            this.M_CB_CashPurchaseH.batchnoLabel = data.label
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
                  this.M_CB_CashPurchaseH.currencyrate = ress.RevaluationCurrencyRate                                   
            })
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseH.trxtype = data.id
            this.M_CB_CashPurchaseH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              if(this.M_CB_CashPurchaseH.trxtype != ''){
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
                        this.M_CB_CashPurchaseH.runningcd = data.RunningCd
                        this.M_CB_CashPurchaseH.trxtypeLabel = data.TrxTypeDescs
                        
                         if(data.DefaultBankCd && data.DefaultBankCd != ''){
                            this.M_CB_CashPurchaseH.bankcd = data.DefaultBankCd
                            this.M_CB_CashPurchaseH.bankcdLabel = data.DefaultBankCd + this.separator + data.BankName

                            var bankParam = {id: data.DefaultBankCd, label: data.DefaultBankCd + this.separator + data.BankName}
                            this.OnbankcdChange(bankParam)
                        //   this.GetBankCurrencyCd(this.M_CB_CashPurchaseH.bankcd)
                        //   .then(ress => {
                        //   if (ress == null) return
                        //     this.M_CB_CashPurchaseH.currencycd = ress.BankCurrencyCd
                        //     // this.M_CB_CashPurchaseH.bankcdLabel = this.M_CB_CashPurchaseH.bankcd != null && this.M_CB_CashPurchaseH.bankcd != '' ? BankCd + this.separator :''

                        //     if(this.M_CB_CashPurchaseH.paymentdate != ''){
                        //       this.GetRevaluationCurrencyRate(this.M_CB_CashPurchaseH.bankcd, this.M_CB_CashPurchaseH.paymentdate)
                        //     }
                        //   })
                         }

                        if(this.inputStatus == "NEW"){
                          if(this.M_CB_CashPurchaseH.runningcd != ''){
                            this.M_CB_CashPurchaseH.runningcd = this.M_CB_CashPurchaseH.runningcd
                            this.M_CB_CashPurchaseH.paymentno = "(AUTO)"
                            this.PI_paymentno.cProtect = true
                          }
                        }

                        // if(this.inputStatus != "EDIT"){
                        //   this.M_CB_CashPurchaseH.runningcd = ""
                        //   this.M_CB_CashPurchaseH.paymentno = ""
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
                this.M_CB_CashPurchaseH.trxtypeLabel = ''
              }
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseH.paymentcd = data.id
            this.M_CB_CashPurchaseH.paymentcdLabel = data.label

             if (this.inputStatus != "VIEW") {
//{paymentcd}
               if(data.PaymentType != 'Cash'){
                  this.PI_chequereferenceno.cValidate = 'required'
                  this.$refs.ref_chequereferenceno.isRequired = true

                  this.PI_chequereferencedate.cValidate = 'required'
                  this.$refs.ref_chequereferencedate.isRequired = true

                  this.PI_issuedbank.cValidate = 'required'
                  this.$refs.ref_issuedbank.isRequired = true

                  this.PI_chequeduedate.cValidate = 'required'
                  this.$refs.ref_chequeduedate.isRequired = true
              }
              else{
                  this.PI_chequereferenceno.cValidate = ''
                  this.$refs.ref_chequereferenceno.isRequired = false

                  this.PI_chequereferencedate.cValidate = ''
                  this.$refs.ref_chequereferencedate.isRequired = false

                  this.PI_issuedbank.cValidate = ''
                  this.$refs.ref_issuedbank.isRequired = false

                  this.PI_chequeduedate.cValidate = ''
                  this.$refs.ref_chequeduedate.isRequired = false
              }
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_CashPurchaseH.bankcd = data.id
            this.M_CB_CashPurchaseH.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetBankCurrencyCd(this.M_CB_CashPurchaseH.bankcd)
              .then(ress => {
                if (ress == null) return
                  this.M_CB_CashPurchaseH.currencycd = ress.BankCurrencyCd
                  // this.M_CB_CashPurchaseH.bankcdLabel = this.M_CB_CashPurchaseH.bankcd != null && this.M_CB_CashPurchaseH.bankcd != '' ? data + this.separator :''
                  
                  if(this.M_CB_CashPurchaseH.paymentdate == ''){
                    this.getElementbyId(paymentdate).focus()  
                  }else{
                    this.FnGetCurrencyMiddleRate(
                        this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseH.paymentdate, this.M_CB_CashPurchaseH.currencycd
                    )
                    .then(ress => {
                        if (ress != null) { 
                          // console.log(ress) 
                            this.M_CB_CashPurchaseH.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal) 
                        }                      
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_CB_CashPurchaseH.paymentdate, this.M_CB_CashPurchaseH.currencycd
                    )
                    .then(ress => {
                        if (ress != null) {
                          // console.log(ress)
                            this.M_CB_CashPurchaseH.taxrate = this.isCurrency(ress.CurrencyRate, this.decimal) 
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
            this.M_CB_CashPurchaseH.receiveraccount = data.id
            this.M_CB_CashPurchaseH.receiveraccountLabel = data.label
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
        M_Post() {
            var data = this.FormToABSList().getRowSelected()
            var dataPost = []
            
            
            data.forEach((value) => {
                dataPost.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    CheckedBatchNo: value.BatchNo.toString(),
                    PostBy: this.getDataUser().UserId,
                    _Message_: "Payment No = "+value.PaymentNo
                })
            })

            var param ={
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param)
            .then(response => {
                if (response == null) return

                this.$parent.resultPost()            
            })
        },
        M_Refresh(){
        },
		M_Cancel() {			
    },		
    M_CheckboxChecked (data, status, index) {
          // console.log(data);
          // console.log(status);
          // console.log(index);
          if (status === true) {
            if (data.BatchStatus && data.BatchStatus != "Error") {
              this.$store.commit('setPostStatus', true)
              this.DataSelected.push({idx: index, CanPost: true})
            }
            else {
              this.$store.commit('setPostStatus', false)
              this.DataSelected.push({idx: index, CanPost: false})
            }
          }
          else {
            this.$store.commit('setPostStatus', true)
            var id = this.DataSelected.map(x => x.idx).indexOf(index)
            this.DataSelected.splice(id,1)
          }

          if (this.DataSelected.length == 0) {
            this.CanPost = true
          }
          else {
            for (var a = 0; a < this.DataSelected.length; a++) {
              if (this.DataSelected[a].CanPost == false) {
                this.CanPost = false
                break
              }
            }
          }
          
          // console.log(this.CanPost);
          this.$store.commit('setPostStatus', this.CanPost)
        },
		doDoubleClick(){
        },
        rowClicked (record, index) {
          // if(record.BatchStatus == 'Error'){
          //   this.getToolbar().statusFunction[4].disabled = true
          // }
          // else{
          //   this.getToolbar().statusFunction[4].disabled = false
          // }
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },
        M_Insert() {
          if (this.M_CB_CashPurchaseH.runningcd != "") {
            this.FnGenerateRunningCode(
              this.getDataUser().SubPortfolioCd,
              this.M_CB_CashPurchaseH.runningcd,
              this.getDataUser().UserId,
              this.M_CB_CashPurchaseH.paymentdate
            ).then(dt => {
              if (dt == null) return

              this.M_CB_CashPurchaseH.paymentno = dt.RunningCode
              var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: this.M_CB_CashPurchaseH.trxtype == '' || this.M_CB_CashPurchaseH.trxtype == null ? 'NULL' : this.M_CB_CashPurchaseH.trxtype ,
                PaymentNo: this.M_CB_CashPurchaseH.paymentno,
                BatchNo: this.M_CB_CashPurchaseH.batchno == '' || this.M_CB_CashPurchaseH.batchno == null ? 0 : this.M_CB_CashPurchaseH.batchno ,
                EntryType: this.M_CB_CashPurchaseH.entrytype,
                PaymentCategory: this.M_CB_CashPurchaseH.paymentcategory,
                PaymentDate: this.M_CB_CashPurchaseH.paymentdate,
                Descs: this.M_CB_CashPurchaseH.descs,
                PaymentCd: this.M_CB_CashPurchaseH.paymentcd == '' || this.M_CB_CashPurchaseH.paymentcd == null ? 'NULL' : this.M_CB_CashPurchaseH.paymentcd ,
                BankCd: this.M_CB_CashPurchaseH.bankcd == '' || this.M_CB_CashPurchaseH.bankcd == null ? 'NULL' : this.M_CB_CashPurchaseH.bankcd ,
                CurrencyCd: this.M_CB_CashPurchaseH.currencycd,
                CurrencyRate: this.M_CB_CashPurchaseH.currencyrate ? this.replaceAllString(this.M_CB_CashPurchaseH.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_CB_CashPurchaseH.taxrate ? this.replaceAllString(this.M_CB_CashPurchaseH.taxrate,',','','number') : 0,
                TrxAmt: this.M_CB_CashPurchaseH.trxamt ? this.replaceAllString(this.M_CB_CashPurchaseH.trxamt,',','','number') : 0 ,
                ChequeReferenceNo: this.M_CB_CashPurchaseH.chequereferenceno,
                ChequeReferenceDate: this.M_CB_CashPurchaseH.chequereferencedate == '' || this.M_CB_CashPurchaseH.chequereferencedate == null ? 'NULL' : this.M_CB_CashPurchaseH.chequereferencedate,
                ChequeDueDate: this.M_CB_CashPurchaseH.chequeduedate == '' || this.M_CB_CashPurchaseH.chequeduedate == null ? 'NULL' : this.M_CB_CashPurchaseH.chequeduedate ,
                IssuedBank: this.M_CB_CashPurchaseH.issuedbank,
                Remarks: this.M_CB_CashPurchaseH.remarks,
                UserInput: this.getDataUser().UserId ,
                ReceiverAccount: this.M_CB_CashPurchaseH.receiveraccount == '' || this.M_CB_CashPurchaseH.receiveraccount == null ? 'NULL' : this.M_CB_CashPurchaseH.receiveraccount,
                EntryType: 'C',
                PaymentCategory: 'O'
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
              TrxType: this.M_CB_CashPurchaseH.trxtype == '' || this.M_CB_CashPurchaseH.trxtype == null ? 'NULL' : this.M_CB_CashPurchaseH.trxtype ,
              PaymentNo: this.M_CB_CashPurchaseH.paymentno,
              BatchNo: this.M_CB_CashPurchaseH.batchno == '' || this.M_CB_CashPurchaseH.batchno == null ? 0 : this.M_CB_CashPurchaseH.batchno ,
              EntryType: this.M_CB_CashPurchaseH.entrytype,
              PaymentCategory: this.M_CB_CashPurchaseH.paymentcategory,
              PaymentDate: this.M_CB_CashPurchaseH.paymentdate,
              Descs: this.M_CB_CashPurchaseH.descs,
              PaymentCd: this.M_CB_CashPurchaseH.paymentcd == '' || this.M_CB_CashPurchaseH.paymentcd == null ? 'NULL' : this.M_CB_CashPurchaseH.paymentcd ,
              BankCd: this.M_CB_CashPurchaseH.bankcd == '' || this.M_CB_CashPurchaseH.bankcd == null ? 'NULL' : this.M_CB_CashPurchaseH.bankcd ,
              CurrencyCd: this.M_CB_CashPurchaseH.currencycd,
              CurrencyRate: this.M_CB_CashPurchaseH.currencyrate ? this.replaceAllString(this.M_CB_CashPurchaseH.currencyrate,',','','number') : 0 ,
              TaxCurrencyRate: this.M_CB_CashPurchaseH.taxrate ? this.replaceAllString(this.M_CB_CashPurchaseH.taxrate,',','','number') : 0,
              TrxAmt: this.M_CB_CashPurchaseH.trxamt ? this.replaceAllString(this.M_CB_CashPurchaseH.trxamt,',','','number') : 0 ,
              ChequeReferenceNo: this.M_CB_CashPurchaseH.chequereferenceno,
              ChequeReferenceDate: this.M_CB_CashPurchaseH.chequereferencedate == '' || this.M_CB_CashPurchaseH.chequereferencedate == null ? 'NULL' : this.M_CB_CashPurchaseH.chequereferencedate,
              ChequeDueDate: this.M_CB_CashPurchaseH.chequeduedate == '' || this.M_CB_CashPurchaseH.chequeduedate == null ? 'NULL' : this.M_CB_CashPurchaseH.chequeduedate ,
              IssuedBank: this.M_CB_CashPurchaseH.issuedbank,
              Remarks: this.M_CB_CashPurchaseH.remarks,
              UserInput: this.getDataUser().UserId ,
              ReceiverAccount: this.M_CB_CashPurchaseH.receiveraccount == '' || this.M_CB_CashPurchaseH.receiveraccount == null ? 'NULL' : this.M_CB_CashPurchaseH.receiveraccount,
              EntryType: 'C',
              PaymentCategory: 'O'
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
              TrxType: this.M_CB_CashPurchaseH.trxtype == '' || this.M_CB_CashPurchaseH.trxtype == null ? 'NULL' : this.M_CB_CashPurchaseH.trxtype ,
              PaymentNo: this.M_CB_CashPurchaseH.paymentno,
              PaymentDate: this.M_CB_CashPurchaseH.paymentdate,
              Descs: this.M_CB_CashPurchaseH.descs,
              PaymentCd: this.M_CB_CashPurchaseH.paymentcd == '' || this.M_CB_CashPurchaseH.paymentcd == null ? 'NULL' : this.M_CB_CashPurchaseH.paymentcd ,
              BankCd: this.M_CB_CashPurchaseH.bankcd == '' || this.M_CB_CashPurchaseH.bankcd == null ? 'NULL' : this.M_CB_CashPurchaseH.bankcd ,
              CurrencyCd: this.M_CB_CashPurchaseH.currencycd,
              CurrencyRate: this.M_CB_CashPurchaseH.currencyrate ? this.replaceAllString(this.M_CB_CashPurchaseH.currencyrate,',','','number') : 0 ,
              TaxCurrencyRate: this.M_CB_CashPurchaseH.taxrate ? this.replaceAllString(this.M_CB_CashPurchaseH.taxrate,',','','number') : 0,
              ChequeReferenceNo: this.M_CB_CashPurchaseH.chequereferenceno,
              ChequeReferenceDate: this.M_CB_CashPurchaseH.chequereferencedate == '' || this.M_CB_CashPurchaseH.chequereferencedate == null ? 'NULL' : this.M_CB_CashPurchaseH.chequereferencedate,
              ChequeDueDate: this.M_CB_CashPurchaseH.chequeduedate == '' || this.M_CB_CashPurchaseH.chequeduedate == null ? 'NULL' : this.M_CB_CashPurchaseH.chequeduedate ,
              IssuedBank: this.M_CB_CashPurchaseH.issuedbank,
              Remarks: this.M_CB_CashPurchaseH.remarks,
              UserEdit: this.getDataUser().UserId ,
              EntryType: this.M_CB_CashPurchaseH.entrytype,
              LastUpdateStamp: this.M_CB_CashPurchaseH.lastupdatestamp,
              ReceiverAccount: this.M_CB_CashPurchaseH.receiveraccount == '' || this.M_CB_CashPurchaseH.receiveraccount == null ? 'NULL' : this.M_CB_CashPurchaseH.receiveraccount,
              EntryType: 'C',                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_CB_CashPurchaseH = {
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
                duedate: '',
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
          this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
          this.$refs.ref_paymentdate.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          console.log(value)
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
this.M_CB_CashPurchaseH = {
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
                 

                this.M_CB_CashPurchaseH.batchnoLabel = this.M_CB_CashPurchaseH.batchno != null && this.M_CB_CashPurchaseH.batchno != '' ? data.batchno + this.separator  :'' 
                this.M_CB_CashPurchaseH.trxtypeLabel = this.M_CB_CashPurchaseH.trxtype != null && this.M_CB_CashPurchaseH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_CB_CashPurchaseH.paymentcdLabel = this.M_CB_CashPurchaseH.paymentcd != null && this.M_CB_CashPurchaseH.paymentcd != '' ? data.paymentcd + this.separator + data.paymentdescs :'' 
                this.M_CB_CashPurchaseH.bankcdLabel = this.M_CB_CashPurchaseH.bankcd != null && this.M_CB_CashPurchaseH.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                this.M_CB_CashPurchaseH.receiveraccountLabel = this.M_CB_CashPurchaseH.receiveraccount != null && this.M_CB_CashPurchaseH.receiveraccount != '' ? data.receiveraccount + this.separator + data.banknamereceiveraccount :'' 
        
             if(data.paymenttype != 'N'){
                  this.PI_chequereferenceno.cValidate = 'required'
                  this.$refs.ref_chequereferenceno.isRequired = true

                  this.PI_chequereferencedate.cValidate = 'required'
                  this.$refs.ref_chequereferencedate.isRequired = true

                  this.PI_issuedbank.cValidate = 'required'
                  this.$refs.ref_issuedbank.isRequired = true

                  this.PI_chequeduedate.cValidate = 'required'
                  this.$refs.ref_chequeduedate.isRequired = true
              }
              else{
                  this.PI_chequereferenceno.cValidate = ''
                  this.$refs.ref_chequereferenceno.isRequired = false

                  this.PI_chequereferencedate.cValidate = ''
                  this.$refs.ref_chequereferencedate.isRequired = false

                  this.PI_issuedbank.cValidate = ''
                  this.$refs.ref_issuedbank.isRequired = false

                  this.PI_chequeduedate.cValidate = ''
                  this.$refs.ref_chequeduedate.isRequired = false
              }

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

