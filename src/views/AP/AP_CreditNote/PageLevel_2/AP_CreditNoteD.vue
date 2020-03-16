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
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_AP_CreditNoteD.accountcd" :label="M_AP_CreditNoteD.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_CreditNoteD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_CreditNoteD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AP_CreditNoteD.taxcd" :label="M_AP_CreditNoteD.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxbasepercent" v-model="M_AP_CreditNoteD.taxbasepercent"  ref="ref_taxbasepercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndiscountcdChange" :prop="PI_discountcd" :value="M_AP_CreditNoteD.discountcd" :label="M_AP_CreditNoteD.discountcdLabel" ref="ref_discountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AP_CreditNoteD.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdiscount" v-model="M_AP_CreditNoteD.amountafterdiscount"  ref="ref_amountafterdiscount"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincludediscountChange" :prop="PI_includediscount" v-model="M_AP_CreditNoteD.includediscount"  ref="ref_includediscount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AP_CreditNoteD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AP_CreditNoteD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AP_CreditNoteD.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->

							</b-row>
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
			Module:"AP",
            propList: {
                initialWhere:"CreditNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_CreditNoteD :{
                trxtype: '',
                descs: '',
                accountcd: '',
                taxcd: '',
                includediscount: '',
                discountcd: '',
                discountamt: '0',
                trxamt: '0',
                netamt: 0,
                vatamt: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                taxdescs: '',
                category: '',
                discountdescs: '',
                taxbasepercent: '0',
                creditsequenceno: 0,
                creditno: '',
                lastupdatestamp: 0,
                rowid: 0,
                amountafterdiscount: '',
                totalamt: ''
                    }
            ,
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'required', 
                cName: 'accountcd', 
                cLabel: 'Account Code ', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount ', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cValidate :'required', 
                cName: 'taxcd', 
                cLabel: 'Tax ', 
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
                cMasterUrl: 'CM/CM_TaxSubPortfolio' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_taxbasepercent: { 
                cValidate :'required', 
                cName: 'taxbasepercent', 
                cLabel: 'Tax Based ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: '%' 
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
                cOrder: 9, 
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
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amountafterdiscount: { 
                cValidate :'', 
                cName: 'amountafterdiscount', 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
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
                cLabel:'Include Discount ', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Amount', 
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
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
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
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Amount', 
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
      GetDiscountAmount(){
        var param = {
              OptionFunctionCd: "GetDiscountAmount",
              ModuleCd: 'TN',
              TrxAmt: this.M_AP_CreditNoteD.trxamt,
              DiscountCd: this.M_AP_CreditNoteD.discountcd
          }

          this.FnDynamicFunction(param)
          .then(ress => {              
              if (ress == null) return              
              this.M_AP_CreditNoteD.discountamt = this.isCurrency(ress[0].DiscountAmt, this.decimal)
              this.M_AP_CreditNoteD.amountafterdiscount = this.isCurrency(ress[0].AmountAfterDisc, this.decimal)
          })
      },
        OnaccountcdChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_AP_CreditNoteD.accountcd = data.id
            this.M_AP_CreditNoteD.accountcdLabel = data.label
            this.M_AP_CreditNoteD.descs = data.Description
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_CreditNoteD.taxcd = data.id
            this.M_AP_CreditNoteD.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OndiscountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_CreditNoteD.discountcd = data.id
            this.M_AP_CreditNoteD.discountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetDiscountAmount()
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_AP_CreditNoteD.creditno = data.CreditNo 
            this.propList.initialWhere =" CreditNo = '" + data.CreditNo + "' "


            this.FormToABSList().doGetList('','eb_getList')
        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AP_CreditNoteD.creditno,
                AccountCd: this.M_AP_CreditNoteD.accountcd == '' || this.M_AP_CreditNoteD.accountcd == null ? 'NULL' : this.M_AP_CreditNoteD.accountcd ,
                ModuleCd: 'AP',
                Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE,
                Descs: this.M_AP_CreditNoteD.descs,
                TaxCd: this.M_AP_CreditNoteD.taxcd == '' || this.M_AP_CreditNoteD.taxcd == null ? 'NULL' : this.M_AP_CreditNoteD.taxcd ,
                TaxBasePercent: this.M_AP_CreditNoteD.taxbasepercent,
                IncludeDiscount: this.M_AP_CreditNoteD.includediscount,
                DiscountCd: this.M_AP_CreditNoteD.discountcd == '' || this.M_AP_CreditNoteD.discountcd == null ? 'NULL' : this.M_AP_CreditNoteD.discountcd ,
                DiscountAmt: this.M_AP_CreditNoteD.discountamt ? this.replaceAllString(this.M_AP_CreditNoteD.discountamt,',','','number') : 0 ,
                TrxAmt: this.M_AP_CreditNoteD.trxamt ? this.replaceAllString(this.M_AP_CreditNoteD.trxamt,',','','number') : 0 ,
                UserInput: this.getDataUser().UserId 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
				
                this.$parent.resultInsert(response.Message)
                this.refreshListParent(true)
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNo: this.M_AP_CreditNoteD.creditno,
                CreditSequenceNo: this.M_AP_CreditNoteD.creditsequenceno,
                AccountCd: this.M_AP_CreditNoteD.accountcd == '' || this.M_AP_CreditNoteD.accountcd == null ? 'NULL' : this.M_AP_CreditNoteD.accountcd ,
                ModuleCd: 'AP',
                Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE,
                Descs: this.M_AP_CreditNoteD.descs,
                TaxCd: this.M_AP_CreditNoteD.taxcd == '' || this.M_AP_CreditNoteD.taxcd == null ? 'NULL' : this.M_AP_CreditNoteD.taxcd ,
                TaxBasePercent: this.M_AP_CreditNoteD.taxbasepercent,
                IncludeDiscount: this.M_AP_CreditNoteD.includediscount,
                DiscountCd: this.M_AP_CreditNoteD.discountcd == '' || this.M_AP_CreditNoteD.discountcd == null ? 'NULL' : this.M_AP_CreditNoteD.discountcd ,
                DiscountAmt: this.M_AP_CreditNoteD.discountamt ? this.replaceAllString(this.M_AP_CreditNoteD.discountamt,',','','number') : 0 ,
                TrxAmt: this.M_AP_CreditNoteD.trxamt ? this.replaceAllString(this.M_AP_CreditNoteD.trxamt,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_CreditNoteD.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
				
                this.$parent.resultUpdate(response.Message)
                this.refreshListParent(true)
				
            })
        },
		M_ClearForm(){
            this.M_AP_CreditNoteD = {
                trxtype: '',
                descs: '',
                accountcd: '',
                taxcd: '',
                includediscount: 'N',
                discountcd: '',
                discountamt: '0',
                trxamt: '0',
                netamt: 0,
                vatamt: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                taxdescs: '',
                category: '',
                discountdescs: '',
                taxbasepercent: 100,
                creditsequenceno: 0,
                creditno: '',
                lastupdatestamp: 0,
                rowid: 0,
                amountafterdiscount: '',
                totalamt: ''
                    }
            
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_CreditNoteD.creditno = data.CreditNo 



        },
        M_Edit(){
          let data = this.$store.getters.GetPage1Data
            this.M_AP_CreditNoteD.creditno = data.CreditNo
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    CreditSequenceNo: value.CreditSequenceNo,
                    UserEdit: this.getDataUser().UserId ,
                    CreditNo: value.CreditNo,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    Source: this.APFieldHelper.BATCH_MASTER_ENTRY_TYPE_CREDIT_NOTE,
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
                creditsequenceno: record.CreditSequenceNo,
                creditno: record.CreditNo
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AP_CreditNoteD = {
                trxtype: data.trxtype,
                descs: data.descs,
                accountcd: data.accountcd,
                taxcd: data.taxcd,
                includediscount: data.includediscount,
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                userinput: data.userinput,
                useredit: data.useredit,
                accountdescs: data.accountdescs,
                taxdescs: data.taxdescs,
                category: data.category,
                discountdescs: data.discountdescs,
                taxbasepercent: this.isCurrency(data.taxbasepercent, this.decimal),
                creditsequenceno: record.CreditSequenceNo,
                creditno: data.creditno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                amountafterdiscount: this.isCurrency(data.trxamt - data.discountamt, this.decimal),
                totalamt: this.isCurrency(data.netamt + data.vatamt, this.decimal)
                    }
            

                this.M_AP_CreditNoteD.accountcdLabel = this.M_AP_CreditNoteD.accountcd != null && this.M_AP_CreditNoteD.accountcd != '' ? data.accountcd + this.separator + data.accountdescs :'' 
                this.M_AP_CreditNoteD.taxcdLabel = this.M_AP_CreditNoteD.taxcd != null && this.M_AP_CreditNoteD.taxcd != '' ? data.taxcd + this.separator + data.taxdescs :'' 
                this.M_AP_CreditNoteD.discountcdLabel = this.M_AP_CreditNoteD.discountcd != null && this.M_AP_CreditNoteD.discountcd != '' ? data.discountcd + this.separator + data.discountdescs :'' 


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

