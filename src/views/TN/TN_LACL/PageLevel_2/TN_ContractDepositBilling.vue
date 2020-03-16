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
                                        <ABSCompute :prop="PI_status" v-model="M_TN_ContractDepositBilling.status"  ref="ref_status" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_depositno" v-model="M_TN_ContractDepositBilling.depositno"  ref="ref_depositno" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_depositnovalue" v-model="M_TN_ContractDepositBilling.depositnovalue"  ref="ref_depositnovalue" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ContractDepositBilling.trxtype" :label="M_TN_ContractDepositBilling.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ContractDepositBilling.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_ContractDepositBilling.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_ContractDepositBilling.addresscd" :label="M_TN_ContractDepositBilling.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ContractDepositBilling.currencycd" :label="M_TN_ContractDepositBilling.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_depositamt" v-model="M_TN_ContractDepositBilling.depositamt"  ref="ref_depositamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnrefunddateChange" :prop="PI_refunddate" v-model="M_TN_ContractDepositBilling.refunddate"  ref="ref_refunddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_ContractDepositBilling.credittermscd" :label="M_TN_ContractDepositBilling.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_ContractDepositBilling.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractDepositBilling.remarks"  ref="ref_remarks" />
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
            FormType: "View",
			Module:"TN",
            propList: {
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'TimeEdit DESC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractDepositBilling :{
                status: '',
                debtorcd: '',
                trxtype: '',
                descs: '',
                billingdate: '',
                billingduedate: '',
                credittermscd: '',
                currencycd: '',
                addresscd: '',
                depositamt: '0',
                refunddate: '',
                remarks: '',
                trxtypedescs: '',
                addresscontactid: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                address1: '',
                dueday: 0,
                credittermsdescs: '',
                depositno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                sequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_depositno: { 
                cLabel: 'Deposit No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_depositnovalue: { 
                cLabel: 'DepositNoValue', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeTN'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "(TenancyChargeType IN ('1', '2', '3', '4', 'Z')) AND ModuleCd = 'AR' and Subportfoliocd = '" + this.getDataUser().SubPortfolioCd + "'",
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
            PI_descs: { 
                cValidate :'', 
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
            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddressSubportfolio'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Address', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'AddressCd,Address1' ,
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_depositamt: { 
                cValidate :'required', 
                cName: 'depositamt', 
                cLabel: 'Amount', 
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
            PI_refunddate: { 
                cValidate :'', 
                cName: 'refunddate', 
                cLabel: 'Refund Date', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
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
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_billingduedate: { 
                cValidate :'', 
                cName: 'billingduedate', 
                cLabel: 'Billing Due Date', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cVisible:  true, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractDepositBilling.trxtype = data.id
            this.M_TN_ContractDepositBilling.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingdate}
            }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractDepositBilling.addresscd = data.id
            this.M_TN_ContractDepositBilling.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractDepositBilling.currencycd = data.id
            this.M_TN_ContractDepositBilling.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OnrefunddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{refunddate}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractDepositBilling.credittermscd = data.id
            this.M_TN_ContractDepositBilling.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{credittermscd}
            }
        })
        this.$forceUpdate()
        },
        OnbillingduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingduedate}
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

            if (
                // (data.StatusCode != 'A' && data.ContractStatus != 1) ||
                // (data.StatusCode != 'N' && data.ContractStatus != 1) ||
                // (data.StatusCode == 'C') ||
                // (data.StatusCode == 'X')
                (data.StatusCode != 'C' && data.ContractStatus != 1) ||
                (data.StatusCode != 'X' && data.ContractStatus != 1)
            ) {
                this.FormType = "View"
                this.$store.commit('setFormType','View')
                this.getToolbar().ProcessPS()
            }
            else {
                this.FormType = "List"
                this.$store.commit('setFormType','List')
                this.getToolbar().ProcessPS()
            }
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractDepositBilling.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and ApplicationNo = '" + data.ApplicationNo + "' "
            this.PI_addresscd.dataLookUp.InitialWhere = " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and (BillingStatus = 'Y' AND SubportfoliCd ='" + this.getDataUser().SubPortfolioCd + "' AND ContactId='" + this.DataRowPage1.ContactId + "')"

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractDepositBilling.applicationno,
                TrxType: this.M_TN_ContractDepositBilling.trxtype == '' || this.M_TN_ContractDepositBilling.trxtype == null ? 'NULL' : this.M_TN_ContractDepositBilling.trxtype ,
                Descs: this.M_TN_ContractDepositBilling.descs,
                BillingDate: this.M_TN_ContractDepositBilling.billingdate == '' || this.M_TN_ContractDepositBilling.billingdate == null ? 'NULL' : this.M_TN_ContractDepositBilling.billingdate ,
                BillingDueDate: this.M_TN_ContractDepositBilling.billingduedate == '' || this.M_TN_ContractDepositBilling.billingduedate == null ? 'NULL' : this.M_TN_ContractDepositBilling.billingduedate ,
                CreditTermsCd: this.M_TN_ContractDepositBilling.credittermscd == '' || this.M_TN_ContractDepositBilling.credittermscd == null ? 'NULL' : this.M_TN_ContractDepositBilling.credittermscd ,
                AddressCd: this.M_TN_ContractDepositBilling.addresscd == '' || this.M_TN_ContractDepositBilling.addresscd == null ? 'NULL' : this.M_TN_ContractDepositBilling.addresscd ,
                CurrencyCd: this.M_TN_ContractDepositBilling.currencycd == '' || this.M_TN_ContractDepositBilling.currencycd == null ? 'NULL' : this.M_TN_ContractDepositBilling.currencycd ,
                DepositAmt: this.M_TN_ContractDepositBilling.depositamt ? this.replaceAllString(this.M_TN_ContractDepositBilling.depositamt,',','','number') : 0 ,
                RefundDate: this.M_TN_ContractDepositBilling.refunddate == '' || this.M_TN_ContractDepositBilling.refunddate == null ? 'NULL' : this.M_TN_ContractDepositBilling.refunddate ,
                Remarks: this.M_TN_ContractDepositBilling.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceNo: this.M_TN_ContractDepositBilling.sequenceno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractDepositBilling.applicationno,
                TrxType: this.M_TN_ContractDepositBilling.trxtype == '' || this.M_TN_ContractDepositBilling.trxtype == null ? 'NULL' : this.M_TN_ContractDepositBilling.trxtype ,
                Descs: this.M_TN_ContractDepositBilling.descs,
                BillingDate: this.M_TN_ContractDepositBilling.billingdate == '' || this.M_TN_ContractDepositBilling.billingdate == null ? 'NULL' : this.M_TN_ContractDepositBilling.billingdate ,
                BillingDueDate: this.M_TN_ContractDepositBilling.billingduedate == '' || this.M_TN_ContractDepositBilling.billingduedate == null ? 'NULL' : this.M_TN_ContractDepositBilling.billingduedate ,
                CreditTermsCd: this.M_TN_ContractDepositBilling.credittermscd == '' || this.M_TN_ContractDepositBilling.credittermscd == null ? 'NULL' : this.M_TN_ContractDepositBilling.credittermscd ,
                AddressCd: this.M_TN_ContractDepositBilling.addresscd == '' || this.M_TN_ContractDepositBilling.addresscd == null ? 'NULL' : this.M_TN_ContractDepositBilling.addresscd ,
                CurrencyCd: this.M_TN_ContractDepositBilling.currencycd == '' || this.M_TN_ContractDepositBilling.currencycd == null ? 'NULL' : this.M_TN_ContractDepositBilling.currencycd ,
                DepositAmt: this.M_TN_ContractDepositBilling.depositamt ? this.replaceAllString(this.M_TN_ContractDepositBilling.depositamt,',','','number') : 0 ,
                RefundDate: this.M_TN_ContractDepositBilling.refunddate == '' || this.M_TN_ContractDepositBilling.refunddate == null ? 'NULL' : this.M_TN_ContractDepositBilling.refunddate ,
                Remarks: this.M_TN_ContractDepositBilling.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractDepositBilling.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_ContractDepositBilling = {
                status: '',
                debtorcd: '',
                trxtype: '',
                descs: '',
                billingdate: this.momentDate(new Date()),
                billingduedate: this.momentDate(new Date()),
                credittermscd: '',
                currencycd: '',
                addresscd: '',
                depositamt: '',
                refunddate: '',
                remarks: '',
                trxtypedescs: '',
                addresscontactid: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                address1: '',
                dueday: 0,
                credittermsdescs: '',
                depositno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                sequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractDepositBilling.applicationno = data.ApplicationNo 
            this.M_TN_ContractDepositBilling.status = "New"
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SequenceNo: value.SequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "Sequence No " + value.SequenceNo
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractDepositBilling = {
                status: record.Status,
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                descs: data.descs,
                billingdate: data.billingdate,
                billingduedate: data.billingduedate,
                credittermscd: data.credittermscd,
                currencycd: data.currencycd,
                addresscd: data.addresscd,
                depositamt: this.isCurrency(data.depositamt, this.decimal),
                refunddate: data.refunddate,
                remarks: data.remarks,
                trxtypedescs: data.trxtypedescs,
                addresscontactid: data.addresscontactid,
                userinput: data.userinput,
                useredit: data.useredit,
                address1: data.address1,
                dueday: data.dueday,
                credittermsdescs: data.credittermsdescs,
                depositno: data.depositno,
                subportfoliocd: data.subportfoliocd,
                applicationno: record.ApplicationNo,
                sequenceno: record.SequenceNo,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
            }
                    
                this.M_TN_ContractDepositBilling.trxtypeLabel = this.M_TN_ContractDepositBilling.trxtype != null && this.M_TN_ContractDepositBilling.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_TN_ContractDepositBilling.addresscdLabel = this.M_TN_ContractDepositBilling.addresscd != null && this.M_TN_ContractDepositBilling.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_ContractDepositBilling.currencycdLabel = this.M_TN_ContractDepositBilling.currencycd != null && this.M_TN_ContractDepositBilling.currencycd != '' ? data.currencycd + this.separator  :'' 
                this.M_TN_ContractDepositBilling.credittermscdLabel = this.M_TN_ContractDepositBilling.credittermscd != null && this.M_TN_ContractDepositBilling.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 

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

