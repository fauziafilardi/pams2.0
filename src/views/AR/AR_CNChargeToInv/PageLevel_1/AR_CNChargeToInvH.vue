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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_CNChargeToInvH.batchno" :label="M_AR_CNChargeToInvH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_CNChargeToInvH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_CNChargeToInvH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_CNChargeToInvH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_CNChargeToInvH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_CNChargeToInvH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_CNChargeToInvH.debtorcd" :label="M_AR_CNChargeToInvH.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_CNChargeToInvH.trxtype" :label="M_AR_CNChargeToInvH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AR_CNChargeToInvH.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AR_CNChargeToInvH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_CNChargeToInvH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AR_CNChargeToInvH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_CNChargeToInvH.currencycd" :label="M_AR_CNChargeToInvH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Transaction
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_CNChargeToInvH.allocatedamt"  ref="ref_creditamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatallocatedamt" v-model="M_AR_CNChargeToInvH.vatallocatedamt"  ref="ref_vatallocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalnetallocatedamt" v-model="M_AR_CNChargeToInvH.totalnetallocatedamt"  ref="ref_totalnetallocatedamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalwithholdingallocatedamt" v-model="M_AR_CNChargeToInvH.totalwithholdingallocatedamt"  ref="ref_totalwithholdingallocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AR_CNChargeToInvH.totalallocationamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CNChargeToInvH.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' ", //AND BatchStatus<>'P' AND Source='E' sudah ada di view'a
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            RunningCd: '',

            M_AR_CNChargeToInvH :{
                totalnetallocatedamt: '',
                totalvatallocateda: '',
                totalwithholdingallocatedamt: '',
                batchno: 0,
                chequereferenceno: '',
                debtorcd: '',
                trxtype: '',
                creditdate: '',
                descs: '',
                currencycd: '',
                allocatedamt: '',
                totalallocationamt: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                trxtypedescs: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                creditno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                vatallocatedamt:0
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
                cLabel: 'Batch No<asp:Label ID="lblBatchRequired" runat="server">*', 
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
                cLabel: 'Doc. Count&nbsp;', 
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
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD ='AR' and TrxClass='C'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_creditno: { 
                cValidate :'max:20', 
                cName: 'creditno', 
                cLabel: 'Credit Note No', 
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
            PI_creditdate: { 
                cValidate :'required', 
                cName: 'creditdate', 
                cLabel: 'Credit Note Date', 
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

            PI_chequereferenceno: { 
                cValidate :'max:20', 
                cName: 'chequereferenceno', 
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
            PI_creditamt: { 
                cValidate :'', 
                cName: 'allocatedamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_vatallocatedamt: { 
                cValidate :'', 
                cName: 'vatallocatedamt', 
                cLabel: 'VAT Allocated', 
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
            PI_totalnetallocatedamt: { 
                cValidate :'', 
                cName: 'totalnetallocatedamt', 
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
            PI_totalwithholdingallocatedamt: { 
                cValidate :'', 
                cName: 'totalwithholdingallocatedamt', 
                cLabel: 'Withholding Allocated', 
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
            PI_allocatedamt: { 
                cValidate :'', 
                cName: 'totalallocationamt', 
                cLabel: 'Total Allocated', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:13, 
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
            this.M_AR_CNChargeToInvH.batchno = data.id
            this.M_AR_CNChargeToInvH.batchnoLabel = data.label
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
        this.$nextTick(() => {
            this.M_AR_CNChargeToInvH.debtorcd = data.id
            this.M_AR_CNChargeToInvH.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNChargeToInvH.trxtype = data.id
            this.M_AR_CNChargeToInvH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,this.Module,data.id).then(dt => 
        { if (dt != null) { 
            var dt25 = dt[0]
             this.M_AR_CNChargeToInvH.descs = dt25.TrxTypeDescs
             this.M_AR_CNChargeToInvH.trxtypedescs = dt25.TrxTypeDescs
             if (dt25.RunningCd != "")
                  { this.PI_creditno.cProtect = true
                  this.M_AR_CNChargeToInvH.creditno = "(auto)"
                  this.RunningCd = dt25.RunningCd }
        else {
             this.PI_creditno.cProtect = false
                  this.M_AR_CNChargeToInvH.creditno = ""
                  this.RunningCd = "" } } })

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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNChargeToInvH.currencycd = data.id
            this.M_AR_CNChargeToInvH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
                    _Message_: "Batch No = "+value.BatchNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId,
                    EntryType: value.EntryType
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
            if(this.PI_creditno.cProtect==true){
                this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AR_CNChargeToInvH.creditdate).then(dt9 =>{
                if (dt9 != null) {
                    this.M_AR_CNChargeToInvH.creditno = dt9.RunningCode
                    this.dataSave()
                    // alert(this.M_AR_DebitNoteH.debitno)
                }
                })
            }
            else{
                this.dataSave()
            }
        },
        dataSave(){
            var dataUpdate = []
            var param1 = {			
                _Method_:'SAVE',
                _LineNo_: this.$parent.data.PageOrder ,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_CNChargeToInvH.batchno == '' || this.M_AR_CNChargeToInvH.batchno == null ? 0 : this.M_AR_CNChargeToInvH.batchno ,                
                Source: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_INVOICE,
                ChequeReferenceNo: this.M_AR_CNChargeToInvH.chequereferenceno,                
                DebtorCd: this.M_AR_CNChargeToInvH.debtorcd == '' || this.M_AR_CNChargeToInvH.debtorcd == null ? 'NULL' : this.M_AR_CNChargeToInvH.debtorcd ,
                TrxType: this.M_AR_CNChargeToInvH.trxtype == '' || this.M_AR_CNChargeToInvH.trxtype == null ? 'NULL' : this.M_AR_CNChargeToInvH.trxtype ,
                ModuleCd: this.Module,
                CreditNo: this.M_AR_CNChargeToInvH.creditno,
                CreditDate: this.M_AR_CNChargeToInvH.creditdate,
                Descs: this.M_AR_CNChargeToInvH.descs,
                CurrencyCd: this.M_AR_CNChargeToInvH.currencycd == '' || this.M_AR_CNChargeToInvH.currencycd == null ? 'NULL' : this.M_AR_CNChargeToInvH.currencycd ,
                Status: this.ARFieldHelper.CREDIT_HEADER_STATUS_ERROR,
                Remarks: this.M_AR_CNChargeToInvH.remarks,
                UserInput: this.getDataUser().UserId                 
            }
            var param2 = {			
                _Method_:'SAVE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_CNChargeToInvH.creditno,
                BatchNo: this.M_AR_CNChargeToInvH.batchno == '' || this.M_AR_CNChargeToInvH.batchno == null ? 0 : this.M_AR_CNChargeToInvH.batchno ,                
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_INVOICE,
                UserEdit: this.getDataUser().UserId     
                         
            }
            // this.postJSON(this.getUrlInsert(), param)
            // .then((response) => {
            //   this.$parent.resultInsert(response.Message)
            //   this.dataSave2()
            // })
            dataUpdate.push({
                A_Insert :param1,
                B_Insert : param2
            })
             var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                // this.$parent.resultPost()
                this.$parent.resultUpdate('Data Has Been Inserted Successfully')
            })

        },
        dataSave2(){
            var param2 = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_CNChargeToInvH.creditno,
                BatchNo: this.M_AR_CNChargeToInvH.batchno == '' || this.M_AR_CNChargeToInvH.batchno == null ? 0 : this.M_AR_CNChargeToInvH.batchno ,                
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_INVOICE,
                UserEdit: this.getDataUser().UserId     
                         
            }
            this.postEncode(this.getUrlInsert2(), param2)
            .then((response) => {
              this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_CNChargeToInvH.creditno,
                DebtorCd: this.M_AR_CNChargeToInvH.debtorcd == '' || this.M_AR_CNChargeToInvH.debtorcd == null ? 'NULL' : this.M_AR_CNChargeToInvH.debtorcd ,
                TrxType: this.M_AR_CNChargeToInvH.trxtype == '' || this.M_AR_CNChargeToInvH.trxtype == null ? 'NULL' : this.M_AR_CNChargeToInvH.trxtype ,
                CreditDate: this.M_AR_CNChargeToInvH.creditdate,
                Descs: this.M_AR_CNChargeToInvH.descs,
                CurrencyCd: this.M_AR_CNChargeToInvH.currencycd == '' || this.M_AR_CNChargeToInvH.currencycd == null ? 'NULL' : this.M_AR_CNChargeToInvH.currencycd ,
                ChequeReferenceNo: this.M_AR_CNChargeToInvH.chequereferenceno,
                Remarks: this.M_AR_CNChargeToInvH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CNChargeToInvH.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CNChargeToInvH = {
                totalnetallocatedamt: 0,
                totalvatallocateda: 0,
                totalwithholdingallocatedamt: 0,
                batchno: 0,
                chequereferenceno: '',
                debtorcd: '',
                trxtype: '',
                creditdate: this.M_FormatingDate(new Date()),
                descs: '',
                currencycd: '',
                allocatedamt: 0,
                totalallocationamt: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                trxtypedescs: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                creditno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                vatallocatedamt:0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
            if(this.M_AR_CNChargeToInvH.totalallocationamt == 0 ){
                    this.PI_creditdate.cProtect = false
                }else{
                    this.PI_creditdate.cProtect = true
                }
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            var dataDelete2 = []
        
            data.forEach((value) => {
                dataDelete2.push({
                    _MethodApi_ : 'DELETE2',
                    _LineNo_ : this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    CreditNo: value.CreditNo,
                    EntryType: 'E',
                    UserEdit: this.getDataUser().UserId,
                    BatchNo: value.BatchNo,
                    _Message_:''
                })
                
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    CreditNo: value.CreditNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp : value.LastUpdateStamp,
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
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                creditno: record.CreditNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_CNChargeToInvH = {
                totalnetallocatedamt: this.isCurrency(data.totalnetallocatedamt,this.decimal),
                totalvatallocateda: this.isCurrency(data.totalvatallocateda,this.decimal),
                totalwithholdingallocatedamt: this.isCurrency(data.totalwithholdingallocatedamt,this.decimal),
                batchno: data.batchno,
                chequereferenceno: data.chequereferenceno,
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                creditdate: data.creditdate,
                descs: data.descs,
                currencycd: data.currencycd,
                allocatedamt: this.isCurrency(data.allocatedamt,this.decimal),
                totalallocationamt: this.isCurrency(data.totalallocationamt,this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                debtorname: data.debtorname,
                trxtypedescs: data.trxtypedescs,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                subportfoliocd: data.subportfoliocd,
                creditno: data.creditno,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                vatallocatedamt: this.isCurrency(data.totalvatallocatedamt,this.decimal)
                    }
                 

                this.M_AR_CNChargeToInvH.batchnoLabel = this.M_AR_CNChargeToInvH.batchno != null ? data.batchno + this.separator  :'' 
                this.M_AR_CNChargeToInvH.debtorcdLabel = this.M_AR_CNChargeToInvH.debtorcd != null ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_CNChargeToInvH.trxtypeLabel = this.M_AR_CNChargeToInvH.trxtype != null ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AR_CNChargeToInvH.currencycdLabel = this.M_AR_CNChargeToInvH.currencycd != null ? data.currencycd + this.separator + data.currencydescs  :'' 
         
                
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

