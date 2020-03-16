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
                                        <ABSinputTextVuex :prop="PI_tableformatcd" v-model="M_GL_ReportGeneratorFormat.tableformatcd"  ref="ref_tableformatcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs1" v-model="M_GL_ReportGeneratorFormat.descs1"  ref="ref_descs1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs2" v-model="M_GL_ReportGeneratorFormat.descs2"  ref="ref_descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntablerowcdChange" :prop="PI_tablerowcd" :value="M_GL_ReportGeneratorFormat.tablerowcd" :label="M_GL_ReportGeneratorFormat.tablerowcdLabel" ref="ref_tablerowcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntablecolumncdChange" :prop="PI_tablecolumncd" :value="M_GL_ReportGeneratorFormat.tablecolumncd" :label="M_GL_ReportGeneratorFormat.tablecolumncdLabel" ref="ref_tablecolumncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbracketnegativeChange" :prop="PI_bracketnegative" v-model="M_GL_ReportGeneratorFormat.bracketnegative"  ref="ref_bracketnegative" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnaccountdescsChange" :prop="PI_accountdescs" v-model="M_GL_ReportGeneratorFormat.accountdescs"  ref="ref_accountdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsuppresszeroChange" :prop="PI_suppresszero" v-model="M_GL_ReportGeneratorFormat.suppresszero"  ref="ref_suppresszero" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnsuppressaccountcdChange" :prop="PI_suppressaccountcd" v-model="M_GL_ReportGeneratorFormat.suppressaccountcd"  ref="ref_suppressaccountcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsplitreportChange" :prop="PI_splitreport" v-model="M_GL_ReportGeneratorFormat.splitreport"  ref="ref_splitreport" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsplitrownoChange" :prop="PI_splitrowno" :value="M_GL_ReportGeneratorFormat.splitrowno" :label="M_GL_ReportGeneratorFormat.splitrownoLabel" ref="ref_splitrowno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ReportGeneratorFormat.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                     <div class="div-collapse">
                                        <span class="master-span-form">
                                            Selection (A0-A9, T0-T30, TT, CC)
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onselection1Change" :prop="PI_selection1" :value="M_GL_ReportGeneratorFormat.selection1" :label="M_GL_ReportGeneratorFormat.selection1Label" ref="ref_selection1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onselection2Change" :prop="PI_selection2" :value="M_GL_ReportGeneratorFormat.selection2" :label="M_GL_ReportGeneratorFormat.selection2Label" ref="ref_selection2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onselection3Change" :prop="PI_selection3" :value="M_GL_ReportGeneratorFormat.selection3" :label="M_GL_ReportGeneratorFormat.selection3Label" ref="ref_selection3"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onselection4Change" :prop="PI_selection4" :value="M_GL_ReportGeneratorFormat.selection4" :label="M_GL_ReportGeneratorFormat.selection4Label" ref="ref_selection4"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onselection5Change" :prop="PI_selection5" :value="M_GL_ReportGeneratorFormat.selection5" :label="M_GL_ReportGeneratorFormat.selection5Label" ref="ref_selection5"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onselection6Change" :prop="PI_selection6" :value="M_GL_ReportGeneratorFormat.selection6" :label="M_GL_ReportGeneratorFormat.selection6Label" ref="ref_selection6"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onselection7Change" :prop="PI_selection7" :value="M_GL_ReportGeneratorFormat.selection7" :label="M_GL_ReportGeneratorFormat.selection7Label" ref="ref_selection7"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onselection8Change" :prop="PI_selection8" :value="M_GL_ReportGeneratorFormat.selection8" :label="M_GL_ReportGeneratorFormat.selection8Label" ref="ref_selection8"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="Onselection9Change" :prop="PI_selection9" :value="M_GL_ReportGeneratorFormat.selection9" :label="M_GL_ReportGeneratorFormat.selection9Label" ref="ref_selection9"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="Onselection10Change" :prop="PI_selection10" :value="M_GL_ReportGeneratorFormat.selection10" :label="M_GL_ReportGeneratorFormat.selection10Label" ref="ref_selection10"/>
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
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ReportGeneratorFormat :{
                tableformatcd: '',
                descs1: '',
                descs2: '',
                tablerowcd: '',
                tablecolumncd: '',
                bracketnegative: 'Y',
                accountdescs: '1',
                suppresszero: 'Y',
                suppressaccountcd: 'Y',
                splitreport: 'Y',
                splitrowno: '',
                selection1: '',
                selection2: '',
                selection3: '',
                selection4: '',
                selection5: '',
                selection6: '',
                selection7: '',
                selection8: '',
                selection9: '',
                selection10: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_tableformatcd: { 
                cValidate :'required|max:8', 
                cName: 'tableformatcd', 
                cLabel: 'Format Code ', 
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
                cLabel: 'Description 1 ', 
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
            PI_tablerowcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableRow'    , 
                    ColumnDB: 'TableRowCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tablerowcd', 
                cLabel: 'Row ', 
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
                cMasterUrl: 'GL/GL_ReportGeneratorRow' ,
                cDisplayColumn: 'TableRowCd,Descs' ,
            }, 
            PI_tablecolumncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableColumn'    , 
                    ColumnDB: 'TableColumnCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tablecolumncd', 
                cLabel: 'Column ', 
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
                cMasterUrl: 'GL/GL_ReportGeneratorColumn' ,
                cDisplayColumn: 'TableColumnCd,Descs' ,
            }, 
            PI_bracketnegative: { 
                cValidate :'', 
                cName: 'bracketnegative', 
                cId: 'rdbbracketnegative', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Bracket Negative', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountdescs: { 
                cValidate :'', 
                cName: 'accountdescs', 
                cId: 'rdbaccountdescs', 
                cRadioOptions: [{ text: '1', value: '1' },{ text: '2', value: '2' }], 
                cRadioDefaultOption: '1', 
                cLabel:'Account Description', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_suppresszero: { 
                cValidate :'', 
                cName: 'suppresszero', 
                cId: 'rdbsuppresszero', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Suppress Zero', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_suppressaccountcd: { 
                cValidate :'', 
                cName: 'suppressaccountcd', 
                cId: 'rdbsuppressaccountcd', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Suppress Account Code', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_splitreport: { 
                cValidate :'', 
                cName: 'splitreport', 
                cId: 'rdbsplitreport', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Split Report', 
                cLabelSize: 4, 
                cOrder: 10, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_splitrowno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableRow'    , 
                    ColumnDB: 'TableRowCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'splitrowno', 
                cLabel: 'Start Split From Row', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cMasterUrl: 'GL/GL_ReportGeneratorRow' ,
                cDisplayColumn: 'TableRowCd,Descs' ,
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
            PI_selection1: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection1', 
                cLabel: 'Selection 1', 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_selection2: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection2', 
                cLabel: 'Selection 2', 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_selection3: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection3', 
                cLabel: 'Selection 3', 
                cLabelSize: 4, 
                cOrder: 15, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_selection4: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection4', 
                cLabel: 'Selection 4', 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_selection5: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection5', 
                cLabel: 'Selection 5', 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_selection6: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection6', 
                cLabel: 'Selection 6', 
                cLabelSize: 4, 
                cOrder: 18, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_selection7: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection7', 
                cLabel: 'Selection 7', 
                cLabelSize: 4, 
                cOrder: 19, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_selection8: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection8', 
                cLabel: 'Selection 8', 
                cLabelSize: 4, 
                cOrder: 20, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_selection9: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection9', 
                cLabel: 'Selection 9', 
                cLabelSize: 4, 
                cOrder: 21, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_selection10: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection10', 
                cLabel: 'Selection 10', 
                cLabelSize: 4, 
                cOrder: 22, 
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
                cOption: [{ label: 'A0', id: 'A0' },{ label: 'A1', id: 'A1' },{ label: 'A2', id: 'A2' },{ label: 'A3', id: 'A3' },{ label: 'A4', id: 'A4' },{ label: 'A5', id: 'A5' },{ label: 'A6', id: 'A6' },{ label: 'A7', id: 'A7' },{ label: 'A8', id: 'A8' },{ label: 'A9', id: 'A9' },
                { label: 'T0', id: 'T0' },{ label: 'T1', id: 'T1' },{ label: 'T2', id: 'T2' },{ label: 'T3', id: 'T3' },{ label: 'T4', id: 'T4' },{ label: 'T5', id: 'T5' },{ label: 'T6', id: 'T6' },{ label: 'T7', id: 'T7' },{ label: 'T8', id: 'T8' },{ label: 'T9', id: 'T9' },{ label: 'T10', id: 'T10' },
                { label: 'T11', id: 'T11' },{ label: 'T12', id: 'T12' },{ label: 'T13', id: 'T13' },{ label: 'T14', id: 'T14' },{ label: 'T15', id: 'T15' },{ label: 'T16', id: 'T16' },{ label: 'T17', id: 'T17' },{ label: 'T18', id: 'T18' },{ label: 'T19', id: 'T19' },{ label: 'T20', id: 'T20' },
                { label: 'T21', id: 'T21' },{ label: 'T22', id: 'T22' },{ label: 'T23', id: 'T23' },{ label: 'T24', id: 'T24' },{ label: 'T25', id: 'T25' },{ label: 'T26', id: 'T26' },{ label: 'T27', id: 'T27' },{ label: 'T28', id: 'T28' },{ label: 'T29', id: 'T29' },{ label: 'T30', id: 'T30' },
                { label: 'TT', id: 'TT' },
                { label: 'CC', id: 'CC' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
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
        OntablerowcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorFormat.tablerowcd = data.id
            this.M_GL_ReportGeneratorFormat.tablerowcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablerowcd}
            }
        })
        this.$forceUpdate()
        },
        OntablecolumncdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorFormat.tablecolumncd = data.id
            this.M_GL_ReportGeneratorFormat.tablecolumncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablecolumncd}
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
        OnaccountdescsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{accountdescs}
            }
        })
        this.$forceUpdate()
        },
        OnsuppresszeroChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{suppresszero}
            }
        })
        this.$forceUpdate()
        },
        OnsuppressaccountcdChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{suppressaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnsplitreportChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              this.disabledEnabaledProp()
              if(data == 'Y'){
                this.PI_splitrowno.cProtect = false
              }
              else{
                this.PI_splitrowno.cProtect = true
              }
              
            }
        })
        this.$forceUpdate()
        },
        OnsplitrownoChange (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorFormat.splitrowno = data.id
            this.M_GL_ReportGeneratorFormat.splitrownoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{splitrowno}
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
                TableFormatCd: this.M_GL_ReportGeneratorFormat.tableformatcd,
                Descs1: this.M_GL_ReportGeneratorFormat.descs1,
                Descs2: this.M_GL_ReportGeneratorFormat.descs2,
                TableRowCd: this.M_GL_ReportGeneratorFormat.tablerowcd == '' || this.M_GL_ReportGeneratorFormat.tablerowcd == null ? 'NULL' : this.M_GL_ReportGeneratorFormat.tablerowcd ,
                TableColumnCd: this.M_GL_ReportGeneratorFormat.tablecolumncd == '' || this.M_GL_ReportGeneratorFormat.tablecolumncd == null ? 'NULL' : this.M_GL_ReportGeneratorFormat.tablecolumncd ,
                BracketNegative: this.M_GL_ReportGeneratorFormat.bracketnegative,
                AccountDescs: this.M_GL_ReportGeneratorFormat.accountdescs,
                SuppressZero: this.M_GL_ReportGeneratorFormat.suppresszero,
                SuppressAccountCode: this.M_GL_ReportGeneratorFormat.suppressaccountcd,
                SplitReport: this.M_GL_ReportGeneratorFormat.splitreport,
                SplitRowNo: this.M_GL_ReportGeneratorFormat.splitrowno == '' || this.M_GL_ReportGeneratorFormat.splitrowno == null ? 'NULL' : this.M_GL_ReportGeneratorFormat.splitrowno ,
                Selection1: this.M_GL_ReportGeneratorFormat.selection10,
                Selection2: this.M_GL_ReportGeneratorFormat.selection2,
                Selection3: this.M_GL_ReportGeneratorFormat.selection3,
                Selection4: this.M_GL_ReportGeneratorFormat.selection4,
                Selection5: this.M_GL_ReportGeneratorFormat.selection5,
                Selection6: this.M_GL_ReportGeneratorFormat.selection6,
                Selection7: this.M_GL_ReportGeneratorFormat.selection7,
                Selection8: this.M_GL_ReportGeneratorFormat.selection8,
                Selection9: this.M_GL_ReportGeneratorFormat.selection9,
                Selection10: this.M_GL_ReportGeneratorFormat.selection10,
                Remarks: this.M_GL_ReportGeneratorFormat.remarks,
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
                TableFormatCd: this.M_GL_ReportGeneratorFormat.tableformatcd,
                Descs1: this.M_GL_ReportGeneratorFormat.descs1,
                Descs2: this.M_GL_ReportGeneratorFormat.descs2,
                TableRowCd: this.M_GL_ReportGeneratorFormat.tablerowcd == '' || this.M_GL_ReportGeneratorFormat.tablerowcd == null ? 'NULL' : this.M_GL_ReportGeneratorFormat.tablerowcd ,
                TableColumnCd: this.M_GL_ReportGeneratorFormat.tablecolumncd == '' || this.M_GL_ReportGeneratorFormat.tablecolumncd == null ? 'NULL' : this.M_GL_ReportGeneratorFormat.tablecolumncd ,
                BracketNegative: this.M_GL_ReportGeneratorFormat.bracketnegative,
                AccountDescs: this.M_GL_ReportGeneratorFormat.accountdescs,
                SuppressZero: this.M_GL_ReportGeneratorFormat.suppresszero,
                SuppressAccountCode: this.M_GL_ReportGeneratorFormat.suppressaccountcd,
                SplitReport: this.M_GL_ReportGeneratorFormat.splitreport,
                SplitRowNo: this.M_GL_ReportGeneratorFormat.splitrowno == '' || this.M_GL_ReportGeneratorFormat.splitrowno == null ? 'NULL' : this.M_GL_ReportGeneratorFormat.splitrowno ,
                Selection1: this.M_GL_ReportGeneratorFormat.selection10,
                Selection2: this.M_GL_ReportGeneratorFormat.selection2,
                Selection3: this.M_GL_ReportGeneratorFormat.selection3,
                Selection4: this.M_GL_ReportGeneratorFormat.selection4,
                Selection5: this.M_GL_ReportGeneratorFormat.selection5,
                Selection6: this.M_GL_ReportGeneratorFormat.selection6,
                Selection7: this.M_GL_ReportGeneratorFormat.selection7,
                Selection8: this.M_GL_ReportGeneratorFormat.selection8,
                Selection9: this.M_GL_ReportGeneratorFormat.selection9,
                Selection10: this.M_GL_ReportGeneratorFormat.selection10,
                Remarks: this.M_GL_ReportGeneratorFormat.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ReportGeneratorFormat.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ReportGeneratorFormat = {
                tableformatcd: '',
                descs1: '',
                descs2: '',
                tablerowcd: '',
                tablecolumncd: '',
                bracketnegative: 'Y',
                accountdescs: '1',
                suppresszero: 'N',
                suppressaccountcd: 'N',
                splitreport: 'N',
                splitrowno: '',
                selection1: '',
                selection2: '',
                selection3: '',
                selection4: '',
                selection5: '',
                selection6: '',
                selection7: '',
                selection8: '',
                selection9: '',
                selection10: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
    },
    disabledEnabaledProp(){
      if(this.M_GL_ReportGeneratorFormat.splitreport=='N'){
        this.PI_splitrowno.cPageMasterSeq = true
      }else{
        this.PI_splitrowno.cPageMasterSeq = false
      }
      
    },
        M_New(){
          this.disabledEnabaledProp()
          this.$refs.ref_tableformatcd.focus()
        },
        M_Edit(){
          this.disabledEnabaledProp()
          this.$refs.ref_descs1.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

        
            data.forEach((value) => {
            dataDelete.push({
                _Message_:'',
                TableFormatCd: value.TableFormatCd,
                LastUpdateStamp: value.LastUpdateStamp
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
,                tableformatcd: record.TableFormatCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_ReportGeneratorFormat = {
                tableformatcd: data.tableformatcd,
                descs1: data.descs1,
                descs2: data.descs2,
                tablerowcd: data.tablerowcd,
                tablecolumncd: data.tablecolumncd,
                bracketnegative: data.bracketnegative,
                accountdescs: data.accountdescs,
                suppresszero: data.suppresszero,
                suppressaccountcd: data.suppressaccountcd,
                splitreport: data.splitreport,
                splitrowno: data.splitrowno,
                selection1: data.selection1,
                selection2: data.selection2,
                selection3: data.selection3,
                selection4: data.selection4,
                selection5: data.selection5,
                selection6: data.selection6,
                selection7: data.selection7,
                selection8: data.selection8,
                selection9: data.selection9,
                selection10: data.selection10,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_ReportGeneratorFormat.tablerowcdLabel = this.M_GL_ReportGeneratorFormat.tablerowcd != null ? data.tablerowcd  :'' 
                this.M_GL_ReportGeneratorFormat.tablecolumncdLabel = this.M_GL_ReportGeneratorFormat.tablecolumncd != null ? data.tablecolumncd  :'' 
                this.M_GL_ReportGeneratorFormat.splitrownoLabel = this.M_GL_ReportGeneratorFormat.splitrowno != null ? data.splitrowno  :'' 
         

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

