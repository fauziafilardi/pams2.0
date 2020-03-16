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
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_LOOCLChargesAddendum.trxtype" :label="M_TN_LOOCLChargesAddendum.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnbillingcycleChange" :prop="PI_billingcycle" :value="M_TN_LOOCLChargesAddendum.billingcycle" :label="M_TN_LOOCLChargesAddendum.billingcycleLabel" ref="ref_billingcycle"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_LOOCLChargesAddendum.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billinginterval" v-model="M_TN_LOOCLChargesAddendum.billinginterval"  ref="ref_billinginterval"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnchargetypeChange" :prop="PI_chargetype" :value="M_TN_LOOCLChargesAddendum.chargetype" :label="M_TN_LOOCLChargesAddendum.chargetypeLabel" ref="ref_chargetype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingday" v-model="M_TN_LOOCLChargesAddendum.billingday"  ref="ref_billingday"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_LOOCLChargesAddendum.lotno" :label="M_TN_LOOCLChargesAddendum.lotnoLabel" ref="ref_lotno"/> -->
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_LOOCLChargesAddendum.addresscd" :label="M_TN_LOOCLChargesAddendum.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingmonth" v-model="M_TN_LOOCLChargesAddendum.billingmonth"  ref="ref_billingmonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOOCLChargesAddendum.currencycd" :label="M_TN_LOOCLChargesAddendum.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingdueday" v-model="M_TN_LOOCLChargesAddendum.billingdueday"  ref="ref_billingdueday"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_LOOCLChargesAddendum.credittermscd" :label="M_TN_LOOCLChargesAddendum.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingduemonth" v-model="M_TN_LOOCLChargesAddendum.billingduemonth"  ref="ref_billingduemonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_LOOCLChargesAddendum.startdate" :valueTo="M_TN_LOOCLChargesAddendum.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totalarea" v-model="M_TN_LOOCLChargesAddendum.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_LOOCLChargesAddendum.termspayment"  ref="ref_termspayment" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_LOOCLChargesAddendum.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargebasisChange" :prop="PI_chargebasis" v-model="M_TN_LOOCLChargesAddendum.chargebasis"  ref="ref_chargebasis" />
                                      </b-col>
                                      <b-col md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_amortizemonthlyamt" v-model="M_TN_LOOCLChargesAddendum.amortizemonthlyamt"  ref="ref_amortizemonthlyamt"/> -->
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputRadioButtonVuex @input="OninstallmentmethodChange" :prop="PI_installmentmethod" v-model="M_TN_LOOCLChargesAddendum.installmentmethod"  ref="ref_installmentmethod" /> -->
                                        <ABSinputRadioButtonVuex @input="OnbillingperioddescsChange" :prop="PI_billingperioddescs" v-model="M_TN_LOOCLChargesAddendum.billingperioddescs"  ref="ref_billingperioddescs" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingpercent" v-model="M_TN_LOOCLChargesAddendum.billingpercent"  ref="ref_billingpercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingnumberingdescsChange" :prop="PI_billingnumberingdescs" v-model="M_TN_LOOCLChargesAddendum.billingnumberingdescs"  ref="ref_billingnumberingdescs" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingfrequency" v-model="M_TN_LOOCLChargesAddendum.billingfrequency"  ref="ref_billingfrequency"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_LOOCLChargesAddendum.billingmethod"  ref="ref_billingmethod" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_LOOCLChargesAddendum.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOCLChargesAddendum.remarks"  ref="ref_remarks" />
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

            M_TN_LOOCLChargesAddendum :{
                chargessequenceno: 0,
                tenancychargetype: '',
                chargetype: '',
                lotno: '',
                trxtype: '',
                descs: '',
                currencycd: '',
                credittermscd: '',
                chargebasis: 'A',
                installmentmethod: '',
                billingcycle: 'M',
                billingperioddescs: 'Y',
                billingmethod: 'F',
                billinginterval: '0',
                billingday: '0',
                billingmonth: '0',
                billingdueday: '0',
                billingduemonth: '0',
                totalarea: '0',
                billingrate: '0',
                amortizemonthlyamt: '0',
                billingpercent: '0',
                billingfrequency: '0',
                billingamt: '0',
                termspayment: 'R',
                startdate: '',
                enddate: '',
                addresscontactid: '',
                addresscd: '',
                status: '',
                remarks: '',
                billingnumberingdescs: 'Y',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                lastupdatestamp: 0,
                startbillingnumbering: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: 0,
                rowid: 0,
                contractamt: 0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeTNCL'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type ', 
                cKey: true, 
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
            PI_billingcycle: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'billingcycle', 
                cLabel: 'Billing Cycle', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'M', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Daily', id: 'D' },{ label: 'Weekly', id: 'W' },{ label: 'Monthly', id: 'M' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billinginterval: { 
                cValidate :'required|max:5', 
                cName: 'billinginterval', 
                cLabel: 'Interval ', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargetype: { 
                dataLookUp: {
                  LookUpCd: 'GetDDLChargeType'    , 
                  ColumnDB: 'ChargeType'   , 
                  InitialWhere: "",
                  ParamWhere: ''  
                }, 
                cValidate :'', 
                cName: 'chargetype', 
                cLabel: 'Charge Type', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
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
            PI_billingday: { 
                cValidate :'required', 
                cName: 'billingday', 
                cLabel: 'Billing Day ', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            // PI_lotno: { 
            //     dataLookUp: { 
            //         LookUpCd: 'GetLookupTNLot'    , 
            //         ColumnDB: 'LotNo'   , 
            //         InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
            //         ParamWhere: ''  
            //             }, 
            //     cValidate :'', 
            //     cName: 'lotno', 
            //     cLabel: 'Lot No', 
            //     cKey: false, 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cTriggered: false, 
            //     cDefault: '', 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cAsync:  false, 
            //     cFilter: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //     cStatic: false, 
            //     cOption: [], 
            //     cMasterUrl: '' ,
            //     cDisplayColumn: 'LotNo,LotType' ,
            // }, 
            PI_billingmonth: { 
                cValidate :'required', 
                cName: 'billingmonth', 
                cLabel: 'Billing Month ', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
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
                cLabel: 'Billing Address ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cMasterUrl: 'CM/CM_Address?oid=E7AC288B0F2D41445904D071BA37AAFF&ContactId=' ,
                cDisplayColumn: 'AddressCd,TranslatedAddressType' ,
            }, 
            PI_billingdueday: { 
                cValidate :'', 
                cName: 'billingdueday', 
                cLabel: 'Billing Due Day', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_billingduemonth: { 
                cValidate :'', 
                cName: 'billingduemonth', 
                cLabel: 'Billing Due Month', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_totalarea: { 
                cValidate :'', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Charge Date', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
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
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' },{ text: 'In Arrear', value: 'C' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizemonthlyamt: { 
                cValidate :'', 
                cName: 'amortizemonthlyamt', 
                cLabel: 'Monthly Income', 
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
            // PI_installmentmethod: { 
            //     cValidate :'', 
            //     cName: 'installmentmethod', 
            //     cId: 'rdbinstallmentmethod', 
            //     cRadioOptions: [{ text: 'Rental Range', value: 'R' },{ text: 'Average', value: 'A' },{ text: 'Normal', value: 'N' },], 
            //     cRadioDefaultOption: '', 
            //     cLabel:'Installment Method', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cProtect: true, 
            //     cVisible:  true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_billingpercent: { 
                cValidate :'', 
                cName: 'billingpercent', 
                cLabel: 'Billing Percent', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargebasis: { 
                cValidate :'', 
                cName: 'chargebasis', 
                cId: 'rdbchargebasis', 
                cRadioOptions: [{ text: 'Fix', value: 'F' },{ text: 'Per Area', value: 'A' },{ text: 'Contract Amount', value: 'C' },], 
                cRadioDefaultOption: 'A', 
                cLabel:'Charge Basis', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingfrequency: { 
                cValidate :'', 
                cName: 'billingfrequency', 
                cLabel: 'Billing Frequency', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingperioddescs: { 
                cValidate :'', 
                cName: 'billingperioddescs', 
                cId: 'rdbbillingperioddescs', 
                cRadioOptions: [{ text: 'Include', value: 'Y' },{ text: 'Exclude', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Billing Period Descs', 
                cLabelSize: 4, 
                cOrder: 10, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 23, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingnumberingdescs: { 
                cValidate :'', 
                cName: 'billingnumberingdescs', 
                cId: 'rdbbillingnumberingdescs', 
                cRadioOptions: [{ text: 'Include', value: 'Y' },{ text: 'Exclude', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Billing Numbering Descs', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:23, 
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
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: 'F', 
                cLabel:'Billing Method', 
                cLabelSize: 4, 
                cOrder: 12, 
                cProtect: false, 
                cVisible:  true, 
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
            ContractData: []
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
  },
    GetDataBy1(){
      return this.$store.getters.GetPage1GetDataBy
    }
  },
    methods: {
      getContractData (FormStatus) {
          var param = {
            OptionFunctionCd: "GetContractAddendumData",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOCLChargesAddendum.applicationno,
            AddendumSequenceNo: this.M_TN_LOOCLChargesAddendum.addendumsequenceno
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) {
              return
            }
            // data = ress[0]
            var data = ress[0]

            // alert(JSON.stringify(ress,null,2))
            this.M_TN_LOOCLChargesAddendum.billingamt = this.isCurrency(data.ContractAmt, this.decimal)
            this.M_TN_LOOCLChargesAddendum.contactid = data.ContactId
            this.M_TN_LOOCLChargesAddendum.startdate = this.momentDateFormat(data.RCD, 'YYYY-MM-DD')
            this.M_TN_LOOCLChargesAddendum.enddate = this.momentDateFormat(data.RED, 'YYYY-MM-DD')

            this.PI_addresscd.dataLookUp.InitialWhere = "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' and BillingStatus = 'Y' AND (ContactId='" + data.ContactId + "' OR ContactID IN (SELECT ContactID FROM TN_ContractOccupantAddendum WHERE SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + this.M_TN_LOOCLChargesAddendum.applicationno + "' AND AddendumSequenceNo = '" + this.M_TN_LOOCLChargesAddendum.addendumsequenceno + "'))"
            
            if(FormStatus == "A"){
              this.M_TN_LOOCLChargesAddendum.startdate = data.RCD
              this.M_TN_LOOCLChargesAddendum.enddate = data.RED
            }

            if (data.ChargeArea == "G") {
              this.M_TN_LOOCLChargesAddendum.totalarea = this.isCurrency(data.TotalGrossArea, this.decimal)
            } else if (data.ChargeArea == "S") {
              this.M_TN_LOOCLChargesAddendum.totalarea = this.isCurrency(data.TotalSemiGrossArea, this.decimal)
            } else if (data.ChargeArea == "N") {
              this.M_TN_LOOCLChargesAddendum.totalarea = this.isCurrency(data.TotalNetArea, this.decimal)
            }

          })
        },
      GetLeasingPolicyDPDataDefault(){
        console.log('A')
        var param = {
          OptionFunctionCd: "GetLeasingPolicyDPData",
          ModuleCd: this.Module,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOCLChargesAddendum.applicationno
        }
        this.FnDynamicFunction(param)
        .then(ress => {
          if (ress == null) return
            var data = ress[0]

            this.M_TN_LOOCLChargesAddendum.billingpercent = this.isCurrency(data.DPPPercentage, this.decimal)
            this.M_TN_LOOCLChargesAddendum.billingfrequency = this.isCurrency(data.DPSchedule, this.decimal)
            this.M_TN_LOOCLChargesAddendum.billingamt = this.isCurrency(data.ContractAmt * data.DPPPercentage / 100 / data.DPSchedule, this.decimal)
        })
        this.M_TN_LOOCLChargesAddendum.billingrate = this.isCurrency(1, this.decimal)
        this.M_TN_LOOCLChargesAddendum.chargebasis = "C"
      },
      GetLeasingPolicyRentalDataDefault(){
        console.log('B')
        var param = {
          OptionFunctionCd: "GetLeasingPolicyRentalData",
          ModuleCd: this.Module,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOCLChargesAddendum.applicationno,
          AddendumSequenceNo: this.M_TN_LOOCLChargesAddendum.addendumsequenceno

        }
        this.FnDynamicFunction(param)
        .then(ress => {
          if (ress == null) return
            var data = ress[0]

            this.M_TN_LOOCLChargesAddendum.billingamt = this.isCurrency(data.ContractAmt, this.decimal)
        })
        this.M_TN_LOOCLChargesAddendum.billingrate = this.isCurrency(1, this.decimal)
        // this.M_TN_LOOCLChargesAddendum.billingpercent = ""
        this.M_TN_LOOCLChargesAddendum.billingfrequency = ""
      },
      GetCreditTerms(){
        var CreditTermsCd = ""
        if(this.M_TN_LOOCLChargesAddendum.trxtype != "" || this.M_TN_LOOCLChargesAddendum.trxtype != null){
          var param = {
            OptionFunctionCd: "GetCreditTerms",
            ModuleCdV2: 'AR',            
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ModuleCd: 'AR',
            TrxType: this.M_TN_LOOCLChargesAddendum.trxtype
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
              var data = ress[0]
              // this.M_TN_LOOCLChargesAddendum.credittermscd = data.CreditTermsCd
              // this.M_TN_LOOCLChargesAddendum.credittermscdLabel = data.CreditTermsCd
              this.CreditTermsCd = data.CreditTermsCd
          })

          if(this.M_TN_LOOCLChargesAddendum.credittermscd == '' || this.M_TN_LOOCLChargesAddendum.credittermscd == null){
            var param = {
              OptionFunctionCd: "GetCreditTerms2",
              ModuleCdV2: "AR",
              ModuleCd: "AR",
              TrxType: this.M_TN_LOOCLChargesAddendum.trxtype
            }
            this.FnDynamicFunction(param)
            .then(ress => {
              if (ress == null) return
                var data = ress[0]
                this.CreditTermsCd = data.CreditTermsCd
            })
          }
        }
        this.M_TN_LOOCLChargesAddendum.credittermscd = this.CreditTermsCd
        this.M_TN_LOOCLChargesAddendum.credittermscdLabel = this.CreditTermsCd
      },
      SetDefaultValue(){  
        this.M_TN_LOOCLChargesAddendum.billingpercent = ""
        this.M_TN_LOOCLChargesAddendum.billingrate = ""
        this.M_TN_LOOCLChargesAddendum.billingamt = "" 
        this.M_TN_LOOCLChargesAddendum.billingfrequency = ""

        this.PI_billingpercent.cProtect = false
        this.PI_billingrate.cProtect = false
        this.PI_billingamt.cProtect = false
        this.PI_billingfrequency.cProtect = false
        this.PI_chargebasis.cProtect = false

        this.GetCreditTerms()
      },
      CheckContractAmount(){
        var param = {
          OptionFunctionCd: "CheckContractChargesPercentAddendum",
          ModuleCd: this.Module,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          ApplicationNo: this.M_TN_LOOCLChargesAddendum.applicationno,
          AddendumSequenceNo: this.M_TN_LOOCLChargesAddendum.addendumsequenceno,
          ChargesSequenceNo: '',
          Status: 'A'
        }
      },     
        OntrxtypeChange (data) {
        this.$nextTick(() => {
          
            this.M_TN_LOOCLChargesAddendum.trxtype = data.id
            this.M_TN_LOOCLChargesAddendum.trxtypeLabel = data.label
            this.M_TN_LOOCLChargesAddendum.descs = data.Descs
            this.M_TN_LOOCLChargesAddendum.chargetype = data.TenancyChargeType
            this.M_TN_LOOCLChargesAddendum.chargetypeLabel = data.TenancyChargeType +'|'+data.TenancyChargeTypeDescription            

            if (this.inputStatus != "VIEW") {
                  var param = {
                    OptionFunctionCd: "GetTransactionTypeMapping",
                    ModuleCd: this.Module,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TrxType:data.id
                  }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null) return
                  var dataMap = ress[0]
                  // alert(JSON.stringify(dataMap,null,2))
                  this.M_TN_LOOCLChargesAddendum.billingday = dataMap.BillingDay
                  this.M_TN_LOOCLChargesAddendum.billingmonth = dataMap.BillingMonth
                  this.M_TN_LOOCLChargesAddendum.billingdueday = dataMap.BillingDueDay
                  this.M_TN_LOOCLChargesAddendum.billingduemonth = dataMap.BillingDueMonth

                  this.M_TN_LOOCLChargesAddendum.currencycd = dataMap.CurrencyCd
                  this.M_TN_LOOCLChargesAddendum.credittermscd = dataMap.CreditTermsCd  

                })

                this.SetDefaultValue()
            
                console.log(data.TenancyChargeType)
                switch (data.TenancyChargeType) {              
                  case "A":
                      this.GetLeasingPolicyDPDataDefault()
                    break;            
                  case "B":
                      this.GetLeasingPolicyRentalDataDefault()
                    break;
                }
            }
        })
        this.$forceUpdate()
        },
        OnbillingcycleChange (data) {
          this.$nextTick(() => {
            this.M_TN_LOOCLChargesAddendum.billingcycle = data.id
            if (this.inputStatus != "VIEW") {
            }
          })
          this.$forceUpdate()
        },
        OnbillingrateChange(data){
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(this.M_TN_LOOCLChargesAddendum.billingamt == '' )
                this.M_TN_LOOCLChargesAddendum.billingamt = data
              }
          })
        },
//         OnlotnoChange (data) {
//         this.$nextTick(() => {
//             this.M_TN_LOOCLChargesAddendum.lotno = data.id
//             this.M_TN_LOOCLChargesAddendum.lotnoLabel = data.label
//             if (this.inputStatus != "VIEW") {
// //{lotno}
//             }
//         })
//         this.$forceUpdate()
//         },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLChargesAddendum.addresscd = data.id
            this.M_TN_LOOCLChargesAddendum.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLChargesAddendum.currencycd = data.id
            this.M_TN_LOOCLChargesAddendum.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLChargesAddendum.credittermscd = data.id
            this.M_TN_LOOCLChargesAddendum.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{credittermscd}
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
//         OninstallmentmethodChange (data) {
//         this.$nextTick(() => {
//             if (this.inputStatus != "VIEW") {
// //{installmentmethod}
//             }
//         })
//         this.$forceUpdate()
//         },
        OnchargebasisChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargebasis}
            }
        })
        this.$forceUpdate()
        },
        OnbillingperioddescsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingperioddescs}
            }
        })
        this.$forceUpdate()
        },
        OnbillingnumberingdescsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingnumberingdescs}
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
        OnbillingmethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingmethod}
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
                // if (
                //     (data.Status != 'A' && data.ContractStatus != 1) ||
                //     (data.Status != 'N' && data.ContractStatus != 1) ||
                //     (data.Status == 'C') ||
                //     (data.Status == 'X')
                // ) {
                //     this.FormType = "View"
                //     this.$store.commit('setFormType','View')
                //     this.getToolbar().ProcessPS()
                // }
                // else {
                //     this.FormType = "List"
                //     this.$store.commit('setFormType','List')
                //     this.getToolbar().ProcessPS()
                // }
            // }
            // console.log(JSON.stringify(data,null,2))
            // console.log(JSON.stringify(this.GetDataBy1,null,2))
            this.M_TN_LOOCLChargesAddendum.applicationno = data.ApplicationNo
            this.M_TN_LOOCLChargesAddendum.addendumsequenceno = data.AddendumSequenceNo   
            this.M_TN_LOOCLChargesAddendum.startdate = this.GetDataBy1.utilitiesstartdate
            this.M_TN_LOOCLChargesAddendum.enddate = this.GetDataBy1.utilitiesenddate         
            this.getContractData()
            this.propList.initialWhere =" SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and ApplicationNo = '"+ data.ApplicationNo +"' and AddendumSequenceNo = '" + data.AddendumSequenceNo + "' "
            // this.PI_addresscd.dataLookUp.InitialWhere = " SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ( BillingStatus = 'Y' AND ((ContactId='" + this.DataRowPage1.ContactId + "' AND SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "') OR ContactID IN (SELECT ContactID FROM TN_ContractOccupant WHERE SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "' AND ApplicationNo = '" +this.DataRowPage1.ApplicationNo+ "'))) "
            this.PI_addresscd.dataLookUp.InitialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and BillingStatus = 'Y' AND (ContactId='" + this.DataRowPage1.ContactId + "' OR ContactID IN (SELECT ContactID FROM TN_ContractOccupantAddendum WHERE SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "' AND ApplicationNo = '" +this.DataRowPage1.ApplicationNo+ "' AND AddendumSequenceNo = '" + this.DataRowPage1.AddendumSequenceNo + "'))"
            this.PI_addresscd.cMasterUrl = 'Custom/CS_ContactAddress?oid=E7AC288B0F2D41445904D071BA37AAFF&ContactId=' + data.ContactId
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.DataRowPage1.ApplicationNo,  
              AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
              ChargeType: this.M_TN_LOOCLChargesAddendum.chargetype,
              TrxType: this.M_TN_LOOCLChargesAddendum.trxtype == '' || this.M_TN_LOOCLChargesAddendum.trxtype == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.trxtype ,
              Descs: this.M_TN_LOOCLChargesAddendum.descs,
              CurrencyCd: this.M_TN_LOOCLChargesAddendum.currencycd == '' || this.M_TN_LOOCLChargesAddendum.currencycd == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.currencycd ,
              CreditTermsCd: this.M_TN_LOOCLChargesAddendum.credittermscd == '' || this.M_TN_LOOCLChargesAddendum.credittermscd == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.credittermscd ,
              ChargeBasis: this.M_TN_LOOCLChargesAddendum.chargebasis,
              BillingCycle: this.M_TN_LOOCLChargesAddendum.billingcycle,
              InstallmentMethod: "N",
              BillingPeriodDescs: this.M_TN_LOOCLChargesAddendum.billingperioddescs,
              BillingNumberingDescs: this.M_TN_LOOCLChargesAddendum.billingnumberingdescs,
              BillingMethod: this.M_TN_LOOCLChargesAddendum.billingmethod,
              BillingInterval: this.M_TN_LOOCLChargesAddendum.billinginterval,
              BillingDay: this.M_TN_LOOCLChargesAddendum.billingday,
              BillingMonth: this.M_TN_LOOCLChargesAddendum.billingmonth,
              BillingDueDay: this.M_TN_LOOCLChargesAddendum.billingdueday,
              BillingDueMonth: this.M_TN_LOOCLChargesAddendum.billingduemonth,
              TotalArea: this.M_TN_LOOCLChargesAddendum.totalarea ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.totalarea,',','','number') : 0 ,
              BillingRate: this.M_TN_LOOCLChargesAddendum.billingrate ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingrate,',','','number') : 0 ,
              BillingPercent: this.M_TN_LOOCLChargesAddendum.billingpercent ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingpercent,',','','number') : 0 ,
              BillingFrequency: this.M_TN_LOOCLChargesAddendum.billingfrequency ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingfrequency,',','','number') : 0,
              BillingAmt: this.M_TN_LOOCLChargesAddendum.billingamt ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingamt,',','','number') : 0 ,
              TermsPayment: this.M_TN_LOOCLChargesAddendum.termspayment,
              StartDate: this.M_TN_LOOCLChargesAddendum.startdate == '' || this.M_TN_LOOCLChargesAddendum.startdate == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.startdate ,
              EndDate: this.M_TN_LOOCLChargesAddendum.enddate,
              AddressContactId: this.M_TN_LOOCLChargesAddendum.addresscontactid && this.M_TN_LOOCLChargesAddendum.addresscontactid != '' ? this.M_TN_LOOCLChargesAddendum.addresscontactid : this.M_TN_LOOCLChargesAddendum.contactid,
              AddressCd: this.M_TN_LOOCLChargesAddendum.addresscd == '' || this.M_TN_LOOCLChargesAddendum.addresscd == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.addresscd ,
              Remarks: this.M_TN_LOOCLChargesAddendum.remarks,
              UserInput: this.getDataUser().UserId 

              
                          
              // LotNo: this.M_TN_LOOCLChargesAddendum.lotno == '' || this.M_TN_LOOCLChargesAddendum.lotno == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.lotno ,              
              // AmortizeMonthlyAmt: this.M_TN_LOOCLChargesAddendum.amortizemonthlyamt ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.amortizemonthlyamt,',','','number') : 0 ,              
              // InstallmentMethod: this.M_TN_LOOCLChargesAddendum.installmentmethod,
              // Status: 'N',
              // StatusCA: 'C',              
              
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
            ApplicationNo: this.DataRowPage1.ApplicationNo,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
            ChargesSequenceNo: this.M_TN_LOOCLChargesAddendum.chargessequenceno,
            ChargeType: this.M_TN_LOOCLChargesAddendum.chargetype,
            LotNo: this.M_TN_LOOCLChargesAddendum.lotno == '' || this.M_TN_LOOCLChargesAddendum.lotno == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.lotno ,
            TrxType: this.M_TN_LOOCLChargesAddendum.trxtype == '' || this.M_TN_LOOCLChargesAddendum.trxtype == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.trxtype ,
            Descs: this.M_TN_LOOCLChargesAddendum.descs,
            CurrencyCd: this.M_TN_LOOCLChargesAddendum.currencycd == '' || this.M_TN_LOOCLChargesAddendum.currencycd == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.currencycd ,
            CreditTermsCd: this.M_TN_LOOCLChargesAddendum.credittermscd == '' || this.M_TN_LOOCLChargesAddendum.credittermscd == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.credittermscd ,
            ChargeBasis: this.M_TN_LOOCLChargesAddendum.chargebasis,
            BillingCycle: this.M_TN_LOOCLChargesAddendum.billingcycle,
            BillingPeriodDescs: this.M_TN_LOOCLChargesAddendum.billingperioddescs,
            BillingNumberingDescs: this.M_TN_LOOCLChargesAddendum.billingnumberingdescs,
            BillingMethod: this.M_TN_LOOCLChargesAddendum.billingmethod,
            BillingInterval: this.M_TN_LOOCLChargesAddendum.billinginterval,
            BillingDay: this.M_TN_LOOCLChargesAddendum.billingday,
            BillingMonth: this.M_TN_LOOCLChargesAddendum.billingmonth,
            BillingDueDay: this.M_TN_LOOCLChargesAddendum.billingdueday,
            BillingDueMonth: this.M_TN_LOOCLChargesAddendum.billingduemonth,
            TotalArea: this.M_TN_LOOCLChargesAddendum.totalarea ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.totalarea,',','','number') : 0 ,
            BillingRate: this.M_TN_LOOCLChargesAddendum.billingrate ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingrate,',','','number') : 0 ,
            AmortizeMonthlyAmt: this.M_TN_LOOCLChargesAddendum.amortizemonthlyamt ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.amortizemonthlyamt,',','','number') : 0 ,
            BillingPercent: this.M_TN_LOOCLChargesAddendum.billingpercent ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingpercent,',','','number') : 0 ,
            BillingFrequency: this.M_TN_LOOCLChargesAddendum.billingfrequency,
            BillingAmt: this.M_TN_LOOCLChargesAddendum.billingamt ? this.replaceAllString(this.M_TN_LOOCLChargesAddendum.billingamt,',','','number') : 0 ,
            TermsPayment: this.M_TN_LOOCLChargesAddendum.termspayment,
            StartDate: this.M_TN_LOOCLChargesAddendum.startdate == '' || this.M_TN_LOOCLChargesAddendum.startdate == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.startdate ,
            EndDate: this.M_TN_LOOCLChargesAddendum.enddate,
            AddressCd: this.M_TN_LOOCLChargesAddendum.addresscd == '' || this.M_TN_LOOCLChargesAddendum.addresscd == null ? 'NULL' : this.M_TN_LOOCLChargesAddendum.addresscd ,
            AddressContactId: this.M_TN_LOOCLChargesAddendum.addresscontactid && this.M_TN_LOOCLChargesAddendum.addresscontactid != '' ? this.M_TN_LOOCLChargesAddendum.addresscontactid : this.M_TN_LOOCLChargesAddendum.contactid,
            InstallmentMethod: this.M_TN_LOOCLChargesAddendum.installmentmethod,
            Remarks: this.M_TN_LOOCLChargesAddendum.remarks,
            UserEdit: this.getDataUser().UserId ,
            Status: 'N',
            StatusCA: 'C',
            LastUpdateStamp: this.M_TN_LOOCLChargesAddendum.lastupdatestamp,
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
            this.M_TN_LOOCLChargesAddendum = {
                chargessequenceno: 0,
                tenancychargetype: '',
                chargetype: '',
                lotno: '',
                trxtype: '',
                descs: '',
                currencycd: '',
                credittermscd: '',
                chargebasis: 'F',
                installmentmethod: 'N',
                billingcycle: 'M',
                billingperioddescs: 'Y',
                billingmethod: 'F',
                billinginterval: '1',
                billingday: (new Date()).getDate(),
                billingmonth: '',
                billingdueday: '',
                billingduemonth: '',
                totalarea: '',
                billingrate: '',
                amortizemonthlyamt: '',
                billingpercent: '',
                billingfrequency: '',
                billingamt: '',
                termspayment: 'R',
                startdate: '',
                enddate: '',
                addresscontactid: '',
                addresscd: '',
                status: '',
                remarks: '',
                billingnumberingdescs: 'Y',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                lastupdatestamp: 0,
                startbillingnumbering: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: 0,
                rowid: 0,
                contractamt: 0
                
                    }
            		
		},
        M_New(){
          
          let data = this.$store.getters.GetPage1Data
          this.M_TN_LOOCLChargesAddendum.applicationno = data.ApplicationNo

          console.log(JSON.stringify(this.GetDataBy1,null,2))
          
          this.M_TN_LOOCLChargesAddendum.startdate = this.GetDataBy1.utilitiesstartdate
          this.M_TN_LOOCLChargesAddendum.enddate = this.GetDataBy1.utilitiesenddate
          
          this.getContractData("A")
          
        },
        M_Edit(){
          this.getContractData("E")
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                  ApplicationNo: value.ApplicationNo,
                  ChargesSequenceNo: value.ChargesSequenceNo,
                  AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,  
                  TrxType: value.TrxType,
                  Status: "N",
                  StatusCA: "C",
                  UserEdit: this.getDataUser().UserId,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  LastUpdateStamp: value.LastUpdateStamp,
                  _Message_: "Application No " + value.ApplicationNo
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
                addendumsequenceno: record.AddendumSequenceNo,
                chargessequenceno: record.ChargesSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LOOCLChargesAddendum = {
                // chargessequenceno: this.isCurrency(data.chargessequenceno, this.decimal),
                // tenancychargetype: data.tenancychargetype,
                // chargetype: data.chargetype,
                // lotno: data.lotno,
                // trxtype: data.trxtype,
                // descs: data.descs,
                // currencycd: data.currencycd,
                // credittermscd: data.credittermscd,
                // chargebasis: data.chargebasis,
                // installmentmethod: data.installmentmethod,
                // billingcycle: data.billingcycle,
                // billingperioddescs: data.billingperioddescs,
                // billingmethod: data.billingmethod,
                // billinginterval: data.billinginterval, 
                // billingday: data.billingday, 
                // billingmonth: data.billingmonth, 
                // billingdueday: data.billingdueday, 
                // billingduemonth: data.billingduemonth, 
                // totalarea: this.isCurrency(data.totalarea, this.decimal),
                // billingrate: this.isCurrency(data.billingrate, this.decimal),
                // amortizemonthlyamt: this.isCurrency(data.amortizemonthlyamt, this.decimal),
                // billingpercent: this.isCurrency(data.billingpercent, this.decimal),
                // billingfrequency: this.isCurrency(data.billingfrequency, this.decimal),
                // billingamt: this.isCurrency(data.billingamt, this.decimal),
                // termspayment: data.termspayment,
                // startdate: data.startdate,
                // enddate: data.enddate,
                // addresscontactid: data.addresscontactid,
                // addresscd: data.addresscd,
                // status: data.status,
                // remarks: data.remarks,
                // billingnumberingdescs: data.billingnumberingdescs,
                // userinput: data.userinput,
                // useredit: data.useredit,
                // trxdescs: data.trxdescs,
                // currencydescs: data.currencydescs,
                // taxdescs: data.taxdescs,
                // address1: data.address1,
                // credittermsdescs: data.credittermsdescs,
                // contactid: data.contactid,
                // lastupdatestamp: record.LastUpdateStamp,
                // subportfoliocd: data.subportfoliocd,
                // applicationno: record.ApplicationNo,
                // rowid: data.rowid
                chargessequenceno: data.chargessequenceno,
                tenancychargetype: data.tenancychargetype,
                chargetype: data.chargetype,
                lotno: data.lotno,
                trxtype: data.trxtype,
                descs: data.descs,
                currencycd: data.currencycd,
                credittermscd: data.credittermscd,
                chargebasis: data.chargebasis,
                installmentmethod: data.installmentmethod,
                billingcycle: data.billingcycle,
                billingperioddescs: data.billingperioddescs,
                billingmethod: data.billingmethod,
                billinginterval: data.billinginterval,
                billingday: data.billingday,
                billingmonth: data.billingmonth,
                billingdueday: data.billingdueday,
                billingduemonth: data.billingduemonth,
                totalarea: this.isCurrency(data.totalarea, this.decimal),
                billingrate: this.isCurrency(data.billingrate, this.decimal),
                amortizemonthlyamt: this.isCurrency(data.amortizemonthlyamt, this.decimal),
                billingpercent: this.isCurrency(data.billingpercent, this.decimal),
                billingfrequency: data.billingfrequency,
                billingamt: this.isCurrency(data.billingamt, this.decimal),
                termspayment: data.termspayment,
                startdate: data.startdate,
                enddate: data.enddate,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                status: data.status,
                remarks: data.remarks,
                billingnumberingdescs: data.billingnumberingdescs,
                userinput: data.userinput,
                useredit: data.useredit,
                trxdescs: data.trxdescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                address1: data.address1,
                credittermsdescs: data.credittermsdescs,
                contactid: data.contactid,
                lastupdatestamp: record.LastUpdateStamp,
                startbillingnumbering: this.isCurrency(data.startbillingnumbering, this.decimal),
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                addendumsequenceno: data.addendumsequenceno,
                rowid: data.rowid
                    }
                 

                this.M_TN_LOOCLChargesAddendum.trxtypeLabel = this.M_TN_LOOCLChargesAddendum.trxtype != null && this.M_TN_LOOCLChargesAddendum.trxtype != '' ? data.trxtype + this.separator + data.trxdescs :'' 
                this.M_TN_LOOCLChargesAddendum.lotnoLabel = this.M_TN_LOOCLChargesAddendum.lotno != null && this.M_TN_LOOCLChargesAddendum.lotno != '' ? data.lotno + this.separator  :'' 
                this.M_TN_LOOCLChargesAddendum.addresscdLabel = this.M_TN_LOOCLChargesAddendum.addresscd != null && this.M_TN_LOOCLChargesAddendum.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_LOOCLChargesAddendum.currencycdLabel = this.M_TN_LOOCLChargesAddendum.currencycd != null && this.M_TN_LOOCLChargesAddendum.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_LOOCLChargesAddendum.credittermscdLabel = this.M_TN_LOOCLChargesAddendum.credittermscd != null && this.M_TN_LOOCLChargesAddendum.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_LOOCLChargesAddendum.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_LOOCLChargesAddendum.enddate = data
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

