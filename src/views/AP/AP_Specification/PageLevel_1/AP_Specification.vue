<template>
  <div>
    <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
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
              <b-row style="padding-left: 10px; padding-bottom: 10px; !important;">
                <b-col md="12" id="col-left">
                  <!-- table open -->
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnbatchcontrolChange"
                        :prop="PI_batchcontrol"
                        v-model="M_AP_Specification.batchcontrol"
                        ref="ref_batchcontrol"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnbatchnumberingChange"
                        :prop="PI_batchnumbering"
                        v-model="M_AP_Specification.batchnumbering"
                        ref="ref_batchnumbering"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnprintdocumentChange"
                        :prop="PI_printdocument"
                        v-model="M_AP_Specification.printdocument"
                        ref="ref_printdocument"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnstockreturntrxtypeChange"
                        :prop="PI_stockreturntrxtype"
                        :value="M_AP_Specification.stockreturntrxtype"
                        :label="M_AP_Specification.stockreturntrxtypeLabel"
                        ref="ref_stockreturntrxtype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OntemporaryinvoicerunningcdChange"
                        :prop="PI_temporaryinvoicerunningcd"
                        :value="M_AP_Specification.temporaryinvoicerunningcd"
                        :label="M_AP_Specification.temporaryinvoicerunningcdLabel"
                        ref="ref_temporaryinvoicerunningcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OncashpurchasecreditorcdChange"
                        :prop="PI_cashpurchasecreditorcd"
                        :value="M_AP_Specification.cashpurchasecreditorcd"
                        :label="M_AP_Specification.cashpurchasecreditorcdLabel"
                        ref="ref_cashpurchasecreditorcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnpaymenttrxtypeChange"
                        :prop="PI_paymenttrxtype"
                        :value="M_AP_Specification.paymenttrxtype"
                        :label="M_AP_Specification.paymenttrxtypeLabel"
                        ref="ref_paymenttrxtype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnpaymentadvicerunningcdChange"
                        :prop="PI_paymentadvicerunningcd"
                        :value="M_AP_Specification.paymentadvicerunningcd"
                        :label="M_AP_Specification.paymentadvicerunningcdLabel"
                        ref="ref_paymentadvicerunningcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_maximumunderpaymentamt"
                        v-model="M_AP_Specification.maximumunderpaymentamt"
                        ref="ref_maximumunderpaymentamt"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_maximumoverpaymentamt"
                        v-model="M_AP_Specification.maximumoverpaymentamt"
                        ref="ref_maximumoverpaymentamt"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">Revaluation</span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnrevaluationtrxtypeChange"
                        :prop="PI_revaluationtrxtype"
                        :value="M_AP_Specification.revaluationtrxtype"
                        :label="M_AP_Specification.revaluationtrxtypeLabel"
                        ref="ref_revaluationtrxtype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnrevaluationrunningcdChange"
                        :prop="PI_revaluationrunningcd"
                        :value="M_AP_Specification.revaluationrunningcd"
                        :label="M_AP_Specification.revaluationrunningcdLabel"
                        ref="ref_revaluationrunningcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnrevaluationincludevatChange"
                        :prop="PI_revaluationincludevat"
                        v-model="M_AP_Specification.revaluationincludevat"
                        ref="ref_revaluationincludevat"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">Tax Handling</span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnjournalmodeChange"
                        :prop="PI_journalmode"
                        v-model="M_AP_Specification.journalmode"
                        ref="ref_journalmode"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnwithholdingdeductionChange"
                        :prop="PI_withholdingdeduction"
                        v-model="M_AP_Specification.withholdingdeduction"
                        ref="ref_withholdingdeduction"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnvattrxtypeChange"
                        :prop="PI_vattrxtype"
                        :value="M_AP_Specification.vattrxtype"
                        :label="M_AP_Specification.vattrxtypeLabel"
                        ref="ref_vattrxtype"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnwithholdingtrxtypeChange"
                        :prop="PI_withholdingtrxtype"
                        :value="M_AP_Specification.withholdingtrxtype"
                        :label="M_AP_Specification.withholdingtrxtypeLabel"
                        ref="ref_withholdingtrxtype"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">Purchase Order</span>
                  </div>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnlinktopoChange"
                        :prop="PI_linktopo"
                        v-model="M_AP_Specification.linktopo"
                        ref="ref_linktopo"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnjournalcommitChange"
                        :prop="PI_journalcommit"
                        v-model="M_AP_Specification.journalcommit"
                        ref="ref_journalcommit"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnaprecognitionChange"
                        :prop="PI_aprecognition"
                        v-model="M_AP_Specification.aprecognition"
                        ref="ref_aprecognition"
                      />
                    </b-col>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OninvoicetrxtypeChange"
                        :prop="PI_invoicetrxtype"
                        :value="M_AP_Specification.invoicetrxtype"
                        :label="M_AP_Specification.invoicetrxtypeLabel"
                        ref="ref_invoicetrxtype"
                      />
                    </b-col>
                  </b-row>
                  <div class="div-collapse">
                    <span class="master-span-form">Aging Period</span>
                  </div>
                  <b-col md="12" id="col-left">
                    <!-- table open -->
                    <b-row>
                      <b-col md="2">
                        <ABSinputTextVuex
                          :prop="PI_age1"
                          v-model="M_AP_Specification.age1"
                          ref="ref_age1"
                        />
                      </b-col>
                      <b-col md="2">
                        <ABSinputTextVuex
                          :prop="PI_age2"
                          v-model="M_AP_Specification.age2"
                          ref="ref_age2"
                        />
                      </b-col>
                      <b-col md="2">
                        <ABSinputTextVuex
                          :prop="PI_age3"
                          v-model="M_AP_Specification.age3"
                          ref="ref_age3"
                        />
                      </b-col>
                      <b-col md="2">
                        <ABSinputTextVuex
                          :prop="PI_age4"
                          v-model="M_AP_Specification.age4"
                          ref="ref_age4"
                        />
                      </b-col>
                      <b-col md="2">
                        <ABSinputTextVuex
                          :prop="PI_age5"
                          v-model="M_AP_Specification.age5"
                          ref="ref_age5"
                        />
                      </b-col>
                      <b-col md="2">
                        <ABSinputTextVuex
                          :prop="PI_age6"
                          v-model="M_AP_Specification.age6"
                          ref="ref_age6"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  <!-- table close -->
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_AP_Specification.remarks"
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
      FormType: "Form",
      Module: "AP",
      IEBy: { Input: "", Edit: "" },

      M_AP_Specification: {
        batchcontrol: "Y",
        batchnumbering: "M",
        printdocument: "B",
        revaluationtrxtype: "",
        revaluationrunningcd: "",
        revaluationincludevat: "N",
        maximumoverpaymentamt: "0",
        maximumunderpaymentamt: "0",
        stockreturntrxtype: "",
        journalmode: "S",
        withholdingdeduction: "I",
        vattrxtype: "",
        withholdingtrxtype: "",
        temporaryinvoicerunningcd: "",
        cashpurchasecreditorcd: "",
        paymenttrxtype: "",
        paymentadvicerunningcd: "",
        linktopo: "Y",
        journalcommit: "G",
        invoicetrxtype: "",
        aprecognition: "I",
        age1: "0",
        age2: "0",
        age3: "0",
        age4: "0",
        age5: "0",
        age6: "0",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        lastupdatestamp: 0,
        transactioncount: 0,
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        rowid: 0
      },
      PI_batchcontrol: {
        cValidate: "",
        cName: "batchcontrol",
        cId: "rdbbatchcontrol",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "Y",
        cLabel: "Bacth Control",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_batchnumbering: {
        cValidate: "",
        cName: "batchnumbering",
        cId: "rdbbatchnumbering",
        cRadioOptions: [
          { text: "Manual", value: "M" },
          { text: "Semi Auto", value: "S" },
          { text: "Auto", value: "A" }
        ],
        cRadioDefaultOption: "M",
        cLabel: "Bacth Numbering",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: true,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_printdocument: {
        cValidate: "",
        cName: "printdocument",
        cId: "rdbprintdocument",
        cRadioOptions: [
          { text: "Before Posting", value: "B" },
          { text: "After Posting", value: "A" }
        ],
        cRadioDefaultOption: "B",
        cLabel: "Print Document",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_stockreturntrxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SubPortfolioCd = '" +
            this.getDataUser().SubPortfolioCd +
            "'	AND  ModuleCd = 'AP' AND TrxClass IN ('C','D')",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "TransactionType,Descs"
        },
        cValidate: "required",
        cName: "stockreturntrxtype",
        cLabel: "Stock Return Trans. Type",
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
        cMasterUrl: "AP/AP_TransTypeSubportfolioMaintenance",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_temporaryinvoicerunningcd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMRunningCode",
          ColumnDB: "RunningCd",
          InitialWhere: "ModuleCd IS NULL OR ModuleCd = 'AP'",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "RunningCd,Descs"
        },
        cValidate: "required",
        cName: "temporaryinvoicerunningcd",
        cLabel: "Temporary Invoice Running Code",
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
        cMasterUrl: "CM/CM_RunningCd",
        cDisplayColumn: "RunningCd,Descs"
      },
      PI_cashpurchasecreditorcd: {
        dataLookUp: {
          LookUpCd: "GetLookupAPCreditor",
          ColumnDB: "CreditorCd",
          InitialWhere:
            "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "CreditorCd,Name"
        },
        cValidate: "",
        cName: "cashpurchasecreditorcd",
        cLabel: "Cash Purchase Creditor Code",
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
        cMasterUrl: "AP/AP_Creditor",
        cDisplayColumn: "CreditorCd,Name"
      },
      PI_paymenttrxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SubPortfolioCd = '" +
            this.getDataUser().SubPortfolioCd +
            "'	AND ModuleCd = 'AP' AND TrxClass = 'M'",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "TransactionType,Descs"
        },
        cValidate: "required",
        cName: "paymenttrxtype",
        cLabel: "Payment Trans. Type (for Auto Allocate) ",
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
        cMasterUrl: "AP/AP_TransTypeSubportfolioMaintenance",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_paymentadvicerunningcd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMRunningCode",
          ColumnDB: "RunningCd",
          InitialWhere: "ModuleCd is null OR ModuleCd = 'AP'",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "RunningCd,Descs"
        },
        cValidate: "required",
        cName: "paymentadvicerunningcd",
        cLabel: "Payment Advice Running Code",
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
        cMasterUrl: "CM/CM_RunningCd",
        cDisplayColumn: "RunningCd,Descs"
      },
      PI_maximumunderpaymentamt: {
        cValidate: "",
        cName: "maximumunderpaymentamt",
        cLabel: "Max. Under Payment Amount",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_maximumoverpaymentamt: {
        cValidate: "",
        cName: "maximumoverpaymentamt",
        cLabel: "Max. Over Payment Amount ",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_revaluationtrxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "ModuleCd = 'GL' AND RunningCd IS NOT NULL",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "TransactionType,Descs"
        },
        cValidate: "",
        cName: "revaluationtrxtype",
        cLabel: "Forex Revaluation Trans. Type",
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
        cMasterUrl: "GL/GL_TransactionType",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_revaluationrunningcd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMRunningCode",
          ColumnDB: "RunningCd",
          InitialWhere: "ModuleCd is null OR ModuleCd = 'AP'",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "RunningCd,Descs"
        },
        cValidate: "",
        cName: "revaluationrunningcd",
        cLabel: "Forex Revaluation Running Code",
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
        cMasterUrl: "CM/CM_RunningCd",
        cDisplayColumn: "RunningCd,Descs"
      },
      PI_revaluationincludevat: {
        cValidate: "",
        cName: "revaluationincludevat",
        cId: "rdbrevaluationincludevat",
        cRadioOptions: [
          { text: "No", value: "N" },
          { text: "Yes", value: "Y" }
        ],
        cRadioDefaultOption: "N",
        cLabel: "Forex Revaluation Include VAT ",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_journalmode: {
        cValidate: "",
        cName: "journalmode",
        cId: "rdbjournalmode",
        cRadioOptions: [
          { text: "Combine", value: "C" },
          { text: "Split AP/VAT", value: "S" },
          { text: "Split AP/VAT/Withholding", value: "W" }
        ],
        cRadioDefaultOption: "S",
        cLabel: "Journal Mode ",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cKey: true,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_withholdingdeduction: {
        cValidate: "",
        cName: "withholdingdeduction",
        cId: "rdbwithholdingdeduction",
        cRadioOptions: [
          { text: "On Invoice", value: "I" },
          { text: "On Payment", value: "P" }
        ],
        cRadioDefaultOption: "I",
        cLabel: "Withholding Deduction",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cKey: true,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_vattrxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "ModuleCd = 'GL' AND RunningCd IS NOT NULL",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "TransactionType,Descs"
        },
        cValidate: "required",
        cName: "vattrxtype",
        cLabel: "VAT Trans. Type ",
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
        cMasterUrl: "GL/GL_TransactionType",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_withholdingtrxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeMaster",
          ColumnDB: "TrxType",
          InitialWhere: "ModuleCd = 'GL' AND RunningCd IS NOT NULL",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "TransactionType,Descs"
        },
        cValidate: "required",
        cName: "withholdingtrxtype",
        cLabel: "Withholding Trans. Type",
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
        cMasterUrl: "GL/GL_TransactionType",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_linktopo: {
        cValidate: "",
        cName: "linktopo",
        cId: "rdblinktopo",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "Y",
        cLabel: "Link To PO  ",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_journalcommit: {
        cValidate: "",
        cName: "journalcommit",
        cId: "rdbjournalcommit",
        cRadioOptions: [
          { text: "PO", value: "P" },
          { text: "GRN", value: "G" }
        ],
        cRadioDefaultOption: "G",
        cLabel: "Journal Commit  ",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_aprecognition: {
        cValidate: "",
        cName: "aprecognition",
        cId: "rdbaprecognition",
        cRadioOptions: [
          { text: "Direct", value: "D" },
          { text: "Indirect", value: "I" }
        ],
        cRadioDefaultOption: "I",
        cLabel: "AP Recognition  ",
        cLabelSize: 4,
        cDefault: "",
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_invoicetrxtype: {
        dataLookUp: {
          LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
          ColumnDB: "TrxType",
          InitialWhere:
            "SubPortfolioCd = '" +
            this.getDataUser().SubPortfolioCd +
            "'	AND ModuleCd = 'AP' AND TrxClass = 'I'",
          ParamWhere: "",
          SourceField: "",
          DisplayLookup: "TransactionType,Descs"
        },
        cValidate: "",
        cName: "invoicetrxtype",
        cLabel: "Invoice Trans. Type  ",
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
        cMasterUrl: "AP/AP_TransTypeSubportfolioMaintenance",
        cDisplayColumn: "TransactionType,Descs"
      },
      PI_age1: {
        cValidate: "",
        cName: "age1",
        cLabel: "Age1",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_age2: {
        cValidate: "",
        cName: "age2",
        cLabel: "Age2",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_age3: {
        cValidate: "",
        cName: "age3",
        cLabel: "Age3",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_age4: {
        cValidate: "",
        cName: "age4",
        cLabel: "Age4",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_age5: {
        cValidate: "",
        cName: "age5",
        cLabel: "Age5",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_age6: {
        cValidate: "",
        cName: "age6",
        cLabel: "Age6",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
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
    }
  },
  methods: {
    OnbatchcontrolChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data == "Y") {
            this.PI_batchnumbering.cProtect = true;
            this.M_AP_Specification.batchnumbering = "M";
          } else {
            this.PI_batchnumbering.cProtect = false;
          }
        }
      });
      this.$forceUpdate();
    },
    OnbatchnumberingChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{batchnumbering}
        }
      });
      this.$forceUpdate();
    },
    OnprintdocumentChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{printdocument}
        }
      });
      this.$forceUpdate();
    },
    OnstockreturntrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.stockreturntrxtype = data.id;
        this.M_AP_Specification.stockreturntrxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{stockreturntrxtype}
        }
      });
      this.$forceUpdate();
    },
    OntemporaryinvoicerunningcdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.temporaryinvoicerunningcd = data.id;
        this.M_AP_Specification.temporaryinvoicerunningcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{temporaryinvoicerunningcd}
        }
      });
      this.$forceUpdate();
    },
    OncashpurchasecreditorcdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.cashpurchasecreditorcd = data.id;
        this.M_AP_Specification.cashpurchasecreditorcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{cashpurchasecreditorcd}
        }
      });
      this.$forceUpdate();
    },
    OnpaymenttrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.paymenttrxtype = data.id;
        this.M_AP_Specification.paymenttrxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{paymenttrxtype}
        }
      });
      this.$forceUpdate();
    },
    OnpaymentadvicerunningcdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.paymentadvicerunningcd = data.id;
        this.M_AP_Specification.paymentadvicerunningcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{paymentadvicerunningcd}
        }
      });
      this.$forceUpdate();
    },
    OnrevaluationtrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.revaluationtrxtype = data.id;
        this.M_AP_Specification.revaluationtrxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{revaluationtrxtype}
        }
      });
      this.$forceUpdate();
    },
    OnrevaluationrunningcdChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.revaluationrunningcd = data.id;
        this.M_AP_Specification.revaluationrunningcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{revaluationrunningcd}
        }
      });
      this.$forceUpdate();
    },
    OnrevaluationincludevatChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{revaluationincludevat}
        }
      });
      this.$forceUpdate();
    },
    OnjournalmodeChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{journalmode}
        }
      });
      this.$forceUpdate();
    },
    OnwithholdingdeductionChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{withholdingdeduction}
        }
      });
      this.$forceUpdate();
    },
    OnvattrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.vattrxtype = data.id;
        this.M_AP_Specification.vattrxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{vattrxtype}
        }
      });
      this.$forceUpdate();
    },
    OnwithholdingtrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.withholdingtrxtype = data.id;
        this.M_AP_Specification.withholdingtrxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{withholdingtrxtype}
        }
      });
      this.$forceUpdate();
    },
    OnlinktopoChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{linktopo}
        }
      });
      this.$forceUpdate();
    },
    OnjournalcommitChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{journalcommit}
        }
      });
      this.$forceUpdate();
    },
    OnaprecognitionChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{aprecognition}
        }
      });
      this.$forceUpdate();
    },
    OninvoicetrxtypeChange(data) {
      this.$nextTick(() => {
        this.M_AP_Specification.invoicetrxtype = data.id;
        this.M_AP_Specification.invoicetrxtypeLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{invoicetrxtype}
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
        BatchControl: this.M_AP_Specification.batchcontrol,
        BatchNumbering: this.M_AP_Specification.batchnumbering,
        PrintDocument: this.M_AP_Specification.printdocument,
        RevaluationTrxType:
          this.M_AP_Specification.revaluationtrxtype == "" ||
          this.M_AP_Specification.revaluationtrxtype == null
            ? "NULL"
            : this.M_AP_Specification.revaluationtrxtype,
        RevaluationRunningCd:
          this.M_AP_Specification.revaluationrunningcd == "" ||
          this.M_AP_Specification.revaluationrunningcd == null
            ? "NULL"
            : this.M_AP_Specification.revaluationrunningcd,
        RevaluationIncludeVAT: this.M_AP_Specification.revaluationincludevat,
        StockReturnTrxType:
          this.M_AP_Specification.stockreturntrxtype == "" ||
          this.M_AP_Specification.stockreturntrxtype == null
            ? "NULL"
            : this.M_AP_Specification.stockreturntrxtype,
        JournalMode: this.M_AP_Specification.journalmode,
        WithholdingDeduction: this.M_AP_Specification.withholdingdeduction,
        VATTrxType:
          this.M_AP_Specification.vattrxtype == "" ||
          this.M_AP_Specification.vattrxtype == null
            ? "NULL"
            : this.M_AP_Specification.vattrxtype,
        WithholdingTrxType:
          this.M_AP_Specification.withholdingtrxtype == "" ||
          this.M_AP_Specification.withholdingtrxtype == null
            ? "NULL"
            : this.M_AP_Specification.withholdingtrxtype,
        TemporaryInvoiceRunningCd:
          this.M_AP_Specification.temporaryinvoicerunningcd == "" ||
          this.M_AP_Specification.temporaryinvoicerunningcd == null
            ? "NULL"
            : this.M_AP_Specification.temporaryinvoicerunningcd,
        CashPurchaseCreditorCd:
          this.M_AP_Specification.cashpurchasecreditorcd == "" ||
          this.M_AP_Specification.cashpurchasecreditorcd == null
            ? "NULL"
            : this.M_AP_Specification.cashpurchasecreditorcd,
        MaximumOverPaymentAmt: this.M_AP_Specification.maximumoverpaymentamt
          ? this.replaceAllString(
              this.M_AP_Specification.maximumoverpaymentamt,
              ",",
              "",
              "number"
            )
          : 0,
        MaximumUnderPaymentAmt: this.M_AP_Specification.maximumunderpaymentamt
          ? this.replaceAllString(
              this.M_AP_Specification.maximumunderpaymentamt,
              ",",
              "",
              "number"
            )
          : 0,
        PaymentTrxType:
          this.M_AP_Specification.paymenttrxtype == "" ||
          this.M_AP_Specification.paymenttrxtype == null
            ? "NULL"
            : this.M_AP_Specification.paymenttrxtype,
        PaymentAdviceRunningCd:
          this.M_AP_Specification.paymentadvicerunningcd == "" ||
          this.M_AP_Specification.paymentadvicerunningcd == null
            ? "NULL"
            : this.M_AP_Specification.paymentadvicerunningcd,
        LinkToPO: this.M_AP_Specification.linktopo,
        JournalCommit: this.M_AP_Specification.journalcommit,
        InvoiceTrxType:
          this.M_AP_Specification.invoicetrxtype == "" ||
          this.M_AP_Specification.invoicetrxtype == null
            ? "NULL"
            : this.M_AP_Specification.invoicetrxtype,
        APRecognition: this.M_AP_Specification.aprecognition,
        Age1: this.M_AP_Specification.age1,
        Age2: this.M_AP_Specification.age2,
        Age3: this.M_AP_Specification.age3,
        Age4: this.M_AP_Specification.age4,
        Age5: this.M_AP_Specification.age5,
        Age6: this.M_AP_Specification.age6,
        Remarks: this.M_AP_Specification.remarks,
        UserInput: this.getDataUser().UserId,
        LastUpdateStamp: this.M_AP_Specification.lastupdatestamp
      };

      this.postJSON(this.getUrlInsert(), param).then(response => {
        if (response == null) return;

        this.alertSuccess(response.Message).then(() => {
          this.getToolbar().FormStatus = "EDIT";
          this.getToolbar().ProcessPS();
          this.$store.commit("setStatus", "view");
          this.$store.commit("setEventStatus", "Save");

          this.FormToMasterPage().ValidasiPage();
        });
      });
    },
    M_Update() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        BatchControl: this.M_AP_Specification.batchcontrol,
        BatchNumbering: this.M_AP_Specification.batchnumbering,
        PrintDocument: this.M_AP_Specification.printdocument,
        RevaluationTrxType:
          this.M_AP_Specification.revaluationtrxtype == "" ||
          this.M_AP_Specification.revaluationtrxtype == null
            ? "NULL"
            : this.M_AP_Specification.revaluationtrxtype,
        RevaluationRunningCd:
          this.M_AP_Specification.revaluationrunningcd == "" ||
          this.M_AP_Specification.revaluationrunningcd == null
            ? "NULL"
            : this.M_AP_Specification.revaluationrunningcd,
        RevaluationIncludeVAT: this.M_AP_Specification.revaluationincludevat,
        StockReturnTrxType:
          this.M_AP_Specification.stockreturntrxtype == "" ||
          this.M_AP_Specification.stockreturntrxtype == null
            ? "NULL"
            : this.M_AP_Specification.stockreturntrxtype,
        JournalMode: this.M_AP_Specification.journalmode,
        WithholdingDeduction: this.M_AP_Specification.withholdingdeduction,
        VATTrxType:
          this.M_AP_Specification.vattrxtype == "" ||
          this.M_AP_Specification.vattrxtype == null
            ? "NULL"
            : this.M_AP_Specification.vattrxtype,
        WithholdingTrxType:
          this.M_AP_Specification.withholdingtrxtype == "" ||
          this.M_AP_Specification.withholdingtrxtype == null
            ? "NULL"
            : this.M_AP_Specification.withholdingtrxtype,
        MaximumOverPaymentAmt: this.M_AP_Specification.maximumoverpaymentamt
          ? this.replaceAllString(
              this.M_AP_Specification.maximumoverpaymentamt,
              ",",
              "",
              "number"
            )
          : 0,
        MaximumUnderPaymentAmt: this.M_AP_Specification.maximumunderpaymentamt
          ? this.replaceAllString(
              this.M_AP_Specification.maximumunderpaymentamt,
              ",",
              "",
              "number"
            )
          : 0,
        TemporaryInvoiceRunningCd:
          this.M_AP_Specification.temporaryinvoicerunningcd == "" ||
          this.M_AP_Specification.temporaryinvoicerunningcd == null
            ? "NULL"
            : this.M_AP_Specification.temporaryinvoicerunningcd,
        CashPurchaseCreditorCd:
          this.M_AP_Specification.cashpurchasecreditorcd == "" ||
          this.M_AP_Specification.cashpurchasecreditorcd == null
            ? "NULL"
            : this.M_AP_Specification.cashpurchasecreditorcd,
        PaymentTrxType:
          this.M_AP_Specification.paymenttrxtype == "" ||
          this.M_AP_Specification.paymenttrxtype == null
            ? "NULL"
            : this.M_AP_Specification.paymenttrxtype,
        PaymentAdviceRunningCd:
          this.M_AP_Specification.paymentadvicerunningcd == "" ||
          this.M_AP_Specification.paymentadvicerunningcd == null
            ? "NULL"
            : this.M_AP_Specification.paymentadvicerunningcd,
        LinkToPO: this.M_AP_Specification.linktopo,
        JournalCommit: this.M_AP_Specification.journalcommit,
        InvoiceTrxType:
          this.M_AP_Specification.invoicetrxtype == "" ||
          this.M_AP_Specification.invoicetrxtype == null
            ? "NULL"
            : this.M_AP_Specification.invoicetrxtype,
        APRecognition: this.M_AP_Specification.aprecognition,
        Age1: this.M_AP_Specification.age1,
        Age2: this.M_AP_Specification.age2,
        Age3: this.M_AP_Specification.age3,
        Age4: this.M_AP_Specification.age4,
        Age5: this.M_AP_Specification.age5,
        Age6: this.M_AP_Specification.age6,
        Remarks: this.M_AP_Specification.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_AP_Specification.lastupdatestamp
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        this.alertSuccess(response.Message).then(() => {
          this.getToolbar().setButton(false);
          this.$store.commit("setStatus", "view");

          this.FormToMasterPage().ValidasiPage();
        });
      });
    },
    M_ClearForm() {
      this.$nextTick(() => {
        this.M_AP_Specification = {
          batchcontrol: "Y",
          batchnumbering: "M",
          printdocument: "B",
          revaluationtrxtype: "",
          revaluationrunningcd: "",
          revaluationincludevat: "N",
          maximumoverpaymentamt: "0",
          maximumunderpaymentamt: "0",
          stockreturntrxtype: "",
          journalmode: "S",
          withholdingdeduction: "I",
          vattrxtype: "",
          withholdingtrxtype: "",
          temporaryinvoicerunningcd: "",
          cashpurchasecreditorcd: "",
          paymenttrxtype: "",
          paymentadvicerunningcd: "",
          linktopo: "Y",
          journalcommit: "G",
          invoicetrxtype: "",
          aprecognition: "I",
          age1: "0",
          age2: "0",
          age3: "0",
          age4: "0",
          age5: "0",
          age6: "0",
          remarks: "",
          userinput: "",
          useredit: this.getDataUser().UserId,
          lastupdatestamp: 0,
          transactioncount: 0,
          subportfoliocd: this.getDataUser().SubPortfolioCd,
          rowid: 0
        };
      });
      this.$forceUpdate();
    },
    M_New() {},
    M_Edit() {},
    M_Delete(dt) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        PortfolioCd: this.getDataUser().PortfolioCd,
        LineNo: this.$parent.data.PageOrder,
        Data: dt
        //,SourceValue:''
      };

      this.postJSONMulti(this.getUrlDeleteMulti(), param).then(response => {
        if (response == null) return;
        var message = "Deleting Data Successfully";
        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultDelete(message);
      });
    },
    getDataBy(record) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        if (response.Data.length > 0) {
          this.getToolbar().FormStatus = "EDIT";
          this.getToolbar().ProcessPS();

          this.M_AP_Specification = {
            batchcontrol: data.batchcontrol,
            batchnumbering: data.batchnumbering,
            printdocument: data.printdocument,
            revaluationtrxtype: data.revaluationtrxtype,
            revaluationrunningcd: data.revaluationrunningcd,
            revaluationincludevat: data.revaluationincludevat,
            maximumoverpaymentamt: this.isCurrency(
              data.maximumoverpaymentamt,
              this.decimal
            ),
            maximumunderpaymentamt: this.isCurrency(
              data.maximumunderpaymentamt,
              this.decimal
            ),
            stockreturntrxtype: data.stockreturntrxtype,
            journalmode: data.journalmode,
            withholdingdeduction: data.withholdingdeduction,
            vattrxtype: data.vattrxtype,
            withholdingtrxtype: data.withholdingtrxtype,
            temporaryinvoicerunningcd: data.temporaryinvoicerunningcd,
            cashpurchasecreditorcd: data.cashpurchasecreditorcd,
            paymenttrxtype: data.paymenttrxtype,
            paymentadvicerunningcd: data.paymentadvicerunningcd,
            linktopo: data.linktopo,
            journalcommit: data.journalcommit,
            invoicetrxtype: data.invoicetrxtype,
            aprecognition: data.aprecognition,
            age1: this.isCurrency(data.age1, this.decimal),
            age2: this.isCurrency(data.age2, this.decimal),
            age3: this.isCurrency(data.age3, this.decimal),
            age4: this.isCurrency(data.age4, this.decimal),
            age5: this.isCurrency(data.age5, this.decimal),
            age6: this.isCurrency(data.age6, this.decimal),
            remarks: data.remarks,
            userinput: data.userinput,
            useredit: data.useredit,
            lastupdatestamp: data.lastupdatestamp,
            transactioncount: this.isCurrency(
              data.transactioncount,
              this.decimal
            ),
            subportfoliocd: data.subportfoliocd,
            rowid: data.rowid
          };

          this.M_AP_Specification.stockreturntrxtypeLabel =
            this.M_AP_Specification.stockreturntrxtype != null &&
            this.M_AP_Specification.stockreturntrxtype != ""
              ? data.stockreturntrxtype
              : "";
          this.M_AP_Specification.temporaryinvoicerunningcdLabel =
            this.M_AP_Specification.temporaryinvoicerunningcd != null &&
            this.M_AP_Specification.temporaryinvoicerunningcd != ""
              ? data.temporaryinvoicerunningcd
              : "";
          this.M_AP_Specification.cashpurchasecreditorcdLabel =
            this.M_AP_Specification.cashpurchasecreditorcd != null &&
            this.M_AP_Specification.cashpurchasecreditorcd != ""
              ? data.cashpurchasecreditorcd
              : "";
          this.M_AP_Specification.paymenttrxtypeLabel =
            this.M_AP_Specification.paymenttrxtype != null &&
            this.M_AP_Specification.paymenttrxtype != ""
              ? data.paymenttrxtype
              : "";
          this.M_AP_Specification.paymentadvicerunningcdLabel =
            this.M_AP_Specification.paymentadvicerunningcd != null &&
            this.M_AP_Specification.paymentadvicerunningcd != ""
              ? data.paymentadvicerunningcd
              : "";
          this.M_AP_Specification.revaluationtrxtypeLabel =
            this.M_AP_Specification.revaluationtrxtype != null &&
            this.M_AP_Specification.revaluationtrxtype != ""
              ? data.revaluationtrxtype
              : "";
          this.M_AP_Specification.revaluationrunningcdLabel =
            this.M_AP_Specification.revaluationrunningcd != null &&
            this.M_AP_Specification.revaluationrunningcd != ""
              ? data.revaluationrunningcd
              : "";
          this.M_AP_Specification.vattrxtypeLabel =
            this.M_AP_Specification.vattrxtype != null &&
            this.M_AP_Specification.vattrxtype != ""
              ? data.vattrxtype
              : "";
          this.M_AP_Specification.withholdingtrxtypeLabel =
            this.M_AP_Specification.withholdingtrxtype != null &&
            this.M_AP_Specification.withholdingtrxtype != ""
              ? data.withholdingtrxtype
              : "";
          this.M_AP_Specification.invoicetrxtypeLabel =
            this.M_AP_Specification.invoicetrxtype != null &&
            this.M_AP_Specification.invoicetrxtype != ""
              ? data.invoicetrxtype
              : "";

          this.IEBy.Input = data.UserInput;
          this.IEBy.Edit = data.UserEdit;
        } else {
          this.getToolbar().FormStatus = "NEW";
          this.getToolbar().ProcessPS();
        }
      });
    }
  },
  beforeCreate: function() {},
  created: function() {
    this.$store.commit("setFormType", "Form");
    // this.isDetail = true
  },
  beforeMount: function() {},
  mounted: function() {
    this.getDataBy();
    this.hideSideBarMenu();
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>
