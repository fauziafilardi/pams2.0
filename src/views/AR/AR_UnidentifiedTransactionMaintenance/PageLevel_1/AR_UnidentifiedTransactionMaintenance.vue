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
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_splitremarks" v-model="M_AR_UnidentifiedTransactionMaintenance.splitremarks"  ref="ref_splitremarks" />
                                      </b-col>
                                    </b-row>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                   <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_batchno" v-model="M_AR_UnidentifiedTransactionMaintenance.batchno"  ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_AR_UnidentifiedTransactionMaintenance.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_AR_UnidentifiedTransactionMaintenance.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_UnidentifiedTransactionMaintenance.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_UnidentifiedTransactionMaintenance.trxtypeLabel"  ref="ref_trxtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_AR_UnidentifiedTransactionMaintenance.paymentno"  ref="ref_paymentno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_paymentdate" v-model="M_AR_UnidentifiedTransactionMaintenance.paymentdate"  ref="ref_paymentdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_UnidentifiedTransactionMaintenance.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpaymentcategoryChange" :prop="PI_paymentcategory" v-model="M_AR_UnidentifiedTransactionMaintenance.paymentcategory"  ref="ref_paymentcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnidentifiedtrxstatusChange" :prop="PI_identifiedtrxstatus" v-model="M_AR_UnidentifiedTransactionMaintenance.identifiedtrxstatus"  ref="ref_identifiedtrxstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_UnidentifiedTransactionMaintenance.debtorcd" :label="M_AR_UnidentifiedTransactionMaintenance.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_suggesteddebtorcd" v-model="M_AR_UnidentifiedTransactionMaintenance.suggesteddebtorcdLabel"  ref="ref_suggesteddebtorcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankaccountno" v-model="M_AR_UnidentifiedTransactionMaintenance.bankaccountno"  ref="ref_bankaccountno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentcd" v-model="M_AR_UnidentifiedTransactionMaintenance.paymentcdLabel"  ref="ref_paymentcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankcd" v-model="M_AR_UnidentifiedTransactionMaintenance.bankcdLabel"  ref="ref_bankcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_UnidentifiedTransactionMaintenance.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_UnidentifiedTransactionMaintenance.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_UnidentifiedTransactionMaintenance.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AR_UnidentifiedTransactionMaintenance.chequereferenceno"  ref="ref_chequereferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequereferencedate" v-model="M_AR_UnidentifiedTransactionMaintenance.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_AR_UnidentifiedTransactionMaintenance.issuedbank"  ref="ref_issuedbank" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequeduedate" v-model="M_AR_UnidentifiedTransactionMaintenance.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_remarks" v-model="M_AR_UnidentifiedTransactionMaintenance.remarks"  ref="ref_remarks" />
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
    error: true,
    err1: true,
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

            M_AR_UnidentifiedTransactionMaintenance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: '',
                documentcount: '',
                batchtotal: '',
                batchstatus: '',
                trxtype: '',
                trxtypeLabel: '',
                transactiontypename: '',
                debtorcd: '',
                debtorcdLabel: '',
                debtorcdtemp: '',
                debtorcdLabeltemp: '',
                debtorname: '',
                paymentcd: '',
                paymentcdLabel: '',
                paymentname: '',
                bankcd: '',
                bankcdLabel: '',
                bankname: '',
                paymentno: '',
                paymentdate: '',
                descs: '',
                paymentcategory: '',
                identifiedtrxstatus: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                originalcurrencyrate: '',
                tobankcd: '',
                tocurrencycd: '',
                currencyoperator: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                postby: '',
                postingdate: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                status: '',
                customerbankaccountno: '',
                suggesteddebtorcd: '',
                suggesteddebtorcdLabel: '',
                suggesteddebtorname: '',
                unidentifieddebtorcd: '',
                splitremarks: '',
                splitremarks2: '',
                countadv: 0,
                bankaccountno: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_splitremarks: { 
                // cLabel: 'Credit Account Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cStyle: 'color:blue'
                // cClass: 'lbl-col-align'
            }, 
            PI_batchno: { 
                cLabel: 'Batch No', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_documentcount: { 
                cLabel: 'Doc. Count', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_batchtotal: { 
                cLabel: 'Batch Total', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_batchstatus: { 
                cValidate :'', 
                cName: 'batchstatus', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtype: { 
              cValidate :'', 
              cName: 'trxtype', 
              cLabel: 'Trans. Type', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_paymentno: { 
              cValidate :'', 
              cName: 'paymentno', 
              cLabel: 'Payment No', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_paymentdate: { 
              cValidate :'', 
              cName: 'paymentdate', 
              cLabel: 'Payment Date',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false,
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
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
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_paymentcategory: { 
                cValidate :'', 
                cName: 'paymentcategory', 
                cId: 'rdbpaymentcategory', 
                cRadioOptions: [{ text: 'Cash In', value: 'I' },{ text: 'Cash Out', value: 'O' }], 
                cRadioDefaultOption: '', 
                cLabel:'Payment Category', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_identifiedtrxstatus: { 
                cValidate :'', 
                cName: 'identifiedtrxstatus', 
                cId: 'rdbidentifiedtrxstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Identified Trans.', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor',
                    ColumnDB: 'DebtorCd',
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'Y'",
                    ParamWhere: ''
                        }, 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
            PI_suggesteddebtorcd: { 
              cValidate :'', 
              cName: 'suggesteddebtorcd', 
              cLabel: 'Suggested Debtor',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_bankaccountno: { 
              cValidate :'', 
              cName: 'bankaccountno', 
              cLabel: 'Bank Account No',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_paymentcd: { 
              cValidate :'', 
              cName: 'paymentcd', 
              cLabel: 'Payment Type', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_bankcd: { 
              cValidate :'', 
              cName: 'bankcd', 
              cLabel: 'Bank', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_currencycd: { 
              cValidate :'', 
              cName: 'currencycd', 
              cLabel: 'Currency', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_currencyrate: { 
              cValidate :'', 
              cName: 'currencyrate', 
              cLabel: 'Currency Rate', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
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
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_chequereferenceno: { 
              cValidate :'', 
              cName: 'chequereferenceno', 
              cLabel: 'Cheque / Ref. No', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_chequereferencedate: { 
              cValidate :'', 
              cName: 'chequereferencedate', 
              cLabel: 'Cheque / Ref Date', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false,
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_issuedbank: { 
              cValidate :'', 
              cName: 'issuedbank', 
              cLabel: 'Issue Bank',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_chequeduedate: { 
              cValidate :'', 
              cName: 'chequeduedate', 
              cLabel: 'Due Date', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false,
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_remarks: { 
                cLabel: 'Remarks', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
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
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{paymentcategory}
            }
        })
        this.$forceUpdate()
        },
        OnidentifiedtrxstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if (data == 'Y') {
                this.M_AR_UnidentifiedTransactionMaintenance.debtorcd = ''
                this.M_AR_UnidentifiedTransactionMaintenance.debtorcdLabel = ''
                this.PI_debtorcd.cProtect = false
              }
              else {
                this.M_AR_UnidentifiedTransactionMaintenance.debtorcd = this.M_AR_UnidentifiedTransactionMaintenance.debtorcdtemp
                this.M_AR_UnidentifiedTransactionMaintenance.debtorcdLabel = this.M_AR_UnidentifiedTransactionMaintenance.debtorcdLabeltemp
                this.PI_debtorcd.cProtect = true
              }
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UnidentifiedTransactionMaintenance.debtorcd = data.id
            this.M_AR_UnidentifiedTransactionMaintenance.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
	
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
		doDoubleClick(){
        },
        rowClicked (record, index) {
          // console.log(record)
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
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              PaymentNo: this.DataRow.PaymentNo,
              CashierNo: this.DataRow.CashierNo,
              DebtorCd: this.M_AR_UnidentifiedTransactionMaintenance.debtorcd == '' || this.M_AR_UnidentifiedTransactionMaintenance.debtorcd == null ? 'NULL' : this.M_AR_UnidentifiedTransactionMaintenance.debtorcd ,
              BankAccountNo: this.M_AR_UnidentifiedTransactionMaintenance.bankaccountno,
              IdentifiedTrxStatus: this.M_AR_UnidentifiedTransactionMaintenance.identifiedtrxstatus,
              UserEdit: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })

        },
		M_ClearForm(){
            this.M_AR_UnidentifiedTransactionMaintenance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: '',
                documentcount: '',
                batchtotal: '',
                batchstatus: '',
                trxtype: '',
                trxtypeLabel: '',
                transactiontypename: '',
                debtorcd: '',
                debtorcdLabel: '',
                debtorcdtemp: '',
                debtorcdLabeltemp: '',
                debtorname: '',
                paymentcd: '',
                paymentcdLabel: '',
                paymentname: '',
                bankcd: '',
                bankcdLabel: '',
                bankname: '',
                paymentno: '',
                paymentdate: '',
                descs: '',
                paymentcategory: '',
                identifiedtrxstatus: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                originalcurrencyrate: '',
                tobankcd: '',
                tocurrencycd: '',
                currencyoperator: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                postby: '',
                postingdate: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                status: '',
                customerbankaccountno: '',
                suggesteddebtorcd: '',
                suggesteddebtorcdLabel: '',
                suggesteddebtorname: '',
                unidentifieddebtorcd: '',
                splitremarks: '',
                splitremarks2: '',
                countadv: 0,
                bankaccountno: '',
                lastupdatestamp: 0,
                rowid: 0
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
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                paymentno: record.PaymentNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_UnidentifiedTransactionMaintenance = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                trxtype: data.trxtype,
                transactiontypename: data.transactiontypename,
                debtorcd: data.debtorcd,
                debtorcdtemp: data.debtorcd,
                debtorname: data.debtorname,
                paymentcd: data.paymentcd,
                paymentname: data.paymentname,
                bankcd: data.bankcd,
                bankname: data.bankname,
                paymentno: data.paymentno,
                paymentdate: data.paymentdate,
                descs: data.descs,
                paymentcategory: data.paymentcategory,
                identifiedtrxstatus: data.identifiedtrxstatus,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                originalcurrencyrate: this.isCurrency(data.originalcurrencyrate, this.decimal),
                tobankcd: data.tobankcd,
                tocurrencycd: data.tocurrencycd,
                currencyoperator: data.currencyoperator,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                issuedbank: data.issuedbank,
                chequeduedate: data.chequeduedate,
                postby: data.postby,
                postingdate: data.postingdate,
                remarks: data.remarks,
                useredit: data.useredit,
                userinput: data.userinput,
                status: data.status,
                customerbankaccountno: data.customerbankaccountno,
                suggesteddebtorcd: data.suggesteddebtorcd,
                suggesteddebtorname: data.suggesteddebtorname,
                unidentifieddebtorcd: data.unidentifieddebtorcd,
                splitremarks: data.splitremarks,
                splitremarks2: data.splitremarks2,
                countadv: data.countadv,
                bankaccountno: data.customerbankaccountno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_UnidentifiedTransactionMaintenance.trxtypeLabel = this.M_AR_UnidentifiedTransactionMaintenance.trxtype != null && this.M_AR_UnidentifiedTransactionMaintenance.trxtype != '' ? data.trxtype + this.separator + data.transactiontypename :'' 
                this.M_AR_UnidentifiedTransactionMaintenance.debtorcdLabel = this.M_AR_UnidentifiedTransactionMaintenance.debtorcd != null && this.M_AR_UnidentifiedTransactionMaintenance.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 
                this.M_AR_UnidentifiedTransactionMaintenance.paymentcdLabel = this.M_AR_UnidentifiedTransactionMaintenance.paymentcd != null && this.M_AR_UnidentifiedTransactionMaintenance.paymentcd != '' ? data.paymentcd + this.separator + data.paymentname :'' 
                this.M_AR_UnidentifiedTransactionMaintenance.bankcdLabel = this.M_AR_UnidentifiedTransactionMaintenance.bankcd != null && this.M_AR_UnidentifiedTransactionMaintenance.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                this.M_AR_UnidentifiedTransactionMaintenance.suggesteddebtorcdLabel = this.M_AR_UnidentifiedTransactionMaintenance.suggesteddebtorcd != null && this.M_AR_UnidentifiedTransactionMaintenance.suggesteddebtorcd != '' ? data.suggesteddebtorcd + this.separator + data.suggesteddebtorname :'' 
                this.M_AR_UnidentifiedTransactionMaintenance.debtorcdLabeltemp = this.M_AR_UnidentifiedTransactionMaintenance.debtorcd != null && this.M_AR_UnidentifiedTransactionMaintenance.debtorcd != '' ? data.debtorcd + this.separator + data.debtorname :'' 

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit



            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
      this.$store.commit('setFormType','List')
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

