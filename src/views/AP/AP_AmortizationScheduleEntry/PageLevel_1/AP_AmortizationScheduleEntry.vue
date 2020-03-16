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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_AmortizationScheduleEntry.creditorcd" :label="M_AP_AmortizationScheduleEntry.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_AmortizationScheduleEntry.trxtype" :label="M_AP_AmortizationScheduleEntry.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AP_AmortizationScheduleEntry.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_AmortizationScheduleEntry.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_AmortizationScheduleEntry.currencycd" :label="M_AP_AmortizationScheduleEntry.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_AmortizationScheduleEntry.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AP_AmortizationScheduleEntry.taxcd" :label="M_AP_AmortizationScheduleEntry.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxtypeChange" :prop="PI_taxtype" :value="M_AP_AmortizationScheduleEntry.taxtype" :label="M_AP_AmortizationScheduleEntry.taxtypeLabel" ref="ref_taxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AP_AmortizationScheduleEntry.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amortizeamt" v-model="M_AP_AmortizationScheduleEntry.amortizeamt"  ref="ref_amortizeamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AP_AmortizationScheduleEntry.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndiscountcdChange" :prop="PI_discountcd" :value="M_AP_AmortizationScheduleEntry.discountcd" :label="M_AP_AmortizationScheduleEntry.discountcdLabel" ref="ref_discountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AP_AmortizationScheduleEntry.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amortizeday" v-model="M_AP_AmortizationScheduleEntry.amortizeday"  ref="ref_amortizeday"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_amortizeinterval" v-model="M_AP_AmortizationScheduleEntry.amortizeinterval"  ref="ref_amortizeinterval"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_startperiod" v-model="M_AP_AmortizationScheduleEntry.startperiod"  ref="ref_startperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_startyear" v-model="M_AP_AmortizationScheduleEntry.startyear"  ref="ref_startyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_AmortizationScheduleEntry.remarks"  ref="ref_remarks" />
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
		FormType: "List",
		Module:"AP",
            propList: {
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND Status ='N' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_AmortizationScheduleEntry :{
                creditorcd: '',
                trxtype: '',
                referenceno: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcd: '',
                taxtype: '',
                taxcurrencyrate: '0',
                amortizeamt: '0',
                withholdingamt: '0',
                discountcd: '',
                discountamt: '0',
                amortizeinterval: '0',
                amortizeday: '0',
                startperiod: '0',
                startyear: '0',
                status: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                creditorname: '',
                trxtypedescs: '',
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                contactid: '',
                modulecd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND Status='A' "   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditorCd,Name' 
                        }, 
                cValidate :'required', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code ', 
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
                cMasterUrl: 'AP/AP_Creditor' ,
                cDisplayColumn: 'CreditorCd,Name' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd='AP' AND TrxClass='I' AND JournalType='D' "   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No ', 
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
            PI_descs: { 
                cValidate :'required|max:150', 
                cName: 'descs', 
                cLabel: 'Description ', 
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
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CurrencyCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate ', 
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
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TaxCd, Descs' 
                        }, 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax', 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_taxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxType'    , 
                    ColumnDB: 'TaxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TaxType,Descs' 
                        }, 
                cValidate :'', 
                cName: 'taxtype', 
                cLabel: 'Tax Type', 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxType,Descs' ,
            }, 
            PI_taxcurrencyrate: { 
                cValidate :'required|max:10', 
                cName: 'taxcurrencyrate', 
                cLabel: 'Tax Currency Rate', 
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
            PI_amortizeamt: { 
                cValidate :'required', 
                cName: 'amortizeamt', 
                cLabel: 'Amortize Amount ', 
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
            PI_withholdingamt: { 
                cValidate :'required', 
                cName: 'withholdingamt', 
                cLabel: 'Other Amount', 
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
            PI_discountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMDiscount'    , 
                    ColumnDB: 'DiscountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'DiscountCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
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
                cMasterUrl: 'CM/CM_Discount' ,
                cDisplayColumn: 'DiscountCd,Descs' ,
            }, 
            PI_discountamt: { 
                cValidate :'required', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
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
            PI_amortizeday: { 
                cValidate :'required', 
                cName: 'amortizeday', 
                cLabel: 'Amortize Day ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizeinterval: { 
                cValidate :'required|max:60', 
                cName: 'amortizeinterval', 
                cLabel: 'Amortize Frequency ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startperiod: { 
                cValidate :'required', 
                cName: 'startperiod', 
                cLabel: 'Start Period ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startyear: { 
                cValidate :'required', 
                cName: 'startyear', 
                cLabel: 'Start Year ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
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
                cOrder:0, 
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
		return this.$store.getters.GetPage1Data
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {	
      GetCurrencyRate (){
          if (this.M_AP_AmortizationScheduleEntry.currencycd && this.M_AP_AmortizationScheduleEntry.currencycd != '')
               {
                this.FnGetCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.getToday(), this.M_AP_AmortizationScheduleEntry.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_AmortizationScheduleEntry.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })

                this.FnGetTaxCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.getToday(), this.M_AP_AmortizationScheduleEntry.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_AmortizationScheduleEntry.taxcurrencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })
            }
        }, 	
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_AmortizationScheduleEntry.creditorcd = data.id
            this.M_AP_AmortizationScheduleEntry.creditorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_AmortizationScheduleEntry.trxtype = data.id
            this.M_AP_AmortizationScheduleEntry.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_AmortizationScheduleEntry.currencycd = data.id
            this.M_AP_AmortizationScheduleEntry.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetCurrencyRate()
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_AmortizationScheduleEntry.taxcd = data.id
            this.M_AP_AmortizationScheduleEntry.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_taxtype.dataLookUp.InitialWhere = "TaxCd = '"+data.id+"'"
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OntaxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_AmortizationScheduleEntry.taxtype = data.id
            this.M_AP_AmortizationScheduleEntry.taxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxtype}
            }
        })
        this.$forceUpdate()
        },
        OndiscountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_AmortizationScheduleEntry.discountcd = data.id
            this.M_AP_AmortizationScheduleEntry.discountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                var billingamt = this.M_AP_AmortizationScheduleEntry.amortizeamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.amortizeamt, ',', '', 'number') : 0
                this.FnGetDiscountAmount(billingamt, data.id)
                    .then(ress => {
                        var data = ress[0]
                        this.M_AP_AmortizationScheduleEntry.discountamt = this.isCurrency(data.DiscountAmt, this.decimal)
                    })
