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
                                        <ABSinputTextVuex :prop="PI_caption" v-model="M_WF_CustomField.caption"  ref="ref_caption"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OndatatypeChange" :prop="PI_datatype" :value="M_WF_CustomField.datatype" :label="M_WF_CustomField.datatypeLabel" ref="ref_datatype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_length" v-model="M_WF_CustomField.length"  ref="ref_length"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnmandatoryChange" :prop="PI_mandatory" v-model="M_WF_CustomField.mandatory"  ref="ref_mandatory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnlookupstatusChange" :prop="PI_lookupstatus" v-model="M_WF_CustomField.lookupstatus"  ref="ref_lookupstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlookuptableChange" :prop="PI_lookuptable" :value="M_WF_CustomField.lookuptable" :label="M_WF_CustomField.lookuptableLabel" ref="ref_lookuptable"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlookupfieldChange" :prop="PI_lookupfield" :value="M_WF_CustomField.lookupfield" :label="M_WF_CustomField.lookupfieldLabel" ref="ref_lookupfield"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lookupcondition" v-model="M_WF_CustomField.lookupcondition"  ref="ref_lookupcondition"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_defaultdescs" v-model="M_WF_CustomField.defaultdescs"  ref="ref_defaultdesc"/>
                                        <ABSinputTextVuex :prop="PI_defaultnumeric" v-model="M_WF_CustomField.defaultnumeric"  ref="ref_defaultnumeric"/>
                                        <ABSinputDateVuex :prop="PI_defaultdate" v-model="M_WF_CustomField.defaultdate"  ref="ref_defaultdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_WF_CustomField.remarks"  ref="ref_remarks" />
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
			Module:"TN",
            propList: {
                initialWhere:"FormSequenceNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_WF_CustomField :{
                fieldsequenceno: 0,
                formsequenceno: 0,
                caption: '',
                datatype: 'D',
                length: '0',
                score: 0,
                mandatory: 'Y',
                lookupstatus: 'Y',
                lookuptable: '',
                lookupfield: '',
                lookupcondition: '',
                defaultdescs: '',
                defaultnumeric: '0',
                defaultdate: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_caption: { 
                cValidate :'required|max:60', 
                cName: 'caption', 
                cLabel: 'Caption', 
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
            PI_datatype: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'datatype', 
                cLabel: 'Data Type', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Description', id: 'D' },{ label: 'Numeric', id: 'N' },{ label: 'Datetime', id: 'A' },{ label: 'Text', id: 'T' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_length: { 
                cValidate :'required', 
                cName: 'length', 
                cLabel: 'Length', 
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
            PI_mandatory: { 
                cValidate :'', 
                cName: 'mandatory', 
                cId: 'rdbmandatory', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Mandatory', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lookupstatus: { 
                cValidate :'', 
                cName: 'lookupstatus', 
                cId: 'rdblookupstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Lookup Status', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lookuptable: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTableName'    , 
                    ColumnDB: 'name'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lookuptable', 
                cLabel: 'Lookup Table', 
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
                cDisplayColumn: 'name' ,
            }, 
            PI_lookupfield: { 
                 dataLookUp: { 
                    LookUpCd: 'GetLookupTableField'    , 
                    ColumnDB: 'name'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lookupfield', 
                cLabel: 'Lookup Field', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'name'  
            }, 
            PI_lookupcondition: { 
                cValidate :'max:150', 
                cName: 'lookupcondition', 
                cLabel: 'Lookup Condition', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_defaultdescs: { 
                cValidate :'max:150', 
                cName: 'defaultdescs', 
                cLabel: 'Default Description', 
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
            PI_defaultnumeric: { 
                cValidate :'', 
                cName: 'defaultnumeric', 
                cLabel: 'Default Numeric', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_defaultdate: {
                cValidate :'', 
                cName: 'defaultdate', 
                cLabel: 'Default Date',
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cVisible:  false, 
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
                cOrder:12, 
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
  },
    methods: {
        OndatatypeChange(value){
          this.$nextTick(() => {
            this.M_WF_CustomField.datatype = value.id
            if (this.inputStatus != "VIEW") {

                this.PI_length.cProtect = true

                this.PI_defaultdescs.cVisible = false
                this.PI_defaultnumeric.cVisible = false
                this.PI_defaultdate.cVisible = false

                this.PI_lookupstatus.cProtect = true

                if (value.id == 'D') {
                    this.PI_length.cProtect = false
                    this.PI_lookupstatus.cProtect = false
                    this.PI_defaultdescs.cVisible = true
                } else if (value.id == 'N') {
                    this.M_WF_CustomField.lookupstatus = 'N'
                    this.PI_defaultnumeric.cVisible = true
                    this.M_WF_CustomField.length = ''
                } else if (value.id == 'A') {
                    this.M_WF_CustomField.lookupstatus = 'N'
                    this.PI_defaultdate.cVisible = true
                    this.M_WF_CustomField.length = ''
                } else if (value.id == 'T') {
                    this.M_WF_CustomField.lookupstatus = 'N'
                    this.M_WF_CustomField.length = ''
                }
            }
        })
        this.$forceUpdate()
        },
        OnmandatoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{mandatory}
            }
        })
        this.$forceUpdate()
        },
        OnlookupstatusChange (data) {
          this.M_WF_CustomField.lookupstatus = data
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    if ( data == 'Y') {
                        this.PI_lookuptable.cProtect = false
                        this.PI_lookupfield.cProtect = false
                        this.PI_lookupcondition.cProtect = false
                    } else {
                        this.PI_lookuptable.cProtect = true
                        this.PI_lookupfield.cProtect = true
                        this.PI_lookupcondition.cProtect = true
                        
                        this.M_WF_CustomField.lookuptable = ""
                        this.M_WF_CustomField.lookuptableLabel = ""

                        this.M_WF_CustomField.lookupfield = ""
                        this.M_WF_CustomField.lookupfieldLabel = ""

                        this.M_WF_CustomField.lookupcondition = ""
                    }
                }
            })
            this.$forceUpdate()
        },
        OnlookuptableChange (data) {
          
        this.$nextTick(() => {
            this.M_WF_CustomField.lookuptable = data.id
            this.M_WF_CustomField.lookuptableLabel = data.label

            this.PI_lookupfield.dataLookUp.InitialWhere = "object_id = OBJECT_ID('"+ data.name +"')"
            if (this.inputStatus != "VIEW") {

              
//{lookuptable}
            }
        })
        this.$forceUpdate()
        },
        OnlookupfieldChange (data) {
        this.$nextTick(() => {
            this.M_WF_CustomField.lookupfield = data.id
            this.M_WF_CustomField.lookupfieldLabel = data.label
            if (this.inputStatus != "VIEW") {
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
            this.M_WF_CustomField.formsequenceno = data.FormSequenceNo 
            this.propList.initialWhere =" FormSequenceNo = '" + data.FormSequenceNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
        if (this.M_WF_CustomField.datatype == "D")
             { this.M_WF_CustomField.defaultnumeric = "null"
             this.M_WF_CustomField.defaultdate = "null" }
        if (this.M_WF_CustomField.datatype == "N")
             { this.M_WF_CustomField.defaultdescs = "null"
             this.M_WF_CustomField.defaultdate = "null" }
        if (this.M_WF_CustomField.datatype == "A")
             { this.M_WF_CustomField.defaultdescs = "null"
             this.M_WF_CustomField.defaultnumeric = "null" }
        if (this.M_WF_CustomField.datatype == "T")
             { this.M_WF_CustomField.defaultdescs = "null"
             this.M_WF_CustomField.defaultnumeric = "null"
             this.M_WF_CustomField.defaultdate = "null" }
             var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FormSequenceNo: this.M_WF_CustomField.formsequenceno,
                Caption: this.M_WF_CustomField.caption,
                DataType: this.M_WF_CustomField.datatype,
                Length: this.M_WF_CustomField.length == '' ? 0 : this.M_WF_CustomField.length,
                Score: this.M_WF_CustomField.score,
                Mandatory: this.M_WF_CustomField.mandatory,
                LookupStatus: this.M_WF_CustomField.lookupstatus,
                LookupTable: this.M_WF_CustomField.lookuptable,
                LookupField: this.M_WF_CustomField.lookupfield,
                LookupCondition: this.M_WF_CustomField.lookupcondition,
                DefaultDescs: this.M_WF_CustomField.defaultdescs,
                DefaultNumeric: this.M_WF_CustomField.defaultnumeric,
                DefaultDate: this.M_WF_CustomField.defaultdate,
                Remarks: this.M_WF_CustomField.remarks,
                LastUpdateStamp: this.M_WF_CustomField.lastupdatestamp,
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
        if (this.M_WF_CustomField.datatype == "D")
             { this.M_WF_CustomField.defaultnumeric = "null"
             this.M_WF_CustomField.defaultdate = "null" }
        if (this.M_WF_CustomField.datatype == "N")
             { this.M_WF_CustomField.defaultdescs = "null"
             this.M_WF_CustomField.defaultdate = "null" }
        if (this.M_WF_CustomField.datatype == "A")
             { this.M_WF_CustomField.defaultdescs = "null"
             this.M_WF_CustomField.defaultnumeric = "null" }
        if (this.M_WF_CustomField.datatype == "T")
             { this.M_WF_CustomField.defaultdescs = "null"
             this.M_WF_CustomField.defaultnumeric = "null"
             this.M_WF_CustomField.defaultdate = "null" }

             var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FieldSequenceNo: this.M_WF_CustomField.fieldsequenceno,
                FormSequenceNo: this.M_WF_CustomField.formsequenceno,
                Caption: this.M_WF_CustomField.caption,
                DataType: this.M_WF_CustomField.datatype,
                Length: this.M_WF_CustomField.length,
                Score: this.M_WF_CustomField.score,
                Mandatory: this.M_WF_CustomField.mandatory,
                LookupStatus: this.M_WF_CustomField.lookupstatus,
                LookupTable: this.M_WF_CustomField.lookuptable,
                LookupField: this.M_WF_CustomField.lookupfield,
                LookupCondition: this.M_WF_CustomField.lookupcondition,
                DefaultDescs: this.M_WF_CustomField.defaultdescs,
                DefaultNumeric: this.M_WF_CustomField.defaultnumeric,
                DefaultDate: this.M_WF_CustomField.defaultdate,
                LastUpdateStamp: this.M_WF_CustomField.lastupdatestamp,
                Remarks: this.M_WF_CustomField.remarks,
                UserEdit: this.getDataUser().UserId 
                }
                this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_WF_CustomField = {
                fieldsequenceno: 0,
                formsequenceno: 0,
                caption: '',
                datatype: 'D',
                length: '',
                score: 0,
                mandatory: 'Y',
                lookupstatus: 'Y',
                lookuptable: '',
                lookupfield: '',
                lookupcondition: '',
                defaultdescs: '',
                defaultnumeric: '0',
                defaultdate: '',
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
            this.M_WF_CustomField.formsequenceno = data.FormSequenceNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    FieldSequenceNo: value.FieldSequenceNo,
                    FormSequenceNo: value.FormSequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''
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
,                fieldsequenceno: record.FieldSequenceNo,
                formsequenceno: record.FormSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_WF_CustomField = {
                fieldsequenceno: data.fieldsequenceno,
                formsequenceno: data.formsequenceno,
                caption: data.caption,
                datatype: data.datatype,
                length: data.length,
                score: this.isCurrency(data.score, this.decimal),
                mandatory: data.mandatory,
                lookupstatus: data.lookupstatus,
                lookuptable: data.lookuptable,
                lookupfield: data.lookupfield,
                lookupcondition: data.lookupcondition,
                defaultdescs: data.defaultdescs,
                defaultnumeric: this.isCurrency(data.defaultnumeric, this.decimal),
                defaultdate: data.defaultdate,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_WF_CustomField.lookuptableLabel = this.M_WF_CustomField.lookuptable != null && this.M_WF_CustomField.lookuptable != '' ? data.lookuptable :'' 
                this.M_WF_CustomField.lookupfieldLabel = this.M_WF_CustomField.lookupfield != null && this.M_WF_CustomField.lookupfield != '' ? data.lookupfield :'' 
  

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

