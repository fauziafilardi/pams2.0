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
                                <b-col md="6" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_billingtype" v-model="M_TN_ContractBilling2.billingtypedesc"  ref="ref_billingtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ContractBilling2.trxtype" :label="M_TN_ContractBilling2.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_TN_ContractBilling2.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_ContractBilling2.lotno" :label="M_TN_ContractBilling2.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_ContractBilling2.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateRangeVuex :prop="PI_billingsequenceno" :valueFrom="M_TN_ContractBilling2.billingsequenceno" :valueTo="M_TN_ContractBilling2.trxdateto" ref="ref_billingsequenceno" @from="MdtRange_billingsequenceno" @to="MdtRange_trxdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ContractBilling2.currencycd" :label="M_TN_ContractBilling2.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_ContractBilling2.credittermscd" :label="M_TN_ContractBilling2.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_ContractBilling2.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex @input="OntotalareaChange" :prop="PI_totalarea" v-model="M_TN_ContractBilling2.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_ContractBilling2.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billingamt" @input="OnbillingamtChange" v-model="M_TN_ContractBilling2.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_amortizemonthlyamt" v-model="M_TN_ContractBilling2.amortizemonthlyamt"  ref="ref_amortizemonthlyamt"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right">
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_status" v-model="M_TN_ContractBilling2.status"  ref="ref_status" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OndiscountcdChange" :prop="PI_discountcd" :value="M_TN_ContractBilling2.discountcd" :label="M_TN_ContractBilling2.discountcdLabel" ref="ref_discountcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_discountamt" v-model="M_TN_ContractBilling2.discountamt"  ref="ref_discountamt"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_amountafterdisc" v-model="M_TN_ContractBilling2.amountafterdisc"  ref="ref_amountafterdisc"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnincludediscountChange" :prop="PI_includediscount" v-model="M_TN_ContractBilling2.includediscount"  ref="ref_includediscount" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_invoiceno" v-model="M_TN_ContractBilling2.invoiceno"  ref="ref_invoiceno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_ContractBilling2.addresscd" :label="M_TN_ContractBilling2.addresscdLabel" ref="ref_addresscd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_ContractBilling2.billingmethod"  ref="ref_billingmethod" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_ContractBilling2.termspayment"  ref="ref_termspayment" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractBilling2.remarks"  ref="ref_remarks" />
                                    </b-col>
                                  </b-row>
                                </b-col>
                  
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
            Module:"TN",
            propList: {
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractBilling2 :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                invoiceno: '',
                trxtype: '',
                modulecd: '',
                applicationno: '',
                lotno: '',
                wono: '',
                pmcontractno: '',
                facilitybookingno: '',
                debtorcd: '',
                installmentno: 0,
                descs: '',
                billingdate: '',
                billingduedate: '',
                trxdatefrom: '',
                trxdateto: '',
                currencycd: '',
                taxcd: '',
                credittermscd: '',
                includediscount: '',
                discountcd: '',
                discountamt: '0',
                totalarea: '0',
                billingrate: '0',
                billingamt: '0',
                baseamt: 0,
                taxamt: 0,
                billingtype: '',
                billingtypedesc: '',
                journaltype: '',
                billingmethod: '',
                termspayment: '',
                amortizestatus: '',
                journalcategory: '',
                addresscontactid: '',
                addresscd: '',
                tempno: '',
                debitno: '',
                postingdate: '',
                postedby: '',
                reasoncd: '',
                reasondescs: '',
                cancelby: '',
                canceldate: '',
                status: '',
                inputmethod: '',
                remarks: '',
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
                amortizemonthlyamt: '0',
                blno: '',
                rowid: 0,
                duedate: '',
                dueday: 0,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                chargetypedescs: ''
                    }
            ,
            PI_billingtype: { 
                cLabel: 'Charge Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetTrxTypeWithTenancyChargeType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: " ModuleCd = 'AR' AND TrxClass in ('I','T') and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_discountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMDiscount'    , 
                    ColumnDB: 'DiscountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: 'DiscountCd,Descs' ,
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:3, 
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
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' and LotNo IN (Select LotNo From TN_ContractLot Where SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' and ApplicationNo= '')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cDisplayColumn: 'LotNo,LotType' ,
            }, 
            PI_amountafterdisc: { 
                cValidate :'', 
                cName: 'amountafterdisc', 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_includediscount: { 
                cValidate :'', 
                cName: 'includediscount', 
                cId: 'rdbincludediscount', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Include Discount', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdate: { 
                cValidate :'', 
                cName: 'billingdate', 
                cLabel: 'Billing Date ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_invoiceno: { 
                cValidate :'', 
                cName: 'invoiceno', 
                cLabel: 'Invoice No', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingsequenceno: { 
                cValidate :'', 
                cName: 'billingsequenceno', 
                cLabel: 'Income Period Date From', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddressSubportfolio'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Address ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'AddressCd,TranslatedAddressType' ,
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 13, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' },{ text: 'In Arrear', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 15, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingduedate: { 
                cValidate :'', 
                cName: 'billingduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:17, 
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
            PI_totalarea: { 
                cValidate :'', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingrate: { 
                cValidate :'', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'required', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount ', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizemonthlyamt: { 
                cValidate :'', 
                cName: 'amortizemonthlyamt', 
                cLabel: 'Monthly Income hly Income ', 
                cLabelSize: 4, 
                cOrder: 21, 
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
            ContractData: [],
            CreditTermDueDay:0
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
      BillingAmount(){
          var ttlArea = this.M_TN_ContractBilling2.totalarea == '' || this.M_TN_ContractBilling2.totalarea == null? 0 : this.M_TN_ContractBilling2.totalarea
          var bilRate = this.M_TN_ContractBilling2.billingrate == '' || this.M_TN_ContractBilling2.billingrate == null? 0 : this.M_TN_ContractBilling2.billingrate
          var bilAmt  = this.M_TN_ContractBilling2.billingamt == '' || this.M_TN_ContractBilling2.billingamt == null? 0 : this.M_TN_ContractBilling2.billingamt

          this.M_TN_ContractBilling2.billingamt = this.isCurrency(parseInt(ttlArea) * parseInt(bilRate), this.decimal)
      },
      CalculateDiscountAmt(){
          this.FnGetARDiscountAmount(parseInt(this.M_TN_ContractBilling2.billingamt), this.M_TN_ContractBilling2.discountcd)
            .then(disc => {
                  if (disc != null){
                      var dataDisc = disc[0]
                      this.M_TN_ContractBilling2.discountamt = this.isCurrency(dataDisc.DiscountAmt, this.decimal)
                      this.M_TN_ContractBilling2.amountafterdisc = this.isCurrency(dataDisc.AmountAfterDisc, this.decimal)
              }
            })
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBilling2.trxtype = data.id
            this.M_TN_ContractBilling2.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              if (data.id && data.id != "") {
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                .then(dt => {
                  if (dt.length == 0) return
                  var datas = dt[0]
                  this.M_TN_ContractBilling2.descs = datas.TrxTypeDescs
                  this.M_TN_ContractBilling2.currencycd = datas.CurrencyCd
                  this.M_TN_ContractBilling2.currencycdLabel = datas.CurrencyCd
                  this.M_TN_ContractBilling2.credittermscd = datas.CreditTermsCd
                  this.M_TN_ContractBilling2.credittermscdLabel = datas.CreditTermsCd

                  var paramGetChargeType = {
                    OptionFunctionCd: "GetChargeType",
                    ModuleCd: "TN",
                    TrxType: data.id
                  }

                  this.FnDynamicFunction(paramGetChargeType)
                  .then(ress => {
                    if (ress == null) return
                    if (ress.length < 1) {
                      return
                    }
                    var datas2 = ress[0]
                    this.M_TN_ContractBilling2.billingtype = datas2.TenancyChargeType
                    this.M_TN_ContractBilling2.billingtypedesc = datas2.ChargeTypeDescs
                  })
                })
              }
            }
        })
        this.$forceUpdate()
        },
        OndiscountcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBilling2.discountcd = data.id
            this.M_TN_ContractBilling2.discountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{discountcd}
            this.CalculateDiscountAmt()
            }
        })
        this.$forceUpdate()
        },
        OnbillingamtChange (data) {
        this.$nextTick(() => {            
            if (this.inputStatus != "VIEW") {
//{discountcd}
            this.CalculateDiscountAmt()
            }
        })
        this.$forceUpdate()
        },
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBilling2.lotno = data.id
            this.M_TN_ContractBilling2.lotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
              var lot = data.id.trim() != ''? data.id.trim() :''
                var param = {
                    OptionFunctionCd: "GetTotalAreaLotNo",
                    ModuleCd: "TN",
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    LotNo:lot
                  }

                  this.FnDynamicFunction(param)
                  .then(ress => {
                    // if (ress == null) return
                    if (ress.length > 0) {
                      this.M_TN_ContractBilling2.totalarea = ress[0].TotalArea
                    }
                    this.RecalculateBillingAmt()
                  })
            }
        })
        this.$forceUpdate()
        },
        OnincludediscountChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{includediscount}
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if (this.M_TN_ContractBilling2.dueday != null && this.M_TN_ContractBilling2.dueday != '') {
                if (data && data != '') {
                  this.M_TN_ContractBilling2.billingduedate = this.dateAdd2( 'd', data, this.M_TN_ContractBilling2.dueday )
                }
              }
            }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBilling2.addresscd = data.id
            this.M_TN_ContractBilling2.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBilling2.currencycd = data.id
            this.M_TN_ContractBilling2.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OnbillingmethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingmethod}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBilling2.credittermscd = data.id
            this.M_TN_ContractBilling2.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetCreditTermsData(data.id).then(dt => {
                if (dt != null) {
                    var data = dt[0]
                    this.M_TN_ContractBilling2.dueday = data.Dueday
                    if (data.Dueday != null && data.Dueday != '') {
                      if (this.M_TN_ContractBilling2.billingdate && this.M_TN_ContractBilling2.billingdate != '') {
                        this.M_TN_ContractBilling2.billingduedate = this.dateAdd2( 'd', this.M_TN_ContractBilling2.billingdate, data.Dueday )
                      }
                    }
                }
              })
            }
        })
        this.$forceUpdate()
        },
        OntermspaymentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{termspayment}
            }
        })
        this.$forceUpdate()
        },
        OnbillingduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingduedate}
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
        OntotalareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.BillingAmount()
            }
        })        
        this.$forceUpdate()
        },
        OnbillingrateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.BillingAmount()
            }
        })        
        this.$forceUpdate()
        },
        AlwaysDisabled(){
          this.PI_amountafterdisc.cProtect = true
        },
        GetTotalAreaFromHeader(){
            var param = {
                  OptionFunctionCd: "GetTotalAreaFromHeader",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: this.DataRowPage1.ApplicationNo
            }
            this.FnDynamicFunction(param)
                .then(ress => {
                  if(ress ==null) return

                  var data = ress[0]
                  this.M_TN_ContractBilling2.totalarea = this.isCurrency(data.TotalArea, this.decimal)        
                })
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
            this.$parent.showForm = false
            
			
            let data = this.$store.getters.GetPage1Data
         
            // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
                if (
                    (data.StatusCd != 'A' && data.ContractStatus != 1) ||
                    (data.StatusCd != 'N' && data.ContractStatus != 1) ||
                    (data.StatusCd == 'C') ||
                    (data.StatusCd == 'X')
                ) {
                    this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }
                else {
                    this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                }
            // }
            this.getContractData(data.ApplicationNo)
            this.M_TN_ContractBilling2.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" Status <> 'X' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and ApplicationNo = '" + data.ApplicationNo + "' "
            this.PI_lotno.dataLookUp.InitialWhere = "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' and LotNo IN (Select LotNo From TN_ContractLot Where SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' and ApplicationNo= '"+this.DataRowPage1.ApplicationNo+"')"   , 
            this.PI_addresscd.dataLookUp.InitialWhere = "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' and (BillingStatus = 'Y' AND SubportfoliCd ='" +this.getDataUser().SubPortfolioCd+ "' AND  (ContactId='" +this.DataRowPage1.ContactId+ "' OR ContactID IN (SELECT ContactID FROM TN_ContractOccupant WHERE SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "' AND ApplicationNo = '" +this.DataRowPage1.ApplicationNo+ "')))"

            // this.propList.initialWhere =" BillingType = 'O' AND Status <> 'X' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and ApplicationNo = '" + data.ApplicationNo + "' "
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
          var param = {			
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            ApplicationNo: this.M_TN_ContractBilling2.applicationno,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BillingType: this.M_TN_ContractBilling2.billingtype,
            TrxType: this.M_TN_ContractBilling2.trxtype == '' || this.M_TN_ContractBilling2.trxtype == null ? 'NULL' : this.M_TN_ContractBilling2.trxtype ,
            Descs: this.M_TN_ContractBilling2.descs,
            BillingDate: this.M_TN_ContractBilling2.billingdate == '' || this.M_TN_ContractBilling2.billingdate == null ? 'NULL' : this.M_TN_ContractBilling2.billingdate ,
            BillingDueDate: this.M_TN_ContractBilling2.billingduedate == '' || this.M_TN_ContractBilling2.billingduedate == null ? 'NULL' : this.M_TN_ContractBilling2.billingduedate ,
            TrxDateFrom: this.M_TN_ContractBilling2.trxdatefrom,
            TrxDateTo: this.M_TN_ContractBilling2.trxdateto == '' || this.M_TN_ContractBilling2.trxdateto == null ? 'NULL' : this.M_TN_ContractBilling2.trxdateto ,
            CurrencyCd: this.M_TN_ContractBilling2.currencycd == '' || this.M_TN_ContractBilling2.currencycd == null ? 'NULL' : this.M_TN_ContractBilling2.currencycd ,
            CreditTermsCd: this.M_TN_ContractBilling2.credittermscd == '' || this.M_TN_ContractBilling2.credittermscd == null ? 'NULL' : this.M_TN_ContractBilling2.credittermscd ,
            LotNo: this.M_TN_ContractBilling2.lotno == '' || this.M_TN_ContractBilling2.lotno == null ? 'NULL' : this.M_TN_ContractBilling2.lotno ,
            TotalArea: this.M_TN_ContractBilling2.totalarea ? this.replaceAllString(this.M_TN_ContractBilling2.totalarea,',','','number') : 0 ,
            BillingRate: this.M_TN_ContractBilling2.billingrate ? this.replaceAllString(this.M_TN_ContractBilling2.billingrate,',','','number') : 0 ,
            BillingAmt: this.M_TN_ContractBilling2.billingamt ? this.replaceAllString(this.M_TN_ContractBilling2.billingamt,',','','number') : 0 ,
            DiscountCd: this.M_TN_ContractBilling2.discountcd == '' || this.M_TN_ContractBilling2.discountcd == null ? 'NULL' : this.M_TN_ContractBilling2.discountcd ,
            DiscountAmount: this.M_TN_ContractBilling2.discountamt ? this.replaceAllString(this.M_TN_ContractBilling2.discountamt,',','','number') : 0,
            IncludeDiscount: this.M_TN_ContractBilling2.includediscount,
            MonthlyIncome: this.M_TN_ContractBilling2.amortizemonthlyamt ? this.replaceAllString(this.M_TN_ContractBilling2.amortizemonthlyamt,',','','number') : 0,
            AddressCd: this.M_TN_ContractBilling2.addresscd == '' || this.M_TN_ContractBilling2.addresscd == null ? 'NULL' : this.M_TN_ContractBilling2.addresscd ,
            AddressContactId: this.M_TN_ContractBilling2.addresscontactid && this.M_TN_ContractBilling2.addresscontactid != '' ? this.M_TN_ContractBilling2.addresscontactid : this.M_TN_ContractBilling2.contactid,
            Remarks: this.M_TN_ContractBilling2.remarks,
            DebtorCd: this.M_TN_ContractBilling2.debtorcd,
            BillingMethod: this.M_TN_ContractBilling2.billingmethod,
            TermsPayment: this.M_TN_ContractBilling2.termspayment,
            UserInput: this.getDataUser().UserId                 
          }

          this.postJSON(this.getUrlInsert(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultInsert(response.Message)
          })
        },
        M_Update() {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            ApplicationNo: this.M_TN_ContractBilling2.applicationno,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BillingType: this.M_TN_ContractBilling2.billingtype,
            BillingSequenceNo: this.M_TN_ContractBilling2.billingsequenceno == '' || this.M_TN_ContractBilling2.billingsequenceno == null ? 'NULL' : this.M_TN_ContractBilling2.billingsequenceno ,
            TrxType: this.M_TN_ContractBilling2.trxtype == '' || this.M_TN_ContractBilling2.trxtype == null ? 'NULL' : this.M_TN_ContractBilling2.trxtype ,
            Descs: this.M_TN_ContractBilling2.descs,
            BillingDate: this.M_TN_ContractBilling2.billingdate == '' || this.M_TN_ContractBilling2.billingdate == null ? 'NULL' : this.M_TN_ContractBilling2.billingdate ,
            BillingDueDate: this.M_TN_ContractBilling2.billingduedate == '' || this.M_TN_ContractBilling2.billingduedate == null ? 'NULL' : this.M_TN_ContractBilling2.billingduedate ,
            TrxDateFrom: this.M_TN_ContractBilling2.trxdatefrom,
            TrxDateTo: this.M_TN_ContractBilling2.trxdateto == '' || this.M_TN_ContractBilling2.trxdateto == null ? 'NULL' : this.M_TN_ContractBilling2.trxdateto ,
            CurrencyCd: this.M_TN_ContractBilling2.currencycd == '' || this.M_TN_ContractBilling2.currencycd == null ? 'NULL' : this.M_TN_ContractBilling2.currencycd ,
            CreditTermsCd: this.M_TN_ContractBilling2.credittermscd == '' || this.M_TN_ContractBilling2.credittermscd == null ? 'NULL' : this.M_TN_ContractBilling2.credittermscd ,
            LotNo: this.M_TN_ContractBilling2.lotno == '' || this.M_TN_ContractBilling2.lotno == null ? 'NULL' : this.M_TN_ContractBilling2.lotno ,
            TotalArea: this.M_TN_ContractBilling2.totalarea ? this.replaceAllString(this.M_TN_ContractBilling2.totalarea,',','','number') : 0 ,
            BillingRate: this.M_TN_ContractBilling2.billingrate ? this.replaceAllString(this.M_TN_ContractBilling2.billingrate,',','','number') : 0 ,
            BillingAmt: this.M_TN_ContractBilling2.billingamt ? this.replaceAllString(this.M_TN_ContractBilling2.billingamt,',','','number') : 0 ,
            DiscountCd: this.M_TN_ContractBilling2.discountcd == '' || this.M_TN_ContractBilling2.discountcd == null ? 'NULL' : this.M_TN_ContractBilling2.discountcd ,
            DiscountAmount: this.M_TN_ContractBilling2.discountamt ? this.replaceAllString(this.M_TN_ContractBilling2.discountamt,',','','number') : 0,
            IncludeDiscount: this.M_TN_ContractBilling2.includediscount,
            MonthlyIncome: this.M_TN_ContractBilling2.amortizemonthlyamt ? this.replaceAllString(this.M_TN_ContractBilling2.amortizemonthlyamt,',','','number') : 0,
            AddressCd: this.M_TN_ContractBilling2.addresscd == '' || this.M_TN_ContractBilling2.addresscd == null ? 'NULL' : this.M_TN_ContractBilling2.addresscd ,
            AddressContactId: this.M_TN_ContractBilling2.addresscontactid && this.M_TN_ContractBilling2.addresscontactid != '' ? this.M_TN_ContractBilling2.addresscontactid : this.M_TN_ContractBilling2.contactid,
            Remarks: this.M_TN_ContractBilling2.remarks,
            BillingMethod: this.M_TN_ContractBilling2.billingmethod,
            TermsPayment: this.M_TN_ContractBilling2.termspayment,
            UserEdit: this.getDataUser().UserId ,
            LastUpdateStamp: this.M_TN_ContractBilling2.lastupdatestamp
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
            this.M_TN_ContractBilling2 = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                invoiceno: '',
                trxtype: '',
                modulecd: '',
                applicationno: '',
                lotno: '',
                wono: '',
                pmcontractno: '',
                facilitybookingno: '',
                debtorcd: '',
                installmentno: 0,
                descs: '',
                billingdate: '',
                billingduedate: '',
                trxdatefrom: '',
                trxdateto: '',
                currencycd: '',
                taxcd: '',
                credittermscd: '',
                includediscount: 'N',
                discountcd: '',
                discountamt: '',
                totalarea: '',//this.isCurrency(this.ContractData.TotalArea, this.decimal),
                billingrate: '',
                billingamt: '',
                baseamt: '',
                taxamt: '',
                billingtype: '',
                billingtypedesc: '',
                journaltype: '',
                billingmethod: 'C',
                termspayment: 'R',
                amortizestatus: '',
                journalcategory: '',
                addresscontactid: '',
                addresscd: '',
                tempno: '',
                debitno: '',
                postingdate: '',
                postedby: '',
                reasoncd: '',
                reasondescs: '',
                cancelby: '',
                canceldate: '',
                status: 'New',
                inputmethod: '',
                remarks: '',
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
                amortizemonthlyamt: '0',
                blno: '',
                rowid: 0,
                duedate: '',
                dueday: 0,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                chargetypedescs: ''
                    }
            		
		},
        M_New(){
          this.M_TN_ContractBilling2.contactid = this.ContractData.ContactId
          let data = this.$store.getters.GetPage1Data
          this.M_TN_ContractBilling2.applicationno = data.ApplicationNo
          this.GetTotalAreaFromHeader()
          this.AlwaysDisabled()

        },
        M_Edit(){
          this.AlwaysDisabled()

        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
          var dataDelete = []

          data.forEach((value) => {
              dataDelete.push({
                  ApplicationNo: this.DataRowPage1.ApplicationNo,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  BillingSequenceNo: value.BillingSequenceNo,
                  LastUpdateStamp: value.LastUpdateStamp,
                  _Message_: "Billing Sequence No " + value.BillingSequenceNo
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
                LineNo: this.$parent.data.PageOrder
,                applicationno: record.ApplicationNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: record.BillingSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractBilling2 = {
                subportfoliocd: data.subportfoliocd,
                billingsequenceno: record.BillingSequenceNo,
                invoiceno: data.debitno,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                applicationno: record.ApplicationNo,
                lotno: data.lotno,
                wono: data.wono,
                pmcontractno: data.pmcontractno,
                facilitybookingno: data.facilitybookingno,
                debtorcd: data.debtorcd,
                installmentno: this.isCurrency(data.installmentno, this.decimal),
                descs: data.descs,
                billingdate: data.billingdate,
                billingduedate: data.billingduedate,
                trxdatefrom: data.trxdatefrom,
                trxdateto: data.trxdateto,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                credittermscd: data.credittermscd,
                includediscount: data.includediscount,
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                totalarea: this.isCurrency(data.totalarea, this.decimal),
                billingrate: this.isCurrency(data.billingrate, this.decimal),
                billingamt: this.isCurrency(data.billingamt, this.decimal),
                baseamt: this.isCurrency(data.baseamt, this.decimal),
                taxamt: this.isCurrency(data.taxamt, this.decimal),
                billingtype: data.billingtype,
                billingtypedesc: data.chargetypedescs,
                journaltype: data.journaltype,
                billingmethod: data.billingmethod,
                termspayment: data.termspayment,
                amortizestatus: data.amortizestatus,
                journalcategory: data.journalcategory,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                tempno: data.tempno,
                debitno: data.debitno,
                postingdate: data.postingdate,
                postedby: data.postedby,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                cancelby: data.cancelby,
                canceldate: data.canceldate,
                status: data.statusdesc,
                inputmethod: data.inputmethod,
                remarks: data.remarks,
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
                controlsequenceno: this.isCurrency(data.controlsequenceno, this.decimal),
                amortizemonthlyamt: this.isCurrency(data.amortizemonthlyamt, this.decimal),
                blno: data.blno,
                rowid: this.isCurrency(data.rowid, this.decimal),
                duedate: data.duedate,
                dueday: data.dueday,
                trxdescs: data.trxdescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                discountdescs: data.discountdescs,
                address1: data.address1,
                credittermsdescs: data.credittermsdescs,
                contactid: data.contactid,
                chargetypedescs: data.chargetypedescs
                    }
                 

                this.M_TN_ContractBilling2.trxtypeLabel = this.M_TN_ContractBilling2.trxtype != null && this.M_TN_ContractBilling2.trxtype != '' ? data.trxtype + this.separator + data.trxdescs :'' 
                this.M_TN_ContractBilling2.discountcdLabel = this.M_TN_ContractBilling2.discountcd != null && this.M_TN_ContractBilling2.discountcd != '' ? data.discountcd + this.separator + data.discountdescs :'' 
                this.M_TN_ContractBilling2.lotnoLabel = this.M_TN_ContractBilling2.lotno != null && this.M_TN_ContractBilling2.lotno != '' ? data.lotno + this.separator  :'' 
                this.M_TN_ContractBilling2.addresscdLabel = this.M_TN_ContractBilling2.addresscd != null && this.M_TN_ContractBilling2.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_ContractBilling2.currencycdLabel = this.M_TN_ContractBilling2.currencycd != null && this.M_TN_ContractBilling2.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_ContractBilling2.credittermscdLabel = this.M_TN_ContractBilling2.credittermscd != null && this.M_TN_ContractBilling2.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_billingsequenceno (data) {
            this.M_TN_ContractBilling2.billingsequenceno = data
        }
        ,MdtRange_trxdateto (data) {
            this.M_TN_ContractBilling2.trxdateto = data
        },
        getContractData (appNo) {
          var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: appNo
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) {
              return
            }
            this.ContractData = ress[0]
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

