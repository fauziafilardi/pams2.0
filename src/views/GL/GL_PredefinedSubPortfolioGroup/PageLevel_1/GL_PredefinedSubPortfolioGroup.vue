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


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form v-on:submit.prevent :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_groupname" v-model="M_GL_PredefinedSubPortfolioGroup.groupname" ref="ref_groupname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <!-- <ABSinputCheckBox @input="OnsubportfoliocdChange" :prop="PI_subportfoliocd" v-model="M_GL_PredefinedSubPortfolioGroup.subportfoliocd"  ref="ref_subportfoliocd" /> -->
                                        <ABSinputCheckBoxList
                                            :prop="PI_subportfoliocd"
                                            v-model="M_GL_PredefinedSubPortfolioGroup.subportfoliocd"
                                            ref="ref_subportfolioCd" />
                                      </b-col>
                                    </b-row>
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
		FormType: "List",
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
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_PredefinedSubPortfolioGroup :{
                groupname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                subportfoliocd: []
            },
            PI_groupname: { 
                cValidate :'required|max:20', 
                cName: 'groupname', 
                cLabel: 'Group Name', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliocd: { 
                cValidate :'', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 2, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            }
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
        OnsubportfoliocdChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{subportfoliocd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
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
            var dataInsert = []
            if(this.M_GL_PredefinedSubPortfolioGroup.subportfoliocd.length < 1){
                 this.alertError("At least 1 SubPortfolio must be choosen.")
                return
            }
            for (let i = 0 ; i < this.M_GL_PredefinedSubPortfolioGroup.subportfoliocd.length ; i ++) {
                dataInsert.push({
                    GroupName: this.M_GL_PredefinedSubPortfolioGroup.groupname,
                    SubPortfolioCd: this.M_GL_PredefinedSubPortfolioGroup.subportfoliocd[i],
                    UserInput: this.getDataUser().UserId    
                })
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataInsert
            }

            this.postJSONMulti(this.getUrlInsertMulti(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert('Data Has Been Save Successfully')
            })

        },
        M_Update() {
            // delete
			
			var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: [{
                    GroupName: this.M_GL_PredefinedSubPortfolioGroup.groupname
                }]
            }
            
            this.postJSONMulti( this.getUrlNewDeleteMulti(), param )
            .then(response => {
                if (response == null) return

                // insert
                this.M_Insert()
            })
        },
		M_ClearForm(){
            this.M_GL_PredefinedSubPortfolioGroup = {
                groupname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                subportfoliocd: []
            }
            this.$refs.ref_subportfolioCd.dataChkBox = []
		},
        M_New(){
			this.$refs.ref_groupname.focus()
        },
        M_Edit(){
            this.$refs.ref_groupname.focus()
        },
        M_Delete(dt){     

            var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			data.forEach((value) => {
				
				dataDelete.push({
                    GroupName: value.GroupName,
                    _Message_: ""
                })
			})
			
			var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataDelete
            }
            
            this.postJSONMulti( this.getUrlNewDeleteMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultDelete()
            })           
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                groupname: record.GroupName
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if (response == null) return
                
                var data = response.Data[0]
                this.M_GL_PredefinedSubPortfolioGroup = {
                    groupname: data.groupname,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeedit: data.timeedit,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid,
                    subportfoliocd: []
                }

                this.setDataCheckbox (data.groupname)

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getDataCheckbox () {
            this.postEncode(this.getUrlSubportfolioCheckbox(), null).then(response => {
                // response from API
                if (response == null) return

                this.PI_subportfoliocd.cOptions = response.Data
            })
        },
        setDataCheckbox(data){
            var param = {
                GroupName : data
            }
            this.postEncode(this.getUrlSetSubportfolioCheckbox(), param).then(response => {
                // response from API
                if (response == null) return

                var temp = []
                for (var x = 0; x < response.Data.length; x++) {
                    temp.push(response.Data[x].ItemValue)
                }

                this.$refs.ref_subportfolioCd.dataChkBox = temp
                this.M_GL_PredefinedSubPortfolioGroup.subportfoliocd = temp
            })
        }
    },
    beforeCreate: function () {
    },
    created: function() {
    this.getDataCheckbox()
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
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

