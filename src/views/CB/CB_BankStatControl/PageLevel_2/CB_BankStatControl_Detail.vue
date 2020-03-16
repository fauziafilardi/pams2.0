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
      isCheckAsStatus="BankStatementStatus=T"
      statusFalse="N"
    />


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<!-- //Form -->
					</b-col>
                </b-row>
            </b-collapse>
        </div>
    </div>
</template>

<script>

export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "ListEdit",
		Module:"GL",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
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
	DataRow(){
		return this.$store.getters.GetPage2Data
	},
	DataRow1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        setToolbarButton () {
            this.getToolbar().isNew = true
            this.getToolbar().statusFunction[6].disabled = true
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
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
            this.$parent.showForm = false
            let data = this.$store.getters.GetPage1Data

            this.propList.initialWhere = "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd +
            "' AND BankCd = '" + data.BankCd + "' " +
            " AND (BankStatementStatus = 'N' OR (BankStatementStatus = 'T' " +
            " AND BankStatementNo = '" + data.BankStatementNo + "')) " +
            " AND Status = 'Y'"
            this.FormToABSList().doGetList('','eb_getList')
        },		
        M_Post(){
        },
        M_Insert() {
            var data = this.$parent.M_GetAllData()
            var dataPost = []

            for (let i = 0 ; i < data.length ; i ++) {
                dataPost.push({
                    BankSequenceNo: data[i].BankSequenceNo,
                    BankStatementNo: this.DataRow1.BankStatementNo,
                    Status: data[i].BankStatementStatus,
                    PostBy: this.getDataUser().UserId
                })
            }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlUpdateMulti(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(data.length.toString() + " Data Updated")
            })
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
        // this.$store.commit('setStatus','View')
        // this.$store.commit('setFormType','ListEdit')
        // this.getToolbar().ProcessPS()
        // this.getToolbar().doEdit(true)
        // this.$store.commit('setListDisable', false)
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

