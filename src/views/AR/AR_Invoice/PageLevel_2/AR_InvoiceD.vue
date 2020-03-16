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
                                <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnTrxTypeChange" :prop="PI_TrxType" :value="M_AR_InvoiceD.TrxType" :label="M_AR_InvoiceD.TrxTypeLabel"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_TrxTypeDescs" v-model="M_AR_InvoiceD.TrxTypeDescs" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_Descs" v-model="M_AR_InvoiceD.Descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnJournalTypeChange" :prop="PI_JournalType" v-model="M_AR_InvoiceD.JournalType" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_BillingMethod" v-model="M_AR_InvoiceD.BillingMethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_TermsPayment" v-model="M_AR_InvoiceD.TermsPayment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnAmortizeStatusChange" :prop="PI_AmortizeStatus" v-model="M_AR_InvoiceD.AmortizeStatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputDateRangeVuex :prop="PI_AmortizeDate" v-model="M_AR_InvoiceD.AmortizeDate" /> -->
                                        <ABSinputDateRangeVuex :prop="PI_AmortizeDate" :valueFrom="M_AR_InvoiceD.TrxDateFrom" :valueTo="M_AR_InvoiceD.TrxDateTo" @from="dateFrom" @to="dateTo" />
                                        <!-- <ABSinputDateVuex :prop="PI_TrxDateFrom" v-model="M_AR_InvoiceD.TrxDateFrom" /> -->
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_AmortizeMonthlyAmt" v-model="M_AR_InvoiceD.AmortizeMonthlyAmt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_TrxAmt" v-model="M_AR_InvoiceD.TrxAmt" @onBlur="onTrxAmtBlur" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnTaxCdChange" :prop="PI_TaxCd" :value="M_AR_InvoiceD.TaxCd" :label="M_AR_InvoiceD.TaxCdLabel"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_TaxDescs" v-model="M_AR_InvoiceD.TaxDescs" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_IncludeDiscount" v-model="M_AR_InvoiceD.IncludeDiscount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnDiscountCdChange" :prop="PI_DiscountCd" :value="M_AR_InvoiceD.DiscountCd" :label="M_AR_InvoiceD.DiscountCdLabel" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_DiscountDescs" v-model="M_AR_InvoiceD.DiscountDescs" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_DiscountAmt" v-model="M_AR_InvoiceD.DiscountAmt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_AmtAfterDisc" v-model="M_AR_InvoiceD.AmtAfterDisc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_NetAmt" v-model="M_AR_InvoiceD.NetAmt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_VatAmt" v-model="M_AR_InvoiceD.VATAmt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_TotalAmt" v-model="M_AR_InvoiceD.TotalAmt"/>
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
</template>

