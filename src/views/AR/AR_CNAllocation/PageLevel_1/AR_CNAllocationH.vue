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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_CNAllocationH.batchno" :label="M_AR_CNAllocationH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputCheckBox @input="OnstatusChange" :prop="PI_status" v-model="M_AR_CNAllocationH.status"  ref="ref_status" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_CNAllocationH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_CNAllocationH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_CNAllocationH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_CNAllocationH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_CNAllocationH.trxtype" :label="M_AR_CNAllocationH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_trxtypedescs" v-model="M_AR_CNAllocationH.trxtypedescs"  ref="ref_trxtypedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_CNAllocationH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OncreditnoChange" :prop="PI_creditno" v-model="M_AR_CNAllocationH.creditno"  ref="ref_creditno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AR_CNAllocationH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_CNAllocationH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_CNAllocationH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_CNAllocationH.debtorcd" :label="M_AR_CNAllocationH.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_CNAllocationH.currencycd" :label="M_AR_CNAllocationH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_CNAllocationH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Allocation
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_CNAllocationH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalnetallocated" v-model="M_AR_CNAllocationH.totalnetallocated"  ref="ref_totalnetallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatpaidbycustomer" v-model="M_AR_CNAllocationH.vatpaidbycustomer"  ref="ref_vatpaidbycustomer"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalvatallocated" v-model="M_AR_CNAllocationH.totalvatallocated"  ref="ref_totalvatallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingpaidbycustomer" v-model="M_AR_CNAllocationH.withholdingpaidbycustomer"  ref="ref_withholdingpaidbycustomer"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalwithholdingallocated" v-model="M_AR_CNAllocationH.totalwithholdingallocated"  ref="ref_totalwithholdingallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AR_CNAllocationH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AR_CNAllocationH.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AR_CNAllocationH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AR_CNAllocationH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CNAllocationH.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            RunningCd: '',

            M_AR_CNAllocationH :{
                batchno: 0,
                referenceno: '',
                debtorcd: '',
                trxtype: '',
                creditno: '',
                creditdate: this.M_FormatingDate(new Date()),
                descs: '',
                currencycd: '',
                currencyrate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                allocatedamt: 0,
                creditamt: 0,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                totalnetallocated: 0,
                totalvatallocated: 0,
                totalwithholdingallocated: 0,
                forexgainlossamt: '',
                status: '',
                lastupdatestamp: 0,
                vatpaidbycustomer: '',
                withholdingpaidbycustomer: '',
                totalallocationamt: 0,
                trxtypedescs: '',
                basecurrencycd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0,
                balanceamt:0
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
            PI_currentdocumentcount: { 
                cLabel: 'Curr. Doc. Count', 
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
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TRXCLASS='M'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_trxtypedescs: { 
                cLabel: 'Trans. Type Descs', 
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
            PI_creditno: { 
                cValidate :'max:20', 
                cName: 'creditno', 
                cLabel: 'CN Allocation No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditdate: { 
                cValidate :'required', 
                cName: 'creditdate', 
                cLabel: 'Allocation Date', 
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
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:4, 
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
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
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
                cLabel: 'Currency', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
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
            PI_creditamt: { 
                cValidate :'', 
                cName: 'creditamt', 
                cLabel: 'Credit Note Amount', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_totalnetallocated: { 
                cValidate :'', 
                cName: 'totalnetallocated', 
                cLabel: 'Net Allocated', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_vatpaidbycustomer: { 
                cValidate :'', 
                cName: 'vatpaidbycustomer', 
                cLabel: 'VAT Paid By Debtor', 
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
            PI_totalvatallocated: { 
                cValidate :'', 
                cName: 'totalvatallocated', 
                cLabel: 'VAT Allocated', 
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
            PI_withholdingpaidbycustomer: { 
                cValidate :'', 
                cName: 'withholdingpaidbycustomer', 
                cLabel: 'Withholding Paid By Debtor', 
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
            PI_totalwithholdingallocated: { 
                cValidate :'', 
                cName: 'totalwithholdingallocated', 
                cLabel: 'Withholding Allocated', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_totalallocationamt: { 
                cValidate :'', 
                cName: 'totalallocationamt', 
                cLabel: 'Total Allocation Amount', 
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
            PI_allocatedamt: { 
                cValidate :'', 
                cName: 'allocatedamt', 
                cLabel: 'Total Allocated', 
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
            PI_forexgainlossamt: { 
                cValidate :'', 
                cName: 'forexgainlossamt', 
                cLabel: 'Forex', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder: 17, 
                cKey: false, 
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
            },
        isError: false
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
            this.FnGetCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_AR_CNAllocationH.creditdate, CurrencyCd)
              .then(ress => {
                  if (ress != null) {
                      this.M_AR_CNAllocationH.currencyrate = ress.CurrencyRate 
                  }                      
              })
        }
      },
      GetAllocationTrxTypeData(TrxType){
        this.FnIsValidTrxType(this.getDataUser().SubPortfolioCd,TrxType,'AR','M')
            .then(dt => {
                if (dt.length == 0) return

                      if(parseInt(dt.Count)==0){
                        this.alertError('Invalid Allocation Trans. Type')
                        this.isError = true
                      }else{
                        this.isError = false
                        this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,this.Module,TrxType).then(dt => 
                        { if (dt != null) { 
                          var dt25 = dt[0]
                             this.M_AR_CNAllocationH.descs = dt25.TrxTypeDescs
                             this.M_AR_CNAllocationH.trxtypedescs = dt25.TrxTypeDescs
                             if (dt25.RunningCd != "")
                                  { this.PI_creditno.cProtect = true
                                  this.M_AR_CNAllocationH.creditno = "(auto)"
                                  this.RunningCd = dt25.RunningCd }
                        else {
                             this.PI_creditno.cProtect = false
                                  this.M_AR_CNAllocationH.creditno = ""
                                  this.RunningCd = "" } } })

                }
        
            })

        },
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNAllocationH.batchno = data.id
            this.M_AR_CNAllocationH.batchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{batchno}
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
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNAllocationH.trxtype = data.id
            this.M_AR_CNAllocationH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetAllocationTrxTypeData(data.id)
      

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
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNAllocationH.debtorcd = data.id
            this.M_AR_CNAllocationH.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNAllocationH.currencycd = data.id
            this.M_AR_CNAllocationH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetCurrencyRate(data.id)
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
           this.getToolbar().statusFunction[4].disabled = false
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
                    _Message_: "Credit No = "+value.CreditNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId,
                    Source: value.Source
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
          if(this.isError == true){
            this.alertError('Invalid Allocation Trans. Type')
            return
          }
        if (this.RunningCd != "")
             { this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AR_CNAllocationH.creditdate).then(dt9 =>
         { if (dt9 != null) {
                  this.M_AR_CNAllocationH.creditno = dt9.RunningCode
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_CNAllocationH.batchno == '' || this.M_AR_CNAllocationH.batchno == null ? 0 : this.M_AR_CNAllocationH.batchno ,
                Source: 'Z',
                DebtorCd: this.M_AR_CNAllocationH.debtorcd == '' || this.M_AR_CNAllocationH.debtorcd == null ? 'NULL' : this.M_AR_CNAllocationH.debtorcd ,
                TrxType: this.M_AR_CNAllocationH.trxtype == '' || this.M_AR_CNAllocationH.trxtype == null ? 'NULL' : this.M_AR_CNAllocationH.trxtype ,
                ModuleCd: this.Module,
                CreditNo: this.M_AR_CNAllocationH.creditno == '' || this.M_AR_CNAllocationH.creditno == null ? 'NULL' : this.M_AR_CNAllocationH.creditno ,
                CreditDate: this.M_AR_CNAllocationH.creditdate,
                Descs: this.M_AR_CNAllocationH.descs,
                CurrencyCd: this.M_AR_CNAllocationH.currencycd == '' || this.M_AR_CNAllocationH.currencycd == null ? 'NULL' : this.M_AR_CNAllocationH.currencycd ,
                CurrencyRate: this.M_AR_CNAllocationH.currencyrate ? this.replaceAllString(this.M_AR_CNAllocationH.currencyrate,',','','number') : 0 ,
                ReferenceNo: this.M_AR_CNAllocationH.referenceno,
                Status: this.ARFieldHelper.CREDIT_HEADER_STATUS_ERROR,
                Remarks: this.M_AR_CNAllocationH.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
           } })  }
        else {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_CNAllocationH.batchno == '' || this.M_AR_CNAllocationH.batchno == null ? 'NULL' : this.M_AR_CNAllocationH.batchno ,
                Source: 'Z',
                DebtorCd: this.M_AR_CNAllocationH.debtorcd == '' || this.M_AR_CNAllocationH.debtorcd == null ? 'NULL' : this.M_AR_CNAllocationH.debtorcd ,
                TrxType: this.M_AR_CNAllocationH.trxtype == '' || this.M_AR_CNAllocationH.trxtype == null ? 'NULL' : this.M_AR_CNAllocationH.trxtype ,
                ModuleCd: this.Module,
                CreditNo: this.M_AR_CNAllocationH.creditno == '' || this.M_AR_CNAllocationH.creditno == null ? 'NULL' : this.M_AR_CNAllocationH.creditno ,
                CreditDate: this.M_AR_CNAllocationH.creditdate,
                Descs: this.M_AR_CNAllocationH.descs,
                CurrencyCd: this.M_AR_CNAllocationH.currencycd == '' || this.M_AR_CNAllocationH.currencycd == null ? 'NULL' : this.M_AR_CNAllocationH.currencycd ,
                CurrencyRate: this.M_AR_CNAllocationH.currencyrate ? this.replaceAllString(this.M_AR_CNAllocationH.currencyrate,',','','number') : 0 ,
                ReferenceNo: this.M_AR_CNAllocationH.referenceno,
                Status: this.ARFieldHelper.CREDIT_HEADER_STATUS_ERROR,
                Remarks: this.M_AR_CNAllocationH.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
      }

        },
        M_Update() {
          if(this.isError == true){
            this.alertError('Invalid Allocation Trans. Type')
            return
          }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_CNAllocationH.creditno == '' || this.M_AR_CNAllocationH.creditno == null ? 'NULL' : this.M_AR_CNAllocationH.creditno ,
                TrxType: this.M_AR_CNAllocationH.trxtype == '' || this.M_AR_CNAllocationH.trxtype == null ? 'NULL' : this.M_AR_CNAllocationH.trxtype ,
                DebtorCd: this.M_AR_CNAllocationH.debtorcd == '' || this.M_AR_CNAllocationH.debtorcd == null ? 'NULL' : this.M_AR_CNAllocationH.debtorcd ,
                CreditDate: this.M_AR_CNAllocationH.creditdate,
                Descs: this.M_AR_CNAllocationH.descs,
                CurrencyCd: this.M_AR_CNAllocationH.currencycd == '' || this.M_AR_CNAllocationH.currencycd == null ? 'NULL' : this.M_AR_CNAllocationH.currencycd ,
                CurrencyRate: this.M_AR_CNAllocationH.currencyrate ? this.replaceAllString(this.M_AR_CNAllocationH.currencyrate,',','','number') : 0 ,
                ReferenceNo: this.M_AR_CNAllocationH.referenceno,
                Remarks: this.M_AR_CNAllocationH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CNAllocationH.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CNAllocationH = {
                batchno: 0,
                referenceno: '',
                debtorcd: '',
                trxtype: '',
                creditno: '',
                creditdate: this.M_FormatingDate(new Date()),
                descs: '',
                currencycd: '',
                currencyrate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                allocatedamt: 0,
                creditamt: 0,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                totalnetallocated: 0,
                totalvatallocated: 0,
                totalwithholdingallocated: 0,
                forexgainlossamt: 0,
                status: '',
                lastupdatestamp: 0,
                vatpaidbycustomer: '',
                withholdingpaidbycustomer: '',
                totalallocationamt: 0,
                trxtypedescs: '',
                basecurrencycd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0,
                balanceamt:0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
          var param = {
                    OptionFunctionCd: "GetDetailCount_CNAllocation",
                    ModuleCd: this.Module,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    CreditNo: this.DataRow.CreditNo
                  }

                  this.FnDynamicFunction(param)
                  .then(ress => {
                    if (ress == null ||ress.length == 0) return
                
                    var data = ress[0]
                    if(parseInt(data.N0) > 1 ){
                        this.PI_debtorcd.cProtect = true
                        this.PI_currencycd.cProtect = true
                        this.PI_currencyrate.cProtect = true
                        this.PI_creditdate.cProtect = true
                    }else{
                        this.PI_debtorcd.cProtect = false
                        this.PI_currencycd.cProtect = false
                        this.PI_currencyrate.cProtect = false
                        this.PI_creditdate.cProtect = false
                    }
                  })
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CreditNo: value.CreditNo,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                creditno: record.CreditNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_CNAllocationH = {
                batchno: data.batchno,
                referenceno: data.referenceno,
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                creditno: data.creditno,
                creditdate: data.creditdate,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                debtorname: data.debtorname,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                totalnetallocated: this.isCurrency(data.totalnetallocated, this.decimal),
                totalvatallocated: this.isCurrency(data.totalvatallocated, this.decimal),
                totalwithholdingallocated: this.isCurrency(data.totalwithholdingallocated, this.decimal),
                forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
                status: data.status,
                lastupdatestamp: record.LastUpdateStamp,
                vatpaidbycustomer: this.isCurrency(data.vatpaidbycustomer, this.decimal),
                withholdingpaidbycustomer: this.isCurrency(data.withholdingpaidbycustomer, this.decimal),
                totalallocationamt: this.isCurrency(data.totalallocationamt, this.decimal),
                trxtypedescs: data.trxtypedescs,
                basecurrencycd: data.basecurrencycd,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                rowid: data.rowid
                    }
                 console.log(data.basecurrencycd +' == '+data.currencycd)
                 console.log((this.M_AR_CNAllocationH.totalallocationamt))
                 console.log(this.M_AR_CNAllocationH.forexgainlossamt)
                 console.log(this.M_AR_CNAllocationH.allocatedamt)
                 if(data.basecurrencycd == data.currencycd){

                   this.M_AR_CNAllocationH.balanceamt = this.isCurrency((parseInt(this.M_AR_CNAllocationH.totalallocationamt) - parseInt(this.M_AR_CNAllocationH.forexgainlossamt)) - parseInt(this.M_AR_CNAllocationH.allocatedamt) ,this.decimal)
                 }else{
                   this.M_AR_CNAllocationH.balanceamt = this.isCurrency(parseInt(this.M_AR_CNAllocationH.totalallocationamt) - parseInt(this.M_AR_CNAllocationH.allocatedamt) ,this.decimal)
                 }
                

                this.M_AR_CNAllocationH.batchnoLabel = this.M_AR_CNAllocationH.batchno != null && this.M_AR_CNAllocationH.batchno != '' ? data.batchno + this.separator  :'' 
                this.M_AR_CNAllocationH.trxtypeLabel = this.M_AR_CNAllocationH.trxtype != null && this.M_AR_CNAllocationH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AR_CNAllocationH.debtorcdLabel = this.M_AR_CNAllocationH.debtorcd != null && this.M_AR_CNAllocationH.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_CNAllocationH.currencycdLabel = this.M_AR_CNAllocationH.currencycd != null && this.M_AR_CNAllocationH.currencycd != '' ? data.currencycd :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
  // this.$store.commit('setFormType','List')
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

