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
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_DNAllocationH.trxtype" :label="M_AP_DNAllocationH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AP_DNAllocationH.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OndebitdateChange" :prop="PI_debitdate" v-model="M_AP_DNAllocationH.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_DNAllocationH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_DNAllocationH.creditorcd" :label="M_AP_DNAllocationH.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_DNAllocationH.currencycd" :label="M_AP_DNAllocationH.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_DNAllocationH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Allocation
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AP_DNAllocationH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalnetallocated" v-model="M_AP_DNAllocationH.totalnetallocated"  ref="ref_totalnetallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_holdvatamt" v-model="M_AP_DNAllocationH.holdvatamt"  ref="ref_holdvatamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalvatallocated" v-model="M_AP_DNAllocationH.totalvatallocated"  ref="ref_totalvatallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_holdwithholdingamt" v-model="M_AP_DNAllocationH.holdwithholdingamt"  ref="ref_holdwithholdingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalwithholdingallocated" v-model="M_AP_DNAllocationH.totalwithholdingallocated"  ref="ref_totalwithholdingallocated"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AP_DNAllocationH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AP_DNAllocationH.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_forexgainlossamt" v-model="M_AP_DNAllocationH.forexgainlossamt"  ref="ref_forexgainlossamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AP_DNAllocationH.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_DNAllocationH.remarks"  ref="ref_remarks" />
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

            M_AP_DNAllocationH :{
                trxtype: '',
                debitno: '',
                debitdate: this.M_FormatingDate(new Date()),
                descs: '',
                creditorcd: '',
                currencycd: '',
                currencyrate: '0',
                creditamt: '',
                totalnetallocated: '',
                holdvatamt: '',
                totalvatallocated: '',
                holdwithholdingamt: '',
                totalwithholdingallocated: '',
                totalallocationamt: '',
                allocatedamt: '',
                forexgainlossamt: '',
                balanceamt: '',
                remarks:'',
                lastupdatestamp:0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AP' AND TRXCLASS='M'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
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
                cMasterUrl: 'AP/AP_TransTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_debitno: { 
                cValidate :'required|max:20', 
                cName: 'debitno', 
                cLabel: 'Allocation No', 
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
            PI_debitdate: { 
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
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status ='A' "   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditorCd,Name' 
                        }, 
                cValidate :'required', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code', 
                cKey: false, 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
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
                cLabel: 'Currency', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
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
            PI_creditamt: { 
                cValidate :'', 
                cName: 'creditamt', 
                cLabel: 'Debit Note Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalnetallocated: { 
                cValidate :'', 
                cName: 'totalnetallocated', 
                cLabel: 'Net Allocated', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_holdvatamt: { 
                cValidate :'', 
                cName: 'holdvatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalvatallocated: { 
                cValidate :'', 
                cName: 'totalvatallocated', 
                cLabel: 'VAT Allocated', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_holdwithholdingamt: { 
                cValidate :'', 
                cName: 'holdwithholdingamt', 
                cLabel: 'Withholding Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalwithholdingallocated: { 
                cValidate :'', 
                cName: 'totalwithholdingallocated', 
                cLabel: 'Withholding Allocated', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalallocationamt: { 
                cValidate :'', 
                cName: 'totalallocationamt', 
                cLabel: 'Total Allocation Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cName: 'allocatedamt', 
                cLabel: 'Total Allocated', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_forexgainlossamt: { 
                cValidate :'', 
                cName: 'forexgainlossamt', 
                cLabel: 'Forex', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_balanceamt: { 
                cValidate :'', 
                cName: 'balanceamt', 
                cLabel: 'Balance Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {	
      GetCurrencyRate (){
          if (
              (this.M_AP_DNAllocationH.currencycd && this.M_AP_DNAllocationH.currencycd != '') && 
              (this.M_AP_DNAllocationH.debitdate && this.M_AP_DNAllocationH.debitdate != '')
              ) {
                this.FnGetCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.M_AP_DNAllocationH.debitdate, this.M_AP_DNAllocationH.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_DNAllocationH.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })
               
            }
        },	
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_DNAllocationH.trxtype = data.id
            this.M_AP_DNAllocationH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
                  if (dt != null) { 
                    var dta = dt[0]
                    // this.RunningCd = dta.RunningCd
                    console.log(this.DataRow)
                    this.M_AP_DNAllocationH.descs = dta.TrxTypeDescs
                    if (dta.RunningCd && dta.RunningCd != "") {
                      this.PI_debitno.cProtect = true
                      this.M_AP_DNAllocationH.debitno = "(auto)"
                      this.RunningCd = dta.RunningCd
                    }
                    else {
                      this.PI_debitno.cProtect = false
                      this.M_AP_DNAllocationH.debitno = ""
                      this.RunningCd = "" 
                    }

                  }
                })
            }
        })
        this.$forceUpdate()
        },
        OndebitdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{debitdate}
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DNAllocationH.creditorcd = data.id
            this.M_AP_DNAllocationH.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_DNAllocationH.currencycd = data.id
            this.M_AP_DNAllocationH.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetCurrencyRate()
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
		M_CheckboxChecked(data, status, index){

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
          if (this.RunningCd != ""){
              this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.RunningCd,this.getDataUser().UserId,this.M_AP_DNAllocationH.debitdate)
              .then(dt =>{
                if(dt != null){
                      this.M_AP_DNAllocationH.debitno = dt.RunningCode
                        var param = {			
                        OptionSeq: this.getOptionSeq().OptionSeq,
                        LineNo: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        BatchNo: 0 ,
                        Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_DN_ALLOCATION,
                        CreditorCd: this.M_AP_DNAllocationH.creditorcd == '' || this.M_AP_DNAllocationH.creditorcd == null ? 'NULL' : this.M_AP_DNAllocationH.creditorcd ,
                        TrxType: this.M_AP_DNAllocationH.trxtype == '' || this.M_AP_DNAllocationH.trxtype == null ? 'NULL' : this.M_AP_DNAllocationH.trxtype ,
                        ModuleCd: this.Module,
                        DebitNo: this.M_AP_DNAllocationH.debitno,
                        DebitDate: this.M_AP_DNAllocationH.debitdate == '' || this.M_AP_DNAllocationH.debitdate == null ? 'NULL' : this.M_AP_DNAllocationH.debitdate ,
                        Descs: this.M_AP_DNAllocationH.descs,
                        CurrencyCd: this.M_AP_DNAllocationH.currencycd == '' || this.M_AP_DNAllocationH.currencycd == null ? 'NULL' : this.M_AP_DNAllocationH.currencycd ,
                        CurrencyRate: this.M_AP_DNAllocationH.currencyrate ? this.replaceAllString(this.M_AP_DNAllocationH.currencyrate,',','','number') : 0 ,
                        Remarks: this.M_AP_DNAllocationH.remarks,
                        UserInput: this.getDataUser().UserId                 
                    }

                    this.postJSON(this.getUrlInsert(), param)
                    .then((response) => {
                        if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                        this.$parent.resultInsert(response.Message)
                  
                
                    })
                }
              
              })
          }else{
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0 ,
                Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_DN_ALLOCATION,
                CreditorCd: this.M_AP_DNAllocationH.creditorcd == '' || this.M_AP_DNAllocationH.creditorcd == null ? 'NULL' : this.M_AP_DNAllocationH.creditorcd ,
                TrxType: this.M_AP_DNAllocationH.trxtype == '' || this.M_AP_DNAllocationH.trxtype == null ? 'NULL' : this.M_AP_DNAllocationH.trxtype ,
                ModuleCd: this.Module,
                DebitNo: this.M_AP_DNAllocationH.debitno,
                DebitDate: this.M_AP_DNAllocationH.debitdate == '' || this.M_AP_DNAllocationH.debitdate == null ? 'NULL' : this.M_AP_DNAllocationH.debitdate ,
                Descs: this.M_AP_DNAllocationH.descs,
                CurrencyCd: this.M_AP_DNAllocationH.currencycd == '' || this.M_AP_DNAllocationH.currencycd == null ? 'NULL' : this.M_AP_DNAllocationH.currencycd ,
                CurrencyRate: this.M_AP_DNAllocationH.currencyrate ? this.replaceAllString(this.M_AP_DNAllocationH.currencyrate,',','','number') : 0 ,
                Remarks: this.M_AP_DNAllocationH.remarks,
                UserInput: this.getDataUser().UserId                 
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
                BatchNo: this.M_AP_DNAllocationH.batchno == '' || this.M_AP_DNAllocationH.batchno == null ? 'NULL' : this.M_AP_DNAllocationH.batchno ,
                Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_DN_ALLOCATION,
                DebitNo: this.M_AP_DNAllocationH.debitno,
                DebitDate: this.M_AP_DNAllocationH.debitdate == '' || this.M_AP_DNAllocationH.debitdate == null ? 'NULL' : this.M_AP_DNAllocationH.debitdate ,
                Descs: this.M_AP_DNAllocationH.descs,
                CurrencyCd: this.M_AP_DNAllocationH.currencycd == '' || this.M_AP_DNAllocationH.currencycd == null ? 'NULL' : this.M_AP_DNAllocationH.currencycd ,
                CurrencyRate: this.M_AP_DNAllocationH.currencyrate ? this.replaceAllString(this.M_AP_DNAllocationH.currencyrate,',','','number') : 0 ,
                TrxType: this.M_AP_DNAllocationH.trxtype == '' || this.M_AP_DNAllocationH.trxtype == null ? 'NULL' : this.M_AP_DNAllocationH.trxtype ,
                Remarks: this.M_AP_DNAllocationH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_DNAllocationH.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_DNAllocationH = {
                trxtype: '',
                debitno: '',
                debitdate: this.M_FormatingDate(new Date()),
                descs: '',
                creditorcd: '',
                currencycd: '',
                currencyrate: '0',
                creditamt: '',
                totalnetallocated: '',
                holdvatamt: '',
                totalvatallocated: '',
                holdwithholdingamt: '',
                totalwithholdingallocated: '',
                totalallocationamt: '',
                allocatedamt: '',
                forexgainlossamt: '',
                balanceamt: '',
                remarks:'',
                lastupdatestamp:0
                    }
            	
	
		},
        M_New(){
			
        },
        M_Edit(){
            var param = {
                    OptionFunctionCd: "GetDetailCount_DNAllocation",
                    ModuleCd: this.Module,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: this.DataRow.DebitNo
                  }

                  this.FnDynamicFunction(param)
                  .then(ress => {
                    if (ress == null ||ress.length == 0) return
                
                    var data = ress[0]
                    if(parseInt(data.N0) > 1 ){
                        this.PI_creditorcd.cProtect = true
                        this.PI_currencycd.cProtect = true
                        this.PI_currencyrate.cProtect = true
                        this.PI_debitdate.cProtect = true
                    }else{
                        this.PI_creditorcd.cProtect = false
                        // this.PI_currencycd.cProtect = false
                        this.PI_currencyrate.cProtect = false
                        this.PI_debitdate.cProtect = false
                    }
                  })
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
					_Message_:'',
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo ,
                    Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_DN_ALLOCATION,
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId ,
                    LastUpdateStamp: value.LastUpdateStamp,


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
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_DNAllocationH = {
                trxtype: data.trxtype,
                debitno: data.debitno,
                debitdate: data.debitdate,
                descs: data.descs,
                creditorcd: data.creditorcd,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate),
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                totalnetallocated: this.isCurrency(data.totalnetallocated, this.decimal),
                holdvatamt: this.isCurrency(data.holdvatamt, this.decimal),
                totalvatallocated: this.isCurrency(data.totalvatallocated, this.decimal),
                holdwithholdingamt: this.isCurrency(data.holdwithholdingamt, this.decimal),
                totalwithholdingallocated: this.isCurrency(data.totalwithholdingallocated, this.decimal),
                totalallocationamt: this.isCurrency(data.totalallocationamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
                balanceamt: this.isCurrency(data.balanceamt, this.decimal),
                remarks: data.remarks,
                lastupdatestamp : record.LastUpdateStamp
                    }
                 

                this.M_AP_DNAllocationH.trxtypeLabel = this.M_AP_DNAllocationH.trxtype != null && this.M_AP_DNAllocationH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AP_DNAllocationH.creditorcdLabel = this.M_AP_DNAllocationH.creditorcd != null && this.M_AP_DNAllocationH.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_DNAllocationH.currencycdLabel = this.M_AP_DNAllocationH.currencycd != null && this.M_AP_DNAllocationH.currencycd != '' ? data.currencycd  :'' 
         

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

