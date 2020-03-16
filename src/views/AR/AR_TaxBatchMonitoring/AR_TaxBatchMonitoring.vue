<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">
          <div class="tab-list-process">
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                        <b-col md="12" id="col-left" class="bColMasterForm" style="margin-top: 20px;">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">
                                    <b-col md="12" id="col-left">
                                        <b-row>
                                            <!-- <b-col md="1"></b-col> -->
                                            <b-col  md="6" style="margin-left:350px;">
                                                <ABSInputSelectList @change="OnBatchNoChange"
                                                :prop="PI_BatchNo" 
                                                :value="M_AR_TaxBatchMonitoring.BatchNo"
                                                :label="M_AR_TaxBatchMonitoring.BatchNoLabel"
                                                 ref="ref_BatchNo"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col offset="6">
                                                <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="goGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-form>
                            
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>

            <ABSListVuex
                :prop = "propList"
                :title = "'ViewBudgetList'"
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
  <!-- <modal>
    <modals-container/>
</modal> -->
<!-- <modals-container/> -->

    </div>
</template>

<script>
export default {
    data() {
        return {
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' OR BaseOnTaxHandling='P'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: "VATNo Asc",
                ParamView: ""
            },
            paragraphs: [true],
            timer: null,
            widthModal :'80%',
            dataModalHeader:[],
            dataModalDetail:[],
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            M_AR_TaxBatchMonitoring: {
                VATPrefix: '',
                BatchNo: '',

            },
            PI_BatchNo: {
            
                dataLookUp: { 
                    LookUpCd: 'GetLookupTaxBatchMasterMonitoring', 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'BatchNo', 
                cLabel: 'VAT Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1,
                cProtect: false, 
                cVisible:  true, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1', 
                cStatic: false, 
                cDisplayColumn: 'VATPrefix' ,
            
            },
            
            btnText: 'Generate'
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
        PageLevel () {
            return 1
        },
        TabIndex () {
            return 1
        },
  },
  methods: {     
    setToolbarButton (){

    },
    OnBatchNoChange(data){
        this.M_AR_TaxBatchMonitoring.BatchNo = data.id
        this.M_AR_TaxBatchMonitoring.BatchNoLabel = data.label
    },
    M_Search(data){
            this.toList().doGetList(data,'eb_getList')
        },
        toList() {
            return this.$children[2]
        },
        rowClicked () {
        },
        doDoubleClick () {
        
        },
        rowLink (url) {},
        M_PageSize () {},
        M_Pagination () {},
        M_Advance_Filter () {},
        M_Head_Table () {},
        goGenerate() {
        this.propList.initialWhere = "BatchNo = '" + this.M_AR_TaxBatchMonitoring.BatchNo + "'"
        this.toList().doGetList('','eb_getList')
        },
        
        
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
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)  
        this.$store.commit('setListDisable', false)
        this.hideSideBarMenu()
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


