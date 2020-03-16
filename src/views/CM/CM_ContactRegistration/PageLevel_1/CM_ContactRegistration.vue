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
                        @change="OncontactclasscdChange"
                        :prop="PI_contactclasscd"
                        :value="M_CM_ContactRegistration.contactclasscd"
                        :label="M_CM_ContactRegistration.contactclasscdLabel"
                        ref="ref_contactclasscd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnclassificationidChange"
                        :prop="PI_classificationid"
                        v-model="M_CM_ContactRegistration.classificationid"
                        ref="ref_classificationid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSInputSelectList
                        @change="OnparentidChange"
                        :prop="PI_parentid"
                        :value="M_CM_ContactRegistration.parentid"
                        :label="M_CM_ContactRegistration.parentidLabel"
                        ref="ref_parentid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OncategoryChange"
                        :prop="PI_category"
                        v-model="M_CM_ContactRegistration.category"
                        ref="ref_category"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OngovernmentChange"
                        :prop="PI_government"
                        v-model="M_CM_ContactRegistration.government"
                        ref="ref_government"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_name"
                        v-model="M_CM_ContactRegistration.name"
                        ref="ref_name"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_website"
                        v-model="M_CM_ContactRegistration.website"
                        ref="ref_website"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OntaxcollectableChange"
                        :prop="PI_taxcollectable"
                        v-model="M_CM_ContactRegistration.taxcollectable"
                        ref="ref_taxcollectable"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_taxno"
                        v-model="M_CM_ContactRegistration.taxno"
                        ref="ref_taxno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        :prop="PI_taxreferenceno"
                        v-model="M_CM_ContactRegistration.taxreferenceno"
                        ref="ref_taxreferenceno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputDateVuex
                        @input="OntaxregistrationdateChange"
                        :prop="PI_taxregistrationdate"
                        v-model="M_CM_ContactRegistration.taxregistrationdate"
                        ref="ref_taxregistrationdate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_CM_ContactRegistration.remarks"
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
      FormType: "List",
      Module: "CM",
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
      ContactApproval: "",
      ContactRunningCd: "",

      M_CM_ContactRegistration: {
        contactid: "",
        contactclasscd: "",
        parentid: "",
        category: "P",
        government: "N",
        reasoncd: "",
        reasondescs: "",
        name: "",
        website: "",
        taxno: "",
        taxreferenceno: "",
        taxregistrationdate: "",
        taxcollectable: "Y",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        classdescs: "",
        parentname: "",
        classificationlocalid: "N",
        classificationcentralid: "N",
        classificationgroupid: "N",
        sequenceregistrationno: 0,
        lastupdatestamp: 0,
        rowid: 0,
        insurancestatus: "",
        financierstatus: "",
        status: "",
        classificationid: []
      },
      PI_contactclasscd: {
        dataLookUp: {
          LookUpCd: "GetLookupCMContactClass",
          ColumnDB: "ContactClassCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "contactclasscd",
        cLabel: "Contact Class Code",
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
        cMasterUrl: "CM/CM_ContactClass",
        cDisplayColumn: "ContactClassCd,Descs"
      },
      PI_classificationid: {
        cValidate: "",
        cName: "classificationid",
        cId: "rdbclassificationid",
        cRadioOptions: [
          { text: "Local ID", value: "L" },
          { text: "Central ID", value: "C" },
          { text: "Group ID", value: "G" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Contact ID Classification",
        cLabelSize: 4,
        cOrder: 2,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_parentid: {
        dataLookUp: {
          LookUpCd: "GetLookupCentral",
          ColumnDB: "ParentId",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "parentid",
        cLabel: "Parent ID",
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
        cMasterUrl: "CM/CM_Contact",
        cDisplayColumn: "ContactID,Name"
      },
      PI_category: {
        cValidate: "",
        cName: "category",
        cId: "rdbcategory",
        cRadioOptions: [
          { text: "Personal", value: "P" },
          { text: "Company", value: "C" }
        ],
        cRadioDefaultOption: "P",
        cLabel: "Category",
        cLabelSize: 4,
        cOrder: 4,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_government: {
        cValidate: "",
        cName: "government",
        cId: "rdbgovernment",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "N",
        cLabel: "Government",
        cLabelSize: 4,
        cOrder: 5,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_name: {
        cValidate: "required|max:50",
        cName: "name",
        cLabel: "Name",
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
      PI_website: {
        cValidate: "max:50",
        cName: "website",
        cLabel: "Website",
        cLabelSize: 4,
        cOrder: 7,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_taxcollectable: {
        cValidate: "",
        cName: "taxcollectable",
        cId: "rdbtaxcollectable",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "Y",
        cLabel: "Tax Collectable",
        cLabelSize: 4,
        cOrder: 8,
        cProtect: true,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_taxno: {
        cValidate: "required|max:30",
        cName: "taxno",
        cLabel: "Tax Reg. No",
        cLabelSize: 4,
        cOrder: 9,
        cKey: true,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_taxreferenceno: {
        cValidate: "max:30",
        cName: "taxreferenceno",
        cLabel: "Tax Reference No",
        cLabelSize: 4,
        cOrder: 10,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_taxregistrationdate: {
        cValidate: "",
        cName: "taxregistrationdate",
        cLabel: "Tax Reg. Date",
        cLabelSize: 4,
        cOrder: 11,
        cKey: false,
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
        cOrder: 12,
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
    M_CheckboxChecked(data, status, index) {
      console.log(data);
      console.log(status);
      console.log(index);
      if (status === true) {
        if (data.Status != "New") {
          this.$store.commit("setDeleteStatus", false);
        } else {
          this.$store.commit("setDeleteStatus", true);
        }
      }
    },

    GetCMSpecification() {
      var param = {
        OptionFunctionCd: "GetCMSpecification",
        ModuleCd: this.Module
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress[0];
        // console.log(data)
        if (data.ContactApproval == "Y") {
          this.$store.commit("setFormType", "List");
          this.FormType = "List";
          this.getToolbar().ProcessPS();
          // this.getToolbar().statusFunction[4].disabled = false
        } else {
          this.$store.commit("setFormType", "View");
          this.FormType = "View";
          this.getToolbar().ProcessPS();
          // this.getToolbar().statusFunction[4].disabled = false
        }
      });
    },
    OncontactclasscdChange(data) {
      this.$nextTick(() => {
        this.M_CM_ContactRegistration.contactclasscd = data.id;
        this.M_CM_ContactRegistration.contactclasscdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{contactclasscd}
        }
      });
      this.$forceUpdate();
    },
    OnclassificationidChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (data == "C") {
            this.M_CM_ContactRegistration.classificationcentralid = "Y";
            this.M_CM_ContactRegistration.classificationlocalid = "N";
            this.M_CM_ContactRegistration.classificationgroupid = "N";
            this.$refs.ref_parentid.prop.dataLookUp.InitialWhere =
              " Classification = 'Group' ";
            this.$refs.ref_parentid.prop.dataLookUp.LookUpCd =
              "GetLookupClassificationID";
            this.PI_parentid.cValidate = "required";
            this.$refs.ref_parentid.isRequired = true;
            this.PI_parentid.cProtect = false;
            this.PI_taxno.cProtect = false;
            this.$refs.ref_taxno.isRequired = true;
            this.PI_taxno.cValidate = "required";
            this.PI_taxregistrationdate.cValidate = "required";
            this.$refs.ref_taxregdate.isRequired = true;
          }
          if (data == "L") {
            this.M_CM_ContactRegistration.classificationcentralid = "N";
            this.M_CM_ContactRegistration.classificationlocalid = "Y";
            this.M_CM_ContactRegistration.classificationgroupid = "N";
            this.$refs.ref_parentid.prop.dataLookUp.InitialWhere =
              " Classification = 'Central' ";
            this.$refs.ref_parentid.prop.dataLookUp.LookUpCd =
              "GetLookupClassificationID";
            this.PI_parentid.cValidate = "required";
            this.$refs.ref_parentid.isRequired = true;
            this.PI_parentid.cProtect = false;
            this.PI_taxno.cProtect = false;
            this.$refs.ref_taxno.isRequired = true;
            this.PI_taxno.cValidate = "required";
            this.PI_taxregistrationdate.cValidate = "required";
            this.$refs.ref_taxregdate.isRequired = true;
          }
          if (data == "G") {
            this.M_CM_ContactRegistration.classificationcentralid = "N";
            this.M_CM_ContactRegistration.classificationlocalid = "N";
            this.M_CM_ContactRegistration.classificationgroupid = "Y";
            this.$refs.ref_parentid.prop.dataLookUp.InitialWhere = "";
            this.$refs.ref_parentid.prop.dataLookUp.LookUpCd =
              "GetLookupCMContact";
            this.PI_parentid.cValidate = "";
            this.$refs.ref_parentid.isRequired = false;
            this.PI_parentid.cProtect = true;
            this.PI_taxno.cProtect = true;
            this.$refs.ref_taxno.isRequired = false;
            this.PI_taxno.cValidate = "";
            this.PI_taxregistrationdate.cValidate = "";
            this.$refs.ref_taxregdate.isRequired = false;
            this.M_CM_ContactRegistration.parentidLabel = "";
            this.M_CM_ContactRegistration.parentid = "";
          }
        }
      });
      this.$forceUpdate();
    },
    OnparentidChange(data) {
      this.$nextTick(() => {
        this.M_CM_ContactRegistration.parentid = data.id;
        this.M_CM_ContactRegistration.parentidLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{parentid}
        }
      });
      this.$forceUpdate();
    },
    OncategoryChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{category}
        }
      });
      this.$forceUpdate();
    },
    OngovernmentChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{government}
        }
      });
      this.$forceUpdate();
    },
    OntaxcollectableChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{taxcollectable}
        }
      });
      this.$forceUpdate();
    },
    OntaxregistrationdateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{taxregistrationdate}
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
    M_Post() {},
    M_Insert() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        ContactClassCd:
          this.M_CM_ContactRegistration.contactclasscd == "" ||
          this.M_CM_ContactRegistration.contactclasscd == null
            ? "NULL"
            : this.M_CM_ContactRegistration.contactclasscd,
        Category: this.M_CM_ContactRegistration.category,
        ParentId:
          this.M_CM_ContactRegistration.parentid == "" ||
          this.M_CM_ContactRegistration.parentid == null
            ? "NULL"
            : this.M_CM_ContactRegistration.parentid,
        Government: this.M_CM_ContactRegistration.government,
        TaxCollectable: this.M_CM_ContactRegistration.taxcollectable,
        TaxRegistrationDate:
          this.M_CM_ContactRegistration.taxregistrationdate == "" ||
          this.M_CM_ContactRegistration.taxregistrationdate == null
            ? "NULL"
            : this.M_CM_ContactRegistration.taxregistrationdate,
        Name: this.M_CM_ContactRegistration.name,
        Website: this.M_CM_ContactRegistration.website,
        TaxNo: this.M_CM_ContactRegistration.taxno,
        TaxReferenceNo: this.M_CM_ContactRegistration.taxreferenceno,
        Remarks: this.M_CM_ContactRegistration.remarks,
        UserInput: this.getDataUser().UserId,
        ClassificationLocalID:
          this.M_CM_ContactRegistration.classificationid.indexOf("L") >= 0
            ? "Y"
            : "N",
        ClassificationCentralID:
          this.M_CM_ContactRegistration.classificationid.indexOf("C") >= 0
            ? "Y"
            : "N",
        ClassificationGroupID:
          this.M_CM_ContactRegistration.classificationid.indexOf("G") >= 0
            ? "Y"
            : "N"
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
        SequenceRegistrationNo: this.M_CM_ContactRegistration
          .sequenceregistrationno,
        ContactClassCd:
          this.M_CM_ContactRegistration.contactclasscd == "" ||
          this.M_CM_ContactRegistration.contactclasscd == null
            ? "NULL"
            : this.M_CM_ContactRegistration.contactclasscd,
        Category: this.M_CM_ContactRegistration.category,
        Government: this.M_CM_ContactRegistration.government,
        Name: this.M_CM_ContactRegistration.name,
        ParentId:
          this.M_CM_ContactRegistration.parentid == "" ||
          this.M_CM_ContactRegistration.parentid == null
            ? "NULL"
            : this.M_CM_ContactRegistration.parentid,
        Website: this.M_CM_ContactRegistration.website,
        TaxNo: this.M_CM_ContactRegistration.taxno,
        TaxReferenceNo: this.M_CM_ContactRegistration.taxreferenceno,
        TaxRegistrationDate:
          this.M_CM_ContactRegistration.taxregistrationdate == "" ||
          this.M_CM_ContactRegistration.taxregistrationdate == null
            ? "NULL"
            : this.M_CM_ContactRegistration.taxregistrationdate,
        TaxCollectable: this.M_CM_ContactRegistration.taxcollectable,
        Remarks: this.M_CM_ContactRegistration.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_CM_ContactRegistration.lastupdatestamp,
        ClassificationLocalID:
          this.M_CM_ContactRegistration.classificationid.indexOf("L") >= 0
            ? "Y"
            : "N",
        ClassificationCentralID:
          this.M_CM_ContactRegistration.classificationid.indexOf("C") >= 0
            ? "Y"
            : "N",
        ClassificationGroupID:
          this.M_CM_ContactRegistration.classificationid.indexOf("G") >= 0
            ? "Y"
            : "N"
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_CM_ContactRegistration = {
        contactid: "",
        contactclasscd: "",
        parentid: "",
        category: "P",
        government: "N",
        reasoncd: "",
        reasondescs: "",
        name: "",
        website: "",
        taxno: "",
        taxreferenceno: "",
        taxregistrationdate: "",
        taxcollectable: "Y",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        classdescs: "",
        parentname: "",
        classificationlocalid: "N",
        classificationcentralid: "N",
        classificationgroupid: "N",
        sequenceregistrationno: 0,
        lastupdatestamp: 0,
        rowid: 0,
        insurancestatus: "",
        financierstatus: "",
        status: "",
        classificationid: []
      };
    },
    M_New() {
      // this.FnGetRunningCdFromCMSpecification().then(dt1 =>
      // { if (dt1 != null) {
      //      this.ContactRunningCd = dt1 } })
      this.$refs.ref_contactclasscd.focus();

      if (this.M_CM_ContactRegistration.taxcollectable == "Y"){
          this.PI_taxregistrationdate.cValidate = "required";
          this.$refs.ref_taxregdate.isRequired = true;
      }
    },
    M_Edit() {
      this.$refs.ref_contactclasscd.focus();
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SequenceRegistrationNo: value.SequenceRegistrationNo,
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
        sequenceregistrationno: record.SequenceRegistrationNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];

        var classificationid = null;

        if (data.classificationcentralid == "Y") {
          classificationid = "C";
        }
        if (data.classificationlocalid == "Y") {
          classificationid = "L";
        }
        if (data.classificationgroupid == "Y") {
          classificationid = "G";
        }
        // console.log(data)
        this.M_CM_ContactRegistration = {
          contactid: data.contactid,
          contactclasscd: data.contactclasscd,
          parentid: data.parentid,
          category: data.category,
          government: data.government,
          reasoncd: data.reasoncd,
          reasondescs: data.reasondescs,
          name: data.name,
          website: data.website,
          taxno: data.taxno,
          taxreferenceno: data.taxreferenceno,
          taxregistrationdate: data.taxregistrationdate,
          taxcollectable: data.taxcollectable,
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          classdescs: data.classdescs,
          parentname: data.parentname,
          classificationlocalid: data.classificationlocalid,
          classificationcentralid: data.classificationcentralid,
          classificationgroupid: data.classificationgroupid,
          sequenceregistrationno: record.SequenceRegistrationNo,
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid,
          insurancestatus: data.insurancestatus,
          financierstatus: data.financierstatus,
          status: data.status,
          classificationid: classificationid
        };

        this.M_CM_ContactRegistration.contactclasscdLabel =
          this.M_CM_ContactRegistration.contactclasscd != null
            ? data.contactclasscd + this.separator + data.classdescs
            : "";
        this.M_CM_ContactRegistration.parentidLabel =
          this.M_CM_ContactRegistration.parentid != null
            ? data.parentid + this.separator + data.parentname
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;

        if (this.M_CM_ContactRegistration.taxcollectable == "Y"){
          this.PI_taxregistrationdate.cValidate = "required";
          this.$refs.ref_taxregdate.isRequired = true;
        } else {
          this.PI_taxregistrationdate.cValidate = "";
          this.$refs.ref_taxregdate.isRequired = false;
        }

        if (record.Status != "New") {
          this.$store.commit("setEditStatus", false);
        } else {
          this.$store.commit("setEditStatus", true);
        }
      });
    }
  },
  beforeCreate: function() {},
  created: function() {
    this.GetCMSpecification();
    // this.$store.commit('setFormType','List')
    // this.getToolbar().ProcessPS()
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

