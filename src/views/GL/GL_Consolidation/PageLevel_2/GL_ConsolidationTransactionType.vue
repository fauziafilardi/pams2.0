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
                                        <ABSInputSelectList @change="OntargettrxtypeChange" :prop="PI_targettrxtype" :value="M_GL_ConsolidationTransactionType.targettrxtype" :label="M_GL_ConsolidationTransactionType.targettrxtypeLabel" ref="ref_targettrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromsourcetrxtypeChange" :prop="PI_fromsourcetrxtype" :value="M_GL_ConsolidationTransactionType.fromsourcetrxtype" :label="M_GL_ConsolidationTransactionType.fromsourcetrxtypeLabel" ref="ref_fromsourcetrxtype"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntosourcetrxtypeChange" :prop="PI_tosourcetrxtype" :value="M_GL_ConsolidationTransactionType.tosourcetrxtype" :label="M_GL_ConsolidationTransactionType.tosourcetrxtypeLabel" ref="ref_tosourcetrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_targettrxtypedescs" v-model="M_GL_ConsolidationTransactionType.targettrxtypedescs"  ref="ref_targettrxtypedescs" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ConsolidationTransactionType.remarks"  ref="ref_remarks" />
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
                initialWhere:"ConsolidationCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ConsolidationTransactionType :{
                consolidationcd: '',
                targettrxtype: '',
                modulecd: '',
                targettrxtypedescs: '',
                fromsourcetrxtype: '',
                tosourcetrxtype: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_targettrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetCM_TransactionTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'targettrxtype', 
                cLabel: 'Transaction Type Target ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            },
            PI_fromsourcetrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetCM_TransactionTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromsourcetrxtype', 
                cLabel: 'Transaction Type Source From  ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            },
            PI_tosourcetrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetCM_TransactionTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tosourcetrxtype', 
                cLabel: 'to ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:7, 
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
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
        OntargettrxtypeChange(data) {
            this.$nextTick(() => {
                this.M_GL_ConsolidationTransactionType.targettrxtype = data.id
                this.M_GL_ConsolidationTransactionType.targettrxtypeLabel = data.label
            })
            this.$forceUpdate()
        },
        OnfromsourcetrxtypeChange(data) {
            this.$nextTick(() => {
                this.M_GL_ConsolidationTransactionType.fromsourcetrxtype = data.id
                this.M_GL_ConsolidationTransactionType.fromsourcetrxtypeLabel = data.label
            })
            this.$forceUpdate()
        },
        OntosourcetrxtypeChange(data) {
            this.$nextTick(() => {
                this.M_GL_ConsolidationTransactionType.tosourcetrxtype = data.id
                this.M_GL_ConsolidationTransactionType.tosourcetrxtypeLabel = data.label
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ConsolidationTransactionType.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ConsolidationCd: this.M_GL_ConsolidationTransactionType.consolidationcd,
                TargetTrxType: this.M_GL_ConsolidationTransactionType.targettrxtype,
                ModuleCd: 'GL',
                FromSourceTrxType: this.M_GL_ConsolidationTransactionType.fromsourcetrxtype,
                ToSourceTrxType: this.M_GL_ConsolidationTransactionType.tosourcetrxtype,
                Remarks: this.M_GL_ConsolidationTransactionType.remarks,
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
                
                ConsolidationCd: this.M_GL_ConsolidationTransactionType.consolidationcd,
                TargetTrxType: this.M_GL_ConsolidationTransactionType.targettrxtype,
                ModuleCd: 'GL',
                FromSourceTrxType: this.M_GL_ConsolidationTransactionType.fromsourcetrxtype,
                ToSourceTrxType: this.M_GL_ConsolidationTransactionType.tosourcetrxtype,
                Remarks: this.M_GL_ConsolidationTransactionType.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ConsolidationTransactionType.lastupdatestamp               
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ConsolidationTransactionType = {
                consolidationcd: '',
                targettrxtype: '',
                modulecd: '',
                targettrxtypedescs: '',
                fromsourcetrxtype: '',
                tosourcetrxtype: '',
                remarks: '',
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
            this.M_GL_ConsolidationTransactionType.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' " 
            
            this.$refs.ref_targettrxtype.focus()
            

        },
        M_Edit(){
            this.$refs.ref_targettrxtype.focus()
        },
        M_Delete(dt){           
            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                ConsolidationCd: value.ConsolidationCd,
                TargetTrxType: value.TargetTrxType  ,
                ModuleCd: value.ModuleCd,
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
                targettrxtype: record.TargetTrxType,
                modulecd: record.ModuleCd			
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]

this.M_GL_ConsolidationTransactionType = {
                consolidationcd: data.consolidationcd,
                targettrxtype: data.targettrxtype,
                modulecd: data.modulecd,
                targettrxtypedescs: data.targettrxtypedescs,
                fromsourcetrxtype: data.fromsourcetrxtype,
                tosourcetrxtype: data.tosourcetrxtype,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                
                this.M_GL_ConsolidationTransactionType.targettrxtypeLabel = this.M_GL_ConsolidationTransactionType.targettrxtype != null ? data.targettrxtype + this.separator + data.targettrxtypedescs :'' 
                this.M_GL_ConsolidationTransactionType.fromsourcetrxtypeLabel = this.M_GL_ConsolidationTransactionType.fromsourcetrxtype != null ? data.fromsourcetrxtype  :'' 
                this.M_GL_ConsolidationTransactionType.tosourcetrxtypeLabel = this.M_GL_ConsolidationTransactionType.tosourcetrxtype != null ? data.tosourcetrxtype :''
  

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

