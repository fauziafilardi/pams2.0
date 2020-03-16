<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />        
        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">                                    					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSinputDateVuex @input="OnrevaluationdatefromChange" :prop="PI_revaluationdatefrom" v-model="M_AR_RevaluationInquiry.revaluationdatefrom"  ref="ref_revaluationdatefrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OnrevaluationdatetoChange" :prop="PI_revaluationdateto" v-model="M_AR_RevaluationInquiry.revaluationdateto"  ref="ref_revaluationdateto"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OntrxtypefromChange" :prop="PI_trxtypefrom" :value="M_AR_RevaluationInquiry.trxtypefrom" :label="M_AR_RevaluationInquiry.trxtypefromLabel" ref="ref_trxtypefrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputSelectList @change="OntrxtypetoChange" :prop="PI_trxtypeto" :value="M_AR_RevaluationInquiry.trxtypeto" :label="M_AR_RevaluationInquiry.trxtypetoLabel" ref="ref_trxtypeto"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OndebtorcdfromChange" :prop="PI_debtorcdfrom" :value="M_AR_RevaluationInquiry.debtorcdfrom" :label="M_AR_RevaluationInquiry.debtorcdfromLabel" ref="ref_debtorcdfrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputSelectList @change="OndebtorcdtoChange" :prop="PI_debtorcdto" :value="M_AR_RevaluationInquiry.debtorcdto" :label="M_AR_RevaluationInquiry.debtorcdtoLabel" ref="ref_debtorcdto"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSinputDateVuex @input="OndebitdatefromChange" :prop="PI_debitdatefrom" v-model="M_AR_RevaluationInquiry.debitdatefrom"  ref="ref_debitdatefrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OndebitdatetoChange" :prop="PI_debitdateto" v-model="M_AR_RevaluationInquiry.debitdateto"  ref="ref_debitdateto"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OncurrencycdfromChange" :prop="PI_currencycdfrom" :value="M_AR_RevaluationInquiry.currencycdfrom" :label="M_AR_RevaluationInquiry.currencycdfromLabel" ref="ref_currencycdfrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputSelectList @change="OncurrencycdtoChange" :prop="PI_currencycdto" :value="M_AR_RevaluationInquiry.currencycdto" :label="M_AR_RevaluationInquiry.currencycdtoLabel" ref="ref_currencycdto"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col offset="5">
                                                <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-col> <!-- table close -->							
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                            </b-form>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <ABSListVuex
                :prop = "propList"
                :title = "'Revaluation Inquiry'"
                :isProcess = "false"
                @rowClicked = "rowClicked"
                @rowDblClicked = "doDoubleClick"
                @rowLinkClick = "rowLink"
                @pageSize = "M_PageSize"
                @pagination = "M_Pagination"
                @filter = "M_Advance_Filter"
                />
        </div>
    </div>
