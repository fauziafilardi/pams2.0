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
      @checkboxChecked="$parent.checkboxChecked"
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
                        :value="M_AP_Creditor.contactid"
                        :label="M_AP_Creditor.contactidLabel"
                        ref="ref_contactid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_creditorcd"
                        v-model="M_AP_Creditor.creditorcd"
                        ref="ref_creditorcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_referenceno"
                        v-model="M_AP_Creditor.referenceno"
                        ref="ref_referenceno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputDateVuex
                        @input="OnstartdateChange"
                        :prop="PI_startdate"
                        v-model="M_AP_Creditor.startdate"
                        ref="ref_startdate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OncredittermscdChange"
                        :prop="PI_credittermscd"
                        :value="M_AP_Creditor.credittermscd"
                        :label="M_AP_Creditor.credittermscdLabel"
                        ref="ref_credittermscd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_creditlimit"
                        v-model="M_AP_Creditor.creditlimit"
                        ref="ref_creditlimit"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnholdpaymentChange"
                        :prop="PI_holdpayment"
                        v-model="M_AP_Creditor.holdpayment"
                        ref="ref_holdpayment"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnholdreasoncdChange"
                        :prop="PI_holdreasoncd"
                        :value="M_AP_Creditor.holdreasoncd"
                        :label="M_AP_Creditor.holdreasoncdLabel"
                        ref="ref_holdreasoncd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_holdreasondescs"
                        v-model="M_AP_Creditor.holdreasondescs"
                        ref="ref_holdreasondescs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OngrncontrolChange"
                        :prop="PI_grncontrol"
                        v-model="M_AP_Creditor.grncontrol"
                        ref="ref_grncontrol"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnstatusChange"
                        :prop="PI_status"
                        v-model="M_AP_Creditor.status"
                        ref="ref_status"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnreasoncdChange"
                        :prop="PI_reasoncd"
                        :value="M_AP_Creditor.reasoncd"
                        :label="M_AP_Creditor.reasoncdLabel"
                        ref="ref_reasoncd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_reasondescs"
                        v-model="M_AP_Creditor.reasondescs"
                        ref="ref_reasondescs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_AP_Creditor.remarks"
                        ref="ref_remarks"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputCheckBox
                        @input="OnautocreatesuppliermastercdChange"
                        :prop="PI_autocreatesuppliermastercd"
                        v-model="M_AP_Creditor.autocreatesuppliermastercd"
                        ref="ref_autocreatesuppliermastercd"
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
      cInsertKey: "id=CreditorCd,label=CreditorCd+|+Descs",
      FormType: "List",
      Module: "AP",
      propList: {
        initialWhere: "",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },

      M_AP_Creditor: {
        contactid: "",
        creditorcd: "",
        referenceno: "",
        startdate: "",
        credittermscd: "",
        creditlimit: "0",
        paymentpriority: 0,
        holdpayment: "",
        holdreasoncd: "",
        holdreasondescs: "",
        grncontrol: "",
        status: "",
        reasoncd: "",
        reasondescs: "",
        remarks: "",
        c0: "",
        c1: "",
        c2: "",
        c3: "",
        c4: "",
        c5: "",
        c6: "",
        c7: "",
        c8: "",
        c9: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        contactname: "",
        credittermsdescs: "",
        holdcmreasondescs: "",
        cmreasondescs: "",
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        lastupdatestamp: 0,
        rowid: 0,
        autocreatesuppliermastercd: "",
        autocreatesuppliermaster: ""
      },
      PI_contactid: {
        dataLookUp: {
          LookUpCd: "GetLookupCMContact",
          ColumnDB: "ContactId",
          InitialWhere: "",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "ContactId,Name"
        },
        cValidate: "required",
        cName: "contactid",
        cLabel: "Contact ID",
        cKey: true,
        cLabelSize: 4,
        cOrder: 0,
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
      PI_creditorcd: {
        cValidate: "required|max:10",
        cName: "creditorcd",
        cLabel: "Creditor Code",
        cLabelSize: 4,
        cOrder: 0,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_referenceno: {
        cValidate: "",
        cName: "referenceno",
        cLabel: "Reference No",
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
      PI_startdate: {
        cValidate: "",
        cName: "startdate",
        cLabel: "Start Date",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
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
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "CreditTermsCd,Descs"
        },
        cValidate: "required",
        cName: "credittermscd",
        cLabel: "Credit Terms",
        cKey: false,
        cLabelSize: 4,
        cOrder: 0,
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
        cValidate: "required",
        cName: "creditlimit",
        cLabel: "Credit Limit",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLable: "(base amount)"
      },
      PI_holdpayment: {
        cValidate: "",
        cName: "holdpayment",
        cId: "rdbholdpayment",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Hold Payment ",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_holdreasoncd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMReason",
          ColumnDB: "ReasonCd",
          InitialWhere: "ModuleCd='AP' or ModuleCd is null",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "ReasonCd,Descs"
        },
        cValidate: "",
        cName: "holdreasoncd",
        cLabel: "Hold Reason",
        cKey: false,
        cLabelSize: 4,
        cOrder: 0,
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
      PI_holdreasondescs: {
        cValidate: "max:150",
        cName: "holdreasondescs",
        cLabel: "Hold Description",
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
      PI_grncontrol: {
        cValidate: "",
        cName: "grncontrol",
        cId: "rdbgrncontrol",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "GRN Control",
        cLabelSize: 4,
        cDefault: "Y",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
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
          { text: "Non Active", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Status",
        cLabelSize: 4,
        cDefault: "A",
        cOrder: 0,
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
          InitialWhere: "ModuleCd = 'AP' OR ModuleCd IS NULL",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "ReasonCd,Descs"
        },
        cValidate: "",
        cName: "reasoncd",
        cLabel: "Reason",
        cKey: false,
        cLabelSize: 4,
        cOrder: 0,
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
        cOrder: 0,
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
        cOrder: 0,
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
      PI_autocreatesuppliermastercd: {
        cValidate: "",
        cName: "autocreatesuppliermastercd",
        cLabel: "",
        cLabelSize: 4,
        cOptions: [{ text: "Auto Create Supplier Master", value: "N" }],
        cOrder: 108,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cDefault: "",
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
    },
    GetDataBy1() {
      return this.$store.getters.GetPage1GetDataBy;
    }
  },
  methods: {
    OncontactidChange(data) {
      this.$nextTick(() => {
        this.M_AP_Creditor.contactid = data.id;
        this.M_AP_Creditor.contactidLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{contactid}
        }
      });
      this.$forceUpdate();
    },
    OnstartdateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{startdate}
        }
      });
      this.$forceUpdate();
    },
    OncredittermscdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Creditor.credittermscd = data.id;
        this.M_AP_Creditor.credittermscdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{credittermscd}
        }
      });
      this.$forceUpdate();
    },
    OnholdpaymentChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data == "Y") {
            this.PI_holdreasoncd.cProtect = false;
            this.PI_holdreasondescs.cProtect = false;
            this.PI_holdreasoncd.cValidate = "required";
            this.PI_holdreasondescs.cValidate = "required";
          } else {
            this.PI_holdreasoncd.cProtect = true;
            this.PI_holdreasondescs.cProtect = true;
            this.PI_holdreasoncd.cValidate = "";
            this.PI_holdreasondescs.cValidate = "";
          }
        }
      });
      this.$forceUpdate();
    },
    OnholdreasoncdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Creditor.holdreasoncd = data.id;
        this.M_AP_Creditor.holdreasoncdLabel = data.label;
        this.M_AP_Creditor.holdreasondescs = data.Descs;
        if (this.inputStatus != "VIEW") {
          //{holdreasoncd}
        }
      });
      this.$forceUpdate();
    },
    OngrncontrolChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{grncontrol}
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
            this.PI_reasoncd.cValidate = "";
            this.PI_reasondescs.cValidate = "";
          } else {
            this.PI_reasoncd.cProtect = true;
            this.PI_reasondescs.cProtect = true;
            this.PI_reasoncd.cValidate = "required";
            this.PI_reasondescs.cValidate = "required";
          }
        }
      });
      this.$forceUpdate();
    },
    OnreasoncdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Creditor.reasoncd = data.id;
        this.M_AP_Creditor.reasoncdLabel = data.label;
        this.M_AP_Creditor.reasondescs = data.Descs;
        if (this.inputStatus != "VIEW") {
          //{reasondescs}
        }
      });
      this.$forceUpdate();
    },
    OnreasondescsChange(data) {},
    OnremarksChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{remarks}
        }
      });
      this.$forceUpdate();
    },
    OnautocreatesuppliermastercdChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data != "" || data != null) {
            this.M_AP_Creditor.autocreatesuppliermaster = "Y";
          } else {
            this.M_AP_Creditor.autocreatesuppliermaster = "N";
          }
        }
      });
      this.$forceUpdate();
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
    rowLink: function(url) {},
    paramFromParent() {},
    M_CheckboxChecked(data, status, index) {},
    M_Post(dt) {},
    M_Insert() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ContactId:
          this.M_AP_Creditor.contactid == "" ||
          this.M_AP_Creditor.contactid == null
            ? "NULL"
            : this.M_AP_Creditor.contactid,
        CreditorCd: this.M_AP_Creditor.creditorcd,
        ReferenceNo: this.M_AP_Creditor.referenceno,
        GRNControl: this.M_AP_Creditor.grncontrol,
        StartDate:
          this.M_AP_Creditor.startdate == "" ||
          this.M_AP_Creditor.startdate == null
            ? "NULL"
            : this.M_AP_Creditor.startdate,
        CreditTermsCd:
          this.M_AP_Creditor.credittermscd == "" ||
          this.M_AP_Creditor.credittermscd == null
            ? "NULL"
            : this.M_AP_Creditor.credittermscd,
        CreditLimit: this.M_AP_Creditor.creditlimit
          ? this.replaceAllString(
              this.M_AP_Creditor.creditlimit,
              ",",
              "",
              "number"
            )
          : 0,
        PaymentPriority: this.M_AP_Creditor.paymentpriority,
        HoldPayment: this.M_AP_Creditor.holdpayment,
        HoldReasonCd:
          this.M_AP_Creditor.holdreasoncd == "" ||
          this.M_AP_Creditor.holdreasoncd == null
            ? "NULL"
            : this.M_AP_Creditor.holdreasoncd,
        HoldReasonDescs: this.M_AP_Creditor.holdreasondescs,
        C0:
          this.M_AP_Creditor.c0 == "" || this.M_AP_Creditor.c0 == null
            ? "NULL"
            : this.M_AP_Creditor.c0,
        C1:
          this.M_AP_Creditor.c1 == "" || this.M_AP_Creditor.c1 == null
            ? "NULL"
            : this.M_AP_Creditor.c1,
        C2:
          this.M_AP_Creditor.c2 == "" || this.M_AP_Creditor.c2 == null
            ? "NULL"
            : this.M_AP_Creditor.c2,
        C3:
          this.M_AP_Creditor.c3 == "" || this.M_AP_Creditor.c3 == null
            ? "NULL"
            : this.M_AP_Creditor.c3,
        C4:
          this.M_AP_Creditor.c4 == "" || this.M_AP_Creditor.c4 == null
            ? "NULL"
            : this.M_AP_Creditor.c4,
        C5:
          this.M_AP_Creditor.c5 == "" || this.M_AP_Creditor.c5 == null
            ? "NULL"
            : this.M_AP_Creditor.c5,
        C6:
          this.M_AP_Creditor.c6 == "" || this.M_AP_Creditor.c6 == null
            ? "NULL"
            : this.M_AP_Creditor.c6,
        C7:
          this.M_AP_Creditor.c7 == "" || this.M_AP_Creditor.c7 == null
            ? "NULL"
            : this.M_AP_Creditor.c7,
        C8:
          this.M_AP_Creditor.c8 == "" || this.M_AP_Creditor.c8 == null
            ? "NULL"
            : this.M_AP_Creditor.c8,
        C9:
          this.M_AP_Creditor.c9 == "" || this.M_AP_Creditor.c9 == null
            ? "NULL"
            : this.M_AP_Creditor.c9,
        ReasonCd:
          this.M_AP_Creditor.reasoncd == "" ||
          this.M_AP_Creditor.reasoncd == null
            ? "NULL"
            : this.M_AP_Creditor.reasoncd,
        ReasonDescs:
          this.M_AP_Creditor.reasondescs == "" ||
          this.M_AP_Creditor.reasondescs == null
            ? "NULL"
            : this.M_AP_Creditor.reasondescs,
        Status: this.M_AP_Creditor.status,
        Remarks: this.M_AP_Creditor.remarks,
        UserInput: this.getDataUser().UserId,
        AutoCreateSupplierMaster: this.M_AP_Creditor.autocreatesuppliermaster
      };

      this.postJSON(this.getUrlInsert(), param).then(response => {
        if (response == null) return;

        this.$parent.resultInsert(response.Message);
      });
    },
    M_Update() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ContactId:
          this.M_AP_Creditor.contactid == "" ||
          this.M_AP_Creditor.contactid == null
            ? "NULL"
            : this.M_AP_Creditor.contactid,
        CreditorCd: this.M_AP_Creditor.creditorcd,
        ReferenceNo: this.M_AP_Creditor.referenceno,
        StartDate:
          this.M_AP_Creditor.startdate == "" ||
          this.M_AP_Creditor.startdate == null
            ? "NULL"
            : this.M_AP_Creditor.startdate,
        CreditTermsCd:
          this.M_AP_Creditor.credittermscd == "" ||
          this.M_AP_Creditor.credittermscd == null
            ? "NULL"
            : this.M_AP_Creditor.credittermscd,
        CreditLimit: this.M_AP_Creditor.creditlimit
          ? this.replaceAllString(
              this.M_AP_Creditor.creditlimit,
              ",",
              "",
              "number"
            )
          : 0,
        PaymentPriority: this.M_AP_Creditor.paymentpriority,
        HoldPayment: this.APFieldHelper.HOLD_PAYMENT_YES,
        HoldReasonCd:
          this.M_AP_Creditor.holdreasoncd == "" ||
          this.M_AP_Creditor.holdreasoncd == null
            ? "NULL"
            : this.M_AP_Creditor.holdreasoncd,
        HoldReasonDescs: this.M_AP_Creditor.holdreasondescs,
        GRNControl: this.M_AP_Creditor.grncontrol,
        C0:
          this.M_AP_Creditor.c0 == "" || this.M_AP_Creditor.c0 == null
            ? "NULL"
            : this.M_AP_Creditor.c0,
        C1:
          this.M_AP_Creditor.c1 == "" || this.M_AP_Creditor.c1 == null
            ? "NULL"
            : this.M_AP_Creditor.c1,
        C2:
          this.M_AP_Creditor.c2 == "" || this.M_AP_Creditor.c2 == null
            ? "NULL"
            : this.M_AP_Creditor.c2,
        C3:
          this.M_AP_Creditor.c3 == "" || this.M_AP_Creditor.c3 == null
            ? "NULL"
            : this.M_AP_Creditor.c3,
        C4:
          this.M_AP_Creditor.c4 == "" || this.M_AP_Creditor.c4 == null
            ? "NULL"
            : this.M_AP_Creditor.c4,
        C5:
          this.M_AP_Creditor.c5 == "" || this.M_AP_Creditor.c5 == null
            ? "NULL"
            : this.M_AP_Creditor.c5,
        C6:
          this.M_AP_Creditor.c6 == "" || this.M_AP_Creditor.c6 == null
            ? "NULL"
            : this.M_AP_Creditor.c6,
        C7:
          this.M_AP_Creditor.c7 == "" || this.M_AP_Creditor.c7 == null
            ? "NULL"
            : this.M_AP_Creditor.c7,
        C8:
          this.M_AP_Creditor.c8 == "" || this.M_AP_Creditor.c8 == null
            ? "NULL"
            : this.M_AP_Creditor.c8,
        C9:
          this.M_AP_Creditor.c9 == "" || this.M_AP_Creditor.c9 == null
            ? "NULL"
            : this.M_AP_Creditor.c9,
        ReasonCd:
          this.M_AP_Creditor.reasoncd == "" ||
          this.M_AP_Creditor.reasoncd == null
            ? "NULL"
            : this.M_AP_Creditor.reasoncd,
        ReasonDescs: this.M_AP_Creditor.reasondescs,
        Status: this.APFieldHelper.CREDITOR_STATUS_NON_ACTIVE,
        Remarks: this.M_AP_Creditor.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_AP_Creditor.lastupdatestamp
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_AP_Creditor = {
        contactid: "",
        creditorcd: "",
        referenceno: "",
        startdate: "",
        credittermscd: "",
        creditlimit: this.isCurrency(0, this.decimal),
        paymentpriority: 0,
        holdpayment: "N",
        holdreasoncd: "",
        holdreasondescs: "",
        grncontrol: "Y",
        status: "A",
        reasoncd: "",
        reasondescs: "",
        remarks: "",
        c0: null,
        c1: null,
        c2: null,
        c3: null,
        c4: null,
        c5: null,
        c6: null,
        c7: null,
        c8: null,
        c9: null,
        userinput: "",
        useredit: this.getDataUser().UserId,
        contactname: "",
        credittermsdescs: "",
        holdcmreasondescs: "",
        cmreasondescs: "",
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        lastupdatestamp: 0,
        rowid: 0,
        autocreatesuppliermastercd: "",
        autocreatesuppliermaster: ""
      };
    },
    M_New() {
      this.PI_autocreatesuppliermastercd.cVisible = true;
    },
    M_Edit() {},
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ContactID:
            value.ContactID == "" || value.ContactID == null
              ? "NULL"
              : value.ContactID,
          CreditorCd: value.CreditorCd,
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
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubportfolioCd: this.getDataUser().SubPortfolioCd,
        contactid: record.ContactID,
        creditorcd: record.CreditorCd
      };

      this.postJSON(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        this.M_AP_Creditor = {
          contactid: data.contactid,
          creditorcd: data.creditorcd,
          referenceno: data.referenceno,
          startdate: data.startdate,
          credittermscd: data.credittermscd,
          creditlimit: this.isCurrency(data.creditlimit, this.decimal),
          paymentpriority: this.isCurrency(data.paymentpriority, this.decimal),
          holdpayment: data.holdpayment,
          holdreasoncd: data.holdreasoncd,
          holdreasondescs: data.holdreasondescs,
          grncontrol: data.grncontrol,
          status: data.status,
          reasoncd: data.reasoncd,
          reasondescs: data.reasondescs,
          remarks: data.remarks,
          c0: data.c0,
          c1: data.c1,
          c2: data.c2,
          c3: data.c3,
          c4: data.c4,
          c5: data.c5,
          c6: data.c6,
          c7: data.c7,
          c8: data.c8,
          c9: data.c9,
          userinput: data.userinput,
          useredit: data.useredit,
          contactname: data.contactname,
          credittermsdescs: data.credittermsdescs,
          holdcmreasondescs: data.holdcmreasondescs,
          cmreasondescs: data.cmreasondescs,
          subportfoliocd: data.subportfoliocd,
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid
        };

        this.M_AP_Creditor.contactidLabel =
          this.M_AP_Creditor.contactid != null &&
          this.M_AP_Creditor.contactid != ""
            ? data.contactid + this.separator + data.contactname
            : "";
        this.M_AP_Creditor.credittermscdLabel =
          this.M_AP_Creditor.credittermscd != null &&
          this.M_AP_Creditor.credittermscd != ""
            ? data.credittermscd + this.separator + data.credittermsdescs
            : "";
        this.M_AP_Creditor.holdreasoncdLabel =
          this.M_AP_Creditor.holdreasoncd != null &&
          this.M_AP_Creditor.holdreasoncd != ""
            ? data.holdreasoncd + this.separator + data.holdcmreasondescs
            : "";
        this.M_AP_Creditor.reasondescsLabel =
          this.M_AP_Creditor.reasondescs != null &&
          this.M_AP_Creditor.reasondescs != ""
            ? data.reasondescs + this.separator + cmreasondescs
            : "";

        this.PI_autocreatesuppliermastercd.cVisible = false;

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
    this.M_AP_Creditor.creditlimit = 0;

    this.hideSideBarMenu();
    this.FormToABSList().doGetList("", "eb_getList");
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>

