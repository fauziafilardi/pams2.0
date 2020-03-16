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
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debtorcd" v-model="M_AR_RefundDirectFromCashierH.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_RefundDirectFromCashierH.batchno" :label="M_AR_RefundDirectFromCashierH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_RefundDirectFromCashierH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_RefundDirectFromCashierH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_RefundDirectFromCashierH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_RefundDirectFromCashierH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_RefundDirectFromCashierH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_RefundDirectFromCashierH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnstatusChange" :prop="PI_status" v-model="M_AR_RefundDirectFromCashierH.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AR_RefundDirectFromCashierH.cashierno"  ref="ref_cashierno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_RefundDirectFromCashierH.trxtype" :label="M_AR_RefundDirectFromCashierH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_refundno" v-model="M_AR_RefundDirectFromCashierH.refundno"  ref="ref_refundno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_refunddate" v-model="M_AR_RefundDirectFromCashierH.refunddate"  ref="ref_refunddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_RefundDirectFromCashierH.debtorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_debtorname" v-model="M_AR_RefundDirectFromCashierH.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_RefundDirectFromCashierH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentcd" v-model="M_AR_RefundDirectFromCashierH.paymentcd"  ref="ref_paymentcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankcd" v-model="M_AR_RefundDirectFromCashierH.bankcd"  ref="ref_bankcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_RefundDirectFromCashierH.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_RefundDirectFromCashierH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentamt" v-model="M_AR_RefundDirectFromCashierH.paymentamt"  ref="ref_paymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <br /> 
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_overpaymentamt" v-model="M_AR_RefundDirectFromCashierH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_underpaymentamt" v-model="M_AR_RefundDirectFromCashierH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AR_RefundDirectFromCashierH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AR_RefundDirectFromCashierH.allocationamt"  ref="ref_allocationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AR_RefundDirectFromCashierH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AR_RefundDirectFromCashierH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AR_RefundDirectFromCashierH.chequereferenceno"  ref="ref_chequereferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequereferencedate" v-model="M_AR_RefundDirectFromCashierH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_AR_RefundDirectFromCashierH.issuedbank"  ref="ref_issuedbank" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequeduedate" v-model="M_AR_RefundDirectFromCashierH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_RefundDirectFromCashierH.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            RunningCd: '',

            M_AR_RefundDirectFromCashierH :{
                batchno: 0,
                cashierno: '',
                trxtype: '',
                refundno: '',
                refunddate: '',
                debtorcd: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                currencyrate: '',
                bankcd: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                paymentamt: '',
                allocationamt: 0,
                forexgainlossamt: '',
                overpaymentamt: '0',
                underpaymentamt: '0',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                debtorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                maximumoverpaymentamt: '',
                maximumunderpaymentamt: '',
                basecurrencycd: '',
                timeedit: '',
                totalaging: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
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
                cLabel: 'Curr. Batch Total', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='R'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_refundno: { 
                cValidate :'required', 
                cName: 'refundno', 
                cLabel: 'Refund No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_refunddate: { 
              cValidate: "",
              cName: "refunddate",
              cLabel: 'Refund Date', 
              cLabelSize: 4,
              cOrder: 0,
              cKey: false,
              cVisible: true,
              cProtect: true,
              cPageLevel: this.PageLevel,
              cTabIndex: this.TabIndex,
              cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
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
            PI_debtorname: { 
                cLabel: 'Debtor Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'max:150', 
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
            PI_paymentcd: { 
              cValidate :'', 
              cName: 'paymentcd', 
              cLabel: 'Payment Type',
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
              cName: 'bankcd', 
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
            PI_currencycd: { 
              cValidate :'', 
              cName: 'currencycd', 
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
              cOrder: 0, 
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentamt: { 
              cValidate :'', 
              cName: 'paymentamt',
              cLabel: 'Amount', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_overpaymentamt: { 
                cValidate :'', 
                cName: 'overpaymentamt', 
                cLabel: 'Over Payment Amount', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cOrder: 5, 
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
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
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
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
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
              cKey: false, 
              cType: 'decimal',
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
              cOrder: 0, 
              cKey: false, 
              cType: 'decimal',
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
              cValidate: "",
              cName: "chequereferencedate",
              cLabel: 'Cheque / Ref Date',
              cLabelSize: 4,
              cOrder: 0,
              cKey: false,
              cVisible: true,
              cProtect: true,
              cPageLevel: this.PageLevel,
              cTabIndex: this.TabIndex,
              cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
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
              cValidate: "",
              cName: "chequeduedate",
              cLabel: 'Due Date',
              cLabelSize: 4,
              cOrder: 0,
              cKey: false,
              cVisible: true,
              cProtect: true,
              cPageLevel: this.PageLevel,
              cTabIndex: this.TabIndex,
              cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
            }, 
            PI_remarks: { 
              cValidate :'', 
              cName:'remarks', 
              cLabel:'Remarks', 
              cLabelSize: 4, 
              cOrder:6, 
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
            this.M_AR_RefundDirectFromCashierH.batchno = data.id
            this.M_AR_RefundDirectFromCashierH.batchnoLabel = data.label
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
          console.log(data)
        this.$nextTick(() => {
          this.M_AR_RefundDirectFromCashierH.trxtype = data.TransactionType
          this.M_AR_RefundDirectFromCashierH.trxtypeLabel = data.label
          if (this.inputStatus != "VIEW") {
            var param = {
                OptionFunctionCd: "GetTrxTypeDataRow",
                ModuleCdV2: "TN",
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: data.TransactionType,
                ModuleCd: "AR"
            }
            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]
                console.log(data)
                if (data != null) {
                  if (!this.M_AR_RefundDirectFromCashierH.descs || this.M_AR_RefundDirectFromCashierH.descs == '') {
                    this.M_AR_RefundDirectFromCashierH.descs = data.TrxTypeDescs
                  }

                  console.log(this.DataRow)
                  if (this.DataRow.RefundNo == null) {
                    this.M_AR_RefundDirectFromCashierH.trxtypedescs = data.TrxTypeDescs
                    if (data.RunningCd && data.RunningCd != "") {
                      this.PI_refundno.cProtect = true
                      this.M_AR_RefundDirectFromCashierH.refundno = "(auto)"
                      this.RunningCd = data.RunningCd
                    }
                    else {
                      this.PI_refundno.cProtect = false
                      this.M_AR_RefundDirectFromCashierH.refundno = ""
                      this.RunningCd = "" 
                    }
                  }
                }
            })

            // this.FnGetTrxTypeDataRow(this.getDataUser().SubPortfolioCd).then(dt25 => {
            //   
            // })
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
              BatchNo: this.M_AR_RefundDirectFromCashierH.batchno ,
              Source: "F",
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              RefundNo: this.M_AR_RefundDirectFromCashierH.refundno,
              Descs: this.M_AR_RefundDirectFromCashierH.descs,
              TrxType: this.M_AR_RefundDirectFromCashierH.trxtype == '' || this.M_AR_RefundDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AR_RefundDirectFromCashierH.trxtype ,
              CurrencyRate: this.M_AR_RefundDirectFromCashierH.currencyrate,
              ModuleCd: this.Module,
              PaymentAmt: this.M_AR_RefundDirectFromCashierH.paymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.paymentamt, ',', '', 'number') : 0,
              OverPaymentAmt: this.M_AR_RefundDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
              UnderPaymentAmt: this.M_AR_RefundDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
              Remarks: this.M_AR_RefundDirectFromCashierH.remarks,
              UserEdit: this.getDataUser().UserId ,
              LastUpdateStamp: this.M_AR_RefundDirectFromCashierH.lastupdatestamp
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
                CashierNo: this.M_AR_RefundDirectFromCashierH.cashierno,
                DebtorCd: this.M_AR_RefundDirectFromCashierH.debtorcd,
                TrxType: this.M_AR_RefundDirectFromCashierH.trxtype == '' || this.M_AR_RefundDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AR_RefundDirectFromCashierH.trxtype ,
                ModuleCd: this.Module,
                RefundNo: this.M_AR_RefundDirectFromCashierH.refundno,
                RefundDate: this.M_AR_RefundDirectFromCashierH.refunddate,
                Descs: this.M_AR_RefundDirectFromCashierH.descs,
                PaymentCd: this.M_AR_RefundDirectFromCashierH.paymentcd,
                BankCd: this.M_AR_RefundDirectFromCashierH.bankcd,
                CurrencyCd: this.M_AR_RefundDirectFromCashierH.currencycd,
                CurrencyRate: this.M_AR_RefundDirectFromCashierH.currencyrate,
                ChequeReferenceNo: this.M_AR_RefundDirectFromCashierH.chequereferenceno,
                ChequeReferenceDate: this.M_AR_RefundDirectFromCashierH.chequereferencedate,
                IssuedBank: this.M_AR_RefundDirectFromCashierH.issuedbank,
                PaymentAmt: this.M_AR_RefundDirectFromCashierH.paymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.paymentamt, ',', '', 'number') : 0,
                ChequeDueDate: this.M_AR_RefundDirectFromCashierH.chequeduedate,
                OverPaymentAmt: this.M_AR_RefundDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AR_RefundDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
                Status: this.ARFieldHelper.REFUND_STATUS_ERROR,
                Remarks: this.M_AR_RefundDirectFromCashierH.remarks,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_RefundDirectFromCashierH.lastupdatestamp
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
                this.M_AR_RefundDirectFromCashierH.refunddate
              )
              .then(dt9 => {
                console.log(dt9)
                if (dt9 == null) {
                  return
                }

                this.M_AR_RefundDirectFromCashierH.refundno = dt9.RunningCode
                var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  BatchNo: 0 ,
                  Source: "F",
                  CashierNo: this.M_AR_RefundDirectFromCashierH.cashierno,
                  DebtorCd: this.M_AR_RefundDirectFromCashierH.debtorcd,
                  TrxType: this.M_AR_RefundDirectFromCashierH.trxtype == '' || this.M_AR_RefundDirectFromCashierH.trxtype == null ? 'NULL' : this.M_AR_RefundDirectFromCashierH.trxtype ,
                  ModuleCd: this.Module,
                  RefundNo: this.M_AR_RefundDirectFromCashierH.refundno,
                  RefundDate: this.M_AR_RefundDirectFromCashierH.refunddate,
                  Descs: this.M_AR_RefundDirectFromCashierH.descs,
                  PaymentCd: this.M_AR_RefundDirectFromCashierH.paymentcd,
                  BankCd: this.M_AR_RefundDirectFromCashierH.bankcd,
                  CurrencyCd: this.M_AR_RefundDirectFromCashierH.currencycd,
                  CurrencyRate: this.M_AR_RefundDirectFromCashierH.currencyrate,
                  ChequeReferenceNo: this.M_AR_RefundDirectFromCashierH.chequereferenceno,
                  ChequeReferenceDate: this.M_AR_RefundDirectFromCashierH.chequereferencedate,
                  IssuedBank: this.M_AR_RefundDirectFromCashierH.issuedbank,
                  PaymentAmt: this.M_AR_RefundDirectFromCashierH.paymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.paymentamt, ',', '', 'number') : 0,
                  ChequeDueDate: this.M_AR_RefundDirectFromCashierH.chequeduedate,
                  OverPaymentAmt: this.M_AR_RefundDirectFromCashierH.overpaymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.overpaymentamt,',','','number') : 0 ,
                  UnderPaymentAmt: this.M_AR_RefundDirectFromCashierH.underpaymentamt ? this.replaceAllString(this.M_AR_RefundDirectFromCashierH.underpaymentamt,',','','number') : 0 ,
                  Status: this.ARFieldHelper.REFUND_STATUS_ERROR,
                  Remarks: this.M_AR_RefundDirectFromCashierH.remarks,
                  UserInput: this.getDataUser().UserId ,
                  LastUpdateStamp: this.M_AR_RefundDirectFromCashierH.lastupdatestamp
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
            this.M_AR_RefundDirectFromCashierH = {
                batchno: 0,
                cashierno: '',
                trxtype: '',
                refundno: '',
                refunddate: '',
                debtorcd: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                currencyrate: '',
                bankcd: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                paymentamt: '',
                allocationamt: 0,
                forexgainlossamt: '',
                overpaymentamt: '0',
                underpaymentamt: '0',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                debtorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                maximumoverpaymentamt: '',
                maximumunderpaymentamt: '',
                basecurrencycd: '',
                timeedit: '',
                totalaging: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
              BatchNo: value.BatchNo,
              RefundNo: value.RefundNo,
              Source: 'F',
              CashierNo: value.CashierNo,
              UserEdit: this.getDataUser().UserId,
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

            this.$parent.resultDelete("Deleting Data Successfully")
          })
        },        
        getDataBy (record) {
          var url = this.getUrlById()
          var param = {}
          if (record.RefundNo && record.RefundNo != "") {
            url += "2"
            param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              refundno: record.RefundNo
            }
          }
          else {
            param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              cashierno: record.CashierNo
            }
          }

          this.postEncode( url, param )
          .then(response => {
            // response from API
            if(response == null) return
            var data = response.Data[0]
            var balanceamt, totalamt

            if (data.currencycd.toUpperCase() == data.basecurrencycd.toUpperCase()) {
              balanceamt = parseFloat(data.paymentamt) - parseFloat(data.overpaymentamt) + parseFloat(data.underpaymentamt) - parseFloat(data.forexgainlossamt) - parseFloat(data.allocationamt)
            }
            else {
              balanceamt = parseFloat(data.paymentamt) - parseFloat(data.overpaymentamt) + parseFloat(data.underpaymentamt) - parseFloat(data.allocationamt)
            }

            totalamt = balanceamt = parseFloat(data.paymentamt) - parseFloat(data.overpaymentamt) + parseFloat(data.underpaymentamt)
            
            this.M_AR_RefundDirectFromCashierH = {
              batchno: data.batchno,
              cashierno: data.cashierno,
              trxtype: data.trxtype,
              refundno: data.refundno,
              refunddate: data.refunddate,
              debtorcd: data.debtorcd,
              descs: data.descs,
              paymentcd: data.paymentcd,
              currencycd: data.currencycd,
              currencyrate: this.isCurrency(data.currencyrate, this.decimal),
              bankcd: data.bankcd,
              chequereferenceno: data.chequereferenceno,
              chequereferencedate: data.chequereferencedate,
              issuedbank: data.issuedbank,
              chequeduedate: data.chequeduedate,
              paymentamt: this.isCurrency(data.paymentamt, this.decimal),
              allocationamt: this.isCurrency(data.allocationamt, this.decimal),
              forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
              overpaymentamt: this.isCurrency(data.overpaymentamt, this.decimal),
              underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
              remarks: data.remarks,
              status: data.status,
              userinput: data.userinput,
              useredit: data.useredit,
              documentcount: data.documentcount,
              batchtotal: data.batchtotal,
              batchstatus: data.batchstatus,
              lastupdatestamp: record.LastUpdateStamp,
              trxtypedescs: data.trxtypedescs,
              debtorname: data.debtorname,
              currentbatchtotal: data.currentbatchtotal,
              currentdocumentcount: data.currentdocumentcount,
              maximumoverpaymentamt: this.isCurrency(data.maximumoverpaymentamt, this.decimal),
              maximumunderpaymentamt: this.isCurrency(data.maximumunderpaymentamt, this.decimal),
              basecurrencycd: data.basecurrencycd,
              timeedit: data.timeedit,
              totalaging: data.totalaging,
              subportfoliocd: data.subportfoliocd,
              rowid: data.rowid,
              totalallocationamt: this.isCurrency(totalamt, this.decimal),
              balanceamt: this.isCurrency(balanceamt, this.decimal)
            }
            
            this.M_AR_RefundDirectFromCashierH.batchnoLabel = this.M_AR_RefundDirectFromCashierH.batchno != null && this.M_AR_RefundDirectFromCashierH.batchno != "" ? data.batchno + this.separator  :'' 
            this.M_AR_RefundDirectFromCashierH.trxtypeLabel = this.M_AR_RefundDirectFromCashierH.trxtype != null && this.M_AR_RefundDirectFromCashierH.trxtype != "" ? data.trxtype + this.separator + data.trxtypedescs :'' 
            this.M_AR_RefundDirectFromCashierH.debtorcdLabel = this.M_AR_RefundDirectFromCashierH.debtorcd != null && this.M_AR_RefundDirectFromCashierH.debtorcd != "" ? data.debtorcd + this.separator + data.debtorname :'' 

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