</template>
<script>
import MyModal from'./AP_viewModal.vue'
export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "List",
		Module:"AR",
            propList: {
                initialWhere: "",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_RevaluationInquiry :{
                debtorcd: '',
                trxtype: '',
                documentno: '',
                revaluationno: '',
                source: '',
                status: '',
                revaluationdate: '',
                journalreferenceno: '',
                reversaljournalreferenceno: '',
                descs: '',
                previousrevaluationdate: '',
                currencycd: '',
                previouscurrencyrate: '',
                currentcurrencyrate: '',
                outstandingamt: '',
                forexgainlossamt: '',
                sequenceno: 0,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                revaluationdatefrom: '',
                revaluationdateto: '',
                trxtypefrom: '',
                trxtypeto: '',
                debtorcdfrom: '',
                debtorcdto: '',
                debitdatefrom: '',
                debitdateto: '',
                currencycdfrom: '',
                currencycdto: ''
                    }
            ,
            PI_revaluationdatefrom: { 
                cValidate :'', 
                cName: 'revaluationdatefrom', 
                cLabel: 'Revaluation Date From', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },  
            PI_revaluationdateto: { 
                cValidate :'', 
                cName: 'revaluationdateto', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_trxtypefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AP'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypefrom', 
                cLabel: 'Trans. Type From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_trxtypeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AP'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypeto', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_debtorcdfrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcdfrom', 
                cLabel: 'Creditor Code From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_debtorcdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcdto', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_debitdatefrom: { 
                cValidate :'', 
                cName: 'debitdatefrom', 
                cLabel: 'Doc. Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_debitdateto: { 
                cValidate :'', 
                cName: 'debitdateto', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_currencycdfrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'currencycdfrom', 
                cLabel: 'Currency From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencycdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'currencycdto', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 

			// PTAnalysis: {
            //     cPageLevel: 1,
            //     cTabIndex: 1,
            //     cPageMasterSeq: this.data.PageMasterSeq,
            //     cFormPageNo: this.data.PageOrder
            // }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
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
        doGenerate() {

            this.propList.initialWhere = "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"
            //Revaluation Date
            if(this.M_AR_RevaluationInquiry.revaluationdatefrom != ''){
                if(this.M_AR_RevaluationInquiry.revaluationdateto != ''){
                    this.propList.initialWhere += " AND RevaluationDate BETWEEN '" + this.M_AR_RevaluationInquiry.revaluationdatefrom + "' AND '" + this.M_AR_RevaluationInquiry.revaluationdateto + "'"     
                } else {
                    this.propList.initialWhere += " AND RevaluationDate ='"+ this.M_AR_RevaluationInquiry.revaluationdatefrom +"'"
                }                
            }

            //TrxType
            if(this.M_AR_RevaluationInquiry.trxtypefrom != ''){
                if(this.M_AR_RevaluationInquiry.trxtypeto != ''){
                    this.propList.initialWhere += " AND TrxType BETWEEN '" + this.M_AR_RevaluationInquiry.trxtypefrom + "' AND '" + this.M_AR_RevaluationInquiry.trxtypeto + "'"     
                } else {
                    this.propList.initialWhere += " AND TrxType ='"+ this.M_AR_RevaluationInquiry.trxtypefrom +"'"
                }                
            }

            //DebtorCd
            if(this.M_AR_RevaluationInquiry.debtorcdfrom != ''){
                if(this.M_AR_RevaluationInquiry.debtorcdto != ''){
                    this.propList.initialWhere += " AND CreditorCd BETWEEN '" + this.M_AR_RevaluationInquiry.debtorcdfrom + "' AND '" + this.M_AR_RevaluationInquiry.debtorcdto + "'"     
                } else {
                    this.propList.initialWhere += " AND CreditorCd ='"+ this.M_AR_RevaluationInquiry.debtorcdfrom +"'"
                }                
            }

            //DebitDate
            if(this.M_AR_RevaluationInquiry.debitdatefrom != ''){
                if(this.M_AR_RevaluationInquiry.debitdateto != ''){
                    this.propList.initialWhere += " AND CreditDate BETWEEN '" + this.M_AR_RevaluationInquiry.debitdatefrom + "' AND '" + this.M_AR_RevaluationInquiry.debitdateto + "'"     
                } else {
                    this.propList.initialWhere += " AND CreditDate ='"+ this.M_AR_RevaluationInquiry.debitdatefrom +"'"
                }                
            }

            //CurrencyCd
            if(this.M_AR_RevaluationInquiry.currencycdfrom != ''){
                if(this.M_AR_RevaluationInquiry.currencycdto != ''){
                    this.propList.initialWhere += " AND CurrencyCd BETWEEN '" + this.M_AR_RevaluationInquiry.currencycdfrom + "' AND '" + this.M_AR_RevaluationInquiry.currencycdto + "'"     
                } else {
                    this.propList.initialWhere += " AND CurrencyCd ='"+ this.M_AR_RevaluationInquiry.currencycdfrom +"'"
                }                
            }            
            this.toList().doGetList('','eb_getList')
        },
        toList() {
            return this.$children[2]
        },
        OnrevaluationdatefromChange (data) {            
            this.$nextTick(() => {
                this.M_AR_RevaluationInquiry.revaluationdateto = data
            })
            this.$forceUpdate()
        },
        OndebitdatefromChange(data){
            this.$nextTick(() => {
                this.M_AR_RevaluationInquiry.debitdateto = data
            })
            this.$forceUpdate()
        },		
        OntrxtypefromChange (data) {
        this.$nextTick(() => {
            this.M_AR_RevaluationInquiry.trxtypefrom = data.id
            this.M_AR_RevaluationInquiry.trxtypefromLabel = data.label

            this.M_AR_RevaluationInquiry.trxtypeto = data.id
            this.M_AR_RevaluationInquiry.trxtypetoLabel = data.label

            if (this.inputStatus != "VIEW") {
//{trxtypefrom}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypetoChange (data) {
        this.$nextTick(() => {
            this.M_AR_RevaluationInquiry.trxtypeto = data.id
            this.M_AR_RevaluationInquiry.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypeto}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdfromChange (data) {
        this.$nextTick(() => {
            this.M_AR_RevaluationInquiry.debtorcdfrom = data.id
            this.M_AR_RevaluationInquiry.debtorcdfromLabel = data.label

            this.M_AR_RevaluationInquiry.debtorcdto = data.id
            this.M_AR_RevaluationInquiry.debtorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcdfrom}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdtoChange (data) {
        this.$nextTick(() => {
            this.M_AR_RevaluationInquiry.debtorcdto = data.id
            this.M_AR_RevaluationInquiry.debtorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcdto}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdfromChange (data) {
        this.$nextTick(() => {
            this.M_AR_RevaluationInquiry.currencycdfrom = data.id
            this.M_AR_RevaluationInquiry.currencycdfromLabel = data.label
            
            this.M_AR_RevaluationInquiry.currencycdto = data.id
            this.M_AR_RevaluationInquiry.currencycdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycdfrom}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdtoChange (data) {
        this.$nextTick(() => {
            this.M_AR_RevaluationInquiry.currencycdto = data.id
            this.M_AR_RevaluationInquiry.currencycdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycdto}
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
            console.log(record)
            this.getModal(record)
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

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AR_RevaluationInquiry = {
                debtorcd: '',
                trxtype: '',
                documentno: '',
                revaluationno: '',
                source: '',
                status: '',
                revaluationdate: '',
                journalreferenceno: '',
                reversaljournalreferenceno: '',
                descs: '',
                previousrevaluationdate: '',
                currencycd: '',
                previouscurrencyrate: '',
                currentcurrencyrate: '',
                outstandingamt: '',
                forexgainlossamt: '',
                sequenceno: 0,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                revaluationdatefrom: '',
                revaluationdateto: '',
                trxtypefrom: '',
                trxtypeto: '',
                debtorcdfrom: '',
                debtorcdto: '',
                debitdatefrom: '',
                debitdateto: '',
                currencycdfrom: '',
                currencycdto: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
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
this.M_AR_RevaluationInquiry = {
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                documentno: data.documentno,
                revaluationno: data.revaluationno,
                source: data.source,
                status: data.status,
                revaluationdate: data.revaluationdate,
                journalreferenceno: data.journalreferenceno,
                reversaljournalreferenceno: data.reversaljournalreferenceno,
                descs: data.descs,
                previousrevaluationdate: data.previousrevaluationdate,
                currencycd: data.currencycd,
                previouscurrencyrate: data.previouscurrencyrate,
                currentcurrencyrate: data.currentcurrencyrate,
                outstandingamt: data.outstandingamt,
                forexgainlossamt: data.forexgainlossamt,
                sequenceno: data.sequenceno,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                revaluationdatefrom: data.revaluationdatefrom,
                revaluationdateto: data.revaluationdateto,
                trxtypefrom: data.trxtypefrom,
                trxtypeto: data.trxtypeto,
                debtorcdfrom: data.debtorcdfrom,
                debtorcdto: data.debtorcdto,
                debitdatefrom: data.debitdatefrom,
                debitdateto: data.debitdateto,
                currencycdfrom: data.currencycdfrom,
                currencycdto: data.currencycdto
                    }
                 

                this.M_AR_RevaluationInquiry.trxtypefromLabel = this.M_AR_RevaluationInquiry.trxtypefrom != null ? data.trxtypefrom + this.separator  :'' 
                this.M_AR_RevaluationInquiry.trxtypetoLabel = this.M_AR_RevaluationInquiry.trxtypeto != null ? data.trxtypeto + this.separator  :'' 
                this.M_AR_RevaluationInquiry.debtorcdfromLabel = this.M_AR_RevaluationInquiry.debtorcdfrom != null ? data.debtorcdfrom + this.separator  :'' 
                this.M_AR_RevaluationInquiry.debtorcdtoLabel = this.M_AR_RevaluationInquiry.debtorcdto != null ? data.debtorcdto + this.separator  :'' 
                this.M_AR_RevaluationInquiry.currencycdfromLabel = this.M_AR_RevaluationInquiry.currencycdfrom != null ? data.currencycdfrom + this.separator  :'' 
                this.M_AR_RevaluationInquiry.currencycdtoLabel = this.M_AR_RevaluationInquiry.currencycdto != null ? data.currencycdto + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getModal(data){
            // console.log(JSON.stringify(data,null,2))
            this.$modal.show(MyModal, 
                { //Props passing data
                    dataModal:data
                },
                {//Property
                    height: '90%',
                    width : '80%',
                    minWidth: "300",
                    minHeight: "300",
                    draggable: true,
                    resizable: true,
                    reset: true
                },
                {// event listener
                    'before-open': (event) => { console.log('this will be called before the modal before Oepn',event); },
                    'before-close': (event) => { console.log('this will be called before the modal before closes',event); },
                    'opened': (event) => { console.log('this will be called before the modal opended',event); },
                    'closed': (event) => { console.log('this will be called before the modal closed',event); },
                }
            )
            
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
        this.$store.commit('setStatus', 'new')        
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.$store.commit('setListDisable', false)
        // this.M_GL_RevaluationInquiry.status = 'N'
        this.toList().doGetList('','eb_getList')       

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

