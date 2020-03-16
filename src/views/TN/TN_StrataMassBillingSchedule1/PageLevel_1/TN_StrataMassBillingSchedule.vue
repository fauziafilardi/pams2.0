<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromlotnoChange" :prop="PI_fromlotno" :value="M_TN_StrataMassBillingSchedule.fromlotno" :label="M_TN_StrataMassBillingSchedule.fromlotnoLabel" ref="ref_fromlotno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntolotnoChange" :prop="PI_tolotno" :value="M_TN_StrataMassBillingSchedule.tolotno" :label="M_TN_StrataMassBillingSchedule.tolotnoLabel" ref="ref_tolotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_StrataMassBillingSchedule.trxtype" :label="M_TN_StrataMassBillingSchedule.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_StrataMassBillingSchedule.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_StrataMassBillingSchedule.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingrate" v-model="M_TN_StrataMassBillingSchedule.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdatefromChange" :prop="PI_trxdatefrom" v-model="M_TN_StrataMassBillingSchedule.trxdatefrom"  ref="ref_trxdatefrom" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntrxdatetoChange" :prop="PI_trxdateto" v-model="M_TN_StrataMassBillingSchedule.trxdateto"  ref="ref_trxdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_StrataMassBillingSchedule.billingdate"  ref="ref_creditterms" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataMassBillingSchedule.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_StrataMassBillingSchedule.currencycd" :label="M_TN_StrataMassBillingSchedule.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_StrataMassBillingSchedule.credittermscd" :label="M_TN_StrataMassBillingSchedule.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_StrataMassBillingSchedule.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingtypeChange" :prop="PI_billingtype" v-model="M_TN_StrataMassBillingSchedule.billingtype"  ref="ref_billingtype" />
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
            FormType: "Form",
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_StrataMassBillingSchedule :{
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                trxdatefrom: '',
                billingamt: '0',
                descs: '',
                billingrate: '0',
                remarks: '',
                currencycd: '',
                trxdateto: '',
                credittermscd: '',
                billingdate: this.getToday(),
                billingduedate: this.getToday(),
                billingtype: 'A'
                    }
            ,					
            PI_fromlotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotNoLookUp'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromlotno', 
                cLabel: 'From Lot No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_tolotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotNoLookUp'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tolotno', 
                cLabel: 'To Lot No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_billingamt: { 
                cValidate :'required', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:20', 
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
            PI_billingrate: { 
                cValidate :'required', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdatefrom: { 
                cValidate :'required', 
                cName: 'trxdatefrom', 
                cLabel: 'Amortize Date From ', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdateto: { 
                cValidate :'required', 
                cName: 'trxdateto', 
                cLabel: 'Amortize Date To', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_billingduedate: { 
                cValidate :'', 
                cName: 'billingduedate', 
                cLabel: 'Billing Due Date', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingtype: { 
                cValidate :'', 
                cName: 'billingtype', 
                cId: 'rdbbillingtype', 
                cRadioOptions: [{ text: 'Fix', value: 'F' },{ text: 'Area', value: 'A' },], 
                cRadioDefaultOption: 'A', 
                cLabel:'Charge Basis', 
                cLabelSize: 4, 
                cOrder: 14, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
    }
  },
    methods: {		
        OnfromlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataMassBillingSchedule.fromlotno = data.id
            this.M_TN_StrataMassBillingSchedule.fromlotnoLabel = data.label

            this.M_TN_StrataMassBillingSchedule.tolotno = data.id
            this.M_TN_StrataMassBillingSchedule.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromlotno}
            }
        })
        this.$forceUpdate()
        },
        OntolotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataMassBillingSchedule.tolotno = data.id
            this.M_TN_StrataMassBillingSchedule.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tolotno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataMassBillingSchedule.trxtype = data.id
            this.M_TN_StrataMassBillingSchedule.trxtypeLabel = data.label
            this.M_TN_StrataMassBillingSchedule.descs = data.Descs
            if (this.inputStatus != "VIEW") {
                 this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                .then(dt => {
                  if (dt.length == 0) return
                  var datas = dt[0]
                  
                    if(datas.JournalType == 'D' && datas.AmortizeStatus== 'A'){
                        this.PI_trxdatefrom.cValidate = ''
                        this.PI_trxdateto.cValidate = ''
                    }else{                        
                        this.PI_trxdatefrom.cValidate = 'required'
                        this.PI_trxdateto.cValidate = 'required'
                        this.M_TN_StrataMassBillingSchedule.trxdatefrom =''
                        this.M_TN_StrataMassBillingSchedule.trxdateto =''
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OntrxdatefromChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdatefrom}
            }
        })
        this.$forceUpdate()
        },
        OntrxdatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdateto}
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingdate}
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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataMassBillingSchedule.currencycd = data.id
            this.M_TN_StrataMassBillingSchedule.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataMassBillingSchedule.credittermscd = data.id
            this.M_TN_StrataMassBillingSchedule.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_TN_StrataMassBillingSchedule.billingduedate = this.dateAdd2('D', this.M_TN_StrataMassBillingSchedule.billingdate, data.DueDay)    
