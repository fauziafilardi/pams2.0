<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
            <div class="content-app-form__body form-process">
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
            propList: {
                // initialWhere: "SubportfolioCd ='"+this.getDataUser().SubPortfolioCd+"' AND CustomerType = 'L' AND [Status] NOT IN ('X','C') AND ContractStatus = '2' AND DeviationApprovalNo IS NULL AND LOONo IS NOT NULL AND LOODate IS NOT NULL AND (UserId IS NULL OR (UserId='"+this.getDataUser().UserId+"' AND LOOStatus = 'Y'))",
                initialWhere:" CustomerType = 'L' AND [Status] NOT IN ('X','C') AND ContractStatus = '2' AND DeviationApprovalNo IS NULL AND LOINo IS NOT NULL AND LOIDate IS NOT NULL AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND (UserId IS NULL OR (UserId='"+this.getDataUser().UserId+"' AND LOIStatus = 'Y'))",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},
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
        OnDetailChange(){

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
       M_POST2(){
           var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0           
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

					
				
            })
       },
        M_Post() {
          
            var data = this.toList().getRowSelected()  //this.FormToABSList().getRowSelected()
            var dataPost = []
            var dataUpdate = []

            data.forEach((value) => {
                // dt = dt + value.RowId + ','
                dataPost.push({
                    _Message_: "LOI No = "+value.LOINo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    ApplicationNo : value.ApplicationNo,
                    UserEdit : this.getDataUser().UserId,
                    OutputMessage_Output:''
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }
          
            this.postJSONMulti( this.getUrlPostMulti(), param )
            .then(response => {
                if (response == null) return
                this.M_POST2()
                this.toList().doGetList('','eb_getList')
                this.$parent.resultPost()
                
                this.$store.commit('setEventStatus', 'POST')
                
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

