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
                                        <!-- <ABSInputSelect2 @change="OnBatchNoChange" :prop="PI_BatchNo" :value="M_AR_InvoiceH2.BatchNo"/> -->
                                        <!-- <ABSinputTextVuex :prop="PI_BatchNo" :value="M_AR_InvoiceH2.BatchNo"/> -->
                                      </b-col>
                                      <!-- <b-col md="3">
                                        <ABSCompute :prop="PI_DocumentCount" v-model="M_AR_InvoiceH2.DocumentCount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_BatchTotal" v-model="M_AR_InvoiceH2.BatchTotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox :prop="PI_BatchStatus" v-model="M_AR_InvoiceH2.BatchStatus" />
                                      </b-col> -->
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col md="4">
                                        <ABSinputCheckBox :prop="PI_BatchStatus" v-model="M_AR_InvoiceH2.BatchStatus" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_CurrentDocumentCount" v-model="M_AR_InvoiceH2.CurrentDocumentCount" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_CurrentBatchTotal" v-model="M_AR_InvoiceH2.CurrentBatchTotal" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnDebtorCdChange" :prop="PI_DebtorCd" :value="M_AR_InvoiceH2.DebtorCd" :label="M_AR_InvoiceH2.DebtorCdLabel"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_DebtorName" v-model="M_AR_InvoiceH2.DebtorName" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <!-- <ABSInputSelectList @change="OnRunningCdChange" :prop="PI_RunningCd" :value="M_AR_InvoiceH2.RunningCdLabel"/> -->
                                        <ABSInputSelectList @change="OnRunningCdChange" :prop="PI_RunningCd" :value="M_AR_InvoiceH2.RunningCd" :label="M_AR_InvoiceH2.RunningCdLabel"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_RunningCdDescs" v-model="M_AR_InvoiceH2.RunningCdDescs" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_DebitNo" v-model="M_AR_InvoiceH2.DebitNo"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnDebitDateChange" :prop="PI_DebitDate" v-model="M_AR_InvoiceH2.DebitDate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnJournalDateChange" :prop="PI_JournalDate" v-model="M_AR_InvoiceH2.JournalDate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_ReferenceNo" v-model="M_AR_InvoiceH2.ReferenceNo"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList ref="LookUpAddressCd" @change="OnAddressCdChange" :prop="PI_AddressCd" :value="M_AR_InvoiceH2.AddressCd" :label="M_AR_InvoiceH2.AddressCdLabel"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnCreditTermsCdChange" :prop="PI_CreditTermsCd" :value="M_AR_InvoiceH2.CreditTermsCd" :label="M_AR_InvoiceH2.CreditTermsCdLabel"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_DueDate" v-model="M_AR_InvoiceH2.DueDate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_Descs" v-model="M_AR_InvoiceH2.Descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnCurrencyCdChange" :prop="PI_CurrencyCd" :value="M_AR_InvoiceH2.CurrencyCd" :label="M_AR_InvoiceH2.CurrencyCdLabel"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_CurrencyRate" v-model="M_AR_InvoiceH2.CurrencyRate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_JournalCategory" v-model="M_AR_InvoiceH2.JournalCategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_TrxAmt" v-model="M_AR_InvoiceH2.TrxAmt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_TaxCurrencyRate" v-model="M_AR_InvoiceH2.TaxCurrencyRate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_DiscountAmt" v-model="M_AR_InvoiceH2.DiscountAmt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_AmtAfterDisc" v-model="M_AR_InvoiceH2.AmtAfterDisc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_NetAmt" v-model="M_AR_InvoiceH2.NetAmt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_VATAmt" v-model="M_AR_InvoiceH2.VATAmt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_TotalAmt" v-model="M_AR_InvoiceH2.TotalAmt"/>
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
        FormType: "ListProcess",
        Module: "AR",
            propList: {
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND Source = 'I' AND BatchStatus <> 'Posted' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_InvoiceH2 :{
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,
                Source: '',
                DebtorCd: '',
                DebtorCdLabel: '',
                TrxType: '',
                ModuleCd: '',
                RunningCd: '',
                RunningCdLabel: '',
                DebitNo: '',
                DebitDate: this.M_FormatingDate(new Date()),
                JournalDate: this.M_FormatingDate(new Date()),
                DueDate: '',
                ReferenceNo: '',
                CreditTermsCd: '',
                CreditTermsCdLabel: '',
                Descs: '',
                AddressContactId: '',
                AddressCd: '',
                AddressCdLabel: '',
                CurrencyCd: '',
                CurrencyCdLabel: '',
                CurrencyRate: '0.00',
                TaxCurrencyRate: '0.00',
                RevaluationDate: '',
                RevaluationCurrencyRate: '',
                LastPenaltyDate: '',
                DiscountAmt: '0.00',
                TrxAmt: '0.00',
                NetAmt: '0.00',
                VATAmt: '0.00',
                AllocatedAmt: '',
                JournalCategory: '',
                PostingDate: '',
                PostedBy: '',
                Status: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                ContactID: '',
                DocumentCount: 0,
                BatchTotal: '',
                BatchStatus: '',
                DebtorName: '',
                RunningCdDescs: '',
                DueDay: 0,
                LastUpdateStamp: 0,
                CurrentBatchTotal: '',
                CurrentDocumentCount: 0,
                RowID: 0,
                TotalAmt: '0.00',
                AmtAfterDisc: '0.00'
                    }
            ,
            PI_BatchNo: {
                cValidate :'', 
                cName:'BatchNo', 
                cLabel:'Batch No', 
                cOrder:0, 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_DocumentCount: { 
                cLabel:'Doc. Count', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_BatchTotal: { 
                cLabel:'Batch Total', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_BatchStatus: { 
                cValidate :'', 
                cName:'BatchStatus', 
                cOptions: [], 
                cLabel:'', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_BatchStatus: { 
                cValidate :'', 
                cName:'BatchStatus', 
                cOptions: [], 
                cLabel:'', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_CurrentDocumentCount: { 
                cLabel:'', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_CurrentBatchTotal: { 
                cLabel:'Curr. Batch Total  ', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_DebtorCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "Status = 'Y' AND SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: '',
                    OrderBy: 'TimeEdit DESC'
                }, 
                cValidate :'required', 
                cName:'DebtorCd', 
                cLabel:'Debtor Code', 
                cOrder:1, 
                cKey: true,
                cPageLevel: this.PageLevel,
                cAsync: false,
                cVisible:  true, 
                cProtect: false, 
                cStatic: false,
                cOption: [], 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'AR/AR_Debtor' ,
                cDisplayColumn:'DebtorCd,DebtorName' ,
            }, 
            PI_DebtorName: { 
                cLabel:'', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_RunningCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd = '" + "AR' OR ModuleCd IS NULL)", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'RunningCd', 
                cLabel:'Running Code', 
                cOrder:2, 
                cKey: true,
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_RunningCd' ,
                cDisplayColumn:'RunningCd,Descs' ,
            }, 
            PI_RunningCdDescs: { 
                cLabel:'', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_DebitNo: { 
                cValidate :'required|max:20', 
                cName:'DebitNo', 
                cLabel:'Invoice No', 
                cOrder:3, 
                cPageLevel: this.PageLevel, 
                cKey: true,
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_DebitDate: { 
                cValidate :'required', 
                cName:'DebitDate', 
                cLabel:'Invoice Date', 
                cOrder:4, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_JournalDate: { 
                cValidate :'required', 
                cName:'JournalDate', 
                cLabel:'Journal Date', 
                cOrder:5, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ReferenceNo: { 
                cValidate :'max:20', 
                cName:'ReferenceNo', 
                cLabel:'Reference No', 
                cOrder:6, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_AddressCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddressSubportfolio'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: ""   , // 1 = 2 biar pas awal di klick kosong datanya, nanti pas klik OnDebtorCdChange ini ke replace
                    ParamWhere: ''  ,
                    SourceField: "AddressCd,AddressType=TranslatedAddressType,Address1,PhoneNo=ContactID,TimeEdit",
                    DisplayLookUp: "AddressCd,Address1"
                        }, 
                cValidate :'required', 
                cName:'AddressCd', 
                cLabel:'Address', 
                cOrder:7, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'' ,
                // cDisplayColumn:'AddressCd,TranslatedAddressType' ,
                cDisplayColumn:'AddressCd,Address1',
            }, 
            PI_CreditTermsCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'CreditTermsCd', 
                cLabel:'Credit Terms', 
                cOrder:8, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_CreditTerms' ,
                cDisplayColumn:'CreditTermsCd,Descs' ,
            }, 
            PI_DueDate: { 
                cLabel:'Due Date', 
                cValue:'', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex,
                cName: "DueDate",
                cOrder: 0,
                cKey: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
            }, 
            PI_Descs: { 
                cValidate :'max:150', 
                cName:'Descs', 
                cLabel:'Description', 
                cOrder:9, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_CurrencyCd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'CurrencyCd', 
                cLabel:'Currency', 
                cOrder:10, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_CurrencyMaster' ,
                cDisplayColumn:'CurrencyCd,Descs' ,
            }, 
            PI_CurrencyRate: { 
                cValidate :'required|min_value:1', 
                cName:'CurrencyRate', 
                cLabel:'Currency Rate', 
                cOrder:11, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_JournalCategory: { 
                cValidate :'required', 
                cName:'JournalCategory', 
                cId:'rdbJournalCategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' },{ text: 'Indirect', value: 'I' },], 
                cLabel:'Journal Category', 
                cOrder:0, 
                cKey: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_TrxAmt: { 
                cLabel:'Trans. Amount', 
                cValue:'', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_TaxCurrencyRate: { 
                cValidate :'', 
                cName:'TaxCurrencyRate', 
                cLabel:'Tax Currency Rate', 
                cOrder:12, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_DiscountAmt: { 
                cLabel:'Discount Amount', 
                cValue:'', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
            }, 
            PI_AmtAfterDisc: { 
                cLabel:'Amount After Discount', 
                cValue:'', 
                cType: 'decimal',
                cKey: true,
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
            PI_VATAmt: { 
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
    }
  },
    methods: {
        OnBatchNoChange (data) {
            this.M_AR_InvoiceH2.BatchNo = data.id
            this.M_AR_InvoiceH2.BatchNoLabel = data.label
            //{BatchNo}
            this.$forceUpdate()
        },
        OnDebtorCdChange (data) {
            this.M_AR_InvoiceH2.DebtorCd = data.id
            this.M_AR_InvoiceH2.DebtorCdLabel = data.label

            // tiap onchange lookup, kalau ada statement selain yang diatas bisa ga ditambahin if dibawah ini?
            if (this.inputStatus != "VIEW") {
                // this.M_AR_InvoiceH2.DebtorCd = data.id
                // this.M_AR_InvoiceH2.DebtorCdLabel = data.label
                this.FnGetDebtorData(this.getDataUser().SubPortfolioCd,this.M_AR_InvoiceH2.DebtorCd).then(dt => {
                    if (dt != null) { 
                        var data = dt[0]
                        // var where = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactID = '" + data.ContactID + "'"

                        this.M_AR_InvoiceH2.CreditTermsCd = data.CreditTermsCd
                        this.M_AR_InvoiceH2.CreditTermsCdLabel = data.CreditTermsCd
                        this.M_AR_InvoiceH2.AddressCd = data.AddressCd
                        this.M_AR_InvoiceH2.AddressCdLabel = data.AddressCd
                        this.M_AR_InvoiceH2.AddressContactId = data.ContactID
                        this.M_AR_InvoiceH2.ContactID = data.ContactID

                        // this.$refs.LookUpAddressCd.prop.dataLookUp.InitialWhere = where
                        // this.$refs.LookUpAddressCd.onChangeTriggered = true
                        // this.$refs.LookUpAddressCd.prop.cDefault = data.AddressCd
                        // this.$refs.LookUpAddressCd.getData()
                        this.setColumnWhere()

                        this.M_AR_InvoiceH2.DueDay = data.Dueday
                        if (data.Dueday != null) {
                            this.M_AR_InvoiceH2.DueDate = this.dateAdd( this.M_AR_InvoiceH2.JournalDate, data.Dueday )
                        } 
                    }
                })
            }

            this.$forceUpdate()
        },
        OnRunningCdChange (data) {
            // alert(JSON.stringify(data))
            this.M_AR_InvoiceH2.RunningCd = data.id
            this.M_AR_InvoiceH2.RunningCdLabel = data.label

            if (this.inputStatus != "VIEW") {
                this.M_AR_InvoiceH2.DebitNo = "(auto)"
                this.PI_DebitNo.cProtect = true
            }
            //{RunningCd}
            this.$forceUpdate()
        },
        OnAddressCdChange (data) {
            // console.log(data)
            this.M_AR_InvoiceH2.AddressCd = data.id
            this.M_AR_InvoiceH2.AddressCdLabel = data.label
            //{AddressCd}
            this.$forceUpdate()
        },
        OnCreditTermsCdChange (data) {
            // alert(JSON.stringify(data))
            // alert('wik')
            this.M_AR_InvoiceH2.CreditTermsCd = data.id
            this.M_AR_InvoiceH2.CreditTermsCdLabel = data.label
            if (this.inputStatus != "VIEW") {
                // this.M_AR_InvoiceH2.CreditTermsCd = data.id
                // this.M_AR_InvoiceH2.CreditTermsCdLabel = data.label
                // console.log(this.M_AR_InvoiceH2)
                this.FnGetCreditTermsData(data.id).then(dt => {
                    if (dt != null) {
                        var data = dt[0]
                        // this.M_AR_InvoiceH2.CreditTermsCd = data.CreditTermsCd
                        this.M_AR_InvoiceH2.DueDay = data.Dueday
                        // console.log(this.M_AR_InvoiceH2.JournalDate)
                        if (data.Dueday != null && data.Dueday != '') {
                            // alert(data.Dueday)
                            this.M_AR_InvoiceH2.DueDate = this.dateAdd( this.M_AR_InvoiceH2.JournalDate, data.Dueday )
                        }
                    }
                })

                //{CreditTermsCd}
            }

            this.$forceUpdate()
        },
        OnCurrencyCdChange (data) {
            if (this.M_AR_InvoiceH2.CurrencyCd == data.id) return
            
            this.M_AR_InvoiceH2.CurrencyCd = data.id
            this.M_AR_InvoiceH2.CurrencyCdLabel = data.label
            if (this.inputStatus != 'VIEW') {
                // this.M_AR_InvoiceH2.CurrencyCd = data.id
                // this.M_AR_InvoiceH2.CurrencyCdLabel = data.label
                if (
                    (data.id && data.id != '') &&
                    (this.M_AR_InvoiceH2.DebitDate && this.M_AR_InvoiceH2.DebitDate != '')
                ) {
                    this.FnGetCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_AR_InvoiceH2.DebitDate, data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_InvoiceH2.CurrencyRate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_AR_InvoiceH2.DebitDate, data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_InvoiceH2.TaxCurrencyRate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })
                }
                //{CurrencyCd}
            }

            this.$forceUpdate()
        },
        OnDebitDateChange(data){
            if (this.inputStatus != 'VIEW') {
                if (data && data != '') {
                    this.M_AR_InvoiceH2.JournalDate = this.dateAdd( data, 0 )
                }
            }

            this.$forceUpdate()
        },
        OnJournalDateChange (data) {
            if (this.inputStatus != 'VIEW') {
                if (data && data != '') {
                    this.M_AR_InvoiceH2.DueDate = this.dateAdd( data, this.M_AR_InvoiceH2.DueDay )
                    this.FnGetCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_AR_InvoiceH2.JournalDate, this.M_AR_InvoiceH2.CurrencyCd
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_InvoiceH2.CurrencyRate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_AR_InvoiceH2.JournalDate, this.M_AR_InvoiceH2.CurrencyCd
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_InvoiceH2.TaxCurrencyRate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })
                }
            }

            this.$forceUpdate()
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
        M_Post(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                dataPost.push({
                    _Message_: "Invoice No = "+value.InvoiceNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId,
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
        M_Refresh(){
        },
		doDoubleClick(){
        },
        M_Insert () {
            if (this.M_AR_InvoiceH2.RunningCd && this.M_AR_InvoiceH2.RunningCd != "") {
                this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.M_AR_InvoiceH2.RunningCd,this.getDataUser().UserId,this.M_AR_InvoiceH2.DebitDate)
                .then(dt => {
                    this.M_AR_InvoiceH2.DebitNo = dt.RunningCode
                    var param1 = {
                        _Method_:'SAVE',
                        _LineNo_: this.$parent.data.PageOrder ,
                        // OptionSeq: this.getOptionSeq().OptionSeq,
                        // LineNo: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        DebitNo: this.M_AR_InvoiceH2.DebitNo,
                        BatchNo: this.M_AR_InvoiceH2.BatchNo,
                        EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                        DebtorCd: this.M_AR_InvoiceH2.DebtorCd,
                        ModuleCd: this.Module,
                        RunningCd: this.M_AR_InvoiceH2.RunningCd == '' || this.M_AR_InvoiceH2.RunningCd == null ? 'NULL' : this.M_AR_InvoiceH2.RunningCd,
                        DebitDate: this.M_AR_InvoiceH2.DebitDate,
                        JournalDate: this.M_AR_InvoiceH2.JournalDate,
                        ReferenceNo: this.M_AR_InvoiceH2.ReferenceNo,
                        CreditTermsCd: this.M_AR_InvoiceH2.CreditTermsCd,
                        Descs: this.M_AR_InvoiceH2.Descs,
                        AddressContactId: this.M_AR_InvoiceH2.AddressContactId,
                        AddressCd: this.M_AR_InvoiceH2.AddressCd,
                        CurrencyCd: this.M_AR_InvoiceH2.CurrencyCd,
                        CurrencyRate: this.M_AR_InvoiceH2.CurrencyRate ? this.replaceAllString(this.M_AR_InvoiceH2.CurrencyRate, ',', '', 'number') : 0,
                        TaxCurrencyRate: this.M_AR_InvoiceH2.TaxCurrencyRate ? this.replaceAllString(this.M_AR_InvoiceH2.TaxCurrencyRate, ',', '', 'number') : 0,
                        DiscountAmt: this.M_AR_InvoiceH2.DiscountAmt ? this.replaceAllString(this.M_AR_InvoiceH2.DiscountAmt, ',', '', 'number') : 0,
                        TrxAmt: this.M_AR_InvoiceH2.TrxAmt ? this.replaceAllString(this.M_AR_InvoiceH2.TrxAmt, ',', '', 'number') : 0,
                        NetAmt: this.M_AR_InvoiceH2.NetAmt ? this.replaceAllString(this.M_AR_InvoiceH2.NetAmt, ',', '', 'number') : 0,
                        VATAmt: this.M_AR_InvoiceH2.VATAmt ? this.replaceAllString(this.M_AR_InvoiceH2.VATAmt, ',', '', 'number') : 0,
                        UserInput: this.getDataUser().UserId ,
                        JournalCategory: this.M_AR_InvoiceH2.JournalCategory
                    }

                    var param2 = {
                        _Method_:'SAVE2',
                        _LineNo_: this.$parent.data.PageOrder ,
                        // OptionSeq: this.getOptionSeq().OptionSeq,
                        // LineNo: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        DebitNo: this.M_AR_InvoiceH2.DebitNo,
                        EntryType: 'I',
                        UserEdit: this.getDataUser().UserId ,
                        BatchNo: this.M_AR_InvoiceH2.BatchNo
                    }

                    var dataToPost = [{
                        A_Save: param1,
                        B_Save: param2
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
                })
            }
            else {
                var param1 = {
                    _Method_:'SAVE',
                    _LineNo_: this.$parent.data.PageOrder ,
                    // OptionSeq: this.getOptionSeq().OptionSeq,
                    // LineNo: this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: this.M_AR_InvoiceH2.DebitNo,
                    BatchNo: this.M_AR_InvoiceH2.BatchNo,
                    EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_INVOICE,
                    DebtorCd: this.M_AR_InvoiceH2.DebtorCd,
                    ModuleCd: this.Module,
                    RunningCd: this.M_AR_InvoiceH2.RunningCd == '' || this.M_AR_InvoiceH2.RunningCd == null ? 'NULL' : this.M_AR_InvoiceH2.RunningCd,
                    DebitDate: this.M_AR_InvoiceH2.DebitDate,
                    JournalDate: this.M_AR_InvoiceH2.JournalDate,
                    ReferenceNo: this.M_AR_InvoiceH2.ReferenceNo,
                    CreditTermsCd: this.M_AR_InvoiceH2.CreditTermsCd,
                    Descs: this.M_AR_InvoiceH2.Descs,
                    AddressContactId: this.M_AR_InvoiceH2.AddressContactId,
                    AddressCd: this.M_AR_InvoiceH2.AddressCd,
                    CurrencyCd: this.M_AR_InvoiceH2.CurrencyCd,
                    CurrencyRate: this.M_AR_InvoiceH2.CurrencyRate ? this.replaceAllString(this.M_AR_InvoiceH2.CurrencyRate, ',', '', 'number') : 0,
                    TaxCurrencyRate: this.M_AR_InvoiceH2.TaxCurrencyRate ? this.replaceAllString(this.M_AR_InvoiceH2.TaxCurrencyRate, ',', '', 'number') : 0,
                    DiscountAmt: this.M_AR_InvoiceH2.DiscountAmt ? this.replaceAllString(this.M_AR_InvoiceH2.DiscountAmt, ',', '', 'number') : 0,
                    TrxAmt: this.M_AR_InvoiceH2.TrxAmt ? this.replaceAllString(this.M_AR_InvoiceH2.TrxAmt, ',', '', 'number') : 0,
                    NetAmt: this.M_AR_InvoiceH2.NetAmt ? this.replaceAllString(this.M_AR_InvoiceH2.NetAmt, ',', '', 'number') : 0,
                    VATAmt: this.M_AR_InvoiceH2.VATAmt ? this.replaceAllString(this.M_AR_InvoiceH2.VATAmt, ',', '', 'number') : 0,
                    UserInput: this.getDataUser().UserId ,
                    JournalCategory: this.M_AR_InvoiceH2.JournalCategory
                }

                var param2 = {
                    _Method_:'SAVE2',
                    _LineNo_: this.$parent.data.PageOrder ,
                    // OptionSeq: this.getOptionSeq().OptionSeq,
                    // LineNo: this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: this.M_AR_InvoiceH2.DebitNo,
                    EntryType: 'I',
                    UserEdit: this.getDataUser().UserId ,
                    BatchNo: this.M_AR_InvoiceH2.BatchNo
                }

                var dataToPost = [{
                    A_Save: param1,
                    B_Save: param2
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
            }
        },
        M_Update () {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: this.M_AR_InvoiceH2.BatchNo,
                DebtorCd: this.M_AR_InvoiceH2.DebtorCd,
                ModuleCd: this.M_AR_InvoiceH2.ModuleCd,
                RunningCd: this.M_AR_InvoiceH2.RunningCd && this.M_AR_InvoiceH2.RunningCd != '' ? this.M_AR_InvoiceH2.RunningCd : 'NULL',
                DebitNo: this.M_AR_InvoiceH2.DebitNo,
                DebitDate: this.M_AR_InvoiceH2.DebitDate,
                JournalDate: this.M_AR_InvoiceH2.JournalDate,
                ReferenceNo: this.M_AR_InvoiceH2.ReferenceNo,
                CreditTermsCd: this.M_AR_InvoiceH2.CreditTermsCd,
                Descs: this.M_AR_InvoiceH2.Descs,
                AddressContactId: this.M_AR_InvoiceH2.AddressCd && this.M_AR_InvoiceH2.AddressCd != '' ? this.M_AR_InvoiceH2.AddressContactId : 'NULL',
                AddressCd: this.M_AR_InvoiceH2.AddressCd && this.M_AR_InvoiceH2.AddressCd != '' ? this.M_AR_InvoiceH2.AddressCd : 'NULL',
                CurrencyCd: this.M_AR_InvoiceH2.CurrencyCd,
                CurrencyRate: this.M_AR_InvoiceH2.CurrencyRate ? this.replaceAllString(this.M_AR_InvoiceH2.CurrencyRate, ',', '', 'number') : 0,
                TaxCurrencyRate: this.M_AR_InvoiceH2.TaxCurrencyRate ? this.replaceAllString(this.M_AR_InvoiceH2.TaxCurrencyRate, ',', '', 'number') : 0,
                DiscountAmt: this.M_AR_InvoiceH2.DiscountAmt ? this.replaceAllString(this.M_AR_InvoiceH2.DiscountAmt, ',', '', 'number') : 0,
                TrxAmt: this.M_AR_InvoiceH2.TrxAmt ? this.replaceAllString(this.M_AR_InvoiceH2.TrxAmt, ',', '', 'number') : 0,
                NetAmt: this.M_AR_InvoiceH2.NetAmt ? this.replaceAllString(this.M_AR_InvoiceH2.NetAmt, ',', '', 'number') : 0,
                VATAmt: this.M_AR_InvoiceH2.VATAmt ? this.replaceAllString(this.M_AR_InvoiceH2.VATAmt, ',', '', 'number') : 0,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_InvoiceH2.LastUpdateStamp,
                JournalCategory: this.M_AR_InvoiceH2.JournalCategory                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_AR_InvoiceH2 ={
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,
                Source: '',
                DebtorCd: '',
                TrxType: '',
                ModuleCd: '',
                RunningCd: '',
                DebitNo: '',
                DebitDate: this.M_FormatingDate(new Date()),
                JournalDate: this.M_FormatingDate(new Date()),
                DueDate: '',
                ReferenceNo: '',
                CreditTermsCd: '',
                Descs: '',
                AddressContactId: '',
                AddressCd: '',
                CurrencyCd: '',
                CurrencyRate: '0.00',
                TaxCurrencyRate: '0.00',
                RevaluationDate: '',
                RevaluationCurrencyRate: '',
                LastPenaltyDate: '',
                DiscountAmt: '0.00',
                TrxAmt: '0.00',
                NetAmt: '0.00',
                VATAmt: '0.00',
                AllocatedAmt: '',
                JournalCategory: '',
                PostingDate: '',
                PostedBy: '',
                Status: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                ContactID: '',
                DocumentCount: 0,
                BatchTotal: '',
                BatchStatus: '',
                DebtorName: '',
                RunningCdDescs: '',
                DueDay: 0,
                LastUpdateStamp: 0,
                CurrentBatchTotal: '',
                CurrentDocumentCount: 0,
                RowID: 0,
                TotalAmt: '0.00',
                AmtAfterDisc: '0.00'
            }

            this.PI_DebitNo.cProtect = false
            		
		},
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []
            var dataDelete2 = []
			
			data.forEach((value) => {
                dataDelete2.push({
                    _MethodApi_ : 'DELETE2',
                    _LineNo_ : 0,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.InvoiceNo,
                    EntryType: 'I',
                    UserEdit: this.getDataUser().UserId ,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo,
                    _Message_:''
                })

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.InvoiceNo,
                    UserEdit: this.getDataUser().UserId ,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Delete2_ : dataDelete2,
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
        paramFromParent(){
        },
        setToolbarButton () {
            this.getToolbar().statusFunction[4].text = 'Post'
            this.$store.commit('setIsPost', true)
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: record.InvoiceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]

                var amtAfterDisc = 0
                var totalAmt = 0

                amtAfterDisc = (parseFloat(data.trxamt) - parseFloat(data.discountamt)).toFixed(this.decimal)
                totalAmt = (parseFloat(data.netamt) + parseFloat(data.vatamt)).toFixed(this.decimal)

                var disabledJC = false

                if (parseFloat(data.trxamt) > 0) {
                    disabledJC = true
                }

                this.PI_JournalCategory.cKey = disabledJC

                // var where = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactID = '" + data.contactid + "'"

                this.$nextTick(() => {
                    // this.$refs.LookUpAddressCd.prop.dataLookUp.InitialWhere = where
                    // this.$refs.LookUpAddressCd.onChangeTriggered = true
                    // this.$refs.LookUpAddressCd.prop.cDefault = data.addresscd
                    // this.$refs.LookUpAddressCd.getData()

                    this.M_AR_InvoiceH2 = {
                        SubPortfolioCd: data.subportfoliocd,
                        BatchNo: data.batchno,
                        Source: data.source,
                        // saat get data, posisi lookup masih kosong tapi set value dengan kondisi
                        // seperti dibawah ini. belum tau kondisinya dr mana, mungkin manual
                        // untuk sekarang pakai yang sudah ada dulu *langsung data.debtorcd aja
                        DebtorCd: data.debtorcd,
                        DebtorCdLabel: data.debtorcd + this.separator + data.debtorname,
                        TrxType: data.trxtype,
                        ModuleCd: data.modulecd,
                        RunningCd: data.runningcd,
                        RunningCdLabel: data.runningcd + this.separator + data.runningcddescs,
                        DebitNo: data.debitno,
                        DebitDate: data.debitdate,
                        JournalDate: data.journaldate,
                        DueDate: data.duedate,
                        ReferenceNo: data.referenceno,
                        Descs: data.descs,
                        AddressContactId: data.addresscontactid,
                        AddressCd: data.addresscd,
                        AddressCdLabel: data.addresscd,
                        CurrencyCd: data.currencycd,
                        CurrencyCdLabel: data.currencycd,
                        CurrencyRate: this.isCurrency(data.currencyrate, this.decimal),
                        TaxCurrencyRate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                        RevaluationDate: data.revaluationdate,
                        RevaluationCurrencyRate: this.isCurrency(data.revaluationcurrencyrate, this.decimal),
                        LastPenaltyDate: data.lastpenaltydate,
                        DiscountAmt: this.isCurrency(data.discountamt, this.decimal),
                        TrxAmt: this.isCurrency(data.trxamt, this.decimal),
                        NetAmt: this.isCurrency(data.netamt, this.decimal),
                        VATAmt: this.isCurrency(data.vatamt, this.decimal),
                        AllocatedAmt: this.isCurrency(data.allocatedamt, this.decimal),
                        JournalCategory: data.journalcategory,
                        PostingDate: data.postingdate,
                        PostedBy: data.postedby,
                        Status: data.status,
                        UserInput: data.userinput,
                        UserEdit: data.useredit,
                        ContactID: data.contactid,
                        DocumentCount: data.documentcount,
                        BatchTotal: data.batchtotal,
                        BatchStatus: data.batchstatus,
                        DebtorName: data.debtorname,
                        RunningCdDescs: data.runningcddescs,
                        DueDay: data.dueday,
                        LastUpdateStamp: record.LastUpdateStamp,
                        CurrentBatchTotal: data.currentbatchtotal,
                        CurrentDocumentCount: data.currentdocumentcount,
                        RowID: data.rowid,
                        TotalAmt: this.isCurrency(totalAmt, this.decimal),
                        AmtAfterDisc: this.isCurrency(amtAfterDisc, this.decimal),
                        CreditTermsCd: data.credittermscd,
                        CreditTermsCdLabel: data.credittermscd
                    }

                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit
                    // this.M_AR_InvoiceH2.CreditTermsCd = data.credittermscd

                    this.setColumnWhere()
                })

                this.$forceUpdate()

                // console.log(this.M_AR_InvoiceH2)

            })
        },
        setColumnWhere() {
            // Lookup Address
            var where = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactID = '" + this.M_AR_InvoiceH2.ContactID + "'"
            this.PI_AddressCd.dataLookUp.InitialWhere = where
            this.$refs.LookUpAddressCd.onChangeTriggered = true
            this.PI_AddressCd.cDefault = this.M_AR_InvoiceH2.AddressCd
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
        this.setColumnWhere()
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

