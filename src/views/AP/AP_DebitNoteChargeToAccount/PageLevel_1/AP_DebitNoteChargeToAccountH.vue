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
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_DebitNoteChargeToAccountH.creditorcd" :label="M_AP_DebitNoteChargeToAccountH.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_DebitNoteChargeToAccountH.trxtype" :label="M_AP_DebitNoteChargeToAccountH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OndebitnoChange" :prop="PI_debitno" v-model="M_AP_DebitNoteChargeToAccountH.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AP_DebitNoteChargeToAccountH.debitdate"  ref="ref_debitdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_DebitNoteChargeToAccountH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AP_DebitNoteChargeToAccountH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_DebitNoteChargeToAccountH.currencycd" :label="M_AP_DebitNoteChargeToAccountH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_DebitNoteChargeToAccountH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AP_DebitNoteChargeToAccountH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_DebitNoteChargeToAccountH.remarks"  ref="ref_remarks" />
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
        NewDebitNo: '',
        RunningCd: '',
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_DebitNoteChargeToAccountH :{
                batchno: 0,
                chequereferenceno: '',
                creditorcd: '',
                trxtype: '',
                debitno: '',
                debitdate: this.getToday(),
                descs: '',
                currencycd: '',
                currencyrate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                creditamt: 0,
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                creditorname: '',
                trxtypedescs: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' And Status='A' "   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditorCd,Name' 
                        }, 
                cValidate :'required', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code ', 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AP' AND TrxClass='D'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_debitno: { 
                cValidate :'required', 
                cName: 'debitno', 
                cLabel: 'Debit Note No', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitdate: { 
                cValidate :'required', 
                cName: 'debitdate', 
                cLabel: 'Debit Note Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
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
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CurrencyCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
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
                cLabel: 'Trans. Amount', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder: 10, 
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
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DebitNoteChargeToAccountH.creditorcd = data.id
            this.M_AP_DebitNoteChargeToAccountH.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_DebitNoteChargeToAccountH.trxtype = data.id
            this.M_AP_DebitNoteChargeToAccountH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,this.Module,data.id).then(dt => { 
                  if (dt != null) { 
                  var dt25 = dt[0]
                  
                    this.RunningCd = dt25.RunningCd != null ? dt25.RunningCd : ''
                    this.M_AP_DebitNoteChargeToAccountH.runningcd = dt25.RunningCd != null ? dt25.RunningCd : ''

                    this.M_AP_DebitNoteChargeToAccountH.descs = dt25.TrxTypeDescs
                    this.M_AP_DebitNoteChargeToAccountH.trxtypedescs = dt25.TrxTypeDescs

                    if(this.RunningCd != ""){
                      this.M_AP_DebitNoteChargeToAccountH.debitno = '(auto)'
                      this.PI_debitno.cProtect = true
                    }
                    else{
                      this.M_AP_DebitNoteChargeToAccountH.debitno = ''
                      this.PI_debitno.cProtect = false
                    }
                  } 
              })
            }
        })
        this.$forceUpdate()
        },
        OndebitnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{debitno}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DebitNoteChargeToAccountH.currencycd = data.id
            this.M_AP_DebitNoteChargeToAccountH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_AP_DebitNoteChargeToAccountH.debitdate, data.id)
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_DebitNoteChargeToAccountH.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal) 
                    }                      
                })
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
        },		
		paramFromParent(){
        },	
		M_CheckboxChecked(data, status, index){

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
                    UserInput : this.getDataUser().UserId
                    // Source: value.Source
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
           if (this.M_AP_DebitNoteChargeToAccountH.debitno == '(auto)'){
            this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AP_DebitNoteChargeToAccountH.debitdate).then(dt9 =>{
              if (dt9 != null) {

                this.NewDebitNo = dt9.RunningCode
                this.dataSave()
              }
            })
          }else{
            this.NewDebitNo = this.M_AP_DebitNoteChargeToAccountH.debitno
            this.dataSave()
          }
        },
        dataSave() {
            var dataSave = []
            var param1 = {			
                _Method_:'SAVE',
                _LineNo_: this.$parent.data.PageOrder ,
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0, // this.M_AP_DebitNoteChargeToAccountH.batchno == '' || this.M_AP_DebitNoteChargeToAccountH.batchno == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.batchno ,
                Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_DEBIT_NOTE_TO_ACCOUNT,
                CreditorCd: this.M_AP_DebitNoteChargeToAccountH.creditorcd == '' || this.M_AP_DebitNoteChargeToAccountH.creditorcd == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.creditorcd ,
                TrxType: this.M_AP_DebitNoteChargeToAccountH.trxtype == '' || this.M_AP_DebitNoteChargeToAccountH.trxtype == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.trxtype ,
                ModuleCd: this.M_AP_DebitNoteChargeToAccountH.modulecd,
                DebitNo: NewDebitNo, //this.M_AP_DebitNoteChargeToAccountH.debitno == '' || this.M_AP_DebitNoteChargeToAccountH.debitno == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.debitno ,
                DebitDate: this.M_AP_DebitNoteChargeToAccountH.debitdate == '' || this.M_AP_DebitNoteChargeToAccountH.debitdate == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.debitdate ,
                Descs: this.M_AP_DebitNoteChargeToAccountH.descs,
                CurrencyCd: this.M_AP_DebitNoteChargeToAccountH.currencycd == '' || this.M_AP_DebitNoteChargeToAccountH.currencycd == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.currencycd ,
                CurrencyRate: this.M_AP_DebitNoteChargeToAccountH.currencyrate ? this.replaceAllString(this.M_AP_DebitNoteChargeToAccountH.currencyrate,',','','number') : 0 ,
                ChequeReferenceNo: this.M_AP_DebitNoteChargeToAccountH.chequereferenceno,
                Status: this.APFieldHelper.DEBIT_HEADER_STATUS_ERROR,
                Remarks: this.M_AP_DebitNoteChargeToAccountH.remarks,
                UserInput: this.getDataUser().UserId 
            }

            var param2 = {			
              _Method_:'SAVE2',
              _LineNo_: this.$parent.data.PageOrder ,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              BatchNo: 0,//this.M_AP_DebitNoteChargeToAccountH.batchno == '' || this.M_AP_DebitNoteChargeToAccountH.batchno == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.batchno ,
              DebitNo: this.NewDebitNo, //this.M_AP_DebitNoteChargeToAccountH.debitno,
              UserEdit: this.getDataUser().UserId ,
              EntryType: 'D' 
            }

            dataSave.push({
                A_Insert : param1,
                B_Insert : param2
            })
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataSave
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultInsert('Data Has Been Inserted Successfully')
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditorCd: this.M_AP_DebitNoteChargeToAccountH.creditorcd == '' || this.M_AP_DebitNoteChargeToAccountH.creditorcd == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.creditorcd ,
                TrxType: this.M_AP_DebitNoteChargeToAccountH.trxtype == '' || this.M_AP_DebitNoteChargeToAccountH.trxtype == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.trxtype ,
                DebitNo: this.M_AP_DebitNoteChargeToAccountH.debitno == '' || this.M_AP_DebitNoteChargeToAccountH.debitno == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.debitno ,
                DebitDate: this.M_AP_DebitNoteChargeToAccountH.debitdate == '' || this.M_AP_DebitNoteChargeToAccountH.debitdate == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.debitdate ,
                Descs: this.M_AP_DebitNoteChargeToAccountH.descs,
                ChequeReferenceNo: this.M_AP_DebitNoteChargeToAccountH.chequereferenceno,
                CurrencyCd: this.M_AP_DebitNoteChargeToAccountH.currencycd == '' || this.M_AP_DebitNoteChargeToAccountH.currencycd == null ? 'NULL' : this.M_AP_DebitNoteChargeToAccountH.currencycd ,
                CurrencyRate: this.M_AP_DebitNoteChargeToAccountH.currencyrate ? this.replaceAllString(this.M_AP_DebitNoteChargeToAccountH.currencyrate,',','','number') : 0 ,
                Remarks: this.M_AP_DebitNoteChargeToAccountH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_DebitNoteChargeToAccountH.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
				
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_DebitNoteChargeToAccountH = {
                batchno: 0,
                chequereferenceno: '',
                creditorcd: '',
                trxtype: '',
                debitno: '',
                debitdate: this.getToday(),
                descs: '',
                currencycd: '',
                currencyrate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                creditamt: this.isCurrency(0),
                documentcount: 0,
                batchtotal: 0,
                batchstatus: '',
                creditorname: '',
                trxtypedescs: '',
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            
		},
        M_New(){
            this.$refs.ref_creditorcd.focus()
            this.PI_creditorcd.cProtect = false
            this.PI_currencycd.cProtect = false
        },
        M_Edit(){
            var param = {
                OptionFunctionCd: "GetAPDebitNoteChargeToAccountDetailCount",
                ModuleCd: this.Module,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRow.DebitNo
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null || ress.length == 0) return
            
                var data = ress[0]
                
                if(parseInt(data.N0) > 0 ){
                    this.PI_creditorcd.cProtect = true
                    this.PI_currencycd.cProtect = true

                    this.$refs.ref_trxtype.focus()
                }else{
                    this.PI_creditorcd.cProtect = false
                    this.PI_currencycd.cProtect = false

                    this.$refs.ref_creditorcd.focus()
                }
            })
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []
            var dataDelete2 = []

			
			 data.forEach((value) => {
                dataDelete2.push({
                    _MethodApi_ : 'DELETE2',
                    _LineNo_ : 0,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    EntryType: 'D',
                    UserEdit: this.getDataUser().UserId ,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo,
                    _Message_:''
                })

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId ,
                    LastUpdateStamp: value.LastUpdateStamp,
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
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_DebitNoteChargeToAccountH = {
                batchno: data.batchno,
                chequereferenceno: data.chequereferenceno,
                creditorcd: data.creditorcd,
                trxtype: data.trxtype,
                debitno: data.debitno,
                debitdate: data.debitdate,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                documentcount: this.isCurrency(data.documentcount, this.decimal),
                batchtotal: this.isCurrency(data.batchtotal, this.decimal),
                batchstatus: data.batchstatus,
                creditorname: data.creditorname,
                trxtypedescs: data.trxtypedescs,
                currentbatchtotal: this.isCurrency(data.currentbatchtotal, this.decimal),
                currentdocumentcount: this.isCurrency(data.currentdocumentcount, this.decimal),
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
            

                this.M_AP_DebitNoteChargeToAccountH.creditorcdLabel = this.M_AP_DebitNoteChargeToAccountH.creditorcd != null && this.M_AP_DebitNoteChargeToAccountH.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_DebitNoteChargeToAccountH.trxtypeLabel = this.M_AP_DebitNoteChargeToAccountH.trxtype != null && this.M_AP_DebitNoteChargeToAccountH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AP_DebitNoteChargeToAccountH.currencycdLabel = this.M_AP_DebitNoteChargeToAccountH.currencycd != null && this.M_AP_DebitNoteChargeToAccountH.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 


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

