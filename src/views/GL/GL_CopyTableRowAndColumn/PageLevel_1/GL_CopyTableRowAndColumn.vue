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
                                        <ABSinputRadioButtonVuex @input="OnroworcolumnChange" :prop="PI_roworcolumn" v-model="M_GL_CopyTableRowAndColumn.roworcolumn"  ref="ref_roworcolumn" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntablerowcdfromChange" :prop="PI_tablerowcdfrom" :value="M_GL_CopyTableRowAndColumn.tablerowcdfrom" :label="M_GL_CopyTableRowAndColumn.tablerowcdfromLabel" ref="ref_tablerowcdfrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntablerowcdtoChange" :prop="PI_tablerowcdto" :value="M_GL_CopyTableRowAndColumn.tablerowcdto" :label="M_GL_CopyTableRowAndColumn.tablerowcdtoLabel" ref="ref_tablerowcdto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntablecolumncdfromChange" :prop="PI_tablecolumncdfrom" :value="M_GL_CopyTableRowAndColumn.tablecolumncdfrom" :label="M_GL_CopyTableRowAndColumn.tablecolumncdfromLabel" ref="ref_tablecolumncdfrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntablecolumncdtoChange" :prop="PI_tablecolumncdto" :value="M_GL_CopyTableRowAndColumn.tablecolumncdto" :label="M_GL_CopyTableRowAndColumn.tablecolumncdtoLabel" ref="ref_tablecolumncdto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_message" v-model="M_GL_CopyTableRowAndColumn.message"  ref="ref_message" />
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
            FormType: "Form",
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},

            M_GL_CopyTableRowAndColumn :{
                roworcolumn: 'R',
                tablerowcdfrom: '',
                tablerowcdto: '',
                tablecolumncdfrom: '',
                tablecolumncdto: '',
                message: ''
                    }
            ,					
            PI_roworcolumn: { 
                cValidate :'', 
                cName: 'roworcolumn', 
                cId: 'rdbroworcolumn', 
                cRadioOptions: [{ text: 'Row', value: 'R' }, { text: 'Column', value: 'C' }], 
                cRadioDefaultOption: 'R', 
                cLabel:'Copy  ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tablerowcdfrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableRow'    , 
                    ColumnDB: 'TableRowCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tablerowcdfrom', 
                cLabel: 'From Row Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cMasterUrl: 'GL/GL_ReportGeneratorRow' ,
                cDisplayColumn: 'TableRowCd,Descs' ,
            }, 
            PI_tablerowcdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableRow'    , 
                    ColumnDB: 'TableRowCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tablerowcdto', 
                cLabel: 'To Row Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cMasterUrl: 'GL/GL_ReportGeneratorRow' ,
                cDisplayColumn: 'TableRowCd,Descs' ,
            }, 
            PI_tablecolumncdfrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableColumn'    , 
                    ColumnDB: 'TableColumnCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tablecolumncdfrom', 
                cLabel: 'From Column Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_ReportGeneratorColumn' ,
                cDisplayColumn: 'TableColumnCd,Descs' ,
            }, 
            PI_tablecolumncdto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableColumn'    , 
                    ColumnDB: 'TableColumnCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tablecolumncdto', 
                cLabel: 'To Column Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'GL/GL_ReportGeneratorColumn' ,
                cDisplayColumn: 'TableColumnCd,Descs' ,
            }, 
            PI_message: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
    }
  },
    methods: {		
        OnroworcolumnChange (data) {
            
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.EnabledDisabledProp()
            }
        })
        this.$forceUpdate()
        },
        OntablerowcdfromChange (data) {
        this.$nextTick(() => {
            this.M_GL_CopyTableRowAndColumn.tablerowcdfrom = data.id
            this.M_GL_CopyTableRowAndColumn.tablerowcdfromLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablerowcdfrom}
            }
        })
        this.$forceUpdate()
        },
        OntablerowcdtoChange (data) {
        this.$nextTick(() => {
            this.M_GL_CopyTableRowAndColumn.tablerowcdto = data.id
            this.M_GL_CopyTableRowAndColumn.tablerowcdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablerowcdto}
            }
        })
        this.$forceUpdate()
        },
        OntablecolumncdfromChange (data) {
        this.$nextTick(() => {
            this.M_GL_CopyTableRowAndColumn.tablecolumncdfrom = data.id
            this.M_GL_CopyTableRowAndColumn.tablecolumncdfromLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablecolumncdfrom}
            }
        })
        this.$forceUpdate()
        },
        OntablecolumncdtoChange (data) {
        this.$nextTick(() => {
            this.M_GL_CopyTableRowAndColumn.tablecolumncdto = data.id
            this.M_GL_CopyTableRowAndColumn.tablecolumncdtoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablecolumncdto}
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
            this.EnabledDisabledProp()
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
            if(this.M_GL_CopyTableRowAndColumn.roworcolumn=='C'){
                var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: 1,
                    TableColumnCdFrom: this.M_GL_CopyTableRowAndColumn.tablerowcdfrom,
                    TableColumnCdTo: this.M_GL_CopyTableRowAndColumn.tablerowcdto,
                    UserInput: this.getDataUser().UserId
                }                
            }else{
                var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: 0,
                    TableRowCdFrom: this.M_GL_CopyTableRowAndColumn.tablerowcdfrom,
                    TableRowCdTo: this.M_GL_CopyTableRowAndColumn.tablerowcdto,
                    UserInput: this.getDataUser().UserId
                }   
            }
