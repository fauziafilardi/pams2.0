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
                                            <!-- Form -->
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and Status = 'N' and LotUsage = 'L'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''}
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
            var dataPost = []
            var data = this.toList().getRowSelected()

            data.forEach((value) => {
                dataPost.push({
                    SequenceNo : value.SequenceNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    UserID:this.getDataUser().UserId,
                    _Message_:'Lot No ' + value.LotNo
                })
            })
            
            var param ={
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
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

