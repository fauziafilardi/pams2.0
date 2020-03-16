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
      isCheckAsStatus="RoughBookStatus=Y"
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
                initialWhere: " Status = 'B' AND JournalModuleCd= 'GL' And LedgerFlag=''  AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ",
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        getSpec () {
            var param = {
                OptionFunctionCd: 'GetGLSpecification',
                ModuleCd: this.Module
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2.length > 0) { 
                    var data = FnOpt2[0]
                    this.propList.initialWhere = " Status = 'B' AND JournalModuleCd= 'GL' And LedgerFlag='" + data.ActiveBudget + "'  AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' "
                    this.FormToABSList().doGetList('','eb_getList')
                }
            })
        },
        setToolbarButton () {
        //   this.getToolbar().statusFunction[6].disabled = true
        //   this.getToolbar().doEdit(true)
        //   this.$store.commit('setListDisable', false)
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
          this.FormToABSList().doGetList('','eb_getList')
        },		
		doDoubleClick(){
        },
        rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(){
        },
        M_Insert() {
        },
        M_Update() {
            var data = this.$parent.M_GetAllData()
            var dataPost = []

            for (let i = 0 ; i < data.length ; i ++) {
                dataPost.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BatchNo: data[i].BatchNo,
                    LedgerFlag: data[i].LedgerFlag,
                    Checked: data[i].RoughBookStatus,
                    User: this.getDataUser().UserId
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
                this.alertSuccess("Data Has Been Saved Successfully")
                .then(res => {
                  this.FormToABSList().doGetList('','eb_getList')
                })
            })
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
        this.$store.commit('setStatus','View')
        this.$store.commit('setFormType','ListEdit')
        this.getToolbar().ProcessPS()
        // this.getToolbar().doEdit(true)
        // this.$store.commit('setListDisable', false)
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        // this.FormToABSList().doGetList('','eb_getList')
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

