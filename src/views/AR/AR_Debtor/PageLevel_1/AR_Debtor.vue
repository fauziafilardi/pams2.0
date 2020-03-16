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
                        :value="M_AR_Debtor.contactid"
                        :label="M_AR_Debtor.contactidLabel"
                        ref="ref_contactid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_debtorcd"
                        v-model="M_AR_Debtor.debtorcd"
                        ref="ref_debtorcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_businessname"
                        v-model="M_AR_Debtor.businessname"
                        ref="ref_businessname"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_passwordattachment"
                        v-model="M_AR_Debtor.passwordattachment"
                        ref="ref_passwordattachment"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_referenceno"
                        v-model="M_AR_Debtor.referenceno"
                        ref="ref_referenceno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OncredittermscdChange"
                        :prop="PI_credittermscd"
                        :value="M_AR_Debtor.credittermscd"
                        :label="M_AR_Debtor.credittermscdLabel"
                        ref="ref_credittermscd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_creditlimit"
                        v-model="M_AR_Debtor.creditlimit"
                        ref="ref_creditlimit"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnvatpaidbyChange"
                        :prop="PI_vatpaidby"
                        v-model="M_AR_Debtor.vatpaidby"
                        ref="ref_vatpaidby"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnwithholdingpaidbyChange"
                        :prop="PI_withholdingpaidby"
                        v-model="M_AR_Debtor.withholdingpaidby"
                        ref="ref_withholdingpaidby"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnreminderChange"
                        :prop="PI_reminder"
                        v-model="M_AR_Debtor.reminder"
                        ref="ref_reminder"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnpenaltyChange"
                        :prop="PI_penalty"
                        v-model="M_AR_Debtor.penalty"
                        ref="ref_penalty"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_graceperiod"
                        v-model="M_AR_Debtor.graceperiod"
                        ref="ref_graceperiod"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnstatusChange"
                        :prop="PI_status"
                        v-model="M_AR_Debtor.status"
                        ref="ref_status"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnreasoncdChange"
                        :prop="PI_reasoncd"
                        :value="M_AR_Debtor.reasoncd"
                        :label="M_AR_Debtor.reasoncdLabel"
                        ref="ref_reasoncd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_reasondescs"
                        v-model="M_AR_Debtor.cmreasondescs"
                        ref="ref_cmreasondescs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OndebtoraccountcdChange"
                        :prop="PI_debtoraccountcd"
                        :value="M_AR_Debtor.debtoraccountcd"
                        :label="M_AR_Debtor.debtoraccountcdLabel"
                        ref="ref_debtoraccountcd"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">Debtor Analysis</span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_AR_Debtor.remarks"
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
      cInsertKey: "id=DebtorCd,label=DebtorCd+|+BusinessName",
      FormType: "List",
      Module: "AR",
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

      M_AR_Debtor: {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        contactid: "",
        debtorcd: "",
        passwordattachment: "",
        referenceno: "",
        credittermscd: "",
        creditlimit: "0",
        vatpaidby: "M",
        withholdingpaidby: "D",
        d0: "",
        d1: "",
        d2: "",
        d3: "",
        d4: "",
        d5: "",
        d6: "",
        d7: "",
        d8: "",
        d9: "",
        graceperiod: "0",
        reminder: "Y",
        penalty: "Y",
        reasoncd: "",
        status: "Y",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        credittermsdescs: "",
        cmreasondescs: "",
        contactname: "",
        outstandingtransactioncount: 0,
        debtoraccountcd: "",
        debtoraccountdescs: "",
        businessname: "",
        timeedit: "",
        lastupdatestamp: 0,
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
        cMasterUrl: "",
        cDisplayColumn: "ContactId,Name"
      },
      PI_debtorcd: {
        cValidate: "required|max:10",
        cName: "debtorcd",
        cLabel: "Debtor Code",
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
      PI_businessname: {
        cValidate: "max:50",
        cName: "businessname",
        cLabel: "Business Name",
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
      PI_referenceno: {
        cValidate: "max:20",
        cName: "referenceno",
        cLabel: "Reference No",
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
      PI_credittermscd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMCreditTerms",
          ColumnDB: "CreditTermsCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "credittermscd",
        cLabel: "Credit Terms",
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
        cMasterUrl: "CM/CM_CreditTerms",
        cDisplayColumn: "CreditTermsCd,Descs"
      },
      PI_creditlimit: {
        cValidate: "required|max:16",
        cName: "creditlimit",
        cLabel: "Credit Limit",
        cLabelSize: 4,
        cLastLabel: "(base amount)",
        cOrder: 6,
        cKey: false,
        cType: "numeric",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_vatpaidby: {
        cValidate: "",
        cName: "vatpaidby",
        cId: "rdbvatpaidby",
        cRadioOptions: [
          { text: "Debtor", value: "D" },
          { text: "Management", value: "M" }
        ],
        cRadioDefaultOption: "M",
        cLabel: "VAT Paid By ",
        cLabelSize: 4,
        cOrder: 8,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_withholdingpaidby: {
        cValidate: "",
        cName: "withholdingpaidby",
        cId: "rdbwithholdingpaidby",
        cRadioOptions: [
          { text: "Debtor", value: "D" },
          { text: "Management", value: "M" }
        ],
        cRadioDefaultOption: "D",
        cLabel: "Withholding Tax Paid By   ",
        cLabelSize: 4,
        cOrder: 9,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_reminder: {
        cValidate: "",
        cName: "reminder",
        cId: "rdbreminder",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "Y",
        cLabel: "Reminder ",
        cLabelSize: 4,
        cOrder: 10,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_penalty: {
        cValidate: "",
        cName: "penalty",
        cId: "rdbpenalty",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "Y",
        cLabel: "Penalty ",
        cLabelSize: 4,
        cOrder: 11,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_graceperiod: {
        cValidate: "required|max:12",
        cName: "graceperiod",
        cLabel: "Grace Period",
        cLabelSize: 4,
        cOrder: 12,
        cKey: false,
        cType: "numeric",
        cLastLabel: "days",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_status: {
        cValidate: "",
        cName: "status",
        cId: "rdbstatus",
        cRadioOptions: [
          { text: "Active", value: "Y" },
          { text: "Non Active", value: "N" }
        ],
        cRadioDefaultOption: "Y",
        cLabel: "Status ",
        cLabelSize: 4,
        cOrder: 13,
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
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "reasoncd",
        cLabel: "Reason",
        cKey: false,
        cLabelSize: 4,
        cOrder: 14,
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
        cName: "cmreasondescs",
        cLabel: "Reason Description",
        cLabelSize: 4,
        cOrder: 15,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_debtoraccountcd: {
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
        cName: "debtoraccountcd",
        cLabel: "* Aging Report Account",
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
        cDisplayColumn: "AccountCd,Description_1"
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 17,
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
        this.M_AR_Debtor.contactid = data.id;
        this.M_AR_Debtor.contactidLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{contactid}
        }
      });
      this.$forceUpdate();
    },
    OncredittermscdChange(data) {
      this.$nextTick(() => {
        this.M_AR_Debtor.credittermscd = data.id;
        this.M_AR_Debtor.credittermscdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{credittermscd}
        }
      });
      this.$forceUpdate();
    },
    OnvatpaidbyChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{vatpaidby}
        }
      });
      this.$forceUpdate();
    },
    OnwithholdingpaidbyChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{withholdingpaidby}
        }
      });
      this.$forceUpdate();
    },
    OnreminderChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{reminder}
        }
      });
      this.$forceUpdate();
    },
    OnpenaltyChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{penalty}
        }
      });
      this.$forceUpdate();
    },
    OnstatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data == "N") {
            this.PI_reasoncd.cProtect = false;
            this.PI_reasondescs.cProtect = false;
            this.PI_reasondescs.cValidate = "required";
          } else {
            this.PI_reasoncd.cProtect = true;
            this.PI_reasondescs.cProtect = true;
            this.M_AR_Debtor.reasoncd = "";
            this.M_AR_Debtor.reasoncdLabel = "";
            this.M_AR_Debtor.cmreasondescs = "";
            this.PI_reasondescs.cValidate = "";
          }
        }
      });
      this.$forceUpdate();
    },
    OnreasoncdChange(data) {
      this.$nextTick(() => {
        this.M_AR_Debtor.reasoncd = data.id;
        this.M_AR_Debtor.reasoncdLabel = data.label;
        this.M_AR_Debtor.cmreasondescs = data.Descs;
        if (this.inputStatus != "VIEW") {
          //{reasoncd}
        }
      });
      this.$forceUpdate();
    },
    OndebtoraccountcdChange(data) {
      this.$nextTick(() => {
        this.M_AR_Debtor.debtoraccountcd = data.id;
        this.M_AR_Debtor.debtoraccountcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{debtoraccountcd}
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
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ContactId:
          this.M_AR_Debtor.contactid == "" || this.M_AR_Debtor.contactid == null
            ? "NULL"
            : this.M_AR_Debtor.contactid,
        DebtorCd: this.M_AR_Debtor.debtorcd,
        PasswordAttachment: this.M_AR_Debtor.passwordattachment,
        ReferenceNo: this.M_AR_Debtor.referenceno,
        CreditTermsCd:
          this.M_AR_Debtor.credittermscd == "" ||
          this.M_AR_Debtor.credittermscd == null
            ? "NULL"
            : this.M_AR_Debtor.credittermscd,
        CreditLimit: this.M_AR_Debtor.creditlimit
          ? this.replaceAllString(
              this.M_AR_Debtor.creditlimit,
              ",",
              "",
              "number"
            )
          : 0,
        VATPaidBy: this.M_AR_Debtor.vatpaidby,
        WithholdingPaidBy: this.M_AR_Debtor.withholdingpaidby,
        Reminder: this.M_AR_Debtor.reminder,
        Penalty: this.M_AR_Debtor.penalty,
        GracePeriod: this.M_AR_Debtor.graceperiod,
        D0: this.M_AR_Debtor.d0,
        D1: this.M_AR_Debtor.d1,
        D2: this.M_AR_Debtor.d2,
        D3: this.M_AR_Debtor.d3,
        D4: this.M_AR_Debtor.d4,
        D5: this.M_AR_Debtor.d5,
        D6: this.M_AR_Debtor.d6,
        D7: this.M_AR_Debtor.d7,
        D8: this.M_AR_Debtor.d8,
        D9: this.M_AR_Debtor.d9,
        TerminateBy: this.getDataUser().UserId,
        TerminateDate: this.getToday(this.M_AR_Debtor.terminatedate),
        ReasonCd:
          this.M_AR_Debtor.reasoncd == "" || this.M_AR_Debtor.reasoncd == null
            ? "NULL"
            : this.M_AR_Debtor.reasoncd,
        ReasonDescs: this.M_AR_Debtor.cmreasondescs,
        Status: this.M_AR_Debtor.status,
        Remarks: this.M_AR_Debtor.remarks,
        UserInput: this.getDataUser().UserId,
        DebtorAccountCd:
          this.M_AR_Debtor.debtoraccountcd == "" ||
          this.M_AR_Debtor.debtoraccountcd == null
            ? "NULL"
            : this.M_AR_Debtor.debtoraccountcd,
        BusinessName: this.M_AR_Debtor.businessname
      };

      this.postJSON(this.getUrlInsert(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultInsert(response.Message);
      });
    },
    M_Update() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ContactId:
          this.M_AR_Debtor.contactid == "" || this.M_AR_Debtor.contactid == null
            ? "NULL"
            : this.M_AR_Debtor.contactid,
        DebtorCd: this.M_AR_Debtor.debtorcd,
        PasswordAttachment: this.M_AR_Debtor.passwordattachment,
        ReferenceNo: this.M_AR_Debtor.referenceno,
        CreditTermsCd:
          this.M_AR_Debtor.credittermscd == "" ||
          this.M_AR_Debtor.credittermscd == null
            ? "NULL"
            : this.M_AR_Debtor.credittermscd,
        CreditLimit: this.M_AR_Debtor.creditlimit
          ? this.replaceAllString(
              this.M_AR_Debtor.creditlimit,
              ",",
              "",
              "number"
            )
          : 0,
        VATPaidBy: this.M_AR_Debtor.vatpaidby,
        WithholdingPaidBy: this.M_AR_Debtor.withholdingpaidby,
        Reminder: this.M_AR_Debtor.reminder,
        Penalty: this.M_AR_Debtor.penalty,
        GracePeriod: this.M_AR_Debtor.graceperiod,
        D0: this.M_AR_Debtor.d0,
        D1: this.M_AR_Debtor.d1,
        D2: this.M_AR_Debtor.d2,
        D3: this.M_AR_Debtor.d3,
        D4: this.M_AR_Debtor.d4,
        D5: this.M_AR_Debtor.d5,
        D6: this.M_AR_Debtor.d6,
        D7: this.M_AR_Debtor.d7,
        D8: this.M_AR_Debtor.d8,
        D9: this.M_AR_Debtor.d9,
        TerminateBy: this.getDataUser().UserId,
        TerminateDate: this.getToday(this.M_AR_Debtor.terminatedate),
        ReasonCd:
          this.M_AR_Debtor.reasoncd == "" || this.M_AR_Debtor.reasoncd == null
            ? "NULL"
            : this.M_AR_Debtor.reasoncd,
        ReasonDescs: this.M_AR_Debtor.cmreasondescs,
        Status: this.M_AR_Debtor.status,
        Remarks: this.M_AR_Debtor.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_AR_Debtor.lastupdatestamp,
        DebtorAccountCd:
          this.M_AR_Debtor.debtoraccountcd == "" ||
          this.M_AR_Debtor.debtoraccountcd == null
            ? "NULL"
            : this.M_AR_Debtor.debtoraccountcd,
        BusinessName: this.M_AR_Debtor.businessname
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_AR_Debtor = {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        contactid: "",
        debtorcd: "",
        passwordattachment: "",
        referenceno: "",
        credittermscd: "",
        creditlimit: "0",
        vatpaidby: "M",
        withholdingpaidby: "D",
        d0: "",
        d1: "",
        d2: "",
        d3: "",
        d4: "",
        d5: "",
        d6: "",
        d7: "",
        d8: "",
        d9: "",
        graceperiod: "0",
        reminder: "Y",
        penalty: "Y",
        reasoncd: "",
        status: "Y",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        credittermsdescs: "",
        cmreasondescs: "",
        contactname: "",
        outstandingtransactioncount: 0,
        debtoraccountcd: "",
        debtoraccountdescs: "",
        businessname: "",
        timeedit: "",
        lastupdatestamp: 0,
        rowid: 0
      };
    },
    M_New() {},
    M_Edit() {},
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          ContactId: value.ContactID,
          SubPortFolioCd: value.SubPortFolioCd,
          DebtorCd: value.DebtorCd,
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

        this.$parent.resultDelete("Deleting Data Successfully");
      });
    },
    getDataBy(record) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        debtorcd: record.DebtorCd
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        this.M_AR_Debtor = {
          subportfoliocd: data.subportfoliocd,
          contactid: data.contactid,
          debtorcd: data.debtorcd,
          passwordattachment: data.passwordattachment,
          referenceno: data.referenceno,
          credittermscd: data.credittermscd,
          creditlimit: this.isCurrency(data.creditlimit, data.decimal),
          vatpaidby: data.vatpaidby,
          withholdingpaidby: data.withholdingpaidby,
          d0: data.d0,
          d1: data.d1,
          d2: data.d2,
          d3: data.d3,
          d4: data.d4,
          d5: data.d5,
          d6: data.d6,
          d7: data.d7,
          d8: data.d8,
          d9: data.d9,
          graceperiod: data.graceperiod,
          reminder: data.reminder,
          penalty: data.penalty,
          reasoncd: data.reasoncd,
          status: data.status,
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          credittermsdescs: data.credittermsdescs,
          cmreasondescs: data.cmreasondescs,
          contactname: data.contactname,
          outstandingtransactioncount: data.outstandingtransactioncount,
          debtoraccountcd: data.debtoraccountcd,
          debtoraccountdescs: data.debtoraccountdescs,
          businessname: data.businessname,
          timeedit: data.timeedit,
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid
        };

        this.M_AR_Debtor.contactidLabel =
          this.M_AR_Debtor.contactid != null
            ? data.contactid + this.separator + data.contactname
            : "";
        this.M_AR_Debtor.credittermscdLabel =
          this.M_AR_Debtor.credittermscd != null
            ? data.credittermscd + this.separator + data.credittermsdescs
            : "";
        this.M_AR_Debtor.reasoncdLabel =
          this.M_AR_Debtor.reasoncd != null
            ? data.reasoncd + this.separator + data.cmreasondescs
            : "";
        this.M_AR_Debtor.debtoraccountcdLabel =
          this.M_AR_Debtor.debtoraccountcd != null
            ? data.debtoraccountcd + this.separator + data.debtoraccountdescs
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
      });
    }
  },
  beforeCreate: function() {},
  created: function() {
    this.M_AR_Debtor.creditlimit = 0;
    this.M_AR_Debtor.graceperiod = 0;
    this.$store.commit("setFormType", "List");
    this.getToolbar().ProcessPS();
  },
  beforeMount: function() {},
  mounted: function() {
    this.M_AR_Debtor.creditlimit = 0;
    this.M_AR_Debtor.graceperiod = 0;
    this.hideSideBarMenu();
    this.FormToABSList().doGetList("", "eb_getList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>

