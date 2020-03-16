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


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span-form">
                    Debit Section                  
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
                                        <ABSInputSelectList @change="OndebitdocChange" :prop="PI_debitdoc" :value="M_GL_LedgerAllocationDetail.debitdoc" :label="M_GL_LedgerAllocationDetail.debitdocLabel" ref="ref_debitdoc"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_descsd" v-model="M_GL_LedgerAllocationDetail.descsd"  ref="ref_descsd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitreferenceno" v-model="M_GL_LedgerAllocationDetail.debitreferenceno"  ref="ref_debitreferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_journaldated" v-model="M_GL_LedgerAllocationDetail.journaldated"  ref="ref_journaldated" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_trxtyped" v-model="M_GL_LedgerAllocationDetail.trxtyped"  ref="ref_trxtyped" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_trxdated" v-model="M_GL_LedgerAllocationDetail.trxdated"  ref="ref_trxdated" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_accperiodd" v-model="M_GL_LedgerAllocationDetail.accperiodd"  ref="ref_accperiodd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currd" v-model="M_GL_LedgerAllocationDetail.currd"  ref="ref_currd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baseamtd" v-model="M_GL_LedgerAllocationDetail.baseamtd"  ref="ref_baseamtd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxamtd" v-model="M_GL_LedgerAllocationDetail.trxamtd"  ref="ref_trxamtd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocationbaseamtd" v-model="M_GL_LedgerAllocationDetail.allocationbaseamtd"  ref="ref_allocationbaseamtd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocationdebittrxamt" v-model="M_GL_LedgerAllocationDetail.allocationdebittrxamt"  ref="ref_allocationdebittrxamt"/>
                                      </b-col>
                                    </b-row>
                                        <div class="div-collapse">
                                          <span class="master-span-form">
                                              Credit Section
                                          </span>
                                        </div> 
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditdocChange" :prop="PI_creditdoc" :value="M_GL_LedgerAllocationDetail.creditdoc" :label="M_GL_LedgerAllocationDetail.creditdocLabel" ref="ref_creditdoc"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_descsc" v-model="M_GL_LedgerAllocationDetail.descsc"  ref="ref_descsc" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_creditreferenceno" v-model="M_GL_LedgerAllocationDetail.creditreferenceno"  ref="ref_creditreferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_journaldatec" v-model="M_GL_LedgerAllocationDetail.journaldatec"  ref="ref_journaldatec" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_trxtypec" v-model="M_GL_LedgerAllocationDetail.trxtypec"  ref="ref_trxtypec" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_trxdatec" v-model="M_GL_LedgerAllocationDetail.trxdatec"  ref="ref_trxdatec" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_accperiodc" v-model="M_GL_LedgerAllocationDetail.accperiodc"  ref="ref_accperiodc" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currc" v-model="M_GL_LedgerAllocationDetail.currc"  ref="ref_currc" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baseamtc" v-model="M_GL_LedgerAllocationDetail.baseamtc"  ref="ref_baseamtc"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxamtc" v-model="M_GL_LedgerAllocationDetail.trxamtc"  ref="ref_trxamtc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocationbaseamtc" v-model="M_GL_LedgerAllocationDetail.allocationbaseamtc"  ref="ref_allocationbaseamtc"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocationcredittrxamt" v-model="M_GL_LedgerAllocationDetail.allocationcredittrxamt"  ref="ref_allocationcredittrxamt"/>
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
			Module:"GL",
            propList: {
                initialWhere:"Status = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_LedgerAllocationDetail :{
              subportfoliocd: this.getDataUser().SubPortfolioCd,
              debitdoc: '',
              debitdocLabel: '',
              creditdoc: '',
              creditdocLabel: '',
              debitreferenceno: '',
              creditreferenceno: '',
              journaldated: '',
              journaldatec: '',
              trxtyped: '',
              trxtypec: '',
              trxdated: '',
              trxdatec: '',
              accperiodd: '',
              accperiodc: '',
              currd: '',
              currc: '',
              baseamtd: '',
              baseamtc: '',
              trxamtd: '',
              trxamtc: '',
              allocationbaseamtd: '0.00',
              allocationbaseamtc: '0.00',
              allocationdebittrxamt: '0.00',
              allocationcredittrxamt: '0.00'
            },
            PI_debitdoc: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLLedgerJournal'    , 
                    ColumnDB: 'JournalNo'   , 
                    InitialWhere: "ModuleCd='GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debitdoc', 
                cLabel: 'Debit Document ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'JournalNo,Descs' ,
            }, 
            PI_descsd: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitreferenceno: { 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldated: { 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtyped: { 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxdated: { 
                cLabel: 'Trans. Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_accperiodd: { 
                cLabel: 'Accounting Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currd: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_baseamtd: { 
                cLabel: 'Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_trxamtd: { 
                cLabel: 'Other Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_allocationbaseamtd: { 
                cValidate :'', 
                cName: 'allocationbaseamt', 
                cLabel: 'Allocation Amount', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocationdebittrxamt: { 
                cLabel: 'Allocation Other Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_creditdoc: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLLedgerJournal'    , 
                    ColumnDB: 'JournalNo'   , 
                    InitialWhere: "ModuleCd='GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'creditdoc', 
                cLabel: 'Credit Document ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'JournalNo,Descs' ,
            }, 
            PI_descsc: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_creditreferenceno: { 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_journaldatec: { 
                cLabel: 'Journal Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtypec: { 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxdatec: { 
                cLabel: 'Trans. Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_accperiodc: { 
                cLabel: 'Accounting Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currc: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_baseamtc: { 
                cLabel: 'Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_trxamtc: { 
                cLabel: 'Other Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_allocationbaseamtc: { 
                cValidate :'', 
                cName: 'allocationbaseamt', 
                cLabel: 'Allocation Amount', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocationcredittrxamt: { 
                cLabel: 'Allocation Other Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      getJournalData(journalno,debitcredit) {
        var param = {
          OptionFunctionCd: 'GetJournalLedger',
          ModuleCd: this.Module,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          JournalNo: journalno,
          AccountCd: this.DataRowPage1.AccountCd,
          DebitCredit: debitcredit,
          AllocationNo: this.DataRowPage1.AllocationNo
        }

        this.FnDynamicFunction(param)
        .then(FnOpt2 => {
          if (FnOpt2 == null) return
          if (FnOpt2.length > 0) { 
            var data = FnOpt2[0]
            if (debitcredit == 'D') {
              this.M_GL_LedgerAllocationDetail.debitreferenceno = data.ReferenceNo
              this.M_GL_LedgerAllocationDetail.journaldated = this.momentDateFormatting(data.JournalDate, 'DD/MM/YYYY')
              this.M_GL_LedgerAllocationDetail.trxtyped = data.TrxType
              // this.M_GL_LedgerAllocationDetail.trxdated = data.ReferenceNo
              this.M_GL_LedgerAllocationDetail.currd = data.CurrencyCd
              this.M_GL_LedgerAllocationDetail.accperiodd = data.FinPeriod + '-' + data.FinYear
              this.M_GL_LedgerAllocationDetail.baseamtd = data.BaseAmt && data.BaseAmt != '' && data.BaseAmt > 0 ? this.isCurrency(data.BaseAmt, this.decimal) : '0.00'
              this.M_GL_LedgerAllocationDetail.trxamtd = data.TrxAmt && data.TrxAmt != '' && data.TrxAmt > 0 ? this.isCurrency(data.TrxAmt, this.decimal) : '0.00'
              // this.M_GL_LedgerAllocationDetail.allocationbaseamtd = data.ReferenceNo
              // this.M_GL_LedgerAllocationDetail.allocationdebittrxamt = data.ReferenceNo
            }
            else if (debitcredit == 'C') {
              this.M_GL_LedgerAllocationDetail.creditreferenceno = data.ReferenceNo
              this.M_GL_LedgerAllocationDetail.journaldatec = this.momentDateFormatting(data.JournalDate, 'DD/MM/YYYY')
              this.M_GL_LedgerAllocationDetail.trxtypec = data.TrxType
              // this.M_GL_LedgerAllocationDetail.trxdated = data.ReferenceNo
              this.M_GL_LedgerAllocationDetail.currc = data.CurrencyCd
              this.M_GL_LedgerAllocationDetail.accperiodc = data.FinPeriod + '-' + data.FinYear
              this.M_GL_LedgerAllocationDetail.baseamtc = data.BaseAmt && data.BaseAmt != '' && data.BaseAmt > 0 ? this.isCurrency(data.BaseAmt, this.decimal) : '0.00'
              this.M_GL_LedgerAllocationDetail.trxamtc = data.TrxAmt && data.TrxAmt != '' && data.TrxAmt > 0 ? this.isCurrency(data.TrxAmt, this.decimal) : '0.00'
              // this.M_GL_LedgerAllocationDetail.allocationbaseamtd = data.ReferenceNo
              // this.M_GL_LedgerAllocationDetail.allocationdebittrxamt = data.ReferenceNo
            }
          }
        })
      },
        OndebitdocChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAllocationDetail.debitdoc = data.id
            this.M_GL_LedgerAllocationDetail.debitdocLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.getJournalData(data.id, 'D')
            }
        })
        this.$forceUpdate()
        },
        OncreditdocChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAllocationDetail.creditdoc = data.id
            this.M_GL_LedgerAllocationDetail.creditdocLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.getJournalData(data.id, 'C')
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
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_GL_LedgerAllocationDetail.status = data.Status 

            // Lookup debitdoc
            var whered = " ModuleCd='GL' AND DebitCredit='D' And SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AccountCd = '" + data.AccountCd + "' "
            this.PI_debitdoc.dataLookUp.InitialWhere = whered
            // this.$refs.ref_debitdoc.onChangeTriggered = true
            // this.$refs.ref_debitdoc.prop.cDefault = this.M_GL_LedgerAllocationDetail.debitdoc

            // Lookup creditdoc
            var wherec = " ModuleCd='GL' AND DebitCredit='C' And SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AccountCd = '" + data.AccountCd + "' "
            this.PI_creditdoc.dataLookUp.InitialWhere = wherec
            // this.$refs.ref_creditdoc.onChangeTriggered = true
            // this.$refs.ref_creditdoc.prop.cDefault = this.M_GL_LedgerAllocationDetail.debitdoc

            // @AllocationNo='ACQ-000036',
            // @AccountCd='100-010-001'
            this.propList.initialWhere =" AllocationNo = '" + data.AllocationNo + "' AND AccountCd = '" + data.AccountCd + "'"

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AllocationNo: this.M_GL_LedgerAllocationDetail.allocationno,
                AccountCd: this.M_GL_LedgerAllocationDetail.accountcd,
                Status: this.M_GL_LedgerAllocationDetail.status,
                DebitDoc: this.M_GL_LedgerAllocationDetail.debitdoc == '' || this.M_GL_LedgerAllocationDetail.debitdoc == null ? 'NULL' : this.M_GL_LedgerAllocationDetail.debitdoc ,
                DebitReferenceNo: this.M_GL_LedgerAllocationDetail.debitreferenceno,
                CreditDoc: this.M_GL_LedgerAllocationDetail.creditdoc == '' || this.M_GL_LedgerAllocationDetail.creditdoc == null ? 'NULL' : this.M_GL_LedgerAllocationDetail.creditdoc ,
                CreditReferenceNo: this.M_GL_LedgerAllocationDetail.creditreferenceno,
                AllocationBaseAmt: this.M_GL_LedgerAllocationDetail.allocationbaseamt ? this.replaceAllString(this.M_GL_LedgerAllocationDetail.allocationbaseamt,',','','number') : 0 ,
                AllocationTrxAmtD: this.M_GL_LedgerAllocationDetail.allocationdebittrxamt,
                AllocationTrxAmtC: this.M_GL_LedgerAllocationDetail.allocationcredittrxamt,
                UserInput: this.getDataUser().UserId                 
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AllocationNo: this.M_GL_LedgerAllocationDetail.allocationno,
                AccountCd: this.M_GL_LedgerAllocationDetail.accountcd,
                Status: this.M_GL_LedgerAllocationDetail.status,
                SequenceNo: this.M_GL_LedgerAllocationDetail.sequenceno,
                DebitDoc: this.M_GL_LedgerAllocationDetail.debitdoc == '' || this.M_GL_LedgerAllocationDetail.debitdoc == null ? 'NULL' : this.M_GL_LedgerAllocationDetail.debitdoc ,
                DebitReferenceNo: this.M_GL_LedgerAllocationDetail.debitreferenceno,
                CreditDoc: this.M_GL_LedgerAllocationDetail.creditdoc == '' || this.M_GL_LedgerAllocationDetail.creditdoc == null ? 'NULL' : this.M_GL_LedgerAllocationDetail.creditdoc ,
                CreditReferenceNo: this.M_GL_LedgerAllocationDetail.creditreferenceno,
                AllocationBaseAmt: this.M_GL_LedgerAllocationDetail.allocationbaseamt ? this.replaceAllString(this.M_GL_LedgerAllocationDetail.allocationbaseamt,',','','number') : 0 ,
                AllocationTrxAmtD: this.M_GL_LedgerAllocationDetail.allocationdebittrxamt,
                AllocationTrxAmtC: this.M_GL_LedgerAllocationDetail.allocationcredittrxamt,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_LedgerAllocationDetail.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
        M_ClearForm(){
          this.M_GL_LedgerAllocationDetail = {
            subportfoliocd: this.getDataUser().SubPortfolioCd,
            debitdoc: '',
            debitdocLabel: '',
            creditdoc: '',
            creditdocLabel: '',
            debitreferenceno: '',
            creditreferenceno: '',
            journaldated: '',
            journaldatec: '',
            trxtyped: '',
            trxtypec: '',
            trxdated: '',
            trxdatec: '',
            accperiodd: '',
            accperiodc: '',
            currd: '',
            currc: '',
            baseamtd: '',
            baseamtc: '',
            trxamtd: '',
            trxamtc: '',
            allocationbaseamtd: '0.00',
            allocationbaseamtc: '0.00',
            allocationdebittrxamt: '0.00',
            allocationcredittrxamt: '0.00'
          }  		
        },
        M_New(){
            let data = this.$store.getters.GetPage1Data
            console.log(data)
            this.M_GL_LedgerAllocationDetail.status = data.Status
            this.M_GL_LedgerAllocationDetail.allocationno = data.AllocationNo
            this.M_GL_LedgerAllocationDetail.accountcd = data.AccountCd

            this.$refs.ref_debitdoc.focus()
        },
        M_Edit(){
          this.$refs.ref_allocationbaseamtd.focus()
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
          var dataDelete = []

          data.forEach((value) => {
              dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              SequenceNo: value.SequenceNo,
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
              this.$parent.resultDelete("Deleting Data Successfully")
          })
        },        
        getDataBy (record) {
            let data1 = this.$store.getters.GetPage1Data
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                subportfoliocd: record.SubPortfolioCd,
                allocationno: record.AllocationNo,
                accountcd: record.AccountCd,
                sequenceno: record.SequenceNo,
                status: data1.Status
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_GL_LedgerAllocationDetail = {
                  subportfoliocd: data.subportfoliocd,
                  allocationno: data.allocationno,
                  sequenceno: data.sequenceno,
                  accountcd: data.accountcd,
                  debitdoc: data.debitdoc,
                  debitreferenceno: data.debitreferenceno,
                  creditdoc: data.creditdoc,
                  creditreferenceno: data.creditreferenceno,
                  allocationbaseamt: data.allocationbaseamt,
                  allocationdebittrxamt: data.allocationdebittrxamt,
                  allocationcredittrxamt: data.allocationcredittrxamt,
                  allocationtrxamt: data.allocationtrxamt,
                  userinput: data.userinput,
                  useredit: data.useredit,
                  timeinput: data.timeinput,
                  timeedit: data.timeedit,
                  lastupdatestamp: record.LastUpdateStamp,
                  controlsequenceno: data.controlsequenceno,
                  rowid: data.rowid,
                  descsd: data.descsd,
                  journaldated: data.journaldated,
                  trxtyped: data.trxtyped,
                  transdated: data.transdated,
                  accperiodd: data.accperiodd,
                  currd: data.currd,
                  baseamountd: data.baseamountd,
                  baseamtd: data.baseamtd,
                  descsc: data.descsc,
                  journaldatec: data.journaldatec,
                  trxtypec: data.trxtypec,
                  trxamtd: data.trxamtd,
                  trxdatec: data.trxdatec,
                  finperiodc: data.finperiodc,
                  currc: data.currc,
                  baseamtc: data.baseamtc,
                  trxamtc: data.trxamtc
                }
                 

                this.M_GL_LedgerAllocationDetail.debitdocLabel = this.M_GL_LedgerAllocationDetail.debitdoc != null ? data.debitdoc + this.separator + data.descsd :'' 
                this.M_GL_LedgerAllocationDetail.creditdocLabel = this.M_GL_LedgerAllocationDetail.creditdoc != null ? data.creditdoc + this.separator + data.descsc :'' 
  

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

