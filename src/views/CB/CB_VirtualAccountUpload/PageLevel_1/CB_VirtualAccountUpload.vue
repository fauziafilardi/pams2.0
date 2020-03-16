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
                                        <!-- <ABSCompute :prop="PI_trxtype" v-model="M_CB_VirtualAccountUpload.trxtype"  ref="ref_trxtype" /> -->
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_VirtualAccountUpload.trxtype" :label="M_CB_VirtualAccountUpload.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_paymentcd" v-model="M_CB_VirtualAccountUpload.paymentcd"  ref="ref_paymentcd" /> -->
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_VirtualAccountUpload.paymentcd" :label="M_CB_VirtualAccountUpload.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_VirtualAccountUpload.bankcd" :label="M_CB_VirtualAccountUpload.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        @response ="getResponse"
                                                                        v-model="M_CB_VirtualAccountUpload.referencefilename" 
                                                                        :file="M_CB_VirtualAccountUpload.picturefilename" 
                                                                        :image="M_CB_VirtualAccountUpload.referencefilename"
                                                                         ref="ref_referencefilename" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col><label class="lbl-value-view-form">* Please Select Only *.xls files ! (NOT .xlsx) </label></b-col>
                                            </b-row>                                              
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndelimiterChange" :prop="PI_delimiter" v-model="M_CB_VirtualAccountUpload.delimiter"  ref="ref_delimiter" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6" style="padding-left: 25px !important;">
                                        <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goPreview"><font-awesome-icon icon="list" class="icon-style-1"/> Preview</b-button>
                                        <!-- <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goDownload"><font-awesome-icon icon="list" class="icon-style-1"/> Download</b-button> -->
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col><label class="lbl-value-view-form">* To Upload, Click The "Save" Button Above (After Preview) </label></b-col>
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

            <ABSListVuex
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
                initialWhere: "",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: "SequenceNo ASC"
                // ParamView: "'1','2019','001'"
            },
            paragraphs: [true],
            timer: null,
            widthModal :'80%',
            dataModalHeader:[],
            dataModalDetail:[],
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},
            responseFile:[],
            M_CB_VirtualAccountUpload :{
                trxtype: '',
                trxtypeLabel:'',
                paymentcd: '',
                paymentcdLabel:'',
                bankcd: '',
                bankcdLabel:'',
                referencefilename:'',
                delimiter: ','
                    },
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'File Name', 
                cLabelSize: 4, 
                cAccept:'.xls,.xlsx',
                cUrl:'',
                cDelimiter:this.getDataUser().UserId,
                cOrder:0, 
                cVisible: true, 
                cModule: 'AR', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeV2'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='CB' AND TrxClass IN ('M','T') and Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            },
            PI_paymentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'paymentcd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
                cDisplayColumn: 'PaymentCd,Descs' ,
            },
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' AND Status='A' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_VirtualAccountUpload.bankcd = data.id
            this.M_CB_VirtualAccountUpload.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_VirtualAccountUpload.trxtype = data.id
            this.M_CB_VirtualAccountUpload.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_VirtualAccountUpload.paymentcd = data.id
            this.M_CB_VirtualAccountUpload.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
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
             this.M_CB_VirtualAccountUpload.picturefilename = fileName 
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
            // getUrlImportEFaktur
            if(this.responseFile.Data==null){

                this.alertError("Invalid Excel file, file must contain these columns : Date, VirtualAccountNo, Amount, Description.")
                return
            }
            var param = {		
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.responseFile.Data.SequenceNo,
                TrxType: this.M_CB_VirtualAccountUpload.trxtype == '' || this.M_CB_VirtualAccountUpload.trxtype == null ? 'NULL' : this.M_CB_VirtualAccountUpload.trxtype,
                PaymentCd: this.M_CB_VirtualAccountUpload.paymentcd == '' || this.M_CB_VirtualAccountUpload.paymentcd == null ? 'NULL' : this.M_CB_VirtualAccountUpload.paymentcd,
                BankCd: this.M_CB_VirtualAccountUpload.bankcd == '' || this.M_CB_VirtualAccountUpload.bankcd == null ? 'NULL' : this.M_CB_VirtualAccountUpload.bankcd,
                UserInput: this.getDataUser().UserId 
            }

            this.postEncode(this.getUrlPostVirtualAccount(), param)
            .then((response) => {
                if(response == null) return
                // this.$parent.resultInsert(response.Message)	
                this.alertSuccess(response.Message)                
                .then(() => {                    
                    this.toToolbar().doRefresh()
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
        M_Head_Table () {},
        goPreview(){
            // alert(this.GetFilter())
            this.$store.commit('setListDisable', false)
            this.propList.initialWhere = "SequenceNo = "+this.responseFile.Data.SequenceNo+" AND SeqName='ImportVA' "
            this.toList().doGetList('','eb_getList')
        },
        GetFilter(){
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
        // this.getToolbar().doEdit(true)
        this.toToolbar().doEdit(true)
        // alert(this.getUrlImportCSV())
        this.PI_referencefilename.cUrl =  this.getUrlImportVirtualAccount()
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


