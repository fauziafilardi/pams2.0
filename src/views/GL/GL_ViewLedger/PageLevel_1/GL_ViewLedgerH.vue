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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSinputTextVuex :prop="PI_batchno" v-model="M_GL_ViewLedgerH.batchno"  ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_subportfoliocd" v-model="M_GL_ViewLedgerH.subportfoliocd"  ref="ref_subportfoliocd" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_GL_ViewLedgerH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_GL_ViewLedgerH.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamt" v-model="M_GL_ViewLedgerH.debitamt"  ref="ref_debitamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_ViewLedgerH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_GL_ViewLedgerH.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_journaldate" v-model="M_GL_ViewLedgerH.journaldate"  ref="ref_journaldate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_GL_ViewLedgerH.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_GL_ViewLedgerH.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxdate" v-model="M_GL_ViewLedgerH.trxdate"  ref="ref_trxdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnauditstatusChange" :prop="PI_auditstatus" v-model="M_GL_ViewLedgerH.auditstatus"  ref="ref_auditstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_ViewLedgerH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_ViewLedgerH.descs"  ref="ref_descs"/>
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
		FormType: "View",
		Module:"GL",
            propList: {
                initialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'BatchNo DESC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ViewLedgerH :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                lineno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finperiod: 0,
                finyear: 0,
                trxdate: '',
                referenceno: '',
                cashierno: '',
                descs: '',
                detaildescs: '',
                accountcd: '',
                currencycd: '',
                currencyrate: '0',
                trxamt: '',
                baseamt: '',
                debitcredit: '',
                journalsource: '',
                batchno: 0,
                auditstatus: 'N',
                restatus: '',
                allocationbaseamt: '',
                allocationtrxamt: '',
                revaluationdate: '',
                revaluationrate: '',
                timeinput: '',
                timeedit: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                detailcurrencyrate: '',
                rowid: 0,
                documentcount: '',
                batchtotal: '',
                currencybasesign: '',
                debitamt: '',
                creditamt: '',
                balance: ''
                    }
            ,
            PI_batchno: { 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliocd: { 
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
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
            PI_debitamt: { 
                cLabel: 'Debit Amount:', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_creditamt: { 
                cLabel: 'Credit Amount:', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldate: { 
                cValidate :'', 
                cName: 'journaldate', 
                cLabel: 'Journal Date', 
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
            PI_balance: { 
                cLabel: 'Balance:', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdate: { 
                cValidate :'', 
                cName: 'trxdate', 
                cLabel: 'Transaction Date', 
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
            PI_auditstatus: { 
                cValidate :'', 
                cName: 'auditstatus', 
                cId: 'rdbauditstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Journal Adjustment', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Rate', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
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
        OnauditstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{auditstatus}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[1].disabled = true
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
        M_Post(){
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ViewLedgerH = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                lineno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finperiod: 0,
                finyear: 0,
                trxdate: '',
                referenceno: '',
                cashierno: '',
                descs: '',
                detaildescs: '',
                accountcd: '',
                currencycd: '',
                currencyrate: '0',
                trxamt: '',
                baseamt: '',
                debitcredit: '',
                journalsource: '',
                batchno: 0,
                auditstatus: 'N',
                restatus: '',
                allocationbaseamt: '',
                allocationtrxamt: '',
                revaluationdate: '',
                revaluationrate: '',
                timeinput: '',
                timeedit: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                detailcurrencyrate: '',
                rowid: 0,
                documentcount: '',
                batchtotal: '',
                currencybasesign: '',
                debitamt: '',
                creditamt: '',
                balance: ''
                    }
            		
		},
        M_New(){
          this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
          this.$refs.ref_referenceno.focus()
        },
        M_Delete(dt){       

         //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                journalno: record.JournalNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data.baseamountdebit)
                this.M_GL_ViewLedgerH = {
                    subportfoliocd: data.subportfoliocd,
                    journalno: data.journalno,
                    lineno: data.lineno,
                    trxtype: data.trxtype,
                    modulecd: data.modulecd,
                    journaldate: this.momentDateFormatting(data.journaldate, 'DD/MM/YYYY') +" | Accounting Period : "+ data.finperiod + "/" + data.finyear,
                    finperiod: data.finperiod,
                    finyear: data.finyear,
                    trxdate: this.momentDateFormatting(data.trxdate, 'DD/MM/YYYY'),
                    referenceno: data.referenceno,
                    cashierno: data.cashierno,
                    descs: data.descs,
                    detaildescs: data.detaildescs,
                    accountcd: data.accountcd,
                    currencycd: data.currencycd,
                    currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                    trxamt: this.isCurrency(data.trxamt, this.decimal),
                    baseamt: this.isCurrency(data.baseamt, this.decimal),
                    debitcredit: data.debitcredit,
                    journalsource: data.journalsource,
                    batchno: data.batchno,
                    auditstatus: data.auditstatus,
                    restatus: data.restatus,
                    allocationbaseamt: data.allocationbaseamt,
                    allocationtrxamt: data.allocationtrxamt,
                    revaluationdate: data.revaluationdate,
                    revaluationrate: data.revaluationrate,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    lastupdatestamp: record.LastUpdateStamp,
                    debtorcd: data.debtorcd,
                    creditorcd: data.creditorcd,
                    bankcd: data.bankcd,
                    detailcurrencyrate: data.detailcurrencyrate,
                    rowid: data.rowid,
                    documentcount: data.documentcount,
                    batchtotal: data.batchtotal,
                    currencybasesign: data.currencybasesign,                    
                    debitamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountdebit.toString(), this.decimal) + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountdebit.toString(), this.decimal) + ")",
                    creditamt: data.currencybasesign + ". " + this.isCurrency(data.baseamountcredit.toString(), this.decimal) + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxamountcredit.toString(), this.decimal) + ")",
                    balance: data.currencybasesign + ". " + this.isCurrency(data.basebalance.toString(), this.decimal) + " (" + data.currencytrxsign + ". " + this.isCurrency(data.trxbalance.toString(), this.decimal) + ")"
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

