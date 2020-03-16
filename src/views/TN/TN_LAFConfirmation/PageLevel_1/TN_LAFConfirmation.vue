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
      isCheckAsStatus="LAFStatus=Y"
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
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <!-- Form -->
                                </b-col> <!-- table close -->
							</b-row>
							<ABSTAnalysis :prop="PTAnalysis" />
						</b-form>
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
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' AND LAFStatus IN ('N','Y')",
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
    }
  },
    methods: {
      setToolbarButton () {
        this.getToolbar().doEdit()
        this.$store.commit('setListDisable', false)
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
      },		
      M_Post(){
      },
      M_Insert() {
      },
      M_Update() {
        var data = this.$parent.M_GetAllData()
        var dataPost = []
        var dataUpdate = []

        for (let i = 0 ; i < data.length ; i ++) {
          if (data[i].LAFStatus == 'Y') {
            dataPost.push({
              _Method_: 'UPDATE',
              _LineNo_: 0,
              ApplicationNo: data[i].ApplicationNo,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              LAFStatus: data[i].LAFStatus,
              UserEdit: this.getDataUser().UserId
            })
          }
          else {
            dataPost.push({
              _Method_: 'UPDATE',
              _LineNo_: 1,
              ApplicationNo: data[i].ApplicationNo,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              LAFStatus: data[i].LAFStatus,
              UserEdit: this.getDataUser().UserId
            })
          }
        }

        dataUpdate.push({
          A_Looping: dataPost
        })

        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          Data: dataUpdate
        }
          
        this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
        .then(response => {
          if (response == null) return
            this.alertSuccess('Process LAF Successfully')
            // this.$parent.resultPost()
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
      this.getToolbar().doEdit(true)
      this.$store.commit('setListDisable', false)
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

