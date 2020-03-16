<template>
    <div>
        <div  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse2>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse2" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="5" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <!-- <ABSProcessInputSelect @change="onFromUserChange" :prop="PI.FromUser" :value="M_PermissionCopy.FromUser"/> -->
                            <ABSProcessInputSelectList @change="onFromUserChange" :prop="PI.FromUser" :value="M_PermissionCopy.FromUser" :label="M_PermissionCopy.FromUserLabel"/>

                            <!-- <ABSProcessInputSelect @change="onFromSubPortfolioCdChange" :prop="PI.FromSubPortfolioCd" :value="M_PermissionCopy.FromSubPortfolioCd"/> -->
                            <ABSProcessInputSelectList @change="onFromSubPortfolioCdChange" :prop="PI.FromSubPortfolioCd" :value="M_PermissionCopy.FromSubPortfolioCd" :label="M_PermissionCopy.FromSubPortfolioCdLabel"/>
                            <span style="margin-left:165px">(blank SubPortfolio = all SubPortfolio)</span> <br> <br>

                            <!-- <ABSProcessInputSelect @change="onToUserChange" :prop="PI.ToUser" :value="M_PermissionCopy.ToUser"/> -->
                            <ABSProcessInputSelectList @change="onToUserChange" :prop="PI.ToUser" :value="M_PermissionCopy.ToUser" :label="M_PermissionCopy.ToUserLabel"/>

                            <!-- <ABSProcessInputSelect @change="onToSubPortfolioCdChange" :prop="PI.ToSubPortfolioCd" :value="M_PermissionCopy.ToSubPortfolioCd"/> -->
                            <ABSProcessInputSelectList @change="onToSubPortfolioCdChange" :prop="PI.ToSubPortfolioCd" :value="M_PermissionCopy.ToSubPortfolioCd" :label="M_PermissionCopy.ToSubPortfolioCdLabel"/>
                            <span style="margin-left:165px">(blank SubPortfolio = all SubPortfolio)</span>
                        </b-form>
                    </b-col>                
                </b-row>
            </b-collapse>
        </div>
    </div>
</template>

<script>


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
            FormType: "Process",
            propList: {
                initialWhere: "",
                LineNo: 1,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex
            },
            M_PermissionCopy: {
                UserGroup: '',
                FromUser: '',
                FromUserLabel: '',
                FromSubPortfolioCd: '',
                FromSubPortfolioCdLabel: '',
                ToUser: '',
                ToUserLabel: '',
                ToSubPortfolioCd: '',
                ToSubPortfolioCdLabel: '',
            },
            IEBy: {Input: '', Edit: ''},
            PI: {
                FromUser: {
                    dataLookUp: {
                        LookUpCd: 'GetLookupSSUser',
                        ColumnDB: 'UserId',
                        InitialWhere: "",
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'FromUser',
                    cLabel: 'From User',
                    cOrder: 1,
                    cSelected: null,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                    // cMasterUrl:'CM/CM_CurrencyMaster' ,
                    cDisplayColumn:'UserId,UserName' ,
                },
                FromSubPortfolioCd: {
                    dataLookUp: {
                        LookUpCd: 'GetSubPortfolioCd',
                        ColumnDB: 'SubPortfolioCd',
                        InitialWhere: "",
                        ParamWhere: ''
                    },
                    cValidate: '',
                    cName: 'FromSubPortfolioCd',
                    cLabel: 'SubPortfolio',
                    cOrder: 2,
                    cSelected: null,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                    // cMasterUrl:'CM/CM_CurrencyMaster' ,
                    cDisplayColumn:'SubPortfolioCd,Name' ,
                },
                ToUser: {
                    dataLookUp: {
                        LookUpCd: 'GetLookupSSUser',
                        ColumnDB: 'UserId',
                        InitialWhere: "",
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'ToUser',
                    cLabel: 'To User',
                    cOrder: 3,
                    cSelected: null,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                    // cMasterUrl:'CM/CM_CurrencyMaster' ,
                    cDisplayColumn:'UserId,UserName' ,
                },
                ToSubPortfolioCd: {
                    dataLookUp: {
                        LookUpCd: 'GetSubPortfolioCd',
                        ColumnDB: 'SubPortfolioCd',
                        InitialWhere: "",
                        ParamWhere: ''
                    },
                    cValidate: '',
                    cName: 'ToSubPortfolioCd',
                    cLabel: 'SubPortfolio',
                    cOrder: 4,
                    cSelected: null,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                    // cMasterUrl:'CM/CM_CurrencyMaster' ,
                    cDisplayColumn:'SubPortfolioCd,Name' ,
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
        M_Post(dt){
            var param = {
                FromUser: this.M_PermissionCopy.FromUser,
                FromSubPortfolioCd: this.M_PermissionCopy.FromSubPortfolioCd,
                ToUser: this.M_PermissionCopy.ToUser,
                ToSubPortfolioCd: this.M_PermissionCopy.ToSubPortfolioCd,
                UserInput: this.getDataUser().UserId,
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                })
            })
        },
        M_Refresh(){
        },
        M_Delete(){
        },
        M_Insert(){
        },
        M_Update(){
        },
        M_New(){
        },
        M_Cancel(){
        },
        paramFromParent(){
            this.M_ClearForm()
            let data = this.$store.getters.GetPage1Data
            this.M_PermissionCopy.UserGroup = data.UserGroup
        },
        onFromUserChange (data) {
            this.M_PermissionCopy.FromUser = data.id
            this.M_PermissionCopy.FromUserLabel = data.label
        },
        onFromSubPortfolioCdChange (data) {
            this.M_PermissionCopy.FromSubPortfolioCd = data.id
            this.M_PermissionCopy.FromSubPortfolioCdLabel = data.label
        },
        onToUserChange (data) {
            this.M_PermissionCopy.ToUser = data.id
            this.M_PermissionCopy.ToUserLabel = data.label
        },
        onToSubPortfolioCdChange (data) {
            this.M_PermissionCopy.ToSubPortfolioCd = data.id
            this.M_PermissionCopy.ToSubPortfolioCdLabel = data.label
        },
        M_ClearForm () {
            this.M_PermissionCopy.UserGroup = ""
            this.M_PermissionCopy.FromUser = ""
            this.M_PermissionCopy.FromUserLabel = ""
            this.M_PermissionCopy.FromSubPortfolioCd = ""
            this.M_PermissionCopy.FromSubPortfolioCdLabel = ""
            this.M_PermissionCopy.ToUser = ""
            this.M_PermissionCopy.ToUserLabel = ""
            this.M_PermissionCopy.ToSubPortfolioCd = ""
            this.M_PermissionCopy.ToSubPortfolioCdLabel = ""
        },
        setToolbarButton () {
        }
    },
    beforeCreate: function () {
    },
    created: function() {
        // this.$store.commit('setFormType','Process')
    },
    beforeMount: function() {
    },
    mounted: function() {
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
