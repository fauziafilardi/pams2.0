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
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_CNChargeToAccountH.batchno" :label="M_AR_CNChargeToAccountH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_CNChargeToAccountH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_CNChargeToAccountH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_CNChargeToAccountH.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_AR_CNChargeToAccountH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_AR_CNChargeToAccountH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_CNChargeToAccountH.debtorcd" :label="M_AR_CNChargeToAccountH.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_CNChargeToAccountH.trxtype" :label="M_AR_CNChargeToAccountH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_hiddencontactid" v-model="M_AR_CNChargeToAccountH.hiddencontactid"  ref="ref_hiddencontactid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AR_CNChargeToAccountH.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AR_CNChargeToAccountH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_CNChargeToAccountH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AR_CNChargeToAccountH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_CNChargeToAccountH.currencycd" :label="M_AR_CNChargeToAccountH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_CNChargeToAccountH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_CNChargeToAccountH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CNChargeToAccountH.remarks"  ref="ref_remarks" />
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

            M_AR_CNChargeToAccountH :{
                batchno: 0,
                chequereferenceno: '',
                debtorcd: '',
                trxtype: '',
                creditno: '',
                creditdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                creditamt: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                trxtypedescs: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                hiddencontactid: ''
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARBatchMaster'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: 'Batch No<asp:Label ID="lblBatchRequired" runat="server">*', 
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
                cOrder: 2, 
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
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status ='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='C' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_hiddencontactid: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_creditno: { 
                cValidate :'required|max:20', 
                cName: 'creditno', 
                cLabel: 'Credit Note No', 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cLabel: 'Credit Note Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder:7, 
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
                cOrder: 8, 
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
            PI_creditamt: { 
                cValidate :'', 
                cName: 'creditamt', 
                cLabel: 'Trans. Amount', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:12, 
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
        GetCurrencyRate(CurrencyCd){
        if(CurrencyCd !=''){
            this.FnGetCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_AR_CNChargeToAccountH.creditdate, CurrencyCd)
              .then(ress => {
                  if (ress != null) {
                      this.M_AR_CNChargeToAccountH.currencyrate = this.isCurrency(ress.CurrencyRate) 
                  }                      
              })
        }
      },
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNChargeToAccountH.batchno = data.id
            this.M_AR_CNChargeToAccountH.batchnoLabel = data.label
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
            this.M_AR_CNChargeToAccountH.debtorcd = data.id
            this.M_AR_CNChargeToAccountH.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_CNChargeToAccountH.trxtype = data.id
            this.M_AR_CNChargeToAccountH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,this.Module,data.id).then(dt => 
        { if (dt != null) { 
            var dt25 = dt[0]
             this.M_AR_CNChargeToAccountH.descs = dt25.TrxTypeDescs
             this.M_AR_CNChargeToAccountH.trxtypedescs = dt25.TrxTypeDescs
             if (dt25.TrxTypeDescs != "")
                  { this.PI_creditno.cProtect = true
                  this.M_AR_CNChargeToAccountH.creditno = "(auto)"
                  this.RunningCd = dt25.RunningCd }
        else {
             this.PI_creditno.cProtect = false
                  this.M_AR_CNChargeToAccountH.creditno = ""
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
            this.M_AR_CNChargeToAccountH.currencycd = data.id
            this.M_AR_CNChargeToAccountH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
                    _Message_: "Credit No = "+value.CreditNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    EntryType : value.EntryType,    
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
            if(this.PI_creditno.cProtect==true){
                this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AR_CNChargeToAccountH.creditdate).then(dt9 =>{
                if (dt9 != null) {
                    this.M_AR_CNChargeToAccountH.creditno = dt9.RunningCode
                    this.dataSave()
                    // alert(this.M_AR_DebitNoteH.debitno)
                }
                })
            }else{
                    this.dataSave()
            }
        },
        dataSave(){
            var dataUpdate = []
            var param1 = {			
                _Method_:'SAVE',
                _LineNo_: this.$parent.data.PageOrder ,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_CNChargeToAccountH.batchno == '' || this.M_AR_CNChargeToAccountH.batchno == null ? 0 : this.M_AR_CNChargeToAccountH.batchno ,
                Source: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_ACCOUNT,
                ChequeReferenceNo: this.M_AR_CNChargeToAccountH.chequereferenceno,
                DebtorCd: this.M_AR_CNChargeToAccountH.debtorcd == '' || this.M_AR_CNChargeToAccountH.debtorcd == null ? 'NULL' : this.M_AR_CNChargeToAccountH.debtorcd ,
                TrxType: this.M_AR_CNChargeToAccountH.trxtype == '' || this.M_AR_CNChargeToAccountH.trxtype == null ? 'NULL' : this.M_AR_CNChargeToAccountH.trxtype ,
                ModuleCd: this.Module,
                CreditNo: this.M_AR_CNChargeToAccountH.creditno,
                CreditDate: this.M_AR_CNChargeToAccountH.creditdate,
                Descs: this.M_AR_CNChargeToAccountH.descs,
                CurrencyCd: this.M_AR_CNChargeToAccountH.currencycd == '' || this.M_AR_CNChargeToAccountH.currencycd == null ? 'NULL' : this.M_AR_CNChargeToAccountH.currencycd ,
                CurrencyRate: this.M_AR_CNChargeToAccountH.currencyrate ? this.replaceAllString(this.M_AR_CNChargeToAccountH.currencyrate,',','','number') : 0 ,
                Status: this.ARFieldHelper.CREDIT_HEADER_STATUS_ERROR,
                Remarks: this.M_AR_CNChargeToAccountH.remarks,
                UserInput: this.getDataUser().UserId               
            }
            var param2 = {			
                _Method_:'SAVE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_CNChargeToAccountH.creditno,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE_TO_ACCOUNT,
                BatchNo: this.M_AR_CNChargeToAccountH.batchno == '' || this.M_AR_CNChargeToAccountH.batchno == null ? 'NULL' : this.M_AR_CNChargeToAccountH.batchno ,
                UserEdit: this.getDataUser().UserId                          
            }
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
                this.$parent.resultInsert('Data Has Been Inserted Successfully')
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_CNChargeToAccountH.creditno,
                DebtorCd: this.M_AR_CNChargeToAccountH.debtorcd == '' || this.M_AR_CNChargeToAccountH.debtorcd == null ? 'NULL' : this.M_AR_CNChargeToAccountH.debtorcd ,
                TrxType: this.M_AR_CNChargeToAccountH.trxtype == '' || this.M_AR_CNChargeToAccountH.trxtype == null ? 'NULL' : this.M_AR_CNChargeToAccountH.trxtype ,
                CreditDate: this.M_AR_CNChargeToAccountH.creditdate,
                Descs: this.M_AR_CNChargeToAccountH.descs,
                CurrencyCd: this.M_AR_CNChargeToAccountH.currencycd == '' || this.M_AR_CNChargeToAccountH.currencycd == null ? 'NULL' : this.M_AR_CNChargeToAccountH.currencycd ,
                CurrencyRate: this.M_AR_CNChargeToAccountH.currencyrate ? this.replaceAllString(this.M_AR_CNChargeToAccountH.currencyrate,',','','number') : 0 ,
                ChequeReferenceNo: this.M_AR_CNChargeToAccountH.chequereferenceno,
                Remarks: this.M_AR_CNChargeToAccountH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CNChargeToAccountH.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CNChargeToAccountH = {
                batchno: 0,
                chequereferenceno: '',
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
                creditamt: 0,
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                debtorname: '',
                trxtypedescs: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                hiddencontactid: ''
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
                    RowId: value.RowId,
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
this.M_AR_CNChargeToAccountH = {
                batchno: data.batchno,
                chequereferenceno: data.chequereferenceno,
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                creditno: data.creditno,
                creditdate: data.creditdate,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate,this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                creditamt: this.isCurrency(data.creditamt,this.decimal),
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                debtorname: data.debtorname,
                trxtypedescs: data.trxtypedescs,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                hiddencontactid: data.hiddencontactid
                    }
                 

                this.M_AR_CNChargeToAccountH.batchnoLabel = this.M_AR_CNChargeToAccountH.batchno != null && this.M_AR_CNChargeToAccountH.batchno != '' ? data.batchno + this.separator  :'' 
                this.M_AR_CNChargeToAccountH.debtorcdLabel = this.M_AR_CNChargeToAccountH.debtorcd != null && this.M_AR_CNChargeToAccountH.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_CNChargeToAccountH.trxtypeLabel = this.M_AR_CNChargeToAccountH.trxtype != null && this.M_AR_CNChargeToAccountH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AR_CNChargeToAccountH.currencycdLabel = this.M_AR_CNChargeToAccountH.currencycd != null && this.M_AR_CNChargeToAccountH.currencycd != '' ? data.currencycd + this.separator  :'' 
         

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

