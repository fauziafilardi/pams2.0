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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_RefundD.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_source" v-model="M_AR_RefundD.source"  ref="ref_source" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AR_RefundD.creditno"  ref="ref_creditno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_creditreferenceno" v-model="M_AR_RefundD.creditreferenceno"  ref="ref_creditreferenceno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_creditdate" v-model="M_AR_RefundD.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_RefundD.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_RefundD.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_docamt" v-model="M_AR_RefundD.docamt"  ref="ref_docamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AR_RefundD.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_RefundD.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_creditcurrencyrate" v-model="M_AR_RefundD.creditcurrencyrate"  ref="ref_creditcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AR_RefundD.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AR_RefundD.allocationamt"  ref="ref_allocationamt"/>
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
            FormType: "List",
			Module:"AR",
            propList: {
                initialWhere:"CurrencyCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_RefundD :{
                trxtype: '',
                creditno: '',
                descs: '',
                creditreferenceno: '',
                creditdate: '',
                currencycd: '',
                currencyrate: '0',
                totalallocationamt: '',
                defaultallocationamt: 0,
                source: '',
                docamt: '',
                allocatedamt: 0,
                creditcurrencyrate: '0',
                alloweditrate: 0,
                trxtype: '',
                journaltype: '',
                balanceamt: '',
                allocationamt: '0',
                outstandingamt: '',
                lastupdatestamp: ''
                    }
            ,
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_source: { 
                cValidate :'', 
                cName: 'source', 
                cLabel: 'Document Source',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditno: { 
                cValidate :'', 
                cName: 'creditno', 
                cLabel: 'Doc. No',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_creditreferenceno: { 
                cValidate :'', 
                cName: 'creditreferenceno', 
                cLabel: 'Reference No',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditdate: { 
                cValidate: "",
                cName: "creditdate",
                cLabel: 'Doc. Date',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_docamt: { 
                cValidate :'', 
                cName: 'docamt', 
                cLabel: 'Doc. Amount',
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
            PI_allocatedamt: { 
                cValidate :'', 
                cName: 'allocatedamt', 
                cLabel: 'Allocated Amount',
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
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
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
            PI_creditcurrencyrate: { 
                cValidate :'', 
                cName: 'creditcurrencyrate', 
                cLabel: 'Allocation Currency Rate', 
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
            PI_balanceamt: { 
                cValidate :'', 
                cName: 'balanceamt', 
                cLabel: 'Balance',
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
            PI_allocationamt: { 
                cValidate :'required', 
                cName: 'allocationamt', 
                cLabel: 'Allocation Amount', 
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

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },
            BaseCurrencyCd: ''
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
           this.getToolbar().statusFunction[2].disabled = true
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
            this.M_AR_RefundD.currencycd = data.CurrencyCd
            
            // this.FormToABSList().doGetList('','eb_getList')
            this.getSpec()
        },		       
        M_Insert() {
        },
        M_Update() {
            var param1 = {}
            var paramHeader = {}
            var paramBatch = {}

            if (this.DataRow.RefundSequenceNo && this.DataRow.RefundSequenceNo > 0) {
                //update
                param1 = {
                    _Method_:'UPDATE',                 
                    _LineNo_: this.$parent.data.PageOrder ,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    RefundNo: this.DataRowPage1.RefundNo,
                    CreditNo: this.DataRow.Creditno,
                    CreditCurrencyRate: this.M_AR_RefundD.creditcurrencyrate,
                    RefundSequenceNo: this.DataRow.RefundSequenceNo,
                    AllocationAmt: this.M_AR_RefundD.allocationamt,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp: this.M_AR_RefundD.lastupdatestamp
                }

                // this.postEncode( this.getUrlUpdate(), param )
                // .then(response => {
                //     if(response == null) return
                //     this.UpdateHeaderAndBatch(response.Message, 'U')
                // })
            }
            else {
                //insert
                param1 = {
                    _Method_:'SAVE',                 
                    _LineNo_: this.$parent.data.PageOrder ,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    RefundNo: this.DataRowPage1.RefundNo,
                    CreditNo: this.DataRow.Creditno,
                    CreditCurrencyRate: this.M_AR_RefundD.creditcurrencyrate,
                    AllocationAmt: this.M_AR_RefundD.allocationamt,
                    UserInput: this.getDataUser().UserId
                }

                // this.postEncode( this.getUrlInsert(), param )
                // .then(response => {
                //     if(response == null) return
                //     this.UpdateHeaderAndBatch(response.Message, 'I')
                // })
            }

            paramHeader = {
                _Method_:'UPDATE3',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                UserEdit: this.getDataUser().UserId
            }

            paramBatch = {
                _Method_:'UPDATE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                EntryType: "F",
                UserEdit: this.getDataUser().UserId
            }

            var dataToPost = [{
              A_Data: param1,
              B_Update: paramHeader,
              C_Update : paramBatch
            }]

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataToPost
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return
                this.$parent.resultUpdate("Data Has Been Saved Successfully")
            })
        },
        UpdateHeaderAndBatch (message, status) {
            var paramHeader = {
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                UserEdit: this.getDataUser().UserId
            }

            var paramBatch = {
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                EntryType: "F",
                UserEdit: this.getDataUser().UserId
            }

            this.postEncode( this.getUrlUpdate() + "2", paramHeader )
            .then(response1 => {
                if(response1 == null) return

                this.postEncode( this.getUrlUpdate() + "3", paramBatch )
                .then(response2 => {
                    if(response2 == null) return
                    if (status == "I") {
                        this.$parent.resultInsert(message)
                    }
                    else {
                        this.$parent.resultUpdate(message)
                    }
                })
            })
        },
		M_ClearForm(){
            this.M_AR_RefundD = {
                trxtype: '',
                creditno: '',
                descs: '',
                creditreferenceno: '',
                creditdate: '',
                currencycd: '',
                currencyrate: '0',
                totalallocationamt: '',
                defaultallocationamt: 0,
                source: '',
                docamt: '',
                allocatedamt: 0,
                creditcurrencyrate: '0',
                alloweditrate: 0,
                trxtype: '',
                journaltype: '',
                balanceamt: '',
                allocationamt: '0',
                outstandingamt: '',
                lastupdatestamp: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_RefundD.currencycd = data.CurrencyCd 



        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                creditno: record.Creditno,
                RefundNo: this.DataRowPage1.RefundNo,
                DebtorCd: this.DataRowPage1.DebtorCd,
                CurrencyCd: this.DataRowPage1.CurrencyCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                var allocatedamt = parseFloat(data.allocatedamt) - parseFloat(record.Allocationamt)
                var source = ""

                if (data.source == "R") {
                    source = "Advance From OR"
                }
                else if (data.source == "A") {
                    source = "Advance"
                }
                else if (data.source == "T") {
                    source = "Deposit"
                }
                else if (data.source == "C") {
                    source = "Credit Note To Account"
                }

                this.M_AR_RefundD = {
                    trxtype: data.trxtype,
                    creditno: data.creditno,
                    descs: data.descs,
                    creditreferenceno: data.creditreferenceno,
                    creditdate: data.creditdate,
                    currencycd: data.currencycd,
                    currencyrate: this.isCurrency((data.currencyrate), this.decimal),
                    totalallocationamt: data.totalallocationamt,
                    defaultallocationamt: this.isCurrency((data.defaultallocationamt), this.decimal),
                    source: source,
                    docamt: this.isCurrency((data.docamt), this.decimal),
                    allocatedamt: this.isCurrency((allocatedamt), this.decimal),
                    creditcurrencyrate: this.isCurrency((data.creditcurrencyrate), this.decimal),
                    alloweditrate: data.alloweditrate,
                    trxtype: data.trxtype,
                    journaltype: data.journaltype,
                    balanceamt: this.isCurrency((record.BalanceAmt), this.decimal),
                    allocationamt: this.isCurrency((record.Allocationamt), this.decimal),
                    outstandingamt: record.OutstandingAmt,
                    lastupdatestamp: record.LastUpdateStamp
                }
                 
                if (data.alloweditrate == "Y") {
                    this.PI_creditcurrencyrate.cProtect = false
                }
                else {
                    this.PI_creditcurrencyrate.cProtect = true
                }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getSpec () {
            //GetGLSpecification
            var param = {
                OptionFunctionCd: 'GetGLSpecification',
                ModuleCd: "GL"
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) { 
                    if (FnOpt2.length > 0) {
                        var data = FnOpt2[0]
                        this.BaseCurrencyCd = data.BaseCurrencyCd
                        this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "','" + this.DataRowPage1.DebtorCd + "','" + this.DataRowPage1.RefundNo + "'"
                        
                        if (this.DataRowPage1.RefundNo && this.DataRowPage1.RefundNo != "") {
                            if (this.DataRowPage1.CurrencyCd.toUpperCase() == this.BaseCurrencyCd.toUpperCase()) {
                                this.propList.initialWhere = ""
                            }
                            else {
                                this.propList.initialWhere = " CurrencyCd IN ('" + this.BaseCurrencyCd + "','" + this.DataRowPage1.CurrencyCd + "') "
                            }
                        }
                        else {
                            this.propList.initialWhere =" 1=0 "
                        }

                        this.FormToABSList().doGetList('','eb_getList')
                    }
                } 
            })

        },
		
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

