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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_GL_BudgetJournal2.batchno" :label="M_GL_BudgetJournal2.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_GL_BudgetJournal2.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_activebudget" v-model="M_GL_BudgetJournal2.activebudget"  ref="ref_activebudget" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_GL_BudgetJournal2.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_GL_BudgetJournal2.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_GL_BudgetJournal2.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_GL_BudgetJournal2.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_GL_BudgetJournal2.trxtype" :label="M_GL_BudgetJournal2.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamt" v-model="M_GL_BudgetJournal2.debitamt"  ref="ref_debitamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_BudgetJournal2.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_GL_BudgetJournal2.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnjournaldateChange" :prop="PI_journaldate" v-model="M_GL_BudgetJournal2.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_GL_BudgetJournal2.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_accountperiod" v-model="M_GL_BudgetJournal2.accountperiod"  ref="ref_accountperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_GL_BudgetJournal2.currencycd" :label="M_GL_BudgetJournal2.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntrxdateChange" :prop="PI_trxdate" v-model="M_GL_BudgetJournal2.trxdate"  ref="ref_trxdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnauditstatusChange" :prop="PI_auditstatus" v-model="M_GL_BudgetJournal2.auditstatus"  ref="ref_auditstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OncurrencyrateChange" :prop="PI_currencyrate" v-model="M_GL_BudgetJournal2.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6"></b-col>
                                        <b-col md="6" v-show="err1">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Rate must be greater than zero </label></b-col>
                                            </b-row>                                            
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_GL_BudgetJournal2.descs"  ref="ref_descs"/>
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
		Module:"GL",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   		
            UniqueRefNo: '',
            SpecTrue: false,
            basecurrencycd: "",
            basecurrencycdlabel: "",
            ActiveBudget: '',
            OpenFinPeriod: '',
            OpenFinYear: '',
            ToFinPeriod: '',
            ToFinYear: '',
            RunningCd: '',

            M_GL_BudgetJournal2 :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                trxtypeLabel: '',
                modulecd: '',
                journaldate: this.momentDate(new Date()),
                finperiod: 0,
                finyear: 0,
                trxdate: this.momentDate(new Date()),
                descs: '',
                currencycd: '',
                currencycdLabel: '',
                currencyrate: '0',
                referenceno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                rowid: 0,
                documentcount: '',
                activebudget: '',
                batchtotal: '',
                batchstatus: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                basecurrencyd: '',
                basecurrencydLabel: '',
                debitamt: '',
                creditamt: '',
                balance: '',
                currencybasesign: '',
                baseamountdebit: '',
                currencytrxsign: '',
                trxamountdebit: '',
                baseamountcredit: '',
                trxamountcredit: '',
                accountingperiod: '',
                basebalance: '',
                trxbalance: '',
                debitcredit: '',
                basecurrencycd: ''
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLBatch'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: "LedgerFlag = @LedgerFlag"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: 'Batch No *', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cMasterUrl: 'GL/GL_BatchMaster' ,
                cDisplayColumn: 'BatchNo,DocumentCount' ,
            }, 
            PI_documentcount: { 
                cLabel: 'Doc Count', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_activebudget: { 
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
                cOptions: [ { text: '', value: true } ], 
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
                cLabel: 'Curr. Batch Total', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: " ModuleCd = 'GL' "   , 
                    ParamWhere: ''  ,
                    SourceField: "TransactionType,Descs,TimeEdit",
                    DisplayLookUp: "TransactionType,Descs"
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type ', 
                cKey: true, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_debitamt: { 
                cLabel: 'Debit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_baseamountdebit: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_currencytrxsign: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxamountdebit: { 
                cLabel: '', 
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
                cOptions: [ { text: '', value: true } ], 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No ', 
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
            PI_creditamt: { 
                cLabel: 'Credit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_baseamountcredit: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_currencytrxsign: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxamountcredit: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_journaldate: { 
                cValidate :'required', 
                cName: 'journaldate', 
                cLabel: 'Journal Date ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountperiod: { 
                cLabel: 'Accounting Period', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'text',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_balance: { 
                cLabel: 'Balance', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_basebalance: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_currencytrxsign: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxbalance: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_debitcredit: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
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
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 5, 
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
            PI_basecurrencycd: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxdate: { 
                cValidate :'', 
                cName: 'trxdate', 
                cLabel: 'Transaction Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_auditstatus: { 
                cValidate :'', 
                cName: 'auditstatus', 
                cId: 'rdbauditstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Journal Adjustment', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Rate', 
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
            PI_descs: { 
                // cValidate :'', 
                // cName: 'descs', 
                // cLabel: 'Description', 
                // cLabelSize: 4, 
                // cOrder: 6, 
                // cKey: false, 
                // cType: 'text',
                // cVisible: true, 
                // cProtect: false, 
                // cPageLevel: this.PageLevel, 
                // cTabIndex: this.TabIndex, 
                // cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:9, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 9, 
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
            ActiveBudget:''
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
      GetCurrencyRateDefault() {
        var param = {
          OptionFunctionCd: 'GetCurrencyRateDefault',
          ModuleCd: this.Module,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          CurrencyCd: this.M_GL_BudgetJournal2.currencycd,
          JournalDate: this.M_GL_BudgetJournal2.journaldate
        }

          this.FnDynamicFunction(param)
          .then(FnOpt2 => {
            if (FnOpt2 == null) return
            if (FnOpt2 != null) {
              var data = FnOpt2[0]
              if (data.CRateSubPortDetail != 0) {
                this.M_GL_BudgetJournal2.currencyrate = this.isCurrency(data.CRateSubPortDetail, this.decimal)
              }
              else if (data.CRateMasterDetail != 0) {
                this.M_GL_BudgetJournal2.currencyrate = this.isCurrency(data.CRateMasterDetail, this.decimal)
              }
              else if (data.CRateSubPortHeader != 0) {
                this.M_GL_BudgetJournal2.currencyrate = this.isCurrency(data.CRateSubPortHeader, this.decimal)
              }
              else if (data.CRateMasterHeader != 0) {
                this.M_GL_BudgetJournal2.currencyrate = this.isCurrency(data.CRateMasterHeader, this.decimal)
              }
            }
          })
        },
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_GL_BudgetJournal2.batchno = data.id
            this.M_GL_BudgetJournal2.batchnoLabel = data.label
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
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_BudgetJournal2.trxtype = data.id
            this.M_GL_BudgetJournal2.trxtypeLabel = data.label
            this.M_GL_BudgetJournal2.currencycd = this.basecurrencycd
            this.M_GL_BudgetJournal2.currencycdLabel = this.basecurrencycd + this.separator +this.basecurrencycdlabel
            if (this.inputStatus != "VIEW") {
              if (data.id && data.id != "") {
                  this.FnGetTrxTypeMasterData(this.Module, data.id)
                  .then(dt => {
                      if (dt.length == 0) return
                      var data = dt[0]
                      if (data.CurrencyControl == "N") {
                          this.PI_currencycd.cProtect = true
                      }
                      else {
                          this.PI_currencycd.cProtect = false
                      }

                      this.PI_referenceno.cProtect = false
                      this.M_GL_BudgetJournal2.referenceno = ""

                      if (data.RunningCd && data.RunningCd != "") {
                          this.RunningCd = data.RunningCd
                          this.PI_referenceno.cProtect = true
                          this.M_GL_BudgetJournal2.referenceno = "(auto number)"
                      }
                      else {
                          this.PI_referenceno.cProtect = false
                          this.M_GL_BudgetJournal2.referenceno = ""
                      }

                      this.GetCurrencyRateDefault()
                  })
              }
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
        OnjournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaldate}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_BudgetJournal2.currencycd = data.id
            this.M_GL_BudgetJournal2.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetCurrencyRateDefault()
            }
        })
        this.$forceUpdate()
        },
        OntrxdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdate}
            }
        })
        this.$forceUpdate()
        },
        OnauditstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{auditstatus}
            }
        })
        this.$forceUpdate()
        },
        OncurrencyrateChange(data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data == 0 || data == ''){
                    this.error = true
                    this.err1 = true
                } else {
                    this.err1 = false
                    this.error = false
                }
