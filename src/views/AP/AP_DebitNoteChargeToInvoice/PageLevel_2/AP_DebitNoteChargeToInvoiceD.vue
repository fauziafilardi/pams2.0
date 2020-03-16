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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AP_DebitNoteChargeToInvoiceD.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_journaltype" v-model="M_AP_DebitNoteChargeToInvoiceD.journaltype"  ref="ref_journaltype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AP_DebitNoteChargeToInvoiceD.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AP_DebitNoteChargeToInvoiceD.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AP_DebitNoteChargeToInvoiceD.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_source" v-model="M_AP_DebitNoteChargeToInvoiceD.source"  ref="ref_source"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_DebitNoteChargeToInvoiceD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_detaildescs" v-model="M_AP_DebitNoteChargeToInvoiceD.detaildescs"  ref="ref_detaildescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_DebitNoteChargeToInvoiceD.currencycd" :label="M_AP_DebitNoteChargeToInvoiceD.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AP_DebitNoteChargeToInvoiceD.taxcd" :label="M_AP_DebitNoteChargeToInvoiceD.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_DebitNoteChargeToInvoiceD.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AP_DebitNoteChargeToInvoiceD.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_DebitNoteChargeToInvoiceD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AP_DebitNoteChargeToInvoiceD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AP_DebitNoteChargeToInvoiceD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AP_DebitNoteChargeToInvoiceD.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndebitnotestatusChange" :prop="PI_debitnotestatus" v-model="M_AP_DebitNoteChargeToInvoiceD.debitnotestatus"  ref="ref_debitnotestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_DebitNoteChargeToInvoiceD.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err1 || err2">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col>
                                                  <label v-show="err1" class="lbl-value-view-form" style="color:red;">*Note : Tax Invoice for this Invoice has already been assigned either VAT No. Or Withholding No  </label>
                                                  <label v-show="err2" class="lbl-value-view-form" style="color:red;">Please proceed with necessary actions </label>
                                                </b-col>
                                            </b-row>                                              
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err3 || err4">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col>
                                                  <label v-show="err3" class="lbl-value-view-form" style="color:red;">*Note : This Invoice has auto generated amortize schedule, some of it already posted with reference no  </label>
                                                  <label v-show="err4" class="lbl-value-view-form" style="color:red;">Please proceed with necessary actions </label>
                                                </b-col>
                                            </b-row>                                              
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
          ValKey: null,
          FormType: "List",
          Module:"AP",
          error: false,
          err1: false,
          err2: false,
          err3: false,
          err4: false,
            propList: {
                initialWhere:"SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_DebitNoteChargeToInvoiceD :{
                trxtype: '',
                journaltype: '',
                creditno: '',
                referenceno: '',
                creditdate: '',
                source: '',
                descs: '',
                detaildescs: '',
                currencycd: '',
                taxcd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                totalamt: '',
                debitnotestatus: 'N',
                remarks: '', 
                debitdate: '',
                creditsequenceno: '',
                debitsequenceno: '',
                debitdate: '',
                debitno: '',
                creditorcd: '',
                currencycd: ''
            }
            ,
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cOrder: 101, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journaltype: { 
                cValidate :'', 
                cName: 'journaltype', 
                cLabel: 'Journal Type', 
                cLabelSize: 4, 
                cOrder: 102, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditno: { 
                cValidate :'', 
                cName: 'creditno', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cOrder: 103, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 104, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditdate: { 
                cValidate :'', 
                cName: 'creditdate', 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cOrder: 105, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_source: { 
                cValidate :'', 
                cName: 'source', 
                cLabel: 'Doc. Source', 
                cLabelSize: 4, 
                cOrder: 106, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 107, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_detaildescs: { 
                cValidate :'', 
                cName: 'detaildescs', 
                cLabel: 'Detail Description', 
                cLabelSize: 4, 
                cOrder: 108, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 109, 
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
                cDisplayColumn: '' ,
            }, 
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 110, 
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
                cDisplayColumn: '' ,
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cOrder: 111, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcurrencyrate: { 
                cValidate :'', 
                cName: 'taxcurrencyrate', 
                cLabel: 'Tax Currency Rate ', 
                cLabelSize: 4, 
                cOrder: 112, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 113, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cOrder: 114, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 115, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cOrder: 116, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitnotestatus: { 
                cValidate :'', 
                cName: 'debitnotestatus', 
                cId: 'rdbdebitnotestatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Debit Note', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 117, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder: 118, 
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
      return this.$store.getters.GetPage2Data
    },
      DataRowPage1(){
      return this.$store.getters.GetPage1Data
    }
    ,GetDataBy1(){
      return this.$store.getters.GetPage1GetDataBy
    }
  },
    methods: {
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
            this.M_AP_DebitNoteChargeToInvoiceD.currencycd = data.id
            this.M_AP_DebitNoteChargeToInvoiceD.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DebitNoteChargeToInvoiceD.taxcd = data.id
            this.M_AP_DebitNoteChargeToInvoiceD.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OndebitnotestatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{debitnotestatus}
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
        this.getToolbar().statusFunction[0].disabled = true
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data

            this.M_AP_DebitNoteChargeToInvoiceD.debitdate = data.DebitDate 
            var NewDebitDate = this.momentDateFormat(data.DebitDate, 'DD/MM/YYYY')
            this.propList.initialWhere ="SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"' and CreditorCd='"+data.CreditorCd+"' and CurrencyCd='"+data.CurrencyCd+"' And (DebitNo is null or DebitNo='"+data.DebitNo+"') And JournalDate <=Cast('"+NewDebitDate+"' as DateTime)"

            this.FormToABSList().doGetList('','eb_getList')
        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,

            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultInsert(response.Message)
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                DebitNo: this.M_AP_DebitNoteChargeToInvoiceD.debitno,
                CreditorCd: this.M_AP_DebitNoteChargeToInvoiceD.creditorcd,
                CurrencyCd: this.M_AP_DebitNoteChargeToInvoiceD.currencycd,
                DebitDate: this.M_AP_DebitNoteChargeToInvoiceD.debitdate,
                DebitSequenceNo: this.M_AP_DebitNoteChargeToInvoiceD.debitsequenceno,
                CreditSequenceNo: this.M_AP_DebitNoteChargeToInvoiceD.creditsequenceno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNoteStatus: this.M_AP_DebitNoteChargeToInvoiceD.debitnotestatus,
                Remarks: this.M_AP_DebitNoteChargeToInvoiceD.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_DebitNoteChargeToInvoiceD.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
                this.refreshListParent(true)
				
            })
        },
		M_ClearForm(){
            this.M_AP_DebitNoteChargeToInvoiceD = {
                trxtype: '',
                journaltype: '',
                creditno: '',
                referenceno: '',
                creditdate: '',
                source: '',
                descs: '',
                detaildescs: '',
                currencycd: '',
                taxcd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                totalamt: '',
                debitnotestatus: 'N',
                remarks: '', 
                debitdate: '',
                creditsequenceno: '',
                debitsequenceno: '',
                debitdate: '',
                debitno: '',
                creditorcd: '',
                currencycd: ''
          }
            
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_DebitNoteChargeToInvoiceD.debitdate = data.DebitDate 
        },
        M_Edit(){
        },
        M_Delete(dt){           
          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []

          
          data.forEach((value) => {
            dataDelete.push({
              SubportfolioCd: this.getDataUser().SubPortfolioCd,
              DebitNo: this.DataRowPage1.DebitNo,
              CreditorCd: value.CreditorCd,
              CurrencyCd: value.CurrencyCd,
              DebitDate: this.DataRowPage1.DebitDate,
              DebitSequenceNo: value.DebitSequenceNo,
              LastUpdateStamp: value.LastUpdateStamp,
              UserEdit: this.getDataUser().UserId ,
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

              this.$parent.resultDelete()
              this.refreshListParent(true)
          })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,  
                debitno: this.DataRowPage1.DebitNo, 
                creditorcd: record.CreditorCd,
                currencycd: record.CurrencyCd,
                debitdate: this.DataRowPage1.DebitDate, //this.M_AP_DebitNoteChargeToInvoiceD.debitdate
                creditsequenceno: record.CreditSequenceNo,
                debitsequenceno: record.DebitSequenceNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                
this.M_AP_DebitNoteChargeToInvoiceD = {
                trxtype: data.trxtype,
                journaltype: data.journaltype,
                creditno: data.creditno,
                referenceno: data.referenceno,
                creditdate: data.creditdate,
                source: data.source,
                descs: data.descs,
                detaildescs: data.detaildescs,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                debitnotestatus: data.debitnotestatus,
                creditsequenceno: record.CreditSequenceNo,
                debitsequenceno: record.DebitSequenceNo,
                debitno: this.DataRowPage1.DebitNo, 
                creditorcd: record.CreditorCd,
                currencycd: record.CurrencyCd,
                debitdate: this.DataRowPage1.DebitDate,
                lastupdatestamp: record.LastUpdateStamp,
                remarks: data.remarks
                    }

                if(data.taxdescs != ''){
                  this.error = true
                  this.err1 = true
                  this.err2 = true
                }
                else{
                  this.err1 = false
                  this.err2 = false
                  this.error = false
                }

                if(data.amortizedescs != ''){
                  this.error = true
                  this.err3 = true
                  this.err4 = true
                }
                else{
                  this.err3 = false
                  this.err4 = false
                  this.error = false
                }

                if(data.source == 'E'){
                  this.M_AP_DebitNoteChargeToInvoiceD.journaltype = 'N/A'
                }
                else{
                  if(data.credittype == 'G'){
                    this.M_AP_DebitNoteChargeToInvoiceD.journaltype = 'Goods On Order'
                  }
                  else{
                    if(data.journaltype == 'E'){
                      this.M_AP_DebitNoteChargeToInvoiceD.journaltype = 'Expense'
                    }
                    else{
                      this.M_AP_DebitNoteChargeToInvoiceD.journaltype = 'Prepaid'
                    }
                  }
                }

                if(data.source == 'G'){
                  this.M_AP_DebitNoteChargeToInvoiceD.source = 'Invoice Generated'
                }
                else if(data.source == 'I'){
                  if(data.credittype == 'G'){
                    this.M_AP_DebitNoteChargeToInvoiceD.source = 'Invoice GRN'
                  }
                  else{
                    this.M_AP_DebitNoteChargeToInvoiceD.source = 'Invoice'
                  }
                }
                else if(data.source == 'C'){
                  this.M_AP_DebitNoteChargeToInvoiceD.source = 'Credit Notes'
                }

                this.M_AP_DebitNoteChargeToInvoiceD.currencycdLabel = this.M_AP_DebitNoteChargeToInvoiceD.currencycd != null && this.M_AP_DebitNoteChargeToInvoiceD.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_AP_DebitNoteChargeToInvoiceD.taxcdLabel = this.M_AP_DebitNoteChargeToInvoiceD.taxcd != null && this.M_AP_DebitNoteChargeToInvoiceD.taxcd != '' ? data.taxcd + this.separator + data.descstax :'' 


                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
            })
        }

    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()

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

