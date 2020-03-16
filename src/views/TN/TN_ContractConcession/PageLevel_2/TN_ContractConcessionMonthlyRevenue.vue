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
                                        <ABSCompute :prop="PI_lotno" v-model="M_TN_ContractConcessionMonthlyRevenue.lotno"  ref="ref_lotno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_fromdate" :valueFrom="M_TN_ContractConcessionMonthlyRevenue.fromdate" :valueTo="M_TN_ContractConcessionMonthlyRevenue.todate" ref="ref_fromdate" @from="MdtRange_fromdate" @to="MdtRange_todate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revenueamt" v-model="M_TN_ContractConcessionMonthlyRevenue.revenueamt"  ref="ref_revenueamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_TN_ContractConcessionMonthlyRevenue.discountamt"  ref="ref_discountamt"/>
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
            DataRow: null,
			ValKey:null,
            FormType: "View",
			Module:"TN",
            propList: {
                // initialWhere:"ConcessionSequenceNo = '" + this.ValKey + "'",
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractConcessionMonthlyRevenue :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                lotmonthlyrevenuesequenceno: 0,
                lotno: '',
                revenueamt: '0',
                revenuemonth: 0,
                fromdate: '',
                revenueyear: 0,
                discountamt: '0',
                timeedit: '',
                lastupdatestamp: 0,
                todate: '',
                rowid: 0
                    }
            ,
            PI_lotno: { 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_fromdate: { 
                cValidate :'', 
                cName: 'fromdate', 
                cLabel: 'Montly Revenue Date From - To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revenueamt: { 
                cValidate :'', 
                cName: 'revenueamt', 
                cLabel: 'Revenue Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
  },
    methods: {
		
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[2].disabled = true
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
            this.DataRow = data
            console.log(this.DataRow)
            // this.M_TN_ContractConcessionMonthlyRevenue.concessionsequenceno = data.ConcessionSequenceNo 
            this.M_TN_ContractConcessionMonthlyRevenue.applicationno = this.DataRow.ApplicationNo 
            this.propList.initialWhere ="SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ApplicationNo = '" + this.DataRow.ApplicationNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractConcessionMonthlyRevenue.applicationno,
                LotMonthlyRevenueSequenceNo: this.M_TN_ContractConcessionMonthlyRevenue.lotmonthlyrevenuesequenceno,
                DiscountAmt: this.M_TN_ContractConcessionMonthlyRevenue.discountamt,
                UserEdit: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractConcessionMonthlyRevenue = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                lotmonthlyrevenuesequenceno: 0,
                lotno: '',
                revenueamt: '0',
                revenuemonth: 0,
                fromdate: '',
                revenueyear: 0,
                discountamt: '0',
                timeedit: '',
                lastupdatestamp: 0,
                todate: '',
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractConcessionMonthlyRevenue.concessionsequenceno = data.ConcessionSequenceNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({


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

                this.$parent.resultPost()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                lotmonthlyrevenuesequenceno: record.LotMonthlyRevenueSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractConcessionMonthlyRevenue = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                lotmonthlyrevenuesequenceno: data.lotmonthlyrevenuesequenceno,
                lotno: data.lotno,
                revenueamt: this.isCurrency(data.revenueamt, this.decimal),
                revenuemonth: this.isCurrency(data.revenuemonth, this.decimal),
                fromdate: data.fromdate,
                revenueyear: this.isCurrency(data.revenueyear, this.decimal),
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                todate: data.todate,
                rowid: data.rowid
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_fromdate (data) {
            this.M_TN_ContractConcessionMonthlyRevenue.fromdate = data
        }
        ,MdtRange_todate (data) {
            this.M_TN_ContractConcessionMonthlyRevenue.todate = data
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