//{credittermscd}
            }
        })
        this.$forceUpdate()
        },
        OnbillingduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingduedate}
            }
        })
        this.$forceUpdate()
        },
        OnbillingtypeChange (data) {
            this.M_TN_StrataMassBillingSchedule.billngtype = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data == 'A') {
                    this.PI_billingamt.cProtect = true
                    this.PI_billingamt.cValidate = ''
                    this.PI_billingrate.cProtect = false
                } 
                else {
                    this.PI_billingamt.cProtect = false
                    this.PI_billingrate.cProtect = true
                    this.PI_billingamt.cValidate = 'required'
                    this.M_TN_StrataMassBillingSchedule.billingamt = ""
                    this.M_TN_StrataMassBillingSchedule.billingrate = 1
                }
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().doEdit(true)
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
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromLotNo: this.M_TN_StrataMassBillingSchedule.fromlotno == '' || this.M_TN_StrataMassBillingSchedule.fromlotno == null ? 'NULL' : this.M_TN_StrataMassBillingSchedule.fromlotno,
                ToLotNo: this.M_TN_StrataMassBillingSchedule.tolotno == '' || this.M_TN_StrataMassBillingSchedule.tolotno == null ? 'NULL' : this.M_TN_StrataMassBillingSchedule.tolotno,
                TrxType: this.M_TN_StrataMassBillingSchedule.trxtype == '' || this.M_TN_StrataMassBillingSchedule.trxtype == null ? 'NULL' : this.M_TN_StrataMassBillingSchedule.trxtype,
                BillingAmt: this.M_TN_StrataMassBillingSchedule.billingamt,
                Descs: this.M_TN_StrataMassBillingSchedule.descs,
                BillingRate: this.M_TN_StrataMassBillingSchedule.billingrate,
                TrxDateFrom: this.M_TN_StrataMassBillingSchedule.trxdatefrom,
                TrxDateTo: this.M_TN_StrataMassBillingSchedule.trxdateto,
                BillingDate: this.M_TN_StrataMassBillingSchedule.billingdate,
                CurrencyCd: this.M_TN_StrataMassBillingSchedule.currencycd,
                CreditTermsCd: this.M_TN_StrataMassBillingSchedule.credittermscd,
                BillingDueDate: this.M_TN_StrataMassBillingSchedule.billingduedate,
                BillingType: this.M_TN_StrataMassBillingSchedule.billingtype,
                Remarks: this.M_TN_StrataMassBillingSchedule.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()					
                })
            })
        },
		M_ClearForm(){
            this.M_TN_StrataMassBillingSchedule = {
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                trxdatefrom: '',
                billingamt: '0',
                descs: '',
                billingrate: '0',
                remarks: '',
                currencycd: '',
                trxdateto: '',
                credittermscd: '',
                billingdate: this.getToday(),
                billingduedate: this.getToday(),
                billingtype: 'A'
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
				


            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_StrataMassBillingSchedule = {
                dummy: data.dummy,
                fromlotno: data.fromlotno,
                tolotno: data.tolotno,
                trxtype: data.trxtype,
                trxdatefrom: data.trxdatefrom,
                billingamt: data.billingamt,
                descs: data.descs,
                billingrate: data.billingrate,
                remarks: data.remarks,
                currencycd: data.currencycd,
                trxdateto: data.trxdateto,
                credittermscd: data.credittermscd,
                billingdate: data.billingdate,
                billingduedate: data.billingduedate,
                billingtype: data.billingtype
                    }
                 

                this.M_TN_StrataMassBillingSchedule.fromlotnoLabel = this.M_TN_StrataMassBillingSchedule.fromlotno != null && this.M_TN_StrataMassBillingSchedule.fromlotno != '' ? data.fromlotno + this.separator  :'' 
                this.M_TN_StrataMassBillingSchedule.tolotnoLabel = this.M_TN_StrataMassBillingSchedule.tolotno != null && this.M_TN_StrataMassBillingSchedule.tolotno != '' ? data.tolotno + this.separator  :'' 
                this.M_TN_StrataMassBillingSchedule.trxtypeLabel = this.M_TN_StrataMassBillingSchedule.trxtype != null && this.M_TN_StrataMassBillingSchedule.trxtype != '' ? data.trxtype + this.separator  :'' 
                this.M_TN_StrataMassBillingSchedule.currencycdLabel = this.M_TN_StrataMassBillingSchedule.currencycd != null && this.M_TN_StrataMassBillingSchedule.currencycd != '' ? data.currencycd + this.separator  :'' 
                this.M_TN_StrataMassBillingSchedule.credittermscdLabel = this.M_TN_StrataMassBillingSchedule.credittermscd != null && this.M_TN_StrataMassBillingSchedule.credittermscd != '' ? data.credittermscd + this.separator  :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
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
