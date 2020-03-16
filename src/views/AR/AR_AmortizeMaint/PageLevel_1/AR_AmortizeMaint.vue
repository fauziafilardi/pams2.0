<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      :hideCheckboxAndGear="CheckBoxLis"
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
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_AmortizeMaint.debtorcd" :label="M_AR_AmortizeMaint.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_AmortizeMaint.trxtype" :label="M_AR_AmortizeMaint.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_AmortizeMaint.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_AmortizeMaint.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_AmortizeMaint.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_AmortizeMaint.currencycd" :label="M_AR_AmortizeMaint.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_AmortizeMaint.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_AmortizeMaint.taxcd" :label="M_AR_AmortizeMaint.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxtypeChange" :prop="PI_taxtype" :value="M_AR_AmortizeMaint.taxtype" :label="M_AR_AmortizeMaint.taxtypeLabel" ref="ref_taxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_AmortizeMaint.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnamortizedateChange" :prop="PI_amortizedate" v-model="M_AR_AmortizeMaint.amortizedate"  ref="ref_amortizedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_originalamortizeamt" v-model="M_AR_AmortizeMaint.originalamortizeamt"  ref="ref_originalamortizeamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">                                        
                                        <ABSinputTextVuex :prop="PI_amortizeamt" v-model="M_AR_AmortizeMaint.amortizeamt"  ref="ref_amortizeamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AR_AmortizeMaint.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AmortizeMaint.remarks"  ref="ref_remarks" />
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
    Module:"AR",
    CheckBoxLis:false,
            propList: {
                initialWhere: "SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND STATUS='N' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AmortizeMaint :{
                debtorcd: '',
                trxtype: '',
                referenceno: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcd: '',
                taxtype: '',
                taxcurrencyrate: '0',
                amortizedate: '',
                withholdingamt: '0',
                discountcd: '',
                discountamt: '',
                remarks: '',
                status: '',
                originalamortizeamt: '0',
                amortizeamt: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorname: '',
                trxtypedescs: '',
                debitsequenceno: 0,
                amortizesequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' and Status='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I' AND JournalType='D'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
                cLabel: 'Currency', 
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
                cMasterUrl: 'CM/CM_Currency' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_taxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxType'    , 
                    ColumnDB: 'TaxType'   , 
                    InitialWhere: "TaxCd=''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxtype', 
                cLabel: 'Tax Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cValidate :'', 
                cName: 'taxcurrencyrate', 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizedate: { 
                cValidate :'required', 
                cName: 'amortizedate', 
                cLabel: 'Amortize Date', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_originalamortizeamt: { 
                cValidate :'', 
                cName: 'originalamortizeamt', 
                cLabel: 'Original Amortize Amount', 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cName: 'originalamortizeamt', 
                cLabel: 'Amortize Amount', 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cValidate :'', 
                cName: 'withholdingamt', 
                cLabel: 'Withholding Amount', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
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
                cOrder: 14, 
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
	}
  },
    methods: {		
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeMaint.debtorcd = data.id
            this.M_AR_AmortizeMaint.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeMaint.trxtype = data.id
            this.M_AR_AmortizeMaint.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeMaint.currencycd = data.id
            this.M_AR_AmortizeMaint.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              if(data!=''){
                    this.FnGetCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_FormatingDate(new Date()), data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_AmortizeMaint.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_FormatingDate(new Date()), data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_AmortizeMaint.taxcurrencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeMaint.taxcd = data.id
            this.M_AR_AmortizeMaint.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}   
              this.PI_taxtype.dataLookUp.InitialWhere = "TaxCd='"+data.id+"'"
            }
        })
        this.$forceUpdate()
        },
        OntaxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeMaint.taxtype = data.id
            this.M_AR_AmortizeMaint.taxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxtype}
            }
        })
        this.$forceUpdate()
        },
        OnamortizedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizedate}
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
      // console.log('2')
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
          // console.log(record)
          // switch(record.STATUS){
          //         case"N":
                  // this.getToolbar().statusFunction[1].disabled = false
                  this.getToolbar().statusFunction[1].disabled = true
                    // this.$store.commit('seteditstatus', false)
                //   break;
                //   case"Y":
                //     this.$store.commit('seteditstatus', false)
                //   break;
                //   default:
                //     this.$store.commit('seteditstatus', false)
                //   break;
                // }
                // this.getToolbar().ProcessPS()
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert(){
          this.FnValidateTrxType( this.getDataUser().SubPortfolioCd,this.Module,this.M_AR_AmortizeMaint.trxtype,'I','D')
            .then(ress => {
                if (ress != null) {
                    var data = ress[0]
                    if(data.Column1 == ''){
                        this.saveData()
                    }else{
                        this.alertError(data.Column1)
                    }

                }
            })
        },
        saveData() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebtorCd: this.M_AR_AmortizeMaint.debtorcd == '' || this.M_AR_AmortizeMaint.debtorcd == null ? 'NULL' : this.M_AR_AmortizeMaint.debtorcd ,
                TrxType: this.M_AR_AmortizeMaint.trxtype == '' || this.M_AR_AmortizeMaint.trxtype == null ? 'NULL' : this.M_AR_AmortizeMaint.trxtype ,
                ModuleCd: this.Module,
                ReferenceNo: this.M_AR_AmortizeMaint.referenceno,
                Descs: this.M_AR_AmortizeMaint.descs,
                AmortizeDate: this.M_AR_AmortizeMaint.amortizedate == '' || this.M_AR_AmortizeMaint.amortizedate == null ? 'NULL' : this.M_AR_AmortizeMaint.amortizedate ,
                CurrencyCd: this.M_AR_AmortizeMaint.currencycd == '' || this.M_AR_AmortizeMaint.currencycd == null ? 'NULL' : this.M_AR_AmortizeMaint.currencycd ,
                CurrencyRate: this.M_AR_AmortizeMaint.currencyrate ? this.replaceAllString(this.M_AR_AmortizeMaint.currencyrate,',','','number') : 0 ,
                TaxCd: this.M_AR_AmortizeMaint.taxcd == '' || this.M_AR_AmortizeMaint.taxcd == null ? 'NULL' : this.M_AR_AmortizeMaint.taxcd ,
                TaxType: this.M_AR_AmortizeMaint.taxtype == '' || this.M_AR_AmortizeMaint.taxtype == null ? 'NULL' : this.M_AR_AmortizeMaint.taxtype ,
                TaxCurrencyRate: this.M_AR_AmortizeMaint.taxcurrencyrate ? this.replaceAllString(this.M_AR_AmortizeMaint.taxcurrencyrate,',','','number') : 0 ,
                OriginalAmortizeAmt: this.M_AR_AmortizeMaint.amortizeamt ? this.replaceAllString(this.M_AR_AmortizeMaint.amortizeamt,',','','number') : 0 ,//this.M_AR_AmortizeMaint.originalamortizeamt ? this.replaceAllString(this.M_AR_AmortizeMaint.originalamortizeamt,',','','number') : 0 ,
                AmortizeAmt: this.M_AR_AmortizeMaint.amortizeamt ? this.replaceAllString(this.M_AR_AmortizeMaint.amortizeamt,',','','number') : 0 ,
                WithHoldingAmt: this.M_AR_AmortizeMaint.withholdingamt ? this.replaceAllString(this.M_AR_AmortizeMaint.withholdingamt,',','','number') : 0 ,
                Status: this.ARFieldHelper.AMORTIZE_STATUS_NEW,
                Remarks: this.M_AR_AmortizeMaint.remarks,
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
                AmortizeSequenceNo: this.DataRow.AmortizeSequenceNo,
                DebtorCd: this.M_AR_AmortizeMaint.debtorcd == '' || this.M_AR_AmortizeMaint.debtorcd == null ? 'NULL' : this.M_AR_AmortizeMaint.debtorcd ,
                TrxType: this.M_AR_AmortizeMaint.trxtype == '' || this.M_AR_AmortizeMaint.trxtype == null ? 'NULL' : this.M_AR_AmortizeMaint.trxtype ,
                ReferenceNo: this.M_AR_AmortizeMaint.referenceno,
                Descs: this.M_AR_AmortizeMaint.descs,
                AmortizeDate: this.M_AR_AmortizeMaint.amortizedate == '' || this.M_AR_AmortizeMaint.amortizedate == null ? 'NULL' : this.M_AR_AmortizeMaint.amortizedate ,
                CurrencyCd: this.M_AR_AmortizeMaint.currencycd == '' || this.M_AR_AmortizeMaint.currencycd == null ? 'NULL' : this.M_AR_AmortizeMaint.currencycd ,
                CurrencyRate: this.M_AR_AmortizeMaint.currencyrate ? this.replaceAllString(this.M_AR_AmortizeMaint.currencyrate,',','','number') : 0 ,
                TaxCd: this.M_AR_AmortizeMaint.taxcd == '' || this.M_AR_AmortizeMaint.taxcd == null ? 'NULL' : this.M_AR_AmortizeMaint.taxcd ,
                TaxType: this.M_AR_AmortizeMaint.taxtype == '' || this.M_AR_AmortizeMaint.taxtype == null ? 'NULL' : this.M_AR_AmortizeMaint.taxtype ,
                TaxCurrencyRate: this.M_AR_AmortizeMaint.taxcurrencyrate ? this.replaceAllString(this.M_AR_AmortizeMaint.taxcurrencyrate,',','','number') : 0 ,
                OriginalAmortizeAmt: this.M_AR_AmortizeMaint.amortizeamt ? this.replaceAllString(this.M_AR_AmortizeMaint.amortizeamt,',','','number') : 0 ,//this.M_AR_AmortizeMaint.originalamortizeamt ? this.replaceAllString(this.M_AR_AmortizeMaint.originalamortizeamt,',','','number') : 0 ,
                AmortizeAmt: this.M_AR_AmortizeMaint.amortizeamt ? this.replaceAllString(this.M_AR_AmortizeMaint.amortizeamt,',','','number') : 0 ,
                WithHoldingAmt: this.M_AR_AmortizeMaint.withholdingamt ? this.replaceAllString(this.M_AR_AmortizeMaint.withholdingamt,',','','number') : 0 ,
                Remarks: this.M_AR_AmortizeMaint.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AmortizeMaint.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_AmortizeMaint = {
                debtorcd: '',
                trxtype: '',
                referenceno: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                taxcd: '',
                taxtype: '',
                taxcurrencyrate: '0',
                amortizedate: '',
                withholdingamt: '0',
                discountcd: '',
                discountamt: 0,
                remarks: '',
                status: 'New',
                originalamortizeamt: '0',
                amortizeamt: 0,
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorname: '',
                trxtypedescs: '',
                debitsequenceno: 0,
                amortizesequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        setDisbledPI(data){
          this.PI_trxtype.cProtect = data
          this.PI_debtorcd.cProtect = data
          this.PI_referenceno.cProtect = data
          this.PI_currencycd.cProtect = data
          this.PI_currencyrate.cProtect = data
          this.PI_taxcd.cProtect = data
          this.PI_taxcurrencyrate.cProtect = data
          this.PI_taxtype.cProtect = data
          this.PI_amortizedate.cProtect = data
          this.PI_originalamortizeamt.cProtect = data
          this.PI_amortizeamt.cProtect = data
          this.PI_withholdingamt.cProtect = data
          // if(data==true){
            
          // }else{

          // }

        },
        M_Edit(){
          if(this.M_AR_AmortizeMaint.debitsequenceno == null || this.M_AR_AmortizeMaint.debitsequenceno ==''){
            this.setDisbledPI(false)
          }else{
            this.setDisbledPI(true)
          }
        },
        M_Delete(dt){       

          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                AmortizeSequenceNo: value.AmortizeSequenceNo,
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
                })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                amortizesequenceno: record.AmortizeSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_AmortizeMaint = {
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                referenceno: data.referenceno,
                descs: data.descs,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcd: data.taxcd,
                taxtype: data.taxtype,
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                amortizedate: data.amortizedate,
                withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                remarks: data.remarks,
                status: data.status,
                originalamortizeamt: this.isCurrency(data.originalamortizeamt, this.decimal),
                amortizeamt: this.isCurrency(data.amortizeamt, this.decimal),
                useredit: data.useredit,
                userinput: data.userinput,
                debtorname: data.debtorname,
                trxtypedescs: data.trxtypedescs,
                debitsequenceno: data.debitsequenceno,
                amortizesequenceno: data.amortizesequenceno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                //  console.log('1')
                switch(data.status){
                  case"N":
                    this.M_AR_AmortizeMaint.status = 'New'
                    this.getToolbar().statusFunction[1].disabled = false
                    this.CheckBoxLis = false
                    // this.$store.commit('seteditstatus', false)
                  break;
                  case"Y":
                    this.M_AR_AmortizeMaint.status = 'Generated'
                    this.getToolbar().statusFunction[1].disabled = true
                    this.CheckBoxLis = true
                  break;
                  default:
                    this.M_AR_AmortizeMaint.status = 'Cancelled'
                    this.getToolbar().statusFunction[1].disabled = true
                    this.CheckBoxLis = true
                  break;
                }
                this.M_AR_AmortizeMaint.debtorcdLabel = this.M_AR_AmortizeMaint.debtorcd != null && this.M_AR_AmortizeMaint.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_AmortizeMaint.trxtypeLabel = this.M_AR_AmortizeMaint.trxtype != null && this.M_AR_AmortizeMaint.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AR_AmortizeMaint.currencycdLabel = this.M_AR_AmortizeMaint.currencycd != null && this.M_AR_AmortizeMaint.currencycd != '' ? data.currencycd + this.separator  :'' 
                this.M_AR_AmortizeMaint.taxcdLabel = this.M_AR_AmortizeMaint.taxcd != null && this.M_AR_AmortizeMaint.taxcd != '' ? data.taxcd + this.separator  :'' 
                this.M_AR_AmortizeMaint.taxtypeLabel = this.M_AR_AmortizeMaint.taxtype != null && this.M_AR_AmortizeMaint.taxtype != '' ? data.taxtype + this.separator  :'' 
         

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

