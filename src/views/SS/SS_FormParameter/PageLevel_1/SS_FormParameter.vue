<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.query_name"
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
                                        <ABSinputTextVuex :prop="PI_filename" v-model="M_SS_FormParameter.filename" ref="ref_filename"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_url" v-model="M_SS_FormParameter.url" ref="ref_url"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_title" v-model="M_SS_FormParameter.title"  ref="ref_title"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lineno" v-model="M_SS_FormParameter.lineno"  ref="ref_lineno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_level" v-model="M_SS_FormParameter.level"  ref="ref_level"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_relationparameter" v-model="M_SS_FormParameter.relationparameter"  ref="ref_relationparameter"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onsp_iChange" :prop="PI_sp_i" :value="M_SS_FormParameter.sp_i" :label="M_SS_FormParameter.sp_iLabel"  ref="ref_sp_i"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onsp_uChange" :prop="PI_sp_u" :value="M_SS_FormParameter.sp_u" :label="M_SS_FormParameter.sp_uLabel"  ref="ref_sp_u"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onsp_sChange" :prop="PI_sp_s" :value="M_SS_FormParameter.sp_s" :label="M_SS_FormParameter.sp_sLabel"  ref="ref_sp_s"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onsp_dChange" :prop="PI_sp_d" :value="M_SS_FormParameter.sp_d" :label="M_SS_FormParameter.sp_dLabel"  ref="ref_sp_d"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnislistChange" :prop="PI_islist" v-model="M_SS_FormParameter.islist"  ref="ref_islist"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnviewlistChange" :prop="PI_viewlist" :value="M_SS_FormParameter.viewlist" :label="M_SS_FormParameter.viewlistLabel"  ref="ref_viewlist"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_formtype" v-model="M_SS_FormParameter.formtype"  ref="ref_formtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpagemasterseqChange" :prop="PI_pagemasterseq" :value="M_SS_FormParameter.pagemasterseq" :label="M_SS_FormParameter.pagemasterseqLabel"  ref="ref_pagemasterseq"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnmoduleChange" :prop="PI_module" :value="M_SS_FormParameter.module" :label="M_SS_FormParameter.moduleLabel"  ref="ref_module"/>
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
		Module:"SS",
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

            M_SS_FormParameter :{
                header_id: 0,
                filename: '',
                url: '',
                title: '',
                lineno: '',
                level: '',
                relationparameter: '',
                sp_i: '',
                sp_u: '',
                sp_s: '',
                sp_d: '',
                sp_l: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                islist: 'False',
                tablename: '',
                formtype: '',
                sp_process: '',
                pagemasterseq: 0,
                module: '',
                tabledetailisnotfound: '',
                detailhtmlisnotfound: '',
                detailhtmlcleanisnotfound: '',
                detailparamisnotfound: '',
                detailparamcleanisnotfound: '',
                tableparamspisnotfound: '',
                isscript: '',
                iscolumnhtml: '',
                isparamapi: '',
                rowid: 0,
                viewlist: ''
                    }
            ,
            
            PI_filename: { 
                cValidate :'required', 
                cName: 'filename', 
                cLabel: 'File Name', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_url: { 
                cValidate :'required', 
                cName: 'url', 
                cLabel: 'Url', 
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
            PI_title: { 
                cValidate :'required', 
                cName: 'title', 
                cLabel: 'Title', 
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
            PI_lineno: { 
                cValidate :'required', 
                cName: 'lineno', 
                cLabel: 'Line No', 
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
            PI_level: { 
                cValidate :'required', 
                cName: 'level', 
                cLabel: 'Level', 
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
            PI_relationparameter: { 
                cValidate :'', 
                cName: 'relationparameter', 
                cLabel: 'Relation Parameter', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sp_i: { 
                dataLookUp: { 
                    LookUpCd: 'GetUISp', 
                    ColumnDB: 'SpName', 
                    InitialWhere: "", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sp_i', 
                cLabel: 'SP Insert', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'SpName' ,
            }, 
            PI_sp_u: { 
                dataLookUp: { 
                    LookUpCd: 'GetUISp', 
                    ColumnDB: 'SpName', 
                    InitialWhere: "", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sp_u', 
                cLabel: 'SP Update', 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cDisplayColumn: 'SpName' ,
            }, 
            PI_sp_s: { 
                dataLookUp: { 
                    LookUpCd: 'GetUISp', 
                    ColumnDB: 'SpName', 
                    InitialWhere: "SpName is not null", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sp_s', 
                cLabel: 'SP GetDataBy', 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cDisplayColumn: 'SpName' ,
            }, 
            PI_sp_d: { 
                dataLookUp: { 
                    LookUpCd: 'GetUISp', 
                    ColumnDB: 'SpName', 
                    InitialWhere: "", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sp_d', 
                cLabel: 'SP Delete', 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cDisplayColumn: 'SpName' ,
            }, 
            PI_islist: { 
                cValidate :'required', 
                cName: 'islist', 
                cId: 'rdbislist', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cRadioDefaultOption: '', 
                cLabel:'List', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_viewlist: { 
                dataLookUp: { 
                    LookUpCd: 'GetUIViewName', 
                    ColumnDB: 'ViewName', 
                    InitialWhere: "", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'viewlist', 
                cLabel: 'SP List/View', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 15,  
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
                cDisplayColumn: 'ViewName' ,
            }, 
            PI_tablename: { 
                cValidate :'', 
                cName: 'tablename', 
                cLabel: 'Table Name', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_formtype: { 
                cValidate :'required', 
                cName: 'formtype', 
                cLabel: 'Form Type', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sp_process: { 
              dataLookUp: { 
                    LookUpCd: 'GetUISp', 
                    ColumnDB: 'SpName', 
                    InitialWhere: "", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sp_process', 
                cLabel: 'SP Process', 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cDisplayColumn: 'SpName' ,
            }, 
            PI_pagemasterseq: { 
                dataLookUp: { 
                    LookUpCd: 'GetPageMasterInfo', 
                    ColumnDB: 'PageMasterSeq', 
                    InitialWhere: "PageMasterSeq is not null", 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'pagemasterseq', 
                cLabel: 'Page Master Seq', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 15,  
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
                cDisplayColumn: 'PageMasterSeq' ,
            }, 
            PI_module: { 
                cValidate :'required', 
                cName: 'module', 
                cLabel: 'Module', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'text',
                cKey: false, 
                cTriggered: false, 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cStatic: true, 
                cOption: [
                    { label: 'AP', id: 'AP' },
                    { label: 'AR', id: 'AR' },
                    { label: 'CM', id: 'CM' },
                    { label: 'CB', id: 'CB' },
                    { label: 'GL', id: 'GL' },
                    { label: 'SS', id: 'SS' },
                    { label: 'SM', id: 'SM' },
                    { label: 'TN', id: 'TN' }],
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
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
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
        },
        Onsp_iChange (data) {
            this.$nextTick(() => {
                this.M_SS_FormParameter.sp_i = data.id
                this.M_SS_FormParameter.sp_iLabel = data.label
                if (this.inputStatus != "VIEW") {
                }
        })
        this.$forceUpdate()
        },
        Onsp_uChange (data) {
            this.$nextTick(() => {
                this.M_SS_FormParameter.sp_u = data.id
                this.M_SS_FormParameter.sp_uLabel = data.label
                if (this.inputStatus != "VIEW") {
                }
        })
        this.$forceUpdate()
        },
        Onsp_sChange (data) {
            this.$nextTick(() => {
                this.M_SS_FormParameter.sp_s = data.id
                this.M_SS_FormParameter.sp_sLabel = data.label
                if (this.inputStatus != "VIEW") {
                }
        })
        this.$forceUpdate()
        },
        Onsp_dChange (data) {
            this.$nextTick(() => {
                this.M_SS_FormParameter.sp_d = data.id
                this.M_SS_FormParameter.sp_dLabel = data.label
                if (this.inputStatus != "VIEW") {
                }
        })
        this.$forceUpdate()
        },
        OnislistChange (data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    if (data == 'True') {
                        this.PI_viewlist.cValidate = 'required'
                        this.PI_viewlist.cProtect = false
                        this.$refs.ref_viewlist.isRequired = true
                    }
                    else {
                        this.PI_viewlist.cValidate = ''
                        this.PI_viewlist.cProtect = true
                        this.$refs.ref_viewlist.isRequired = false
                    }
                }
            })
            this.$forceUpdate()
        },
        OnviewlistChange (data) {
            this.$nextTick(() => {
                this.M_SS_FormParameter.viewlist = data.id
                this.M_SS_FormParameter.viewlistLabel = data.label
                if (this.inputStatus != "VIEW") {
    //{viewlist}
                }
        })
        this.$forceUpdate()
        },
        OnpagemasterseqChange (data) {
            // console.log(data)
            this.$nextTick(() => {
                this.M_SS_FormParameter.pagemasterseq = data.id
                this.M_SS_FormParameter.pagemasterseqLabel = data.label
                if (this.inputStatus != "VIEW") {
    //{pagemasterseq}
                }
        })
        this.$forceUpdate()
        },
        OnmoduleChange (data) {
            this.M_SS_FormParameter.module = data.id
            this.M_SS_FormParameter.moduleLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
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
        M_Post(dt){
        },
        M_Insert() {
            var param = {	
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNoV2: this.$parent.data.PageOrder,		
                FileName: this.M_SS_FormParameter.filename,
                Url: this.M_SS_FormParameter.url,
                Title: this.M_SS_FormParameter.title,
                LineNo: this.M_SS_FormParameter.lineno,
                Level: this.M_SS_FormParameter.level,
                RelationParameter: this.M_SS_FormParameter.relationparameter,
                SP_I: this.M_SS_FormParameter.sp_i,
                SP_U: this.M_SS_FormParameter.sp_u,
                SP_S: this.M_SS_FormParameter.sp_s,
                SP_D: this.M_SS_FormParameter.sp_d,
                SP_L: this.M_SS_FormParameter.sp_l,
                IsList: this.M_SS_FormParameter.islist === "True" ? 1 : 0,
                TableName: this.M_SS_FormParameter.tablename,
                FormType: this.M_SS_FormParameter.formtype,
                SP_Process: this.M_SS_FormParameter.sp_process,
                PageMasterSeq: this.M_SS_FormParameter.pagemasterseq,
                Module: this.M_SS_FormParameter.module,
                UserInput: this.getDataUser().UserId,
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
                LineNoV2: this.$parent.data.PageOrder,				
                FileName: this.M_SS_FormParameter.filename,
                Url: this.M_SS_FormParameter.url,
                Title: this.M_SS_FormParameter.title,
                LineNo: this.M_SS_FormParameter.lineno,
                Level: this.M_SS_FormParameter.level,
                RelationParameter: this.M_SS_FormParameter.relationparameter,
                SP_I: this.M_SS_FormParameter.sp_i,
                SP_U: this.M_SS_FormParameter.sp_u,
                SP_S: this.M_SS_FormParameter.sp_s,
                SP_D: this.M_SS_FormParameter.sp_d,
                SP_L: this.M_SS_FormParameter.sp_l,
                IsList: this.M_SS_FormParameter.islist === "True" ? 1 : 0,
                TableName: this.M_SS_FormParameter.tablename,
                FormType: this.M_SS_FormParameter.formtype,
                SP_Process: this.M_SS_FormParameter.sp_process,
                PageMasterSeq: this.M_SS_FormParameter.pagemasterseq,
                Module: this.M_SS_FormParameter.module,
                UserEdit: this.getDataUser().UserId,              
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_SS_FormParameter = {
                header_id: 0,
                filename: '',
                url: '',
                title: '',
                lineno: '',
                level: '',
                relationparameter: '',
                sp_i: '',
                sp_u: '',
                sp_s: '',
                sp_d: '',
                sp_l: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                islist: 'False',
                tablename: '',
                formtype: '',
                sp_process: '',
                pagemasterseq: 0,
                module: '',
                tabledetailisnotfound: '',
                detailhtmlisnotfound: '',
                detailhtmlcleanisnotfound: '',
                detailparamisnotfound: '',
                detailparamcleanisnotfound: '',
                tableparamspisnotfound: '',
                isscript: '',
                iscolumnhtml: '',
                isparamapi: '',
                rowid: 0,
                viewlist: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_filename.focus()
        },
        M_Edit(){
            console.log(DataRow);
            if(this.M_SS_FormParameter.islist = 'True'){
                    this.PI_viewlist.cValidate = 'required'
                    this.PI_viewlist.cProtect = false
                    this.$refs.ref_viewlist.isRequired = true
                }
                else {
                    this.PI_viewlist.cValidate = ''
                    this.PI_viewlist.cProtect = true
                    this.$refs.ref_viewlist.isRequired = false
                }

            this.$refs.ref_filename.focus()
        },
        M_Delete(dt){       
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

        
            data.forEach((value) => {
                // console.log(value)
                dataDelete.push({
                RowId: value.row_id,
                Header_ID: value.Header_ID,
                _Message_:''
                        })
            })
        
            var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  Data: dataDelete
              }
              
              this.postJSONMulti( this.getUrlDeleteMulti(), param )
              .then(response => {
                  if (response == null) return

                  this.$parent.resultDelete()
              })
        },        
        getDataBy (record) {
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               RowId: record.RowId,
                Header_ID: record.Header_ID
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
this.M_SS_FormParameter = {
                header_id: data.header_id,
                filename: data.filename,
                url: data.url,
                title: data.title,
                lineno: data.lineno,
                level: data.level,
                relationparameter: data.relationparameter,
                sp_i: data.sp_i,
                sp_u: data.sp_u,
                sp_s: data.sp_s,
                sp_d: data.sp_d,
                sp_l: data.sp_l,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                islist: data.islist,
                tablename: data.tablename,
                formtype: data.formtype,
                sp_process: data.sp_process,
                pagemasterseq: data.pagemasterseq,
                module: data.module,
                tabledetailisnotfound: data.tabledetailisnotfound,
                detailhtmlisnotfound: data.detailhtmlisnotfound,
                detailhtmlcleanisnotfound: data.detailhtmlcleanisnotfound,
                detailparamisnotfound: data.detailparamisnotfound,
                detailparamcleanisnotfound: data.detailparamcleanisnotfound,
                tableparamspisnotfound: data.tableparamspisnotfound,
                isscript: data.isscript,
                iscolumnhtml: data.iscolumnhtml,
                isparamapi: data.isparamapi,
                rowid: record.row_id

                    }
                //  console.log(data.islist);
                if(data.islist = 'True'){
                    this.PI_viewlist.cValidate = 'required'
                    this.PI_viewlist.cProtect = false
                    // console.log(this.$refs.ref_viewlist.isRequired);
                    this.$refs.ref_viewlist.isRequired = true
                }
                else {
                    this.PI_viewlist.cValidate = ''
                    this.PI_viewlist.cProtect = true
                    this.$refs.ref_viewlist.isRequired = false
                }
                this.M_SS_FormParameter.pagemasterseqLabel = this.M_SS_FormParameter.pagemasterseq != null && this.M_SS_FormParameter.pagemasterseq != "" ? data.pagemasterseq :'' 
                this.M_SS_FormParameter.sp_iLabel = this.M_SS_FormParameter.sp_i != null && this.M_SS_FormParameter.sp_i != "" ? data.sp_i :'' 
                this.M_SS_FormParameter.sp_uLabel = this.M_SS_FormParameter.sp_u != null && this.M_SS_FormParameter.sp_u != "" ? data.sp_u :'' 
                this.M_SS_FormParameter.sp_dLabel = this.M_SS_FormParameter.sp_d != null && this.M_SS_FormParameter.sp_d != "" ? data.sp_d :'' 
                this.M_SS_FormParameter.sp_sLabel = this.M_SS_FormParameter.sp_s != null && this.M_SS_FormParameter.sp_s != "" ? data.sp_s :'' 
                this.M_SS_FormParameter.sp_lLabel = this.M_SS_FormParameter.sp_l != null && this.M_SS_FormParameter.sp_l != "" ? data.sp_l :'' 

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

