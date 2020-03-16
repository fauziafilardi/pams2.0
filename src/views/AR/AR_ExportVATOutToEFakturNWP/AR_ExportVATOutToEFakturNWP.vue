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
                                        <ABSInputSelectList @change="OnfromdebtorcdChange" :prop="PI_fromdebtorcd" :value="AR_ExportVATOutToEFakturNWP.fromdebtorcd" :label="AR_ExportVATOutToEFakturNWP.fromdebtorcdLabel" ref="ref_fromdebtorcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntodebtorcdChange" :prop="PI_todebtorcd" :value="AR_ExportVATOutToEFakturNWP.todebtorcd" :label="AR_ExportVATOutToEFakturNWP.todebtorcdLabel" ref="ref_todebtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnfromdebitdateChange" :prop="PI_fromdebitdate" v-model="AR_ExportVATOutToEFakturNWP.fromdebitdate"  ref="ref_fromdebitdate" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntodebitdateChange" :prop="PI_todebitdate" v-model="AR_ExportVATOutToEFakturNWP.todebitdate"  ref="ref_todebitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromdebitnoChange" :prop="PI_fromdebitno" :value="AR_ExportVATOutToEFakturNWP.fromdebitno" :label="AR_ExportVATOutToEFakturNWP.fromdebitnoLabel" ref="ref_fromdebitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntodebitnoChange" :prop="PI_todebitno" :value="AR_ExportVATOutToEFakturNWP.todebitno" :label="AR_ExportVATOutToEFakturNWP.todebitnoLabel" ref="ref_todebitno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromvatnoChange" :prop="PI_fromvatno" :value="AR_ExportVATOutToEFakturNWP.fromvatno" :label="AR_ExportVATOutToEFakturNWP.fromvatnoLabel" ref="ref_fromvatno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntovatnoChange" :prop="PI_tovatno" :value="AR_ExportVATOutToEFakturNWP.tovatno" :label="AR_ExportVATOutToEFakturNWP.tovatnoLabel" ref="ref_tovatno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnfromvatdateChange" :prop="PI_fromvatdate" v-model="AR_ExportVATOutToEFakturNWP.fromvatdate"  ref="ref_fromvatdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntovatdateChange" :prop="PI_tovatdate" v-model="AR_ExportVATOutToEFakturNWP.tovatdate"  ref="ref_tovatdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndelimiterChange" :prop="PI_delimiter" v-model="AR_ExportVATOutToEFakturNWP.delimiter"  ref="ref_delimiter" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6" style="padding-left: 25px !important;">
                                        <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goPreview"><font-awesome-icon icon="list" class="icon-style-1"/> Preview</b-button>
                                        <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goDownload"><font-awesome-icon icon="list" class="icon-style-1"/> Download</b-button>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                
                                </b-row>
                            </b-form>
                            
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>

            <ABSListVuex
                :prop = "propList"
                :title = "'InvoiceEfaktur'"
                :isProcess = "false"
                @rowClicked = "rowClicked"
                @rowDblClicked = "doDoubleClick"
                @rowLinkClick = "rowLink"
                @pageSize = "M_PageSize"
                @pagination = "M_Pagination"
                @filter = "M_Advance_Filter"
                @headTable = "M_Head_Table"
            />

           

        </div>
    </div>
</template>

