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
                                        <ABSinputDateVuex :prop="PI_revaluationdate" v-model="M_CB_Revaluation.revaluationdate"  ref="ref_revaluationdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_Revaluation.bankcd" :label="M_CB_Revaluation.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_CB_Revaluation.currencycd" :label="M_CB_Revaluation.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OncurrencyrateChange" :prop="PI_currencyrate" v-model="M_CB_Revaluation.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err1">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> * Rate must be greater than zero </label></b-col>
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

            <!-- <ABSListVuex
                :prop = "propList"
                :title = "'InvoiceEfaktur'"
                :isProcess = "false"
                :hideCheckboxAndGear=true
                @rowClicked = "rowClicked"
                @rowDblClicked = "doDoubleClick"
                @rowLinkClick = "rowLink"
                @pageSize = "M_PageSize"
                @pagination = "M_Pagination"
                @filter = "M_Advance_Filter"
                @headTable = "M_Head_Table"
            /> -->

           

        </div>
    </div>
</template>

<script>
// import MyModal from'./BG_viewModal.vue'
export default {
    data() {
        return {
            // propList: {
            //     initialWhere: "",
            //     LineNo: 0,
            //     PageLevel: 1,
            //     TabIndex: 1,
            //     OrderBy: "SequenceNo ASC"
            //     // ParamView: "'1','2019','001'"
            // },
            paragraphs: [true],
            timer: null,
            FormType: "Process",
            error: false,
            err1: false,
       
            IEBy: {Input: '', Edit: ''},
            responseFile:[],
            M_CB_Revaluation :{
                revaluationdate: '',
                bankcd: '',
                currencycd: '',
                currencyrate: '0'
                
                    },
            PI_revaluationdate: { 
                cValidate :'required|max:10', 
                cName: 'revaluationdate', 
                cLabel: 'Revaluation Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND Currency NOT IN ( SELECT BaseCurrencyCd FROM GL_Specification ) AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'bankcd', 
                cLabel: 'Bank', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: "CurrencyCd NOT IN (SELECT BaseCurrencyCd FROM GL_Specification)"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Bank Currency', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Revaluation Currency Rate ', 
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
            btnText: 'Generate',
            TrxTypeFrom: null,
            TrxTypeTo: null
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
      OncurrencyrateChange(data){
          this.$nextTick(() => {
              if(data == 0){
                    this.error = true
                    this.err1 = true
                } else {
                    this.err1 = false
                    this.error = false
                } 
          })
          this.$forceUpdate()
      },       
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Revaluation.bankcd = data.id
            this.M_CB_Revaluation.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Revaluation.currencycd = data.id
            this.M_CB_Revaluation.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
            this.responseFile = response
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
            this.M_CB_Revaluation = {
                currencycd:'',
                revaluationdate:'',
                currencyrate:'',

            }
        },
        M_Save(){
            
            var bank = this.utk !=undefined? this.M_CB_Revaluation.bankcd:""

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: this.M_CB_Revaluation.bankcd == '' || this.M_CB_Revaluation.bankcd == null ? 'NULL' : this.M_CB_Revaluation.bankcd ,
                CurrencyCd: this.M_CB_Revaluation.currencycd,
                RevaluationDate: this.M_CB_Revaluation.revaluationdate,
                RevaluationRate: this.M_CB_Revaluation.currencyrate,
                UserEdit: this.getDataUser().UserId,
                OutputMessage_Output: ''                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                // this.alertSuccess(response.Message)
                var msg = response.Data.OutputMessage;
                this.alertWithHtml('Info','info',msg)
                .then(() => {
                    
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit(true)
										
					
                })
            })
            // getUrlImportEFaktur
            // var param = {		
            //     SubportfolioCd: this.getDataUser().SubPortfolioCd,
            //     SequenceNo: this.responseFile.Data.SequenceNo 
            // }

            // this.postEncode(this.getUrlImportEFaktur(), param)
            // .then((response) => {
            //     if(response == null) return
            //     // this.$parent.resultInsert(response.Message)	
            //     this.alertSuccess(response.Message)
            // })
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
        M_Head_Table () {},
     
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
        // alert(this.utk) 
        if(this.utk !=undefined){
            this.PI_bankcd.cVisible = false
        }
        // this.getToolbar().doEdit(true)
        this.toToolbar().doEdit(true)
        // alert(this.getUrlImportCSV())
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


