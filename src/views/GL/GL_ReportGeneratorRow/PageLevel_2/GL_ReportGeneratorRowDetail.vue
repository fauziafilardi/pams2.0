<template>
  <div>
    <ABSListVuex
      :prop="propList"
      :title="data.QueryName"
      @rowClicked="$parent.rowClicked"
      @rowDblClicked="$parent.doDoubleClick"
      @rowLinkClick="$parent.rowLink"
      @pageSize="$parent.M_PageSize"
      @pagination="$parent.M_Pagination"
      @filter="$parent.M_Advance_Filter"
      @headTable="$parent.M_Head_Table"
      @refreshColumn="$parent.refreshColumn"
    />

    <div
      v-show="$parent.showForm"
      :style="'margin-top:10px;'"
      class="el"
      mousetip
      mousetip-msg="I'm a tooltip"
    >
      <div class="div-collapse" v-b-toggle.collapse1>
        <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
          Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}}
          <font-awesome-icon icon="sort-down" class="icon-style-1__master" />
        </span>
      </div>
      <b-collapse id="collapse1" :visible="true">
        <b-row style="padding-left: 10px; padding-bottom: 10px; !important;">
          <b-col md="12" id="col-left" class="bColMasterForm">
            <b-form
              :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex"
              :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex"
            >
              <b-row style="padding-left:10px;">
                <b-col md="12" id="col-left">
                  <!-- table open -->
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_rowno"
                        v-model="M_GL_ReportGeneratorRowDetail.rowno"
                        ref="ref_rowno"
                      />
                    </b-col>
                    <b-col md="6">
                      <!-- <ABSinputTextVuex :prop="PI_rowtype" v-model="M_GL_ReportGeneratorRowDetail.rowtype"  ref="ref_rowtype"/> -->
                      <ABSInputSelect2
                        @change="OnrowtypeChange"
                        :prop="PI_rowtype"
                        :value="M_GL_ReportGeneratorRowDetail.rowtype"
                        :label="M_GL_ReportGeneratorRowDetail.rowtypeLabel"
                        ref="ref_rowtype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_descs"
                        v-model="M_GL_ReportGeneratorRowDetail.descs"
                        ref="ref_descs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectListMod
                        @change="OnfromaccountcdChange"
                        :prop="PI_fromaccountcd"
                        :value="M_GL_ReportGeneratorRowDetail.fromaccountcd"
                        :label="M_GL_ReportGeneratorRowDetail.fromaccountcdLabel"
                        ref="ref_fromaccountcd"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSInputSelectListMod
                        @change="OntoaccountcdChange"
                        :prop="PI_toaccountcd"
                        :value="M_GL_ReportGeneratorRowDetail.toaccountcd"
                        :label="M_GL_ReportGeneratorRowDetail.toaccountcdLabel"
                        ref="ref_toaccountcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnnormalsignChange"
                        :prop="PI_normalsign"
                        v-model="M_GL_ReportGeneratorRowDetail.normalsign"
                        ref="ref_normalsign"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnreverseamtChange"
                        :prop="PI_reverseamt"
                        v-model="M_GL_ReportGeneratorRowDetail.reverseamt"
                        ref="ref_reverseamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnsuppressrowChange"
                        :prop="PI_suppressrow"
                        v-model="M_GL_ReportGeneratorRowDetail.suppressrow"
                        ref="ref_suppressrow"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnsuppressnegativeChange"
                        :prop="PI_suppressnegative"
                        v-model="M_GL_ReportGeneratorRowDetail.suppressnegative"
                        ref="ref_suppressnegative"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnaccountdetailChange"
                        :prop="PI_accountdetail"
                        v-model="M_GL_ReportGeneratorRowDetail.accountdetail"
                        ref="ref_accountdetail"
                      />
                    </b-col>
                    <b-col md="6">
                      <!-- <ABSinputTextVuex :prop="PI_columnchange" v-model="M_GL_ReportGeneratorRowDetail.columnchange"  ref="ref_columnchange"/> -->
                      <ABSInputSelect2
                        @change="OncolumnchangeChange"
                        :prop="PI_columnchange"
                        :value="M_GL_ReportGeneratorRowDetail.columnchange"
                        :label="M_GL_ReportGeneratorRowDetail.columnchangeLabel"
                        ref="ref_columnchange"
                      />
                    </b-col>
                  </b-row>
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection1" v-model="M_GL_ReportGeneratorRowDetail.selection1"  ref="ref_selection1"/> -->
                        <ABSInputSelect2
                          @change="Onselection1Change"
                          :prop="PI_selection1"
                          :value="M_GL_ReportGeneratorRowDetail.selection1"
                          :label="M_GL_ReportGeneratorRowDetail.selection1Label"
                          ref="ref_selection1"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection1Change"
                          :prop="PI_fromselection1"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection1"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection1Label"
                          ref="ref_fromselection1"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection1Change"
                          :prop="PI_toselection1"
                          :value="M_GL_ReportGeneratorRowDetail.toselection1"
                          :label="M_GL_ReportGeneratorRowDetail.toselection1Label"
                          ref="ref_toselection1"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection2" v-model="M_GL_ReportGeneratorRowDetail.selection2"  ref="ref_selection2"/> -->
                        <ABSInputSelect2
                          @change="Onselection2Change"
                          :prop="PI_selection2"
                          :value="M_GL_ReportGeneratorRowDetail.selection2"
                          :label="M_GL_ReportGeneratorRowDetail.selection2Label"
                          ref="ref_selection2"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection2Change"
                          :prop="PI_fromselection2"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection2"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection2Label"
                          ref="ref_fromselection2"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection2Change"
                          :prop="PI_toselection2"
                          :value="M_GL_ReportGeneratorRowDetail.toselection2"
                          :label="M_GL_ReportGeneratorRowDetail.toselection2Label"
                          ref="ref_toselection2"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection3" v-model="M_GL_ReportGeneratorRowDetail.selection3"  ref="ref_selection3"/> -->
                        <ABSInputSelect2
                          @change="Onselection3Change"
                          :prop="PI_selection3"
                          :value="M_GL_ReportGeneratorRowDetail.selection3"
                          :label="M_GL_ReportGeneratorRowDetail.selection3Label"
                          ref="ref_selection3"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection3Change"
                          :prop="PI_fromselection3"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection3"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection3Label"
                          ref="ref_fromselection3"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection3Change"
                          :prop="PI_toselection3"
                          :value="M_GL_ReportGeneratorRowDetail.toselection3"
                          :label="M_GL_ReportGeneratorRowDetail.toselection3Label"
                          ref="ref_toselection3"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection4" v-model="M_GL_ReportGeneratorRowDetail.selection4"  ref="ref_selection4"/> -->
                        <ABSInputSelect2
                          @change="Onselection4Change"
                          :prop="PI_selection4"
                          :value="M_GL_ReportGeneratorRowDetail.selection4"
                          :label="M_GL_ReportGeneratorRowDetail.selection4Label"
                          ref="ref_selection4"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection4Change"
                          :prop="PI_fromselection4"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection4"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection4Label"
                          ref="ref_fromselection4"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection4Change"
                          :prop="PI_toselection4"
                          :value="M_GL_ReportGeneratorRowDetail.toselection4"
                          :label="M_GL_ReportGeneratorRowDetail.toselection4Label"
                          ref="ref_toselection4"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection5" v-model="M_GL_ReportGeneratorRowDetail.selection5"  ref="ref_selection5"/> -->
                        <ABSInputSelect2
                          @change="Onselection5Change"
                          :prop="PI_selection5"
                          :value="M_GL_ReportGeneratorRowDetail.selection5"
                          :label="M_GL_ReportGeneratorRowDetail.selection5Label"
                          ref="ref_selection5"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection5Change"
                          :prop="PI_fromselection5"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection5"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection5Label"
                          ref="ref_fromselection5"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection5Change"
                          :prop="PI_toselection5"
                          :value="M_GL_ReportGeneratorRowDetail.toselection5"
                          :label="M_GL_ReportGeneratorRowDetail.toselection5Label"
                          ref="ref_toselection5"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection6" v-model="M_GL_ReportGeneratorRowDetail.selection6"  ref="ref_selection6"/> -->
                        <ABSInputSelect2
                          @change="Onselection6Change"
                          :prop="PI_selection6"
                          :value="M_GL_ReportGeneratorRowDetail.selection6"
                          :label="M_GL_ReportGeneratorRowDetail.selection6Label"
                          ref="ref_selection6"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection6Change"
                          :prop="PI_fromselection6"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection6"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection6Label"
                          ref="ref_fromselection6"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection6Change"
                          :prop="PI_toselection6"
                          :value="M_GL_ReportGeneratorRowDetail.toselection6"
                          :label="M_GL_ReportGeneratorRowDetail.toselection6Label"
                          ref="ref_toselection6"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection7" v-model="M_GL_ReportGeneratorRowDetail.selection7"  ref="ref_selection7"/> -->
                        <ABSInputSelect2
                          @change="Onselection7Change"
                          :prop="PI_selection7"
                          :value="M_GL_ReportGeneratorRowDetail.selection7"
                          :label="M_GL_ReportGeneratorRowDetail.selection7Label"
                          ref="ref_selection7"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection7Change"
                          :prop="PI_fromselection7"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection7"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection7Label"
                          ref="ref_fromselection7"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection7Change"
                          :prop="PI_toselection7"
                          :value="M_GL_ReportGeneratorRowDetail.toselection7"
                          :label="M_GL_ReportGeneratorRowDetail.toselection7Label"
                          ref="ref_toselection7"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection8" v-model="M_GL_ReportGeneratorRowDetail.selection8"  ref="ref_selection8"/> -->
                        <ABSInputSelect2
                          @change="Onselection8Change"
                          :prop="PI_selection8"
                          :value="M_GL_ReportGeneratorRowDetail.selection8"
                          :label="M_GL_ReportGeneratorRowDetail.selection8Label"
                          ref="ref_selection8"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection8Change"
                          :prop="PI_fromselection8"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection8"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection8Label"
                          ref="ref_fromselection8"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection8Change"
                          :prop="PI_toselection8"
                          :value="M_GL_ReportGeneratorRowDetail.toselection8"
                          :label="M_GL_ReportGeneratorRowDetail.toselection8Label"
                          ref="ref_toselection8"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection9" v-model="M_GL_ReportGeneratorRowDetail.selection9"  ref="ref_selection9"/> -->
                        <ABSInputSelect2
                          @change="Onselection9Change"
                          :prop="PI_selection9"
                          :value="M_GL_ReportGeneratorRowDetail.selection9"
                          :label="M_GL_ReportGeneratorRowDetail.selection9Label"
                          ref="ref_selection9"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection9Change"
                          :prop="PI_fromselection9"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection9"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection9Label"
                          ref="ref_fromselection9"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection9Change"
                          :prop="PI_toselection9"
                          :value="M_GL_ReportGeneratorRowDetail.toselection9"
                          :label="M_GL_ReportGeneratorRowDetail.toselection9Label"
                          ref="ref_toselection9"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="4">
                        <!-- <ABSinputTextVuex :prop="PI_selection10" v-model="M_GL_ReportGeneratorRowDetail.selection10"  ref="ref_selection10"/> -->
                        <ABSInputSelect2
                          @change="Onselection10Change"
                          :prop="PI_selection10"
                          :value="M_GL_ReportGeneratorRowDetail.selection10"
                          :label="M_GL_ReportGeneratorRowDetail.selection10Label"
                          ref="ref_selection10"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Onfromselection10Change"
                          :prop="PI_fromselection10"
                          :value="M_GL_ReportGeneratorRowDetail.fromselection10"
                          :label="M_GL_ReportGeneratorRowDetail.fromselection10Label"
                          ref="ref_fromselection10"
                        />
                      </b-col>
                      <b-col md="4">
                        <ABSInputSelectList
                          @change="Ontoselection10Change"
                          :prop="PI_toselection10"
                          :value="M_GL_ReportGeneratorRowDetail.toselection10"
                          :label="M_GL_ReportGeneratorRowDetail.toselection10Label"
                          ref="ref_toselection10"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_fontface"
                        v-model="M_GL_ReportGeneratorRowDetail.fontface"
                        ref="ref_fontface"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_fontsize"
                        v-model="M_GL_ReportGeneratorRowDetail.fontsize"
                        ref="ref_fontsize"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputCheckBox
                        @input="OnfontstyleChange"
                        :prop="PI_fontstyle"
                        v-model="M_GL_ReportGeneratorRowDetail.fontstyle"
                        ref="ref_fontstyle"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        @input="OnindentlevelChange"
                        :prop="PI_indentlevel"
                        v-model="M_GL_ReportGeneratorRowDetail.indentlevel"
                        ref="ref_indentlevel"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_GL_ReportGeneratorRowDetail.remarks"
                        ref="ref_remarks"
                      />
                    </b-col>
                  </b-row>
                </b-col>
                <!-- table close -->
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
  props: { PageLevel: "", TabIndex: "", data: "" },
  data() {
    return {
      ValKey: null,
      FormType: "List",
      Module: "GL",
      propList: {
        initialWhere: "TableRowCd = '" + this.ValKey + "'",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },

      M_GL_ReportGeneratorRowDetail: {
        tablerowcd: "",
        rowno: "0",
        rowtype: "",
        descs: "",
        fromaccountcd: "",
        toaccountcd: "",
        normalsign: "",
        reverseamt: "",
        suppressrow: "",
        suppressnegative: "",
        selection1: "",
        selection2: "",
        selection3: "",
        selection4: "",
        selection5: "",
        selection6: "",
        selection7: "",
        selection8: "",
        selection9: "",
        selection10: "",
        fromselection1: "",
        fromselection2: "",
        fromselection3: "",
        fromselection4: "",
        fromselection5: "",
        fromselection6: "",
        fromselection7: "",
        fromselection8: "",
        fromselection9: "",
        fromselection10: "",
        toselection1: "",
        toselection2: "",
        toselection3: "",
        toselection4: "",
        toselection5: "",
        toselection6: "",
        toselection7: "",
        toselection8: "",
        toselection9: "",
        toselection10: "",
        accountdetail: "",
        columnchange: "",
        fontface: "",
        fontsize: "0",
        fontstyle: [],
        indentlevel: "0",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        lastupdatestamp: 0,
        rowid: 0
      },
      PI_rowno: {
        cValidate: "required|max:12",
        cName: "rowno",
        cLabel: "Row No ",
        cLabelSize: 4,
        cOrder: 4,
        cKey: true,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_rowtype: {
        dataLookUp: null,
        cValidate: "required",
        cName: "rowtype",
        cLabel: "Row Type ",
        cLabelSize: 4,
        cOrder: 5,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "R", id: "R" },
          { label: "C", id: "C" },
          { label: "H", id: "H" },
          { label: "I", id: "I" },
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "M0", id: "M0" },
          { label: "M1", id: "M1" },
          { label: "M2", id: "M2" },
          { label: "M3", id: "M3" },
          { label: "M4", id: "M4" },
          { label: "M5", id: "M5" },
          { label: "M6", id: "M6" },
          { label: "S1", id: "S1" },
          { label: "S2", id: "S2" },
          { label: "S3", id: "S3" },
          { label: "S4", id: "S4" },
          { label: "S5", id: "S5" },
          { label: "S6", id: "S6" },
          { label: "S7", id: "S7" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_descs: {
        cValidate: "max:60",
        cName: "dessscs",
        cLabel: "Description",
        cLabelSize: 4,
        cOrder: 6,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_fromaccountcd: {
        dataLookUp: {
          LookUpCd: "GetLookupGLAccountCodeReport",
          ColumnDB: "AccountCd",
          InitialWhere: "",
          ParamWhere: "",
          //   SourceField: "No,AccountCd,Descs1,AccountType,TimeEdit",
          OrderBy: "AccountCd ASC"
        },
        cValidate: "",
        cName: "fromaccountcd",
        cLabel: "Account From tes",
        cKey: false,
        cLabelSize: 4,
        cOrder: 7,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "GL/GL_ChartOfAccount",
        cDisplayColumn: "AccountCd,Descs",
        cShowNumber: true
      },
      PI_toaccountcd: {
        dataLookUp: {
          LookUpCd: "GetLookupGLAccountCodeReport",
          ColumnDB: "AccountCd",
          InitialWhere: "",
          ParamWhere: "",
          OrderBy: "AccountCd ASC"
        },
        cValidate: "",
        cName: "toaccountcd",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 8,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "GL/GL_ChartOfAccount",
        cDisplayColumn: "AccountCd,Descs",
        cShowNumber: true
      },
      PI_normalsign: {
        cValidate: "",
        cName: "normalsign",
        cId: "rdbnormalsign",
        cRadioOptions: [
          { text: "Debit", value: "D" },
          { text: "Credit", value: "C" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Normal Sign",
        cLabelSize: 4,
        cOrder: 9,
        cKey: false,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_reverseamt: {
        cValidate: "",
        cName: "reverseamt",
        cId: "rdbreverseamt",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Reverse Amount",
        cLabelSize: 4,
        cOrder: 10,
        cKey: false,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_suppressrow: {
        cValidate: "",
        cName: "suppressrow",
        cId: "rdbsuppressrow",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Suppress Row",
        cLabelSize: 4,
        cOrder: 11,
        cKey: false,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_suppressnegative: {
        cValidate: "",
        cName: "suppressnegative",
        cId: "rdbsuppressnegative",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Suppress Negative",
        cLabelSize: 4,
        cOrder: 12,
        cKey: false,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_accountdetail: {
        cValidate: "",
        cName: "accountdetail",
        cId: "rdbaccountdetail",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Account Detail",
        cLabelSize: 4,
        cOrder: 13,
        cKey: false,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      // PI_columnchange: {
      //     cValidate :'max:2',
      //     cName: 'columnchange',
      //     cLabel: 'Column Change',
      //     cLabelSize: 4,
      //     cOrder: 11,
      //     cKey: false,
      //     cType: 'text',
      //     cVisible: true,
      //     cProtect: false,
      //     cPageLevel: this.PageLevel,
      //     cTabIndex: this.TabIndex,
      //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
      // },
      PI_columnchange: {
        dataLookUp: null,
        cValidate: "",
        cName: "columnchange",
        cLabel: "Column Change",
        cLabelSize: 4,
        cOrder: 14,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "B", id: "B" },
          { label: "P", id: "P" },
          { label: "Y", id: "Y" },
          { label: "BA", id: "BA" },
          { label: "BH", id: "BH" },
          { label: "BE", id: "BE" },
          { label: "PA", id: "PA" },
          { label: "PH", id: "PH" },
          { label: "PE", id: "PE" },
          { label: "YA", id: "YA" },
          { label: "YH", id: "YH" },
          { label: "YE", id: "YE" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_selection1: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection1",
        cLabel: "Selection 1",
        cLabelSize: 4,
        cOrder: 15,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection1: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection1",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 16,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection1: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection1",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 17,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection2: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection2",
        cLabel: "Selection 2",
        cLabelSize: 4,
        cOrder: 18,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection2: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection2",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 19,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection2: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection2",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 20,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection3: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection3",
        cLabel: "Selection 3",
        cLabelSize: 4,
        cOrder: 21,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection3: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection3",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 22,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection3: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection3",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 23,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection4: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection4",
        cLabel: "Selection 4",
        cLabelSize: 4,
        cOrder: 24,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection4: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection4",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 25,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection4: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection4",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 26,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection5: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection5",
        cLabel: "Selection 5",
        cLabelSize: 4,
        cOrder: 27,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection5: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection5",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 28,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection5: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection5",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 29,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection6: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection6",
        cLabel: "Selection 6",
        cLabelSize: 4,
        cOrder: 30,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection6: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection6",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 31,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection6: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection6",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 32,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection7: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection7",
        cLabel: "Selection 7",
        cLabelSize: 4,
        cOrder: 33,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection7: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection7",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 34,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection7: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection7",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 35,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection8: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection8",
        cLabel: "Selection 8",
        cLabelSize: 4,
        cOrder: 36,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection8: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection8",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 37,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection8: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection8",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 38,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection9: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection9",
        cLabel: "Selection 9",
        cLabelSize: 4,
        cOrder: 39,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection9: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection9",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 40,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection9: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection9",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 41,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_selection10: {
        dataLookUp: null,
        cValidate: "",
        cName: "selection10",
        cLabel: "Selection 10",
        cLabelSize: 4,
        cOrder: 42,
        cKey: false,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: true,
        cOption: [
          { label: "T0", id: "T0" },
          { label: "T1", id: "T1" },
          { label: "T2", id: "T2" },
          { label: "T3", id: "T3" },
          { label: "T4", id: "T4" },
          { label: "T5", id: "T5" },
          { label: "T6", id: "T6" },
          { label: "T7", id: "T7" },
          { label: "T8", id: "T8" },
          { label: "T9", id: "T9" },
          { label: "T10", id: "T10" },
          { label: "T11", id: "T11" },
          { label: "T12", id: "T12" },
          { label: "T13", id: "T13" },
          { label: "T14", id: "T14" },
          { label: "T15", id: "T15" },
          { label: "T16", id: "T16" },
          { label: "T17", id: "T17" },
          { label: "T18", id: "T18" },
          { label: "T19", id: "T19" },
          { label: "T20", id: "T20" },
          { label: "T21", id: "T21" },
          { label: "T22", id: "T22" },
          { label: "T23", id: "T23" },
          { label: "T24", id: "T24" },
          { label: "T25", id: "T25" },
          { label: "T26", id: "T26" },
          { label: "T27", id: "T27" },
          { label: "T28", id: "T28" },
          { label: "T29", id: "T29" },
          { label: "T30", id: "T30" },
          { label: "TT", id: "TT" },
          { label: "CC", id: "CC" },
          { label: "D", id: "D" },
          { label: "C", id: "C" },
          { label: "B", id: "B" }
        ],
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_fromselection10: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "fromselection10",
        cLabel: "From",
        cKey: false,
        cLabelSize: 4,
        cOrder: 43,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_toselection10: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "toselection10",
        cLabel: "To",
        cKey: false,
        cLabelSize: 4,
        cOrder: 44,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_fontface: {
        cValidate: "max:30",
        cName: "fontface",
        cLabel: "Font Face",
        cLabelSize: 4,
        cOrder: 45,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_fontsize: {
        cValidate: "",
        cName: "fontsize",
        cLabel: "Size",
        cLabelSize: 4,
        cOrder: 46,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_fontstyle: {
        cValidate: "",
        cName: "fontstyle",
        cLabel: "Font Style",
        cLabelSize: 4,
        cOptions: [
          { text: "Bold", value: "B" },
          { text: "Italic", value: "I" },
          { text: "Underline", value: "U" }
        ],
        cOrder: 47,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cDefault: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_indentlevel: {
        cValidate: "included:1,2,3,4,5,6,7,8,9,11,12,13,14,15",
        cName: "indentlevel",
        cLabel: "Indent Level",
        cLabelSize: 4,
        cOrder: 48,
        cKey: false,
        cLastLabel: "0-15 (indent for Row Description only)",
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 49,
        cKey: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cResize: false,
        cReadOnly: false,
        cRows: 3,
        cMaxRows: 3,
        cSize: "md",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },

      PTAnalysis: {
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cPageMasterSeq: this.data.PageMasterSeq,
        cFormPageNo: this.data.PageOrder
      }
    };
  },
  computed: {
    inputStatus() {
      if (
        this.$store.getters.getLevel == this.PageLevel &&
        this.$store.getters.getTab == this.TabIndex
      ) {
        return this.$store.getters.getStatus.toUpperCase();
      } else {
        return "VIEW";
      }
    },
    DataRow() {
      return this.$store.getters.GetPage2Data;
    },
    DataRowPage1() {
      return this.$store.getters.GetPage1Data;
    }
  },
  methods: {
    Onselection1Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection1 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection1Label = data.label;
        if (this.inputStatus != "VIEW") {
          console.log(data.id);
          this.SetLookup(data.id, "ref_fromselection1", "ref_toselection1");
        }
      });
      this.$forceUpdate();
    },
    Onselection2Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection2 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection2Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection2", "ref_toselection2");
        }
      });
      this.$forceUpdate();
    },
    Onselection3Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection3 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection3Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection3", "ref_toselection3");
        }
      });
      this.$forceUpdate();
    },
    Onselection4Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection4 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection4Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection4", "ref_toselection4");
        }
      });
      this.$forceUpdate();
    },
    Onselection5Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection5 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection5Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection5", "ref_toselection5");
        }
      });
      this.$forceUpdate();
    },
    Onselection6Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection6 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection6Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection6", "ref_toselection6");
        }
      });
      this.$forceUpdate();
    },
    Onselection7Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection7 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection7Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection7", "ref_toselection7");
        }
      });
      this.$forceUpdate();
    },
    Onselection8Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection8 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection8Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection8", "ref_toselection8");
        }
      });
      this.$forceUpdate();
    },
    Onselection9Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection9 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection9Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection9", "ref_toselection9");
        }
      });
      this.$forceUpdate();
    },
    Onselection10Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.selection10 = data.id;
        this.M_GL_ReportGeneratorRowDetail.selection10Label = data.label;
        if (this.inputStatus != "VIEW") {
          this.SetLookup(data.id, "ref_fromselection10", "ref_toselection10");
        }
      });
      this.$forceUpdate();
    },
    OnrowtypeChange(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.rowtype = data.id;
        this.M_GL_ReportGeneratorRowDetail.rowtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          this.disabledEnabaledProp();
        }
      });
      this.$forceUpdate();
    },
    OncolumnchangeChange(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.columnchange = data.id;
        this.M_GL_ReportGeneratorRowDetail.columnchangeLabel = data.label;
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    SetLookup(dataSelection, refFrom, refTo) {
      console.log(dataSelection);
      console.log(refFrom);
      console.log(refTo);
      switch (dataSelection) {
        case "C":
        case "D":
          this.$refs[refFrom].prop.cProtect = true;
          this.$refs[refTo].prop.cProtect = true;
          break;
        case "TT":
          this.$refs[refFrom].prop.cProtect = false;
          this.$refs[refTo].prop.cProtect = false;

          this.$refs[refFrom].prop.dataLookUp.InitialWhere = "ModuleCd='GL'";
          this.$refs[refFrom].prop.dataLookUp.LookUpCd =
            "GetLookupCMTransTypeMaster";
          this.$refs[refFrom].prop.dataLookUp.ColumnDB = "TrxType";
          this.$refs[refFrom].prop.dataLookUp.SourceField =
            "TransactionType=TrxType,Descs,TimeEdit";
          this.$refs[refFrom].prop.dataLookUp.DisplayLookup =
            "TransactionType,Descs";
          this.$refs[refFrom].prop.cDisplayColumn = "TransactionType,Descs";

          this.$refs[refTo].prop.dataLookUp.InitialWhere = "ModuleCd='GL'";
          this.$refs[refTo].prop.dataLookUp.LookUpCd =
            "GetLookupCMTransTypeMaster";
          this.$refs[refTo].prop.dataLookUp.ColumnDB = "TrxType";
          this.$refs[refTo].prop.dataLookUp.SourceField =
            "TransactionType=TrxType,Descs,TimeEdit";
          this.$refs[refTo].prop.dataLookUp.DisplayLookup =
            "TransactionType,Descs";
          this.$refs[refTo].prop.cDisplayColumn = "TransactionType,Descs";
          break;
        case "CC":
          this.$refs[refFrom].prop.cProtect = false;
          this.$refs[refTo].prop.cProtect = false;

          this.$refs[refFrom].prop.dataLookUp.InitialWhere = "";
          this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupCMCurrency";
          this.$refs[refFrom].prop.dataLookUp.ColumnDB = "CurrencyCd";
          this.$refs[refFrom].prop.cDisplayColumn = "CurrencyCd,Descs";

          this.$refs[refTo].prop.dataLookUp.InitialWhere = "";
          this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupCMCurrency";
          this.$refs[refTo].prop.dataLookUp.ColumnDB = "CurrencyCd";
          this.$refs[refTo].prop.cDisplayColumn = "CurrencyCd,Descs";

          break;
        case "B":
          this.$refs[refFrom].prop.cProtect = false;
          this.$refs[refTo].prop.cProtect = false;

          this.$refs[refFrom].prop.dataLookUp.InitialWhere = "";
          this.$refs[refFrom].prop.dataLookUp.LookUpCd = "GetLookupCBBank";
          this.$refs[refFrom].prop.dataLookUp.ColumnDB = "BankCd";
          this.$refs[refFrom].prop.cDisplayColumn = "BankCd,BankName";

          this.$refs[refTo].prop.dataLookUp.InitialWhere = "";
          this.$refs[refTo].prop.dataLookUp.LookUpCd = "GetLookupCBBank";
          this.$refs[refTo].prop.dataLookUp.ColumnDB = "BankCd";
          this.$refs[refTo].prop.cDisplayColumn = "BankCd,BankName";
          break;
        default:
          if (
            dataSelection.substring(0, 1) == "T" &&
            dataSelection.length > 1
          ) {
            var Tint = dataSelection.substring(1, 2);
            if (Tint == parseInt(Tint, 10)) {
              this.$refs[refFrom].prop.cProtect = false;
              this.$refs[refTo].prop.cProtect = false;
              this.$refs[refFrom].prop.dataLookUp.InitialWhere =
                "TrxAnalysisCategory='" + dataSelection + "'";
              this.$refs[refFrom].prop.dataLookUp.LookUpCd =
                "GetLookupGLTrxAnalysisCd";
              this.$refs[refFrom].prop.dataLookUp.ColumnDB = "TrxAnalysisCd";
              this.$refs[refFrom].prop.cDisplayColumn =
                "Transaction_Analysis_Code,Descs";

              this.$refs[refTo].prop.dataLookUp.InitialWhere =
                "TrxAnalysisCategory='" + dataSelection + "'";
              this.$refs[refTo].prop.dataLookUp.LookUpCd =
                "GetLookupGLTrxAnalysisCd";
              this.$refs[refTo].prop.dataLookUp.ColumnDB = "TrxAnalysisCd";
              this.$refs[refTo].prop.cDisplayColumn =
                "Transaction_Analysis_Code,Descs";
            } else {
              this.$refs[refFrom].prop.cProtect = true;
              this.$refs[refTo].prop.cProtect = true;
            }
          } else {
            this.$refs[refFrom].prop.cProtect = true;
            this.$refs[refTo].prop.cProtect = true;
          }

          break;
      }
    },
    OnfromaccountcdChange(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromaccountcd = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromaccountcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromaccountcd}
        }
      });
      this.$forceUpdate();
    },
    OntoaccountcdChange(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toaccountcd = data.id;
        this.M_GL_ReportGeneratorRowDetail.toaccountcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{toaccountcd}
        }
      });
      this.$forceUpdate();
    },
    OnnormalsignChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{normalsign}
        }
      });
      this.$forceUpdate();
    },
    OnreverseamtChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{reverseamt}
        }
      });
      this.$forceUpdate();
    },
    OnsuppressrowChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{suppressrow}
        }
      });
      this.$forceUpdate();
    },
    OnsuppressnegativeChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{suppressnegative}
        }
      });
      this.$forceUpdate();
    },
    OnaccountdetailChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{accountdetail}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection1Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection1 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection1Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection10}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection1Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection1 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection1Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection10}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection2Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection2 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection2Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection2}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection2Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection2 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection2Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection2}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection3Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection3 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection3Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection3}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection3Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection3 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection3Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection3}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection4Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection4 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection4Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection4}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection4Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection4 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection4Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection4}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection5Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection5 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection5Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection5}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection5Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection5 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection5Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection5}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection6Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection6 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection6Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection6}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection6Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection6 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection6Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection6}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection7Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection7 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection7Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection7}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection7Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection7 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection7Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection7}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection8Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection8 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection8Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection8}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection8Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection8 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection8Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection8}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection9Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection9 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection9Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection9}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection9Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection9 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection9Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection9}
        }
      });
      this.$forceUpdate();
    },
    Onfromselection10Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.fromselection10 = data.id;
        this.M_GL_ReportGeneratorRowDetail.fromselection10Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{fromselection10}
        }
      });
      this.$forceUpdate();
    },
    Ontoselection10Change(data) {
      this.$nextTick(() => {
        this.M_GL_ReportGeneratorRowDetail.toselection10 = data.id;
        this.M_GL_ReportGeneratorRowDetail.toselection10Label = data.label;
        if (this.inputStatus != "VIEW") {
          //{toselection10}
        }
      });
      this.$forceUpdate();
    },
    OnfontstyleChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{fontstyle}
        }
      });
      this.$forceUpdate();
    },
    OnindentlevelChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{indentlevel}
        }
      });
      this.$forceUpdate();
    },
    OnremarksChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{remarks}
        }
      });
      this.$forceUpdate();
    },

    setToolbarButton() {
      //this.getToolbar().statusFunction[4].disabled = false
    },
    M_Head_Table() {},
    M_PageSize() {},
    M_TabClick() {},
    M_Pagination() {},
    M_Advance_Filter() {},
    M_Search(data) {},
    M_Refresh() {},
    M_Cancel() {},
    doDoubleClick() {},
    rowClicked(record, index) {},
    rowLink: function(url) {
      this.$refs.modalTest.show();
    },
    paramFromParent() {
      this.$parent.showForm = false;

      let data = this.$store.getters.GetPage1Data;
      this.M_GL_ReportGeneratorRowDetail.tablerowcd = data.TableRowCd;
      this.propList.initialWhere = " TableRowCd = '" + data.TableRowCd + "' ";

      this.FormToABSList().doGetList("", "eb_getList");
    },
    M_Insert() {
      var fstyle = "";
      if (this.M_GL_ReportGeneratorRowDetail.fontstyle.includes("B")) {
        fstyle += "B";
      }
      if (this.M_GL_ReportGeneratorRowDetail.fontstyle.includes("I")) {
        fstyle += "I";
      }
      if (this.M_GL_ReportGeneratorRowDetail.fontstyle.includes("U")) {
        fstyle += "U";
      }
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        TableRowCd: this.M_GL_ReportGeneratorRowDetail.tablerowcd,
        RowNo: this.M_GL_ReportGeneratorRowDetail.rowno,
        RowType: this.M_GL_ReportGeneratorRowDetail.rowtype,
        Descs: this.M_GL_ReportGeneratorRowDetail.descs,
        FromAccountCd:
          this.M_GL_ReportGeneratorRowDetail.fromaccountcd == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromaccountcd == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.fromaccountcd,
        ToAccountCd:
          this.M_GL_ReportGeneratorRowDetail.toaccountcd == "" ||
          this.M_GL_ReportGeneratorRowDetail.toaccountcd == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.toaccountcd,
        NormalSign: this.M_GL_ReportGeneratorRowDetail.normalsign,
        ReverseAmt: this.M_GL_ReportGeneratorRowDetail.reverseamt,
        SuppressRow: this.M_GL_ReportGeneratorRowDetail.suppressrow,
        SuppressNegative: this.M_GL_ReportGeneratorRowDetail.suppressnegative,
        AccountDetail: this.M_GL_ReportGeneratorRowDetail.accountdetail,
        ColumnChange: this.M_GL_ReportGeneratorRowDetail.columnchange,
        Selection1: this.M_GL_ReportGeneratorRowDetail.selection1,
        Selection2: this.M_GL_ReportGeneratorRowDetail.selection2,
        Selection3: this.M_GL_ReportGeneratorRowDetail.selection3,
        Selection4: this.M_GL_ReportGeneratorRowDetail.selection4,
        Selection5: this.M_GL_ReportGeneratorRowDetail.selection5,
        Selection6: this.M_GL_ReportGeneratorRowDetail.selection6,
        Selection7: this.M_GL_ReportGeneratorRowDetail.selection7,
        Selection8: this.M_GL_ReportGeneratorRowDetail.selection8,
        Selection9: this.M_GL_ReportGeneratorRowDetail.selection9,
        Selection10: this.M_GL_ReportGeneratorRowDetail.selection10,
        FromSelection1:
          this.M_GL_ReportGeneratorRowDetail.fromselection1 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection1 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection1,
        FromSelection2:
          this.M_GL_ReportGeneratorRowDetail.fromselection2 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection2 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection2,
        FromSelection3:
          this.M_GL_ReportGeneratorRowDetail.fromselection3 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection3 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection3,
        FromSelection4:
          this.M_GL_ReportGeneratorRowDetail.fromselection4 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection4 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection4,
        FromSelection5:
          this.M_GL_ReportGeneratorRowDetail.fromselection5 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection5 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection5,
        FromSelection6:
          this.M_GL_ReportGeneratorRowDetail.fromselection6 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection6 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection6,
        FromSelection7:
          this.M_GL_ReportGeneratorRowDetail.fromselection7 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection7 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection7,
        FromSelection8:
          this.M_GL_ReportGeneratorRowDetail.fromselection8 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection8 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection8,
        FromSelection9:
          this.M_GL_ReportGeneratorRowDetail.fromselection9 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection9 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection9,
        FromSelection10:
          this.M_GL_ReportGeneratorRowDetail.fromselection10 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection10 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection10,
        ToSelection1:
          this.M_GL_ReportGeneratorRowDetail.toselection1 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection1 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection1,
        ToSelection2:
          this.M_GL_ReportGeneratorRowDetail.toselection2 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection2 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection2,
        ToSelection3:
          this.M_GL_ReportGeneratorRowDetail.toselection3 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection3 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection3,
        ToSelection4:
          this.M_GL_ReportGeneratorRowDetail.toselection4 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection4 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection4,
        ToSelection5:
          this.M_GL_ReportGeneratorRowDetail.toselection5 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection5 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection5,
        ToSelection6:
          this.M_GL_ReportGeneratorRowDetail.toselection6 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection6 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection6,
        ToSelection7:
          this.M_GL_ReportGeneratorRowDetail.toselection7 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection7 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection7,
        ToSelection8:
          this.M_GL_ReportGeneratorRowDetail.toselection8 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection8 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection8,
        ToSelection9:
          this.M_GL_ReportGeneratorRowDetail.toselection9 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection9 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection9,
        ToSelection10:
          this.M_GL_ReportGeneratorRowDetail.toselection10 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection10 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection10,
        FontFace: this.M_GL_ReportGeneratorRowDetail.fontface,
        FontSize:
          this.M_GL_ReportGeneratorRowDetail.fontsize == "" ||
          this.M_GL_ReportGeneratorRowDetail.fontsize == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.fontsize,
        FontStyle: fstyle,
        IndentLevel:
          this.M_GL_ReportGeneratorRowDetail.indentlevel == "" ||
          this.M_GL_ReportGeneratorRowDetail.indentlevel == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.indentlevel,
        Remarks: this.M_GL_ReportGeneratorRowDetail.remarks,
        UserInput: this.getDataUser().UserId
      };

      this.postJSON(this.getUrlInsert(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultInsert(response.Message);
      });
    },
    M_Update() {
      var fstyle = "";
      if (this.M_GL_ReportGeneratorRowDetail.fontstyle.includes("B")) {
        fstyle += "B";
      }
      if (this.M_GL_ReportGeneratorRowDetail.fontstyle.includes("I")) {
        fstyle += "I";
      }
      if (this.M_GL_ReportGeneratorRowDetail.fontstyle.includes("U")) {
        fstyle += "U";
      }
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        TableRowCd: this.M_GL_ReportGeneratorRowDetail.tablerowcd,
        RowNo: this.M_GL_ReportGeneratorRowDetail.rowno,
        RowType: this.M_GL_ReportGeneratorRowDetail.rowtype,
        Descs: this.M_GL_ReportGeneratorRowDetail.descs,
        FromAccountCd:
          this.M_GL_ReportGeneratorRowDetail.fromaccountcd == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromaccountcd == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.fromaccountcd,
        ToAccountCd:
          this.M_GL_ReportGeneratorRowDetail.toaccountcd == "" ||
          this.M_GL_ReportGeneratorRowDetail.toaccountcd == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.toaccountcd,
        NormalSign: this.M_GL_ReportGeneratorRowDetail.normalsign,
        ReverseAmt: this.M_GL_ReportGeneratorRowDetail.reverseamt,
        SuppressRow: this.M_GL_ReportGeneratorRowDetail.suppressrow,
        SuppressNegative: this.M_GL_ReportGeneratorRowDetail.suppressnegative,
        AccountDetail: this.M_GL_ReportGeneratorRowDetail.accountdetail,
        ColumnChange: this.M_GL_ReportGeneratorRowDetail.columnchange,
        Selection1: this.M_GL_ReportGeneratorRowDetail.selection1,
        Selection2: this.M_GL_ReportGeneratorRowDetail.selection2,
        Selection3: this.M_GL_ReportGeneratorRowDetail.selection3,
        Selection4: this.M_GL_ReportGeneratorRowDetail.selection4,
        Selection5: this.M_GL_ReportGeneratorRowDetail.selection5,
        Selection6: this.M_GL_ReportGeneratorRowDetail.selection6,
        Selection7: this.M_GL_ReportGeneratorRowDetail.selection7,
        Selection8: this.M_GL_ReportGeneratorRowDetail.selection8,
        Selection9: this.M_GL_ReportGeneratorRowDetail.selection9,
        Selection10: this.M_GL_ReportGeneratorRowDetail.selection10,
        FromSelection1:
          this.M_GL_ReportGeneratorRowDetail.fromselection1 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection1 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection1,
        FromSelection2:
          this.M_GL_ReportGeneratorRowDetail.fromselection2 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection2 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection2,
        FromSelection3:
          this.M_GL_ReportGeneratorRowDetail.fromselection3 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection3 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection3,
        FromSelection4:
          this.M_GL_ReportGeneratorRowDetail.fromselection4 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection4 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection4,
        FromSelection5:
          this.M_GL_ReportGeneratorRowDetail.fromselection5 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection5 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection5,
        FromSelection6:
          this.M_GL_ReportGeneratorRowDetail.fromselection6 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection6 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection6,
        FromSelection7:
          this.M_GL_ReportGeneratorRowDetail.fromselection7 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection7 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection7,
        FromSelection8:
          this.M_GL_ReportGeneratorRowDetail.fromselection8 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection8 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection8,
        FromSelection9:
          this.M_GL_ReportGeneratorRowDetail.fromselection9 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection9 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection9,
        FromSelection10:
          this.M_GL_ReportGeneratorRowDetail.fromselection10 == "" ||
          this.M_GL_ReportGeneratorRowDetail.fromselection10 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.fromselection10,
        ToSelection1:
          this.M_GL_ReportGeneratorRowDetail.toselection1 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection1 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection1,
        ToSelection2:
          this.M_GL_ReportGeneratorRowDetail.toselection2 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection2 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection2,
        ToSelection3:
          this.M_GL_ReportGeneratorRowDetail.toselection3 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection3 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection3,
        ToSelection4:
          this.M_GL_ReportGeneratorRowDetail.toselection4 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection4 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection4,
        ToSelection5:
          this.M_GL_ReportGeneratorRowDetail.toselection5 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection5 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection5,
        ToSelection6:
          this.M_GL_ReportGeneratorRowDetail.toselection6 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection6 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection6,
        ToSelection7:
          this.M_GL_ReportGeneratorRowDetail.toselection7 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection7 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection7,
        ToSelection8:
          this.M_GL_ReportGeneratorRowDetail.toselection8 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection8 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection8,
        ToSelection9:
          this.M_GL_ReportGeneratorRowDetail.toselection9 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection9 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection9,
        ToSelection10:
          this.M_GL_ReportGeneratorRowDetail.toselection10 == "" ||
          this.M_GL_ReportGeneratorRowDetail.toselection10 == null
            ? ""
            : this.M_GL_ReportGeneratorRowDetail.toselection10,
        FontFace: this.M_GL_ReportGeneratorRowDetail.fontface,
        FontSize:
          this.M_GL_ReportGeneratorRowDetail.fontsize == "" ||
          this.M_GL_ReportGeneratorRowDetail.fontsize == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.fontsize,
        FontStyle: fstyle,
        IndentLevel:
          this.M_GL_ReportGeneratorRowDetail.indentlevel == "" ||
          this.M_GL_ReportGeneratorRowDetail.indentlevel == null
            ? "NULL"
            : this.M_GL_ReportGeneratorRowDetail.indentlevel,
        Remarks: this.M_GL_ReportGeneratorRowDetail.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_GL_ReportGeneratorRowDetail.lastupdatestamp
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_GL_ReportGeneratorRowDetail = {
        tablerowcd: "",
        rowno: "",
        rowtype: "",
        descs: "",
        fromaccountcd: "",
        toaccountcd: "",
        normalsign: "D",
        reverseamt: "N",
        suppressrow: "N",
        suppressnegative: "N",
        selection1: "",
        selection2: "",
        selection3: "",
        selection4: "",
        selection5: "",
        selection6: "",
        selection7: "",
        selection8: "",
        selection9: "",
        selection10: "",
        fromselection1: "",
        fromselection2: "",
        fromselection3: "",
        fromselection4: "",
        fromselection5: "",
        fromselection6: "",
        fromselection7: "",
        fromselection8: "",
        fromselection9: "",
        fromselection10: "",
        toselection1: "",
        toselection2: "",
        toselection3: "",
        toselection4: "",
        toselection5: "",
        toselection6: "",
        toselection7: "",
        toselection8: "",
        toselection9: "",
        toselection10: "",
        accountdetail: "N",
        columnchange: "",
        fontface: "",
        fontsize: "",
        fontstyle: [],
        indentlevel: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        lastupdatestamp: 0,
        rowid: 0
      };
    },
    disabledEnabaledProp() {
      console.log(this.M_GL_ReportGeneratorRowDetail.rowtype);
      switch (this.M_GL_ReportGeneratorRowDetail.rowtype) {
        case "R":
        case "C":
        case "I":
          console.log("1");
          this.PI_fromaccountcd.cProtect = false;
          this.PI_toaccountcd.cProtect = false;
          this.PI_normalsign.cProtect = false;
          this.PI_suppressrow.cProtect = false;
          this.PI_accountdetail.cProtect = false;
          this.PI_reverseamt.cProtect = false;
          this.PI_suppressnegative.cProtect = false;
          this.PI_columnchange.cProtect = false;

          this.PI_selection1.cProtect = false;
          this.PI_selection2.cProtect = false;
          this.PI_selection3.cProtect = false;
          this.PI_selection4.cProtect = false;
          this.PI_selection5.cProtect = false;
          this.PI_selection6.cProtect = false;
          this.PI_selection7.cProtect = false;
          this.PI_selection8.cProtect = false;
          this.PI_selection9.cProtect = false;
          this.PI_selection10.cProtect = false;

          this.PI_fromselection1.cProtect = true;
          this.PI_fromselection2.cProtect = true;
          this.PI_fromselection3.cProtect = true;
          this.PI_fromselection4.cProtect = true;
          this.PI_fromselection5.cProtect = true;
          this.PI_fromselection6.cProtect = true;
          this.PI_fromselection7.cProtect = true;
          this.PI_fromselection8.cProtect = true;
          this.PI_fromselection9.cProtect = true;
          this.PI_fromselection10.cProtect = true;

          this.PI_toselection1.cProtect = true;
          this.PI_toselection2.cProtect = true;
          this.PI_toselection3.cProtect = true;
          this.PI_toselection4.cProtect = true;
          this.PI_toselection5.cProtect = true;
          this.PI_toselection6.cProtect = true;
          this.PI_toselection7.cProtect = true;
          this.PI_toselection8.cProtect = true;
          this.PI_toselection9.cProtect = true;
          this.PI_toselection10.cProtect = true;

          break;
        case "T1":
        case "T2":
        case "T3":
        case "T4":
        case "T5":
        case "T6":
        case "T7":
          console.log("2");
          if (this.M_GL_ReportGeneratorRowDetail.rowtype != "T0") {
            this.PI_normalsign.cProtect = false;
            this.PI_suppressrow.cProtect = false;
          } else {
            this.PI_normalsign.cProtect = true;
            this.PI_suppressrow.cProtect = true;
          }
          this.PI_fromaccountcd.cProtect = true;
          this.PI_toaccountcd.cProtect = true;

          this.PI_accountdetail.cProtect = true;
          this.PI_reverseamt.cProtect = true;
          this.PI_suppressnegative.cProtect = true;
          this.PI_columnchange.cProtect = true;

          this.PI_fromselection1.cProtect = true;
          this.PI_fromselection2.cProtect = true;
          this.PI_fromselection3.cProtect = true;
          this.PI_fromselection4.cProtect = true;
          this.PI_fromselection5.cProtect = true;
          this.PI_fromselection6.cProtect = true;
          this.PI_fromselection7.cProtect = true;
          this.PI_fromselection8.cProtect = true;
          this.PI_fromselection9.cProtect = true;
          this.PI_fromselection10.cProtect = true;

          this.PI_toselection1.cProtect = true;
          this.PI_toselection2.cProtect = true;
          this.PI_toselection3.cProtect = true;
          this.PI_toselection4.cProtect = true;
          this.PI_toselection5.cProtect = true;
          this.PI_toselection6.cProtect = true;
          this.PI_toselection7.cProtect = true;
          this.PI_toselection8.cProtect = true;
          this.PI_toselection9.cProtect = true;
          this.PI_toselection10.cProtect = true;

          this.PI_selection1.cProtect = true;
          this.PI_selection2.cProtect = true;
          this.PI_selection3.cProtect = true;
          this.PI_selection4.cProtect = true;
          this.PI_selection5.cProtect = true;
          this.PI_selection6.cProtect = true;
          this.PI_selection7.cProtect = true;
          this.PI_selection8.cProtect = true;
          this.PI_selection9.cProtect = true;
          this.PI_selection10.cProtect = true;
          break;
        default:
          console.log("3");
          this.PI_fromaccountcd.cProtect = true;
          this.PI_toaccountcd.cProtect = true;
          this.PI_normalsign.cProtect = true;
          this.PI_suppressrow.cProtect = true;
          this.PI_accountdetail.cProtect = true;
          this.PI_reverseamt.cProtect = true;
          this.PI_suppressnegative.cProtect = true;
          this.PI_columnchange.cProtect = true;

          this.PI_fromselection1.cProtect = true;
          this.PI_fromselection2.cProtect = true;
          this.PI_fromselection3.cProtect = true;
          this.PI_fromselection4.cProtect = true;
          this.PI_fromselection5.cProtect = true;
          this.PI_fromselection6.cProtect = true;
          this.PI_fromselection7.cProtect = true;
          this.PI_fromselection8.cProtect = true;
          this.PI_fromselection9.cProtect = true;
          this.PI_fromselection10.cProtect = true;

          this.PI_toselection1.cProtect = true;
          this.PI_toselection2.cProtect = true;
          this.PI_toselection3.cProtect = true;
          this.PI_toselection4.cProtect = true;
          this.PI_toselection5.cProtect = true;
          this.PI_toselection6.cProtect = true;
          this.PI_toselection7.cProtect = true;
          this.PI_toselection8.cProtect = true;
          this.PI_toselection9.cProtect = true;
          this.PI_toselection10.cProtect = true;

          this.PI_selection1.cProtect = true;
          this.PI_selection2.cProtect = true;
          this.PI_selection3.cProtect = true;
          this.PI_selection4.cProtect = true;
          this.PI_selection5.cProtect = true;
          this.PI_selection6.cProtect = true;
          this.PI_selection7.cProtect = true;
          this.PI_selection8.cProtect = true;
          this.PI_selection9.cProtect = true;
          this.PI_selection10.cProtect = true;
          break;
      }
    },
    M_New() {
      let data = this.$store.getters.GetPage1Data;
      this.M_GL_ReportGeneratorRowDetail.tablerowcd = data.TableRowCd;
      // this.disabledEnabaledProp(true)

      this.$refs.ref_rowno.focus();
    },
    M_Edit() {
      this.$refs.ref_rowtype.focus();
      // this.disabledEnabaledProp(false)
      //ref_fromselection1 ref_toselection1
      if (this.M_GL_ReportGeneratorRowDetail.selection1 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection1,
          "ref_fromselection1",
          "ref_toselection1"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection2 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection2,
          "ref_fromselection2",
          "ref_toselection2"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection3 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection3,
          "ref_fromselection3",
          "ref_toselection3"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection4 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection4,
          "ref_fromselection4",
          "ref_toselection4"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection5 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection5,
          "ref_fromselection5",
          "ref_toselection5"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection6 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection6,
          "ref_fromselection6",
          "ref_toselection6"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection7 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection7,
          "ref_fromselection7",
          "ref_toselection7"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection8 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection8,
          "ref_fromselection8",
          "ref_toselection8"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection9 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection9,
          "ref_fromselection9",
          "ref_toselection9"
        );
      }
      if (this.M_GL_ReportGeneratorRowDetail.selection10 != "") {
        this.SetLookup(
          this.M_GL_ReportGeneratorRowDetail.selection10,
          "ref_fromselection10",
          "ref_toselection10"
        );
      }
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          _Message_: "",
          RowNo: value.RowNo,
          LastUpdateStamp: value.LastUpdateStamp
        });
      });

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataDelete
      };

      this.postJSONMulti(this.getUrlNewDeleteMulti(), param).then(response => {
        if (response == null) return;

        this.$parent.resultDelete();
      });
    },
    getDataBy(record) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        tablerowcd: record.TableRowCd,
        rowno: record.RowNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        if (response == null) return;

        var data = response.Data[0];
        var fstyle = [];

        if (data.fontstyle.includes("B")) {
          fstyle.push("B");
        }
        if (data.fontstyle.includes("I")) {
          fstyle.push("I");
        }
        if (data.fontstyle.includes("U")) {
          fstyle.push("U");
        }

        this.M_GL_ReportGeneratorRowDetail = {
          tablerowcd: data.tablerowcd,
          rowno: data.rowno,
          rowtype: data.rowtype,
          descs: data.descs,
          fromaccountcd: data.fromaccountcd,
          toaccountcd: data.toaccountcd,
          normalsign: data.normalsign,
          reverseamt: data.reverseamt,
          suppressrow: data.suppressrow,
          suppressnegative: data.suppressnegative,
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
          accountdetail: data.accountdetail,
          columnchange: data.columnchange,
          fontface: data.fontface,
          fontsize: data.fontsize,
          fontstyle: fstyle,
          indentlevel: data.indentlevel,
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid
        };

        this.M_GL_ReportGeneratorRowDetail.fromaccountcdLabel =
          this.M_GL_ReportGeneratorRowDetail.fromaccountcd != null
            ? data.fromaccountcd
            : "";
        this.M_GL_ReportGeneratorRowDetail.toaccountcdLabel =
          this.M_GL_ReportGeneratorRowDetail.toaccountcd != null
            ? data.toaccountcd
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection10Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection10 != null
            ? data.fromselection10
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection10Label =
          this.M_GL_ReportGeneratorRowDetail.toselection10 != null
            ? data.toselection10
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection2Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection2 != null
            ? data.fromselection2
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection2Label =
          this.M_GL_ReportGeneratorRowDetail.toselection2 != null
            ? data.toselection2
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection3Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection3 != null
            ? data.fromselection3
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection3Label =
          this.M_GL_ReportGeneratorRowDetail.toselection3 != null
            ? data.toselection3
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection4Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection4 != null
            ? data.fromselection4
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection4Label =
          this.M_GL_ReportGeneratorRowDetail.toselection4 != null
            ? data.toselection4
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection5Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection5 != null
            ? data.fromselection5
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection5Label =
          this.M_GL_ReportGeneratorRowDetail.toselection5 != null
            ? data.toselection5
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection6Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection6 != null
            ? data.fromselection6
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection6Label =
          this.M_GL_ReportGeneratorRowDetail.toselection6 != null
            ? data.toselection6
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection7Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection7 != null
            ? data.fromselection7
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection7Label =
          this.M_GL_ReportGeneratorRowDetail.toselection7 != null
            ? data.toselection7
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection8Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection8 != null
            ? data.fromselection8
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection8Label =
          this.M_GL_ReportGeneratorRowDetail.toselection8 != null
            ? data.toselection8
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection9Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection9 != null
            ? data.fromselection9
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection9Label =
          this.M_GL_ReportGeneratorRowDetail.toselection9 != null
            ? data.toselection9
            : "";
        this.M_GL_ReportGeneratorRowDetail.fromselection10Label =
          this.M_GL_ReportGeneratorRowDetail.fromselection10 != null
            ? data.fromselection10
            : "";
        this.M_GL_ReportGeneratorRowDetail.toselection10Label =
          this.M_GL_ReportGeneratorRowDetail.toselection10 != null
            ? data.toselection10
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
        this.$nextTick(() => {
          this.disabledEnabaledProp();
        });
        this.$forceUpdate();
      });
    }
  },
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.hideSideBarMenu();
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>

