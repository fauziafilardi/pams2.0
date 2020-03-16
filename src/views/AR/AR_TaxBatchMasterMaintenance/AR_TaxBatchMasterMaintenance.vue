<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <!-- <div class="content-app-form__body" style="background-color: white;padding-top: 33px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;"> -->
        <div class="content-app-form__body form-process">
            <div class="tab-form-process">
                <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">   
                    <div class="div-collapse" v-b-toggle.collapse1>
                        <span>
                            <span style="float:Left; color: #81b3e9 !important;letter-spacing: 1px;margin-top: 2px;margin-left: 3px" >
                                Tax Batch Master Maintenance  <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                            </span>
                        </span>
                    </div>            
                        <b-collapse id="collapse1" :visible="true">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                                <b-col md="12" id="col-left" class="bColMasterForm">	
                                    <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                        <b-row style="padding-left:10px;">
                                            <b-col md="12" id="col-left">
                                                <b-row>
                                                    <b-col md=4>
                                                        <ABSInputSelectList
                                                            @change="OnBatchNoChange"
                                                            :prop="PI_BatchNo"
                                                            :value="BatchNo"
                                                            :label="BatchNoLabel"
                                                            ref="LookUpBatchNo"
                                                        />
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col md=4>
                                                        <ABSInputSelectList
                                                            @change="OnStartingVATNoChange"
                                                            :prop="PI_StartingVATNo"
                                                            :value="StartingVATNo"
                                                            :label="StartingVATNoLabel"
                                                            ref="LookUpStartingVATNo"
                                                        />
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col md=4>
                                                        <ABSInputSelectList
                                                            @change="OnEndingVATNoChange"
                                                            :prop="PI_EndingVATNo"
                                                            :value="EndingVATNo"
                                                            :label="EndingVATNoLabel"
                                                            ref="LookUpEndingVATNo"
                                                        />
                                                    </b-col>
                                                </b-row>
                                                <b-row>
                                                    <b-col md=4>
                                                        <ABSinputRadioButtonVuex
                                                            :prop="PI_Status"
                                                            v-model="Status"
                                                        />
                                                    </b-col>
                                                </b-row>
                                            </b-col>
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
            // tetew: '',
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},



            PI_BatchNo: {
                dataLookUp: {
                    LookUpCd: "GetLookUpVW_AR_TaxBatchMasterMaintenanceBatchNo",
                    ColumnDB: "BatchNo",
                    InitialWhere: "BaseOnTaxHandling ='P' OR SubPortfolioCd ='" + this.getDataUser().SubPortfolioCd + "' AND BaseOnTaxHandling ='S'",
                    ParamWhere: ""
                },
                cName: "BatchNo",
                cLabel: "VAT Prefix",
                cValidate: 'required',
                cType: "lookup",
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
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
                cDisplayColumn: 'BatchNo,VATPrefix'
            },
            PI_StartingVATNo: {
                dataLookUp: {
                    LookUpCd: "GetLookupVW_SAR_TaxBatchMasterDVATNo",
                    ColumnDB: "VATNo",
                    InitialWhere:" STATUS NOT IN ('Y', 'A', 'C', 'X') ",
                    ParamWhere: ""
                },
                cName: "StartingVATNo",
                cLabel: "From No",
                cValidate: 'required',
                cType: "lookup",
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: 'VATNo'
            },
            PI_EndingVATNo: {
                dataLookUp: {
                    LookUpCd: "GetLookupVW_SAR_TaxBatchMasterDVATNo",
                    ColumnDB: "VATNo",
                    InitialWhere: " STATUS NOT IN ('Y', 'A', 'C', 'X') ",
                    ParamWhere: ""
                },
                cName: "EndingVATNo",
                cLabel: "To No",
                cValidate: 'required',
                cType: "lookup",
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: 'VATNo'
            },
            PI_Status: { 
                cValidate :'', 
                cName:'Status', 
                cId:'rdbStatus', 
                cRadioOptions: [{ text: 'New', value: 'N' },{ text: 'Reserved', value: 'R' },{ text: 'Cancel', value: 'C' },{ text: 'Terminate', value: 'X' }], 
                cLabel:'Status', 
                cOrder:4, 
                cKey: false,
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
                UserEdit: '',
                BatchNo: '',
                BatchNoLabel: '',
                StartingVATNo: '',
                StartingVATNoLabel: '',
                EndingVATNo: '',
                EndingVATNoLabel: '',
                Status: 'N'

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
        OnBatchNoChange(data){
            // console.log(data)
            this.BatchNo = data.id
            this.BatchNoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.setColumnFromWhere()
                this.setColumnToWhere()
            }
            this.$forceUpdate()
        },
        OnStartingVATNoChange(data){
            this.StartingVATNo = data.id
            this.StartingVATNoLabel = data.label
        },
        OnEndingVATNoChange(data){
            this.EndingVATNo = data.id
            this.EndingVATNoLabel = data.label
        },
        OnStatusChange(data){
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        toToolbar() {
            return this.$children[0].$children[0]
        },
        toList() {

        },
        Loader() {
            return this.$children[3]
        },
        rowClicked (record, index) {},
        doDoubleClick () {},
        rowLink (url) {},
        M_PageSize () {},
        M_Pagination () {},
        M_Advance_Filter () {},
        M_Head_Table () {},
        M_Search(data){
        },
        M_Post() {
            var dataPost = []
            
            var batchno = this.BatchNo == '' || this.BatchNo == null ? 'NULL' : this.BatchNo
            var startingvatno = this.StartingVATNo == '' || this.StartingVATNo == null ? 'NULL' : this.StartingVATNo
            var endingcvatno = this.EndingVATNo == '' || this.EndingVATNo == null ? 'NULL' : this.EndingVATNo
                
            for (var x = 0; x < this.dataDetail.length; x++) {
                var data = this.dataDetail[x]
                dataPost.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    UserEdit: this.getDataUser().UserId,
                    _Message_ : "Data Saved!",
                    Status: data.Status,
                    BatchNo: batchno,
                    StartingVATNo: startingvatno,
                    EndingVATNo: endingcvatno
                })
            }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return

                this.BatchNo = ''
                this.BatchNoLabel = ''
                this.StartingVATNo = ''
                this.StartingVATNoLabel = ''
                this.EndingVATNo = ''
                this.EndingVATNoLabel = ''
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
            })
        },

        setToolbarButton() {},
        setColumnFromWhere() {
            // Lookup Address
            var where = "Status NOT IN ('Y','A','C','X')"
            this.$refs.LookUpStartingVATNo.prop.dataLookUp.InitialWhere = where
            this.$refs.LookUpStartingVATNo.onChangeTriggered = true
            this.$refs.LookUpStartingVATNo.prop.cDefault = this.StartingVATNo
        },
        setColumnToWhere() {
            // Lookup Address
            var where = "Status NOT IN ('Y','A','C','X')"
            this.$refs.LookUpEndingVATNo.prop.dataLookUp.InitialWhere = where
            this.$refs.LookUpEndingVATNo.onChangeTriggered = true
            this.$refs.LookUpEndingVATNo.prop.cDefault = this.EndingVATNo
        }
    },
    beforeCreate: function () {
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.toToolbar().ProcessPS()
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