//{discountcd}
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
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditorCd: this.M_AP_AmortizationScheduleEntry.creditorcd == '' || this.M_AP_AmortizationScheduleEntry.creditorcd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.creditorcd ,
                TrxType: this.M_AP_AmortizationScheduleEntry.trxtype == '' || this.M_AP_AmortizationScheduleEntry.trxtype == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.trxtype ,
                ModuleCd: this.Module,
                ReferenceNo: this.M_AP_AmortizationScheduleEntry.referenceno,
                Descs: this.M_AP_AmortizationScheduleEntry.descs,
                CurrencyCd: this.M_AP_AmortizationScheduleEntry.currencycd == '' || this.M_AP_AmortizationScheduleEntry.currencycd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.currencycd ,
                CurrencyRate: this.M_AP_AmortizationScheduleEntry.currencyrate ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.currencyrate,',','','number') : 0 ,
                TaxCd: this.M_AP_AmortizationScheduleEntry.taxcd == '' || this.M_AP_AmortizationScheduleEntry.taxcd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.taxcd ,
                TaxType: this.M_AP_AmortizationScheduleEntry.taxtype == '' || this.M_AP_AmortizationScheduleEntry.taxtype == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.taxtype ,
                TaxCurrencyRate: this.M_AP_AmortizationScheduleEntry.taxcurrencyrate ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.taxcurrencyrate,',','','number') : 0 ,
                AmortizeAmt: this.M_AP_AmortizationScheduleEntry.amortizeamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.amortizeamt,',','','number') : 0 ,
                WithHoldingAmt: this.M_AP_AmortizationScheduleEntry.withholdingamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.withholdingamt,',','','number') : 0 ,
                DiscountCd: this.M_AP_AmortizationScheduleEntry.discountcd == '' || this.M_AP_AmortizationScheduleEntry.discountcd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.discountcd ,
                DiscountAmt: this.M_AP_AmortizationScheduleEntry.discountamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.discountamt,',','','number') : 0 ,
                AmortizeInterval: this.M_AP_AmortizationScheduleEntry.amortizeinterval,
                AmortizeDay: this.M_AP_AmortizationScheduleEntry.amortizeday,
                StartPeriod: this.M_AP_AmortizationScheduleEntry.startperiod,
                StartYear: this.M_AP_AmortizationScheduleEntry.startyear,
                Status: this.APFieldHelper.AMORTIZE_STATUS_NEW,
                Remarks: this.M_AP_AmortizationScheduleEntry.remarks,
                UserInput: this.getDataUser().UserId                 
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
                SequenceNo: this.M_AP_AmortizationScheduleEntry.sequenceno,
                CreditorCd: this.M_AP_AmortizationScheduleEntry.creditorcd == '' || this.M_AP_AmortizationScheduleEntry.creditorcd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.creditorcd ,
                TrxType: this.M_AP_AmortizationScheduleEntry.trxtype == '' || this.M_AP_AmortizationScheduleEntry.trxtype == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.trxtype ,
                ReferenceNo: this.M_AP_AmortizationScheduleEntry.referenceno,
                Descs: this.M_AP_AmortizationScheduleEntry.descs,
                CurrencyCd: this.M_AP_AmortizationScheduleEntry.currencycd == '' || this.M_AP_AmortizationScheduleEntry.currencycd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.currencycd ,
                CurrencyRate: this.M_AP_AmortizationScheduleEntry.currencyrate ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.currencyrate,',','','number') : 0 ,
                TaxCd: this.M_AP_AmortizationScheduleEntry.taxcd == '' || this.M_AP_AmortizationScheduleEntry.taxcd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.taxcd ,
                TaxType: this.M_AP_AmortizationScheduleEntry.taxtype == '' || this.M_AP_AmortizationScheduleEntry.taxtype == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.taxtype ,
                TaxCurrencyRate: this.M_AP_AmortizationScheduleEntry.taxcurrencyrate ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.taxcurrencyrate,',','','number') : 0 ,
                AmortizeAmt: this.M_AP_AmortizationScheduleEntry.amortizeamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.amortizeamt,',','','number') : 0 ,
                WithHoldingAmt: this.M_AP_AmortizationScheduleEntry.withholdingamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.withholdingamt,',','','number') : 0 ,
                DiscountCd: this.M_AP_AmortizationScheduleEntry.discountcd == '' || this.M_AP_AmortizationScheduleEntry.discountcd == null ? 'NULL' : this.M_AP_AmortizationScheduleEntry.discountcd ,
                DiscountAmt: this.M_AP_AmortizationScheduleEntry.discountamt ? this.replaceAllString(this.M_AP_AmortizationScheduleEntry.discountamt,',','','number') : 0 ,
                AmortizeInterval: this.M_AP_AmortizationScheduleEntry.amortizeinterval,
                AmortizeDay: this.M_AP_AmortizationScheduleEntry.amortizeday,
                StartPeriod: this.M_AP_AmortizationScheduleEntry.startperiod,
                StartYear: this.M_AP_AmortizationScheduleEntry.startyear,
                Remarks: this.M_AP_AmortizationScheduleEntry.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_AmortizationScheduleEntry.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_AmortizationScheduleEntry = {
                creditorcd: '',
                trxtype: '',
                referenceno: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcd: '',
                taxtype: '',
                taxcurrencyrate: '0',
                amortizeamt: '0',
                withholdingamt: '0',
                discountcd: '',
                discountamt: '0',
                amortizeinterval: '0',
                amortizeday: '0',
                startperiod: '0',
                startyear: '0',
                status: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                creditorname: '',
                trxtypedescs: '',
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                contactid: '',
                modulecd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            	
	
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
					_Message_:'',
                    SequenceNo: value.SequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,


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
                LineNo: this.$parent.data.PageOrder,
                sequenceno: record.SequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_AmortizationScheduleEntry = {
                creditorcd: data.creditorcd,
                trxtype: data.trxtype,
                referenceno: data.referenceno,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcd: data.taxcd,
                taxtype: data.taxtype,
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                amortizeamt: this.isCurrency(data.amortizeamt, this.decimal),
                withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                amortizeinterval: this.isCurrency(data.amortizeinterval, this.decimal),
                amortizeday: this.isCurrency(data.amortizeday, this.decimal),
                startperiod: data.startperiod,
                startyear: data.startyear,
                status: data.status,
                remarks: data.remarks,
                useredit: data.useredit,
                userinput: data.userinput,
                creditorname: data.creditorname,
                trxtypedescs: data.trxtypedescs,
                sequenceno: record.SequenceNo,
                subportfoliocd: data.subportfoliocd,
                contactid: data.contactid,
                modulecd: data.modulecd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AP_AmortizationScheduleEntry.creditorcdLabel = this.M_AP_AmortizationScheduleEntry.creditorcd != null && this.M_AP_AmortizationScheduleEntry.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname :'' 
                this.M_AP_AmortizationScheduleEntry.trxtypeLabel = this.M_AP_AmortizationScheduleEntry.trxtype != null && this.M_AP_AmortizationScheduleEntry.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AP_AmortizationScheduleEntry.currencycdLabel = this.M_AP_AmortizationScheduleEntry.currencycd != null && this.M_AP_AmortizationScheduleEntry.currencycd != '' ? data.currencycd  :'' 
                this.M_AP_AmortizationScheduleEntry.taxcdLabel = this.M_AP_AmortizationScheduleEntry.taxcd != null && this.M_AP_AmortizationScheduleEntry.taxcd != '' ? data.taxcd  :'' 
                this.M_AP_AmortizationScheduleEntry.taxtypeLabel = this.M_AP_AmortizationScheduleEntry.taxtype != null && this.M_AP_AmortizationScheduleEntry.taxtype != '' ? data.taxtype   :'' 
                this.M_AP_AmortizationScheduleEntry.discountcdLabel = this.M_AP_AmortizationScheduleEntry.discountcd != null && this.M_AP_AmortizationScheduleEntry.discountcd != '' ? data.discountcd + this.separator + data.discountdescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
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

