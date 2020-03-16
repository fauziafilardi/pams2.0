<template>
    <div>
        <ABSListVuex
            :prop = "propList"
            :title = "data.QueryName"
            @rowClicked = "$parent.rowClicked"
            @rowDblClicked = "$parent.doDoubleClick"
            @rowLinkClick = "$parent.rowLink"
            @pageSize = "$parent.M_PageSize"
            @pagination = "$parent.M_Pagination"
            @filter = "$parent.M_Advance_Filter"
            @headTable = "$parent.M_Head_Table"
            @refreshColumn = "$parent.refreshColumn"
        />
    </div>
</template>
<script>
export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "View",
		Module:"CB",
            propList: {
                initialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''}
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
        return this.$store.getters.getStatus.toUpperCase()
      }
      else {
        return 'VIEW'
      }
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
		setToolbarButton () {
		},
        M_Head_Table () {
        },
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
        M_Refresh(){
        },
		M_Cancel() {			
		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {
            this.masterUrlPopUp(
                `${window.location.origin}` + '/GL/GL_JournalInquiry?oid=' +this.getOptionSeq().OptionSeq+'&isCallBack=true&LedgerFlag='+record.LedgerFlag+'&BatchNo='+record.BatchNo+'',
                '',
                '1000',
                '600',
                ''
            )
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
        },
        M_Update() {
        },
		M_ClearForm(){
		},
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
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

