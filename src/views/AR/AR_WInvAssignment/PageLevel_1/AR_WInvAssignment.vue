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
                                        <ABSCompute :prop="PI_debtorcd" v-model="M_AR_WInvAssignment.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebitnoChange" :prop="PI_debitno" :value="M_AR_WInvAssignment.debitno" :label="M_AR_WInvAssignment.debitnoLabel" ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_WInvAssignment.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxinvoicenoChange" :prop="PI_taxinvoiceno" :value="M_AR_WInvAssignment.taxinvoiceno" :label="M_AR_WInvAssignment.taxinvoicenoLabel" ref="ref_taxinvoiceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_withholdingdate" v-model="M_AR_WInvAssignment.withholdingdate"  ref="ref_withholdingdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_AR_WInvAssignment.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_WInvAssignment.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_WInvAssignment.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_WInvAssignment.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AR_WInvAssignment.withholdingamt"  ref="ref_withholdingamt"/>
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
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_WInvAssignment :{
                debtorcd: '',
                taxinvoiceno: '',
                withholdingdate: '',
                debitno: '',
                debitdate: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                cLabel: 'Debtor', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARWithHoldingInvoiceDebitNo'    , 
                    ColumnDB: 'DebitNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And TaxStatus IN ('2','3') and WithHoldingStatus='N' and WithHoldingNo is null And WithholdingPaidBy='M'"   , 
                    ParamWhere: '',
                    SourceField:'Doctitik_No=DebitNo,Descs,Doctitik_Date=DebitDate,TimeEdit',
                    DisplayLookUp:'Doctitik_No,Descs'  
                        }, 
                cValidate :'required', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
                cKey: true, 
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
                cDisplayColumn: 'DebitNo,Descs' ,
            }, 
            PI_debitdate: { 
                cValidate :'', 
                cName:'debitdate', 
                cLabel:'Doc. Date', 
                cOrder:4, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
            }, 
            PI_taxinvoiceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARTaxMasterTaxInvoiceNo'    , 
                    ColumnDB: 'TaxInvoiceNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And Status='N' And TaxInvoiceType='W' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'taxinvoiceno', 
                cLabel: 'Tax Invoice No ', 
                cKey: true, 
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
                cDisplayColumn: 'TaxInvoiceNo,TranslatedTaxInvoiceType',
            }, 
            PI_withholdingdate: { 
                cValidate :'required', 
                cName:'withholdingdate', 
                cLabel:'Tax Invoice Date ', 
                cOrder:4, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex                  
                
            }, 
            PI_currencycd: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencyrate: { 
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_trxamt: { 
                cLabel: 'Doc. Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_taxcurrencyrate: { 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_withholdingamt: { 
                cLabel: 'Withholding Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
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
        GetTaxInvoiceHeaderData(DebitNo){
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 1,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
                this.M_AR_WInvAssignment = {
                    debtorcd: data.debtorcd,
                    taxinvoiceno: data.taxinvoiceno,
                    withholdingdate: data.debitdate,
                    debitno: data.debitno,
                    debitdate: data.debitdate,
                    currencycd: data.currencycd,
                    currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                    taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                    trxamt: this.isCurrency(data.trxamt, this.decimal),
                    netamt: this.isCurrency(data.netamt, this.decimal),
                    withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                    userinput: data.userinput,
                    useredit: data.useredit,
                    subportfoliocd: data.subportfoliocd,
                    timeedit: data.timeedit,                
                    rowid: data.rowid
                }                 

                this.M_AR_WInvAssignment.debitnoLabel = this.M_AR_WInvAssignment.debitno != null ? data.debitno   :'' 
                this.M_AR_WInvAssignment.taxinvoicenoLabel = this.M_AR_WInvAssignment.taxinvoiceno != null ? data.taxinvoiceno   :''          

                // this.IEBy.Input = data.userinput
                // this.IEBy.Edit = data.useredit
            })
        },		
        OndebitnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_WInvAssignment.debitno = data.id
            this.M_AR_WInvAssignment.debitnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.GetTaxInvoiceHeaderData(this.M_AR_WInvAssignment.debitno)
            }
        })
        this.$forceUpdate()
        },
        OntaxinvoicenoChange (data) {
        this.$nextTick(() => {
            this.M_AR_WInvAssignment.taxinvoiceno = data.id
            this.M_AR_WInvAssignment.taxinvoicenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxinvoiceno}
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_WInvAssignment.debitno == '' || this.M_AR_WInvAssignment.debitno == null ? 'NULL' : this.M_AR_WInvAssignment.debitno ,
                TaxInvoiceNo: this.M_AR_WInvAssignment.taxinvoiceno == '' || this.M_AR_WInvAssignment.taxinvoiceno == null ? 'NULL' : this.M_AR_WInvAssignment.taxinvoiceno ,
                WithHoldingDate: this.M_AR_WInvAssignment.withholdingdate,
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_WInvAssignment.debitno == '' || this.M_AR_WInvAssignment.debitno == null ? 'NULL' : this.M_AR_WInvAssignment.debitno ,
                TaxInvoiceNo: this.M_AR_WInvAssignment.taxinvoiceno == '' || this.M_AR_WInvAssignment.taxinvoiceno == null ? 'NULL' : this.M_AR_WInvAssignment.taxinvoiceno ,
                WithHoldingDate: this.M_AR_WInvAssignment.withholdingdate,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_WInvAssignment.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_WInvAssignment = {
                debtorcd: '',
                taxinvoiceno: '',
                withholdingdate: '',
                debitno: '',
                debitdate: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.Doctitik_No,
                    TaxInvoiceNo: value.TaxInvoiceNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp: value.LastUpdateStamp,
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.Doctitik_No,
                taxinvoiceno: record.TaxInvoiceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_WInvAssignment = {
                debtorcd: data.debtorcd,
                taxinvoiceno: data.taxinvoiceno,
                withholdingdate: data.withholdingdate,
                debitno: data.debitno,
                debitdate: data.debitdate,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_WInvAssignment.debitnoLabel = this.M_AR_WInvAssignment.debitno != null ? data.debitno   :'' 
                this.M_AR_WInvAssignment.taxinvoicenoLabel = this.M_AR_WInvAssignment.taxinvoiceno != null ? data.taxinvoiceno   :'' 
         

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

