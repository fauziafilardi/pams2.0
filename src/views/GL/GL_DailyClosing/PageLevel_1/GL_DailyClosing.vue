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
                  <!-- {{DataGrid}} -->
                  <!-- <b-row>
                    <b-col  md="6">
                      <b-row>
                        <b-col md="4" class="lbl-col-align" style="padding-left: 37px !important; text-align: left !important;">
                          <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Rental Rate</label>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row> -->
                  <ABSGrid
                    :prop="param"
                    :PageLevel="PageLevel"
                    :TabIndex="TabIndex"
                    v-model="DataGrid"
                    ref="ref_GridDailyClosing"
                  />
                  <!-- <ABSGrid
                    :prop="param"
                    @changeCheckbox="changeCheckbox"
                    @onBlur="onBlur"
                    @total="sumTotal"
                    :PageLevel="PageLevel"
                    :TabIndex="TabIndex"
                    v-model="dataDetail"
                    ref="ref_GridLooLotRental"
                  /> -->
                  <br />

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
			    ValKey:null,
          FormType: "View",
			    Module:"GL",
            IEBy: {Input: '', Edit: ''},
            PI_subTotalRentalRate: { 
                cValidate :'',
                cName: 'subTotalRentalRate', 
                cLabel: '',
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'decimal',
                cIsAlwaysShow: false,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cLabelValue: '',
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex ,
            }, 

            M_GL_DailyClosing : {
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
            M_GL_DailyClosingAddDays : {
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
            DataGrid: [],
            param: {
                cDisplayColumn: 'module,option,closingdate,currentopentransaction',
                comp: [
                  // {
                  //   slot: 'module',
                  //   compType: 'groupingLabel',
                  // },
                  {
                    slot: 'closingdate',
                    compType: 'ABSDateOnly',
                    cIsAlwaysShow: false,
                    cHideRowColumnCSS: true,
                    cValidate :'',
                    cName: 'closingdate',
                    cLabel: '',
                    cLabelSize: 4,
                    cOrder: 0,
                    cKey: false,
                    cType: '',
                    cVisible: true,
                    cProtect: false,
                    cFormat: 'dd/MM/yyyy',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cLabelValue: 'ClosingDate',
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                  }
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
      DataGrid (newData, oldData) {
        // if (newData.length > 0) {
        //   this.isEditMode = true
        // } else {
        //   this.isEditMode = false
        // }
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
      setToolbarButton () {
      },
      M_Head_Table () {
      },
      M_PageSize(){
      },
      M_TabClick(){
        // this.paramFromParent()
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
        // this.paramFromParent()
      },		
      doDoubleClick(){
      },
      rowClicked (record, index) {
      },
      rowLink: function(url){
        this.$refs.modalTest.show()
      },
		  paramFromParent(){
        
        
      },	       
      M_Insert() {
      },
      M_Update () {
        // var dataUpdate = []
        // console.log(this.DataGrid)
        // // for(var a = 0; a < this.DataGrid.length ; a ++){
          
        // // }
        var dataUpdate = []
        // console.log(this.DataGrid)
        // return
        for(var a = 0; a < this.DataGrid.length ; a ++){
          dataUpdate.push({
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            Module: this.DataGrid[a].module,
            OptionName: this.DataGrid[a].option,
            ClosingDate: this.DataGrid[a].closingdate && this.DataGrid[a].closingdate != '' ? this.DataGrid[a].closingdate : 'NULL',
            UserInput: this.getDataUser().UserId,
          })
        }

        if (this.DataGrid.length == 0) {
          return
        }

        var param = {
          OptionSeq: this.getOptionSeq().OptionSeq,
          LineNo: this.$parent.data.PageOrder,
          Data: dataUpdate
        }

        this.postJSONMulti(this.getUrlUpdateMulti(), param)
        .then((response) => {
          if(response == null) return
          this.alertSuccess("Data Has Been Saved Successfully")
          .then(res => {
            
            this.getDataBy()
          })
        })
      },
      M_ClearForm(){
        this.M_GL_DailyClosing = {
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
            this.M_GL_DailyClosing.applicationno = data.ApplicationNo
        },
        M_Edit(){
        },
        getDataBy () {
          var parameter = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            FilterByLevel: ''
          }

          this.param.propGetDataBy = parameter
          this.param.NoGetById = ''
          this.$refs.ref_GridDailyClosing.doGetList('','eb_getList')
        }
    },
    created: function () {
      this.$store.commit('setFormType','Form')
    },
    beforeMount: function() {
    },
    mounted: function() {
      this.getDataBy()
      this.FormType = "Form"
      this.$store.commit('setFormType','Form')
      this.getToolbar().FormStatus = 'EDIT'
      this.getToolbar().ProcessPS()
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