// tablerowcdfrom: '',
//                 tablerowcdto: '',
//                 tablecolumncdfrom: '',
//                 tablecolumncdto: '',
            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
    //   alert('insert')

        // this.M_ClearForm()

        },
        M_Update() {
            if(this.M_GL_CopyTableRowAndColumn.roworcolumn=='C'){
                var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: 1,
                    TableColumnCdFrom: this.M_GL_CopyTableRowAndColumn.tablerowcdfrom,
                    TableColumnCdTo: this.M_GL_CopyTableRowAndColumn.tablerowcdto,
                    UserInput: this.getDataUser().UserId
                }                
            }else{
                var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: 0,
                    TableRowCdFrom: this.M_GL_CopyTableRowAndColumn.tablerowcdfrom,
                    TableRowCdTo: this.M_GL_CopyTableRowAndColumn.tablerowcdto,
                    UserInput: this.getDataUser().UserId
                }   
            }
            
            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
            })

        },
		M_ClearForm(){
            this.M_GL_CopyTableRowAndColumn = {
                roworcolumn: 'R',
                tablerowcdfrom: '',
                tablerowcdto: '',
                tablecolumncdfrom: '',
                tablecolumncdto: '',
                message: ''
                    }
            		
        },
        EnabledDisabledProp(){
                if(this.M_GL_CopyTableRowAndColumn.roworcolumn == 'R'){
                    // alert(data)
                    this.PI_tablecolumncdfrom.cProtect = true
                    this.PI_tablecolumncdfrom.cValidate = ''
                    this.PI_tablecolumncdto.cProtect = true
                    this.PI_tablecolumncdto.cValidate = ''

                    // this.$refs.ref_tablerowcdfrom.cProtect = true
                    this.PI_tablerowcdfrom.cProtect = false
                    this.PI_tablerowcdfrom.cValidate = 'required'
                    this.PI_tablerowcdto.cProtect = false
                    this.PI_tablerowcdto.cValidate = 'required'


                    this.M_GL_CopyTableRowAndColumn.tablecolumncdfrom = ''
                    this.M_GL_CopyTableRowAndColumn.tablecolumncdfromLabel = ''
                    this.M_GL_CopyTableRowAndColumn.tablecolumncdto = ''
                    this.M_GL_CopyTableRowAndColumn.tablecolumncdtoLabel = ''
                }
                else{
                    this.PI_tablerowcdfrom.cProtect = true
                    this.PI_tablerowcdfrom.cValidate = ''
                    this.PI_tablerowcdto.cProtect = true
                    this.PI_tablerowcdto.cValidate = ''

                    this.PI_tablecolumncdfrom.cProtect = false
                    this.PI_tablecolumncdfrom.cValidate = 'required'
                    this.PI_tablecolumncdto.cProtect = false
                    this.PI_tablecolumncdto.cValidate = 'required'

                    this.M_GL_CopyTableRowAndColumn.tablerowcdfrom = ''
                    this.M_GL_CopyTableRowAndColumn.tablerowcdfromLabel = ''
                    this.M_GL_CopyTableRowAndColumn.tablerowcdto = ''
                    this.M_GL_CopyTableRowAndColumn.tablerowcdtoLabel = ''
                }
        },
        M_New(){
			this.$refs.ref_roworcolumn.focus()
        },
        M_Edit(){
            this.$refs.ref_roworcolumn.focus()
            // this.M_ClearForm()
            console.log(this.M_GL_CopyTableRowAndColumn)
        },
        M_Delete(dt){       
            //nothing
        },        
        getDataBy (record) {
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder

//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 // response from API
//                 if(response == null) return
                
//                 var data = response.Data[0]
// this.M_GL_CopyTableRowAndColumn = {
//                 roworcolumn: data.roworcolumn,
//                 tablerowcdfrom: data.tablerowcdfrom,
//                 tablerowcdto: data.tablerowcdto,
//                 tablecolumncdfrom: data.tablecolumncdfrom,
//                 tablecolumncdto: data.tablecolumncdto,
//                 message: data.message
//                     }
                 

//                 this.M_GL_CopyTableRowAndColumn.tablerowcdfromLabel = this.M_GL_CopyTableRowAndColumn.tablerowcdfrom != null ? data.tablerowcdfrom + this.separator  :'' 
//                 this.M_GL_CopyTableRowAndColumn.tablerowcdtoLabel = this.M_GL_CopyTableRowAndColumn.tablerowcdto != null ? data.tablerowcdto + this.separator  :'' 
//                 this.M_GL_CopyTableRowAndColumn.tablecolumncdfromLabel = this.M_GL_CopyTableRowAndColumn.tablecolumncdfrom != null ? data.tablecolumncdfrom + this.separator  :'' 
//                 this.M_GL_CopyTableRowAndColumn.tablecolumncdtoLabel = this.M_GL_CopyTableRowAndColumn.tablecolumncdto != null ? data.tablecolumncdto + this.separator  :'' 
         

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        // this.$store.commit('setFormType','Form')
        // this.$store.commit('setByPassCancel', true)
        this.$store.commit('setStatus','new')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.getToolbar().doEdit(true)
        this.$store.commit('setFormType','Form')

        // this.getToolbar().FormStatus = 'NEW'

        this.getToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.getDataBy(1753)
        this.getToolbar().FormStatus = 'EDIT'
		
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
