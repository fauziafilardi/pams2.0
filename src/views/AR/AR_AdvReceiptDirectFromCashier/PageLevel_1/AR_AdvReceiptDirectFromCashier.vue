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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_AR_AdvReceiptDirectFromCashier.batchno" :label="M_AR_AdvReceiptDirectFromCashier.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_documentcount" v-model="M_AR_AdvReceiptDirectFromCashier.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_batchtotal" v-model="M_AR_AdvReceiptDirectFromCashier.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_AdvReceiptDirectFromCashier.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="4">
                                        <ABSinputCheckBox @input="OnbatchstatusChange" :prop="PI_batchstatus" v-model="M_AR_AdvReceiptDirectFromCashier.batchstatus"  ref="ref_batchstatus" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSinputTextVuex :prop="PI_currentdocumentcount" v-model="M_AR_AdvReceiptDirectFromCashier.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="4">
                                        <ABSinputTextVuex :prop="PI_currentbatchtotal" v-model="M_AR_AdvReceiptDirectFromCashier.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cashierno" v-model="M_AR_AdvReceiptDirectFromCashier.cashierno"  ref="ref_cashierno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AR_AdvReceiptDirectFromCashier.trxtype" :label="M_AR_AdvReceiptDirectFromCashier.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxtypedescs" v-model="M_AR_AdvReceiptDirectFromCashier.trxtypedescs"  ref="ref_trxtypedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AR_AdvReceiptDirectFromCashier.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_creditdate" v-model="M_AR_AdvReceiptDirectFromCashier.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_AdvReceiptDirectFromCashier.debtorcdLabel"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_debtorname" v-model="M_AR_AdvReceiptDirectFromCashier.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_AdvReceiptDirectFromCashier.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentcd" v-model="M_AR_AdvReceiptDirectFromCashier.paymentcd"  ref="ref_paymentcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankcd" v-model="M_AR_AdvReceiptDirectFromCashier.bankcd"  ref="ref_bankcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_AdvReceiptDirectFromCashier.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_AdvReceiptDirectFromCashier.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bankchargesamt" v-model="M_AR_AdvReceiptDirectFromCashier.bankchargesamt"  ref="ref_bankchargesamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_creditamt" v-model="M_AR_AdvReceiptDirectFromCashier.creditamt"  ref="ref_creditamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_AR_AdvReceiptDirectFromCashier.chequereferenceno"  ref="ref_chequereferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequereferencedate" v-model="M_AR_AdvReceiptDirectFromCashier.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_AR_AdvReceiptDirectFromCashier.issuedbank"  ref="ref_issuedbank" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequeduedate" v-model="M_AR_AdvReceiptDirectFromCashier.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AdvReceiptDirectFromCashier.remarks"  ref="ref_remarks" />
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
		FormType: "ListProcess",
		Module:"AR",
            propList: {
                initialWhere: " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            RunningCd: '',
            DataSelected: [],
            CanDelete: true,

            M_AR_AdvReceiptDirectFromCashier :{
                batchno: '',
                cashierno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                creditno: '',
                creditdate: '',
                debtorcd: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                bankcd: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                creditamt: '',
                currencyrate: '',
                bankchargesamt: '0',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: '',
                batchtotal: '',
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                remarks: '',
                identifiedtrxstatus: '',
                maximumbankchargesamt: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                debtorname: '',
                rowid: 0
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARBatchMaster'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: 'abc', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cIsAlwaysShow: false,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'AR/AR_BatchMaster' ,
                cDisplayColumn: 'BatchNo,DocumentCount' ,
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
            PI_batchstatus: { 
                cValidate :'', 
                cName: 'batchstatus', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchstatus: { 
                cValidate :'', 
                cName: 'batchstatus', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currentdocumentcount: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_currentbatchtotal: { 
                cLabel: 'Curr. Batch Total  ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_cashierno: { 
              cValidate :'', 
              cLabel: 'Cashier No', 
              cName: 'cashierno', 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TRXCLASS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_trxtypedescs: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_creditno: { 
                cValidate :'max:20', 
                cName: 'creditno', 
                cLabel: 'Receipt No', 
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
            PI_creditdate: {
                cValidate :'', 
                cName: 'creditdate', 
                cLabel: 'Receipt Date',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
              cValidate :'',
              cLabel: 'Debtor Code', 
              cName: 'debtorcd', 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentcd: { 
              cValidate :'', 
              cLabel: 'Receipt Type', 
              cName: 'paymentcd', 
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
            PI_bankcd: { 
              cValidate :'', 
              cLabel: 'Bank', 
              cName: 'bankcd', 
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
              cLabel: 'Currency', 
              cName: 'currencycd', 
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
            PI_currencyrate: { 
              cValidate :'', 
              cLabel: 'Currency Rate', 
              cName: 'currencyrate', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankchargesamt: { 
                cValidate :'', 
                cName: 'bankchargesamt', 
                cLabel: 'Bank Charges', 
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
            PI_creditamt: { 
              cValidate :'', 
                cLabel: 'Amount',
                cName: 'creditamt', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequereferenceno: { 
              cValidate :'', 
              cLabel: 'Cheque / Ref. No', 
              cName: 'chequereferenceno', 
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
            PI_chequereferencedate: { 
              cValidate :'', 
              cName: 'chequereferencedate', 
              cLabel: 'Cheque / Ref Date', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cVisible:  true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_issuedbank: { 
              cValidate :'',
              cLabel: 'Issue Bank', 
              cName: 'issuedbank', 
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
            PI_chequeduedate: { 
              cValidate :'', 
              cName: 'chequeduedate', 
              cLabel: 'Due Date', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cVisible:  true, 
              cProtect: true, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_AR_AdvReceiptDirectFromCashier.batchno = data.id
            this.M_AR_AdvReceiptDirectFromCashier.batchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{batchno}
            }
        })
        this.$forceUpdate()
        },
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
            }
        })
        this.$forceUpdate()
        },
        OnbatchstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchstatus}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_AdvReceiptDirectFromCashier.trxtype = data.id
            this.M_AR_AdvReceiptDirectFromCashier.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id)
              .then(dt => {
                if (dt != null) {
                  var dt25 = dt[0]
                  // console.log(dt25)                  
                  this.M_AR_AdvReceiptDirectFromCashier.descs = dt25.TrxTypeDescs
                  this.M_AR_AdvReceiptDirectFromCashier.trxtypedescs = dt25.TrxTypeDescs
                  
                  if (dt25.RunningCd != "") {
                    this.PI_creditno.cProtect = true
                    this.M_AR_AdvReceiptDirectFromCashier.creditno = "(auto)"
                    this.RunningCd = dt25.RunningCd
                  }
                  else {
                    this.PI_creditno.cProtect = false
                    this.M_AR_AdvReceiptDirectFromCashier.creditno = ""
                    this.RunningCd = "" 
                  }
                  if (!this.M_AR_AdvReceiptDirectFromCashier.descs || this.M_AR_AdvReceiptDirectFromCashier.descs == '') {
                    this.M_AR_AdvReceiptDirectFromCashier.descs = dt25.TrxTypeDescs
                  }
                   
                } 
              })
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
        },
        M_CheckboxChecked (data, status, index) {
          if (status === true) {
            if (data.ReceiptNo && data.ReceiptNo != '') {
              // this.$store.commit('setDeleteStatus', true)
              this.DataSelected.push({idx: index, CanDelete: true})
            }
            else {
              // this.$store.commit('setDeleteStatus', false)
              this.DataSelected.push({idx: index, CanDelete: false})
            }
          }
          else {
            this.$store.commit('setDeleteStatus', true)
            var id = this.DataSelected.map(x => x.idx).indexOf(index)
            this.DataSelected.splice(id,1)
          }

          if (this.DataSelected.length == 0) {
            this.CanDelete = true
            // this.$store.commit('setDeleteStatus', this.CanDelete)
          }
          else {
            for (var a = 0; a < this.DataSelected.length; a++) {
              if (this.DataSelected[a].CanDelete == false) {
                this.CanDelete = false
                break
              }
            }
          }
          
          this.$store.commit('setDeleteStatus', this.CanDelete)
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
          var data = this.FormToABSList().getRowSelected()
          var dataPost = []

          data.forEach((value) => {
            dataPost.push({
              _Message_: "Receipt No = " + value.ReceiptNo, 
              SubPortfolioCd : this.getDataUser().SubPortfolioCd,
              ModuleCd : this.Module,
              BatchNo : value.BatchNo,
              UserInput : this.getDataUser().UserId,
              Source: value.Source
            })
          })

          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            Data: dataPost
          }
          
          this.postJSONMulti( this.getUrlPostMulti(), param )
          .then(response => {
            if (response == null) return

            this.$parent.resultPost()
          })
        },
        M_Insert() {},
        M_Update() {
          var param = {}

          if (!this.DataRow.ReceiptNo || this.DataRow.ReceiptNo == "") {
            if (this.RunningCd != "") {
              this.FnGenerateRunningCode(
                this.getDataUser().SubPortfolioCd,
                this.RunningCd,
                this.getDataUser().UserId,
                this.M_AR_AdvReceiptDirectFromCashier.creditdate
              )
              .then(dt9 => { 
                if (dt9 != null) {
                  console.log(this.Module)
                  this.M_AR_AdvReceiptDirectFromCashier.creditno = dt9.RunningCode
                  param = {
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BatchNo: 0,
                    Source: 'A',
                    CashierNo: this.M_AR_AdvReceiptDirectFromCashier.cashierno,
                    DebtorCd: this.M_AR_AdvReceiptDirectFromCashier.debtorcd,
                    TrxType: this.M_AR_AdvReceiptDirectFromCashier.trxtype == '' || this.M_AR_AdvReceiptDirectFromCashier.trxtype == null ? 'NULL' : this.M_AR_AdvReceiptDirectFromCashier.trxtype ,
                    ModuleCd: 'AR',
                    CreditNo: this.M_AR_AdvReceiptDirectFromCashier.creditno,
                    CreditDate: this.M_AR_AdvReceiptDirectFromCashier.creditdate,
                    Descs: this.M_AR_AdvReceiptDirectFromCashier.descs,
                    PaymentCd: this.M_AR_AdvReceiptDirectFromCashier.paymentcd,
                    BankCd: this.M_AR_AdvReceiptDirectFromCashier.bankcd,
                    CurrencyCd: this.M_AR_AdvReceiptDirectFromCashier.currencycd,
                    CurrencyRate: this.M_AR_AdvReceiptDirectFromCashier.currencyrate ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.currencyrate, ',', '', 'number') : 0,
                    ChequeReferenceNo: this.M_AR_AdvReceiptDirectFromCashier.chequereferenceno,
                    IdentifiedTrxStatus: this.M_AR_AdvReceiptDirectFromCashier.identifiedtrxstatus,
                    ChequeReferenceDate: this.M_AR_AdvReceiptDirectFromCashier.chequereferencedate,
                    IssuedBank: this.M_AR_AdvReceiptDirectFromCashier.issuedbank,
                    ChequeDueDate: this.M_AR_AdvReceiptDirectFromCashier.chequeduedate,
                    CreditAmt: this.M_AR_AdvReceiptDirectFromCashier.creditamt ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.creditamt, ',', '', 'number') : 0,
                    BankChargesAmt: this.M_AR_AdvReceiptDirectFromCashier.bankchargesamt ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.bankchargesamt, ',', '', 'number') : 0,
                    Remarks: this.M_AR_AdvReceiptDirectFromCashier.remarks,
                    UserInput: this.getDataUser().UserId ,
                    LastUpdateStamp: this.M_AR_AdvReceiptDirectFromCashier.lastupdatestamp
                  }

                  this.postJSON(this.getUrlInsert(), param)
                  .then((response) => {
                    if(response == null) return
                    this.$parent.resultInsert(response.Message)
                  })
                }
              })
            }
            else {
              param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,
                Source: 'A',
                CashierNo: this.M_AR_AdvReceiptDirectFromCashier.cashierno,
                DebtorCd: this.M_AR_AdvReceiptDirectFromCashier.debtorcd,
                TrxType: this.M_AR_AdvReceiptDirectFromCashier.trxtype == '' || this.M_AR_AdvReceiptDirectFromCashier.trxtype == null ? 'NULL' : this.M_AR_AdvReceiptDirectFromCashier.trxtype ,
                ModuleCd: 'AR',
                CreditNo: this.M_AR_AdvReceiptDirectFromCashier.creditno,
                CreditDate: this.M_AR_AdvReceiptDirectFromCashier.creditdate,
                Descs: this.M_AR_AdvReceiptDirectFromCashier.descs,
                PaymentCd: this.M_AR_AdvReceiptDirectFromCashier.paymentcd,
                BankCd: this.M_AR_AdvReceiptDirectFromCashier.bankcd,
                CurrencyCd: this.M_AR_AdvReceiptDirectFromCashier.currencycd,
                CurrencyRate: this.M_AR_AdvReceiptDirectFromCashier.currencyrate ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.currencyrate, ',', '', 'number') : 0,
                ChequeReferenceNo: this.M_AR_AdvReceiptDirectFromCashier.chequereferenceno,
                IdentifiedTrxStatus: this.M_AR_AdvReceiptDirectFromCashier.identifiedtrxstatus,
                ChequeReferenceDate: this.M_AR_AdvReceiptDirectFromCashier.chequereferencedate,
                IssuedBank: this.M_AR_AdvReceiptDirectFromCashier.issuedbank,
                ChequeDueDate: this.M_AR_AdvReceiptDirectFromCashier.chequeduedate,
                CreditAmt: this.M_AR_AdvReceiptDirectFromCashier.creditamt ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.creditamt, ',', '', 'number') : 0,
                BankChargesAmt: this.M_AR_AdvReceiptDirectFromCashier.bankchargesamt ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.bankchargesamt, ',', '', 'number') : 0,
                Remarks: this.M_AR_AdvReceiptDirectFromCashier.remarks,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_AdvReceiptDirectFromCashier.lastupdatestamp
              }

              this.postJSON(this.getUrlInsert(), param)
              .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
              })
            }
          }
          else {
            param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CreditNo: this.M_AR_AdvReceiptDirectFromCashier.creditno,
              Descs: this.M_AR_AdvReceiptDirectFromCashier.descs,
              TrxType: this.M_AR_AdvReceiptDirectFromCashier.trxtype == '' || this.M_AR_AdvReceiptDirectFromCashier.trxtype == null ? 'NULL' : this.M_AR_AdvReceiptDirectFromCashier.trxtype ,
              CurrencyRate: this.M_AR_AdvReceiptDirectFromCashier.currencyrate ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.currencyrate, ',', '', 'number') : 0,
              BankChargesAmt: this.M_AR_AdvReceiptDirectFromCashier.bankchargesamt ? this.replaceAllString(this.M_AR_AdvReceiptDirectFromCashier.bankchargesamt, ',', '', 'number') : 0,
              Remarks: this.M_AR_AdvReceiptDirectFromCashier.remarks,
              UserEdit: this.getDataUser().UserId ,
              LastUpdateStamp: this.M_AR_AdvReceiptDirectFromCashier.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultUpdate(response.Message)
            })
          }
        },
		M_ClearForm(){
            this.M_AR_AdvReceiptDirectFromCashier = {
                batchno: '',
                cashierno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                creditno: '',
                creditdate: '',
                debtorcd: '',
                descs: '',
                paymentcd: '',
                currencycd: '',
                bankcd: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                creditamt: '',
                currencyrate: '',
                bankchargesamt: '0',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                documentcount: '',
                batchtotal: '',
                batchstatus: '',
                lastupdatestamp: 0,
                trxtypedescs: '',
                remarks: '',
                identifiedtrxstatus: '',
                maximumbankchargesamt: '',
                currentdocumentcount: '',
                currentbatchtotal: '',
                debtorname: '',
                rowid: 0
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
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CreditNo: value.CreditNo,
              CashierNo: value.CashierNo,
              UserEdit: this.getDataUser().UserId,
              LastUpdateStamp: value.LastUpdateStamp,
              _Message_:''
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
          var param = {}
          var url = this.getUrlById()
          if (record.ReceiptNo && record.ReceiptNo != "") {
            url += "2"
            param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                creditno: record.ReceiptNo
            }
          }
          else {
            param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,               
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                cashierno: record.CashierNo
            }
          }

            this.postEncode( url, param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_AdvReceiptDirectFromCashier = {
                batchno: data.batchno,
                cashierno: data.cashierno,
                subportfoliocd: data.subportfoliocd,
                trxtype: data.trxtype,
                creditno: data.creditno,
                creditdate: data.creditdate,
                debtorcd: data.debtorcd,
                debtorcdLabel: data.debtorcd,
                descs: data.descs,
                paymentcd: data.paymentcd,
                currencycd: data.currencycd,
                bankcd: data.bankcd,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                issuedbank: data.issuedbank,
                chequeduedate: data.chequeduedate,
                creditamt: this.isCurrency(data.creditamt, this.decimal),
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                lastupdatestamp: record.LastUpdateStamp,
                trxtypedescs: data.trxtypedescs,
                remarks: data.remarks,
                identifiedtrxstatus: data.identifiedtrxstatus,
                maximumbankchargesamt: data.maximumbankchargesamt,
                currentdocumentcount: data.currentdocumentcount,
                currentbatchtotal: data.currentbatchtotal,
                debtorname: data.debtorname,
                rowid: data.rowid
                    }
                 

                this.M_AR_AdvReceiptDirectFromCashier.batchnoLabel = this.M_AR_AdvReceiptDirectFromCashier.batchno != null && this.M_AR_AdvReceiptDirectFromCashier.batchno != "" ? data.batchno + this.separator  :'' 
                this.M_AR_AdvReceiptDirectFromCashier.trxtypeLabel = this.M_AR_AdvReceiptDirectFromCashier.trxtype != null && this.M_AR_AdvReceiptDirectFromCashier.trxtype != "" ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_AR_AdvReceiptDirectFromCashier.debtorcdLabel = this.M_AR_AdvReceiptDirectFromCashier.debtorcd != null && this.M_AR_AdvReceiptDirectFromCashier.debtorcd != "" ? data.debtorcd + this.separator + data.debtorname  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
      this.$store.commit('setFormType','ListProcess')
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

