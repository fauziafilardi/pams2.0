<template>
    <div>
      <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
          <div class="div-collapse" v-b-toggle.collapse1>
            <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
              Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
            </span>
          </div>
          <b-collapse id="collapse1" :visible="true">
            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
              <b-col md="12" id="col-left" class="bColMasterForm">	
                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                  <b-row>
                    <b-col  md="6">
                      <b-row>
                        <b-col md="4" class="lbl-col-align" style="padding-left: 37px !important; text-align: left !important;">
                          <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Rental Rate</label>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <ABSGrid
                    :prop="param"
                    @changeCheckbox="changeCheckbox"
                    @onBlur="onBlur"
                    @total="sumTotal"
                    :PageLevel="PageLevel"
                    :TabIndex="TabIndex"
                    v-model="dataDetail"
                    ref="ref_GridLooRental"
                  />
                  <br />
                  <b-row style="padding-left:10px;">
                    <b-col offset="10">
                      Sub Total
                    </b-col>
                    <b-col style="text-align:right; padding-right: 26px !important;">
                      {{subTotal}}
                    </b-col>
                  </b-row>
                  <b-row style="padding-top: 10px; padding-left:10px;">
                    <b-col md="1" style="padding-left:10px !important;">
                      Add. Days
                    </b-col>
                    <b-col md="2" style="text-align:right; padding-right: 4px !important;">
                      {{M_TN_LOOLotRentalAddDays.leaseperiod}}
                    </b-col>
                    <b-col md="3" style="text-align:right; padding-right: 46px !important;">
                      {{M_TN_LOOLotRentalAddDays.area}}
                    </b-col>
                    <b-col md="3" style="text-align:right; padding-right: 57px !important;">
                      <ABSTextBoxOnly
                        :prop="PI_subTotalRentalRate"
                        v-model="M_TN_LOOLotRentalAddDays.rentalrate"
                        @onBlur="onBlurAddDays()"
                      />
                    </b-col>
                    <b-col md="3" style="text-align:right; padding-right: 26px !important;">
                      {{M_TN_LOOLotRentalAddDays.totalbaserent}}
                    </b-col>
                  </b-row>
                  <b-row style="padding-left:10px;">
                    <b-col offset="11" style="padding-right: 26px !important">
                      <hr /> 
                    </b-col>
                  </b-row>
                  <b-row style="padding-left:10px;">
                    <b-col offset="10">
                      Grand Total
                    </b-col>
                    <b-col style="text-align:right; padding-right: 26px !important;">
                      {{total}}
                    </b-col>
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
          subTotal: '',
          isEditMode: false,
          isEditModePeriodDays: false,
          total: [],
			    ValKey:null,
          FormType: "Form",
			    Module:"TN",
            IEBy: {Input: '', Edit: ''},
            PI_subTotalRentalRate: { 
                cValidate :'',
                cName: 'subTotalRentalRate', 
                cLabel: '',
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 

            M_TN_LOOLotRental : {
                lotno: '',
                blockcd: '',
                floorcd: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0,
                Gross_SemiGross_NetArea: 0
            },
            M_TN_LOOLotRentalAddDays : {
              antenna: '',
              area: '',
              fixcharges: '',
              lastupdatestamp: 0,
              leaseperiod: '',
              originalrate: '',
              recommendationrate: '',
              rentalrate: '',
              totalbaserent: ''
            },
            dataDetail: [],
            param: {
                // propList: {
                //     initialWhere:"",
                //     LineNo: this.$parent.data.PageOrder,
                //     PageLevel: this.PageLevel,
                //     TabIndex: this.TabIndex, 
                //     OrderBy: '', 
                //     SourceField: '', 
                //     ParamView: '' 
                // },
                cDisplayColumn: 'leaseperiod=decimal,area=decimal,rentalrate=decimal,freeperiod,totalbaserent=decimal',
                cTotalColumn: 'totalbaserent',
                showCheckBoxDelete: false,
                showNumber: true,
                divStyle: '185',
                comp: [
                    {
                        slot: 'leaseperiod',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'leaseperiod', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    },
                    {
                        slot: 'rentalrate',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'rentalrate', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    },
                    {
                        slot: 'freeperiod',
                        compType: 'ABSinputCheckBoxOnly',
                        cValidate :'',
                        cName: 'freeperiod',
                        cLabel: '',
                        cLabelSize: 4,
                        cOptions: [{text:'', value: 'Y'}],
                        cOrder: 0,
                        cKey: false,
                        cVisible: true,
                        cProtect: false,
                        cDefault: '',
                        cPageLevel: this.PageLevel,
                        cTabIndex: this.TabIndex,
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cHideRowColumnCSS: true
                    },
                    // {
                    //     slot: 'CheckBoxCustom',
                    //     compType: 'CheckBoxCustom'
                    // }
                ]
            },
            PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            }         
        }
    },
    watch : {
      dataDetail (newData, oldData) {
        if (newData.length > 0) {
          this.isEditMode = true
        } else {
          this.isEditMode = false
        }
      }
    },
	computed : {
    inputStatus() {
      if (this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
        return this.$store.getters.getStatus.toUpperCase()
      }
      else {
        return 'VIEW'
      }
    },
	DataRow(){
		return this.$store.getters.GetPage2Data
	},
  DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      onBlurAddDays () {
        // this.M_TN_LOOLotRentalAddDays.rentalrate
        this.recalculate()
      },
      recalculate () {
        this.$refs.ref_GridLooRental.recalculateTotal()
      },
      // changeTextField () {

      // },
      onBlur (index) {
        var isChecked = this.dataDetail[index].freeperiod
        this.changeCheckbox(index, isChecked)
      },
      changeCheckbox (index, isChecked) {
        if (isChecked == 'Y') {
          this.dataDetail[index].totalbaserent = '0.00'
        } else if (this.dataDetail[index].antenna == 'N' && this.dataDetail[index].fixcharges == 'Y') {
          this.dataDetail[index].totalbaserent = parseFloat(this.dataDetail[index].leaseperiod, this.decimal) * parseFloat(this.replaceAllString(this.dataDetail[index].rentalrate, ',', ''), this.decimal)
        } else {
          this.dataDetail[index].totalbaserent = parseFloat(this.dataDetail[index].leaseperiod, this.decimal) * parseFloat(this.replaceAllString(this.dataDetail[index].rentalrate, ',', ''), this.decimal) * parseFloat(this.replaceAllString(this.dataDetail[index].area, ',', ''), this.decimal)
        }
        this.dataDetail[index].totalbaserent = this.isCurrency(this.dataDetail[index].totalbaserent, this.decimal).toString()

        // set data to absGrid
        this.$refs.ref_GridLooRental.items = this.dataDetail
        
        // recalculate
        this.recalculate()
      },
      sumTotal(total) {
        var grandTotal
        if (total.length > 0) {
          var ttl = this.replaceAllString(total[0].toString(), ',', '')

          this.M_TN_LOOLotRentalAddDays.rentalrate = this.replaceAllString(this.M_TN_LOOLotRentalAddDays.rentalrate, ',', '')
          if (this.M_TN_LOOLotRentalAddDays.antenna == 'N' && this.M_TN_LOOLotRentalAddDays.fixcharges == 'Y') {
            this.M_TN_LOOLotRentalAddDays.totalbaserent = parseFloat(this.M_TN_LOOLotRentalAddDays.leaseperiod, this.decimal) * parseFloat(this.M_TN_LOOLotRentalAddDays.rentalrate, this.decimal)
          } else {
            this.M_TN_LOOLotRentalAddDays.totalbaserent = parseFloat(this.M_TN_LOOLotRentalAddDays.leaseperiod, this.decimal) * parseFloat(this.M_TN_LOOLotRentalAddDays.rentalrate, this.decimal) * parseFloat(this.M_TN_LOOLotRentalAddDays.area, this.decimal)
          }

          grandTotal = parseFloat(ttl, this.decimal) + parseFloat(this.M_TN_LOOLotRentalAddDays.totalbaserent, this.decimal)
          this.M_TN_LOOLotRentalAddDays.totalbaserent = this.isCurrency(this.M_TN_LOOLotRentalAddDays.totalbaserent, this.decimal)
          this.M_TN_LOOLotRentalAddDays.rentalrate = this.isCurrency(this.M_TN_LOOLotRentalAddDays.rentalrate, this.decimal)
          this.subTotal = this.isCurrency(ttl, this.decimal)
          this.total = this.isCurrency(grandTotal, this.decimal)
        } else {
          this.subTotal = 0.00
          this.total = 0.00
        }
      },
      setToolbarButton () {
      },
      M_Head_Table () {
      },
      M_PageSize(){
      },
      M_TabClick(){
        // this.getDataBy(this.$store.getters.GetPage1Data)
        this.paramFromParent()
      },
      M_Pagination(){
      },
      M_Advance_Filter(){
      },
      M_Search(data){
      },
      M_Refresh(){
      },
      M_Cancel() {
        this.paramFromParent()
      },		
      doDoubleClick(){
      },
      rowClicked (record, index) {
      },
      rowLink: function(url){
        this.$refs.modalTest.show()
      },
		  paramFromParent(){
        this.$parent.showForm = false
  
        let data = this.$store.getters.GetPage1Data
        if (this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
            if (
                    (data.Status != 'A' && data.ContractStatus != 1) ||
                    (data.Status != 'N' && data.ContractStatus != 1) ||
                    (data.Status == 'C') ||
                    (data.Status == 'X')
            ) {
                this.FormType = "View"
                this.$store.commit('setFormType','View')
                this.getToolbar().ProcessPS()
            }
            else {
                this.FormType = "Form"
                this.$store.commit('setFormType','Form')
                this.getToolbar().FormStatus = 'EDIT'
                this.getToolbar().ProcessPS()
                // this.getToolbar().doEdit(true)
                // this.getToolbar().isNew = true
                // this.getToolbar().statusFunction[6].disabled = true
            }
        }
        this.M_TN_LOOLotRental.applicationno = data.ApplicationNo 
        // this.propList.initialWhere =" ApplicationNo = '" + data.ApplicationNo + "' "
    

        // this.FormToABSList().doGetList('','eb_getList')
        this.getDataBy(data)
      },	       
      M_Insert() {
      },
      M_Update () {
        var dataUpdate = []
        var param1 = []

        var onLoop = 1

        for (let x = 0 ; x < this.dataDetail.length ; x ++) {
          param1.push({
            _LineNo_: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOLotRental.applicationno,
            ContractRentalLineNo: onLoop,
            LeasePeriod: this.replaceAllString(this.dataDetail[x].leaseperiod, ',', ''),
            RentalRate: this.replaceAllString(this.dataDetail[x].rentalrate, ',', ''),
            FreePeriod: this.replaceAllString(this.dataDetail[x].freeperiod, ',', '')
          })

          if (!this.isEditMode) {
            param1[x]._Method_ = 'INSERT',
            param1[x].UserInput = this.getDataUser().UserId
          } else {
            param1[x]._Method_ = 'UPDATE',
            param1[x].OriginalRate = this.dataDetail[x].originalrate
            param1[x].RecommendationRate = this.dataDetail[x].recommendationrate
            param1[x].UserEdit = this.getDataUser().UserId
          }

          onLoop++
        }
        
        var param2 = {
          _LineNo_: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOLotRental.applicationno,
          LeasePeriod: this.replaceAllString(this.M_TN_LOOLotRentalAddDays.leaseperiod, ',', ''),
          RentalRate: this.replaceAllString(this.M_TN_LOOLotRentalAddDays.rentalrate, ',', '')
        }
        if (!this.isEditModePeriodDays) {
          param2._Method_ = 'INSERT2'
          param2.UserInput = this.getDataUser().UserId
        } else {
          param2._Method_ = 'UPDATE2'
          param2.OriginalRate = this.replaceAllString(this.M_TN_LOOLotRentalAddDays.originalrate, ',', ''),
          param2.RecommendationRate = this.replaceAllString(this.M_TN_LOOLotRentalAddDays.recommendationrate, ',', ''),
          param2.UserEdit = this.getDataUser().UserId
        }

        var param3 = {
          _Method_: 'UPDATE3',
          _LineNo_: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOLotRental.applicationno,
          UserId: this.getDataUser().UserId
        }

        var param4 = {
          _Method_: 'UPDATE4',
          _LineNo_: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOLotRental.applicationno,
        }

        var param5 = {
          _Method_: 'UPDATE5',
          _LineNo_: this.$parent.data.PageOrder,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOLotRental.applicationno,
          UserId: this.getDataUser().UserId,
        }

        dataUpdate.push({
          A_Looping: param1,
          B_Update: param2,
          C_Update: param3,
          D_Update: param4,
          E_Update: param5
        })

        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          Data: dataUpdate
        }
          
        this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
        .then(response => {
          if (response == null) return

          var msg = ' Rental Rate success.'
          if (this.isEditMode) {
            msg = 'Update' + msg
          } else {
            msg = 'Insert' + msg
          }
          this.alertSuccess(msg)
          this.$store.commit('setListDisable', false)
          this.$store.commit('setStatus', 'view')
          this.getToolbar().setButton(false)
        })
      },
      M_ClearForm(){
        this.M_TN_LOOLotRental = {
            lotno: '',
            blockcd: '',
            floorcd: '',
            grossarea: 0,
            semigrossarea: 0,
            netarea: 0,
            subportfoliocd: this.getDataUser().SubPortfolioCd,
            applicationno: '',
            timeedit: '',
            lastupdatestamp: 0,
            rowid: 0
        }
		  },
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LOOLotRental.applicationno = data.ApplicationNo
        },
        M_Edit(){
        },
        getDataBy (record) {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            applicationno: record.ApplicationNo
          }

          this.postEncode( this.getUrlById(), param )
          .then(response => {
            if (response == null) return

            if (response.Data.length > 0) {
              this.isEditModePeriodDays = true
            } else {
              this.isEditModePeriodDays = false
            }

            this.getDataBy2(record)

            var data = response.Data[0]
            
            this.M_TN_LOOLotRentalAddDays = {
              antenna: data.antenna,
              area: this.isCurrency(data.area, this.decimal),
              fixcharges: data.fixcharges,
              lastupdatestamp: data.lastupdatestamp,
              leaseperiod: this.isCurrency(data.leaseperiod, this.decimal),
              originalrate: data.originalrate,
              recommendationrate: data.recommendationrate,
              rentalrate: this.isCurrency(data.rentalrate, this.decimal),
              totalbaserent: this.isCurrency(data.totalbaserent, this.decimal)
            }

          })
        },
        getDataBy2 (record) {
          var parameter = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            applicationno: record.ApplicationNo
          }

          this.param.propGetDataBy = parameter
          this.param.NoGetById = '2'
          this.$refs.ref_GridLooRental.doGetList('','eb_getList')
        }
    },
    created: function () {
      this.$store.commit('setFormType','Form')
    },
    beforeMount: function() {
    },
    mounted: function() {
      this.hideSideBarMenu()
    },
    beforeUpdate: function() {
    },
    updated: function() {
    },
    beforeDestroy: function() {
    },
    destroyed: function() {
    }
}
</script>