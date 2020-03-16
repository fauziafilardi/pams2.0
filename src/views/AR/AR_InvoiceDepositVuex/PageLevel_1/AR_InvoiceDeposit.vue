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
                  <b-row>
                    <b-col md="5">
                      <ABSInputSelectList
                        @change="OnDebtorCdChange"
                        :prop="PI_debtorcd"
                        :value="M_AR_DebitH.debtorcd"
                        :label="M_AR_DebitH.debtorcdLabel"
                        ref="ref_debtorcd"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSInputSelectList
                        @change="OnTrxTypeChange"
                        :prop="PI_trxtype"
                        :value="M_AR_DebitH.trxtype"
                        :label="M_AR_DebitH.trxtypeLabel"
                        ref="ref_trxtype"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_DebitH.debitno" />
                    </b-col>
                    <b-col md="5">
                      <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_DebitH.debitdate" />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_DebitH.descs" />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_DebitH.referenceno" />
                    </b-col>
                    <b-col md="5">
                      <ABSInputSelectList
                        @change="OnAddressCdChange"
                        :prop="PI_addresscd"
                        :value="M_AR_DebitH.addresscd"
                        :label="M_AR_DebitH.addresscdLabel"
                        ref="ref_addresscd"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSinputDateVuex
                        @input="JournalDateChoosen"
                        :prop="PI_journaldate"
                        v-model="M_AR_DebitH.journaldate"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSInputSelectList
                        @change="OnCreditTermsCdChange"
                        :prop="PI_credittermscd"
                        :value="M_AR_DebitH.credittermscd"
                        :label="M_AR_DebitH.credittermscdLabel"
                        ref="ref_credittermscd"
                      />
                    </b-col>
                    <b-col md="5">
                      <ABSinputDateVuex :prop="PI_duedate" v-model="M_AR_DebitH.billingduedate" />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSInputSelectList
                        @change="OnCurrencyCdChange"
                        :prop="PI_currencycd"
                        :value="M_AR_DebitH.currencycd"
                        :label="M_AR_DebitH.currencycdLabel"
                        ref="ref_currencycd"
                      />
                    </b-col>
                    <b-col md="5">
                      <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_DebitH.currencyrate" />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_DebitH.trxamt" />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="5">
                      <ABSinputDateVuex
                        :prop="PI_depositrefunddate"
                        v-model="M_AR_DebitH.depositrefunddate"
                      />
                    </b-col>
                  </b-row>
                </b-col>
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
      FormType: "ListProcess",
      Module: "AR",
      propList: {
        initialWhere: "",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex
      },
      M_AR_DebitH: {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        batchno: 0,
        debtorcd: null,
        debtorcdLabel: null,
        modulecd: "AR",
        trxtype: null,
        trxtypeLabel: null,
        runningcd: null,
        debitno: null,
        debitdate: this.M_FormatingDate(new Date()),
        journaldate: this.M_FormatingDate(new Date()),
        referenceno: null,
        credittermscd: null,
        credittermscdLabel: null,
        addresscontactid: null,
        addresscd: null,
        addresscdLabel: null,
        currencycd: null,
        currencycdLabel: null,
        currencyrate: "",
        depositrefunddate: null,
        billingduedate: null,
        descs: null,
        trxamt: "",
        dueday: 0
      },
      CTermDueDay: null,
      IEBy: { Input: null, Edit: null },
      PI_debtorcd: {
        dataLookUp: {
          LookUpCd: "GetLookupARDebtor",
          ColumnDB: "DebtorCd",
          InitialWhere:
            "SUBPORTFOLIOCD='" +
            this.getDataUser().SubPortfolioCd +
            "' AND Status = 'Y'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "debtorcd",
        cLabel: "Debtor Code",
        cKey: false,
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
        cMasterUrl: "AR/AR_Debtor",
        cDisplayColumn: "DebtorCd,DebtorName"
      },
      PI_trxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SUBPORTFOLIOCD = '" +
            this.getDataUser().SubPortfolioCd +
            "' AND MODULECD = 'AR' AND TrxClass = 'T'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "trxtype",
        cLabel: "Trans. Type",
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
        cMasterUrl: "AR/AR_TransactionTypeSubPortfolioMaintenance",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_debitno: {
        cValidate: "required|min:1|max:20",
        cName: "DebitNo",
        cLabel: "Invoice Deposit No",
        cOrder: 3,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cKey: true,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_descs: {
        cValidate: "max:150",
        cName: "Descs",
        cLabel: "Description",
        cOrder: 5,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_referenceno: {
        cValidate: "max:20",
        cName: "ReferenceNo",
        cLabel: "Reference No",
        cOrder: 6,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_journaldate: {
        cValidate: "required",
        cName: "JournalDate",
        cNameError: "Journal Date",
        cLabel: "Journal Date",
        cOrder: 7,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        // cLabelSize: 5,
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
        cMasterUrl: "CM/CM_CreditTerms",
        cDisplayColumn: "CreditTermsCd,Descs"
      },
      PI_currencycd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMCurrency",
          ColumnDB: "CurrencyCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "currencycd",
        cLabel: "Currency ",
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
        cMasterUrl: "CM/CM_CurrencyMaster",
        cDisplayColumn: "CurrencyCd,Descs"
      },
      PI_trxamt: {
        cValidate: "min:1|max:20",
        cName: "TrxAmt",
        cType: "decimal",
        cLabel: "Trans. Amount",
        cOrder: 12,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_depositrefunddate: {
        cValidate: "",
        cName: "DepositRefundDate",
        cNameError: "Refund Date",
        cValue: "",
        cLabel: "Refund Date",
        cOrder: 13,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        // cLabelSize: 5,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_debitdate: {
        cValidate: "required",
        cName: "DebitDate",
        cNameError: "Invoice Date",
        cLabel: "Invoice Date",
        cOrder: 4,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        // cLabelSize: 5,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_addresscd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMContactAndAddressSubportfolio",
          ColumnDB: "AddressCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "addresscd",
        cLabel: "Address ",
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
        cMasterUrl: "",
        cDisplayColumn: "AddressCd,TranslatedAddressType"
      },
      PI_duedate: {
        cValidate: "",
        cName: "DueDate",
        cNameError: "Due Date",
        // cValue: this.M_FormatingDate(new Date()),
        cLabel: "Due Date",
        cOrder: 999,
        cProtect: true,
        cPageLevel: this.PageLevel,
        // cLabelSize: 5,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_currencyrate: {
        cValidate: "required|min:1|max:20",
        cName: "CurrencyRate",
        cLabel: "Currency Rate",
        cType: "decimal",
        cOrder: 11,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      isInput: true
    };
  },
  computed: {
    inputStatus() {
      if (
        this.$store.getters.getLevel == this.PageLevel &&
        this.$store.getters.getTab == this.TabIndex
      ) {
        this.isInput = true;
        return this.$store.getters.getStatus;
      } else {
        this.isInput = false;
        return "view";
      }
    }
  },
  methods: {
    M_Head_Table() {},
    M_PageSize() {},
    M_TabClick() {},
    M_Pagination() {},
    M_Advance_Filter() {},
    M_Search(data) {},
    M_Refresh() {},
    M_HeaderPage() {},
    M_HeaderChildPage() {},
    M_New() {
      this.$nextTick(() => {
        // document.getElementById("DebtorCd").focus()
      });
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          DebitNo: value.DebitNo,
          UserEdit: this.getDataUser().UserId,
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
    M_Edit() {
      this.$nextTick().then(() => {
        // document.getElementById("DebtorCd").focus()
      });
    },
    M_Post(dt) {
      var dataPost = [];
      var data = this.FormToABSList().getRowSelected();

      data.forEach(value => {
        dataPost.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo: value.BatchNo,
          ModuleCd: this.Module,
          UserInput: this.getDataUser().UserId,
          Source: "S",
          _Message_: "Debit No " + value.DebitNo
        });
      });

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataPost
      };

      this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
        if (response == null) return;
        this.$parent.resultPost();
      });
    },
    M_Insert() {
      if (this.M_AR_DebitH.runningcd !== "") {
        this.FnGenerateRunningCode(
          this.getDataUser().SubPortfolioCd,
          this.M_AR_DebitH.runningcd,
          this.getDataUser().UserId,
          this.M_AR_DebitH.debitdate
        ).then(res => {
          this.M_AR_DebitH.debitno = res.RunningCode;

          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BatchNo: this.M_AR_DebitH.batchno,
            DebtorCd:
              this.M_AR_DebitH.debtorcd == "" &&
              this.M_AR_DebitH.debtorcd == null
                ? "NULL"
                : this.M_AR_DebitH.debtorcd,
            ModuleCd: this.M_AR_DebitH.modulecd,
            TrxType:
              this.M_AR_DebitH.trxtype == "" && this.M_AR_DebitH.trxtype == null
                ? "NULL"
                : this.M_AR_DebitH.trxtype,
            RunningCd: this.M_AR_DebitH.runningcd,
            DebitNo: this.M_AR_DebitH.debitno,
            DebitDate:
              this.M_AR_DebitH.debitdate == "" &&
              this.M_AR_DebitH.debitdate == null
                ? "NULL"
                : this.M_AR_DebitH.debitdate,
            JournalDate:
              this.M_AR_DebitH.journaldate == "" &&
              this.M_AR_DebitH.journaldate == null
                ? "NULL"
                : this.M_AR_DebitH.journaldate,
            ReferenceNo: this.M_AR_DebitH.referenceno,
            CreditTermsCd:
              this.M_AR_DebitH.credittermscd == "" &&
              this.M_AR_DebitH.credittermscd == null
                ? "NULL"
                : this.M_AR_DebitH.credittermscd,
            Descs: this.M_AR_DebitH.descs,
            AddressContactId:
              this.M_AR_DebitH.addresscd == "" &&
              this.M_AR_DebitH.addresscd == null
                ? "NULL"
                : this.M_AR_DebitH.addresscontactid,
            AddressCd:
              this.M_AR_DebitH.addresscd == "" &&
              this.M_AR_DebitH.addresscd == null
                ? "NULL"
                : this.M_AR_DebitH.addresscd,
            CurrencyCd:
              this.M_AR_DebitH.currencycd == "" &&
              this.M_AR_DebitH.currencycd == null
                ? "NULL"
                : this.M_AR_DebitH.currencycd,
            CurrencyRate: this.M_AR_DebitH.currencyrate
              ? this.replaceAllString(
                  this.M_AR_DebitH.currencyrate,
                  ",",
                  "",
                  "number"
                )
              : 0,
            UserInput: this.getDataUser().UserId,
            DepositRefundDate:
              this.M_AR_DebitH.depositrefunddate == "" &&
              this.M_AR_DebitH.depositrefunddate == null
                ? "NULL"
                : this.M_AR_DebitH.depositrefunddate,
            TrxAmt: this.M_AR_DebitH.trxamt
              ? this.replaceAllString(
                  this.M_AR_DebitH.trxamt,
                  ",",
                  "",
                  "number"
                )
              : 0,
            BillingDueDate:
              this.M_AR_DebitH.billingduedate == "" &&
              this.M_AR_DebitH.billingduedate == null
                ? "NULL"
                : this.M_AR_DebitH.billingduedate
          };

          this.postJSON(this.getUrlInsert(), param).then(response => {
            if (response == null) return;

            this.$parent.resultInsert(response.Message);
          });
        });
      }
    },
    M_Update() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        BatchNo: this.M_AR_DebitH.batchno,
        DebtorCd:
          this.M_AR_DebitH.debtorcd == "" || this.M_AR_DebitH.debtorcd == null
            ? "NULL"
            : this.M_AR_DebitH.debtorcd,
        ModuleCd: this.M_AR_DebitH.modulecd,
        TrxType:
          this.M_AR_DebitH.trxtype == "" || this.M_AR_DebitH.trxtype == null
            ? "NULL"
            : this.M_AR_DebitH.trxtype,
        RunningCd: this.M_AR_DebitH.runningcd,
        DebitNo: this.M_AR_DebitH.debitno,
        DebitDate:
          this.M_AR_DebitH.debitdate == "" || this.M_AR_DebitH.debitdate == null
            ? "NULL"
            : this.M_AR_DebitH.debitdate,
        JournalDate:
          this.M_AR_DebitH.journaldate == "" ||
          this.M_AR_DebitH.journaldate == null
            ? "NULL"
            : this.M_AR_DebitH.journaldate,
        ReferenceNo: this.M_AR_DebitH.referenceno,
        CreditTermsCd:
          this.M_AR_DebitH.credittermscd == "" ||
          this.M_AR_DebitH.credittermscd == null
            ? "NULL"
            : this.M_AR_DebitH.credittermscd,
        Descs: this.M_AR_DebitH.descs,
        AddressContactId: this.M_AR_DebitH.addresscontactid,
        AddressCd:
          this.M_AR_DebitH.addresscd == "" || this.M_AR_DebitH.addresscd == null
            ? "NULL"
            : this.M_AR_DebitH.addresscd,
        CurrencyCd:
          this.M_AR_DebitH.currencycd == "" ||
          this.M_AR_DebitH.currencycd == null
            ? "NULL"
            : this.M_AR_DebitH.currencycd,
        CurrencyRate: this.M_AR_DebitH.currencyrate
          ? this.replaceAllString(
              this.M_AR_DebitH.currencyrate,
              ",",
              "",
              "number"
            )
          : 0,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_AR_DebitH.lastupdatestamp,
        DepositRefundDate:
          this.M_AR_DebitH.depositrefunddate == "" ||
          this.M_AR_DebitH.depositrefunddate == null
            ? "NULL"
            : this.M_AR_DebitH.depositrefunddate,
        TrxAmt: this.M_AR_DebitH.trxamt
          ? this.replaceAllString(this.M_AR_DebitH.trxamt, ",", "", "number")
          : 0
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        this.$parent.resultUpdate(response.Message);
      });
    },
    M_Cancel() {},
    rowClicked(record, index) {},
    rowLink: function(url) {},
    getDataBy(record) {
      // console.log(record)
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        DebitNo: record.DebitNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        if (response == null) return;
        var data = response.Data;
        if (data.length > 0) {
          data = data[0];
          // console.log(data)
          this.$nextTick(() => {
            this.M_AR_DebitH.batchno = data.batchno;
            this.M_AR_DebitH.subportfoliocd = data.subportfoliocd;
            this.M_AR_DebitH.modulecd = data.modulecd;
            this.M_AR_DebitH.runningcd = data.runningcd;
            this.M_AR_DebitH.debitno = data.debitno;
            this.M_AR_DebitH.debitdate = data.debitdate;
            this.M_AR_DebitH.journaldate = data.journaldate;
            this.M_AR_DebitH.referenceno = data.referenceno;
            this.M_AR_DebitH.addresscontactid = data.addresscontactid;
            this.M_AR_DebitH.currencyrate = this.isCurrency(
              data.currencyrate,
              this.decimal
            );
            this.M_AR_DebitH.depositrefunddate = data.depositrefunddate;
            this.M_AR_DebitH.billingduedate = data.duedate;
            this.M_AR_DebitH.descs = data.descs;
            this.M_AR_DebitH.trxamt = this.isCurrency(
              data.trxamt,
              this.decimal
            );
            this.M_AR_DebitH.lastupdatestamp = record.LastUpdateStamp;
            this.M_AR_DebitH.contactid = data.contactid;
            this.M_AR_DebitH.debtorcd = data.debtorcd;
            this.M_AR_DebitH.debtorcdLabel = data.debtorcd
              ? data.debtorcd + this.separator + data.debtorname
              : "";
            this.M_AR_DebitH.trxtype = data.trxtype;
            this.M_AR_DebitH.trxtypeLabel = data.trxtype
              ? data.trxtype + this.separator + data.trxtypedescs
              : "";
            this.M_AR_DebitH.credittermscd = data.credittermscd;
            this.M_AR_DebitH.credittermscdLabel = data.credittermscd
              ? data.credittermscd + this.separator + data.credittermscddescs
              : "";
            this.CTermDueDay = data.dueday;
            this.M_AR_DebitH.currencycd = data.currencycd;
            this.M_AR_DebitH.currencycdLabel = data.currencycd
              ? data.currencycd + this.separator + data.currencycddescs
              : "";
            this.M_AR_DebitH.addresscd = data.addresscd;
            this.M_AR_DebitH.addresscdLabel = data.addresscd
              ? data.addresscd + this.separator + data.addressdescs
              : "";

            var where =
              "SubPortfolioCd = '" +
              this.getDataUser().SubPortfolioCd +
              "' AND ContactID = '" +
              data.contactid +
              "'";
            this.PI_addresscd.dataLookUp.InitialWhere = where;
            this.$refs.ref_addresscd.onChangeTriggered = true;
            this.PI_addresscd.cDefault = data.addresscd;

            this.IEBy.Input = data.userinput;
            this.IEBy.Edit = data.useredit;
          });

          this.$forceUpdate();
        }
      });
    },
    JournalDateChoosen(data) {
      if (this.CTermDueDay) {
        this.M_AR_DebitH.billingduedate = this.dateAdd2(
          "d",
          data,
          this.CTermDueDay
        );
      }
    },

    // Lookup On Change
    OnDebtorCdChange(data) {
      if (data && data.id !== "") {
        this.M_AR_DebitH.debtorcd = data.id;
        this.M_AR_DebitH.debtorcdLabel = data.label;

        if (this.inputStatus !== "view") {
          this.FnGetDebtorData(this.getDataUser().SubPortfolioCd, data.id).then(
            dt => {
              if (dt != null) {
                var dta = dt[0];
                var where =
                  "SubPortfolioCd = '" +
                  this.getDataUser().SubPortfolioCd +
                  "' AND ContactID = '" +
                  dta.ContactID +
                  "'";

                this.M_AR_DebitH.credittermscd = dta.CreditTermsCd;
                this.M_AR_DebitH.credittermscdLabel =
                  dta.CreditTermsCd + this.separator;
                this.M_AR_DebitH.addresscd = dta.AddressCd;
                this.M_AR_DebitH.addresscdLabel =
                  dta.AddressCd + this.separator;
                this.M_AR_DebitH.addresscontactid = dta.ContactID;
                // this.M_AR_DebitH.debtorcdLabel = data.id + this.separator + dta.ContactName
                this.CTermDueDay = dta.Dueday;

                this.$refs.ref_addresscd.prop.dataLookUp.InitialWhere = where;
                this.$refs.ref_addresscd.onChangeTriggered = true;
                this.$refs.ref_addresscd.prop.cDefault = dta.AddressCd;
                // this.$refs.ref_addresscd.getData()

                if (
                  this.M_AR_DebitH.journaldate &&
                  this.M_AR_DebitH.journaldate !== ""
                ) {
                  this.M_AR_DebitH.billingduedate = this.dateAdd2(
                    "d",
                    this.M_AR_DebitH.journaldate,
                    dta.Dueday
                  );
                }
              }
            }
          );

          this.$forceUpdate();
        }
      }
    },
    OnTrxTypeChange(data) {
      if (data && data.id !== "") {
        this.M_AR_DebitH.trxtype = data.id;
        // this.M_AR_DebitH.descs = data.Descs
        // this.M_AR_DebitH.runningcd = data.RunningCd

        if (this.inputStatus !== "view") {
          this.FnGetTrxTypeData(
            this.getDataUser().SubPortfolioCd,
            this.Module,
            data.id
          ).then(dt => {
            if (dt != null) {
              var dta = dt[0];
              // console.log(dta)
              this.M_AR_DebitH.runningcd = dta.RunningCd;
              this.M_AR_DebitH.trxtypeLabel =
                data.id + this.separator + dta.TrxTypeDescs;
              this.M_AR_DebitH.descs = dta.TrxTypeDescs;
              this.M_AR_DebitH.currencycd = dta.CurrencyCd;
              this.M_AR_DebitH.currencycdLabel = dta.CurrencyCd;

              this.FnGetCurrencyRate(
                this.getDataUser().SubPortfolioCd,
                this.M_AR_DebitH.debitdate,
                dta.CurrencyCd
              ).then(ress => {
                // console.log(ress)
                if (ress != null) {
                  this.M_AR_DebitH.currencyrate = this.isCurrency(
                    ress.CurrencyRate,
                    this.decimal
                  );
                }
              });
              if (this.inputStatus !== "edit") {
                if (dta.RunningCd != "") {
                  this.M_AR_DebitH.debitno = "(auto)";
                  this.PI_debitno.cProtect = true;
                } else {
                  this.M_AR_DebitH.debitno = "";
                  this.PI_debitno.cProtect = false;
                }
              }
            }
          });
        }

        this.$forceUpdate();
      }
    },
    OnCurrencyCdChange(data) {
      if (data && data.id !== "") {
        this.M_AR_DebitH.currencycd = data.id;
        this.M_AR_DebitH.currencycdLabel = data.label;

        if (this.inputStatus !== "view") {
          if (this.M_AR_DebitH.debitdate && this.M_AR_DebitH.debitdate !== "") {
            this.FnGetCurrencyRate(
              this.getDataUser().SubPortfolioCd,
              this.M_AR_DebitH.debitdate,
              this.M_AR_DebitH.currencycd
            ).then(ress => {
              if (ress == null) {
                this.M_AR_DebitH.currencyrate = 1;
                return;
              }

              if (ress.CurrencyRate) {
                this.M_AR_DebitH.currencyrate = ress.CurrencyRate;
              }
            });
          }
        }
      }
    },
    OnCreditTermsCdChange(data) {
      if (data && data.id !== "") {
        this.M_AR_DebitH.credittermscd = data.id;
        this.M_AR_DebitH.credittermscdLabel = data.label;

        if (this.inputStatus !== "view") {
          this.FnGetCreditTermsData(data.id).then(ress => {
            if (ress == null) return;
            if (ress.length < 1) return;
            var dta = ress[0];
            this.CTermDueDay = dta.Dueday;
            if (
              this.M_AR_DebitH.journaldate &&
              this.M_AR_DebitH.journaldate !== ""
            ) {
              this.M_AR_DebitH.billingduedate = this.dateAdd2(
                "d",
                this.M_AR_DebitH.journaldate,
                dta.Dueday
              );
            }
          });
        }
      }
    },
    OnAddressCdChange(data) {
      if (data && data.id !== "") {
        this.M_AR_DebitH.addresscd = data.id;
        this.M_AR_DebitH.addresscdLabel = data.label;
      }
    },
    M_ClearForm() {
      this.M_AR_DebitH.subportfoliocd = this.getDataUser().SubPortfolioCd;
      this.M_AR_DebitH.batchno = 0;
      this.M_AR_DebitH.debtorcd = null;
      this.M_AR_DebitH.debtorcdLabel = null;
      this.M_AR_DebitH.modulecd = "AR";
      this.M_AR_DebitH.trxtype = null;
      this.M_AR_DebitH.trxtypeLabel = null;
      this.M_AR_DebitH.runningcd = null;
      this.M_AR_DebitH.debitno = null;
      this.M_AR_DebitH.debitdate = this.M_FormatingDate(new Date());
      this.M_AR_DebitH.journaldate = this.M_FormatingDate(new Date());
      this.M_AR_DebitH.referenceno = null;
      this.M_AR_DebitH.credittermscd = null;
      this.M_AR_DebitH.credittermscdLabel = null;
      this.CTermDueDay = null;
      this.M_AR_DebitH.addresscontactid = null;
      this.M_AR_DebitH.addresscd = null;
      this.M_AR_DebitH.addresscdlabel = null;
      this.M_AR_DebitH.currencycd = null;
      this.M_AR_DebitH.currencycdLabel = null;
      this.M_AR_DebitH.currencyrate = "";
      this.M_AR_DebitH.trxamt = "";
      this.M_AR_DebitH.depositrefunddate = null;
      this.M_AR_DebitH.billingduedate = null;
      this.M_AR_DebitH.descs = null;
      this.M_AR_DebitH.dueday = 0;

      this.PI_debitno.cProtect = false;
    },
    setToolbarButton() {}
  },

  beforeCreate: function() {},

  created: function() {
    this.$store.commit("setFormType", "ListProcess");
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
