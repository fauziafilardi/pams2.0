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
                                        <ABSInputSelectList @change="OntargetaccountcdChange" :prop="PI_targetaccountcd" :value="M_GL_ConsolidationAccount.targetaccountcd" :label="M_GL_ConsolidationAccount.targetaccountcdLabel" ref="ref_targetaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromsourceaccountcdChange" :prop="PI_fromsourceaccountcd" :value="M_GL_ConsolidationAccount.fromsourceaccountcd" :label="M_GL_ConsolidationAccount.fromsourceaccountcdLabel" ref="ref_fromsourceaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntosourceaccountcdChange" :prop="PI_tosourceaccountcd" :value="M_GL_ConsolidationAccount.tosourceaccountcd" :label="M_GL_ConsolidationAccount.tosourceaccountcdLabel" ref="ref_tosourceaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ConsolidationAccount.remarks"  ref="ref_remarks" />
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
            DataRow:'',
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

            M_GL_ConsolidationAccount :{
                consolidationcd: '',
                targetaccountcd: '',
                targetaccountdescs: '',
                fromsourceaccountcd: '',
                tosourceaccountcd: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_targetaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description_1' 
                        }, 
                cValidate :'required', 
                cName: 'targetaccountcd', 
                cLabel: 'Account Target ', 
                cKey: true, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_fromsourceaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd ,Descs1' 
                        }, 
                cValidate :'required', 
                cName: 'fromsourceaccountcd', 
                cLabel: 'Account Source From ', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd ,Descs1' ,
            }, 
            PI_tosourceaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd ,Descs1' 
                        }, 
                cValidate :'required', 
                cName: 'tosourceaccountcd', 
                cLabel: 'To ', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd ,Descs1' ,
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
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        OntargetaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationAccount.targetaccountcd = data.id
            this.M_GL_ConsolidationAccount.targetaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{targetaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnfromsourceaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationAccount.fromsourceaccountcd = data.id
            this.M_GL_ConsolidationAccount.fromsourceaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsourceaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OntosourceaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationAccount.tosourceaccountcd = data.id
            this.M_GL_ConsolidationAccount.tosourceaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tosourceaccountcd}
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ConsolidationAccount.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ConsolidationCd: this.DataRow.ConsolidationCd,
                TargetAccountCd: this.M_GL_ConsolidationAccount.targetaccountcd == '' || this.M_GL_ConsolidationAccount.targetaccountcd == null ? 'NULL' : this.M_GL_ConsolidationAccount.targetaccountcd ,
                FromSourceAccountCd: this.M_GL_ConsolidationAccount.fromsourceaccountcd == '' || this.M_GL_ConsolidationAccount.fromsourceaccountcd == null ? 'NULL' : this.M_GL_ConsolidationAccount.fromsourceaccountcd ,
                ToSourceAccountCd: this.M_GL_ConsolidationAccount.tosourceaccountcd == '' || this.M_GL_ConsolidationAccount.tosourceaccountcd == null ? 'NULL' : this.M_GL_ConsolidationAccount.tosourceaccountcd ,
                Remarks: this.M_GL_ConsolidationAccount.remarks,
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
                ConsolidationCd: this.M_GL_ConsolidationAccount.consolidationcd,
                TargetAccountCd: this.M_GL_ConsolidationAccount.targetaccountcd == '' || this.M_GL_ConsolidationAccount.targetaccountcd == null ? 'NULL' : this.M_GL_ConsolidationAccount.targetaccountcd ,
                FromSourceAccountCd: this.M_GL_ConsolidationAccount.fromsourceaccountcd == '' || this.M_GL_ConsolidationAccount.fromsourceaccountcd == null ? 'NULL' : this.M_GL_ConsolidationAccount.fromsourceaccountcd ,
                ToSourceAccountCd: this.M_GL_ConsolidationAccount.tosourceaccountcd == '' || this.M_GL_ConsolidationAccount.tosourceaccountcd == null ? 'NULL' : this.M_GL_ConsolidationAccount.tosourceaccountcd ,
                Remarks: this.M_GL_ConsolidationAccount.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ConsolidationAccount.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
			this.$nextTick(() => {
            this.M_GL_ConsolidationAccount = {
                consolidationcd: '',
                targetaccountcd: '',
                targetaccountdescs: '',
                fromsourceaccountcd: '',
                tosourceaccountcd: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            	
		   })
		   this.$forceUpdate()
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.DataRow = data
            this.M_GL_ConsolidationAccount.consolidationcd = this.DataRow.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "

            this.$refs.ref_targetaccountcd.focus()
            
        },
        M_Edit(){
            this.$refs.ref_fromsourceaccountcd.focus()
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    ConsolidationCd: value.ConsolidationCd,
                    TargetAccountCd: value.TargetAccountCd == '' || value.TargetAccountCd == null ? 'NULL' : value.TargetAccountCd ,
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
                targetaccountcd: record.TargetAccountCd,
                		
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_GL_ConsolidationAccount = {
                            consolidationcd: data.consolidationcd,
                targetaccountcd: data.targetaccountcd,
                targetaccountdescs: data.targetaccountdescs,
                fromsourceaccountcd: data.fromsourceaccountcd,
                tosourceaccountcd: data.tosourceaccountcd,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_ConsolidationAccount.targetaccountcdLabel = this.M_GL_ConsolidationAccount.targetaccountcd != null && this.M_GL_ConsolidationAccount.targetaccountcd != '' ? data.targetaccountcd + this.separator + data.targetaccountdescs :'' 
                this.M_GL_ConsolidationAccount.fromsourceaccountcdLabel = this.M_GL_ConsolidationAccount.fromsourceaccountcd != null && this.M_GL_ConsolidationAccount.fromsourceaccountcd != '' ? data.fromsourceaccountcd  :'' 
                this.M_GL_ConsolidationAccount.tosourceaccountcdLabel = this.M_GL_ConsolidationAccount.tosourceaccountcd != null && this.M_GL_ConsolidationAccount.tosourceaccountcd != '' ? data.tosourceaccountcd  :'' 
                

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

