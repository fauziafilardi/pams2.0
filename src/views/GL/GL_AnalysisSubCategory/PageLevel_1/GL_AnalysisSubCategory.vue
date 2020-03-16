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
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxanalysiscategoryChange" :prop="PI_trxanalysiscategory" :value="M_GL_AnalysisSubCategory.trxanalysiscategory" :label="M_GL_AnalysisSubCategory.trxanalysiscategoryLabel" ref="ref_trxanalysiscategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxanalysissubcategory" v-model="M_GL_AnalysisSubCategory.trxanalysissubcategory"  ref="ref_trxanalysissubcategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_AnalysisSubCategory.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_analysisgrouping" v-model="M_GL_AnalysisSubCategory.analysisgrouping"  ref="ref_analysisgrouping"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_AnalysisSubCategory.remarks"  ref="ref_remarks" />
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

            M_GL_AnalysisSubCategory :{
                trxanalysiscategory: '',
                trxanalysissubcategory: '',
                descs: '',
                analysisgrouping: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxanalysisdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_trxanalysiscategory: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTransAnalysisCategory'    , 
                    ColumnDB: 'TrxAnalysisCategory'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxanalysiscategory', 
                cLabel: 'Analysis Category ', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 1, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_AnalysisCategory' ,
                cDisplayColumn: 'Transaction_Analysis_Category,Descs' ,
            }, 
            PI_trxanalysissubcategory: { 
                cValidate :'required|max:10', 
                cName: 'trxanalysissubcategory', 
                cLabel: 'Analysis Sub Category ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_analysisgrouping: { 
                cValidate :'required|max:10', 
                cName: 'analysisgrouping', 
                cLabel: 'Analysis Code Grouping ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:5, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
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
        OntrxanalysiscategoryChange (data) {
        this.$nextTick(() => {
            this.M_GL_AnalysisSubCategory.trxanalysiscategory = data.id
            this.M_GL_AnalysisSubCategory.trxanalysiscategoryLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxanalysiscategory}
            }
        })
        this.$forceUpdate()
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TrxAnalysisCategory: this.M_GL_AnalysisSubCategory.trxanalysiscategory == '' || this.M_GL_AnalysisSubCategory.trxanalysiscategory == null ? 'NULL' : this.M_GL_AnalysisSubCategory.trxanalysiscategory ,
                TrxAnalysisSubCategory: this.M_GL_AnalysisSubCategory.trxanalysissubcategory,
                Descs: this.M_GL_AnalysisSubCategory.descs,
                AnalysisGrouping: this.M_GL_AnalysisSubCategory.analysisgrouping,
                Remarks: this.M_GL_AnalysisSubCategory.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TrxAnalysisCategory: this.M_GL_AnalysisSubCategory.trxanalysiscategory == '' || this.M_GL_AnalysisSubCategory.trxanalysiscategory == null ? 'NULL' : this.M_GL_AnalysisSubCategory.trxanalysiscategory ,
                TrxAnalysisSubCategory: this.M_GL_AnalysisSubCategory.trxanalysissubcategory,
                Descs: this.M_GL_AnalysisSubCategory.descs,
                AnalysisGrouping: this.M_GL_AnalysisSubCategory.analysisgrouping,
                Remarks: this.M_GL_AnalysisSubCategory.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_AnalysisSubCategory.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_AnalysisSubCategory = {
                trxanalysiscategory: '',
                trxanalysissubcategory: '',
                descs: '',
                analysisgrouping: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxanalysisdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_trxanalysiscategory.focus()
        },
        M_Edit(){
            this.$refs.ref_descs.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                TrxAnalysisCategory: value.TrxAnalysisCategory,
                TrxAnalysisSubCategory: value.TrxAnalysisSubCategory,
                LastUpdateStamp: value.LastUpdateStamp,
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
                LineNo: this.$parent.data.PageOrder
,                trxanalysiscategory: record.TrxAnalysisCategory,
                trxanalysissubcategory: record.TrxAnalysisSubCategory
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_AnalysisSubCategory = {
                trxanalysiscategory: data.trxanalysiscategory,
                trxanalysissubcategory: data.trxanalysissubcategory,
                descs: data.descs,
                analysisgrouping: data.analysisgrouping,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                trxanalysisdescs: data.trxanalysisdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_AnalysisSubCategory.trxanalysiscategoryLabel = this.M_GL_AnalysisSubCategory.trxanalysiscategory != null ? data.trxanalysiscategory + this.separator + data.trxanalysisdescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
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

