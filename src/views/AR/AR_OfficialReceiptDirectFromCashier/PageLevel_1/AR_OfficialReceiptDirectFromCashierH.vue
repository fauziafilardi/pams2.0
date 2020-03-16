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
      @allCheckBoxAction="headCheckboxAction"
      @checkboxChecked="checkboxAction"
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
          <font-awesome-icon icon="sort-down" class="icon-style-1__master"/>
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
                        :value="M_AR_OfficialReceiptDirectFromCashierH.batchno"
                        :label="M_AR_OfficialReceiptDirectFromCashierH.batchnoLabel"
                        ref="ref_batchno"
                      />
                    </b-col>
                    <b-col md="3">
                      <ABSCompute
                        :prop="PI_documentcount"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.documentcount"
                        ref="ref_documentcount"
                      />
                    </b-col>
                    <b-col md="3">
                      <ABSCompute
                        :prop="PI_batchtotal"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.batchtotal"
                        ref="ref_batchtotal"
                      />
                    </b-col>
                    <b-col md="3">
                      <ABSinputCheckBox
                        @input="OnbatchstatusChange"
                        :prop="PI_batchstatus"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.batchstatus"
                        ref="ref_batchstatus"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_currentdocumentcount"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.currentdocumentcount"
                        ref="ref_currentdocumentcount"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_currentbatchtotal"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.currentbatchtotal"
                        ref="ref_currentbatchtotal"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_cashierno"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.cashierno"
                        ref="ref_cashierno"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputCheckBox
                        @input="OnstatusChange"
                        :prop="PI_status"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.status"
                        ref="ref_status"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OntrxtypeChange"
                        :prop="PI_trxtype"
                        :value="M_AR_OfficialReceiptDirectFromCashierH.trxtype"
                        :label="M_AR_OfficialReceiptDirectFromCashierH.trxtypeLabel"
                        ref="ref_trxtype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_creditno"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.creditno"
                        ref="ref_creditno"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputDateVuex
                        :prop="PI_creditdate"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.creditdate"
                        ref="ref_creditdate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_referenceno"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.referenceno"
                        ref="ref_referenceno"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputDateVuex
                        @input="OnreferencedateChange"
                        :prop="PI_referencedate"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.referencedate"
                        ref="ref_referencedate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_debtorcd"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.debtorcdLabel"
                        ref="ref_debtorcd"
                      />
                    </b-col>
                    <!-- <b-col md="6">
                      <ABSCompute
                        :prop="PI_debtorname"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.debtorname"
                        ref="ref_debtorname"
                      />
                    </b-col> -->
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_descs"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.descs"
                        ref="ref_descs"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_currencycd"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.currencycd"
                        ref="ref_currencycd"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_currencyrate"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.currencyrate"
                        ref="ref_currencyrate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_paymentcd"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.paymentcd"
                        ref="ref_paymentcd"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_bankcd"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.bankcd"
                        ref="ref_bankcd"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">
                      Cheque / Reference No
                    </span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_chequereferenceno"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.chequereferenceno"
                        ref="ref_chequereferenceno"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_chequereferencedate"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.chequereferencedate"
                        ref="ref_chequereferencedate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_issuedbank"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.issuedbank"
                        ref="ref_issuedbank"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_chequeduedate"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.chequeduedate"
                        ref="ref_chequeduedate"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">
                      Receipt
                    </span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_creditamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.creditamt"
                        ref="ref_creditamt"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_totalnetallocated"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.totalnetallocated"
                        ref="ref_totalnetallocated"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_vatpaidbycustomer"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.vatpaidbycustomer"
                        ref="ref_vatpaidbycustomer"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_totalvatallocated"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.totalvatallocated"
                        ref="ref_totalvatallocated"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_withholdingpaidbycustomer"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.withholdingpaidbycustomer"
                        ref="ref_withholdingpaidbycustomer"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_totalwithholdingallocated"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.totalwithholdingallocated"
                        ref="ref_totalwithholdingallocated"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_bankchargesamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.bankchargesamt"
                        ref="ref_bankchargesamt"
                        @input="CalculateTotalAllocationAmount"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_overpaymentamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.overpaymentamt"
                        ref="ref_overpaymentamt"
                        @input="CalculateTotalAllocationAmount"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_underpaymentamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.underpaymentamt"
                        ref="ref_underpaymentamt"
                        @input="CalculateTotalAllocationAmount"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_advanceamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.advanceamt"
                        ref="ref_advanceamt"
                        @input="CalculateTotalAllocationAmount"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_totalallocationamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.totalallocationamt"
                        ref="ref_totalallocationamt"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_allocatedamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.allocatedamt"
                        ref="ref_allocatedamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_forexgainlossamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.forexgainlossamt"
                        ref="ref_forexgainlossamt"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_balanceamt"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.balanceamt"
                        ref="ref_balanceamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.remarks"
                        ref="ref_remarks"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputCheckBox
                        @input="OnautoallocateChange"
                        :prop="PI_autoallocate"
                        v-model="M_AR_OfficialReceiptDirectFromCashierH.autoallocate"
                        ref="ref_autoallocate"
                      />
                    </b-col>
                    <!-- <b-col md="4">
                                        <ABSCompute :prop="PI_alloc" v-model="M_AR_OfficialReceiptDirectFromCashierH.alloc"  ref="ref_alloc" />
                    </b-col>-->
                  </b-row>
                  <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencyrate" v-model="M_AR_OfficialReceiptDirectFromCashierH.currencyrate"  ref="ref_currencyrate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_detailoutstandingamt" v-model="M_AR_OfficialReceiptDirectFromCashierH.detailoutstandingamt"  ref="ref_detailoutstandingamt"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_debitcurrencyrate" v-model="M_AR_OfficialReceiptDirectFromCashierH.debitcurrencyrate"  ref="ref_debitcurrencyrate"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_totalallocationamt" v-model="M_AR_OfficialReceiptDirectFromCashierH.totalallocationamt"  ref="ref_totalallocationamt"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_creditcurrencyrate" v-model="M_AR_OfficialReceiptDirectFromCashierH.creditcurrencyrate"  ref="ref_creditcurrencyrate"/>
                                      </b-col>
                  </b-row>-->
                </b-col>
                <!-- table close -->
              </b-row>
              <ABSTAnalysis :prop="PTAnalysis"/>
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
      Module: "AR",
      propList: {
        initialWhere:
          "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'", // AND BatchNo = 10018336",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },

      M_AR_OfficialReceiptDirectFromCashierH: {
        batchno: 0,
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        cashierno: "",
        trxtype: "",
        creditno: "",
        creditdate: "",
        referenceno: "",
        referencedate: "",
        debtorcd: "",
        debtorcdLabel: "",
        descs: "",
        paymentcd: "",
        currencycd: "",
        bankcd: "",
        chequereferenceno: "",
        currencyrate: "",
        chequereferencedate: "",
        issuedbank: "",
        chequeduedate: "",
        creditamt: "",
        vatpaidbycustomer: "",
        withholdingpaidbycustomer: "",
        bankchargesamt: "0",
        overpaymentamt: "0",
        underpaymentamt: "0",
        advanceamt: "0",
        allocatedamt: "",
        forexgainlossamt: "",
        totalallocationamt: "",
        remarks: "",
        status: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        timeedit: "",
        documentcount: 0,
        batchtotal: "",
        batchstatus: "",
        debtorname: "",
        totalnetallocated: 0,
        totalvatallocated: 0,
        totalwithholdingallocated: 0,
        trxtypedescs: "",
        withholdingtreatment: "",
        maximumoverpaymentamt: "",
        maximumunderpaymentamt: "",
        maximumbankchargesamt: "",
        currentbatchtotal: 0,
        currentdocumentcount: 0,
        basecurrencycd: "",
        lastupdatestamp: 0,
        rowid: 0,
        balanceamt: "",
        autoallocate: [],
        alloc: "",
        autoallocateor: "",
        detailoutstandingamt: "",
        debitcurrencyrate: "",
        creditcurrencyrate: "0"
      },
      PI_batchno: {
        dataLookUp: {
          LookUpCd: "GetLookupARBatchMaster",
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
        cOrder: 0,
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
        cMasterUrl: "AR/AR_BatchMaster",
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
        cLabel: "Batch Total",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_batchstatus: {
        cValidate: "",
        cName: "batchstatus",
        cLabel: "",
        cLabelSize: 4,
        cOptions: [],
        cOrder: 0,
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
        cLabel: "Curr. Batch Total  ",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_cashierno: {
        cLabel: "Cashier No",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_status: {
        cValidate: "",
        cName: "status",
        cLabel: "",
        cLabelSize: 4,
        cOptions: [],
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cDefault: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_trxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SUBPORTFOLIOCD = '" +
            this.getDataUser().SubPortfolioCd +
            "' AND MODULECD = 'AR' AND TrxClass='M'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "trxtype",
        cLabel: "Trans. Type ",
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
        cMasterUrl: "AR/AR_TransactionTypeSubPortfolioMaintenance",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_creditno: {
        cValidate: "required|max:20",
        cName: "creditno",
        cLabel: "Receipt No ",
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
      PI_creditdate: {
        cValidate: "max:20",
        cName: "creditdate",
        cLabel: "Receipt Date",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_referenceno: {
        cValidate: "max:20",
        cName: "referenceno",
        cLabel: "Reference No",
        cLabelSize: 4,
        cOrder: 2,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_referencedate: {
        cValidate: "",
        cName: "referencedate",
        cLabel: "Reference Date",
        cLabelSize: 4,
        cOrder: 3,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_debtorcd: {
        cLabel: "Debtor Code",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_debtorname: {
        cLabel: "DebtorName",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_descs: {
        cValidate: "max:150",
        cName: "descs",
        cLabel: "Description",
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
      PI_currencycd: {
        cLabel: "Currency",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_currencyrate: {
        cLabel: "Currency Rate",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_paymentcd: {
        cLabel: "Receipt Type",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_bankcd: {
        cLabel: "Bank",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_chequereferenceno: {
        cLabel: "Cheque / Ref. No",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_chequereferencedate: {
        cLabel: "Cheque / Ref Date",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_issuedbank: {
        cLabel: "Issue Bank",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_chequeduedate: {
        cLabel: "Due Date",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_creditamt: {
        cLabel: "Receipt Amount",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_totalnetallocated: {
        cLabel: "Net Allocated",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_vatpaidbycustomer: {
        cLabel: "VAT Paid By Debtor",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_totalvatallocated: {
        cLabel: "VAT Allocated",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_withholdingpaidbycustomer: {
        cLabel: "Withholding Paid By Debtor",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_totalwithholdingallocated: {
        cLabel: "Withholding Allocated",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_bankchargesamt: {
        cValidate: "",
        cName: "bankchargesamt",
        cLabel: "Bank Charges",
        cLabelSize: 4,
        cOrder: 5,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_overpaymentamt: {
        cValidate: "",
        cName: "overpaymentamt",
        cLabel: "Over Receipt Amount",
        cLabelSize: 4,
        cOrder: 6,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_underpaymentamt: {
        cValidate: "",
        cName: "underpaymentamt",
        cLabel: "Under Receipt Amount",
        cLabelSize: 4,
        cOrder: 7,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_advanceamt: {
        cValidate: "",
        cName: "advanceamt",
        cLabel: "Advance Receipt",
        cLabelSize: 4,
        cOrder: 8,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_allocatedamt: {
        cLabel: "Total Allocated",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_forexgainlossamt: {
        cLabel: "Forex",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_balanceamt: {
        cLabel: "Balance Amount",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cProtect: true
      },
      PI_autoallocate: {
        cValidate: "",
        cName: "autoallocate",
        cLabel: "Auto Allocate",
        cLabelSize: 4,
        cOptions: [{ text: "Auto Allocate Detail", value: "Y" }],
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cDefault: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 9,
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
      PI_autoallocateor: {
        cValidate: "",
        cName: "autoallocateor",
        cLabel: "Auto Allocate  Detail",
        cLabelSize: 4,
        cOptions: [],
        cOrder: 0,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cDefault: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_alloc: {
        cLabel: "",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      // PI_currencyrate: {
      //   cLabel: "",
      //   cLabelSize: 4,
      //   cValue: "",
      //   cPageLevel: this.PageLevel,
      //   cTabIndex: this.TabIndex,
      //   cVisible: false
      // },
      PI_detailoutstandingamt: {
        cLabel:
          '<ItemTemplate><tr><td align="right"><asp:Label ID="lblShortDesc1" runat="server"',
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_debitcurrencyrate: {
        cLabel: "",
        cLabelSize: 4,
        cValue: "",
        cType: "decimal",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: false
      },
      PI_totalallocationamt: {
        cValidate: "",
        cName: "totalallocationamt",
        cLabel: "Total Allocation Amount",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_creditcurrencyrate: {
        cValidate: "",
        cName: "creditcurrencyrate",
        cLabel: "",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "numeric",
        cVisible: false,
        cProtect: false,
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
      M_DataSelected: [],
      checkboxCan: []
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
    DataList() {
      // this.M_DataList = this.FormToABSList().items
      return this.FormToABSList().items
    },
    checkboxhuh() {
      console.log(this.checkboxCan)
      var _result = true

      var boolP = false
      var boolD = false

      boolP = this.checkboxCan.map(xx => xx.boolP).indexOf(false) < 0
      boolD = this.checkboxCan.map(xx => xx.boolD).indexOf(false) < 0

      // for (let i = 0; i < dataselect.length; i++) {
      //   if (datass[dataselect[i]].ReceiptNo && datass[dataselect[i]].ReceiptNo != '') {
      //     if (datass[dataselect[i]].BatchStatus && datass[dataselect[i]].BatchStatus.toUpperCase() == 'BALANCE') {
      //     }
      //     else {
      //       if (boolP) {
      //         boolP = false
      //       }
      //     }
      //   }
      //   else {
      //     boolD = false
      //     boolP = false

      //     break;
      //   }
      // }

      this.$store.commit('setPostStatus', boolP)
      this.$store.commit('setDeleteStatus', boolD)

      return _result
    }
  },
  methods: {
    OnbatchnoChange(data) {
      this.$nextTick(() => {
        this.M_AR_OfficialReceiptDirectFromCashierH.batchno = data.id;
        this.M_AR_OfficialReceiptDirectFromCashierH.batchnoLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{batchno}
        }
      });
      this.$forceUpdate();
    },
    OnbatchstatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{batchstatus}
        }
      });
      this.$forceUpdate();
    },
    OnstatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{status}
        }
      });
      this.$forceUpdate();
    },
    OntrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AR_OfficialReceiptDirectFromCashierH.trxtype = data.id
        this.M_AR_OfficialReceiptDirectFromCashierH.trxtypeLabel = data.label
        if (this.inputStatus != "VIEW") {
          this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
            if (dt != null) { 
              var dta = dt[0]
              this.M_AR_OfficialReceiptDirectFromCashierH.runningcd = dta.RunningCd
              this.M_AR_OfficialReceiptDirectFromCashierH.trxtypeLabel = data.id + this.separator + dta.TrxTypeDescs
              // this.M_AR_OfficialReceiptDirectFromCashierH.descs = dta.TrxTypeDescs
              
              if (this.DataRow.ReceiptNo == null || this.DataRow.ReceiptNo == "") {
                if (dta.RunningCd != '') {
                  this.M_AR_OfficialReceiptDirectFromCashierH.creditno = "(auto)"
                  this.PI_creditno.cProtect = true
                }
                else {
                  this.M_AR_OfficialReceiptDirectFromCashierH.creditno = ""
                  this.PI_creditno.cProtect = false
                }
              }
            }
          })
        }
      });
      this.$forceUpdate();
    },
    OnreferencedateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{referencedate}
        }
      });
      this.$forceUpdate();
    },
    OnautoallocateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{autoallocate}
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
    OnautoallocateorChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{autoallocateor}
        }
      });
      this.$forceUpdate();
    },
    setToolbarButton() {
      // this.getToolbar().statusFunction[0].disabled = true
      this.$store.commit('setNewStatus', false)
    },
    M_Head_Table() {},
    M_PageSize() {},
    M_TabClick() {},
    M_Pagination() {},
    M_Advance_Filter() {},
    M_Search(data) {},
    headCheckboxAction(data, status) {
      if (status) {
        this.$store.commit('setDeleteStatus', true)
        this.$store.commit('setPostStatus', true)
      }
      else {
        var boolD = true
        var boolP = true
        for (let i = 0; i < data.length; i++) {
          if (data[i].ReceiptNo && data[i].ReceiptNo != '') {
            if (data[i].BatchStatus && data[i].BatchStatus.toUpperCase() == 'BALANCE') {
            }
            else {
              if (boolP) {
                boolP = false
              }
            }
          }
          else {
            boolD = false
            boolP = false

            break;
          }
        }

        this.$store.commit('setDeleteStatus', boolD)
        this.$store.commit('setPostStatus', boolP)
      }
    },
    checkboxAction(data, status, index) {
      if (status) {
        // this.M_DataSelected.push(index)
        var boolP = true
        var boolD = true

        if (this.DataList[index].ReceiptNo && this.DataList[index].ReceiptNo != '') {
          boolD = true
          if (this.DataList[index].BatchStatus && this.DataList[index].BatchStatus.toUpperCase() == 'BALANCE') {
            boolP = true
          }
          else {
            boolP = false
          }
        }
        else {
          boolP = false
          boolD = false
        }

        this.checkboxCan.push({
          indexData: index,
          boolD: boolD,
          boolP: boolP
        })
      }
      else {
        // this.M_DataSelected.splice(this.M_DataSelected.indexOf(index) ,1)
        var id = this.checkboxCan.map(x => x.indexData).indexOf(index)
        if (id > -1) this.checkboxCan.splice(id, 1)
      }

      // var isBreak = false

      // for (let iddx = 0; iddx < this.M_DataSelected.length; iddx++) {
      //   var boolP = true
      //   var boolD = true
      //   console.log(this.M_DataSelected[iddx])
      //   var idxData = this.M_DataSelected[iddx]

      //   if (this.DataList[idxData].ReceiptNo && this.DataList[idxData].ReceiptNo != '') {
      //     boolD = true
      //     if (this.DataList[idxData].BatchStatus && this.DataList[idxData].BatchStatus.toUpperCase() == 'BALANCE') {
      //       boolP = true
      //     }
      //     else {
      //       // if (boolP) {
      //         boolP = false
      //       // }
      //     }
      //   }
      //   else {
      //     boolP = false
      //     boolD = false
      //   }

      //   this.checkboxCan.push({
      //     indexData: idxData,
      //     boolD: boolD,
      //     boolP: boolP
      //   })
      // }

      console.log(this.checkboxhuh)
    },
    M_Refresh() {},
    M_Cancel() {},
    doDoubleClick() {},
    rowClicked(record, index) {},
    rowLink: function(url) {
      this.$refs.modalTest.show();
    },
    paramFromParent() {},
    M_Post(dt) {
      var dataPost = []
      var data = this.FormToABSList().getRowSelected()
      
      data.forEach((value) => {
        dataPost.push({
          SubPortfolioCd : this.getDataUser().SubPortfolioCd,
          BatchNo: value.BatchNo,
          ModuleCd: this.Module,
          UserInput: this.getDataUser().UserId,
          _Message_: "Receipt No. " + value.ReceiptNo
        })
      })

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataPost
      }
      
      this.postJSONMulti( this.getUrlPostMulti(), param )
      .then(response => {
        if (response == null) return
        this.$parent.resultPost()
      })
    },
    M_Insert() {
    },
    M_Update() {
      // console.log(this.M_AR_OfficialReceiptDirectFromCashierH.autoallocate)
      var autoall = 'N'
      if (this.M_AR_OfficialReceiptDirectFromCashierH.autoallocate == undefined || this.M_AR_OfficialReceiptDirectFromCashierH.autoallocate == null) {
      } else {
        autoall = this.M_AR_OfficialReceiptDirectFromCashierH.autoallocate.indexOf('Y') > -1 ? 'Y' : 'N'
      }

      if (this.DataRow.ReceiptNo == null || this.DataRow.ReceiptNo == "") {
        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo: 0,
          Source: 'R',
          CashierNo: this.M_AR_OfficialReceiptDirectFromCashierH.cashierno,
          ReferenceNo: this.M_AR_OfficialReceiptDirectFromCashierH.referenceno,
          ReferenceDate:
            this.M_AR_OfficialReceiptDirectFromCashierH.referencedate == "" ||
            this.M_AR_OfficialReceiptDirectFromCashierH.referencedate == null
              ? "NULL"
              : this.M_AR_OfficialReceiptDirectFromCashierH.referencedate,
          DebtorCd: this.M_AR_OfficialReceiptDirectFromCashierH.debtorcd,
          TrxType:
            this.M_AR_OfficialReceiptDirectFromCashierH.trxtype == "" ||
            this.M_AR_OfficialReceiptDirectFromCashierH.trxtype == null
              ? "NULL"
              : this.M_AR_OfficialReceiptDirectFromCashierH.trxtype,
          ModuleCd: this.Module,
          CreditNo: "",
          CreditDate: this.M_AR_OfficialReceiptDirectFromCashierH.creditdate,
          Descs: this.M_AR_OfficialReceiptDirectFromCashierH.descs,
          PaymentCd: this.M_AR_OfficialReceiptDirectFromCashierH.paymentcd,
          BankCd: this.M_AR_OfficialReceiptDirectFromCashierH.bankcd,
          CurrencyCd: this.M_AR_OfficialReceiptDirectFromCashierH.currencycd,
          CurrencyRate: this.M_AR_OfficialReceiptDirectFromCashierH
            .currencyrate,
          ChequeReferenceNo: this.M_AR_OfficialReceiptDirectFromCashierH
            .chequereferenceno,
          ChequeReferenceDate: this.M_AR_OfficialReceiptDirectFromCashierH
            .chequereferencedate,
          IssuedBank: this.M_AR_OfficialReceiptDirectFromCashierH.issuedbank,
          ChequeDueDate: this.M_AR_OfficialReceiptDirectFromCashierH
            .chequeduedate,
          CreditAmt: this.M_AR_OfficialReceiptDirectFromCashierH.creditamt,
          BankChargesAmt: this.M_AR_OfficialReceiptDirectFromCashierH
            .bankchargesamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.bankchargesamt,
                ",",
                "",
                "number"
              )
            : 0,
          OverPaymentAmt: this.M_AR_OfficialReceiptDirectFromCashierH
            .overpaymentamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.overpaymentamt,
                ",",
                "",
                "number"
              )
            : 0,
          UnderPaymentAmt: this.M_AR_OfficialReceiptDirectFromCashierH
            .underpaymentamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.underpaymentamt,
                ",",
                "",
                "number"
              )
            : 0,
          AdvanceAmt: this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt,
                ",",
                "",
                "number"
              )
            : 0,
          Remarks: this.M_AR_OfficialReceiptDirectFromCashierH.remarks,
          UserInput: this.getDataUser().UserId,
          AutoAllocate: autoall,
          LastUpdateStamp: this.M_AR_OfficialReceiptDirectFromCashierH.lastupdatestamp
        };

        this.postJSON(this.getUrlInsert(), param).then(response => {
          if (response == null) return
          this.$parent.resultInsert(response.Message)
        });
      } else {
        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo:
            this.M_AR_OfficialReceiptDirectFromCashierH.batchno == "" ||
            this.M_AR_OfficialReceiptDirectFromCashierH.batchno == null
              ? "NULL"
              : this.M_AR_OfficialReceiptDirectFromCashierH.batchno,
          Source: 'R',
          CreditNo: this.M_AR_OfficialReceiptDirectFromCashierH.creditno,
          ReferenceNo: this.M_AR_OfficialReceiptDirectFromCashierH.referenceno,
          ReferenceDate:
            this.M_AR_OfficialReceiptDirectFromCashierH.referencedate == "" ||
            this.M_AR_OfficialReceiptDirectFromCashierH.referencedate == null
              ? "NULL"
              : this.M_AR_OfficialReceiptDirectFromCashierH.referencedate,
          Descs: this.M_AR_OfficialReceiptDirectFromCashierH.descs,
          TrxType:
            this.M_AR_OfficialReceiptDirectFromCashierH.trxtype == "" ||
            this.M_AR_OfficialReceiptDirectFromCashierH.trxtype == null
              ? "NULL"
              : this.M_AR_OfficialReceiptDirectFromCashierH.trxtype,
          CreditAmt: this.M_AR_OfficialReceiptDirectFromCashierH.creditamt,
          BankChargesAmt: this.M_AR_OfficialReceiptDirectFromCashierH
            .bankchargesamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.bankchargesamt,
                ",",
                "",
                "number"
              )
            : 0,
          OverPaymentAmt: this.M_AR_OfficialReceiptDirectFromCashierH
            .overpaymentamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.overpaymentamt,
                ",",
                "",
                "number"
              )
            : 0,
          UnderPaymentAmt: this.M_AR_OfficialReceiptDirectFromCashierH
            .underpaymentamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.underpaymentamt,
                ",",
                "",
                "number"
              )
            : 0,
          AdvanceAmt: this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt
            ? this.replaceAllString(
                this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt,
                ",",
                "",
                "number"
              )
            : 0,
          Remarks: this.M_AR_OfficialReceiptDirectFromCashierH.remarks,
          UserEdit: this.getDataUser().UserId,
          LastUpdateStamp: this.M_AR_OfficialReceiptDirectFromCashierH.lastupdatestamp,
          AutoAllocate: autoall,
        }

        this.postJSON(this.getUrlUpdate(), param).then(response => {
          if (response == null) return
          this.$parent.resultUpdate(response.Message)
        })
      }
    },
    M_ClearForm() {
      this.M_AR_OfficialReceiptDirectFromCashierH = {
        batchno: 0,
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        cashierno: "",
        trxtype: "",
        creditno: "",
        creditdate: "",
        referenceno: "",
        referencedate: "",
        debtorcd: "",
        debtorcdLabel: "",
        descs: "",
        paymentcd: "",
        currencycd: "",
        bankcd: "",
        chequereferenceno: "",
        currencyrate: "",
        chequereferencedate: "",
        issuedbank: "",
        chequeduedate: "",
        creditamt: "",
        vatpaidbycustomer: "",
        withholdingpaidbycustomer: "",
        bankchargesamt: "0",
        overpaymentamt: "0",
        underpaymentamt: "0",
        advanceamt: "0",
        allocatedamt: "",
        forexgainlossamt: "",
        totalallocationamt: "",
        remarks: "",
        status: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        timeedit: "",
        documentcount: 0,
        batchtotal: "",
        batchstatus: "",
        debtorname: "",
        totalnetallocated: 0,
        totalvatallocated: 0,
        totalwithholdingallocated: 0,
        trxtypedescs: "",
        withholdingtreatment: "",
        maximumoverpaymentamt: "",
        maximumunderpaymentamt: "",
        maximumbankchargesamt: "",
        currentbatchtotal: 0,
        currentdocumentcount: 0,
        basecurrencycd: "",
        lastupdatestamp: 0,
        rowid: 0,
        balanceamt: "",
        autoallocate: [],
        alloc: "",
        autoallocateor: "",
        detailoutstandingamt: "",
        debitcurrencyrate: "",
        creditcurrencyrate: "0"
      };
    },
    M_New() {},
    M_Edit() {},
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected()
      var dataDelete = []

      data.forEach((value) => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          BatchNo: value.BatchNo,
          Source: 'R',
          CreditNo: value.ReceiptNo,
          UserEdit: this.getDataUser().UserId,
          LastUpdateStamp: value.LastUpdateStamp,
          _Message_: ''
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

        this.$parent.resultDelete("Deleting Data Successfully")
      })
    },
    getDataBy(record) {
      console.log(record);
      var param = {};
      var url = this.getUrlById();
      if (record.ReceiptNo == null || record.ReceiptNo == "") {
        param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          cashierno: record.CashierNo
        };
      } else {
        url += "2";
        param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          creditno: record.ReceiptNo
        };
      }

      this.postEncode(url, param).then(response => {
        // response from API
        if (response == null) return

        var data = response.Data[0]
        this.M_AR_OfficialReceiptDirectFromCashierH = {
          batchno: data.batchno,
          subportfoliocd: data.subportfoliocd,
          cashierno: data.cashierno,
          trxtype: data.trxtype,
          creditno: data.creditno,
          creditdate: data.creditdate,
          referenceno: data.referenceno,
          referencedate: data.referencedate,
          debtorcd: data.debtorcd,
          debtorcdLabel: data.debtorcd,
          descs: data.descs,
          paymentcd: data.paymentcd,
          currencycd: data.currencycd,
          bankcd: data.bankcd,
          chequereferenceno: data.chequereferenceno,
          currencyrate: this.isCurrency(data.currencyrate, this.decimal),
          chequereferencedate: data.chequereferencedate,
          issuedbank: data.issuedbank,
          chequeduedate: data.chequeduedate,
          creditamt: this.isCurrency(data.creditamt, this.decimal),
          vatpaidbycustomer: this.isCurrency(data.vatpaidbycustomer, this.decimal),
          withholdingpaidbycustomer: this.isCurrency(data.withholdingpaidbycustomer, this.decimal),
          bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
          overpaymentamt: this.isCurrency(data.overpaymentamt, this.decimal),
          underpaymentamt: this.isCurrency(data.underpaymentamt, this.decimal),
          advanceamt: this.isCurrency(data.advanceamt, this.decimal),
          allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
          forexgainlossamt: this.isCurrency(data.forexgainlossamt, this.decimal),
          totalallocationamt: this.isCurrency(data.totalallocationamt, this.decimal),
          remarks: data.remarks,
          status: data.status,
          userinput: data.userinput,
          useredit: data.useredit,
          timeedit: data.timeedit,
          documentcount: data.documentcount,
          batchtotal: data.batchtotal,
          batchstatus: data.batchstatus,
          debtorname: data.debtorname,
          totalnetallocated: this.isCurrency(data.totalnetallocated, this.decimal),
          totalvatallocated: this.isCurrency(data.totalvatallocated, this.decimal),
          totalwithholdingallocated: this.isCurrency(data.totalwithholdingallocated, this.decimal),
          trxtypedescs: data.trxtypedescs,
          withholdingtreatment: data.withholdingtreatment,
          maximumoverpaymentamt: this.isCurrency(data.maximumoverpaymentamt, this.decimal),
          maximumunderpaymentamt: this.isCurrency(data.maximumunderpaymentamt, this.decimal),
          maximumbankchargesamt: this.isCurrency(data.maximumbankchargesamt, this.decimal),
          currentbatchtotal: data.currentbatchtotal,
          currentdocumentcount: data.currentdocumentcount,
          basecurrencycd: data.basecurrencycd,
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid,
          balanceamt: this.isCurrency((data.totalallocationamt - data.allocatedamt), this.decimal),
          autoallocate: data.autoallocate,
          alloc: data.alloc,
          autoallocateor: data.autoallocateor,
          detailoutstandingamt: data.detailoutstandingamt,
          debitcurrencyrate: data.debitcurrencyrate,
          creditcurrencyrate: data.creditcurrencyrate
        };

        this.M_AR_OfficialReceiptDirectFromCashierH.batchnoLabel =
          this.M_AR_OfficialReceiptDirectFromCashierH.batchno && this.M_AR_OfficialReceiptDirectFromCashierH.batchno != ''
            ? data.batchno + this.separator
            : "";
        this.M_AR_OfficialReceiptDirectFromCashierH.trxtypeLabel =
          this.M_AR_OfficialReceiptDirectFromCashierH.trxtype && this.M_AR_OfficialReceiptDirectFromCashierH.trxtype != ''
            ? data.trxtype + this.separator + data.trxtypedescs
            : "";
        this.M_AR_OfficialReceiptDirectFromCashierH.debtorcdLabel =
          this.M_AR_OfficialReceiptDirectFromCashierH.debtorcdLabel && this.M_AR_OfficialReceiptDirectFromCashierH.debtorcdLabel != ''
            ? data.debtorcd + this.separator + data.debtorname
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
      });
    },
    CalculateTotalAllocationAmount() {
      if (this.inputStatus == 'VIEW') return
      var ReceiptAmt = this.M_AR_OfficialReceiptDirectFromCashierH.creditamt
      var VATPaidByDebtor = this.M_AR_OfficialReceiptDirectFromCashierH.vatpaidbycustomer
      var WithholdingPaidByDebtor = this.M_AR_OfficialReceiptDirectFromCashierH.withholdingpaidbycustomer
      var BankCharges = this.M_AR_OfficialReceiptDirectFromCashierH.bankchargesamt == null || this.M_AR_OfficialReceiptDirectFromCashierH.bankchargesamt == "" ? 0 : this.M_AR_OfficialReceiptDirectFromCashierH.bankchargesamt
      var OverReceiptAmt = this.M_AR_OfficialReceiptDirectFromCashierH.overpaymentamt == null || this.M_AR_OfficialReceiptDirectFromCashierH.overpaymentamt == "" ? 0 : this.M_AR_OfficialReceiptDirectFromCashierH.overpaymentamt
      var UnderReceiptAmt = this.M_AR_OfficialReceiptDirectFromCashierH.underpaymentamt == null || this.M_AR_OfficialReceiptDirectFromCashierH.underpaymentamt == "" ? 0 : this.M_AR_OfficialReceiptDirectFromCashierH.underpaymentamt
      var AdvanceAmt = this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt == null || this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt == "" ? 0 : this.M_AR_OfficialReceiptDirectFromCashierH.advanceamt
      var AllocatedAmt = this.M_AR_OfficialReceiptDirectFromCashierH.allocatedamt
      var ForexGainLossAmt = this.M_AR_OfficialReceiptDirectFromCashierH.forexgainlossamt
      var CurrencyCd = this.M_AR_OfficialReceiptDirectFromCashierH.currencycd
      var BaseCurrencyCd = this.M_AR_OfficialReceiptDirectFromCashierH.basecurrencycd
      var TotalAllocationAmt = 0
      var BalanceAmt = 0

      ReceiptAmt = this.replaceAllString(ReceiptAmt, ',', '', 'number')
      VATPaidByDebtor = this.replaceAllString(VATPaidByDebtor, ',', '', 'number')
      WithholdingPaidByDebtor = this.replaceAllString(WithholdingPaidByDebtor, ',', '', 'number')
      BankCharges = this.replaceAllString(BankCharges, ',', '', 'number')
      OverReceiptAmt = this.replaceAllString(OverReceiptAmt, ',', '', 'number')
      UnderReceiptAmt = this.replaceAllString(UnderReceiptAmt, ',', '', 'number')
      AdvanceAmt = this.replaceAllString(AdvanceAmt, ',', '', 'number')
      AllocatedAmt = this.replaceAllString(AllocatedAmt, ',', '', 'number')
      ForexGainLossAmt = this.replaceAllString(ForexGainLossAmt, ',', '', 'number')

      TotalAllocationAmt =
        parseFloat(ReceiptAmt) +
        parseFloat(VATPaidByDebtor) +
        parseFloat(WithholdingPaidByDebtor) +
        parseFloat(BankCharges) -
        parseFloat(OverReceiptAmt) +
        parseFloat(UnderReceiptAmt) -
        parseFloat(AdvanceAmt)
      BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
      if (TotalAllocationAmt.toString() == "Infinity") TotalAllocationAmt = 0
      if (TotalAllocationAmt.toString() == "NaN") TotalAllocationAmt = 0
      this.M_AR_OfficialReceiptDirectFromCashierH.totalallocationamt = this.isCurrency(TotalAllocationAmt, this.decimal)

      //hitung balance jadi 3 baris di bawah karena ada bug javascript (?)
      TotalAllocationAmt = this.replaceAllString(TotalAllocationAmt, ',', '', 'number')

      if (BaseCurrencyCd.toUpperCase() == CurrencyCd.toUpperCase()) {
        BalanceAmt =
          parseFloat(TotalAllocationAmt) -
          parseFloat(ForexGainLossAmt) -
          parseFloat(AllocatedAmt)
      } else {
        BalanceAmt = parseFloat(TotalAllocationAmt) - parseFloat(AllocatedAmt)
      }

      if (BalanceAmt.toString() == "Infinity") BalanceAmt = 0
      if (BalanceAmt.toString() == "NaN") BalanceAmt = 0
      this.M_AR_OfficialReceiptDirectFromCashierH.balanceamt = this.isCurrency(BalanceAmt, this.decimal)
    }
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