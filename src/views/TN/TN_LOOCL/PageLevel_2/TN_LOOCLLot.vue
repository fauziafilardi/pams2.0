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
                        @change="OnlotnoChange"
                        :prop="PI_lotno"
                        :value="M_TN_LOOCLLot.lotno"
                        :label="M_TN_LOOCLLot.lotnoLabel"
                        ref="ref_lotno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_blockcd"
                        v-model="M_TN_LOOCLLot.blockcd"
                        ref="ref_blockcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_floorcd"
                        v-model="M_TN_LOOCLLot.floorcd"
                        ref="ref_floorcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnfixchargesChange"
                        :prop="PI_fixcharges"
                        v-model="M_TN_LOOCLLot.fixcharges"
                        ref="ref_fixcharges"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OnchargeareaChange"
                        :prop="PI_chargearea"
                        v-model="M_TN_LOOCLLot.chargearea"
                        ref="ref_chargearea"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute :prop="PI_grossarea" v-model="grossDescs" ref="ref_grossarea" />
                    </b-col>
                  </b-row>
                  <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_semigrossarea" v-model="M_TN_LOOCLLot.semigrossarea"  ref="ref_semigrossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netarea" v-model="M_TN_LOOCLLot.netarea"  ref="ref_netarea" />
                                      </b-col>
                  </b-row>-->
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_budgetrate"
                        v-model="M_TN_LOOCLLot.budgetrate"
                        ref="ref_budgetrate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputTextVuex
                        @input="OnrentalrateChange"
                        :prop="PI_rentalrate"
                        v-model="M_TN_LOOCLLot.rentalrate"
                        ref="ref_rentalrate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSCompute
                        :prop="PI_rentalamt"
                        v-model="M_TN_LOOCLLot.rentalamt"
                        ref="ref_rentalamt"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSinputRadioButtonVuex
                        @input="OntenantstatusChange"
                        :prop="PI_tenantstatus"
                        v-model="M_TN_LOOCLLot.tenantstatus"
                        ref="ref_tenantstatus"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="6">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_TN_LOOCLLot.remarks"
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
      Module: "TN",
      propList: {
        initialWhere: "ApplicationNo = '" + this.ValKey + "'",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },

      IEBy: { Input: "", Edit: "" },

      M_TN_LOOCLLot: {
        applicationno: "",
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        lotno: "",
        grossarea: 0,
        semigrossarea: 0,
        netarea: 0,
        rentalqty: 0,
        rentalrate: "0",
        rentalamt: 0,
        chargearea: "",
        fixcharges: "",
        blockcd: "",
        blockdescs: "",
        floorcd: "",
        floordescs: "",
        rcd: "",
        red: "",
        tenantstatus: "",
        lotthemecd: "",
        themedescs: "",
        lotclasscd: "",
        classdescs: "",
        lotcategorycd: "",
        categorydescs: "",
        lottypedescs: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        antenna: "",
        lotdescs: "",
        budgetrate: 0,
        totalrate: 0,
        lastupdatestamp: 0,
        rowid: 0
      },
      PI_lotno: {
        dataLookUp: {
          LookUpCd: "GetLOOCLLotNo",
          ColumnDB: "LotNo",
          InitialWhere: "",
          ParamWhere: "",
          SourceField:
            "LotNo,Descs,FixCharges,ChargeArea,GrossArea,SemiGrossArea,NetArea",
          DisplayLookUp: "LotNo,Descs"
        },
        cValidate: "required",
        cName: "lotno",
        cLabel: "Lot No",
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
        cMasterUrl: "",
        cDisplayColumn: "LotNo,Descs"
      },
      PI_blockcd: {
        cLabel: "Block",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_floorcd: {
        cLabel: "Floor",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_fixcharges: {
        cValidate: "",
        cName: "fixcharges",
        cId: "rdbfixcharges",
        cRadioOptions: [
          { text: "No", value: "N" },
          { text: "Yes", value: "Y" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Fix Charges",
        cLabelSize: 4,
        cOrder: 0,
        cProtect: true,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_chargearea: {
        cValidate: "",
        cName: "chargearea",
        cId: "rdbchargearea",
        cRadioOptions: [
          { text: "Gross Area", value: "G" },
          { text: "Semi Gross Area", value: "S" },
          { text: "Net Area", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Base Calculation Area",
        cLabelSize: 4,
        cOrder: 0,
        cProtect: true,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_grossarea: {
        cLabel: "Gross Area",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_semigrossarea: {
        cLabel: "Semi Gross Area",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_netarea: {
        cLabel: "Net Area",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_budgetrate: {
        cLabel: "Budget Rate",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_rentalrate: {
        cValidate: "",
        cName: "rentalrate",
        cLabel: "Rental Rate",
        cLabelSize: 4,
        cOrder: 2,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_rentalamt: {
        cLabel: "Total Rate",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true
      },
      PI_tenantstatus: {
        cValidate: "",
        cName: "tenantstatus",
        cId: "rdbtenantstatus",
        cRadioOptions: [
          { text: "New", value: "N" },
          { text: "Replacement", value: "P" },
          { text: "Renew", value: "R" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Tenant Status",
        cLabelSize: 4,
        cOrder: 0,
        cProtect: true,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 3,
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
        cFormPageNo: this.data.PageOrder,
        cProtect: false
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
    grossDescs() {
      var gross = this.M_TN_LOOCLLot.grossarea
        ? this.M_TN_LOOCLLot.grossarea
        : "";
      var semigross = this.M_TN_LOOCLLot.semigrossarea
        ? this.M_TN_LOOCLLot.semigrossarea
        : "";
      var net = this.M_TN_LOOCLLot.netarea ? this.M_TN_LOOCLLot.netarea : "";

      return (
        gross.toString() + " / " + semigross.toString() + " / " + net.toString()
      );
    },
    DataRow() {
      return this.$store.getters.GetPage2Data;
    },
    DataRowPage1() {
      return this.$store.getters.GetPage1Data;
    }
  },
  methods: {
    GetLotRentalRateDefault() {
      var param = {
        OptionFunctionCd: "GetLotRentalRateDefault",
        ModuleCd: this.ModuleCd,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ApplicationNo: this.M_TN_LOOCLLot.applicationno,
        LotNo: this.M_TN_LOOCLLot.lotno
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress[0];
        // console.log(data);
        this.M_TN_LOOCLLot.blockcd =
          data.BlockCd + "( " + data.BlockDescs + " )";
        this.M_TN_LOOCLLot.floorcd =
          data.FloorCd + "( " + data.FloorDescs + " )";
        this.M_TN_LOOCLLot.budgetrate = this.isCurrency(
          data.RentalRate,
          this.decimal
        );
        this.M_TN_LOOCLLot.rentalrate = this.isCurrency(
          data.RentalRate_default,
          this.decimal
        );
        this.M_TN_LOOCLLot.rentalamt = this.isCurrency(
          data.TotalRate,
          this.decimal
        );
        this.M_TN_LOOCLLot.fixcharges = data.FixCharges;
        this.M_TN_LOOCLLot.chargearea = data.ChargeArea;
      });
    },
    Update_RentalAmt() {
      var param = {
        OptionFunctionCd: "Update_RentalAmt",
        ModuleCd: this.Module,
        ApplicationNo: this.M_TN_LOOCLLot.applicationno,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        LotNo: this.M_TN_LOOCLLot.lotno,
        RentalRate: this.M_TN_LOOCLLot.rentalrate
          ? this.replaceAllString(
              this.M_TN_LOOCLLot.rentalrate,
              ",",
              "",
              "number"
            )
          : 0,
        TotalRate_Output: ""
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress;
        // console.log(data)
        this.M_TN_LOOCLLot.rentalamt = data.TotalRate;
      });
    },
    OnrentalrateChange(data) {
      // console.log('1')
      // if (this.inputStatus != "EDIT") {

      // }
      // if(data != '' || data != null){

      // }else{

      // }

      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (this.M_TN_LOOCLLot.lotno != "") {
            this.Update_RentalAmt();
          }
        }
      });
      this.$forceUpdate();
    },
    OnlotnoChange(data) {
      // console.log(data);
      this.$nextTick(() => {
        this.M_TN_LOOCLLot.lotno = data.id;
        this.M_TN_LOOCLLot.lotnoLabel = data.label;

        if (this.inputStatus != "VIEW") {
          this.M_TN_LOOCLLot.grossarea = data.GrossArea;
          this.M_TN_LOOCLLot.semigrossarea = data.SemiGrossArea;
          this.M_TN_LOOCLLot.netarea = data.NetArea;
          this.M_TN_LOOCLLot.chargearea = data.ChargeArea;
          if (data.FixCharges == "No") {
            this.M_TN_LOOCLLot.fixcharges = "N";
          } else {
            this.M_TN_LOOCLLot.fixcharges = "Y";
          }
        }
      });
      this.$forceUpdate();
    },
    OnfixchargesChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{fixcharges}
        }
      });
      this.$forceUpdate();
    },
    OnchargeareaChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{chargearea}
        }
      });
      this.$forceUpdate();
    },
    OntenantstatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{tenantstatus}
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
      // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
      if (
        (data.StatusCd != "A" && data.ContractStatus != 1) ||
        (data.StatusCd != "N" && data.ContractStatus != 1) ||
        data.StatusCd == "C" ||
        data.StatusCd == "X"
      ) {
        this.FormType = "View";
        this.$store.commit("setFormType", "View");
        this.getToolbar().ProcessPS();
      } else {
        this.FormType = "List";
        this.$store.commit("setFormType", "List");
        this.getToolbar().ProcessPS();
      }
      // }
      this.LookUpFilterLotNo(data);
      // console.log(data)
      this.M_TN_LOOCLLot.applicationno = data.ApplicationNo;
      this.propList.initialWhere =
        " ApplicationNo = '" + data.ApplicationNo + "' ";

      this.FormToABSList().doGetList("", "eb_getList");
    },
    M_Insert() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ApplicationNo: this.M_TN_LOOCLLot.applicationno,
        LotNo:
          this.M_TN_LOOCLLot.lotno == "" || this.M_TN_LOOCLLot.lotno == null
            ? "NULL"
            : this.M_TN_LOOCLLot.lotno,
        RentalQty: this.M_TN_LOOCLLot.rentalqty,
        RentalRate: this.M_TN_LOOCLLot.rentalrate
          ? this.replaceAllString(
              this.M_TN_LOOCLLot.rentalrate,
              ",",
              "",
              "number"
            )
          : 0,
        Remarks: this.M_TN_LOOCLLot.remarks,
        UserInput: this.getDataUser().UserId
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
        ApplicationNo: this.DataRowPage1.ApplicationNo,
        LotNo:
          this.M_TN_LOOCLLot.lotno == "" || this.M_TN_LOOCLLot.lotno == null
            ? "NULL"
            : this.M_TN_LOOCLLot.lotno,
        RentalQty: this.M_TN_LOOCLLot.rentalqty,
        RentalRate: this.M_TN_LOOCLLot.rentalrate
          ? this.replaceAllString(
              this.M_TN_LOOCLLot.rentalrate,
              ",",
              "",
              "number"
            )
          : 0,
        Remarks: this.M_TN_LOOCLLot.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_TN_LOOCLLot.lastupdatestamp
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_TN_LOOCLLot = {
        applicationno: "",
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        lotno: "",
        grossarea: "",
        semigrossarea: "",
        netarea: "",
        rentalqty: 0,
        rentalrate: 0,
        rentalamt: 0,
        chargearea: "",
        fixcharges: "",
        blockcd: "",
        blockdescs: "",
        floorcd: "",
        floordescs: "",
        rcd: "",
        red: "",
        tenantstatus: "",
        lotthemecd: "",
        themedescs: "",
        lotclasscd: "",
        classdescs: "",
        lotcategorycd: "",
        categorydescs: "",
        lottypedescs: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        antenna: "",
        lotdescs: "",
        budgetrate: 0,
        totalrate: 0,
        lastupdatestamp: 0,
        rowid: 0
      };
      // console.log('3')
    },
    M_New() {
      let data = this.$store.getters.GetPage1Data;
      this.M_TN_LOOCLLot.applicationno = data.ApplicationNo;
      this.LookUpFilterLotNo(data);
      // console.log('2')
    },
    M_Edit() {
      let data = this.$store.getters.GetPage1Data;
      this.M_TN_LOOCLLot.applicationno = data.ApplicationNo;
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          LotNo:
            value.LotNo == "" || value.LotNo == null ? "NULL" : value.LotNo,
          ApplicationNo: value.ApplicationNo,
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
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        applicationno: record.ApplicationNo,
        lotno: record.LotNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        if (response == null) return;

        var data = response.Data[0];
        this.M_TN_LOOCLLot = {
          applicationno: data.applicationno,
          subportfoliocd: data.subportfoliocd,
          lotno: data.lotno,
          grossarea: this.isCurrency(data.grossarea, this.decimal),
          semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
          netarea: this.isCurrency(data.netarea, this.decimal),
          rentalqty: this.isCurrency(data.rentalqty, this.decimal),
          rentalrate: this.isCurrency(data.rentalrate, this.decimal),
          rentalamt: this.isCurrency(data.totalrate, this.decimal),
          chargearea: data.chargearea,
          fixcharges: data.fixcharges,
          blockcd: data.blockcd + " (" + data.blockdescs + ")",
          blockdescs: data.blockdescs,
          floorcd: data.floorcd + " (" + data.floordescs + ")",
          floordescs: data.floordescs,
          rcd: data.rcd,
          red: data.red,
          tenantstatus: data.tenantstatus,
          lotthemecd: data.lotthemecd,
          themedescs: data.themedescs,
          lotclasscd: data.lotclasscd,
          classdescs: data.classdescs,
          lotcategorycd: data.lotcategorycd,
          categorydescs: data.categorydescs,
          lottypedescs: data.lottypedescs,
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          antenna: data.antenna,
          lotdescs: data.lotdescs,
          budgetrate: this.isCurrency(data.budgetrate, this.decimal),
          totalrate: this.isCurrency(data.totalrate, this.decimal),
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid
        };

        this.M_TN_LOOCLLot.lotnoLabel =
          this.M_TN_LOOCLLot.lotno != null && this.M_TN_LOOCLLot.lotno != ""
            ? data.lotno + this.separator + data.lotdescs
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
      });
    },
    LookUpFilterLotNo(data) {
      // console.log(JSON.stringify(data, null, 2));
      let dates = data.RCD.split("/");
      let month = parseInt(dates[1]) - 1;
      var d = new Date(dates[2], month, dates[0]);
      // console.log(dates);
      // console.log(d);
      // console.log(this.momentDateFormatting(d));
      this.PI_lotno.dataLookUp.ParamView =
        "'" + this.momentDateFormatting(d, "YYYY-MM-DD") + "'";

      this.PI_lotno.dataLookUp.InitialWhere =
        " SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4') AND (isnull(ContractStatus,'x') NOT IN ('5') AND isnull(Status,'x') NOT IN ('A', 'R')) " +
        "AND LotNo Not In (Select LotNo From Tn_ContractLot Where SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "' and ApplicationNo = '" +
        data.ApplicationNo +
        "') " +
        "AND LotCluster = (Select top 1 CustomerCategoryCd from TN_Contract where applicationno = '" +
        data.ApplicationNo +
        "' and SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "' ) " +
        "AND ((StartDate IS NULL)  or " +
        "( (StartDate <= (Select top 1 StartDate from TN_Contract where applicationno = '" +
        data.ApplicationNo +
        "' and SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "' )) and     " +
        "  (EndDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" +
        data.ApplicationNo +
        "' and SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "'))       ) or  " +
        "( (StartDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" +
        data.ApplicationNo +
        "' and SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "')) and     " +
        "  (StartDate <= (Select top 1 EndDate from TN_Contract where applicationno = '" +
        data.ApplicationNo +
        "' and SubPortfolioCd = '" +
        this.getDataUser().SubPortfolioCd +
        "'))       ) )  ";
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

