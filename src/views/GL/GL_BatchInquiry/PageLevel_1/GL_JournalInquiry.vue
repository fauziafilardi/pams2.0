<template>    
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        <div class="content-app-form__body form-process">
            <div class="tab-form-process">
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">            
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_batchno" v-model="M_GL_JournalInquiry.batchno"  ref="ref_batchno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_ledgersource" v-model="M_GL_JournalInquiry.ledgersource"  ref="ref_ledgersource" />
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcodeChange" :prop="PI_accountcode" :value="M_GL_JournalInquiry.accountcode" :label="M_GL_JournalInquiry.accountcodeLabel" ref="ref_accountcode"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromjournalsourceChange" :prop="PI_fromjournalsource" :value="M_GL_JournalInquiry.fromjournalsource" :label="M_GL_JournalInquiry.fromjournalsourceLabel" ref="ref_fromjournalsource"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntojournalsourceChange" :prop="PI_tojournalsource" :value="M_GL_JournalInquiry.tojournalsource" :label="M_GL_JournalInquiry.tojournalsourceLabel" ref="ref_tojournalsource"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromtransactiontypeChange" :prop="PI_fromtransactiontype" :value="M_GL_JournalInquiry.fromtransactiontype" :label="M_GL_JournalInquiry.fromtransactiontypeLabel" ref="ref_fromtransactiontype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntotransactiontypeChange" :prop="PI_totransactiontype" :value="M_GL_JournalInquiry.totransactiontype" :label="M_GL_JournalInquiry.totransactiontypeLabel" ref="ref_totransactiontype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSInputTextPeriodYear :prop="PI_periodyearfrom" :valuePeriod="M_GL_JournalInquiry.periodfrom" :valueYear="M_GL_JournalInquiry.yearfrom" @from="periodfrom" @to="yearfrom"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputTextPeriodYear :prop="PI_periodyearto" :valuePeriod="M_GL_JournalInquiry.periodto" :valueYear="M_GL_JournalInquiry.yearto" @from="periodto" @to="yearto"/>
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_periodfrom" v-model="M_GL_JournalInquiry.periodfrom"  ref="ref_periodfrom"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_yearfrom" v-model="M_GL_JournalInquiry.yearfrom"  ref="ref_yearfrom"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_periodto" v-model="M_GL_JournalInquiry.periodto"  ref="ref_periodto"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_yearto" v-model="M_GL_JournalInquiry.yearto"  ref="ref_yearto"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OnfromtrxdateChange" :prop="PI_fromtrxdate" v-model="M_GL_JournalInquiry.fromtrxdate"  ref="ref_fromtrxdate" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OntotrxdateChange" :prop="PI_totrxdate" v-model="M_GL_JournalInquiry.totrxdate"  ref="ref_totrxdate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OnfromjournaldateChange" :prop="PI_fromjournaldate" v-model="M_GL_JournalInquiry.fromjournaldate"  ref="ref_fromjournaldate" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDateVuex @input="OntojournaldateChange" :prop="PI_tojournaldate" v-model="M_GL_JournalInquiry.tojournaldate"  ref="ref_tojournaldate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromcurrencycodeChange" :prop="PI_fromcurrencycode" :value="M_GL_JournalInquiry.fromcurrencycode" :label="M_GL_JournalInquiry.fromcurrencycodeLabel" ref="ref_fromcurrencycode"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntocurrencycodeChange" :prop="PI_tocurrencycode" :value="M_GL_JournalInquiry.tocurrencycode" :label="M_GL_JournalInquiry.tocurrencycodeLabel" ref="ref_tocurrencycode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col offset="5">
                                            <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                        </b-col>
                                    </b-row>                                    
                                </b-col> <!-- table close -->                    
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                            </b-form>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <ABSListVuex
                :prop = "propList"
                :title = "'JournalInquiry'"
                :isProcess = "false"
                @rowClicked = "rowClicked"
                @rowDblClicked = "doDoubleClick"
                @rowLinkClick = "rowLink"
                @pageSize = "M_PageSize"
                @pagination = "M_Pagination"
                @filter = "M_Advance_Filter"
            />            
        </div>
        </div> 
    </div>
</template>

<script>

