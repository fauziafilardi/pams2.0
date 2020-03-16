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
                                        <ABSCompute :prop="PI_lineno" v-model="M_GL_JournalEntryDetail3.lineno"  ref="ref_lineno"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_linepromp" v-model="M_GL_JournalEntryDetail3.linepromp"  ref="ref_linepromp"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_JournalEntryDetail3.descs"  ref="ref_descs"/> -->
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_GL_JournalEntryDetail3.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_GL_JournalEntryDetail3.accountcd" :label="M_GL_JournalEntryDetail3.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_GL_JournalEntryDetail3.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_JournalEntryDetail3.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baseamt" v-model="M_GL_JournalEntryDetail3.baseamt"  ref="ref_baseamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OndebitcreditChange" :prop="PI_debitcredit" v-model="M_GL_JournalEntryDetail3.debitcredit"  ref="ref_debitcredit" />
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
                initialWhere:"JournalNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: ' [LineNo] DESC ', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_JournalEntryDetail3 :{
                journalno: 0,
                lineno: 0,
                descs: '',
                accountcd: '',
                currencyrate: '0',
                trxamt: '0',
                baseamt: '0',
                debitcredit: '',
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
                t0descs: '',
                t1descs: '',
                t2descs: '',
                t3descs: '',
                t4descs: '',
                t5descs: '',
                t6descs: '',
                t7descs: '',
                t8descs: '',
                t9descs: '',
                accountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_lineno: { 
                cLabel: 'Line No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_linepromp: { 
                cLabel: 'Line Promp', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName:'descsss', 
                cLabel:'Description', 
                cLabelSize: 4, 
                cOrder:9, 
                cKey: false,
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 6, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Other Amount', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Rate', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_baseamt: { 
                cValidate :'required', 
                cName: 'baseamt', 
                cLabel: 'Amount ', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitcredit: { 
                cValidate :'', 
                cName: 'debitcredit', 
                cId: 'rdbdebitcredit', 
                cRadioOptions: [{ text: 'Debit', value: 'D' },{ text: 'Credit', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'D/C', 
                cLabelSize: 4, 
                cOrder: 14, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },

            DataHeader: {
                CurrencyCd: '',
                TrxType: '',
                CurrencyRate: '',
                Operator: '',
                RoughBookStatus: '',
                JournalDate: '',
                Descs: ''
            },

            AmountJournal: null,
            GLSpec: []
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
        getSpec() {
            var param = {
                OptionFunctionCd: 'GetGLSpecification',
                ModuleCd: this.Module
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2.length > 0) {
                    this.GLSpec = FnOpt2
                } 
            })
        },
        SetTrxAmount(){
            var param = {
                OptionFunctionCd: 'GetCurrencyRate',
                ModuleCd: this.Module,
                JournalNo: this.DataRowPage1.JournalNo
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2.length > 0) {
                    var data = FnOpt2[0]
                    if (this.DataHeader.CurrencyCd == this.GLSpec[0].BaseCurrencyCd) {
                        this.PI_trxamt.cProtect = true
                        this.PI_currencyrate.cProtect = true
                        if (this.inputStatus == 'EDIT') {
                            this.M_GL_JournalEntryDetail3.trxamt = this.isCurrency(0, this.decimal)
                        }
                        this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(data.CurrencyRate, this.decimal)
                    }
                    else {
                        this.PI_trxamt.cProtect = false
                        this.PI_currencyrate.cProtect = false
                    }
                } 
            })
        },
        GetDataFromH() {
            var param = {
                OptionFunctionCd: 'GetJournalRoughBook',
                ModuleCd: this.Module,
                JournalNo: this.DataRowPage1.JournalNo
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) {
                    var data = FnOpt2[0]
                    this.DataHeader.CurrencyCd = data.CurrencyCd
                    this.DataHeader.TrxType = data.TrxType
                    this.DataHeader.CurrencyRate = data.CurrencyRate
                    this.DataHeader.Operator = data.Operator
                    this.DataHeader.RoughBookStatus = data.RoughBookStatus
                    this.DataHeader.JournalDate = data.JournalDate
                    this.DataHeader.Descs = data.Descs

                    // this.InitialPosting()
                } 
            })
        },
        InitialPosting() {
            var param = {
                OptionFunctionCd: 'GetAmountJournal',
                ModuleCd: this.Module,
                JournalNo: this.DataRowPage1.JournalNo,
                Field: 'Max',
                Flag: ''
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) {
                    var data = FnOpt2[0]
                    this.AmountJournal = data
                    if (this.inputStatus != 'EDIT') {
                        this.M_GL_JournalEntryDetail3.nextlineno = data.NextLineNo && data.NextLineNo != '' ? data.NextLineNo : 1
                    }

                    this.PI_descs.cProtect = false
                    this.GetTransTypeGL()
                } 
            })
        },
        GetTransTypeGL() {
            var param = {
                OptionFunctionCd: 'GetTransTypeGL',
                ModuleCd: this.Module,
                TrxType: this.DataRowPage1.TrxType
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) { 
                    var data = FnOpt2[0]
                    this.M_GL_JournalEntryDetail3.predefinedjournalcd = data.PreDefinedJournalCd
                    this.M_GL_JournalEntryDetail3.linedescs = data.LineDescs

                    if (!data.PreDefinedJournalCd || data.PreDefinedJournalCd == "") {
                        if (this.inputStatus != 'EDIT') {
                            this.M_GL_JournalEntryDetail3.trxamt = this.isCurrency(0, this.decimal)
                            if (this.DataHeader.CurrencyRate && this.DataHeader.CurrencyRate != '') {
                                this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(this.DataHeader.CurrencyRate, this.decimal)
                            }
                            else {
                                this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(0, this.decimal)
                            }

                            var base = 0
                            if (this.DataHeader.Operator == '*') {
                                base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') * this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                            }
                            else if (this.DataHeader.Operator == '/') {
                                if (this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number') > 0) {
                                    base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') / this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                }
                                this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                            }
                            else if (this.DataHeader.Operator == '+') {
                                base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') + this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                            }
                            else if (this.DataHeader.Operator == '-') {
                                base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') - this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                            }

                            this.M_GL_JournalEntryDetail3.linepromp = "(auto)"
                            this.M_GL_JournalEntryDetail3.descs = this.DataHeader.Descs
                        }

                        if (this.AmountJournal != null) {
                            if (this.inputStatus != 'EDIT') {
                                this.M_GL_JournalEntryDetail3.nextlineno = data.NextLineNo && data.NextLineNo != '' ? data.NextLineNo : 1
                            }

                            if (this.M_GL_JournalEntryDetail3.nextlineno > 1) {
                                if (this.M_GL_JournalEntryDetail3.linedescs == 'Y') {
                                    this.PI_descs.cProtect = false
                                }
                                else {
                                    var param = {
                                        OptionFunctionCd: 'GetAmountJournal',
                                        ModuleCd: this.Module,
                                        JournalNo: this.DataRowPage1.JournalNo,
                                        Field: 'BDes',
                                        Flag: 'B'
                                    }

                                    this.FnDynamicFunction(param)
                                    .then(FnOpt11 => {
                                        if (FnOpt11 == null) return
                                        if (FnOpt11 != null) {
                                            var data11 = FnOpt11[0]
                                            if (this.M_GL_JournalEntryDetail3.nextlineno > 1) {
                                                this.M_GL_JournalEntryDetail3.descs = data11.Descs
                                            }
                                            else {
                                                this.M_GL_JournalEntryDetail3.descs = this.DataHeader.Descs
                                            }

                                            if (this.M_GL_JournalEntryDetail3.linedescs == 'C') {
                                                this.PI_descs.cProtect = false
                                            }
                                            else if (this.M_GL_JournalEntryDetail3.linedescs == 'N') {
                                                if (this.inputStatus == 'EDIT') {
                                                    this.PI_descs.cProtect = true
                                                }
                                                else {
                                                    this.PI_descs.cProtect = false
                                                }
                                            }
                                        } 
                                    })
                                }
                            }
                        }
                    }
                    else {
                        var param = {
                            OptionFunctionCd: 'GetPredefinedJournal',
                            ModuleCd: this.Module,
                            JournalNo: this.DataRowPage1.JournalNo,
                            LineNo: this.M_GL_JournalEntryDetail3.nextlineno,
                            PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                            Field: '',
                            Flag: ''
                        }

                        this.FnDynamicFunction(param)
                        .then(FnOpt11 => {
                            if (FnOpt11 == null) return
                            if (FnOpt11 != null) {
                                var data11 = FnOpt11[0]
                                this.M_GL_JournalEntryDetail3.baselineno = data11.BaseLineNo
                                this.M_GL_JournalEntryDetail3.linepromp = data11.LinePrompt

                                if (this.inputStatus == 'NEW') {
                                    //descs
                                    if (data11.Descs) {
                                        if (data11.Descs == '..') {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: (this.M_GL_JournalEntryDetail3.nextlineno - 1),
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'DS',
                                                Flag: '3'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOpt12 => {
                                                if (FnOpt12 == null) return
                                                if (FnOpt12.length > 0) {
                                                    this.M_GL_JournalEntryDetail3.descs = FnOpt12[0].Descs
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.descs = ""
                                                }
                                            })
                                        }
                                        else if (data11.Descs.substring(0, 1) == '@') {
                                            var x = '1'
                                            if (data11.Descs.substring((data11.Descs.length - 1), 1) == 'N') {
                                                x = '1'
                                            }
                                            else if (data11.Descs.substring((data11.Descs.length - 1), 1) == 'A') {
                                                x = '2'
                                            }

                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: data11.Descs.substring(2, (data11.Descs.length - 2)),
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'DS',
                                                Flag: x
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOpt13 => {
                                                if (FnOpt13 == null) return
                                                if (FnOpt13.length > 0) {
                                                    this.M_GL_JournalEntryDetail3.descs = FnOpt13[0].Descs
                                                }
                                            })
                                        }
                                        else {
                                            this.M_GL_JournalEntryDetail3.descs = data11.Descs
                                        }
                                    }

                                    //accountcd
                                    if (data11.AccountCd) {
                                        if (data11.AccountCd == '..') {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: (this.M_GL_JournalEntryDetail3.nextlineno - 1),
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'AC',
                                                Flag: '1'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOptaccCd => {
                                                if (FnOptaccCd == null) return
                                                if (FnOptaccCd.length > 0) {
                                                    if (this.M_GL_JournalEntryDetail3.nextlineno > 1) {
                                                        this.M_GL_JournalEntryDetail3.accountcd = FnOptaccCd[0].AccountCd
                                                        this.M_GL_JournalEntryDetail3.accountcdLabel = FnOptaccCd[0].AccountCd
                                                    }
                                                }
                                                // else {
                                                //     this.M_GL_JournalEntryDetail3.accountcd = ""
                                                // }
                                            })
                                        }
                                        else if (data11.AccountCd.substring(0, 1) == '@') {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: data11.AccountCd.substring(2),
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'AC',
                                                Flag: '2'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOptaccCd1 => {
                                                if (FnOptaccCd1 == null) return
                                                if (FnOptaccCd1.length > 0) {
                                                    this.M_GL_JournalEntryDetail3.accountcd = FnOptaccCd1[0].AccountCd
                                                    this.M_GL_JournalEntryDetail3.accountcdLabel = FnOptaccCd1[0].AccountCd
                                                }
                                            })
                                        }
                                        else {
                                            this.M_GL_JournalEntryDetail3.accountcd = data11.AccountCd
                                            this.M_GL_JournalEntryDetail3.accountcdLabel = data11.AccountCd
                                        }
                                    }

                                    //currencyrate
                                    if (!data11.CurrencyRate || data11.CurrencyRate == '') {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: 0,
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'RT',
                                                Flag: '1'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOptCurrRate => {
                                                if (FnOptCurrRate == null) return
                                                if (FnOptCurrRate.length > 0) {
                                                    this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(FnOptCurrRate[0].Rate, this.decimal)
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(this.DataHeader.CurrencyRate, this.decimal)
                                                }
                                            })
                                        }
                                        else if (data11.CurrencyRate == '..') {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: (this.M_GL_JournalEntryDetail3.nextlineno - 1),
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'RT',
                                                Flag: '2'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOptCurrRate1 => {
                                                if (FnOptCurrRate1 == null) return
                                                if (FnOptCurrRate1.length > 0) {
                                                    if (this.M_GL_JournalEntryDetail3.nextlineno > 1) {
                                                        this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(FnOptCurrRate1[0].Rate, this.decimal)
                                                    }
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(this.DataHeader.CurrencyRate, this.decimal)
                                                }
                                            })
                                        }
                                        else {
                                            if (
                                                data11.CurrencyRate.toString().substring(0,1) == '*' ||
                                                data11.CurrencyRate.toString().substring(0,1) == '+' ||
                                                data11.CurrencyRate.toString().substring(0,1) == '-' ||
                                                data11.CurrencyRate.toString().substring(0,1) == '/' ||
                                                data11.CurrencyRate.toString().substring(0,1) == '%'
                                            ) {
                                                var param = {
                                                    OptionFunctionCd: 'GetPredefinedJournal',
                                                    ModuleCd: this.Module,
                                                    JournalNo: this.DataRowPage1.JournalNo,
                                                    LineNo: this.M_GL_JournalEntryDetail3.baselineno,
                                                    PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                    Field: 'RT',
                                                    Flag: '3'
                                                }

                                                this.FnDynamicFunction(param)
                                                .then(FnOptCurrRate1 => {
                                                    if (FnOptCurrRate1 == null) return
                                                    if (FnOptCurrRate1.length > 0) {
                                                        var rate = 0
                                                        if (data11.CurrencyRate.toString().substring(0,1) == '*') {
                                                            rate = parseFloat(FnOptCurrRate1[0].Rate) * parseFloat(data11.CurrencyRate.toString().substring(2, data11.CurrencyRate.length))
                                                        }
                                                        else if (data11.CurrencyRate.toString().substring(0,1) == '+') {
                                                            rate = parseFloat(FnOptCurrRate1[0].Rate) + parseFloat(data11.CurrencyRate.toString().substring(2, data11.CurrencyRate.length))
                                                        }
                                                        else if (data11.CurrencyRate.toString().substring(0,1) == '-') {
                                                            rate = parseFloat(FnOptCurrRate1[0].Rate) - parseFloat(data11.CurrencyRate.toString().substring(2, data11.CurrencyRate.length))
                                                        }
                                                        else if (data11.CurrencyRate.toString().substring(0,1) == '/') {
                                                            rate = parseFloat(FnOptCurrRate1[0].Rate) / parseFloat(data11.CurrencyRate.toString().substring(2, data11.CurrencyRate.length))
                                                        }
                                                        else if (data11.CurrencyRate.toString().substring(0,1) == '%') {
                                                            rate = parseFloat(FnOptCurrRate1[0].Rate) * parseFloat(data11.CurrencyRate.toString().substring(2, data11.CurrencyRate.length)) / 100
                                                        }
                                                        
                                                        this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(rate, this.decimal)
                                                    }
                                                    else {
                                                        this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(this.DataHeader.CurrencyRate, this.decimal)
                                                    }
                                                })
                                            }
                                            else {
                                                this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(data11.CurrencyRate, this.decimal)
                                            }
                                        }

                                    //otheramt
                                    if (!data11.TrxAmt || data11.TrxAmt == '') {
                                        this.M_GL_JournalEntryDetail3.trxamt = this.isCurrency(0, this.decimal)
                                    }
                                    else if (data11.TrxAmt == '..') {
                                        var param = {
                                            OptionFunctionCd: 'GetPredefinedJournal',
                                            ModuleCd: this.Module,
                                            JournalNo: this.DataRowPage1.JournalNo,
                                            LineNo: (this.M_GL_JournalEntryDetail3.nextlineno - 1),
                                            PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                            Field: 'OA',
                                            Flag: '1'
                                        }

                                        this.FnDynamicFunction(param)
                                        .then(FnOptOtherAmt => {
                                            if (FnOptOtherAmt == null) return
                                            if (FnOptOtherAmt.length > 0) {
                                                if (this.M_GL_JournalEntryDetail3.nextlineno > 1) {
                                                    this.M_GL_JournalEntryDetail3.trxamt = this.isCurrency(FnOptOtherAmt[0].TrxAmt, this.decimal)
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.trxamt = this.isCurrency(0, this.decimal)
                                                }
                                            }
                                        })
                                    }
                                    else {
                                        if (
                                            data11.TrxAmt.toString().substring(0,1) == '*' ||
                                            data11.TrxAmt.toString().substring(0,1) == '+' ||
                                            data11.TrxAmt.toString().substring(0,1) == '-' ||
                                            data11.TrxAmt.toString().substring(0,1) == '/' ||
                                            data11.TrxAmt.toString().substring(0,1) == '%'
                                        ) {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: this.M_GL_JournalEntryDetail3.baselineno,
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'OA',
                                                Flag: '2'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOptCurrRate1 => {
                                                if (FnOptCurrRate1 == null) return
                                                if (FnOptCurrRate1.length > 0) {
                                                    var amt = 0
                                                    if (data11.TrxAmt.toString().substring(0,1) == '*') {
                                                        amt = parseFloat(FnOptCurrRate1[0].Rate) * parseFloat(data11.TrxAmt.toString().substring(2, data11.TrxAmt.length))
                                                    }
                                                    else if (data11.TrxAmt.toString().substring(0,1) == '+') {
                                                        amt = parseFloat(FnOptCurrRate1[0].Rate) + parseFloat(data11.TrxAmt.toString().substring(2, data11.TrxAmt.length))
                                                    }
                                                    else if (data11.TrxAmt.toString().substring(0,1) == '-') {
                                                        amt = parseFloat(FnOptCurrRate1[0].Rate) - parseFloat(data11.TrxAmt.toString().substring(2, data11.TrxAmt.length))
                                                    }
                                                    else if (data11.TrxAmt.toString().substring(0,1) == '/') {
                                                        amt = parseFloat(FnOptCurrRate1[0].Rate) / parseFloat(data11.TrxAmt.toString().substring(2, data11.TrxAmt.length))
                                                    }
                                                    else if (data11.TrxAmt.toString().substring(0,1) == '%') {
                                                        amt = parseFloat(FnOptCurrRate1[0].Rate) * parseFloat(data11.TrxAmt.toString().substring(2, data11.TrxAmt.length)) / 100
                                                    }
                                                    
                                                    this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(amt, this.decimal)
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(0, this.decimal)
                                                }
                                            })
                                        }
                                        else {
                                            this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(data11.TrxAmt, this.decimal)
                                        }
                                    }

                                    //debitcredit
                                    if (data11.DebitCredit == 'D' || data11.DebitCredit == 'C') {
                                        this.M_GL_JournalEntryDetail3.debitcredit = data11.DebitCredit
                                    }
                                    else {
                                        var param = {
                                            OptionFunctionCd: 'GetPredefinedJournal',
                                            ModuleCd: this.Module,
                                            JournalNo: this.DataRowPage1.JournalNo,
                                            LineNo: this.M_GL_JournalEntryDetail3.baselineno,
                                            PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                            Field: 'DC',
                                            Flag: '1'
                                        }

                                        this.FnDynamicFunction(param)
                                        .then(FnOptDebitCredit => {
                                            if (FnOptDebitCredit == null) return
                                            if (FnOptDebitCredit.length > 0) {
                                                if (data11.DebitCredit == 'R') {
                                                    if (FnOptDebitCredit[0].DebitCredit == 'D') {
                                                        this.M_GL_JournalEntryDetail3.debitcredit = 'C'
                                                    }
                                                    else {
                                                        this.M_GL_JournalEntryDetail3.debitcredit = 'D'
                                                    }
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.debitcredit = FnOptDebitCredit[0].DebitCredit
                                                }
                                            }
                                        })
                                    }

                                    // baseamt
                                    if (data11.BaseAmt == 'D' || data11.BaseAmt == 'C') {
                                        var base = 0
                                        if (this.DataHeader.Operator == '*') {
                                            base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') * this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                            this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                                        }
                                        else if (this.DataHeader.Operator == '/') {
                                            if (this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number') > 0) {
                                                base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') / this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                            }
                                            this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                                        }
                                        else if (this.DataHeader.Operator == '+') {
                                            base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') + this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                            this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                                        }
                                        else if (this.DataHeader.Operator == '-') {
                                            base = this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt, ',', '', 'number') - this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate, ',', '', 'number')
                                            this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(base, this.decimal)
                                        }
                                    }
                                    else if (data11.BaseAmt == '..') {
                                        var param = {
                                            OptionFunctionCd: 'GetPredefinedJournal',
                                            ModuleCd: this.Module,
                                            JournalNo: this.DataRowPage1.JournalNo,
                                            LineNo: (this.M_GL_JournalEntryDetail3.nextlineno - 1),
                                            PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                            Field: 'AM',
                                            Flag: '1'
                                        }

                                        this.FnDynamicFunction(param)
                                        .then(FnOptBaseAmt => {
                                            if (FnOptBaseAmt == null) return
                                            if (FnOptBaseAmt.length > 0) {
                                                if (this.M_GL_JournalEntryDetail3.nextlineno > 1) {
                                                    this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(FnOptBaseAmt[0].BaseAmt, this.decimal)
                                                }
                                            }
                                            else {
                                                this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(0, this.decimal)
                                            }
                                        })
                                    }
                                    else {
                                        if (
                                            data11.BaseAmt.toString().substring(0,1) == '*' ||
                                            data11.BaseAmt.toString().substring(0,1) == '+' ||
                                            data11.BaseAmt.toString().substring(0,1) == '-' ||
                                            data11.BaseAmt.toString().substring(0,1) == '/' ||
                                            data11.BaseAmt.toString().substring(0,1) == '%'
                                        ) {
                                            var param = {
                                                OptionFunctionCd: 'GetPredefinedJournal',
                                                ModuleCd: this.Module,
                                                JournalNo: this.DataRowPage1.JournalNo,
                                                LineNo: this.M_GL_JournalEntryDetail3.baselineno,
                                                PredefinedJournalCd: this.M_GL_JournalEntryDetail3.predefinedjournalcd,
                                                Field: 'OA',
                                                Flag: '2'
                                            }

                                            this.FnDynamicFunction(param)
                                            .then(FnOptBaseAmt => {
                                                if (FnOptBaseAmt == null) return
                                                if (FnOptBaseAmt.length > 0) {
                                                    var amt = 0
                                                    if (data11.BaseAmt.toString().substring(0,1) == '*') {
                                                        amt = parseFloat(FnOptBaseAmt[0].BaseAmt) * parseFloat(data11.BaseAmt.toString().substring(2, data11.BaseAmt.length))
                                                    }
                                                    else if (data11.BaseAmt.toString().substring(0,1) == '+') {
                                                        amt = parseFloat(FnOptBaseAmt[0].BaseAmt) + parseFloat(data11.BaseAmt.toString().substring(2, data11.BaseAmt.length))
                                                    }
                                                    else if (data11.BaseAmt.toString().substring(0,1) == '-') {
                                                        amt = parseFloat(FnOptBaseAmt[0].BaseAmt) - parseFloat(data11.BaseAmt.toString().substring(2, data11.BaseAmt.length))
                                                    }
                                                    else if (data11.BaseAmt.toString().substring(0,1) == '/') {
                                                        amt = parseFloat(FnOptBaseAmt[0].BaseAmt) / parseFloat(data11.BaseAmt.toString().substring(2, data11.BaseAmt.length))
                                                    }
                                                    else if (data11.BaseAmt.toString().substring(0,1) == '%') {
                                                        amt = parseFloat(FnOptBaseAmt[0].BaseAmt) * parseFloat(data11.BaseAmt.toString().substring(2, data11.BaseAmt.length)) / 100
                                                    }
                                                    
                                                    this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(amt, this.decimal)
                                                }
                                                else {
                                                    this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(0, this.decimal)
                                                }
                                            })
                                        }
                                        else {
                                            this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(data11.BaseAmt, this.decimal)
                                        }
                                    }
                                }
                                else {
                                    this.M_GL_JournalEntryDetail3.baseamt = this.isCurrency(0, this.decimal)
                                    this.M_GL_JournalEntryDetail3.currencyrate = this.isCurrency(0, this.decimal)
                                    this.M_GL_JournalEntryDetail3.trxamt = this.isCurrency(0, this.decimal)
                                }
                            } 
                        })
                    }
                } 
            })
        },
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalEntryDetail3.accountcd = data.id
            this.M_GL_JournalEntryDetail3.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
        OndebitcreditChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{debitcredit}
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
            this.DataRow = data
            this.getSpec()
            this.GetDataFromH()
            console.log(data)
            

            if (data.RoughBookStatus == 'N') {
                this.$store.commit('setEditStatus', true)
                this.$store.commit('setDeleteStatus', true)
                this.$store.commit('setNewStatus', true)
            }
            else {
                this.$store.commit('setEditStatus', false)
                this.$store.commit('setDeleteStatus', false)
                this.$store.commit('setNewStatus', false)
            }
            
            this.M_GL_JournalEntryDetail3.journalno = data.JournalNo 
            this.propList.initialWhere ="JournalNo = '" + data.JournalNo + "'"
            

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                JournalNo: this.M_GL_JournalEntryDetail3.journalno,
                Descs: this.M_GL_JournalEntryDetail3.descs,
                AccountCd: this.M_GL_JournalEntryDetail3.accountcd == '' || this.M_GL_JournalEntryDetail3.accountcd == null ? 'NULL' : this.M_GL_JournalEntryDetail3.accountcd ,
                CurrencyRate: this.M_GL_JournalEntryDetail3.currencyrate ? this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate,',','','number') : 0 ,
                TrxAmt: this.M_GL_JournalEntryDetail3.trxamt ? this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt,',','','number') : 0 ,
                BaseAmt: this.M_GL_JournalEntryDetail3.baseamt ? this.replaceAllString(this.M_GL_JournalEntryDetail3.baseamt,',','','number') : 0 ,
                DebitCredit: this.M_GL_JournalEntryDetail3.debitcredit,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                User: this.getDataUser().UserId
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
                LineNoV2: this.$parent.data.PageOrder,
                JournalNo: this.M_GL_JournalEntryDetail3.journalno,
                LineNo: this.M_GL_JournalEntryDetail3.lineno,
                Descs: this.M_GL_JournalEntryDetail3.descs,
                AccountCd: this.M_GL_JournalEntryDetail3.accountcd == '' || this.M_GL_JournalEntryDetail3.accountcd == null ? 'NULL' : this.M_GL_JournalEntryDetail3.accountcd ,
                CurrencyRate: this.M_GL_JournalEntryDetail3.currencyrate ? this.replaceAllString(this.M_GL_JournalEntryDetail3.currencyrate,',','','number') : 0 ,
                TrxAmt: this.M_GL_JournalEntryDetail3.trxamt ? this.replaceAllString(this.M_GL_JournalEntryDetail3.trxamt,',','','number') : 0 ,
                BaseAmt: this.M_GL_JournalEntryDetail3.baseamt ? this.replaceAllString(this.M_GL_JournalEntryDetail3.baseamt,',','','number') : 0 ,
                DebitCredit: this.M_GL_JournalEntryDetail3.debitcredit,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                User: this.getDataUser().UserId,
                LastUpdateStamp: this.M_GL_JournalEntryDetail3.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_JournalEntryDetail3 = {
                journalno: 0,
                lineno: 0,
                descs: '',
                accountcd: '',
                currencyrate: '0',
                trxamt: '0',
                baseamt: '0',
                debitcredit: '',
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
                t0descs: '',
                t1descs: '',
                t2descs: '',
                t3descs: '',
                t4descs: '',
                t5descs: '',
                t6descs: '',
                t7descs: '',
                t8descs: '',
                t9descs: '',
                accountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_JournalEntryDetail3.journalno = data.JournalNo
            this.M_GL_JournalEntryDetail3.lineno = "(auto number)"
            this.M_GL_JournalEntryDetail3.descs = data.Descs
            this.InitialPosting()
            this.SetTrxAmount()
            this.$refs.ref_descs.focus()
        },
        M_Edit(){
            this.InitialPosting()
            this.SetTrxAmount()
            this.$refs.ref_descs.focus()
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    JournalNo: value.JournalNo,
                    LineNo: value.LineNo,
                    User: this.getDataUser().UserId,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                journalno: record.JournalNo,
                lineno: record.LineNo,
                lastupdatestamp: record.LastUpdateStamp				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_GL_JournalEntryDetail3 = {
                journalno: data.journalno,
                lineno: data.lineno,
                nextlineno: data.lineno,
                linepromp: data.lineno,
                descs: data.descs,
                accountcd: data.accountcd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                baseamt: this.isCurrency(data.baseamt, this.decimal),
                debitcredit: data.debitcredit,
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
                t0descs: data.t0descs,
                t1descs: data.t1descs,
                t2descs: data.t2descs,
                t3descs: data.t3descs,
                t4descs: data.t4descs,
                t5descs: data.t5descs,
                t6descs: data.t6descs,
                t7descs: data.t7descs,
                t8descs: data.t8descs,
                t9descs: data.t9descs,
                accountdescs: data.accountdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_JournalEntryDetail3.accountcdLabel = this.M_GL_JournalEntryDetail3.accountcd != null ? data.accountcd + this.separator + data.accountdescs :'' 
  

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

