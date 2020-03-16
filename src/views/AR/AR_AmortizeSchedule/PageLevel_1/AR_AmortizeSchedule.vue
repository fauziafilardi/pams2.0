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
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_AmortizeSchedule.debtorcd" :label="M_AR_AmortizeSchedule.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_AmortizeSchedule.trxtype" :label="M_AR_AmortizeSchedule.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_AmortizeSchedule.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_AmortizeSchedule.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_AmortizeSchedule.currencycd" :label="M_AR_AmortizeSchedule.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_AmortizeSchedule.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_AmortizeSchedule.taxcd" :label="M_AR_AmortizeSchedule.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxtypeChange" :prop="PI_taxtype" :value="M_AR_AmortizeSchedule.taxtype" :label="M_AR_AmortizeSchedule.taxtypeLabel" ref="ref_taxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_AmortizeSchedule.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amortizeamt" v-model="M_AR_AmortizeSchedule.amortizeamt"  ref="ref_amortizeamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AR_AmortizeSchedule.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amortizeday" v-model="M_AR_AmortizeSchedule.amortizeday"  ref="ref_amortizeday"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_amortizeinterval" v-model="M_AR_AmortizeSchedule.amortizeinterval"  ref="ref_amortizeinterval"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_startperiod" v-model="M_AR_AmortizeSchedule.startperiod"  ref="ref_startperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_startyear" v-model="M_AR_AmortizeSchedule.startyear"  ref="ref_startyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AmortizeSchedule.remarks"  ref="ref_remarks" />
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
		FormType: "ListProcess",
		Module:"AR",
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

            M_AR_AmortizeSchedule :{
                debtorcd: '',
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
                discountamt: '',
                amortizeinterval: '0',
                amortizeday: '0',
                startperiod: '0',
                startyear: '0',
                status: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorname: '',
                trxtypedescs: '',
                sequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code ', 
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
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I' AND JournalType='D' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No ', 
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
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
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
            PI_currencyrate: { 
                cValidate :'required', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate ', 
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
            PI_amortizeamt: { 
                cValidate :'required', 
                cName: 'amortizeamt', 
                cLabel: 'Amortize Amount ', 
                cLabelSize: 4, 
                cOrder: 10, 
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
            PI_amortizeday: { 
                cValidate :'required', 
                cName: 'amortizeday', 
                cLabel: 'Amortize Day ', 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cOrder: 13, 
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
                cOrder: 14, 
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
                cOrder: 15, 
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
            this.M_AR_AmortizeSchedule.debtorcd = data.id
            this.M_AR_AmortizeSchedule.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeSchedule.trxtype = data.id
            this.M_AR_AmortizeSchedule.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeSchedule.currencycd = data.id
            this.M_AR_AmortizeSchedule.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if(data!=''){
                    this.FnGetCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_FormatingDate(new Date()), data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_AmortizeSchedule.currencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_FormatingDate(new Date()), data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_AmortizeSchedule.taxcurrencyrate = this.isCurrency(ress.CurrencyRate, this.decimal)
                        }
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_AR_AmortizeSchedule.taxcd = data.id
            this.M_AR_AmortizeSchedule.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_taxtype.dataLookUp.InitialWhere = "TaxCd='"+data.id+"'"
            }
        })
        this.$forceUpdate()
        },
        OntaxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_AmortizeSchedule.taxtype = data.id
            this.M_AR_AmortizeSchedule.taxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                
