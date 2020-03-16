<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 85%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">  
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnledgersourceChange" :prop="PI_ledgersource" v-model="M_GL_AccountInquiry.ledgersource"  ref="ref_ledgersource"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcodeChange" :prop="PI_accountcode" :value="M_GL_AccountInquiry.accountcode" :label="M_GL_AccountInquiry.accountcodeLabel" ref="ref_accountcode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromjournalsourceChange" :prop="PI_fromjournalsource" :value="M_GL_AccountInquiry.fromjournalsource" :label="M_GL_AccountInquiry.fromjournalsourceLabel" ref="ref_fromjournalsource"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntojournalsourceChange" :prop="PI_tojournalsource" :value="M_GL_AccountInquiry.tojournalsource" :label="M_GL_AccountInquiry.tojournalsourceLabel" ref="ref_tojournalsource"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromtransactiontypeChange" :prop="PI_fromtransactiontype" :value="M_GL_AccountInquiry.fromtransactiontype" :label="M_GL_AccountInquiry.fromtransactiontypeLabel" ref="ref_fromtransactiontype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntotransactiontypeChange" :prop="PI_totransactiontype" :value="M_GL_AccountInquiry.totransactiontype" :label="M_GL_AccountInquiry.totransactiontypeLabel" ref="ref_totransactiontype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSInputTextPeriodYear :prop="PI_fromperiodyear" :valuePeriod="M_GL_AccountInquiry.periodfrom" :valueYear="M_GL_AccountInquiry.yearfrom" @from="periodfrom" @to="yearfrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputTextPeriodYear :prop="PI_toperiodyear" :valuePeriod="M_GL_AccountInquiry.periodto" :valueYear="M_GL_AccountInquiry.yearto" @from="periodto" @to="yearto"/>
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_periodfrom" v-model="M_GL_AccountInquiry.periodfrom"  ref="ref_periodfrom"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_yearfrom" v-model="M_GL_AccountInquiry.yearfrom"  ref="ref_yearfrom"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_periodto" v-model="M_GL_AccountInquiry.periodto"  ref="ref_periodto"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_yearto" v-model="M_GL_AccountInquiry.yearto"  ref="ref_yearto"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromcurrencycodeChange" :prop="PI_fromcurrencycode" :value="M_GL_AccountInquiry.fromcurrencycode" :label="M_GL_AccountInquiry.fromcurrencycodeLabel" ref="ref_fromcurrencycode"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntocurrencycodeChange" :prop="PI_tocurrencycode" :value="M_GL_AccountInquiry.tocurrencycode" :label="M_GL_AccountInquiry.tocurrencycodeLabel" ref="ref_tocurrencycode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row style="padding-top:10px;">
                                        <b-col offset="6">
                                            <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <!-- {{M_GL_AccountInquiryTAnalysis}} -->
                                <ABSTAnalysisFromTo :prop="PTAnalysis" v-model="M_GL_AccountInquiryTAnalysis" />
                            <b-row style="padding-top:10px;">
                                <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totaldebit" v-model="M_GL_AccountInquiry.totaldebit"  ref="ref_totaldebit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalcredit" v-model="M_GL_AccountInquiry.totalcredit"  ref="ref_totalcredit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalamount" v-model="M_GL_AccountInquiry.totalamount"  ref="ref_totalamount" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
							</b-row>
						</b-form>
					</b-col>
                </b-row>
            </b-collapse>
        </div>
        <ABSListVuex
            :prop = "propList"
            :title = "'Account Inquiry'"
            :isProcess = "false"
            @rowClicked = "rowClicked"
            @rowDblClicked = "doDoubleClick"
            @rowLinkClick = "rowLink"
            @pageSize = "M_PageSize"
            @pagination = "M_Pagination"
            @filter = "M_Advance_Filter"
            v-show="hideList"
        />
    </div>
        
    </div>
</template>

