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
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_DepositReceiptDirectFromCashierH.batchno" :label="M_AR_DepositReceiptDirectFromCashierH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_DepositReceiptDirectFromCashierH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_DepositReceiptDirectFromCashierH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_DepositReceiptDirectFromCashierH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_DepositReceiptDirectFromCashierH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_DepositReceiptDirectFromCashierH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_DepositReceiptDirectFromCashierH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AR_DepositReceiptDirectFromCashierH.cashierno"  ref="ref_cashierno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputCheckBox @input="OnstatusChange" :prop="PI_status" v-model="M_AR_DepositReceiptDirectFromCashierH.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_DepositReceiptDirectFromCashierH.trxtype" :label="M_AR_DepositReceiptDirectFromCashierH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AR_DepositReceiptDirectFromCashierH.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_creditdate" v-model="M_AR_DepositReceiptDirectFromCashierH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_DepositReceiptDirectFromCashierH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnreferencedateChange" :prop="PI_referencedate" v-model="M_AR_DepositReceiptDirectFromCashierH.referencedate"  ref="ref_referencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_DepositReceiptDirectFromCashierH.debtorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_DepositReceiptDirectFromCashierH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_DepositReceiptDirectFromCashierH.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_DepositReceiptDirectFromCashierH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentcd" v-model="M_AR_DepositReceiptDirectFromCashierH.paymentcd"  ref="ref_paymentcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankcd" v-model="M_AR_DepositReceiptDirectFromCashierH.bankcd"  ref="ref_bankcd" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AR_DepositReceiptDirectFromCashierH.chequereferenceno"  ref="ref_chequereferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequereferencedate" v-model="M_AR_DepositReceiptDirectFromCashierH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_AR_DepositReceiptDirectFromCashierH.issuedbank"  ref="ref_issuedbank" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequeduedate" v-model="M_AR_DepositReceiptDirectFromCashierH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Receipt
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_DepositReceiptDirectFromCashierH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankchargesamt" v-model="M_AR_DepositReceiptDirectFromCashierH.bankchargesamt"  ref="ref_bankchargesamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_overpaymentamt" v-model="M_AR_DepositReceiptDirectFromCashierH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_underpaymentamt" v-model="M_AR_DepositReceiptDirectFromCashierH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnautoallocateChange" :prop="PI_autoallocate" v-model="M_AR_DepositReceiptDirectFromCashierH.autoallocate"  ref="ref_autoallocate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AR_DepositReceiptDirectFromCashierH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AR_DepositReceiptDirectFromCashierH.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AR_DepositReceiptDirectFromCashierH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AR_DepositReceiptDirectFromCashierH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_DepositReceiptDirectFromCashierH.remarks"  ref="ref_remarks" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnautoallocatedetailChange" :prop="PI_autoallocatedetail" v-model="M_AR_DepositReceiptDirectFromCashierH.autoallocatedetail"  ref="ref_autoallocatedetail" />
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
		Module:"AR",
            propList: {
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_DepositReceiptDirectFromCashierH :{
                batchno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                cashierno: '',
                trxtype: '',
                creditno: '',
                creditdate: '',
                referenceno: '',
                referencedate: '',
                debtorcd: '',
                debtorcdLabel: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                bankcd: '',
                chequereferenceno: '',
                currencyrate: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                creditamt: '',
                vatpaidbycustomer: '',
                withholdingpaidbycustomer: '',
                bankchargesamt: '0',
                overpaymentamt: '0',
                underpaymentamt: '0',
                advanceamt: '',
                allocatedamt: '',
                forexgainlossamt: '',
                totalallocationamt: '',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                totalnetallocated: 0,
                totalvatallocated: 0,
                totalwithholdingallocated: 0,
                trxtypedescs: '',
                withholdingtreatment: '',
                maximumoverpaymentamt: '',
                maximumunderpaymentamt: '',
                maximumbankchargesamt: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                basecurrencycd: '',
                lastupdatestamp: 0,
                rowid: 0,
                balanceamt: '',
                autoallocatedetail: 'N',
                autoallocate: 'N'
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARBatchMaster'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
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
                cMasterUrl: 'AR/AR_BatchMaster' ,
                cDisplayColumn: 'BatchNo,DocumentCount' ,
            }, 
            PI_documentcount: { 
                cLabel: '', 
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
            PI_batchstatus: { 
                cValidate :'', 
                cName: 'batchstatus', 
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
            PI_batchstatus: { 
                cValidate :'', 
                cName: 'batchstatus', 
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
                cLabel: '', 
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
            PI_cashierno: { 
                cValidate :'', 
                cName: 'cashierno', 
                cLabel: 'Cashier No',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' and TrxClass = 'S'"   , 
                    ParamWhere: ''  
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_creditno: { 
                cValidate :'required|max:20', 
                cName: 'creditno', 
                cLabel: 'Receipt No ', 
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
            PI_creditdate: { 
                cValidate :'', 
                cName: 'creditdate', 
                cLabel: 'Receipt Date',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_referencedate: { 
                cValidate :'', 
                cName: 'referencedate', 
                cLabel: 'Reference Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd',
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currency',
                cLabel: 'Currency',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate',
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentcd: { 
                cValidate :'', 
                cName: 'receipttype', 
                cLabel: 'Receipt Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankcd: { 
                cValidate :'', 
                cName: 'bank',
                cLabel: 'Bank', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
                cKey: false, 
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
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_issuedbank: { 
                cValidate :'', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditamt: { 
                cLabel: 'Receipt Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
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
                cValidate :'', 
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
            PI_autoallocate: { 
                cValidate :'', 
                cName: 'autoallocate', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [{text:'', value: 'N'}], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalallocationamt: { 
                cLabel: 'Total Allocation Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_allocatedamt: { 
                cLabel: 'Total Allocated', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_forexgainlossamt: { 
                cLabel: 'Forex', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_balanceamt: { 
                cLabel: 'Balance Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_autoallocatedetail: { 
                cValidate :'', 
                cName: 'autoallocatedetail', 
                cLabel: 'Auto Allocate Detail', 
                cLabelSize: 4, 
                cOptions: [{text: '', value: 'Y'}], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: false, 
                cDefault: '', 
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
            this.M_AR_DepositReceiptDirectFromCashierH.batchno = data.id
            this.M_AR_DepositReceiptDirectFromCashierH.batchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{batchno}
            }
        })
        this.$forceUpdate()
        },
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
            }
        })
        this.$forceUpdate()
        },
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_DepositReceiptDirectFromCashierH.trxtype = data.id
            this.M_AR_DepositReceiptDirectFromCashierH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id)
              .then(dt => {
                if (dt != null) {
                  var dt25 = dt[0]
                  this.M_AR_DepositReceiptDirectFromCashierH.descs = dt25.TrxTypeDescs
                  this.M_AR_DepositReceiptDirectFromCashierH.trxtypedescs = dt25.TrxTypeDescs
                  if (!this.M_AR_DepositReceiptDirectFromCashierH.descs || this.M_AR_DepositReceiptDirectFromCashierH.descs == '') {
                    this.M_AR_DepositReceiptDirectFromCashierH.descs = dt25.TrxTypeDescs
                  }
                  if (dt25.RunningCd != null && dt25.RunningCd != "") {
                    this.PI_creditno.cProtect = true
                    this.M_AR_DepositReceiptDirectFromCashierH.creditno = "(auto)"
                    this.RunningCd = dt25.RunningCd
                  }
                  else {
                    this.PI_creditno.cProtect = false
                    this.M_AR_DepositReceiptDirectFromCashierH.creditno = ""
                    this.RunningCd = "" 
                  } 
                } 
              })
            }
        })
        this.$forceUpdate()
        },
        OnreferencedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{referencedate}
            }
        })
        this.$forceUpdate()
        },
        OnautoallocateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{autoallocate}
            }
        })
        this.$forceUpdate()
        },
        OnautoallocatedetailChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{autoallocatedetail}
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
          this.getToolbar().statusFunction[4].text = 'Post'
        },
        M_CheckboxChecked (data, status, index) {
          if (status === true) {
            if (data.BatchStatus && data.BatchStatus != '') {
              // this.$store.commit('setDeleteStatus', true)
              this.DataSelected.push({idx: index, CanDelete: true})
            }
            else {
              // this.$store.commit('setDeleteStatus', false)
              this.DataSelected.push({idx: index, CanDelete: false})
            }
          }
          else {
            this.$store.commit('setDeleteStatus', true)
            var id = this.DataSelected.map(x => x.idx).indexOf(index)
            this.DataSelected.splice(id,1)
          }

          if (this.DataSelected.length == 0) {
            this.CanDelete = true
            // this.$store.commit('setDeleteStatus', this.CanDelete)
          }
          else {
            for (var a = 0; a < this.DataSelected.length; a++) {
              if (this.DataSelected[a].CanDelete == false) {
                this.CanDelete = false
                break
              }
            }
          }
          
          this.$store.commit('setDeleteStatus', this.CanDelete)
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
              SubPortfolioCd : this.getDataUser().SubPortfolioCd,
              BatchNo: value.BatchNo,
              ModuleCd: this.Module,
              UserInput: this.getDataUser().UserId,
              _Message_: "Receipt No " + value.ReceiptNo
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
          if (!this.DataRow.ReceiptNo || this.DataRow.ReceiptNo == "") {
            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              BatchNo: this.M_AR_DepositReceiptDirectFromCashierH.batchno && this.M_AR_DepositReceiptDirectFromCashierH.batchno != '' ? this.M_AR_DepositReceiptDirectFromCashierH.batchno : 0,
              Source: 'T',
              CashierNo: this.M_AR_DepositReceiptDirectFromCashierH.cashierno,
              ReferenceNo: this.M_AR_DepositReceiptDirectFromCashierH.referenceno,
              ReferenceDate: this.M_AR_DepositReceiptDirectFromCashierH.referencedate == '' || this.M_AR_DepositReceiptDirectFromCashierH.referencedate == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.referencedate ,
              DebtorCd: this.M_AR_DepositReceiptDirectFromCashierH.debtorcd,
              TrxType: this.M_AR_DepositReceiptDirectFromCashierH.trxtype == '' || this.M_AR_DepositReceiptDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.trxtype ,
              ModuleCd: this.Module,
              CreditNo: this.M_AR_DepositReceiptDirectFromCashierH.creditno == '(auto)' ? '' : this.M_AR_DepositReceiptDirectFromCashierH.creditno,
              CreditDate: this.M_AR_DepositReceiptDirectFromCashierH.creditdate == '' || this.M_AR_DepositReceiptDirectFromCashierH.creditdate == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.creditdate,
              Descs: this.M_AR_DepositReceiptDirectFromCashierH.descs,
              PaymentCd: this.M_AR_DepositReceiptDirectFromCashierH.paymentcd,
              BankCd: this.M_AR_DepositReceiptDirectFromCashierH.bankcd,
              CurrencyCd: this.M_AR_DepositReceiptDirectFromCashierH.currencycd,
              CurrencyRate: this.M_AR_DepositReceiptDirectFromCashierH.currencyrate && this.M_AR_DepositReceiptDirectFromCashierH.currencyrate != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.currencyrate, ',', '', 'number') : 0,
              ChequeReferenceNo: this.M_AR_DepositReceiptDirectFromCashierH.chequereferenceno,
              ChequeReferenceDate: this.M_AR_DepositReceiptDirectFromCashierH.chequereferencedate == '' || this.M_AR_DepositReceiptDirectFromCashierH.chequereferencedate == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.chequereferencedate,
              IssuedBank: this.M_AR_DepositReceiptDirectFromCashierH.issuedbank,
              ChequeDueDate: this.M_AR_DepositReceiptDirectFromCashierH.chequeduedate == '' || this.M_AR_DepositReceiptDirectFromCashierH.chequeduedate == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.chequeduedate,
              CreditAmt: this.M_AR_DepositReceiptDirectFromCashierH.creditamt && this.M_AR_DepositReceiptDirectFromCashierH.creditamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.creditamt, ',', '', 'number') : 0,
              BankChargesAmt: this.M_AR_DepositReceiptDirectFromCashierH.bankchargesamt && this.M_AR_DepositReceiptDirectFromCashierH.bankchargesamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.bankchargesamt,',','','number') : 0 ,
              OverPaymentAmt: this.M_AR_DepositReceiptDirectFromCashierH.overpaymentamt && this.M_AR_DepositReceiptDirectFromCashierH.overpaymentamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
              UnderPaymentAmt: this.M_AR_DepositReceiptDirectFromCashierH.underpaymentamt && this.M_AR_DepositReceiptDirectFromCashierH.underpaymentamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
              AutoAllocate: this.M_AR_DepositReceiptDirectFromCashierH.autoallocate,
              Remarks: this.M_AR_DepositReceiptDirectFromCashierH.remarks,
              UserInput: this.getDataUser().UserId ,
              LastUpdateStamp: this.M_AR_DepositReceiptDirectFromCashierH.lastupdatestamp
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultInsert(response.Message)
            })
          }
          else {
            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              BatchNo: this.M_AR_DepositReceiptDirectFromCashierH.batchno && this.M_AR_DepositReceiptDirectFromCashierH.batchno != '' ? this.M_AR_DepositReceiptDirectFromCashierH.batchno : 0,
              Source: 'T',
              CreditNo: this.M_AR_DepositReceiptDirectFromCashierH.creditno == '(auto)' ? '' : this.M_AR_DepositReceiptDirectFromCashierH.creditno,
              ReferenceNo: this.M_AR_DepositReceiptDirectFromCashierH.referenceno,
              ReferenceDate: this.M_AR_DepositReceiptDirectFromCashierH.referencedate == '' || this.M_AR_DepositReceiptDirectFromCashierH.referencedate == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.referencedate ,
              Descs: this.M_AR_DepositReceiptDirectFromCashierH.descs,
              TrxType: this.M_AR_DepositReceiptDirectFromCashierH.trxtype == '' || this.M_AR_DepositReceiptDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AR_DepositReceiptDirectFromCashierH.trxtype ,
              CreditAmt: this.M_AR_DepositReceiptDirectFromCashierH.creditamt && this.M_AR_DepositReceiptDirectFromCashierH.creditamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.creditamt, ',', '', 'number') : 0,
              BankChargesAmt: this.M_AR_DepositReceiptDirectFromCashierH.bankchargesamt && this.M_AR_DepositReceiptDirectFromCashierH.bankchargesamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.bankchargesamt,',','','number') : 0 ,
              OverPaymentAmt: this.M_AR_DepositReceiptDirectFromCashierH.overpaymentamt && this.M_AR_DepositReceiptDirectFromCashierH.overpaymentamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
              UnderPaymentAmt: this.M_AR_DepositReceiptDirectFromCashierH.underpaymentamt && this.M_AR_DepositReceiptDirectFromCashierH.underpaymentamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
              Remarks: this.M_AR_DepositReceiptDirectFromCashierH.remarks,
              AutoAllocate: this.M_AR_DepositReceiptDirectFromCashierH.autoallocate,
              UserEdit: this.getDataUser().UserId ,
              LastUpdateStamp: this.M_AR_DepositReceiptDirectFromCashierH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultUpdate(response.Message)
            })
          }
        },
		M_ClearForm(){
            this.M_AR_DepositReceiptDirectFromCashierH = {
                batchno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                cashierno: '',
                trxtype: '',
                creditno: '',
                creditdate: '',
                referenceno: '',
                referencedate: '',
                debtorcd: '',
                debtorcdLabel: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                bankcd: '',
                chequereferenceno: '',
                currencyrate: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                creditamt: '',
                vatpaidbycustomer: '',
                withholdingpaidbycustomer: '',
                bankchargesamt: '0',
                overpaymentamt: '0',
                underpaymentamt: '0',
                advanceamt: '',
                allocatedamt: '',
                forexgainlossamt: '',
                totalallocationamt: '',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                totalnetallocated: 0,
                totalvatallocated: 0,
                totalwithholdingallocated: 0,
                trxtypedescs: '',
                withholdingtreatment: '',
                maximumoverpaymentamt: '',
                maximumunderpaymentamt: '',
                maximumbankchargesamt: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                basecurrencycd: '',
                lastupdatestamp: 0,
                rowid: 0,
                balanceamt: '',
                autoallocatedetail: 'N',
                autoallocate: 'N'
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
                    BatchNo: value.BatchNo,
                    Source: 'T',
                    CreditNo: value.ReceiptNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: ''
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },        
        getDataBy (record) {
          var url = this.getUrlById()
          var param = {}
          if (record.ReceiptNo && record.ReceiptNo != "") {
            url += "2"
            param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubportfolioCd: this.getDataUser().SubPortfolioCd,
              creditno: record.ReceiptNo
            }
          }
          else {
            param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubportfolioCd: this.getDataUser().SubPortfolioCd,
              cashierno: record.CashierNo
            }
          }
          
          this.postEncode( url, param )
          .then(response => {
              // response from API
              if(response == null) return
              if (response.Data.length < 1) return
              
              var data = response.Data[0]
              var balanceamt = 0

              if (data.basecurrencycd.toUpperCase() == data.currencycd.toUpperCase()) {
                balanceamt = (data.totalallocationamt && data.totalallocationamt != '' ? parseFloat(data.totalallocationamt) : 0)
                - (data.forexgainlossamt && data.forexgainlossamt != '' ? parseFloat(data.forexgainlossamt) : 0)
                - (data.allocatedamt && data.allocatedamt != '' ? parseFloat(data.allocatedamt) : 0)
              }
              else {
                balanceamt = (data.totalallocationamt && data.totalallocationamt != '' ? parseFloat(data.totalallocationamt) : 0)
                - (data.allocatedamt && data.allocatedamt != '' ? parseFloat(data.allocatedamt) : 0)
              }

              this.M_AR_DepositReceiptDirectFromCashierH = {
                batchno: data.batchno,
                subportfoliocd: data.subportfoliocd,
                cashierno: data.cashierno,
                trxtype: data.trxtype,
                creditno: data.creditno,
                creditdate: data.creditdate,
                referenceno: data.referenceno,
                referencedate: data.referencedate,
                debtorcd: data.debtorcd,
                debtorcdLabel: data.debtorcd,
                descs: data.descs,
                paymentcd: data.paymentcd,
                currencycd: data.currencycd,
                bankcd: data.bankcd,
                chequereferenceno: data.chequereferenceno,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                chequereferencedate: data.chequereferencedate,
                issuedbank: data.issuedbank,
                chequeduedate: data.chequeduedate,
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                vatpaidbycustomer: data.vatpaidbycustomer,
                withholdingpaidbycustomer: data.withholdingpaidbycustomer,
                bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
                overpaymentamt: this.isCurrency(data.overpaymentamt, this.decimal),
                underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
                advanceamt: this.isCurrency(data.advanceamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
                totalallocationamt: this.isCurrency(data.totalallocationamt, this.decimal),
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                debtorname: data.debtorname,
                totalnetallocated: data.totalnetallocated,
                totalvatallocated: data.totalvatallocated,
                totalwithholdingallocated: data.totalwithholdingallocated,
                trxtypedescs: data.trxtypedescs,
                withholdingtreatment: data.withholdingtreatment,
                maximumoverpaymentamt: data.maximumoverpaymentamt,
                maximumunderpaymentamt: data.maximumunderpaymentamt,
                maximumbankchargesamt: data.maximumbankchargesamt,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                basecurrencycd: data.basecurrencycd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                balanceamt: this.isCurrency(balanceamt, this.decimal),
                autoallocatedetail: 'N',
                autoallocate: 'N'
              }
                

              this.M_AR_DepositReceiptDirectFromCashierH.batchnoLabel = this.M_AR_DepositReceiptDirectFromCashierH.batchno != null && this.M_AR_DepositReceiptDirectFromCashierH.batchno != '' ? data.batchno + this.separator  :'' 
              this.M_AR_DepositReceiptDirectFromCashierH.trxtypeLabel = this.M_AR_DepositReceiptDirectFromCashierH.trxtype != null && this.M_AR_DepositReceiptDirectFromCashierH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
              this.M_AR_DepositReceiptDirectFromCashierH.debtorcdLabel = this.M_AR_DepositReceiptDirectFromCashierH.debtorcd != null && this.M_AR_DepositReceiptDirectFromCashierH.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
        

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

