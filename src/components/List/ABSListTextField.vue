<template>
  <div style="padding-left: 30px;padding-right: 5px; ">
    <!-- <b-modal
      id="modalColumn"
      :hide-footer="true"
      :hide-header-close="true"
      size="lg"
      ref="modalColumn"
      class="modal-customize-abs"
    >
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <div class="modal-customize-abs__modal-header">
              <div class="modal-customize-abs__modal-header--title">Edit Column</div>
              <div
                class="modal-customize-abs__modal-header--icon"
                @click="$refs.modalColumn.hide()"
              >
                <i class="icon-close"></i>
              </div>
            </div>
            <div class="modal-customize-abs__modal-body">
              <b-row>
                <b-col sm="5">
                  <div>
                    <div class="divCustom">
                      <b>Available Columns</b>
                      <br>
                      <span>Select column below to display in your grid</span>
                    </div>
                    <br>
                    <div v-if="availableColumn.length > 0">
                      <ABSMultiSelect
                        v-model="availableColumnSelected"
                        :options="availableColumn"
                        size="10"
                        class="selectCustom"
                      />
                    </div>
                    <div v-else>
                      <b>No Additional Properties</b>
                    </div>
                  </div>
                </b-col>
                <b-col sm="2">
                  <div class="arrow-move">
                    <b-button @click="M_moveRight" size="sm" variant="primary">
                      <font-awesome-icon icon="angle-double-right" class="icon-style-5"/>
                    </b-button>
                  </div>
                </b-col>
                <b-col sm="5">
                  <div>
                    <div class="divCustom">
                      <b>Selected Column</b>
                      <br>
                      <span>Drag the column names below to reorder how they will appear above your grid</span>
                    </div>
                    <br>
                    <draggable
                      v-if="selectedColumn.length > 0"
                      v-model="selectedColumn"
                      @start="drag=true"
                      @end="drag=false"
                      class="drag-area"
                    >
                      <div v-for="element in selectedColumn" :key="element.value" class="draggable">
                        {{element.key}}
                        <span>
                          <span
                            class="btn-remove"
                            style="margin-top:0px; float:right;"
                            @click="M_moveLeft(element.value)"
                          >
                            <font-awesome-icon icon="trash"/>&nbsp;Delete
                          </span>
                        </span>
                      </div>
                    </draggable>
                    <div v-else>
                      <b>No Column Selected</b>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <br>
              <b-row>
                <b-col cols="12">
                  <b-button size="sm" block variant="success" @click="modalColumnHandleOk">Ok</b-button>
                </b-col>
              </b-row>
              <br>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>

    <b-modal
      id="modalFilter"
      :hide-footer="true"
      :hide-header-close="true"
      size="md"
      ref="modalFilter"
      class="modal-customize-abs"
    >
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <div class="modal-customize-abs__modal-header">
              <div class="modal-customize-abs__modal-header--title">Filter Builder</div>
              <div
                class="modal-customize-abs__modal-header--icon"
                @click="$refs.modalFilter.hide()"
              >
                <i class="icon-close"></i>
              </div>
            </div>
            <div class="modal-customize-abs__modal-body">
              <div class="list-filter">
                <b-row v-for="(data, index) in filteredColumn" :key="index">
                  <b-col sm="4">
                    <b-form-select
                      v-model="data.columnName"
                      :options="selectedColumn"
                      class="sm-3 font-lbl"
                      size="sm"
                    />
                  </b-col>
                  <b-col sm="3">
                    <b-form-select
                      v-model="data.signFilter"
                      :options="signFilter"
                      class="sm-3 font-lbl"
                      size="sm"
                    />
                  </b-col>
                  <b-col sm="4">
                    <b-form-input
                      v-if="signFilter[signFilter.map(x => {return x.value}).indexOf(data.signFilter)].type=='text'"
                      v-model="data.value"
                      type="text"
                      placeholder="Enter a value"
                      size="sm"
                      class="sm-3 font-lbl"
                    />
                  </b-col>
                  <b-col sm="1">
                    <div class="icon-close-filter" @click="M_RemoveFilter(index)">
                      <i class="icon-trash"></i>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <hr>
              <b-row align-h="between">
                <b-col cols="3">
                  <b-button @click="doAddFilter" block size="sm" variant="outline-primary">Add</b-button>
                </b-col>
                <b-col cols="3">
                  <b-button
                    size="sm"
                    block
                    variant="outline-success"
                    @click="modalFilterHandleOk"
                  >Ok</b-button>
                </b-col>
              </b-row>
              <br>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>

    <b-modal
      id="modalExport"
      :hide-footer="true"
      :hide-header-close="true"
      size="md"
      ref="modalExport"
      class="modal-customize-abs"
    >
      <b-row>
        <b-col sm="12">
          <div class="modal-customize-abs__modal-header">
            <div class="modal-customize-abs__modal-header--title">Export {{title}} to Excel</div>
            <div class="modal-customize-abs__modal-header--icon" @click="$refs.modalExport.hide()">
              <i class="icon-close"></i>
            </div>
          </div>
          <div class="modal-customize-abs__modal-body">
            <p>Select data that will be exported</p>
            <div class="box-category">
              <div class="box-category__list-category-export" @click="doExportXLS('S')">
                <img :src="require('@/assets/export-select.png')" alt>
                Export Selected Data
              </div>
              <div
                class="box-category__list-category-export category-all"
                @click="doExportXLS('A')"
              >
                <img :src="require('@/assets/export-all.png')" alt>
                Export All
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal> -->

    <!-- <b-row align-h="right" class="header-list__1">
      <b-col>
        <div :class="isDisableTable ? '' : 'dropdown'" style="float:right;">
          <button class="dropbtn">
            <i class="icon-settings"></i>
          </button>
          <div class="dropdown-content">
            <div class="dropdown-modal-list" @click="openModalExport">
              <font-awesome-icon icon="file-export" class="icon-style-3"/>&nbsp;&nbsp;Export
            </div>
            <div class="dropdown-modal-list" @click="openModalColumn">
              <font-awesome-icon icon="columns" class="icon-style-1"/>&nbsp;&nbsp;Column
            </div>
            <div class="dropdown-modal-list" @click="openModalFilter">
              <font-awesome-icon icon="columns" class="icon-style-1"/>&nbsp;&nbsp;Advance Filter
            </div>
          </div>
        </div>
      </b-col>
    </b-row> -->

    <!-- <b-form inline style="float: left; color: #333;">
      <label class="font-lbl">Page Size</label>
      <b-form-select
        id="cmbPerPage"
        v-model="perPage"
        v-on:input="doGetList($store.getters.getSearch, 'pageSize')"
        :options="pagingData"
        class="sm-3 mgn-left-10 font-lbl page-size-left"
        :disabled="isDisableTable"
      ></b-form-select>
      of {{ this.totalRows }} Records
    </b-form> -->

    <!-- <b-pagination
      align="right"
      v-model="currentPage"
      @input="doGetList($store.getters.getSearch, 'pagination')"
      :total-rows="totalRows"
      :per-page="perPage"
      :limit="limit"
      style="margin-bottom: 0px;"
      :disabled="isDisableTable"
    ></b-pagination> -->

    <div class="table--list">
      <b-table
        :responsive="true"
        :striped="false"
        :bordered="false"
        :outlined="false"
        :small="false"
        :hover="true"
        :dark="false"
        :fixed="false"
        :foot-clone="false"
        :fields="fields"
        :items="items"
        class="table-sm table-style-1"
        rules="row"
      >
        <!-- @head-clicked="headClicked"
        @row-clicked="rowClicked"
        @row-dblclicked="rowDblClicked" -->


        <!-- <template slot="HEAD_chkBoxAction" slot-scope="data">
          <b-form-checkbox
            @click.native.stop
            @change="headChkBoxAction"
            v-model="selected"
            :disabled="isDisableTable"
          />
        </template> -->
        
        <!-- kalau ada di view baca, kalau ga ada default isCheckedDisable -->
          <!-- {{isCheckDisable == undefined ? false: row.item[isCheckDisable] == null}} -->
          
          <!-- <b-form-checkbox
            @dblclick.native.stop
            @click.native.stop
            @change="chkBoxAction(row.index)"
            @input="chkBoxInput()"
            v-model="rowSelected"
            :value="row.index"
            :disabled="isDisableTable || (isCheckDisable == undefined ? false: row.item[isCheckDisable] == null)"
            style="min-height:15px !important;padding-top:0px !important;"
          /> -->
          <!-- @input="chkBoxInput()" -->

          
        <template v-for="(data, index) in fieldToTextField" :slot="data" slot-scope="row">
          <!-- {{row.item}} -->
          <b-form-input
            v-show="inputStatus=='new' || inputStatus=='edit'"
            v-model="row.item[data]"
            type="text"
            @blur.native="calculate(row)"
             />
            <!-- @blur.native="calculate(row)" -->
          
          <label v-show="inputStatus=='view'" class="text-field-form">
            {{ row.item[data] }}
          </label>
        </template>

        <!-- <template slot="currentwhtallocamt" slot-scope="row">
          <b-form-input v-model="row.item.currentwhtallocamt" type="text" placeholder="Enter your name" />
        </template> -->
      </b-table>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    // prop: {
    //   initialWhere: String,
    //   LineNo: Number,
    //   PageLevel: String,
    //   TabIndex: String,
    //   OrderBy: String,
    //   SourceField: String,
    //   ParamView: String
    // },
    // title: String,
    // isProcess: Boolean,
    // isCheckDisable: String,
    // isCheckAsStatus: String,
    // statusFalse: String
    PageLevel: String,
    TabIndex: String,
    fields: Array,
    items: Array,
    fieldToTextField: Array,
    fieldCalculate: String,
    operatorCalculate: Number
  },
  watch: {
  },
  data() {
    return {
      // availableColumnStatic: [],
      // selectedColumnStatic: [],
      // isFirst: false,
      // loader: false,
      // selected: false,
      // rowSelected: [],
      // dataSelected: [],
      // rowSel: -1,

      // search: "",
      // fields: [],
      // items: [],
      sort: "",

      // paging
      totalRows: 0,
      currentPage: 1,
      lastPage: 1,
      perPage: 5,
      limit: 2,
      // pagingData: [
      //   { value: 5, text: "5" },
      //   { value: 10, text: "10" },
      //   { value: 15, text: "15" },
      //   { value: 20, text: "20" },
      //   { value: 40, text: "40" },
      //   { value: 60, text: "60" },
      //   { value: 80, text: "80" },
      //   { value: 100, text: "100" },
      //   { value: 1000, text: "1000" }
      // ],

      fileName: "TestExport",
      ExportToken: "",

      availableColumn: [],
      availableColumnTemp: [],
      availableColumnSelected: null,
      selectedColumn: [],
      selectedColumnTemp: [],
      selectedColumnSelected: [],

      sortedField: [],

      // filteredColumnTemp: [],
      // filteredColumn: [],
      // signFilter: [
      //   { value: "=", text: "Equals", type: "text" },
      //   { value: "<>", text: "Does Not Equal", type: "text" },
      //   { value: "<", text: "Is Less Than", type: "text" },
      //   { value: ">", text: "Is Greater Than", type: "text" },
      //   { value: "<=", text: "Is Less Than Or Equal To", type: "text" },
      //   { value: ">=", text: "Is Greater Than Or Equal To", type: "text" },
      //   { value: "null", text: "Is Empty", type: "none" },
      //   { value: "notnull", text: "Is Not Empty", type: "none" },
      //   { value: "like", text: "Contains Of", type: "text" },
      //   // {value: 'between', key: 'Is Between'},
      //   { value: "in", text: "Is Any Of", type: "text" },
      //   { value: "notin", text: "Is None Of", type: "text" }
      // ],

      // dataState: {
      //   // PageLevel: '1',
      //   TabIndex: "1"
      // },
      tempAdvanceFilter: "",
      allColumn_bf: []
    };
  },
  computed: {
    isDisableTable() {
      return this.$store.getters.getListStatus
    },
    formType () {
      return this.$store.getters.getFormType
    },
    inputStatus () {
      // this.$validator.pause()
      // this.$nextTick(() => {
      //   this.$validator.errors.clear(this.prop.cParentForm)
      //   this.$validator.resume()
      // })

      if (this.$store.getters.getLevel == this.cPageLevel && this.$store.getters.getTab == this.cTabIndex) {
        return this.$store.getters.getStatus
      }
      else {
        return 'view'
      }
    },
  },
  methods: {
    calculate (rowData) {
      // alert(rowData.field.key)
      // console.log(rowData.item)
      var calculate = this.replaceAllString(rowData.item[rowData.field.key], ",", "", "number") * this.operatorCalculate
      calculate = this.isCurrency(parseFloat(calculate).toFixed(2))
      rowData.item[this.fieldCalculate] = calculate
      
      // string, stringToReplace, newString
      // console.table(rowData.item)
      this.$emit("change", rowData.item)
    },
    getToolbarAbsList() {
      if (this.isProcess == true) {
        return this.$parent.$children[0].$children[0]
      } else {
        return this.$parent.$parent.$parent.$parent.$parent.$parent.$children[0].$children[0]
      }
    },
    // doRefresh() {
    //   this.prop.initialWhere = ""
    //   this.doGetList("", "refresh")
    //   this.resetSelected()
    //   this.$emit("doRefresh")
    // },
    // getRowSelected() {
    //   var data = []
    //   if (this.rowSelected.length > 0) {
    //     this.rowSelected.forEach(idx => {
    //       data.push(this.items[idx])
    //     })
    //     return data
    //   } else {
    //     this.alertWarning("No Data Selected")
    //   }
    // },
    // getRowSelectedCount() {
    //   var count = 0
    //   if (this.rowSelected.length > 0) {
    //     this.rowSelected.forEach(idx => {
    //       count++
    //     })
    //     return count
    //   } else {
    //     return count
    //   }
    // },
    // M_Delete(data) {
    //   var param = {
    //     OptionSeq: this.getOptionSeq().OptionSeq,
    //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
    //     PortfolioCd: this.getDataUser().PortfolioCd,
    //     LineNo: this.prop.LineNo,
    //     Data: data
    //   };

    //   this.postJSON(this.getUrlDeleteMulti(), param).then(response => {
    //     // response from API
    //     if (response == null) return;

    //     this.responses = response;
    //     this.alertSuccess("Deleting Data Successfully");
    //     this.doGetList("", "refresh_delete");
    //     this.resetSelected();
    //   });
    // },
    // doExportXLS(param) {
    //   if (param == "A") {
    //     var url = this.getFileExcel(this.title, this.ExportToken)
    //     window.location.href = url
    //     this.$refs.modalExport.hide()
    //   } else {
    //     if (this.rowSelected.length > 0) {
    //       var data = ""
    //       this.rowSelected.forEach(idx => {
    //         data += this.items[idx].RowId + ","
    //       })

    //       data = data.slice(0, -1)

    //       this.M_ExportXLS(data)
    //     } else {
    //       this.alertWarning("No Data Selected To Export")
    //     }
    //   }
    // },
    // M_ExportXLS(data) {
    //   var param = {
    //     Token: this.ExportToken,
    //     Data: data
    //   }

    //   this.postJSON(this.getUrlGetTokenExport(), param).then(response => {
    //     if (response == null) return

    //     var url = this.getFileExcel(this.title, response.Data.Token)
    //     window.location.href = url
    //     this.$refs.modalExport.hide()
    //   })
    // },
    // M_PostData(data) {
    //   var param = {
    //     OptionSeq: this.getOptionSeq().OptionSeq,
    //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
    //     PortfolioCd: this.getDataUser().PortfolioCd,
    //     LineNo: this.prop.LineNo,
    //     Data: data
    //   }

    //   this.postEncode(this.getUrlPostMulti(), param).then(response => {
    //     // response from API
    //     if (response == null) return

    //     this.alertSuccess("Posting Data Successfully")
    //     this.doGetList("", "refresh_post")
    //     this.resetSelected()
    //   });
    // },
    // openModalExport() {
    //   this.$refs.modalExport.show()
    // },
    // openModalColumn() {

    //   this.doGetList("", "refresh_column")
    //   this.$refs.modalColumn.show()
    // },
    // openModalFilter() {
    //   this.$refs.modalFilter.show()
    // },
    // doCursorSearch() {
    //   document.getElementById(txtSearch).focus()
    //   document.getElementById(frmObj.id).select()
    // },
    // doAddFilter() {
    //   var dataColumn = this.selectedColumn;
    //   this.filteredColumn.push({
    //     columnName: dataColumn[0].value,
    //     signFilter: "=",
    //     value: ""
    //   })
    // },
    // M_RemoveFilter(idx) {
    //   this.filteredColumn.splice(idx, 1)
    //   this.$forceUpdate()
    // },
    // modalFilterHandleOk() {
    //   var col = this.selectedColumn
    //   var filterString = ""

    //   this.filteredColumn.forEach((filter, index) => {
    //     var i = col
    //       .map(value => {
    //         return value.value
    //       })
    //       .indexOf(filter.columnName)
    //     var theFilter = ""
    //     var sign = filter.signFilter
    //     if (sign == "in" || sign == "notin") {
    //       var val = filter.value.split(",")
    //       var xVal = ""
    //       val.forEach(v => {
    //         xVal += "'" + v + "',"
    //       })

    //       xVal = xVal.substr(0, xVal.length - 1);

    //       if (sign == "in") {
    //         theFilter = "in (" + xVal + ")"
    //       } else {
    //         theFilter = "not in (" + xVal + ")"
    //       }
    //     } else if (sign == "like") {
    //       theFilter += "like '%" + filter.value + "%'"
    //     } else if (sign == "null") {
    //       theFilter += " is null "
    //     } else if (sign == "notnull") {
    //       theFilter += " is not null "
    //     } else {
    //       theFilter += filter.signFilter + " '" + filter.value + "'"
    //     }
    //     filterString += this.selectedColumn[i].key + " " + theFilter + " AND "
    //   })
    //   filterString = filterString.substr(0, filterString.length - 4)
    //   this.tempAdvanceFilter = filterString
    //   this.doGetList("", "refresh_filter")
    //   this.$refs.modalFilter.hide()
    // },
    // modalColumnHandleOk() {
    //   var field = ""

    //   this.selectedColumn.forEach((el, index) => {
    //     if (index == this.selectedColumn.length - 1) {
    //       field += el.key;
    //     } else {
    //       field += el.key + ","
    //     }
    //   });

    //   var param = {
    //     OptionSeq: this.getOptionSeq().OptionSeq,
    //     UserId: this.getDataUser().UserId,
    //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
    //     ColumnField: field,
    //     UserInput: this.getDataUser().UserId,
    //     LineNo: this.prop.LineNo
    //   }

    //   this.postEncode(this.getUrlDefineColumn(), param).then(response => {
    //     // response from API
    //     if (response == null) return

    //     this.responses = response

    //     this.fields = []
    //     this.fields.push({
    //       value: 0,
    //       key: "chkBoxAction"
    //     })
        
    //     this.selectedColumn.forEach(ar => {
    //       var thClass = "ABSthClassList"
    //       var isSorted = this.sortedField.map(x => x.field).indexOf(ar.key)
    //       if (isSorted > -1) {
    //         if (this.sortedField[isSorted].sort == "ASC") {
    //           thClass = thClass + " AscSorted"
    //         } else {
    //           thClass = thClass + " DescSorted"
    //         }
    //       }

    //       this.fields.push({
    //         value: ar.value,
    //         key: ar.key,
    //         thClass: thClass,
    //         tdClass: "ABStdClassList",
    //         value: ar.key
    //       })
    //     })

    //     this.doGetList("", "refresh_column")
    //     this.$refs.modalColumn.hide()
    //   });
    // },
    // M_moveRight() {
    //   if (
    //     this.availableColumnSelected &&
    //     this.availableColumnSelected.length > 0
    //   ) {
    //     var arr = this.availableColumn
    //     var x = 0
    //     this.availableColumnTemp.forEach((dt, idx) => {
    //       if (dt.value == this.availableColumnSelected[x]) {
    //         arr = arr.filter(function(arr, index) {
    //           return arr.value != dt.value
    //         })

    //         this.selectedColumn.push({
    //           value: dt.value,
    //           key: dt.key,
    //           text: dt.key
    //         })

    //         x += 1
    //       }

    //       if (x == this.availableColumnSelected.length) {
    //         this.availableColumn = arr
    //         this.selectedColumnTemp = this.selectedColumn
    //         this.availableColumnTemp = this.availableColumn
    //       }
    //     });
    //   }
    // },
    // M_moveLeft(selected) {
    //   if (this.selectedColumn.length == 1) {
    //     this.alertWarning("Selected Column Should Have At Least One Column")
    //     return
    //   }

    //   this.selectedColumnSelected = [selected]
    //   var arr = this.selectedColumn
    //   var x = 0;
    //   this.selectedColumnTemp.forEach((dt, idx) => {
    //     if (dt.value == this.selectedColumnSelected[x]) {
    //       arr = arr.filter(function(arr, index) {
    //         return arr.value != dt.value
    //       });

    //       this.availableColumn.push({
    //         value: dt.value,
    //         key: dt.key,
    //         text: dt.key
    //       });

    //       x += 1
    //     }

    //     if (x == this.selectedColumnSelected.length) {
    //       this.selectedColumn = arr
    //     }
    //   })
    // },
    // headClicked: function(field, index) {
    //   if (field.toUpperCase() == "NO") {
    //     return
    //   }
    //   if (this.isDisableTable) return
    //   var dtSort = this.sortedField
    //   this.sort = ""
    //   var x = dtSort
    //     .map(e => {
    //       return e.field
    //     })
    //     .indexOf(field)

    //   if (x > -1) {
    //     if (this.sortedField[x].sort == "ASC") {
    //       this.sortedField[x].sort = "DESC"
    //     } else {
    //       // this.sortedField[x].sort = "ASC"
    //       this.sortedField.splice(x, 1)
    //     }
    //   } else {
    //     this.sortedField.push({ field: field, sort: "ASC" })
    //   }

    //   if (this.sortedField.length > 0) {
    //     this.sortedField.forEach(el => {
    //       this.sort += el.field + " " + el.sort + ","
    //     })

    //     this.sort = this.sort.substr(0, this.sort.length - 1)
    //   }
    //   else {
    //     for (var i = 0; i < this.allColumn_bf.length; i++) {
    //       if (this.allColumn_bf[i].toLowerCase() == 'timeedit') {
    //         this.sort = "TimeEdit DESC"
    //       }
    //     }
    //   }

      
    //   this.doGetList(this.$store.getters.getSearch, "headTable")
    //   this.resetSelected()
    //   this.$emit("headClicked")
    // },
    // headChkBoxAction() {
    //   this.rowSelected = []
    //   if (!this.selected) {
    //     this.items.forEach((el, idx) => {
    //       this.rowSelected.push(idx)
    //     })
    //   }

    //   this.$emit("allCheckBoxAction", this.items);
    // },
    // chkBoxAction(index) {
    //   var x = this.rowSelected.indexOf(index);
    //   // alert('data_' + this.items.length)
    //   // alert('terpilih_' + this.rowSelected.length)
    //   this.selected = false;
    //   if (index > -1) {
    //     if (x < 0) {
    //       if (this.isCheckAsStatus != undefined) {
    //         if (this.items[index].hasOwnProperty(this.isCheckAsStatus.split("=")[0])) {
    //           this.items[index][this.isCheckAsStatus.split("=")[0]] = this.isCheckAsStatus.split("=")[1]
    //         }
    //       }
    //       if ((this.rowSelected.length + 1) == this.items.length) {
    //         this.selected = true;
    //       }
    //     }
    //     else {
    //       if (this.isCheckAsStatus != undefined) {
    //         if (this.items[index].hasOwnProperty(this.isCheckAsStatus.split("=")[0])) {
    //           this.items[index][this.isCheckAsStatus.split("=")[0]] = this.statusFalse
    //         }
    //       }
    //     }
    //   }
      
    //   this.$store.commit("setLevel", this.prop.PageLevel)
    //   this.$store.commit("setTab", this.prop.TabIndex)
    //   // this.$store.commit('setFormType',this.$parent.FormType)
    //   this.$parent.$parent.$parent.$parent.$parent.setTabIndex()
    // },
    // chkBoxInput() {
    //   // this.$store.commit('setCheckBoxClickCount', this.getRowSelectedCount())
    //   var datax = {
    //     pageLevel: this.prop.PageLevel,
    //     tabIndex: this.prop.TabIndex,
    //     checkBoxCount: this.getRowSelectedCount()
    //   }

    //   this.getToolbarAbsList().setCheckBoxClick(datax)
    // },
    // rowClicked: function(record, index) {
    //   if (this.isDisableTable || this.isProcess == true) return;
    //   if (this.rowSel != -1) {
    //     this.items[this.rowSel]["_rowVariant"] = "";
    //   }

    //   this.rowSel = index;
    //   this.items[index]["_rowVariant"] = "primary";
    //   this.$forceUpdate();

    //   this.$store.commit('SetPage' + this.prop.PageLevel + 'Data', record)
    //   // this.$store.commit('SetPage1Data', record)

    //   this.$emit("rowClicked", record, index)

    //   var datax = {
    //     pageLevel: this.prop.PageLevel,
    //     tabIndex: this.prop.TabIndex
    //   };

    //   this.getToolbarAbsList().unselectRowAfterRowClick(datax)
    // },
    // unselectRowClicked() {
    //   // alert('tayo')
    //   this.items[this.rowSel]["_rowVariant"] = "";
    //   this.$forceUpdate();
    // },
    // rowDblClicked: function(record, index) {
    //   if (this.isDisableTable) return;
    //   this.$emit("rowDblClicked", record, index);
    // },
    // rowLinkClick(url) {
    //   this.$emit("rowLinkClick", url);
    // },
    // resetSelected() {
    //   this.rowSelected = [0];
    //   this.selected = false;
    //   this.items[0]["_rowVariant"] = "primary";
    //   this.rowSel = 0;
    // },
    doGetList(search, method) {
      // this.checkOrderBy()
      // if (this.getIsCallBack()) {
      // } else if (this.getIsPopup() && method == 'eb_getList') {
      //   return
      // }
      // var data = {
      //   Event: method,
      //   PageLevel: this.prop.PageLevel,
      //   TabIndex: this.dataState.TabIndex
      // };

      // this.$store.commit("setEventStatus", method);
      // jika advance filter kosong '' maka kasih initial where aja
      // selainnya berarti inital where + advance filter
      // var temp =
      //   this.tempAdvanceFilter == ""
      //     ? this.prop.initialWhere
      //     : this.prop.initialWhere == "" ? this.prop.initialWhere + this.tempAdvanceFilter : this.prop.initialWhere + " AND " + this.tempAdvanceFilter;

      // if (method != undefined) {
      //   if (method == "save" || method == "update" || method == "refresh") {
      //     temp = this.prop.initialWhere
      //     this.sort = "TimeEdit DESC"
      //     this.perPage = 5
      //     this.currentPage = 1
      //     this.sortedField = []
      //   } else if (method == 'pageSize') {
      //     this.currentPage = 1
      //   }
      // }

      // if (this.formType == "Inquiry") {
      //   this.sort = ""
      // }

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.prop.LineNo,
        UserId: this.getDataUser().UserId,
        PortfolioCd: this.getDataUser().PortfolioCd,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        CurrentPage: this.currentPage,
        PerPage: this.perPage,
        // ParamWhere: this.search,
        ParamWhere: search,
        InitialWhere: temp,
        SortField: this.sort,
        SourceField: this.prop.SourceField,
        ParamView: this.prop.ParamView
      };

      // this.loader = true;
      this.postEncode(this.getUrlList(), param).then(response => {
        // this.loader = false;
        if (response == null) return;

        // this.selected = false;

        // this.rowSelected = [];

        // this.rowSel = 0;

        this.responses = response;

        // this.ExportToken = this.responses.ExportToken;

        // if (this.responses.Data.length > 0) {
        // }
        this.items = [];
        this.fields = [];

        this.items = this.responses.Data;

        // var str_array = this.responses.DefineColumn.split(",")
        // var defineSize = this.responses.DefineSize.split(",")
        // this.allColumn_bf = this.responses.AllColumn.split(",")
        // var index = this.allColumn_bf.indexOf('LastUpdateStamp')
        // if (index > -1) {
        //   this.allColumn_bf.splice(index, 1)
        // }
        // var allColumn = [];
        // var filteredColumn = [];
        // var definedColumn = [];

        // this.fields.push({
        //   value: 0,
        //   key: "chkBoxAction"
        // });

        // this.allColumn_bf.forEach((val, idx) => {
        //   var thClass = "ABSthClassList";
        //   var isSorted = this.sortedField.map(x => x.field).indexOf(val);
        //   if (isSorted > -1) {
        //     if (this.sortedField[isSorted].sort == "ASC") {
        //       thClass = thClass + " AscSorted";
        //     } else {
        //       thClass = thClass + " DescSorted";
        //     }
        //   }

        //   allColumn.push({
        //     value: idx + 1,
        //     key: val,
        //     thClass: thClass,
        //     tdClass: "ABStdClassList",
        //     text: val
        //   });

          // filteredColumn.push({
          //   value: idx + 1,
          //   key: val,
          //   thClass: thClass,
          //   tdClass: "ABStdClassList"
          // });
        // });

        // for (var i = 0; i < str_array.length; i++) {
        //   filteredColumn = filteredColumn.filter(val => {
        //     if (val.key == str_array[i]) {
        //       definedColumn.push({
        //         value: val.value,
        //         key: val.key,
        //         thClass: val.thClass,
        //         tdClass: val.tdClass,
        //         text: val.key
        //       });
        //     }

        //     return val.key != str_array[i];
        //   });

        //   var thClass = "ABSthClassList " + defineSize[i]

        //   var tdClass = 'ABStdClassList'
        //   if (str_array[i].toLowerCase().includes('amount') || str_array[i].toLowerCase().includes('amt') || str_array[i].toLowerCase().includes('rate')) {
        //     tdClass = 'ABStdClassList2'
        //     thClass = 'ABSthClassList2'
        //   }

        //   var isSorted = this.sortedField
        //     .map(x => x.field)
        //     .indexOf(str_array[i]);
        //   if (isSorted > -1) {
        //     if (this.sortedField[isSorted].sort == "ASC") {
        //       thClass = thClass + " AscSorted";
        //     } else {
        //       thClass = thClass + " DescSorted";
        //     }
        //   }
          
        //   if (this.languageStatus) {
        //     this.fields.push({
        //       value: i + 1,
        //       key: str_array[i],
        //       thClass: thClass,
        //       tdClass: tdClass,
        //       label: this.$t(str_array[i])
        //     });
        //   } else {
        //     var listReplace = [
        //       {
        //         key: 'Amt',
        //         value: ' Amount'
        //       },
        //       {
        //         key: 'Cd',
        //         value: ' Code'
        //       },
        //       {
        //         key: 'Descs',
        //         value: ' Description'
        //       },
        //       {
        //         key: 'TimeEdit',
        //         value: 'Last Update'
        //       },
        //     ]
        //     var isGotIt = false
        //     var labelHeader = undefined
        //     for (var data of listReplace) {
        //       if (str_array[i].includes(data.key)) {
        //         isGotIt = true
        //         labelHeader = str_array[i].replace(data.key, data.value)
        //         break
        //       }
        //     }
        //     if (isGotIt) {
        //       // str_array[i] = 'Last Update'
        //       this.fields.push({
        //         value: i + 1,
        //         key: str_array[i],
        //         thClass: thClass,
        //         tdClass: tdClass,
        //         label: labelHeader
        //       })
        //     } else {
        //       this.fields.push({
        //         value: i + 1,
        //         key: str_array[i],
        //         thClass: thClass,
        //         tdClass: tdClass
        //       })
        //     }
        //     // this.fields.push({
        //     //   value: i + 1,
        //     //   key: str_array[i],
        //     //   thClass: thClass,
        //     //   tdClass: tdClass
        //     // });
        //   }
        // }

        // this.availableColumn = filteredColumn;
        // this.selectedColumn = definedColumn;

        // this.availableColumnTemp = filteredColumn;
        // this.selectedColumnTemp = definedColumn;

        // this.availableColumnStatic = filteredColumn;
        // this.selectedColumnStatic = definedColumn;

        // this.totalRows = this.responses.Total;
        // this.lastPage = this.responses.Last_Page;


        // if (this.isCheckAsStatus != undefined) {
        //   var cInt = 1
        //   for (var i = 0; i < this.items.length; i++) {
        //     var d = this.isCheckAsStatus.split("=")[0]
        //     var dt = this.items[i][d]
        //     var value = this.isCheckAsStatus.split("=")[1]
        //     // if (this.items[i]._checked == 'Y') {
        //     if (dt.toString() == value) {
        //       this.rowSelected.push(i)
        //       cInt ++
        //     }

        //     if (cInt == this.items.length) {
        //       this.selected = true
        //     }
        //   }
        // }
      })

      // if (method != undefined) {
      //   var datax = {
      //     pageLevel: this.prop.PageLevel,
      //     tabIndex: this.prop.TabIndex
      //   };
      //   if (method.toUpperCase() == "REFRESH") {
      //     this.currentPage = 1;
      //     this.getToolbarAbsList().unselectRow(datax);
      //   } else if (method == "pageSize") {
      //     this.$emit("pageSize");
      //     this.getToolbarAbsList().unselectRow(datax);
      //   } else if (method == "pagination") {
      //     this.$emit("pagination");
      //     this.getToolbarAbsList().unselectRow(datax);
      //   } else if (method == "refresh_filter") {
      //     this.$emit("filter");
      //     this.getToolbarAbsList().unselectRow(datax);
      //   } else if (method == "headTable") {
      //     this.$emit("headTable");
      //     this.getToolbarAbsList().unselectRow(datax);
      //   } else if (method == "ONSEARCHENTER") {
      //     this.getToolbarAbsList().unselectRow(datax);
      //   } else if (method == "refresh_column") {
      //     this.$emit("refreshColumn");
      //   }
      // }
    }
  },
};
</script>