export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "Process",
		Module:"GL",
            propList: {
                initialWhere: " BatchNo = '"+ this.$route.query.BatchNo +"'",
                LineNo: 1,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: '', 
                SourceField: '', 
                ParamView: "'"+ this.$route.query.LedgerFlag +"'" 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_JournalInquiry :{
                ledgersource: '',
                // accountcode: '',
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
                batchno:'',
                fromtrxdate:'',
                totrxdate:'',
                fromjournaldate:'',
                tojournaldate:''

                    }
            ,

            PI_batchno: { 
                cLabel: 'Batch No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            },
            PI_ledgersource: { 
                cLabel: 'Ledger Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: true 
            },
            // PI_ledgersource: { 
            //     cValidate :'required|max:1', 
            //     cName: 'ledgersource', 
            //     cLabel: 'Ledger Source', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1 
            // }, 
            // PI_accountcode: { 
            //     dataLookUp: { 
            //         LookUpCd: 'GetLookupGLAccountCode'    , 
            //         ColumnDB: 'AccountCd'   , 
            //         InitialWhere: "Status = 'A'"   , 
            //         ParamWhere: ''  
            //             }, 
            //     cValidate :'required', 
            //     cName: 'accountcode', 
            //     cLabel: 'Account Code ', 
            //     cKey: false, 
            //     cLabelSize: 4, 
            //     cOrder: 2, 
            //     cTriggered: false, 
            //     cDefault: '', 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cAsync:  false, 
            //     cFilter: true, 
            //     cPageLevel: 1, 
            //     cTabIndex: 1, 
            //     cParentForm: 'FormScope_' + 1 + '_' + 1, 
            //     cStatic: false, 
            //     cOption: [], 
            //     cMasterUrl: '' ,
            //     cDisplayColumn: 'AccountCd,Descs1' ,
            // }, 
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
             PI_periodyearfrom:{
                cValidate :'', 
                cName: 'periodyear', 
                cLabel: 'From Period Year', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
            PI_periodyearto:{
                cValidate :'', 
                cName: 'periodyear', 
                cLabel: 'From Period Year', 
                cLabelSize: 4, 
                cOrder: 1, 
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
            PI_fromtrxdate: { 
                cValidate :'', 
                cName: 'fromtrxdate', 
                cLabel: 'From Transaction Date ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
            PI_totrxdate: { 
                cValidate :'', 
                cName: 'totrxdate', 
                cLabel: 'To Transaction Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
            PI_fromjournaldate: { 
                cValidate :'', 
                cName: 'fromjournaldate', 
                cLabel: 'From Journal Date ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },
            PI_tojournaldate: { 
                cValidate :'', 
                cName: 'tojournaldate', 
                cLabel: 'To Journal Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            },  
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
                cOrder: 11, 
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
                cOrder: 12, 
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

			// PTAnalysis: {
            //     cPageLevel: 1,
            //     cTabIndex: 1,
            //     cPageMasterSeq: this.data.PageMasterSeq,
            //     cFormPageNo: this.data.PageOrder
            // }
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
            // this.propList.initialWhere = " AccountCd = '" + this.M_GL_JournalInquiry.accountcode + "'"

            // if(this.M_GL_JournalInquiry.fromjournalsource != '' && this.M_GL_JournalInquiry.tojournalsource != ''){
            if(this.M_GL_JournalInquiry.fromjournalsource != ''){            
                this.propList.initialWhere += " AND JournalSource BETWEEN '" + this.M_GL_JournalInquiry.fromjournalsource + "' AND '" +  this.M_GL_JournalInquiry.tojournalsource + "'"
            }

            // if(this.M_GL_JournalInquiry.fromtransactiontype != '' && this.M_GL_JournalInquiry.totransactiontype != ''){
            if(this.M_GL_JournalInquiry.fromtransactiontype != ''){            
                this.propList.initialWhere += " AND TrxType BETWEEN '" + this.M_GL_JournalInquiry.fromtransactiontype + "' AND '" +  this.M_GL_JournalInquiry.totransactiontype + "'"
            }

            // if(this.M_GL_JournalInquiry.fromcurrencycode != '' && this.M_GL_JournalInquiry.tocurrencycode != ''){
            if(this.M_GL_JournalInquiry.fromcurrencycode != ''){            
                this.propList.initialWhere += " AND CurrencyCd BETWEEN '" + this.M_GL_JournalInquiry.fromcurrencycode + "' AND '" +  this.M_GL_JournalInquiry.tocurrencycode + "'"
            }

            // if(this.M_GL_JournalInquiry.periodfrom != '' && this.M_GL_JournalInquiry.yearfrom != '' && this.M_GL_JournalInquiry.periodto != '' && this.M_GL_JournalInquiry.yearto != ''){ 
            if(this.M_GL_JournalInquiry.periodfrom != '' && this.M_GL_JournalInquiry.yearfrom != '') {            
                this.propList.initialWhere += " AND RIGHT(0000+CAST(FinYear AS VARCHAR),4)+RIGHT(00+Cast(FinPeriod AS VARCHAR),2) between RIGHT(0000+CAST('"+ this.M_GL_JournalInquiry.yearfrom +"' AS Varchar),4)+RIGHT(00+Cast('"+ this.M_GL_JournalInquiry.periodfrom +"' as varchar),2) and RIGHT(0000+CAST('"+ this.M_GL_JournalInquiry.yearto +"' AS VARCHAR),4)+RIGHT(00+CAST('" +this.M_GL_JournalInquiry.periodto + "' AS VARCHAR),2)"                                                      
            }
            
            // this.propList.initialWhere += " AND JournalSource = '" + this.M_GL_JournalInquiry.ledgersource + "'"            

            this.toList().doGetList('','eb_getList')
            // var param = {
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: 1,
            //     SubPortfolioCd: this.getDataUser().SubPortfolioCd   
            //     ,AccountCd: this.M_GL_JournalInquiry.accountcode   
            //     ,FromCurrencyCd: this.M_GL_JournalInquiry.fromcurrencycode   
            //     ,ToCurrencyCd: this.M_GL_JournalInquiry.tocurrencycode   
            //     ,FromJournalSource: this.M_GL_JournalInquiry.fromjournalsource    
            //     ,ToJournalSource: this.M_GL_JournalInquiry.tojournalsource    
            //     ,FromTrxType: this.M_GL_JournalInquiry.fromtransactiontype   
            //     ,ToTrxType: this.M_GL_JournalInquiry.totransactiontype   
            //     ,FromPeriod: this.M_GL_JournalInquiry.periodfrom    
            //     ,FromYear: this.M_GL_JournalInquiry.yearfrom   
            //     ,ToPeriod: this.M_GL_JournalInquiry.periodto    
            //     ,ToYear: this.M_GL_JournalInquiry.yearto   
            //     ,TableLedger: this.M_GL_JournalInquiry.ledgersource
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
//         OnaccountcodeChange (data) {
//         this.$nextTick(() => {
//             this.M_GL_JournalInquiry.accountcode = data.id
//             this.M_GL_JournalInquiry.accountcodeLabel = data.label
//             if (this.inputStatus != "VIEW") {
// //{accountcode}
//             }
//         })
//         this.$forceUpdate()
//         },
        OnfromtrxdateChange (data) {
            console.log(data)
            this.M_GL_JournalInquiry.totrxdate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaldate}
            }
        })
        this.$forceUpdate()
        },
        OntotrxdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaldate}
            }
        })
        this.$forceUpdate()
        },
        OnfromjournaldateChange (data) {            
            this.M_GL_JournalInquiry.tojournaldate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaldate}
            }
        })
        this.$forceUpdate()
        },
        OntojournaldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaldate}
            }
        })
        this.$forceUpdate()
        },
        OnfromjournalsourceChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalInquiry.fromjournalsource = data.id
            this.M_GL_JournalInquiry.fromjournalsourceLabel = data.label

            this.M_GL_JournalInquiry.tojournalsource = data.id
            this.M_GL_JournalInquiry.tojournalsourceLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromjournalsource}
            }
        })
        this.$forceUpdate()
        },
        OntojournalsourceChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalInquiry.tojournalsource = data.id
            this.M_GL_JournalInquiry.tojournalsourceLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tojournalsource}
            }
        })
        this.$forceUpdate()
        },
        OnfromtransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalInquiry.fromtransactiontype = data.id
            this.M_GL_JournalInquiry.fromtransactiontypeLabel = data.label

            this.M_GL_JournalInquiry.totransactiontype = data.id
            this.M_GL_JournalInquiry.totransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromtransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OntotransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalInquiry.totransactiontype = data.id
            this.M_GL_JournalInquiry.totransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{totransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OnfromcurrencycodeChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalInquiry.fromcurrencycode = data.id
            this.M_GL_JournalInquiry.fromcurrencycodeLabel = data.label

            this.M_GL_JournalInquiry.tocurrencycode = data.id
            this.M_GL_JournalInquiry.tocurrencycodeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromcurrencycode}
            }
        })
        this.$forceUpdate()
        },
        OntocurrencycodeChange (data) {
        this.$nextTick(() => {
            this.M_GL_JournalInquiry.tocurrencycode = data.id
            this.M_GL_JournalInquiry.tocurrencycodeLabel = data.label
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
            console.log(record)
            this.masterUrlPopUp(
                `${window.location.origin}` + '/GL/GL_JournalInquiryDetail?oid=' +this.getOptionSeq().OptionSeq+'&isCallBack=true&LedgerFlag='+record.LedgerFlag+'&BatchNo='+record.BatchNo+'&Subportfolio='+ record.SubPortfolioCd +'&JournalNo='+ record.JournalNo +'',
                '',
                '1000',
                '600',
                ''
            )
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
            this.M_GL_JournalInquiry ={
                ledgersource: '',
                // accountcode: '',
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
                batchno: ''
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

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_GL_JournalInquiry = {
                    ledgersource: data.ledgersource,
                    frombatchno: data.frombatchno,
                    tobatchno: data.tobatchno
                }
                 

                this.M_GL_JournalInquiry.frombatchnoLabel = this.M_GL_JournalInquiry.frombatchno != null ? data.frombatchno + this.separator  :'' 
                this.M_GL_JournalInquiry.tobatchnoLabel = this.M_GL_JournalInquiry.tobatchno != null ? data.tobatchno + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

        // this.propList.ParamView = "'"+ this.$route.query.LedgerFlag + "'"
        this.toList().doGetList('','eb_getList')

        this.M_GL_JournalInquiry.batchno  = this.$route.query.BatchNo
        this.M_GL_JournalInquiry.ledgersource  = this.$route.query.LedgerFlag
        

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

