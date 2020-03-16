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
                                        <ABSCompute :prop="PI_revenuemonth" v-model="M_AR_AmortizeScheduleDebit_InQuiry.revenuemonth"  ref="ref_revenuemonth" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_AR_AmortizeScheduleDebit_InQuiry.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_revenueyear" v-model="M_AR_AmortizeScheduleDebit_InQuiry.revenueyear"  ref="ref_revenueyear" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_invoiceno" v-model="M_AR_AmortizeScheduleDebit_InQuiry.invoiceno"  ref="ref_invoiceno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitno" v-model="M_AR_AmortizeScheduleDebit_InQuiry.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netamt" v-model="M_AR_AmortizeScheduleDebit_InQuiry.netamt"  ref="ref_netamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_journaldate" v-model="M_AR_AmortizeScheduleDebit_InQuiry.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_allocatedamt" v-model="M_AR_AmortizeScheduleDebit_InQuiry.allocatedamt"  ref="ref_allocatedamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_taxcd" v-model="M_AR_AmortizeScheduleDebit_InQuiry.taxcd"  ref="ref_taxcd" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_witholdingamt" v-model="M_AR_AmortizeScheduleDebit_InQuiry.witholdingamt"  ref="ref_witholdingamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6" offset="6">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_AmortizeScheduleDebit_InQuiry.status"  ref="ref_status" />
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

            M_AR_AmortizeScheduleDebit_InQuiry :{
                revenuesequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                revenuemonth: 0,
                revenueyear: 0,
                revenueamt: '',
                allocatednetamt: '',
                allocatedwhtamt: '',
                confirmstatus: '',
                debitallocsequenceno: 0,
                allocatedamt: '',
                witholdingamt: '',
                balance: '',
                netamt: '',
                invoiceno: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                taxcd: '',
                currencycd: '',
                invoicecurrency: '',
                status: '',
                timeedit: '',
                lastupdatestamp: 0
                    }
            ,
            PI_revenuemonth: { 
                cLabel: 'Month', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencycd: { 
                cLabel: 'IV Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_invoiceno: { 
                cLabel: 'Invoice No.', 
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
            PI_debitno: { 
                cLabel: 'Debit No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_netamt: { 
                cLabel: 'Invoice Net Amt. ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_allocatedamt: { 
                cLabel: 'Allocated Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldate: { 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_taxcd: { 
                cLabel: 'Tax Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_witholdingamt: { 
                cLabel: 'Witholding Amount', 
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
            this.M_AR_AmortizeScheduleDebit_InQuiry.applicationno = data.ApplicationNo 
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
            this.M_AR_AmortizeScheduleDebit_InQuiry = {
                revenuesequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                revenuemonth: 0,
                revenueyear: 0,
                revenueamt: '',
                allocatednetamt: '',
                allocatedwhtamt: '',
                confirmstatus: '',
                debitallocsequenceno: 0,
                allocatedamt: '',
                witholdingamt: '',
                balance: '',
                netamt: '',
                invoiceno: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                taxcd: '',
                currencycd: '',
                invoicecurrency: '',
                status: '',
                timeedit: '',
                lastupdatestamp: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_AmortizeScheduleDebit_InQuiry.applicationno = data.ApplicationNo 



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
                revenuesequenceno: record.RevenueSequenceNo,
                debitallocsequenceno: record.DebitAllocSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AR_AmortizeScheduleDebit_InQuiry = {
                revenuesequenceno: data.revenuesequenceno,
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                revenuemonth: data.revenuemonth,
                revenueyear: data.revenueyear,
                revenueamt: this.isCurrency(data.revenueamt, this.decimal),
                allocatednetamt: this.isCurrency(data.allocatednetamt, this.decimal),
                allocatedwhtamt: this.isCurrency(data.allocatedwhtamt, this.decimal),
                confirmstatus: data.confirmstatus,
                debitallocsequenceno: data.debitallocsequenceno,
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                witholdingamt: this.isCurrency(data.witholdingamt, this.decimal),
                balance: this.isCurrency(data.balance, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                invoiceno: data.invoiceno,
                debitno: data.debitno,
                debitdate: data.debitdate,
                journaldate: data.journaldate,
                taxcd: data.taxcd,
                currencycd: data.currencycd,
                invoicecurrency: data.invoicecurrency,
                status: data.status,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp
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

