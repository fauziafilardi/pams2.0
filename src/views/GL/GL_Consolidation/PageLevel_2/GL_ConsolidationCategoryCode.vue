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
                                        <ABSInputSelectList @change="OntrxanalysiscategorycdChange" :prop="PI_trxanalysiscategorycd" :value="M_GL_ConsolidationCategoryCode.trxanalysiscategorycd" :label="M_GL_ConsolidationCategoryCode.trxanalysiscategorycdLabel" ref="ref_trxanalysiscategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntargettrxanalysiscdChange" :prop="PI_targettrxanalysiscd" :value="M_GL_ConsolidationCategoryCode.targettrxanalysiscd" :label="M_GL_ConsolidationCategoryCode.targettrxanalysiscdLabel" ref="ref_targettrxanalysiscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromsourcetrxanalysiscdChange" :prop="PI_fromsourcetrxanalysiscd" :value="M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd" :label="M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscdLabel" ref="ref_fromsourcetrxanalysiscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntosourcetrxanalysiscdChange" :prop="PI_tosourcetrxanalysiscd" :value="M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd" :label="M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscdLabel" ref="ref_tosourcetrxanalysiscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ConsolidationCategoryCode.remarks"  ref="ref_remarks" />
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "List",
			Module:"GL",
            propList: {
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ConsolidationCategoryCode :{
                consolidationcd: '',
                sequenceno: 0,
                trxanalysiscategorycd: '',
                targettrxanalysiscd: '',
                fromsourcetrxanalysiscd: '',
                tosourcetrxanalysiscd: '',
                remarks: '',
                trxanalysiscategorydescs: '',
                targettrxanalysiscodedescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_trxanalysiscategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTransAnalysisCategory'    , 
                    ColumnDB: 'TrxAnalysisCategory'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxanalysiscategorycd', 
                cLabel: 'Analysis Category', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
            PI_targettrxanalysiscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTrxAnalysisCd'    , 
                    ColumnDB: 'TrxAnalysisCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'targettrxanalysiscd', 
                cLabel: 'Analysis Category Code Target', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cDisplayColumn: 'Transaction_Analysis_Code,Descs' ,
            }, 
            PI_fromsourcetrxanalysiscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTrxAnalysisCd'    , 
                    ColumnDB: 'TrxAnalysisCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromsourcetrxanalysiscd', 
                cLabel: 'Analysis Category Code Source From ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cDisplayColumn: 'Transaction_Analysis_Code,Descs' ,
            }, 
            PI_tosourcetrxanalysiscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTrxAnalysisCd'    , 
                    ColumnDB: 'TrxAnalysisCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tosourcetrxanalysiscd', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cDisplayColumn: 'Transaction_Analysis_Code,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:8, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OntrxanalysiscategorycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd = data.id
            this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycdLabel = data.label           

            if (this.inputStatus != "VIEW") {
                var where = " TrxAnalysisCategory = '" + data.Transaction_Analysis_Category + "'"           
                this.$refs.ref_targettrxanalysiscd.prop.dataLookUp.InitialWhere = where
                this.$refs.ref_targettrxanalysiscd.onChangeTriggered = true
                this.$refs.ref_targettrxanalysiscd.prop.cDefault == ''
                
                this.$refs.ref_fromsourcetrxanalysiscd.prop.dataLookUp.InitialWhere = where
                this.$refs.ref_fromsourcetrxanalysiscd.onChangeTriggered = true
                this.$refs.ref_fromsourcetrxanalysiscd.prop.cDefault == ''

                this.$refs.ref_tosourcetrxanalysiscd.prop.dataLookUp.InitialWhere = where
                this.$refs.ref_tosourcetrxanalysiscd.onChangeTriggered = true
                this.$refs.ref_tosourcetrxanalysiscd.prop.cDefault == ''               

            }
        })
        this.$forceUpdate()
        },
        OntargettrxanalysiscdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd = data.id
            this.M_GL_ConsolidationCategoryCode.targettrxanalysiscdLabel = data.label
            if (this.inputStatus != "VIEW") {
            //{targettrxanalysiscd}
            }
        })
        this.$forceUpdate()
        },
        OntosourcetrxanalysiscdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd = data.id
            this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscdLabel = data.label
            if (this.inputStatus != "VIEW") {
            //{tosourcetrxanalysiscd}
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
        OnfromsourcetrxanalysiscdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd = data.id
            this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsourcetrxanalysiscd}
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ConsolidationCategoryCode.consolidationcd = data.ConsolidationCd 
            // this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "
            this.propList.ParamView = "'"+ data.ConsolidationCd +"'"
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ConsolidationCd: this.M_GL_ConsolidationCategoryCode.consolidationcd,
                TrxAnalysisCategoryCd: this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd == '' || this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd ,
                TargetTrxAnalysisCd: this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd == '' || this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd ,
                FromSourceTrxAnalysisCd: this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd == '' || this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd ,
                ToSourceTrxAnalysisCd: this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd == '' || this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd ,
                Remarks: this.M_GL_ConsolidationCategoryCode.remarks,
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
                ConsolidationCd: this.M_GL_ConsolidationCategoryCode.consolidationcd,
                SequenceNo: this.M_GL_ConsolidationCategoryCode.sequenceno,
                TrxAnalysisCategoryCd: this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd == '' || this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd ,
                TargetTrxAnalysisCd: this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd == '' || this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd ,
                FromSourceTrxAnalysisCd: this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd == '' || this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd ,
                ToSourceTrxAnalysisCd: this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd == '' || this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd == null ? 'NULL' : this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd ,
                Remarks: this.M_GL_ConsolidationCategoryCode.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ConsolidationCategoryCode.lastupdatestamp                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ConsolidationCategoryCode = {
                consolidationcd: '',
                sequenceno: 0,
                trxanalysiscategorycd: '',
                targettrxanalysiscd: '',
                fromsourcetrxanalysiscd: '',
                tosourcetrxanalysiscd: '',
                remarks: '',
                trxanalysiscategorydescs: '',
                targettrxanalysiscodedescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ConsolidationCategoryCode.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "

            this.$refs.ref_trxanalysiscategorycd.focus()
        },
        M_Edit(){
            this.$refs.ref_trxanalysiscategorycd.focus()
        },
        M_Delete(dt){           
            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                ConsolidationCd: value.ConsolidationCd,
                SequenceNo: value.SequenceNo,
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
,                consolidationcd: record.ConsolidationCd,
                sequenceno: record.SequenceNo		
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_GL_ConsolidationCategoryCode = {
                    consolidationcd: data.consolidationcd,
                    sequenceno: data.sequenceno,
                    trxanalysiscategorycd: data.trxanalysiscategorycd,
                    targettrxanalysiscd: data.targettrxanalysiscd,
                    fromsourcetrxanalysiscd: data.fromsourcetrxanalysiscd,
                    tosourcetrxanalysiscd: data.tosourcetrxanalysiscd,
                    remarks: data.remarks,
                    trxanalysiscategorydescs: data.trxanalysiscategorydescs,
                    targettrxanalysiscodedescs: data.targettrxanalysiscodedescs,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                 

                this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycdLabel = this.M_GL_ConsolidationCategoryCode.trxanalysiscategorycd != null ? data.trxanalysiscategorycd + this.separator + data.trxanalysiscategorydescs :'' 
                this.M_GL_ConsolidationCategoryCode.targettrxanalysiscdLabel = this.M_GL_ConsolidationCategoryCode.targettrxanalysiscd != null ? data.targettrxanalysiscd + this.separator + data.targettrxanalysiscodedescs :'' 
                this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscdLabel = this.M_GL_ConsolidationCategoryCode.fromsourcetrxanalysiscd != null ? data.fromsourcetrxanalysiscd :'' 
                this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscdLabel = this.M_GL_ConsolidationCategoryCode.tosourcetrxanalysiscd != null ? data.tosourcetrxanalysiscd :'' 
                
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    created: function() {
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

