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
                                            <ABSinputTextVuex :prop="PI_taxinvoicetype" v-model="M_AR_CancelReportedTaxInv.taxinvoicetype"  ref="ref_taxinvoicetype" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_taxinvoiceno" v-model="M_AR_CancelReportedTaxInv.taxinvoiceno"  ref="ref_taxinvoiceno" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex :prop="PI_taxinvoicedate" v-model="M_AR_CancelReportedTaxInv.taxinvoicedate"  ref="ref_taxinvoicedate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_debtor" v-model="M_AR_CancelReportedTaxInv.debtor"  ref="ref_debtor" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_docno" v-model="M_AR_CancelReportedTaxInv.docno"  ref="ref_docno" />
                                        </b-col>
                                        <b-col  md="6">
                                            <ABSinputDateVuex :prop="PI_docdate" v-model="M_AR_CancelReportedTaxInv.docdate"  ref="ref_docdate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_currency" v-model="M_AR_CancelReportedTaxInv.currency"  ref="ref_currency" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_docamt" v-model="M_AR_CancelReportedTaxInv.docamt"  ref="ref_docamt" />
                                        </b-col>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_taxamt" v-model="M_AR_CancelReportedTaxInv.taxamt"  ref="ref_taxamt" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSinputRadioButtonVuex @input="OncancelChange" :prop="PI_cancel" v-model="M_AR_CancelReportedTaxInv.cancel"  ref="ref_cancel" />
                                        </b-col>
                                        <b-col  md="6">
                                            <ABSinputDateVuex :prop="PI_creditdate" v-model="M_AR_CancelReportedTaxInv.creditdate"  ref="ref_creditdate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_CancelReportedTaxInv.reasoncd" :label="M_AR_CancelReportedTaxInv.reasoncdLabel" ref="ref_reasoncd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="6">
                                            <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_CancelReportedTaxInv.reasondescs"  ref="ref_reasondescs" />
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
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_CancelReportedTaxInv :{
                taxinvoicetype: '',
                taxinvoiceno: '',
                taxinvoicedate: '',
                debtor: '',
                docno: '',
                docdate: '',
                currency: '',
                docamt: '',
                taxamt: '',
                cancel: '',
                creditdate: '',
                reasoncd: '',
                reasoncdLabel: '',
                reasondescs: '',
                lastupdatestamp: ''
            },

            PI_taxinvoicetype: {
                cValidate :'',
                cName: 'taxinvoicetype',
                cLabel: 'Tax Invoice Type',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_taxinvoiceno: {
                cValidate :'',
                cName: 'taxinvoiceno',
                cLabel: 'Tax Invoice No',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_debtor: {
                cValidate :'',
                cName: 'debtor',
                cLabel: 'Debtor',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_taxinvoicedate: {
                cValidate :'',
                cName: 'taxinvoicedate',
                cLabel: 'Tax Invoice Date',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_docno: {
                cValidate :'',
                cName: 'docno',
                cLabel: 'Doc. No',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_docdate: {
                cValidate :'',
                cName: 'docdate',
                cLabel: 'Doc. Date',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_currency: {
                cValidate :'',
                cName: 'currency',
                cLabel: 'Currency',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_docamt: {
                cValidate :'',
                cName: 'docamt',
                cLabel: 'Doc. Amount',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_taxamt: {
                cValidate :'',
                cName: 'taxamt',
                cLabel: 'Tax Amount',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_cancel: {
                cValidate :'', 
                cName: 'cancel', 
                cId: 'rdbcancel', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Cancel', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_creditdate: {
                cValidate :'',
                cName: 'creditdate',
                cLabel: 'Credit Date',
                cLabelSize: 4,
                cOrder: 2,
                cKey: false,
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_reasoncd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCMReason'    ,
                    ColumnDB: 'ReasonCd'   ,
                    InitialWhere: " (ModuleCd='AR' OR ModuleCd is null) "   ,
                    ParamWhere: ""
                        },
                cValidate :'',
                cName: 'reasoncd',
                cLabel: 'Reason',
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            },
            PI_reasondescs: {
                cValidate :'',
                cName: 'reasondescs',
                cLabel: 'Reason Description',
                cLabelSize: 4,
                cOrder: 4,
                cKey: false,
                cType: 'text',
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
		setToolbarButton () {
            this.getToolbar().statusFunction[0].disabled = true
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
        OncancelChange(data) {
            this.$nextTick(() => {
                if (data == 'Y') {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false
                    this.PI_creditdate.cProtect = false
                }
                else {
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true
                    this.PI_creditdate.cProtect = true
                }
            })

            this.$forceUpdate()
        },
        OnreasoncdChange(data) {
            this.$nextTick(() => {
                this.M_AR_CancelReportedTaxInv.reasoncd = data.id
                this.M_AR_CancelReportedTaxInv.reasoncdLabel = data.label

                this.M_AR_CancelReportedTaxInv.reasondescs = data.Descs
            })

            this.$forceUpdate()
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
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TaxInvoiceNo: this.M_AR_CancelReportedTaxInv.taxinvoiceno,
                DebitNo: this.M_AR_CancelReportedTaxInv.docno,
                CreditDate: this.M_AR_CancelReportedTaxInv.docdate,
                Status: this.M_AR_CancelReportedTaxInv.cancel == 'Y' ? 'X' : 'Y',
                ReasonCd: this.M_AR_CancelReportedTaxInv.reasoncd,
                ReasonDescs: this.M_AR_CancelReportedTaxInv.reasondescs,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_AR_CancelReportedTaxInv.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })

        },
		M_ClearForm(){
            this.M_AR_CancelReportedTaxInv = {
                taxinvoicetype: '',
                taxinvoiceno: '',
                taxinvoicedate: '',
                debtor: '',
                docno: '',
                docdate: '',
                currency: '',
                docamt: '',
                taxamt: '',
                cancel: '',
                creditdate: '',
                reasoncd: '',
                reasoncdLabel: '',
                reasondescs: '',
                lastupdatestamp: ''
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
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                taxinvoiceno: record.TaxInvoiceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]

                this.M_AR_CancelReportedTaxInv = {
                    taxinvoicetype: data.standardcommon == 'C' ? 'Common' : 'Standard' ,
                    taxinvoiceno: data.taxinvoiceno ,
                    taxinvoicedate: data.vatdate ,
                    debtor: data.debtorcd ,
                    docno: data.debitno ,
                    docdate: data.debitdate ,
                    currency: data.currencycd ,
                    docamt: this.isCurrency(data.netamt, this.decimal) ,
                    taxamt: this.isCurrency(data.vatamt, this.decimal) ,
                    cancel: data.vatstatus == 'X' ? 'Y' : 'N' ,
                    // creditdate: data.creditdate ,
                    // reasoncd: data.reasoncd ,
                    // reasoncdLabel: data.reasoncd && data.reasoncd != '' ? data.reasoncd + this.separator + data.reasondescs: '' ,
                    // reasondescs: data.reasondescs ,
                    creditdate: '' ,
                    reasoncd: '' ,
                    reasoncdLabel: '' ,
                    reasondescs: '' ,
                    lastupdatestamp: record.LastUpdateStamp
                }

                if (data.vatstatus == 'X') {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false
                    this.PI_creditdate.cProtect = false
                }
                else {
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true
                    this.PI_creditdate.cProtect = true
                }
         
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

