<template>
    <div class="height--full">
        <HeaderFormListVuex :isProcess = "true" />

        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">
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
                                                <ABSInputSelect2
                                                    @change="OnTrxTypeFromChange"
                                                    :prop="PI_TrxTypeFrom"
                                                    :value="TrxTypeFrom"
                                                />
                                            </b-col>
                                            <b-col md=4>
                                                <ABSInputSelect2
                                                    @change="OnTrxTypeToChange"
                                                    :prop="PI_TrxTypeTo"
                                                    :value="TrxTypeTo"
                                                />
                                            </b-col>
                                        </b-row>
                                        <!-- <b-row>
                                            <b-col>
                                                <ABSInputDateTime :prop="PI_TestDateTime" v-model="tetew" />
                                                {{tetew}}
                                            </b-col>
                                        </b-row> -->
                                    </b-col>
                                </b-row>
                            </b-form>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>

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
            PI_TrxTypeFrom: {
                dataLookUp: {
                    LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                    ColumnDB: "TrxType",
                    InitialWhere:
                    "SubPortfolioCd = '" +
                    this.getDataUser().SubPortfolioCd +
                    "' AND ModuleCd = 'AR' AND (TrxClass = 'I' OR TrxClass = 'P')",
                    ParamWhere: ""
                },
                cName: "TrxTypeFrom",
                cLabel: "Trans. Type From",
                cOrder: 2,
                cType: "lookup",
                
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            PI_TrxTypeTo: {
                dataLookUp: {
                    LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                    ColumnDB: "TrxType",
                    InitialWhere:
                    "SubPortfolioCd = '" +
                    this.getDataUser().SubPortfolioCd +
                    "' AND ModuleCd = 'AR' AND (TrxClass = 'I' OR TrxClass = 'P')",
                    ParamWhere: ""
                },
                cName: "TrxTypeTo",
                cLabel: "Trans. Type To",
                cOrder: 3,
                
                cType: "lookup",
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            // PI_TestDateTime: {
            //     cValidate :'required',
            //     cName: "TestDateTime",
            //     cNameError: "TestDateTime",
            //     cLabel: "TestDateTime",
            //     cOrder: 1,
            //     cPageLevel: 1,
            //     cTabIndex: 1,
            //     cParentForm: "FormScope_1_1"
            // },
            BillingDate: '',
            TrxTypeFrom: '',
            TrxTypeTo: ''
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
       },
       OnTrxTypeToChange (data) {
           this.TrxTypeTo = data.id
       },
        toToolbar() {
            // console.log(this.$children)
            return this.$children[0].$children[0]
        },
        toList() {
            return this.$children[2]
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
            // this.$store.commit('setEventStatus', 'ONSEARCHENTER')
        //    this.$store.commit('setLevel',this.PageLevel)
        //    this.$parent.isDetail = false
        //    this.FormToMasterPage().ValidasiPage()
           this.toList().doGetList(data,'eb_getList')
       },
        M_Post() {
            var data = this.toList().getRowSelected()
            // console.log('Param data',JSON.stringify(data,null,2))
            var dt = ''
            
            data.forEach((value) => {
                dt = dt + value.RowId + ','
            })

            dt = dt.slice(0,-1)

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: 1,
                Data: dt,
                SourceValue:"SubPortfolioCd,TrxTypeFrom='"+this.TrxTypeFrom+"',TrxTypeTo='"+this.TrxTypeTo+"',BillingDate='"+this.BillingDate+"',DebtorCd,ApplicationNo,UserInput,OutputMessage=''",
                IsDetailMessage :true
            };
        // console.log('Param POST',JSON.stringify(param,null,2))
            // return
            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                // response from API
                if (response == null) return
                if(response.Data.length==0){
                    this.alertSuccess("Posting Data Successfully")
                }

                // this.alertSuccess("Posting Data Successfully")
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
        // console.log(this.$children)
        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.toToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.toList().doGetList('','eb_getList')

        // this.BillingDate = this.M_FormatingDate(new Date())
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

