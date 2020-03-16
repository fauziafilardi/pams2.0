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
                                        <ABSCompute :prop="PI_creditdate" v-model="M_AR_AmortizeScheduleCredit_InQuiry.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_revenuemonth" v-model="M_AR_AmortizeScheduleCredit_InQuiry.revenuemonth"  ref="ref_revenuemonth" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_revenueyear" v-model="M_AR_AmortizeScheduleCredit_InQuiry.revenueyear"  ref="ref_revenueyear" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_cncurrency" v-model="M_AR_AmortizeScheduleCredit_InQuiry.cncurrency"  ref="ref_cncurrency" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_AR_AmortizeScheduleCredit_InQuiry.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitno" v-model="M_AR_AmortizeScheduleCredit_InQuiry.debitno"  ref="ref_debitno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_allocatedamt" v-model="M_AR_AmortizeScheduleCredit_InQuiry.allocatedamt"  ref="ref_allocatedamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_allocatedamt" v-model="M_AR_AmortizeScheduleCredit_InQuiry.allocatedamt"  ref="ref_allocatedamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_witholdingamt" v-model="M_AR_AmortizeScheduleCredit_InQuiry.witholdingamt"  ref="ref_witholdingamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_witholdingamt" v-model="M_AR_AmortizeScheduleCredit_InQuiry.witholdingamt"  ref="ref_witholdingamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_creditno" v-model="M_AR_AmortizeScheduleCredit_InQuiry.creditno"  ref="ref_creditno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_AmortizeScheduleCredit_InQuiry.status"  ref="ref_status" />
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
            FormType: "View",
			Module:"AR",
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

            M_AR_AmortizeScheduleCredit_InQuiry :{
                revenuesequenceno: 0,
                revenuedebitallocdetailseqnno: 0,
                debitsequenceno: 0,
                amortizesequenceno: 0,
                allocatedamt: '',
                witholdingamt: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                revenuemonth: 0,
                revenueyear: 0,
                currencycd: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                invoicehdesc: '',
                invoiceddesc: '',
                netamt: '',
                invoicecurrency: '',
                taxcd: '',
                creditallocsequenceno: 0,
                revenuecreditallocdetailseqnno: 0,
                cnallocatedamt: '',
                cnwitholdingamt: '',
                creditdate: '',
                descs: '',
                cncurrency: '',
                creditamt: '',
                status: '',
                debitallocsequenceno: 0,
                creditno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_creditdate: { 
                cLabel: 'Credit Date ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_revenuemonth: { 
                cLabel: 'Month', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_revenueyear: { 
                cLabel: 'Year', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_cncurrency: { 
                cLabel: 'CN Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_creditamt: { 
                cLabel: 'Credit Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                cLabel: 'Debit No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_allocatedamt: { 
                cLabel: 'Debit Allocated Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_allocatedamt: { 
                cLabel: 'CN Allocated Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_witholdingamt: { 
                cLabel: 'CN Witholding Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_witholdingamt: { 
                cLabel: 'Debit Witholding Amount ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_creditno: { 
                cLabel: 'Credit No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
           //this.getToolbar().statusFunction[4].disabled = false
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
            this.M_AR_AmortizeScheduleCredit_InQuiry.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + data.ApplicationNo + "' "
        

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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AR_AmortizeScheduleCredit_InQuiry = {
                revenuesequenceno: 0,
                revenuedebitallocdetailseqnno: 0,
                debitsequenceno: 0,
                amortizesequenceno: 0,
                allocatedamt: '',
                witholdingamt: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                revenuemonth: 0,
                revenueyear: 0,
                currencycd: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                invoicehdesc: '',
                invoiceddesc: '',
                netamt: '',
                invoicecurrency: '',
                taxcd: '',
                creditallocsequenceno: 0,
                revenuecreditallocdetailseqnno: 0,
                cnallocatedamt: '',
                cnwitholdingamt: '',
                creditdate: '',
                descs: '',
                cncurrency: '',
                creditamt: '',
                status: '',
                debitallocsequenceno: 0,
                creditno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_AmortizeScheduleCredit_InQuiry.applicationno = data.ApplicationNo 



        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                revenuesequenceno: record.RevenueSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AR_AmortizeScheduleCredit_InQuiry = {
                revenuesequenceno: data.revenuesequenceno,
                revenuedebitallocdetailseqnno: data.revenuedebitallocdetailseqnno,
                debitsequenceno: data.debitsequenceno,
                amortizesequenceno: data.amortizesequenceno,
                allocatedamt: data.allocatedamt,
                witholdingamt: data.witholdingamt,
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                revenuemonth: data.revenuemonth,
                revenueyear: data.revenueyear,
                currencycd: data.currencycd,
                debitno: data.debitno,
                debitdate: data.debitdate,
                journaldate: data.journaldate,
                invoicehdesc: data.invoicehdesc,
                invoiceddesc: data.invoiceddesc,
                netamt: data.netamt,
                invoicecurrency: data.invoicecurrency,
                taxcd: data.taxcd,
                creditallocsequenceno: data.creditallocsequenceno,
                revenuecreditallocdetailseqnno: data.revenuecreditallocdetailseqnno,
                cnallocatedamt: data.cnallocatedamt,
                cnwitholdingamt: data.cnwitholdingamt,
                creditdate: data.creditdate,
                descs: data.descs,
                cncurrency: data.cncurrency,
                creditamt: data.creditamt,
                status: data.status,
                debitallocsequenceno: data.debitallocsequenceno,
                creditno: data.creditno,
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

