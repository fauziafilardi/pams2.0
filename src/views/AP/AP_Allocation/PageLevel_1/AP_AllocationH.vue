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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AP_AllocationH.batchno" :label="M_AP_AllocationH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col  md="3">
                                        <ABSinputCheckBox @input="OnstatusChange" :prop="PI_status" v-model="M_AP_AllocationH.status"  ref="ref_status" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AP_AllocationH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AP_AllocationH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AP_AllocationH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="3">AP_Allocation
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AP_AllocationH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_AllocationH.trxtype" :label="M_AP_AllocationH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_trxtypedescs" v-model="M_AP_AllocationH.trxtypedescs"  ref="ref_trxtypedescs" />
                                      </b-col> -->
                                      <!-- <b-col md="3">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AP_AllocationH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AP_AllocationH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AP_AllocationH.debitno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AP_AllocationH.debitdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_AllocationH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditreferencenoChange" :prop="PI_debitreferenceno" :value="M_AP_AllocationH.debitreferenceno" :label="M_AP_AllocationH.creditreferencenoLabel" ref="ref_creditreferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdocdate" v-model="M_AP_AllocationH.debitdocdate"  ref="ref_debitdocdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AP_AllocationH.creditorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debtorname" v-model="M_AP_AllocationH.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitreferencedescs" v-model="M_AP_AllocationH.debitreferencedescs"  ref="ref_debitreferencedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AP_AllocationH.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_AllocationH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Allocation
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitbalanceamt" v-model="M_AP_AllocationH.debitbalanceamt"  ref="ref_debitbalanceamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalnetallocated" v-model="M_AP_AllocationH.totalnetallocated"  ref="ref_totalnetallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_holdvatamt" v-model="M_AP_AllocationH.holdvatamt"  ref="ref_holdvatamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalvatallocated" v-model="M_AP_AllocationH.totalvatallocated"  ref="ref_totalvatallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_holdwithholdingamt" v-model="M_AP_AllocationH.holdwithholdingamt"  ref="ref_holdwithholdingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalwithholdingallocated" v-model="M_AP_AllocationH.totalwithholdingallocated"  ref="ref_totalwithholdingallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnoverpaymentamtChange" :prop="PI_overpaymentamt" v-model="M_AP_AllocationH.overpaymentamt"  ref="ref_overpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnunderpaymentamtChange" :prop="PI_underpaymentamt" v-model="M_AP_AllocationH.underpaymentamt"  ref="ref_underpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AP_AllocationH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocated" v-model="M_AP_AllocationH.totalallocated"  ref="ref_totalallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AP_AllocationH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AP_AllocationH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnautoallocateChange" :prop="PI_autoallocate" v-model="M_AP_AllocationH.autoallocate"  ref="ref_autoallocate" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_AllocationH.remarks"  ref="ref_remarks" />
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
		Module:"AP",
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

            M_AP_AllocationH :{
                batchno: 0,
                balanceamt: '0.00',
                cashierno: '',
                trxtype: '',
                trxtypeLabel: '',
                trxtype: '',
                debitno: '',
                debitdate: this.momentDate(new Date()),
                creditorcd: '',
                creditorcdLabel: '',
                descs: '',
                debitreferenceno: '',
                debitreferencedescs: '',
                currencycd: '',
                currencyrate: '',
                debitbalanceamt: '0.00',
                holdvatamt: '0.00',
                holdwithholdingamt: '0.00',
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
                cMasterUrl: 'AP/AP_BatchMaster' ,
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
                  "' AND MODULECD = 'AP' AND TRXCLASS = 'M'",
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
              cMasterUrl: "AP/AP_TransTypeSubPortfolioMaintenance",
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
            PI_debitno: { 
                cValidate :'required|max:20', 
                cName: 'debitno', 
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
                cName: 'debitdate', 
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
            PI_debitreferenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPDebitDocNoWithBalance'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND BalanceAmt > 0"   , 
                    ParamWhere: ''  ,
                    SourceField: "DocNo=DebitNo,DocDate=DebitDate,CreditorCd,Name,Source=DocSource,Balance=BalanceAmt,TimeEdit",
                    DisplayLookUp: "DocNo,DocDate"
                        }, 
                cValidate :'required', 
                cName: 'debitreferenceno', 
                cLabel: 'Debit Doc. No', 
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
            PI_debitdocdate: { 
              cValidate :'', 
              cName: 'debitdocdate', 
              cLabel: 'Debit Doc. Date ',
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
            PI_debitreferencedescs: { 
                cValidate :'', 
                cName: 'debitreferencedescs', 
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
            PI_debitbalanceamt: { 
                cLabel: 'Debit Balance Amount', 
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
            PI_holdvatamt: { 
                cLabel: 'Hold VAT Amount', 
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
            PI_holdwithholdingamt: { 
                cLabel: 'Hold Withholding Amount', 
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
                cLabel: 'Over Payment Amount', 
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
                cLabel: 'Under Payment Amount', 
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
            this.M_AP_AllocationH.batchno = data.id
            this.M_AP_AllocationH.batchnoLabel = data.label
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
          this.M_AP_AllocationH.trxtype = data.id
          this.M_AP_AllocationH.trxtypeLabel = data.label
          if (this.inputStatus != "VIEW") {
            this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
              if (dt != null) { 
                var dta = dt[0]
                this.M_AP_AllocationH.runningcd = dta.RunningCd
                this.M_AP_AllocationH.trxtypeLabel = data.id + this.separator + dta.TrxTypeDescs
                this.M_AP_AllocationH.descs = dta.TrxTypeDescs

                if (this.inputStatus != "UPDATE") {
                  if (dta.RunningCd && dta.RunningCd != '') {
                    this.RunningCd = dta.RunningCd
                    this.M_AP_AllocationH.debitno = "(auto)"
                    this.PI_debitno.cProtect = true
                  }
                  else {
                    this.M_AP_AllocationH.debitno = ""
                    this.PI_debitno.cProtect = false
                    this.M_AP_AllocationH.runningcd = ""
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
//{debitdate}
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
            this.M_AP_AllocationH.debitreferenceno = data.id
            this.M_AP_AllocationH.creditreferencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
              var param = {
                OptionFunctionCd: "GetDebitDocData",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitDocNo: data.id,
                CurrentDebitNo: ""
              }

              this.FnDynamicFunction(param)
              .then(ress => {
                if (ress == null) return
                if (ress.length < 1) return

                var datas = ress[0]
                var allocatedamt = this.replaceAllString(this.M_AP_AllocationH.totalallocated, ',', '', 'number')
                var totalallocationamt = parseFloat(datas.DebitBalanceAmt) + parseFloat(this.M_AP_AllocationH.holdvatamt) + parseFloat(this.M_AP_AllocationH.holdwithholdingamt) - parseFloat(this.M_AP_AllocationH.overpaymentamt) + parseFloat(this.M_AP_AllocationH.underpaymentamt)
                this.M_AP_AllocationH.creditorcd = datas.CreditorCd
                this.M_AP_AllocationH.creditorcdLabel = datas.CreditorCd && datas.CreditorCd != "" ? datas.CreditorCd + this.separator + datas.CreditorName : ''
                this.M_AP_AllocationH.debitdocdate = datas.DebitDate
                this.M_AP_AllocationH.debitreferencedescs = datas.Descs
                this.M_AP_AllocationH.currencycd = datas.CurrencyCd
                this.M_AP_AllocationH.currencyrate = this.isCurrency(datas.CurrencyRate)
                this.M_AP_AllocationH.debitbalanceamt = this.isCurrency(datas.DebitBalanceAmt)
                this.M_AP_AllocationH.totalallocationamt = this.isCurrency(totalallocationamt)

                this.M_AP_AllocationH.balanceamt = this.isCurrency(parseFloat(totalallocationamt) - parseFloat(allocatedamt))
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
                    _Message_: "Debit No = "+value.DebitNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId
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
        if (this.RunningCd != "")
             { this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AP_AllocationH.debitdate).then(dt9 =>
         { if (dt9 != null) {
                  this.M_AP_AllocationH.debitno = dt9.RunningCode
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0 ,
                Source: "L",
                DebitReferenceNo: this.M_AP_AllocationH.debitreferenceno == '' || this.M_AP_AllocationH.debitreferenceno == null ? 'NULL' : this.M_AP_AllocationH.debitreferenceno ,
                CreditorCd: this.M_AP_AllocationH.creditorcd,
                TrxType: this.M_AP_AllocationH.trxtype,
                ModuleCd: this.Module,
                DebitNo: this.M_AP_AllocationH.debitno,
                DebitDate: this.M_AP_AllocationH.debitdate == '' || this.M_AP_AllocationH.debitdate == null ? 'NULL' : this.M_AP_AllocationH.debitdate ,
                Descs: this.M_AP_AllocationH.descs,
                CurrencyCd: this.M_AP_AllocationH.currencycd,
                CurrencyRate: this.M_AP_AllocationH.currencyrate ? this.replaceAllString(this.M_AP_AllocationH.currencyrate, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AP_AllocationH.overpaymentamt ? this.replaceAllString(this.M_AP_AllocationH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_AllocationH.underpaymentamt ? this.replaceAllString(this.M_AP_AllocationH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AP_AllocationH.remarks,
                UserInput: this.getDataUser().UserId ,
                AutoAllocate: this.M_AP_AllocationH.autoallocate
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
                DebitReferenceNo: this.M_AP_AllocationH.debitreferenceno == '' || this.M_AP_AllocationH.debitreferenceno == null ? 'NULL' : this.M_AP_AllocationH.debitreferenceno ,
                CreditorCd: this.M_AP_AllocationH.creditorcd,
                TrxType: this.M_AP_AllocationH.trxtype,
                ModuleCd: this.Module,
                DebitNo: this.M_AP_AllocationH.debitno,
                DebitDate: this.M_AP_AllocationH.debitdate == '' || this.M_AP_AllocationH.debitdate == null ? 'NULL' : this.M_AP_AllocationH.debitdate ,
                Descs: this.M_AP_AllocationH.descs,
                CurrencyCd: this.M_AP_AllocationH.currencycd,
                CurrencyRate: this.M_AP_AllocationH.currencyrate ? this.replaceAllString(this.M_AP_AllocationH.currencyrate, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AP_AllocationH.overpaymentamt ? this.replaceAllString(this.M_AP_AllocationH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_AllocationH.underpaymentamt ? this.replaceAllString(this.M_AP_AllocationH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AP_AllocationH.remarks,
                UserInput: this.getDataUser().UserId ,
                AutoAllocate: this.M_AP_AllocationH.autoallocate
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
                BatchNo: this.M_AP_AllocationH.batchno == '' || this.M_AP_AllocationH.batchno == null ? 'NULL' : this.M_AP_AllocationH.batchno ,
                Source: "L",
                DebitNo: this.M_AP_AllocationH.debitno,
                DebitDate: this.M_AP_AllocationH.debitdate == '' || this.M_AP_AllocationH.debitdate == null ? 'NULL' : this.M_AP_AllocationH.debitdate ,
                Descs: this.M_AP_AllocationH.descs,
                TrxType: this.M_AP_AllocationH.trxtype,
                DebitBalanceAmt: this.M_AP_AllocationH.debitbalanceamt ? this.replaceAllString(this.M_AP_AllocationH.debitbalanceamt, ',', '', 'number') : 0,
                OverPaymentAmt: this.M_AP_AllocationH.overpaymentamt ? this.replaceAllString(this.M_AP_AllocationH.overpaymentamt,',','','number') : 0 ,
                UnderPaymentAmt: this.M_AP_AllocationH.underpaymentamt ? this.replaceAllString(this.M_AP_AllocationH.underpaymentamt,',','','number') : 0 ,
                Remarks: this.M_AP_AllocationH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_AllocationH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AP_AllocationH = {
                batchno: 0,
                balanceamt: '0.00',
                cashierno: '',
                trxtype: '',
                trxtypeLabel: '',
                trxtype: '',
                debitno: '',
                debitdate: this.momentDate(new Date()),
                creditorcd: '',
                creditorcdLabel: '',
                descs: '',
                debitreferenceno: '',
                debitreferencedescs: '',
                currencycd: '',
                currencyrate: '',
                debitbalanceamt: '0.00',
                holdvatamt: '0.00',
                holdwithholdingamt: '0.00',
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
              DebitNo: value.DebitNo,
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
                DebitNo: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_AllocationH = {
                batchno: data.batchno,
                balanceamt: '',
                cashierno: data.cashierno,
                trxtype: data.trxtype,
                trxtypeLabel: data.trxtype,
                debitno: data.debitno,
                debitdate: data.debitdate,
                debitdocdate: data.debitdate,
                creditorcd: data.creditorcd,
                descs: data.descs,
                debitreferenceno: data.debitreferenceno,
                debitreferencedescs: '',
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                debitbalanceamt: this.isCurrency(data.debitbalanceamt),
                holdvatamt: this.isCurrency(data.holdvatamt),
                holdwithholdingamt: this.isCurrency(data.holdwithholdingamt),
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
                 

                this.M_AP_AllocationH.batchnoLabel = this.M_AP_AllocationH.batchno != null && this.M_AP_AllocationH.batchno != "" ? data.batchno + this.separator  :'' 
                this.M_AP_AllocationH.creditreferencenoLabel = this.M_AP_AllocationH.debitreferenceno != null && this.M_AP_AllocationH.debitreferenceno != "" ? data.debitreferenceno + this.separator  :'' 
                this.M_AP_AllocationH.creditorcdLabel = this.M_AP_AllocationH.creditorcd != null && this.M_AP_AllocationH.creditorcd != "" ? data.creditorcd + this.separator + data.debtorname :'' 
                this.M_AP_AllocationH.trxtypeLabel = this.M_AP_AllocationH.trxtype != null && this.M_AP_AllocationH.trxtype != "" ? data.trxtype + this.separator + data.trxtypedescs :'' 

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                var param = {
                  OptionFunctionCd: "GetDebitDocData",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  DebitDocNo: data.debitreferenceno,
                  CurrentDebitNo: data.debitno
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return
                  var totalallocationamt = parseFloat(ress[0].DebitBalanceAmt) + parseFloat(data.holdvatamt) + parseFloat(data.holdwithholdingamt) - parseFloat(data.overpaymentamt) + parseFloat(data.underpaymentamt)
                  this.M_AP_AllocationH.debitdocdate = ress[0].DebitDate
                  this.M_AP_AllocationH.debitreferencedescs = ress[0].Descs
                  this.M_AP_AllocationH.debitbalanceamt = this.isCurrency(ress[0].DebitBalanceAmt)
                  this.M_AP_AllocationH.totalallocationamt = this.isCurrency(totalallocationamt)

                  if (data.basecurrencycd.toUpperCase() == data.currencycd.toUpperCase()) {
                    this.M_AP_AllocationH.balanceamt = this.isCurrency(
                      parseFloat(totalallocationamt) - parseFloat(data.forexgainlossamt) - parseFloat(data.allocatedamt)
                    )
                  }
                  else {
                    this.M_AP_AllocationH.balanceamt = this.isCurrency(
                      parseFloat(totalallocationamt) - parseFloat(data.totalallocated)
                    )
                  }

                  // console.log(this.M_AP_AllocationH.balanceamt)
                })

            })
        },
        CalculateTotalAllocationAmount() {

          var ReceiptAmt = this.M_AP_AllocationH.debitbalanceamt
          var HoldVATAmt = this.M_AP_AllocationH.holdvatamt
          var WithholdingPaidByDebtor = this.M_AP_AllocationH.holdwithholdingamt
          var BankCharges = this.M_AP_AllocationH.bankchargesamt == null || this.M_AP_AllocationH.bankchargesamt == "" ? 0 : this.M_AP_AllocationH.bankchargesamt
          var OverReceiptAmt = this.M_AP_AllocationH.overpaymentamt == null || this.M_AP_AllocationH.overpaymentamt == "" ? 0 : this.M_AP_AllocationH.overpaymentamt
          var UnderReceiptAmt = this.M_AP_AllocationH.underpaymentamt == null || this.M_AP_AllocationH.underpaymentamt == "" ? 0 : this.M_AP_AllocationH.underpaymentamt
          var AdvanceAmt = this.M_AP_AllocationH.advanceamt == null || this.M_AP_AllocationH.advanceamt == "" ? 0 : this.M_AP_AllocationH.advanceamt
          var AllocatedAmt = this.M_AP_AllocationH.allocatedamt
          var ForexGainLossAmt = this.M_AP_AllocationH.forexgainlossamt
          var CurrencyCd = this.M_AP_AllocationH.currencycd
          var BaseCurrencyCd = this.M_AP_AllocationH.basecurrencycd
          var TotalAllocationAmt = 0
          var BalanceAmt = 0

          ReceiptAmt = this.replaceAllString(ReceiptAmt, ',', '', 'number')
          HoldVATAmt = this.replaceAllString(HoldVATAmt, ',', '', 'number')
          WithholdingPaidByDebtor = this.replaceAllString(WithholdingPaidByDebtor, ',', '', 'number')
          BankCharges = this.replaceAllString(BankCharges, ',', '', 'number')
          OverReceiptAmt = this.replaceAllString(OverReceiptAmt, ',', '', 'number')
          UnderReceiptAmt = this.replaceAllString(UnderReceiptAmt, ',', '', 'number')
          AdvanceAmt = this.replaceAllString(AdvanceAmt, ',', '', 'number')
          AllocatedAmt = this.replaceAllString(AllocatedAmt, ',', '', 'number')
          ForexGainLossAmt = this.replaceAllString(ForexGainLossAmt, ',', '', 'number')

          TotalAllocationAmt =
            parseFloat(ReceiptAmt) +
            parseFloat(HoldVATAmt) +
            parseFloat(WithholdingPaidByDebtor) -
            parseFloat(OverReceiptAmt) +
            parseFloat(UnderReceiptAmt)

          if (TotalAllocationAmt.toString() == "Infinity") TotalAllocationAmt = 0
          if (TotalAllocationAmt.toString() == "NaN") TotalAllocationAmt = 0

          BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
          this.M_AP_AllocationH.totalallocationamt = this.isCurrency(TotalAllocationAmt)

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
          this.M_AP_AllocationH.balanceamt = this.isCurrency(BalanceAmt)
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

