<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <div class="content-app-form__body" style="background-color: white;padding-top: 35px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">
            
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
                                            <b-col  md="6">
                                                <ABSinputDateVuex :prop="PI_trxdate" v-model="TrxDate" />
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="ReasonCd" :label="ReasonCd" />
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputTextVuex :prop="PI_reasondescs" v-model="ReasonDescs" />
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
</template>

<script>

export default {
    data() {
        return {
            propList: {
                initialWhere: "ContactId not in (Select B.ContactID From TN_ContactHoldRelease AS B WHERE B.Status ='Y' AND B.HoldReleaseStatus='H' and B.SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "')",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
            FormType: "Process",
            Module: "AR",
       
            IEBy: {Input: '', Edit: ''},

            PI_trxdate: { 
                cValidate :'', 
                cName: 'TrxDate', 
                cLabel: 'Transaction Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1'
            },

            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'ReasonCd', 
                cLabel: 'Reason', 
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
                cParentForm: 'FormScope_1_1', 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:60', 
                cName: 'ReasonDescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_1_1'
            },
            TrxDate: this.getToday(),
            ReasonCd: '',
            ReasonDescs: '',
            ReasonCdLabel: ''
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
        OnreasoncdChange (data) {
           this.ReasonCd = data.id  
           this.ReasonCdLabel = data.label
           this.ReasonDescs = data.Descs
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
       M_ClearForm(){
           this.ReasonCd = ""
           this.ReasonDescs = ""
       },
        M_Post() {
            var dataPost = []
            var data = this.toList().getRowSelected()

            var reasoncode = this.ReasonCd
            var reasoncodedescs = this.ReasonDescs
            var date = this.TrxDate
            
            data.forEach((value) => {
                dataPost.push({
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    ContactID : value.ContactId,
                    ReasonCd: reasoncode,
                    ReasonDescs: reasoncodedescs,
                    TrxDate: date,
                    UserEdit: this.getDataUser().UserId,
                    _Message_: "Contact ID : " + value.ContactId + " Confirmed "
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                this.$store.commit('setEventStatus', 'POST')
                this.M_ClearForm()
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new') 
                // this.$store.commit('setStatus', 'edit')
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

