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
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_DebitNoteH.batchno" :label="M_AR_DebitNoteH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_DebitNoteH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_DebitNoteH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_DebitNoteH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_DebitNoteH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_DebitNoteH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_DebitNoteH.debtorcd" :label="M_AR_DebitNoteH.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_DebitNoteH.trxtype" :label="M_AR_DebitNoteH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_DebitNoteH.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OndebitdateChange" :prop="PI_debitdate" v-model="M_AR_DebitNoteH.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_DebitNoteH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_DebitNoteH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_AR_DebitNoteH.addresscd" :label="M_AR_DebitNoteH.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_journaldate" v-model="M_AR_DebitNoteH.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_AR_DebitNoteH.credittermscd" :label="M_AR_DebitNoteH.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_duedate" v-model="M_AR_DebitNoteH.duedate"  ref="ref_duedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_DebitNoteH.currencycd" :label="M_AR_DebitNoteH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_DebitNoteH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalcategoryChange" :prop="PI_journalcategory" v-model="M_AR_DebitNoteH.journalcategory"  ref="ref_journalcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_DebitNoteH.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_DebitNoteH.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AR_DebitNoteH.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdisc" v-model="M_AR_DebitNoteH.amountafterdisc"  ref="ref_amountafterdisc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netamt" v-model="M_AR_DebitNoteH.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_vatamt" v-model="M_AR_DebitNoteH.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalamt" v-model="M_AR_DebitNoteH.totalamt"  ref="ref_totalamt"/>
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
            IndirectRunningCd: '',
            RunningCd: '',
            Batch:'',

            M_AR_DebitNoteH :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                debtorcd: '',
                trxtype: '',
                modulecd: '',
                runningcd: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                addresscontactid: '',
                addresscd: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '0',
                revaluationdate: '',
                revaluationcurrencyrate: '',
                lastpenaltydate: '',
                discountamt: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                allocatedamt: '',
                journalcategory: '',
                postingdate: '',
                postedby: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                contactid: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                trxtypedescs: '',
                dueday: 0,
                lastupdatestamp: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                amountafterdisc: '',
                totalamt: ''
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARBatchMaster'    , 
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
                cMasterUrl: 'AR/AR_BatchMaster' ,
                cDisplayColumn: 'BatchNo,DocumentCount' ,
            }, 
            PI_documentcount: { 
                cLabel: 'Doc. Count&nbsp;', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_batchtotal: { 
                cLabel: 'Batch Total&nbsp;', 
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
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' and Status ='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' and TrxClass = 'D' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_debitno: { 
                cValidate :'max:20', 
                cName: 'debitno', 
                cLabel: 'Debit Note No', 
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
            PI_debitdate: { 
                cValidate :'required', 
                cName: 'debitdate', 
                cLabel: 'Debit Note Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:5, 
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
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddressSubportfolio'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'addresscd', 
                cLabel: 'Address', 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'AddressCd,TranslatedAddressType' ,
            }, 
            PI_journaldate: { 
                cValidate :'required', 
                cName: 'journaldate', 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_duedate: { 
                cValidate :'', 
                cName: 'duedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
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
            PI_journalcategory: { 
                cValidate :'required', 
                cName: 'journalcategory', 
                cId: 'rdbjournalcategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' },{ text: 'Indirect', value: 'I' },], 
                cRadioDefaultOption: '', 
                cLabel:'Journal Category', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
             PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcurrencyrate: { 
                cValidate :'required', 
                cName: 'taxcurrencyrate', 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amountafterdisc: { 
                cValidate :'', 
                cName: 'amountafterdisc', 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
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
                cVisible: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
      GetCurrencyRate(CurrencyCd){
        if(CurrencyCd !=''){
            this.FnGetCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_AR_DebitNoteH.debitdate, CurrencyCd)
              .then(ress => {
                  if (ress != null) {
                      this.M_AR_DebitNoteH.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal) 
                  }                      
              })
              this.FnGetTaxCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_AR_DebitNoteH.debitdate, CurrencyCd)
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_DebitNoteH.taxcurrencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })
        }
      },
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteH.batchno = data.id
            this.M_AR_DebitNoteH.batchnoLabel = data.label
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
        OndebtorcdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_AR_DebitNoteH.debtorcd = data.id
            this.M_AR_DebitNoteH.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              // this.M_AR_DebitNoteH.contactid = data.ContactID
              // this.M_AR_DebitNoteH.addresscontactid = data.ContactID
              this.FnGetDebtorData(this.getDataUser().SubPortfolioCd,this.M_AR_DebitNoteH.debtorcd).then(dt => {
                    if (dt != null) { 
                        var data = dt[0]
                        // var where = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactID = '" + data.ContactID + "'"

                        this.M_AR_DebitNoteH.credittermscd = data.CreditTermsCd
                        this.M_AR_DebitNoteH.credittermscdLabel = data.CreditTermsCd
                        this.M_AR_DebitNoteH.addresscd = data.AddressCd
                        this.M_AR_DebitNoteH.addresscdLabel = data.AddressCd
                        this.M_AR_DebitNoteH.addresscontactid = data.ContactID
                        this.M_AR_DebitNoteH.contactid = data.ContactID

                        // this.setColumnWhere()

                        this.M_AR_DebitNoteH.dueday = data.Dueday
                        if (data.Dueday != null) {
                            this.M_AR_DebitNoteH.duedate = this.dateAdd( this.M_AR_DebitNoteH.journaldate, data.Dueday )
                        } 
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteH.trxtype = data.id            
            this.M_AR_DebitNoteH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,this.Module,data.id).then(dt => 
        { 
          if (dt != null) { 
          var dt25 = dt[0]
          // console.log(dt25)
             this.M_AR_DebitNoteH.journalcategory = dt25.JournalCategory
             this.RunningCd = dt25.RunningCd != null? dt25.RunningCd : ''
             this.M_AR_DebitNoteH.runningcd = dt25.RunningCd != null? dt25.RunningCd : ''
             this.IndirectRunningCd = dt25.IndirectRunningCd != null? dt25.IndirectRunningCd : ''
             this.M_AR_DebitNoteH.descs = dt25.TrxTypeDescs
             this.M_AR_DebitNoteH.trxtypedescs = dt25.TrxTypeDescs
             this.M_AR_DebitNoteH.currencycd = dt25.CurrencyCd
             this.M_AR_DebitNoteH.currencycdLabel = dt25.CurrencyCd
            this.GetCurrencyRate(dt25.CurrencyCd)
            if(dt25.JournalCategory == "D" && this.RunningCd != ""){
                    this.PI_debitno.cProtect = true
                    this.M_AR_DebitNoteH.debitno = "(auto)" 
            }else if(dt25.JournalCategory != "D" && this.IndirectRunningCd != ""){
                    this.PI_debitno.cProtect = true
                    this.M_AR_DebitNoteH.debitno = "(auto)" 
            }else{
                    this.PI_debitno.cProtect = false
                    this.M_AR_DebitNoteH.debitno = "" 
            }
            } })

            }
        })
        this.$forceUpdate()
        },
        OndebitdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.GetCurrencyRate(this.M_AR_DebitNoteH.currencycd)
            }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteH.addresscd = data.id
            this.M_AR_DebitNoteH.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteH.credittermscd = data.id
            this.M_AR_DebitNoteH.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetCreditTermsData(data.id).then(dt => {
                    if (dt != null) {
                        var data = dt[0]
                        // this.M_AR_InvoiceH2.CreditTermsCd = data.CreditTermsCd
                        this.M_AR_DebitNoteH.dueday = data.Dueday
                        // console.log(this.M_AR_DebitNoteH.JournalDate)
                        if (data.Dueday != null && data.Dueday != '') {
                            // alert(data.Dueday)
                            this.M_AR_DebitNoteH.duedate = this.dateAdd( this.M_AR_DebitNoteH.journaldate, data.Dueday )
                        }
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteH.currencycd = data.id
            this.M_AR_DebitNoteH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.GetCurrencyRate(data.id)
            }
        })
        this.$forceUpdate()
        },
        OnjournalcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data!=""){
                // console.log(data +'<=>'+this.RunningCd)
                // console.log(data +'<=>'+this.IndirectRunningCd)
                if(data == "D" && this.RunningCd != ""){
                    this.PI_debitno.cProtect = true
                    this.M_AR_DebitNoteH.debitno = "(auto)" 
                }else if(data != "D" && this.IndirectRunningCd != ""){
                        this.PI_debitno.cProtect = true
                        this.M_AR_DebitNoteH.debitno = "(auto)" 
                }else{
                        this.PI_debitno.cProtect = false
                        this.M_AR_DebitNoteH.debitno = "" 
                }


              }
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
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
        M_Post(){

          var data = this.FormToABSList().getRowSelected()
          var dataPost = []

            data.forEach((value) => {
                // dt = dt + value.RowId + ','
                dataPost.push({
                    _Message_: "Debit No = "+value.DebitNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId
                    // Source: value.Source
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
          if (this.M_AR_DebitNoteH.journalcategory == "D"){
            this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AR_DebitNoteH.debitdate).then(dt9 =>{
              if (dt9 != null) {
                this.M_AR_DebitNoteH.debitno = dt9.RunningCode
                  this.dataSave()
                // alert(this.M_AR_DebitNoteH.debitno)
              }
            })
          }else{
            this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.IndirectRunningCd,this.getDataUser().UserId,this.M_AR_DebitNoteH.debitdate).then(dt9 =>{
              if (dt9 != null) {
                this.M_AR_DebitNoteH.debitno = dt9.RunningCode
                  this.dataSave()
                // alert(this.M_AR_DebitNoteH.debitno)
              }
            })
          }
        },
        dataSave(){
          var dataSave = []
          var param1 = {			
                _Method_:'SAVE',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,//this.M_AR_DebitNoteH.batchno == '' || this.M_AR_DebitNoteH.batchno == null ? 'NULL' : this.M_AR_DebitNoteH.batchno ,                
                Source: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_DEBIT_NOTE,
                DebtorCd: this.M_AR_DebitNoteH.debtorcd == '' || this.M_AR_DebitNoteH.debtorcd == null ? 'NULL' : this.M_AR_DebitNoteH.debtorcd ,
                ModuleCd: this.Module,
                TrxType: this.M_AR_DebitNoteH.trxtype == '' || this.M_AR_DebitNoteH.trxtype == null ? 'NULL' : this.M_AR_DebitNoteH.trxtype ,
                RunningCd: this.M_AR_DebitNoteH.runningcd,
                DebitNo: this.M_AR_DebitNoteH.debitno,
                DebitDate: this.M_AR_DebitNoteH.debitdate,
                JournalDate: this.M_AR_DebitNoteH.journaldate,
                ReferenceNo: this.M_AR_DebitNoteH.referenceno,
                CreditTermsCd: this.M_AR_DebitNoteH.credittermscd == '' || this.M_AR_DebitNoteH.credittermscd == null ? 'NULL' : this.M_AR_DebitNoteH.credittermscd ,
                Descs: this.M_AR_DebitNoteH.descs,
                AddressContactId: this.M_AR_DebitNoteH.addresscontactid,
                AddressCd: this.M_AR_DebitNoteH.addresscd == '' || this.M_AR_DebitNoteH.addresscd == null ? 'NULL' : this.M_AR_DebitNoteH.addresscd ,
                CurrencyCd: this.M_AR_DebitNoteH.currencycd == '' || this.M_AR_DebitNoteH.currencycd == null ? 'NULL' : this.M_AR_DebitNoteH.currencycd ,
                CurrencyRate: this.M_AR_DebitNoteH.currencyrate ? this.replaceAllString(this.M_AR_DebitNoteH.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_AR_DebitNoteH.taxcurrencyrate ? this.replaceAllString(this.M_AR_DebitNoteH.taxcurrencyrate,',','','number') : 0 ,
                UserInput: this.getDataUser().UserId ,
                JournalCategory: this.M_AR_DebitNoteH.journalcategory                
            }
            var param2 = {			
                _Method_:'SAVE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,//this.M_AR_DebitNoteH.batchno == '' || this.M_AR_DebitNoteH.batchno == null ? 'NULL' : this.M_AR_DebitNoteH.batchno ,
                DebitNo: this.M_AR_DebitNoteH.debitno,
                UserEdit: this.getDataUser().UserId ,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_DEBIT_NOTE  
            }
            
            dataSave.push({
                A_Insert :param1,
                B_Insert : param2
            })
             var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataSave
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                // this.$parent.resultPost()
                this.$parent.resultInsert('Data Has Been Inserted Successfully')
            })

        },
        dataSave2(){
          var param2 = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,//this.M_AR_DebitNoteH.batchno == '' || this.M_AR_DebitNoteH.batchno == null ? 'NULL' : this.M_AR_DebitNoteH.batchno ,
                DebitNo: this.M_AR_DebitNoteH.debitno,
                UserEdit: this.getDataUser().UserId ,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_DEBIT_NOTE  
            }
            this.postEncode(this.getUrlInsert2(), param2)
            .then((response) => {
            if(response == null) return
              
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_DebitNoteH.batchno == '' || this.M_AR_DebitNoteH.batchno == null ? 'NULL' : this.M_AR_DebitNoteH.batchno ,
                DebtorCd: this.M_AR_DebitNoteH.debtorcd == '' || this.M_AR_DebitNoteH.debtorcd == null ? 'NULL' : this.M_AR_DebitNoteH.debtorcd ,
                ModuleCd: this.M_AR_DebitNoteH.modulecd,
                TrxType: this.M_AR_DebitNoteH.trxtype == '' || this.M_AR_DebitNoteH.trxtype == null ? 'NULL' : this.M_AR_DebitNoteH.trxtype ,
                RunningCd: this.M_AR_DebitNoteH.runningcd,
                DebitNo: this.M_AR_DebitNoteH.debitno,
                DebitDate: this.M_AR_DebitNoteH.debitdate,
                JournalDate: this.M_AR_DebitNoteH.journaldate,
                ReferenceNo: this.M_AR_DebitNoteH.referenceno,
                CreditTermsCd: this.M_AR_DebitNoteH.credittermscd == '' || this.M_AR_DebitNoteH.credittermscd == null ? 'NULL' : this.M_AR_DebitNoteH.credittermscd ,
                Descs: this.M_AR_DebitNoteH.descs,
                AddressContactId: this.M_AR_DebitNoteH.addresscontactid,
                AddressCd: this.M_AR_DebitNoteH.addresscd == '' || this.M_AR_DebitNoteH.addresscd == null ? 'NULL' : this.M_AR_DebitNoteH.addresscd ,
                CurrencyCd: this.M_AR_DebitNoteH.currencycd == '' || this.M_AR_DebitNoteH.currencycd == null ? 'NULL' : this.M_AR_DebitNoteH.currencycd ,
                CurrencyRate: this.M_AR_DebitNoteH.currencyrate ? this.replaceAllString(this.M_AR_DebitNoteH.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_AR_DebitNoteH.taxcurrencyrate ? this.replaceAllString(this.M_AR_DebitNoteH.taxcurrencyrate,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_DebitNoteH.lastupdatestamp,
                JournalCategory: this.M_AR_DebitNoteH.journalcategory                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_DebitNoteH = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                debtorcd: '',
                trxtype: '',
                modulecd: '',
                runningcd: '',
                debitno: '',
                debitdate: this.M_FormatingDate(new Date()),
                journaldate: this.M_FormatingDate(new Date()),
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                addresscontactid: '',
                addresscd: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '0',
                revaluationdate: '',
                revaluationcurrencyrate: '',
                lastpenaltydate: '',
                discountamt: '',
                trxamt: 0,
                netamt: 0,
                vatamt: 0,
                allocatedamt: 0,
                journalcategory: '',
                postingdate: '',
                postedby: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                contactid: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                trxtypedescs: '',
                dueday: 0,
                lastupdatestamp: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                amountafterdisc: 0,
                totalamt: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

          var data = this.FormToABSList().getRowSelected()  
			    var dataDelete = []
          var dataDelete2 = []
			
			    data.forEach((value) => {
                dataDelete2.push({
                    _MethodApi_ : 'DELETE2',
                    _LineNo_ : 0,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    EntryType: 'D',
                    UserEdit: this.getDataUser().UserId ,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo,
                    _Message_:''
                })

				
				        dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId ,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Delete2_ : dataDelete2,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_DebitNoteH = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                source: data.source,
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                runningcd: data.runningcd,
                debitno: data.debitno,
                debitdate: data.debitdate,
                journaldate: data.journaldate,
                duedate: data.duedate,
                referenceno: data.referenceno,
                credittermscd: data.credittermscd,
                descs: data.descs,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                revaluationdate: data.revaluationdate,
                revaluationcurrencyrate: data.revaluationcurrencyrate,
                lastpenaltydate: data.lastpenaltydate,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                journalcategory: data.journalcategory,
                postingdate: data.postingdate,
                postedby: data.postedby,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                contactid: data.contactid,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                debtorname: data.debtorname,
                trxtypedescs: data.trxtypedescs,
                dueday: data.dueday,
                lastupdatestamp: record.LastUpdateStamp,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                amountafterdisc: this.isCurrency(data.amountafterdisc, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal)
                    }
                 

                this.M_AR_DebitNoteH.batchnoLabel = this.M_AR_DebitNoteH.batchno != null ? data.batchno + this.separator  :'' 
                this.M_AR_DebitNoteH.debtorcdLabel = this.M_AR_DebitNoteH.debtorcd != null ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_DebitNoteH.trxtypeLabel = this.M_AR_DebitNoteH.trxtype != null ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AR_DebitNoteH.addresscdLabel = this.M_AR_DebitNoteH.addresscd != null ? data.addresscd + this.separator  :'' 
                this.M_AR_DebitNoteH.credittermscdLabel = this.M_AR_DebitNoteH.credittermscd != null ? data.credittermscd + this.separator  :'' 
                this.M_AR_DebitNoteH.currencycdLabel = this.M_AR_DebitNoteH.currencycd != null ? data.currencycd + this.separator  :'' 
         

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

