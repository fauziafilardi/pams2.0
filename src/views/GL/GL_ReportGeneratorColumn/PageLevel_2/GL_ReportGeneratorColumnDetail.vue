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
                                        <ABSinputTextVuex :prop="PI_columnno" v-model="M_GL_ReportGeneratorColumnDetail.columnno"  ref="ref_columnno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OncolumntypeChange" :prop="PI_columntype" v-model="M_GL_ReportGeneratorColumnDetail.columntype"  ref="ref_columntype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs1" v-model="M_GL_ReportGeneratorColumnDetail.descs1"  ref="ref_descs1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs2" v-model="M_GL_ReportGeneratorColumnDetail.descs2"  ref="ref_descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs3" v-model="M_GL_ReportGeneratorColumnDetail.descs3"  ref="ref_descs3"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs4" v-model="M_GL_ReportGeneratorColumnDetail.descs4"  ref="ref_descs4"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_columndatatype" v-model="M_GL_ReportGeneratorColumnDetail.columndatatype"  ref="ref_columndatatype"/> -->
                                        <ABSInputSelect2 @change="OncolumndatatypeChange" :prop="PI_columndatatype" :value="M_GL_ReportGeneratorColumnDetail.columndatatype" :label="M_GL_ReportGeneratorColumnDetail.columndatatypeLabel" ref="ref_columndatatype"/>

                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_ledgersource" v-model="M_GL_ReportGeneratorColumnDetail.ledgersource"  ref="ref_ledgersource"/> -->
                                        <ABSInputSelect2 @change="OnledgersourceChange" :prop="PI_ledgersource" :value="M_GL_ReportGeneratorColumnDetail.ledgersource" :label="M_GL_ReportGeneratorColumnDetail.ledgersourceLabel" ref="ref_ledgersource"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_columnmathematic" v-model="M_GL_ReportGeneratorColumnDetail.columnmathematic"  ref="ref_columnmathematic"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnsuppresscolumnChange" :prop="PI_suppresscolumn" v-model="M_GL_ReportGeneratorColumnDetail.suppresscolumn"  ref="ref_suppresscolumn" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntrxamtChange" :prop="PI_trxamt" v-model="M_GL_ReportGeneratorColumnDetail.trxamt"  ref="ref_trxamt" />
                                      </b-col>
                                    </b-row>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <!-- <ABSinputTextVuex :prop="PI_selection1" v-model="M_GL_ReportGeneratorColumnDetail.selection1"  ref="ref_selection1"/> -->
                                        <ABSInputSelect2 @change="Onselection1Change" :prop="PI_selection1" :value="M_GL_ReportGeneratorColumnDetail.selection1" :label="M_GL_ReportGeneratorColumnDetail.selection1Label" ref="ref_selection1"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection1Change" :prop="PI_fromselection1" :value="M_GL_ReportGeneratorColumnDetail.fromselection1" :label="M_GL_ReportGeneratorColumnDetail.fromselection1Label" ref="ref_fromselection1"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection1Change" :prop="PI_toselection1" :value="M_GL_ReportGeneratorColumnDetail.toselection1" :label="M_GL_ReportGeneratorColumnDetail.toselection1Label" ref="ref_toselection1"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection2Change" :prop="PI_selection2" :value="M_GL_ReportGeneratorColumnDetail.selection2" :label="M_GL_ReportGeneratorColumnDetail.selection2Label" ref="ref_selection2"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection2Change" :prop="PI_fromselection2" :value="M_GL_ReportGeneratorColumnDetail.fromselection2" :label="M_GL_ReportGeneratorColumnDetail.fromselection2Label" ref="ref_fromselection2"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection2Change" :prop="PI_toselection2" :value="M_GL_ReportGeneratorColumnDetail.toselection2" :label="M_GL_ReportGeneratorColumnDetail.toselection2Label" ref="ref_toselection2"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection3Change" :prop="PI_selection3" :value="M_GL_ReportGeneratorColumnDetail.selection3" :label="M_GL_ReportGeneratorColumnDetail.selection3Label" ref="ref_selection3"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection3Change" :prop="PI_fromselection3" :value="M_GL_ReportGeneratorColumnDetail.fromselection3" :label="M_GL_ReportGeneratorColumnDetail.fromselection3Label" ref="ref_fromselection3"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection3Change" :prop="PI_toselection3" :value="M_GL_ReportGeneratorColumnDetail.toselection3" :label="M_GL_ReportGeneratorColumnDetail.toselection3Label" ref="ref_toselection3"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection4Change" :prop="PI_selection4" :value="M_GL_ReportGeneratorColumnDetail.selection4" :label="M_GL_ReportGeneratorColumnDetail.selection4Label" ref="ref_selection4"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection4Change" :prop="PI_fromselection4" :value="M_GL_ReportGeneratorColumnDetail.fromselection4" :label="M_GL_ReportGeneratorColumnDetail.fromselection4Label" ref="ref_fromselection4"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection4Change" :prop="PI_toselection4" :value="M_GL_ReportGeneratorColumnDetail.toselection4" :label="M_GL_ReportGeneratorColumnDetail.toselection4Label" ref="ref_toselection4"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection5Change" :prop="PI_selection5" :value="M_GL_ReportGeneratorColumnDetail.selection5" :label="M_GL_ReportGeneratorColumnDetail.selection5Label" ref="ref_selection5"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection5Change" :prop="PI_fromselection5" :value="M_GL_ReportGeneratorColumnDetail.fromselection5" :label="M_GL_ReportGeneratorColumnDetail.fromselection5Label" ref="ref_fromselection5"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection5Change" :prop="PI_toselection5" :value="M_GL_ReportGeneratorColumnDetail.toselection5" :label="M_GL_ReportGeneratorColumnDetail.toselection5Label" ref="ref_toselection5"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection6Change" :prop="PI_selection6" :value="M_GL_ReportGeneratorColumnDetail.selection6" :label="M_GL_ReportGeneratorColumnDetail.selection6Label" ref="ref_selection6"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection6Change" :prop="PI_fromselection6" :value="M_GL_ReportGeneratorColumnDetail.fromselection6" :label="M_GL_ReportGeneratorColumnDetail.fromselection6Label" ref="ref_fromselection6"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection6Change" :prop="PI_toselection6" :value="M_GL_ReportGeneratorColumnDetail.toselection6" :label="M_GL_ReportGeneratorColumnDetail.toselection6Label" ref="ref_toselection6"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection7Change" :prop="PI_selection7" :value="M_GL_ReportGeneratorColumnDetail.selection7" :label="M_GL_ReportGeneratorColumnDetail.selection7Label" ref="ref_selection7"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection7Change" :prop="PI_fromselection7" :value="M_GL_ReportGeneratorColumnDetail.fromselection7" :label="M_GL_ReportGeneratorColumnDetail.fromselection7Label" ref="ref_fromselection7"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection7Change" :prop="PI_toselection7" :value="M_GL_ReportGeneratorColumnDetail.toselection7" :label="M_GL_ReportGeneratorColumnDetail.toselection7Label" ref="ref_toselection7"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection8Change" :prop="PI_selection8" :value="M_GL_ReportGeneratorColumnDetail.selection8" :label="M_GL_ReportGeneratorColumnDetail.selection8Label" ref="ref_selection8"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection8Change" :prop="PI_fromselection8" :value="M_GL_ReportGeneratorColumnDetail.fromselection8" :label="M_GL_ReportGeneratorColumnDetail.fromselection8Label" ref="ref_fromselection8"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection8Change" :prop="PI_toselection8" :value="M_GL_ReportGeneratorColumnDetail.toselection8" :label="M_GL_ReportGeneratorColumnDetail.toselection8Label" ref="ref_toselection8"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection9Change" :prop="PI_selection9" :value="M_GL_ReportGeneratorColumnDetail.selection9" :label="M_GL_ReportGeneratorColumnDetail.selection9Label" ref="ref_selection9"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection9Change" :prop="PI_fromselection9" :value="M_GL_ReportGeneratorColumnDetail.fromselection9" :label="M_GL_ReportGeneratorColumnDetail.fromselection9Label" ref="ref_fromselection9"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection9Change" :prop="PI_toselection9" :value="M_GL_ReportGeneratorColumnDetail.toselection9" :label="M_GL_ReportGeneratorColumnDetail.toselection9Label" ref="ref_toselection9"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSInputSelect2 @change="Onselection10Change" :prop="PI_selection10" :value="M_GL_ReportGeneratorColumnDetail.selection10" :label="M_GL_ReportGeneratorColumnDetail.selection10Label" ref="ref_selection10"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Onfromselection10Change" :prop="PI_fromselection10" :value="M_GL_ReportGeneratorColumnDetail.fromselection10" :label="M_GL_ReportGeneratorColumnDetail.fromselection10Label" ref="ref_fromselection10"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSInputSelectList @change="Ontoselection10Change" :prop="PI_toselection10" :value="M_GL_ReportGeneratorColumnDetail.toselection10" :label="M_GL_ReportGeneratorColumnDetail.toselection10Label" ref="ref_toselection10"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_ReportGeneratorColumnDetail.remarks"  ref="ref_remarks" />
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
                initialWhere:"TableColumnCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ReportGeneratorColumnDetail :{
                tablecolumncd: '',
                columnno: '0',
                columntype: '',
                descs1: '',
                descs2: '',
                descs3: '',
                descs4: '',
                columndatatype: '',
                ledgersource: '',
                columnmathematic: '',
                suppresscolumn: '',
                trxamt: '',
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
                fromselection1: '',
                fromselection2: '',
                fromselection3: '',
                fromselection4: '',
                fromselection5: '',
                fromselection6: '',
                fromselection7: '',
                fromselection8: '',
                fromselection9: '',
                fromselection10: '',
                toselection1: '',
                toselection2: '',
                toselection3: '',
                toselection4: '',
                toselection5: '',
                toselection6: '',
                toselection7: '',
                toselection8: '',
                toselection9: '',
                toselection10: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_columnno: { 
                cValidate :'required|max:12', 
                cName: 'columnno', 
                cLabel: 'Column No ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_columntype: { 
                cValidate :'', 
                cName: 'columntype', 
                cId: 'rdbcolumntype', 
                cRadioOptions: [{ text: 'D', value: 'D' }, { text: 'C', value: 'C' }, { text: 'M', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'Column Type', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs1: { 
                cValidate :'max:60', 
                cName: 'descs1', 
                cLabel: 'Description 1', 
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
            PI_descs2: { 
                cValidate :'max:60', 
                cName: 'descs2', 
                cLabel: 'Description 2', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs3: { 
                cValidate :'max:60', 
                cName: 'descs3', 
                cLabel: 'Description 3', 
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
            PI_descs4: { 
                cValidate :'max:60', 
                cName: 'descs4', 
                cLabel: 'Description 4', 
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
            // PI_columndatatype: { 
            //     cValidate :'required|max:2', 
            //     cName: 'columndatatype', 
            //     cLabel: 'Column Data Type ', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_columndatatype: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'columndatatype', 
                cLabel: 'Column Data Type', 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cOption: [
                { label: 'BA', id: 'BA' },{ label: 'BH', id: 'BH' },{ label: 'BE', id: 'BE' },
                { label: 'PA', id: 'PA' },{ label: 'PH', id: 'PH' },{ label: 'PE', id: 'PE' },
                { label: 'YA', id: 'YA' },{ label: 'YH', id: 'YH' },{ label: 'YE', id: 'YE' },
                { label: 'S', id: 'S' },{ label: 'SA', id: 'SA' },{ label: 'SB', id: 'SB' },{ label: 'SC', id: 'SC' },{ label: 'SD', id: 'SD' },{ label: 'SE', id: 'SE' },{ label: 'SF', id: 'SF' },{ label: 'SG', id: 'SG' },{ label: 'SH', id: 'SH' },{ label: 'SI', id: 'SI' },{ label: 'SJ', id: 'SJ' },{ label: 'SK', id: 'SK' },{ label: 'SL', id: 'SL' },
                { label: 'Q', id: 'Q' },{ label: 'Q1', id: 'Q1' },{ label: 'Q2', id: 'Q2' },{ label: 'Q3', id: 'Q3' },{ label: 'Q4', id: 'Q4' },
                { label: 'H', id: 'H' },{ label: 'H1', id: 'H1' },{ label: 'H2', id: 'H2' },{ label: 'A', id: 'A' },{ label: 'D', id: 'D' }
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },             
            // PI_ledgersource: { 
            //     cValidate :'required|max:2', 
            //     cName: 'ledgersource', 
            //     cLabel: 'Ledger Source ', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_ledgersource: { 
                dataLookUp: null, 
                cValidate :'required', 
                cName: 'ledgersource', 
                cLabel: 'Ledger Source', 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cOption: [
                { label: 'A | Active', id: 'A' },
                { label: 'B | Budget', id: 'B' },
                { label: 'L | Budget', id: 'L' },
                { label: 'CD | CashFlow', id: 'CF' }                
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_columnmathematic: { 
                cValidate :'', 
                cName: 'columnmathematic', 
                cLabel: 'Column Mathematic', 
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
            PI_suppresscolumn: { 
                cValidate :'', 
                cName: 'suppresscolumn', 
                cId: 'rdbsuppresscolumn', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Suppress Column', 
                cLabelSize: 4, 
                cOrder: 13, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cId: 'rdbtrxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Other Amount', 
                cLabelSize: 4, 
                cOrder: 14, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_selection1: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection1', 
                cLabel: 'Selection 1', 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_fromselection1: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection1', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection1: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection1', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection2: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection2', 
                cLabel: 'Selection 2', 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_fromselection2: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection2', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 19, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection2: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection2', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 20, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection3: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection3', 
                cLabel: 'Selection 3', 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_fromselection3: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection3', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 22, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection3: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection3', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection4: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection4', 
                cLabel: 'Selection 4', 
                cLabelSize: 4, 
                cOrder: 24, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_fromselection4: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection4', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 25, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection4: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection4', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 26, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection5: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection5', 
                cLabel: 'Selection 5', 
                cLabelSize: 4, 
                cOrder: 27, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            },
            PI_fromselection5: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection5', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 28, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection5: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection5', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 29, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection6: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection6', 
                cLabel: 'Selection 6', 
                cLabelSize: 4, 
                cOrder: 30, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_fromselection6: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection6', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 31, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection6: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection6', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 32, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection7: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection7', 
                cLabel: 'Selection 7', 
                cLabelSize: 4, 
                cOrder: 33, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_fromselection7: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection7', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 34, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection7: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection7', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 35, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection8: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection8', 
                cLabel: 'Selection 8', 
                cLabelSize: 4, 
                cOrder: 36, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_fromselection8: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection8', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 37, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection8: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection8', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 38, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection9: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection9', 
                cLabel: 'Selection 9', 
                cLabelSize: 4, 
                cOrder: 39, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_fromselection9: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection9', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 40, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection9: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection9', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 41, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_selection10: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'selection10', 
                cLabel: 'Selection 10', 
                cLabelSize: 4, 
                cOrder: 42, 
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
                { label: 'D', id: 'D' },
                { label: 'C', id: 'C' },
                { label: 'B', id: 'B' },
                ],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_fromselection10: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromselection10', 
                cLabel: 'From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 43, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_toselection10: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toselection10', 
                cLabel: 'To', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 44, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:45, 
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
        SetLookup(dataSelection,refFrom,refTo){    
            console.log(dataSelection)        
            console.log(refFrom)        
            console.log(refTo)        
            switch(dataSelection){
                case 'C':
                case 'D':
                        this.$refs[refFrom].prop.cProtect = true
                        this.$refs[refTo].prop.cProtect = true
                    break;
                case 'TT':
                        this.$refs[refFrom].prop.cProtect = false
                        this.$refs[refTo].prop.cProtect = false

                        this.$refs[refFrom].prop.dataLookUp.InitialWhere = "ModuleCd='GL'"
                        this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupCMTransTypeMaster"
                        this.$refs[refFrom].prop.dataLookUp.ColumnDB = "TrxType"    
                        this.$refs[refFrom].prop.dataLookUp.SourceField = "TransactionType=TrxType,Descs,TimeEdit"   
                        this.$refs[refFrom].prop.dataLookUp.DisplayLookup = "TransactionType,Descs"    
                        this.$refs[refFrom].prop.cDisplayColumn = "TransactionType,Descs"                

                        this.$refs[refTo].prop.dataLookUp.InitialWhere = "ModuleCd='GL'"
                        this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupCMTransTypeMaster"
                        this.$refs[refTo].prop.dataLookUp.ColumnDB = "TrxType"
                        this.$refs[refTo].prop.dataLookUp.SourceField = "TransactionType=TrxType,Descs,TimeEdit"   
                        this.$refs[refTo].prop.dataLookUp.DisplayLookup = "TransactionType,Descs"    
                        this.$refs[refTo].prop.cDisplayColumn = "TransactionType,Descs"  
                    break;
                case 'CC':
                        this.$refs[refFrom].prop.cProtect = false
                        this.$refs[refTo].prop.cProtect = false

                        this.$refs[refFrom].prop.dataLookUp.InitialWhere = ""
                        this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupCMCurrency"
                        this.$refs[refFrom].prop.dataLookUp.ColumnDB = "CurrencyCd"
                        this.$refs[refFrom].prop.cDisplayColumn = "CurrencyCd,Descs"  

                        this.$refs[refTo].prop.dataLookUp.InitialWhere = ""
                        this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupCMCurrency"
                        this.$refs[refTo].prop.dataLookUp.ColumnDB = "CurrencyCd"
                        this.$refs[refTo].prop.cDisplayColumn = "CurrencyCd,Descs"  
                        
                        
                    break;
                case 'B':
                        this.$refs[refFrom].prop.cProtect = false
                        this.$refs[refTo].prop.cProtect = false

                        this.$refs[refFrom].prop.dataLookUp.InitialWhere = ""
                        this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupCBBank"
                        this.$refs[refFrom].prop.dataLookUp.ColumnDB = "BankCd"
                        this.$refs[refFrom].prop.cDisplayColumn = "BankCd,BankName"  

                        this.$refs[refTo].prop.dataLookUp.InitialWhere = ""
                        this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupCBBank"
                        this.$refs[refTo].prop.dataLookUp.ColumnDB = "BankCd"
                        this.$refs[refTo].prop.cDisplayColumn = "BankCd,BankName"  
                    break;
                default:


                        if(dataSelection.substring(0, 1) == 'T' && dataSelection.length > 1){
                            var Tint = dataSelection.substring(1, 2)
                            if(Tint==parseInt(Tint,10)){
                                this.$refs[refFrom].prop.cProtect = false
                                this.$refs[refTo].prop.cProtect = false
                                this.$refs[refFrom].prop.dataLookUp.InitialWhere = "TrxAnalysisCategory='"+dataSelection+"'"
                                this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupGLTrxAnalysisCd"
                                this.$refs[refFrom].prop.dataLookUp.ColumnDB = "TrxAnalysisCd"
                                this.$refs[refFrom].prop.cDisplayColumn = "Transaction_Analysis_Code,Descs"  

                                this.$refs[refTo].prop.dataLookUp.InitialWhere = "TrxAnalysisCategory='"+dataSelection+"'"
                                this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupGLTrxAnalysisCd"
                                this.$refs[refTo].prop.dataLookUp.ColumnDB = "TrxAnalysisCd"
                                this.$refs[refTo].prop.cDisplayColumn = "Transaction_Analysis_Code,Descs"  
                            }else{
                                this.$refs[refFrom].prop.cProtect = true
                                this.$refs[refTo].prop.cProtect = true
                            }
                        }else if(dataSelection.substring(0, 1) == 'A' && dataSelection.length > 1){
                             var Tint = dataSelection.substring(1, 2)
                            if(Tint==parseInt(Tint,10)){
                                this.$refs[refFrom].prop.cProtect = false
                                this.$refs[refTo].prop.cProtect = false
                                this.$refs[refFrom].prop.dataLookUp.InitialWhere = "AccountAnalysisCategory='"+dataSelection+"'"
                                this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupGLAccountAnalysis"
                                this.$refs[refFrom].prop.dataLookUp.ColumnDB = "AccountAnalysisCd"
                                this.$refs[refFrom].prop.cDisplayColumn = "AccountAnalysisCd,Descs"  

                                this.$refs[refTo].prop.dataLookUp.InitialWhere = "AccountAnalysisCategory='"+dataSelection+"'"
                                this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupGLAccountAnalysis"
                                this.$refs[refTo].prop.dataLookUp.ColumnDB = "AccountAnalysisCd"
                                this.$refs[refTo].prop.cDisplayColumn = "AccountAnalysisCd,Descs"  
                            }else{
                                this.$refs[refFrom].prop.cProtect = true
                                this.$refs[refTo].prop.cProtect = true
                            }
                        }
                        else{
                            this.$refs[refFrom].prop.cProtect = true
                            this.$refs[refTo].prop.cProtect = true
                        }
                        
                    break;
            }
           

        },
        Onselection1Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection1 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection1Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection1','ref_toselection1')
                    }
                })
        this.$forceUpdate()
        },
        Onselection2Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection2 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection2Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection2','ref_toselection2')
                    }
                })
        this.$forceUpdate()
        },
        Onselection3Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection3 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection3Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection3','ref_toselection3')
                    }
                })
        this.$forceUpdate()
        },
        Onselection4Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection4 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection4Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection4','ref_toselection4')
                    }
                })
        this.$forceUpdate()
        },
        Onselection5Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection5 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection5Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection5','ref_toselection5')
                    }
                })
        this.$forceUpdate()
        },
        Onselection6Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection6 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection6Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection6','ref_toselection6')
                    }
                })
        this.$forceUpdate()
        },
        Onselection7Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection7 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection7Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection7','ref_toselection7')
                    }
                })
        this.$forceUpdate()
        },
        Onselection8Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection8 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection8Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection8','ref_toselection8')
                    }
                })
        this.$forceUpdate()
        },
        Onselection9Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection9 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection9Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection9','ref_toselection9')
                    }
                })
        this.$forceUpdate()
        },
        Onselection10Change(data){
        this.$nextTick(() => {
                    this.M_GL_ReportGeneratorColumnDetail.selection10 = data.id
                    this.M_GL_ReportGeneratorColumnDetail.selection10Label = data.label
                    if (this.inputStatus != "VIEW") {
                        console.log(data.id)
                        this.SetLookup(data.id,'ref_fromselection10','ref_toselection10')
                    }
                })
        this.$forceUpdate()
        },
        OncolumntypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.disabledEnabaledProp()