//{currencyrate}
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
          if (record.RoughBookStatus == 'N') {
                this.$store.commit('setEditStatus', true)
                this.$store.commit('setDeleteStatus', true)
            }
            else {
                this.$store.commit('setEditStatus', false)
                this.$store.commit('setDeleteStatus', false)
            }
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
          var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            var source = this.JournalSource == "P" ? this.getDataUser().UserId : ""

            data.forEach((value) => {
                // dt = dt + value.RowId + ','
                dataPost.push({
                    _Message_: "Reference No = "+value.ReferenceNo,
                    BatchNo : value.BatchNo,
                    Source : source,
                    ActiveBudget : this.ActiveBudget,
                    User : this.getDataUser().UserId
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
          if (this.UniqueReferenceNo == "Y") {
            //GetGLJorunalHeader
            var param = {
                OptionFunctionCd: 'GetGLJorunalHeader',
                ModuleCd: this.Module,
                BatchNo: 0,
                JournalNo: 0,
                ReferenceNo: this.M_GL_BudgetJournal2.referenceno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                Flag: 3
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) { 
                  var data = FnOpt2[0]
                  if (data.CountRef != 0 && this.M_GL_BudgetJournal2.referenceno != "(auto number)") {
                      this.alertError("Reference No is not unique")
                      return
                  }
                  else {
                    var refno = this.M_GL_BudgetJournal2.referenceno

                    if (this.M_GL_BudgetJournal2.referenceno == "(auto number)") {
                      this.FnGenerateRunningCode(
                            this.getDataUser().SubPortfolioCd,
                            this.RunningCd,
                            this.getDataUser().UserId,
                            this.M_GL_BudgetJournal2.journaldate
                        )
                        .then(dt => {
                            refno = dt.RunningCode
                            var param = {			
                              OptionSeq: this.getOptionSeq().OptionSeq,
                              LineNo: this.$parent.data.PageOrder,
                              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                              RunningCd: refno,
                              TrxType: this.M_GL_BudgetJournal2.trxtype == '' || this.M_GL_BudgetJournal2.trxtype == null ? 'NULL' : this.M_GL_BudgetJournal2.trxtype ,
                              JournalDate: this.M_GL_BudgetJournal2.journaldate == '' || this.M_GL_BudgetJournal2.journaldate == null ? 'NULL' : this.M_GL_BudgetJournal2.journaldate ,
                              // FinPeriod: this.M_GL_BudgetJournal2.finperiod,
                              // FinYear: this.M_GL_BudgetJournal2.finyear,
                              TrxDate: this.M_GL_BudgetJournal2.trxdate == '' || this.M_GL_BudgetJournal2.trxdate == null ? 'NULL' : this.M_GL_BudgetJournal2.trxdate ,
                              CurrencyCd: this.M_GL_BudgetJournal2.currencycd == '' || this.M_GL_BudgetJournal2.currencycd == null ? 'NULL' : this.M_GL_BudgetJournal2.currencycd ,
                              AuditStatus: this.M_GL_BudgetJournal2.auditstatus,
                              CurrencyRate: this.M_GL_BudgetJournal2.currencyrate ? this.replaceAllString(this.M_GL_BudgetJournal2.currencyrate,',','','number') : 0 ,
                              Descs: this.M_GL_BudgetJournal2.descs,
                              ReferenceNo: this.M_GL_BudgetJournal2.referenceno,
                              BatchNo: 0 ,
                              // BatchNo: this.M_GL_BudgetJournal2.batchno == '' || this.M_GL_BudgetJournal2.batchno == null ? 'NULL' : this.M_GL_BudgetJournal2.batchno ,
                              JournalSource: this.getDataUser().UserId,
                              User: this.getDataUser().UserId
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
                        RunningCd: refno,
                        TrxType: this.M_GL_BudgetJournal2.trxtype == '' || this.M_GL_BudgetJournal2.trxtype == null ? 'NULL' : this.M_GL_BudgetJournal2.trxtype ,
                        JournalDate: this.M_GL_BudgetJournal2.journaldate == '' || this.M_GL_BudgetJournal2.journaldate == null ? 'NULL' : this.M_GL_BudgetJournal2.journaldate ,
                        // FinPeriod: this.M_GL_BudgetJournal2.finperiod,
                        // FinYear: this.M_GL_BudgetJournal2.finyear,
                        TrxDate: this.M_GL_BudgetJournal2.trxdate == '' || this.M_GL_BudgetJournal2.trxdate == null ? 'NULL' : this.M_GL_BudgetJournal2.trxdate ,
                        CurrencyCd: this.M_GL_BudgetJournal2.currencycd == '' || this.M_GL_BudgetJournal2.currencycd == null ? 'NULL' : this.M_GL_BudgetJournal2.currencycd ,
                        AuditStatus: this.M_GL_BudgetJournal2.auditstatus,
                        CurrencyRate: this.M_GL_BudgetJournal2.currencyrate ? this.replaceAllString(this.M_GL_BudgetJournal2.currencyrate,',','','number') : 0 ,
                        Descs: this.M_GL_BudgetJournal2.descs,
                        ReferenceNo: this.M_GL_BudgetJournal2.referenceno,
                        BatchNo: 0 ,
                        // BatchNo: this.M_GL_BudgetJournal2.batchno == '' || this.M_GL_BudgetJournal2.batchno == null ? 'NULL' : this.M_GL_BudgetJournal2.batchno ,
                        JournalSource: this.getDataUser().UserId,
                        User: this.getDataUser().UserId
                      }

                      this.postJSON(this.getUrlInsert(), param)
                      .then((response) => {
                          if(response == null) return
                          this.$parent.resultInsert(response.Message)
                      })
                    }
                  }
                }
            })
          }
          else {
            var refno = this.M_GL_BudgetJournal2.referenceno

            if (this.M_GL_BudgetJournal2.referenceno == "(auto number)") {
              this.FnGenerateRunningCode(
                    this.getDataUser().SubPortfolioCd,
                    this.RunningCd,
                    this.getDataUser().UserId,
                    this.M_GL_BudgetJournal2.journaldate
                )
                .then(dt => {
                    refno = dt.RunningCode
                    var param = {			
                      OptionSeq: this.getOptionSeq().OptionSeq,
                      LineNo: this.$parent.data.PageOrder,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      RunningCd: refno,
                      TrxType: this.M_GL_BudgetJournal2.trxtype == '' || this.M_GL_BudgetJournal2.trxtype == null ? 'NULL' : this.M_GL_BudgetJournal2.trxtype ,
                      JournalDate: this.M_GL_BudgetJournal2.journaldate == '' || this.M_GL_BudgetJournal2.journaldate == null ? 'NULL' : this.M_GL_BudgetJournal2.journaldate ,
                      // FinPeriod: this.M_GL_BudgetJournal2.finperiod,
                      // FinYear: this.M_GL_BudgetJournal2.finyear,
                      TrxDate: this.M_GL_BudgetJournal2.trxdate == '' || this.M_GL_BudgetJournal2.trxdate == null ? 'NULL' : this.M_GL_BudgetJournal2.trxdate ,
                      CurrencyCd: this.M_GL_BudgetJournal2.currencycd == '' || this.M_GL_BudgetJournal2.currencycd == null ? 'NULL' : this.M_GL_BudgetJournal2.currencycd ,
                      AuditStatus: this.M_GL_BudgetJournal2.auditstatus,
                      CurrencyRate: this.M_GL_BudgetJournal2.currencyrate ? this.replaceAllString(this.M_GL_BudgetJournal2.currencyrate,',','','number') : 0 ,
                      Descs: this.M_GL_BudgetJournal2.descs,
                      ReferenceNo: this.M_GL_BudgetJournal2.referenceno,
                      BatchNo: 0 ,
                      // BatchNo: this.M_GL_BudgetJournal2.batchno == '' || this.M_GL_BudgetJournal2.batchno == null ? 'NULL' : this.M_GL_BudgetJournal2.batchno ,
                      JournalSource: this.getDataUser().UserId,
                      User: this.getDataUser().UserId
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
                RunningCd: refno,
                TrxType: this.M_GL_BudgetJournal2.trxtype == '' || this.M_GL_BudgetJournal2.trxtype == null ? 'NULL' : this.M_GL_BudgetJournal2.trxtype ,
                JournalDate: this.M_GL_BudgetJournal2.journaldate == '' || this.M_GL_BudgetJournal2.journaldate == null ? 'NULL' : this.M_GL_BudgetJournal2.journaldate ,
                // FinPeriod: this.M_GL_BudgetJournal2.finperiod,
                // FinYear: this.M_GL_BudgetJournal2.finyear,
                TrxDate: this.M_GL_BudgetJournal2.trxdate == '' || this.M_GL_BudgetJournal2.trxdate == null ? 'NULL' : this.M_GL_BudgetJournal2.trxdate ,
                CurrencyCd: this.M_GL_BudgetJournal2.currencycd == '' || this.M_GL_BudgetJournal2.currencycd == null ? 'NULL' : this.M_GL_BudgetJournal2.currencycd ,
                AuditStatus: this.M_GL_BudgetJournal2.auditstatus,
                CurrencyRate: this.M_GL_BudgetJournal2.currencyrate ? this.replaceAllString(this.M_GL_BudgetJournal2.currencyrate,',','','number') : 0 ,
                Descs: this.M_GL_BudgetJournal2.descs,
                ReferenceNo: this.M_GL_BudgetJournal2.referenceno,
                BatchNo: 0 ,
                // BatchNo: this.M_GL_BudgetJournal2.batchno == '' || this.M_GL_BudgetJournal2.batchno == null ? 'NULL' : this.M_GL_BudgetJournal2.batchno ,
                JournalSource: this.getDataUser().UserId,
                User: this.getDataUser().UserId
              }

              this.postJSON(this.getUrlInsert(), param)
              .then((response) => {
                  if(response == null) return
                  this.$parent.resultInsert(response.Message)
              })
            }
          }
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                JournalNo: this.M_GL_BudgetJournal2.journalno,
                TrxType: this.M_GL_BudgetJournal2.trxtype == '' || this.M_GL_BudgetJournal2.trxtype == null ? 'NULL' : this.M_GL_BudgetJournal2.trxtype ,
                JournalDate: this.M_GL_BudgetJournal2.journaldate == '' || this.M_GL_BudgetJournal2.journaldate == null ? 'NULL' : this.M_GL_BudgetJournal2.journaldate ,
                // FinPeriod: this.M_GL_BudgetJournal2.finperiod,
                // FinYear: this.M_GL_BudgetJournal2.finyear,
                TrxDate: this.M_GL_BudgetJournal2.trxdate == '' || this.M_GL_BudgetJournal2.trxdate == null ? 'NULL' : this.M_GL_BudgetJournal2.trxdate ,
                AuditStatus: this.M_GL_BudgetJournal2.auditstatus,
                CurrencyCd: this.M_GL_BudgetJournal2.currencycd == '' || this.M_GL_BudgetJournal2.currencycd == null ? 'NULL' : this.M_GL_BudgetJournal2.currencycd ,
                CurrencyRate: this.M_GL_BudgetJournal2.currencyrate ? this.replaceAllString(this.M_GL_BudgetJournal2.currencyrate,',','','number') : 0 ,
                Descs: this.M_GL_BudgetJournal2.descs,
                ReferenceNo: this.M_GL_BudgetJournal2.referenceno,
                BatchNo: this.M_GL_BudgetJournal2.batchno == '' || this.M_GL_BudgetJournal2.batchno == null ? 'NULL' : this.M_GL_BudgetJournal2.batchno ,
                User: this.getDataUser().UserId,
                LastUpdateStamp: this.M_GL_BudgetJournal2.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_BudgetJournal2 = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                trxtypeLabel: '',
                modulecd: '',
                journaldate: this.momentDate(new Date()),
                finperiod: 0,
                finyear: 0,
                trxdate: this.momentDate(new Date()),
                descs: '',
                currencycd: '',
                currencyrate: 0,
                referenceno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                rowid: 0,
                documentcount: '',
                activebudget: '',
                batchtotal: '',
                batchstatus: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                basecurrencyd: '',
                basecurrencydLabel: '',
                debitamt: '',
                creditamt: '',
                balance: '',
                currencybasesign: '',
                baseamountdebit: '',
                currencytrxsign: '',
                trxamountdebit: '',
                baseamountcredit: '',
                trxamountcredit: '',
                accountingperiod: '',
                basebalance: '',
                trxbalance: '',
                debitcredit: '',
                basecurrencycd: ''
                    }
            		
		},
        M_New(){
          this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
          this.$refs.ref_referenceno.focus()
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
          var dataDelete = []

          data.forEach((value) => {
              dataDelete.push({
              JournalNo: value.JournalNo,
              User: this.getDataUser().UserId,
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
              this.$parent.resultDelete("Deleting Data Successfully")
          })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                batchno: record.BatchNo,
                journalno: record.JournalNo,
                referenceno: record.ReferenceNo,
                subportfoliocd: record.SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_BudgetJournal2 = {
                subportfoliocd: data.subportfoliocd,
                journalno: data.journalno,
                trxtype: data.trxtype,
                trxtypeLabel: '',
                modulecd: data.modulecd,
                journaldate: data.journaldate,
                finperiod: data.finperiod,
                finyear: data.finyear,
                trxdate: data.trxdate,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                referenceno: data.referenceno,
                roughbookstatus: data.roughbookstatus,
                batchno: data.batchno,
                ledgerflag: data.ledgerflag,
                journalsource: data.journalsource,
                status: data.status == "B" ? true : "",
                auditstatus: data.auditstatus,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                debtorcd: data.debtorcd,
                creditorcd: data.creditorcd,
                bankcd: data.bankcd,
                rowid: data.rowid,
                documentcount: data.documentcount,
                activebudget: data.activebudget,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus == "B" ? true : "",
                currentdocumentcount: data.currentdocumentcount,
                currentbatchtotal: data.currentbatchtotal,
                basecurrencyd: data.basecurrencyd,
                debitamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountdebit, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountdebit, this.decimal).toString() + ")",
                creditamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountcredit, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountcredit, this.decimal).toString() + ")",
                balance: data.currencybasesign + ". " + this.isCurrency(data.basebalance, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxbalance, this.decimal).toString() + ")",
                currencybasesign: data.currencybasesign,
                baseamountdebit: data.baseamountdebit,
                currencytrxsign: data.currencytrxsign,
                trxamountdebit: data.trxamountdebit,
                baseamountcredit: data.baseamountcredit,
                trxamountcredit: data.trxamountcredit,
                accountperiod: data.finperiod + '/' + data.finyear,
                basebalance: data.basebalance,
                trxbalance: data.trxbalance,
                debitcredit: data.debitcredit,
                basecurrencycd: data.basecurrencycd
                    }
                 

                this.M_GL_BudgetJournal2.batchnoLabel = this.M_GL_BudgetJournal2.batchno != null ? data.batchno :'' 
                this.M_GL_BudgetJournal2.trxtypeLabel = this.M_GL_BudgetJournal2.trxtype != null ? data.trxtype :'' 
                this.M_GL_BudgetJournal2.currencycdLabel = this.M_GL_BudgetJournal2.currencycd != null ? data.currencycd :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getSpec () {
            //GetGLSpecification
            var param = {
                OptionFunctionCd: 'GetGLSpecification',
                ModuleCd: this.Module
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) { 
                    if (FnOpt2.length <= 0) {
                      this.SpecTrue = false
                      this.getSubPortfolioSpec()
                    }
                    else {
                      var data = FnOpt2[0]
                      this.basecurrencycd = data.BaseCurrencyCd
                      this.basecurrencycdlabel = data.Descs
                      this.JournalSource = data.JournalSource
                      this.ActiveBudget = data.ActiveBudget
                      this.SpecTrue = true
                      this.propList.initialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And LedgerFlag = '" + data.ActiveBudget + "'"
                      this.getSubPortfolioSpec()
                    }
                } 
            })
        },
        getSubPortfolioSpec () {
            // GetGLSubPortfolioSpecification
            var param = {
                OptionFunctionCd: 'GetGLSubPortfolioSpecification',
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) { 
                  if (FnOpt2.length <= 0) {
                    this.SpecTrue = false
                  }
                  else {
                    var data = FnOpt2[0]
                    this.UniqueReferenceNo = data.UniqueReferenceNo
                    this.OpenFinPeriod = data.OpenFinPeriod
                    this.OpenFinYear = data.OpenFinYear
                    this.ToFinPeriod = data.ToFinPeriod
                    this.ToFinYear = data.ToFinYear
                    this.SpecTrue = true
                    this.FormToABSList().doGetList('','eb_getList')
                  }
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
        this.getSpec()
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

