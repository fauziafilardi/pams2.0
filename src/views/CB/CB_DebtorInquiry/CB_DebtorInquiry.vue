<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
            <div class="content-app-form__body form-process" >
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
                                                <ABSInputSelectList @change="OnlotnofromChange" :prop="PI_lotnofrom" :value="M_CB_DebtorInquiry.lotnofrom" :label="M_CB_DebtorInquiry.lotnofromLabel"  ref="ref_lotnofrom"/>
                                            </b-col>
                                            <b-col md="6">
                                                <ABSInputSelectList @change="OnlotnotoChange" :prop="PI_lotnoto" :value="M_CB_DebtorInquiry.lotnoto" :label="M_CB_DebtorInquiry.lotnotoLabel"  ref="ref_lotnoto"/>
                                            </b-col>
                                        </b-row>
                                        <b-row style="padding-top:10px;">
                                            <b-col offset="6">
                                                <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col>
                                            </b-col>
                                        </b-row> 
                                        <br>
                                    </b-col> <!-- table close -->							
                                
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                                
                            </b-form>
                            <div :style="'margin-top:25px;'">
                                <hr :style="'padding-top: 12px'">
                            </div>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab title="Inquiry Result" active>
                        <ABSListVuex
                            :prop = "propList"
                            :title = "'Debtor Inquiry'"
                            :isProcess = "false"
                            @rowClicked = "rowClicked"
                            @rowDblClicked = "doDoubleClick"
                            @rowLinkClick = "rowLink"
                            @pageSize = "M_PageSize"
                            @pagination = "M_Pagination"
                            @filter = "M_Advance_Filter"
                            @headTable = "M_Head_Table" 
                        />
                    </b-tab>                    
                </b-tabs>
            </div>
            
            
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "Process",
		Module:"CB",
            propList: {
                initialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},
            M_CB_DebtorInquiry :{
                lotnofrom: '',
                lotnoto: ''
            },
            PI_lotnofrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lotnofrom', 
                cLabel: 'Lot No From', 
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
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_lotnoto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lotnoto', 
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
                cDisplayColumn: 'LotNo,Descs' ,
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
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        doGenerate() {
            this.propList.initialWhere = "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"

            if(this.M_CB_DebtorInquiry.lotnofrom != '' && this.M_CB_DebtorInquiry.lotnoto != ''){
                this.propList.initialWhere += "AND LotNo Between '"+ this.M_CB_DebtorInquiry.lotnofrom +"' and '"+ this.M_CB_DebtorInquiry.lotnoto +"'"
            }
            this.toList().doGetList('','eb_getList')
        },
        OnlotnofromChange(data){
            console.log(data)
            this.M_CB_DebtorInquiry.lotnofrom = data.id
            this.M_CB_DebtorInquiry.lotnofromLabel = data.label

            this.M_CB_DebtorInquiry.lotnoto = data.id
            this.M_CB_DebtorInquiry.lotnotoLabel = data.label

            this.$nextTick(() => {
                // this.M_CB_DebtorInquiry.lotnoto = data
            })
            this.$forceUpdate()
        },
        OnlotnotoChange(data){
            this.$nextTick(() => {

            })
            this.$forceUpdate()
        },
        toList() {
            // return this.$children[2]
            return this.$children[2].$children[0].$children[0]
        },
		setToolbarButton () {
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
            this.toList().doGetList(data,'eb_getList')
        },
        M_Refresh(){
        },
		M_Cancel() {			
		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {
            this.masterUrlPopUp(
                `${window.location.origin}` + '/CB/CB_DebtorInquiryDetail?oid=' +this.getOptionSeq().OptionSeq+'&isCallBack=true&LotNo='+record.LotNo,
                '',
                '1000',
                '600',
                ''
            )
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
        },
        M_Update() {
        },
		M_ClearForm(){
		},
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
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

        // this.hideSideBarMenu()
        // this.toList().doGetList('','eb_getList')
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

