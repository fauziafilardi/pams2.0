<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <div class="content-app-form__body form-process">
            <div class="tab-form-process"> 
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">
                                  <b-col md="12" id="col-left"> <!-- table open -->                                    
                                    <b-row>
                                    <b-col  md="6">
                                        <ABSinputDateVuex @input="OnrevaluationdateChange" :prop="PI_revaluationdate" v-model="M_AP_GenerateRevaluation.revaluationdate"  ref="ref_revaluationdate" />
                                    </b-col>
                                    </b-row>
                                    <b-row>
                                    <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypefromChange" :prop="PI_trxtypefrom" :value="M_AP_GenerateRevaluation.trxtypefrom" :label="M_AP_GenerateRevaluation.trxtypefromLabel" ref="ref_trxtypefrom"/>
                                    </b-col>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OntrxtypetoChange" :prop="PI_trxtypeto" :value="M_AP_GenerateRevaluation.trxtypeto" :label="M_AP_GenerateRevaluation.trxtypetoLabel" ref="ref_trxtypeto"/>
                                    </b-col>
                                    </b-row>
                                    <b-row>
                                    <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditorcdfromChange" :prop="PI_creditorcdfrom" :value="M_AP_GenerateRevaluation.creditorcdfrom" :label="M_AP_GenerateRevaluation.creditorcdfromLabel" ref="ref_creditorcdfrom"/>
                                    </b-col>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OncreditorcdtoChange" :prop="PI_creditorcdto" :value="M_AP_GenerateRevaluation.creditorcdto" :label="M_AP_GenerateRevaluation.creditorcdtoLabel" ref="ref_creditorcdto"/>
                                    </b-col>
                                    </b-row>
                                    <b-row>
                                    <b-col  md="6">
                                        <ABSinputDateRangeVuex @input="OndocdatefromChange" :prop="PI_docdatefrom" :valueFrom="M_AP_GenerateRevaluation.docdatefrom" :valueTo="M_AP_GenerateRevaluation.docdateto" ref="ref_docdatefrom" @from="MdtRange_docdatefrom" @to="MdtRange_docdateto" />
                                    </b-col>
                                    </b-row>
                                    <b-row>
                                    <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_GenerateRevaluation.currencycd" :label="M_AP_GenerateRevaluation.currencycdLabel" ref="ref_currencycd"/>
                                    </b-col>
                                    </b-row>
                                    <b-row>
                                    <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_GenerateRevaluation.currencyrate"  ref="ref_currencyrate"/>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            FormType: "Process",
            IEBy: {Input: '', Edit: ''},
            M_AP_GenerateRevaluation :{
                revaluationdate: '',
                trxtypefrom: '',
                trxtypeto: '',
                creditorcdfrom: '',
                creditorcdto: '',
                docdatefrom: '',
                docdateto: '',
                currencycd: '',
                currencyrate: '',
                    }
            ,
            PI_docdatefrom: { 
                cValidate :'', 
                cName: 'docdatefrom', 
                cLabel: 'Doc. Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_revaluationdate: { 
                cValidate :'required', 
                cName: 'revaluationdate', 
                cLabel: 'Revaluation Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_trxtypefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ModuleCd = 'AP'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
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
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_trxtypeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ModuleCd = 'AP'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
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
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_creditorcdfrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditorCd,Name' 
                        }, 
                cValidate :'', 
                cName: 'creditorcdfrom', 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_creditorcdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditorCd,Name' 
                        }, 
                cValidate :'', 
                cName: 'creditorcdto', 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: "CurrencyCd NOT IN ( SELECT BaseCurrencyCd FROM GL_Specification )"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CurrencyCd,Descs' 
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
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
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
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
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
        PageLevel () {
            return 1
        },
        TabIndex () {
            return 1
        },
        utk(){
        return this.$route.query.for === undefined ? undefined : this.$route.query.for 
        }
  },
  methods: {
      GetCurrencyMiddleRate(){
          this.FnGetCurrencyMiddleRate(
              this.getDataUser().SubPortfolioCd, this.M_AP_GenerateRevaluation.revaluationdate, this.M_AP_GenerateRevaluation.currencycd
          )
          .then(res => {
              this.M_AP_GenerateRevaluation.currencyrate = this.isCurrency(res.CurrencyRate, this.decimal)
          })
      },
      OndocdatefromChange (data) {
        this.$nextTick(() => {
            this.M_AP_GenerateRevaluation.docdateto = data
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
      },   
      OnrevaluationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revaluationdate}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypefromChange (data) {
        this.$nextTick(() => {
            this.M_AP_GenerateRevaluation.trxtypefrom = data.id
            this.M_AP_GenerateRevaluation.trxtypefromLabel = data.label

            this.M_AP_GenerateRevaluation.trxtypeto = data.id
            this.M_AP_GenerateRevaluation.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OntrxtypetoChange (data) {
        this.$nextTick(() => {
            this.M_AP_GenerateRevaluation.trxtypeto = data.id
            this.M_AP_GenerateRevaluation.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypeto}
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdfromChange (data) {
        this.$nextTick(() => {
            this.M_AP_GenerateRevaluation.creditorcdfrom = data.id
            this.M_AP_GenerateRevaluation.creditorcdfromLabel = data.label

            this.M_AP_GenerateRevaluation.creditorcdto = data.id
            this.M_AP_GenerateRevaluation.creditorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcdfrom}
            }
        })
        this.$forceUpdate()
        },
        OncreditorcdtoChange (data) {
        this.$nextTick(() => {
            this.M_AP_GenerateRevaluation.creditorcdto = data.id
            this.M_AP_GenerateRevaluation.creditorcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcdto}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_GenerateRevaluation.currencycd = data.id
            this.M_AP_GenerateRevaluation.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if(this.M_AP_GenerateRevaluation.revaluationdate != ''){
                    this.GetCurrencyMiddleRate()
                }                
            }
        })
        this.$forceUpdate()   
        },
        toToolbar() {
                // console.log(this.$children)
                return this.$children[0].$children[0]
        },
        getFileName(fileName) {
            //   console.log('fileName',fileName)
            //  this.CM_SubPortfolio.picturefilename = fileName 
        },
        getResponse(response){
            // this.responseFile = response
                // console.log('response',response)
        },
        setToolbarButton (){
            // this.getToolbar().isNew = true
            this.toToolbar().statusFunction[0].disabled = false
            //     // this.getToolbar().statusFunction[5].disabled = false
            //    this.getToolbar().statusFunction[7].disabled = true
            //    //this.getToolbar().statusFunction[4].disabled = false

        },
        M_Edit () {

        },
        M_Insert(){
            
        },
        M_ClearForm(){
            this.M_AP_GenerateRevaluation = {
                revaluationdate: '',
                trxtypefrom: '',
                trxtypeto: '',
                creditorcdfrom: '',
                creditorcdto: '',
                docdatefrom: '',
                docdateto: '',
                currencycd: '',
                currencyrate: '',
            }
        },
        M_Save(){
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromTrxType: this.M_AP_GenerateRevaluation.trxtypefrom == '' || this.M_AP_GenerateRevaluation.trxtypefrom == null ? 'NULL' : this.M_AP_GenerateRevaluation.trxtypefrom ,
                ToTrxType: this.M_AP_GenerateRevaluation.trxtypeto == '' || this.M_AP_GenerateRevaluation.trxtypeto == null ? 'NULL' : this.M_AP_GenerateRevaluation.trxtypeto ,
                FromCreditorCd: this.M_AP_GenerateRevaluation.creditorcdfrom == '' || this.M_AP_GenerateRevaluation.creditorcdfrom == null ? 'NULL' : this.M_AP_GenerateRevaluation.creditorcdfrom ,
                ToCreditorCd: this.M_AP_GenerateRevaluation.creditorcdto == '' || this.M_AP_GenerateRevaluation.creditorcdto == null ? 'NULL' : this.M_AP_GenerateRevaluation.creditorcdto ,
                FromTrxDate: this.M_AP_GenerateRevaluation.docdatefrom == '' || this.M_AP_GenerateRevaluation.docdatefrom == null ? 'NULL' : this.M_AP_GenerateRevaluation.docdatefrom ,
                ToTrxDate: this.M_AP_GenerateRevaluation.docdateto == '' || this.M_AP_GenerateRevaluation.docdateto == null ? 'NULL' : this.M_AP_GenerateRevaluation.docdateto ,
                RevaluationDate: this.M_AP_GenerateRevaluation.revaluationdate == '' || this.M_AP_GenerateRevaluation.revaluationdate == null ? 'NULL' : this.M_AP_GenerateRevaluation.revaluationdate ,
                CurrencyCd: this.M_AP_GenerateRevaluation.currencycd == '' || this.M_AP_GenerateRevaluation.currencycd == null ? 'NULL' : this.M_AP_GenerateRevaluation.currencycd ,
                CurrentRevaluationCurrencyRate: this.M_AP_GenerateRevaluation.currencyrate ? this.replaceAllString(this.M_AP_GenerateRevaluation.currencyrate,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId,
                OutputMessage_Output: ''                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {                    
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                })
            })
        },
        M_Update(){
            
        },
        M_Cancel () {
            this.toToolbar().doRefresh()
        },
        M_Search(data){
                this.toList().doGetList(data,'eb_getList')
        },
        toList() {
            return this.$children[2]
        },
        rowClicked (record, index) {
        },
        doDoubleClick () {
        
        },
        rowLink (url) {},
        M_PageSize () {},
        M_Pagination () {},
        M_Advance_Filter () {},
        M_Head_Table () {}
        ,MdtRange_docdatefrom (data) {
            this.M_AP_GenerateRevaluation.docdatefrom = data
        }
        ,MdtRange_docdateto (data) {
            this.M_AP_GenerateRevaluation.docdateto = data
        }
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Edit')
        this.$store.commit('setStatus', 'new')
        
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.toToolbar().doEdit(true)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)  
        this.$store.commit('setListDisable', true)
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

<style scoped>
    table {
    border-collapse: collapse;
    }

    table, td, th {
    border: 1px solid black;
    }
      .size-modal-content {
            padding: 10px;
            font-style: 13px;
        }
        .v--modal-overlay[data-modal="size-modal"] {
            background: rgba(0, 0, 0, 0.5);
        }
        .demo-modal-class {
            border-radius: 5px;
            background: #F7F7F7;
            box-shadow: 5px 5px 30px 0px rgba(46,61,73, 0.6);
        }
</style>