<script>
// import MyModal from'./BG_viewModal.vue'
export default {
    data() {
        return {
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND VATStatus = 'Y' AND ISNULL(VATExportStatus, '') <> 'P' AND B.VATAmt>0",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: "DebitNo ASC"
                // ParamView: "'1','2019','001'"
            },
            paragraphs: [true],
            timer: null,
        widthModal :'80%',
        dataModalHeader:[],
        dataModalDetail:[],
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            AR_ExportVATOutToEFakturNWP :{
                fromdebtorcd: '',
                todebtorcd: '',
                fromdebitdate: '',
                todebitdate:'',
                fromdebitno: '',
                todebitno: '',
                fromvatno: '',
                tovatno: '',
                fromvatdate: '',
                tovatdate: '',
                delimiter: ','
                    },
            PI_fromdebtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromdebtorcd', 
                cLabel: ' Debtor Code From', 
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
            PI_todebtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'todebtorcd', 
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
            PI_fromdebitdate: { 
                cValidate :'', 
                cName: 'fromdebitdate', 
                cLabel: 'Debit Date From', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_todebitdate: { 
                cValidate :'', 
                cName: 'todebitdate', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
            PI_fromdebitno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebitNo_ListingGIinv2'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromdebitno', 
                cLabel: 'Debit No From', 
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
                cDisplayColumn: 'DebitNo,DebitDate' ,
            }, 
            PI_todebitno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebitNo_ListingGIinv2'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'todebitno', 
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
                cDisplayColumn: 'DebitNo,DebitDate' ,
            }, 
            PI_fromvatno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupVW_SAR_TaxBatchMasterDVATNo'    , 
                    ColumnDB: 'VATNo'   , 
                    InitialWhere: "Status in('Y')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromvatno', 
                cLabel: 'VAT No From', 
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
                cDisplayColumn: 'VATNo,DetailBatchNo' ,
            }, 
            PI_tovatno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupVW_SAR_TaxBatchMasterDVATNo'    , 
                    ColumnDB: 'VATNo'   , 
                    InitialWhere: "Status in('Y')"   , 
                    ParamWhere: ""  
                        }, 
                cValidate :'', 
                cName: 'tovatno', 
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
                cDisplayColumn: 'VATNo,DetailBatchNo' ,
            }, 
            PI_fromvatdate: { 
                cValidate :'', 
                cName: 'fromvatdate', 
                cLabel: 'VAT Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_tovatdate: { 
                cValidate :'', 
                cName: 'tovatdate', 
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
            PI_delimiter: { 
                cValidate :'', 
                cName: 'delimiter', 
                cId: 'rdbdelimiter', 
                cRadioOptions: [{ text: ', (comma)', value: ',' },{ text: '; (semicolon)', value: ';' }], 
                cRadioDefaultOption: '', 
                cLabel:'Delimiter', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
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
      OnfromdebtorcdChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.fromdebtorcd = data.id
            this.AR_ExportVATOutToEFakturNWP.fromdebtorcdLabel = data.label

            this.AR_ExportVATOutToEFakturNWP.todebtorcd = data.id
            this.AR_ExportVATOutToEFakturNWP.todebtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromdebtorcd}
            }
        })
        this.$forceUpdate()
        },
        OntodebtorcdChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.todebtorcd = data.id
            this.AR_ExportVATOutToEFakturNWP.todebtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{todebtorcd}
            }
        })
        this.$forceUpdate()
        },
        OnfromdebitdateChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.todebitdate = data
            if (this.inputStatus != "VIEW") {
//{fromdebitdate}
            }
        })
        this.$forceUpdate()
        },
        OnfromdebitnoChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.fromdebitno = data.id
            this.AR_ExportVATOutToEFakturNWP.fromdebitnoLabel = data.label

            this.AR_ExportVATOutToEFakturNWP.todebitno = data.id
            this.AR_ExportVATOutToEFakturNWP.todebitnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromdebitno}
            }
        })
        this.$forceUpdate()
        },
        OntodebitnoChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.todebitno = data.id
            this.AR_ExportVATOutToEFakturNWP.todebitnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{todebitno}
            }
        })
        this.$forceUpdate()
        },
        OnfromvatnoChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.fromvatno = data.id
            this.AR_ExportVATOutToEFakturNWP.fromvatnoLabel = data.label

            this.AR_ExportVATOutToEFakturNWP.tovatno = data.id
            this.AR_ExportVATOutToEFakturNWP.tovatnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromvatno}
            }
        })
        this.$forceUpdate()
        },
        OntovatnoChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.tovatno = data.id
            this.AR_ExportVATOutToEFakturNWP.tovatnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tovatno}
            }
        })
        this.$forceUpdate()
        },
        OnfromvatdateChange (data) {
        this.$nextTick(() => {
            this.AR_ExportVATOutToEFakturNWP.tovatdate = data
            if (this.inputStatus != "VIEW") {
//{fromvatdate}
            }
        })
        this.$forceUpdate()
        },
        OntovatdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tovatdate}
            }
        })
        this.$forceUpdate()
        },
        OndelimiterChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{delimiter}
            }
        })
        this.$forceUpdate()
        },
    setToolbarButton (){
        // this.getToolbar().isNew = true
        //     this.getToolbar().statusFunction[0].disabled = true
        //     // this.getToolbar().statusFunction[5].disabled = false
        //    this.getToolbar().statusFunction[7].disabled = true
        //    //this.getToolbar().statusFunction[4].disabled = false

    },
    M_Search(data){
            this.toList().doGetList(data,'eb_getList')
        },
        toList() {
            return this.$children[2]
        },
        rowClicked (record, index) {
            this.getModal(record)
          // alert('aaaa')          
          this.M_BG_ViewBudgetUsage.BudgetCd = record.BudgetCd
          this.M_BG_ViewBudgetUsage.Descs = record.Descs

          this.PI_budgetcd.cValue = record.BudgetCd
          this.PI_budgetcddescs.cValue = record.Descs
        },
        doDoubleClick () {
        
        },
        rowLink (url) {},
        M_PageSize () {},
        M_Pagination () {},
        M_Advance_Filter () {},
        M_Head_Table () {},
        goGenerate() {
            // this.getModal()
        this.propList.ParamView = "'"+this.M_BG_ViewBudgetUsage.Month + "','" + this.M_BG_ViewBudgetUsage.Year + "','"+this.getDataUser().SubPortfolioCd+"'"

        this.toList().doGetList('','eb_getList')
        },
        goDownload(){
            var Filter  = "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'" + this.GetFilter()
            // Filter = this.replaceAllString(Filter," ","%20")
            var url = this.getFileEFaktur(this.getOptionSeq().OptionSeq, this.AR_ExportVATOutToEFakturNWP.delimiter,Filter)
            window.location.href = url
            this.$refs.modalExport.hide()

        },
        goPreview(){
            // alert(this.GetFilter())
            this.propList.initialWhere = "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"+this.GetFilter()
            this.toList().doGetList('','eb_getList')
        },
        GetFilter(){
            var filterString =''
            if(this.AR_ExportVATOutToEFakturNWP.fromdebtorcd !=''){
                if(this.AR_ExportVATOutToEFakturNWP.todebtorcd !=''){
                    filterString += " AND ( DebtorCd Between '"+this.AR_ExportVATOutToEFakturNWP.fromdebtorcd+"' AND '"+this.AR_ExportVATOutToEFakturNWP.todebtorcd+"' ) "
                }else{
                    filterString += " AND DebtorCd = '"+this.AR_ExportVATOutToEFakturNWP.fromdebtorcd+"' "
                }
            }

            if(this.AR_ExportVATOutToEFakturNWP.fromdebitdate !=''){
                if(this.AR_ExportVATOutToEFakturNWP.todebitdate !=''){
                    filterString += " AND ( DebitDate Between convert(datetime,'"+this.AR_ExportVATOutToEFakturNWP.fromdebitdate+"') AND convert(datetime,'"+this.AR_ExportVATOutToEFakturNWP.todebitdate+"') ) "
                }else{
                    filterString += " AND DebitDate = convert(datetime,'"+this.AR_ExportVATOutToEFakturNWP.fromdebitdate+"') "
                }
            }

            if(this.AR_ExportVATOutToEFakturNWP.fromdebitno !=''){
                if(this.AR_ExportVATOutToEFakturNWP.todebitno !=''){
                    filterString += " AND ( DebitNo Between '"+this.AR_ExportVATOutToEFakturNWP.fromdebitno+"' AND '"+this.AR_ExportVATOutToEFakturNWP.todebitno+"' ) "
                }else{
                    filterString += " AND DebitNo = '"+this.AR_ExportVATOutToEFakturNWP.fromdebitno+"' "
                }
            }
            if(this.AR_ExportVATOutToEFakturNWP.fromvatno !=''){
                if(this.AR_ExportVATOutToEFakturNWP.tovatno !=''){
                    filterString += " AND ( VATNo Between '"+this.AR_ExportVATOutToEFakturNWP.fromvatno+"' AND '"+this.AR_ExportVATOutToEFakturNWP.tovatno+"' ) "
                }else{
                    filterString += " AND VATNo = '"+this.AR_ExportVATOutToEFakturNWP.fromdebitdate+"' "
                }
            }
            if(this.AR_ExportVATOutToEFakturNWP.fromvatdate !=''){
                if(this.AR_ExportVATOutToEFakturNWP.tovatdate !=''){
                    filterString += " AND ( VATDate Between convert(datetime,'"+this.AR_ExportVATOutToEFakturNWP.fromvatdate+"') AND convert(datetime,'"+this.AR_ExportVATOutToEFakturNWP.tovatdate+"') ) "
                }else{
                    filterString += " AND VATDate = convert(datetime,'"+this.AR_ExportVATOutToEFakturNWP.fromvatdate+"') "
                }
            }

            return filterString
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
        this.$store.commit('setLevel', 1)
       this.$store.commit('setTab', 1)  
       this.$store.commit('setListDisable', false)
       this.hideSideBarMenu()
    //     this.getToolbar().doEdit(true)
    //     this.$store.commit('setFormType','Form')

    //     this.getToolbar().FormStatus = 'NEW'
    //     this.hideSideBarMenu()
    //     this.toList().doGetList('','eb_getList')

    // this.getToolbar().doEdit(true)
    //     this.$store.commit('setFormType','Form')

    //     this.getToolbar().FormStatus = 'NEW'

    //     this.getToolbar().ProcessPS()
    //     this.hideSideBarMenu()

        

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


