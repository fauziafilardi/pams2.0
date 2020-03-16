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
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_ContractRevenueShare.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ContractRevenueShare.trxtype" :label="M_TN_ContractRevenueShare.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ContractRevenueShare.currencycd" :label="M_TN_ContractRevenueShare.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_TN_ContractRevenueShare.taxcd" :label="M_TN_ContractRevenueShare.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fromamt" v-model="M_TN_ContractRevenueShare.fromamt"  ref="ref_fromamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_toamt" v-model="M_TN_ContractRevenueShare.toamt"  ref="ref_toamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargetypeChange" :prop="PI_chargetype" v-model="M_TN_ContractRevenueShare.chargetype"  ref="ref_chargetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chargevalue" v-model="M_TN_ContractRevenueShare.chargevalue"  ref="ref_chargevalue"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_validdatefrom" :valueFrom="M_TN_ContractRevenueShare.validdatefrom" :valueTo="M_TN_ContractRevenueShare.validdateto" ref="ref_validdatefrom" @from="MdtRange_validdatefrom" @to="MdtRange_validdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_minimumamt" v-model="M_TN_ContractRevenueShare.minimumamt"  ref="ref_minimumamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractRevenueShare.remarks"  ref="ref_remarks" />
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

            M_TN_ContractRevenueShare :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                addendumsequenceno: '',
                applicationno: '',
                sequenceno: 0,
                referenceno: '',
                trxtype: '',
                currencycd: '',
                taxcd: '',
                fromamt: '0',
                toamt: '0',
                chargetype: '',
                chargevalue: '0',
                minimumamt: '0',
                validdatefrom: '',
                validdateto: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                currencydescs: '',
                taxdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeTN'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "(TenancyChargeType IN ('C')) AND ModuleCd = 'AR' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: ''
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'taxcd', 
                cLabel: 'Tax ', 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_fromamt: { 
                cValidate :'required', 
                cName: 'fromamt', 
                cLabel: 'From Amount ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_toamt: { 
                cValidate :'required', 
                cName: 'toamt', 
                cLabel: 'To Amount ', 
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
            PI_chargetype: { 
                cValidate :'', 
                cName: 'chargetype', 
                cId: 'rdbchargetype', 
                cRadioOptions: [{ text: 'Fix', value: 'F' },{ text: 'Percentage', value: 'P' },], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Type', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargevalue: { 
                cValidate :'required', 
                cName: 'chargevalue', 
                cLabel: 'Charge Value', 
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
            PI_validdatefrom: { 
                cValidate :'', 
                cName: 'validdatefrom', 
                cLabel: 'Valid Date', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_minimumamt: { 
                cValidate :'', 
                cName: 'minimumamt', 
                cLabel: 'Minimum Amount', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:10, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractRevenueShare.trxtype = data.id
            this.M_TN_ContractRevenueShare.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (this.inputStatus == "NEW") {
                    this.M_TN_ContractRevenueShare.currencycd = data.CurrencyCd
                    this.M_TN_ContractRevenueShare.currencycdLabel = data.CurrencyCd
                    this.M_TN_ContractRevenueShare.taxcd = data.TaxCd
                    this.M_TN_ContractRevenueShare.taxcdLabel = data.TaxCd
                }
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractRevenueShare.currencycd = data.id
            this.M_TN_ContractRevenueShare.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractRevenueShare.taxcd = data.id
            this.M_TN_ContractRevenueShare.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OnchargetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargetype}
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractRevenueShare.addendumsequenceno = data.AddendumSequenceNo
            this.propList.initialWhere =" SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + data.ApplicationNo + "' AND AddendumSequenceNo = '" + data.AddendumSequenceNo + "'"
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var chargeval = this.M_TN_ContractRevenueShare.chargevalue ? this.replaceAllString(this.M_TN_ContractRevenueShare.chargevalue,',','','number') : 0

            if (this.M_TN_ContractRevenueShare.chargetype == "P") {
                if (chargeval < 0 || chargeval > 100) {
                    this.alertError("Charge Value out of range")
                    return
                }
            }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ApplicationNo: this.M_TN_ContractRevenueShare.applicationno,
                AddendumSequenceNo: this.M_TN_ContractRevenueShare.addendumsequenceno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ReferenceNo: this.M_TN_ContractRevenueShare.referenceno,
                TrxType: this.M_TN_ContractRevenueShare.trxtype == '' || this.M_TN_ContractRevenueShare.trxtype == null ? 'NULL' : this.M_TN_ContractRevenueShare.trxtype ,
                CurrencyCd: this.M_TN_ContractRevenueShare.currencycd == '' || this.M_TN_ContractRevenueShare.currencycd == null ? 'NULL' : this.M_TN_ContractRevenueShare.currencycd ,
                TaxCd: this.M_TN_ContractRevenueShare.taxcd == '' || this.M_TN_ContractRevenueShare.taxcd == null ? 'NULL' : this.M_TN_ContractRevenueShare.taxcd ,
                FromAmt: this.M_TN_ContractRevenueShare.fromamt ? this.replaceAllString(this.M_TN_ContractRevenueShare.fromamt,',','','number') : 0 ,
                ToAmt: this.M_TN_ContractRevenueShare.toamt ? this.replaceAllString(this.M_TN_ContractRevenueShare.toamt,',','','number') : 0 ,
                ChargeType: this.M_TN_ContractRevenueShare.chargetype,
                ChargeValue: this.M_TN_ContractRevenueShare.chargevalue ? this.replaceAllString(this.M_TN_ContractRevenueShare.chargevalue,',','','number') : 0 ,
                MinimumAmt: this.M_TN_ContractRevenueShare.minimumamt ? this.replaceAllString(this.M_TN_ContractRevenueShare.minimumamt,',','','number') : 0 ,
                ValidDateFrom: this.M_TN_ContractRevenueShare.validdatefrom == '' || this.M_TN_ContractRevenueShare.validdatefrom == null ? 'NULL' : this.M_TN_ContractRevenueShare.validdatefrom ,
                ValidDateTo: this.M_TN_ContractRevenueShare.validdateto == '' || this.M_TN_ContractRevenueShare.validdateto == null ? 'NULL' : this.M_TN_ContractRevenueShare.validdateto ,
                Remarks: this.M_TN_ContractRevenueShare.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var chargeval = this.M_TN_ContractRevenueShare.chargevalue ? this.replaceAllString(this.M_TN_ContractRevenueShare.chargevalue,',','','number') : 0

            if (this.M_TN_ContractRevenueShare.chargetype == "P") {
                if (chargeval < 0 || chargeval > 100) {
                    this.alertError("Charge Value out of range")
                    return
                }
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                ApplicationNo: this.M_TN_ContractRevenueShare.applicationno,
                AddendumSequenceNo: this.M_TN_ContractRevenueShare.addendumsequenceno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.DataRow.SequenceNo,
                ReferenceNo: this.M_TN_ContractRevenueShare.referenceno,
                TrxType: this.M_TN_ContractRevenueShare.trxtype == '' || this.M_TN_ContractRevenueShare.trxtype == null ? 'NULL' : this.M_TN_ContractRevenueShare.trxtype ,
                CurrencyCd: this.M_TN_ContractRevenueShare.currencycd == '' || this.M_TN_ContractRevenueShare.currencycd == null ? 'NULL' : this.M_TN_ContractRevenueShare.currencycd ,
                TaxCd: this.M_TN_ContractRevenueShare.taxcd == '' || this.M_TN_ContractRevenueShare.taxcd == null ? 'NULL' : this.M_TN_ContractRevenueShare.taxcd ,
                FromAmt: this.M_TN_ContractRevenueShare.fromamt ? this.replaceAllString(this.M_TN_ContractRevenueShare.fromamt,',','','number') : 0 ,
                ToAmt: this.M_TN_ContractRevenueShare.toamt ? this.replaceAllString(this.M_TN_ContractRevenueShare.toamt,',','','number') : 0 ,
                ValidDateFrom: this.M_TN_ContractRevenueShare.validdatefrom == '' || this.M_TN_ContractRevenueShare.validdatefrom == null ? 'NULL' : this.M_TN_ContractRevenueShare.validdatefrom ,
                ValidDateTo: this.M_TN_ContractRevenueShare.validdateto == '' || this.M_TN_ContractRevenueShare.validdateto == null ? 'NULL' : this.M_TN_ContractRevenueShare.validdateto ,
                ChargeType: this.M_TN_ContractRevenueShare.chargetype,  
                ChargeValue: this.M_TN_ContractRevenueShare.chargevalue ? this.replaceAllString(this.M_TN_ContractRevenueShare.chargevalue,',','','number') : 0 ,
                MinimumAmt: this.M_TN_ContractRevenueShare.minimumamt ? this.replaceAllString(this.M_TN_ContractRevenueShare.minimumamt,',','','number') : 0 ,
                Remarks: this.M_TN_ContractRevenueShare.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractRevenueShare.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_ContractRevenueShare = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                addendumsequenceno: '',
                applicationno: '',
                sequenceno: 0,
                referenceno: '',
                trxtype: '',
                currencycd: '',
                taxcd: '',
                fromamt: '0',
                toamt: '0',
                chargetype: '',
                chargevalue: '0',
                minimumamt: '0',
                validdatefrom: '',
                validdateto: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                currencydescs: '',
                taxdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractRevenueShare.applicationno = data.ApplicationNo
            this.M_TN_ContractRevenueShare.addendumsequenceno = data.AddendumSequenceNo
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SequenceNo: value.SequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "SequenceNo No " + value.SequenceNo
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
AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractRevenueShare = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                addendumsequenceno: this.DataRowPage1.AddendumSequenceNo,
                sequenceno: this.isCurrency(data.sequenceno, this.decimal),
                referenceno: data.referenceno,
                trxtype: data.trxtype,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                fromamt: this.isCurrency(data.fromamt, this.decimal),
                toamt: this.isCurrency(data.toamt, this.decimal),
                chargetype: data.chargetype,
                chargevalue: this.isCurrency(data.chargevalue, this.decimal),
                minimumamt: this.isCurrency(data.minimumamt, this.decimal),
                validdatefrom: data.validdatefrom,
                validdateto: data.validdateto,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                trxtypedescs: data.trxtypedescs,
                currencydescs: data.currencydescs,
                taxdescs: data.taxdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_ContractRevenueShare.trxtypeLabel = this.M_TN_ContractRevenueShare.trxtype != null && this.M_TN_ContractRevenueShare.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_TN_ContractRevenueShare.currencycdLabel = this.M_TN_ContractRevenueShare.currencycd != null && this.M_TN_ContractRevenueShare.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_ContractRevenueShare.taxcdLabel = this.M_TN_ContractRevenueShare.taxcd != null && this.M_TN_ContractRevenueShare.taxcd != '' ? data.taxcd + this.separator + data.taxdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_validdatefrom (data) {
            this.M_TN_ContractRevenueShare.validdatefrom = data
        }
        ,MdtRange_validdateto (data) {
            this.M_TN_ContractRevenueShare.validdateto = data
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