<script>

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
            ValKey:null,
            Module: "AR",
            FormType: "List",
            propList: {
                initialWhere:"DebitNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex 
            },

            AmortizeDateFromTemp: null,
            dataParent: null,
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_InvoiceD :{
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: '',
                BillingSequenceNo: 'NULL',
                DebitSequenceNo: 0,
                TrxType: '',
                TrxTypeLabel: '',
                Descs: '',
                TaxCd: '',
                TaxCdLabel: '',
                JournalType: 'I',
                BillingMethod: 'F',
                TermsPayment: 'R',
                AmortizeStatus: '',
                TrxDateFrom: '',
                TrxDateTo: '',
                IncludeDiscount: 'N',
                DiscountCd: '',
                DiscountCdLabel: '',
                DiscountAmt: '',
                TrxAmt: '',
                NetAmt: '0.00',
                VATAmt: '0.00',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                JournalCategory: '',
                TrxTypeDescs: '',
                TaxDescs: '',
                Category: '',
                DiscountDescs: '',
                DefaultAmortizeDateFrom: '',
                AmortizeMonthlyAmt: 0,
                LastUpdateStamp: 0,
                RowID: 0,
                AmtAfterDisc: '',
                TotalAmt: '0.00',
                AmortizeDate: '',
                    }
            ,
            PI_TrxType: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'TrxType', 
                cLabel:'Trans. Type', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                // cMasterUrl:'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn:'TransactionType,Descs' ,
            }, 
            PI_TrxTypeDescs: { 
                cLabel:'', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_Descs: { 
                cValidate :'', 
                cName:'Descs', 
                cLabel:'Description', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_JournalType: { 
                cValidate :'', 
                cName:'JournalType', 
                cId:'rdbJournalType', 
                cRadioOptions: [{ text: 'Income', value: 'I' }, { text: 'Deffered', value: 'D' }],
                cLabel:'Journal Type', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_BillingMethod: { 
                cValidate :'', 
                cName:'BillingMethod', 
                cId:'rdbBillingMethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' }, { text: 'Cut-Off Date', value: 'C' }], 
                cLabel:'Billing Method', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_TermsPayment: { 
                cValidate :'', 
                cName:'TermsPayment', 
                cId:'rdbTermsPayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' }, { text: 'In Arrear', value: 'C' }], 
                cLabel:'Terms of Payment', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_AmortizeStatus: {
                cName:'AmortizeStatus', 
                cId:'rdbAmortizeStatus', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Auto', value: 'A' }], 
                cLabel:'Amortize Status', 
                cOrder:0,
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_AmortizeDate: {
                cName:'AmortizeDate', 
                cLabel:'Amortize Date', 
                cOrder:23, 
                cKey:false,
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_TrxDateFrom: {
                cName:'TrxDateFrom', 
                cLabel:'Amortize Date From', 
                cOrder:4, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_AmortizeMonthlyAmt: {
                cName:'AmortizeMonthlyAmt', 
                cLabel:'Amortize Monthly Amount', 
                cOrder:0, 
                cType: 'decimal',
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_TrxAmt: { 
                // cValidate :'required|is_not:0|is_not:0.00',
                // cValidate :'required|min_value:0.01',
                cValidate: 'required|greater:0.00',
                cName:'TrxAmt', 
                cLabel:'Trans. Amount', 
                cOrder:0, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_TaxCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'TaxCd', 
                cLabel:'Tax', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_TaxMaster' ,
                cDisplayColumn:'TaxCd,TranslatedCategory' ,
            }, 
            PI_TaxDescs: { 
                cLabel:'', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_IncludeDiscount: {
                cName:'IncludeDiscount', 
                cId:'rdbIncludeDiscount', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cLabel:'IncludeDiscount', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_DiscountCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMDiscount'    , 
                    ColumnDB: 'DiscountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'DiscountCd', 
                cLabel:'Discount Cd', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_Discount' ,
                cDisplayColumn:'DiscountCd,Descs' ,
            }, 
            PI_DiscountDescs: { 
                cLabel:'', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_DiscountAmt: {
                cName:'DiscountAmt', 
                cLabel:'Discount Amount', 
                cOrder:0, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_AmtAfterDisc: { 
                cLabel:'Amount After Discount', 
                cValue:'', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_NetAmt: { 
                cLabel:'Net Amount', 
                cValue:'', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_VatAmt: { 
                cLabel:'VAT Amount', 
                cValue:'', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_TotalAmt: { 
                cLabel:'Total Amount', 
                cValue:'', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
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
            return this.$store.getters.GetPage2Data
        },
        DataRowPage1(){
            return this.$store.getters.GetPage1Data
        }
    },
    methods: {
        dateFrom (data) {
            this.M_AR_InvoiceD.TrxDateFrom = data
        },
        dateTo (data) {
            this.M_AR_InvoiceD.TrxDateTo = data
        },
        CalculateDiscount(amt, discCd) {
            this.FnGetARDiscountAmount( parseInt(amt), discCd )
            .then(disc => {
                if (disc != null) {
                    var dataDisc = disc[0]
                    this.M_AR_InvoiceD.DiscountAmt = this.isCurrency(dataDisc.DiscountAmt, this.decimal)
                    this.M_AR_InvoiceD.AmtAfterDisc = this.isCurrency(dataDisc.AmountAfterDisc, this.decimal)
                }
            })
        },
        ChangeAmortizeStatus() {
            var param = {
                OptionFunctionCd: "GetAmortizeStatus",
                ModuleCd: this.Module,
                TrxType: this.M_AR_InvoiceD.TrxType,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return

                console.log(ress[0]);
                this.M_AR_InvoiceD.AmortizeStatus = ress[0].AmortizeStatus
            })
        },
        OnTrxTypeChange (data) {
            if (this.M_AR_InvoiceD.TrxType == data.id) return

            this.M_AR_InvoiceD.TrxType = data.id
            this.M_AR_InvoiceD.TrxTypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                // this.M_AR_InvoiceD.TrxType = data.id
                // this.M_AR_InvoiceD.TrxTypeLabel = data.label
                //{TrxType}
                this.FnGetTrxTypeData(
                    this.getDataUser().SubPortfolioCd, this.Module, data.id
                ).then(ress => {
                    if (ress != null) {
                        var data = ress[0]
                        console.log(data);
                        this.M_AR_InvoiceD.Descs = data.TrxTypeDescs
                        this.M_AR_InvoiceD.TaxCd = data.TaxCd
                        this.M_AR_InvoiceD.TaxCdLabel = data.TaxCd
                        this.M_AR_InvoiceD.JournalType = data.JournalType
                        this.M_AR_InvoiceD.BillingMethod = data.AmortizeMethod

                        if (data.JournalType == "D") {
                            this.M_AR_InvoiceD.AmortizeStatus = "M"
                        }

                        if (data.FixAmt != 0) {
                            this.M_AR_InvoiceD.TrxAmt = parseInt(data.FixAmt)

                            if (this.M_AR_InvoiceD.DiscountCd && this.M_AR_InvoiceD.DiscountCd != '') {
                                this.CalculateDiscount(data.FixAmt, this.M_AR_InvoiceD.DiscountCd)
                            }
                        }

                        // this.ChangeAmortizeStatus()
                    }
                })
                this.$forceUpdate()
            }
        },
        OnTaxCdChange (data) {
            this.M_AR_InvoiceD.TaxCd = data.id
            this.M_AR_InvoiceD.TaxCdLabel = data.label
            //{TaxCd}
            this.$forceUpdate()
        },
        OnDiscountCdChange (data) {
            this.M_AR_InvoiceD.DiscountCd = data.id
            this.M_AR_InvoiceD.DiscountCdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != "") {
                    this.CalculateDiscount(this.replaceAllString(this.M_AR_InvoiceD.TrxAmt, ',', '', 'number'), data.id)
                }
                //{DiscountCd}
                this.$forceUpdate()
            }
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
        M_Insert () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_InvoiceD.DebitNo,
                TrxType: this.M_AR_InvoiceD.TrxType,
                ModuleCd: this.Module,
                Descs: this.M_AR_InvoiceD.Descs,
                TaxCd: this.M_AR_InvoiceD.TaxCd,
                JournalType: this.M_AR_InvoiceD.JournalType,
                AmortizeStatus: this.M_AR_InvoiceD.AmortizeStatus,
                BillingMethod: this.M_AR_InvoiceD.BillingMethod,
                TermsPayment: this.M_AR_InvoiceD.TermsPayment,
                TrxDateFrom: this.M_AR_InvoiceD.TrxDateFrom == '' || this.M_AR_InvoiceD.TrxDateFrom == null ? 'NULL' : this.M_AR_InvoiceD.TrxDateFrom,
                TrxDateTo: this.M_AR_InvoiceD.TrxDateTo == '' || this.M_AR_InvoiceD.TrxDateTo == null ? 'NULL' : this.M_AR_InvoiceD.TrxDateTo,
                AmortizeMonthlyAmt: this.M_AR_InvoiceD.AmortizeMonthlyAmt ? this.replaceAllString(this.M_AR_InvoiceD.AmortizeMonthlyAmt, ',', '', 'number') : 0,
                IncludeDiscount: this.M_AR_InvoiceD.IncludeDiscount,
                DiscountCd: this.M_AR_InvoiceD.DiscountCd == '' || this.M_AR_InvoiceD.DiscountCd == null ? 'NULL' : this.M_AR_InvoiceD.DiscountCd,
                DiscountAmt: this.M_AR_InvoiceD.DiscountAmt ? this.replaceAllString(this.M_AR_InvoiceD.DiscountAmt, ',', '', 'number') : 0,
                TrxAmt: this.M_AR_InvoiceD.TrxAmt ? this.replaceAllString(this.M_AR_InvoiceD.TrxAmt, ',', '', 'number') : 0,
                UserInput: this.getDataUser().UserId ,
                // BillingSequenceNo: this.M_AR_InvoiceD.BillingSequenceNo ? this.replaceAllString(this.M_AR_InvoiceD.BillingSequenceNo, ',', '', 'number') : 0
                BillingSequenceNo: this.M_AR_InvoiceD.BillingSequenceNo == '' || this.M_AR_InvoiceD.BillingSequenceNo == null ? 'NULL' : this.M_AR_InvoiceD.BillingSequenceNo 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.$parent.resultInsert(response.Message)
                this.refreshListParent()
            })
        },
        M_Update () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_InvoiceD.DebitNo,
                DebitSequenceNo: this.M_AR_InvoiceD.DebitSequenceNo ? this.replaceAllString(this.M_AR_InvoiceD.DebitSequenceNo, ',', '', 'number') : 0,
                TrxType: this.M_AR_InvoiceD.TrxType,
                ModuleCd: this.Module,
                Descs: this.M_AR_InvoiceD.Descs,
                TaxCd: this.M_AR_InvoiceD.TaxCd,
                JournalType: this.M_AR_InvoiceD.JournalType,
                AmortizeStatus: this.M_AR_InvoiceD.AmortizeStatus,
                BillingMethod: this.M_AR_InvoiceD.BillingMethod,
                TermsPayment: this.M_AR_InvoiceD.TermsPayment,
                TrxDateFrom: this.M_AR_InvoiceD.TrxDateFrom,
                TrxDateTo: this.M_AR_InvoiceD.TrxDateTo,
                AmortizeMonthlyAmt: this.M_AR_InvoiceD.AmortizeMonthlyAmt ? this.replaceAllString(this.M_AR_InvoiceD.AmortizeMonthlyAmt, ',', '', 'number') : 0,
                IncludeDiscount: this.M_AR_InvoiceD.IncludeDiscount,
                DiscountCd: this.M_AR_InvoiceD.DiscountCd == '' || this.M_AR_InvoiceD.DiscountCd == null ? 'NULL' : this.M_AR_InvoiceD.DiscountCd,
                DiscountAmt: this.M_AR_InvoiceD.DiscountAmt ? this.replaceAllString(this.M_AR_InvoiceD.DiscountAmt, ',', '', 'number') : 0,
                TrxAmt: this.M_AR_InvoiceD.TrxAmt ? this.replaceAllString(this.M_AR_InvoiceD.TrxAmt, ',', '', 'number') : 0,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_InvoiceD.LastUpdateStamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_AR_InvoiceD ={
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: '',
                BillingSequenceNo: 0,
                DebitSequenceNo: 0,
                TrxType: '',
                Descs: '',
                TaxCd: '',
                JournalType: 'I',
                BillingMethod: 'F',
                TermsPayment: 'R',
                AmortizeStatus: '',
                TrxDateFrom: '',
                TrxDateTo: '',
                IncludeDiscount: 'N',
                DiscountCd: '',
                DiscountAmt: '',
                TrxAmt: '',
                NetAmt: '0.00',
                VATAmt: '0.00',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                JournalCategory: '',
                TrxTypeDescs: '',
                TaxDescs: '',
                Category: '',
                DiscountDescs: '',
                DefaultAmortizeDateFrom: '',
                AmortizeMonthlyAmt: 0,
                LastUpdateStamp: 0,
                RowID: 0,
                AmtAfterDisc: '',
                TotalAmt: '0.00',
                AmortizeDate: ''
            }
            	this.OnJournalTypeChange('I')
		},
        M_New(){
            // this.M_AR_InvoiceD.TrxDateFrom = this.AmortizeDateFromTemp
            let data = this.$store.getters.GetPage1Data
            this.M_AR_InvoiceD.DebitNo = data.InvoiceNo
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    DebitNo: value.DebitNo,
                    DebitSequenceNo: value.DebitSequenceNo,
                    UserEdit: this.getDataUser().UserId,
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
                this.refreshListParent(true)
            })
        },
        paramFromParent () {
            this.$parent.showForm = false
            this.dataParent = this.$store.getters.GetPage1Data
            // console.log(this.dataParent)
            this.M_AR_InvoiceD.DebitNo = this.dataParent.InvoiceNo
            this.propList.initialWhere = "DebitNo = '" + this.dataParent.InvoiceNo + "'"
            this.ValKey =  this.dataParent.InvoiceNo

            this.GetInvoiceHeaderValues(this.dataParent.InvoiceNo)
        
            this.FormToABSList().doGetList('','eb_getList')
        },
		M_Cancel() {
        },
        rowClicked (record, index) {
        },
        rowLink: function(url){
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                DebitSequenceNo: record.DebitSequenceNo ? this.replaceAllString(record.DebitSequenceNo, ',', '', 'number') : 0,
                DebitNo: record.DebitNo,
                JournalCategory: record.JournalCategory				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                var amtAfterDisc = 0
                var totalAmt = 0

                amtAfterDisc = parseInt(data.trxamt) - parseInt(data.discountamt)
                totalAmt = parseInt(data.netamt) + parseInt(data.vatamt)

                this.PI_AmortizeDate.cProtect = data.amortizestatus != "A"
                this.PI_AmortizeMonthlyAmt.cProtect = data.amortizestatus != "A"

                this.M_AR_InvoiceD = {
                    SubportfolioCd: data.subportfoliocd,
                    DebitNo: record.DebitNo,
                    BillingSequenceNo: data.billingsequenceno,
                    DebitSequenceNo: data.debitsequenceno,
                    TrxType: data.trxtype,
                    TrxTypeLabel: data.trxtype && data.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs : '',
                    Descs: data.descs,
                    TaxCd: data.taxcd,
                    TaxCdLabel: data.taxcd && data.taxcd != '' ? data.taxcd + this.separator + data.taxdescs : '',
                    JournalType: data.journaltype,
                    BillingMethod: data.billingmethod,
                    TermsPayment: data.termspayment,
                    AmortizeStatus: data.amortizestatus,
                    TrxDateFrom: data.trxdatefrom,
                    TrxDateTo: data.trxdateto,
                    IncludeDiscount: data.includediscount,
                    DiscountCd: data.discountcd,
                    DiscountCdLabel: data.discountcd && data.discountcd != '' ? data.discountcd + this.separator + data.discountdescs : '',
                    DiscountAmt: this.isCurrency(data.discountamt),
                    TrxAmt: this.isCurrency(data.trxamt),
                    NetAmt: this.isCurrency(data.netamt),
                    VATAmt: this.isCurrency(data.vatamt),
                    UserInput: data.userinput,
                    UserEdit: data.useredit,
                    JournalCategory: data.journalcategory,
                    TrxTypeDescs: data.trxtypedescs,
                    TaxDescs: data.taxdescs,
                    Category: data.category,
                    DiscountDescs: data.discountdescs,
                    DefaultAmortizeDateFrom: data.defaultamortizedatefrom,
                    AmortizeMonthlyAmt: this.isCurrency(data.amortizemonthlyamt),
                    LastUpdateStamp: record.LastUpdateStamp,
                    RowID: data.rowid,
                    AmtAfterDisc: this.isCurrency(amtAfterDisc),
                    TotalAmt: this.isCurrency(totalAmt),
                    AmortizeDate: ''
                }
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        setToolbarButton () {
        },
        OnJournalTypeChange (data) {
            // console.log(data)
            if (this.inputStatus != "VIEW") {
                if (data == "I") {
                    this.M_AR_InvoiceD.AmortizeStatus = "M"
                    this.PI_AmortizeStatus.cProtect = true
                }
                else {
                    this.M_AR_InvoiceD.AmortizeStatus = "M"
                    this.PI_AmortizeStatus.cProtect = false
                }
            }
        },
        OnAmortizeStatusChange (data) {
            if (this.inputStatus != "VIEW") {
                if (data == "A") {
                    this.M_AR_InvoiceD.AmortizeMonthlyAmt = ''
                    this.M_AR_InvoiceD.TrxAmt = ''
                    this.M_AR_InvoiceD.TrxDateFrom = this.momentDateFormat(this.dataParent.DebitDate, 'YYYY/MM/DD')
                    this.M_AR_InvoiceD.TrxDateTo = ''
                    this.PI_AmortizeDate.cProtect = false
                    this.PI_AmortizeMonthlyAmt.cProtect = false

                }
                else {
                    this.M_AR_InvoiceD.AmortizeMonthlyAmt = 0
                    this.PI_AmortizeDate.cProtect = true
                    this.PI_AmortizeMonthlyAmt.cProtect = true
                    this.M_AR_InvoiceD.TrxDateFrom = ''
                }
            }
        },
        GetInvoiceHeaderValues (DebitNo) {
            var param = {
                OptionFunctionCd: "GetInvoiceHeaderValues",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: DebitNo
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return

                this.AmortizeDateFromTemp = ress[0].DebitDate //this.M_FormatingDate(ress[0].DebitDate)
            })
        },
        onTrxAmtBlur (data) {
            return
            // console.log(data)
            if (this.M_AR_InvoiceD.DiscountCd && this.M_AR_InvoiceD.DiscountCd !== "") {
                this.FnGetARDiscountAmount(
                    this.replaceAllString(data, ',', '', 'number'), this.M_AR_InvoiceD.DiscountCd
                ).then(disc => {
                    if (disc != null) {
                        var dataDisc = disc[0]
                        this.M_AR_InvoiceD.DiscountAmt = parseInt(dataDisc.DiscountAmt)
                        this.M_AR_InvoiceD.AmtAfterDisc = parseInt(dataDisc.AmountAfterDisc)
                    }
                })
            }
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

