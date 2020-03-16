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
                                <b-col md="6" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_withholdingreferenceno" v-model="M_AR_CustWOthersInvMonitoring.withholdingreferenceno"  ref="ref_withholdingreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CustWOthersInvMonitoring.debitno"  ref="ref_debitno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_CustWOthersInvMonitoring.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_CustWOthersInvMonitoring.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_debtorname" v-model="M_AR_CustWOthersInvMonitoring.debtorname"  ref="ref_debtorname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_CustWOthersInvMonitoring.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AR_CustWOthersInvMonitoring.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">                                        
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CustWOthersInvMonitoring.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                 <b-col md="6" id="col-right"> <!-- table open -->
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnwithholdingdateChange" :prop="PI_withholdingdate" v-model="M_AR_CustWOthersInvMonitoring.withholdingdate"  ref="ref_withholdingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_CustWOthersInvMonitoring.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_debit" ref="ref_debit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_debit" ref="ref_debit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_debit" ref="ref_debit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_CustWOthersInvMonitoring.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AR_CustWOthersInvMonitoring.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_basetaxcurrencyrate" v-model="M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate"  ref="ref_basetaxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_basewithholdingamt" v-model="M_AR_CustWOthersInvMonitoring.basewithholdingamt"  ref="ref_basewithholdingamt"/>
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
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND AllocatedAmt <> ChargeAmt",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            WHTStatus: '',

            M_AR_CustWOthersInvMonitoring :{
                withholdingno: '',
                withholdingreferenceno: '',
                withholdingdate: '',
                debitno: '',
                debitdate: '',
                descs: '',
                currencycd: '',
                taxcurrencyrate: '',
                basetaxcurrencyrate: '0',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                basewithholdingamt: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorcd: '',
                debtorname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_withholdingreferenceno: { 
                cValidate :'', 
                cName: 'withholdingreferenceno', 
                cLabel: 'Tax Invoice No', 
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
            PI_withholdingdate: { 
                cValidate :'required', 
                cName: 'withholdingdate', 
                cLabel: 'Tax Invoice Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitno: {                 
                cValidate :'', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
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
            PI_debitdate: {                
                cValidate :'', 
                cName: 'debitdate', 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true
            }, 
            PI_debit: {
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false
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
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
            PI_debtorname: { 
                cValidate :'', 
                cName: 'debtorname', 
                cLabel: 'Debtor Name', 
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
            PI_netamt: { 
                cLabel: 'Doc. Amount', 
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
            PI_basetaxcurrencyrate: { 
                cValidate :'required', 
                cName: 'basetaxcurrencyrate', 
                cLabel: 'Base Tax Rate', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: '(Value 0 will default to Tax Currency Rate value)'
            }, 
            PI_basewithholdingamt: { 
                cLabel: 'Base Withholding Amount', 
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
        OnwithholdingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{withholdingdate}
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
      // var scopeForm = "FormScope_" + this.PageLevel + "_" + this.TabIndex
      //       this.$validator._base.validateAll(scopeForm).then((result) => {
      //           if (!result) return
      //           console.log(result)
      //           // .then(ress => {
      //               if (result == 'true') {
      //                   this.$store.commit('setStatus', 'VIEW')
      //                   this.$validator.errors.clear(scopeForm)
      //               }
      //           // })
      //       })
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
        if (this.M_AR_CustWOthersInvMonitoring.withholdingreferenceno == "")
             { this.M_AR_CustWOthersInvMonitoring.withholdingreferenceno = "null"
             this.WHTStatus = "N" }
        else {
             this.WHTStatus = "T" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_CustWOthersInvMonitoring.debitno,
                WithHoldingReferenceNo: this.M_AR_CustWOthersInvMonitoring.withholdingreferenceno,
                WithHoldingDate: this.M_AR_CustWOthersInvMonitoring.withholdingdate == '' || this.M_AR_CustWOthersInvMonitoring.withholdingdate == null ? 'NULL' : this.M_AR_CustWOthersInvMonitoring.withholdingdate ,
                BaseTaxCurrencyRate: this.M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate ? this.replaceAllString(this.M_AR_CustWOthersInvMonitoring.basetaxcurrencyrate,',','','number') : 0 ,
                // Status: this.ARFieldHelper.WITHHOLDING_STATUS_TEMPORARY_ALLOCATED,
                Status: this.WHTStatus,
                UserEdit: this.getDataUser().UserId ,
                Remarks: this.M_AR_CustWOthersInvMonitoring.remarks,
                LastUpdateStamp: this.M_AR_CustWOthersInvMonitoring.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })


        },
		M_ClearForm(){
            this.M_AR_CustWOthersInvMonitoring = {
                withholdingno: '',
                withholdingreferenceno: '',
                withholdingdate: '',
                debitno: '',
                debitdate: '',
                descs: '',
                currencycd: '',
                taxcurrencyrate: '',
                basetaxcurrencyrate: '0',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                basewithholdingamt: '',
                remarks: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorcd: '',
                debtorname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_CustWOthersInvMonitoring = {
                withholdingno: data.withholdingno,
                withholdingreferenceno: data.withholdingreferenceno,
                withholdingdate: data.withholdingdate,
                debitno: data.debitno,
                debitdate: data.debitdate,
                descs: data.descs,
                currencycd: data.currencycd,
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                basetaxcurrencyrate: this.isCurrency(data.basetaxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                withholdingamt: this.isCurrency(data.withholdingamt, this.decimal),
                basewithholdingamt: this.isCurrency(data.basewithholdingamt, this.decimal),
                remarks: data.remarks,
                useredit: data.useredit,
                userinput: data.userinput,
                debtorcd: data.debtorcd,
                debtorname: data.debtorname,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
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

