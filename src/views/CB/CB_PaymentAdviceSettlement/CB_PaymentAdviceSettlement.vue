<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />

            <div class="content-app-form__body form-process">
                <div class="tab-list-process">
                    <!-- <span class="nav-link active">AAAAAAA</span> -->
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
                <div class="div-collapse" v-b-toggle.collapse1>
                    <span class="master-span-form">
                        {{'Process Information'}}
                    </span>
                </div>
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">
                                    <!-- <b-col md="12" id="col-left">
                                        <b-row>
                                            <b-col md=6>
                                                <ABSinputDateVuex :prop="PI_PostingDate" v-model="PostingDate"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col md="6">
                                                <ABSinputRadioButtonVuex @input="OnDetailChange" :prop="PI_Detail" v-model="Detail"  ref="ref_detail" />
                                            </b-col>
                                        </b-row>
                                    </b-col> -->
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_PaymentAdviceSettlement.trxtype" :label="M_CB_PaymentAdviceSettlement.trxtypeLabel" ref="ref_trxtype"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_PaymentAdviceSettlement.bankcd" :label="M_CB_PaymentAdviceSettlement.bankcdLabel" ref="ref_bankcd"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_PaymentAdviceSettlement.paymentcd" :label="M_CB_PaymentAdviceSettlement.paymentcdLabel" ref="ref_paymentcd"/>
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSinputDateVuex @input="OnpaymentdateChange" :prop="PI_paymentdate" v-model="M_CB_PaymentAdviceSettlement.paymentdate"  ref="ref_paymentdate" />
                                        </b-col>
                                        </b-row>
                                        <div class="div-collapse">
                                            <span class="master-span-form">
                                                Cheque / Reference No
                                            </span>
                                        </div>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_PaymentAdviceSettlement.chequereferenceno"  ref="ref_chequereferenceno"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_CB_PaymentAdviceSettlement.chequereferencedate"  ref="ref_chequereferencedate" />
                                        </b-col>
                                        </b-row>
                                        <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_issuebank" v-model="M_CB_PaymentAdviceSettlement.issuebank"  ref="ref_issuebank"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_PaymentAdviceSettlement.chequeduedate"  ref="ref_chequeduedate" />
                                        </b-col>
                                        </b-row>
                                    </b-col> <!-- table close -->
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",                
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1
            },
		    FormType: "Process",
       
            IEBy: {Input: '', Edit: ''},

            M_CB_PaymentAdviceSettlement :{
                trxtype: '',
                bankcd: '',
                paymentcd: '',
                chequereferencedate: '',
                chequereferenceno: '',
                paymentdate: '',
                issuebank: '',
                chequeduedate: ''
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'CB' AND TrxClass = 'S' And Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
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
                cMasterUrl: 'CB/CB_SubPortofolioTransType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' And Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_paymentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'PaymentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cMasterUrl: 'CM/CM_PaymentType' ,
                cDisplayColumn: 'PaymentCd,Descs' ,
            }, 
            PI_paymentdate: { 
                cValidate :'required', 
                cName: 'paymentdate', 
                cLabel: 'Settlement Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_chequereferenceno: { 
                cValidate :'', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_chequereferencedate: { 
                cValidate :'', 
                cName: 'chequereferencedate', 
                cLabel: '	Cheque / Ref. Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_issuebank: { 
                cValidate :'', 
                cName: 'issuebank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_chequeduedate: { 
                cValidate :'', 
                cName: 'chequeduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
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
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_PaymentAdviceSettlement.trxtype = data.id
            this.M_CB_PaymentAdviceSettlement.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_PaymentAdviceSettlement.bankcd = data.id
            this.M_CB_PaymentAdviceSettlement.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_PaymentAdviceSettlement.paymentcd = data.id
            this.M_CB_PaymentAdviceSettlement.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{paymentdate}
            }
        })
        this.$forceUpdate()
        },
        OnchequereferencedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequereferencedate}
            }
        })
        this.$forceUpdate()
        },
        OnchequeduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequeduedate}
            }
        })
        this.$forceUpdate()
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
            var dt = ''
            
            var PaymentDate = this.M_CB_PaymentAdviceSettlement.paymentdate == '' || this.M_CB_PaymentAdviceSettlement.paymentdate == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.paymentdate
            var TrxType = this.M_CB_PaymentAdviceSettlement.trxtype == '' || this.M_CB_PaymentAdviceSettlement.trxtype == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.trxtype
            var PaymentCd = this.M_CB_PaymentAdviceSettlement.paymentcd == '' || this.M_CB_PaymentAdviceSettlement.paymentcd == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.paymentcd
            var BankCd = this.M_CB_PaymentAdviceSettlement.bankcd == '' || this.M_CB_PaymentAdviceSettlement.bankcd == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.bankcd
            var ChequeReferenceNo = this.M_CB_PaymentAdviceSettlement.chequereferenceno == '' || this.M_CB_PaymentAdviceSettlement.chequereferenceno == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.chequereferenceno
            var ChequeReferenceDate = this.M_CB_PaymentAdviceSettlement.chequereferencedate == '' || this.M_CB_PaymentAdviceSettlement.chequereferencedate == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.chequereferencedate
            var ChequeDueDate = this.M_CB_PaymentAdviceSettlement.chequeduedate == '' || this.M_CB_PaymentAdviceSettlement.chequeduedate == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.chequeduedate
            var IssuedBank = this.M_CB_PaymentAdviceSettlement.issuebank == '' || this.M_CB_PaymentAdviceSettlement.issuebank == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.issuebank
            var PaymentNo = this.M_CB_PaymentAdviceSettlement.paymentcd == '' || this.M_CB_PaymentAdviceSettlement.paymentcd == null ? 'NULL' : this.M_CB_PaymentAdviceSettlement.paymentcd

            data.forEach((value) => {
                dataPost.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    PaymentAdviceNo: value.PaymentAdviceNo,
                    UserInput: this.getDataUser().UserId,
                    PaymentDate: PaymentDate,
                    TrxType: TrxType,
                    PaymentCd: PaymentCd,
                    BankCd: BankCd,
                    ChequeReferenceNo: ChequeReferenceNo,
                    ChequeReferenceDate: ChequeReferenceDate,
                    ChequeDueDate: ChequeDueDate,
                    IssuedBank: IssuedBank,
                    PaymentNo: PaymentNo,
                    _Message_: ''
                })
            })        


            var param ={
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data:dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                if(response.Data.length==0){
                    this.alertSuccess("Posting Data Successfully")
                }

                this.$store.commit('setEventStatus', 'POST')
                this.toList().doGetList("", "eb_getList")
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

