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
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_AR_AmortizeRevenueCreditAllocationH.applicationno" :label="M_AR_AmortizeRevenueCreditAllocationH.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_AmortizeRevenueCreditAllocationH.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_AmortizeRevenueCreditAllocationH.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AR_AmortizeRevenueCreditAllocationH.allocationamt"  ref="ref_allocationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_AR_AmortizeRevenueCreditAllocationH.brandname"  ref="ref_brandname" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AR_AmortizeRevenueCreditAllocationH.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditnoChange" :prop="PI_creditno" :value="M_AR_AmortizeRevenueCreditAllocationH.creditno" :label="M_AR_AmortizeRevenueCreditAllocationH.creditnoLabel" ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AmortizeRevenueCreditAllocationH.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditdate" v-model="M_AR_AmortizeRevenueCreditAllocationH.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_AmortizeRevenueCreditAllocationH.descs"  ref="ref_descs" />
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND StatusCd = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AmortizeRevenueCreditAllocationH :{
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
                creditamt: '0',
                netallocatedamt: '',
                withholdingallocatedamt: '',
                allocationamt: '0',
                allocatedamt: '',
                witholdingamt: ''
                    }
            ,
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpAR_AmortizeRevenue_Contract', 
                    ColumnDB: 'ApplicationNo',
                    InitialWhere: "",
                    ParamWhere: ''
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No ', 
                cKey: false, 
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
                cDisplayColumn: 'ApplicationNo,BrandName' ,
            }, 
            PI_creditamt: { 
                cValidate :'', 
                cName: 'creditamt', 
                cLabel: 'CN Amount', 
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
            PI_debtorcd: { 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_allocationamt: { 
                cValidate :'', 
                cName: 'allocationamt', 
                cLabel: 'Allocation Amount', 
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
            PI_brandname: { 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_allocatedamt: { 
                cLabel: 'Allocated Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_creditno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpAmortizeRevenueCreditAllocation_Credit', 
                    ColumnDB: 'CreditNo',
                    InitialWhere: "", 
                    ParamWhere: "",
                    ParamView: "'" + this.getDataUser().SubPortfolioCd + "',''"
                        }, 
                cValidate :'', 
                cName: 'creditno', 
                cLabel: 'Credit No', 
                cKey: false, 
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
                cDisplayColumn: 'CreditNo,Descs' ,
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
            PI_creditdate: { 
                cLabel: 'Credit Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_descs: { 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
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
	}
  },
    methods: {		
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeRevenueCreditAllocationH.applicationno = data.id
            this.M_AR_AmortizeRevenueCreditAllocationH.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.PI_creditno.dataLookUp.ParamView = "'" + this.getDataUser().SubPortfolioCd + "','" + data.id + "'"
                var param = {
                  OptionFunctionCd: "GetCreditAllocationData",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: data.id
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return

                  if (ress.length > 0) {
                    this.M_AR_AmortizeRevenueCreditAllocationH.debtorcd = ress[0].DebtorCd + this.separator + ress[0].Name
                    this.M_AR_AmortizeRevenueCreditAllocationH.brandname = ress[0].BrandName
                  }

                })
            }
        })
        this.$forceUpdate()
        },
        OncreditnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeRevenueCreditAllocationH.creditno = data.id
            this.M_AR_AmortizeRevenueCreditAllocationH.creditnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                var param = {
                  OptionFunctionCd: "GetCreditNoDataInRevenueAllocationCredit",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  CreditNo: data.id,
                  RevenueCreditAllocSeqNo: 0
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return

                    if (ress.length > 0) {
                        var data = ress[0]
                        this.M_AR_AmortizeRevenueCreditAllocationH.allocatedamt = this.isCurrency(0, this.decimal)
                        this.M_AR_AmortizeRevenueCreditAllocationH.creditamt = this.isCurrency(data.CreditAmt, this.decimal)
                        this.M_AR_AmortizeRevenueCreditAllocationH.allocationamt = this.isCurrency(data.TotalAmt, this.decimal)
                        this.M_AR_AmortizeRevenueCreditAllocationH.creditdate = this.momentDateFormatting(data.CreditDate, 'DD/MM/YYYY')
                        this.M_AR_AmortizeRevenueCreditAllocationH.descs = data.Descs
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
            var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                // dt = dt + value.RowId + ','
                dataPost.push({
                    _Message_: "Credit No = "+value.RevenueCreditAllocSeqnNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    RevenueCreditAllocSeqnNo : value.RevenueCreditAllocSeqnNo,
                    UserEdit : this.getDataUser().UserId,
                    Source: value.Source
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
                ApplicationNo: this.M_AR_AmortizeRevenueCreditAllocationH.applicationno == '' || this.M_AR_AmortizeRevenueCreditAllocationH.applicationno == null ? 'NULL' : this.M_AR_AmortizeRevenueCreditAllocationH.applicationno ,
                CreditNo: this.M_AR_AmortizeRevenueCreditAllocationH.creditno == '' || this.M_AR_AmortizeRevenueCreditAllocationH.creditno == null ? 'NULL' : this.M_AR_AmortizeRevenueCreditAllocationH.creditno ,
                Remarks: this.M_AR_AmortizeRevenueCreditAllocationH.remarks,
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
                RevenueCreditAllocSeqnNo: this.M_AR_AmortizeRevenueCreditAllocationH.revenuecreditallocseqnno,
                ApplicationNo: this.M_AR_AmortizeRevenueCreditAllocationH.applicationno == '' || this.M_AR_AmortizeRevenueCreditAllocationH.applicationno == null ? 'NULL' : this.M_AR_AmortizeRevenueCreditAllocationH.applicationno ,
                CreditNo: this.M_AR_AmortizeRevenueCreditAllocationH.creditno == '' || this.M_AR_AmortizeRevenueCreditAllocationH.creditno == null ? 'NULL' : this.M_AR_AmortizeRevenueCreditAllocationH.creditno ,
                Remarks: this.M_AR_AmortizeRevenueCreditAllocationH.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AmortizeRevenueCreditAllocationH.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_AmortizeRevenueCreditAllocationH = {
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
			
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    RevenueCreditAllocSeqnNo: value.RevenueCreditAllocSeqnNo,
                    ApplicationNo:  value.ApplicationNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''
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
                LineNo: this.$parent.data.PageOrder,
                revenuecreditallocseqnno: record.RevenueCreditAllocSeqnNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_AmortizeRevenueCreditAllocationH = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                creditno: data.creditno,
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                revenuecreditallocseqnno: record.RevenueCreditAllocSeqnNo,
                rowid: data.rowid,
                debtorcd: data.debtorcd,
                brandname: data.brandname,
                name: data.name,
                creditdate: this.momentDateFormatting(data.creditdate, 'DD/MM/YYYY'),
                descs: data.descs,
                creditamt: data.creditamt,
                netallocatedamt: this.isCurrency(data.netallocatedamt, this.decimal),
                withholdingallocatedamt: this.isCurrency(data.withholdingallocatedamt, this.decimal),
                allocationamt: this.isCurrency(data.allocationamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                witholdingamt: this.isCurrency(data.witholdingamt, this.decimal)
                    }
                 

                this.M_AR_AmortizeRevenueCreditAllocationH.applicationnoLabel = this.M_AR_AmortizeRevenueCreditAllocationH.applicationno != null && this.M_AR_AmortizeRevenueCreditAllocationH.applicationno != '' ? data.applicationno + this.separator + data.applicationno :'' 
                this.M_AR_AmortizeRevenueCreditAllocationH.creditnoLabel = this.M_AR_AmortizeRevenueCreditAllocationH.creditno != null && this.M_AR_AmortizeRevenueCreditAllocationH.creditno != '' ? data.creditno + this.separator + data.creditno :'' 
         

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

