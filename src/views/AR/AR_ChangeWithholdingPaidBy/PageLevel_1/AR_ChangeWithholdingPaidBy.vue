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
                                        <ABSCompute :prop="PI_debtorcd" v-model="M_AR_ChangeWithholdingPaidBy.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_source" v-model="M_AR_ChangeWithholdingPaidBy.source"  ref="ref_source" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitno" v-model="M_AR_ChangeWithholdingPaidBy.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_ChangeWithholdingPaidBy.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_descs" v-model="M_AR_ChangeWithholdingPaidBy.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_AR_ChangeWithholdingPaidBy.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalcategoryChange" :prop="PI_journalcategory" v-model="M_AR_ChangeWithholdingPaidBy.journalcategory"  ref="ref_journalcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnvatpaidbyChange" :prop="PI_vatpaidby" v-model="M_AR_ChangeWithholdingPaidBy.vatpaidby"  ref="ref_vatpaidby" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_ChangeWithholdingPaidBy.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_AR_ChangeWithholdingPaidBy.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_amountafterdisc" v-model="M_AR_ChangeWithholdingPaidBy.amountafterdisc"  ref="ref_amountafterdisc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AR_ChangeWithholdingPaidBy.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AR_ChangeWithholdingPaidBy.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_AR_ChangeWithholdingPaidBy.totalamt"  ref="ref_totalamt"/>
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
                initialWhere: "SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_ChangeWithholdingPaidBy :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                debtorcd: '',
                trxtype: '',
                modulecd: '',
                runningcd: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                addresscontactid: '',
                addresscd: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                revaluationdate: '',
                revaluationcurrencyrate: '',
                lastpenaltydate: '',
                discountamt: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                allocatedamt: '',
                journalcategory: 'D',
                withholdingpaidby: '',
                vatpaidby: 'M',
                postingdate: '',
                postedby: '',
                status: '',
                reasoncd: '',
                reasondescs: '',
                canceldate: '',
                cancelby: '',
                withholdingamt: '',
                name: '',
                parentid: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                salutationcd: '',
                attention: '',
                fulladdress: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                depositrefunddate: '',
                vatexemptionamt: '',
                originalamt: '',
                trxamtaftervatexemption: '',
                rowid: 0,
                amountafterdisc: '',
                totalamt: ''
                    }
            ,
            PI_debtorcd: { 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_source: { 
                cLabel: 'Document Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                cLabel: 'Document No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitdate: { 
                cValidate :'required', 
                cName: 'debitdate', 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencycd: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journalcategory: { 
                cValidate :'', 
                cName: 'journalcategory', 
                cId: 'rdbjournalcategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' }, { text: 'Indirect', value: 'I' }], 
                cRadioDefaultOption: 'D', 
                cLabel:'Journal Category', 
                cLabelSize: 4, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
            }, 
            PI_vatpaidby: { 
                cValidate :'', 
                cName: 'vatpaidby', 
                cId: 'rdbvatpaidby', 
                cRadioOptions: [{ text: 'Debtor', value: 'D' }, { text: 'Management', value: 'M' }], 
                cLabel:'Withholding Paid By', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_discountamt: { 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_amountafterdisc: { 
                cLabel: 'Amount After Discount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_netamt: { 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
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
        OnjournalcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journalcategory}
            }
        })
        this.$forceUpdate()
        },
        OnvatpaidbyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatpaidby}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true  
           this.getToolbar().statusFunction[2].disabled = true  
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
                DebitNo: this.M_AR_ChangeWithholdingPaidBy.debitno,
                WithholdingPaidBy: this.M_AR_ChangeWithholdingPaidBy.vatpaidby,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_ChangeWithholdingPaidBy.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_ChangeWithholdingPaidBy = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                batchno: 0,
                source: '',
                debtorcd: '',
                trxtype: '',
                modulecd: '',
                runningcd: '',
                debitno: '',
                debitdate: '',
                journaldate: '',
                duedate: '',
                referenceno: '',
                credittermscd: '',
                descs: '',
                addresscontactid: '',
                addresscd: '',
                currencycd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                revaluationdate: '',
                revaluationcurrencyrate: '',
                lastpenaltydate: '',
                discountamt: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                allocatedamt: '',
                journalcategory: 'D',
                withholdingpaidby: '',
                vatpaidby: 'M',
                postingdate: '',
                postedby: '',
                status: '',
                reasoncd: '',
                reasondescs: '',
                canceldate: '',
                cancelby: '',
                withholdingamt: '',
                name: '',
                parentid: '',
                taxno: '',
                taxreferenceno: '',
                taxregistrationdate: '',
                salutationcd: '',
                attention: '',
                fulladdress: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                depositrefunddate: '',
                vatexemptionamt: '',
                originalamt: '',
                trxamtaftervatexemption: '',
                rowid: 0,
                amountafterdisc: '',
                totalamt: ''
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
                debitno: record.DebitNo
            }
            console.log(record)

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
this.M_AR_ChangeWithholdingPaidBy = {
                subportfoliocd: data.subportfoliocd,
                batchno: data.batchno,
                source: data.source,
                debtorcd: data.debtorcd,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                runningcd: data.runningcd,
                debitno: data.debitno,
                debitdate: data.debitdate,
                journaldate: data.journaldate,
                duedate: data.duedate,
                referenceno: data.referenceno,
                credittermscd: data.credittermscd,
                descs: data.descs,
                addresscontactid: data.addresscontactid,
                addresscd: data.addresscd,
                currencycd: data.currencycd,
                currencyrate: data.currencyrate,
                taxcurrencyrate: data.taxcurrencyrate,
                revaluationdate: data.revaluationdate,
                revaluationcurrencyrate: data.revaluationcurrencyrate,
                lastpenaltydate: data.lastpenaltydate,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                journalcategory: data.journalcategory,
                withholdingpaidby: data.withholdingpaidby,
                vatpaidby: data.withholdingpaidby,
                postingdate: data.postingdate,
                postedby: data.postedby,
                status: data.status,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                canceldate: data.canceldate,
                cancelby: data.cancelby,
                withholdingamt: data.withholdingamt,
                name: data.name,
                parentid: data.parentid,
                taxno: data.taxno,
                taxreferenceno: data.taxreferenceno,
                taxregistrationdate: data.taxregistrationdate,
                salutationcd: data.salutationcd,
                attention: data.attention,
                fulladdress: data.fulladdress,
                citycd: data.citycd,
                zipcode: data.zipcode,
                phoneno: data.phoneno,
                faxno: data.faxno,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                depositrefunddate: data.depositrefunddate,
                vatexemptionamt: data.vatexemptionamt,
                originalamt: data.originalamt,
                trxamtaftervatexemption: data.trxamtaftervatexemption,
                rowid: data.rowid,
                amountafterdisc: data.amountafterdisc,
                totalamt: data.totalamt
                    }
                 
                 if(data.source == 'I'){
                   this.M_AR_ChangeWithholdingPaidBy.source = 'Invoice'
                 }
                 
                 if(data.source == 'G'){
                   this.M_AR_ChangeWithholdingPaidBy.source = 'Invoice Generated'
                 }

                 if(data.source == 'D'){  
                   this.M_AR_ChangeWithholdingPaidBy.source = 'Debit Note'
                 }

                 this.M_AR_ChangeWithholdingPaidBy.totalamt = this.isCurrency(data.vatamt + data.netamt, this.decimal)
                 this.M_AR_ChangeWithholdingPaidBy.amountafterdisc = this.isCurrency(data.trxamt - data.discountamt, this.decimal)

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

