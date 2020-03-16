<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

        <div class="content-app-form__body form-process">
            <div class="tab-list-process">
                <ABSListVuex
                    :prop = "propList"
                    :title = "''"
                    :isProcess = "true"
                    @rowClicked = "rowClicked"
                    @rowDblClicked = "doDoubleClick"
                    @rowLinkClick = "rowLink"
                    @pageSize = "M_PageSize"
                    @pagination = "M_Pagination"
                    @filter = "M_Advance_Filter"
                    @headTable = "M_Head_Table"
                />

                <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">               
                    <b-collapse id="collapse1" :visible="true">
                        <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                            <b-col md="12" id="col-left" class="bColMasterForm">	
                                <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                    <b-row style="padding-left:10px;">
                                        <b-col md="12" id="col-left">
                                            <b-row>
                                                <b-col md=6>
                                                    <ABSinputDateVuex :prop="PI_PostingDate" v-model="M_AP_PaymentAdviceConfirmation.postingdate"/>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col  md="6">
                                                    <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_PaymentAdviceConfirmation.trxtype" :label="M_AP_PaymentAdviceConfirmation.trxtypeLabel" ref="ref_trxtype"/>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col  md="6">
                                                    <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_AP_PaymentAdviceConfirmation.bankcd" :label="M_AP_PaymentAdviceConfirmation.bankcdLabel" ref="ref_bankcd"/>
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col  md="6">
                                                    <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_AP_PaymentAdviceConfirmation.paymentcd" :label="M_AP_PaymentAdviceConfirmation.paymentcdLabel" ref="ref_paymentcd"/>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </b-form>
                            </b-col>
                        </b-row>
                    </b-collapse>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and Status='B'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
            Module: "AP",
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            PI_PostingDate: {
                cValidate :'required', 
                cName: "postingdate",
                cNameError: "Payment Date",
                cLabel: "Payment Date",
                cOrder: 1,
                cPageLevel: 1,
                cTabIndex: 1,
                cParentForm: "FormScope_1_1"
            },
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ModuleCd = 'CB' AND TrxClass = 'M'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'BankCd,ContactId,BankName,BankAccountNo,Currency,TimeEdit' 
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'BankCd,BankName' ,
            }, 
            PI_paymentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'PaymentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PaymentCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'PaymentCd,Descs' ,
            },
            M_AP_PaymentAdviceConfirmation: {
                postingdate: this.getToday(),
                trxtype: '',
                bankcd: '',
                paymentcd: '',

            }
            
        }
    },
	computed : {        
        inputStatus() {
            if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
                return this.$store.getters.getStatus.toUpperCase()
            }
            else {
                return 'VIEW'
            }
        },
        PageLevel () {
            return 1
        },
        TabIndex () {
            return 1
        },
  },
    methods: {
        GetTrxTypeData () {
            this.FnGetTrxTypeData(
                this.getDataUser().SubPortfolioCd, 'CB', this.M_AP_PaymentAdviceConfirmation.trxtype
            )
            .then(res => {
                this.M_AP_PaymentAdviceConfirmation.bankcd = res[0].DefaultBankCd
                this.M_AP_PaymentAdviceConfirmation.bankcdLabel = res[0].DefaultBankCd
            })
        },
        OntrxtypeChange (data) {            
        this.$nextTick(() => {
            this.M_AP_PaymentAdviceConfirmation.trxtype = data.id
            this.M_AP_PaymentAdviceConfirmation.trxtypeLabel = data.label
            this.GetTrxTypeData()

            if (this.inputStatus != "VIEW") {                
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentAdviceConfirmation.bankcd = data.id
            this.M_AP_PaymentAdviceConfirmation.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentAdviceConfirmation.paymentcd = data.id
            this.M_AP_PaymentAdviceConfirmation.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
            }
        })
        this.$forceUpdate()
        },
        OnTrxTypeGroupChange (data) {
           this.TrxTypeGroup = data.id  
           this.TrxTypeGroupLabel = data.label
       },
        toToolbar() {
            // console.log(this.$children)
            return this.$children[0].$children[0]
        },
        toList() {
            return this.$children[1]
        },
        Loader() {
            return this.$children[3]
        },
        rowClicked (record, index) {},
        doDoubleClick () {},
        rowLink (url) {},
        M_PageSize () {},
        M_Pagination () {},
        M_Advance_Filter () {},
        M_Head_Table () {},
        M_Search(data){
           this.toList().doGetList(data,'eb_getList')
       },
        M_Post() {
            var dataPost = []
            var data = this.toList().getRowSelected()

            var postingdate = this.M_AP_PaymentAdviceConfirmation.postingdate == '' || this.M_AP_PaymentAdviceConfirmation.postingdate == null ? 'NULL' : this.M_AP_PaymentAdviceConfirmation.postingdate

            data.forEach((value) => {
                dataPost.push({
                    // _Message_: "Post Billing Schedule For Temporary No: " + value.TemporaryNo + " And Invoice No: " + value.DebitNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    ModuleCd: this.Module,
                    PaymentDate : postingdate,
                    TrxType: this.M_AP_PaymentAdviceConfirmation.trxtype == '' || this.M_AP_PaymentAdviceConfirmation.trxtype == null ? 'NULL' : this.M_AP_PaymentAdviceConfirmation.trxtype,                                        
                    PaymentCd: this.M_AP_PaymentAdviceConfirmation.paymentcd == '' || this.M_AP_PaymentAdviceConfirmation.paymentcd == null ? 'NULL' : this.M_AP_PaymentAdviceConfirmation.paymentcd,
                    BankCd: this.M_AP_PaymentAdviceConfirmation.bankcd == '' || this.M_AP_PaymentAdviceConfirmation.bankcd == null ? 'NULL' : this.M_AP_PaymentAdviceConfirmation.bankcd,
                    DebitNo: value.DebitNo,
                    ConfirmedBy: this.getDataUser().UserId,
                    PaymentNo_Output: ''
                    
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
                this.M_AP_PaymentAdviceConfirmation.postingdate = this.getToday()
                this.M_AP_PaymentAdviceConfirmation.trxtype = ''
                this.M_AP_PaymentAdviceConfirmation.trxtypeLabel = ''
                this.M_AP_PaymentAdviceConfirmation.bankcd = ''
                this.M_AP_PaymentAdviceConfirmation.bankcdLabel = ''
                this.M_AP_PaymentAdviceConfirmation.paymentcd = ''
                this.M_AP_PaymentAdviceConfirmation.paymentcdLabel = ''
        
            })
        },
        setToolbarButton() {},
    },
    beforeCreate: function () {
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.toToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.toList().doGetList('','eb_getList')
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

