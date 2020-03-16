<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      @rowClicked = "$parent.rowClicked"
      @rowDblClicked = "$parent.doDoubleClick"
      @rowLinkClick = "$parent.rowLink"
      @pageSize = "$parent.M_PageSize"
      @pagination = "$parent.M_Pagination"
      @filter = "$parent.M_Advance_Filter"
      @headTable = "$parent.M_Head_Table"
      @refreshColumn = "$parent.refreshColumn"
    />

        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
          <div class="div-collapse" v-b-toggle.collapse1>
            <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
              Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
            </span>
          </div>
          <b-collapse id="collapse1" :visible="true">
            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
              <b-col md="12" id="col-left" class="bColMasterForm">	
                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                  <b-row style="padding-left:10px;">					
                    <b-col md="12" id="col-left"> <!-- table open -->
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_lotno" v-model="M_TN_LOOLotRentalAddendum.lotno" ref="ref_lotno" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_Gross_SemiGross_NetArea" v-model="M_TN_LOOLotRentalAddendum.Gross_SemiGross_NetArea" ref="ref_Gross_SemiGross_NetArea" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_BlockCd" v-model="M_TN_LOOLotRentalAddendum.blockcd" ref="ref_Block" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_FloorCd" v-model="M_TN_LOOLotRentalAddendum.floorcd" ref="ref_Floor" />
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
                    ref="ref_GridLooLotRental"
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
                    <b-col md="1" style="padding-left:15px !important;">
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
          total: [],
			    ValKey:null,
          FormType: "List",
			    Module:"TN",
            propList: {
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
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

            M_TN_LOOLotRentalAddendum : {
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
            PI_lotno: { 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_Gross_SemiGross_NetArea: {
                cLabel: 'Gross/Semi Gross/Net Area',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
            },
            PI_BlockCd: {
                cLabel: 'Block',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
            },
            PI_FloorCd: {
                cLabel: 'Floor',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
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
                comp: [
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
        this.recalculate()
      },
      recalculate () {
        this.$refs.ref_GridLooLotRental.recalculateTotal()
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

        // recalculate
        this.recalculate()
      },
      sumTotal (total) {
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
                this.FormType = "List"
                this.$store.commit('setFormType','List')
                this.getToolbar().ProcessPS()
            }
        }
        this.M_TN_LOOLotRentalAddendum.applicationno = data.ApplicationNo 
        this.propList.initialWhere ="SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + data.ApplicationNo + "' AND AddendumSequenceNo = '" + data.AddendumSequenceNo + "'"
    

        this.FormToABSList().doGetList('','eb_getList')
      },	       
      M_Insert() {
        },
        M_Update () {
          var dataUpdate = []
          var param1 = []

          var onLoop = 1
          for (let x = 0 ; x < this.dataDetail.length ; x ++) {
            param1.push({
              _Method_: 'UPDATE',
              _LineNo_: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.M_TN_LOOLotRentalAddendum.applicationno,
              ContractLotRentalLineNo: onLoop,
              RentalRate: this.replaceAllString(this.dataDetail[x].rentalrate, ',', ''),
              FreePeriod: this.dataDetail[x].freeperiod,
              UserEdit: this.getDataUser().UserId,
              ChangesLot: this.M_TN_LOOLotRentalAddendum.lotno
            })
            onLoop++
          }
          
          var param2 = {
            _Method_: 'UPDATE2',
            _LineNo_: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOLotRentalAddendum.applicationno,
            RentalRate: this.replaceAllString(this.M_TN_LOOLotRentalAddDays.rentalrate, ',', ''),
            UserEdit: this.getDataUser().UserId,
            ChangesLot: this.M_TN_LOOLotRentalAddendum.lotno
          }

          var param3 = {
            _Method_: 'UPDATE3',
            _LineNo_: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOLotRentalAddendum.applicationno,
            UserId: this.getDataUser().UserId,
            LotNo: this.M_TN_LOOLotRentalAddendum.lotno
          }

          dataUpdate.push({
            A_Looping: param1,
            B_Update: param2,
            C_Update: param3
          })

          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            Data: dataUpdate
          }
            
          this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
          .then(response => {
            if (response == null) return
              this.alertSuccess('Data Has Been Save Successfully')
              this.$store.commit('setListDisable', false)
              this.$store.commit('setStatus', 'view')
              this.getToolbar().setButton(false)

              // this.FormType = "List"
              // this.$store.commit('setFormType','List')
              // this.$parent.resultPost()
          })
        },
	  	  M_ClearForm(){
          this.M_TN_LOOLotRentalAddendum = {
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
            this.M_TN_LOOLotRentalAddendum.applicationno = data.ApplicationNo
        },
        M_Edit(){
        },
        getDataBy (record) {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            applicationno: record.ApplicationNo,
            AddendumSequenceNo: record.AddendumSequenceNo,
            lotno: record.LotNo
          }

          this.postEncode( this.getUrlById(), param )
          .then(response => {
            if(response == null) return

            var data = response.Data[0]
            this.M_TN_LOOLotRentalAddendum = {
              lotno: data.lotno,
              blockcd: data.blockcd,
              floorcd: data.floorcd,
              grossarea: this.isCurrency(data.grossarea, this.decimal),
              semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
              netarea: this.isCurrency(data.netarea, this.decimal),
              subportfoliocd: data.subportfoliocd,
              applicationno: data.applicationno,
              timeedit: data.timeedit,
              lastupdatestamp: record.LastUpdateStamp,
              rowid: this.isCurrency(data.rowid, this.decimal),
              Gross_SemiGross_NetArea: this.isCurrency(data.grossarea, this.decimal) + ' / ' + this.isCurrency(data.semigrossarea, this.decimal) + ' / ' + this.isCurrency(data.netarea, this.decimal)
            }

            this.IEBy.Input = data.userinput
            this.IEBy.Edit = data.useredit
            this.getDataBy2(record)
          })
        },
        getDataBy2 (record) {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            AddendumSequenceNo: record.AddendumSequenceNo,
            applicationno: record.ApplicationNo,
            lotno: record.LotNo
          }

          this.postEncode( this.getUrlById() + '2', param )
          .then(response => {
            if(response == null) return

            this.getDataBy3(record)

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
        getDataBy3 (record) {
          var parameter = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            AddendumSequenceNo: record.AddendumSequenceNo,
            applicationno: record.ApplicationNo,
            lotno: record.LotNo
          }

          this.param.propGetDataBy = parameter
          this.param.NoGetById = '3'
          this.$refs.ref_GridLooLotRental.doGetList('','eb_getList')
        }
    },
    created: function () {
      this.$store.commit('setFormType','List')
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

