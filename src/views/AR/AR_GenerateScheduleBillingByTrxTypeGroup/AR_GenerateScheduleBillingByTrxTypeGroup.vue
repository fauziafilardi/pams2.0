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
                                                    <ABSinputDateVuex :prop="PI_BillingDate" v-model="BillingDate"/>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md=4>
                                                    <ABSInputSelectList
                                                        @change="OnTrxTypeGroupChange"
                                                        :prop="PI_TrxTypeGroup"
                                                        :value="TrxTypeGroup"
                                                        :label="TrxTypeGroupLabel"
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND EndDate >= ''",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            PI_BillingDate: {
                cValidate :'required', 
                cName: "BillingDate",
                cNameError: "Billing Date",
                cLabel: "Billing Date",
                cOrder: 1,
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            PI_TrxTypeGroup: {
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransactionTypeGroup'    , 
                    ColumnDB: 'TrxTypeGroupCd'   , 
                    InitialWhere: "ModuleCd is null or ModuleCd = 'AR'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'TrxTypeGroup', 
                cLabel: 'Trans. Type Group', 
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
                cDisplayColumn: 'TrxTypeGroupCd,Descs' ,
            },
            BillingMonthTolerance: '',
            ToleranceDate: 0,
            BillingDate: '',
            TrxTypeGroup: '',
            TrxTypeGroupLabel: ''
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
        OnTrxTypeGroupChange (data) {
           this.TrxTypeGroup = data.id  
           this.TrxTypeGroupLabel = data.label
       },
        toToolbar() {
            // console.log(this.$children)
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
            
            var billingdt = this.BillingDate == '' || this.BillingDate == null ? 'NULL' : this.BillingDate
            var trxtypegroup = this.TrxTypeGroup == '' || this.TrxTypeGroup == null ? 'NULL' : this.TrxTypeGroup
            
            data.forEach((value) => {
                dataPost.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BillingDate: billingdt,
                    DebtorCd: value.DebtorCd,
                    TrxTypeGroupCd: trxtypegroup,
                    ApplicationNo: value.ApplicationNo,
                    UserInput: this.getDataUser().UserId,
                    OutputMessage_Output: ''
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return

                this.BillingDate = ''
                this.TrxTypeGroup = ''
                this.TrxTypeGroupLabel = ''
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
            })
        },
        setToolbarButton() {},
        getSpec () {
             var param = {
                OptionFunctionCd: "GetSpecification",
                ModuleCd: "TN",
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                if (ress.length < 1) {
                    this.alertError("Please Check TN Specification")
                    return
                }

                this.BillingMonthTolerance = ress[0].BillingMonthTolerance
                var firstDay = this.momentDateFormatting(new Date(), "YYYY-MM-01")
                var d1 = this.dateAdd2('M', firstDay, (parseInt(this.BillingMonthTolerance) * -1))

                this.ToleranceDate = this.dateAdd2('D', d1, -1)
                this.propList.initialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND EndDate >= '" + this.ToleranceDate + "'"
                this.toList().doGetList('','eb_getList')
            })
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
        this.getSpec()
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

