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
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_AR_AmortizeRevenueDebitAllocationH.applicationno" :label="M_AR_AmortizeRevenueDebitAllocationH.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_dnamount" v-model="M_AR_AmortizeRevenueDebitAllocationH.dnamount"  ref="ref_dnamount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_AmortizeRevenueDebitAllocationH.debtorcd"  ref="ref_debtorcd"/> -->
                                        <ABSCompute :prop="PI_debtorcd" v-model="DebtorContactLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_netalloc" v-model="M_AR_AmortizeRevenueDebitAllocationH.netalloc"  ref="ref_netalloc" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_brandname" v-model="M_AR_AmortizeRevenueDebitAllocationH.brandname"  ref="ref_brandname" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_AR_AmortizeRevenueDebitAllocationH.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebitnoChange" :prop="PI_debitno" :value="M_AR_AmortizeRevenueDebitAllocationH.debitno" :label="M_AR_AmortizeRevenueDebitAllocationH.debitnoLabel" ref="ref_debitno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitdate" v-model="M_AR_AmortizeRevenueDebitAllocationH.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_invoicedescs" v-model="M_AR_AmortizeRevenueDebitAllocationH.invoicedescs"  ref="ref_invoicedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AmortizeRevenueDebitAllocationH.remarks"  ref="ref_remarks" />
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "ListProcess",
		Module:"AR",
            propList: {
                initialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AmortizeRevenueDebitAllocationH :{
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
                balance: ''
                    }
            ,
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpContract_AmortizeRevenue',
                    ColumnDB: 'ApplicationNo', 
                    InitialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: '',
                    SourceField: "ApplicationNo,LOONo,TimeEdit",
                    DisplayLookUp: "ApplicationNo,LOONo"
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false,
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,LOONo' ,
            }, 
            PI_dnamount: { 
                cLabel: 'DN Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            // PI_debtorcd: { 
            //     cValidate :'', 
            //     cName: 'debtorcd', 
            //     cLabel: 'Debtor Code', 
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
            PI_debtorcd: { 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_netalloc: { 
                cLabel: 'Net Allocated', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_brandname: { 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_balance: { 
                cLabel: 'Balance', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_DebitNo',
                    ColumnDB: 'DebitNo',
                    InitialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'  AND DebtorCd=''",
                    ParamWhere: '',
                    SourceField: "InvoiceNo=DebitNo,InvoiceDate=DebitDate,DebtorCd,Descs=ContactName,TimeEdit",
                    DisplayLookUp: "InvoiceNo"
                },
                cValidate :'required', 
                cName: 'debitno', 
                cLabel: 'Debit No', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'InvoiceNo' ,
            }, 
            PI_debitdate: { 
                cLabel: 'Debit Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_invoicedescs: { 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:0, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
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
		return this.$store.getters.GetPage1Data
    },
    DebtorContactLabel() {
        return this.M_AR_AmortizeRevenueDebitAllocationH.debtorcd + ' - Contact Name ' + this.M_AR_AmortizeRevenueDebitAllocationH.contactname
    }
  },
    methods: {
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeRevenueDebitAllocationH.applicationno = data.id
            this.M_AR_AmortizeRevenueDebitAllocationH.applicationnoLabel = data.label

            // InitialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND DebtorCd = '" + data. + "'"
            if (this.inputStatus != "VIEW") {
                var param = {
                  OptionFunctionCd: "GetLookupDebitAllocationDebtorCd",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: data.id
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return

                  if (ress.length > 0) {
                    this.M_AR_AmortizeRevenueDebitAllocationH.debtorcd = ress[0].DebtorCd
                    this.M_AR_AmortizeRevenueDebitAllocationH.contactname = ress[0].ContactName
                    this.M_AR_AmortizeRevenueDebitAllocationH.brandname = ress[0].BrandName

                    this.PI_debitno.dataLookUp.InitialWhere = "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' AND DebtorCd='" + ress[0].DebtorCd + "'"

                  } else {
                    this.M_AR_AmortizeRevenueDebitAllocationH.debtorcd = ''
                    this.M_AR_AmortizeRevenueDebitAllocationH.contactname = ''
                    this.M_AR_AmortizeRevenueDebitAllocationH.brandname = ''
                    this.PI_debitno.dataLookUp.InitialWhere = "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' AND DebtorCd=''"
                  }
                  this.M_AR_AmortizeRevenueDebitAllocationH.debitno = ''
                  this.M_AR_AmortizeRevenueDebitAllocationH.debitdate = ''
                  this.M_AR_AmortizeRevenueDebitAllocationH.invoicedescs = ''

                })
            }
        })
        this.$forceUpdate()
        },
        OndebitnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeRevenueDebitAllocationH.debitno = data.id
            this.M_AR_AmortizeRevenueDebitAllocationH.debitnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                var param = {
                  OptionFunctionCd: "GetLastVATPaidBy",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  DebitNo: data.id
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return

                  if (ress.length > 0) {
                      this.M_AR_AmortizeRevenueDebitAllocationH.invoicedescs = ress[0].Descs
                      this.M_AR_AmortizeRevenueDebitAllocationH.debitdate = this.momentDateFormatting(ress[0].DebitDate, 'DD/MM/YYYY')
                  }
                })
            }
        })
        this.$forceUpdate()
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
	
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
        },		
        M_Post(dt){
            var dataPost = []
            var data = this.FormToABSList().getRowSelected()
            
            data.forEach((value) => {
                dataPost.push({
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    RevenueDebitAllocSeqnNo: value.RevenueDebitAllocSeqnNo,
                    UserEdit: this.getDataUser().UserId,
                    // _Message_: "Revenue Debit Allocation Sequence No. " + value.RevenueDebitAllocSeqnNo
                    OutputMessage_Output:''
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }
            
            this.postJSONMulti( this.getUrlPostMulti(), param )
            .then(response => {
                if (response == null) return
                this.$parent.resultPost()
            })
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_AR_AmortizeRevenueDebitAllocationH.applicationno == '' || this.M_AR_AmortizeRevenueDebitAllocationH.applicationno == null ? 'NULL' : this.M_AR_AmortizeRevenueDebitAllocationH.applicationno ,
                DebitNo: this.M_AR_AmortizeRevenueDebitAllocationH.debitno == '' || this.M_AR_AmortizeRevenueDebitAllocationH.debitno == null ? 'NULL' : this.M_AR_AmortizeRevenueDebitAllocationH.debitno ,
                Remarks: this.M_AR_AmortizeRevenueDebitAllocationH.remarks,
                UserInput: this.getDataUser().UserId                 
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
                RevenueDebitAllocSeqnNo: this.M_AR_AmortizeRevenueDebitAllocationH.revenuedebitallocseqnno,
                Remarks: this.M_AR_AmortizeRevenueDebitAllocationH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AmortizeRevenueDebitAllocationH.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_AmortizeRevenueDebitAllocationH = {
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
                balance: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    RevenueDebitAllocSeqnNo: value.RevenueDebitAllocSeqnNo,
                    ApplicationNo:  value.ApplicationNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: ''
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                revenuedebitallocseqnno: record.RevenueDebitAllocSeqnNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_AmortizeRevenueDebitAllocationH = {
                revenuedebitallocseqnno: data.revenuedebitallocseqnno,
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                source: data.source,
                debitno: data.debitno,
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                debtorcd: data.debtorcd,
                contactname: data.contactname,
                brandname: data.brandname,
                debitdate: this.momentDateFormatting(data.debitdate, 'DD/MM/YYYY'),
                invoicedescs: data.invoicedescs,
                dnamount: data.dnamount,
                netalloc: data.netalloc,
                whtalloc: data.whtalloc,
                balance: data.balance
                    }
                 

                this.M_AR_AmortizeRevenueDebitAllocationH.applicationnoLabel = this.M_AR_AmortizeRevenueDebitAllocationH.applicationno != null && this.M_AR_AmortizeRevenueDebitAllocationH.applicationno != '' ? data.applicationno :'' 
                this.M_AR_AmortizeRevenueDebitAllocationH.debitnoLabel = this.M_AR_AmortizeRevenueDebitAllocationH.debitno != null && this.M_AR_AmortizeRevenueDebitAllocationH.debitno != '' ? data.debitno  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','ListProcess')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')

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

