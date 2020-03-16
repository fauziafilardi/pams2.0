<template>
    <div>
        <b-row style="padding-top:10px; padding-right: 10px; padding-left: 20px; padding-bottom: 10px; !important; height: 1300px !important;">
            <b-col sm="4">
                <ABSButton @click="openformParameter1" icon="plus" text="Add" classButton="btnList__btnPrimary" classIcon="icon-style-1"/>
                <ABSButton @click="M_Delete" icon="trash" text="Delete" classButton="btnList__btnPrimary" classIcon="icon-style-2"/>
                <ABSButton @click="moveUpDown('U','1')" icon="arrow-up" text="Up" classButton="btnList__btnPrimary" classIcon="icon-style-1"/>
                <ABSButton @click="moveUpDown('D','1')" icon="arrow-down" text="Down" classButton="btnList__btnPrimary" classIcon="icon-style-2"/>
                <div>Position 1(Left Side)</div>
                <ABSMultiSelect
                    id="MySelect"
                    v-model="formParameter1Selected"
                    :options="formParameter1"
                    :multi="false"
                    @change="beforeGetDataBy"
                    size=10
                    class="selectCustom"
                    :disabled="listDisabled"
                    style="margin-top:5px !important;"
                />
            </b-col>
             <b-col sm="4">
                <ABSButton @click="openformParameter2" icon="plus" text="Add" classButton="btnList__btnPrimary" classIcon="icon-style-1"/>
                <ABSButton @click="M_Delete" icon="trash" text="Delete" classButton="btnList__btnPrimary" classIcon="icon-style-2"/>
                <ABSButton @click="moveUpDown('U','2')" icon="arrow-up" text="Up" classButton="btnList__btnPrimary" classIcon="icon-style-1"/>
                <ABSButton @click="moveUpDown('D','2')" icon="arrow-down" text="Down" classButton="btnList__btnPrimary" classIcon="icon-style-2"/>
                <div>Position 2(Right Side)</div>
                <ABSMultiSelect
                    v-model="formParameter2Selected"
                    :options="formParameter2"
                    :multi="false"
                    @change="beforeGetDataBy"
                    size=10
                    class="selectCustom"
                    :disabled="listDisabled"
                    style="margin-top:5px !important;"
                />
            </b-col>
            <b-col sm="4" id="col-left" class="bColMasterForm">
                <ABSButton @click="M_Save" icon="save" text="Save" classButton="btnList__btnPrimary" classIcon="icon-style-1"/>
                <ABSButton @click="M_Cancel" icon="ban" text="Cancel" classButton="btnList__btnPrimary" classIcon="icon-style-2"/>
                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                    <b-row style="padding-left:20px; padding-top:10px;">					
                        <b-col md="12" id="col-left"> <!-- table open -->
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSInputSelect2 @change="OncolumntypeChange" :prop="PI_columntype" :value="M_SS_ColumnParameter.columntype" :label="M_SS_ColumnParameter.columntypeLabel"  ref="ref_columntype"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSInputSelect2 @change="OncolumnhtmlcleanChange" :prop="PI_columnhtmlclean" :value="M_SS_ColumnParameter.columnhtmlclean" :label="M_SS_ColumnParameter.columnhtmlcleanLabel"  ref="ref_columnhtmlclean "/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSInputSelect2 @change="Oncolumnhtmlclean2Change" :prop="PI_columnhtml" :value="M_SS_ColumnParameter.columnhtmlclean" :label="M_SS_ColumnParameter.columnhtmlclean2Label"  ref="ref_columnhtmlclean2"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_detailhtml_id" :value="M_SS_ColumnParameter.detailhtml_id" :label="M_SS_ColumnParameter.detailhtml_idLabel"  ref="ref_detailhtml_id"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex @input="OnrunningcodestastusChange" :prop="PI_runningcodestastus" :value="M_SS_ColumnParameter.isrunningcd" :label="M_SS_ColumnParameter.isrunningcdLabel"  ref="ref_isrunningcd"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSInputSelectList @change="OnmoduleChange" :prop="PI_module" :value="M_SS_ColumnParameter.modulercd" :label="M_SS_ColumnParameter.modulercdLabel"  ref="ref_modulercd"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSInputSelectList @change="OnrunningcodecolumnChange" :prop="PI_runningcodecolumn" :value="M_SS_ColumnParameter.columnrcd" :label="M_SS_ColumnParameter.columnrcd"  ref="ref_columnrcd"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="4" class="lbl-col-align" style="right: -22px;">
                                    <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Row</label>
                                </b-col>
                                <b-col md="1" style="margin-left: 23px;">
                                    <ABSTextBoxOnly  :prop="PI_rowno" v-model="M_SS_ColumnParameter.rowno" ref="ref_rowno"/>
                                </b-col>
                                <b-col class="lbl-col-align" style="right: 5px;">
                                    <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Tab</label>
                                </b-col>
                                <b-col md="1" style="margin-left: 10px;right: 15px;">
                                    <ABSTextBoxOnly  :prop="PI_order" v-model="M_SS_ColumnParameter.order" ref="ref_order"/>
                                </b-col>
                                 <b-col class="lbl-col-align" style="right: 30px;">
                                    <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Pst</label>
                                </b-col>
                                <b-col md="1" style="margin-left: 1px;right: 31px;">
                                    <ABSTextBoxOnly  :prop="PI_position" v-model="M_SS_ColumnParameter.position" ref="ref_position"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_label" v-model="M_SS_ColumnParameter.label"  ref="ref_label"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_defaultvalue" v-model="M_SS_ColumnParameter.defaultvalue"  ref="ref_defaultvalue"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSTextAreaVuex :prop="PI_value" v-model="M_SS_ColumnParameter.value" ref="ref_value"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_maxlength" v-model="M_SS_ColumnParameter.maxlength"  ref="ref_maxlength"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSTextAreaVuex :prop="PI_cvalidate" v-model="M_SS_ColumnParameter.cvalidate"  ref="ref_cvalidate"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_iskey" v-model="M_SS_ColumnParameter.iskey"  ref="ref_iskey"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_required" v-model="M_SS_ColumnParameter.required"  ref="ref_required"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_isvisible" v-model="M_SS_ColumnParameter.isvisible"  ref="ref_isvisible"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_iscolumn" v-model="M_SS_ColumnParameter.iscolumn"  ref="ref_iscolumn"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_isprotect" v-model="M_SS_ColumnParameter.isprotect"  ref="ref_isprotect"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_isvisibleprop" v-model="M_SS_ColumnParameter.isvisibleprop"  ref="ref_isvisibleprop"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_isnotfound" v-model="M_SS_ColumnParameter.isnotfound"  ref="ref_isnotfound"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_isscript" v-model="M_SS_ColumnParameter.isscript"  ref="ref_isscript"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_iscolumnhtml" v-model="M_SS_ColumnParameter.iscolumnhtml"  ref="ref_iscolumnhtml"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_isparamapi" v-model="M_SS_ColumnParameter.isparamapi"  ref="ref_isparamapi"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputRadioButtonVuex :prop="PI_flagsamerowno" v-model="M_SS_ColumnParameter.flagsamerowno"  ref="ref_flagsamerowno"/>
                                </b-col>
                            </b-row>
                            <div class="div-collapse">
                                <span class="master-span-form">
                                    Lookup Code
                                </span>
                            </div>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSInputSelectList @change="OnlookupcdChange" :prop="PI_lookupcd" :value="M_SS_ColumnParameter.lookupcd" :label="M_SS_ColumnParameter.lookupcdLabel"  ref="ref_lookupcd"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="2" style="margin-left: -11px;"></b-col> 
                                <b-col md="9">
                                    <ABSinputTextVuex :prop="PI_viewname" v-model="M_SS_ColumnParameter.viewname"  ref="ref_viewname"/>
                                </b-col>
                                <b-col md="1">
                                    <b-button style="font-size: 10px;padding-top: 2px;padding-bottom: 4px;" :disabled="inputStatus=='VIEW'" @click="goModal"><font-awesome-icon icon="list" class="icon-style-1"/></b-button>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_lookupdb" v-model="M_SS_ColumnParameter.lookupdb"  ref="ref_lookupdb"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_lookuplabel" v-model="M_SS_ColumnParameter.lookuplabel"  ref="ref_lookuplabel"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSinputTextVuex :prop="PI_masterurl" v-model="M_SS_ColumnParameter.masterurl"  ref="ref_masterurl"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col md="1" ></b-col> 
                                <b-col md="11">
                                    <ABSTextAreaVuex :prop="PI_lookupinitialwhere" v-model="M_SS_ColumnParameter.lookupinitialwhere"  ref="ref_lookupinitialwhere"/>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <b-button size="sm" :disabled="inputStatus=='VIEW'" class="float-right btnModal__btnCancel" @click="M_Cancel">
                                        Cancel
                                    </b-button>
                                    <b-button size="sm" :disabled="inputStatus=='VIEW'" class="float-right btnModal__btnOK" variant="primary" @click="M_Save">
                                        OK
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-col> <!-- table close -->
                    </b-row>
                    <ABSTAnalysis :prop="PTAnalysis" />
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import MyModal from'./SS_ViewModal.vue'
export default {
    props: {PageLevel: '', TabIndex: '', data: ''}, 
    data() {
        return {
            listDisabled: false,
            tempParam: {},
            Module: "SS",
            FormType: "View",
            formParameter1Selected: null,
            formParameter1: [],
            formParameter2Selected: null,
            formParameter2:[],
            widthModal :'80%',
            paragraphs: [true],
            timer: null,
            dataModal:[],
            IEBy: {Input: '', Edit: ''},
            M_SS_ColumnParameter :{
                headerurl: '',
                columnhtml: '',
                detailhtml_id: '',
                detailhtmlclean_id: 0,
                columnhtmlclean: '',
                label: '',
                value: '',
                columntype: '',
                required: 'False',
                maxlength: '',
                position: '',
                order: '',
                masterurl: '',
                iscolumn: 'True',
                lookupcd: '',
                lookupdb: '',
                lookupinitialwhere: '',
                isnotfound: 'True',
                isvisible: 'True',
                rowno: 0,
                defaultvalue: '',
                iskey: 'False',
                isvisibleprop: 'True',
                isprotect: 'False',
                columnhtmlclean2: '',
                cvalidate: '',
                lookuplabel: '',
                isscript: 'True',
                iscolumnhtml: 'True',
                isparamapi: 'True',
                flagsamerowno: 'False',
                isrunningcd: 'False',
                modulercd: '',
                columnrcd: '',

            },
            PI_columntype: { 
                dataLookUp: null, 
                cValidate :'required', 
                cName: 'columntype', 
                cLabel: 'Column Type', 
                cLabelSize: 4, 
                cOrder: 101, 
                cKey: false, 
                cType: 'text',
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: true, 
                cOption: [
                    { label: 'String', id: 'String' },
                    { label: 'Numeric', id: 'Numeric' },
                    { label: 'Decimal', id: 'Decimal' },
                    { label: 'DateRange', id: 'DateRange' },
                    { label: 'DateTime', id: 'DateTime' },
                    { label: 'TimeRange', id: 'TimeRange' },
                    { label: 'FileUpload', id: 'FileUpload' },
                    { label: 'LookUp', id: 'LookUp' },
                    { label: 'TextArea', id: 'TextArea' },
                    { label: 'CheckBox', id: 'CheckBox' },
                    { label: 'RadioButtonList', id: 'RadioButtonList' },
                    { label: 'Dropdown', id: 'Dropdown' }],
                cMasterUrl: '' ,
                cDisplayColumn: '' , 
            }, 
            PI_columnhtmlclean: { 
                dataLookUp: { 
                    LookUpCd: 'GetUITableDetail'    , 
                    ColumnDB: 'ColumnName'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    ParamView: "" 
                    }, 
                cValidate :'required', 
                cName: 'columnhtmlclean', 
                cLabel: 'Column Html', 
                cLabelSize: 4, 
                cOrder: 102, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cDisplayColumn:'ColumnName' ,
            }, 
            PI_detailhtml_id: {
                cValidate :'', 
                cName: 'detailhtml_id', 
                cLabel: 'Detail', 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_columnhtml: { 
                dataLookUp: { 
                    LookUpCd: 'GetUITableDetail'    , 
                    ColumnDB: 'ColumnName'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    ParamView: "" 
                    }, 
                cValidate :'', 
                cName: 'columnhtmlclean2', 
                cLabel: 'Column Html 2', 
                cLabelSize: 4, 
                cOrder: 103, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_runningcodestastus: { 
                cValidate :'', 
                cName: 'runningcodestastus', 
                cId: 'rdbisrunningcd', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabel: 'Run Code Status', 
                cLabelSize: 4, 
                cOrder: 104, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_module: { 
                dataLookUp: { 
                    LookUpCd: 'GetModuleCd'    , 
                    ColumnDB: 'ModuleCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    ParamView: '' 
                        }, 
                cValidate :'', 
                cName: 'module', 
                cLabel: 'Module', 
                cLabelSize: 4, 
                cOrder: 105, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ModuleCd' ,
            },
            PI_runningcodecolumn: {
                dataLookUp: { 
                    LookUpCd: 'GetUIFieldModuleSpec'    , 
                    ColumnDB: 'ColumnSpec'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    ParamView: ''  
                        }, 
                cValidate :'', 
                cName: 'runningcodecolumn', 
                cLabel: 'Running Code Column', 
                cLabelSize: 4, 
                cOrder: 106, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ColumnSpec' , 
            }, 
            PI_rowno: { 
                cValidate :'', 
                cName: 'rowno', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 107, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_order: { 
                cValidate :'', 
                cName: 'order', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 108, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_position: { 
                cValidate :'', 
                cName: 'position', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 109, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_label: { 
                cValidate :'required', 
                cName: 'label', 
                cLabel: 'Label', 
                cLabelSize: 4, 
                cOrder: 110, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_defaultvalue: { 
                cValidate :'', 
                cName: 'defaultvalue', 
                cLabel: 'Default Value', 
                cLabelSize: 4, 
                cOrder: 111, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_value: { 
                cValidate :'', 
                cName: 'value', 
                cLabel: 'Set Value', 
                cLabelSize: 4, 
                cOrder: 112, 
                cKey: false, 
                cType: 'text',
                cRows: 4,
                cMaxRows: 4,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_maxlength: { 
                cValidate :'', 
                cName: 'maxlength', 
                cLabel: 'Max Length', 
                cLabelSize: 4, 
                cOrder: 113, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cvalidate: { 
                cValidate :'', 
                cName: 'cvalidate', 
                cLabel: 'cValidate', 
                cLabelSize: 4, 
                cOrder: 114, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_iskey: { 
                cValidate :'', 
                cName: 'iskey', 
                cLabel: 'Key', 
                cId: 'rdbiskey', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 115, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_required: { 
                cValidate :'', 
                cName: 'required', 
                cLabel: 'Required', 
                cId: 'rdbisrequired', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 116, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isvisible: { 
                cValidate :'', 
                cName: 'isvisible', 
                cLabel: 'Visible', 
                cId: 'rdbisvisible', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 117, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_iscolumn: { 
                cValidate :'', 
                cName: 'iscolumn', 
                cLabel: 'Column', 
                cId: 'rdbiscolumn', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 118, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isprotect: { 
                cValidate :'', 
                cName: 'isprotect', 
                cLabel: 'Protect', 
                cId: 'rdbisprotect', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 119, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isvisibleprop: { 
                cValidate :'', 
                cName: 'isvisibleprop', 
                cLabel: 'Visible Prop', 
                cId: 'rdbisvisibleprop', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 120, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isnotfound: { 
                cValidate :'', 
                cName: 'isnotfound', 
                cLabel: 'Not Found', 
                cId: 'rdbisnotfound', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 121, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isscript: { 
                cValidate :'', 
                cName: 'isscript', 
                cLabel: 'Script', 
                cId: 'rdbisscript', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 122, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_iscolumnhtml: { 
                cValidate :'', 
                cName: 'iscolumnhtml', 
                cLabel: 'Column Html', 
                cId: 'rdbiscoulmnhtml', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 123, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isparamapi: { 
                cValidate :'', 
                cName: 'isparamapi', 
                cLabel: 'Param API',
                cId: 'rdbisparamapi', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }],  
                cLabelSize: 4, 
                cOrder: 124, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_flagsamerowno: { 
                cValidate :'', 
                cName: 'flagsamerowno', 
                cLabel: 'Flag Same Row No', 
                cId: 'rdbflagsamerowno', 
                cRadioOptions: [{ text: 'Yes', value: 'True' }, { text: 'No', value: 'False' }], 
                cLabelSize: 4, 
                cOrder: 125, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lookupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSAll'    , 
                    ColumnDB: 'OptionLookUpCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lookupcd', 
                cLabel: 'Lookup Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 126, 
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
                cMasterUrl: 'SS/SS_LookupEntry' ,
                cDisplayColumn: 'OptionLookUpCd' ,
            }, 
            PI_viewname: { 
                cValidate :'', 
                cName: 'viewname', 
                cLabel: 'View Name', 
                cLabelSize: 4, 
                cOrder: 127, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lookupdb: { 
                cValidate :'', 
                cName: 'lookupdb', 
                cLabel: 'Lookup DB', 
                cLabelSize: 4, 
                cOrder: 128, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lookuplabel: { 
                cValidate :'', 
                cName: 'lookuplabel', 
                cLabel: 'Lookup Label', 
                cLabelSize: 4, 
                cOrder: 129, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_displaycolumn: { 
                cValidate :'', 
                cName: 'displaycolumn', 
                cLabel: 'Display Column', 
                cLabelSize: 4, 
                cOrder: 130, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_masterurl: { 
                cValidate :'', 
                cName: 'masterurl', 
                cLabel: 'Master Url', 
                cLabelSize: 4, 
                cOrder: 131, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lookupinitialwhere: { 
                cValidate :'', 
                cName: 'lookupinitialwhere', 
                cLabel: 'Initial Where', 
                cLabelSize: 4, 
                cOrder: 132, 
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
        },
    },
    methods: {
        OncolumntypeChange(data) {
            this.M_SS_ColumnParameter.columntype = data.id
            this.M_SS_ColumnParameter.columntypeLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data.id == 'Dropdown'){
                    this.PI_value.cValidate = 'required'
                    this.PI_columnhtml.cValidate = ''
                    this.PI_columnhtml.cProtect = true
                    this.PI_lookupcd.cValidate = ''
                    this.PI_lookupdb.cValidate = ''

                    this.$refs.ref_value.isRequired = true
                    this.$refs.ref_columnhtmlclean2.isRequired = false
                    this.$refs.ref_lookupcd.isRequired = false
                    this.$refs.ref_lookupdb.isRequired = false
                }
                else if( data.id == 'CheckBox'){
                    this.PI_value.cValidate = 'required'
                    this.PI_columnhtml.cValidate = ''
                    this.PI_columnhtml.cProtect = true
                    this.PI_lookupcd.cValidate = ''
                    this.PI_lookupdb.cValidate = ''

                    this.$refs.ref_value.isRequired = true
                    this.$refs.ref_columnhtmlclean2.isRequired = false
                    this.$refs.ref_lookupcd.isRequired = false
                    this.$refs.ref_lookupdb.isRequired = false
                }
                else if( data.id == 'LookUp'){
                    this.PI_value.cValidate = 'false'
                    this.PI_columnhtml.cValidate = ''
                    this.PI_columnhtml.cProtect = true
                    this.PI_lookupcd.cValidate = 'required'
                    this.PI_lookupdb.cValidate = 'required'
                    this.PI_displaycolumn.cValidate = 'required'

                    this.$refs.ref_value.isRequired = false
                    this.$refs.ref_columnhtmlclean2.isRequired = false
                    this.$refs.ref_lookupcd.isRequired = true
                    this.$refs.ref_lookupdb.isRequired = true
                    this.$refs.ref_displaycolumn.isRequired = true
                }
                else if( data.id == 'RadioButtonList'){
                    this.PI_value.cValidate = 'required'
                    this.PI_columnhtml.cValidate = ''
                    this.PI_columnhtml.cProtect = true
                    this.PI_lookupcd.cValidate = ''
                    this.PI_lookupdb.cValidate = ''

                    this.$refs.ref_value.isRequired = true
                    this.$refs.ref_columnhtmlclean2.isRequired = false
                    this.$refs.ref_lookupcd.isRequired = false
                    this.$refs.ref_lookupdb.isRequired = false
                }
                else if( data.id == 'DateRange'){
                    this.PI_value.cValidate = ''
                    this.PI_columnhtml.cValidate = 'required'
                    this.PI_columnhtml.cProtect = false
                    this.PI_lookupcd.cValidate = ''
                    this.PI_lookupdb.cValidate = ''

                    this.$refs.ref_value.isRequired = false
                    this.$refs.ref_columnhtmlclean2.isRequired = true
                    this.$refs.ref_lookupcd.isRequired = false
                    this.$refs.ref_lookupdb.isRequired = false
                }
                else if( data.id == 'TimeRange'){
                    this.PI_value.cValidate = ''
                    this.PI_columnhtml.cValidate = 'required'
                    this.PI_columnhtml.cProtect = false
                    this.PI_lookupcd.cValidate = ''
                    this.PI_lookupdb.cValidate = ''

                    this.$refs.ref_value.isRequired = false
                    this.$refs.ref_columnhtmlclean2.isRequired = true
                    this.$refs.ref_lookupcd.isRequired = false
                    this.$refs.ref_lookupdb.isRequired = false
                }
                else{
                    this.PI_value.cValidate = ''
                    this.PI_columnhtml.cValidate = ''
                    this.PI_columnhtml.cProtect = true
                    this.PI_lookupcd.cValidate = ''
                    this.PI_lookupdb.cValidate = ''

                    this.$refs.ref_value.isRequired = false
                    this.$refs.ref_columnhtmlclean2.isRequired = false
                    this.$refs.ref_lookupcd.isRequired = false
                    this.$refs.ref_lookupdb.isRequired = false
                }
            }
        })
        this.$forceUpdate()
        },
        OncolumnhtmlcleanChange(data) {
            this.M_SS_ColumnParameter.columnhtmlclean = data.id
            this.M_SS_ColumnParameter.columnhtmlcleanLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.M_SS_ColumnParameter.columnhtml = data.label
                this.M_SS_ColumnParameter.detailhtml_id = data.Detail_ID
                this.M_SS_ColumnParameter.maxlength = data.MaxLength
            }
        })
        this.$forceUpdate()
        },
        Oncolumnhtmlclean2Change(data) {
            this.M_SS_ColumnParameter.columnhtmlclean2 = data.id
            this.M_SS_ColumnParameter.columnhtmlclean2Label = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        OnrunningcodestastusChange(data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (data == 'True') {
                        this.PI_module.cValidate = 'required'
                        this.PI_module.cProtect = false
                        this.$refs.ref_modulercd.isRequired = true

                        this.PI_runningcodecolumn.cValidate = 'required'
                        this.PI_runningcodecolumn.cProtect = false
                        this.$refs.ref_columnrcd.isRequired = true
                    }
                    else {
                        this.PI_module.cValidate = ''
                        this.PI_module.cProtect = true
                        this.$refs.ref_modulercd.isRequired = false

                        this.PI_runningcodecolumn.cValidate = ''
                        this.PI_runningcodecolumn.cProtect = true
                        this.$refs.ref_columnrcd.isRequired = false
                    }
            }
        })
        this.$forceUpdate()
        },
        OnmoduleChange (data) {
            this.M_SS_ColumnParameter.modulercd = data.id
            this.M_SS_ColumnParameter.modulercdLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.PI_runningcodecolumn.dataLookUp.ParamView = "'"+data.ModuleCd+"'"
            }
        })
        this.$forceUpdate()
        },
        OnrunningcodecolumnChange (data) {
            this.M_SS_ColumnParameter.columnrcd = data.id
            this.M_SS_ColumnParameter.columnrcdLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        OnlookupcdChange (data) {
            this.M_SS_ColumnParameter.lookupcd = data.id
            this.M_SS_ColumnParameter.lookupcdLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.M_SS_ColumnParameter.lookupdb = data.ColumnDB
                this.M_SS_ColumnParameter.displaycolumn = data.DisplayLookup
                this.M_SS_ColumnParameter.viewname = data.ViewName
//{lookupcd}
            }
        })
        this.$forceUpdate()
        },
        setToolbarButton () {
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
        M_Cancel(){
            if (this.inputStatus == 'EDIT') {
                this.listDisabled = false 
                this.$store.commit('setStatus', 'VIEW')
            }
            this.M_ClearForm()
            this.listDisabled = false 
            this.$store.commit('setStatus', 'VIEW')
        },
        doDoubleClick(){
        },
        rowClicked (record, index) {
        },
        rowLink: function(url){
        },
        goModal() {
            this.getModal(this.M_SS_ColumnParameter.viewname)
        },
        paramFromParent(){
            let data = this.$store.getters.GetPage1Data

            this.M_SS_ColumnParameter.headerurl = data.Url
            this.PI_columnhtmlclean.dataLookUp.InitialWhere = "HeaderUrl='"+data.Url+"'"
            this.PI_columnhtml.dataLookUp.InitialWhere = "HeaderUrl='"+data.Url+"'"
            this.getDataFrmParameter()
            this.M_ClearForm()
        },	
        M_Post(){
        },
        M_Refresh(){
            this.getDataFrmParameter()
        },
        M_Save(){
            // console.log(this.M_SS_ColumnParameter)
            // return
            // alert(this.$store.getters.getStatus.toUpperCase())

            if (this.inputStatus == 'NEW') {
                console.log(this.M_SS_ColumnParameter);
                var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq ,
                    LineNo: 1 ,
                    HeaderUrl: this.M_SS_ColumnParameter.headerurl,
                    DetailHtml_ID: this.M_SS_ColumnParameter.detailhtml_id == '' || this.M_SS_ColumnParameter.detailhtml_id ? 0 : this.M_SS_ColumnParameter.detailhtml_id,
                    ColumnHtml: this.M_SS_ColumnParameter.columnhtml,
                    ColumnHtmlclean: this.M_SS_ColumnParameter.columnhtmlclean == '' || this.M_SS_ColumnParameter.columnhtmlclean == null ? 'NULL' : this.M_SS_ColumnParameter.columnhtmlclean,
                    Label: this.M_SS_ColumnParameter.label,
                    Value: this.M_SS_ColumnParameter.value,
                    Columntype: this.M_SS_ColumnParameter.columntype,
                    Required: this.M_SS_ColumnParameter.required === "True" ? 1 : 0 ,
                    MaxLength: this.M_SS_ColumnParameter.maxlength == '' || this.M_SS_ColumnParameter.maxlength == null ? 0 : this.M_SS_ColumnParameter.maxlength,
                    Position: this.M_SS_ColumnParameter.position,
                    Order: this.M_SS_ColumnParameter.order,
                    Masterurl: this.M_SS_ColumnParameter.masterurl,
                    IsColumn: this.M_SS_ColumnParameter.iscolumn === "True" ? 1 : 0,
                    Lookupcd: this.M_SS_ColumnParameter.lookupcd == '' || this.M_SS_ColumnParameter.lookupcd == null ? 'NULL' : this.M_SS_ColumnParameter.lookupcd,
                    Lookupdb: this.M_SS_ColumnParameter.lookupdb,
                    Lookupinitialwhere: this.M_SS_ColumnParameter.lookupinitialwhere,
                    Isnotfound: this.M_SS_ColumnParameter.isnotfound === "True" ? 1 : 0 ,
                    Isvisible: this.M_SS_ColumnParameter.isvisible === "True" ? 1 : 0 ,
                    Rowno: this.M_SS_ColumnParameter.rowno,
                    Defaultvalue: this.M_SS_ColumnParameter.defaultvalue,
                    IsKey: this.M_SS_ColumnParameter.iskey === "True" ? 1 : 0 ,
                    IsVisibleProp: this.M_SS_ColumnParameter.isvisibleprop === "True" ? 1 : 0 ,
                    Isprotect: this.M_SS_ColumnParameter.isprotect === "True" ? 1 : 0 ,
                    Columnhtmlclean2: this.M_SS_ColumnParameter.columnhtmlclean2 == '' || this.M_SS_ColumnParameter.columnhtmlclean2 == null ? 'NULL' : this.M_SS_ColumnParameter.columnhtmlclean2,
                    Cvalidate: this.M_SS_ColumnParameter.cvalidate,
                    Lookuplabel: this.M_SS_ColumnParameter.lookuplabel,
                    Isscript: this.M_SS_ColumnParameter.isscript === "True" ? 1 : 0,
                    Iscolumnhtml: this.M_SS_ColumnParameter.iscolumnhtml === "True" ? 1 : 0,
                    Isparamapi: this.M_SS_ColumnParameter.isparamapi === "True" ? 1 : 0,
                    Flagsamerowno: this.M_SS_ColumnParameter.flagsamerowno === "True" ? 1 : 0,
                    isRunningCd: this.M_SS_ColumnParameter.isrunningcd === "True" ? 1 : 0,
                    ModuleRCD: this.M_SS_ColumnParameter.modulercd == '' || this.M_SS_ColumnParameter.modulercd == null ? 'NULL' : this.M_SS_ColumnParameter.modulercd,
                    ColumnRCD: this.M_SS_ColumnParameter.columnrcd == '' || this.M_SS_ColumnParameter.columnrcd == null ? 'NULL' : this.M_SS_ColumnParameter.columnrcd,
                }

                // console.log('new', param)

                this.postJSON(this.getUrlInsert(), param)
                .then((response) => {
                    //handling Insert
                    if(response == null) {
                        return
                    }
                    this.alertSuccess(response.Message)
                    .then(() => {
                        // this.formParameter1 = [] 
                        //set Form to View (again)
                        this.$store.commit('setStatus', 'VIEW')
                        // this.formParameter1Selected jadi null semua (1,2,0)
                        this.listDisabled = false
                        this.formParameter1Selected = null
                        this.formParameter2Selected = null
                        this.getDataFrmParameter()

                    })
                })
            }
            else if (this.inputStatus == 'EDIT') {
                console.log(this.M_SS_ColumnParameter);
                var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq ,
                    LineNo: 1 ,
                    HeaderUrl: this.M_SS_ColumnParameter.headerurl,
                    DetailHtml_ID: this.M_SS_ColumnParameter.detailhtml_id == '' || this.M_SS_ColumnParameter.detailhtml_id ? 0 : this.M_SS_ColumnParameter.detailhtml_id,
                    ColumnHtml: this.M_SS_ColumnParameter.columnhtml,
                    ColumnHtmlclean: this.M_SS_ColumnParameter.columnhtmlclean == '' || this.M_SS_ColumnParameter.columnhtmlclean == null ? 'NULL' : this.M_SS_ColumnParameter.columnhtmlclean,
                    DetailHtmlClean_ID: this.M_SS_ColumnParameter.detailhtmlclean_id,
                    Label: this.M_SS_ColumnParameter.label,
                    Value: this.M_SS_ColumnParameter.value,
                    Columntype: this.M_SS_ColumnParameter.columntype,
                    Required: this.M_SS_ColumnParameter.required === "True" ? 1 : 0,
                    MaxLength: this.M_SS_ColumnParameter.maxlength == '' || this.M_SS_ColumnParameter.maxlength == null ? 0 : this.M_SS_ColumnParameter.maxlength,
                    Position: this.M_SS_ColumnParameter.position,
                    Order: this.M_SS_ColumnParameter.order,
                    Masterurl: this.M_SS_ColumnParameter.masterurl,
                    Iscolumn: this.M_SS_ColumnParameter.iscolumn === "True" ? 1 : 0,
                    Lookupcd: this.M_SS_ColumnParameter.lookupcd == '' || this.M_SS_ColumnParameter.lookupcd == null ? 'NULL' : this.M_SS_ColumnParameter.lookupcd,
                    Lookupdb: this.M_SS_ColumnParameter.lookupdb,
                    Lookupinitialwhere: this.M_SS_ColumnParameter.lookupinitialwhere,
                    Isnotfound: this.M_SS_ColumnParameter.isnotfound === "True" ? 1 : 0,
                    Isvisible: this.M_SS_ColumnParameter.isvisible === "True" ? 1 : 0,
                    Rowno: this.M_SS_ColumnParameter.rowno,
                    Defaultvalue: this.M_SS_ColumnParameter.defaultvalue,
                    Iskey: this.M_SS_ColumnParameter.iskey === "True" ? 1 : 0,
                    Isvisibleprop: this.M_SS_ColumnParameter.isvisibleprop === "True" ? 1 : 0,
                    Isprotect: this.M_SS_ColumnParameter.isprotect === "True" ? 1 : 0,
                    Columnhtmlclean2: this.M_SS_ColumnParameter.columnhtmlclean2 == '' || this.M_SS_ColumnParameter.columnhtmlclean2 == null ? 'NULL' : this.M_SS_ColumnParameter.columnhtmlclean2,
                    Cvalidate: this.M_SS_ColumnParameter.cvalidate,
                    Lookuplabel: this.M_SS_ColumnParameter.lookuplabel,
                    Isscript: this.M_SS_ColumnParameter.isscript === "True" ? 1 : 0,
                    Iscolumnhtml: this.M_SS_ColumnParameter.iscolumnhtml === "True" ? 1 : 0,
                    Isparamapi: this.M_SS_ColumnParameter.isparamapi === "True" ? 1 : 0,
                    Flagsamerowno: this.M_SS_ColumnParameter.flagsamerowno === "True" ? 1 : 0,
                    isRunningCd: this.M_SS_ColumnParameter.isrunningcd === "True" ? 1 : 0,
                    ModuleRCD: this.M_SS_ColumnParameter.modulercd == '' || this.M_SS_ColumnParameter.modulercd == null ? 'NULL' : this.M_SS_ColumnParameter.modulercd,
                    ColumnRCD: this.M_SS_ColumnParameter.columnrcd == '' || this.M_SS_ColumnParameter.columnrcd == null ? 'NULL' : this.M_SS_ColumnParameter.columnrcd,
                }

                // console.log('edit', param)

                this.postJSON(this.getUrlUpdate(), param)
                .then((response) => {
                    //handling Update
                    if(response == null) {
                        return
                    }
                    this.alertSuccess(response.Message)
                    .then(() => {
                        // this.formParameter1 = [] 
                        
                        this.$store.commit('setStatus', 'VIEW')
                        this.listDisabled = false
                        this.formParameter1Selected = null
                        this.formParameter2Selected = null
                        this.getDataFrmParameter()
                    })
                })
            }
        },
        M_Insert(){
        },
        M_Update(){
            this.$store.commit('setStatus', 'EDIT')
        },
        M_ClearForm(){
            this.M_SS_ColumnParameter = {
                headerurl: this.DataRowPage1.Url,
                columnhtml: '',
                detailhtml_id: '',
                detailhtmlclean_id: 0,
                columnhtmlclean: '',
                label: '',
                value: '',
                columntype: '',
                required: 'False',
                maxlength: '',
                position: '',
                order: '',
                masterurl: '',
                iscolumn: 'True',
                lookupcd: '',
                lookupdb: '',
                lookupinitialwhere: '',
                isnotfound: 'True',
                isvisible: 'True',
                rowno: 0,
                defaultvalue: '',
                iskey: 'False',
                isvisibleprop: 'True',
                isprotect: 'False',
                columnhtmlclean2: '',
                cvalidate: '',
                lookuplabel: '',
                isscript: 'True',
                iscolumnhtml: 'True',
                isparamapi: 'True',
                flagsamerowno: 'False',
                isrunningcd: 'False',
                modulercd: '',
                columnrcd: '',
            }
        },
        M_New(){
            let data = this.$store.getters.GetPage1Data

            this.M_SS_ColumnParameter.headerurl = data.Url
            this.$refs.ref_columntype.focus()
        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data

            this.M_SS_ColumnParameter.headerurl = data.Url
            this.$refs.ref_columntype.focus()
        },
        M_Delete(){
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 1,
                HeaderUrl: this.DataRowPage1.Url,
                DetailHtmlClean_ID: this.M_SS_ColumnParameter.detailhtmlclean_id,
            }
            
            this.postJSON( this.getUrlDelete(), param )
            .then(response => {
                if (response == null) return

                this.alertSuccess("Deleting Data Successfully")
                .then(() => {
                    this.formParameter1 = []
                    this.formParameter2 = []
                    this.formParameter1Selected = null
                    this.formParameter2Selected = null
                    
                    this.getDataFrmParameter()
                })
            })
        },
        beforeGetDataBy (record) {
            // console.log(this.formParameter0Selected)
            // console.log(this.formParameter1Selected)
            // console.log(this.formParameter2Selected)
            // this.$nextTick(() => {
                if (record.position.toString() == "1") {
                this.formParameter2Selected = null
            }
            else if (record.position == "2") {
                this.formParameter1Selected = null
            }
                this.getDataBy(record)
            // })
        },
        getDataBy (record) {
            this.tempParam = record
            
            // if (this.inputStatus != 'VIEW') return
            console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 4,	
                DetailHtmlClean_ID: record.DetailHtmlClean_ID,
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                if(response == null) return
                var value = ""

                var data = response.Data[0]
                console.log(data.detailhtml_id)
                console.log(this.M_SS_ColumnParameter.detailhtml_id)
                this.M_SS_ColumnParameter = {
                    headerurl: data.headerurl,
                    columnhtml: data.columnhtml,
                    detailhtml_id: data.detailhtml_id,
                    detailhtmlclean_id: data.detailhtmlclean_id,
                    columnhtmlclean: data.columnhtmlclean,
                    label: data.label,
                    value: data.value,
                    columntype: data.columntype,
                    required: data.required,
                    maxlength: data.maxlength,
                    position: data.position,
                    order: data.order,
                    masterurl: data.masterurl,
                    iscolumn: data.iscolumn,
                    lookupcd: data.lookupcd,
                    lookupdb: data.lookupdb,
                    lookupinitialwhere: data.lookupinitialwhere,
                    isnotfound: data.isnotfound,
                    isvisible: data.isvisible,
                    rowno: data.rowno,
                    defaultvalue: data.defaultvalue,
                    iskey: data.iskey,
                    isvisibleprop: data.isvisibleprop,
                    isprotect: data.isprotect,
                    columnhtmlclean2: data.columnhtmlclean2,
                    cvalidate: data.cvalidate,
                    lookuplabel: data.lookuplabel,
                    isscript: data.isscript,
                    iscolumnhtml: data.iscolumnhtml,
                    isparamapi: data.isparamapi,
                    flagsamerowno: data.flagsamerowno,
                    isrunningcd: data.isrunningcd,
                    modulercd: data.modulercd,
                    columnrcd: data.columnrcd,
                    displaycolumn: data.displaycolumn,
                }
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                if (data.isrunningcd=='True') {
                    this.PI_module.cValidate = 'required'
                    this.PI_module.cProtect = false
                    this.$refs.ref_modulercd.isRequired = true

                    this.PI_runningcodecolumn.cValidate = 'required'
                    this.PI_runningcodecolumn.cProtect = false
                    this.$refs.ref_columnrcd.isRequired = true
                }
                else {
                    this.PI_module.cValidate = ''
                    this.PI_module.cProtect = true
                    this.$refs.ref_modulercd.isRequired = false

                    this.PI_runningcodecolumn.cValidate = ''
                    this.PI_runningcodecolumn.cProtect = true
                    this.$refs.ref_columnrcd.isRequired = false
                }
                
                this.M_SS_ColumnParameter.lookupcdLabel = this.M_SS_ColumnParameter.lookupcd != null ? data.lookupcd :''
                this.M_SS_ColumnParameter.columnhtmlcleanLabel = this.M_SS_ColumnParameter.columnhtmlclean != null ? data.columnhtmlclean :''
                this.M_SS_ColumnParameter.columnhtmlclean2Label = this.M_SS_ColumnParameter.columnhtmlclean2 != null ? data.columnhtmlclean2 :''
                this.M_SS_ColumnParameter.modulercdLabel = this.M_SS_ColumnParameter.modulercd != null ? data.modulercd :''
                this.M_SS_ColumnParameter.columnrcdLabel = this.M_SS_ColumnParameter.columnrcd != null ? data.columnrcd :'' 
                
                // this.OncolumntypeChange(data.columntype)

                this.$store.commit('setStatus', 'EDIT')
            })
        },
        moveUpDown (direction, from) {
            var DATAS = []
            var DATAS_SELECT = []

            if (from == '1') {
                DATAS = this.formParameter1
                DATAS_SELECT = this.formParameter1Selected
                    }
            else if (from == '2') {
                DATAS = this.formParameter2
                DATAS_SELECT = this.formParameter2Selected
                }

            if (direction == 'U') {
                // console.log(DATAS)
                var idxNow = DATAS.map(x => x.value).indexOf(DATAS_SELECT.value)
                if (idxNow < 1) return
                // console.log(idxNow)

                var rownoNow, rownoUp
                rownoNow = DATAS[idxNow].rowno
                rownoUp = DATAS[idxNow-1].rowno

                DATAS[idxNow].rowno = rownoUp
                DATAS[idxNow-1].rowno = rownoNow

                var dataPost = []

                for (let x = 0 ; x < DATAS.length ; x ++) {
                    var rn
                    if (x == idxNow) {
                        rn = rownoUp
                    }
                    else if (x == (idxNow-1)) {
                        rn = rownoNow
                }
                    else {
                        rn = DATAS[x].rowno
            }
                    // console.log(DATAS[x]);
                    dataPost.push({

                        RowNo: rn,
                        DetailHtmlClean_ID: DATAS[x].value
                    })
                }

                var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq ,
                    LineNo: 4 ,
                    Data: dataPost
                }
                
                this.postJSON(this.getUrlUpdateMulti(), param)
                .then(ress => {
                    if (ress == null) return
                    this.getDataFrmParameter()
                    // console.log(this.tempParam)
                    this.getDataBy(this.tempParam)
                        })
                    }
                else if (direction == 'D') {
                var idxNow = DATAS.map(x => x.value).indexOf(DATAS_SELECT.value)
                if (idxNow < 0) return
                if (idxNow == (DATAS.length-1)) return

                var rownoNow, rownoUp
                rownoNow = DATAS[idxNow].rowno
                rownoUp = DATAS[idxNow+1].rowno

                DATAS[idxNow].rowno = rownoUp
                DATAS[idxNow+1].rowno = rownoNow

                var dataPost = []

                for (let x = 0 ; x < DATAS.length ; x ++) {
                    var rn
                    if (x == idxNow) {
                        rn = rownoUp
                    }
                    else if (x == (idxNow+1)) {
                        rn = rownoNow
                    }
                    else {
                        rn = DATAS[x].rowno
                    }
                    // console.log(DATAS[x].value)
                    dataPost.push({
                        RowNo: rn,
                        DetailHtmlClean_ID: DATAS[x].value
                        })
                    }

                var param = {
                    OptionSeq: this.getOptionSeq().OptionSeq ,
                    LineNo: 4 ,
                    Data: dataPost
                }
                
                this.postJSON(this.getUrlUpdateMulti(), param)
                .then(ress => {
                    if (ress == null) return
                    this.getDataFrmParameter()
                    // console.log(this.tempParam)
                    this.getDataBy(this.tempParam)
                })
            }
        },
        getModal(data){
            // console.log(JSON.stringify(data,null,2))
            this.$modal.show(MyModal, 
                { //Props passing data
                    dataModal:data
                },
                {//Property
                    height: '80%',
                    width : '50%',
                    minWidth: "300",
                    minHeight: "500",
                    draggable: true,
                    resizable: true,
                    reset: true
                },
                {// event listener
                    'before-open': (event) => { console.log('this will be called before the modal before Oepn',event); },
                    'before-close': (event) => { console.log('this will be called before the modal before closes',event); },
                    'opened': (event) => { console.log('this will be called before the modal opended',event); },
                    'closed': (event) => { console.log('this will be called before the modal closed',event); },
                }
            )
            
        },
        getDataModal(record){
          var param = {
                OptionSeq:this.getOptionSeq().OptionSeq,
                UserId:this.getDataUser().UserId,
                PortfolioCd:this.getDataUser().PortfolioCd,              
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                view: this.M_SS_ColumnParameter.viewname,
                LineNo:5,
                InitialWhere:"",
                SortField:'',
                // ParamView: "'"+this.M_SS_ReportParameterD.viewname+"'"
            }
              this.postJSON( this.getUrlById(), param).then(response => {
                  // response from API
                  if (response == null) return
                  this.dataModal = response.Data
              })
        },
        openformParameter1(){
            // this.FormType = 'FORM'
            this.$store.commit('setStatus', 'NEW')
            this.M_ClearForm()
            this.M_SS_ColumnParameter.position = "1"
            this.listDisabled = true
        },
        openformParameter2(){
            // this.FormType = 'FORM'
            this.$store.commit('setStatus', 'NEW')
            this.M_ClearForm()
            this.listDisabled = true
            this.M_SS_ColumnParameter.position = "2"
        },
        getDataFrmParameter(){
            var param = {
                OptionSeqV2: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd, 
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: 1,
                HeaderUrl: this.DataRowPage1.Url,
                InitialWhere: '',
                SortField: '',
                ParamView: ''
            }
            this.postJSON( this.getUrlById(), param )
            .then( response => {
                if(response == null) return
                var data = response.Data 
                // console.log(data)
                this.formParameter1 = []
                this.formParameter2 = []

                if(data.length > 0){
                    this.$nextTick(() => {
                        data.forEach((dt, idx) => {
                            // console.log(dt)
                            // dt.position.filters()f
                            // if(dt.paramname && dt.paramname != ''){
                                if (dt.position.toString() == '1') {
                                    this.formParameter1.push({
                                        value: dt.detailhtmlclean_id,
                                        key: dt.columnhtmlclean, 
                                        HeaderUrl: dt.headerurl,
                                        DetailHtmlClean_ID: dt.detailhtmlclean_id,
                                        position: dt.position,
                                        rowno: dt.rowno
                                    })
                                }
                                else if (dt.position.toString() == '2') {
                                    // console.log(dt)
                                    this.formParameter2.push({
                                        value: dt.detailhtmlclean_id,
                                        key:dt.columnhtmlclean,
                                        HeaderUrl: dt.headerurl,
                                        DetailHtmlClean_ID: dt.detailhtmlclean_id,
                                        position: dt.position,
                                        rowno: dt.rowno
                                    })
                                }
                            // }
                        })
                    })
                }
            })
        }
    },
    beforeCreate: function () {
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