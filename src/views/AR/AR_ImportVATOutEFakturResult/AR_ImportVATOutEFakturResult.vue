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
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        @response ="getResponse"
                                                                        v-model="M_AR_ImportVATOutEFakturResult.referencefilename" 
                                                                        :file="M_AR_ImportVATOutEFakturResult.picturefilename" 
                                                                        :image="M_AR_ImportVATOutEFakturResult.referencefilename"
                                                                         ref="ref_referencefilename" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndelimiterChange" :prop="PI_delimiter" v-model="M_AR_ImportVATOutEFakturResult.delimiter"  ref="ref_delimiter" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6" style="padding-left: 25px !important;">
                                        <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goPreview"><font-awesome-icon icon="list" class="icon-style-1"/> Preview</b-button>
                                        <!-- <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goDownload"><font-awesome-icon icon="list" class="icon-style-1"/> Download</b-button> -->
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
            M_AR_ImportVATOutEFakturResult :{
                referencefilename:'',
                delimiter: ','
                    },
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'Picture File', 
                cLabelSize: 4, 
                cAccept:'.csv',
                cUrl:'',
                cDelimiter:',',
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
            // getUrlImportEFaktur
            var param = {		
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.responseFile.Data.SequenceNo 
            }

            this.postEncode(this.getUrlImportEFaktur(), param)
            .then((response) => {
                if(response == null) return
                // this.$parent.resultInsert(response.Message)	
                this.alertSuccess(response.Message)
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
            this.propList.initialWhere = "SequenceNo = "+this.responseFile.Data.SequenceNo+" AND SeqName='ImporteFaktur' ";
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
        this.PI_referencefilename.cUrl =  this.getUrlImportCSV()
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


