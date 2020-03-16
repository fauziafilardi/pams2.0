<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <!-- <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;"> -->
        <div class="content-app-form__body form-process">
            <div class="tab-form-process">
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
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="billingdate"  ref="ref_billingdate" />
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OntrxtypefromChange" :prop="PI_trxtypefrom" :value="trxtypefrom" :label="trxtypefromLabel" ref="ref_trxtypefrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputSelectList @change="OntrxtypetoChange" :prop="PI_trxtypeto" :value="trxtypeto" :label="trxtypetoLabel" ref="ref_trxtypeto"/>
                                        </b-col>
                                        </b-row>
                                    </b-col> <!-- table close -->                  
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                // initialWhere: "",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_trxtypefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass IN ('I','P')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypefrom', 
                cLabel: 'Trans. Type From', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_trxtypeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass IN ('I','P')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypeto', 
                cLabel: 'To', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            },
            billingdate:'',
            trxtypefrom:'',
            trxtypeto:'',
            trxtypefromLabel:'',
            trxtypetoLabel:''
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
        OntrxtypefromChange (data) {
        this.$nextTick(() => {
            this.trxtypefrom = data.id
            this.trxtypefromLabel = data.label

            this.trxtypeto = data.id
            this.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypefrom}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypetoChange (data) {
        this.$nextTick(() => {
            this.trxtypeto = data.id
            this.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypeto}
            }
        })
        this.$forceUpdate()
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
            var dataPost = []
            var data = this.toList().getRowSelected()
            var dt = ''
            
            var BillingDate = (this.billingdate == '' || this.billingdate == null ? 'NULL' : this.billingdate)
            var TrxTypeFrom = this.trxtypefrom == '' || this.trxtypefrom == null ? 'NULL' : this.trxtypefrom
            var TrxTypeTo = this.trxtypeto == '' || this.trxtypeto == null ? 'NULL' : this.trxtypeto

            data.forEach((value) => {
                dataPost.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    UserInput: this.getDataUser().UserId,
                    LotNo: value.LotNo,
                    DebtorCd: value.DebtorCd,
                    BillingDate: BillingDate,
                    TrxTypeFrom: TrxTypeFrom,
                    TrxTypeTo: TrxTypeTo,
                    OutputMessage_Output: ''
                })
            })
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                
                this.billingdate = ''
                this.trxtypefrom = ''
                this.trxtypefromlabel = ''
                this.trxtypeto = ''
                this.trxtypetolabel = ''
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
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

