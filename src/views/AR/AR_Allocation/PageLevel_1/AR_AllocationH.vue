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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_AllocationH.batchno" :label="M_AR_AllocationH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col  md="3">
                                        <ABSinputCheckBox @input="OnstatusChange" :prop="PI_status" v-model="M_AR_AllocationH.status"  ref="ref_status" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_AllocationH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_AllocationH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_AllocationH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_AllocationH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_AllocationH.trxtype" :label="M_AR_AllocationH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_trxtypedescs" v-model="M_AR_AllocationH.trxtypedescs"  ref="ref_trxtypedescs" />
                                      </b-col> -->
                                      <!-- <b-col md="3">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_AllocationH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_AllocationH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AR_AllocationH.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AR_AllocationH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_AllocationH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditreferencenoChange" :prop="PI_creditreferenceno" :value="M_AR_AllocationH.creditreferenceno" :label="M_AR_AllocationH.creditreferencenoLabel" ref="ref_creditreferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_creditdocdate" v-model="M_AR_AllocationH.creditdocdate"  ref="ref_creditdocdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_AllocationH.debtorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debtorname" v-model="M_AR_AllocationH.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditreferencedescs" v-model="M_AR_AllocationH.creditreferencedescs"  ref="ref_creditreferencedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_AllocationH.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_AllocationH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Receipt
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_AllocationH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalnetallocated" v-model="M_AR_AllocationH.totalnetallocated"  ref="ref_totalnetallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatpaidbycustomer" v-model="M_AR_AllocationH.vatpaidbycustomer"  ref="ref_vatpaidbycustomer"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalvatallocated" v-model="M_AR_AllocationH.totalvatallocated"  ref="ref_totalvatallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingpaidbycustomer" v-model="M_AR_AllocationH.withholdingpaidbycustomer"  ref="ref_withholdingpaidbycustomer"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalwithholdingallocated" v-model="M_AR_AllocationH.totalwithholdingallocated"  ref="ref_totalwithholdingallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnoverpaymentamtChange" :prop="PI_overpaymentamt" v-model="M_AR_AllocationH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnunderpaymentamtChange" :prop="PI_underpaymentamt" v-model="M_AR_AllocationH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AR_AllocationH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocated" v-model="M_AR_AllocationH.totalallocated"  ref="ref_totalallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AR_AllocationH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AR_AllocationH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnautoallocateChange" :prop="PI_autoallocate" v-model="M_AR_AllocationH.autoallocate"  ref="ref_autoallocate" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AllocationH.remarks"  ref="ref_remarks" />
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
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            RunningCd: '',

            M_AR_AllocationH :{
                batchno: 0,
                balanceamt: '0.00',
                cashierno: '',
                trxtype: '',
                trxtypeLabel: '',
                trxtype: '',
                creditno: '',
                creditdate: this.momentDate(new Date()),
                debtorcd: '',
                debtorcdLabel: '',
                descs: '',
                creditreferenceno: '',
                creditreferencedescs: '',
                currencycd: '',
                currencyrate: '',
                creditamt: '0.00',
                vatpaidbycustomer: '0.00',
                withholdingpaidbycustomer: '0.00',
                totalallocated: '0.00',
                totalallocationamt: '0.00',
                bankchargesamt: '',
                overpaymentamt: '0.00',
                underpaymentamt: '0.00',
                allocatedamt: '0.00',
                autoallocate: 'N',
                forexgainlossamt: '0.00',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                totalnetallocated: '0.00',
                totalvatallocated: '0.00',
                totalwithholdingallocated: '0.00',
                trxtypedescs: '',
                lastupdatestamp: '',
                withholdingtreatment: '',
                debtorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                basecurrencycd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0,
                runningcd: ''
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
                cVisible: true, 
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
            PI_trxtype: { 
              dataLookUp: {
                LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                ColumnDB: "TrxType",
                InitialWhere:
                  "SUBPORTFOLIOCD = '" +
                  this.getDataUser().SubPortfolioCd +
                  "' AND MODULECD = 'AR' AND TRXCLASS = 'M'",
                ParamWhere: ""
              },
              cValidate: "required",
              cName: "trxtype",
              cLabel: "Trans. Type ",
              cKey: false,
              cLabelSize: 4,
              cOrder: 0,
              cTriggered: false,
              cDefault: "",
              cProtect: false,
              cVisible: true,
              cAsync: false,
              cFilter: true,
              cPageLevel: this.PageLevel,
              cTabIndex: this.TabIndex,
              cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
              cStatic: false,
              cOption: [],
              cMasterUrl: "AR/AR_TransactionTypeSubPortfolioMaintenance",
              cDisplayColumn: "TransactionType,Descs"
            }, 
            PI_trxtypedescs: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_creditno: { 
                cValidate :'required|max:20', 
                cName: 'creditno', 
                cLabel: 'Allocation No', 
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
            PI_creditdate: { 
                cValidate :'required', 
                cName: 'creditdate', 
                cLabel: 'Allocation Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditreferenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARCreditDocNoWithBalance'    , 
                    ColumnDB: 'CreditNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND BalanceAmount > 0"   , 
                    ParamWhere: ''  ,
                    SourceField: "DocNo=CreditNo,DocDate=CreditDate,DebtorCd,Name,DocSource=DocSource,Balance=BalanceAmt,TimeEdit",
                    DisplayLookUp: "DocNo,DocDate"
                        }, 
                cValidate :'required', 
                cName: 'creditreferenceno', 
                cLabel: 'Credit Doc. No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DocNo,DocDate' ,
            }, 
            PI_creditdocdate: { 
              cValidate :'', 
              cName: 'creditdocdate', 
              cLabel: 'Credit Doc. Date ',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cVisible:  true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_debtorname: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_creditreferencedescs: { 
                cValidate :'', 
                cName: 'creditreferencedescs', 
                cLabel: 'Description', 
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
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_currencyrate: { 
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_creditamt: { 
                cLabel: 'Credit Balance Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_totalnetallocated: { 
                cLabel: 'Net Allocated', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_vatpaidbycustomer: { 
                cLabel: 'VAT Paid By Debtor', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_totalvatallocated: { 
                cLabel: 'VAT Allocated', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_withholdingpaidbycustomer: { 
                cLabel: 'Withholding Paid By Debtor', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_totalwithholdingallocated: { 
                cLabel: 'Withholding Allocated', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
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
            PI_totalallocationamt: { 
                cLabel: 'Total Allocation Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_totalallocated: { 
                cLabel: 'Total Allocated', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_forexgainlossamt: { 
                cLabel: 'Forex', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_balanceamt: { 
                cLabel: 'Balance Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cDecimal: 2,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_autoallocate: { 
                cValidate :'', 
                cName: 'autoallocate', 
                cLabel: 'Auto Alocated', 
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
            this.M_AR_AllocationH.batchno = data.id
            this.M_AR_AllocationH.batchnoLabel = data.label
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
          this.M_AR_AllocationH.trxtype = data.id
          this.M_AR_AllocationH.trxtypeLabel = data.label
          if (this.inputStatus != "VIEW") {
            this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
              if (dt != null) { 
                var dta = dt[0]
                this.M_AR_AllocationH.runningcd = dta.RunningCd
                this.M_AR_AllocationH.trxtypeLabel = data.id + this.separator + dta.TrxTypeDescs
                this.M_AR_AllocationH.descs = dta.TrxTypeDescs

                if (this.inputStatus != "EDIT") {
                  if (dta.RunningCd && dta.RunningCd != '') {
                    this.RunningCd = dta.RunningCd
                    this.M_AR_AllocationH.creditno = "(auto)"
                    this.PI_creditno.cProtect = true
                  }
                  else {
                    this.M_AR_AllocationH.creditno = ""
                    this.PI_creditno.cProtect = false
                    this.M_AR_AllocationH.runningcd = ""
                  }
                }
              }
            })
          }
        })
        this.$forceUpdate()
        },
        OncreditdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{creditdate}
            }
        })
        this.$forceUpdate()
        },
        OnoverpaymentamtChange (data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              this.CalculateTotalAllocationAmount()
            }
          })
          this.$forceUpdate()
        },
        OnunderpaymentamtChange (data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              this.CalculateTotalAllocationAmount()
            }
          })
          this.$forceUpdate()
        },
        OncreditreferencenoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AllocationH.creditreferenceno = data.id
            this.M_AR_AllocationH.creditreferencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
              var param = {
                OptionFunctionCd: "GetCreditDocData",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditDocNo: data.id,
                CurrentCreditNo: ""
              }

              this.FnDynamicFunction(param)
              .then(ress => {
                if (ress == null) return
                if (ress.length < 1) return

                var datas = ress[0]
                var allocatedamt = this.replaceAllString(this.M_AR_AllocationH.totalallocated, ',', '', 'number')
                var totalallocationamt = parseFloat(datas.CreditBalanceAmt) + parseFloat(this.M_AR_AllocationH.vatpaidbycustomer) + parseFloat(this.M_AR_AllocationH.withholdingpaidbycustomer) - parseFloat(this.M_AR_AllocationH.overpaymentamt) + parseFloat(this.M_AR_AllocationH.underpaymentamt)
                this.M_AR_AllocationH.debtorcd = datas.DebtorCd
                this.M_AR_AllocationH.debtorcdLabel = datas.DebtorCd && datas.DebtorCd != "" ? datas.DebtorCd + this.separator + datas.DebtorName : ''
                this.M_AR_AllocationH.creditdocdate = datas.CreditDate
                this.M_AR_AllocationH.creditreferencedescs = datas.Descs
                this.M_AR_AllocationH.currencycd = datas.CurrencyCd
                this.M_AR_AllocationH.currencyrate = this.isCurrency(datas.CurrencyRate)
                this.M_AR_AllocationH.creditamt = this.isCurrency(datas.CreditBalanceAmt)
                this.M_AR_AllocationH.totalallocationamt = this.isCurrency(totalallocationamt)

                this.M_AR_AllocationH.balanceamt = this.isCurrency(parseFloat(totalallocationamt) - parseFloat(allocatedamt))
              })
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
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
	
        setToolbarButton () {
          this.getToolbar().statusFunction[4].text = 'Post'
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
        if (this.RunningCd != "") { 
          this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AR_AllocationH.creditdate).then(dt9 =>
            { if (dt9 != null) {
                  this.M_AR_AllocationH.creditno = dt9.RunningCode
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0 ,
                Source: "L",
                CreditReferenceNo: this.M_AR_AllocationH.creditreferenceno == '' || this.M_AR_AllocationH.creditreferenceno == null ? 'NULL' : this.M_AR_AllocationH.creditreferenceno ,
                DebtorCd: this.M_AR_AllocationH.debtorcd,
                TrxType: this.M_AR_AllocationH.trxtype,
                ModuleCd: this.Module,
                CreditNo: this.M_AR_AllocationH.creditno,
                CreditDate: this.M_AR_AllocationH.creditdate == '' || this.M_AR_AllocationH.creditdate == null ? 'NULL' : this.M_AR_AllocationH.creditdate ,
                Descs: this.M_AR_AllocationH.descs,
                CurrencyCd: this.M_AR_AllocationH.currencycd,
                CurrencyRate: this.M_AR_AllocationH.currencyrate ? this.replaceAllString(this.M_AR_AllocationH.currencyrate, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AR_AllocationH.overpaymentamt ? this.replaceAllString(this.M_AR_AllocationH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AR_AllocationH.underpaymentamt ? this.replaceAllString(this.M_AR_AllocationH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AR_AllocationH.remarks,
                UserInput: this.getDataUser().UserId ,
                AutoAllocate: this.M_AR_AllocationH.autoallocate
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
                BatchNo: 0 ,
                Source: "L",
                CreditReferenceNo: this.M_AR_AllocationH.creditreferenceno == '' || this.M_AR_AllocationH.creditreferenceno == null ? 'NULL' : this.M_AR_AllocationH.creditreferenceno ,
                DebtorCd: this.M_AR_AllocationH.debtorcd,
                TrxType: this.M_AR_AllocationH.trxtype,
                ModuleCd: this.Module,
                CreditNo: this.M_AR_AllocationH.creditno,
                CreditDate: this.M_AR_AllocationH.creditdate == '' || this.M_AR_AllocationH.creditdate == null ? 'NULL' : this.M_AR_AllocationH.creditdate ,
                Descs: this.M_AR_AllocationH.descs,
                CurrencyCd: this.M_AR_AllocationH.currencycd,
                CurrencyRate: this.M_AR_AllocationH.currencyrate ? this.replaceAllString(this.M_AR_AllocationH.currencyrate, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AR_AllocationH.overpaymentamt ? this.replaceAllString(this.M_AR_AllocationH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AR_AllocationH.underpaymentamt ? this.replaceAllString(this.M_AR_AllocationH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AR_AllocationH.remarks,
                UserInput: this.getDataUser().UserId ,
                AutoAllocate: this.M_AR_AllocationH.autoallocate
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_AllocationH.batchno == '' || this.M_AR_AllocationH.batchno == null ? 'NULL' : this.M_AR_AllocationH.batchno ,
                Source: "L",
                CreditNo: this.M_AR_AllocationH.creditno,
                CreditDate: this.M_AR_AllocationH.creditdate == '' || this.M_AR_AllocationH.creditdate == null ? 'NULL' : this.M_AR_AllocationH.creditdate ,
                Descs: this.M_AR_AllocationH.descs,
                TrxType: this.M_AR_AllocationH.trxtype,
                CreditBalanceAmt: this.M_AR_AllocationH.creditamt ? this.replaceAllString(this.M_AR_AllocationH.creditamt, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AR_AllocationH.overpaymentamt ? this.replaceAllString(this.M_AR_AllocationH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AR_AllocationH.underpaymentamt ? this.replaceAllString(this.M_AR_AllocationH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AR_AllocationH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AllocationH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_AllocationH = {
                batchno: 0,
                balanceamt: '0.00',
                cashierno: '',
                trxtype: '',
                trxtypeLabel: '',
                trxtype: '',
                creditno: '',
                creditdate: this.momentDate(new Date()),
                debtorcd: '',
                debtorcdLabel: '',
                descs: '',
                creditreferenceno: '',
                creditreferencedescs: '',
                currencycd: '',
                currencyrate: '',
                creditamt: '0.00',
                vatpaidbycustomer: '0.00',
                withholdingpaidbycustomer: '0.00',
                totalallocated: '0.00',
                totalallocationamt: '0.00',
                bankchargesamt: '',
                overpaymentamt: '0.00',
                underpaymentamt: '0.00',
                allocatedamt: '0.00',
                autoallocate: 'N',
                forexgainlossamt: '0.00',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                totalnetallocated: '0.00',
                totalvatallocated: '0.00',
                totalwithholdingallocated: '0.00',
                trxtypedescs: '',
                lastupdatestamp: '',
                withholdingtreatment: '',
                debtorname: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                basecurrencycd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0,
                runningcd: ''
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
              Source: 'L',
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
this.M_AR_AllocationH = {
                batchno: data.batchno,
                balanceamt: '',
                cashierno: data.cashierno,
                trxtype: data.trxtype,
                trxtypeLabel: data.trxtype,
                creditno: data.creditno,
                creditdate: data.creditdate,
                creditdocdate: data.creditdate,
                debtorcd: data.debtorcd,
                descs: data.descs,
                creditreferenceno: data.creditreferenceno,
                creditreferencedescs: '',
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                creditamt: this.isCurrency(data.creditamt),
                vatpaidbycustomer: this.isCurrency(data.vatpaidbycustomer),
                withholdingpaidbycustomer: this.isCurrency(data.withholdingpaidbycustomer),
                totalallocated: this.isCurrency(data.allocatedamt),
                totalallocationamt: '', 
                autoallocate: 'N',
                bankchargesamt: this.isCurrency(data.bankchargesamt),
                overpaymentamt: this.isCurrency(data.overpaymentamt),
                underpaymentamt: this.isCurrency(data.underpaymentamt),
                allocatedamt: this.isCurrency(data.allocatedamt),
                forexgainlossamt: this.isCurrency(data.forexgainlossamt),
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                totalnetallocated: this.isCurrency(data.totalnetallocated),
                totalvatallocated: this.isCurrency(data.totalvatallocated),
                totalwithholdingallocated: this.isCurrency(data.totalwithholdingallocated),
                trxtypedescs: data.trxtypedescs,
                lastupdatestamp: record.LastUpdateStamp,
                withholdingtreatment: data.withholdingtreatment,
                debtorname: data.debtorname,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                basecurrencycd: data.basecurrencycd,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                rowid: data.rowid,
                runningcd: ''
                    }
                 

                this.M_AR_AllocationH.batchnoLabel = this.M_AR_AllocationH.batchno != null && this.M_AR_AllocationH.batchno != "" ? data.batchno + this.separator  :'' 
                this.M_AR_AllocationH.creditreferencenoLabel = this.M_AR_AllocationH.creditreferenceno != null && this.M_AR_AllocationH.creditreferenceno != "" ? data.creditreferenceno + this.separator  :'' 
                this.M_AR_AllocationH.debtorcdLabel = this.M_AR_AllocationH.debtorcd != null && this.M_AR_AllocationH.debtorcd != "" ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_AllocationH.trxtypeLabel = this.M_AR_AllocationH.trxtype != null && this.M_AR_AllocationH.trxtype != "" ? data.trxtype + this.separator + data.trxtypedescs :'' 

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                var param = {
                  OptionFunctionCd: "GetCreditDocData",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  CreditDocNo: data.creditreferenceno,
                  CurrentCreditNo: data.creditno
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return
                  var totalallocationamt = parseFloat(ress[0].CreditBalanceAmt) + parseFloat(data.vatpaidbycustomer) + parseFloat(data.withholdingpaidbycustomer) - parseFloat(data.overpaymentamt) + parseFloat(data.underpaymentamt)
                  this.M_AR_AllocationH.creditdocdate = ress[0].CreditDate
                  this.M_AR_AllocationH.creditreferencedescs = ress[0].Descs
                  this.M_AR_AllocationH.creditamt = this.isCurrency(ress[0].CreditBalanceAmt)
                  this.M_AR_AllocationH.totalallocationamt = this.isCurrency(totalallocationamt)

                  if (data.basecurrencycd.toUpperCase() == data.currencycd.toUpperCase()) {
                    this.M_AR_AllocationH.balanceamt = this.isCurrency(
                      parseFloat(totalallocationamt) - parseFloat(data.forexgainlossamt) - parseFloat(data.allocatedamt)
                    )
                  }
                  else {
                    this.M_AR_AllocationH.balanceamt = this.isCurrency(
                      parseFloat(totalallocationamt) - parseFloat(data.totalallocated)
                    )
                  }

                  // console.log(this.M_AR_AllocationH.balanceamt)
                })

            })
        },
        CalculateTotalAllocationAmount() {

          var ReceiptAmt = this.M_AR_AllocationH.creditamt
          var VATPaidByDebtor = this.M_AR_AllocationH.vatpaidbycustomer
          var WithholdingPaidByDebtor = this.M_AR_AllocationH.withholdingpaidbycustomer
          var BankCharges = this.M_AR_AllocationH.bankchargesamt == null || this.M_AR_AllocationH.bankchargesamt == "" ? 0 : this.M_AR_AllocationH.bankchargesamt
          var OverReceiptAmt = this.M_AR_AllocationH.overpaymentamt == null || this.M_AR_AllocationH.overpaymentamt == "" ? 0 : this.M_AR_AllocationH.overpaymentamt
          var UnderReceiptAmt = this.M_AR_AllocationH.underpaymentamt == null || this.M_AR_AllocationH.underpaymentamt == "" ? 0 : this.M_AR_AllocationH.underpaymentamt
          var AdvanceAmt = this.M_AR_AllocationH.advanceamt == null || this.M_AR_AllocationH.advanceamt == "" ? 0 : this.M_AR_AllocationH.advanceamt
          var AllocatedAmt = this.M_AR_AllocationH.allocatedamt
          var ForexGainLossAmt = this.M_AR_AllocationH.forexgainlossamt
          var CurrencyCd = this.M_AR_AllocationH.currencycd
          var BaseCurrencyCd = this.M_AR_AllocationH.basecurrencycd
          var TotalAllocationAmt = 0
          var BalanceAmt = 0

          ReceiptAmt = this.replaceAllString(ReceiptAmt, ',', '', 'number')
          VATPaidByDebtor = this.replaceAllString(VATPaidByDebtor, ',', '', 'number')
          WithholdingPaidByDebtor = this.replaceAllString(WithholdingPaidByDebtor, ',', '', 'number')
          BankCharges = this.replaceAllString(BankCharges, ',', '', 'number')
          OverReceiptAmt = this.replaceAllString(OverReceiptAmt, ',', '', 'number')
          UnderReceiptAmt = this.replaceAllString(UnderReceiptAmt, ',', '', 'number')
          AdvanceAmt = this.replaceAllString(AdvanceAmt, ',', '', 'number')
          AllocatedAmt = this.replaceAllString(AllocatedAmt, ',', '', 'number')
          ForexGainLossAmt = this.replaceAllString(ForexGainLossAmt, ',', '', 'number')

          TotalAllocationAmt =
            parseFloat(ReceiptAmt) +
            parseFloat(VATPaidByDebtor) +
            parseFloat(WithholdingPaidByDebtor) -
            parseFloat(OverReceiptAmt) +
            parseFloat(UnderReceiptAmt)

          if (TotalAllocationAmt.toString() == "Infinity") TotalAllocationAmt = 0
          if (TotalAllocationAmt.toString() == "NaN") TotalAllocationAmt = 0

          BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
          this.M_AR_AllocationH.totalallocationamt = this.isCurrency(TotalAllocationAmt)

          //hitung balance jadi 3 baris di bawah karena ada bug javascript (?)
          TotalAllocationAmt = this.replaceAllString(TotalAllocationAmt, ',', '', 'number')

          if (BaseCurrencyCd.toUpperCase() == CurrencyCd.toUpperCase()) {
            BalanceAmt =
              parseFloat(TotalAllocationAmt) -
              parseFloat(ForexGainLossAmt) -
              parseFloat(AllocatedAmt)
          } else {
            BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
          }

          if (BalanceAmt.toString() == "Infinity") BalanceAmt = 0
          if (BalanceAmt.toString() == "NaN") BalanceAmt = 0
          this.M_AR_AllocationH.balanceamt = this.isCurrency(BalanceAmt)
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

