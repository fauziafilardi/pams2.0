<template>
    <div>        


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
                  <ABSGrid
                    :prop="PI_grid"
                    @changeCheckbox="changeCheckbox"
                    @onBlur="onBlur"
                    @total="sumTotal"
                    :PageLevel="PageLevel"
                    :TabIndex="TabIndex"
                    v-model="datagrid"
                    ref="ref_GridAssetEnhancementRental"
                  />
                  <br>
                  <b-row style="padding-left:10px;">
                    <b-col offset=3 md=3 style="font-weight:bold;">
                      Total
                    </b-col>
                    <b-col md=2 style="font-weight:bold; text-align:right; padding-right: 41px !important;">
                    <!-- <b-col style="text-align:right; padding-right: 26px !important;"> -->
                      {{totalRental}}
                    </b-col>
                    <b-col offset=2 md=2 style="font-weight:bold; text-align:right; padding-right: 26px !important;">
                    <!-- <b-col style="text-align:right; padding-right: 26px !important;"> -->
                      {{totalPropose}}
                    </b-col>
                  </b-row>
                  <b-row style="padding-left:10px;">
                    <b-col offset=3 md=3 style="font-weight:bold;">
                      Investment/Capex Future Value (Rp)
                    </b-col>
                    <b-col md=2 style="font-weight:bold; text-align:right; padding-right: 41px !important;">
                    <!-- <b-col style="text-align:right; padding-right: 26px !important;"> -->
                      {{investment}}
                      <!-- {{isCurrency(investment,decimal)}} -->
                    </b-col>
                  </b-row>
                  <b-row style="padding-left:10px;">
                    <b-col offset=3 md=3 style="font-weight:bold;"> 
                      Total + Investment
                    </b-col>
                    <b-col md=2 style="font-weight:bold; text-align:right; padding-right: 41px !important;">
                    <!-- <b-col style="text-align:right; padding-right: 26px !important;"> -->
                      {{isCurrency(invesmenttotal, decimal)}}
                    </b-col>
                    <b-col offset=2 md=2 style="font-weight:bold; text-align:right; padding-right: 26px !important;">
                    <!-- <b-col style="text-align:right; padding-right: 26px !important;"> -->
                      <span style="color:red" v-if="comparison <= 0">{{isCurrency(comparison, decimal)}}</span>
                      <span v-else>{{isCurrency(comparison, decimal)}}</span>
                    </b-col>
                  </b-row>
                </b-col> <!-- table close -->
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
			ValKey:null,
            FormType: "Grid",
			Module:"TN",
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_AssetEnhancementRental :{
              assetenhancementno: '',
              assetenhancementdate: '',
              lotno: '',
              investmentamt: 0,
              interestamt: 0,
              applicationno: '',
              userinput: '',
              useredit: this.getDataUser().UserId,
              applicationname: '',
              subportfoliocd: this.getDataUser().SubPortfolioCd,
              lastupdatestamp: 0,
              rowid: 0
            },
            datagrid: [],
            isEditMode: false,
            totalRental: 0.00,
            totalPropose: 0.00,
            totalPeriod: 0,
            invesmenttotal: 0.00,
            comparison: 0.00,
            PI_grid: {
              propList: null,
              cDisplayColumn: 'leaseperiod,area=decimal,rentalrate=decimal,totalbaserent=decimal,proposerentalrate=decimal,proposerevenue=decimal',
              cTotalColumn: 'leaseperiod,totalbaserent,proposerevenue',
              isShowCheckBoxDelete: false,
              showNumber: true,
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
                  cType: 'numeric',
                  cVisible: true, 
                  cProtect: true, 
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
                  cProtect: true, 
                  cPageLevel: this.PageLevel, 
                  cTabIndex: this.TabIndex, 
                  cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                },
                {
                  slot: 'proposerentalrate',
                  compType: 'ABSTextBoxOnly',
                  cIsAlwaysShow: false,
                  cHideRowColumnCSS: true,
                  cValidate :'', 
                  cName: 'proposerentalrate', 
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
                }
              ],
              propGetDataBy: null,
              NoGetById: ''
            },

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
            }         
        }
    },
    watch : {
      datagrid (newData, oldData) {
        if (newData.length > 0) {
          this.isEditMode = true
        } else {
          this.isEditMode = false
        }
      }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
		sumTotal(total) {
      // console.log(total)
      this.totalPeriod = parseInt(total[0])
      var investmentamt = this.replaceAllString(this.DataRowPage1.InvestmentAmt, ',', '', 'number')
      var interestamt = this.replaceAllString(this.DataRowPage1.InterestAmt, ',', '', 'number')

      var investment = investmentamt * Math.pow((1+(interestamt/100/12)), parseInt(total[0]))
      this.investment = this.isCurrency(investment, this.decimal)
      
      this.totalRental = total[1]
      this.totalPropose = total[2]

      this.CalculateTotalBaseRent(total[1], total[2])

      // this.invesmenttotal = parseFloat(this.replaceAllString(total[1], ',', '', 'number')) + this.investment
      // this.comparison = parseFloat(this.replaceAllString(total[2], ',', '', 'number')) - this.invesmenttotal
    },
    onBlur(index) {
      // console.log(index)
      // this.CalculateTotalBaseRent(total[1], total[2])
      if (this.inputStatus == 'EDIT') {
        // console.log(this.datagrid[index])
        var period = parseInt(this.datagrid[index].leaseperiod)
        var rate = parseFloat(this.replaceAllString(this.datagrid[index].rentalrate, ',', '', 'number'))
        var area = parseFloat(this.replaceAllString(this.datagrid[index].area, ',', '', 'number'))
        var propose = parseFloat(this.replaceAllString(this.datagrid[index].proposerentalrate, ',', '', 'number'))
        // console.log(period * area * propose)

        var proposerevenue = period * area * propose
        this.datagrid[index].proposerevenue = this.isCurrency(proposerevenue, this.decimal)
        this.$refs.ref_GridAssetEnhancementRental.items = this.datagrid
        this.$refs.ref_GridAssetEnhancementRental.recalculateTotal()
      }
    },
    changeCheckbox(index, isChecked) {
    },
    CalculateTotalBaseRent(totalbaserent, totalproposerent) {
      this.invesmenttotal = parseFloat(this.replaceAllString(totalbaserent, ',', '', 'number')) + parseFloat(this.replaceAllString(this.investment, ',', '', 'number'))
      this.comparison = parseFloat(this.replaceAllString(totalproposerent, ',', '', 'number')) - parseFloat(this.replaceAllString(this.invesmenttotal, ',', '', 'number'))
    },
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
		},
        M_Head_Table () {
        },
        M_PageSize(){
        },
        M_TabClick(){
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
          this.$parent.showForm = true
          var data = this.$store.getters.GetPage1Data
          this.investment = data.InvestmentAmt

          var paramGrid = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            AssetEnhancementNo: data.AssetEnhancementNo
          }

          this.PI_grid.propGetDataBy = paramGrid
          this.PI_grid.NoGetById = ''
          this.$refs.ref_GridAssetEnhancementRental.doGetList('','eb_getList')

          // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
            // this.getToolbar().doEdit(true)
            this.getToolbar().FormStatus = 'EDIT'
            this.getToolbar().ProcessPS()
          // }
        },
        M_Insert() {
          var dataPost = []

          for (let x = 0 ; x < this.datagrid.length ; x ++) {
            dataPost.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              AssetEnhancementNo: this.DataRowPage1.AssetEnhancementNo,
              EnhancementRentalLineNo: (x+1),
              LeasePeriod: this.datagrid[x].leaseperiod,
              RentalRate: this.datagrid[x].rentalrate,
              ProposeRate: this.datagrid[x].proposerentalrate,
              UserInput: this.getDataUser().UserId
            })
          }

          var param = {			
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            Data: dataPost
          }

          this.postJSON(this.getUrlInsertMulti(), param)
          .then((response) => {
            if(response == null) return
            this.alertSuccess('Data Has Been Save Successfully')
            this.$store.commit('setListDisable', false)
            this.$store.commit('setStatus', 'view')
            this.getToolbar().setButton(false)
            this.paramFromParent()
          })
        },
        M_Update() {
          if (this.isEditMode) {
            var dataPost = []

            for (let x = 0 ; x < this.datagrid.length ; x ++) {
              dataPost.push({
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AssetEnhancementNo: this.DataRowPage1.AssetEnhancementNo,
                EnhancementRentalLineNo: (x+1),
                LeasePeriod: this.datagrid[x].leaseperiod,
                RentalRate: this.datagrid[x].rentalrate,
                ProposeRate: this.datagrid[x].proposerentalrate,
                OriginalRate: this.datagrid[x].originalrate,
                RecommendationRate: this.datagrid[x].recommendationrate,
                UserEdit: this.getDataUser().UserId
              })
            }

            var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              Data: dataPost
            }

            this.postJSON(this.getUrlUpdateMulti(), param)
            .then((response) => {
              if(response == null) return
              this.alertSuccess('Data Has Been Save Successfully')
              this.$store.commit('setListDisable', false)
              this.$store.commit('setStatus', 'view')
              this.getToolbar().setButton(false)
              this.paramFromParent()
            })
          }
          else {
            this.M_Insert()
          }
        },
		M_ClearForm(){
            this.M_TN_AssetEnhancementRental = {
                assetenhancementno: '',
                assetenhancementdate: '',
                lotno: '',
                investmentamt: 0,
                interestamt: 0,
                applicationno: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                applicationname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){



        },
        M_Edit(){
          // console.log(this.datagrid)
          // console.log(this.$refs.ref_GridAssetEnhancementRental.$refs['gridTextBox0'].prop)
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_AssetEnhancementRental = {
                assetenhancementno: data.assetenhancementno,
                assetenhancementdate: data.assetenhancementdate,
                lotno: data.lotno,
                investmentamt: this.isCurrency(data.investmentamt, this.decimal),
                interestamt: this.isCurrency(data.interestamt, this.decimal),
                applicationno: data.applicationno,
                userinput: data.userinput,
                useredit: data.useredit,
                applicationname: data.applicationname,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    created: function() {
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

