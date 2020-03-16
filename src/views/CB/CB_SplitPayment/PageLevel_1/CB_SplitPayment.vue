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
                                        <ABSInputSelectList @change="OnpaymentnoChange" :prop="PI_paymentno" :value="M_CB_SplitPayment.paymentno" :label="M_CB_SplitPayment.paymentnoLabel" ref="ref_paymentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_CB_SplitPayment.debtorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditorcd" v-model="M_CB_SplitPayment.creditorcdLabel"  ref="ref_creditorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amount" v-model="M_CB_SplitPayment.amount"  ref="ref_amount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_splitdocument" v-model="M_CB_SplitPayment.splitdocument"  ref="ref_splitdocument"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntodebtorcdChange" :prop="PI_todebtorcd" :value="M_CB_SplitPayment.todebtorcd" :label="M_CB_SplitPayment.todebtorcdLabel" ref="ref_todebtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntocreditorcdChange" :prop="PI_tocreditorcd" :value="M_CB_SplitPayment.tocreditorcd" :label="M_CB_SplitPayment.tocreditorcdLabel" ref="ref_tocreditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_splitamount" v-model="M_CB_SplitPayment.splitamount"  ref="ref_splitamount"/>
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
			Module:"CB",	
            IEBy: {Input: '', Edit: ''},

            M_CB_SplitPayment :{
                paymentno: '',
                debtorcd: '',
                debtorname: '',
                creditorcd: '',
                creditorname: '',
                tocreditorname: '',
                amount: '',
                splitdocument: '',
                todebtorcd: '',
                tocreditorcd: '',
                splitamount: ''
                    }
            ,					
            PI_paymentno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBPaymentH'    , 
                    ColumnDB: 'PaymentNo'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND Source = 'P' AND Status='P' AND PaymentNo IN (SELECT PaymentNo FROM CB_PaymentAllocation WHERE Status='N' AND SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentno', 
                cLabel: 'Payment No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
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
                cDisplayColumn: 'PaymentNo,BatchNo' ,
            }, 
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditorcd: { 
                cValidate :'', 
                cName: 'creditorcd', 
                cLabel: 'Creditor', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amount: { 
                cValidate :'', 
                cName: 'amount', 
                cLabel: 'Amount',
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_splitdocument: { 
                cValidate :'required|max:20', 
                cName: 'splitdocument', 
                cLabel: 'Split Document No', 
                cLabelSize: 4, 
                cOrder: 5, 
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
                    LookUpCd: 'GetLookupARDebtorCB'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And Status='Y' And DebtorCd Not IN (Select ISNULL(UnidentifiedDebtorCd,'') From AR_Specification Where SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'To Debtor', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
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
            PI_tocreditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tocreditorcd', 
                cLabel: 'To Creditor', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_splitamount: { 
                cValidate :'required', 
                cName: 'splitamount', 
                cLabel: 'Split Amount ', 
                cLabelSize: 4, 
                cOrder: 8, 
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
        OnpaymentnoChange (data) {
        this.$nextTick(() => {
            this.M_CB_SplitPayment.paymentno = data.id
            this.M_CB_SplitPayment.paymentnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                var param = {
                    OptionFunctionCd: "GetCBSplitPaymentDefaultData",
                    ModuleCd: this.Module,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    PaymentNo: data.id
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    var datas = ress[0]
                    this.M_CB_SplitPayment.splitdocument = data.id + "a"
                    this.M_CB_SplitPayment.debtorcd = datas.DebtorCd
                    this.M_CB_SplitPayment.debtorcdLabel = datas.DebtorCd && datas.DebtorCd != "" ? datas.DebtorCd + this.separator + datas.DebtorName : ""
                    this.M_CB_SplitPayment.creditorcd = datas.CreditorCd
                    this.M_CB_SplitPayment.creditorcdLabel = datas.CreditorCd && datas.CreditorCd != "" ? datas.CreditorCd + this.separator + datas.CreditorName : ""
                    this.M_CB_SplitPayment.amount = this.isCurrency(datas.TrxAmt, this.decimal)
                })
            }
        })
        this.$forceUpdate()
        },
        OntodebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SplitPayment.todebtorcd = data.id
            this.M_CB_SplitPayment.todebtorcdLabel = data.label
            this.PI_tocreditorcd.cProtect = true
            if (this.inputStatus != "VIEW") {
                if(this.M_CB_SplitPayment.todebtorcd == '' && this.M_CB_SplitPayment.todebtorcdLabel == ''){
                this.PI_tocreditorcd.cProtect = false
              }
            }
        })
        this.$forceUpdate()
        },
        OntocreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SplitPayment.tocreditorcd = data.id
            this.M_CB_SplitPayment.tocreditorcdLabel = data.label
            this.PI_todebtorcd.cProtect = true
            if (this.inputStatus != "VIEW") {
            if(this.M_CB_SplitPayment.tocreditorcd == '' && this.M_CB_SplitPayment.tocreditorcdLabel == ''){
                this.PI_todebtorcd.cProtect = false


                    
              } 
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
            this.M_ClearForm()		
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
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                PaymentNo: this.M_CB_SplitPayment.paymentno,
                SplitDocument: this.M_CB_SplitPayment.splitdocument,
                ToDebtorCd: this.M_CB_SplitPayment.todebtorcd == '' || this.M_CB_SplitPayment.todebtorcd == null ? 'NULL' : this.M_CB_SplitPayment.todebtorcd,
                ToCreditorCd: this.M_CB_SplitPayment.tocreditorcd == '' || this.M_CB_SplitPayment.tocreditorcd == null ? 'NULL' : this.M_CB_SplitPayment.tocreditorcd,
                SplitAmount: this.replaceAllString(this.M_CB_SplitPayment.splitamount, ',', '', 'number'),
                UserInput: this.getDataUser().UserId,
                OutputMessage_Output: ''
            }

            this.postEncode(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.M_ClearForm()
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.alertSuccess(response.Data.OutputMessage)
            })
        },
		M_ClearForm(){
            this.M_CB_SplitPayment = {
                paymentno: '',
                debtorcd: '',
                debtorname: '',
                creditorcd: '',
                creditorname: '',
                tocreditorname: '',
                amount: '',
                splitdocument: '',
                todebtorcd: '',
                tocreditorcd: '',
                splitamount: ''
                    }
                    
            		
		},
        M_New(){
            this.$refs.ref_paymentno.focus()
        },
        M_Edit(){
            this.$refs.ref_paymentno.focus()
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.getToolbar().doEdit(true)
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
