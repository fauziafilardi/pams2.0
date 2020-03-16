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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_GL_JournalEntryBySubportfolio.batchno" :label="M_GL_JournalEntryBySubportfolio.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_GL_JournalEntryBySubportfolio.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_GL_JournalEntryBySubportfolio.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_GL_JournalEntryBySubportfolio.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_GL_JournalEntryBySubportfolio.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_GL_JournalEntryBySubportfolio.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_GL_JournalEntryBySubportfolio.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-row>
                                        <!-- <b-col md="4" class="lbl-col-align" v-show="true"> -->
                                            <b-col md="4" class="lbl-col-align" v-show="err1">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="text-field-form" style="color:blue"> * This Journal is disabled for editing/deletion because it exists in RoughBook </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_GL_JournalEntryBySubportfolio.trxtype" :label="M_GL_JournalEntryBySubportfolio.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamt" v-model="M_GL_JournalEntryBySubportfolio.debitamt"  ref="ref_debitamt" />
                                      </b-col>
                                      <!-- <b-col md="4">
                                          <ABSinputCheckBox :prop="PI_status" v-model="M_GL_JournalEntryBySubportfolio.status"  ref="ref_status" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_JournalEntryBySubportfolio.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_GL_JournalEntryBySubportfolio.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_journaldate" v-model="M_GL_JournalEntryBySubportfolio.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_GL_JournalEntryBySubportfolio.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_accountperiod" v-model="M_GL_JournalEntryBySubportfolio.accountperiod"  ref="ref_accountperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_GL_JournalEntryBySubportfolio.currencycd" :label="M_GL_JournalEntryBySubportfolio.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntrxdateChange" :prop="PI_trxdate" v-model="M_GL_JournalEntryBySubportfolio.trxdate"  ref="ref_trxdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnauditstatusChange" :prop="PI_auditstatus" v-model="M_GL_JournalEntryBySubportfolio.auditstatus"  ref="ref_auditstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_JournalEntryBySubportfolio.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_GL_JournalEntryBySubportfolio.descs"  ref="ref_descs"/>
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
        basecurrencycd: "",
        basecurrencycdlabel: "",
        JournalSource: "",
        RunningCd:"",
        Module:"GL",
        error: true,
        err1: true,
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And LedgerFlag = 'A' AND JournalModuleCd = 'GL'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_JournalEntryBySubportfolio :{
                batchno: 0,
                referenceno: '',
                roughbookstatus: '',
                status: '',
                journalno: 0,
                journaldate: this.momentDate(new Date()),
                auditstatus: 'N',
                finperiod: 0,
                finyear: 0,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                documentcount: '',
                batchstatus: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                trxtype: '',
                trxtypeLabel: '',
                currencycd: '',
                currencycdLabel: '',
                currencybasesign: '',
                debitamt: '',
                creditamt: '',
                balance: '',
                trxdate: this.momentDate(new Date()),
                currencyrate: '',
                descs: ''
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
                cLabel: 'Debit Amount', 
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
                cLabel: 'Reference No', 
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
                cLabel: 'Credit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'text',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldate: { 
                cValidate :'', 
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
                cLabel: 'Currency ', 
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
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
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
                cValidate :'', 
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
                cRows: 6, 
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
        GetCurrencyRateDefault() {
            var param = {
                    OptionFunctionCd: 'GetCurrencyRateDefault',
                    ModuleCd: this.Module,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    CurrencyCd: this.M_GL_JournalEntryBySubportfolio.currencycd,
                    JournalDate: this.M_GL_JournalEntryBySubportfolio.journaldate
                }

                this.FnDynamicFunction(param)
                .then(FnOpt2 => {
                    if (FnOpt2 == null) return
                    if (FnOpt2 != null) {
                        var data = FnOpt2[0]
                        if (data.CRateSubPortDetail != 0) {
                            this.M_GL_JournalEntryBySubportfolio.currencyrate = this.isCurrency(data.CRateSubPortDetail, this.decimal)
                        }
                        else if (data.CRateMasterDetail != 0) {
                            this.M_GL_JournalEntryBySubportfolio.currencyrate = this.isCurrency(data.CRateMasterDetail, this.decimal)
                        }
                        else if (data.CRateSubPortHeader != 0) {
                            this.M_GL_JournalEntryBySubportfolio.currencyrate = this.isCurrency(data.CRateSubPortHeader, this.decimal)
                        }
                        else if (data.CRateMasterHeader != 0) {
                            this.M_GL_JournalEntryBySubportfolio.currencyrate = this.isCurrency(data.CRateMasterHeader, this.decimal)
                        }
                    }
                })
        },
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryBySubportfolio.batchno = data.id
            this.M_GL_JournalEntryBySubportfolio.batchnoLabel = data.label
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
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryBySubportfolio.trxtype = data.id
            this.M_GL_JournalEntryBySubportfolio.trxtypeLabel = data.label
            this.M_GL_JournalEntryBySubportfolio.currencycd = this.basecurrencycd
            this.M_GL_JournalEntryBySubportfolio.currencycdLabel = this.basecurrencycd + this.separator +this.basecurrencycdlabel
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
                        this.M_GL_JournalEntryBySubportfolio.referenceno = ""

                        if (data.RunningCd && data.RunningCd != "") {
                            this.RunningCd = data.RunningCd
                            this.PI_referenceno.cProtect = true
                            this.M_GL_JournalEntryBySubportfolio.referenceno = "(auto number)"
                        }
                        else {
                            this.PI_referenceno.cProtect = false
                            this.M_GL_JournalEntryBySubportfolio.referenceno = ""
                        }

                        this.GetCurrencyRateDefault()
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryBySubportfolio.currencycd = data.id
            this.M_GL_JournalEntryBySubportfolio.currencycdLabel = data.label
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
                this.error = false
                this.err1 = false
            }
            else {
                this.$store.commit('setEditStatus', false)
                this.$store.commit('setDeleteStatus', false)
                this.error = true
                this.err1 = true
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
            if (this.UniqueReferenceNo == "Y") {
                //GetGLJorunalHeader
                var param = {
                    OptionFunctionCd: 'GetGLJorunalHeader',
                    ModuleCd: this.Module,
                    BatchNo: 0,
                    JournalNo: 0,
                    ReferenceNo: this.M_GL_JournalEntryBySubportfolio.referenceno,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    Flag: 3
                }

                this.FnDynamicFunction(param)
                .then(FnOpt2 => {
                    if (FnOpt2 == null) return
                    if (FnOpt2 != null) { 
                        var data = FnOpt2[0]
                        if (data.CountRef != 0 && this.M_GL_JournalEntryBySubportfolio.referenceno != "(auto number)") {
                            this.alertError("Reference No is not unique")
                            return
                        }

                        // var refno = this.M_GL_JournalEntryBySubportfolio.referenceno

                        // if (this.M_GL_JournalEntryBySubportfolio.referenceno == "(auto number)") {
                        if (this.RunningCd && this.RunningCd != '') {
                            this.FnGenerateRunningCode(
                                this.getDataUser().SubPortfolioCd,
                                this.RunningCd,
                                this.getDataUser().UserId,
                                this.M_GL_JournalEntryBySubportfolio.journaldate
                            )
                            .then(dt => {
                                this.M_GL_JournalEntryBySubportfolio.referenceno = dt.RunningCode

                                var param = {			
                                    OptionSeq: this.getOptionSeq().OptionSeq,
                                    LineNo: this.$parent.data.PageOrder,
                                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                    RunningCd: this.RunningCd,
                                    TrxType: this.M_GL_JournalEntryBySubportfolio.trxtype == '' || this.M_GL_JournalEntryBySubportfolio.trxtype == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxtype ,
                                    JournalDate: this.M_GL_JournalEntryBySubportfolio.journaldate == '' || this.M_GL_JournalEntryBySubportfolio.journaldate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.journaldate,
                                    TrxDate: this.M_GL_JournalEntryBySubportfolio.trxdate == '' || this.M_GL_JournalEntryBySubportfolio.trxdate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxdate ,
                                    CurrencyCd: this.M_GL_JournalEntryBySubportfolio.currencycd == '' || this.M_GL_JournalEntryBySubportfolio.currencycd == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.currencycd ,
                                    CurrencyRate: this.M_GL_JournalEntryBySubportfolio.currencyrate == '' || this.M_GL_JournalEntryBySubportfolio.currencyrate == null ? 0 : this.replaceAllString(this.M_GL_JournalEntryBySubportfolio.currencyrate, ',', '', 'number'),
                                    AuditStatus: this.M_GL_JournalEntryBySubportfolio.auditstatus,
                                    Descs: this.M_GL_JournalEntryBySubportfolio.descs,
                                    ReferenceNo: this.M_GL_JournalEntryBySubportfolio.referenceno,
                                    // BatchNo: this.M_GL_JournalEntryBySubportfolio.batchno == '' || this.M_GL_JournalEntryBySubportfolio.batchno == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.batchno ,
                                    BatchNo: 0 ,
                                    JournalSource: this.getDataUser().UserId,
                                    User: this.getDataUser().UserId,
                                }

                                this.postJSON(this.getUrlInsert(), param)
                                .then((response) => {
                                    if(response == null) return

                                    //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                                    this.$parent.resultInsert(response.Message)
                                        
                                    
                                })
                            })
                        }
                        else {
                            var param = {			
                                OptionSeq: this.getOptionSeq().OptionSeq,
                                LineNo: this.$parent.data.PageOrder,
                                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                RunningCd: this.RunningCd,
                                TrxType: this.M_GL_JournalEntryBySubportfolio.trxtype == '' || this.M_GL_JournalEntryBySubportfolio.trxtype == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxtype ,
                                JournalDate: this.M_GL_JournalEntryBySubportfolio.journaldate == '' || this.M_GL_JournalEntryBySubportfolio.journaldate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.journaldate,
                                TrxDate: this.M_GL_JournalEntryBySubportfolio.trxdate == '' || this.M_GL_JournalEntryBySubportfolio.trxdate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxdate ,
                                CurrencyCd: this.M_GL_JournalEntryBySubportfolio.currencycd == '' || this.M_GL_JournalEntryBySubportfolio.currencycd == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.currencycd ,
                                CurrencyRate: this.M_GL_JournalEntryBySubportfolio.currencyrate == '' || this.M_GL_JournalEntryBySubportfolio.currencyrate == null ? 0 : this.replaceAllString(this.M_GL_JournalEntryBySubportfolio.currencyrate, ',', '', 'number'),
                                AuditStatus: this.M_GL_JournalEntryBySubportfolio.auditstatus,
                                Descs: this.M_GL_JournalEntryBySubportfolio.descs,
                                ReferenceNo: this.M_GL_JournalEntryBySubportfolio.referenceno,
                                BatchNo: 0 ,
                                JournalSource: this.getDataUser().UserId,
                                User: this.getDataUser().userid,
                            }

                            this.postJSON(this.getUrlInsert(), param)
                            .then((response) => {
                                if(response == null) return

                                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                                this.$parent.resultInsert(response.Message)
                                    
                                
                            })  
                        }
                    }
                })
            }
            else {
                if (this.RunningCd && this.RunningCd != '') {
                    this.FnGenerateRunningCode(
                        this.getDataUser().SubPortfolioCd,
                        this.RunningCd,
                        this.getDataUser().UserId,
                        this.M_GL_JournalEntryBySubportfolio.journaldate
                    )
                    .then(dt => {
                        this.M_GL_JournalEntryBySubportfolio.referenceno = dt.RunningCode

                        var param = {			
                            OptionSeq: this.getOptionSeq().OptionSeq,
                            LineNo: this.$parent.data.PageOrder,
                            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                            RunningCd: this.RunningCd,
                            TrxType: this.M_GL_JournalEntryBySubportfolio.trxtype == '' || this.M_GL_JournalEntryBySubportfolio.trxtype == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxtype ,
                            JournalDate: this.M_GL_JournalEntryBySubportfolio.journaldate == '' || this.M_GL_JournalEntryBySubportfolio.journaldate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.journaldate,
                            TrxDate: this.M_GL_JournalEntryBySubportfolio.trxdate == '' || this.M_GL_JournalEntryBySubportfolio.trxdate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxdate ,
                            CurrencyCd: this.M_GL_JournalEntryBySubportfolio.currencycd == '' || this.M_GL_JournalEntryBySubportfolio.currencycd == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.currencycd ,
                            CurrencyRate: this.M_GL_JournalEntryBySubportfolio.currencyrate == '' || this.M_GL_JournalEntryBySubportfolio.currencyrate == null ? 0 : this.replaceAllString(this.M_GL_JournalEntryBySubportfolio.currencyrate, ',', '', 'number'),
                            AuditStatus: this.M_GL_JournalEntryBySubportfolio.auditstatus,
                            Descs: this.M_GL_JournalEntryBySubportfolio.descs,
                            ReferenceNo: this.M_GL_JournalEntryBySubportfolio.referenceno,
                            // BatchNo: this.M_GL_JournalEntryBySubportfolio.batchno == '' || this.M_GL_JournalEntryBySubportfolio.batchno == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.batchno ,
                            BatchNo: 0 ,
                            JournalSource: this.getDataUser().UserId,
                            User: this.getDataUser().UserId,
                        }

                        this.postJSON(this.getUrlInsert(), param)
                        .then((response) => {
                            if(response == null) return

                            //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                            this.$parent.resultInsert(response.Message)
                                
                            
                        })
                    })
                }
                else {
                    var param = {			
                        OptionSeq: this.getOptionSeq().OptionSeq,
                        LineNo: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        RunningCd: this.RunningCd,
                        TrxType: this.M_GL_JournalEntryBySubportfolio.trxtype == '' || this.M_GL_JournalEntryBySubportfolio.trxtype == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxtype ,
                        JournalDate: this.M_GL_JournalEntryBySubportfolio.journaldate == '' || this.M_GL_JournalEntryBySubportfolio.journaldate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.journaldate,
                        TrxDate: this.M_GL_JournalEntryBySubportfolio.trxdate == '' || this.M_GL_JournalEntryBySubportfolio.trxdate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxdate ,
                        CurrencyCd: this.M_GL_JournalEntryBySubportfolio.currencycd == '' || this.M_GL_JournalEntryBySubportfolio.currencycd == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.currencycd ,
                        CurrencyRate: this.M_GL_JournalEntryBySubportfolio.currencyrate == '' || this.M_GL_JournalEntryBySubportfolio.currencyrate == null ? 0 : this.replaceAllString(this.M_GL_JournalEntryBySubportfolio.currencyrate, ',', '', 'number'),
                        AuditStatus: this.M_GL_JournalEntryBySubportfolio.auditstatus,
                        Descs: this.M_GL_JournalEntryBySubportfolio.descs,
                        ReferenceNo: this.M_GL_JournalEntryBySubportfolio.referenceno,
                        BatchNo: 0 ,
                        JournalSource: this.getDataUser().UserId,
                        User: this.getDataUser().userid,
                    }

                    this.postJSON(this.getUrlInsert(), param)
                    .then((response) => {
                        if(response == null) return

                        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
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
                JournalNo: this.M_GL_JournalEntryBySubportfolio.journalno,
                TrxType: this.M_GL_JournalEntryBySubportfolio.trxtype == '' || this.M_GL_JournalEntryBySubportfolio.trxtype == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxtype ,
                JournalDate: this.M_GL_JournalEntryBySubportfolio.journaldate == '' || this.M_GL_JournalEntryBySubportfolio.journaldate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.journaldate,
                TrxDate: this.M_GL_JournalEntryBySubportfolio.trxdate == '' || this.M_GL_JournalEntryBySubportfolio.trxdate == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.trxdate ,
                AuditStatus: this.M_GL_JournalEntryBySubportfolio.auditstatus,
                CurrencyCd: this.M_GL_JournalEntryBySubportfolio.currencycd == '' || this.M_GL_JournalEntryBySubportfolio.currencycd == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.currencycd ,
                CurrencyRate: this.M_GL_JournalEntryBySubportfolio.currencyrate == '' || this.M_GL_JournalEntryBySubportfolio.currencyrate == null ? 0 : this.replaceAllString(this.M_GL_JournalEntryBySubportfolio.currencyrate, ',', '', 'number'),
                Descs: this.M_GL_JournalEntryBySubportfolio.descs,
                ReferenceNo: this.M_GL_JournalEntryBySubportfolio.referenceno,
                BatchNo: this.M_GL_JournalEntryBySubportfolio.batchno == '' || this.M_GL_JournalEntryBySubportfolio.batchno == null ? 'NULL' : this.M_GL_JournalEntryBySubportfolio.batchno ,
                User: this.getDataUser().UserId,
                LastUpdateStamp: this.M_GL_JournalEntryBySubportfolio.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_JournalEntryBySubportfolio = {
                batchno: 0,
                referenceno: '',
                roughbookstatus: '',
                auditstatus: 'N',
                status: '',
                journalno: 0,
                journaldate: this.momentDate(new Date()),
                finperiod: 0,
                finyear: 0,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                documentcount: '',
                batchstatus: '',
                currencycd: '',
                currencycdLabel: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                trxtype: '',
                trxtypeLabel: '',
                currencybasesign: '',
                debitamt: '',
                creditamt: '',
                balance: '',
                trxdate: this.momentDate(new Date()),
                currencyrate: '',
                descs: ''
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
                console.log(data)
this.M_GL_JournalEntryBySubportfolio = {
                batchno: data.batchno,
                referenceno: data.referenceno,
                roughbookstatus: data.roughbookstatus,
                status: data.status == "B" ? true : "",
                auditstatus: data.auditstatus,
                journalno: data.journalno,
                journaldate: data.journaldate,
                finperiod: data.finperiod,
                finyear: data.finyear,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                documentcount: data.documentcount,
                batchstatus: data.batchstatus == "B" ? true : "",
                currentdocumentcount: data.currentdocumentcount,
                currentbatchtotal: data.currentbatchtotal,
                trxtype: data.trxtype,
                accountperiod: data.finperiod + '/' + data.finyear,
                trxtypeLabel: '',
                currencycd: data.currencycd,
                currencycdLabel: '',
                debitamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountdebit, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountdebit, this.decimal).toString() + ")",
                creditamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountcredit, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountcredit, this.decimal).toString() + ")",
                balance: data.currencybasesign + ". " + this.isCurrency(data.basebalance, this.decimal).toString() + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxbalance, this.decimal).toString() + ")",
                currencybasesign: data.currencybasesign,
                trxdate: data.trxdate,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                descs: data.descs
                    }
                //  console.log('getdataby',this.M_GL_JournalEntryBySubportfolio)

                this.M_GL_JournalEntryBySubportfolio.batchnoLabel = this.M_GL_JournalEntryBySubportfolio.batchno != null ? data.batchno :'' 
                this.M_GL_JournalEntryBySubportfolio.trxtypeLabel = this.M_GL_JournalEntryBySubportfolio.trxtype != null ? data.trxtype :'' 
                this.M_GL_JournalEntryBySubportfolio.currencycdLabel = this.M_GL_JournalEntryBySubportfolio.currencycd != null ? data.currencycd :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                // if(data.roughbookstatus == 'Y'){
                //     this.error = true
                //     this.err1 = true
                // }
                // else{
                //     this.error = false
                //     this.err1 = false
                // }
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
                    this.JournalSource = data.JournalSource
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

