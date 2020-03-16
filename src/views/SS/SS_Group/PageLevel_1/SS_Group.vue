<template>
    <div>
        <ABSListVuex
            :prop="propList"
            :title = "''"
            @rowClicked="$parent.rowClicked"
            @rowDblClicked="$parent.doDoubleClick"
            @rowLinkClick="$parent.rowLink"
            @pageSize="$parent.M_PageSize"
            @pagination="$parent.M_Pagination"
            @filter="$parent.M_Advance_Filter"
            @headTable="$parent.M_Head_Table"
        />

        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="5" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <!-- <ABSCompute :prop="PI.Compute" /> -->
                            <ABSinputTextVuex :prop="PI.UserGroup" v-model="M_SS_Group.UserGroup"/>

                            <ABSinputTextVuex :prop="PI.Descs" v-model="M_SS_Group.Descs"/>

                            <ABSinputRadioButtonVuex :prop="PI.UserType" v-model="M_SS_Group.UserType"/>

                            <!-- <ABSinputCheckBox :prop="PI.CheckBox" v-model="M_SS_Group.Gender" /> -->
                        </b-form>
                    </b-col>
                </b-row>
                <!-- <b-row>
                    <b-col>
                        {{testDate}}
                    </b-col>
                </b-row> -->
            </b-collapse>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
export default {
    props: {PageLevel: '', TabIndex: ''},
    computed: {
        inputStatus() {
            if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
                return this.$store.getters.getStatus.toUpperCase()
            }
            else {
                return 'VIEW'
            }
        }
    },
    data() {
        return {
            ModuleCd: "",
            // testDate: null,
            FormType: "List",
            propList: {
                initialWhere: "",
                LineNo: 0,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex
            },
            M_SS_Group: {
                UserGroup: '',
                Descs: '',
                UserType: '',
                LastUpdateStamp: ''
            },
            IEBy: {Input: '', Edit: ''},
            PI: {
                UserGroup: {
                    cValidate: 'required|min:1|max:8',
                    cName: 'UserGroup',
                    cLabel: 'Group Code',
                    cOrder: 1,
                    cKey: true,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                Descs: {
                    cValidate: 'max:60',
                    cName: 'Descs',
                    cLabel: 'Description',
                    cOrder: 2,
                    cKey: false,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                UserType: {
                    cId: 'rdbUserType',
                    cName: 'UserType',
                    cRadioOptions: [
                        { text: 'Public', value: 'P' },
                        { text: 'Internal', value: 'I' }
                    ],
                    cKey: false,
                    cLabel: 'User Type',
                    cOrder: 3,
                    cRadioDefaultOption: '',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                }
            }
        }
    },
    methods: {
        M_PageSize(){
        },
        M_TabClick(){
        },
        M_Pagination(){
        },
        M_Advance_Filter(){
        },
        M_Search(data){
        },
        M_Edit(){
        },
        M_Post(){
        },
        M_Refresh(){
        },
        M_Insert () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                UserGroup: this.M_SS_Group.UserGroup,
                Descs: this.M_SS_Group.Descs,
                UserType: this.M_SS_Group.UserType,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                UserGroup: this.M_SS_Group.UserGroup,
                Descs: this.M_SS_Group.Descs,
                UserType: this.M_SS_Group.UserType,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_SS_Group.LastUpdateStamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
            })
        },
        M_New(){
            this.$nextTick().then(() => document.getElementById("UserGroup").focus())
        },
        M_Cancel(){
        },
        M_ClearForm () {
            this.M_SS_Group.UserGroup = ''
            this.M_SS_Group.Descs = ''
            this.M_SS_Group.UserType = ''
        },
        rowClicked (record, index) {
        },
        rowLink: function(url){
        },
        paramFromParent(){
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                UserGroup: record.UserGroup
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                
                this.$nextTick(() => {
                    this.M_SS_Group.UserGroup = data.usergroup
                    this.M_SS_Group.Descs = data.descs,
                    this.M_SS_Group.UserType = data.usertype
                    this.M_SS_Group.LastUpdateStamp = data.lastupdatestamp
                })

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
            })
        },
        doDoubleClick () {
        },
        setToolbarButton () {
        }
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','List')
        this.getToolbar().ProcessPS()
        // var next = this.momentDateFormat("2019-02-12", "YYYY-MM-DD")
        // console.log(moment(new Date(), "YYYY-MM-DD"))
        // this.testDate = moment.duration(moment(new Date(), "YYYY-MM-DD").diff(next, 'days', true)).asDays()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')
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
