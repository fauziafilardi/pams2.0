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
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_AR_DebitNoteD.accountcd" :label="M_AR_DebitNoteD.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_DebitNoteD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="Ontrxamtchange" :prop="PI_trxamt" v-model="M_AR_DebitNoteD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_DebitNoteD.taxcd" :label="M_AR_DebitNoteD.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxbasepercent" v-model="M_AR_DebitNoteD.taxbasepercent"  ref="ref_taxbasepercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincludediscountChange" :prop="PI_includediscount" v-model="M_AR_DebitNoteD.includediscount"  ref="ref_includediscount" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndiscountcdChange" :prop="PI_discountcd" :value="M_AR_DebitNoteD.discountcd" :label="M_AR_DebitNoteD.discountcdLabel" ref="ref_discountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AR_DebitNoteD.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdisc" v-model="M_AR_DebitNoteD.amountafterdisc"  ref="ref_amountafterdisc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netamt" v-model="M_AR_DebitNoteD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_vatamt" v-model="M_AR_DebitNoteD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalamt" v-model="M_AR_DebitNoteD.totalamt"  ref="ref_totalamt"/>
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
                initialWhere:"TrxType = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_DebitNoteD :{
                trxtype: '',
                descs: '',
                accountcd: '',
                taxcd: '',
                journaltype: '',
                amortizestatus: '',
                includediscount: '',
                discountcd: '',
                discountamt: '0',
                trxamt: '0',
                netamt: '',
                vatamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                taxdescs: '',
                category: '',
                discountdescs: '',
                taxbasepercent: '0',
                debitsequenceno: 0,
                debitno: '',
                journalcategory: '',
                lastupdatestamp: 0,
                rowid: 0,
                amountafterdisc: '',
                totalamt: ''
                    }
            ,
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
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
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName:'descs', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:2, 
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
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans .Amount ', 
                cLabelSize: 4, 
                cOrder: 3, 
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
            PI_taxbasepercent: { 
                cValidate :'required|max:100', 
                cName: 'taxbasepercent', 
                cLabel: 'Tax Base ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_includediscount: { 
                cValidate :'', 
                cName: 'includediscount', 
                cId: 'includediscount', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Include Discount', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMDiscount'    , 
                    ColumnDB: 'DiscountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
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
                cMasterUrl: 'CM/CM_Discount' ,
                cDisplayColumn: 'DiscountCd,Descs' ,
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
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
            PI_amountafterdisc: { 
                cValidate :'', 
                cName: 'amountafterdisc', 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
    },
    GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        DetermineIncludeDiscount(){
            if(this.GetDataBy1.journalcategory == 'I' ){
                this.M_AR_DebitNoteD.includediscount = 'N'
                this.PI_includediscount.cProtect = true
            }else{
                this.PI_includediscount.cProtect = false
            }
        },
        CalculateDiscountAmt(){
            var trxamt = this.M_AR_DebitNoteD.trxamt ? this.replaceAllString(this.M_AR_DebitNoteD.trxamt,',','','number') : 0
            var discCd = this.M_AR_DebitNoteD.discountcd
            console.log(trxamt)
            console.log(discCd)
            this.FnGetARDiscountAmount( parseInt(trxamt), discCd )
            .then(disc => {
                if (disc != null) {
                    var dataDisc = disc[0]
                    console.log(dataDisc)
                    if (this.M_AR_DebitNoteD.discountcd == ''){
                        this.M_AR_DebitNoteD.discountamt = ''
                        this.M_AR_DebitNoteD.amountafterdisc = ''
                      }
                    else{
                    this.M_AR_DebitNoteD.discountamt = this.isCurrency(dataDisc.DiscountAmt, this.decimal)
                    this.M_AR_DebitNoteD.amountafterdisc = this.isCurrency(dataDisc.AmountAfterDisc, this.decimal)
                    }
                }
            })
        },
        GetTrxTypeData(){
            if(this.GetDataBy1.trxtype != "" ){
            this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,this.Module,this.GetDataBy1.trxtype)
            .then(dt =>{ 
                if (dt != null) { 
                    var dt25 = dt[0]
                    console.log(dt25)
                        this.M_AR_DebitNoteD.descs = dt25.TrxTypeDescs
                        this.M_AR_DebitNoteD.taxcd = dt25.TaxCd
                        this.M_AR_DebitNoteD.taxcdLabel = dt25.TaxCd
                        this.M_AR_DebitNoteD.taxbasepercent = dt25.TaxBasePercent
                        if(dt25.FixAmt!=0){
                            this.M_AR_DebitNoteD.trxamt = this.isCurrency(dt25.FixAmt,this.decimal)
                            if(this.M_AR_DebitNoteD.discountcd != ''){
                                    this.CalculateDiscountAmt()
                            }

                        }

                    } 
                })
            }
        },
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteD.accountcd = data.id
            this.M_AR_DebitNoteD.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
        //
        Ontrxamtchange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.CalculateDiscountAmt()
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteD.taxcd = data.id
            this.M_AR_DebitNoteD.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
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
        OndiscountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_DebitNoteD.discountcd = data.id
            this.M_AR_DebitNoteD.discountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.CalculateDiscountAmt()
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
            console.log(JSON.stringify(data,null,2))
            this.M_AR_DebitNoteD.debitno = data.DebitNo
            this.M_AR_DebitNoteD.trxtype = data.TrxType             
            this.propList.initialWhere =" DebitNo = '" + data.DebitNo + "' and SubportfolioCd ='"+this.getDataUser().SubPortfolioCd+"'"
            

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var dataSave = []
            var param1 = {			
                _Method_:'SAVE',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                AccountCd: this.M_AR_DebitNoteD.accountcd == '' || this.M_AR_DebitNoteD.accountcd == null ? 'NULL' : this.M_AR_DebitNoteD.accountcd ,
                ModuleCd: this.Module,
                Descs: this.M_AR_DebitNoteD.descs,
                TaxCd: this.M_AR_DebitNoteD.taxcd == '' || this.M_AR_DebitNoteD.taxcd == null ? 'NULL' : this.M_AR_DebitNoteD.taxcd ,
                TaxBasePercent: this.M_AR_DebitNoteD.taxbasepercent == '' || this.M_AR_DebitNoteD.taxbasepercent == null ? 'NULL' : this.M_AR_DebitNoteD.taxbasepercent ,
                IncludeDiscount: this.M_AR_DebitNoteD.includediscount,
                DiscountCd: this.M_AR_DebitNoteD.discountcd == '' || this.M_AR_DebitNoteD.discountcd == null ? 'NULL' : this.M_AR_DebitNoteD.discountcd ,
                DiscountAmt: this.M_AR_DebitNoteD.discountamt ? this.replaceAllString(this.M_AR_DebitNoteD.discountamt,',','','number') : 0 ,
                TrxAmt: this.M_AR_DebitNoteD.trxamt ? this.replaceAllString(this.M_AR_DebitNoteD.trxamt,',','','number') : 0 ,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                UserInput: this.getDataUser().UserId                 
            }

            var param3 = {			
                _Method_:'SAVE3',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                UserEdit: this.getDataUser().UserId                
            }

            var param2 = {			
                _Method_:'SAVE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_DEBIT_NOTE,
                UserEdit: this.getDataUser().UserId                
            }

             dataSave.push({
                A_Insert : param1,
                B_Insert : param2,
                C_Insert : param3
            })
             var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataSave
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                // this.$parent.resultPost()
                this.$parent.resultInsert('Data Has Been Inserted Successfully')
            })
          
        },
        M_Update() {
             var dataUpdate = []
            var param1 = {			
                _Method_:'UPDATE',
                _LineNo_: this.$parent.data.PageOrder ,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                DebitSequenceNo: this.DataRow.DebitSequenceNo,
                AccountCd: this.M_AR_DebitNoteD.accountcd == '' || this.M_AR_DebitNoteD.accountcd == null ? 'NULL' : this.M_AR_DebitNoteD.accountcd ,
                ModuleCd: this.Module,
                Descs: this.M_AR_DebitNoteD.descs,
                TaxCd: this.M_AR_DebitNoteD.taxcd == '' || this.M_AR_DebitNoteD.taxcd == null ? 'NULL' : this.M_AR_DebitNoteD.taxcd ,
                TaxBasePercent: this.M_AR_DebitNoteD.taxbasepercent == '' || this.M_AR_DebitNoteD.taxbasepercent == null ? 'NULL' : this.M_AR_DebitNoteD.taxbasepercent ,
                IncludeDiscount: this.M_AR_DebitNoteD.includediscount,
                DiscountCd: this.M_AR_DebitNoteD.discountcd == '' || this.M_AR_DebitNoteD.discountcd == null ? 'NULL' : this.M_AR_DebitNoteD.discountcd ,
                DiscountAmt: this.M_AR_DebitNoteD.discountamt ? this.replaceAllString(this.M_AR_DebitNoteD.discountamt,',','','number') : 0 ,
                TrxAmt: this.M_AR_DebitNoteD.trxamt ? this.replaceAllString(this.M_AR_DebitNoteD.trxamt,',','','number') : 0 ,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_DebitNoteD.lastupdatestamp                
            }
            var param3 = {			
                _Method_:'UPDATE3',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                UserEdit: this.getDataUser().UserId                
            }

            var param2 = {			
                _Method_:'UPDATE2',
                _LineNo_: this.$parent.data.PageOrder ,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
                EntryType: this.ARFieldHelper.BATCH_MASTER_ENTRY_TYPE_DEBIT_NOTE,
                UserEdit: this.getDataUser().UserId                
            }
            dataUpdate.push({
                A_Update : param1,
                B_Update : param2,
                C_Update : param3
            })
             var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                // this.$parent.resultPost()
                this.$parent.resultUpdate('Data Has Been Inserted Successfully')
            })

        },
		M_ClearForm(){
            this.M_AR_DebitNoteD = {
                trxtype: '',
                descs: '',
                accountcd: '',
                taxcd: '',
                journaltype: '',
                amortizestatus: '',
                includediscount: 'N',
                discountcd: '',
                discountamt: 0,
                trxamt: 0,
                netamt: 0,
                vatamt: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountdescs: '',
                taxdescs: '',
                category: '',
                discountdescs: '',
                taxbasepercent: 100,
                debitsequenceno: 0,
                debitno: '',
                journalcategory: '',
                lastupdatestamp: 0,
                rowid: 0,
                amountafterdisc: '',
                totalamt: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_DebitNoteD.trxtype = data.TrxType 
            this.M_AR_DebitNoteD.debitno = data.DebitNo

            this.GetTrxTypeData()
            this.DetermineIncludeDiscount()



        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            var dataDelete2 = []
            var dataDelete3 = []
            // 3 SP di jadikan 1 SP
        
            data.forEach((value) => {
                dataDelete2.push({
                    _MethodApi_ : 'DELETE2',
                    _LineNo_ : this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId,
                    _Message_:''
                })

                dataDelete3.push({
                    _MethodApi_ : 'DELETE3',
                    _LineNo_ : this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    EntryType: 'D',
                    DebitNo: value.DebitNo,
                    UserEdit: this.getDataUser().UserId,
                    _Message_:''
                })
                
                dataDelete.push({
                    DebitSequenceNo : value.DebitSequenceNo,
                    UserEdit: this.getDataUser().UserId,
                    LastUpdateStamp : value.LastUpdateStamp,
                    _Delete2_ : dataDelete2,
                    _Delete3_ : dataDelete3,
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
,                debitsequenceno: record.DebitSequenceNo,
                debitno: record.DebitNo,
                journalcategory: record.JournalCategory,
                trxtype: record.TrxType				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                console.log(JSON.stringify(data,null,2))
this.M_AR_DebitNoteD = {
                trxtype: data.trxtype,
                descs: data.descs,
                accountcd: data.accountcd,
                taxcd: data.taxcd,
                journaltype: data.journaltype,
                amortizestatus: data.amortizestatus,
                includediscount: data.includediscount,
                discountcd: data.discountcd,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                accountdescs: data.accountdescs,
                taxdescs: data.taxdescs,
                category: data.category,
                discountdescs: data.discountdescs,
                taxbasepercent: data.taxbasepercent,
                debitsequenceno: data.debitsequenceno,
                debitno: data.debitno,
                journalcategory: data.journalcategory,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                amountafterdisc: this.isCurrency(parseInt(data.trxamt) - parseInt(data.discountamt)),
                totalamt: this.isCurrency(parseInt(data.netamt) + parseInt(data.vatamt)) ,
                    }

                this.M_AR_DebitNoteD.accountcdLabel = this.M_AR_DebitNoteD.accountcd != null ? data.accountcd + this.separator + data.accountdescs :'' 
                this.M_AR_DebitNoteD.taxcdLabel = this.M_AR_DebitNoteD.taxcd != null ? data.taxcd + this.separator + data.taxdescs :'' 
                this.M_AR_DebitNoteD.discountcdLabel = this.M_AR_DebitNoteD.discountcd != null ? data.discountcd + this.separator + data.discountdescs :'' 
  

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

