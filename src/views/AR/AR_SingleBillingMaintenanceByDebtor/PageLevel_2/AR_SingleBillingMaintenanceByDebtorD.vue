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
                                        <ABSCompute :prop="PI_billingtype" v-model="M_AR_SingleBillingMaintenanceByDebtorD.billingtype"  ref="ref_billingtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_SingleBillingMaintenanceByDebtorD.status"  ref="ref_status"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_SingleBillingMaintenanceByDebtorD.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_SingleBillingMaintenanceByDebtorD.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalcategoryChange" :prop="PI_journalcategory" v-model="M_AR_SingleBillingMaintenanceByDebtorD.journalcategory"  ref="ref_journalcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_billingdate" v-model="M_AR_SingleBillingMaintenanceByDebtorD.billingdate"  ref="ref_billingdate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnincludediscountChange" :prop="PI_includediscount" v-model="M_AR_SingleBillingMaintenanceByDebtorD.includediscount"  ref="ref_includediscount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_trxdatefrom" v-model="M_AR_SingleBillingMaintenanceByDebtorD.trxdatefrom"  ref="ref_trxdatefrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_discountcd" v-model="M_AR_SingleBillingMaintenanceByDebtorD.discountcd"  ref="ref_discountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_trxdateto" v-model="M_AR_SingleBillingMaintenanceByDebtorD.trxdateto"  ref="ref_trxdateto"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AR_SingleBillingMaintenanceByDebtorD.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_SingleBillingMaintenanceByDebtorD.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournaltypeChange" :prop="PI_journaltype" v-model="M_AR_SingleBillingMaintenanceByDebtorD.journaltype"  ref="ref_journaltype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_SingleBillingMaintenanceByDebtorD.taxcd" :label="M_AR_SingleBillingMaintenanceByDebtorD.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnamortizestatusChange" :prop="PI_amortizestatus" v-model="M_AR_SingleBillingMaintenanceByDebtorD.amortizestatus"  ref="ref_amortizestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_credittermscd" v-model="M_AR_SingleBillingMaintenanceByDebtorD.credittermscd"  ref="ref_credittermscd"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbillingmethodChange" :prop="PI_billingmethod" v-model="M_AR_SingleBillingMaintenanceByDebtorD.billingmethod"  ref="ref_billingmethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_duedate" v-model="M_AR_SingleBillingMaintenanceByDebtorD.duedate"  ref="ref_duedate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OntermspaymentChange" :prop="PI_termspayment" v-model="M_AR_SingleBillingMaintenanceByDebtorD.termspayment"  ref="ref_termspayment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalarea" v-model="M_AR_SingleBillingMaintenanceByDebtorD.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_AR_SingleBillingMaintenanceByDebtorD.addresscd" :label="M_AR_SingleBillingMaintenanceByDebtorD.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingrate" v-model="M_AR_SingleBillingMaintenanceByDebtorD.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_SingleBillingMaintenanceByDebtorD.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_AR_SingleBillingMaintenanceByDebtorD.billingamt"  ref="ref_billingamt"/>
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
			      Module:"AR",
            propList: {
                initialWhere:"DebtorCd = '" + this.ValKey + "' AND ContactID = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_SingleBillingMaintenanceByDebtorD :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                trxtype: '',
                modulecd: '',
                applicationno: '',
                wono: '',
                pmcontractno: '',
                debtorcd: '',
                descs: '',
                billingdate: '',
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
                baseamt: '',
                taxamt: '',
                billingtype: '',
                chargetypedescs: '',
                journaltype: '',
                billingmethod: '',
                termspayment: '',
                amortizestatus: '',
                journalcategory: '',
                addresscontactid: '',
                addresscd: '',
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
                duedate: '',
                dueday: 0,
                trxtypedescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_billingtype: { 
                cValidate :'', 
                cName: 'billingtype', 
                cLabel: 'Charge Type', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cLabel: 'Status', 
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
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journalcategory: { 
                cValidate :'', 
                cName: 'journalcategory', 
                cId: 'rdbjournalcategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' }, { text: 'Indirect', value: 'I' }], 
                cRadioDefaultOption: '', 
                cLabel:'Journal Category', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdate: { 
                cValidate :'', 
                cName: 'billingdate', 
                cLabel: 'Billing Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_includediscount: { 
                cValidate :'', 
                cName: 'includediscount', 
                cId: 'rdbincludediscount', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
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
            PI_trxdatefrom: { 
                cValidate :'', 
                cName: 'trxdatefrom', 
                cLabel: 'Amortize Date From', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountcd: { 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
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
            PI_trxdateto: { 
                cValidate :'', 
                cName: 'trxdateto', 
                cLabel: 'Amortize Date To', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journaltype: { 
                cValidate :'', 
                cName: 'journaltype', 
                cId: 'rdbjournaltype', 
                cRadioOptions: [{ text: 'Income', value: 'I' }, { text: 'Deffered', value: 'D' }], 
                cRadioDefaultOption: '', 
                cLabel:'	Journal Type', 
                cLabelSize: 4, 
                cOrder: 13, 
                cProtect: false, 
                cVisible:  true, 
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
                cLabel: 'Tax', 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_amortizestatus: { 
                cValidate :'', 
                cName: 'amortizestatus', 
                cId: 'rdbamortizestatus', 
                cRadioOptions: [{ text: 'Auto', value: 'A' }, { text: 'Manual', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Status', 
                cLabelSize: 4, 
                cOrder: 15, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_credittermscd: { 
                cValidate :'', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingmethod: { 
                cValidate :'', 
                cName: 'billingmethod', 
                cId: 'rdbbillingmethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' }, { text: 'Cut-Off Date', value: 'C' }], 
                cRadioDefaultOption: '', 
                cLabel:'	Amortize Method', 
                cLabelSize: 4, 
                cOrder: 17, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_duedate: { 
                cValidate :'', 
                cName: 'duedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_termspayment: { 
                cValidate :'', 
                cName: 'termspayment', 
                cId: 'rdbtermspayment', 
                cRadioOptions: [{ text: 'In Advance', value: 'R' }, { text: 'In Arrear', value: 'C' }], 
                cRadioDefaultOption: '', 
                cLabel:'	Terms of Payment', 
                cLabelSize: 4, 
                cOrder: 19, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalarea: { 
                cValidate :'', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAddressAdd'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Address', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 21, 
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
                cDisplayColumn: 'AddressCd' ,
            }, 
            PI_billingrate: { 
                cValidate :'', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder:23, 
                cKey: true, 
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
            PI_billingamt: { 
                cValidate :'', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
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
        OnjournalcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data == 'D'){
                this.PI_includediscount.cProtect = false
              }
              else{
                this.PI_includediscount.cProtect = true
                this.M_AR_SingleBillingMaintenanceD.includediscount = 'N'
              }
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
        OnjournaltypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data == 'D'){
                this.PI_amortizestatus.cProtect = false
              }
              else{
                this.PI_amortizestatus.cProtect = true
                this.M_AR_SingleBillingMaintenanceD.amortizestatus = 'M'
              }
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_SingleBillingMaintenanceByDebtorD.taxcd = data.id
            this.M_AR_SingleBillingMaintenanceByDebtorD.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
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
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_SingleBillingMaintenanceByDebtorD.addresscd = data.id
            this.M_AR_SingleBillingMaintenanceByDebtorD.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
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
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
            this.M_AR_SingleBillingMaintenanceByDebtorD.debtorcd = data.DebtorCd 
            this.M_AR_SingleBillingMaintenanceByDebtorD.contactid = data.ContactID 
            this.propList.initialWhere ="Status = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND DebtorCd = '" + data.DebtorCd + "'"
            var where = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND BillingStatus='Y' And (ContactId='" + data.ContactID + "')"
            this.$refs.ref_addresscd.prop.dataLookUp.InitialWhere = where


            this.FormToABSList().doGetList('','eb_getList')
        },
        M_Insert() {
        },
        M_Update() {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ApplicationNo: this.M_AR_SingleBillingMaintenanceByDebtorD.applicationno,
                ContactID: this.M_AR_SingleBillingMaintenanceByDebtorD.contactid,
                DebtorCd: this.M_AR_SingleBillingMaintenanceByDebtorD.debtorcd,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BillingSequenceNo: this.M_AR_SingleBillingMaintenanceByDebtorD.billingsequenceno,
                TaxCd: this.M_AR_SingleBillingMaintenanceByDebtorD.taxcd == '' || this.M_AR_SingleBillingMaintenanceByDebtorD.taxcd == null ? 'NULL' : this.M_AR_SingleBillingMaintenanceByDebtorD.taxcd ,
                IncludeDiscount: this.M_AR_SingleBillingMaintenanceByDebtorD.includediscount,
                JournalType: this.ARFieldHelper.JOURNAL_TYPE_INCOME,
                BillingMethod: this.ARFieldHelper.BILLING_METHOD_FULL_MONTH,
                TermsPayment: this.ARFieldHelper.TERMS_PAYMENT_IN_ARREAR,
                AddressCd: this.M_AR_SingleBillingMaintenanceByDebtorD.addresscd == '' || this.M_AR_SingleBillingMaintenanceByDebtorD.addresscd == null ? 'NULL' : this.M_AR_SingleBillingMaintenanceByDebtorD.addresscd ,
                AddressContactID: this.M_AR_SingleBillingMaintenanceByDebtorD.addresscontactid,
                AmortizeStatus: this.ARFieldHelper.AMORTIZE_STATUS_MANUAL,
                BillingType: this.M_AR_SingleBillingMaintenanceByDebtorD.billingtype,
                JournalCategory: this.ARFieldHelper.JOURNAL_CATEGORY_INDIRECT,
                UserEdit: this.getDataUser().UserId ,
                Descs: this.M_AR_SingleBillingMaintenanceByDebtorD.descs,
                LastUpdateStamp: this.M_AR_SingleBillingMaintenanceByDebtorD.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultUpdate(response.Message)
              this.refreshListParent(true)
            })

        },
		M_ClearForm(){
            this.M_AR_SingleBillingMaintenanceByDebtorD = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                billingsequenceno: 0,
                trxtype: '',
                modulecd: '',
                applicationno: '',
                wono: '',
                pmcontractno: '',
                debtorcd: '',
                descs: '',
                billingdate: '',
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
                baseamt: '',
                taxamt: '',
                billingtype: '',
                chargetypedescs: '',
                journaltype: '',
                billingmethod: '',
                termspayment: '',
                amortizestatus: '',
                journalcategory: '',
                addresscontactid: '',
                addresscd: '',
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
                duedate: '',
                dueday: 0,
                trxtypedescs: '',
                currencydescs: '',
                taxdescs: '',
                discountdescs: '',
                address1: '',
                credittermsdescs: '',
                contactid: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_SingleBillingMaintenanceByDebtorD.contactid = data.ContactID 



        },
        M_Edit(){
        },
        M_Delete(dt){
          // this.refreshListParent(true)
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               applicationno: record.ApplicationNo,
                contactid: this.M_AR_SingleBillingMaintenanceByDebtorD.contactid,
                debtorcd: record.DebtorCd,
                billingsequenceno: record.BillingSequenceNo				
            }

                var abc = this.M_AR_SingleBillingMaintenanceByDebtorD.contactid
            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]

                var status = ""
                if(data.status) {
                  if(data.status == 'N') {
                    status = "New"
                  }
                  else if(data.status == 'Y'){
                    status = "Generated"
                  }
                  else{
                    status = "Cancel"
                  }
                }

                var chargetypedescs = ""
                if(data.chargetypedescs) {
                  if(data.chargetypedescs == 'A') {
                    chargetypedescs = "Down Payment"
                  }
                  else if(data.chargetypedescs == 'B'){
                    chargetypedescs = "Rental Installment"
                  }
                  else if(data.chargetypedescs == 'C'){
                    chargetypedescs = "Revenue Share"
                  }
                  else if(data.chargetypedescs == 'D'){
                    chargetypedescs = "Service Charge"
                  }
                  else if(data.chargetypedescs == 'E'){
                    chargetypedescs = "Sinking Fund"
                  }
                  else if(data.chargetypedescs == 'F'){
                    chargetypedescs = "Promotion Levy"
                  }
                  else if(data.chargetypedescs == 'G'){
                    chargetypedescs = "Food Court Levy"
                  }
                  else if(data.chargetypedescs == 'H'){
                    chargetypedescs = "Administration"
                  }
                  else if(data.chargetypedescs == 'I'){
                    chargetypedescs = "Sublease"
                  }
                  else if(data.chargetypedescs == 'J'){
                    chargetypedescs = "Assignment"
                  }
                  else if(data.chargetypedescs == '1'){
                    chargetypedescs = "Rental Deposit"
                  }
                  else if(data.chargetypedescs == '2'){
                    chargetypedescs = "Service Charge Deposit"
                  }
                  else if(data.chargetypedescs == '3'){
                    chargetypedescs = "Telephone Deposit"
                  }
                  else if(data.chargetypedescs == '4'){
                    chargetypedescs = "Fit Out Deposit"
                  }
                  else if(data.chargetypedescs == 'Y'){
                    chargetypedescs = "Other Charges"
                  }
                  else if(data.chargetypedescs == 'Z'){
                    chargetypedescs = "Other Deposit"
                  }
                  else if(data.chargetypedescs == 'K'){
                    chargetypedescs = "Penalty Rental"
                  }
                  else{
                    chargetypedescs = "Penalty Service Charge"
                  }
                }

this.M_AR_SingleBillingMaintenanceByDebtorD = {
                subportfoliocd: data.subportfoliocd,
                billingsequenceno: data.billingsequenceno,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                applicationno: data.applicationno,
                wono: data.wono,
                pmcontractno: data.pmcontractno,
                debtorcd: data.debtorcd,
                descs: data.descs,
                billingdate: data.billingdate,
                trxdatefrom: data.trxdatefrom,
                trxdateto: data.trxdateto,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                credittermscd: data.credittermscd,
                includediscount: data.includediscount,
                discountcd: data.discountcd,
                discountamt: data.discountamt,
                totalarea: data.totalarea,
                billingrate: this.isCurrency(data.billingrate),
                billingamt: this.isCurrency(data.billingamt),
                baseamt: data.baseamt,
                taxamt: data.taxamt,
                billingtype: data.billingtype,
                chargetypedescs: chargetypedescs,
                journaltype: data.journaltype,
                billingmethod: data.billingmethod,
                termspayment: data.termspayment,
                amortizestatus: data.amortizestatus,
                journalcategory: data.journalcategory,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                debitno: data.debitno,
                postingdate: data.postingdate,
                postedby: data.postedby,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                cancelby: data.cancelby,
                canceldate: data.canceldate,
                status: status,
                inputmethod: data.inputmethod,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                duedate: data.duedate,
                dueday: data.dueday,
                trxtypedescs: data.trxtypedescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                discountdescs: data.discountdescs,
                address1: data.address1,
                credittermsdescs: data.credittermsdescs,
                contactid: abc,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_SingleBillingMaintenanceByDebtorD.taxcdLabel = this.M_AR_SingleBillingMaintenanceByDebtorD.taxcd != null && this.M_AR_SingleBillingMaintenanceByDebtorD.taxcd != '' ? data.taxcd :'' 
                this.M_AR_SingleBillingMaintenanceByDebtorD.addresscdLabel = this.M_AR_SingleBillingMaintenanceByDebtorD.addresscd != null && this.M_AR_SingleBillingMaintenanceByDebtorD.addresscd != '' ? data.addresscd + this.separator  :'' 
                if(data.journaltype == 'D'){
                  this.PI_amortizestatus.cProtect = false
                  }
                  else{
                    this.PI_amortizestatus.cProtect = true
                    this.M_AR_SingleBillingMaintenanceD.amortizestatus = 'M'
                  }

                if(data.journalcategory == 'D'){
                this.PI_includediscount.cProtect = false
                  }
                  else{
                    this.PI_includediscount.cProtect = true
                    this.M_AR_SingleBillingMaintenanceD.includediscount = 'N'
                  }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

