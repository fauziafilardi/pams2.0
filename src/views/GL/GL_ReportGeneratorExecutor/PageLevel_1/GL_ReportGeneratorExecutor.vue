<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnformatcdChange" :prop="PI_formatcd" :value="M_GL_ReportGeneratorExecutor.formatcd" :label="M_GL_ReportGeneratorExecutor.formatcdLabel" ref="ref_formatcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_formatcodedescs" v-model="M_GL_ReportGeneratorExecutor.formatcodedescs"  ref="ref_formatcodedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfiletypeChange" :prop="PI_filetype" v-model="M_GL_ReportGeneratorExecutor.filetype"  ref="ref_filetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fromaccperiod" v-model="M_GL_ReportGeneratorExecutor.fromaccperiod"  ref="ref_fromaccperiod"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_toaccperiod" v-model="M_GL_ReportGeneratorExecutor.toaccperiod"  ref="ref_toaccperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fromaccyear" v-model="M_GL_ReportGeneratorExecutor.fromaccyear"  ref="ref_fromaccyear"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_toaccyear" v-model="M_GL_ReportGeneratorExecutor.toaccyear"  ref="ref_toaccyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincludedatahistoryChange" :prop="PI_includedatahistory" v-model="M_GL_ReportGeneratorExecutor.includedatahistory"  ref="ref_includedatahistory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincluderoughtransChange" :prop="PI_includeroughtrans" v-model="M_GL_ReportGeneratorExecutor.includeroughtrans"  ref="ref_includeroughtrans" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_supplementarydescs" v-model="M_GL_ReportGeneratorExecutor.supplementarydescs"  ref="ref_supplementarydescs"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                                                    
                            </b-row>
                            <ABSTAnalysisReportGeneratorExecutor ref="RptGeneratorExecutor" :prop="PTAnalysis" v-model="dataTReport"/>

                            <!-- {{dataTReport}} -->
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
            FormType: "Form",
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},
            dataTReport: [],

            M_GL_ReportGeneratorExecutor :{
                formatcd: '',
                formatcodedescs: '',
                filetype: 'E',
                fromaccperiod: '',
                fromaccyear: '',
                toaccperiod: '',
                toaccyear: '',
                includedatahistory: 'N',
                includeroughtrans: 'Y',
                supplementarydescs: ''
                    }
            ,					
            PI_formatcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableFormat'    , 
                    ColumnDB: 'TableFormatCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'formatcd', 
                cLabel: 'Format Code', 
                cKey: false, 
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
                cMasterUrl: 'GL/GL_ReportGeneratorFormat' ,
                cDisplayColumn: 'TableFormatCd,Descs1' ,
            }, 
            PI_formatcodedescs: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_filetype: { 
                cValidate :'', 
                cName: 'filetype', 
                cId: 'rdbfiletype', 
                cRadioOptions: [{ text: 'Excel', value: 'E' },{ text: 'Text', value: 'T' },{ text: 'PDF', value: 'P' },], 
                cRadioDefaultOption: 'E', 
                cLabel:'File Type', 
                cLabelSize: 4, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromaccperiod: { 
                cValidate :'required|max:2|min_value:1|max_value:12', 
                cName: 'fromaccperiod', 
                cLabel: 'Accounting Period From ', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromaccyear: { 
                cValidate :'required|max:4', 
                cName: 'fromaccyear', 
                cLabel: 'Accounting Year From', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_toaccperiod: { 
                cValidate :'required|max:2|min_value:1|max_value:12', 
                cName: 'toaccperiod', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_toaccyear: { 
                cValidate :'required|max:4', 
                cName: 'toaccyear', 
                cLabel: 'To', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_includedatahistory: { 
                cValidate :'', 
                cName: 'includedatahistory', 
                cId: 'rdbincludedatahistory', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Include Data History', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_includeroughtrans: { 
                cValidate :'', 
                cName: 'includeroughtrans', 
                cId: 'rdbincluderoughtrans', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Include Rough Transaction', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_supplementarydescs: { 
                cValidate :'required|max:60', 
                cName: 'supplementarydescs', 
                cLabel: 'Supplementary Description ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            
            PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
                cDaily: false
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
    }
  },
    methods: {		
        OnformatcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorExecutor.formatcd = data.id
            this.M_GL_ReportGeneratorExecutor.formatcdLabel = data.label

            // this.$store.commit('setFormatCode', data.id)
            
            if (this.inputStatus != "VIEW") {
                this.$refs.RptGeneratorExecutor.getData(data.id)
//{formatcd}
            }
        })
        this.$forceUpdate()
        },
        OnfiletypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{filetype}
            }
        })
        this.$forceUpdate()
        },
        OnincludedatahistoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{includedatahistory}
            }
        })
        this.$forceUpdate()
        },
        OnincluderoughtransChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{includeroughtrans}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
            this.getToolbar().isNew = true
            this.getToolbar().statusFunction[0].disabled = true
            // this.getToolbar().statusFunction[5].disabled = false
           this.getToolbar().statusFunction[7].disabled = true
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
            this.M_ClearForm()
            this.$refs.RptGeneratorExecutor.getData('')

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
             var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                FormatCode: this.M_GL_ReportGeneratorExecutor.formatcd == '' || this.M_GL_ReportGeneratorExecutor.formatcd == null ? 'NULL' : this.M_GL_ReportGeneratorExecutor.formatcd ,
                FileType: this.M_GL_ReportGeneratorExecutor.filetype,
                AccPeriodFrom: this.M_GL_ReportGeneratorExecutor.fromaccperiod,
                AccYearFrom:this.M_GL_ReportGeneratorExecutor.fromaccyear,
                AccPeriodTo:this.M_GL_ReportGeneratorExecutor.toaccperiod,
                AccYearTo:this.M_GL_ReportGeneratorExecutor.toaccyear,
                IncludeHistory:this.M_GL_ReportGeneratorExecutor.includedatahistory,   
                SuppDescs:this.M_GL_ReportGeneratorExecutor.supplementarydescs,
                IncludeRoughTrans:this.M_GL_ReportGeneratorExecutor.includeroughtrans,  
                IsDailyCashflow:'N',   
                DataExecutor : this.dataTReport                     
            }
            // return
            this.postJSON(this.getUrlGenerateReportExecutor(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$refs.RptGeneratorExecutor.getData('')
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'NEW')
					// this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
           
        },
		M_ClearForm(){
        this.$nextTick(() => {       
            this.M_GL_ReportGeneratorExecutor = {
                
                formatcd: '',
                formatcodedescs: '',
                filetype: 'E',
                fromaccperiod: '',
                fromaccyear: '',
                toaccperiod: '',
                toaccyear: '',
                includedatahistory: 'N',
                includeroughtrans: 'Y',
                supplementarydescs: ''
                }
        })
            
            		
		},
        M_New(){
			this.$refs.ref_formatcd.focus()
        },
        M_Edit(){
            this.$refs.ref_formatcd.focus()
        },
        M_Delete(dt){    
        },        
        getDataBy (record) {
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        // this.$store.commit('setFormType','Form')
        // this.$store.commit('setStatus','new')
        // this.$store.commit('setByPassCancel', true)
        this.$store.commit('setStatus','new')
        // this.$store.commit('setFormType','New')
        // this.isDetail = true 
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.getToolbar().doEdit(true)
        this.$store.commit('setFormType','Form')

        this.getToolbar().FormStatus = 'NEW'

        this.getToolbar().ProcessPS()
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