//{taxtype}
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
            //    this.getToolbar().statusFunction[6].disabled = true
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
        M_Post(){
          
          var data = this.FormToABSList().getRowSelected()
          var dataPost = []

          data.forEach((value) => {
                // dt = dt + value.RowId + ','
                dataPost.push({
                    _Message_: "Reference No = "+value.ReferenceNo, 
                    SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                    SequenceNo : value.SequenceNo,
                    UserEdit : this.getDataUser().UserId,
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
        M_Insert() {
            this.FnValidateTrxType( this.getDataUser().SubPortfolioCd,this.Module,this.M_AR_AmortizeSchedule.trxtype,'I','D')
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
        saveData(){
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebtorCd: this.M_AR_AmortizeSchedule.debtorcd == '' || this.M_AR_AmortizeSchedule.debtorcd == null ? 'NULL' : this.M_AR_AmortizeSchedule.debtorcd ,
                TrxType: this.M_AR_AmortizeSchedule.trxtype == '' || this.M_AR_AmortizeSchedule.trxtype == null ? 'NULL' : this.M_AR_AmortizeSchedule.trxtype ,
                ModuleCd: this.Module,
                ReferenceNo: this.M_AR_AmortizeSchedule.referenceno,
                Descs: this.M_AR_AmortizeSchedule.descs,
                CurrencyCd: this.M_AR_AmortizeSchedule.currencycd == '' || this.M_AR_AmortizeSchedule.currencycd == null ? 'NULL' : this.M_AR_AmortizeSchedule.currencycd ,
                CurrencyRate: this.M_AR_AmortizeSchedule.currencyrate ? this.replaceAllString(this.M_AR_AmortizeSchedule.currencyrate,',','','number') : 0 ,
                TaxCd: this.M_AR_AmortizeSchedule.taxcd == '' || this.M_AR_AmortizeSchedule.taxcd == null ? 'NULL' : this.M_AR_AmortizeSchedule.taxcd ,
                TaxType: this.M_AR_AmortizeSchedule.taxtype == '' || this.M_AR_AmortizeSchedule.taxtype == null ? 'NULL' : this.M_AR_AmortizeSchedule.taxtype ,
                TaxCurrencyRate: this.M_AR_AmortizeSchedule.taxcurrencyrate ? this.replaceAllString(this.M_AR_AmortizeSchedule.taxcurrencyrate,',','','number') : 0 ,
                AmortizeAmt: this.M_AR_AmortizeSchedule.amortizeamt ? this.replaceAllString(this.M_AR_AmortizeSchedule.amortizeamt,',','','number') : 0 ,
                WithHoldingAmt: this.M_AR_AmortizeSchedule.withholdingamt ? this.replaceAllString(this.M_AR_AmortizeSchedule.withholdingamt,',','','number') : 0 ,
                AmortizeInterval: this.M_AR_AmortizeSchedule.amortizeinterval,
                AmortizeDay: this.M_AR_AmortizeSchedule.amortizeday,
                StartPeriod: this.M_AR_AmortizeSchedule.startperiod,
                StartYear: this.M_AR_AmortizeSchedule.startyear,
                Status: this.ARFieldHelper.AMORTIZE_STATUS_NEW,
                Remarks: this.M_AR_AmortizeSchedule.remarks,
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
                SequenceNo: this.DataRow.SequenceNo,
                DebtorCd: this.M_AR_AmortizeSchedule.debtorcd == '' || this.M_AR_AmortizeSchedule.debtorcd == null ? 'NULL' : this.M_AR_AmortizeSchedule.debtorcd ,
                TrxType: this.M_AR_AmortizeSchedule.trxtype == '' || this.M_AR_AmortizeSchedule.trxtype == null ? 'NULL' : this.M_AR_AmortizeSchedule.trxtype ,
                ReferenceNo: this.M_AR_AmortizeSchedule.referenceno,
                Descs: this.M_AR_AmortizeSchedule.descs,
                CurrencyCd: this.M_AR_AmortizeSchedule.currencycd == '' || this.M_AR_AmortizeSchedule.currencycd == null ? 'NULL' : this.M_AR_AmortizeSchedule.currencycd ,
                CurrencyRate: this.M_AR_AmortizeSchedule.currencyrate ? this.replaceAllString(this.M_AR_AmortizeSchedule.currencyrate,',','','number') : 0 ,
                TaxCd: this.M_AR_AmortizeSchedule.taxcd == '' || this.M_AR_AmortizeSchedule.taxcd == null ? 'NULL' : this.M_AR_AmortizeSchedule.taxcd ,
                TaxType: this.M_AR_AmortizeSchedule.taxtype == '' || this.M_AR_AmortizeSchedule.taxtype == null ? 'NULL' : this.M_AR_AmortizeSchedule.taxtype ,
                TaxCurrencyRate: this.M_AR_AmortizeSchedule.taxcurrencyrate ? this.replaceAllString(this.M_AR_AmortizeSchedule.taxcurrencyrate,',','','number') : 0 ,
                AmortizeAmt: this.M_AR_AmortizeSchedule.amortizeamt ? this.replaceAllString(this.M_AR_AmortizeSchedule.amortizeamt,',','','number') : 0 ,
                WithHoldingAmt: this.M_AR_AmortizeSchedule.withholdingamt ? this.replaceAllString(this.M_AR_AmortizeSchedule.withholdingamt,',','','number') : 0 ,
                AmortizeInterval: this.M_AR_AmortizeSchedule.amortizeinterval,
                AmortizeDay: this.M_AR_AmortizeSchedule.amortizeday,
                StartPeriod: this.M_AR_AmortizeSchedule.startperiod,
                StartYear: this.M_AR_AmortizeSchedule.startyear,
                Remarks: this.M_AR_AmortizeSchedule.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AmortizeSchedule.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_AmortizeSchedule = {
                debtorcd: '',
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
                discountamt: '',
                amortizeinterval: '0',
                amortizeday: '0',
                startperiod: '0',
                startyear: '0',
                status: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorname: '',
                trxtypedescs: '',
                sequenceno: 0,
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
                SequenceNo: value.SequenceNo,
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
,                sequenceno: record.SequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_AmortizeSchedule = {
                sequenceno:record.SequenceNo,
                debtorcd: data.debtorcd,
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
                amortizeinterval: data.amortizeinterval,
                amortizeday: data.amortizeday,
                startperiod: data.startperiod,
                startyear: data.startyear,
                status: data.status,
                remarks: data.remarks,
                useredit: data.useredit,
                userinput: data.userinput,
                debtorname: data.debtorname,
                trxtypedescs: data.trxtypedescs,
                sequenceno: data.sequenceno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_AmortizeSchedule.debtorcdLabel = this.M_AR_AmortizeSchedule.debtorcd != null && this.M_AR_AmortizeSchedule.debtorcd != '' ? data.debtorcd + this.separator  :'' 
                this.M_AR_AmortizeSchedule.trxtypeLabel = this.M_AR_AmortizeSchedule.trxtype != null && this.M_AR_AmortizeSchedule.trxtype != '' ? data.trxtype + this.separator  :'' 
                this.M_AR_AmortizeSchedule.currencycdLabel = this.M_AR_AmortizeSchedule.currencycd != null && this.M_AR_AmortizeSchedule.currencycd != '' ? data.currencycd + this.separator  :'' 
                this.M_AR_AmortizeSchedule.taxcdLabel = this.M_AR_AmortizeSchedule.taxcd != null && this.M_AR_AmortizeSchedule.taxcd != '' ? data.taxcd + this.separator  :'' 
                this.M_AR_AmortizeSchedule.taxtypeLabel = this.M_AR_AmortizeSchedule.taxtype != null && this.M_AR_AmortizeSchedule.taxtype != '' ? data.taxtype + this.separator  :'' 
         

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

