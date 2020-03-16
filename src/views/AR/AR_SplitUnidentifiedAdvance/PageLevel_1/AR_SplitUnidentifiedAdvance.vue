<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditnoChange" :prop="PI_creditno" :value="M_AR_SplitUnidentifiedAdvance.creditno" :label="M_AR_SplitUnidentifiedAdvance.creditnoLabel" ref="ref_creditno"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_advancepaymentno" v-model="M_AR_SplitUnidentifiedAdvance.advancepaymentno"  ref="ref_advancepaymentno" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AR_SplitUnidentifiedAdvance.cashierno"  ref="ref_cashierno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_SplitUnidentifiedAdvance.debtorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_debtorname" v-model="M_AR_SplitUnidentifiedAdvance.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amount" v-model="M_AR_SplitUnidentifiedAdvance.amount"  ref="ref_amount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankchargesamt" v-model="M_AR_SplitUnidentifiedAdvance.bankchargesamt"  ref="ref_bankchargesamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_splitdocumentno" v-model="M_AR_SplitUnidentifiedAdvance.splitdocumentno"  ref="ref_splitdocumentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntodebtorcdChange" :prop="PI_todebtorcd" :value="M_AR_SplitUnidentifiedAdvance.todebtorcd" :label="M_AR_SplitUnidentifiedAdvance.todebtorcdLabel" ref="ref_todebtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_splitamt" v-model="M_AR_SplitUnidentifiedAdvance.splitamt"  ref="ref_splitamt"/>
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
            FormType: "Form",
			Module:"AR",	
            IEBy: {Input: '', Edit: ''},

            M_AR_SplitUnidentifiedAdvance :{
                creditno: '',
                cashierno: '',
                debtorcd: '',
                debtorcdLabel: '',
                amount: '',
                bankchargesamt: '',
                splitdocumentno: '',
                todebtorcd: '',
                todebtorcdLabel: '',
                splitamt: ''
            }
            ,					
            PI_creditno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARCreditNo'    , 
                    ColumnDB: 'CreditNo'   , 
                    InitialWhere: "IdentifiedTrxStatus='N' AND Status='P'"   , 
                    ParamWhere: ''  ,
                    ParamView: "'" + this.getDataUser().SubPortfolioCd + "','A'",
                    SourceField: "DocumentNo=CreditNo,DocumentDate=CreditDate,DebtorCd,Name,TimeEdit",
                    DisplayLookUp: "DocumentNo"
                }, 
                cValidate :'required', 
                cName: 'CreditNo', 
                cLabel: 'Advance Receipt No', 
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
                cDisplayColumn: 'DocumentNo' ,
            }, 
            PI_advancepaymentno: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_cashierno: { 
                cValidate :'', 
                cName: 'cashierno', 
                cLabel: 'Cashier No', 
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
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor', 
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
            PI_debtorname: { 
                cLabel: 'Debtor Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_amount: { 
                cValidate :'', 
                cName: 'amount', 
                cLabel: 'Amount', 
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
            PI_bankchargesamt: { 
                cValidate :'', 
                cName: 'bankchargesamt', 
                cLabel: 'Bank Charges',
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
            PI_splitdocumentno: { 
                cValidate :'required|max:20', 
                cName: 'splitdocumentno', 
                cLabel: 'Split Document No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_todebtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='Y' AND DebtorCd Not IN (Select ISNULL(UnidentifiedDebtorCd,'') From AR_Specification Where SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'todebtorcd', 
                cLabel: 'To Debtor', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_splitamt: { 
                cValidate :'required', 
                cName: 'splitamt', 
                cLabel: 'Split Amount',
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
    }
  },
    methods: {		
        OncreditnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_SplitUnidentifiedAdvance.creditno = data.id
            this.M_AR_SplitUnidentifiedAdvance.creditnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                var param = {
                    OptionFunctionCd: 'GetCreditDocData',
                    ModuleCd: "AR",
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    CreditDocNo: data.id,
                    CurrentCreditNo: ""
                }

                this.FnDynamicFunction(param)
                .then(FnOpt2 => {
                    if (FnOpt2 == null) return
                    if (FnOpt2.length > 0) {
                        var datas = FnOpt2[0]
                        this.M_AR_SplitUnidentifiedAdvance.debtorcd = datas.DebtorCd
                        this.M_AR_SplitUnidentifiedAdvance.debtorcdLabel = datas.DebtorCd && datas.DebtorCd != "" ? datas.DebtorCd + this.separator + datas.DebtorName : ""
                        this.M_AR_SplitUnidentifiedAdvance.cashierno = datas.CashierNo
                        this.M_AR_SplitUnidentifiedAdvance.amount = this.isCurrency(datas.CreditAmt)
                        this.M_AR_SplitUnidentifiedAdvance.bankchargesamt = this.isCurrency(datas.BankChargesAmt)
                        this.M_AR_SplitUnidentifiedAdvance.splitdocumentno = data.id + "a"
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OntodebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_SplitUnidentifiedAdvance.todebtorcd = data.id
            this.M_AR_SplitUnidentifiedAdvance.todebtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{todebtorcd}
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
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var message = "Split Document Successed"

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AR_SplitUnidentifiedAdvance.creditno == '' || this.M_AR_SplitUnidentifiedAdvance.creditno == null ? 'NULL' : this.M_AR_SplitUnidentifiedAdvance.creditno ,
                SplitDocumentNo: this.M_AR_SplitUnidentifiedAdvance.splitdocumentno,
                SplitDocumentAmt: this.M_AR_SplitUnidentifiedAdvance.splitamt,
                ToDebtorCd: this.M_AR_SplitUnidentifiedAdvance.todebtorcd == '' || this.M_AR_SplitUnidentifiedAdvance.todebtorcd == null ? 'NULL' : this.M_AR_SplitUnidentifiedAdvance.todebtorcd ,
                UserEdit: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
                this.getToolbar().doEdit(true)
                this.M_ClearForm()
                this.$store.commit('setStatus','edit')
            })
        },
		M_ClearForm(){
            this.M_AR_SplitUnidentifiedAdvance = {
                creditno: '',
                cashierno: '',
                debtorcd: '',
                debtorcdLabel: '',
                amount: '',
                bankchargesamt: '',
                splitdocumentno: '',
                todebtorcd: '',
                todebtorcdLabel: '',
                splitamt: ''
            }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','EDIT')
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().FormStatus = 'EDIT'
        this.getToolbar().ProcessPS()
        
        this.getToolbar().doEdit(true)
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