//{columntype}
            }
        })
        this.$forceUpdate()
        },
        OnsuppresscolumnChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{suppresscolumn}
            }
        })
        this.$forceUpdate()
        },
        OntrxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxamt}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection1 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection1Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection1}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection1Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection1 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection1Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection1}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection2 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection2Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection2}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection2Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection2 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection2Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection2}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection3Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection3 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection3Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection3}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection3Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection3 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection3Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection3}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection4Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection4 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection4Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection4}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection4Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection4 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection4Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection4}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection5Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection5 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection5Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection5}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection5Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection5 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection5Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection5}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection6Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection6 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection6Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection6}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection6Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection6 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection6Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection6}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection7Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection7 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection7Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection7}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection7Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection7 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection7Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection7}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection8Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection8 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection8Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection8}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection8Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection8 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection8Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection8}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection9Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection9 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection9Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection9}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection9Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection9 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection9Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection9}
            }
        })
        this.$forceUpdate()
        },
        Onfromselection10Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.fromselection10 = data.id
            this.M_GL_ReportGeneratorColumnDetail.fromselection10Label = data.label
            if (this.inputStatus != "VIEW") {
//{fromselection10}
            }
        })
        this.$forceUpdate()
        },
        Ontoselection10Change (data) {
        this.$nextTick(() => {
            this.M_GL_ReportGeneratorColumnDetail.toselection10 = data.id
            this.M_GL_ReportGeneratorColumnDetail.toselection10Label = data.label
            if (this.inputStatus != "VIEW") {
//{toselection10}
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
            this.M_GL_ReportGeneratorColumnDetail.tablecolumncd = data.TableColumnCd 
            this.propList.initialWhere =" TableColumnCd = '" + data.TableColumnCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
        if (this.M_GL_ReportGeneratorColumnDetail.ledgersource == "")
             { this.M_GL_ReportGeneratorColumnDetail.ledgersource = "A" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TableColumnCd: this.M_GL_ReportGeneratorColumnDetail.tablecolumncd,
                ColumnNo: this.M_GL_ReportGeneratorColumnDetail.columnno,
                ColumnType: this.M_GL_ReportGeneratorColumnDetail.columntype,
                Descs1: this.M_GL_ReportGeneratorColumnDetail.descs1,
                Descs2: this.M_GL_ReportGeneratorColumnDetail.descs2,
                Descs3: this.M_GL_ReportGeneratorColumnDetail.descs3,
                Descs4: this.M_GL_ReportGeneratorColumnDetail.descs4,
                ColumnDataType: this.M_GL_ReportGeneratorColumnDetail.columndatatype,
                LedgerSource: this.M_GL_ReportGeneratorColumnDetail.ledgersource,
                ColumnMathematic: this.M_GL_ReportGeneratorColumnDetail.columnmathematic,
                SuppressColumn: this.M_GL_ReportGeneratorColumnDetail.suppresscolumn,
                TrxAmt: this.M_GL_ReportGeneratorColumnDetail.trxamt,
                Selection1: this.M_GL_ReportGeneratorColumnDetail.selection1,
                Selection2: this.M_GL_ReportGeneratorColumnDetail.selection2,
                Selection3: this.M_GL_ReportGeneratorColumnDetail.selection3,
                Selection4: this.M_GL_ReportGeneratorColumnDetail.selection4,
                Selection5: this.M_GL_ReportGeneratorColumnDetail.selection5,
                Selection6: this.M_GL_ReportGeneratorColumnDetail.selection6,
                Selection7: this.M_GL_ReportGeneratorColumnDetail.selection7,
                Selection8: this.M_GL_ReportGeneratorColumnDetail.selection8,
                Selection9: this.M_GL_ReportGeneratorColumnDetail.selection9,
                Selection10: this.M_GL_ReportGeneratorColumnDetail.selection10,
                FromSelection1: this.M_GL_ReportGeneratorColumnDetail.fromselection1 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection1 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection1 ,
                FromSelection2: this.M_GL_ReportGeneratorColumnDetail.fromselection2 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection2 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection2 ,
                FromSelection3: this.M_GL_ReportGeneratorColumnDetail.fromselection3 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection3 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection3 ,
                FromSelection4: this.M_GL_ReportGeneratorColumnDetail.fromselection4 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection4 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection4 ,
                FromSelection5: this.M_GL_ReportGeneratorColumnDetail.fromselection5 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection5 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection5 ,
                FromSelection6: this.M_GL_ReportGeneratorColumnDetail.fromselection6 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection6 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection6 ,
                FromSelection7: this.M_GL_ReportGeneratorColumnDetail.fromselection7 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection7 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection7 ,
                FromSelection8: this.M_GL_ReportGeneratorColumnDetail.fromselection8 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection8 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection8 ,
                FromSelection9: this.M_GL_ReportGeneratorColumnDetail.fromselection9 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection9 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection9 ,
                FromSelection10: this.M_GL_ReportGeneratorColumnDetail.fromselection10 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection10 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection10 ,
                ToSelection1: this.M_GL_ReportGeneratorColumnDetail.toselection1 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection1 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection1 ,
                ToSelection2: this.M_GL_ReportGeneratorColumnDetail.toselection2 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection2 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection2 ,
                ToSelection3: this.M_GL_ReportGeneratorColumnDetail.toselection3 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection3 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection3 ,
                ToSelection4: this.M_GL_ReportGeneratorColumnDetail.toselection4 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection4 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection4 ,
                ToSelection5: this.M_GL_ReportGeneratorColumnDetail.toselection5 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection5 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection5 ,
                ToSelection6: this.M_GL_ReportGeneratorColumnDetail.toselection6 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection6 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection6 ,
                ToSelection7: this.M_GL_ReportGeneratorColumnDetail.toselection7 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection7 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection7 ,
                ToSelection8: this.M_GL_ReportGeneratorColumnDetail.toselection8 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection8 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection8 ,
                ToSelection9: this.M_GL_ReportGeneratorColumnDetail.toselection9 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection9 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection9 ,
                ToSelection10: this.M_GL_ReportGeneratorColumnDetail.toselection10 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection10 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection10 ,
                Remarks: this.M_GL_ReportGeneratorColumnDetail.remarks,
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
        if (this.M_GL_ReportGeneratorColumnDetail.ledgersource == "")
             { this.M_GL_ReportGeneratorColumnDetail.ledgersource = "A" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TableColumnCd: this.M_GL_ReportGeneratorColumnDetail.tablecolumncd,
                ColumnNo: this.M_GL_ReportGeneratorColumnDetail.columnno,
                ColumnType: this.M_GL_ReportGeneratorColumnDetail.columntype,
                Descs1: this.M_GL_ReportGeneratorColumnDetail.descs1,
                Descs2: this.M_GL_ReportGeneratorColumnDetail.descs2,
                Descs3: this.M_GL_ReportGeneratorColumnDetail.descs3,
                Descs4: this.M_GL_ReportGeneratorColumnDetail.descs4,
                ColumnDataType: this.M_GL_ReportGeneratorColumnDetail.columndatatype,
                LedgerSource: this.M_GL_ReportGeneratorColumnDetail.ledgersource,
                ColumnMathematic: this.M_GL_ReportGeneratorColumnDetail.columnmathematic,
                SuppressColumn: this.M_GL_ReportGeneratorColumnDetail.suppresscolumn,
                TrxAmt: this.M_GL_ReportGeneratorColumnDetail.trxamt,
                Selection1: this.M_GL_ReportGeneratorColumnDetail.selection1,
                Selection2: this.M_GL_ReportGeneratorColumnDetail.selection2,
                Selection3: this.M_GL_ReportGeneratorColumnDetail.selection3,
                Selection4: this.M_GL_ReportGeneratorColumnDetail.selection4,
                Selection5: this.M_GL_ReportGeneratorColumnDetail.selection5,
                Selection6: this.M_GL_ReportGeneratorColumnDetail.selection6,
                Selection7: this.M_GL_ReportGeneratorColumnDetail.selection7,
                Selection8: this.M_GL_ReportGeneratorColumnDetail.selection8,
                Selection9: this.M_GL_ReportGeneratorColumnDetail.selection9,
                Selection10: this.M_GL_ReportGeneratorColumnDetail.selection10,
                FromSelection1: this.M_GL_ReportGeneratorColumnDetail.fromselection1 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection1 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection1 ,
                FromSelection2: this.M_GL_ReportGeneratorColumnDetail.fromselection2 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection2 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection2 ,
                FromSelection3: this.M_GL_ReportGeneratorColumnDetail.fromselection3 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection3 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection3 ,
                FromSelection4: this.M_GL_ReportGeneratorColumnDetail.fromselection4 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection4 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection4 ,
                FromSelection5: this.M_GL_ReportGeneratorColumnDetail.fromselection5 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection5 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection5 ,
                FromSelection6: this.M_GL_ReportGeneratorColumnDetail.fromselection6 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection6 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection6 ,
                FromSelection7: this.M_GL_ReportGeneratorColumnDetail.fromselection7 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection7 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection7 ,
                FromSelection8: this.M_GL_ReportGeneratorColumnDetail.fromselection8 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection8 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection8 ,
                FromSelection9: this.M_GL_ReportGeneratorColumnDetail.fromselection9 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection9 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection9 ,
                FromSelection10: this.M_GL_ReportGeneratorColumnDetail.fromselection10 == '' || this.M_GL_ReportGeneratorColumnDetail.fromselection10 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.fromselection10 ,
                ToSelection1: this.M_GL_ReportGeneratorColumnDetail.toselection1 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection1 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection1 ,
                ToSelection2: this.M_GL_ReportGeneratorColumnDetail.toselection2 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection2 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection2 ,
                ToSelection3: this.M_GL_ReportGeneratorColumnDetail.toselection3 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection3 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection3 ,
                ToSelection4: this.M_GL_ReportGeneratorColumnDetail.toselection4 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection4 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection4 ,
                ToSelection5: this.M_GL_ReportGeneratorColumnDetail.toselection5 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection5 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection5 ,
                ToSelection6: this.M_GL_ReportGeneratorColumnDetail.toselection6 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection6 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection6 ,
                ToSelection7: this.M_GL_ReportGeneratorColumnDetail.toselection7 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection7 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection7 ,
                ToSelection8: this.M_GL_ReportGeneratorColumnDetail.toselection8 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection8 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection8 ,
                ToSelection9: this.M_GL_ReportGeneratorColumnDetail.toselection9 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection9 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection9 ,
                ToSelection10: this.M_GL_ReportGeneratorColumnDetail.toselection10 == '' || this.M_GL_ReportGeneratorColumnDetail.toselection10 == null ? '' : this.M_GL_ReportGeneratorColumnDetail.toselection10 ,
                Remarks: this.M_GL_ReportGeneratorColumnDetail.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ReportGeneratorColumnDetail.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })


        },
		M_ClearForm(){
            this.M_GL_ReportGeneratorColumnDetail = {
                tablecolumncd: '',
                columnno: '0',
                columntype: 'D',
                descs1: '',
                descs2: '',
                descs3: '',
                descs4: '',
                columndatatype: '',
                ledgersource: '',
                columnmathematic: '',
                suppresscolumn: 'N',
                trxamt: 'N',
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
                fromselection1: '',
                fromselection2: '',
                fromselection3: '',
                fromselection4: '',
                fromselection5: '',
                fromselection6: '',
                fromselection7: '',
                fromselection8: '',
                fromselection9: '',
                fromselection10: '',
                toselection1: '',
                toselection2: '',
                toselection3: '',
                toselection4: '',
                toselection5: '',
                toselection6: '',
                toselection7: '',
                toselection8: '',
                toselection9: '',
                toselection10: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
        },
        disabledEnabaledProp(){     
            if(this.M_GL_ReportGeneratorColumnDetail.columntype=='D'||this.M_GL_ReportGeneratorColumnDetail.columntype=='C'){

                        this.PI_columndatatype.cProtect = false
                        this.PI_columnmathematic.cProtect = true
                        this.PI_trxamt.cProtect = false

                        this.PI_selection1.cProtect = false
                        this.PI_selection2.cProtect = false
                        this.PI_selection3.cProtect = false
                        this.PI_selection4.cProtect = false
                        this.PI_selection5.cProtect = false
                        this.PI_selection6.cProtect = false
                        this.PI_selection7.cProtect = false
                        this.PI_selection8.cProtect = false
                        this.PI_selection9.cProtect = false
                        this.PI_selection10.cProtect = false

                        this.PI_fromselection1.cProtect = true
                        this.PI_fromselection2.cProtect = true
                        this.PI_fromselection3.cProtect = true
                        this.PI_fromselection4.cProtect = true
                        this.PI_fromselection5.cProtect = true
                        this.PI_fromselection6.cProtect = true
                        this.PI_fromselection7.cProtect = true
                        this.PI_fromselection8.cProtect = true
                        this.PI_fromselection9.cProtect = true
                        this.PI_fromselection10.cProtect = true

                        this.PI_toselection1.cProtect = true
                        this.PI_toselection2.cProtect = true
                        this.PI_toselection3.cProtect = true
                        this.PI_toselection4.cProtect = true
                        this.PI_toselection5.cProtect = true
                        this.PI_toselection6.cProtect = true
                        this.PI_toselection7.cProtect = true
                        this.PI_toselection8.cProtect = true
                        this.PI_toselection9.cProtect = true
                        this.PI_toselection10.cProtect = true
            }else{
                        this.PI_columndatatype.cProtect = true
                        this.PI_columnmathematic.cProtect = false
                        this.PI_trxamt.cProtect = true

                        this.PI_selection1.cProtect = true
                        this.PI_selection2.cProtect = true
                        this.PI_selection3.cProtect = true
                        this.PI_selection4.cProtect = true
                        this.PI_selection5.cProtect = true
                        this.PI_selection6.cProtect = true
                        this.PI_selection7.cProtect = true
                        this.PI_selection8.cProtect = true
                        this.PI_selection9.cProtect = true
                        this.PI_selection10.cProtect = true

                        this.PI_fromselection1.cProtect = true
                        this.PI_fromselection2.cProtect = true
                        this.PI_fromselection3.cProtect = true
                        this.PI_fromselection4.cProtect = true
                        this.PI_fromselection5.cProtect = true
                        this.PI_fromselection6.cProtect = true
                        this.PI_fromselection7.cProtect = true
                        this.PI_fromselection8.cProtect = true
                        this.PI_fromselection9.cProtect = true
                        this.PI_fromselection10.cProtect = true

                        this.PI_toselection1.cProtect = true
                        this.PI_toselection2.cProtect = true
                        this.PI_toselection3.cProtect = true
                        this.PI_toselection4.cProtect = true
                        this.PI_toselection5.cProtect = true
                        this.PI_toselection6.cProtect = true
                        this.PI_toselection7.cProtect = true
                        this.PI_toselection8.cProtect = true
                        this.PI_toselection9.cProtect = true
                        this.PI_toselection10.cProtect = true

                        this.M_GL_ReportGeneratorColumnDetail.selection1 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection2 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection3 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection4 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection5 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection6 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection7 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection8 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection9 = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection10 = ''

                        
                        this.M_GL_ReportGeneratorColumnDetail.selection1Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection2Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection3Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection4Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection5Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection6Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection7Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection8Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection9Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.selection10Label = ''

                        this.M_GL_ReportGeneratorColumnDetail.fromselection1 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection2 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection3 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection4 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection5 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection6 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection7 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection8 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection9 = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection10 = ''

                        this.M_GL_ReportGeneratorColumnDetail.fromselection1Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection2Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection3Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection4Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection5Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection6Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection7Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection8Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection9Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.fromselection10Label = ''

                        this.M_GL_ReportGeneratorColumnDetail.toselection1 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection2 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection3 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection4 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection5 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection6 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection7 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection8 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection9 = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection10 = ''

                        this.M_GL_ReportGeneratorColumnDetail.toselection1Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection2Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection3Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection4Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection5Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection6Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection7Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection8Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection9Label = ''
                        this.M_GL_ReportGeneratorColumnDetail.toselection10Label = ''
            }
        },
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ReportGeneratorColumnDetail.tablecolumncd = data.TableColumnCd 

            this.disabledEnabaledProp()

            this.$refs.ref_columnno.focus()

        },
        M_Edit(){
            this.$refs.ref_descs1.focus()
            this.disabledEnabaledProp()
              if(this.M_GL_ReportGeneratorColumnDetail.selection1 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection1,'ref_fromselection1','ref_toselection1')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection2 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection2,'ref_fromselection2','ref_toselection2')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection3 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection3,'ref_fromselection3','ref_toselection3')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection4 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection4,'ref_fromselection4','ref_toselection4')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection5 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection5,'ref_fromselection5','ref_toselection5')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection6 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection6,'ref_fromselection6','ref_toselection6')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection7 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection7,'ref_fromselection7','ref_toselection7')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection8 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection8,'ref_fromselection8','ref_toselection8')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection9 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection9,'ref_fromselection9','ref_toselection9')}
            if(this.M_GL_ReportGeneratorColumnDetail.selection10 !=''){this.SetLookup(this.M_GL_ReportGeneratorColumnDetail.selection10,'ref_fromselection10','ref_toselection10')}
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

        
            data.forEach((value) => {
            dataDelete.push({
                _Message_:'',
                ColumnNo: value.ColumnNo,
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
,                tablecolumncd: record.TableColumnCd,
                columnno: record.ColumnNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_GL_ReportGeneratorColumnDetail = {
                tablecolumncd: data.tablecolumncd,
                columnno: data.columnno,
                columntype: data.columntype,
                descs1: data.descs1,
                descs2: data.descs2,
                descs3: data.descs3,
                descs4: data.descs4,
                columndatatype: data.columndatatype,
                ledgersource: data.ledgersource,
                columnmathematic: data.columnmathematic,
                suppresscolumn: data.suppresscolumn,
                trxamt: data.trxamt,
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
                fromselection1: data.fromselection1,
                fromselection2: data.fromselection2,
                fromselection3: data.fromselection3,
                fromselection4: data.fromselection4,
                fromselection5: data.fromselection5,
                fromselection6: data.fromselection6,
                fromselection7: data.fromselection7,
                fromselection8: data.fromselection8,
                fromselection9: data.fromselection9,
                fromselection10: data.fromselection10,
                toselection1: data.toselection1,
                toselection2: data.toselection2,
                toselection3: data.toselection3,
                toselection4: data.toselection4,
                toselection5: data.toselection5,
                toselection6: data.toselection6,
                toselection7: data.toselection7,
                toselection8: data.toselection8,
                toselection9: data.toselection9,
                toselection10: data.toselection10,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_ReportGeneratorColumnDetail.fromselection1Label = this.M_GL_ReportGeneratorColumnDetail.fromselection1 != null ? data.fromselection1   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection1Label = this.M_GL_ReportGeneratorColumnDetail.toselection1 != null ? data.toselection1   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection2Label = this.M_GL_ReportGeneratorColumnDetail.fromselection2 != null ? data.fromselection2   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection2Label = this.M_GL_ReportGeneratorColumnDetail.toselection2 != null ? data.toselection2   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection3Label = this.M_GL_ReportGeneratorColumnDetail.fromselection3 != null ? data.fromselection3   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection3Label = this.M_GL_ReportGeneratorColumnDetail.toselection3 != null ? data.toselection3   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection4Label = this.M_GL_ReportGeneratorColumnDetail.fromselection4 != null ? data.fromselection4   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection4Label = this.M_GL_ReportGeneratorColumnDetail.toselection4 != null ? data.toselection4   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection5Label = this.M_GL_ReportGeneratorColumnDetail.fromselection5 != null ? data.fromselection5   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection5Label = this.M_GL_ReportGeneratorColumnDetail.toselection5 != null ? data.toselection5   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection6Label = this.M_GL_ReportGeneratorColumnDetail.fromselection6 != null ? data.fromselection6   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection6Label = this.M_GL_ReportGeneratorColumnDetail.toselection6 != null ? data.toselection6   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection7Label = this.M_GL_ReportGeneratorColumnDetail.fromselection7 != null ? data.fromselection7   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection7Label = this.M_GL_ReportGeneratorColumnDetail.toselection7 != null ? data.toselection7   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection8Label = this.M_GL_ReportGeneratorColumnDetail.fromselection8 != null ? data.fromselection8   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection8Label = this.M_GL_ReportGeneratorColumnDetail.toselection8 != null ? data.toselection8   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection9Label = this.M_GL_ReportGeneratorColumnDetail.fromselection9 != null ? data.fromselection9   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection9Label = this.M_GL_ReportGeneratorColumnDetail.toselection9 != null ? data.toselection9   :'' 
                this.M_GL_ReportGeneratorColumnDetail.fromselection10Label = this.M_GL_ReportGeneratorColumnDetail.fromselection10 != null ? data.fromselection10   :'' 
                this.M_GL_ReportGeneratorColumnDetail.toselection10Label = this.M_GL_ReportGeneratorColumnDetail.toselection10 != null ? data.toselection10   :'' 
  

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

