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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                        <ABSinputTextVuex @input="OnledgerformatcdChange" :prop="PI_ledgerformatcd" v-model="M_GL_LedgerAnalysisFormat.ledgerformatcd"  ref="ref_ledgerformatcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs1" v-model="M_GL_LedgerAnalysisFormat.descs1"  ref="ref_descs1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs2" v-model="M_GL_LedgerAnalysisFormat.descs2"  ref="ref_descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnledgercolumncdChange" :prop="PI_ledgercolumncd" :value="M_GL_LedgerAnalysisFormat.ledgercolumncd" :label="M_GL_LedgerAnalysisFormat.ledgercolumncdLabel" ref="ref_ledgercolumncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromaccountcdChange" :prop="PI_fromaccountcd" :value="M_GL_LedgerAnalysisFormat.fromaccountcd" :label="M_GL_LedgerAnalysisFormat.fromaccountcdLabel" ref="ref_fromaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoaccountcdChange" :prop="PI_toaccountcd" :value="M_GL_LedgerAnalysisFormat.toaccountcd" :label="M_GL_LedgerAnalysisFormat.toaccountcdLabel" ref="ref_toaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbracketnegativeChange" :prop="PI_bracketnegative" v-model="M_GL_LedgerAnalysisFormat.bracketnegative"  ref="ref_bracketnegative" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnprintdetailsChange" :prop="PI_printdetails" v-model="M_GL_LedgerAnalysisFormat.printdetails"  ref="ref_printdetails" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onsortby1Change" :prop="PI_sortby1" :value="M_GL_LedgerAnalysisFormat.sortby1" :label="M_GL_LedgerAnalysisFormat.sortby1Label"  ref="ref_sortby1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onsortby2Change" :prop="PI_sortby2" :value="M_GL_LedgerAnalysisFormat.sortby2" :label="M_GL_LedgerAnalysisFormat.sortby2Label"  ref="ref_sortby2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onselection1Change" :prop="PI_selection1" :value="M_GL_LedgerAnalysisFormat.selection1" :label="M_GL_LedgerAnalysisFormat.selection1Label"  ref="ref_selection1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onselection2Change" :prop="PI_selection2" :value="M_GL_LedgerAnalysisFormat.selection2" :label="M_GL_LedgerAnalysisFormat.selection2Label"  ref="ref_selection2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6"></b-col>
                                        <b-col md="6" v-show="err3">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Please use different value for each selection !  </label></b-col>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_LedgerAnalysisFormat.remarks"  ref="ref_remarks" />
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
        error: false,
        err3: false,
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

            isValid: ['AC', 'AP', 'RF'],
            isValid2: ['AC', 'RF'],	

            M_GL_LedgerAnalysisFormat :{
                columndescs: '',
                ledgerformatcd: '',
                descs1: '',
                descs2: '',
                ledgercolumncd: '',
                fromaccountcd: '',
                toaccountcd: '',
                bracketnegative: 'Y',
                printdetails: 'Y',
                sortby1: '',
                sortby2: '',
                selection1: '',
                selection2: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_ledgerformatcd: { 
                cValidate :'required|cRequired:Ledger Format Code is Required!|max:8', 
                cName: 'ledgerformatcd', 
                cLabel: 'Format Code', 
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
            PI_descs1: { 
                cValidate :'required|max:60', 
                cName: 'descs1', 
                cLabel: 'Description 1', 
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
            PI_descs2: { 
                cValidate :'max:60', 
                cName: 'descs2', 
                cLabel: 'Description 2', 
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
            PI_ledgercolumncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLLedgerAnalysisColumn'    , 
                    ColumnDB: 'LedgerColumnCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'LedgerColumnCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'ledgercolumncd', 
                cLabel: 'Column', 
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
                cMasterUrl: 'GL/GL_LedgerAnalysisColumn' ,
                cDisplayColumn: 'LedgerColumnCd,Descs' ,
            }, 
            PI_fromaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description_1' 
                        }, 
                cValidate :'required|cRequired:Account From is Required!', 
                cName: 'fromaccountcd', 
                cLabel: 'Account From', 
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
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_toaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description_1' 
                        }, 
                cValidate :'required|cRequired:Account To is Required!', 
                cName: 'toaccountcd', 
                cLabel: 'To', 
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
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_bracketnegative: { 
                cValidate :'', 
                cName: 'bracketnegative', 
                cId: 'rdbbracketnegative', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Bracket Negative  ', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_printdetails: { 
                cValidate :'', 
                cName: 'printdetails', 
                cId: 'rdbprintdetails', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Print Detail', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sortby1: { 
                cValidate :'', 
                cName: 'sortby1', 
                cLabel: 'Level Code 1  ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false,
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'AC', id: 'AC' },{ label: 'AP', id: 'AP' },{ label: 'RF', id: 'RF' },], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_sortby2: { 
                cValidate :'', 
                cName: 'sortby2', 
                cLabel: 'Level Code 2', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false,
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'AC', id: 'AC' },{ label: 'AP', id: 'AP' },{ label: 'RF', id: 'RF' },], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_selection1: { 
                cValidate :'', 
                cName: 'selection1', 
                cLabel: 'Selection 1  ', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false,
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'AC', id: 'AC' },{ label: 'RF', id: 'RF' },], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_selection2: { 
                cValidate :'', 
                cName: 'selection2', 
                cLabel: 'Selection 2', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false,cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'AC', id: 'AC' },{ label: 'RF', id: 'RF' },], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:13, 
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
		return this.$store.getters.GetPage1Data
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        OnledgerformatcdChange(data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                }
            })
        },	
        OnledgercolumncdChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.ledgercolumncd = data.id
            this.M_GL_LedgerAnalysisFormat.ledgercolumncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{ledgercolumncd}
            }
        })
        this.$forceUpdate()
        },
        OnfromaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.fromaccountcd = data.id
            this.M_GL_LedgerAnalysisFormat.fromaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OntoaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.toaccountcd = data.id
            this.M_GL_LedgerAnalysisFormat.toaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnbracketnegativeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{bracketnegative}
            }
        })
        this.$forceUpdate()
        },
        OnprintdetailsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{printdetails}
            }
        })
        this.$forceUpdate()
        },
        Onsortby1Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.sortby1 = data.id
            this.M_GL_LedgerAnalysisFormat.sortby1Label = data.label
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        Onsortby2Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.sortby2 = data.id
            this.M_GL_LedgerAnalysisFormat.sortby2Label = data.label
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        Onselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.selection1 = data.id
            this.M_GL_LedgerAnalysisFormat.selection1Label = data.label
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        Onselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAnalysisFormat.selection2 = data.id
            this.M_GL_LedgerAnalysisFormat.selection2Label = data.label
            if (this.inputStatus != "VIEW") {
                if(data.id == this.M_GL_LedgerAnalysisFormat.selection1){
                    this.error = true
                    this.err3 = true
                }
                else{
                    this.err3 = false
                    this.error = false
                }
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
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
        },
        M_Insert() {
            if(this.M_GL_LedgerAnalysisFormat.selection1 == this.M_GL_LedgerAnalysisFormat.selection2){
                    this.error = true
                    this.err3 = true
                    return
                }
                else{
                    this.err3 = false
                    this.error = false
                }
                // console.log(this.M_GL_LedgerAnalysisFormat)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                LedgerFormatCd: this.M_GL_LedgerAnalysisFormat.ledgerformatcd,
                Descs1: this.M_GL_LedgerAnalysisFormat.descs1,
                Descs2: this.M_GL_LedgerAnalysisFormat.descs2,
                LedgerColumnCd: this.M_GL_LedgerAnalysisFormat.ledgercolumncd == '' || this.M_GL_LedgerAnalysisFormat.ledgercolumncd == null ? 'NULL' : this.M_GL_LedgerAnalysisFormat.ledgercolumncd ,
                FromAccountCd: this.M_GL_LedgerAnalysisFormat.fromaccountcd == '' || this.M_GL_LedgerAnalysisFormat.fromaccountcd == null ? 'NULL' : this.M_GL_LedgerAnalysisFormat.fromaccountcd ,
                ToAccountCd: this.M_GL_LedgerAnalysisFormat.toaccountcd == '' || this.M_GL_LedgerAnalysisFormat.toaccountcd == null ? 'NULL' : this.M_GL_LedgerAnalysisFormat.toaccountcd ,
                BracketNegative: this.M_GL_LedgerAnalysisFormat.bracketnegative,
                PrintDetails: this.M_GL_LedgerAnalysisFormat.printdetails,
                SortBy1: this.M_GL_LedgerAnalysisFormat.sortby1,
                SortBy2: this.M_GL_LedgerAnalysisFormat.sortby2,
                Selection1: this.M_GL_LedgerAnalysisFormat.selection1,
                Selection2: this.M_GL_LedgerAnalysisFormat.selection2,
                Remarks: this.M_GL_LedgerAnalysisFormat.remarks,
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
                LedgerFormatCd: this.M_GL_LedgerAnalysisFormat.ledgerformatcd,
                Descs1: this.M_GL_LedgerAnalysisFormat.descs1,
                Descs2: this.M_GL_LedgerAnalysisFormat.descs2,
                LedgerColumnCd: this.M_GL_LedgerAnalysisFormat.ledgercolumncd == '' || this.M_GL_LedgerAnalysisFormat.ledgercolumncd == null ? 'NULL' : this.M_GL_LedgerAnalysisFormat.ledgercolumncd ,
                FromAccountCd: this.M_GL_LedgerAnalysisFormat.fromaccountcd == '' || this.M_GL_LedgerAnalysisFormat.fromaccountcd == null ? 'NULL' : this.M_GL_LedgerAnalysisFormat.fromaccountcd ,
                ToAccountCd: this.M_GL_LedgerAnalysisFormat.toaccountcd == '' || this.M_GL_LedgerAnalysisFormat.toaccountcd == null ? 'NULL' : this.M_GL_LedgerAnalysisFormat.toaccountcd ,
                BracketNegative: this.M_GL_LedgerAnalysisFormat.bracketnegative,
                PrintDetails: this.M_GL_LedgerAnalysisFormat.printdetails,
                SortBy1: this.M_GL_LedgerAnalysisFormat.sortby1,
                SortBy2: this.M_GL_LedgerAnalysisFormat.sortby2,
                Selection1: this.M_GL_LedgerAnalysisFormat.selection1,
                Selection2: this.M_GL_LedgerAnalysisFormat.selection2,
                Remarks: this.M_GL_LedgerAnalysisFormat.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_LedgerAnalysisFormat.lastupdatestamp                
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
            this.M_GL_LedgerAnalysisFormat = {
                columndescs: '',
                ledgerformatcd: '',
                descs1: '',
                descs2: '',
                ledgercolumncd: '',
                fromaccountcd: '',
                toaccountcd: '',
                bracketnegative: 'Y',
                printdetails: 'Y',
                sortby1: '',
                sortby2: '',
                selection1: '',
                selection2: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            	
		   })
		   this.$forceUpdate()
	
		},
        M_New(){
			this.$refs.ref_ledgerformatcd.focus()
        },
        M_Edit(){
            this.$refs.ref_descs1.focus()
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    _Message_:'',
                    LedgerFormatCd: value.LedgerFormatCd,
                    LastUpdateStamp: value.LastUpdateStamp,

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
,                ledgerformatcd: record.LedgerFormatCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_LedgerAnalysisFormat = {
                columndescs: data.columndescs,
                ledgerformatcd: data.ledgerformatcd,
                descs1: data.descs1,
                descs2: data.descs2,
                ledgercolumncd: data.ledgercolumncd,
                fromaccountcd: data.fromaccountcd,
                toaccountcd: data.toaccountcd,
                bracketnegative: data.bracketnegative,
                printdetails: data.printdetails,
                sortby1: data.sortby1,
                sortby2: data.sortby2,
                selection1: data.selection1,
                selection2: data.selection2,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_LedgerAnalysisFormat.ledgercolumncdLabel = this.M_GL_LedgerAnalysisFormat.ledgercolumncd != null && this.M_GL_LedgerAnalysisFormat.ledgercolumncd != '' ? data.ledgercolumncd + this.separator + data.columndescs :'' 
                this.M_GL_LedgerAnalysisFormat.fromaccountcdLabel = this.M_GL_LedgerAnalysisFormat.fromaccountcd != null && this.M_GL_LedgerAnalysisFormat.fromaccountcd != '' ? data.fromaccountcd + this.separator  :'' 
                this.M_GL_LedgerAnalysisFormat.toaccountcdLabel = this.M_GL_LedgerAnalysisFormat.toaccountcd != null && this.M_GL_LedgerAnalysisFormat.toaccountcd != '' ? data.toaccountcd + this.separator  :'' 
         

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

