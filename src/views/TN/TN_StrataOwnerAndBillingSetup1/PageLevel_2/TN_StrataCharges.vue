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
                      <b-col  md="12">
                        <ABSinputRadioButtonVuex @input="OnchargetypeChange" :prop="PI_chargetype" v-model="M_TN_StrataCharges.chargetype"  ref="ref_chargetype" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_StrataCharges.trxtype" :label="M_TN_StrataCharges.trxtypeLabel" ref="ref_trxtype"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_TN_StrataCharges.descs"  ref="ref_descs"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_StrataCharges.currencycd" :label="M_TN_StrataCharges.currencycdLabel" ref="ref_currencycd"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_StrataCharges.credittermscd" :label="M_TN_StrataCharges.credittermscdLabel" ref="ref_credittermscd"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputRadioButtonVuex @input="OnbillingperioddescsChange" :prop="PI_billingperioddescs" v-model="M_TN_StrataCharges.billingperioddescs"  ref="ref_billingperioddescs" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputRadioButtonVuex @input="OnbillingnumberingdescsChange" :prop="PI_billingnumberingdescs" v-model="M_TN_StrataCharges.billingnumberingdescs"  ref="ref_billingnumberingdescs" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_TN_StrataCharges.billingmethod"  ref="ref_billingmethod" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSInputSelect2 @change="OnbillingcycleChange" :prop="PI_billingcycle" :value="M_TN_StrataCharges.billingcycle" :label="M_TN_StrataCharges.billingcycleLabel" ref="ref_billingcycle"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputTextVuex :prop="PI_billinginterval" v-model="M_TN_StrataCharges.billinginterval"  ref="ref_billinginterval"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputTextVuex :prop="PI_billingday" v-model="M_TN_StrataCharges.billingday"  ref="ref_billingday"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputTextVuex :prop="PI_billingmonth" v-model="M_TN_StrataCharges.billingmonth"  ref="ref_billingmonth"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="12">
                        <ABSinputTextVuex :prop="PI_billingdueday" v-model="M_TN_StrataCharges.billingdueday"  ref="ref_billingdueday"/>
                      </b-col>
                    </b-row>
                </b-col> <!-- table close -->
                <b-col md="6" id="col-right"> <!-- table open -->
                  <b-row>
                      <b-col md="12">
                          <ABSinputTextVuex :prop="PI_billingduemonth" v-model="M_TN_StrataCharges.billingduemonth"  ref="ref_billingduemonth"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSinputTextVuex @input="OntotalareaChange" :prop="PI_totalarea" v-model="M_TN_StrataCharges.totalarea"  ref="ref_totalarea"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_StrataCharges.billingrate"  ref="ref_billingrate"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_StrataCharges.billingamt"  ref="ref_billingamt"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_TN_StrataCharges.termspayment"  ref="ref_termspayment" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_StrataCharges.startdate" :valueTo="M_TN_StrataCharges.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_StrataCharges.addresscd" :label="M_TN_StrataCharges.addresscdLabel" ref="ref_addresscd"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                          <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataCharges.remarks"  ref="ref_remarks" />
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
import { constants } from 'fs';

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "List",
			Module:"TN",
            propList: {
                initialWhere:"LotNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},

            M_TN_StrataCharges :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                lotownerchargessequenceno: 0,
                chargetype: 'C',
                trxtype: '',
                modulecd: '',
                descs: '',
                currencycd: '',
                taxcd: '',
                credittermscd: '',
                chargebasis: '',
                billingcycle: 'M',
                billingperioddescs: 'Y',
                billingnumberingdescs: 'Y',
                billingmethod: 'C',
                billinginterval: '0',
                billingday: '0',
                billingmonth: '0',
                billingdueday: '0',
                billingduemonth: '0',
                totalarea: '0',
                billingrate: '0',
                billingpercent: 0,
                billingfrequency: 0,
                billingamt: '0',
                termspayment: 'R',
                startdate: '',
                enddate: '',
                addresscontactid: '',
                addresscd: '',
                status: '',
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
                rowid: 0,
                tenancychargetype: '',
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                chargevalue: 0,
                chargetype2: '',
                occaddress: ''
                    }
            ,
            PI_chargetype: { 
                cValidate :'', 
                cName: 'chargetype', 
                cId: 'rdbchargetype', 
                cRadioOptions: [{ text: 'SC', value: 'C' },{ text: 'SF', value: 'F' },{ text: 'Other', value: 'O' },], 
                cRadioDefaultOption: 'C', 
                cLabel:'Charge Type', 
                cLabelSize: 4, 
                cOrder: 1, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingduemonth: { 
                cValidate :'', 
                cName: 'billingduemonth', 
                cLabel: 'Billing Due Month ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cAllowMinus: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTransType_All'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AR' AND TrxClass='I' AND TenancyChargeType='D'"   , 
                    ParamWhere: '',
                    SourceField: 'TransactionType=TrxType,Descs,Currency=CurrencyCd,TaxCd,ShortDescs,CreditTermsCd,TimeEdit',
                    DisplayLookUp:'TransactionType,Descs'  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cMasterUrl: 'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_totalarea: { 
                cValidate :'', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cDefault: '',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },             
            PI_descs: { 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:5, 
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
            PI_billingrate: { 
                cValidate :'required', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_billingamt: { 
                cValidate :'required', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cLabel: 'Credit Terms', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cRadioDefaultOption: 'R', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 10, 
                cProtect: false, 
                cVisible:  true, 
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
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Charge Date from', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cVisible:  true, 
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
                cRadioDefaultOption: 'Y', 
                cLabel:'Billing Numbering Descs', 
                cLabelSize: 4, 
                cOrder: 13, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAddress'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Address', 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'AddressCd,Address1' ,
            }, 
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: 'C', 
                cLabel:'Billing Method', 
                cLabelSize: 4, 
                cOrder: 15, 
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
                cOrder:16, 
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
            PI_billingcycle: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'billingcycle', 
                cLabel: 'Billing Cycle', 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cOption: [{ label: 'Daily', id: 'D' },
                { label: 'Weekly', id: 'W' },
                { label: 'Monthly', id: 'M' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_billinginterval: { 
                cValidate :'required|max:5', 
                cName: 'billinginterval', 
                cLabel: 'Billing Interval ', 
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
            PI_billingday: { 
                cValidate :'required', 
                cName: 'billingday', 
                cLabel: 'Billing Day ', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingmonth: { 
                cValidate :'', 
                cName: 'billingmonth', 
                cLabel: 'Billing Month', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cAllowMinus: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdueday: { 
                cValidate :'', 
                cName: 'billingdueday', 
                cLabel: 'Billing Due Day', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: false, 
                cType: 'numeric',
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
				cProtect: false
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
        BillingAmount(){
            var ttlArea = this.M_TN_StrataCharges.totalarea == '' || this.M_TN_StrataCharges.totalarea == null? 0 : this.replaceAllString(this.M_TN_StrataCharges.totalarea, ',', '', 'number')
            var bilRate = this.M_TN_StrataCharges.billingrate == '' || this.M_TN_StrataCharges.billingrate == null? 0 : this.replaceAllString(this.M_TN_StrataCharges.billingrate, ',', '', 'number')
            // var bilAmt  = this.M_TN_StrataCharges.billingamt == '' || this.M_TN_StrataCharges.billingamt == null? 0 : this.M_TN_StrataCharges.billingamt

            this.M_TN_StrataCharges.billingamt = this.isCurrency(parseInt(ttlArea) * parseInt(bilRate), this.decimal)
        },
        OnchargetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
               if ( data == 'C') {
                    this.setColumnChargeTypeSCWhere()
                } 
                else if ( data == 'F') {
                    this.setColumnChargeTypeSFWhere()
                }
                else if ( data == 'O') {
                    this.setColumnChargeTypeOtherWhere()
                }
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataCharges.trxtype = data.id
            this.M_TN_StrataCharges.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              if (data.id && data.id != "") {
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                .then(dt => {
                  if (dt.length == 0) return
                  var datas = dt[0]
                  this.M_TN_StrataCharges.descs = datas.TrxTypeDescs + " Lot No " + this.DataRowPage1.LotNo
                  this.M_TN_StrataCharges.currencycd = datas.CurrencyCd
                  this.M_TN_StrataCharges.currencycdLabel = datas.CurrencyCd
                  this.M_TN_StrataCharges.credittermscd = datas.CreditTermsCd
                  this.M_TN_StrataCharges.credittermscdLabel = datas.CreditTermsCd

                  // 
                  var paramGetChargeType = {
                    OptionFunctionCd: "GetDataTransactionTypeMapping",
                    ModuleCd: "TN",
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TransType: data.id
                  }

                  this.FnDynamicFunction(paramGetChargeType)
                  .then(ress => {
                    if (ress == null || ress.length == 0 ) return
                   
                    var datas2 = ress[0]
                    this.M_TN_StrataCharges.billingday = datas2.BillingDay == null || datas2.BillingDay == ''? 0 : datas2.BillingDay
                    this.M_TN_StrataCharges.billingmonth = datas2.BillingMonth == null || datas2.BillingMonth == ''? 0 : datas2.BillingMonth
                    this.M_TN_StrataCharges.billingdueday = datas2.BillingDueDay == null || datas2.BillingDueDay == ''? 0 : datas2.BillingDueDay
                    this.M_TN_StrataCharges.billingduemonth = datas2.BillingDueMonth == null || datas2.BillingDueMonth == ''? 0 : datas2.BillingDueMonth
                  })

                })
              }
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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataCharges.currencycd = data.id
            this.M_TN_StrataCharges.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataCharges.credittermscd = data.id
            this.M_TN_StrataCharges.credittermscdLabel = data.label
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
        OnaddresscdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_StrataCharges.addresscd = data.id
            this.M_TN_StrataCharges.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
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
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
        OnbillingcycleChange(data) {
        this.$nextTick(() => {
          this.M_TN_StrataCharges.billingcycle = data.id
            this.M_TN_StrataCharges.billingcycleLabel = data.label
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
      if(this.DataRowPage1.OwnerID == null || this.DataRowPage1.OwnerID == ''){
             this.getToolbar().statusFunction[0].disabled = true
             this.getToolbar().statusFunction[1].disabled = true
             this.$store.commit('setEditStatus', false)
           }else{
             this.getToolbar().statusFunction[0].disabled = false
             this.getToolbar().statusFunction[1].disabled = false
             this.$store.commit('setEditStatus', true)
           }
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

            // if(data.OwnerID ==null || data.OwnerID == ''){
            // this.$store.commit('setEditStatus', true)
            
            // }else{
            //   this.$store.commit('setEditStatus', false)
            // }

            this.M_TN_StrataCharges.lotno = data.LotNo
            this.M_TN_StrataCharges.addresscontactid = data.OwnerID
            this.M_TN_StrataCharges.totalarea = this.isCurrency(data.NetArea, this.decimal)
            
            this.propList.initialWhere ="SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND LotNo = '" + data.LotNo + "' "

            
            var where = "SubPortfoliCd = '" + this.getDataUser().SubPortfolioCd + "' AND BillingStatus = 'Y' AND ContactId = '"+ data.OwnerID +"'"
            
            this.$refs.ref_addresscd.prop.dataLookUp.InitialWhere = where


            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_StrataCharges.lotno,
                ChargeType: this.M_TN_StrataCharges.chargetype,
                TrxType: this.M_TN_StrataCharges.trxtype == '' || this.M_TN_StrataCharges.trxtype == null ? 'NULL' : this.M_TN_StrataCharges.trxtype ,
                Descs: this.M_TN_StrataCharges.descs,
                CurrencyCd: this.M_TN_StrataCharges.currencycd == '' || this.M_TN_StrataCharges.currencycd == null ? 'NULL' : this.M_TN_StrataCharges.currencycd ,
                CreditTermsCd: this.M_TN_StrataCharges.credittermscd == '' || this.M_TN_StrataCharges.credittermscd == null ? 'NULL' : this.M_TN_StrataCharges.credittermscd ,
                ChargeBasis: this.M_TN_StrataCharges.chargebasis,
                BillingCycle: this.M_TN_StrataCharges.billingcycle,
                BillingPeriodDescs: this.M_TN_StrataCharges.billingperioddescs,
                BillingNumberingDescs: this.M_TN_StrataCharges.billingnumberingdescs,
                BillingMethod: this.M_TN_StrataCharges.billingmethod,
                BillingInterval: this.M_TN_StrataCharges.billinginterval,
                BillingDay: this.M_TN_StrataCharges.billingday,
                TotalArea: this.M_TN_StrataCharges.totalarea ? this.replaceAllString(this.M_TN_StrataCharges.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_StrataCharges.billingrate ? this.replaceAllString(this.M_TN_StrataCharges.billingrate,',','','number') : 0 ,
                BillingPercent: this.M_TN_StrataCharges.billingpercent,
                BillingFrequency: this.M_TN_StrataCharges.billingfrequency,
                BillingAmt: this.M_TN_StrataCharges.billingamt ? this.replaceAllString(this.M_TN_StrataCharges.billingamt,',','','number') : 0 ,
                TermsPayment: this.M_TN_StrataCharges.termspayment,
                StartDate: this.M_TN_StrataCharges.startdate == '' || this.M_TN_StrataCharges.startdate == null ? 'NULL' : this.M_TN_StrataCharges.startdate ,
                EndDate: this.M_TN_StrataCharges.enddate,
                AddressCd: this.M_TN_StrataCharges.addresscd == '' || this.M_TN_StrataCharges.addresscd == null ? 'NULL' : this.M_TN_StrataCharges.addresscd ,
                AddressContactId: this.M_TN_StrataCharges.addresscontactid ,
                Remarks: this.M_TN_StrataCharges.remarks,
                UserInput: this.getDataUser().UserId ,
                Status: this.M_TN_StrataCharges.status,
                BillingMonth: this.M_TN_StrataCharges.billingmonth,
                BillingDueDay: this.M_TN_StrataCharges.billingdueday,
                BillingDueMonth: this.M_TN_StrataCharges.billingduemonth                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_StrataCharges.lotno,
                ChargeType: this.M_TN_StrataCharges.chargetype,
                TrxType: this.M_TN_StrataCharges.trxtype == '' || this.M_TN_StrataCharges.trxtype == null ? 'NULL' : this.M_TN_StrataCharges.trxtype ,
                Descs: this.M_TN_StrataCharges.descs,
                CurrencyCd: this.M_TN_StrataCharges.currencycd == '' || this.M_TN_StrataCharges.currencycd == null ? 'NULL' : this.M_TN_StrataCharges.currencycd ,
                CreditTermsCd: this.M_TN_StrataCharges.credittermscd == '' || this.M_TN_StrataCharges.credittermscd == null ? 'NULL' : this.M_TN_StrataCharges.credittermscd ,
                ChargeBasis: this.M_TN_StrataCharges.chargebasis,
                BillingCycle: this.M_TN_StrataCharges.billingcycle,
                BillingPeriodDescs: this.M_TN_StrataCharges.billingperioddescs,
                BillingNumberingDescs: this.M_TN_StrataCharges.billingnumberingdescs,
                BillingMethod: this.M_TN_StrataCharges.billingmethod,
                BillingInterval: this.M_TN_StrataCharges.billinginterval,
                BillingDay: this.M_TN_StrataCharges.billingday,
                TotalArea: this.M_TN_StrataCharges.totalarea ? this.replaceAllString(this.M_TN_StrataCharges.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_StrataCharges.billingrate ? this.replaceAllString(this.M_TN_StrataCharges.billingrate,',','','number') : 0 ,
                BillingPercent: this.M_TN_StrataCharges.billingpercent,
                BillingFrequency: this.M_TN_StrataCharges.billingfrequency,
                BillingAmt: this.M_TN_StrataCharges.billingamt ? this.replaceAllString(this.M_TN_StrataCharges.billingamt,',','','number') : 0 ,
                TermsPayment: this.M_TN_StrataCharges.termspayment,
                StartDate: this.M_TN_StrataCharges.startdate == '' || this.M_TN_StrataCharges.startdate == null ? 'NULL' : this.M_TN_StrataCharges.startdate ,
                EndDate: this.M_TN_StrataCharges.enddate,
                AddressCd: this.M_TN_StrataCharges.addresscd == '' || this.M_TN_StrataCharges.addresscd == null ? 'NULL' : this.M_TN_StrataCharges.addresscd ,
                AddressContactId: this.M_TN_StrataCharges.addresscontactid,
                Remarks: this.M_TN_StrataCharges.remarks,
                UserEdit: this.getDataUser().UserId ,
                Status: this.M_TN_StrataCharges.status,
                BillingMonth: this.M_TN_StrataCharges.billingmonth,
                BillingDueDay: this.M_TN_StrataCharges.billingdueday,
                BillingDueMonth: this.M_TN_StrataCharges.billingduemonth,
                LotOwnerChargesSequenceNo: this.M_TN_StrataCharges.lotownerchargessequenceno,
                LastUpdateStamp: this.M_TN_StrataCharges.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_StrataCharges = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                lotownerchargessequenceno: 0,
                chargetype: 'C',
                trxtype: '',
                modulecd: '',
                descs: '',
                currencycd: '',
                taxcd: '',
                credittermscd: '',
                chargebasis: '',
                billingcycle: 'M',
                billingperioddescs: 'Y',
                billingnumberingdescs: 'Y',
                billingmethod: 'C',
                billinginterval: '1',
                billingday: '0',
                billingmonth: '0',
                billingdueday: '0',
                billingduemonth: '0',
                totalarea: '0',
                billingrate: '0',
                billingpercent: 0,
                billingfrequency: 0,
                billingamt: '0',
                termspayment: 'R',
                startdate: '',
                enddate: '',
                addresscontactid: '',
                addresscd: '',
                status: '',
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
                rowid: 0,
                tenancychargetype: '',
                trxdescs: '',
                currencydescs: '',
                taxdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                chargevalue: 0,
                chargetype2: '',
                occaddress: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            console.log(JSON.stringify(data,null,2))
            this.M_TN_StrataCharges.lotno = data.LotNo 
            this.M_TN_StrataCharges.totalarea = this.isCurrency(data.NetArea, this.decimal)
            this.M_TN_StrataCharges.addresscontactid = data.OwnerID

            this.GetContract()


        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {
          console.log(value)
				
				dataDelete.push({
                    LotNo: value.LotNo,
                    LotOwnerChargesSequenceNo: value.LotOwnerChargesSequenceNo,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TrxType: value.TrxType == '' || value.TrxType == null ? 'NULL' : value.TrxType ,
                    UserEdit: this.getDataUser().UserId ,
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

                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
          // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                lotno: record.LotNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                lotownerchargessequenceno: record.LotOwnerChargesSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_StrataCharges = {
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                lotownerchargessequenceno: data.lotownerchargessequenceno,
                chargetype: data.chargetype,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                descs: data.descs,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                credittermscd: data.credittermscd,
                chargebasis: data.chargebasis,
                billingcycle: data.billingcycle,
                billingperioddescs: data.billingperioddescs,
                billingnumberingdescs: data.billingnumberingdescs,
                billingmethod: data.billingmethod,
                billinginterval: data.billinginterval,
                billingday: data.billingday,
                billingmonth: data.billingmonth,
                billingdueday: data.billingdueday,
                billingduemonth: data.billingduemonth,
                totalarea: this.isCurrency(data.totalarea, this.decimal),
                billingrate: this.isCurrency(data.billingrate, this.decimal),
                billingpercent: this.isCurrency(data.billingpercent, this.decimal),
                billingfrequency: this.isCurrency(data.billingfrequency, this.decimal),
                billingamt: this.isCurrency(data.totalarea * data.billingrate),
                termspayment: data.termspayment,
                startdate: data.startdate,
                enddate: data.enddate,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                status: data.status,
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
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                tenancychargetype: data.tenancychargetype,
                trxdescs: data.trxdescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                address1: data.address1,
                credittermsdescs: data.credittermsdescs,
                contactid: data.contactid,
                chargevalue: this.isCurrency(data.chargevalue, this.decimal),
                chargetype2: data.chargetype2,
                occaddress: data.occaddress,
                ownerid: data.ownerid
                    }
                 

                this.M_TN_StrataCharges.trxtypeLabel = this.M_TN_StrataCharges.trxtype != null && this.M_TN_StrataCharges.trxtype != '' ? data.trxtype + this.separator + data.descs :'' 
                this.M_TN_StrataCharges.currencycdLabel = this.M_TN_StrataCharges.currencycd != null && this.M_TN_StrataCharges.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_StrataCharges.credittermscdLabel = this.M_TN_StrataCharges.credittermscd != null && this.M_TN_StrataCharges.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
                this.M_TN_StrataCharges.addresscdLabel = this.M_TN_StrataCharges.addresscd != null && this.M_TN_StrataCharges.addresscd != '' ? data.addresscd + this.separator + data.address1:'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,GetContract(){
          var param = {
                  OptionFunctionCd: "GetStrataGetDefault",
                  ModuleCd: this.Module,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  LotNo: this.DataRowPage1.LotNo
            }
            
            this.FnDynamicFunction(param)
                .then(ress => {
                  if(ress ==null) return

                  var data = ress[0]
                  
                  // this.M_TN_ContractBilling2.totalarea = this.isCurrency(data.TotalArea, this.decimal)    
                  this.M_TN_StrataCharges.credittermscd = data.CreditTermsCd
                  this.M_TN_StrataCharges.credittermscdLabel = data.CreditTermsCd != null && data.CreditTermsCd != '' ? data.CreditTermsCd + this.separator + data.CreditTermDescs :'' 
                  
                  this.M_TN_StrataCharges.addresscd = data.AddressCd    
                  this.M_TN_StrataCharges.addresscdLabel = data.AddressCd != null && data.AddressCd != '' ? data.AddressCd + this.separator + data.Address1 :'' 
                })
        }
        
        ,MdtRange_startdate (data) {
            this.M_TN_StrataCharges.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_StrataCharges.enddate = data
        },
        setColumnChargeTypeSCWhere() {
            // Lookup Class
            var where = "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AR' AND TrxClass='I' AND TenancyChargeType='D'"
            this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_trxtype.onChangeTriggered = true
            this.$refs.ref_trxtype.prop.cDefault = this.M_TN_StrataCharges.trxtype
        },
        setColumnChargeTypeSFWhere() {
            // Lookup Class
            var where = "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AR' AND TrxClass='I' AND TenancyChargeType='E'"
            this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_trxtype.onChangeTriggered = true
            this.$refs.ref_trxtype.prop.cDefault = this.M_TN_StrataCharges.trxtype
        },
        setColumnChargeTypeOtherWhere() {
            // Lookup Class
            var where = "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AR' AND TrxClass='I' AND TenancyChargeType='Y'"
            this.$refs.ref_trxtype.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_trxtype.onChangeTriggered = true
            this.$refs.ref_trxtype.prop.cDefault = this.M_TN_StrataCharges.trxtype
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

