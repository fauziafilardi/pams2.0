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
                            <b-row>
                              <b-col md="12">
                                <b-row>
                                  <b-col md="1"></b-col>
                                  <b-col md="8">
                                    <label for="" style="color: blue; text-align: right !important;font-family: 'Segoe UI';font-weight: normal;font-style: normal;">
                                      {{sOutstandingAmt}}
                                    </label>                                    
                                  </b-col>
                                </b-row>                           
                              </b-col>
                            </b-row>
                            <b-row style="padding-left:10px;">                                
                                <b-col md="6" id="col-left">
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_InvoiceH.creditorcd" :label="M_AP_InvoiceH.creditorcdLabel" ref="ref_creditorcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_AP_InvoiceH.runningcd" :label="M_AP_InvoiceH.runningcdLabel" ref="ref_runningcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex @input="OncreditnoChange" :prop="PI_creditno" v-model="M_AP_InvoiceH.creditno"  ref="ref_creditno" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputDateVuex @input="OnjournaldateChange" :prop="PI_journaldate" v-model="M_AP_InvoiceH.journaldate"  ref="ref_journaldate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AP_InvoiceH.referenceno"  ref="ref_referenceno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_AP_InvoiceH.credittermscd" :label="M_AP_InvoiceH.credittermscdLabel" ref="ref_credittermscd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_InvoiceH.descs"  ref="ref_descs"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_InvoiceH.currencycd" :label="M_AP_InvoiceH.currencycdLabel" ref="ref_currencycd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_InvoiceH.trxamt"  ref="ref_trxamt"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AP_InvoiceH.discountamt"  ref="ref_discountamt"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_netamt" v-model="M_AP_InvoiceH.netamt"  ref="ref_netamt"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AP_InvoiceH.totalamt"  ref="ref_totalamt"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_InvoiceH.remarks"  ref="ref_remarks" />
                                    </b-col>
                                  </b-row>
                                </b-col>

                                <b-col md="6" id="col-right"> <!-- table open -->
                                    <b-row>
                                      <b-col md="12">
                                        <label for="" class="lbl-view-form"></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <label for="" class="lbl-view-form"></label>
                                      </b-col>
                                    </b-row>                                    
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AP_InvoiceH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <label for="" class="lbl-view-form"></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <label for="" class="lbl-view-form"></label>
                                      </b-col>
                                    </b-row>                                    
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnduedateChange" :prop="PI_duedate" v-model="M_AP_InvoiceH.duedate"  ref="ref_duedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <label for="" class="lbl-view-form"></label>
                                      </b-col>
                                    </b-row>                                    
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_InvoiceH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AP_InvoiceH.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_amountafterdisc" v-model="M_AP_InvoiceH.amountafterdisc"  ref="ref_amountafterdisc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AP_InvoiceH.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <label for="" class="lbl-view-form"></label>
                                      </b-col>
                                    </b-row>                                    
                                    <b-row>                                      
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_linkreversalinvoice" v-model="M_AP_InvoiceH.linkreversalinvoice"  ref="ref_linkreversalinvoice"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OncompanyreceiptdateChange" :prop="PI_companyreceiptdate" v-model="M_AP_InvoiceH.companyreceiptdate"  ref="ref_companyreceiptdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnfinancereceiptdateChange" :prop="PI_financereceiptdate" v-model="M_AP_InvoiceH.financereceiptdate"  ref="ref_financereceiptdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OndocumentcompleteddateChange" :prop="PI_documentcompleteddate" v-model="M_AP_InvoiceH.documentcompleteddate"  ref="ref_documentcompleteddate" />
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
                initialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},
            sOutstandingAmt: '',  			

            M_AP_InvoiceH :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                creditorcd: '',
                runningcd: '',
                creditno: '',
                creditdate: '',
                journaldate: '',
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '0',
                trxamt: 0,
                discountamt: 0,
                netamt: 0,
                vatamt: 0,
                linkreversalinvoice: '',
                companyreceiptdate: '',
                financereceiptdate: '',
                documentcompleteddate: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                amountafterdiscount: 0,
                totalamt: 0,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                runningcddescs: '',
                creditorname: '',
                dueday: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
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
                cLabel: 'Creditor Code ', 
                cKey: false, 
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
                    InitialWhere: "ModuleCd IS NULL	OR ModuleCd = 'AP'"   , 
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
            PI_creditno: { 
                cValidate :'required', 
                cName: 'creditno', 
                cLabel: 'Invoice No ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditdate: { 
                cValidate :'required', 
                cName: 'creditdate', 
                cLabel: 'Invoice Date ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_journaldate: { 
                cValidate :'required', 
                cName: 'journaldate', 
                cLabel: 'Journal Date ', 
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
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditTermsCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms ', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd' ,
            }, 
            PI_duedate: { 
                cValidate :'', 
                cName: 'duedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
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
                cKey: false, 
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
                cDisplayColumn: 'CurrencyCd' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate ', 
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
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'decimal',
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
                cOrder: 14, 
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
                cOrder: 10, 
                cKey: true, 
                cType: 'decimal',
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
                cOrder: 11, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
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
            PI_linkreversalinvoice: { 
                cValidate :'', 
                cName: 'linkreversalinvoice', 
                cLabel: 'Link Reversal Invoice', 
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
            PI_companyreceiptdate: { 
                cValidate :'', 
                cName: 'companyreceiptdate', 
                cLabel: 'Company Receipt Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_financereceiptdate: { 
                cValidate :'', 
                cName: 'financereceiptdate', 
                cLabel: 'Finance Receipt Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_documentcompleteddate: { 
                cValidate :'', 
                cName: 'documentcompleteddate', 
                cLabel: 'Document Completed Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
        GetCreditorData(){
          var param = {
              OptionFunctionCd: "GetCreditorData",
              ModuleCd: this.Module,
              CreditorCd: this.M_AP_InvoiceH.creditorcd,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
          .then(ress => {
              if (ress == null) return              
              if(ress[0].CurrencyCd != ''){                
                this.sOutstandingAmt = "This creditor has Outstanding Advance/Deposit/DN to account : "+ ress[0].CurrencyCd + " " + this.isCurrency(ress[0].OutstandingAmt, this.decimal)  +""
              }else{
                this.sOutstandingAmt = ''
              } 
                            
          })
        },
        GetCurrencyRate (){
          if (
              (this.M_AP_InvoiceH.currencycd && this.M_AP_InvoiceH.currencycd != '') && 
              (this.M_AP_InvoiceH.creditdate && this.M_AP_InvoiceH.creditdate != '')
              ) {
                this.FnGetCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.M_AP_InvoiceH.creditdate, this.M_AP_InvoiceH.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_InvoiceH.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })

                this.FnGetTaxCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.M_AP_InvoiceH.creditdate, this.M_AP_InvoiceH.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_InvoiceH.taxcurrencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })
            }
        },        	
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_InvoiceH.creditorcd = data.id
            this.M_AP_InvoiceH.creditorcdLabel = data.label
            this.GetCreditorData()
            if (this.inputStatus != "VIEW") {
              
            }
        })
        this.$forceUpdate()
        },
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_InvoiceH.runningcd = data.id
            this.M_AP_InvoiceH.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_AP_InvoiceH.creditno = "(auto)"
              this.PI_creditno.cProtect = true
            }
        })
        this.$forceUpdate()
        },
        OncreditnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{creditno}
            }
        })
        this.$forceUpdate()
        },
        OncreditdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              this.M_AP_InvoiceH.journaldate = data              
              this.GetCurrencyRate()
            }
        })
        this.$forceUpdate()
        },
        OnjournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{creditdate}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_AP_InvoiceH.credittermscd = data.id
            this.M_AP_InvoiceH.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetCreditTermsData(data.id).then(dt => {
                    if (dt != null) {
                        var data = dt[0]                        
                        this.M_AP_InvoiceH.duedate = data.Dueday                        
                        if (data.Dueday != null && data.Dueday != '') {                            
                            this.M_AP_InvoiceH.dudate = this.dateAdd( this.M_AP_InvoiceH.journaldate, data.Dueday )
                        }
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OnduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{duedate}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
          if (this.M_AP_InvoiceH.currencycd == data.id) return
        this.$nextTick(() => {
            this.M_AP_InvoiceH.currencycd = data.id
            this.M_AP_InvoiceH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetCurrencyRate()
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
        OncompanyreceiptdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companyreceiptdate}
            }
        })
        this.$forceUpdate()
        },
        OnfinancereceiptdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companyreceiptdate}
            }
        })
        this.$forceUpdate()
        },
        OndocumentcompleteddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companyreceiptdate}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
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
        M_Post(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                dataPost.push({
                    _Message_: "Invoice No = "+value.InvoiceNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId,
                    Source: 'I'
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
        M_Insert() {
            if (this.M_AP_InvoiceH.runningcd && this.M_AP_InvoiceH.runningcd != "") {
              this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.M_AP_InvoiceH.runningcd,this.getDataUser().UserId,this.M_AP_InvoiceH.creditdate)
                .then(dt => {                  
                  this.M_AP_InvoiceH.creditno = dt.RunningCode
                  var param = {			
                      OptionSeq: this.getOptionSeq().OptionSeq,
                      LineNo: this.$parent.data.PageOrder,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      ModuleCd: 'AP',
                      // BatchNo: this.M_AP_InvoiceH.batchno == '' || this.M_AP_InvoiceH.batchno == null ? 'NULL' : this.M_AP_InvoiceH.batchno,
                      BatchNo: 0,
                      Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                      CreditorCd: this.M_AP_InvoiceH.creditorcd == '' || this.M_AP_InvoiceH.creditorcd == null ? 'NULL' : this.M_AP_InvoiceH.creditorcd ,                      
                      RunningCd: this.M_AP_InvoiceH.runningcd == '' || this.M_AP_InvoiceH.runningcd == null ? 'NULL' : this.M_AP_InvoiceH.runningcd ,
                      CreditNo: this.M_AP_InvoiceH.creditno == '' || this.M_AP_InvoiceH.creditno == null ? 'NULL' : this.M_AP_InvoiceH.creditno ,
                      CreditDate: this.M_AP_InvoiceH.creditdate == '' || this.M_AP_InvoiceH.creditdate == null ? 'NULL' : this.M_AP_InvoiceH.creditdate ,
                      JournalDate: this.M_AP_InvoiceH.journaldate,
                      ReferenceNo: this.M_AP_InvoiceH.referenceno,
                      CreditTermsCd: this.M_AP_InvoiceH.credittermscd == '' || this.M_AP_InvoiceH.credittermscd == null ? 'NULL' : this.M_AP_InvoiceH.credittermscd ,
                      Descs: this.M_AP_InvoiceH.descs,
                      CurrencyCd: this.M_AP_InvoiceH.currencycd == '' || this.M_AP_InvoiceH.currencycd == null ? 'NULL' : this.M_AP_InvoiceH.currencycd ,
                      CurrencyRate: this.M_AP_InvoiceH.currencyrate ? this.replaceAllString(this.M_AP_InvoiceH.currencyrate,',','','number') : 0 ,
                      TaxCurrencyRate: this.M_AP_InvoiceH.taxcurrencyrate ? this.replaceAllString(this.M_AP_InvoiceH.taxcurrencyrate,',','','number') : 0 ,
                      LinkReversalInvoice: this.M_AP_InvoiceH.linkreversalinvoice,
                      CompanyReceiptDate: this.M_AP_InvoiceH.companyreceiptdate == '' || this.M_AP_InvoiceH.companyreceiptdate == null ? 'NULL' : this.M_AP_InvoiceH.companyreceiptdate ,
                      FinanceReceiptDate: this.M_AP_InvoiceH.financereceiptdate,
                      DocumentCompletedDate: this.M_AP_InvoiceH.documentcompleteddate,
                      Remarks: this.M_AP_InvoiceH.remarks,
                      UserInput: this.getDataUser().UserId 
                  }

                  this.postJSON(this.getUrlInsert(), param)
                  .then((response) => {
                      if(response == null) return				
                      this.$parent.resultInsert(response.Message)				
                  })
                })
            } else {
              var param = {			
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ModuleCd: 'AP',
                  // BatchNo: this.M_AP_InvoiceH.batchno == '' || this.M_AP_InvoiceH.batchno == null ? 'NULL' : this.M_AP_InvoiceH.batchno ,
                  BatchNo: 0,
                  Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                  CreditorCd: this.M_AP_InvoiceH.creditorcd == '' || this.M_AP_InvoiceH.creditorcd == null ? 'NULL' : this.M_AP_InvoiceH.creditorcd ,                  
                  RunningCd: this.M_AP_InvoiceH.runningcd == '' || this.M_AP_InvoiceH.runningcd == null ? 'NULL' : this.M_AP_InvoiceH.runningcd ,
                  CreditNo: this.M_AP_InvoiceH.creditno == '' || this.M_AP_InvoiceH.creditno == null ? 'NULL' : this.M_AP_InvoiceH.creditno ,
                  CreditDate: this.M_AP_InvoiceH.creditdate == '' || this.M_AP_InvoiceH.creditdate == null ? 'NULL' : this.M_AP_InvoiceH.creditdate ,
                  JournalDate: this.M_AP_InvoiceH.journaldate,
                  ReferenceNo: this.M_AP_InvoiceH.referenceno,
                  CreditTermsCd: this.M_AP_InvoiceH.credittermscd == '' || this.M_AP_InvoiceH.credittermscd == null ? 'NULL' : this.M_AP_InvoiceH.credittermscd ,
                  Descs: this.M_AP_InvoiceH.descs,
                  CurrencyCd: this.M_AP_InvoiceH.currencycd == '' || this.M_AP_InvoiceH.currencycd == null ? 'NULL' : this.M_AP_InvoiceH.currencycd ,
                  CurrencyRate: this.M_AP_InvoiceH.currencyrate ? this.replaceAllString(this.M_AP_InvoiceH.currencyrate,',','','number') : 0 ,
                  TaxCurrencyRate: this.M_AP_InvoiceH.taxcurrencyrate ? this.replaceAllString(this.M_AP_InvoiceH.taxcurrencyrate,',','','number') : 0 ,
                  LinkReversalInvoice: this.M_AP_InvoiceH.linkreversalinvoice,
                  CompanyReceiptDate: this.M_AP_InvoiceH.companyreceiptdate == '' || this.M_AP_InvoiceH.companyreceiptdate == null ? 'NULL' : this.M_AP_InvoiceH.companyreceiptdate ,
                  FinanceReceiptDate: this.M_AP_InvoiceH.financereceiptdate,
                  DocumentCompletedDate: this.M_AP_InvoiceH.documentcompleteddate,
                  Remarks: this.M_AP_InvoiceH.remarks,
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
                CreditNo: this.M_AP_InvoiceH.creditno == '' || this.M_AP_InvoiceH.creditno == null ? 'NULL' : this.M_AP_InvoiceH.creditno ,
                CreditDate: this.M_AP_InvoiceH.creditdate == '' || this.M_AP_InvoiceH.creditdate == null ? 'NULL' : this.M_AP_InvoiceH.creditdate ,
                JournalDate: this.M_AP_InvoiceH.journaldate,
                CreditorCd: this.M_AP_InvoiceH.creditorcd == '' || this.M_AP_InvoiceH.creditorcd == null ? 'NULL' : this.M_AP_InvoiceH.creditorcd ,
                ReferenceNo: this.M_AP_InvoiceH.referenceno,
                CreditTermsCd: this.M_AP_InvoiceH.credittermscd == '' || this.M_AP_InvoiceH.credittermscd == null ? 'NULL' : this.M_AP_InvoiceH.credittermscd ,
                Descs: this.M_AP_InvoiceH.descs,
                CurrencyCd: this.M_AP_InvoiceH.currencycd == '' || this.M_AP_InvoiceH.currencycd == null ? 'NULL' : this.M_AP_InvoiceH.currencycd ,
                CurrencyRate: this.M_AP_InvoiceH.currencyrate ? this.replaceAllString(this.M_AP_InvoiceH.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_AP_InvoiceH.taxcurrencyrate ? this.replaceAllString(this.M_AP_InvoiceH.taxcurrencyrate,',','','number') : 0 ,
                LinkReversalInvoice: this.M_AP_InvoiceH.linkreversalinvoice,
                CompanyReceiptDate: this.M_AP_InvoiceH.companyreceiptdate == '' || this.M_AP_InvoiceH.companyreceiptdate == null ? 'NULL' : this.M_AP_InvoiceH.companyreceiptdate ,
                FinanceReceiptDate: this.M_AP_InvoiceH.financereceiptdate,
                DocumentCompletedDate: this.M_AP_InvoiceH.documentcompleteddate,
                Remarks: this.M_AP_InvoiceH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_InvoiceH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return				
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_InvoiceH = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                creditorcd: '',
                runningcd: '',
                creditno: '',
                creditdate: this.getToday(),
                journaldate: this.getToday(),
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '0',
                trxamt: 0,
                discountamt: 0,
                netamt: 0,
                vatamt: 0,
                linkreversalinvoice: '',
                companyreceiptdate: '',
                financereceiptdate: '',
                documentcompleteddate: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                amountafterdiscount: 0,
                totalamt: 0,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                runningcddescs: '',
                creditorname: '',
                dueday: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
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
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    CreditNo: value.InvoiceNo == '' || value.InvoiceNo == null ? 'NULL' : value.InvoiceNo ,
                    Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo ,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: record.InvoiceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)

this.M_AP_InvoiceH = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                source: data.source,
                creditorcd: data.creditorcd,
                runningcd: data.runningcd,
                creditno: data.creditno,
                creditdate: data.creditdate,
                journaldate: data.journaldate,
                duedate: data.duedate,
                referenceno: data.referenceno,
                credittermscd: data.credittermscd,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                linkreversalinvoice: data.linkreversalinvoice,
                companyreceiptdate: data.companyreceiptdate,
                financereceiptdate: data.financereceiptdate,
                documentcompleteddate: data.documentcompleteddate,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                amountafterdiscount: this.isCurrency(data.amountafterdiscount, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                documentcount: this.isCurrency(data.documentcount, this.decimal),
                batchtotal: this.isCurrency(data.batchtotal, this.decimal),
                batchstatus: data.batchstatus,
                runningcddescs: data.runningcddescs,
                creditorname: data.creditorname,
                dueday: this.isCurrency(data.dueday, this.decimal),
                currentbatchtotal: this.isCurrency(data.currentbatchtotal, this.decimal),
                currentdocumentcount: this.isCurrency(data.currentdocumentcount, this.decimal),
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
            

                this.M_AP_InvoiceH.creditorcdLabel = this.M_AP_InvoiceH.creditorcd != null && this.M_AP_InvoiceH.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_InvoiceH.runningcdLabel = this.M_AP_InvoiceH.runningcd != null && this.M_AP_InvoiceH.runningcd != '' ? data.runningcd + this.separator + data.runningcddescs :'' 
                this.M_AP_InvoiceH.credittermscdLabel = this.M_AP_InvoiceH.credittermscd != null && this.M_AP_InvoiceH.credittermscd != '' ? data.credittermscd :'' 
                this.M_AP_InvoiceH.currencycdLabel = this.M_AP_InvoiceH.currencycd != null && this.M_AP_InvoiceH.currencycd != '' ? data.currencycd  :'' 


                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                if(record.BatchStatus == 'Balance'){
                  this.PI_creditorcd.cProtect = true
                }else{
                  this.PI_creditorcd.cProtect = false
                }

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

