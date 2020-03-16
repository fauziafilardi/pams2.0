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
      @checkboxChecked = "$parent.checkboxChecked"
      :isCheckDisable = "true"
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
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_RefundD.trxtype" :label="M_AP_RefundD.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_journaltype" v-model="M_AP_RefundD.journaltype"  ref="ref_journaltype" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AP_RefundD.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_debitreferenceno" v-model="M_AP_RefundD.debitreferenceno"  ref="ref_debitreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndebitdateChange" :prop="PI_debitdate" v-model="M_AP_RefundD.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_RefundD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AP_RefundD.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_docamt" v-model="M_AP_RefundD.docamt"  ref="ref_docamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AP_RefundD.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_RefundD.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_debitcurrencyrate" v-model="M_AP_RefundD.debitcurrencyrate"  ref="ref_debitcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_balanceamt" v-model="M_AP_RefundD.balanceamt"  ref="ref_balanceamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AP_RefundD.allocationamt"  ref="ref_allocationamt"/>
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
			Module:"AP",
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
            DefaultAllocationAmt : 0,
            M_AP_RefundD :{
                trxtype: '',
                debitno: '',
                debitreferenceno: '',
                debitdate: '',
                descs: '',
                currencycd: '',
                docamt: '',
                allocatedamt: '',
                currencyrate: '0',
                debitcurrencyrate: '0',
                balanceamt: '',
                allocationamt: '0',
                journaltype:'',
                lastupdatestamp:0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_journaltype: { 
                cLabel: 'Journal Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                cValidate :'', 
                cName: 'debitno', 
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
            PI_debitreferenceno: { 
                cValidate :'', 
                cName: 'debitreferenceno', 
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
            PI_debitdate: { 
                cValidate :'', 
                cName: 'debitdate', 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cDecimal: 2, 
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
                cDecimal: 2, 
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
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitcurrencyrate: { 
                cValidate :'required', 
                cName: 'debitcurrencyrate', 
                cLabel: 'Allocation Currency Rate', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
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
                cDecimal: 2, 
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
                cDecimal: 2, 
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
				cProtect: true
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
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundD.trxtype = data.id
            this.M_AP_RefundD.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OndebitdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{debitdate}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_RefundD.currencycd = data.id
            this.M_AP_RefundD.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
            this.getToolbar().statusFunction[0].disabled = true
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
            this.M_AP_RefundD.currencycd = data.CurrencyCd 
        this.getGLSpec()

        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {          
        },
        M_Update() {
            if(this.DataRow.RefundSequenceNo==0){ 
                // Insert
                this.InsertRefund()
            } else { 
                // Update
                this.UpdateRefund()
              
            }
           
        },
        InsertRefund(){
            var dataToPost = []
            var param1 = {}
            var param2 = {}
            var param3 = {}
            param1 = {
                _Method_:'UPDATE',    
                _LineNo_:this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                DebitNo: this.M_AP_RefundD.debitno,
                RefundSequenceNo : this.DataRow.RefundSequenceNo,
                DebitCurrencyRate: this.M_AP_RefundD.debitcurrencyrate,
                AllocationAmt: this.M_AP_RefundD.allocationamt,
                UserInput: this.getDataUser().UserId,
            }

            param2 = {
                _Method_:'UPDATE3',    
                _LineNo_:this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                UserEdit: this.getDataUser().UserId,
            }
            param3 = {
                _Method_:'UPDATE4',    
                _LineNo_:this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                EntryType: 'F',
                UserEdit: this.getDataUser().UserId,
            }

            dataToPost.push({
                A_Update:param1,
                B_Update:param2,
                C_Update:param3
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataToPost
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate("Data Has Been Saved Successfully")
                this.refreshListParent(true)
            })
            
        },
        UpdateRefund(){
            var dataToPost = []
            var param1 = {}
            var param2 = {}
            var param3 = {}
            param1 = {
                _Method_:'UPDATE2',    
                _LineNo_:this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                DebitNo: this.M_AP_RefundD.debitno,
                RefundSequenceNo : this.DataRow.RefundSequenceNo,
                DebitCurrencyRate: this.M_AP_RefundD.debitcurrencyrate,
                AllocationAmt: this.M_AP_RefundD.allocationamt,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp:this.M_AP_RefundD.lastupdatestamp
            }

            param2 = {
                _Method_:'UPDATE3',    
                _LineNo_:this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                UserEdit: this.getDataUser().UserId,
            }
            param3 = {
                _Method_:'UPDATE4',    
                _LineNo_:this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RefundNo: this.DataRowPage1.RefundNo,
                EntryType: 'F',
                UserEdit: this.getDataUser().UserId,
            }

            dataToPost.push({
                A_Update:param1,
                B_Update:param2,
                C_Update:param3
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataToPost
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate("Data Has Been Saved Successfully")
                this.refreshListParent(true)
            })
            
        },
		M_ClearForm(){
            this.M_AP_RefundD = {
                trxtype: '',
                debitno: '',
                debitreferenceno: '',
                debitdate: '',
                descs: '',
                currencycd: '',
                docamt: '',
                allocatedamt: '',
                currencyrate: '0',
                debitcurrencyrate: '0',
                balanceamt: '',
                allocationamt: '0',
                journaltype:'',
                lastupdatestamp:0
                    }
            	
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_RefundD.currencycd = data.CurrencyCd 



        },
        M_Edit(){
            console.log(this.DefaultAllocationAmt,this.DataRow.OutstandingAmt)
            if(this.DataRow.RefundSequenceNo != null && this.DataRow.RefundSequenceNo != 0){
                if(parseInt(this.DefaultAllocationAmt) > parseInt(this.DataRow.OutstandingAmt)){

                        this.M_AP_RefundD.allocationamt = this.isCurrency(this.DataRow.OutstandingAmt, this.decimal)
                    }   else {
                        this.M_AP_RefundD.allocationamt = this.isCurrency(this.DefaultAllocationAmt, this.decimal)
                }
            }
          
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
					_Message_:'',


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

                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo,
                refundno: this.DataRowPage1.RefundNo,		
                CreditorCd: this.DataRowPage1.CreditorCd,
                CurrencyCd: this.DataRowPage1.CurrencyCd		
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AP_RefundD = {
                trxtype: data.trxtype,
                debitno: data.debitno,
                debitreferenceno: data.debitreferenceno,
                debitdate: data.debitdate,
                descs: data.descs,
                currencycd: data.currencycd,
                docamt: this.isCurrency(data.docamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt - this.DataRow.AllocationAmt, this.decimal),
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                debitcurrencyrate: this.isCurrency(data.debitcurrencyrate, this.decimal),
                balanceamt: this.isCurrency(this.DataRow.BalanceAmt, this.decimal),
                allocationamt: this.isCurrency(this.DataRow.AllocationAmt, this.decimal),
                lastupdatestamp: data.LastUpdateStamp
                    }
                 this.DefaultAllocationAmt = data.defaultallocationamt
                switch(data.source) {
                    case 'A':
                        // code block
                        this.M_AP_RefundD.journaltype = 'Advance'
                        break;
                    case 'T':
                        // code block
                        this.M_AP_RefundD.journaltype = 'Deposit'
                        break;
                    case 'E':
                        // code block
                        this.M_AP_RefundD.journaltype = 'Credit Note To Invoice'
                        break;
                        
                    } 
                this.M_AP_RefundD.trxtypeLabel = this.M_AP_RefundD.trxtype != null && this.M_AP_RefundD.trxtype != '' ? data.trxtype + this.separator  :'' 
                this.M_AP_RefundD.currencycdLabel = this.M_AP_RefundD.currencycd != null && this.M_AP_RefundD.currencycd != '' ? data.currencycd + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getGLSpec () {
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

                      if (this.DataRowPage1.RefundNo && this.DataRowPage1.RefundNo != '') {
                        if (this.DataRowPage1.CurrencyCd.toUpperCase() != data.BaseCurrencyCd.toUpperCase()) {

                          this.propList.initialWhere = "OutstandingAmt > 0 AND CurrencyCd IN ('" + this.DataRowPage1.CurrencyCd + "' , '" + data.BaseCurrencyCd + "') "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.CreditorCd + "', '" + this.DataRowPage1.RefundNo + "'"
                          this.FormToABSList().doGetList('','eb_getList')

                        }
                        else {
                            this.propList.initialWhere = "OutstandingAmt > 0 "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.CreditorCd + "', '" + this.DataRowPage1.RefundNo + "'"
                          this.FormToABSList().doGetList('','eb_getList')
                        }
                      }
                      else {
                        this.propList.initialWhere = " 1 = 0 "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.CreditorCd + "', '" + this.DataRowPage1.RefundNo + "'"
                        this.FormToABSList().doGetList('','eb_getList')
                      }
                    }
                } 
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

