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
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_GL_JournalEntryWithDebtorCreditor.batchno" :label="M_GL_JournalEntryWithDebtorCreditor.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_GL_JournalEntryWithDebtorCreditor.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_GL_JournalEntryWithDebtorCreditor.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_GL_JournalEntryWithDebtorCreditor.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_GL_JournalEntryWithDebtorCreditor.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_GL_JournalEntryWithDebtorCreditor.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_GL_JournalEntryWithDebtorCreditor.trxtype" :label="M_GL_JournalEntryWithDebtorCreditor.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamt" v-model="M_GL_JournalEntryWithDebtorCreditor.debitamt"  ref="ref_debitamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_JournalEntryWithDebtorCreditor.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_GL_JournalEntryWithDebtorCreditor.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnjournaldateChange" :prop="PI_journaldate" v-model="M_GL_JournalEntryWithDebtorCreditor.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_GL_JournalEntryWithDebtorCreditor.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_accountperiod" v-model="M_GL_JournalEntryWithDebtorCreditor.accountperiod"  ref="ref_accountperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_GL_JournalEntryWithDebtorCreditor.currencycd" :label="M_GL_JournalEntryWithDebtorCreditor.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntrxdateChange" :prop="PI_trxdate" v-model="M_GL_JournalEntryWithDebtorCreditor.trxdate"  ref="ref_trxdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnauditstatusChange" :prop="PI_auditstatus" v-model="M_GL_JournalEntryWithDebtorCreditor.auditstatus"  ref="ref_auditstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_JournalEntryWithDebtorCreditor.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_JournalEntryWithDebtorCreditor.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_GL_JournalEntryWithDebtorCreditor.bankcd" :label="M_GL_JournalEntryWithDebtorCreditor.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_GL_JournalEntryWithDebtorCreditor.debtorcd" :label="M_GL_JournalEntryWithDebtorCreditor.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_GL_JournalEntryWithDebtorCreditor.creditorcd" :label="M_GL_JournalEntryWithDebtorCreditor.creditorcdLabel" ref="ref_creditorcd"/>
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
		FormType: "List",
		Module:"GL",
            propList: {
                initialWhere: "SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "' And LedgerFlag = 'A' AND JournalModuleCd = 'GL'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},
            basecurrencycd: '',
            basecurrencycdlabel: '',
            UniqueReferenceNo: '',

            M_GL_JournalEntryWithDebtorCreditor :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: this.momentDate(new Date()),
                finperiod: 0,
                finyear: 0,
                accountperiod: '',
                trxdate: this.momentDate(new Date()),
                descs: '',
                currencycd: '',
                currencyrate: '0',
                referenceno: '',
                cashierno: '',
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
                batchtotal: '',
                batchstatus: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                debitamt: '',
                creditamt: '',
                balance: '',
                currencybasesign: '',
                baseamountdebit: ''
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
                cLabel: '', 
                cKey: false, 
                cLabelSize: 4, 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type ', 
                cKey: true, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_debitamt: { 
                cLabel: 'Debit Amount:', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'text',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No ', 
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
            PI_creditamt: { 
                cLabel: 'Credit Amount:', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'text',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldate: { 
                cValidate :'required', 
                cName: 'journaldate', 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_balance: { 
                cLabel: 'Balance', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'text',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 4, 
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
            PI_trxdate: { 
                cValidate :'', 
                cName: 'trxdate', 
                cLabel: 'Transaction Date ', 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cOrder: 6, 
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
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
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
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'bankcd', 
                cLabel: 'Bank Code', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'BankCd,BankName' ,
            }, 
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cDisplayColumn: 'CreditorCd,Name' ,
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
            this.M_GL_JournalEntryWithDebtorCreditor.batchno = data.id
            this.M_GL_JournalEntryWithDebtorCreditor.batchnoLabel = data.label
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
            this.M_GL_JournalEntryWithDebtorCreditor.trxtype = data.id
            this.M_GL_JournalEntryWithDebtorCreditor.trxtypeLabel = data.label
            this.M_GL_JournalEntryWithDebtorCreditor.currencycd = this.basecurrencycd
            this.M_GL_JournalEntryWithDebtorCreditor.currencycdLabel = this.basecurrencycd + this.separator +this.basecurrencycdlabel
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
                      this.M_GL_JournalEntryWithDebtorCreditor.referenceno = ""

                      if (data.RunningCd && data.RunningCd != "") {
                          this.RunningCd = data.RunningCd
                          this.PI_referenceno.cProtect = true
                          this.M_GL_JournalEntryWithDebtorCreditor.referenceno = "(auto number)"
                      }
                      else {
                          this.PI_referenceno.cProtect = false
                          this.M_GL_JournalEntryWithDebtorCreditor.referenceno = ""
                      }
                  })
              }
            }
        })
        this.$forceUpdate()
        },
        OnjournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.M_GL_JournalEntryWithDebtorCreditor.trxdate = data
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryWithDebtorCreditor.currencycd = data.id
            this.M_GL_JournalEntryWithDebtorCreditor.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryWithDebtorCreditor.bankcd = data.id
            this.M_GL_JournalEntryWithDebtorCreditor.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryWithDebtorCreditor.debtorcd = data.id
            this.M_GL_JournalEntryWithDebtorCreditor.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != '') {
                    this.M_GL_JournalEntryWithDebtorCreditor.creditorcd = ''
                    this.M_GL_JournalEntryWithDebtorCreditor.creditorcdLabel = ''
                    this.PI_creditorcd.cProtect = true
                }
                else {
                    this.M_GL_JournalEntryWithDebtorCreditor.creditorcd = ''
                    this.M_GL_JournalEntryWithDebtorCreditor.creditorcdLabel = ''
                    this.PI_creditorcd.cProtect = false
                }
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryWithDebtorCreditor.creditorcd = data.id
            this.M_GL_JournalEntryWithDebtorCreditor.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != '') {
                    this.M_GL_JournalEntryWithDebtorCreditor.debtorcd = ''
                    this.M_GL_JournalEntryWithDebtorCreditor.debtorcdLabel = ''
                    this.PI_debtorcd.cProtect = true
                }
                else {
                    this.M_GL_JournalEntryWithDebtorCreditor.debtorcd = ''
                    this.M_GL_JournalEntryWithDebtorCreditor.debtorcdLabel = ''
                    this.PI_debtorcd.cProtect = false
                }
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
        M_Post(){
        },
        M_Insert() {

            if (this.UniqueReferenceNo == "Y") {
                //GetGLJorunalHeader
                var param = {
                    OptionFunctionCd: 'GetGLJorunalHeader',
                    ModuleCd: this.Module,
                    BatchNo: 0,
                    JournalNo: 0,
                    ReferenceNo: this.M_GL_JournalEntryWithDebtorCreditor.referenceno,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    Flag: 3
                }

                this.FnDynamicFunction(param)
                .then(FnOpt2 => {
                    if (FnOpt2 == null) return
                    if (FnOpt2 != null) { 
                        var data = FnOpt2[0]
                        if (data.CountRef != 0 && this.M_GL_JournalEntryWithDebtorCreditor.referenceno != "(auto number)") {
                            this.alertError("Reference No is not unique")
                            return
                        }
                        else {
                            var refno = this.M_GL_JournalEntryWithDebtorCreditor.referenceno

                            if (this.M_GL_JournalEntryWithDebtorCreditor.referenceno == "(auto number)") {
                                this.FnGenerateRunningCode(
                                    this.getDataUser().SubPortfolioCd,
                                    this.RunningCd,
                                    this.getDataUser().UserId,
                                    this.M_GL_JournalEntryWithDebtorCreditor.journaldate
                                )
                                .then(dt => {
                                    refno = dt.RunningCode
                                    var param = {			
                                        OptionSeq: this.getOptionSeq().OptionSeq,
                                        LineNo: this.$parent.data.PageOrder,
                                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                        RunningCd: refno,
                                        TrxType: this.M_GL_JournalEntryWithDebtorCreditor.trxtype == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxtype == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxtype ,
                                        JournalDate: this.M_GL_JournalEntryWithDebtorCreditor.journaldate == '' || this.M_GL_JournalEntryWithDebtorCreditor.journaldate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.journaldate ,
                                        TrxDate: this.M_GL_JournalEntryWithDebtorCreditor.trxdate == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxdate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxdate ,
                                        CurrencyCd: this.M_GL_JournalEntryWithDebtorCreditor.currencycd == '' || this.M_GL_JournalEntryWithDebtorCreditor.currencycd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.currencycd ,
                                        CurrencyRate: this.M_GL_JournalEntryWithDebtorCreditor.currencyrate,
                                        AuditStatus: this.M_GL_JournalEntryWithDebtorCreditor.auditstatus,
                                        Descs: this.M_GL_JournalEntryWithDebtorCreditor.descs,
                                        ReferenceNo: this.M_GL_JournalEntryWithDebtorCreditor.referenceno,
                                        BatchNo: 0 ,
                                        // BatchNo: this.M_GL_JournalEntryWithDebtorCreditor.batchno == '' || this.M_GL_JournalEntryWithDebtorCreditor.batchno == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.batchno ,
                                        JournalSource: this.getDataUser().UserId,
                                        User: this.getDataUser().UserId,
                                        DebtorCd: this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.debtorcd ,
                                        CreditorCd: this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.creditorcd ,
                                        BankCd: this.M_GL_JournalEntryWithDebtorCreditor.bankcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.bankcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.bankcd       
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
                                    TrxType: this.M_GL_JournalEntryWithDebtorCreditor.trxtype == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxtype == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxtype ,
                                    JournalDate: this.M_GL_JournalEntryWithDebtorCreditor.journaldate == '' || this.M_GL_JournalEntryWithDebtorCreditor.journaldate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.journaldate ,
                                    TrxDate: this.M_GL_JournalEntryWithDebtorCreditor.trxdate == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxdate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxdate ,
                                    CurrencyCd: this.M_GL_JournalEntryWithDebtorCreditor.currencycd == '' || this.M_GL_JournalEntryWithDebtorCreditor.currencycd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.currencycd ,
                                    CurrencyRate: this.M_GL_JournalEntryWithDebtorCreditor.currencyrate,
                                    AuditStatus: this.M_GL_JournalEntryWithDebtorCreditor.auditstatus,
                                    Descs: this.M_GL_JournalEntryWithDebtorCreditor.descs,
                                    ReferenceNo: this.M_GL_JournalEntryWithDebtorCreditor.referenceno,
                                    BatchNo: 0 ,
                                    // BatchNo: this.M_GL_JournalEntryWithDebtorCreditor.batchno == '' || this.M_GL_JournalEntryWithDebtorCreditor.batchno == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.batchno ,
                                    JournalSource: this.getDataUser().UserId,
                                    User: this.getDataUser().UserId,
                                    DebtorCd: this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.debtorcd ,
                                    CreditorCd: this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.creditorcd ,
                                    BankCd: this.M_GL_JournalEntryWithDebtorCreditor.bankcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.bankcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.bankcd       
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
                var refno = this.M_GL_JournalEntryWithDebtorCreditor.referenceno

                if (this.M_GL_JournalEntryWithDebtorCreditor.referenceno == "(auto number)") {
                    this.FnGenerateRunningCode(
                        this.getDataUser().SubPortfolioCd,
                        this.RunningCd,
                        this.getDataUser().UserId,
                        this.M_GL_JournalEntryWithDebtorCreditor.journaldate
                    )
                    .then(dt => {
                        refno = dt.RunningCode
                        var param = {			
                            OptionSeq: this.getOptionSeq().OptionSeq,
                            LineNo: this.$parent.data.PageOrder,
                            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                            RunningCd: refno,
                            TrxType: this.M_GL_JournalEntryWithDebtorCreditor.trxtype == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxtype == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxtype ,
                            JournalDate: this.M_GL_JournalEntryWithDebtorCreditor.journaldate == '' || this.M_GL_JournalEntryWithDebtorCreditor.journaldate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.journaldate ,
                            TrxDate: this.M_GL_JournalEntryWithDebtorCreditor.trxdate == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxdate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxdate ,
                            CurrencyCd: this.M_GL_JournalEntryWithDebtorCreditor.currencycd == '' || this.M_GL_JournalEntryWithDebtorCreditor.currencycd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.currencycd ,
                            CurrencyRate: this.M_GL_JournalEntryWithDebtorCreditor.currencyrate,
                            AuditStatus: this.M_GL_JournalEntryWithDebtorCreditor.auditstatus,
                            Descs: this.M_GL_JournalEntryWithDebtorCreditor.descs,
                            ReferenceNo: this.M_GL_JournalEntryWithDebtorCreditor.referenceno,
                            BatchNo: 0 ,
                            // BatchNo: this.M_GL_JournalEntryWithDebtorCreditor.batchno == '' || this.M_GL_JournalEntryWithDebtorCreditor.batchno == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.batchno ,
                            JournalSource: this.getDataUser().UserId,
                            User: this.getDataUser().UserId,
                            DebtorCd: this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.debtorcd ,
                            CreditorCd: this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.creditorcd ,
                            BankCd: this.M_GL_JournalEntryWithDebtorCreditor.bankcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.bankcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.bankcd       
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
                        TrxType: this.M_GL_JournalEntryWithDebtorCreditor.trxtype == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxtype == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxtype ,
                        JournalDate: this.M_GL_JournalEntryWithDebtorCreditor.journaldate == '' || this.M_GL_JournalEntryWithDebtorCreditor.journaldate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.journaldate ,
                        TrxDate: this.M_GL_JournalEntryWithDebtorCreditor.trxdate == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxdate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxdate ,
                        CurrencyCd: this.M_GL_JournalEntryWithDebtorCreditor.currencycd == '' || this.M_GL_JournalEntryWithDebtorCreditor.currencycd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.currencycd ,
                        CurrencyRate: this.M_GL_JournalEntryWithDebtorCreditor.currencyrate,
                        AuditStatus: this.M_GL_JournalEntryWithDebtorCreditor.auditstatus,
                        Descs: this.M_GL_JournalEntryWithDebtorCreditor.descs,
                        ReferenceNo: this.M_GL_JournalEntryWithDebtorCreditor.referenceno,
                        BatchNo: 0 ,
                        // BatchNo: this.M_GL_JournalEntryWithDebtorCreditor.batchno == '' || this.M_GL_JournalEntryWithDebtorCreditor.batchno == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.batchno ,
                        JournalSource: this.getDataUser().UserId,
                        User: this.getDataUser().UserId,
                        DebtorCd: this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.debtorcd ,
                        CreditorCd: this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.creditorcd ,
                        BankCd: this.M_GL_JournalEntryWithDebtorCreditor.bankcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.bankcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.bankcd       
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
                JournalNo: this.M_GL_JournalEntryWithDebtorCreditor.journalno,
                TrxType: this.M_GL_JournalEntryWithDebtorCreditor.trxtype == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxtype == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxtype ,
                JournalDate: this.M_GL_JournalEntryWithDebtorCreditor.journaldate == '' || this.M_GL_JournalEntryWithDebtorCreditor.journaldate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.journaldate ,
                TrxDate: this.M_GL_JournalEntryWithDebtorCreditor.trxdate == '' || this.M_GL_JournalEntryWithDebtorCreditor.trxdate == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.trxdate ,
                AuditStatus: this.M_GL_JournalEntryWithDebtorCreditor.auditstatus,
                CurrencyCd: this.M_GL_JournalEntryWithDebtorCreditor.currencycd == '' || this.M_GL_JournalEntryWithDebtorCreditor.currencycd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.currencycd ,
                CurrencyRate: this.M_GL_JournalEntryWithDebtorCreditor.currencyrate,
                Descs: this.M_GL_JournalEntryWithDebtorCreditor.descs,
                ReferenceNo: this.M_GL_JournalEntryWithDebtorCreditor.referenceno,
                BatchNo: this.M_GL_JournalEntryWithDebtorCreditor.batchno == '' || this.M_GL_JournalEntryWithDebtorCreditor.batchno == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.batchno ,
                User: this.getDataUser().UserId,
                DebtorCd: this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.debtorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.debtorcd ,
                CreditorCd: this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.creditorcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.creditorcd ,
                BankCd: this.M_GL_JournalEntryWithDebtorCreditor.bankcd == '' || this.M_GL_JournalEntryWithDebtorCreditor.bankcd == null ? 'NULL' : this.M_GL_JournalEntryWithDebtorCreditor.bankcd ,
                LastUpdateStamp: this.M_GL_JournalEntryWithDebtorCreditor.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_JournalEntryWithDebtorCreditor = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: this.momentDate(new Date()),
                finperiod: 0,
                finyear: 0,
                accountperiod: '',
                trxdate: this.momentDate(new Date()),
                descs: '',
                currencycd: '',
                currencyrate: '0',
                referenceno: '',
                cashierno: '',
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
                batchtotal: '',
                batchstatus: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                debitamt: '',
                creditamt: '',
                balance: '',
                currencybasesign: '',
                baseamountdebit: ''
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

                this.$parent.resultDelete()
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
this.M_GL_JournalEntryWithDebtorCreditor = {
                subportfoliocd: data.subportfoliocd,
                journalno: data.journalno,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                journaldate: data.journaldate,
                finperiod: data.finperiod,
                finyear: data.finyear,
                accountperiod: data.finperiod + ' / ' + data.finyear,
                trxdate: data.trxdate,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                referenceno: data.referenceno,
                cashierno: data.cashierno,
                roughbookstatus: data.roughbookstatus,
                batchno: data.batchno,
                ledgerflag: data.ledgerflag,
                journalsource: data.journalsource,
                status: data.status,
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
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                currentdocumentcount: data.currentdocumentcount,
                currentbatchtotal: data.currentbatchtotal,
                debitamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountdebit, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountdebit, this.decimal).toString() + ")",
                creditamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountcredit, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountcredit, this.decimal).toString() + ")",
                balance: data.currencybasesign + ". " + this.isCurrency(data.basebalance, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxbalance, this.decimal).toString() + ")",
                currencybasesign: data.currencybasesign,
                baseamountdebit: data.baseamountdebit
                    }
                 

                this.M_GL_JournalEntryWithDebtorCreditor.batchnoLabel = this.M_GL_JournalEntryWithDebtorCreditor.batchno != null ? data.batchno :'' 
                this.M_GL_JournalEntryWithDebtorCreditor.trxtypeLabel = this.M_GL_JournalEntryWithDebtorCreditor.trxtype != null ? data.trxtype :'' 
                this.M_GL_JournalEntryWithDebtorCreditor.currencycdLabel = this.M_GL_JournalEntryWithDebtorCreditor.currencycd != null ? data.currencycd:'' 
                this.M_GL_JournalEntryWithDebtorCreditor.bankcdLabel = this.M_GL_JournalEntryWithDebtorCreditor.bankcd != null ? data.bankcd + this.separator + data.bankname :'' 
                this.M_GL_JournalEntryWithDebtorCreditor.debtorcdLabel = this.M_GL_JournalEntryWithDebtorCreditor.debtorcd != null ? data.debtorcd + this.separator + data.debtorname  :'' 
                this.M_GL_JournalEntryWithDebtorCreditor.creditorcdLabel = this.M_GL_JournalEntryWithDebtorCreditor.creditorcd != null ? data.creditorcd + this.separator + data.creditorname :'' 
         

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
                    var data = FnOpt2[0]
                    this.basecurrencycd = data.BaseCurrencyCd
                    this.basecurrencycdlabel = data.Descs
                    this.getSubPortfolioSpec()
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
                    var data = FnOpt2[0]
                    this.UniqueReferenceNo = data.UniqueReferenceNo
                } 
            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
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

