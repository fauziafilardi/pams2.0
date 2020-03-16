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
                                        <ABSinputCheckBox @input="OnkautounderoverChange" :prop="PI_kautounderover" v-model="M_AR_DepositReceiptD.kautounderover"  ref="ref_kautounderover" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <!-- <ABSCompute :prop="PI_autounderover" v-model="M_AR_DepositReceiptD.autounderover"  ref="ref_autounderover" /> -->
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_DepositReceiptD.debitno"  ref="ref_debitno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_DepositReceiptD.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_headerdescs" v-model="M_AR_DepositReceiptD.headerdescs"  ref="ref_headerdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_DepositReceiptD.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_currency" v-model="M_AR_DepositReceiptD.currency"  ref="ref_currency" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_outstandingamt" v-model="M_AR_DepositReceiptD.outstandingamt"  ref="ref_outstandingamt"/>
                                      </b-col>
                                     <!-- <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AR_DepositReceiptD.allocationamt"  ref="ref_allocationamt"/>
                                      </b-col> -->
                                    </b-row>
                                   
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_AR_DepositReceiptD.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                     <!-- <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_creditcurrencyrate" v-model="M_AR_DepositReceiptD.creditcurrencyrate"  ref="ref_creditcurrencyrate"/>
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <!--<ABSinputRadioButtonVuex @input="OnoperatorChange" :prop="PI_operator" v-model="M_AR_DepositReceiptD.operator"  ref="ref_operator" />-->
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_DepositReceiptD.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="12">
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""></label>
                                      </b-col>
                                    </b-row>
                                    
                                  <b-row>
                                      <b-col md="12">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Allocation Amount</label>
                                          </b-col>
                                          <b-col md="4" style="margin-left: 10px;">
                                            <ABSTextBoxOnly @input="OnleaseperiodChange" :prop="PI_allocationamt" v-model="M_AR_DepositReceiptD.allocationamt"  ref="ref_allocationamt"/>    
                                          </b-col>
                                          <b-col md="2" style="margin-left: 10px;">
                                            <ABSinputCheckBoxOnly @input="OnfullallocateChange" :prop="PI_fullallocate" v-model="M_AR_DepositReceiptD.fullallocate"  ref="ref_fullallocate" />
                                          </b-col>
                                        </b-row>                                      
                                        <!-- <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AR_DepositReceiptD.allocationamt"  ref="ref_allocationamt"/> -->                                       
                                      </b-col>
                                   
                                  </b-row>
                                  
                                  <b-row>
                                      <b-col md="12">
                                      <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Allocation Currency Rate</label>
                                          </b-col>
                                          <b-col md="4" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_creditcurrencyrate" v-model="M_AR_DepositReceiptD.creditcurrencyrate"  ref="ref_creditcurrencyrate"/>    
                                          </b-col>
                                        </b-row>   
                                        <!--<ABSinputTextVuex :prop="PI_creditcurrencyrate" v-model="M_AR_DepositReceiptD.creditcurrencyrate"  ref="ref_creditcurrencyrate"/>-->
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnoperatorChange" :prop="PI_operator" v-model="M_AR_DepositReceiptD.operator"  ref="ref_operator" />
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
            propList: {
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_DepositReceiptD :{
              debitno:'',
                trxtype: '',
                headerdescs: '',
                descs: '',
                currency: '',
                outstandingamt: '',
                allocationamt: '',
                fullallocate: '',
                currencyrate: '',
                creditcurrencyrate: '0',
                operator: '',
                remarks: ''
                    }
            ,
            PI_kautounderover: { 
                cValidate :'', 
                cName: 'kautounderover', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [{text:'Otomatis Isikan Sisa Total Alokasi dengan Total Pembayaran ke Over/Under Payment ? ', value: 'Y'}], 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_autounderover: { 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_debitno: {
              cValidate :'', 
              cName: 'debitno', 
              cLabel: 'Doc No.', 
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
            PI_trxtype: { 
              cValidate :'', 
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
            PI_headerdescs: { 
              cValidate :'', 
              cName: 'headerdescs', 
              cLabel: 'Description',
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
            PI_descs: { 
              cValidate :'', 
              cName: 'descs',
              cLabel: 'Detail Description',
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
            PI_currency: { 
              cValidate :'', 
              cName: 'currency',
              cLabel: 'Currency',
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
            PI_outstandingamt: { 
              cValidate :'', 
              cName: 'outstandingamt',  
              cLabel: 'Outstanding Amount',
              cLabelSize: 4, 
              cOrder: 1, 
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocationamt: { 
                cValidate :'', 
                cName: 'allocationamt', 
                cLabel: 'Allocation Amount', 
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
            PI_fullallocate: { 
                cValidate :'', 
                cName: 'fullallocate', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [{text:'', value: 'Y'}], 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
              cValidate :'', 
              cName: 'currencyrate',  
              cLabel: 'Currency Rate',
              cLabelSize: 4, 
              cOrder: 1, 
              cKey: false, 
              cType: 'decimal',
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditcurrencyrate: { 
                cValidate :'', 
                cName: 'creditcurrencyrate', 
                cLabel: 'Allocation Currency Rate', 
                cLabelSize: 4, 
                cOrder: -1, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operator: { 
                cValidate :'', 
                cName: 'operator', 
                cId: 'rdboperator', 
                cRadioOptions: [{ text: 'Multiply (*)', value: '*' }, { text: 'Divide (/)', value: '/' }], 
                cRadioDefaultOption: '', 
                cLabel:'Operator', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
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
            },

            BaseCurrencyCd: '' 
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
        OnkautounderoverChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{kautounderover}
            }
        })
        this.$forceUpdate()
        },
        OnoperatorChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{operator}
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
          this.getToolbar().statusFunction[0].disabled = false
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
            this.M_AR_DepositReceiptD.currencycd = data.CurrencyCd
            this.getSpec()
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
          // console.log(this.M_AR_DepositReceiptD)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitSequenceNo: this.DataRow.DebitSequenceNo,
                CreditSequenceNo: this.DataRow.CreditSequenceNo,
                CurrencyOperator: this.M_AR_DepositReceiptD.operator,
                CreditNo: this.DataRowPage1.ReceiptNo,
                CurrencyCd: this.M_AR_DepositReceiptD.currency,
                DebtorCd: this.DataRowPage1.DebtorCd,
                AllocationAmt: this.M_AR_DepositReceiptD.allocationamt && this.M_AR_DepositReceiptD.allocationamt != '' ? this.replaceAllString(this.M_AR_DepositReceiptD.allocationamt,',','','number') : 0 ,//this.M_AR_DepositReceiptD.allocationamt && this.M_AR_DepositReceiptD.allocationamt != "" ? this.M_AR_DepositReceiptD.allocationamt : 0,
                CreditCurrencyRate: this.M_AR_DepositReceiptD.creditcurrencyrate && this.M_AR_DepositReceiptD.creditcurrencyrate != '' ? this.replaceAllString(this.M_AR_DepositReceiptD.creditcurrencyrate,',','','number') : 0 ,//this.M_AR_DepositReceiptD.creditcurrencyrate : 0,
                Remarks: this.M_AR_DepositReceiptD.remarks,
                UserEdit: this.getDataUser().UserId ,
                AutoUnderOver: this.M_AR_DepositReceiptD.autounderover == "Y" ? "Y" : "N"
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })

        },
		M_ClearForm(){
            this.M_AR_DepositReceiptD = {
              debitno:'',
                trxtype: '',
                headerdescs: '',
                descs: '',
                currency: '',
                outstandingamt: '',
                allocationamt: '',
                fullallocate: '',
                currencyrate: '',
                creditcurrencyrate: '0',
                operator: '',
                remarks: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_DepositReceiptD.currencycd = data.CurrencyCd 



        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
          console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                currencycd: record.CurrencyCd,
                debtorcd: this.DataRowPage1.DebtorCd,
                debitsequenceno: record.DebitSequenceNo,
                creditsequenceno: record.CreditSequenceNo,
                creditno: this.DataRowPage1.ReceiptNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

        
        var data = response.Data[0]
        console.log(data)
this.M_AR_DepositReceiptD = {
                debitno:data.debitno,
                trxtype: data.trxtype,
                headerdescs: data.headerdescs,
                descs: data.descs,
                currency: data.currencycd,
                outstandingamt: this.isCurrency(record.OutstandingAmt, this.decimal),
                allocationamt: this.isCurrency(data.totalallocatedamt, this.decimal),
                fullallocate: data.totalallocatedamt > 0 ? "Y" : "",
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                creditcurrencyrate: this.isCurrency(data.allocationcurrencyrate, this.decimal),
                operator: data.currencyoperator,
                remarks: data.remarks
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        OnfullallocateChange (data) {
          this.$nextTick(() => {
              if (this.inputStatus != "VIEW") {
                if (data == "Y") {
                  this.M_AR_DepositReceiptD.allocationamt = this.isCurrency(this.M_AR_DepositReceiptD.outstandingamt)
                }
                else {
                  this.M_AR_DepositReceiptD.allocationamt = ""
                }
              }
          })
        },
        getSpec () {
            //GetGLSpecification
            var param = {
                OptionFunctionCd: 'GetGLSpecification',
                ModuleCd: "GL"
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2 != null) { 
                    if (FnOpt2.length > 0) {
                      var data = FnOpt2[0]
                      this.BaseCurrencyCd = data.BaseCurrencyCd

                      if (this.DataRowPage1.ReceiptNo && this.DataRowPage1.ReceiptNo != '') {
                        if (this.DataRowPage1.CurrencyCd.toUpperCase() != data.BaseCurrencyCd.toUpperCase()) {
                          this.propList.initialWhere = " (CurrencyCd = '" + this.DataRowPage1.CurrencyCd + "' OR CurrencyCd = '" + data.BaseCurrencyCd + "') "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.DebtorCd + "', '" + this.DataRowPage1.ReceiptNo + "', 'S'"
                          this.FormToABSList().doGetList('','eb_getList')
                        }
                        else {
                          this.propList.initialWhere = ""
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.DebtorCd + "', '" + this.DataRowPage1.ReceiptNo + "', 'S'"
                          this.FormToABSList().doGetList('','eb_getList')
                        }
                      }
                      else {
                        this.propList.initialWhere = " 1 = 0 "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.DebtorCd + "', '" + this.DataRowPage1.ReceiptNo + "', 'S'"
                        this.FormToABSList().doGetList('','eb_getList')
                      }
                    }
                } 
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

