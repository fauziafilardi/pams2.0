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
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_CB_GIBankReconcileD.cashierno"  ref="ref_cashierno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncashierdateChange" :prop="PI_cashierdate" v-model="M_CB_GIBankReconcileD.cashierdate"  ref="ref_cashierdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_GIBankReconcileD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_GIBankReconcileD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                          <ABSInputSelectList @change="OnsubportfoliocdChange" :prop="PI_subportfoliocd" :value="M_CB_GIBankReconcileD.subportfoliocd" :label="M_CB_GIBankReconcileD.subportfoliocdLabel" ref="ref_subportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                          <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_CB_GIBankReconcileD.debtorcd" :label="M_CB_GIBankReconcileD.debtorcdLabel" ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                          <ABSTextAreaVuex :prop="PI_remarks" v-model="M_CB_GIBankReconcileD.remarks"  ref="ref_remarks" />
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
            Module:"CB",
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

            M_CB_GIBankReconcileD :{
                cashierno: '',
                cashierdate: '',
                trxamt: '',
                descs: '',
                subportfoliocd: '',
                subportfoliocdLabel: '',
                debtorcd: '',
                debtorcdLabel: '',
                remarks: '',
                lastupdatestamp: ''
            },
            PI_cashierno: { 
                cValidate :'required|max:20', 
                cName: 'cashierno', 
                cLabel: 'Cashier No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,
                cType: 'text',
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_cashierdate: { 
                cValidate :'required', 
                cName: 'cashierdate', 
                cLabel: 'Cashier Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_trxamt: { 
                cValidate :'required', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,
                cType: 'decimal',
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,
                cType: 'text',
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_subportfoliocd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCMSubPortfolio',
                    ColumnDB: 'SubPortFolioCd',
                    InitialWhere: "SubPortfolioCd  =  '" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: ''
                }, 
                cValidate :'', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio', 
                cKey: false,
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
                cMasterUrl: '',
                cDisplayColumn: 'SubPortFolioCd,Name'
            },
            PI_debtorcd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupARDebtorWithBusinessName',
                    ColumnDB: 'DebtorCd',
                    InitialWhere: "SubPortfolioCd  =  '" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: '',
                    OrderBy: 'DebtorCd ASC'
                }, 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code',
                cKey: false,
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
                cMasterUrl: '',
                cDisplayColumn: 'DebtorCd,Name'
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
        DataRow1(){
            return this.$store.getters.GetPage1Data
        },
    },
    methods: {
        OnsubportfoliocdChange (data) {
            this.M_CB_GIBankReconcileD.subportfoliocd = data.id
            this.M_CB_GIBankReconcileD.subportfoliocdLabel = data.label
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {}
            })
        },
        OndebtorcdChange (data) {
            this.M_CB_GIBankReconcileD.debtorcd = data.id
            this.M_CB_GIBankReconcileD.debtorcdLabel = data.label
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {}
            })
        },
        OncashierdateChange (data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {}
            })
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

            this.PI_subportfoliocd.dataLookUp.InitialWhere = " SubportfolioCd IN (Select SubportfolioCd From CB_Bank Where ContactID='" +
            data.ContactID + "' AND BankCd='" + data.BankCd + "') "

            this.propList.initialWhere = " ContactID = '" + data.ContactID + "' AND BankCd = '" + data.BankCd + "' AND Source = 'M'"
            this.FormToABSList().doGetList('','eb_getList')
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                BankCd: this.DataRow1.BankCd,
                ContactID: this.DataRow1.ContactID,
                CashierNo: this.M_CB_GIBankReconcileD.cashierno,
                CashierDate: this.M_CB_GIBankReconcileD.cashierdate,
                CashierAmt: this.M_CB_GIBankReconcileD.trxamt && this.M_CB_GIBankReconcileD.trxamt != "" ? this.replaceAllString(this.M_CB_GIBankReconcileD.trxamt, ',', '', 'number') : 0,
                DebtorCd: this.M_CB_GIBankReconcileD.debtorcd == '' || this.M_CB_GIBankReconcileD.debtorcd == null ? "NULL" : this.M_CB_GIBankReconcileD.debtorcd,
                SubportfolioCd: this.M_CB_GIBankReconcileD.subportfoliocd == '' || this.M_CB_GIBankReconcileD.subportfoliocd == null ? "NULL" : this.M_CB_GIBankReconcileD.subportfoliocd,
                Descs: this.M_CB_GIBankReconcileD.descs,
                Remarks: this.M_CB_GIBankReconcileD.remarks,
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
                BankCd: this.DataRow1.BankCd,
                ContactID: this.DataRow1.ContactID,
                CashierNo: this.DataRow.CashierNo,
                NewCashierNo: this.M_CB_GIBankReconcileD.cashierno,
                CashierDate: this.M_CB_GIBankReconcileD.cashierdate,
                CashierAmt: this.M_CB_GIBankReconcileD.trxamt && this.M_CB_GIBankReconcileD.trxamt != "" ? this.replaceAllString(this.M_CB_GIBankReconcileD.trxamt, ',', '', 'number') : 0,
                DebtorCd: this.M_CB_GIBankReconcileD.debtorcd == '' || this.M_CB_GIBankReconcileD.debtorcd == null ? "NULL" : this.M_CB_GIBankReconcileD.debtorcd,
                SubportfolioCd: this.M_CB_GIBankReconcileD.subportfoliocd == '' || this.M_CB_GIBankReconcileD.subportfoliocd == null ? "NULL" : this.M_CB_GIBankReconcileD.subportfoliocd,
                Descs: this.M_CB_GIBankReconcileD.descs,
                Remarks: this.M_CB_GIBankReconcileD.remarks,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_CB_GIBankReconcileD.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_CB_GIBankReconcileD = {
                cashierno: '',
                cashierdate: '',
                trxamt: '',
                descs: '',
                subportfoliocd: '',
                subportfoliocdLabel: '',
                debtorcd: '',
                debtorcdLabel: '',
                remarks: '',
                lastupdatestamp: ''
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
                // SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: value.BankCd,
                ContactID: value.ContactID,
                CashierNo: value.CashierNo,
                LastUpdateStamp: value.LastUpdateStamp,
                _Message_: ""
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
                bankcd: record.BankCd,
                contactid: record.ContactID,
                cashierno: record.CashierNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_CB_GIBankReconcileD = {
                    cashierno: data.cashierno,
                    cashierdate: data.cashierdate,
                    trxamt: this.isCurrency(data.cashieramt, this.decimal),
                    descs: data.descs,
                    subportfoliocd: data.subportfoliocd,
                    debtorcd: data.debtorcd,
                    remarks: data.remarks,
                    lastupdatestamp: record.LastUpdateStamp
                }

                this.M_CB_GIBankReconcileD.subportfoliocdLabel = data.subportfoliocd && data.subportfoliocd != "" ? data.subportfoliocd + this.separator + data.debtorname : ""
                this.M_CB_GIBankReconcileD.debtorcdLabel = data.debtorcd && data.debtorcd != "" ? data.debtorcd + this.separator + data.subportfolioname : ""

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
            })
        }
    },
    beforeCreate: function () {
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