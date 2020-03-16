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
                                        <ABSInputSelect2 @change="OntrxanalysiscategoryChange" :prop="PI_trxanalysiscategory" :value="M_GL_AnalysisCategory.trxanalysiscategory" :label="M_GL_AnalysisCategory.trxanalysiscategoryLabel" ref="ref_trxanalysiscategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_AnalysisCategory.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_GL_AnalysisCategory.shortdescs"  ref="ref_shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnmandatoryanalysisChange" :prop="PI_mandatoryanalysis" v-model="M_GL_AnalysisCategory.mandatoryanalysis"  ref="ref_mandatoryanalysis" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnallowchangeChange" :prop="PI_allowchange" v-model="M_GL_AnalysisCategory.allowchange"  ref="ref_allowchange" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_AnalysisCategory.remarks"  ref="ref_remarks" />
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
                initialWhere: "TrxAnalysisCategory Not IN ('T0','T1')",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_AnalysisCategory :{
                trxanalysiscategory: 'T2',
                descs: '',
                shortdescs: '',
                mandatoryanalysis: 'Y',
                allowchange: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_trxanalysiscategory: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'trxanalysiscategory', 
                cLabel: 'Analysis Category', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cTriggered: false, 
                cDefault: 'T2', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [
                            { label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                            { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                            { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                        ], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_shortdescs: { 
                cValidate :'max:30', 
                cName: 'shortdescs', 
                cLabel: 'Short Description', 
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
            PI_mandatoryanalysis: { 
                cValidate :'', 
                cName: 'mandatoryanalysis', 
                cId: 'rdbmandatoryanalysis', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Mandatory Analysis', 
                cLabelSize: 4, 
                cOrder: 4, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allowchange: { 
                cValidate :'', 
                cName: 'allowchange', 
                cId: 'rdballowchange', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Change Sub Module Setting', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:6, 
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
        OntrxanalysiscategoryChange (data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    this.M_GL_AnalysisCategory.trxanalysiscategory = data.id
                    this.M_GL_AnalysisCategory.trxanalysiscategoryLabel = data.label 
                }
            })
        },		
        OnmandatoryanalysisChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{mandatoryanalysis}
            }
        })
        this.$forceUpdate()
        },
        OnallowchangeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{allowchange}
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
                TrxAnalysisCategory: this.M_GL_AnalysisCategory.trxanalysiscategory,
                Descs: this.M_GL_AnalysisCategory.descs,
                ShortDescription: this.M_GL_AnalysisCategory.shortdescs,
                MandatoryAnalysis: this.M_GL_AnalysisCategory.mandatoryanalysis,
                AllowChange: this.M_GL_AnalysisCategory.allowchange,
                Remarks: this.M_GL_AnalysisCategory.remarks,
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
                TrxAnalysisCategory: this.M_GL_AnalysisCategory.trxanalysiscategory,
                Descs: this.M_GL_AnalysisCategory.descs,
                ShortDescription: this.M_GL_AnalysisCategory.shortdescs,
                MandatoryAnalysis: this.M_GL_AnalysisCategory.mandatoryanalysis,
                AllowChange: this.M_GL_AnalysisCategory.allowchange,
                Remarks: this.M_GL_AnalysisCategory.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_AnalysisCategory.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_AnalysisCategory = {
                trxanalysiscategory: 'T2',
                descs: '',
                shortdescs: '',
                mandatoryanalysis: 'Y',
                allowchange: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
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
,                trxanalysiscategory: record.TrxAnalysisCategory
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_AnalysisCategory = {
                trxanalysiscategory: data.trxanalysiscategory,
                descs: data.descs,
                shortdescs: data.shortdescs,
                mandatoryanalysis: data.mandatoryanalysis,
                allowchange: data.allowchange,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

         

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

