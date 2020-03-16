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
                                        <ABSinputDateVuex @input="OnrevaluationdateChange" :prop="PI_revaluationdate" v-model="M_AR_GenerateRevaluation.revaluationdate"  ref="ref_revaluationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypefromChange" :prop="PI_trxtypefrom" :value="M_AR_GenerateRevaluation.trxtypefrom" :label="M_AR_GenerateRevaluation.trxtypefromLabel" ref="ref_trxtypefrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntrxtypetoChange" :prop="PI_trxtypeto" :value="M_AR_GenerateRevaluation.trxtypeto" :label="M_AR_GenerateRevaluation.trxtypetoLabel" ref="ref_trxtypeto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdfromChange" :prop="PI_debtorcdfrom" :value="M_AR_GenerateRevaluation.debtorcdfrom" :label="M_AR_GenerateRevaluation.debtorcdfromLabel" ref="ref_debtorcdfrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcdtoChange" :prop="PI_debtorcdto" :value="M_AR_GenerateRevaluation.debtorcdto" :label="M_AR_GenerateRevaluation.debtorcdtoLabel" ref="ref_debtorcdto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndocdatefromChange" :prop="PI_docdatefrom" v-model="M_AR_GenerateRevaluation.docdatefrom"  ref="ref_docdatefrom" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndocdatetoChange" :prop="PI_docdateto" v-model="M_AR_GenerateRevaluation.docdateto"  ref="ref_docdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_GenerateRevaluation.currencycd" :label="M_AR_GenerateRevaluation.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_GenerateRevaluation.currencyrate"  ref="ref_currencyrate"/>
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
			Module:"AR",	
            IEBy: {Input: '', Edit: ''},

            M_AR_GenerateRevaluation :{
                revaluationdate: '',
                trxtypefrom: '',
                trxtypeto: '',
                debtorcdfrom: '',
                debtorcdto: '',
                docdatefrom:'',
                docdateto:'',
                currencycd: '',
                currencyrate: ''
                    }
            ,					
            PI_revaluationdate: { 
                cValidate :'', 
                cName: 'revaluationdate', 
                cLabel: 'Revaluation Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtypefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR'"   , 
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
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_trxtypeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR'"   , 
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
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_debtorcdfrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcdfrom', 
                cLabel: 'Debtor Code From', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_debtorcdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
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
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            },
            PI_docdatefrom: { 
                cValidate :'', 
                cName: 'docdatefrom', 
                cLabel: 'Doc. Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_docdateto: { 
                cValidate :'', 
                cName: 'docdateto', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
                cLabel: 'Revaluation Currency Rate', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
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
        OndocdatefromChange (data) {
            this.M_AR_GenerateRevaluation.docdateto = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{postingdate}
            }
        })
        this.$forceUpdate()
        },
        OndocdatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{postingdate}
            }
        })
        this.$forceUpdate()
        },		
        OnrevaluationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(this.M_AR_GenerateRevaluation.revaluationdate != '' && this.M_AR_GenerateRevaluation.currencycd != ''){
                    this.FnGetCurrencyMiddleRate(
                        this.getDataUser().SubPortfolioCd,
                        this.M_AR_GenerateRevaluation.revaluationdate,
                        this.M_AR_GenerateRevaluation.currencycd
                    ).then(res => { 
                        this.M_AR_GenerateRevaluation.currencyrate = this.isCurrency(res, this.decimal)
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OntrxtypefromChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_AR_GenerateRevaluation.trxtypefrom = data.id
            this.M_AR_GenerateRevaluation.trxtypefromLabel = data.label
            
            this.M_AR_GenerateRevaluation.trxtypeto = data.id
            this.M_AR_GenerateRevaluation.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypefrom}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypetoChange (data) {
        this.$nextTick(() => {
            this.M_AR_GenerateRevaluation.trxtypeto = data.id
            this.M_AR_GenerateRevaluation.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypeto}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdfromChange (data) {
        this.$nextTick(() => {
            this.M_AR_GenerateRevaluation.debtorcdfrom = data.id
            this.M_AR_GenerateRevaluation.debtorcdfromLabel = data.label

            this.M_AR_GenerateRevaluation.debtorcdto = data.id
            this.M_AR_GenerateRevaluation.debtorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcdfrom}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdtoChange (data) {
        this.$nextTick(() => {
            this.M_AR_GenerateRevaluation.debtorcdto = data.id
            this.M_AR_GenerateRevaluation.debtorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcdto}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_GenerateRevaluation.currencycd = data.id
            this.M_AR_GenerateRevaluation.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if(this.M_AR_GenerateRevaluation.revaluationdate != '' && this.M_AR_GenerateRevaluation.currencycd != ''){
                    this.FnGetCurrencyMiddleRate(
                        this.getDataUser().SubPortfolioCd,
                        this.M_AR_GenerateRevaluation.revaluationdate,
                        this.M_AR_GenerateRevaluation.currencycd
                    ).then(res => {
                        console.log(res) 
                        this.M_AR_GenerateRevaluation.currencyrate = res.CurrencyRate
                    })
                }
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
            this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'edit')
                    this.$store.commit('setEventStatus', 'POST')			
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
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit()									
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                FromTrxType: this.M_AR_GenerateRevaluation.trxtypefrom,
                ToTrxType: this.M_AR_GenerateRevaluation.trxtypeto,
                FromDebtorCd: this.M_AR_GenerateRevaluation.debtorcdfrom,
                ToDebtorCd: this.M_AR_GenerateRevaluation.debtorcdto,
                FromTrxDate: this.M_AR_GenerateRevaluation.docdatefrom,
                ToTrxDate: this.M_AR_GenerateRevaluation.docdateto,
                RevaluationDate: this.M_AR_GenerateRevaluation.revaluationdate,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                UserEdit: this.getDataUser().UserId,
                CurrencyCd: this.M_AR_GenerateRevaluation.currencycd,
                CurrentRevaluationCurrencyRate: this.M_AR_GenerateRevaluation.currencyrate ? this.replaceAllString(this.M_AR_GenerateRevaluation.currencyrate,',','','number') : 0 ,
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)                
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit()					
                })
                this.M_ClearForm()
                
            })
        },
		M_ClearForm(){
            this.$nextTick(() => {
                this.M_AR_GenerateRevaluation = {
                revaluationdate: '',
                trxtypefrom: '',
                trxtypeto: '',
                debtorcdfrom: '',
                debtorcdto: '',
                docdatefrom:'',
                docdateto:'',
                currencycd: '',
                currencyrate: ''
                    }
            })
            this.$forceUpdate()
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'edit')
                    this.$store.commit('setEventStatus', 'POST')
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder

//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 // response from API
//                 if(response == null) return
                
//                 var data = response.Data[0]
// this.M_AR_GenerateRevaluation = {
//                 revaluationdate: data.revaluationdate,
//                 trxtypefrom: data.trxtypefrom,
//                 trxtypeto: data.trxtypeto,
//                 debtorcdfrom: data.debtorcdfrom,
//                 debtorcdto: data.debtorcdto,
//                 currencycd: data.currencycd,
//                 currencyrate: data.currencyrate
//                     }
                 

//                 this.M_AR_GenerateRevaluation.trxtypefromLabel = this.M_AR_GenerateRevaluation.trxtypefrom != null ? data.trxtypefrom + this.separator  :'' 
//                 this.M_AR_GenerateRevaluation.trxtypetoLabel = this.M_AR_GenerateRevaluation.trxtypeto != null ? data.trxtypeto + this.separator  :'' 
//                 this.M_AR_GenerateRevaluation.debtorcdfromLabel = this.M_AR_GenerateRevaluation.debtorcdfrom != null ? data.debtorcdfrom + this.separator  :'' 
//                 this.M_AR_GenerateRevaluation.debtorcdtoLabel = this.M_AR_GenerateRevaluation.debtorcdto != null ? data.debtorcdto + this.separator  :'' 
//                 this.M_AR_GenerateRevaluation.currencycdLabel = this.M_AR_GenerateRevaluation.currencycd != null ? data.currencycd + this.separator  :'' 
         

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.getToolbar().doEdit(true)
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
