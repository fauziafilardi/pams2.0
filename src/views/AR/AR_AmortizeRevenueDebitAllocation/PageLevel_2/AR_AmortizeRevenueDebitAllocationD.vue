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
                                    <!-- <ABSListTextField
                                        :fields="header"
                                        :items="body"
                                        :fieldToTextField="fieldToTextField"
                                        fieldCalculate="currentwhtallocamt"
                                        :operatorCalculate="TaxRate"
                                        @change="changeBody"
                                        :PageLevel="PageLevel"
                                        :TabIndex="TabIndex"
                                    /> -->
                                    <ABSGrid
                                        :prop="PI_grid"
                                        :PageLevel="PageLevel"
                                        :TabIndex="TabIndex"
                                        @total="sumTotal"
                                        v-model="DebitAllocationD"
                                        ref="ref_GridDebitAllocationD"
                                    />
                                </b-col>
							</b-row>
							<!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
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
            // fieldToTextField: ['currentnetallocamt','currentwhtallocamt'],
            fieldToTextField: ['currentnetallocamt'],
            TaxRate: 0,
			ValKey:null,
            FormType: "Grid",
			Module:"AR",
            propList: {
                // initialWhere:"RevenueDebitAllocSeqnNo = '" + this.ValKey + "'",
                initialWhere: '',
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},
            DebitAllocationD: [],
            PI_grid: {
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

            M_AR_AmortizeRevenueDebitAllocationD :{
                revenuedebitallocseqnno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                source: '',
                debitno: '',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
                rowid: 0,
                debtorcd: '',
                contactname: '',
                brandname: '',
                debitdate: '',
                invoicedescs: '',
                dnamount: '',
                netalloc: '',
                whtalloc: '',
                DebitSequenceNo: 0
                    }
            ,
            // PI_xxx22545: { 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
            // PI_xxx22546: { 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
            // PI_xxx22547: { 
            //     cValidate :'', 
            //     cName: 'xxx22547', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 

			// PTAnalysis: {
            //     cPageLevel: this.PageLevel,
            //     cTabIndex: this.TabIndex,
            //     cPageMasterSeq: this.data.PageMasterSeq,
            //     cFormPageNo: this.data.PageOrder
            // }
            header: {},
            body: [],
            dataDetail: [],
            DebitDNetAmt: 0
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
        sumTotal(total) {
        // console.log(total)
        this.DebitDNetAmt = parseInt(total[0])
        },
		changeBody (data) {
            // console.log('data from component')
            // console.log(data)
            // console.log('---------------------------------------')
            // console.log('data body')
            // console.log(this.body[data.no - 1])
        },
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
           this.getToolbar().statusFunction[0].disabled = true
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
            this.M_AR_AmortizeRevenueDebitAllocationD.revenuedebitallocseqnno = data.RevenueDebitAllocSeqnNo 
            // this.M_AR_AmortizeRevenueDebitAllocationD.debitno = data.DebitNo
            // this.propList.initialWhere =" RevenueDebitAllocSeqnNo = '" + data.RevenueDebitAllocSeqnNo + "' "
            this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "','" + data.RevenueDebitAllocSeqnNo + "'"
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
        },
        M_Update() {
            if (this.DebitDNetAmt > this.replaceAllString(this.DataRow.NetAmt, ',', '', 'number')) {
                this.alertError("Total allocated cannot be greater than net amount.")
                return
            }

            var dataPost = []
            console.log(this.DebitAllocationD)
            
            for (let x = 0 ; x < this.DebitAllocationD.length ; x ++) {
              dataPost.push({
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RevenueDebitAllocSeqnNo: this.DataRowPage1.RevenueDebitAllocSeqnNo,
                DebitSequenceNo: this.DataRow.DebitSequenceNo,
                RevenueSequenceNo: this.DebitAllocationD[x].revenuesequenceno,
                NetAllocAmt: this.replaceAllString(this.DebitAllocationD[x].currentnetallocamt, ',', '', 'number'),
                WHTAllocAmt: this.replaceAllString(this.DebitAllocationD[x].currentwhtallocamt, ',', '', 'number'),
                UserEdit: this.getDataUser().UserId
              })
            }

            var param = {	
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlUpdateMulti(), param)
            .then((response) => {
                if(response == null) return
                // this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_AR_AmortizeRevenueDebitAllocationD = {
                revenuedebitallocseqnno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                source: '',
                debitno: '',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
                rowid: 0,
                debtorcd: '',
                contactname: '',
                brandname: '',
                debitdate: '',
                invoicedescs: '',
                dnamount: '',
                netalloc: '',
                whtalloc: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_AmortizeRevenueDebitAllocationD.revenuedebitallocseqnno = data.RevenueDebitAllocSeqnNo 



        },
        M_Edit(){
        },
        M_Delete(dt){
        },
        getDataBy (record) {
            var paramGrid = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitSequenceNo: record.DebitSequenceNo,
                RevenueDebitAllocSeqnNo: this.M_AR_AmortizeRevenueDebitAllocationD.revenuedebitallocseqnno
            }

            this.PI_grid.propGetDataBy = paramGrid
            this.PI_grid.NoGetById = ''
            this.$refs.ref_GridDebitAllocationD.doGetList('','eb_getList')
        },
        getDataByx (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitSequenceNo: record.DebitSequenceNo,
                RevenueDebitAllocSeqnNo: this.M_AR_AmortizeRevenueDebitAllocationD.revenuedebitallocseqnno
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data

                this.header = [
                    'no',
                    'revenueyear',
                    'revenuemonth',
                    'revenueamt',
                    'allocatednetamt',
                    'allocatedwhtamt',
                    'currentnetallocamt',
                    'currentwhtallocamt'
                    // outstandingrevenueamt: 26153846.15385
                    // revenuedebitallocdetailseqnno: 20
                    // revenuesequenceno: 3248
                ]

                var decimal = 2
                for (var i = 0; i < data.length; i++) {
                    // .toFixed(decimal)
                    data[i].revenueamt = this.isCurrency(parseFloat(data[i].revenueamt).toFixed(decimal))
                    data[i].allocatednetamt = this.isCurrency(parseFloat(data[i].allocatednetamt).toFixed(decimal))
                    data[i].allocatedwhtamt = this.isCurrency(parseFloat(data[i].allocatedwhtamt).toFixed(decimal))
                    data[i].currentnetallocamt = this.isCurrency(Float(data[i].currentnetallocamt).toFixed(decimal))
                    data[i].currentwhtallocamt = this.isCurrency(parseFloat(data[i].currentwhtallocamt).toFixed(decimal))
                }

                var param = {
                  OptionFunctionCd: "GetTaxRate",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  DebitSequenceNo: record.DebitSequenceNo
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return


                  if (ress.length > 0) {
                    this.TaxRate = ress[0].TaxRate / 100
                    // alert(this.TaxRate)
                    // this.M_AR_AmortizeRevenueDebitAllocationH.debtorcd = ress[0].DebtorCd
                    // this.M_AR_AmortizeRevenueDebitAllocationH.contactname = ress[0].ContactName
                    // this.M_AR_AmortizeRevenueDebitAllocationH.brandname = ress[0].BrandName

                    // this.PI_debitno.dataLookUp.InitialWhere = "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND DebtorCd = '" + ress[0].DebtorCd + "'"
                  } else {
                    // this.M_AR_AmortizeRevenueDebitAllocationH.debtorcd = ''
                    // this.M_AR_AmortizeRevenueDebitAllocationH.contactname = ''
                    // this.M_AR_AmortizeRevenueDebitAllocationH.brandname = ''
                  }
                  this.body = data

                })

                
                // this.M_AR_AmortizeRevenueDebitAllocationD = {
                //                 revenuedebitallocseqnno: data.revenuedebitallocseqnno,
                //                 subportfoliocd: data.subportfoliocd,
                //                 applicationno: data.applicationno,
                //                 source: data.source,
                //                 debitno: data.debitno,
                //                 remarks: data.remarks,
                //                 status: data.status,
                //                 userinput: data.userinput,
                //                 useredit: data.useredit,
                //                 timeinput: data.timeinput,
                //                 timeedit: data.timeedit,
                //                 lastupdatestamp: record.LastUpdateStamp,
                //                 t0: data.t0,
                //                 t1: data.t1,
                //                 t2: data.t2,
                //                 t3: data.t3,
                //                 t4: data.t4,
                //                 t5: data.t5,
                //                 t6: data.t6,
                //                 t7: data.t7,
                //                 t8: data.t8,
                //                 t9: data.t9,
                //                 t10: data.t10,
                //                 t11: data.t11,
                //                 t12: data.t12,
                //                 t13: data.t13,
                //                 t14: data.t14,
                //                 t15: data.t15,
                //                 t16: data.t16,
                //                 t17: data.t17,
                //                 t18: data.t18,
                //                 t19: data.t19,
                //                 t20: data.t20,
                //                 t21: data.t21,
                //                 t22: data.t22,
                //                 t23: data.t23,
                //                 t24: data.t24,
                //                 t25: data.t25,
                //                 t26: data.t26,
                //                 t27: data.t27,
                //                 t28: data.t28,
                //                 t29: data.t29,
                //                 t30: data.t30,
                //                 controlsequenceno: data.controlsequenceno,
                //                 rowid: data.rowid,
                //                 debtorcd: data.debtorcd,
                //                 contactname: data.contactname,
                //                 brandname: data.brandname,
                //                 debitdate: data.debitdate,
                //                 invoicedescs: data.invoicedescs,
                //                 dnamount: data.dnamount,
                //                 netalloc: data.netalloc,
                //                 whtalloc: data.whtalloc
                //     }
                 

  

                // this.IEBy.Input = data.userinput
                // this.IEBy.Edit = data.useredit

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

