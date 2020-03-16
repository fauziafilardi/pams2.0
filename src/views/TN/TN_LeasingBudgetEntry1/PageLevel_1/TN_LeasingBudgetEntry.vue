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
                <b-col md="6" id="col-left">
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_budgetyear"
                        v-model="M_TN_LeasingBudgetEntry.budgetyear"
                        ref="ref_budgetyear"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnlotnoChange"
                        :prop="PI_lotno"
                        :value="M_TN_LeasingBudgetEntry.lotno"
                        :label="M_TN_LeasingBudgetEntry.lotnoLabel"
                        ref="ref_lotno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnprospectidChange"
                        :prop="PI_prospectid"
                        :value="M_TN_LeasingBudgetEntry.prospectid"
                        :label="M_TN_LeasingBudgetEntry.prospectidLabel"
                        ref="ref_prospectid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnbrandcdChange"
                        :prop="PI_brandcd"
                        :value="M_TN_LeasingBudgetEntry.brandcd"
                        :label="M_TN_LeasingBudgetEntry.brandcdLabel"
                        ref="ref_brandcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_leaseperiod"
                        v-model="M_TN_LeasingBudgetEntry.leaseperiod"
                        ref="ref_leaseperiod"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateVuex
                        @input="OntargetrcdChange"
                        :prop="PI_targetrcd"
                        v-model="M_TN_LeasingBudgetEntry.targetrcd"
                        ref="ref_targetrcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_antenna"
                        v-model="M_TN_LeasingBudgetEntry.antenna"
                        ref="ref_antenna"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_theme2"
                        v-model="M_TN_LeasingBudgetEntry.theme2"
                        ref="ref_theme2"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_class2"
                        v-model="M_TN_LeasingBudgetEntry.class2"
                        ref="ref_class2"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_category2"
                        v-model="M_TN_LeasingBudgetEntry.category2"
                        ref="ref_category2"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_lotcluster"
                        v-model="M_TN_LeasingBudgetEntry.lotcluster"
                        ref="ref_lotcluster"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputRadioButtonVuex
                        @input="OnfixchargesChange"
                        :prop="PI_fixcharges"
                        v-model="M_TN_LeasingBudgetEntry.fixcharges"
                        ref="ref_fixcharges"
                      />
                    </b-col>
                  </b-row>
                </b-col>

                <b-col md="6" id="col-right">
                  <!-- table open -->
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_existingtenant"
                        v-model="M_TN_LeasingBudgetEntry.existingtenant"
                        ref="ref_existingtenant"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_brandname"
                        v-model="M_TN_LeasingBudgetEntry.brandname"
                        ref="ref_brandname"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_brandcategory"
                        v-model="M_TN_LeasingBudgetEntry.brandcategory"
                        ref="ref_brandcategory"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_theme"
                        v-model="M_TN_LeasingBudgetEntry.theme"
                        ref="ref_theme"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_class"
                        v-model="M_TN_LeasingBudgetEntry.class"
                        ref="ref_class"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_category"
                        v-model="M_TN_LeasingBudgetEntry.category"
                        ref="ref_category"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateRangeVuex
                        :prop="PI_rcd"
                        :valueFrom="M_TN_LeasingBudgetEntry.rcd"
                        :valueTo="M_TN_LeasingBudgetEntry.red"
                        ref="ref_rcd"
                        @from="MdtRange_rcd"
                        @to="MdtRange_red"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_gross"
                        v-model="M_TN_LeasingBudgetEntry.gross"
                        ref="ref_gross"
                      />
                    </b-col>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_optiontorenew"
                        v-model="M_TN_LeasingBudgetEntry.optiontorenew"
                        ref="ref_optiontorenew"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_stoprenewal"
                        v-model="M_TN_LeasingBudgetEntry.stoprenewal"
                        ref="ref_stoprenewal"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_lastrentalrate"
                        v-model="M_TN_LeasingBudgetEntry.lastrentalrate"
                        ref="ref_lastrentalrate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_TN_LeasingBudgetEntry.remarks"
                        ref="ref_remarks"
                      />
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="12">
                  <ABSGrid
                    :prop="PI_grid"
                    :PageLevel="PageLevel"
                    :TabIndex="TabIndex"
                    v-model="datagrid"
                    ref="ref_GridBudgetRental"
                  />
                </b-col>
                <!-- table close -->
              </b-row>
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
      cInsertKey: "",
      FormType: "List",
      Module: "TN",
      propList: {
        initialWhere:
          "[Status] = 'N' AND SubPortfolioCd = '" +
          this.getDataUser().SubPortfolioCd +
          "'",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },
      TNSpec: "",

      M_TN_LeasingBudgetEntry: {
        leasingbudgetsequenceno: "",
        budgetyear: "",
        existingtenant: "",
        lotno: "",
        lotnoLabel: "",
        brandname: "",
        prospectid: "",
        prospectidLabel: "",
        brandcategory: "",
        brandcd: "",
        brandcdLabel: "",
        theme: "",
        leaseperiod: "",
        class: "",
        targetrcd: "",
        category: "",
        antenna: "",
        rcd: "",
        red: "",
        gross: "",
        grossarea: "",
        semigrossarea: "",
        netarea: "",
        optiontorenew: "",
        theme2: "",
        stoprenewal: "",
        class2: "",
        lastrentalrate: "",
        category2: "",
        remarks: "",
        lotcluster: "",
        fixcharges: "",
        lastupdatestamp: ""
      },
      datagrid: [],
      PI_budgetyear: {
        cValidate: "required|max:4",
        cName: "budgetyear",
        cLabel: "Year",
        cLabelSize: 4,
        cOrder: 1,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_existingtenant: {
        cValidate: "",
        cName: "existingtenant",
        cLabel: "Exisiting Tenant",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_lotno: {
        dataLookUp: {
          LookUpCd: "GetLotNoLookUp",
          ColumnDB: "LotNo",
          InitialWhere:
            "SubPortfolioCd = '" +
            this.getDataUser().SubPortfolioCd +
            "' AND LotUsage = 'L' AND Status = 'A'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "lotno",
        cLabel: "Lot No",
        cKey: false,
        cLabelSize: 4,
        cOrder: 2,
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
        cDisplayColumn: "LotNo,Descs"
      },
      PI_brandname: {
        cValidate: "",
        cName: "brandname",
        cLabel: "Brand Name",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_prospectid: {
        dataLookUp: {
          LookUpCd: "GetProspectId",
          ColumnDB: "ContactID",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "prospectid",
        cLabel: "Prospect ID",
        cKey: false,
        cLabelSize: 4,
        cOrder: 3,
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
        cDisplayColumn: "ContactID,Name"
      },
      PI_brandcategory: {
        cValidate: "",
        cName: "brandcategory",
        cLabel: "Brand Category",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_brandcd: {
        dataLookUp: {
          LookUpCd: "GetBrandCd",
          ColumnDB: "BrandCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "brandcd",
        cLabel: "Brand Code",
        cKey: false,
        cLabelSize: 4,
        cOrder: 4,
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
        cDisplayColumn: "BrandCd,BrandName"
      },
      PI_theme: {
        cValidate: "",
        cName: "theme",
        cLabel: "Theme",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_leaseperiod: {
        cValidate: "required",
        cName: "leaseperiod",
        cLabel: "Lease Period",
        cLabelSize: 4,
        cOrder: 5,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_class: {
        cValidate: "",
        cName: "class",
        cLabel: "Class",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_targetrcd: {
        cValidate: "required",
        cName: "targetrcd",
        cLabel: "Target RCD",
        cLabelSize: 4,
        cOrder: 5,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_category: {
        cValidate: "",
        cName: "category",
        cLabel: "Category",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_antenna: {
        cValidate: "",
        cName: "antenna",
        cLabel: "Antenna",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_rcd: {
        cValidate: "",
        cName: "rcd",
        cLabel: "RCD - RED",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_gross: {
        cValidate: "",
        cName: "gross",
        cLabel: "Gross/Semi/Net Area",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_optiontorenew: {
        cValidate: "",
        cName: "optiontorenew",
        cLabel: "Option To Renew",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_theme2: {
        cValidate: "",
        cName: "theme2",
        cLabel: "Theme",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_stoprenewal: {
        cValidate: "",
        cName: "stoprenewal",
        cLabel: "Stop Renewal",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_class2: {
        cValidate: "",
        cName: "class2",
        cLabel: "Class",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_lastrentalrate: {
        cValidate: "",
        cName: "lastrentalrate",
        cLabel: "Last Rental Rate",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_category2: {
        cValidate: "",
        cName: "category2",
        cLabel: "Category",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 7,
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
      PI_lotcluster: {
        cValidate: "",
        cName: "lotcluster",
        cLabel: "Lot Cluster",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_fixcharges: {
        cValidate: "",
        cName: "fixcharges",
        cId: "rdbfixcharges",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "N",
        cLabel: "Fix Charges",
        cLabelSize: 4,
        cOrder: 6,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_grid: {
        propList: null,
        cDisplayColumn: "budgetperiod,budgetrate=decimal,prevrate=decimal",
        cTotalColumn: "",
        isShowCheckBoxDelete: false,
        showNumber: true,
        comp: [
          {
            slot: "budgetperiod",
            compType: "ABSTextBoxOnly",
            cIsAlwaysShow: false,
            cHideRowColumnCSS: true,
            cValidate: "",
            cName: "budgetperiod",
            cLabel: "",
            cLabelSize: 4,
            cOrder: 0,
            cKey: false,
            cType: "text",
            cVisible: true,
            cProtect: false,
            cPageLevel: this.PageLevel,
            cTabIndex: this.TabIndex,
            cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
          },
          {
            slot: "budgetrate",
            compType: "ABSTextBoxOnly",
            cIsAlwaysShow: false,
            cHideRowColumnCSS: true,
            cValidate: "",
            cName: "budgetrate",
            cLabel: "",
            cLabelSize: 4,
            cOrder: 0,
            cKey: false,
            cType: "decimal",
            cVisible: true,
            cProtect: false,
            cPageLevel: this.PageLevel,
            cTabIndex: this.TabIndex,
            cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
          },
          {
            slot: "prevrate",
            compType: "ABSTextBoxOnly",
            cIsAlwaysShow: false,
            cHideRowColumnCSS: true,
            cValidate: "",
            cName: "prevrate",
            cLabel: "",
            cLabelSize: 4,
            cOrder: 0,
            cKey: true,
            cType: "decimal",
            cVisible: true,
            cProtect: true,
            cPageLevel: this.PageLevel,
            cTabIndex: this.TabIndex,
            cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
          }
        ],
        propGetDataBy: null,
        NoGetById: ""
      },
      CountL: "",
      CountC: ""
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
      return this.$store.getters.GetPage1Data;
    }
  },
  methods: {
    OnapplicationnoChange(data) {
      this.$nextTick(() => {
        this.M_TN_LeasingBudgetEntry.applicationno = data.id;
        this.M_TN_LeasingBudgetEntry.applicationnoLabel = data.label;
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OnlotnoChange(data) {
      this.$nextTick(() => {
        this.M_TN_LeasingBudgetEntry.lotno = data.id;
        this.M_TN_LeasingBudgetEntry.lotnoLabel = data.label;
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OnprospectidChange(data) {
      this.$nextTick(() => {
        this.M_TN_LeasingBudgetEntry.prospectid = data.id;
        this.M_TN_LeasingBudgetEntry.prospectidLabel = data.label;
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OnbrandcdChange(data) {
      this.$nextTick(() => {
        this.M_TN_LeasingBudgetEntry.brandcd = data.id;
        this.M_TN_LeasingBudgetEntry.brandcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OntargetrcdChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OnremarksChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OnfixchargesChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    MdtRange_rcd(data) {
      this.M_TN_LeasingBudgetEntry.rcd = data;
    },
    MdtRange_red(data) {
      this.M_TN_LeasingBudgetEntry.red = data;
    },
    setToolbarButton() {},
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
    paramFromParent() {},
    M_Post(dt) {},
    M_Insert() {
      var param1 = {
        _Method_: "SAVE",
        _LineNo_: this.$parent.data.PageOrder,
        SubportfolioCd: this.getDataUser().SubPortfolioCd,
        BudgetYear: this.M_TN_LeasingBudgetEntry.budgetyear,
        LotNo: this.M_TN_LeasingBudgetEntry.lotno,
        ProspectID:
          this.M_TN_LeasingBudgetEntry.prospectid == "" ||
          this.M_TN_LeasingBudgetEntry.prospectid == null
            ? "NULL"
            : this.M_TN_LeasingBudgetEntry.prospectid,
        BrandCd: this.M_TN_LeasingBudgetEntry.brandcd,
        LeasePeriod: this.M_TN_LeasingBudgetEntry.leaseperiod,
        TargetRCD:
          this.M_TN_LeasingBudgetEntry.targetrcd == "" ||
          this.M_TN_LeasingBudgetEntry.targetrcd == null
            ? "NULL"
            : this.M_TN_LeasingBudgetEntry.targetrcd,
        Status: "N",
        Remarks: this.M_TN_LeasingBudgetEntry.remarks,
        UserInput: this.getDataUser().UserId,
        LeasingBudgetSequenceNo_Output: ""
      };

      var dataBudgetRental = [];
      for (let x = 0; x < this.datagrid.length; x++) {
        dataBudgetRental.push({
          _Method_: "SAVE2",
          _LineNo_: this.$parent.data.PageOrder,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          LeasingBudgetSequenceNo: "LeasingBudgetSequenceNo",
          BudgetRentalLineNo: this.datagrid[x].budgetrentallineno,
          BudgetPeriod: this.datagrid[x].budgetperiod,
          BudgetRate: this.datagrid[x].budgetrate
            ? this.replaceAllString(
                this.datagrid[x].budgetrate,
                ",",
                "",
                "number"
              )
            : 0,
          UserInput: this.getDataUser().UserId
        });
      }

      var param2 = {
        _Method_: "SAVE4",
        _LineNo_: this.$parent.data.PageOrder,
        SubportfolioCd: this.getDataUser().SubPortfolioCd,
        LeasingBudgetSequenceNo: this.M_TN_LeasingBudgetEntry
          .leasingbudgetsequenceno
      };

      var dataToPost = [
        {
          A_Insert: param1,
          B_Looping_Insert: dataBudgetRental,
          C_Validasi: param2
        }
      ];

      var paramToPost = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataToPost
      };

      this.postJSONMulti(this.getUrlProsesDataPostMulti(), paramToPost).then(
        response => {
          if (response == null) return;
          this.$parent.resultInsert("Data Has Been Save Successfully");
        }
      );
    },
    M_Update() {
      var param1 = {
        _Method_: "UPDATE",
        _LineNo_: this.$parent.data.PageOrder,
        LeasingBudgetSequenceNo: this.M_TN_LeasingBudgetEntry
          .leasingbudgetsequenceno,
        SubportfolioCd: this.getDataUser().SubPortfolioCd,
        BudgetYear: this.M_TN_LeasingBudgetEntry.budgetyear,
        LotNo: this.M_TN_LeasingBudgetEntry.lotno,
        ProspectID:
          this.M_TN_LeasingBudgetEntry.prospectid == "" ||
          this.M_TN_LeasingBudgetEntry.prospectid == null
            ? "NULL"
            : this.M_TN_LeasingBudgetEntry.prospectid,
        BrandCd: this.M_TN_LeasingBudgetEntry.brandcd,
        LeasePeriod: this.M_TN_LeasingBudgetEntry.leaseperiod,
        TargetRCD:
          this.M_TN_LeasingBudgetEntry.targetrcd == "" ||
          this.M_TN_LeasingBudgetEntry.targetrcd == null
            ? "NULL"
            : this.M_TN_LeasingBudgetEntry.targetrcd,
        Status: "N",
        Remarks: this.M_TN_LeasingBudgetEntry.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_TN_LeasingBudgetEntry.lastupdatestamp
      };

      var dataBudgetRental = [];
      for (let x = 0; x < this.datagrid.length; x++) {
        dataBudgetRental.push({
          _Method_: "SAVE2",
          _LineNo_: this.$parent.data.PageOrder,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          LeasingBudgetSequenceNo: this.M_TN_LeasingBudgetEntry
            .leasingbudgetsequenceno,
          BudgetRentalLineNo: this.datagrid[x].budgetrentallineno,
          BudgetPeriod: this.datagrid[x].budgetperiod,
          BudgetRate: this.datagrid[x].budgetrate
            ? this.replaceAllString(
                this.datagrid[x].budgetrate,
                ",",
                "",
                "number"
              )
            : 0,
          UserInput: this.getDataUser().UserId
        });
      }

      var param2 = {
        _Method_: "SAVE4",
        _LineNo_: this.$parent.data.PageOrder,
        SubportfolioCd: this.getDataUser().SubPortfolioCd,
        LeasingBudgetSequenceNo: this.M_TN_LeasingBudgetEntry
          .leasingbudgetsequenceno
      };

      var dataToPost = [
        {
          A_Update: param1,
          B_Looping_Insert: dataBudgetRental,
          C_Validasi: param2
        }
      ];

      var paramToPost = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataToPost
      };

      this.postJSONMulti(this.getUrlProsesDataPostMulti(), paramToPost).then(
        response => {
          if (response == null) return;
          this.$parent.resultInsert("Data Has Been Update Successfully");
        }
      );
    },
    M_ClearForm() {
      this.M_TN_LeasingBudgetEntry = {
        leasingbudgetsequenceno: "",
        budgetyear: "",
        existingtenant: "",
        lotno: "",
        lotnoLabel: "",
        brandname: "",
        prospectid: "",
        prospectidLabel: "",
        brandcategory: "",
        brandcd: "",
        brandcdLabel: "",
        theme: "",
        leaseperiod: "",
        class: "",
        targetrcd: "",
        category: "",
        antenna: "",
        rcd: "",
        red: "",
        gross: "",
        grossarea: "",
        semigrossarea: "",
        netarea: "",
        optiontorenew: "",
        theme2: "",
        stoprenewal: "",
        class2: "",
        lastrentalrate: "",
        category2: "",
        remarks: "",
        lotcluster: "",
        fixcharges: "",
        lastupdatestamp: ""
      };
    },
    M_New() {
      var paramGrid = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder
      };

      this.PI_brandcd.dataLookUp.InitialWhere = "";
      this.PI_grid.propGetDataBy = paramGrid;
      this.PI_grid.NoGetById = "3";
      this.$refs.ref_GridBudgetRental.doGetList("", "eb_getList");
    },
    M_Edit() {},
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          LeasingBudgetSequenceNo: value.LeasingBudgetSequenceNo,
          LastUpdateStamp: value.LastUpdateStamp,
          Status: "N",
          _Message_:
            "Leasing Budget Sequence No " + value.LeasingBudgetSequenceNo
        });
      });

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataDelete
      };

      this.postJSONMulti(this.getUrlNewDeleteMulti(), param).then(response => {
        if (response == null) return;
        this.$parent.resultUpdate();
      });
    },
    getDataBy(record) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        LeasingBudgetSequenceNo: record.LeasingBudgetSequenceNo,
        Status: "N",
        LotNo: record.LotNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        this.M_TN_LeasingBudgetEntry = {
          leasingbudgetsequenceno: data.leasingbudgetsequenceno,
          budgetyear: data.budgetyear,
          existingtenant: data.existingtenant,
          lotno: data.lotno,
          lotnoLabel: data.descs,
          brandname: data.brandname2,
          prospectid: data.prospectid,
          prospectidLabel: data.prospectid,
          brandcategory: data.lotcatdesc2,
          brandcd: data.brandcd,
          brandcdLabel: data.brandname,
          theme: data.lotthemedesc2,
          leaseperiod: data.leaseperiod,
          class: data.lotclassdesc2,
          targetrcd: data.targetrcd,
          category: data.lotcatdesc2,
          antenna: data.antenna == "Y" ? "Yes" : "No",
          rcd: data.rcd,
          red: data.red,
          gross:
            this.isCurrency(data.grossarea, this.decimal) +
            " / " +
            this.isCurrency(data.semigrossarea, this.decimal) +
            " / " +
            this.isCurrency(data.netarea, this.decimal),
          grossarea: data.grossarea,
          semigrossarea: data.semigrossarea,
          netarea: data.netarea,
          optiontorenew: data.renewalperiod,
          theme2: data.lotthemedesc,
          stoprenewal: data.stopafterleasestatus == "Y" ? "Yes" : "No",
          class2: data.lotclassdesc,
          lastrentalrate: this.isCurrency(data.rentalrate, this.decimal),
          category2: data.lotcatdesc,
          remarks: data.remarks,
          lotcluster: data.customercategorydescs,
          fixcharges: data.fixcharges,
          lastupdatestamp: record.LastUpdateStamp
        };

        this.M_TN_LeasingBudgetEntry.lotnoLabel =
          data.lotno && data.lotno != ""
            ? data.lotno + this.separator + data.descs
            : "";
        this.M_TN_LeasingBudgetEntry.prospectidLabel =
          data.prospectid && data.prospectid != "" ? data.prospectid : "";
        this.M_TN_LeasingBudgetEntry.brandcdLabel =
          data.brandcd && data.brandcd != ""
            ? data.brandcd + this.separator + data.brandname
            : "";
        this.M_TN_LeasingBudgetEntry.lotnoLabel =
          data.lotno && data.lotno != ""
            ? data.lotno + this.separator + data.descs
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;

        var paramGrid = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          LeasingBudgetSequenceNo: record.LeasingBudgetSequenceNo,
          Year: record.BudgetYear,
          LotNo: record.LotNo
        };

        this.PI_grid.propGetDataBy = paramGrid;
        this.PI_grid.NoGetById = "2";
        this.$refs.ref_GridBudgetRental.doGetList("", "eb_getList");
        this.getInitialWhereForBrand(record.LotNo);
      });
    },
    getCount() {
      if (
        !this.M_TN_LeasingBudgetEntry.prospectid ||
        this.M_TN_LeasingBudgetEntry.prospectid == null ||
        this.M_TN_LeasingBudgetEntry.prospectid == ""
      ) {
        this.CountL = 0;
        this.CountC = 0;
        this.getInitialWhereForBrand("");
      } else {
        var param = {
          OptionFunctionCd: "GetCountBrand",
          ModuleCd: "TN",
          ProspectID: this.M_TN_LeasingBudgetEntry.prospectid
        };

        this.FnDynamicFunction(param).then(FnOpt2 => {
          if (FnOpt2 == null) return;
          if (FnOpt2 != null) {
            if (FnOpt2.length > 0) {
              var data = FnOpt2[0];
              this.CountL = data.CountInStatusL;
              this.CountC = data.CountInStatusC;
              this.getInitialWhereForBrand("");
            }
          }
        });
      }
    },
    getInitialWhereForBrand(LotNo) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: 1,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        LotNo: LotNo
      };

      var where = "";

      this.postEncode(this.getUrlById(), param).then(response => {
        if (response == null) return;
        if (response.Data.length < 1) {
          return;
        }
        var LotUsage = response.Data[0].lotusage;

        if (LotUsage == "L") {
          where = " LeasingStatus = 'Y' ";
          if (
            this.M_TN_LeasingBudgetEntry.prospectid &&
            this.M_TN_LeasingBudgetEntry.prospectid != "" &&
            this.CountL > 0
          ) {
            where +=
              " AND BrandOwnerId = '" +
              this.M_TN_LeasingBudgetEntry.prospectid +
              "' ";
          }
        } else if (LotUsage == "C") {
          where = " CLStatus = 'Y' ";
          if (
            this.M_TN_LeasingBudgetEntry.prospectid &&
            this.M_TN_LeasingBudgetEntry.prospectid != "" &&
            this.CountC > 0
          ) {
            where +=
              " AND BrandOwnerId = '" +
              this.M_TN_LeasingBudgetEntry.prospectid +
              "' ";
          }
        } else {
          if (
            this.M_TN_LeasingBudgetEntry.prospectid &&
            this.M_TN_LeasingBudgetEntry.prospectid != ""
          ) {
            where =
              " BrandOwnerId = '" +
              this.M_TN_LeasingBudgetEntry.prospectid +
              "' ";
          }
        }

        this.PI_brandcd.dataLookUp.InitialWhere = where;
      });
    }
  },
  beforeCreate: function() {},
  created: function() {
    this.$store.commit("setFormType", "List");
    this.getToolbar().ProcessPS();
  },
  beforeMount: function() {},
  mounted: function() {
    this.hideSideBarMenu();
    this.getCount();
    this.FormToABSList().doGetList("", "eb_getList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>