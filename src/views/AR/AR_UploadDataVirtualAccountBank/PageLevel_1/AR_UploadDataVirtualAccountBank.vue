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
                                        <ABSCompute :prop="PI_message" v-model="M_AR_UploadDataVirtualAccountBank.message"  ref="ref_message" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliocdChange" :prop="PI_subportfoliocd" :value="M_AR_UploadDataVirtualAccountBank.subportfoliocd" :label="M_AR_UploadDataVirtualAccountBank.subportfoliocdLabel" ref="ref_subportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypegroupcdChange" :prop="PI_trxtypegroupcd" :value="M_AR_UploadDataVirtualAccountBank.trxtypegroupcd" :label="M_AR_UploadDataVirtualAccountBank.trxtypegroupcdLabel" ref="ref_trxtypegroupcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcodefromChange" :prop="PI_debtorcodefrom" :value="M_AR_UploadDataVirtualAccountBank.debtorcodefrom" :label="M_AR_UploadDataVirtualAccountBank.debtorcodefromLabel" ref="ref_debtorcodefrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcodetoChange" :prop="PI_debtorcodeto" :value="M_AR_UploadDataVirtualAccountBank.debtorcodeto" :label="M_AR_UploadDataVirtualAccountBank.debtorcodetoLabel" ref="ref_debtorcodeto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OninvoicenofromChange" :prop="PI_invoicenofrom" :value="M_AR_UploadDataVirtualAccountBank.invoicenofrom" :label="M_AR_UploadDataVirtualAccountBank.invoicenofromLabel" ref="ref_invoicenofrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OninvoicenotoChange" :prop="PI_invoicenoto" :value="M_AR_UploadDataVirtualAccountBank.invoicenoto" :label="M_AR_UploadDataVirtualAccountBank.invoicenotoLabel" ref="ref_invoicenoto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OninvoicedatefromChange" :prop="PI_invoicedatefrom" v-model="M_AR_UploadDataVirtualAccountBank.invoicedatefrom"  ref="ref_invoicedatefrom" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OninvoicedatetoChange" :prop="PI_invoicedateto" v-model="M_AR_UploadDataVirtualAccountBank.invoicedateto"  ref="ref_invoicedateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6" style="padding-left: 25px !important;">
                                        <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goDownload"><font-awesome-icon icon="list" class="icon-style-1"/> Export</b-button>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                                                    
                                
                                </b-row>
                            </b-form>
                            
                        </b-col>
                    </b-row>
                </b-collapse>
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
            widthModal :'80%',
            dataModalHeader:[],
            dataModalDetail:[],
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},
            responseFile:[],
            M_AR_UploadDataVirtualAccountBank :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtypegroupcd: '',
                debtorcodefrom: '',
                debtorcodeto: '',
                invoicenofrom: '',
                invoicenoto: '',
                invoicedatefrom: '',
                invoicedateto: ''
                    },
            					
            PI_message: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: false 
            }, 
            PI_subportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolioByUser'    , 
                    ColumnDB: 'SubPortfolioCd'   , 
                    InitialWhere: "UserId='"+this.getDataUser().UserId+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio Code', 
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
                cDisplayColumn: 'SubPortFolioCd,Name' ,
            }, 
            PI_trxtypegroupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeGroup'    , 
                    ColumnDB: 'TrxTypeGroupCd'   , 
                    InitialWhere: "ModuleCd = 'AR'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtypegroupcd', 
                cLabel: 'Trx Type Group Code', 
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
                cDisplayColumn: 'TrxTypeGroupCd,Descs,TimeEdit' ,
            }, 
            PI_debtorcodefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcodefrom', 
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
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_debtorcodeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcodeto', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_invoicenofrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupInvoiceNo'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: ""  , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'invoicenofrom', 
                cLabel: 'Invoice No From', 
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
                cDisplayColumn: 'DebitNo,Descs' ,
            }, 
            PI_invoicenoto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupInvoiceNo'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: ""  , 
                    ParamWhere: ''   
                        }, 
                cValidate :'', 
                cName: 'invoicenoto', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'DebitNo,Descs' ,
            }, 
            PI_invoicedatefrom: { 
                cValidate :'', 
                cName: 'invoicedatefrom', 
                cLabel: 'Invoice Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_invoicedateto: { 
                cValidate :'', 
                cName: 'invoicedateto', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
  },
  methods: {   
        OnsubportfoliocdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UploadDataVirtualAccountBank.subportfoliocd = data.id
            this.M_AR_UploadDataVirtualAccountBank.subportfoliocdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliocd}
                this.setColumnSubportfolioWhere()
            }
        })
        this.$forceUpdate()
        },
        OntrxtypegroupcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UploadDataVirtualAccountBank.trxtypegroupcd = data.id
            this.M_AR_UploadDataVirtualAccountBank.trxtypegroupcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypegroupcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcodefromChange (data) {
        this.$nextTick(() => {
            this.M_AR_UploadDataVirtualAccountBank.debtorcodefrom = data.id
            this.M_AR_UploadDataVirtualAccountBank.debtorcodefromLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcodefrom}
            this.M_AR_UploadDataVirtualAccountBank.debtorcodeto = data.id
            this.M_AR_UploadDataVirtualAccountBank.debtorcodetoLabel = data.label
            this.setColumnDebtorCdWhere()
            }
        })
        this.$forceUpdate()
        },
        OndebtorcodetoChange (data) {
        this.$nextTick(() => {
            this.M_AR_UploadDataVirtualAccountBank.debtorcodeto = data.id
            this.M_AR_UploadDataVirtualAccountBank.debtorcodetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcodeto}
            this.setColumnDebtorCdWhere()
            }
        })
        this.$forceUpdate()
        },
        OninvoicenofromChange (data) {
        this.$nextTick(() => {
            this.M_AR_UploadDataVirtualAccountBank.invoicenofrom = data.id
            this.M_AR_UploadDataVirtualAccountBank.invoicenofromLabel = data.label
            if (this.inputStatus != "VIEW") {
//{invoicenofrom}
            this.M_AR_UploadDataVirtualAccountBank.invoicenoto = data.id
            this.M_AR_UploadDataVirtualAccountBank.invoicenotoLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OninvoicenotoChange (data) {
        this.$nextTick(() => {
            this.M_AR_UploadDataVirtualAccountBank.invoicenoto = data.id
            this.M_AR_UploadDataVirtualAccountBank.invoicenotoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{invoicenoto}
            }
        })
        this.$forceUpdate()
        },
        OninvoicedatefromChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{invoicedatefrom}
            }
        })
        this.$forceUpdate()
        },
        OninvoicedatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{invoicedateto}
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
        M_Save(){
          
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
        goDownload(){
            var sup = this.M_AR_UploadDataVirtualAccountBank.subportfoliocd
            var trx = this.M_AR_UploadDataVirtualAccountBank.trxtypegroupcd
            var debF = this.M_AR_UploadDataVirtualAccountBank.debtorcodefrom
            var debT = this.M_AR_UploadDataVirtualAccountBank.debtorcodeto
            var invF = this.M_AR_UploadDataVirtualAccountBank.invoicenofrom
            var invT = this.M_AR_UploadDataVirtualAccountBank.invoicenoto
            var invDF = this.M_AR_UploadDataVirtualAccountBank.invoicedatefrom
            var invDT = this.M_AR_UploadDataVirtualAccountBank.invoicedateto
            var user = this.getDataUser().UserId

            // var Filter  = "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'" + this.GetFilter()
            // // Filter = this.replaceAllString(Filter," ","%20")
            var url = this.getExportVirutalAccount(sup,trx,user,debF,debT,invF,invT,invDF,invDT)
            window.location.href = url
            this.$refs.modalExport.hide()
        },
        GetFilter(){
        },
        setColumnSubportfolioWhere() {
            // Lookup debtorcdfromto
            var where = "SubportfolioCd='"+this.M_AR_UploadDataVirtualAccountBank.subportfoliocd+"'"
            this.$refs.ref_debtorcodefrom.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_debtorcodefrom.onChangeTriggered = true
            this.$refs.ref_debtorcodefrom.prop.cDefault = this.M_AR_UploadDataVirtualAccountBank.debtorcodefrom
            this.$refs.ref_debtorcodeto.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_debtorcodeto.onChangeTriggered = true
            this.$refs.ref_debtorcodeto.prop.cDefault = this.M_AR_UploadDataVirtualAccountBank.debtorcodeto
        },
        setColumnDebtorCdWhere() {
            // Lookup invoicenofromto
            var where1 = "DebtorCd Between '"+ this.M_AR_UploadDataVirtualAccountBank.debtorcodefrom +"' And '"+ this.M_AR_UploadDataVirtualAccountBank.debtorcodeto +"' AND SubPortfolioCd = '" + this.M_AR_UploadDataVirtualAccountBank.subportfoliocd + "'"
            var where2 = "SubPortfolioCd = '" + this.M_AR_UploadDataVirtualAccountBank.subportfoliocd + "'"
            var debtorfrom = this.M_AR_UploadDataVirtualAccountBank.debtorcodefrom
            var debtorto = this.M_AR_UploadDataVirtualAccountBank.debtorcodeto
            if (debtorfrom != ""){
                this.$refs.ref_invoicenofrom.prop.dataLookUp.InitialWhere = where1
                this.$refs.ref_invoicenoto.prop.dataLookUp.InitialWhere = where2
            }
            else{
                this.$refs.ref_invoicenofrom.prop.dataLookUp.InitialWhere = where1
                this.$refs.ref_invoicenoto.prop.dataLookUp.InitialWhere = where2
            }
            
            this.$refs.ref_invoicenofrom.onChangeTriggered = true
            this.$refs.ref_invoicenofrom.prop.cDefault = this.M_AR_UploadDataVirtualAccountBank.invoicenofrom
            
            this.$refs.ref_invoicenoto.onChangeTriggered = true
            this.$refs.ref_invoicenoto.prop.cDefault = this.M_AR_UploadDataVirtualAccountBank.invoicenoto
        },
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
       this.$store.commit('setLevel', 1)
       this.$store.commit('setTab', 1)  
       this.$store.commit('setListDisable', false)
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


