<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <div class="content-app-form__body form-process">
            <div class="tab-list-process">
                <ABSListVuex
                    :prop = "propList"
                    :title = "''"
                    :isProcess = "true"
                    @rowClicked = "rowClicked"
                    @rowDblClicked = "doDoubleClick"
                    @rowLinkClick = "rowLink"
                    @pageSize = "M_PageSize"
                    @pagination = "M_Pagination"
                    @filter = "M_Advance_Filter"
                    @headTable = "M_Head_Table"
                />

                <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">               
                    <b-collapse id="collapse1" :visible="true">
                        <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                            <b-col md="12" id="col-left" class="bColMasterForm">	
                                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                    <b-row style="padding-left:10px;">
                                        <b-col md="12" id="col-left">
                                            <b-row>
                                                <b-col md=4>
                                                    <ABSinputDateVuex :prop="PI_AmortizationDate" v-model="AmortizationDate"/>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md=4>
                                                    <ABSInputSelectList
                                                        @change="OnTrxTypeFromChange"
                                                        :prop="PI_TrxTypeFrom"
                                                        :value="TrxTypeFrom"
                                                        :label="TrxTypeFromLabel"
                                                    />
                                                </b-col>
                                                <b-col md=4>
                                                    <ABSInputSelectList
                                                        @change="OnTrxTypeToChange"
                                                        :prop="PI_TrxTypeTo"
                                                        :value="TrxTypeTo"
                                                        :label="TrxTypeToLabel"
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
            propList: {
                initialWhere: "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: 'debTimeEdit DESC', 
                SourceField: '', 
                ParamView: ''
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            PI_AmortizationDate: {
                cValidate :'required', 
                cName: "AmortizationDate",
                cNameError: "Amortization Date",
                cLabel: "Amortization Date",
                cOrder: 1,
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            PI_TrxTypeFrom: {
                dataLookUp: {
                    LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                    ColumnDB: "TrxType",
                    InitialWhere:
                    "SubPortfolioCd = '" +
                    this.getDataUser().SubPortfolioCd +
                    "' AND ModuleCd = 'AR' AND (TrxClass = 'I')",
                    ParamWhere: ""
                },
                cName: "TrxTypeFrom",
                cLabel: "Trans. Type From",
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
                cDisplayColumn: 'TrxType,Descs'
            },
            PI_TrxTypeTo: {
                dataLookUp: {
                    LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                    ColumnDB: "TrxType",
                    InitialWhere:
                    "SubPortfolioCd = '" +
                    this.getDataUser().SubPortfolioCd +
                    "' AND ModuleCd = 'AR' AND (TrxClass = 'I')",
                    ParamWhere: ""
                },
                cName: "TrxTypeTo",
                cLabel: "Trans. Type To",
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
                cDisplayColumn: 'TrxType,Descs'
            },
            AmortizationDate: '',
            TrxTypeFrom: '',
            TrxTypeFromLabel: '',
            TrxTypeTo: '',
            TrxTypeToLabel: ''
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
        OnTrxTypeFromChange (data) {
           this.TrxTypeFrom = data.id
           this.TrxTypeFromLabel = data.label
           this.TrxTypeTo = data.id
           this.TrxTypeToLabel = data.label
       },
       OnTrxTypeToChange (data) {
           this.TrxTypeTo = data.id
           this.TrxTypeToLabel = data.label
       },
        toToolbar() {
            return this.$children[0].$children[0]
        },
        toList() {
            return this.$children[1]
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
           this.toList().doGetList(data,'eb_getList')
       },
        M_Post() {
            var data = this.toList().getRowSelected()
            var dataPost = []

            var amortizedt = this.AmortizationDate == '' || this.AmortizationDate == null ? 'NULL' : this.AmortizationDate
            var trxfrom = this.TrxTypeFrom == '' || this.TrxTypeFrom == null ? 'NULL' : this.TrxTypeFrom
            var trxto = this.TrxTypeTo == '' || this.TrxTypeTo == null ? 'NULL' : this.TrxTypeTo
            data.forEach((value) => {
                // dt = dt + value.RowId + ','
                dataPost.push({
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    TrxTypeFrom : trxfrom,
                    TrxTypeTo : trxto,
                    GenerateDate : amortizedt,
                    DebtorCd: value.DebtorCd,
                    UserInput:this.getDataUser().UserId,
                    OutputMessage_Output:''
                })
            })

            var param = {
                // OptionSeq: this.getOptionSeq().OptionSeq,
                // SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                // PortfolioCd:this.getDataUser().PortfolioCd,
                // LineNo: 0,
                // Data: dt,
                // SourceValue:"SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "',UserInput,DebtorCd,GenerateDate='"+amortizedt+"',TrxTypeFrom='"+trxfrom+"',TrxTypeTo='"+trxto+"',OutputMessage=''",
                // IsDetailMessage :true
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                if(response.Data.length==0){
                    // this.alertSuccess("Posting Data Successfully")
                }

                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
            })
        },
        setToolbarButton() {},
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

