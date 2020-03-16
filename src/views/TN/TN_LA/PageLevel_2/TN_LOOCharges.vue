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
                                <b-col md="6" id="col-left"> <!-- table open left-->
                                    <!-- <b-row>
                                      <b-col md="12" class="lbl-col-align" v-show="err1">
                                          <b-row v-show="err1">
                                              <b-col><label class="text-field-form" style="color:red"> Total Billing Percent must be less than or equal 100. Please set with {{M_TN_LOOCharges.totalpercent}}</label></b-col>
                                              <b-col></b-col>
                                          </b-row>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_LOOCharges.trxtype" :label="M_TN_LOOCharges.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_TN_LOOCharges.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelect2 :prop="PI_chargetype" :value="M_TN_LOOCharges.chargetype" :label="M_TN_LOOCharges.chargetypeLabel" ref="ref_chargetype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_LOOCharges.lotno" :label="M_TN_LOOCharges.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_LOOCharges.addresscd" :label="M_TN_LOOCharges.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOOCharges.currencycd" :label="M_TN_LOOCharges.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_LOOCharges.credittermscd" :label="M_TN_LOOCharges.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_LOOCharges.startdate" :valueTo="M_TN_LOOCharges.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_LOOCharges.termspayment"  ref="ref_termspayment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OninstallmentmethodChange" :prop="PI_installmentmethod" v-model="M_TN_LOOCharges.installmentmethod"  ref="ref_installmentmethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnchargebasisChange" :prop="PI_chargebasis" v-model="M_TN_LOOCharges.chargebasis"  ref="ref_chargebasis" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnbillingperioddescsChange" :prop="PI_billingperioddescs" v-model="M_TN_LOOCharges.billingperioddescs"  ref="ref_billingperioddescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnbillingnumberingdescsChange" :prop="PI_billingnumberingdescs" v-model="M_TN_LOOCharges.billingnumberingdescs"  ref="ref_billingnumberingdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_LOOCharges.billingmethod"  ref="ref_billingmethod" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right"> <!-- table open right -->
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelect2 @change="OnbillingcycleChange" :prop="PI_billingcycle" :value="M_TN_LOOCharges.billingcycle" :label="M_TN_LOOCharges.billingcycleLabel" ref="ref_billingcycle"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billinginterval" v-model="M_TN_LOOCharges.billinginterval"  ref="ref_billinginterval"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billingday" v-model="M_TN_LOOCharges.billingday"  ref="ref_billingday"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billingmonth" v-model="M_TN_LOOCharges.billingmonth"  ref="ref_billingmonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billingdueday" v-model="M_TN_LOOCharges.billingdueday"  ref="ref_billingdueday"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billingduemonth" v-model="M_TN_LOOCharges.billingduemonth"  ref="ref_billingduemonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_totalarea" v-model="M_TN_LOOCharges.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_LOOCharges.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_amortizemonthlyamt" v-model="M_TN_LOOCharges.amortizemonthlyamt"  ref="ref_amortizemonthlyamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex @input="OnbillingpercentChange" :prop="PI_billingpercent" v-model="M_TN_LOOCharges.billingpercent"  ref="ref_billingpercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex @input="OnbillingfrequencyChange" :prop="PI_billingfrequency" v-model="M_TN_LOOCharges.billingfrequency"  ref="ref_billingfrequency"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_LOOCharges.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOCharges.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close right-->
                  
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
            onGetDataBy: false,
            ValKey:null,
            FormType: "List",
            Module:"TN",
            error: false,
            err1: false,
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

            M_TN_LOOCharges :{
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
                billingperioddescs: '',
                billingmethod: '',
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
                termspayment: '',
                startdate: '',
                enddate: '',
                addresscontactid: '',
                addresscd: '',
                status: '',
                remarks: '',
                billingnumberingdescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                lastupdatestamp: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                amortizestatus:'',
                rowid: 0,
                totalpercent: 0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeTN'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND TenancyChargeType <> 'U'"   , 
                    ParamWhere: '',
                    SourceField:'TransType=TrxType,Descs,ChargeType=TenancyChargeType,ChargeDescs,TimeEdit',
                    DisplayLookUp:'TransType,Descs'  
                        }, 
                cValidate :'required', 
                cName: 'trxxxtype', 
                cLabel: 'Transaction Type ', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 101, 
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
                cDisplayColumn: 'TransType,Descs' ,
            }, 
            PI_billingcycle: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'billingcycle', 
                cLabel: 'Billing Cycle', 
                cLabelSize: 4, 
                cOrder: 102, 
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
                cValidate :'max:150', 
                cName:'deeescs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder: 103, 
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
            PI_billinginterval: { 
                cValidate :'required|max:5', 
                cName: 'billinginterval', 
                cLabel: 'Interval ', 
                cLabelSize: 4, 
                cOrder: 104, 
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
                cOrder: 105, 
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
                cOrder: 106, 
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
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 107, 
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
            PI_billingmonth: { 
                cValidate :'required', 
                cName: 'billingmonth', 
                cLabel: 'Billing Month ', 
                cLabelSize: 4, 
                cOrder: 108, 
                cKey: false, 
                cType: 'numeric',
                cAllowMinus: true,
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
                cOrder: 109, 
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
                cMasterUrl: 'CM/CM_Address' ,
                cDisplayColumn: 'AddressCd,TranslatedAddressType' ,
                cParamUrl:'',
            }, 
            PI_billingdueday: { 
                cValidate :'', 
                cName: 'billingdueday', 
                cLabel: 'Billing Due Day', 
                cLabelSize: 4, 
                cOrder: 110, 
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
                cOrder: 111, 
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
                cOrder: 112, 
                cKey: false, 
                cType: 'numeric',
                cAllowMinus: true,
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
                cOrder: 113, 
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
                cOrder: 114, 
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
                cOrder: 115, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingrate: { 
                cValidate :'min_value:1.00', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
                cLabelSize: 4, 
                cOrder: 116, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cAllowMinus: true,
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
                cRadioDefaultOption: '', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 117, 
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
                cOrder: 118, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_installmentmethod: { 
                cValidate :'', 
                cName: 'installmentmethod', 
                cId: 'rdbinstallmentmethod', 
                cRadioOptions: [{ text: 'Rental Range', value: 'R' },{ text: 'Average', value: 'A' },{ text: 'Normal', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Installment Method', 
                cLabelSize: 4, 
                cOrder: 119, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingpercent: { 
                cValidate :'min_value:0|cmax_value:a', 
                cName: 'billingpercent', 
                cLabel: 'Billing Percent', 
                cLabelSize: 4, 
                cOrder: 120, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cAllowMinus: true,
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
                cRadioOptions: [{ text: 'Per Area', value: 'A' },{ text: 'Contract Amount', value: 'C' },{ text: 'Fix', value: 'F' },], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Basis', 
                cLabelSize: 4, 
                cDefault:'A',
                cOrder: 121, 
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
                cOrder: 122, 
                cKey: false, 
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
                cRadioDefaultOption: '', 
                cLabel:'Billing Period Descs', 
                cLabelSize: 4, 
                cOrder: 123, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'', 
                cName: 'billingamt', 
                cLabel: 'Total Billing Amount', 
                cLabelSize: 4, 
                cOrder: 124, 
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
                cOrder: 125, 
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
                cOrder: 126, 
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
                cRadioDefaultOption: '', 
                cLabel:'Billing Method', 
                cLabelSize: 4, 
                cOrder: 127, 
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
    DataByIDPage1() {
      return this.$store.getters.GetPage1GetDataBy
    }
  },
    methods: {
      SetOptionControlStateByChargeType(){ 
        this.PI_totalarea.cProtect = true
        this.PI_billingamt.cProtect = true

        this.SetEditableBillingControl('on edit')
      },
      SetEditableBillingControl(from){
        if (from == 'getDataBy') {
          // this.onGetDataBy = false
        }
        // if(from=='OntrxtypeChange'){
        //   this.SetDefaultValue()
        // }
        
        if(this.M_TN_LOOCharges.installmentmethod=='N'){

            switch(this.M_TN_LOOCharges.chargebasis){
              case "C":
                  this.PI_billingrate.cProtect=true
                  this.PI_billingpercent.cProtect = false
                  this.PI_billingfrequency.cProtect = false
                  
                  this.PI_billingamt.cProtect = true

                  this.PI_amortizemonthlyamt.cProtect = true
                  this.M_TN_LOOCharges.amortizemonthlyamt = ''
                  this.PI_billingpercent.cValidate = 'min_value:1.00|required'
                  this.PI_billingfrequency.cValidate = 'min_value:1|required'
                  this.PI_billingrate.cValidate = ''

                  this.$refs.ref_billingpercent.isRequired = true
                  this.$refs.ref_billingfrequency.isRequired = true
                  this.$refs.ref_billingrate.isRequired = false

                break;
              case "A":
                  this.PI_billingrate.cProtect = false
                  this.PI_amortizemonthlyamt.cProtect = true

                  this.PI_billingpercent.cProtect = true
                  this.PI_billingfrequency.cProtect = true

                  this.PI_billingamt.cProtect = true
                  this.M_TN_LOOCharges.amortizemonthlyamt = ''

                  this.PI_billingpercent.cValidate = ''
                  this.PI_billingfrequency.cValidate = ''
                  this.PI_billingrate.cValidate = 'min_value:1.00|required'

                  this.$refs.ref_billingpercent.isRequired = false
                  this.$refs.ref_billingfrequency.isRequired = false
                  this.$refs.ref_billingrate.isRequired = true


                break;
              default:
                  this.PI_billingrate.cProtect = false
                  this.PI_amortizemonthlyamt.cProtect = true
                  this.PI_billingpercent.cProtect = true
                  this.PI_billingfrequency.cProtect = true
                  this.PI_billingamt.cProtect = false
                  this.M_TN_LOOCharges.billingamt = this.isCurrency(0, this.decimal)

                  // this.PI_amortizemonthlyamt = true
                  this.M_TN_LOOCharges.amortizemonthlyamt = ''
                  this.PI_billingpercent.cValidate = ''
                  this.PI_billingfrequency.cValidate = ''
                  this.PI_billingrate.cValidate = 'min_value: 1.00|required'

                  this.$refs.ref_billingpercent.isRequired = false
                  this.$refs.ref_billingfrequency.isRequired = false
                  this.$refs.ref_billingrate.isRequired = true

                break

            }
        }
        else{
            this.PI_billingrate.cProtect = true
            this.PI_amortizemonthlyamt.cProtect = true
            this.PI_billingpercent.cProtect = false
            this.PI_billingfrequency.cProtect = false

            this.PI_billingamt.cProtect = true
            this.PI_billingpercent.cValidate = 'min_value:1.00|required'
            this.PI_billingfrequency.cValidate = 'min_value:1|required'
            this.PI_billingrate.cValidate = ''

            this.$refs.ref_billingpercent.isRequired = true
            this.$refs.ref_billingfrequency.isRequired = true
            this.$refs.ref_billingrate.isRequired = false
        }

        if(this.M_TN_LOOCharges.chargebasis=='C'){
            this.PI_billingmethod.cProtect = false
        }else{
            this.PI_billingmethod.cProtect = false
        }

        this.onGetDataBy = false

      },
        SetDefaultValue(){
          this.PI_billingpercent.cProtect = false
          this.PI_billingrate.cProtect = false

          this.PI_billingamt.cProtect = true
          this.PI_billingfrequency.cProtect = false

          this.PI_amortizemonthlyamt.cProtect = false
          this.M_TN_LOOCharges.amortizemonthlyamt = 0
          
          // this.PI_billingpercent.cValidate = 'min_value:1.00|required'
          // this.PI_billingfrequency.cValidate = 'min_value:1|required'
          // this.PI_billingrate.cValidate = 'min_value: 1.00|required'

          // this.$refs.ref_billingpercent.isRequired = true
          // this.$refs.ref_billingfrequency.isRequired = true
          // this.$refs.ref_billingrate.isRequired = true
        },
        GetLeasingPolicyDPDataDefault(){
            var param = {
                  OptionFunctionCd: "GetLeasingPolicyDPData",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: this.DataRowPage1.ApplicationNo
            }
            this.FnDynamicFunction(param)
                .then(ress => {
                  if(ress ==null) return
                  // this.SetDefaultValue('GetLeasingPolicyDPDataDefault')
                  var data = ress[0]
                  this.M_TN_LOOCharges.billingpercent = this.isCurrency(data.DPPPercentage, this.decimal)
                  this.M_TN_LOOCharges.billingfrequency = this.isCurrency(data.DPSchedule, this.decimal)

                  this.M_TN_LOOCharges.billingrate= ''
                  this.PI_billingrate.cProtect = true

                  this.PI_amortizemonthlyamt.cProtect = true

                  if(data.DPSchedule !=null && data.DPSchedule!=0){
                    var ctramt = data.ContractAmt == '' || data.ContractAmt == null ? 0 : parseInt(data.ContractAmt)
                    var dppercent = data.DPPPercentage == '' || data.DPPPercentage == null ? 0 : parseInt(data.DPPPercentage)
                    var dps = data.DPSchedule == '' || data.DPSchedule == null ? 0 : parseInt(data.DPSchedule)

                    this.M_TN_LOOCharges.billingamt = this.isCurrency((ctramt * dppercent)/100/dps, this.decimal)
                  }else{
                    this.M_TN_LOOCharges.billingamt = 0
                  }

                  this.PI_billingamt.cProtect = true

                  // if (!this.onGetDataBy) {
                    this.RecalculateBillingAmt()
                  // }
                  // else {
                  //   console.log(1)
                  //   this.onGetDataBy = !this.onGetDataBy
                  // }

                  this.SetEditableBillingControl('GetLeasingPolicyDPDataDefault')
                  
                  // this.onGetDataBy = false




                })

        },
        GetLeasingPolicyRentalDataDefault(){
            var param = {
                  OptionFunctionCd: "GetDataTN_Contract",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: this.DataRowPage1.ApplicationNo
            }
            this.FnDynamicFunction(param)
                .then(ress => {
                  if(ress ==null) return
                  var data = ress[0]

                  this.M_TN_LOOCharges.billingamt = this.isCurrency(data.ContractAmt, this.decimal)
                  this.M_TN_LOOCharges.billingrate = ''

                  var param2 = {
                      OptionFunctionCd: "GetLeasingPolicyRentalPercentAndFrequence",
                      ModuleCd: this.Module,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      ApplicationNo: this.DataRowPage1.ApplicationNo
                  }
                  this.FnDynamicFunction(param2)
                    .then(ress => {
                      if(ress ==null) return
                      var data2 = ress[0]
                      this.SetDefaultValue('GetLeasingPolicyRentalDataDefault')
                      this.M_TN_LOOCharges.billingpercent = this.isCurrency(data2.DPPPercentage, this.decimal)
                      this.M_TN_LOOCharges.billingfrequency = data2.InstallmentFrequency

                      if(parseInt(this.M_TN_LOOCharges.billingfrequency)==0){
                          this.M_TN_LOOCharges.billingamt = 0
                      }else{
                          this.M_TN_LOOCharges.billingamt = this.isCurrency((this.M_TN_LOOCharges.billingamt * this.M_TN_LOOCharges.billingpercent)/100/this.M_TN_LOOCharges.BillingFrequency, this.decimal)
                      }

                      this.PI_billingpercent.cProtect = false
                      this.PI_billingfrequency.cProtect = false
 
                      // console.log('GetLeasingPolicyRentalDataDefault','PI_billingfrequency false')

                      // if (!this.onGetDataBy) {
                        this.RecalculateBillingAmt()
                      // }
                      // else {
                      //   console.log(2)
                      //   this.onGetDataBy = !this.onGetDataBy
                      // }

                      this.SetEditableBillingControl('GetLeasingPolicyRentalDataDefault')

                      // this.onGetDataBy = false
                    })                

                })

        },
        GetBillingRate(){
            // var param = {
            //       OptionFunctionCd: "GetContractData",
            //       ModuleCd: this.Module,
            //       SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            //       ApplicationNo: this.DataRowPage1.ApplicationNo
            // }
            // this.FnDynamicFunction(param)
            //     .then(ress => {
            //       if(ress ==null) return
            //       var data = ress[0]

                  switch(this.M_TN_LOOCharges.chargetype){
                    case "D":
                        this.M_TN_LOOCharges.billingrate = this.isCurrency(this.ContractData.ServiceCharge, this.decimal)
                      break;
                    case "E":
                        this.M_TN_LOOCharges.billingrate = this.isCurrency(this.ContractData.SinkingFund, this.decimal)
                      break;
                    case "F":
                        this.M_TN_LOOCharges.billingrate = this.isCurrency(this.ContractData.PromotionLevy, this.decimal)
                      break;
                    default:
                        this.M_TN_LOOCharges.billingrate = ''
                      break;
                  }
                  var billRate = this.M_TN_LOOCharges.billingrate == '' || this.M_TN_LOOCharges.billingrate == null ? 0 : parseInt(this.M_TN_LOOCharges.billingrate)
                  var ttlArea = this.M_TN_LOOCharges.totalarea == '' || this.M_TN_LOOCharges.totalarea == null ? 0 : parseInt(this.M_TN_LOOCharges.totalarea)
                  this.M_TN_LOOCharges.amortizemonthlyamt = this.isCurrency((billRate*ttlArea), this.decimal)

                  // if (!this.onGetDataBy) {
                    this.RecalculateBillingAmt()
                  // }
                  // else {
                  //   console.log(3)
                  //   this.onGetDataBy = !this.onGetDataBy
                  // }

                  this.SetEditableBillingControl('GetBillingRate')

                // })

        },
        RecalculateBillingAmt(check = ''){
          if(this.M_TN_LOOCharges.chargebasis=='A'){
              var billRate = this.M_TN_LOOCharges.billingrate == '' || this.M_TN_LOOCharges.billingrate == null ? 0 : parseInt(this.M_TN_LOOCharges.billingrate)
              var ttlArea = this.M_TN_LOOCharges.totalarea == '' || this.M_TN_LOOCharges.totalarea == null ? 0 : parseInt(this.M_TN_LOOCharges.totalarea)
              var ttlArea = this.M_TN_LOOCharges.billinginterval == '' || this.M_TN_LOOCharges.billinginterval == null ? 0 : parseInt(this.M_TN_LOOCharges.billinginterval)

              this.M_TN_LOOCharges.billingamt = this.isCurrency((billRate*ttlArea*ttlArea), this.decimal)
          }
          else if(this.M_TN_LOOCharges.chargebasis=='C'){
            console.log(this.DataByIDPage1.contractamt);
              var totalrental = this.DataByIDPage1.contractamt == '' || this.DataByIDPage1.contractamt == null ? 0 : parseFloat(this.DataByIDPage1.contractamt)
              var billPercent = this.M_TN_LOOCharges.billingpercent == '' || this.M_TN_LOOCharges.billingpercent == null ? 0 : parseFloat(this.M_TN_LOOCharges.billingpercent)
              var billFreq = this.M_TN_LOOCharges.billingfrequency == '' || this.M_TN_LOOCharges.billingfrequency == null ? 0 : parseFloat(this.M_TN_LOOCharges.billingfrequency)
              // console.log(totalrental,billPercent,billFreq)
              if (billFreq > 0) {
                this.M_TN_LOOCharges.billingamt = this.isCurrency((totalrental * (billPercent / 100) / billFreq), this.decimal)
              }
              else {
                this.M_TN_LOOCharges.billingamt = this.isCurrency(0, this.decimal)
              }
          }

          this.onGetDataBy = true
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCharges.trxtype = data.id
            this.M_TN_LOOCharges.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              var param = {
                    OptionFunctionCd: "GetTransactionTypeMapping",
                    ModuleCd: this.Module,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TrxType:data.id
                  }

                this.FnDynamicFunction(param)
                .then(ress => {
                  if (ress == null|| ress.length==0) {
                    this.AlertError('* Error on Transaction Type. Please enter a valid Transaction Type.')
                    return
                    }
                  var dataMap = ress[0]
                  // alert(JSON.stringify(dataMap,null,2))
                  this.M_TN_LOOCharges.chargetype = dataMap.TenancyChargeType
                  this.M_TN_LOOCharges.chargetypeLabel = dataMap.TenancyChargeTypeDescription

                  this.M_TN_LOOCharges.descs = dataMap.Descs
                  this.M_TN_LOOCharges.billingday = dataMap.BillingDay
                  this.M_TN_LOOCharges.billingmonth = dataMap.BillingMonth
                  this.M_TN_LOOCharges.billingdueday = dataMap.BillingDueDay
                  this.M_TN_LOOCharges.billingduemonth = dataMap.BillingDueMonth

                  this.M_TN_LOOCharges.currencycd = dataMap.CurrencyCd
                  this.M_TN_LOOCharges.currencycdLabel = dataMap.CurrencyCd
                  this.M_TN_LOOCharges.credittermscd = dataMap.CreditTermsCd
                  this.M_TN_LOOCharges.credittermscdLabel = dataMap.CreditTermsCd
                  this.M_TN_LOOCharges.amortizestatus = dataMap.AmortizeStatus

                  this.SetDefaultValue()
                  // alert(this.M_TN_LOOCharges.chargetype)
                  switch (this.M_TN_LOOCharges.chargetype) {
                  case "A":
                    this.onGetDataBy = true
                    this.M_TN_LOOCharges.installmentmethod='N'
                    

                    this.M_TN_LOOCharges.chargebasis = 'C'

                    this.M_TN_LOOCharges.billingmethod = 'F'
                    this.GetLeasingPolicyDPDataDefault()

                    // this.PI_billingpercent.cValidate = 'min_value:1.00'

                    break;
                  case "B":
                    this.onGetDataBy = true
                    this.M_TN_LOOCharges.installmentmethod='R'

                    this.M_TN_LOOCharges.chargebasis = 'C'
                    this.M_TN_LOOCharges.billingmethod = 'F'
                    this.GetLeasingPolicyRentalDataDefault()

                    // this.PI_billingpercent.cValidate = 'min_value:1.00'
                    break;
                  default:    
                    this.onGetDataBy = true
                    this.M_TN_LOOCharges.installmentmethod='N'

                    this.M_TN_LOOCharges.chargebasis = 'A'
                    this.GetBillingRate()

                    // this.PI_billingpercent.cValidate = 'min_value:1.00'
                    break;
                }

                })

                // this.SetEditableBillingControl('OntrxtypeChange')
                
            }
        })
        this.$forceUpdate()
        },
        OnbillingcycleChange (data) {
          this.$nextTick(() => {
            this.M_TN_LOOCharges.billingcycle = data.id
            if (this.inputStatus != "VIEW") {
            }
          })
          this.$forceUpdate()
        },
        OnbillingrateChange(data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              var vTotalArea = this.replaceAllString(this.M_TN_LOOCharges.totalarea, ',', '', 'number')
              var vBillingRate = this.replaceAllString(this.M_TN_LOOCharges.billingrate, ',', '', 'number')
              var vMonthlyIncome = this.replaceAllString(this.M_TN_LOOCharges.amortizemonthlyamt, ',', '', 'number')
              var vTotalBillingAmt = this.replaceAllString(this.M_TN_LOOCharges.billingamt, ',', '', 'number')

              vMonthlyIncome = vTotalArea * vBillingRate

              vTotalBillingAmt = vTotalArea * vBillingRate

              this.M_TN_LOOCharges.amortizemonthlyamt = this.isCurrency(vMonthlyIncome, this.decimal)
              this.M_TN_LOOCharges.billingamt = this.isCurrency(vTotalBillingAmt, this.decimal)

            }
          })
          this.$forceUpdate()
        },
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCharges.lotno = data.id
            this.M_TN_LOOCharges.lotnoLabel = data.label
            if(this.inputStatus != "VIEW") {
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
                      this.M_TN_LOOCharges.totalarea = this.isCurrency(ress[0].TotalArea, this.decimal)
                    }
                    this.RecalculateBillingAmt()
                  })
            }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCharges.addresscd = data.id
            this.M_TN_LOOCharges.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCharges.currencycd = data.id
            this.M_TN_LOOCharges.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCharges.credittermscd = data.id
            this.M_TN_LOOCharges.credittermscdLabel = data.label
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
        OninstallmentmethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data=='N'){
                  if(this.M_TN_LOOCharges.chargetype=='A'){
                    this.M_TN_LOOCharges.chargebasis ='C'
                    // this.PI_chargebasis.cProtect = true

                    this.M_TN_LOOCharges.billingmethod = 'F'
                  }else{
                    this.M_TN_LOOCharges.chargebasis ='A'
                    // this.PI_chargebasis.cProtect = false

                  }
                  this.M_TN_LOOCharges.billingfrequency = ''
                  this.M_TN_LOOCharges.billingpercent = ''
                }else{

                }

                this.SetEditableBillingControl('OninstallmentmethodChange')
            }
        })
        this.$forceUpdate()
        },
        OnchargebasisChange (data) {
        this.$nextTick(() => {
            if(this.inputStatus != "VIEW") {
              this.M_TN_LOOCharges.billingamt = ''
              if(this.M_TN_LOOCharges.chargebasis=='A'){
                this.M_TN_LOOCharges.billingfrequency = ''
                this.M_TN_LOOCharges.billingpercent = ''
                //this.ContractData
                switch(this.M_TN_LOOCharges.chargetype){
                    case "D":
                        this.M_TN_LOOCharges.billingrate = this.isCurrency(this.ContractData.ServiceCharge, this.decimal)
                      break;
                    case "E":
                        this.M_TN_LOOCharges.billingrate = this.isCurrency(this.ContractData.SinkingFund, this.decimal)
                      break;
                    case "F":
                        this.M_TN_LOOCharges.billingrate = this.isCurrency(this.ContractData.PromotionLevy, this.decimal)
                      break;
                    default:
                        this.M_TN_LOOCharges.billingrate = ''
                      break;
                  }
              }
              else if(this.M_TN_LOOCharges.chargebasis=='F'){
                  this.M_TN_LOOCharges.billingfrequency = ''
                  this.M_TN_LOOCharges.billingpercent = ''
                  this.M_TN_LOOCharges.billingrate = ''
              }else{
                this.M_TN_LOOCharges.billingrate = ''
                this.M_TN_LOOCharges.billingmethod = 'F'

              }
              var billRate = this.M_TN_LOOCharges.billingrate == '' || this.M_TN_LOOCharges.billingrate == null ? 0 : parseInt(this.M_TN_LOOCharges.billingrate)
              var ttlArea = this.M_TN_LOOCharges.totalarea == '' || this.M_TN_LOOCharges.totalarea == null ? 0 : parseInt(this.M_TN_LOOCharges.totalarea)
              this.M_TN_LOOCharges.amortizemonthlyamt = this.isCurrency((billRate*ttlArea), this.decimal)
              this.SetEditableBillingControl('OnchargebasisChange')
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
        OnbillingpercentChange(data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              // if (!this.onGetDataBy) {
              //   console.log('billing percent')
                this.RecalculateBillingAmt()
              // }
            }
          })
          this.$forceUpdate()
        },
        OnbillingfrequencyChange(data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              // if (!this.onGetDataBy) {
              //   console.log('billing freq')
                this.RecalculateBillingAmt()
              // }
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
            this.M_TN_LOOCharges.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + data.ApplicationNo + "' "
            this.PI_addresscd.dataLookUp.InitialWhere = " SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ( BillingStatus = 'Y' AND ((ContactId='" + this.DataRowPage1.ContactId + "' AND SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "') OR ContactID IN (SELECT ContactID FROM TN_ContractOccupant WHERE SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "' AND ApplicationNo = '" +this.DataRowPage1.ApplicationNo+ "'))) "
            this.PI_lotno.dataLookUp.InitialWhere = "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and LotNo IN (Select LotNo From TN_ContractLot Where SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' and ApplicationNo= '" + this.DataRowPage1.ApplicationNo + "')"
            this.PI_addresscd.cParamUrl = 'ContactId=' + data.ContactId
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
          var param = {
              OptionFunctionCd: "GetCheckContractChargesPercent",
              ModuleCd: this.Module,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.DataRowPage1.ApplicationNo,
              ChargesSequenceNo: this.M_TN_LOOCharges.chargessequenceno,
              Status: 'A'
        }
        this.FnDynamicFunction(param)
            .then(ress => {
              if(ress ==null) return
              // this.SetDefaultValue('GetLeasingPolicyDPDataDefault')
              var data = ress[0]
              // console.log(data)
              var TotPercent = 100 - data.TotalPercent
              var vBillingPercent = this.replaceAllString(this.M_TN_LOOCharges.billingpercent, ',', '', 'number')
              var vTotalBilling = parseFloat(data.TotalPercent) + parseFloat(vBillingPercent)
              // console.log(TotPercent, vBillingPercent, vTotalBilling )

              this.M_TN_LOOCharges.totalpercent = parseInt(TotPercent)
              if (vTotalBilling > 100 ){
                // this.error = true
                // this.err1 = true
                // return
                this.PI_billingpercent.cValidate = 'max_value:' + this.M_TN_LOOCharges.totalpercent + '|cmax_value:Total Billing Percent must be more less or equal 100. Please set with ' + this.M_TN_LOOCharges.totalpercent + '|required'
                // var scopeForm = "FormScope_" + this.pageLevel + "_" + this.tabIndex
                this.$validator._base.validateAll(scopeForm)
                // .then((result) => {
                //   // if (!result) return
                //   // console.log(result)
                //     // this.M_InsertOR()
                // })
              }
              else{
                // this.err1 = false
                // this.error = false
                this.M_InsertOR()
              }
              // console.log(this.M_TN_LOOCharges.totalpercent)
              // this.PI_billingpercent.cValidate = 'min_value:' + this.M_TN_LOOCharges.totalpercent + '|cmin_value:Total Billing Percent must be less than or equal 100. Please set with ' + this.M_TN_LOOCharges.totalpercent + '|required'
            })
        },
        M_InsertOR(){
            var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              ApplicationNo: this.M_TN_LOOCharges.applicationno,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ChargeType: this.M_TN_LOOCharges.chargetype,
              LotNo: this.M_TN_LOOCharges.lotno == '' || this.M_TN_LOOCharges.lotno == null ? 'NULL' : this.M_TN_LOOCharges.lotno ,
              TrxType: this.M_TN_LOOCharges.trxtype == '' || this.M_TN_LOOCharges.trxtype == null ? 'NULL' : this.M_TN_LOOCharges.trxtype ,
              Descs: this.M_TN_LOOCharges.descs,
              CurrencyCd: this.M_TN_LOOCharges.currencycd == '' || this.M_TN_LOOCharges.currencycd == null ? 'NULL' : this.M_TN_LOOCharges.currencycd ,
              CreditTermsCd: this.M_TN_LOOCharges.credittermscd == '' || this.M_TN_LOOCharges.credittermscd == null ? 'NULL' : this.M_TN_LOOCharges.credittermscd ,
              ChargeBasis: this.M_TN_LOOCharges.chargebasis,
              BillingCycle: this.M_TN_LOOCharges.billingcycle,
              BillingPeriodDescs: this.M_TN_LOOCharges.billingperioddescs,
              BillingNumberingDescs: this.M_TN_LOOCharges.billingnumberingdescs,
              BillingMethod: this.M_TN_LOOCharges.billingmethod,
              BillingInterval: this.M_TN_LOOCharges.billinginterval,
              BillingDay: this.M_TN_LOOCharges.billingday ? this.replaceAllString(this.M_TN_LOOCharges.billingday,',','','number') : 0 ,
              BillingMonth: this.M_TN_LOOCharges.billingmonth ? this.replaceAllString(this.M_TN_LOOCharges.billingmonth,',','','number') : 0 ,
              BillingDueDay: this.M_TN_LOOCharges.billingdueday ? this.replaceAllString(this.M_TN_LOOCharges.billingdueday,',','','number') : 0 ,
              BillingDueMonth: this.M_TN_LOOCharges.billingduemonth ? this.replaceAllString(this.M_TN_LOOCharges.billingduemonth,',','','number') : 0 ,
              TotalArea: this.M_TN_LOOCharges.totalarea ? this.replaceAllString(this.M_TN_LOOCharges.totalarea,',','','number') : 0 ,
              BillingRate: this.M_TN_LOOCharges.billingrate ? this.replaceAllString(this.M_TN_LOOCharges.billingrate,',','','number') : 0 ,
              AmortizeMonthlyAmt: this.M_TN_LOOCharges.amortizemonthlyamt ? this.replaceAllString(this.M_TN_LOOCharges.amortizemonthlyamt,',','','number') : 0 ,
              BillingPercent: this.M_TN_LOOCharges.billingpercent ? this.replaceAllString(this.M_TN_LOOCharges.billingpercent,',','','number') : 0 ,
              BillingFrequency: this.M_TN_LOOCharges.billingfrequency ? this.replaceAllString(this.M_TN_LOOCharges.billingfrequency,',','','number') : 0 ,
              BillingAmt: this.M_TN_LOOCharges.billingamt ? this.replaceAllString(this.M_TN_LOOCharges.billingamt,',','','number') : 0 ,
              TermsPayment: this.M_TN_LOOCharges.termspayment,
              StartDate: this.M_TN_LOOCharges.startdate == '' || this.M_TN_LOOCharges.startdate == null ? 'NULL' : this.M_TN_LOOCharges.startdate ,
              EndDate: this.M_TN_LOOCharges.enddate,
              AddressContactId: this.M_TN_LOOCharges.addresscontactid && this.M_TN_LOOCharges.addresscontactid != '' ? this.M_TN_LOOCharges.addresscontactid : this.M_TN_LOOCharges.contactid,
              AddressCd: this.M_TN_LOOCharges.addresscd == '' || this.M_TN_LOOCharges.addresscd == null ? 'NULL' : this.M_TN_LOOCharges.addresscd ,
              InstallmentMethod: this.M_TN_LOOCharges.installmentmethod,
              Remarks: this.M_TN_LOOCharges.remarks,
              UserInput: this.getDataUser().UserId ,
              Status: 'N',
              StatusCA: 'C'
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
          var param = {
              OptionFunctionCd: "GetCheckContractChargesPercent",
              ModuleCd: this.Module,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.DataRowPage1.ApplicationNo,
              ChargesSequenceNo: this.M_TN_LOOCharges.chargessequenceno,
              Status: 'A'
          }
          this.FnDynamicFunction(param)
              .then(ress => {
                if(ress ==null) return
                var data = ress[0]
                
                var TotPercent = 100 - data.TotalPercent
                var vBillingPercent = this.replaceAllString(this.M_TN_LOOCharges.billingpercent, ',', '', 'number')
                var vTotalBilling = parseFloat(data.TotalPercent) + parseFloat(vBillingPercent)

                this.M_TN_LOOCharges.totalpercent = parseInt(TotPercent)
                if (vTotalBilling > 100 ){
                  this.PI_billingpercent.cValidate = 'max_value:' + this.M_TN_LOOCharges.totalpercent + '|cmax_value:Total Billing Percent must be more than or equal 100. Please set with ' + this.M_TN_LOOCharges.totalpercent + '|required'
                  this.$validator._base.validateAll(scopeForm)
                }
                else{
                  this.M_UpdateOR()
                }
              })
        },
        M_UpdateOR() {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            ApplicationNo: this.M_TN_LOOCharges.applicationno,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ChargesSequenceNo: this.M_TN_LOOCharges.chargessequenceno,
            ChargeType: this.M_TN_LOOCharges.chargetype,
            LotNo: this.M_TN_LOOCharges.lotno == '' || this.M_TN_LOOCharges.lotno == null ? 'NULL' : this.M_TN_LOOCharges.lotno ,
            TrxType: this.M_TN_LOOCharges.trxtype == '' || this.M_TN_LOOCharges.trxtype == null ? 'NULL' : this.M_TN_LOOCharges.trxtype ,
            Descs: this.M_TN_LOOCharges.descs,
            CurrencyCd: this.M_TN_LOOCharges.currencycd == '' || this.M_TN_LOOCharges.currencycd == null ? 'NULL' : this.M_TN_LOOCharges.currencycd ,
            CreditTermsCd: this.M_TN_LOOCharges.credittermscd == '' || this.M_TN_LOOCharges.credittermscd == null ? 'NULL' : this.M_TN_LOOCharges.credittermscd ,
            ChargeBasis: this.M_TN_LOOCharges.chargebasis,
            BillingCycle: this.M_TN_LOOCharges.billingcycle,
            BillingPeriodDescs: this.M_TN_LOOCharges.billingperioddescs,
            BillingNumberingDescs: this.M_TN_LOOCharges.billingnumberingdescs,
            BillingMethod: this.M_TN_LOOCharges.billingmethod,
            BillingInterval: this.M_TN_LOOCharges.billinginterval,
            BillingDay: this.M_TN_LOOCharges.billingday,
            BillingMonth: this.M_TN_LOOCharges.billingmonth,
            BillingDueDay: this.M_TN_LOOCharges.billingdueday,
            BillingDueMonth: this.M_TN_LOOCharges.billingduemonth,
            TotalArea: this.M_TN_LOOCharges.totalarea ? this.replaceAllString(this.M_TN_LOOCharges.totalarea,',','','number') : 0 ,
            BillingRate: this.M_TN_LOOCharges.billingrate ? this.replaceAllString(this.M_TN_LOOCharges.billingrate,',','','number') : 0 ,
            AmortizeMonthlyAmt: this.M_TN_LOOCharges.amortizemonthlyamt ? this.replaceAllString(this.M_TN_LOOCharges.amortizemonthlyamt,',','','number') : 0 ,
            BillingPercent: this.M_TN_LOOCharges.billingpercent ? this.replaceAllString(this.M_TN_LOOCharges.billingpercent,',','','number') : 0 ,
            BillingFrequency: this.M_TN_LOOCharges.billingfrequency,
            BillingAmt: this.M_TN_LOOCharges.billingamt ? this.replaceAllString(this.M_TN_LOOCharges.billingamt,',','','number') : 0 ,
            TermsPayment: this.M_TN_LOOCharges.termspayment,
            StartDate: this.M_TN_LOOCharges.startdate == '' || this.M_TN_LOOCharges.startdate == null ? 'NULL' : this.M_TN_LOOCharges.startdate ,
            EndDate: this.M_TN_LOOCharges.enddate,
            AddressCd: this.M_TN_LOOCharges.addresscd == '' || this.M_TN_LOOCharges.addresscd == null ? 'NULL' : this.M_TN_LOOCharges.addresscd ,
            AddressContactId: this.M_TN_LOOCharges.addresscontactid && this.M_TN_LOOCharges.addresscontactid != '' ? this.M_TN_LOOCharges.addresscontactid : this.M_TN_LOOCharges.contactid,
            InstallmentMethod: this.M_TN_LOOCharges.installmentmethod,
            Remarks: this.M_TN_LOOCharges.remarks,
            UserEdit: this.getDataUser().UserId ,
            Status: 'N',
            StatusCA: 'C',
            LastUpdateStamp: this.M_TN_LOOCharges.lastupdatestamp
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
      // this.$nextTick(() => {
              this.M_TN_LOOCharges = {
                chargessequenceno: 0,
                tenancychargetype: '',
                chargetype: '',
                lotno: '',
                trxtype: '',
                descs: '',
                currencycd: '',
                credittermscd: '',
                chargebasis: 'A',
                installmentmethod: 'N',
                billingcycle: 'M',
                billingperioddescs: 'Y',
                billingmethod: 'C',
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
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                rowid: 0,
                totalpercent: 0
                    }

        // })
      // this.$forceUpdate()
      
            		
		},
        M_New(){
          // this.$nextTick(() => {
            this.M_TN_LOOCharges.contactid = this.ContractData.ContactId
            let data = this.$store.getters.GetPage1Data
            // console.log(JSON.stringify(this.ContractData,null,0))
            // alert(this.ContractData.RCD)
            this.$refs.ref_trxtype.focus()
            this.M_TN_LOOCharges.applicationno = data.ApplicationNo
            // this.M_TN_LOOCharges.startdate = this.ContractData.RCD
            this.M_TN_LOOCharges.startdate = this.momentDateFormat(this.ContractData.RCD, 'YYYY-MM-DD')
            this.M_TN_LOOCharges.enddate = this.momentDateFormat(this.ContractData.RED, 'YYYY-MM-DD')
            // alert(this.momentDateFormat(this.ContractData.RCD, 'YYYY-MM-DD'))
            // alert(this.M_TN_LOOCharges.startdate)

            // console.log(this.ContractData.ChargeArea)

            if (this.ContractData.ChargeArea == "G") {
              this.M_TN_LOOCharges.totalarea = this.isCurrency(this.ContractData.TotalGrossArea, this.decimal)
            } else if (this.ContractData.ChargeArea == "S") {
              this.M_TN_LOOCharges.totalarea = this.isCurrency(this.ContractData.TotalSemiGrossArea, this.decimal)
            } else if (this.ContractData.ChargeArea == "N") {
              this.M_TN_LOOCharges.totalarea = this.isCurrency(this.ContractData.TotalNetArea, this.decimal)
            }
          // })
          // this.$forceUpdate()
          
        },
        M_Edit(){
          this.SetOptionControlStateByChargeType()
          this.$refs.ref_descs.focus()

        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                  ApplicationNo: value.ApplicationNo,
                  ChargesSequenceNo: value.ChargesSequenceNo,
                  TrxType: value.TrxType,
                  Status: "N",
                  StatusCA: "C",
                  UserEdit: this.getDataUser().UserId,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  LastUpdateStamp: value.LastUpdateStamp,
                  // _Message_: "Application No " + value.ApplicationNo
                  _Message_: ''
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
          this.onGetDataBy = true
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                applicationno: record.ApplicationNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                chargessequenceno: record.ChargesSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LOOCharges = {
                chargessequenceno: this.isCurrency(data.chargessequenceno, this.decimal),
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
                billingfrequency: this.isCurrency(data.billingfrequency, this.decimal),
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
                subportfoliocd: data.subportfoliocd,
                applicationno: record.ApplicationNo,
                rowid: data.rowid
                    }
                
                if(data.chargebasis == 'C' && data.installmentmethod != 'N'){
                    if(data.BillingFrequency>0){
                        this.M_TN_LOOCharges.billingamt = this.isCurrency(data.billingamt / data.billingfrequency, this.decimal)
                    }
                }

                this.M_TN_LOOCharges.chargetypeLabel = data.chargetypedescs
                this.M_TN_LOOCharges.trxtypeLabel = this.M_TN_LOOCharges.trxtype != null && this.M_TN_LOOCharges.trxtype != '' ? data.trxtype + this.separator + data.trxdescs :'' 
                this.M_TN_LOOCharges.lotnoLabel = this.M_TN_LOOCharges.lotno != null && this.M_TN_LOOCharges.lotno != '' ? data.lotno + this.separator  :'' 
                this.M_TN_LOOCharges.addresscdLabel = this.M_TN_LOOCharges.addresscd != null && this.M_TN_LOOCharges.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_LOOCharges.currencycdLabel = this.M_TN_LOOCharges.currencycd != null && this.M_TN_LOOCharges.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_LOOCharges.credittermscdLabel = this.M_TN_LOOCharges.credittermscd != null && this.M_TN_LOOCharges.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                this.SetEditableBillingControl('getDataBy')

            })
        }
        ,MdtRange_startdate (data) {
          // if (this.inputStatus != "VIEW") {
            this.M_TN_LOOCharges.startdate = data
          // }
            
        }
        ,MdtRange_enddate (data) {
          // if (this.inputStatus != "VIEW") {
            this.M_TN_LOOCharges.enddate = data
          // }
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

