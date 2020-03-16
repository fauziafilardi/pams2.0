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
                      <ABSInputSelectList
                        @change="OncontactidChange"
                        :prop="PI_contactid"
                        :value="M_CB_Bank.contactid"
                        :label="M_CB_Bank.contactidLabel"
                        ref="ref_contactid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_bankcd"
                        v-model="M_CB_Bank.bankcd"
                        ref="ref_bankcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_bankname"
                        v-model="M_CB_Bank.bankname"
                        ref="ref_bankname"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_bankaccountno"
                        v-model="M_CB_Bank.bankaccountno"
                        ref="ref_bankaccountno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnbankcurrencycdChange"
                        :prop="PI_bankcurrencycd"
                        :value="M_CB_Bank.bankcurrencycd"
                        :label="M_CB_Bank.bankcurrencycdLabel"
                        ref="ref_bankcurrencycd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnbankgroupcdChange"
                        :prop="PI_bankgroupcd"
                        :value="M_CB_Bank.bankgroupcd"
                        :label="M_CB_Bank.bankgroupcdLabel"
                        ref="ref_bankgroupcd"
                      />
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnprincipalbankcdChange" :prop="PI_principalbankcd" :value="M_CB_Bank.principalbankcd" :label="M_CB_Bank.principalbankcdLabel" ref="ref_principalbankcd"/>
                                      </b-col>
                  </b-row>-->
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnbankaccountcdChange"
                        :prop="PI_bankaccountcd"
                        :value="M_CB_Bank.bankaccountcd"
                        :label="M_CB_Bank.bankaccountcdLabel"
                        ref="ref_bankaccountcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OncommissionaccountcdChange"
                        :prop="PI_commissionaccountcd"
                        :value="M_CB_Bank.commissionaccountcd"
                        :label="M_CB_Bank.commissionaccountcdLabel"
                        ref="ref_commissionaccountcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnunderpaymentaccountcdChange"
                        :prop="PI_underpaymentaccountcd"
                        :value="M_CB_Bank.underpaymentaccountcd"
                        :label="M_CB_Bank.underpaymentaccountcdLabel"
                        ref="ref_underpaymentaccountcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnintersubbankChange"
                        :prop="PI_intersubbank"
                        v-model="M_CB_Bank.intersubbank"
                        ref="ref_intersubbank"
                      />
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankbalanceamt" v-model="M_CB_Bank.bankbalanceamt"  ref="ref_bankbalanceamt"/>
                                      </b-col>
                  </b-row>-->
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_bankreconcileamt"
                        v-model="M_CB_Bank.bankreconcileamt"
                        ref="ref_bankreconcileamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_maximumbankchargesamt"
                        v-model="M_CB_Bank.maximumbankchargesamt"
                        ref="ref_maximumbankchargesamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_maximumunderpaymentamt"
                        v-model="M_CB_Bank.maximumunderpaymentamt"
                        ref="ref_maximumunderpaymentamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_revaluationdate"
                        v-model="M_CB_Bank.revaluationdate"
                        ref="ref_revaluationdate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_revaluationcurrencyrate"
                        v-model="M_CB_Bank.revaluationcurrencyrate"
                        ref="ref_revaluationcurrencyrate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnstatusChange"
                        :prop="PI_status"
                        v-model="M_CB_Bank.status"
                        ref="ref_status"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnreasoncdChange"
                        :prop="PI_reasoncd"
                        :value="M_CB_Bank.reasoncd"
                        :label="M_CB_Bank.reasoncdLabel"
                        ref="ref_reasoncd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_reasondescs"
                        v-model="M_CB_Bank.reasondescs"
                        ref="ref_reasondescs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_CB_Bank.remarks"
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
      cInsertKey: "id=BankCd,label=BankCd+|+BankName",
      FormType: "List",
      Module: "CB",
      propList: {
        initialWhere:
          "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },

      M_CB_Bank: {
        descs: "",
        bankdescs: "",
        commissiondescs: "",
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        contactid: "",
        bankcd: "",
        bankname: "",
        bankaccountno: "",
        bankcurrencycd: "",
        bankaccountcd: "",
        underpaymentaccountcd: "",
        principalbankcd: "",
        principalbankdescs: "",
        underpaymentaccountdescs: "",
        commissionaccountcd: "",
        bankbalanceamt: "0",
        bankreconcileamt: "0",
        maximumunderpaymentamt: "0",
        maximumbankchargesamt: "0",
        contactname: "",
        reasondescription: "",
        bankgroupcd: "",
        bankgroupdescs: "",
        status: "A",
        reasoncd: "",
        reasondescs: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        t0: "",
        t1: "",
        t2: "",
        t3: "",
        t4: "",
        t5: "",
        t6: "",
        t7: "",
        t8: "",
        t9: "",
        t10: "",
        t11: "",
        t12: "",
        t13: "",
        t14: "",
        t15: "",
        t16: "",
        t17: "",
        t18: "",
        t19: "",
        t20: "",
        t21: "",
        t22: "",
        t23: "",
        t24: "",
        t25: "",
        t26: "",
        t27: "",
        t28: "",
        t29: "",
        t30: "",
        intersubbank: "N",
        timeedit: "",
        lastupdatestamp: 0,
        revaluationdate: "",
        revaluationcurrencyrate: 0,
        currencysign: "",
        rowid: 0
      },
      PI_contactid: {
        dataLookUp: {
          LookUpCd: "GetLookupCMContact",
          ColumnDB: "ContactId",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "contactid",
        cLabel: "Contact ID",
        cKey: true,
        cLabelSize: 4,
        cOrder: 1,
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
        cMasterUrl: "CM/CM_Contact",
        cDisplayColumn: "ContactId,Name"
      },
      PI_bankcd: {
        cValidate: "required|max:8",
        cName: "bankcd",
        cLabel: "Bank Code ",
        cLabelSize: 4,
        cOrder: 2,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_bankname: {
        cValidate: "required|max:50",
        cName: "bankname",
        cLabel: "Bank Name ",
        cLabelSize: 4,
        cOrder: 3,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_bankaccountno: {
        cValidate: "required|max:30",
        cName: "bankaccountno",
        cLabel: "Bank Account No ",
        cLabelSize: 4,
        cOrder: 4,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_bankcurrencycd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMCurrency",
          ColumnDB: "CurrencyCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "bankcurrencycd",
        cLabel: "Bank Curency",
        cKey: false,
        cLabelSize: 4,
        cOrder: 5,
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
        cMasterUrl: "CM/CM_CurrencyMaster",
        cDisplayColumn: "CurrencyCd,Descs"
      },
      PI_bankgroupcd: {
        dataLookUp: {
          LookUpCd: "GetLookUp_BankGroupCd",
          ColumnDB: "BankGroupCode",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "bankgroupcd",
        cLabel: "Bank Group Code",
        cKey: false,
        cLabelSize: 4,
        cOrder: 6,
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
        cMasterUrl: "CB/CB_BankGroup",
        cDisplayColumn: "BankGroupCode,Descs"
      },
      PI_principalbankcd: {
        dataLookUp: {
          LookUpCd: "GetLookUp_PrincipalBankCd",
          ColumnDB: "ParentBank",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "principalbankcd",
        cLabel: "Parent Bank",
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
        cMasterUrl: "",
        cDisplayColumn: ""
      },
      PI_bankaccountcd: {
        dataLookUp: {
          LookUpCd: "GetLookupGLAccountCodeBySubportfolio",
          ColumnDB: "AccountCd",
          InitialWhere:
            "STATUS = 'A' AND SUBPORTFOLIOCD = '" +
            this.getDataUser().SubPortfolioCd +
            "'",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "bankaccountcd",
        cLabel: "Bank Account Code",
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
        cDisplayColumn: "AccountCd,Description_1"
      },
      PI_commissionaccountcd: {
        dataLookUp: {
          LookUpCd: "GetLookupGLAccountCodeBySubportfolio",
          ColumnDB: "AccountCd",
          InitialWhere:
            "STATUS = 'A' AND SUBPORTFOLIOCD = '" +
            this.getDataUser().SubPortfolioCd +
            "'",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "commissionaccountcd",
        cLabel: "Bank Commission Account Code",
        cKey: false,
        cLabelSize: 4,
        cOrder: 9,
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
        cDisplayColumn: "AccountCd,Description_1"
      },
      PI_underpaymentaccountcd: {
        dataLookUp: {
          LookUpCd: "GetLookupGLAccountCode",
          ColumnDB: "AccountCd",
          InitialWhere: "STATUS = 'A'",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "underpaymentaccountcd",
        cLabel: "Under Payment Account Code",
        cKey: false,
        cLabelSize: 4,
        cOrder: 10,
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
        cDisplayColumn: "AccountCd,Description_1"
      },
      PI_intersubbank: {
        cValidate: "",
        cName: "intersubbank",
        cId: "rdbintersubbank",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "N",
        cLabel: "Intersubportfolio Bank",
        cLabelSize: 4,
        cOrder: 11,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_bankbalanceamt: {
        cValidate: "",
        cName: "bankbalanceamt",
        cLabel: "Bank Balance Amount",
        cLabelSize: 4,
        cOrder: 12,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_bankreconcileamt: {
        cValidate: "",
        cName: "bankreconcileamt",
        cLabel: "Last Bank Reconcile Amount",
        cLabelSize: 4,
        cOrder: 13,
        cKey: true,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_maximumbankchargesamt: {
        cValidate: "",
        cName: "maximumbankchargesamt",
        cLabel: "Maximum Bank Charges",
        cLabelSize: 4,
        cOrder: 14,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_maximumunderpaymentamt: {
        cValidate: "",
        cName: "maximumunderpaymentamt",
        cLabel: "Max. Under Payment Amount",
        cLabelSize: 4,
        cOrder: 15,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_revaluationdate: {
        cValidate: "",
        cName: "revaluationdate",
        cLabel: "Revaluation Date",
        cLabelSize: 4,
        cOrder: 16,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_revaluationcurrencyrate: {
        cValidate: "",
        cName: "revaluationcurrencyrate",
        cLabel: "Revaluation Rate",
        cLabelSize: 4,
        cOrder: 17,
        cKey: true,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_status: {
        cValidate: "",
        cName: "status",
        cId: "rdbstatus",
        cRadioOptions: [
          { text: "Active", value: "A" },
          { text: "NonActive", value: "N" }
        ],
        cRadioDefaultOption: "A",
        cLabel: "Status",
        cLabelSize: 4,
        cOrder: 18,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_reasoncd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMReason",
          ColumnDB: "ReasonCd",
          InitialWhere: "(ModuleCd = 'CB' OR ModuleCd IS NULL)",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "reasoncd",
        cLabel: "Reason",
        cKey: false,
        cLabelSize: 4,
        cOrder: 19,
        cTriggered: false,
        cDefault: "",
        cProtect: true,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "CM/CM_Reason",
        cDisplayColumn: "ReasonCd,Descs"
      },
      PI_reasondescs: {
        cValidate: "max:150",
        cName: "reasondescs",
        cLabel: "Reason Description",
        cLabelSize: 4,
        cOrder: 20,
        cKey: false,
        cType: "text",
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
        cOrder: 21,
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
      return this.$store.getters.GetPage1Data;
    }
  },
  methods: {
    OncontactidChange(data) {
      this.$nextTick(() => {
        this.M_CB_Bank.contactid = data.id;
        this.M_CB_Bank.contactidLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{contactid}
        }
      });
      this.$forceUpdate();
    },
    OnbankcurrencycdChange(data) {
      // console.log(data)
      this.$nextTick(() => {
        this.M_CB_Bank.bankcurrencycd = data.id;
        this.M_CB_Bank.bankcurrencycdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{bankcurrencycd}
        }
      });
      this.$forceUpdate();
    },
    OnbankgroupcdChange(data) {
      // console.log(data)
      this.$nextTick(() => {
        this.M_CB_Bank.bankgroupcd = data.id;
        this.M_CB_Bank.bankgroupcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{bankgroupcd}
        }
      });
      this.$forceUpdate();
    },
    OnprincipalbankcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Bank.principalbankcd = data.id;
        this.M_CB_Bank.principalbankcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{principalbankcd}
        }
      });
      this.$forceUpdate();
    },
    OnbankaccountcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Bank.bankaccountcd = data.id;
        this.M_CB_Bank.bankaccountcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{bankaccountcd}
        }
      });
      this.$forceUpdate();
    },
    OncommissionaccountcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Bank.commissionaccountcd = data.id;
        this.M_CB_Bank.commissionaccountcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{commissionaccountcd}
        }
      });
      this.$forceUpdate();
    },
    OnunderpaymentaccountcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Bank.underpaymentaccountcd = data.id;
        this.M_CB_Bank.underpaymentaccountcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{commissionaccountcd}
        }
      });
      this.$forceUpdate();
    },
    OnintersubbankChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{intersubbank}
        }
      });
      this.$forceUpdate();
    },
    OnstatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data == "A") {
            this.PI_reasoncd.cProtect = true;
            this.PI_reasondescs.cProtect = true;
            this.PI_reasoncd.cValidate = "";
            this.PI_reasondescs.cValidate = "";
            this.M_CB_Bank.reasoncd = "";
            this.M_CB_Bank.reasoncdLabel = "";
            this.M_CB_Bank.reasondescs = "";
          } else {
            this.PI_reasoncd.cProtect = false;
            this.PI_reasondescs.cProtect = false;
            this.PI_reasoncd.cValidate = "required";
            this.PI_reasondescs.cValidate = "required";
            this.M_CB_Bank.reasoncd = "";
            this.M_CB_Bank.reasoncdLabel = "";
            this.M_CB_Bank.reasondescs = "";
          }
        }
      });
      this.$forceUpdate();
    },
    OnreasoncdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Bank.reasoncd = data.id;
        this.M_CB_Bank.reasoncdLabel = data.label;
        this.M_CB_Bank.reasondescs = data.Descs;
        if (this.inputStatus != "VIEW") {
          //{reasoncd}
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
    paramFromParent() {},
    M_Post(dt) {},
    M_Insert() {
      if (this.M_CB_Bank.status == "A") {
        this.M_CB_Bank.reasoncd = "null";
        this.M_CB_Bank.reasondescs = "";
      }
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ContactId:
          this.M_CB_Bank.contactid == "" || this.M_CB_Bank.contactid == null
            ? "NULL"
            : this.M_CB_Bank.contactid,
        BankCd: this.M_CB_Bank.bankcd,
        BankAccountNo: this.M_CB_Bank.bankaccountno,
        BankCurrencyCd:
          this.M_CB_Bank.bankcurrencycd == "" ||
          this.M_CB_Bank.bankcurrencycd == null
            ? "NULL"
            : this.M_CB_Bank.bankcurrencycd,
        BankGroupCd:
          this.M_CB_Bank.bankgroupcd == "" || this.M_CB_Bank.bankgroupcd == null
            ? "NULL"
            : this.M_CB_Bank.bankgroupcd,
        BankAccountCd:
          this.M_CB_Bank.bankaccountcd == "" ||
          this.M_CB_Bank.bankaccountcd == null
            ? "NULL"
            : this.M_CB_Bank.bankaccountcd,
        UnderPaymentAccountCd:
          this.M_CB_Bank.underpaymentaccountcd == "" ||
          this.M_CB_Bank.underpaymentaccountcd == null
            ? "NULL"
            : this.M_CB_Bank.underpaymentaccountcd,
        CommissionAccountCd:
          this.M_CB_Bank.commissionaccountcd == "" ||
          this.M_CB_Bank.commissionaccountcd == null
            ? "NULL"
            : this.M_CB_Bank.commissionaccountcd,
        InterSubBank: this.M_CB_Bank.intersubbank,
        BankBalanceAmt: this.M_CB_Bank.bankbalanceamt
          ? this.replaceAllString(
              this.M_CB_Bank.bankbalanceamt,
              ",",
              "",
              "number"
            )
          : 0,
        BankReconcileAmt: this.M_CB_Bank.bankreconcileamt
          ? this.replaceAllString(
              this.M_CB_Bank.bankreconcileamt,
              ",",
              "",
              "number"
            )
          : 0,
        MaximumBankChargesAmt: this.M_CB_Bank.maximumbankchargesamt
          ? this.replaceAllString(
              this.M_CB_Bank.maximumbankchargesamt,
              ",",
              "",
              "number"
            )
          : 0,
        MaximumUnderPaymentAmt: this.M_CB_Bank.maximumunderpaymentamt
          ? this.replaceAllString(
              this.M_CB_Bank.maximumunderpaymentamt,
              ",",
              "",
              "number"
            )
          : 0,
        ParentBank:
          this.M_CB_Bank.principalbankcd == "" ||
          this.M_CB_Bank.principalbankcd == null
            ? "NULL"
            : this.M_CB_Bank.principalbankcd,
        T0: this.M_CB_Bank.t0,
        T1: this.M_CB_Bank.t1,
        T2: this.M_CB_Bank.t2,
        T3: this.M_CB_Bank.t3,
        T4: this.M_CB_Bank.t4,
        T5: this.M_CB_Bank.t5,
        T6: this.M_CB_Bank.t6,
        T7: this.M_CB_Bank.t7,
        T8: this.M_CB_Bank.t8,
        T9: this.M_CB_Bank.t9,
        T10: this.M_CB_Bank.t1,
        T11: this.M_CB_Bank.t1,
        T12: this.M_CB_Bank.t1,
        T13: this.M_CB_Bank.t1,
        T14: this.M_CB_Bank.t1,
        T15: this.M_CB_Bank.t1,
        T16: this.M_CB_Bank.t1,
        T17: this.M_CB_Bank.t1,
        T18: this.M_CB_Bank.t1,
        T19: this.M_CB_Bank.t1,
        T20: this.M_CB_Bank.t2,
        T21: this.M_CB_Bank.t2,
        T22: this.M_CB_Bank.t2,
        T23: this.M_CB_Bank.t2,
        T24: this.M_CB_Bank.t2,
        T25: this.M_CB_Bank.t2,
        T26: this.M_CB_Bank.t2,
        T27: this.M_CB_Bank.t2,
        T28: this.M_CB_Bank.t2,
        T29: this.M_CB_Bank.t2,
        T30: this.M_CB_Bank.t3,
        Status: this.M_CB_Bank.status,
        ReasonCd:
          this.M_CB_Bank.reasoncd == "" || this.M_CB_Bank.reasoncd == null
            ? "NULL"
            : this.M_CB_Bank.reasoncd,
        ReasonDescs: this.M_CB_Bank.reasondescs,
        Remarks: this.M_CB_Bank.remarks,
        UserInput: this.getDataUser().UserId,
        BankName: this.M_CB_Bank.bankname
      };

      this.postJSON(this.getUrlInsert(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultInsert(response.Message);
      });
    },
    M_Update() {
      if (this.M_CB_Bank.status == "A") {
        this.M_CB_Bank.reasoncd = "null";
        this.M_CB_Bank.reasondescs = "";
      }
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ContactId:
          this.M_CB_Bank.contactid == "" || this.M_CB_Bank.contactid == null
            ? "NULL"
            : this.M_CB_Bank.contactid,
        BankCd: this.M_CB_Bank.bankcd,
        BankAccountNo: this.M_CB_Bank.bankaccountno,
        BankCurrencyCd:
          this.M_CB_Bank.bankcurrencycd == "" ||
          this.M_CB_Bank.bankcurrencycd == null
            ? "NULL"
            : this.M_CB_Bank.bankcurrencycd,
        BankGroupCd:
          this.M_CB_Bank.bankgroupcd == "" || this.M_CB_Bank.bankgroupcd == null
            ? "NULL"
            : this.M_CB_Bank.bankgroupcd,
        BankAccountCd:
          this.M_CB_Bank.bankaccountcd == "" ||
          this.M_CB_Bank.bankaccountcd == null
            ? "NULL"
            : this.M_CB_Bank.bankaccountcd,
        UnderPaymentAccountCd:
          this.M_CB_Bank.underpaymentaccountcd == "" ||
          this.M_CB_Bank.underpaymentaccountcd == null
            ? "NULL"
            : this.M_CB_Bank.underpaymentaccountcd,
        CommissionAccountCd:
          this.M_CB_Bank.commissionaccountcd == "" ||
          this.M_CB_Bank.commissionaccountcd == null
            ? "NULL"
            : this.M_CB_Bank.commissionaccountcd,
        InterSubBank: this.M_CB_Bank.intersubbank,
        BankBalanceAmt: this.M_CB_Bank.bankbalanceamt
          ? this.replaceAllString(
              this.M_CB_Bank.bankbalanceamt,
              ",",
              "",
              "number"
            )
          : 0,
        MaximumBankChargesAmt: this.M_CB_Bank.maximumbankchargesamt
          ? this.replaceAllString(
              this.M_CB_Bank.maximumbankchargesamt,
              ",",
              "",
              "number"
            )
          : 0,
        MaximumUnderPaymentAmt: this.M_CB_Bank.maximumunderpaymentamt
          ? this.replaceAllString(
              this.M_CB_Bank.maximumunderpaymentamt,
              ",",
              "",
              "number"
            )
          : 0,
        ParentBank:
          this.M_CB_Bank.principalbankcd == "" ||
          this.M_CB_Bank.principalbankcd == null
            ? "NULL"
            : this.M_CB_Bank.principalbankcd,
        T0: this.M_CB_Bank.t0,
        T1: this.M_CB_Bank.t1,
        T2: this.M_CB_Bank.t2,
        T3: this.M_CB_Bank.t3,
        T4: this.M_CB_Bank.t4,
        T5: this.M_CB_Bank.t5,
        T6: this.M_CB_Bank.t6,
        T7: this.M_CB_Bank.t7,
        T8: this.M_CB_Bank.t8,
        T9: this.M_CB_Bank.t9,
        T10: this.M_CB_Bank.t1,
        T11: this.M_CB_Bank.t1,
        T12: this.M_CB_Bank.t1,
        T13: this.M_CB_Bank.t1,
        T14: this.M_CB_Bank.t1,
        T15: this.M_CB_Bank.t1,
        T16: this.M_CB_Bank.t1,
        T17: this.M_CB_Bank.t1,
        T18: this.M_CB_Bank.t1,
        T19: this.M_CB_Bank.t1,
        T20: this.M_CB_Bank.t2,
        T21: this.M_CB_Bank.t2,
        T22: this.M_CB_Bank.t2,
        T23: this.M_CB_Bank.t2,
        T24: this.M_CB_Bank.t2,
        T25: this.M_CB_Bank.t2,
        T26: this.M_CB_Bank.t2,
        T27: this.M_CB_Bank.t2,
        T28: this.M_CB_Bank.t2,
        T29: this.M_CB_Bank.t2,
        T30: this.M_CB_Bank.t3,
        Status: this.M_CB_Bank.status,
        ReasonCd:
          this.M_CB_Bank.reasoncd == "" || this.M_CB_Bank.reasoncd == null
            ? "NULL"
            : this.M_CB_Bank.reasoncd,
        ReasonDescs: this.M_CB_Bank.reasondescs,
        Remarks: this.M_CB_Bank.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_CB_Bank.lastupdatestamp,
        BankName: this.M_CB_Bank.bankname
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      // console.log(this.M_CB_Bank)
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          this.M_CB_Bank = {
            descs: "",
            bankdescs: "",
            commissiondescs: "",
            subportfoliocd: this.getDataUser().SubPortfolioCd,
            contactid: "",
            bankcd: "",
            bankname: "",
            bankaccountno: "",
            bankcurrencycd: "",
            bankaccountcd: "",
            underpaymentaccountcd: "",
            principalbankcd: "",
            principalbankdescs: "",
            underpaymentaccountdescs: "",
            commissionaccountcd: "",
            bankbalanceamt: "0",
            bankreconcileamt: "",
            maximumunderpaymentamt: "",
            maximumbankchargesamt: "",
            contactname: "",
            reasondescription: "",
            bankgroupcd: "",
            bankgroupdescs: "",
            status: "A",
            reasoncd: "",
            reasondescs: "",
            remarks: "",
            userinput: "",
            useredit: this.getDataUser().UserId,
            t0: "",
            t1: "",
            t2: "",
            t3: "",
            t4: "",
            t5: "",
            t6: "",
            t7: "",
            t8: "",
            t9: "",
            t10: "",
            t11: "",
            t12: "",
            t13: "",
            t14: "",
            t15: "",
            t16: "",
            t17: "",
            t18: "",
            t19: "",
            t20: "",
            t21: "",
            t22: "",
            t23: "",
            t24: "",
            t25: "",
            t26: "",
            t27: "",
            t28: "",
            t29: "",
            t30: "",
            intersubbank: "N",
            timeedit: "",
            lastupdatestamp: 0,
            revaluationdate: "",
            revaluationcurrencyrate: 0,
            currencysign: "",
            rowid: 0
          };
        }
      });
      this.$forceUpdate();
    },
    M_New() {
      this.$refs.ref_contactid.focus();
    },
    M_Edit() {
      this.$refs.ref_bankname.focus();
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ContactId: value.ContactID,
          BankCd: value.BankCd,
          LastUpdateStamp: value.LastUpdateStamp,
          _Message_: ""
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
      // console.log(record)
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        bankcd: record.BankCd,
        contactid: record.ContactID
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        this.M_CB_Bank = {
          descs: data.descs,
          bankdescs: data.bankdescs,
          commissiondescs: data.commissiondescs,
          subportfoliocd: data.subportfoliocd,
          contactid: data.contactid,
          bankcd: data.bankcd,
          bankname: data.bankname,
          bankaccountno: data.bankaccountno,
          bankcurrencycd: data.bankcurrencycd,
          bankaccountcd: data.bankaccountcd,
          underpaymentaccountcd: data.underpaymentaccountcd,
          principalbankcd: data.principalbankcd,
          principalbankdescs: data.principalbankdescs,
          underpaymentaccountdescs: data.underpaymentaccountdescs,
          commissionaccountcd: data.commissionaccountcd,
          bankbalanceamt: data.bankbalanceamt,
          bankreconcileamt: this.isCurrency(
            data.bankreconcileamt,
            this.decimal
          ),
          maximumunderpaymentamt: this.isCurrency(
            data.maximumunderpaymentamt,
            this.decimal
          ),
          maximumbankchargesamt: this.isCurrency(
            data.maximumbankchargesamt,
            this.decimal
          ),
          contactname: data.contactname,
          reasondescription: data.reasondescription,
          bankgroupcd: data.bankgroupcd,
          bankgroupdescs: data.bankgroupdescs,
          status: data.status,
          reasoncd: data.reasoncd,
          reasondescs: data.reasondescs,
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          t0: data.t0,
          t1: data.t1,
          t2: data.t2,
          t3: data.t3,
          t4: data.t4,
          t5: data.t5,
          t6: data.t6,
          t7: data.t7,
          t8: data.t8,
          t9: data.t9,
          t10: data.t10,
          t11: data.t11,
          t12: data.t12,
          t13: data.t13,
          t14: data.t14,
          t15: data.t15,
          t16: data.t16,
          t17: data.t17,
          t18: data.t18,
          t19: data.t19,
          t20: data.t20,
          t21: data.t21,
          t22: data.t22,
          t23: data.t23,
          t24: data.t24,
          t25: data.t25,
          t26: data.t26,
          t27: data.t27,
          t28: data.t28,
          t29: data.t29,
          t30: data.t30,
          intersubbank: data.intersubbank,
          timeedit: data.timeedit,
          lastupdatestamp: record.LastUpdateStamp,
          revaluationdate: data.revaluationdate,
          revaluationcurrencyrate: this.isCurrency(
            data.revaluationcurrencyrate,
            this.decimal
          ),
          currencysign: data.currencysign,
          rowid: data.rowid
        };

        this.M_CB_Bank.contactidLabel =
          this.M_CB_Bank.contactid != null && this.M_CB_Bank.contactid != ""
            ? data.contactid + this.separator + data.contactname
            : "";
        this.M_CB_Bank.bankcurrencycdLabel =
          this.M_CB_Bank.bankcurrencycd != null &&
          this.M_CB_Bank.bankcurrencycd != ""
            ? data.bankcurrencycd + this.separator + data.descs
            : "";
        this.M_CB_Bank.bankgroupcdLabel =
          this.M_CB_Bank.bankgroupcd != null && this.M_CB_Bank.bankgroupcd != ""
            ? data.bankgroupcd + this.separator + data.bankgroupdescs
            : "";
        this.M_CB_Bank.principalbankcdLabel =
          this.M_CB_Bank.principalbankcd != null &&
          this.M_CB_Bank.principalbankcd != ""
            ? data.principalbankcd + this.separator + data.principalbankdescs
            : "";
        this.M_CB_Bank.bankaccountcdLabel =
          this.M_CB_Bank.bankaccountcd != null &&
          this.M_CB_Bank.bankaccountcd != ""
            ? data.bankaccountcd + this.separator + data.bankdescs
            : "";
        this.M_CB_Bank.commissionaccountcdLabel =
          this.M_CB_Bank.commissionaccountcd != null &&
          this.M_CB_Bank.commissionaccountcd != ""
            ? data.commissionaccountcd + this.separator + data.commissiondescs
            : "";
        this.M_CB_Bank.reasoncdLabel =
          this.M_CB_Bank.reasoncd != null && this.M_CB_Bank.reasoncd != ""
            ? data.reasoncd + this.separator + data.reasondescription
            : "";
        this.M_CB_Bank.underpaymentaccountdescsLabel =
          this.M_CB_Bank.underpaymentaccountcd != null &&
          this.M_CB_Bank.underpaymentaccountcd != ""
            ? data.underpaymentaccountcd +
              this.separator +
              data.underpaymentaccountdescs
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
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
    this.FormToABSList().doGetList("", "eb_getList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>

