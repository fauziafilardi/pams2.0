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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_CNChargeToInvD.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_journaltype" v-model="M_AR_CNChargeToInvD.journaltype"  ref="ref_journaltype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CNChargeToInvD.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_CNChargeToInvD.referenceno"  ref="ref_referenceno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_CNChargeToInvD.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_source" v-model="M_AR_CNChargeToInvD.source"  ref="ref_source" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_CNChargeToInvD.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_detaildescs" v-model="M_AR_CNChargeToInvD.detaildescs"  ref="ref_detaildescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_CNChargeToInvD.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcd" v-model="M_AR_CNChargeToInvD.taxcd"  ref="ref_taxcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_CNChargeToInvD.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_CNChargeToInvD.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AR_CNChargeToInvD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netamt" v-model="M_AR_CNChargeToInvD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_vatamt" v-model="M_AR_CNChargeToInvD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalamt" v-model="M_AR_CNChargeToInvD.totalamt"  ref="ref_totalamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncreditnotestatusChange" :prop="PI_creditnotestatus" v-model="M_AR_CNChargeToInvD.creditnotestatus"  ref="ref_creditnotestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CNChargeToInvD.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err1 || err2">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col>
                                                  <label v-show="err1" class="lbl-value-view-form" style="color:red;">*Note : Tax Invoice for this Invoice has already been assigned either VAT No. Or Withholding No  </label>
                                                  <label v-show="err2" class="lbl-value-view-form" style="color:red;">Please proceed with necessary actions </label>
                                                </b-col>
                                            </b-row>                                              
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
      Module:"AR",
      error: false,
      err1: false,
      err2: false,
            propList: {
                initialWhere:"CreditDate = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'TimeEdit DESC,DebitNo ASC,TrxType ASC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_CNChargeToInvD :{
                trxtype: '',
                journaltype: '',
                debitno: '',
                debitdate: '',
                detaildescs: '',
                descs: '',
                referenceno: '',
                currencycd: '',
                taxcd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                remarks: '',
                netamt: '',
                trxamt: '',
                vatamt: '',
                totalamt: '',
                creditnotestatus: '',
                taxdescs: '',
                amortizedescs: '',
                source: ''
                    }
            ,
            PI_trxtype: { 
                cValidate :'max:20', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_journaltype: { 
                cLabel: 'Journal Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                cValidate :'', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cOrder: 4, 
                cKey: true, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_source: { 
                cLabel: 'Doc. Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_detaildescs: { 
                cValidate :'', 
                cName: 'detaildescs', 
                cLabel: 'Detail Description', 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_taxcd: { 
                cLabel: 'Tax', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_taxcd: { 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax', 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cName: 'currencyrate', 
                cLabel: 'Currency Rate', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_taxcurrencyrate: { 
                cLabel: 'Tax Currency Rate ', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_taxcurrencyrate: { 
                cValidate :'', 
                cName: 'taxcurrencyrate', 
                cLabel: 'Tax Currency Rate ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Trans. Amount', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_netamt: { 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalamt: { 
                cLabel: 'Total Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_creditnotestatus: { 
                cValidate :'', 
                cName: 'creditnotestatus', 
                cId: 'rdbcreditnotestatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Credit Note', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OncreditnotestatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{creditnotestatus}
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
            this.M_AR_CNChargeToInvD.creditdate = data.CreditDate 
           
            var dTime = this.momentDateFormat(data.CreditDate, 'DD/MM/YYYY')

            this.propList.initialWhere ="SubportfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND DebtorCd = '"+data.DebtorCd+"' AND CurrencyCd = '"+data.CurrencyCd+"' AND ( CreditNo IS NULL OR CreditNo = '"+data.CreditNo+"' ) AND JournalDate <= Cast('"+dTime+"' AS DATETIME)"
        

            this.FormToABSList().doGetList('','eb_getList')
        },
        M_Insert() {
        },
        M_Update() {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                DebtorCd :this.DataRowPage1.DebtorCd,
                CreditDate:this.M_AR_CNChargeToInvD.creditdate,
                CreditNo:this.M_AR_CNChargeToInvD.creditno,
                CurrencyCd:this.M_AR_CNChargeToInvD.currencycd,
                CreditSequenceNo: this.DataRow.CreditSequenceNo,//this.M_AR_CNChargeToInvD.creditsequenceno,
                DebitSequenceNo: this.DataRow.DebitSequenceNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                CreditNoteStatus: this.M_AR_CNChargeToInvD.creditnotestatus,
                Remarks: this.M_AR_CNChargeToInvD.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CNChargeToInvD.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultUpdate(response.Message)
              this.refreshListParent(true)
            })
        },
		M_ClearForm(){
            this.M_AR_CNChargeToInvD = {
                trxtype: '',
                journaltype: '',
                debitno: '',
                debitdate: '',
                detaildescs: '',
                descs: '',
                referenceno: '',
                currencycd: '',
                taxcd: '',
                currencyrate: '',
                taxcurrencyrate: '',
                remarks: '',
                netamt: '',
                trxamt: '',
                vatamt: '',
                totalamt: '',
                creditnotestatus: '',
                taxdescs: '',
                amortizedescs: '',
                source: ''
                    }
            		
		},
        M_New(){
            // let data = this.$store.getters.GetPage1Data
            // this.M_AR_CNChargeToInvD.creditdate = data.CreditDate 
            // this.M_AR_CNChargeToInvD.creditno = data.CreditNo


        },
        M_Edit(){
          // let data = this.$store.getters.GetPage1Data
          // this.M_AR_CNChargeToInvD.creditno = data.CreditNo 
          // this.M_AR_CNChargeToInvD.creditdate = data.CreditDate 
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()
          var dataDelete = []

          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CreditNo: this.DataRowPage1.CreditNo,
              DebtorCd: this.DataRowPage1.DebtorCd,
              CurrencyCd: value.CurrencyCd,
              CreditDate: this.DataRowPage1.CreditDate,
              CreditSequenceNo: value.CreditSequenceNo,
              UserEdit: this.getDataUser().UserId,
              LastUpdateStamp: value.LastUpdateStamp,
              _Message_: ''
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
                this.refreshListParent(true)
            })   
        },        
        getDataBy (record) {
          console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                debitsequenceno: record.DebitSequenceNo,
                creditsequenceno: record.CreditSequenceNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                creditno: this.DataRowPage1.CreditNo,
                debtorcd: record.DebtorCd,
                currencycd: record.CurrencyCd,
                creditdate: this.DataRowPage1.CreditDate
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return
this.$store.commit('setStatusLoader', false)
                var data = response.Data[0]
this.M_AR_CNChargeToInvD = {
                trxtype: data.trxtype,
                journaltype: data.journaltype,
                debitno: data.debitno,
                debitdate: this.momentDate(data.debitdate),
                detaildescs: data.detaildescs,
                descs: data.descs,
                referenceno: data.referenceno,
                currencycd: data.currencycd,
                taxcd: data.taxcd,
                currencyrate: this.isCurrency(data.currencyrate,this.decimal),
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate,this.decimal),
                remarks: data.remarks,
                netamt: this.isCurrency(data.netamt,this.decimal),
                trxamt: this.isCurrency(data.trxamt,this.decimal),
                vatamt: this.isCurrency(data.vatamt,this.decimal),
                totalamt: this.isCurrency(data.totalamt,this.decimal),
                creditnotestatus: data.creditnotestatus,
                taxdescs: data.taxdescs,
                amortizedescs: data.amortizedescs,
                source: data.source,
                lastupdatestamp:record.LastUpdateStamp,
                creditno: this.DataRowPage1.CreditNo,
                creditdate: this.DataRowPage1.CreditDate
                    }

          if(data.taxdescs != ''){
            this.error = true
            this.err1 = true
            this.err2 = true
          }
          else{
            this.err1 = false
            this.err2 = false
            this.error = false
          }

          // if(data.amortizedescs != ''){
            
          // }
          // else{
            
          // }

          switch(data.source){
            case"S":
              this.M_AR_CNChargeToInvD.journaltype = 'N/A'
            break;
            case"D":
              this.M_AR_CNChargeToInvD.journaltype = 'N/A'
            break;
            default:
              if(data.source=='I'){
                this.M_AR_CNChargeToInvD.journaltype = 'Income'
              }else{
                this.M_AR_CNChargeToInvD.journaltype = 'Deffered'
              }
            break;
          }  
          switch(data.source){
            case"S":
              this.M_AR_CNChargeToInvD.source = 'Invoice Deposit'
            break;
            case"I":
              this.M_AR_CNChargeToInvD.source = 'Invoice'
            break;
            case"G":
              this.M_AR_CNChargeToInvD.source = 'Invoice Generated'
            break;
            case"D":
              this.M_AR_CNChargeToInvD.source = 'Debit Notes'
            break;
          }           

          // this.M_AR_CNChargeToInvD.creditno = record.CreditNo
          // this.M_AR_CNChargeToInvD.creditdate = record.CreditDate

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

