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
                                        <ABSinputTextVuex :prop="PI_batchno" v-model="M_GL_ViewDeletedJournalH.batchno"  ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_GL_ViewDeletedJournalH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_GL_ViewDeletedJournalH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_GL_ViewDeletedJournalH.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitamt" v-model="M_GL_ViewDeletedJournalH.debitamt"  ref="ref_debitamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_ViewDeletedJournalH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_creditamt" v-model="M_GL_ViewDeletedJournalH.creditamt"  ref="ref_creditamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_journaldate" v-model="M_GL_ViewDeletedJournalH.journaldate"  ref="ref_journaldate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_balance" v-model="M_GL_ViewDeletedJournalH.balance"  ref="ref_balance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_GL_ViewDeletedJournalH.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxdate" v-model="M_GL_ViewDeletedJournalH.trxdate"  ref="ref_trxdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnauditstatusChange" :prop="PI_auditstatus" v-model="M_GL_ViewDeletedJournalH.auditstatus"  ref="ref_auditstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_ViewDeletedJournalH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_ViewDeletedJournalH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_deleteby" v-model="M_GL_ViewDeletedJournalH.deleteby"  ref="ref_deleteby"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_deletesource" v-model="M_GL_ViewDeletedJournalH.deletesource"  ref="ref_deletesource"/>
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
		Module:"GL",
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

            M_GL_ViewDeletedJournalH :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finperiod: 0,
                finyear: 0,
                trxdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                referenceno: '',
                cashierno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                deleteby: '',
                deletedate: '',
                sourcemodulecd: '',
                deletesource: '',
                controlsequenceno: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                rowid: 0,
                documentcount: '',
                batchtotal: '',
                basecurrencyd: '',
                currencybasesign: '',
                baseamountdebit: '',
                currencytrxsign: '',
                trxamountdebit: '',
                baseamountcredit: '',
                trxamountcredit: '',
                accountingperiod: '',
                basebalance: '',
                trxbalance: '',
                debitcredit: '',
                basecurrencycd: '',
                debitamt: '',
                creditamt: '',
                balance: ''
                    }
            ,
            PI_batchno: { 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: 'Batch No', 
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
                cLabel: 'Balance', 
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
                cRadioDefaultOption: '', 
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
                cType: 'decimal',
                cDecimal: 2, 
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
            PI_deleteby: { 
                cValidate :'', 
                cName: 'deleteby', 
                cLabel: 'Delete By', 
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
            PI_deletesource: { 
                cValidate :'', 
                cName: 'deletesource', 
                cLabel: 'Delete Source', 
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ViewDeletedJournalH = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                journalno: 0,
                trxtype: '',
                modulecd: '',
                journaldate: '',
                finperiod: 0,
                finyear: 0,
                trxdate: '',
                descs: '',
                currencycd: '',
                currencyrate: '0',
                referenceno: '',
                cashierno: '',
                roughbookstatus: '',
                batchno: 0,
                ledgerflag: '',
                journalsource: '',
                status: '',
                auditstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                deleteby: '',
                deletedate: '',
                sourcemodulecd: '',
                deletesource: '',
                controlsequenceno: 0,
                debtorcd: '',
                creditorcd: '',
                bankcd: '',
                rowid: 0,
                documentcount: '',
                batchtotal: '',
                basecurrencyd: '',
                currencybasesign: '',
                baseamountdebit: '',
                currencytrxsign: '',
                trxamountdebit: '',
                baseamountcredit: '',
                trxamountcredit: '',
                accountingperiod: '',
                basebalance: '',
                trxbalance: '',
                debitcredit: '',
                basecurrencycd: '',
                debitamt: '',
                creditamt: '',
                balance: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
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
                this.M_GL_ViewDeletedJournalH = {
                  subportfoliocd: data.subportfoliocd,
                  journalno: data.journalno,
                  trxtype: data.trxtype,
                  modulecd: data.modulecd,
                  journaldate: this.momentDateFormatting(data.journaldate, 'DD/MM/YYYY') +" | Accounting Period : "+ data.finperiod + "/" + data.finyear,
                  finperiod: data.finperiod,
                  finyear: data.finyear,
                  trxdate: this.momentDateFormatting(data.trxdate, 'DD/MM/YYYY'),
                  descs: data.descs,
                  currencycd: data.currencycd,
                  currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                  referenceno: data.referenceno,
                  cashierno: data.cashierno,
                  roughbookstatus: data.roughbookstatus,
                  batchno: data.batchno,
                  ledgerflag: data.ledgerflag,
                  journalsource: data.journalsource,
                  status: data.status,
                  auditstatus: data.auditstatus,
                  remarks: data.remarks,
                  userinput: data.userinput,
                  useredit: data.useredit,
                  timeinput: data.timeinput,
                  timeedit: data.timeedit,
                  lastupdatestamp: record.LastUpdateStamp,
                  deleteby: data.deleteby,
                  deletedate: data.deletedate,
                  sourcemodulecd: data.sourcemodulecd,
                  deletesource: data.deletesource,
                  controlsequenceno: data.controlsequenceno,
                  debtorcd: data.debtorcd,
                  creditorcd: data.creditorcd,
                  bankcd: data.bankcd,
                  rowid: data.rowid,
                  documentcount: data.documentcount,
                  batchtotal: data.batchtotal,
                  basecurrencyd: data.basecurrencyd,
                  currencybasesign: data.currencybasesign,
                  baseamountdebit: data.baseamountdebit,
                  currencytrxsign: data.currencytrxsign,
                  trxamountdebit: data.trxamountdebit,
                  baseamountcredit: data.baseamountcredit,
                  trxamountcredit: data.trxamountcredit,
                  accountingperiod: data.accountingperiod,
                  basebalance: data.basebalance,
                  trxbalance: data.trxbalance,
                  debitcredit: data.debitcredit,
                  basecurrencycd: data.basecurrencycd,
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

