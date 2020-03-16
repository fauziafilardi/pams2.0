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
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_DebtorBalance.debtorcd" :label="M_AR_DebtorBalance.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbalancedateChange" :prop="PI_balancedate" v-model="M_AR_DebtorBalance.balancedate"  ref="ref_balancedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_DebtorBalance.currencycd" :label="M_AR_DebtorBalance.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_DebtorBalance.trxtype" :label="M_AR_DebtorBalance.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amount" v-model="M_AR_DebtorBalance.amount"  ref="ref_amount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_DebtorBalance.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_DebtorBalance.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_revaluationcurrencyrate" v-model="M_AR_DebtorBalance.revaluationcurrencyrate"  ref="ref_revaluationcurrencyrate"/>
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
            propList: {
                initialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_DebtorBalance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                debtorname: '',
                type: '',
                balancedate: '',
                currencycd: '',
                trxtype: '',
                trxtypedescs: '',
                amount: '0',
                currencyrate: '0',
                taxcurrencyrate: '0',
                revaluationcurrencyrate: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_balancedate: { 
                cValidate :'required', 
                cName: 'balancedate', 
                cLabel: 'Balance Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
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
                cLabel: 'Currency Code', 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AR' AND TrxClass='I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_amount: { 
                cValidate :'required|max:15', 
                cName: 'amount', 
                cLabel: 'Trans Amount ', 
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
            PI_currencyrate: { 
                cValidate :'required|min_value:1|max:15', 
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
            PI_taxcurrencyrate: { 
                cValidate :'required|min_value:1|max:15', 
                cName: 'taxcurrencyrate', 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revaluationcurrencyrate: { 
                cValidate :'required|max:15', 
                cName: 'revaluationcurrencyrate', 
                cLabel: 'Revaluation Currency Rate', 
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
            this.M_AR_DebtorBalance.debtorcd = data.id
            this.M_AR_DebtorBalance.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OnbalancedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{balancedate}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebtorBalance.currencycd = data.id
            this.M_AR_DebtorBalance.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if((data.id && data.id != '') && (this.M_AR_DebtorBalance.balancedate && this.M_AR_DebtorBalance.balancedate != '')){
                    this.FnGetCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_AR_DebtorBalance.balancedate, data.id
                    )
                    .then(ress => {
                        if (ress != null) {
                            this.M_AR_DebtorBalance.currencyrate = ress.CurrencyRate 
                        }                      
                    })

                    this.FnGetTaxCurrencyRate(
                        this.getDataUser().SubPortfolioCd, this.M_AR_DebtorBalance.balancedate, data.id
                    )
                    .then(ress => {                        
                        if (ress != null) {                            
                            this.M_AR_DebtorBalance.taxcurrencyrate = ress.CurrencyRate 
                        }
                    })
                }
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebtorBalance.trxtype = data.id
            this.M_AR_DebtorBalance.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
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
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebtorCd: this.M_AR_DebtorBalance.debtorcd == '' || this.M_AR_DebtorBalance.debtorcd == null ? 'NULL' : this.M_AR_DebtorBalance.debtorcd ,
                BalanceDate: this.M_AR_DebtorBalance.balancedate == '' || this.M_AR_DebtorBalance.balancedate == null ? 'NULL' : this.M_AR_DebtorBalance.balancedate ,
                CurrencyCd: this.M_AR_DebtorBalance.currencycd == '' || this.M_AR_DebtorBalance.currencycd == null ? 'NULL' : this.M_AR_DebtorBalance.currencycd ,
                TrxType: this.M_AR_DebtorBalance.trxtype == '' || this.M_AR_DebtorBalance.trxtype == null ? 'NULL' : this.M_AR_DebtorBalance.trxtype ,
                Amount: this.M_AR_DebtorBalance.amount ? this.replaceAllString(this.M_AR_DebtorBalance.amount,',','','number') : 0 ,
                CurrencyRate: this.M_AR_DebtorBalance.currencyrate ? this.replaceAllString(this.M_AR_DebtorBalance.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_AR_DebtorBalance.taxcurrencyrate ? this.replaceAllString(this.M_AR_DebtorBalance.taxcurrencyrate,',','','number') : 0 ,
                RevaluationCurrencyRate: this.M_AR_DebtorBalance.revaluationcurrencyrate ? this.replaceAllString(this.M_AR_DebtorBalance.revaluationcurrencyrate,',','','number') : 0 ,
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebtorCd: this.M_AR_DebtorBalance.debtorcd == '' || this.M_AR_DebtorBalance.debtorcd == null ? 'NULL' : this.M_AR_DebtorBalance.debtorcd ,
                BalanceDate: this.M_AR_DebtorBalance.balancedate == '' || this.M_AR_DebtorBalance.balancedate == null ? 'NULL' : this.M_AR_DebtorBalance.balancedate ,
                CurrencyCd: this.M_AR_DebtorBalance.currencycd == '' || this.M_AR_DebtorBalance.currencycd == null ? 'NULL' : this.M_AR_DebtorBalance.currencycd ,
                TrxType: this.M_AR_DebtorBalance.trxtype == '' || this.M_AR_DebtorBalance.trxtype == null ? 'NULL' : this.M_AR_DebtorBalance.trxtype ,
                Amount: this.M_AR_DebtorBalance.amount ? this.replaceAllString(this.M_AR_DebtorBalance.amount,',','','number') : 0 ,
                CurrencyRate: this.M_AR_DebtorBalance.currencyrate ? this.replaceAllString(this.M_AR_DebtorBalance.currencyrate,',','','number') : 0 ,
                TaxCurrencyRate: this.M_AR_DebtorBalance.taxcurrencyrate ? this.replaceAllString(this.M_AR_DebtorBalance.taxcurrencyrate,',','','number') : 0 ,
                RevaluationCurrencyRate: this.M_AR_DebtorBalance.revaluationcurrencyrate ? this.replaceAllString(this.M_AR_DebtorBalance.revaluationcurrencyrate,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_DebtorBalance.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_DebtorBalance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                debtorname: '',
                type: '',
                balancedate: '',
                currencycd: '',
                trxtype: '',
                trxtypedescs: '',
                amount: '',
                currencyrate: '',
                taxcurrencyrate: '',
                revaluationcurrencyrate: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
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
                    SubPortfolioCd: value.SubPortfolioCd,
                    DebtorCd: value.DebtorCd,
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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                debtorcd: record.DebtorCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_AR_DebtorBalance = {
                    subportfoliocd: data.subportfoliocd,
                    debtorcd: data.debtorcd,
                    debtorname: data.debtorname,
                    type: data.type,
                    balancedate: data.balancedate,
                    currencycd: data.currencycd,
                    trxtype: data.trxtype,
                    trxtypedescs: data.trxtypedescs,
                    amount: this.isCurrency(data.amount,  data.decimal),
                    currencyrate: this.isCurrency(data.currencyrate, data.decimal),
                    taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, data.decimal),
                    revaluationcurrencyrate: this.isCurrency(data.revaluationcurrencyrate,  data.decimal),
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                 

                this.M_AR_DebtorBalance.debtorcdLabel = this.M_AR_DebtorBalance.debtorcd != null ? data.debtorcd + this.separator + data.debtorname  :'' 
                this.M_AR_DebtorBalance.currencycdLabel = this.M_AR_DebtorBalance.currencycd != null ? data.currencycd :'' 
                this.M_AR_DebtorBalance.trxtypeLabel = this.M_AR_DebtorBalance.trxtype != null ? data.trxtype + this.separator + data.trxtypedescs  :'' 
         

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