<script>
import MyModal from'./GL_viewModal.vue'
export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
        hideList: false,
		cInsertKey:'',
		FormType: "Process",
		Module:"GL",
            propList: {
                initialWhere: "",
                LineNo: 1,
                PageLevel: 1,
                TabIndex: 1, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_AccountInquiry :{
                ledgersource: '',
                accountcode: '',
                fromjournalsource: '',
                tojournalsource: '',
                fromtransactiontype: '',
                totransactiontype: '',
                periodfrom: '0',
                yearfrom: '0',
                periodto: '0',
                yearto: '0',
                fromcurrencycode: '',
                tocurrencycode: '',
                totaldebit: '',
                totalcredit: '',
                totalamount: ''
            },
            M_GL_AccountInquiryTAnalysis: [],
            PI_ledgersource: { 
                cValidate :'required|max:1', 
                cName: 'ledgersource', 
                cLabel: 'Ledger Source', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1,
                cLastLabel: 'A(Active), B..L(Budget)' 
            }, 
            PI_accountcode: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'accountcode', 
                cLabel: 'Account Code ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_fromjournalsource: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSUser'    , 
                    ColumnDB: 'UserId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromjournalsource', 
                cLabel: 'From Journal Source', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'UserId,UserName' ,
            }, 
            PI_tojournalsource: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupSSUser'    , 
                    ColumnDB: 'UserId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tojournalsource', 
                cLabel: 'To Journal Source', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'UserId,UserName' ,
            }, 
            PI_fromtransactiontype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromtransactiontype', 
                cLabel: 'From Transaction Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_totransactiontype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'totransactiontype', 
                cLabel: 'To Transaction Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            },
            PI_fromperiodyear:{
                cValidate :'', 
                cName: 'periodyear', 
                cLabel: 'From Period Year', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
            PI_toperiodyear:{
                cValidate :'', 
                cName: 'periodyear', 
                cLabel: 'To Period Year', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            // PI_periodfrom: { 
            //     cValidate :'', 
            //     cName: 'periodfrom', 
            //     cLabel: 'From Period / Year', 
            //     cLabelSize: 4, 
            //     cOrder: 7, 
            //     cKey: false, 
            //     cType: 'numeric',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1 
            // }, 
            // PI_yearfrom: { 
            //     cValidate :'', 
            //     cName: 'yearfrom', 
            //     cLabel: '/', 
            //     cLabelSize: 4, 
            //     cOrder: 8, 
            //     cKey: false, 
            //     cType: 'numeric',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1 
            // }, 
            // PI_periodto: { 
            //     cValidate :'', 
            //     cName: 'periodto', 
            //     cLabel: 'To Period Year', 
            //     cLabelSize: 4, 
            //     cOrder: 9, 
            //     cKey: false, 
            //     cType: 'numeric',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1 
            // }, 
            // PI_yearto: { 
            //     cValidate :'', 
            //     cName: 'yearto', 
            //     cLabel: '/', 
            //     cLabelSize: 4, 
            //     cOrder: 10, 
            //     cKey: false, 
            //     cType: 'numeric',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1 
            // }, 
            PI_fromcurrencycode: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromcurrencycode', 
                cLabel: 'From Currency Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_tocurrencycode: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tocurrencycode', 
                cLabel: 'To Currency Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_totaldebit: { 
                cLabel: 'Total Debit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            }, 
            PI_totalcredit: { 
                cLabel: 'Total Credit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            }, 
            PI_totalamount: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            }, 

			PTAnalysis: {
                cPageLevel: 1,
                cTabIndex: 1,
                // cPageMasterSeq: 427,
                // cFormPageNo: 0,
                cAnalysisType: 'Analysis Category'
            }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
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
        doGenerate(){
              var param = {
                OptionFunctionCd: "GetAccountInquiry",
                ModuleCd: this.Module,
                AccountCd: this.M_GL_AccountInquiry.accountcode,
                FromCurrencyCd: this.M_GL_AccountInquiry.fromcurrencycode,
                ToCurrencyCd: this.M_GL_AccountInquiry.tocurrencycode,
                FromJournalSource: this.M_GL_AccountInquiry.fromjournalsource,
                ToJournalSource: this.M_GL_AccountInquiry.tojournalsource,
                FromTrxType: this.M_GL_AccountInquiry.fromtransactiontype,
                ToTrxType: this.M_GL_AccountInquiry.totransactiontype,
                FromPeriod: this.M_GL_AccountInquiry.periodfrom == ''? 0 : this.M_GL_AccountInquiry.periodfrom,
                ToPeriod:  this.M_GL_AccountInquiry.periodto == ''? 0 : this.M_GL_AccountInquiry.periodto,
                FromYear:  this.M_GL_AccountInquiry.yearfrom == ''? 0 : this.M_GL_AccountInquiry.yearfrom,
                ToYear:  this.M_GL_AccountInquiry.yearto == ''? 0 : this.M_GL_AccountInquiry.yearto,
                TableSource: this.M_GL_AccountInquiry.ledgersource,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
              }
            //   console.log(param)
             this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return

// console.log(ress)
                var data = ress[0]
                // console.log(data.BaseAmtD)
                // console.log(data.BaseAmtC)
                // console.log(data.BaseAmt)
                this.M_GL_AccountInquiry.totaldebit = this.isCurrency(data.BaseAmtD, this.decimal)//,data.BaseamtD
                this.M_GL_AccountInquiry.totalcredit = this.isCurrency(data.BaseAmtC, this.decimal)//,data.BaseamtC
                this.M_GL_AccountInquiry.totalamount = this.isCurrency(data.BaseAmt, this.decimal)//,data.Baseamt
                // console.log(data)

            })

            this.hideList = true
            // this.propList.ParamView = "'"+this.M_GL_AccountInquiry.ledgersource + "','" + this.getDataUser().SubPortfolioCd + "','"+this.M_GL_AccountInquiry.fromjournalsource+"', '"++
            this.propList.ParamView = "'"+this.M_GL_AccountInquiry.ledgersource+"'"
            this.propList.initialWhere = " AccountCd = '" + this.M_GL_AccountInquiry.accountcode + "'"

            // if(this.M_GL_AccountInquiry.fromjournalsource != '' && this.M_GL_AccountInquiry.tojournalsource != ''){
            if(this.M_GL_AccountInquiry.fromjournalsource != ''){            
                this.propList.initialWhere += " AND JournalSource BETWEEN '" + this.M_GL_AccountInquiry.fromjournalsource + "' AND '" +  this.M_GL_AccountInquiry.tojournalsource + "'"
            }

            // if(this.M_GL_AccountInquiry.fromtransactiontype != '' && this.M_GL_AccountInquiry.totransactiontype != ''){
            if(this.M_GL_AccountInquiry.fromtransactiontype != ''){            
                this.propList.initialWhere += " AND TrxType BETWEEN '" + this.M_GL_AccountInquiry.fromtransactiontype + "' AND '" +  this.M_GL_AccountInquiry.totransactiontype + "'"
            }

            // if(this.M_GL_AccountInquiry.fromcurrencycode != '' && this.M_GL_AccountInquiry.tocurrencycode != ''){
            if(this.M_GL_AccountInquiry.fromcurrencycode != ''){            
                this.propList.initialWhere += " AND CurrencyCd BETWEEN '" + this.M_GL_AccountInquiry.fromcurrencycode + "' AND '" +  this.M_GL_AccountInquiry.tocurrencycode + "'"
            }

            // if(this.M_GL_AccountInquiry.periodfrom != '' && this.M_GL_AccountInquiry.yearfrom != '' && this.M_GL_AccountInquiry.periodto != '' && this.M_GL_AccountInquiry.yearto != ''){ 
            if(this.M_GL_AccountInquiry.periodfrom != '' && this.M_GL_AccountInquiry.yearfrom.length == 4 ) {            
                this.propList.initialWhere += " AND RIGHT(0000+CAST(FinYear AS VARCHAR),4)+RIGHT(00+Cast(FinPeriod AS VARCHAR),2) between RIGHT(0000+CAST('"+ this.M_GL_AccountInquiry.yearfrom +"' AS Varchar),4)+RIGHT(00+Cast('"+ this.M_GL_AccountInquiry.periodfrom +"' as varchar),2) and RIGHT(0000+CAST('"+ this.M_GL_AccountInquiry.yearto +"' AS VARCHAR),4)+RIGHT(00+CAST('" +this.M_GL_AccountInquiry.periodto + "' AS VARCHAR),2)"                                                      
            }
            
            // this.propList.initialWhere += " AND JournalSource = '" + this.M_GL_AccountInquiry.ledgersource + "'"            

            this.toList().doGetList('','eb_getList')
           
            // var param = {
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: 1,
            //     SubPortfolioCd: this.getDataUser().SubPortfolioCd   
            //     ,AccountCd: this.M_GL_AccountInquiry.accountcode   
            //     ,FromCurrencyCd: this.M_GL_AccountInquiry.fromcurrencycode   
            //     ,ToCurrencyCd: this.M_GL_AccountInquiry.tocurrencycode   
            //     ,FromJournalSource: this.M_GL_AccountInquiry.fromjournalsource    
            //     ,ToJournalSource: this.M_GL_AccountInquiry.tojournalsource    
            //     ,FromTrxType: this.M_GL_AccountInquiry.fromtransactiontype   
            //     ,ToTrxType: this.M_GL_AccountInquiry.totransactiontype   
            //     ,FromPeriod: this.M_GL_AccountInquiry.periodfrom    
            //     ,FromYear: this.M_GL_AccountInquiry.yearfrom   
            //     ,ToPeriod: this.M_GL_AccountInquiry.periodto    
            //     ,ToYear: this.M_GL_AccountInquiry.yearto   
            //     ,TableLedger: this.M_GL_AccountInquiry.ledgersource
            // }

            // this.postEncode( this.getUrlList(), param )
            // .then(response => {
            //     if(response == null) return

            //     console.log(response)
            // })

            
            
        },
        toList() {
            return this.$children[2]
        },		
        OnledgersourceChange(data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                var letters = /^[A-La-l]+$/;
                if(data.match(letters))
                {
                    // return true
                    // console.log('yes')
                    this.M_GL_AccountInquiry.ledgersource = data
                }
                else
                {
                    // alert("message");
                    // console.log('lho')
                    // return false
                    this.M_GL_AccountInquiry.ledgersource = ''
                }
            }
        })
        this.$forceUpdate()
        },
        OnaccountcodeChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.accountcode = data.id
            this.M_GL_AccountInquiry.accountcodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcode}
            }
        })
        this.$forceUpdate()
        },
        OnfromjournalsourceChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.fromjournalsource = data.id
            this.M_GL_AccountInquiry.fromjournalsourceLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromjournalsource}
            }
        })
        this.$forceUpdate()
        },
        OntojournalsourceChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.tojournalsource = data.id
            this.M_GL_AccountInquiry.tojournalsourceLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tojournalsource}
            }
        })
        this.$forceUpdate()
        },
        OnfromtransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.fromtransactiontype = data.id
            this.M_GL_AccountInquiry.fromtransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromtransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OntotransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.totransactiontype = data.id
            this.M_GL_AccountInquiry.totransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OnfromcurrencycodeChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.fromcurrencycode = data.id
            this.M_GL_AccountInquiry.fromcurrencycodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromcurrencycode}
            }
        })
        this.$forceUpdate()
        },
        OntocurrencycodeChange (data) {
        this.$nextTick(() => {
            this.M_GL_AccountInquiry.tocurrencycode = data.id
            this.M_GL_AccountInquiry.tocurrencycodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tocurrencycode}
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
            record.ledgersource = this.M_GL_AccountInquiry.ledgersource
            // console.log('Rowclick modal',record)

            this.getModal(record)
            // this.M_GL_AccountInquiry.ledgersource = this.M_GL_AccountInquiry.ledgersource
            // this.M_GL_AccountInquiry.ledgersource = record.LineNo


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
            this.M_GL_AccountInquiry = {
                ledgersource: 'A',
                accountcode: '',
                fromjournalsource: '',
                tojournalsource: '',
                fromtransactiontype: '',
                totransactiontype: '',
                periodfrom: '',
                yearfrom: '',
                periodto: '',
                yearto: '',
                fromcurrencycode: '',
                tocurrencycode: '',
                totaldebit: '',
                totalcredit: '',
                totalamount: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_ledgersource.focus()
        },
        M_Edit(){
            this.$refs.ref_ledgersource.focus()
        },
        M_Delete(dt){       

             //nothing     
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_GL_AccountInquiry = {
                ledgersource: data.ledgersource,
                accountcode: data.accountcode,
                fromjournalsource: data.fromjournalsource,
                tojournalsource: data.tojournalsource,
                fromtransactiontype: data.fromtransactiontype,
                totransactiontype: data.totransactiontype,
                periodfrom: data.periodfrom,
                yearfrom: data.yearfrom,
                periodto: data.periodto,
                yearto: data.yearto,
                fromcurrencycode: data.fromcurrencycode,
                tocurrencycode: data.tocurrencycode,
                totaldebit: data.totaldebit,
                totalcredit: data.totalcredit,
                totalamount: data.totalamount
                    }
                 

                this.M_GL_AccountInquiry.accountcodeLabel = this.M_GL_AccountInquiry.accountcode != null ? data.accountcode + this.separator + data.accountdescs :'' 
                this.M_GL_AccountInquiry.fromjournalsourceLabel = this.M_GL_AccountInquiry.fromjournalsource != null ? data.fromjournalsource + this.separator  :'' 
                this.M_GL_AccountInquiry.tojournalsourceLabel = this.M_GL_AccountInquiry.tojournalsource != null ? data.tojournalsource + this.separator  :'' 
                this.M_GL_AccountInquiry.fromtransactiontypeLabel = this.M_GL_AccountInquiry.fromtransactiontype != null ? data.fromtransactiontype + this.separator  :'' 
                this.M_GL_AccountInquiry.totransactiontypeLabel = this.M_GL_AccountInquiry.totransactiontype != null ? data.totransactiontype + this.separator  :'' 
                this.M_GL_AccountInquiry.fromcurrencycodeLabel = this.M_GL_AccountInquiry.fromcurrencycode != null ? data.fromcurrencycode + this.separator  :'' 
                this.M_GL_AccountInquiry.tocurrencycodeLabel = this.M_GL_AccountInquiry.tocurrencycode != null ? data.tocurrencycode + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getModal(data){
            // console.log(JSON.stringify(data,null,2))
            this.$modal.show(MyModal, 
                { //Props passing data
                    dataModal:data
                },
                {//Property
                    height: '90%',
                    width : '80%',
                    minWidth: "300",
                    minHeight: "300",
                    draggable: true,
                    resizable: true,
                    reset: true
                },
                {// event listener
                    'before-open': (event) => { console.log('this will be called before the modal before Oepn',event); },
                    'before-close': (event) => { console.log('this will be called before the modal before closes',event); },
                    'opened': (event) => { console.log('this will be called before the modal opended',event); },
                    'closed': (event) => { console.log('this will be called before the modal closed',event); },
                }
            )
            
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
        this.$store.commit('setStatus', 'new')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.$store.commit('setListDisable', false)
        this.M_ClearForm()
        // this.M_GL_BatchInquiry.ledgersource = 'A'
        // this.toList().doGetList('','eb_getList')

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

<style scoped>
    table {
    border-collapse: collapse;
    }

    table, td, th {
    border: 1px solid black;
    }
      .size-modal-content {
            padding: 10px;
            font-style: 13px;
        }
        .v--modal-overlay[data-modal="size-modal"] {
            background: rgba(0, 0, 0, 0.5);
        }
        .demo-modal-class {
            border-radius: 5px;
            background: #F7F7F7;
            box-shadow: 5px 5px 30px 0px rgba(46,61,73, 0.6);
        }
</style>

