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
                                        <ABSinputTextVuex :prop="PI_batchno" v-model="M_GL_SubModuleJournalBySubPortfolio.batchno"  ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_GL_SubModuleJournalBySubPortfolio.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_GL_SubModuleJournalBySubPortfolio.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_GL_SubModuleJournalBySubPortfolio.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_GL_SubModuleJournalBySubPortfolio.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamt" v-model="M_GL_SubModuleJournalBySubPortfolio.debitamt"  ref="ref_debitamt" />
                                      </b-col>
                                      <!-- <b-col md="4">
                                          <ABSinputCheckBox :prop="PI_status" v-model="M_GL_SubModuleJournalBySubPortfolio.status"  ref="ref_status" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_SubModuleJournalBySubPortfolio.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_GL_SubModuleJournalBySubPortfolio.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_finperiod" v-model="Fin.FinPediodLabel"  ref="ref_finperiod" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_GL_SubModuleJournalBySubPortfolio.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnjournaldateChange" :prop="PI_journaldate" v-model="M_GL_SubModuleJournalBySubPortfolio.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdateChange" :prop="PI_trxdate" v-model="M_GL_SubModuleJournalBySubPortfolio.trxdate"  ref="ref_trxdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_GL_SubModuleJournalBySubPortfolio.currencycd" :label="M_GL_SubModuleJournalBySubPortfolio.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_GL_SubModuleJournalBySubPortfolio.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Additional Submodule Information
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankcd" v-model="M_GL_SubModuleJournalBySubPortfolio.bankcd"  ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_GL_SubModuleJournalBySubPortfolio.debtorcdLabel"  ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditorcd" v-model="M_GL_SubModuleJournalBySubPortfolio.creditorcdLabel"  ref="ref_creditorcd"/>
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And LedgerFlag = 'A' AND JournalModuleCd <> 'GL'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},

            BaseCurrencyCd: '',
            BaseCurrencyCdLabel: '',
            ForceSubModule: '',
            UniqueReferenceNo: '',

            M_GL_SubModuleJournalBySubPortfolio :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finpediodLabel: '',
                finperiod: 0,
                finyear: 0,
                openfinperiod: 0,
                tofinperiod: 0,
                openfinyear: 0,
                tofinyear: 0,
                trxdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '',
                referenceno: '',
                cashierno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: '',
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
                bankcdLabel: '',
                creditorcdLabel: '',
                currencycdLabel: '',
                debtorcdLabel: '',
                rowid: 0,
                debitamt: '',
                creditamt: '',
                balance: '',
                currencybasesign: '',
                documentcount: '',
                batchtotal: '',
                batchstatus: '',
                roughbookstatus: ''
                    }
            ,
            PI_batchno: { 
                cLabel: 'Batch No', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
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
            PI_trxtype: { 
                cLabel: 'Transaction Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_debitamt: { 
                cLabel: 'Debit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
            PI_finperiod: { 
                cLabel: 'Current Period / Year', 
                cLabelSize: 4, 
                cValue: '', 
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
            PI_journaldate: { 
                cValidate :'', 
                cName: 'journaldate', 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdate: { 
                cValidate :'required', 
                cName: 'trxdate', 
                cLabel: 'Transaction Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
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
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder:8, 
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
            PI_bankcd: { 
                cValidate :'', 
                cName: 'bankcd', 
                cLabel: 'Bank Code', 
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
            PI_creditorcd: { 
                cValidate :'', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code', 
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

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },
            Fin: {
                FinPeriod: '',
                FinYear: '',
                FinPediodLabel: '',
                OpenFinPeriod: '',
                OpenFinYear: '',
                ToFinPeriod: '',
                ToFinYear: ''
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
	}
  },
    methods: {		
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
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
        OntrxdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdate}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubModuleJournalBySubPortfolio.currencycd = data.id
            this.M_GL_SubModuleJournalBySubPortfolio.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = true
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
            if (record.RoughBookStatus == 'Y') {
                this.$store.commit('setEditStatus', false)
            }
            else {
                this.$store.commit('setEditStatus', true)
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
        },
        CheckingAccountingPeriod() {
            //CheckingAccountingPeriod
            var param = {
                OptionFunctionCd: 'CheckingAccountingPeriod',
                ModuleCd: this.Module,
                FinYearFrom: this.Fin.OpenFinYear,
                FinPeriodFrom: this.Fin.OpenFinPeriod,
                FinYearTo: this.Fin.ToFinYear,
                FinPeriodTo: this.Fin.ToFinPeriod,
                Date: this.M_GL_SubModuleJournalBySubPortfolio.journaldate
            }

            return this.FnDynamicFunction(param)
        },
        M_Update() {
            this.CheckingAccountingPeriod()
            .then(FnOpt2 => {
                console.log(FnOpt2)
                if (FnOpt2 == null) {
                    this.alertError("Accounting Period Out of Range")
                    return
                }
                if (FnOpt2.length > 0) {
                    if(FnOpt2[0].Status == 1) {
                        if (this.UniqueReferenceNo == "Y") {
                            var param = {
                                OptionFunctionCd: 'GetGLJorunalHeader',
                                ModuleCd: this.Module,
                                BatchNo: 0,
                                JournalNo: this.M_GL_SubModuleJournalBySubPortfolio.journalno,
                                ReferenceNo: this.M_GL_SubModuleJournalBySubPortfolio.referenceno,
                                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                Flag: 3
                            }

                            this.FnDynamicFunction(param)
                            .then(FnOpt2 => {
                                if (FnOpt2 == null) return
                                if (FnOpt2 != null) { 
                                    var data = FnOpt2[0]
                                    if ((data.CountRef && data.CountRef != 0) && this.M_GL_SubModuleJournalBySubPortfolio.referenceno != "(auto number)") {
                                        this.alertError("Reference No is not unique")
                                        return
                                    }
                                    else {
                                        var param = {
                                            OptionSeq: this.getOptionSeq().OptionSeq,
                                            LineNo: this.$parent.data.PageOrder,
                                            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                            JournalNo: this.M_GL_SubModuleJournalBySubPortfolio.journalno,
                                            TrxType: this.M_GL_SubModuleJournalBySubPortfolio.trxtype,
                                            JournalDate: this.M_GL_SubModuleJournalBySubPortfolio.journaldate == '' || this.M_GL_SubModuleJournalBySubPortfolio.journaldate == null ? 'NULL' : this.M_GL_SubModuleJournalBySubPortfolio.journaldate ,
                                            FinPeriod: this.M_GL_SubModuleJournalBySubPortfolio.finperiod,
                                            FinYear: this.M_GL_SubModuleJournalBySubPortfolio.finyear,
                                            TrxDate: this.M_GL_SubModuleJournalBySubPortfolio.trxdate == '' || this.M_GL_SubModuleJournalBySubPortfolio.trxdate == null ? 'NULL' : this.M_GL_SubModuleJournalBySubPortfolio.trxdate ,
                                            AuditStatus: this.M_GL_SubModuleJournalBySubPortfolio.auditstatus,
                                            CurrencyCd: this.M_GL_SubModuleJournalBySubPortfolio.currencycd == '' || this.M_GL_SubModuleJournalBySubPortfolio.currencycd == null ? 'NULL' : this.M_GL_SubModuleJournalBySubPortfolio.currencycd ,
                                            CurrencyRate: this.M_GL_SubModuleJournalBySubPortfolio.currencyrate,
                                            Descs: this.M_GL_SubModuleJournalBySubPortfolio.descs,
                                            ReferenceNo: this.M_GL_SubModuleJournalBySubPortfolio.referenceno,
                                            BatchNo: this.M_GL_SubModuleJournalBySubPortfolio.batchno,
                                            User: this.getDataUser().UserId,
                                            LastUpdateStamp: this.M_GL_SubModuleJournalBySubPortfolio.lastupdatestamp                
                                        }

                                        this.postJSON(this.getUrlUpdate(), param)
                                        .then((response) => {
                                            if(response == null) return
                                            this.$parent.resultUpdate(response.Message)
                                        })
                                    }
                                }
                            })
                        }
                        else {
                            var param = {
                                OptionSeq: this.getOptionSeq().OptionSeq,
                                LineNo: this.$parent.data.PageOrder,
                                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                JournalNo: this.M_GL_SubModuleJournalBySubPortfolio.journalno,
                                TrxType: this.M_GL_SubModuleJournalBySubPortfolio.trxtype,
                                JournalDate: this.M_GL_SubModuleJournalBySubPortfolio.journaldate == '' || this.M_GL_SubModuleJournalBySubPortfolio.journaldate == null ? 'NULL' : this.M_GL_SubModuleJournalBySubPortfolio.journaldate ,
                                FinPeriod: this.M_GL_SubModuleJournalBySubPortfolio.finperiod,
                                FinYear: this.M_GL_SubModuleJournalBySubPortfolio.finyear,
                                TrxDate: this.M_GL_SubModuleJournalBySubPortfolio.trxdate == '' || this.M_GL_SubModuleJournalBySubPortfolio.trxdate == null ? 'NULL' : this.M_GL_SubModuleJournalBySubPortfolio.trxdate ,
                                AuditStatus: this.M_GL_SubModuleJournalBySubPortfolio.auditstatus,
                                CurrencyCd: this.M_GL_SubModuleJournalBySubPortfolio.currencycd == '' || this.M_GL_SubModuleJournalBySubPortfolio.currencycd == null ? 'NULL' : this.M_GL_SubModuleJournalBySubPortfolio.currencycd ,
                                CurrencyRate: this.M_GL_SubModuleJournalBySubPortfolio.currencyrate,
                                Descs: this.M_GL_SubModuleJournalBySubPortfolio.descs,
                                ReferenceNo: this.M_GL_SubModuleJournalBySubPortfolio.referenceno,
                                BatchNo: this.M_GL_SubModuleJournalBySubPortfolio.batchno,
                                User: this.getDataUser().UserId,
                                LastUpdateStamp: this.M_GL_SubModuleJournalBySubPortfolio.lastupdatestamp                
                            }

                            this.postJSON(this.getUrlUpdate(), param)
                            .then((response) => {
                                if(response == null) return
                                this.$parent.resultUpdate(response.Message)
                            })
                        }
                    }
                    else {
                        this.alertError("Accounting Period Out of Range")
                        return
                    }
                }
                else {
                    this.alertError("Accounting Period Out of Range")
                    return
                }
            })
        },
		M_ClearForm(){
            this.M_GL_SubModuleJournalBySubPortfolio = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finpediodLabel: '',
                finperiod: 0,
                finyear: 0,
                openfinperiod: 0,
                tofinperiod: 0,
                openfinyear: 0,
                tofinyear: 0,
                trxdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '',
                referenceno: '',
                cashierno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: '',
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
                bankcdLabel: '',
                creditorcdLabel: '',
                currencycdLabel: '',
                debtorcdLabel: '',
                rowid: 0,
                debitamt: '',
                creditamt: '',
                balance: '',
                currencybasesign: '',
                documentcount: '',
                batchtotal: '',
                batchstatus: '',
                roughbookstatus: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
            if (this.M_GL_SubModuleJournalBySubPortfolio.roughbookstatus == 'Y') {
                this.alertError("You cannot edit this journal")
                return
            }
            console.log(this.ForceSubModule)
                        // console.log(data.ForceSubModule)
            if(this.ForceSubModule == 'I'){
                this.PI_referenceno.cProtect = true
                this.PI_journaldate.cProtect = true
                this.PI_trxdate.cProtect = true
            }
            else{
                this.PI_referenceno.cProtect = false
                this.PI_journaldate.cProtect = false
                this.PI_trxdate.cProtect = false
            }
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
this.M_GL_SubModuleJournalBySubPortfolio = {
                subportfoliocd: data.subportfoliocd,
                journalno: data.journalno,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                journaldate: data.journaldate,
                finpediodLabel: data.finperiod + ' / ' + data.finyear,
                finperiod: data.finperiod,
                finyear: data.finyear,
                trxdate: data.trxdate,
                descs: data.descs,
                currencycd: data.currencycd,
                currencycdLabel: data.descs,
                currencyrate: data.currencyrate,
                referenceno: data.referenceno,
                cashierno: data.cashierno,
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
                debitamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountdebit, this.decimal) + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountdebit, this.decimal) + ")",
                creditamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountcredit, this.decimal) + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountcredit, this.decimal) + ")",
                balance: data.currencybasesign + ". " + this.isCurrency(data.basebalance, this.decimal) + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxbalance, this.decimal) + ")",
                currencybasesign: data.currencybasesign,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus == "B" ? true : "",
                roughbookstatus: data.roughbookstatus
                    }
                
                this.M_GL_SubModuleJournalBySubPortfolio.bankcdLabel = this.M_GL_SubModuleJournalBySubPortfolio.bankcd != null ? data.bankcd + this.separator + data.bankname :'' 
                this.M_GL_SubModuleJournalBySubPortfolio.creditorcdLabel = this.M_GL_SubModuleJournalBySubPortfolio.creditorcd != null ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_GL_SubModuleJournalBySubPortfolio.currencycdLabel = this.M_GL_SubModuleJournalBySubPortfolio.currencycd != null ? data.currencycd :'' 
                this.M_GL_SubModuleJournalBySubPortfolio.debtorcdLabel = this.M_GL_SubModuleJournalBySubPortfolio.debtorcd != null ? data.debtorcd + this.separator + data.debtorname :'' 
         

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
                if (FnOpt2.length > 0) { 
                    var data = FnOpt2[0]
                    this.Fin.FinPediod = data.CurrentFinPeriod
                    this.Fin.FinYear = data.CurrentFinYear
                    this.Fin.FinPediodLabel = data.CurrentFinPeriod + ' / ' + data.CurrentFinYear
                    this.BaseCurrencyCd = data.BaseCurrencyCd
                    this.BaseCurrencyCdLabel = data.Descs
                    this.ForceSubModule = data.ForceSubModule
                    this.JournalSource = data.JournalSource
                    if (data.ForceSubModule == 'I') {
                        this.$store.commit('setDeleteStatus', false)
                    }
                    else {
                        this.$store.commit('setDeleteStatus', true)
                    }
                    this.getSubPortfolioSpec()
                }
                else {
                    this.alertError("Please setup the GL Specification first")
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
                if (FnOpt2.length > 0) { 
                    var data = FnOpt2[0]
                    this.Fin.OpenFinPeriod = data.OpenFinPeriod
                    this.Fin.OpenFinYear = data.OpenFinYear
                    this.Fin.ToFinPeriod = data.ToFinPeriod
                    this.Fin.ToFinYear = data.ToFinYear
                    this.UniqueReferenceNo = data.UniqueReferenceNo
                }
                else {
                    this.alertError("Please setup the GL Subportfolio Specification first")
                }
            })
        },
        GetJournalRoughBook(journalno) {
            // GetJournalRoughBook
            var param = {
                OptionFunctionCd: 'GetJournalRoughBook',
                ModuleCd: this.Module,
                JournalNo: journalno
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2.length > 0) { 
                    var data = FnOpt2[0]
                    if (data.RoughBookStatus == 'Y') {
                        this.$store.commit('setEditStatus', false)
                    }
                    else {
                        this.$store.commit('setEditStatus', true)
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
        this.FormToABSList().doGetList('','eb_getList')
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

