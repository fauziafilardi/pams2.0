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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_CB_BankReceiptH.batchno" :label="M_CB_BankReceiptH.batchnoLabel" ref="ref_batchno"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_documentcount" v-model="M_CB_BankReceiptH.documentcount"  ref="ref_documentcount" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSCompute :prop="PI_batchtotal" v-model="M_CB_BankReceiptH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputCheckBox @input="OnbatchtotalChange" :prop="PI_batchtotal" v-model="M_CB_BankReceiptH.batchtotal"  ref="ref_batchtotal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currentdocumentcount" v-model="M_CB_BankReceiptH.currentdocumentcount"  ref="ref_currentdocumentcount" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_currentbatchtotal" v-model="M_CB_BankReceiptH.currentbatchtotal"  ref="ref_currentbatchtotal" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_BankReceiptH.trxtype" :label="M_CB_BankReceiptH.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_CB_BankReceiptH.paymentno"  ref="ref_paymentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnpaymentdateChange" :prop="PI_paymentdate" v-model="M_CB_BankReceiptH.paymentdate"  ref="ref_paymentdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_BankReceiptH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_BankReceiptH.paymentcd" :label="M_CB_BankReceiptH.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_BankReceiptH.bankcd" :label="M_CB_BankReceiptH.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_BankReceiptH.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_CB_BankReceiptH.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_BankReceiptH.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxrate" v-model="M_CB_BankReceiptH.taxrate"  ref="ref_taxrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalamt" v-model="M_CB_BankReceiptH.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_CB_BankReceiptH.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_CB_BankReceiptH.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Cheque / Reference No
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_BankReceiptH.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_CB_BankReceiptH.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_BankReceiptH.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_BankReceiptH.chequeduedate"  ref="ref_chequeduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_BankReceiptH.remarks"  ref="ref_remarks" />
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
		Module:"CB",
            propList: {
                initialWhere: "Source = 'R' AND PaymentStatus = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   		
            DataSelected: [],	
            CanPost: true,	
            M_CB_BankReceiptH :{
                batchno: 0,
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.getToday(),
                descs: '',
                paymentcategory: 'I',
                paymentno: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                paymentcd: '',
                bankcd: '',
                currencycd: '',
                currencyrate: '0',
                taxrate: '0',
                originalcurrencyrate: '',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                vatamt: '',
                totalamt: '',
                underpaymentamt: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                issuedbank: '',
                remarks: '',
                trxtypedescs: '',
                paymentdescs: '',
                paymenttype: '',
                bankname: '',
                runningdescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                receiveraccount: '',
                banknamereceiveraccount: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0
                    }
            ,
            PI_batchno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBatch'    , 
                    ColumnDB: 'BatchNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'batchno', 
                cLabel: '', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  false, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CB/CB_BatchMaster' ,
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
            PI_batchtotal: { 
                cValidate :'', 
                cName: 'batchtotal', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [], 
                cOrder: 0, 
                cKey: false, 
                cVisible: false, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currentdocumentcount: { 
                cLabel: 'Curr. Doc. Count', 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd  =  '" + this.getDataUser().SubPortfolioCd + "' AND  ModuleCd = 'CB' AND TrxClass = 'T' AND Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_paymentno: { 
                cValidate :'max:20', 
                cName: 'paymentno', 
                cLabel: 'Payment No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentdate: { 
                cValidate :'required', 
                cName: 'paymentdate', 
                cLabel: 'Payment Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,
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
            PI_paymentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'PaymentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type ', 
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
                cMasterUrl: 'CM/CM_PaymentType' ,
                cDisplayColumn: 'PaymentCd,Descs' ,
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' AND Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'BankCd,BankName' ,
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'required|greater:0', 
                cName: 'currencyrate', 
                cLabel: 'Currency Rate ', 
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
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxrate: { 
                cValidate :'required', 
                cName: 'taxrate', 
                cLabel: 'Tax Currency Rate ', 
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
            PI_totalamt: { 
                cValidate :'', 
                cName: 'totalamt', 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequereferenceno: { 
                cValidate :'max:20', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
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
            PI_chequereferencedate: { 
                cValidate :'', 
                cName: 'chequereferencedate', 
                cLabel: 'Cheque / Ref. Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_issuedbank: { 
                cValidate :'max:30', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
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
            PI_chequeduedate: { 
                cValidate :'', 
                cName: 'chequeduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
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
       M_CheckboxChecked (data, status, index) {
          // console.log(data);
          // console.log(status);
          // console.log(index);
          if (status === true) {
            if (data.BatchStatus && data.BatchStatus != "Error") {
              this.$store.commit('setPostStatus', true)
              this.DataSelected.push({idx: index, CanPost: true})
            }
            else {
              this.$store.commit('setPostStatus', false)
              this.DataSelected.push({idx: index, CanPost: false})
            }
          }
          else {
            this.$store.commit('setPostStatus', true)
            var id = this.DataSelected.map(x => x.idx).indexOf(index)
            this.DataSelected.splice(id,1)
          }

          if (this.DataSelected.length == 0) {
            this.CanPost = true
          }
          else {
            for (var a = 0; a < this.DataSelected.length; a++) {
              if (this.DataSelected[a].CanPost == false) {                
                this.CanPost = false
                break
              }else{
                this.CanPost = true
              }
            }
          }
          
          // console.log(this.CanPost);
          this.$store.commit('setPostStatus', this.CanPost)
        },
        OnbatchnoChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankReceiptH.batchno = data.id
            this.M_CB_BankReceiptH.batchnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{batchno}
            }
        })
        this.$forceUpdate()
        },
        OnbatchtotalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchtotal}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankReceiptH.trxtype = data.id
            this.M_CB_BankReceiptH.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
                if (dt != null) { 
                  var dta = dt[0]
                  this.M_CB_BankReceiptH.runningcd = dta.RunningCd
                  this.M_CB_BankReceiptH.trxtypeLabel = data.id + this.separator + dta.TrxTypeDescs
                  // this.M_CB_BankReceiptH.descs = dta.TrxTypeDescs

                  if(dta.DefaultBankCd && dta.DefaultBankCd != ''){
                    this.M_CB_BankReceiptH.bankcd = dta.DefaultBankCd
                    this.M_CB_BankReceiptH.bankcdLabel = dta.DefaultBankCd + this.separator + dta.BankName
                    
                    var bankParam = {id: dta.DefaultBankCd, label: dta.DefaultBankCd + this.separator + dta.BankName}
                    this.OnbankcdChange(bankParam)
                  }

                  if (this.inputStatus != "EDIT") {
                    if (dta.RunningCd != '') {
                      this.M_CB_BankReceiptH.paymentno = "(auto)"
                      this.PI_paymentno.cProtect = true
                    }
                    else {
                      this.M_CB_BankReceiptH.paymentno = ""
                      this.PI_paymentno.cProtect = false
                    }
                  }
                  
                  if (dta.DefaultBankCd && dta.DefaultBankCd != "") {
                    var paramcurrencycd = {
                      OptionFunctionCd: "GetBankCurrencyCd",
                      ModuleCd: this.Module,
                      SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                      BankCd: dta.DefaultBankCd,
                      BankCurrencyCd_Output: ""
                    }

                    this.FnDynamicFunction(paramcurrencycd)
                    .then(currCd => {
                        if (currCd == null) return
                        this.M_CB_BankReceiptH.currencycd = currCd.BankCurrencyCd
                        if (this.M_CB_BankReceiptH.paymentdate && this.M_CB_BankReceiptH.paymentdate != "") {
                          var paramcurrencyrate = {
                            OptionFunctionCd: "GetRevaluationCurrencyRate",
                            ModuleCd: this.Module,
                            RevaluationCurrencyRate_Output: "",
                            BankCd: currCd.BankCurrencyCd,
                            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                            PaymentDate: this.M_CB_BankReceiptH.paymentdate
                          }

                          this.FnDynamicFunction(paramcurrencyrate).then(dtCurrRate => {
                            this.M_CB_BankReceiptH.currencyrate = this.isCurrency(dtCurrRate.RevaluationCurrencyRate, this.decimal)
                          })
                        }
                    })
                  }
                }
              })
            }
        })
        this.$forceUpdate()
        },
        OnpaymentdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequereferencedate}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankReceiptH.paymentcd = data.id
            this.M_CB_BankReceiptH.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
               if(data.PaymentType != 'Cash'){
                  this.PI_chequereferenceno.cValidate = 'required'
                  this.$refs.ref_chequereferenceno.isRequired = true

                  this.PI_chequereferencedate.cValidate = 'required'
                  this.$refs.ref_chequereferencedate.isRequired = true

                  this.PI_issuedbank.cValidate = 'required'
                  this.$refs.ref_issuedbank.isRequired = true

                  this.PI_chequeduedate.cValidate = 'required'
                  this.$refs.ref_chequeduedate.isRequired = true
              }
              else{
                  this.PI_chequereferenceno.cValidate = ''
                  this.$refs.ref_chequereferenceno.isRequired = false

                  this.PI_chequereferencedate.cValidate = ''
                  this.$refs.ref_chequereferencedate.isRequired = false

                  this.PI_issuedbank.cValidate = ''
                  this.$refs.ref_issuedbank.isRequired = false

                  this.PI_chequeduedate.cValidate = ''
                  this.$refs.ref_chequeduedate.isRequired = false
              }
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_BankReceiptH.bankcd = data.id
            this.M_CB_BankReceiptH.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {

              var paramcurrencycd = {
                OptionFunctionCd: "GetBankCurrencyCd",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: data.id,
                BankCurrencyCd_Output: ""
              }

              this.FnDynamicFunction(paramcurrencycd)
              .then(currCd => {
                if (currCd == null) return
                this.M_CB_BankReceiptH.currencycd = currCd.BankCurrencyCd

                if (this.M_CB_BankReceiptH.paymentdate && this.M_CB_BankReceiptH.paymentdate != "") {
                  this.FnGetCurrencyMiddleRate(this.getDataUser().SubPortfolioCd, this.M_CB_BankReceiptH.paymentdate, currCd.BankCurrencyCd).then(dtCurrRate => {
                    this.M_CB_BankReceiptH.currencyrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                  })
                  this.FnGetTaxCurrencyRate(this.getDataUser().SubPortfolioCd, this.M_CB_BankReceiptH.paymentdate, currCd.BankCurrencyCd).then(dtCurrRate => {
                    this.M_CB_BankReceiptH.taxrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                  })
                }
              })
            }
        })
        this.$forceUpdate()
        },
        OnchequereferencedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequereferencedate}
            }
        })
        this.$forceUpdate()
        },
        OnchequeduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequeduedate}
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
            this.getToolbar().statusFunction[4].text = "Post"
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
        },		
        M_Post(dt){
          var data = this.FormToABSList().getRowSelected()
          var dataPost = []

          data.forEach((value) => {
            dataPost.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CheckedBatchNo: value.BatchNo,
              PostBy: this.getDataUser().UserId,
              _Message_: "Payment No = "+value.PaymentNo
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
        M_Insert() {
          if (this.M_CB_BankReceiptH.runningcd != "") {
            this.FnGenerateRunningCode(
              this.getDataUser().SubPortfolioCd,
              this.M_CB_BankReceiptH.runningcd,
              this.getDataUser().UserId,
              this.M_CB_BankReceiptH.paymentdate
            ).then(dt => {
              if (dt == null) return

              this.M_CB_BankReceiptH.paymentno = dt.RunningCode

              var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: this.M_CB_BankReceiptH.trxtype == '' || this.M_CB_BankReceiptH.trxtype == null ? 'NULL' : this.M_CB_BankReceiptH.trxtype ,
                PaymentNo: this.M_CB_BankReceiptH.paymentno,
                BatchNo: 0,
                PaymentDate: this.M_CB_BankReceiptH.paymentdate,
                Descs: this.M_CB_BankReceiptH.descs,
                PaymentCd: this.M_CB_BankReceiptH.paymentcd == '' || this.M_CB_BankReceiptH.paymentcd == null ? 'NULL' : this.M_CB_BankReceiptH.paymentcd ,
                BankCd: this.M_CB_BankReceiptH.bankcd == '' || this.M_CB_BankReceiptH.bankcd == null ? 'NULL' : this.M_CB_BankReceiptH.bankcd ,
                CurrencyCd: this.M_CB_BankReceiptH.currencycd,
                CurrencyRate: this.M_CB_BankReceiptH.currencyrate ? this.replaceAllString(this.M_CB_BankReceiptH.currencyrate,',','','number') : 0 ,
                TrxAmt: this.M_CB_BankReceiptH.trxamt ? this.replaceAllString(this.M_CB_BankReceiptH.trxamt,',','','number') : 0 ,
                TaxCurrencyRate: this.M_CB_BankReceiptH.taxrate ? this.replaceAllString(this.M_CB_BankReceiptH.taxrate,',','','number') : 0,
                ChequeReferenceNo: this.M_CB_BankReceiptH.chequereferenceno,
                ChequeReferenceDate: this.M_CB_BankReceiptH.chequereferencedate == '' || this.M_CB_BankReceiptH.chequereferencedate == null ? 'NULL' : this.M_CB_BankReceiptH.chequereferencedate ,
                ChequeDueDate: this.M_CB_BankReceiptH.chequeduedate == '' || this.M_CB_BankReceiptH.chequeduedate == null ? 'NULL' : this.M_CB_BankReceiptH.chequeduedate ,
                IssuedBank: this.M_CB_BankReceiptH.issuedbank,
                Remarks: this.M_CB_BankReceiptH.remarks,
                UserInput: this.getDataUser().UserId ,
                EntryType: "R",
                PaymentCategory: this.M_CB_BankReceiptH.paymentcategory
              }

              this.postJSON(this.getUrlInsert(), param)
              .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
              })
            })
          } else {
            var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              TrxType: this.M_CB_BankReceiptH.trxtype == '' || this.M_CB_BankReceiptH.trxtype == null ? 'NULL' : this.M_CB_BankReceiptH.trxtype ,
              PaymentNo: this.M_CB_BankReceiptH.paymentno,
              BatchNo: 0,
              PaymentDate: this.M_CB_BankReceiptH.paymentdate,
              Descs: this.M_CB_BankReceiptH.descs,
              PaymentCd: this.M_CB_BankReceiptH.paymentcd == '' || this.M_CB_BankReceiptH.paymentcd == null ? 'NULL' : this.M_CB_BankReceiptH.paymentcd ,
              BankCd: this.M_CB_BankReceiptH.bankcd == '' || this.M_CB_BankReceiptH.bankcd == null ? 'NULL' : this.M_CB_BankReceiptH.bankcd ,
              CurrencyCd: this.M_CB_BankReceiptH.currencycd,
              CurrencyRate: this.M_CB_BankReceiptH.currencyrate ? this.replaceAllString(this.M_CB_BankReceiptH.currencyrate,',','','number') : 0 ,
              TrxAmt: this.M_CB_BankReceiptH.trxamt ? this.replaceAllString(this.M_CB_BankReceiptH.trxamt,',','','number') : 0 ,
              TaxCurrencyRate: this.M_CB_BankReceiptH.taxrate ? this.replaceAllString(this.M_CB_BankReceiptH.taxrate,',','','number') : 0,
              ChequeReferenceNo: this.M_CB_BankReceiptH.chequereferenceno,
              ChequeReferenceDate: this.M_CB_BankReceiptH.chequereferencedate == '' || this.M_CB_BankReceiptH.chequereferencedate == null ? 'NULL' : this.M_CB_BankReceiptH.chequereferencedate ,
              ChequeDueDate: this.M_CB_BankReceiptH.chequeduedate == '' || this.M_CB_BankReceiptH.chequeduedate == null ? 'NULL' : this.M_CB_BankReceiptH.chequeduedate ,
              IssuedBank: this.M_CB_BankReceiptH.issuedbank,
              Remarks: this.M_CB_BankReceiptH.remarks,
              UserInput: this.getDataUser().UserId ,
              EntryType: "R",
              PaymentCategory: this.M_CB_BankReceiptH.paymentcategory
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultInsert(response.Message)
            })
          }
        },
        M_Update() {
          var param = {			
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            TrxType: this.M_CB_BankReceiptH.trxtype == '' || this.M_CB_BankReceiptH.trxtype == null ? 'NULL' : this.M_CB_BankReceiptH.trxtype ,
            PaymentNo: this.M_CB_BankReceiptH.paymentno,
            PaymentDate: this.M_CB_BankReceiptH.paymentdate,
            Descs: this.M_CB_BankReceiptH.descs,
            PaymentCd: this.M_CB_BankReceiptH.paymentcd == '' || this.M_CB_BankReceiptH.paymentcd == null ? 'NULL' : this.M_CB_BankReceiptH.paymentcd ,
            BankCd: this.M_CB_BankReceiptH.bankcd == '' || this.M_CB_BankReceiptH.bankcd == null ? 'NULL' : this.M_CB_BankReceiptH.bankcd ,
            CurrencyCd: this.M_CB_BankReceiptH.currencycd,
            CurrencyRate: this.M_CB_BankReceiptH.currencyrate ? this.replaceAllString(this.M_CB_BankReceiptH.currencyrate,',','','number') : 0 ,
            TaxCurrencyRate: this.M_CB_BankReceiptH.taxrate ? this.replaceAllString(this.M_CB_BankReceiptH.taxrate,',','','number') : 0,
            ChequeReferenceNo: this.M_CB_BankReceiptH.chequereferenceno,
            ChequeReferenceDate: this.M_CB_BankReceiptH.chequereferencedate == '' || this.M_CB_BankReceiptH.chequereferencedate == null ? 'NULL' : this.M_CB_BankReceiptH.chequereferencedate ,
            ChequeDueDate: this.M_CB_BankReceiptH.chequeduedate == '' || this.M_CB_BankReceiptH.chequeduedate == null ? 'NULL' : this.M_CB_BankReceiptH.chequeduedate ,
            IssuedBank: this.M_CB_BankReceiptH.issuedbank,
            Remarks: this.M_CB_BankReceiptH.remarks,
            UserEdit: this.getDataUser().UserId ,
            EntryType: "R",
            LastUpdateStamp: this.M_CB_BankReceiptH.lastupdatestamp
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
            this.M_CB_BankReceiptH = {
                batchno: 0,
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.getToday(),
                descs: '',
                paymentcategory: 'I',
                paymentno: '',
                documentcount: 0,
                batchtotal: '',
                batchstatus: '',
                paymentcd: '',
                bankcd: '',
                currencycd: '',
                currencyrate: '',
                taxrate: '',
                originalcurrencyrate: '',
                trxamt: '',
                netamt: '',
                withholdingamt: '',
                vatamt: '',
                totalamt: '',
                underpaymentamt: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                issuedbank: '',
                remarks: '',
                trxtypedescs: '',
                paymentdescs: '',
                paymenttype: '',
                bankname: '',
                runningdescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                currentbatchtotal: 0,
                currentdocumentcount: 0,
                receiveraccount: '',
                banknamereceiveraccount: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
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
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    EntryType: 'R',
                    PaymentNo: value.PaymentNo,
                    BatchNo: value.BatchNo,
                    UserEdit: this.getDataUser().UserId,
                    lastupdatestamp: value.LastUpdateStamp,
                    _Message_: "Payment No : "+value.PaymentNo
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
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                paymentno: record.PaymentNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CB_BankReceiptH = {
                batchno: data.batchno,
                source: data.source,
                runningcd: data.runningcd,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                paymentdate: data.paymentdate,
                descs: data.descs,
                paymentcategory: data.paymentcategory,
                paymentno: data.paymentno,
                documentcount: data.documentcount,
                batchtotal: data.batchtotal,
                batchstatus: data.batchstatus,
                paymentcd: data.paymentcd,
                bankcd: data.bankcd,
                currencycd: data.currencycd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                taxrate: this.isCurrency(data.taxrate, this.decimal),
                originalcurrencyrate: data.originalcurrencyrate,
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                withholdingamt: data.withholdingamt,
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                totalamt: this.isCurrency(data.totalamt, this.decimal),
                underpaymentamt: data.underpaymentamt,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                chequeduedate: data.chequeduedate,
                issuedbank: data.issuedbank,
                remarks: data.remarks,
                trxtypedescs: data.trxtypedescs,
                paymentdescs: data.paymentdescs,
                paymenttype: data.paymenttype,
                bankname: data.bankname,
                runningdescs: data.runningdescs,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                currentbatchtotal: data.currentbatchtotal,
                currentdocumentcount: data.currentdocumentcount,
                receiveraccount: data.receiveraccount,
                banknamereceiveraccount: data.banknamereceiveraccount,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                rowid: data.rowid
                    }
                 

                this.M_CB_BankReceiptH.batchnoLabel = this.M_CB_BankReceiptH.batchno != null && this.M_CB_BankReceiptH.batchno != '' ? data.batchno + this.separator  :'' 
                this.M_CB_BankReceiptH.trxtypeLabel = this.M_CB_BankReceiptH.trxtype != null && this.M_CB_BankReceiptH.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_CB_BankReceiptH.paymentcdLabel = this.M_CB_BankReceiptH.paymentcd != null && this.M_CB_BankReceiptH.paymentcd != '' ? data.paymentcd + this.separator + data.paymentdescs :'' 
                this.M_CB_BankReceiptH.bankcdLabel = this.M_CB_BankReceiptH.bankcd != null && this.M_CB_BankReceiptH.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                       
                if(data.paymenttype != 'N'){
                  this.PI_chequereferenceno.cValidate = 'required'
                  this.$refs.ref_chequereferenceno.isRequired = true

                  this.PI_chequereferencedate.cValidate = 'required'
                  this.$refs.ref_chequereferencedate.isRequired = true

                  this.PI_issuedbank.cValidate = 'required'
                  this.$refs.ref_issuedbank.isRequired = true

                  this.PI_chequeduedate.cValidate = 'required'
                  this.$refs.ref_chequeduedate.isRequired = true
              }
              else{
                  this.PI_chequereferenceno.cValidate = ''
                  this.$refs.ref_chequereferenceno.isRequired = false

                  this.PI_chequereferencedate.cValidate = ''
                  this.$refs.ref_chequereferencedate.isRequired = false

                  this.PI_issuedbank.cValidate = ''
                  this.$refs.ref_issuedbank.isRequired = false

                  this.PI_chequeduedate.cValidate = ''
                  this.$refs.ref_chequeduedate.isRequired = false
              }

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

