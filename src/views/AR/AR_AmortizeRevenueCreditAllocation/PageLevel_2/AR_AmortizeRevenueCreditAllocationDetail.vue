<template>
    <div>        
    <!-- <ABSListVuex
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
    /> -->
    <ABSGrid
        :prop="PI_grid"
        :PageLevel="PageLevel"
        :TabIndex="TabIndex"
        @total="sumTotal"
        v-model="CreditAllocationD"
        ref="ref_GridDebitAllocationD"
    />


        <!-- <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
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
                                <b-col md="12" id="col-left">
                                </b-col>
							</b-row>
							<ABSTAnalysis :prop="PTAnalysis" />
						</b-form>
					</b-col>
                </b-row>
            </b-collapse>
        </div> -->
    </div>
</template>

<script>

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "Grid",
			Module:"AR",
            propList: {
                initialWhere: '',
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AmortizeRevenueCreditAllocationDetail :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                creditno: '',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                revenuecreditallocseqnno: 0,
                rowid: 0,
                debtorcd: '',
                brandname: '',
                name: '',
                creditdate: '',
                descs: '',
                creditamt: '',
                netallocatedamt: '',
                withholdingallocatedamt: '',
                allocationamt: '',
                allocatedamt: '',
                witholdingamt: ''
            },
            CreditAllocationD: [],
            PI_grid: { //belum di setting karena tidak ada data di existing
                propList: null,
                cDisplayColumn: 'revenueyear,revenuemonth,revenueamt=decimal,allocatednetamt=decimal,allocatedwhtamt=decimal,currentnetallocamt=decimal,currentwhtallocamt=decimal',
                cTotalColumn: 'currentnetallocamt',
                isShowCheckBoxDelete: false,
                showNumber: false,
                comp: [
                    {
                        slot: 'currentnetallocamt',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cValidate :'', 
                        cName: 'currentnetallocamt', 
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
                        slot: 'currentwhtallocamt',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cValidate :'', 
                        cName: 'currentwhtallocamt', 
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
                    }
                ],
                propGetDataBy: null,
                NoGetById: ''
            },

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },
            dataDetail: []
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
        sumTotal(total){},
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
            // this.M_AR_AmortizeRevenueCreditAllocationDetail.revenuecreditallocseqnno = data.RevenueCreditAllocSeqnNo 
            // this.propList.ParamView = "" + data.RevenueCreditAllocSeqnNo + ", '" + this.getDataUser().SubPortfolioCd + "','" + data.ApplicationNo + "'"

            // this.FormToABSList().doGetList('','eb_getList')

            var paramGrid = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.DataRowPage1.ApplicationNo,
                RevenueCreditAllocSeqnNo: this.DataRowPage1.RevenueCreditAllocSeqnNo
            }

            this.PI_grid.propGetDataBy = paramGrid
            this.PI_grid.NoGetById = ''
            this.$refs.ref_GridDebitAllocationD.doGetList('','eb_getList')
        },		       
        M_Insert() {
            var dataToSave = []

            // insert data
            for (var x = 0; x < this.rightDataOptions.length; x++) {
                dataToSave.push({
                    RevenueCreditAllocDetailSeqnNo: '',
                    DebitAllocSequenceNo: '',
                    RevenueCreditAllocSeqnNo: '',
                    AllocatedAmt: '',
                    WitholdingAmt: '',
                    UserInput: this.getDataUser().UserId
                    
                })
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 3,
                Data: dataToSave         
            }

            this.postJSON(this.getUrlInsertMulti(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
        },
		M_ClearForm(){
            this.M_AR_AmortizeRevenueCreditAllocationDetail = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                creditno: '',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                revenuecreditallocseqnno: 0,
                rowid: 0,
                debtorcd: '',
                brandname: '',
                name: '',
                creditdate: '',
                descs: '',
                creditamt: '',
                netallocatedamt: '',
                withholdingallocatedamt: '',
                allocationamt: '',
                allocatedamt: '',
                witholdingamt: ''
             }	
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_AmortizeRevenueCreditAllocationDetail.revenuecreditallocseqnno = data.RevenueCreditAllocSeqnNo 
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
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

