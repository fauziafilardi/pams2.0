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
                                        <ABSInputSelectList @change="OntargetcurrencycdChange" :prop="PI_targetcurrencycd" :value="M_GL_ConsolidationCurrency.targetcurrencycd" :label="M_GL_ConsolidationCurrency.targetcurrencycdLabel" ref="ref_targetcurrencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromsourcecurrencycdChange" :prop="PI_fromsourcecurrencycd" :value="M_GL_ConsolidationCurrency.fromsourcecurrencycd" :label="M_GL_ConsolidationCurrency.fromsourcecurrencycdLabel" ref="ref_fromsourcecurrencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntosourcecurrencycdChange" :prop="PI_tosourcecurrencycd" :value="M_GL_ConsolidationCurrency.tosourcecurrencycd" :label="M_GL_ConsolidationCurrency.tosourcecurrencycdLabel" ref="ref_tosourcecurrencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ConsolidationCurrency.remarks"  ref="ref_remarks" />
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

            M_GL_ConsolidationCurrency :{
                consolidationcd: '',
                targetcurrencycd: '',
                targetcurrencycodedescs: '',
                fromsourcecurrencycd: '',
                tosourcecurrencycd: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_targetcurrencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'targetcurrencycd', 
                cLabel: 'Currency Target ', 
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
                cMasterUrl: 'CM/CM_Currency' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_fromsourcecurrencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromsourcecurrencycd', 
                cLabel: 'Currency Source From ', 
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
                cMasterUrl: 'CM/CM_Currency' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_tosourcecurrencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tosourcecurrencycd', 
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
                cMasterUrl: 'CM/CM_Currency' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
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
        OntargetcurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCurrency.targetcurrencycd = data.id
            this.M_GL_ConsolidationCurrency.targetcurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{targetcurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OnfromsourcecurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCurrency.fromsourcecurrencycd = data.id
            this.M_GL_ConsolidationCurrency.fromsourcecurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsourcecurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OntosourcecurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCurrency.tosourcecurrencycd = data.id
            this.M_GL_ConsolidationCurrency.tosourcecurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tosourcecurrencycd}
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
        OntargetcurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCurrency.targetcurrencycd = data.id
            this.M_GL_ConsolidationCurrency.targetcurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{targetcurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OnfromsourcecurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCurrency.fromsourcecurrencycd = data.id
            this.M_GL_ConsolidationCurrency.fromsourcecurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsourcecurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OntosourcecurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ConsolidationCurrency.tosourcecurrencycd = data.id
            this.M_GL_ConsolidationCurrency.tosourcecurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tosourcecurrencycd}
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
            this.M_GL_ConsolidationCurrency.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "       

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ConsolidationCD: this.M_GL_ConsolidationCurrency.consolidationcd,
                TargetCurrencyCd: this.M_GL_ConsolidationCurrency.targetcurrencycd == '' || this.M_GL_ConsolidationCurrency.targetcurrencycd == null ? 'NULL' : this.M_GL_ConsolidationCurrency.targetcurrencycd ,
                FromSourceCurrencyCD: this.M_GL_ConsolidationCurrency.fromsourcecurrencycd == '' || this.M_GL_ConsolidationCurrency.fromsourcecurrencycd == null ? 'NULL' : this.M_GL_ConsolidationCurrency.fromsourcecurrencycd ,
                ToSourceCurrencyCd: this.M_GL_ConsolidationCurrency.tosourcecurrencycd == '' || this.M_GL_ConsolidationCurrency.tosourcecurrencycd == null ? 'NULL' : this.M_GL_ConsolidationCurrency.tosourcecurrencycd ,
                Remarks: this.M_GL_ConsolidationCurrency.remarks,
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
                ConsolidationCD: this.M_GL_ConsolidationCurrency.consolidationcd,
                TargetCurrencyCd: this.M_GL_ConsolidationCurrency.targetcurrencycd == '' || this.M_GL_ConsolidationCurrency.targetcurrencycd == null ? 'NULL' : this.M_GL_ConsolidationCurrency.targetcurrencycd ,
                FromSourceCurrencyCD: this.M_GL_ConsolidationCurrency.fromsourcecurrencycd == '' || this.M_GL_ConsolidationCurrency.fromsourcecurrencycd == null ? 'NULL' : this.M_GL_ConsolidationCurrency.fromsourcecurrencycd ,
                ToSourceCurrencyCd: this.M_GL_ConsolidationCurrency.tosourcecurrencycd == '' || this.M_GL_ConsolidationCurrency.tosourcecurrencycd == null ? 'NULL' : this.M_GL_ConsolidationCurrency.tosourcecurrencycd ,
                Remarks: this.M_GL_ConsolidationCurrency.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ConsolidationCurrency.lastupdatestamp                                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ConsolidationCurrency = {
                consolidationcd: '',
                targetcurrencycd: '',
                targetcurrencycodedescs: '',
                fromsourcecurrencycd: '',
                tosourcecurrencycd: '',
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
            this.M_GL_ConsolidationCurrency.consolidationcd = data.ConsolidationCd 
            this.propList.initialWhere =" ConsolidationCd = '" + data.ConsolidationCd + "' "

            this.$refs.ref_targetcurrencycd.focus()
        },
        M_Edit(){
            this.$refs.ref_fromsourcecurrencycd.focus()
        },
        M_Delete(dt){           
            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                ConsolidationCd: value.ConsolidationCd,
                TargetCurrencyCd: value.TargetCurrencyCd,
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
                targetcurrencycd: record.TargetCurrencyCd			
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                console.log(data)
                this.M_GL_ConsolidationCurrency = {
                    consolidationcd: data.consolidationcd,
                    targetcurrencycd: data.targetcurrencycd,
                    targetcurrencycodedescs: data.targetcurrencycodedescs,
                    fromsourcecurrencycd: data.fromsourcecurrencycd,
                    tosourcecurrencycd: data.tosourcecurrencycd,
                    remarks: data.remarks,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                 

                this.M_GL_ConsolidationCurrency.targetcurrencycdLabel = this.M_GL_ConsolidationCurrency.targetcurrencycd != null ? data.targetcurrencycd + this.separator + data.targetcurrencycodedescs :'' 
                this.M_GL_ConsolidationCurrency.fromsourcecurrencycdLabel = this.M_GL_ConsolidationCurrency.fromsourcecurrencycd != null ? data.fromsourcecurrencycd :'' 
                this.M_GL_ConsolidationCurrency.tosourcecurrencycdLabel = this.M_GL_ConsolidationCurrency.tosourcecurrencycd != null ? data.tosourcecurrencycd :'' 
                
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

