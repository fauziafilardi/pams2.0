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
                                        <ABSInputSelectList @change="OncreditorcdChange" :prop="PI_creditorcd" :value="M_AP_CreditNote.creditorcd" :label="M_AP_CreditNote.creditorcdLabel" ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_CreditNote.trxtype" :label="M_AP_CreditNote.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AP_CreditNote.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_creditdate" v-model="M_AP_CreditNote.creditdate"  ref="ref_creditdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnjournaldateChange" :prop="PI_journaldate" v-model="M_AP_CreditNote.journaldate"  ref="ref_journaldate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnduedateChange" :prop="PI_duedate" v-model="M_AP_CreditNote.duedate"  ref="ref_duedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AP_CreditNote.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_AP_CreditNote.credittermscd" :label="M_AP_CreditNote.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_CreditNote.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_CreditNote.currencycd" :label="M_AP_CreditNote.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AP_CreditNote.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_CreditNote.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AP_CreditNote.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AP_CreditNote.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdiscount" v-model="M_AP_CreditNote.amountafterdiscount"  ref="ref_amountafterdiscount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AP_CreditNote.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AP_CreditNote.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AP_CreditNote.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_remarks" v-model="M_AP_CreditNote.remarks"  ref="ref_remarks"/>
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
          IsUpdate: true,
		cInsertKey:'',
		FormType: "ListProcess",
		Module:"AP",
            propList: {
                initialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            
            M_AP_CreditNote :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                creditorcd: '',
                trxtype: '',
                modulecd: '',
                creditno: '',
                creditdate: '',
                journaldate: '',
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '0',
                trxamt: 0,
                discountamt: 0,
                netamt: 0,
                vatamt: 0,
                status: '',
                remarks: '',
                userinput: '',
                amountafterdiscount: 0,
                totalamt: 0,
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchstatus: '',
                batchtotal: 0,
                trxtypedescs: '',
                creditorname: '',
                dueday: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                lastupdatestamp: 0,
                rowid: 0,
                runningcd:''
                    }
            ,
            PI_creditorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAPCreditor'    , 
                    ColumnDB: 'CreditorCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS = 'A'"   , 
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
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ModuleCd = 'AP' AND TrxClass = 'C'"    , 
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
            PI_creditno: { 
                cValidate :'required|max:20', 
                cName: 'creditno', 
                cLabel: 'Credit Note No ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditdate: { 
                cValidate :'required', 
                cName: 'creditdate', 
                cLabel: 'Credit Note Date ', 
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
            PI_journaldate: { 
                cValidate :'', 
                cName: 'journaldate', 
                cLabel: 'Journal Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_duedate: { 
                cValidate :'', 
                cName: 'duedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CreditTermsCd,Descs' 
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms ', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcurrencyrate: { 
                cValidate :'', 
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
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_amountafterdiscount: { 
                cValidate :'', 
                cName: 'amountafterdiscount', 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Amount ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Amount ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
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
		return this.$store.getters.GetPage1Data
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        GetCreditorData(){
          var param = {
              OptionFunctionCd: "GetCreditorData",
              ModuleCd: this.Module,
              CreditorCd: this.M_AP_CreditNote.creditorcd,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
          .then(ress => {              
              if (ress == null) return              
              this.M_AP_CreditNote.credittermscd = ress[0].CreditTermsCd 
              this.M_AP_CreditNote.duedate = this.M_AP_CreditNote.journaldate
          })
        },
        GetCreditTermsData (){
          if(this.M_AP_CreditNote.credittermscd != ''){
            this.FnGetCreditTermsData(
              this.M_AP_CreditNote.credittermscd
            )
            .then(res => {
              if (res == null) return
              this.M_AP_CreditNote.duedate = this.M_AP_CreditNote.journaldate
            })
          }
        },
        GetCurrencyRate (){
          if (
              (this.M_AP_CreditNote.currencycd && this.M_AP_CreditNote.currencycd != '') && 
              (this.M_AP_CreditNote.creditdate && this.M_AP_CreditNote.creditdate != '')
              ) {
                this.FnGetCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.M_AP_CreditNote.creditdate, this.M_AP_CreditNote.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_CreditNote.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })

                this.FnGetTaxCurrencyRate(
                    this.getDataUser().SubPortfolioCd, this.M_AP_CreditNote.creditdate, this.M_AP_CreditNote.currencycd
                )
                .then(ress => {
                    if (ress != null) {
                        this.M_AP_CreditNote.taxcurrencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                    }
                })
            }
        }, 
        GetTrxTypeData () {
          if(this.M_AP_CreditNote.trxtype != '' || this.M_AP_CreditNote.trxtype != null){
            this.FnIsValidTrxType(
              this.getDataUser().SubPortfolioCd, this.M_AP_CreditNote.trxtype, this.Module, 'C'
            )
            .then(res => {
              if(res[0].Count > 0){
                this.FnGetTrxTypeData(
                  this.getDataUser().SubPortfolioCd, this.Module, this.M_AP_CreditNote.trxtype
                )
                .then(ress => {
                  if(ress.length > 0){
                   this.M_AP_CreditNote.descs = ress[0].TrxTypeDescs
                   if(ress[0].CurrencyCd != '' || ress[0].CurrencyCd != null){
                     this.M_AP_CreditNote.currencycd = ress[0].CurrencyCd 
                   }else{
                     this.M_AP_CreditNote.currencycd = ''
                   }
                   
                   
                   this.GetCurrencyRate()
                  //  alert(this.IsUpdate)
                   if(this.IsUpdate == false){
                     if(ress[0].RunningCd != ''){
                        this.M_AP_CreditNote.runningcd = ress[0].RunningCd
                        this.M_AP_CreditNote.creditno = '(auto)'
                        this.PI_creditno.cProtect = true
                      }else{
                        this.M_AP_CreditNote.creditno = '' 
                        this.PI_creditno.cProtect = false
                        this.M_AP_CreditNote.runningcd = ''
                      }
                   }
                   else{
                     if(ress[0].RunningCd != ''){
                        this.M_AP_CreditNote.runningcd = ress[0].RunningCd
                        // this.M_AP_CreditNote.creditno = '(auto)'
                        this.PI_creditno.cProtect = true
                      }else{
                        this.M_AP_CreditNote.creditno = '' 
                        this.PI_creditno.cProtect = false
                        this.M_AP_CreditNote.runningcd = ''
                      }
                   }
                  }
                })
              }
            })
          }
        },      		
        OncreditorcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_CreditNote.creditorcd = data.id
            this.M_AP_CreditNote.creditorcdLabel = data.label
            this.GetCreditorData()
            if (this.inputStatus != "VIEW") {
//{creditorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_CreditNote.trxtype = data.id
            this.M_AP_CreditNote.trxtypeLabel = data.label            
            if (this.inputStatus != "VIEW") {
                this.GetTrxTypeData()
              // if(data == ''){
              //   this.PI_creditno.cProtect = false
              //   this.M_AP_CreditNote.creditno = ''
              // }else{
              //   this.GetTrxTypeData()
              //   this.PI_creditno.cProtect = true
              //   this.M_AP_CreditNote.creditno = '(auto)'
              // }
            }
        })
        this.$forceUpdate()
        },
        OnjournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaldate}
            }
        })
        this.$forceUpdate()
        },
        OnduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{duedate}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_AP_CreditNote.credittermscd = data.id
            this.M_AP_CreditNote.credittermscdLabel = data.label
            this.GetCreditTermsData()
            if (this.inputStatus != "VIEW") {
//{credittermscd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_CreditNote.currencycd = data.id
            this.M_AP_CreditNote.currencycdLabel = data.label
            this.GetCurrencyRate()
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
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
        },		
		paramFromParent(){
        },	
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
          var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                dataPost.push({
                    _Message_: "Invoice No = "+value.CreditNo,
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    BatchNo : value.BatchNo,
                    ModuleCd : this.Module,
                    UserInput : this.getDataUser().UserId
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
        M_Insert() {
            if (this.M_AP_CreditNote.runningcd && this.M_AP_CreditNote.runningcd != "") {
              this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.M_AP_CreditNote.runningcd,this.getDataUser().UserId,this.M_AP_CreditNote.creditdate)
                .then(dt => {                  
                  this.M_AP_CreditNote.creditno = dt.RunningCode
                  var param = {			
                      OptionSeq: this.getOptionSeq().OptionSeq,
                      LineNo: this.$parent.data.PageOrder,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      // BatchNo: this.M_AP_CreditNote.batchno == '' || this.M_AP_CreditNote.batchno == null ? 'NULL' : this.M_AP_CreditNote.batchno ,
                      BatchNo: 0,
                      Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE,
                      CreditorCd: this.M_AP_CreditNote.creditorcd == '' || this.M_AP_CreditNote.creditorcd == null ? 'NULL' : this.M_AP_CreditNote.creditorcd ,
                      TrxType: this.M_AP_CreditNote.trxtype == '' || this.M_AP_CreditNote.trxtype == null ? 'NULL' : this.M_AP_CreditNote.trxtype ,
                      ModuleCd: 'AP',
                      CreditNo: this.M_AP_CreditNote.creditno,
                      CreditDate: this.M_AP_CreditNote.creditdate,
                      JournalDate: this.M_AP_CreditNote.journaldate == '' || this.M_AP_CreditNote.journaldate == null ? 'NULL' : this.M_AP_CreditNote.journaldate ,
                      ReferenceNo: this.M_AP_CreditNote.referenceno,
                      CreditTermsCd: this.M_AP_CreditNote.credittermscd == '' || this.M_AP_CreditNote.credittermscd == null ? 'NULL' : this.M_AP_CreditNote.credittermscd ,
                      Descs: this.M_AP_CreditNote.descs,
                      CurrencyCd: this.M_AP_CreditNote.currencycd == '' || this.M_AP_CreditNote.currencycd == null ? 'NULL' : this.M_AP_CreditNote.currencycd ,
                      CurrencyRate: this.M_AP_CreditNote.currencyrate ? this.replaceAllString(this.M_AP_CreditNote.currencyrate,',','','number') : 0 ,
                      TaxCurrencyRate: this.M_AP_CreditNote.taxcurrencyrate ? this.replaceAllString(this.M_AP_CreditNote.taxcurrencyrate,',','','number') : 0 ,
                      Status: this.APFieldHelper.CREDIT_HEADER_STATUS_ERROR,
                      Remarks: this.M_AP_CreditNote.remarks,
                      UserInput: this.getDataUser().UserId 
                  }

                  this.postJSON(this.getUrlInsert(), param)
                  .then((response) => {
                      if(response == null) return
                      this.$parent.resultInsert(response.Message)
              
                  })
                })
            }else{
              var param = {			
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  // BatchNo: this.M_AP_CreditNote.batchno == '' || this.M_AP_CreditNote.batchno == null ? 'NULL' : this.M_AP_CreditNote.batchno ,
                  BatchNo: 0,
                  Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE,
                  CreditorCd: this.M_AP_CreditNote.creditorcd == '' || this.M_AP_CreditNote.creditorcd == null ? 'NULL' : this.M_AP_CreditNote.creditorcd ,
                  TrxType: this.M_AP_CreditNote.trxtype == '' || this.M_AP_CreditNote.trxtype == null ? 'NULL' : this.M_AP_CreditNote.trxtype ,
                  ModuleCd: 'AP',
                  CreditNo: this.M_AP_CreditNote.creditno,
                  CreditDate: this.M_AP_CreditNote.creditdate,
                  JournalDate: this.M_AP_CreditNote.journaldate == '' || this.M_AP_CreditNote.journaldate == null ? 'NULL' : this.M_AP_CreditNote.journaldate ,
                  ReferenceNo: this.M_AP_CreditNote.referenceno,
                  CreditTermsCd: this.M_AP_CreditNote.credittermscd == '' || this.M_AP_CreditNote.credittermscd == null ? 'NULL' : this.M_AP_CreditNote.credittermscd ,
                  Descs: this.M_AP_CreditNote.descs,
                  CurrencyCd: this.M_AP_CreditNote.currencycd == '' || this.M_AP_CreditNote.currencycd == null ? 'NULL' : this.M_AP_CreditNote.currencycd ,
                  CurrencyRate: this.M_AP_CreditNote.currencyrate ? this.replaceAllString(this.M_AP_CreditNote.currencyrate,',','','number') : 0 ,
                  TaxCurrencyRate: this.M_AP_CreditNote.taxcurrencyrate ? this.replaceAllString(this.M_AP_CreditNote.taxcurrencyrate,',','','number') : 0 ,
                  Status: this.APFieldHelper.CREDIT_HEADER_STATUS_ERROR,
                  Remarks: this.M_AP_CreditNote.remarks,
                  UserInput: this.getDataUser().UserId 
              }

              this.postJSON(this.getUrlInsert(), param)
              .then((response) => {
                  if(response == null) return
                  this.$parent.resultInsert(response.Message)
          
              })
            }
            

            
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AP_CreditNote.creditno,
                CreditDate: this.M_AP_CreditNote.creditdate,
                JournalDate: this.M_AP_CreditNote.journaldate == '' || this.M_AP_CreditNote.journaldate == null ? 'NULL' : this.M_AP_CreditNote.journaldate ,
                TrxType: this.M_AP_CreditNote.trxtype == '' || this.M_AP_CreditNote.trxtype == null ? 'NULL' : this.M_AP_CreditNote.trxtype ,
                CreditorCd: this.M_AP_CreditNote.creditorcd == '' || this.M_AP_CreditNote.creditorcd == null ? 'NULL' : this.M_AP_CreditNote.creditorcd ,
                ReferenceNo: this.M_AP_CreditNote.referenceno,
                CreditTermsCd: this.M_AP_CreditNote.credittermscd == '' || this.M_AP_CreditNote.credittermscd == null ? 'NULL' : this.M_AP_CreditNote.credittermscd ,
                Descs: this.M_AP_CreditNote.descs,
                CurrencyCd: this.M_AP_CreditNote.currencycd == '' || this.M_AP_CreditNote.currencycd == null ? 'NULL' : this.M_AP_CreditNote.currencycd ,
                CurrencyRate: this.M_AP_CreditNote.currencyrate ? this.replaceAllString(this.M_AP_CreditNote.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_AP_CreditNote.taxcurrencyrate ? this.replaceAllString(this.M_AP_CreditNote.taxcurrencyrate,',','','number') : 0 ,
                Remarks: this.M_AP_CreditNote.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_CreditNote.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_CreditNote = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                creditorcd: '',
                trxtype: '',
                modulecd: '',
                creditno: '',
                creditdate: this.getToday(),
                journaldate: this.getToday(),
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcurrencyrate: '0',
                trxamt: 0,
                discountamt: 0,
                netamt: 0,
                vatamt: 0,
                status: '',
                remarks: '',
                userinput: '',
                amountafterdiscount: 0,
                totalamt: 0,
                useredit: this.getDataUser().UserId,
                documentcount: 0,
                batchstatus: '',
                batchtotal: 0,
                trxtypedescs: '',
                creditorname: '',
                dueday: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            
		},
        M_New(){
          this.IsUpdate = false
          
        },
        M_Edit(){
          this.IsUpdate = true
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE,
                    BatchNo: value.BatchNo == '' || value.BatchNo == null ? 'NULL' : value.BatchNo ,
                    CreditNo: value.CreditNo,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                creditno: record.CreditNo
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AP_CreditNote = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                source: data.source,
                creditorcd: data.creditorcd,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                creditno: data.creditno,
                creditdate: data.creditdate,
                journaldate: data.journaldate,
                duedate: data.duedate,
                referenceno: data.referenceno,
                credittermscd: data.credittermscd,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                amountafterdiscount: this.isCurrency(data.amountafterdiscount, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                useredit: data.useredit,
                documentcount: this.isCurrency(data.documentcount, this.decimal),
                batchstatus: data.batchstatus,
                batchtotal: this.isCurrency(data.batchtotal, this.decimal),
                trxtypedescs: data.trxtypedescs,
                creditorname: data.creditorname,
                dueday: this.isCurrency(data.dueday, this.decimal),
                currentbatchtotal: this.isCurrency(data.currentbatchtotal, this.decimal),
                currentdocumentcount: this.isCurrency(data.currentdocumentcount, this.decimal),
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
            

                this.M_AP_CreditNote.creditorcdLabel = this.M_AP_CreditNote.creditorcd != null && this.M_AP_CreditNote.creditorcd != '' ? data.creditorcd + this.separator + data.creditorname  :'' 
                this.M_AP_CreditNote.trxtypeLabel = this.M_AP_CreditNote.trxtype != null && this.M_AP_CreditNote.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AP_CreditNote.credittermscdLabel = this.M_AP_CreditNote.credittermscd != null && this.M_AP_CreditNote.credittermscd != '' ? data.credittermscd :'' 
                this.M_AP_CreditNote.currencycdLabel = this.M_AP_CreditNote.currencycd != null && this.M_AP_CreditNote.currencycd != '' ? data.currencycd :'' 


                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

