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
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_AR_MassBillingMaintenance.fromapplicationno" :label="M_AR_MassBillingMaintenance.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_AR_MassBillingMaintenance.toapplicationno" :label="M_AR_MassBillingMaintenance.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfrompmcontractnoChange" :prop="PI_frompmcontractno" :value="M_AR_MassBillingMaintenance.frompmcontractno" :label="M_AR_MassBillingMaintenance.frompmcontractnoLabel" ref="ref_frompmcontractno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntopmcontractnoChange" :prop="PI_topmcontractno" :value="M_AR_MassBillingMaintenance.topmcontractno" :label="M_AR_MassBillingMaintenance.topmcontractnoLabel" ref="ref_topmcontractno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromwonoChange" :prop="PI_fromwono" :value="M_AR_MassBillingMaintenance.fromwono" :label="M_AR_MassBillingMaintenance.fromwonoLabel" ref="ref_fromwono"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntowonoChange" :prop="PI_towono" :value="M_AR_MassBillingMaintenance.towono" :label="M_AR_MassBillingMaintenance.towonoLabel" ref="ref_towono"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromtrxtypeChange" :prop="PI_fromtrxtype" :value="M_AR_MassBillingMaintenance.fromtrxtype" :label="M_AR_MassBillingMaintenance.fromtrxtypeLabel" ref="ref_fromtrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntotrxtypeChange" :prop="PI_totrxtype" :value="M_AR_MassBillingMaintenance.totrxtype" :label="M_AR_MassBillingMaintenance.totrxtypeLabel" ref="ref_totrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_startdate" v-model="M_AR_MassBillingMaintenance.startdate"  ref="ref_startdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_MassBillingMaintenance.taxcd" :label="M_AR_MassBillingMaintenance.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalcategoryChange" :prop="PI_journalcategory" v-model="M_AR_MassBillingMaintenance.journalcategory"  ref="ref_journalcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournaltypeChange" :prop="PI_journaltype" v-model="M_AR_MassBillingMaintenance.journaltype"  ref="ref_journaltype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnamortizestatusChange" :prop="PI_amortizestatus" v-model="M_AR_MassBillingMaintenance.amortizestatus"  ref="ref_amortizestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_AR_MassBillingMaintenance.billingmethod"  ref="ref_billingmethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_AR_MassBillingMaintenance.termspayment"  ref="ref_termspayment" />
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
			Module:"AR",	
            IEBy: {Input: '', Edit: ''},

            M_AR_MassBillingMaintenance :{
                fromapplicationno: '',
                toapplicationno: '',
                frompmcontractno: '',
                topmcontractno: '',
                fromwono: '',
                towono: '',
                fromtrxtype: '',
                totrxtype: '',
                startdate: '',
                taxcd: '',
                journalcategory: 'X',
                journaltype: 'X',
                amortizestatus: 'X',
                billingmethod: 'X',
                termspayment: 'X'
                    }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromapplicationno', 
                cLabel: 'Application No From', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,LOONo' ,
            }, 
            PI_toapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toapplicationno', 
                cLabel: 'To ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,LOONo' ,
            }, 
            PI_frompmcontractno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupMMContract'    , 
                    ColumnDB: 'PMContractNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'frompmcontractno', 
                cLabel: 'Preventive Maint. Contract No From ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'PMContractNo,Descs' ,
            }, 
            PI_topmcontractno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupMMContract'    , 
                    ColumnDB: 'PMContractNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'topmcontractno', 
                cLabel: 'To', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'PMContractNo,Descs' ,
            }, 
            PI_fromwono: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupMMWorkOrder'    , 
                    ColumnDB: 'WONo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status IN ('A', 'C')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromwono', 
                cLabel: 'WO No From', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'WONo,Descs' ,
            }, 
            PI_towono: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupMMWorkOrder'    , 
                    ColumnDB: 'WONo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status IN ('A','C')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'towono', 
                cLabel: 'To', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'WONo,Descs' ,
            }, 
            PI_fromtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromtrxtype', 
                cLabel: 'Transaction Type From', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_totrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'totrxtype', 
                cLabel: 'To', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Start Date', 
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
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax Code', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_journalcategory: { 
                cValidate :'', 
                cName: 'journalcategory', 
                cId: 'rdbjournalcategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' },{ text: 'Indirect', value: 'I' },{ text: 'No Change', value: 'X' },], 
                cRadioDefaultOption: 'X', 
                cLabel:'Journal Category', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journaltype: { 
                cValidate :'', 
                cName: 'journaltype', 
                cId: 'rdbjournaltype', 
                cRadioOptions: [{ text: 'Income', value: 'I' },{ text: 'Deffered', value: 'D' },{ text: 'No Change', value: 'X' },], 
                cRadioDefaultOption: 'X', 
                cLabel:'Journal Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizestatus: { 
                cValidate :'', 
                cName: 'amortizestatus', 
                cId: 'rdbamortizestatus', 
                cRadioOptions: [{ text: 'Auto', value: 'A' },{ text: 'Manual', value: 'M' },{ text: 'No Change', value: 'X' },], 
                cRadioDefaultOption: 'X', 
                cLabel:'Amortize Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'CutOff Date', value: 'C' },{ text: 'No Change', value: 'X' },], 
                cRadioDefaultOption: 'X', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' },{ text: 'In Arrear', value: 'C' },{ text: 'No Change', value: 'X' },], 
                cRadioDefaultOption: 'X', 
                cLabel:'Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 0, 
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
        OnfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.fromapplicationno = data.id
            this.M_AR_MassBillingMaintenance.fromapplicationnoLabel = data.label
            this.M_AR_MassBillingMaintenance.toapplicationno = data.id
            this.M_AR_MassBillingMaintenance.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.toapplicationno = data.id
            this.M_AR_MassBillingMaintenance.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OnfrompmcontractnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.frompmcontractno = data.id
            this.M_AR_MassBillingMaintenance.frompmcontractnoLabel = data.label
            this.M_AR_MassBillingMaintenance.topmcontractno = data.id
            this.M_AR_MassBillingMaintenance.topmcontractnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{frompmcontractno}
            }
        })
        this.$forceUpdate()
        },
        OntopmcontractnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.topmcontractno = data.id
            this.M_AR_MassBillingMaintenance.topmcontractnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{topmcontractno}
            }
        })
        this.$forceUpdate()
        },
        OnfromwonoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.fromwono = data.id
            this.M_AR_MassBillingMaintenance.fromwonoLabel = data.label
            this.M_AR_MassBillingMaintenance.towono = data.id
            this.M_AR_MassBillingMaintenance.towonoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromwono}
            }
        })
        this.$forceUpdate()
        },
        OntowonoChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.towono = data.id
            this.M_AR_MassBillingMaintenance.towonoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{towono}
            }
        })
        this.$forceUpdate()
        },
        OnfromtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.fromtrxtype = data.id
            this.M_AR_MassBillingMaintenance.fromtrxtypeLabel = data.label
            this.M_AR_MassBillingMaintenance.totrxtype = data.id
            this.M_AR_MassBillingMaintenance.totrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntotrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.totrxtype = data.id
            this.M_AR_MassBillingMaintenance.totrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_MassBillingMaintenance.taxcd = data.id
            this.M_AR_MassBillingMaintenance.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OnjournalcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journalcategory}
            }
        })
        this.$forceUpdate()
        },
        OnjournaltypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaltype}
            }
        })
        this.$forceUpdate()
        },
        OnamortizestatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizestatus}
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
        OntermspaymentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{termspayment}
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
        M_Post( ){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TaxCd: this.M_AR_MassBillingMaintenance.taxcd,
                JournalType: this.M_AR_MassBillingMaintenance.journaltype ,
                BillingMethod: this.M_AR_MassBillingMaintenance.billingmethod,
                TermsPayment: this.M_AR_MassBillingMaintenance.termspayment,
                JournalCategory: this.M_AR_MassBillingMaintenance.journalcategory,
                AmortizeStatus: this.M_AR_MassBillingMaintenance.amortizestatus,
                FromApplicationNo: this.M_AR_MassBillingMaintenance.fromapplicationno,
                ToApplicationNo: this.M_AR_MassBillingMaintenance.toapplicationno,
                FromTrxType: this.M_AR_MassBillingMaintenance.fromtrxtype,
                ToTrxType: this.M_AR_MassBillingMaintenance.totrxtype,
                FromWONo: this.M_AR_MassBillingMaintenance.fromwono,
                ToWONo: this.M_AR_MassBillingMaintenance.towono,
                FromPMContractNo: this.M_AR_MassBillingMaintenance.frompmcontractno,
                ToPMContractNo: this.M_AR_MassBillingMaintenance.topmcontractno,
                StartDate: this.M_AR_MassBillingMaintenance.startdate,
                UserEdit: this.getDataUser().UserId,
                ApplicationError_Output: ''
                
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    // this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.getToolbar().doNew(true)
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'view')

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_AR_MassBillingMaintenance = {
                fromapplicationno: '',
                toapplicationno: '',
                frompmcontractno: '',
                topmcontractno: '',
                fromwono: '',
                towono: '',
                fromtrxtype: '',
                totrxtype: '',
                startdate: '',
                taxcd: '',
                journalcategory: 'X',
                journaltype: 'X',
                amortizestatus: 'X',
                billingmethod: 'X',
                termspayment: 'X'
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_MassBillingMaintenance = {
                fromapplicationno: data.fromapplicationno,
                toapplicationno: data.toapplicationno,
                frompmcontractno: data.frompmcontractno,
                topmcontractno: data.topmcontractno,
                fromwono: data.fromwono,
                towono: data.towono,
                fromtrxtype: data.fromtrxtype,
                totrxtype: data.totrxtype,
                startdate: data.startdate,
                taxcd: data.taxcd,
                journalcategory: data.journalcategory,
                journaltype: data.journaltype,
                amortizestatus: data.amortizestatus,
                billingmethod: data.billingmethod,
                termspayment: data.termspayment
                    }
                 

                this.M_AR_MassBillingMaintenance.fromapplicationnoLabel = this.M_AR_MassBillingMaintenance.fromapplicationno != null && this.M_AR_MassBillingMaintenance.fromapplicationno != '' ? data.fromapplicationno + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.toapplicationnoLabel = this.M_AR_MassBillingMaintenance.toapplicationno != null && this.M_AR_MassBillingMaintenance.toapplicationno != '' ? data.toapplicationno + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.frompmcontractnoLabel = this.M_AR_MassBillingMaintenance.frompmcontractno != null && this.M_AR_MassBillingMaintenance.frompmcontractno != '' ? data.frompmcontractno + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.topmcontractnoLabel = this.M_AR_MassBillingMaintenance.topmcontractno != null && this.M_AR_MassBillingMaintenance.topmcontractno != '' ? data.topmcontractno + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.fromwonoLabel = this.M_AR_MassBillingMaintenance.fromwono != null && this.M_AR_MassBillingMaintenance.fromwono != '' ? data.fromwono + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.towonoLabel = this.M_AR_MassBillingMaintenance.towono != null && this.M_AR_MassBillingMaintenance.towono != '' ? data.towono + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.fromtrxtypeLabel = this.M_AR_MassBillingMaintenance.fromtrxtype != null && this.M_AR_MassBillingMaintenance.fromtrxtype != '' ? data.fromtrxtype + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.totrxtypeLabel = this.M_AR_MassBillingMaintenance.totrxtype != null && this.M_AR_MassBillingMaintenance.totrxtype != '' ? data.totrxtype + this.separator  :'' 
                this.M_AR_MassBillingMaintenance.taxcdLabel = this.M_AR_MassBillingMaintenance.taxcd != null && this.M_AR_MassBillingMaintenance.taxcd != '' ? data.taxcd + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
        //  
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.getToolbar().doNew(true)
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
