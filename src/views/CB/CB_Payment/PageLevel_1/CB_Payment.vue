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
        <span>
          <span
            style="float:Left; color: #81b3e9 !important;letter-spacing: 1px;margin-top: 2px;margin-left: 3px"
          >
            Record Information
            <font-awesome-icon icon="sort-down" class="icon-style-1__master" />
          </span>
          <span v-show="IEBy.Input && IEBy.Edit" class="master-span">
            Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}}
            <font-awesome-icon icon="sort-down" class="icon-style-1__master" />
          </span>
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
                    <b-col md="3">
                      <ABSInputSelectList
                        @change="OnbatchnoChange"
                        :prop="PI_batchno"
                        :value="M_CB_Payment.batchno"
                        :label="M_CB_Payment.batchnoLabel"
                        ref="ref_batchno"
                      />
                    </b-col>
                    <b-col md="3">
                      <ABSCompute
                        :prop="PI_documentcount"
                        v-model="M_CB_Payment.documentcount"
                        ref="ref_documentcount"
                      />
                    </b-col>
                    <b-col md="3">
                      <ABSCompute
                        :prop="PI_batchtotal"
                        v-model="M_CB_Payment.batchtotal"
                        ref="ref_batchtotal"
                      />
                    </b-col>
                    <b-col md="3">
                      <ABSinputCheckBox
                        @input="OnbatchtotalChange"
                        :prop="PI_batchtotal"
                        v-model="M_CB_Payment.batchtotal"
                        ref="ref_batchtotal"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_currentdocumentcount"
                        v-model="M_CB_Payment.currentdocumentcount"
                        ref="ref_currentdocumentcount"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_currentbatchtotal"
                        v-model="M_CB_Payment.currentbatchtotal"
                        ref="ref_currentbatchtotal"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OntrxtypeChange"
                        :prop="PI_trxtype"
                        :value="M_CB_Payment.trxtype"
                        :label="M_CB_Payment.trxtypeLabel"
                        ref="ref_trxtype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_paymentno"
                        v-model="M_CB_Payment.paymentno"
                        ref="ref_paymentno"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSInputDateTime
                        @input="OnpaymentdateChange"
                        :prop="PI_paymentdate"
                        v-model="M_CB_Payment.paymentdate"
                        ref="ref_paymentdate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_paymentadviceno"
                        v-model="M_CB_Payment.paymentadviceno"
                        ref="ref_paymentadviceno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        :prop="PI_descs"
                        v-model="M_CB_Payment.descs"
                        ref="ref_descs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnpaymentcategoryChange"
                        :prop="PI_paymentcategory"
                        v-model="M_CB_Payment.paymentcategory"
                        ref="ref_paymentcategory"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnidentifiedtrxstatusChange"
                        :prop="PI_identifiedtrxstatus"
                        v-model="M_CB_Payment.identifiedtrxstatus"
                        ref="ref_identifiedtrxstatus"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OndebtorcdChange"
                        :prop="PI_debtorcd"
                        :value="M_CB_Payment.debtorcd"
                        :label="M_CB_Payment.debtorcdLabel"
                        ref="ref_debtorcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OncreditorcdChange"
                        :prop="PI_creditorcd"
                        :value="M_CB_Payment.creditorcd"
                        :label="M_CB_Payment.creditorcdLabel"
                        ref="ref_creditorcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnpaymentcdChange"
                        :prop="PI_paymentcd"
                        :value="M_CB_Payment.paymentcd"
                        :label="M_CB_Payment.paymentcdLabel"
                        ref="ref_paymentcd"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_customerbankaccountno"
                        v-model="M_CB_Payment.customerbankaccountno"
                        ref="ref_customerbankaccountno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_currencycd"
                        v-model="M_CB_Payment.currencycd"
                        ref="ref_currencycd"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnbankcdChange"
                        :prop="PI_bankcd"
                        :value="M_CB_Payment.bankcd"
                        :label="M_CB_Payment.bankcdLabel"
                        ref="ref_bankcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_trxamt"
                        v-model="M_CB_Payment.trxamt"
                        ref="ref_trxamt"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_currencyrate"
                        v-model="M_CB_Payment.currencyrate"
                        ref="ref_currencyrate"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">Cheque / Reference No</span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_chequereferenceno"
                        v-model="M_CB_Payment.chequereferenceno"
                        ref="ref_chequereferenceno"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputDateVuex
                        @input="OnchequereferencedateChange"
                        :prop="PI_chequereferencedate"
                        v-model="M_CB_Payment.chequereferencedate"
                        ref="ref_chequereferencedate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_issuedbank"
                        v-model="M_CB_Payment.issuedbank"
                        ref="ref_issuedbank"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputDateVuex
                        @input="OnchequeduedateChange"
                        :prop="PI_chequeduedate"
                        v-model="M_CB_Payment.chequeduedate"
                        ref="ref_chequeduedate"
                      />
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreceiveraccountChange" :prop="PI_receiveraccount" :value="M_CB_Payment.receiveraccount" :label="M_CB_Payment.receiveraccountLabel" ref="ref_receiveraccount"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_receivername" v-model="M_CB_Payment.receivername"  ref="ref_receivername" />
                                      </b-col>
                  </b-row>-->
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_CB_Payment.remarks"
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
      cInsertKey: "",
      FormType: "ListProcess",
      Module: "CB",
      propList: {
        initialWhere:
          "ProcessControlSequenceNo IS NULL AND Source = 'P' AND PaymentStatus = 'N' AND SubPortfolioCd = '" +
          this.getDataUser().SubPortfolioCd +
          "' AND BatchStatus <> 'Posted'",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },

      M_CB_Payment: {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        batchno: 0,
        source: "",
        runningcd: "",
        trxtype: "",
        modulecd: "",
        paymentno: "",
        paymentdate: new Date(),
        descs: "",
        identifiedtrxstatus: "Y",
        debtorcd: "",
        creditorcd: "",
        paymentcd: "",
        bankcd: "",
        currencycd: "",
        currencyrate: "0",
        taxcurrencyrate: "",
        originalcurrencyrate: "",
        tobankcd: "",
        tocurrencycd: "",
        currencyoperator: "",
        trxamt: "0",
        totrxamt: "",
        netamt: "",
        vatamt: "",
        withholdingamt: "",
        underpaymentamt: "",
        bankchargesamt: "",
        customerbankaccountno: "",
        referenceno: "",
        chequereferenceno: "",
        chequereferencedate: "",
        issuedbank: "",
        chequeduedate: "",
        lastrevaluationdate: "",
        lastrevaluationcurrencyrate: "",
        postby: "",
        postingdate: "",
        paymentstatus: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        timeinput: "",
        timeedit: "",
        lastupdatestamp: 0,
        paymentadviceno: "",
        advancereceiverpersonnelid: "",
        paymentvoucherreceiverid: "",
        controlsequenceno: 0,
        receiveraccount: "",
        bankname: "",
        receivername: "",
        overpaymentamt: "",
        lotno: "",
        previousprocesscontrolsequenceno: 0,
        onebillreceipttype: "",
        onebillcontactid: "",
        vauploaddate: "",
        mandatorybudget: "",
        rowid: 0,
        debtorcreditorcd: "",
        paymentcategory: "I",
        batchstatus: "",
        translatedsource: "",
        processcontrolsequenceno: 0,
        contactid: "",
        documentcount: "",
        batchtotal: "",
        currentdocumentcount: "",
        currentbatchtotal: "",
        trxtypedescs: "",
        creditorname: "",
        paymentdescs: "",
        debtorname: ""
      },
      PI_batchno: {
        dataLookUp: {
          LookUpCd: "GetLookupCBBatch",
          ColumnDB: "BatchNo",
          InitialWhere:
            "SUBPORTFOLIOCD='" + this.getDataUser().SubPortfolioCd + "'",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "batchno",
        cLabel: "",
        cKey: false,
        cLabelSize: 4,
        cOrder: 1,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: false,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "CB/CB_BatchMaster",
        cDisplayColumn: "BatchNo,DocumentCount"
      },
      PI_documentcount: {
        cLabel: "",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_batchtotal: {
        cLabel: "",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_batchtotal: {
        cValidate: "",
        cName: "batchtotal",
        cLabel: "",
        cLabelSize: 4,
        cOptions: [],
        cOrder: 2,
        cKey: false,
        cVisible: false,
        cProtect: false,
        cDefault: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_currentdocumentcount: {
        cLabel: "Curr. Doc. Count",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_currentbatchtotal: {
        cLabel: "Curr. Batch Total",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_trxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SubPortfolioCd = '" +
            this.getDataUser().SubPortfolioCd +
            "' AND ModuleCd = 'CB' AND TrxClass IN ('M','T') AND Status = 'A'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "trxtype",
        cLabel: "Trans. Type",
        cKey: true,
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
        cMasterUrl: "CB/CB_SubPortofolioTransType",
        cDisplayColumn: "TrxType,Descs"
      },
      PI_paymentno: {
        cValidate: "required|max:20",
        cName: "paymentno",
        cLabel: "Payment No",
        cLabelSize: 4,
        cOrder: 4,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_paymentdate: {
        cValidate: "required",
        cName: "paymentdate",
        cLabel: "Payment Date ",
        cLabelSize: 4,
        cOrder: 5,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cFormat: "dd/MM/yyyy",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "(HH:MM)"
      },
      PI_paymentadviceno: {
        cValidate: "max:20",
        cName: "paymentadviceno",
        cLabel: "Payment Advice No",
        cLabelSize: 4,
        cOrder: 6,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_descs: {
        cValidate: "max:150",
        cName: "descs",
        cLabel: "Description",
        cLabelSize: 4,
        cOrder: 7,
        cKey: false,
        cType: "text",
        cVisible: true,
        cResize: false,
        cReadOnly: false,
        cRows: 2,
        cMaxRows: 2,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_paymentcategory: {
        cValidate: "",
        cName: "paymentcategory",
        cId: "rdbpaymentcategory",
        cRadioOptions: [
          { text: "Cash In", value: "I" },
          { text: "Cash Out", value: "O" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Payment Category ",
        cLabelSize: 4,
        cOrder: 8,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_identifiedtrxstatus: {
        cValidate: "",
        cName: "identifiedtrxstatus",
        cId: "rdbidentifiedtrxstatus",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Identified Trans",
        cLabelSize: 4,
        cOrder: 9,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_debtorcd: {
        dataLookUp: {
          LookUpCd: "GetLookupARDebtorCB",
          ColumnDB: "DebtorCd",
          InitialWhere:
            "SUBPORTFOLIOCD='" +
            this.getDataUser().SubPortfolioCd +
            "' And Status='Y' And DebtorCd Not IN (Select ISNULL(UnidentifiedDebtorCd,'') From AR_Specification Where SubportfolioCd='" +
            this.getDataUser().SubPortfolioCd +
            "')",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "debtorcd",
        cLabel: "Debtor Code",
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
        cMasterUrl: "AR/AR_Debtor",
        cDisplayColumn: "DebtorCd,DebtorName"
      },
      PI_creditorcd: {
        dataLookUp: {
          LookUpCd: "GetLookupCBCreditor",
          ColumnDB: "CreditorCd",
          InitialWhere:
            "PaymentHold = 'A' AND SUBPORTFOLIOCD='" +
            this.getDataUser().SubPortfolioCd +
            "'",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "creditorcd",
        cLabel: "Creditor Code",
        cKey: true,
        cLabelSize: 4,
        cOrder: 11,
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
        cMasterUrl: "AP/AP_Creditor",
        cDisplayColumn: "CreditorCd,Name"
      },
      PI_paymentcd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMPaymentType",
          ColumnDB: "PaymentCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "paymentcd",
        cLabel: "Payment Type",
        cKey: false,
        cLabelSize: 4,
        cOrder: 12,
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
        cMasterUrl: "CM/CM_PaymentType",
        cDisplayColumn: "PaymentCd,Descs"
      },
      PI_customerbankaccountno: {
        cValidate: "max:30",
        cName: "customerbankaccountno",
        cLabel: "Bank Account No",
        cLabelSize: 4,
        cOrder: 13,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_currencycd: {
        cValidate: "max:4",
        cName: "currencycd",
        cLabel: "Currency  ",
        cLabelSize: 4,
        cOrder: 14,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_bankcd: {
        dataLookUp: {
          LookUpCd: "GetLookupCBBank",
          ColumnDB: "BankCd",
          InitialWhere:
            "SubPortfolioCd='" +
            this.getDataUser().SubPortfolioCd +
            "' AND Status='A'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "bankcd",
        cLabel: "Bank",
        cKey: false,
        cLabelSize: 4,
        cOrder: 15,
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
        cMasterUrl: "CB/CB_Bank",
        cDisplayColumn: "BankCd,BankName"
      },
      PI_trxamt: {
        cValidate: "required",
        cName: "trxamt",
        cLabel: "Trans. Amount ",
        cLabelSize: 4,
        cOrder: 16,
        cKey: false,
        cType: "decimal",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_currencyrate: {
        cValidate: "required",
        cName: "currencyrate",
        cLabel: "Currency Rate ",
        cLabelSize: 4,
        cOrder: 17,
        cKey: false,
        cType: "decimal",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_chequereferenceno: {
        cValidate: "max:20",
        cName: "chequereferenceno",
        cLabel: "Cheque / Ref. No",
        cLabelSize: 4,
        cOrder: 18,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_chequereferencedate: {
        cValidate: "",
        cName: "chequereferencedate",
        cLabel: "Cheque / Ref Date",
        cLabelSize: 4,
        cOrder: 19,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_issuedbank: {
        cValidate: "max:30",
        cName: "issuedbank",
        cLabel: "Issue Bank",
        cLabelSize: 4,
        cOrder: 20,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_chequeduedate: {
        cValidate: "",
        cName: "chequeduedate",
        cLabel: "Due Date",
        cLabelSize: 4,
        cOrder: 21,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_receiveraccount: {
        dataLookUp: {
          LookUpCd: "",
          ColumnDB: "ReceiverAccount",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "receiveraccount",
        cLabel: "Receiver Account",
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
        cDisplayColumn: ""
      },
      PI_receivername: {
        cLabel: "",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 23,
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
      },

      HdnDebtorCd: ""
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
    OnbatchnoChange(data) {
      this.$nextTick(() => {
        this.M_CB_Payment.batchno = data.id;
        this.M_CB_Payment.batchnoLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{batchno}
        }
      });
      this.$forceUpdate();
    },
    OnbatchtotalChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{batchtotal}
        }
      });
      this.$forceUpdate();
    },
    OntrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_CB_Payment.trxtype = data.id;
        this.M_CB_Payment.trxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          this.FnGetTrxTypeData(
            this.getDataUser().SubPortfolioCd,
            this.Module,
            data.id
          ).then(dt => {
            if (dt != null) {
              var dta = dt[0];
              this.M_CB_Payment.runningcd = dta.RunningCd;
              this.M_CB_Payment.trxtypeLabel =
               data.id + this.separator + dta.TrxTypeDescs;
              this.M_CB_Payment.descs = dta.TrxTypeDescs
              // this.M_CB_Payment.bankcd = dta.DefaultBankCd;
              // this.M_CB_Payment.bankcdLabel =
              //   dta.DefaultBankCd && dta.DefaultBankCd != ""
              //     ? dta.DefaultBankCd + this.separator
              //     : "";

              if(dta.DefaultBankCd && dta.DefaultBankCd != ''){
                this.M_CB_Payment.bankcd = dta.DefaultBankCd
                this.M_CB_Payment.bankcdLabel = dta.DefaultBankCd + this.separator + dta.BankName
                
                var bankParam = {id: dta.DefaultBankCd, label: dta.DefaultBankCd + this.separator + dta.BankName}
                this.OnbankcdChange(bankParam)
              }              

              if (this.inputStatus != "EDIT") {
                if (dta.RunningCd != "") {
                  this.M_CB_Payment.paymentno = "(auto)";
                  this.PI_paymentno.cProtect = true;
                } else {
                  this.M_CB_Payment.paymentno = "";
                  this.PI_paymentno.cProtect = false;
                }
              }

              if (dta.DefaultBankCd && dta.DefaultBankCd != "") {
                var paramcurrencycd = {
                  OptionFunctionCd: "GetBankCurrencyCd",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  BankCd: dta.DefaultBankCd,
                  BankCurrencyCd_Output: ""
                };

                this.FnDynamicFunction(paramcurrencycd).then(currCd => {
                  if (currCd == null) return;
                  this.M_CB_Payment.currencycd = currCd.BankCurrencyCd;
                  if (
                    this.M_CB_Payment.paymentdate &&
                    this.M_CB_Payment.paymentdate != ""
                  ) {
                    this.FnGetCurrencyMiddleRate(
                      this.getDataUser().SubPortfolioCd,
                      this.M_CB_Payment.paymentdate,
                      currCd.BankCurrencyCd
                    ).then(dtCurrRate => {
                      this.M_CB_Payment.currencyrate = this.isCurrency(
                        dtCurrRate.CurrencyRate,
                        this.decimal
                      );
                    });
                  }
                });
              }
            }
          });
        }
      });
      this.$forceUpdate();
    },
    OnpaymentdateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (
            this.M_CB_Payment.currencycd &&
            this.M_CB_Payment.currencycd != "" &&
            data &&
            data != ""
          ) {
            this.FnGetCurrencyMiddleRate(
              this.getDataUser().SubPortfolioCd,
              data,
              this.M_CB_Payment.currencycd
            ).then(dtCurrRate => {
              this.M_CB_Payment.currencyrate = this.isCurrency(
                dtCurrRate.CurrencyRate,
                this.decimal
              );
            });
          }
        }
      });
      this.$forceUpdate();
    },
    OnpaymentcategoryChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
        }
      });
      this.$forceUpdate();
    },
    OnidentifiedtrxstatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data == "N") {
            this.M_CB_Payment.debtorcd = this.HdnDebtorCd;
            this.M_CB_Payment.debtorcdLabel = this.HdnDebtorCd;
            this.PI_debtorcd.cProtect = true;
            this.PI_creditorcd.cProtect = true;
            // mendisable debtorcd dan creditorcd
          } else {
            this.M_CB_Payment.debtorcd = "";
            this.M_CB_Payment.debtorcdLabel = "";
            this.M_CB_Payment.creditorcd = "";
            this.M_CB_Payment.creditorcdLabel = "";
            this.PI_debtorcd.cProtect = false;
            this.PI_creditorcd.cProtect = false;
            // men enable debtorcd dan creditorcd
          }
        }
      });
      this.$forceUpdate();
    },
    OndebtorcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Payment.debtorcd = data.id;
        this.M_CB_Payment.debtorcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          if (data.id != "") {
            this.PI_creditorcd.cProtect = true;
          } else {
            this.PI_creditorcd.cProtect = false;
          }
        }
      });
      this.$forceUpdate();
    },
    OncreditorcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Payment.creditorcd = data.id;
        this.M_CB_Payment.creditorcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          if (data.id != "") {
            this.PI_debtorcd.cProtect = true;
          } else {
            this.PI_debtorcd.cProtect = false;
          }
        }
      });
      this.$forceUpdate();
    },
    OnpaymentcdChange(data) {
      console.log(data);
      this.$nextTick(() => {
        this.M_CB_Payment.paymentcd = data.id;
        this.M_CB_Payment.paymentcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          if (data.PaymentType == "Non Cash") {
            this.PI_chequereferenceno.cValidate = "required";
            this.PI_chequereferencedate.cValidate = "required";
            this.PI_issuedbank.cValidate = "required";
            this.PI_chequeduedate.cValidate = "required";

            this.$refs.ref_chequereferenceno.isRequired = true;
            this.$refs.ref_chequereferencedate.isRequired = true;
            this.$refs.ref_issuedbank.isRequired = true;
            this.$refs.ref_chequeduedate.isRequired = true;
          } else {
            this.PI_chequereferenceno.cValidate = "";
            this.PI_chequereferencedate.cValidate = "";
            this.PI_issuedbank.cValidate = "";
            this.PI_chequeduedate.cValidate = "";

            this.$refs.ref_chequereferenceno.isRequired = false;
            this.$refs.ref_chequereferencedate.isRequired = false;
            this.$refs.ref_issuedbank.isRequired = false;
            this.$refs.ref_chequeduedate.isRequired = false;
          }
          //{paymentcd}
        }
      });
      this.$forceUpdate();
    },
    OnbankcdChange(data) {
      this.$nextTick(() => {
        this.M_CB_Payment.bankcd = data.id;
        this.M_CB_Payment.bankcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          var paramcurrencycd = {
            OptionFunctionCd: "GetBankCurrencyCd",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BankCd: this.M_CB_Payment.bankcd,
            BankCurrencyCd_Output: ""
          };

          this.FnDynamicFunction(paramcurrencycd).then(currCd => {
            if (currCd == null) return;
            this.M_CB_Payment.currencycd = currCd.BankCurrencyCd;
            if (
              this.M_CB_Payment.paymentdate &&
              this.M_CB_Payment.paymentdate != ""
            ) {
              this.FnGetCurrencyMiddleRate(
                this.getDataUser().SubPortfolioCd,
                this.M_CB_Payment.paymentdate,
                currCd.BankCurrencyCd
              ).then(dtCurrRate => {
                this.M_CB_Payment.currencyrate = this.isCurrency(
                  dtCurrRate.CurrencyRate,
                  this.decimal
                );
              });
            }
          });
        }
      });
      this.$forceUpdate();
    },
    OnchequereferencedateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{chequereferencedate}
        }
      });
      this.$forceUpdate();
    },
    OnchequeduedateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{chequeduedate}
        }
      });
      this.$forceUpdate();
    },
    OnreceiveraccountChange(data) {
      this.$nextTick(() => {
        this.M_CB_Payment.receiveraccount = data.id;
        this.M_CB_Payment.receiveraccountLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{receiveraccount}
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
      this.getToolbar().statusFunction[4].text = "Process";
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
    M_Post(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataPost = [];

      data.forEach(value => {
        // console.log(value);
        dataPost.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo: value.BatchNo,
          PostBy: this.getDataUser().UserId,
          _Message_:
            "Payment No = " +
            value.PaymentNo +
            " And " +
            "Batch No = " +
            value.BatchNo
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
      if (this.M_CB_Payment.identifiedtrxstatus == "Y") {
        if (this.M_CB_Payment.debtorcd && this.M_CB_Payment.debtorcd != "") {
          if (this.M_CB_Payment.debtorcd == this.HdnDebtorCd) {
            this.alertError("This Debtor is Reserved as Unidentified Debtor");
            return;
          }
        }
      }

      if (this.M_CB_Payment.runningcd != "") {
        this.FnGenerateRunningCode(
          this.getDataUser().SubPortfolioCd,
          this.M_CB_Payment.runningcd,
          this.getDataUser().UserId,
          this.M_CB_Payment.paymentdate
        ).then(dt => {
          if (dt == null) return;

          this.M_CB_Payment.paymentno = dt.RunningCode;

          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            DocumentCount: 0,
            BatchTotal: 0,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BatchNo: 0,
            TrxType:
              this.M_CB_Payment.trxtype == "" ||
              this.M_CB_Payment.trxtype == null
                ? "NULL"
                : this.M_CB_Payment.trxtype,
            PaymentNo: this.M_CB_Payment.paymentno,
            BankCd:
              this.M_CB_Payment.bankcd == "" || this.M_CB_Payment.bankcd == null
                ? "NULL"
                : this.M_CB_Payment.bankcd,
            PaymentDate:
              this.M_CB_Payment.paymentdate == "" ||
              this.M_CB_Payment.paymentdate == null
                ? "NULL"
                : this.M_CB_Payment.paymentdate,
            Descs: this.M_CB_Payment.descs,
            DebtorCd:
              this.M_CB_Payment.debtorcd == "" ||
              this.M_CB_Payment.debtorcd == null
                ? "NULL"
                : this.M_CB_Payment.debtorcd,
            CreditorCd:
              this.M_CB_Payment.creditorcd == "" ||
              this.M_CB_Payment.creditorcd == null
                ? "NULL"
                : this.M_CB_Payment.creditorcd,
            PaymentCategory: this.M_CB_Payment.paymentcategory,
            IdentifiedTrxStatus: this.M_CB_Payment.identifiedtrxstatus,
            PaymentCd:
              this.M_CB_Payment.paymentcd == "" ||
              this.M_CB_Payment.paymentcd == null
                ? "NULL"
                : this.M_CB_Payment.paymentcd,
            CurrencyCd: this.M_CB_Payment.currencycd,
            CurrencyRate: this.replaceAllString(
              this.M_CB_Payment.currencyrate,
              ",",
              "",
              "number"
            ),
            TrxAmt: this.replaceAllString(
              this.M_CB_Payment.trxamt,
              ",",
              "",
              "number"
            ),
            ChequeReferenceNo: this.M_CB_Payment.chequereferenceno,
            ChequeReferenceDate:
              this.M_CB_Payment.chequereferencedate == "" ||
              this.M_CB_Payment.chequereferencedate == null
                ? "NULL"
                : this.M_CB_Payment.chequereferencedate,
            IssuedBank: this.M_CB_Payment.issuedbank,
            Remarks: this.M_CB_Payment.remarks,
            ChequeDueDate:
              this.M_CB_Payment.chequeduedate == "" ||
              this.M_CB_Payment.chequeduedate == null
                ? "NULL"
                : this.M_CB_Payment.chequeduedate,
            UserInput: this.getDataUser().UserId,
            CustomerBankAccountNo: this.M_CB_Payment.customerbankaccountno,
            ReceiverAccount:
              this.M_CB_Payment.receiveraccount == "" ||
              this.M_CB_Payment.receiveraccount == null
                ? "NULL"
                : this.M_CB_Payment.receiveraccount
          };

          this.postJSON(this.getUrlInsert(), param).then(response => {
            if (response == null) return;
            this.$parent.resultInsert(response.Message);
          });
        });
      } else {
        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          DocumentCount: 0,
          BatchTotal: 0,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo: 0,
          TrxType:
            this.M_CB_Payment.trxtype == "" || this.M_CB_Payment.trxtype == null
              ? "NULL"
              : this.M_CB_Payment.trxtype,
          PaymentNo: this.M_CB_Payment.paymentno,
          BankCd:
            this.M_CB_Payment.bankcd == "" || this.M_CB_Payment.bankcd == null
              ? "NULL"
              : this.M_CB_Payment.bankcd,
          PaymentDate:
            this.M_CB_Payment.paymentdate == "" ||
            this.M_CB_Payment.paymentdate == null
              ? "NULL"
              : this.M_CB_Payment.paymentdate,
          Descs: this.M_CB_Payment.descs,
          DebtorCd:
            this.M_CB_Payment.debtorcd == "" ||
            this.M_CB_Payment.debtorcd == null
              ? "NULL"
              : this.M_CB_Payment.debtorcd,
          CreditorCd:
            this.M_CB_Payment.creditorcd == "" ||
            this.M_CB_Payment.creditorcd == null
              ? "NULL"
              : this.M_CB_Payment.creditorcd,
          PaymentCategory: this.M_CB_Payment.paymentcategory,
          IdentifiedTrxStatus: this.M_CB_Payment.identifiedtrxstatus,
          PaymentCd:
            this.M_CB_Payment.paymentcd == "" ||
            this.M_CB_Payment.paymentcd == null
              ? "NULL"
              : this.M_CB_Payment.paymentcd,
          CurrencyCd: this.M_CB_Payment.currencycd,
          CurrencyRate: this.replaceAllString(
            this.M_CB_Payment.currencyrate,
            ",",
            "",
            "number"
          ),
          TrxAmt: this.replaceAllString(
            this.M_CB_Payment.trxamt,
            ",",
            "",
            "number"
          ),
          ChequeReferenceNo: this.M_CB_Payment.chequereferenceno,
          ChequeReferenceDate:
            this.M_CB_Payment.chequereferencedate == "" ||
            this.M_CB_Payment.chequereferencedate == null
              ? "NULL"
              : this.M_CB_Payment.chequereferencedate,
          IssuedBank: this.M_CB_Payment.issuedbank,
          Remarks: this.M_CB_Payment.remarks,
          ChequeDueDate:
            this.M_CB_Payment.chequeduedate == "" ||
            this.M_CB_Payment.chequeduedate == null
              ? "NULL"
              : this.M_CB_Payment.chequeduedate,
          UserInput: this.getDataUser().UserId,
          CustomerBankAccountNo: this.M_CB_Payment.customerbankaccountno,
          ReceiverAccount:
            this.M_CB_Payment.receiveraccount == "" ||
            this.M_CB_Payment.receiveraccount == null
              ? "NULL"
              : this.M_CB_Payment.receiveraccount
        };

        this.postJSON(this.getUrlInsert(), param).then(response => {
          if (response == null) return;
          this.$parent.resultInsert(response.Message);
        });
      }
    },
    M_Update() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        DocumentCount:
          this.M_CB_Payment.documentcount &&
          this.M_CB_Payment.documentcount != ""
            ? this.M_CB_Payment.documentcount
            : 0,
        BatchTotal:
          this.M_CB_Payment.batchtotal && this.M_CB_Payment.batchtotal != ""
            ? this.M_CB_Payment.batchtotal
            : 0,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        BatchNo:
          this.M_CB_Payment.batchno == "" || this.M_CB_Payment.batchno == null
            ? "NULL"
            : this.M_CB_Payment.batchno,
        TrxType:
          this.M_CB_Payment.trxtype == "" || this.M_CB_Payment.trxtype == null
            ? "NULL"
            : this.M_CB_Payment.trxtype,
        PaymentNo: this.M_CB_Payment.paymentno,
        PaymentDate:
          this.M_CB_Payment.paymentdate == "" ||
          this.M_CB_Payment.paymentdate == null
            ? "NULL"
            : this.M_CB_Payment.paymentdate,
        BankCd:
          this.M_CB_Payment.bankcd == "" || this.M_CB_Payment.bankcd == null
            ? "NULL"
            : this.M_CB_Payment.bankcd,
        Descs: this.M_CB_Payment.descs,
        DebtorCd:
          this.M_CB_Payment.debtorcd == "" || this.M_CB_Payment.debtorcd == null
            ? "NULL"
            : this.M_CB_Payment.debtorcd,
        CreditorCd:
          this.M_CB_Payment.creditorcd == "" ||
          this.M_CB_Payment.creditorcd == null
            ? "NULL"
            : this.M_CB_Payment.creditorcd,
        PaymentCategory: this.M_CB_Payment.paymentcategory,
        IdentifiedTrxStatus: this.M_CB_Payment.identifiedtrxstatus,
        PaymentCd:
          this.M_CB_Payment.paymentcd == "" ||
          this.M_CB_Payment.paymentcd == null
            ? "NULL"
            : this.M_CB_Payment.paymentcd,
        CurrencyCd: this.M_CB_Payment.currencycd,
        CurrencyRate: this.replaceAllString(
          this.M_CB_Payment.currencyrate,
          ",",
          "",
          "number"
        ),
        TrxAmt: this.replaceAllString(
          this.M_CB_Payment.trxamt,
          ",",
          "",
          "number"
        ),
        ChequeReferenceNo: this.M_CB_Payment.chequereferenceno,
        ChequeReferenceDate:
          this.M_CB_Payment.chequereferencedate == "" ||
          this.M_CB_Payment.chequereferencedate == null
            ? "NULL"
            : this.M_CB_Payment.chequereferencedate,
        IssuedBank: this.M_CB_Payment.issuedbank,
        Remarks: this.M_CB_Payment.remarks,
        ChequeDueDate:
          this.M_CB_Payment.chequeduedate == "" ||
          this.M_CB_Payment.chequeduedate == null
            ? "NULL"
            : this.M_CB_Payment.chequeduedate,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_CB_Payment.lastupdatestamp,
        CustomerBankAccountNo: this.M_CB_Payment.customerbankaccountno,
        ReceiverAccount:
          this.M_CB_Payment.receiveraccount == "" ||
          this.M_CB_Payment.receiveraccount == null
            ? "NULL"
            : this.M_CB_Payment.receiveraccount
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_CB_Payment = {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        batchno: 0,
        source: "",
        runningcd: "",
        trxtype: "",
        modulecd: "",
        paymentno: "",
        paymentdate: new Date(),
        descs: "",
        identifiedtrxstatus: "Y",
        debtorcd: "",
        creditorcd: "",
        paymentcd: "",
        bankcd: "",
        currencycd: "",
        currencyrate: "",
        taxcurrencyrate: "",
        originalcurrencyrate: "",
        tobankcd: "",
        tocurrencycd: "",
        currencyoperator: "",
        trxamt: "",
        totrxamt: "",
        netamt: "",
        vatamt: "",
        withholdingamt: "",
        underpaymentamt: "",
        bankchargesamt: "",
        customerbankaccountno: "",
        referenceno: "",
        chequereferenceno: "",
        chequereferencedate: "",
        issuedbank: "",
        chequeduedate: "",
        lastrevaluationdate: "",
        lastrevaluationcurrencyrate: "",
        postby: "",
        postingdate: "",
        paymentstatus: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        timeinput: "",
        timeedit: "",
        lastupdatestamp: 0,
        paymentadviceno: "",
        advancereceiverpersonnelid: "",
        paymentvoucherreceiverid: "",
        controlsequenceno: 0,
        receiveraccount: "",
        bankname: "",
        receivername: "",
        overpaymentamt: "",
        lotno: "",
        previousprocesscontrolsequenceno: 0,
        onebillreceipttype: "",
        onebillcontactid: "",
        vauploaddate: "",
        mandatorybudget: "",
        rowid: 0,
        debtorcreditorcd: "",
        paymentcategory: "I",
        batchstatus: "",
        translatedsource: "",
        processcontrolsequenceno: 0,
        contactid: "",
        documentcount: "",
        batchtotal: "",
        currentdocumentcount: "",
        currentbatchtotal: "",
        trxtypedescs: "",
        creditorname: "",
        paymentdescs: "",
        debtorname: ""
      };
    },
    M_New() {
      this.$refs.ref_trxtype.focus();
    },
    M_Edit() {
      this.$refs.ref_paymentdate.focus();
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          PaymentNo: value.PaymentNo,
          BatchNo: value.BatchNo,
          UserEdit: this.getDataUser().UserId,
          LastUpdateStamp: value.LastUpdateStamp,
          _Message_: "Data "
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
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        paymentno: record.PaymentNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        this.M_CB_Payment = {
          subportfoliocd: data.subportfoliocd,
          batchno: data.batchno,
          source: data.source,
          runningcd: data.runningcd,
          trxtype: data.trxtype,
          modulecd: data.modulecd,
          paymentno: data.paymentno,
          paymentdate: data.paymentdate,
          descs: data.descs,
          identifiedtrxstatus: data.identifiedtrxstatus,
          debtorcd: data.debtorcd,
          creditorcd: data.creditorcd,
          paymentcd: data.paymentcd,
          bankcd: data.bankcd,
          currencycd: data.currencycd,
          currencyrate: this.isCurrency(data.currencyrate, this.decimal),
          taxcurrencyrate: data.taxcurrencyrate,
          originalcurrencyrate: data.originalcurrencyrate,
          tobankcd: data.tobankcd,
          tocurrencycd: data.tocurrencycd,
          currencyoperator: data.currencyoperator,
          trxamt: this.isCurrency(data.trxamt, this.decimal),
          totrxamt: data.totrxamt,
          netamt: data.netamt,
          vatamt: data.vatamt,
          withholdingamt: data.withholdingamt,
          underpaymentamt: data.underpaymentamt,
          bankchargesamt: data.bankchargesamt,
          customerbankaccountno: data.customerbankaccountno,
          referenceno: data.referenceno,
          chequereferenceno: data.chequereferenceno,
          chequereferencedate: data.chequereferencedate,
          issuedbank: data.issuedbank,
          chequeduedate: data.chequeduedate,
          lastrevaluationdate: data.lastrevaluationdate,
          lastrevaluationcurrencyrate: data.lastrevaluationcurrencyrate,
          postby: data.postby,
          postingdate: data.postingdate,
          paymentstatus: data.paymentstatus,
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          timeinput: data.timeinput,
          timeedit: data.timeedit,
          lastupdatestamp: record.LastUpdateStamp,
          paymentadviceno: data.paymentadviceno,
          advancereceiverpersonnelid: data.advancereceiverpersonnelid,
          paymentvoucherreceiverid: data.paymentvoucherreceiverid,
          controlsequenceno: data.controlsequenceno,
          receiveraccount: data.receiveraccount,
          bankname: data.bankname,
          receivername: data.receivername,
          overpaymentamt: data.overpaymentamt,
          lotno: data.lotno,
          previousprocesscontrolsequenceno:
            data.previousprocesscontrolsequenceno,
          onebillreceipttype: data.onebillreceipttype,
          onebillcontactid: data.onebillcontactid,
          vauploaddate: data.vauploaddate,
          mandatorybudget: data.mandatorybudget,
          rowid: data.rowid,
          debtorcreditorcd: data.debtorcreditorcd,
          paymentcategory: data.paymentcategory,
          batchstatus: data.batchstatus,
          translatedsource: data.translatedsource,
          processcontrolsequenceno: data.processcontrolsequenceno,
          contactid: data.contactid,
          documentcount: data.documentcount,
          batchtotal: data.batchtotal,
          currentdocumentcount: data.currentdocumentcount,
          currentbatchtotal: data.currentbatchtotal,
          trxtypedescs: data.trxtypedescs,
          creditorname: data.creditorname,
          paymentdescs: data.paymentdescs,
          debtorname: data.debtorname
        };

        this.M_CB_Payment.batchnoLabel =
          this.M_CB_Payment.batchno != null && this.M_CB_Payment.batchno != ""
            ? data.batchno + this.separator
            : "";
        this.M_CB_Payment.trxtypeLabel =
          this.M_CB_Payment.trxtype != null && this.M_CB_Payment.trxtype != ""
            ? data.trxtype + this.separator + data.trxtypedescs
            : "";
        this.M_CB_Payment.debtorcdLabel =
          this.M_CB_Payment.debtorcd != null && this.M_CB_Payment.debtorcd != ""
            ? data.debtorcd + this.separator + data.debtorname
            : "";
        this.M_CB_Payment.creditorcdLabel =
          this.M_CB_Payment.creditorcd != null &&
          this.M_CB_Payment.creditorcd != ""
            ? data.creditorcd + this.separator + data.creditorname
            : "";
        this.M_CB_Payment.paymentcdLabel =
          this.M_CB_Payment.paymentcd != null &&
          this.M_CB_Payment.paymentcd != ""
            ? data.paymentcd + this.separator + data.paymentdescs
            : "";
        this.M_CB_Payment.bankcdLabel =
          this.M_CB_Payment.bankcd != null && this.M_CB_Payment.bankcd != ""
            ? data.bankcd + this.separator + data.bankname
            : "";
        this.M_CB_Payment.receiveraccountLabel =
          this.M_CB_Payment.receiveraccount != null &&
          this.M_CB_Payment.receiveraccount != ""
            ? data.receiveraccount + this.separator + data.receivername
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
      });
    },
    GetARUnIdentifiedDebtorCd() {
      var param = {
        OptionFunctionCd: "GetARUnIdentifiedDebtorCd",
        ModuleCd: this.Module,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        DebtorCd_Output: ""
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        this.HdnDebtorCd = ress.DebtorCd;
      });
    }
  },
  beforeCreate: function() {},
  created: function() {
    this.$store.commit("setFormType", "ListProcess");
    this.FormType = "ListProcess";
    this.getToolbar().ProcessPS();
    this.GetARUnIdentifiedDebtorCd();
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

