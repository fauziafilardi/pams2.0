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
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditno" v-model="M_AP_PaymentD.creditno"  ref="ref_creditno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AP_PaymentD.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_AP_PaymentD.trxtype" :label="M_AP_PaymentD.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_headerdescs" v-model="M_AP_PaymentD.headerdescs"  ref="ref_headerdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_PaymentD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnvatpaidbyChange" :prop="PI_vatpaidby" v-model="M_AP_PaymentD.vatpaidby"  ref="ref_vatpaidby" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnwithholdingpaidbyChange" :prop="PI_withholdingpaidby" v-model="M_AP_PaymentD.withholdingpaidby"  ref="ref_withholdingpaidby" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_outstandingamt" v-model="M_AP_PaymentD.outstandingamt"  ref="ref_outstandingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OntotalallocateamtChange" :prop="PI_totalallocatedamt" v-model="M_AP_PaymentD.totalallocatedamt"  ref="ref_totalallocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_PaymentD.currencycd" :label="M_AP_PaymentD.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnoperatorChange" :prop="PI_operator" v-model="M_AP_PaymentD.operator"  ref="ref_operator" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                      <b-row>
                                        <b-col md="2"></b-col>
                                        <b-col md="2">
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Outstanding Amount', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                        <b-col md="2">
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Currency Rate', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                        <b-col md="2">
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Allocation Amount', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                        <b-col md="2">
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Allocation Currency Rate', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                      </b-row>
                                    </div>
                                    <b-row v-for="(data, index) in CreditCharge" v-bind:key="index">
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="data.props.label"
                                        />
                                      </b-col>
                                      <b-col md="2" v-show="inputStatus!=='VIEW'">
                                        <b-form-input    
                                        :name="data.props.outstanding.cName"
                                        :id="data.props.outstanding.cName"
                                        rowLine=0
                                        v-model="data.data.outstanding"
                                        type="text"
                                        @input="handleInput(index, data.data.outstanding, 'outstanding')"
                                        @blur="onBlur('outstanding', data.data.outstanding)"
                                        @keypress.native="formatNumber($event, index, data.data.outstanding, 'outstanding')"
                                        @blur.native="isCurrency2(index, data.data.outstanding,'outstanding')"	
                                        :ref="'ref_outstanding_' + (index + 1)"
                                        style="text-align:right;"
                                        class="text-field-form form-control input"
                                        disabled="disabled"
                                      />
                                      </b-col>
                                      <b-col md="2" v-if="inputStatus=='VIEW' && data.props.outstanding.cType=='decimal'" style="text-align: right !important;">
                                        <label class="lbl-value-view-form notranslate">{{data.data.outstanding}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW' && data.props.outstanding.cType=='numeric'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.outstanding}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.outstanding}}</label>
                                      </b-col>

                                      <b-col md="2" v-show="inputStatus!=='VIEW'">
                                        <b-form-input    
                                        :name="data.props.currencyrate.cName"
                                        :id="data.props.currencyrate.cName"
                                        rowLine=0
                                        v-model="data.data.currencyrate"
                                        type="text"
                                        @input="handleInput(index, data.data.currencyrate, 'currencyrate')"
                                        @blur="onBlur('currencyrate', index, data.data.currencyrate)"
                                        @keypress.native="formatNumber($event, index, data.data.currencyrate, 'currencyrate')"
                                        @blur.native="isCurrency2(index, data.data.currencyrate, 'currencyrate')"	
                                        :ref="'ref_currencyrate_' + (index + 1)"
                                        style="text-align:right;"
                                        class="text-field-form form-control input"
                                        disabled="disabled"
                                      />
                                      </b-col>
                                      <b-col md="2" v-if="inputStatus=='VIEW' && data.props.currencyrate.cType=='decimal'" style="text-align: right !important;">
                                        <label class="lbl-value-view-form notranslate">{{data.data.currencyrate}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW' && data.props.currencyrate.cType=='numeric'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.currencyrate}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.currencyrate}}</label>
                                      </b-col>
                                      
                                      <b-col md="2" v-show="inputStatus!=='VIEW'">
                                        <b-form-input
                                        v-validate="'max_value:' + replaceAllString(data.data.outstanding, ',', '', 'number')"
                                        :name="data.props.allocamt.cName"
                                        :id="data.props.allocamt.cName"
                                        rowLine=0
                                        v-model="data.data.allocamt"
                                        type="text"
                                        @input="handleInput(index, data.data.allocamt, 'allocamt')"
                                        @blur="onBlur('allocamt', index, data.data.allocamt)"
                                        @keypress.native="formatNumber($event, index, data.data.allocamt, 'allocamt')"
                                        @blur.native="isCurrency2(index, data.data.allocamt, 'allocamt')"	
                                        :ref="'ref_allocamt_' + (index + 1)"
                                        style="text-align:right;"
                                        class="text-field-form form-control input"
                                      />
                                      <span v-show="errors.has('FormScope_' + PageLevel + '_' + TabIndex +'.' + data.props.allocamt.cName)"
                                        class="error-span">{{ errors.first('FormScope_' + PageLevel + '_' + TabIndex +'.' + data.props.allocamt.cName) }}
                                        </span>
                                      </b-col>
                                      <b-col md="2" v-if="inputStatus=='VIEW' && data.props.allocamt.cType=='decimal'" style="text-align: right !important;">
                                        <label class="lbl-value-view-form notranslate">{{data.data.allocamt}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW' && data.props.allocamt.cType=='numeric'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.allocamt}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.allocamt}}</label>
                                      </b-col>

                                      <b-col md="2" v-show="inputStatus!=='VIEW'">
                                        <b-form-input    
                                        :name="data.props.alloccurrencyrate.cName"
                                        :id="data.props.alloccurrencyrate.cName"
                                        rowLine=0
                                        v-model="data.data.alloccurrencyrate"
                                        type="text"
                                        @input="handleInput(index, data.data.alloccurrencyrate, 'alloccurrencyrate')"
                                        @blur="onBlur('alloccurrencyrate', index, data.data.alloccurrencyrate)"
                                        @keypress.native="formatNumber($event, index, data.data.alloccurrencyrate, 'alloccurrencyrate')"
                                        @blur.native="isCurrency2(index, data.data.alloccurrencyrate, 'alloccurrencyrate')"	
                                        :ref="'ref_alloccurrencyrate_' + (index + 1)"
                                        style="text-align:right;"
                                        class="text-field-form form-control input"
                                        disabled="disabled"
                                      />
                                      </b-col>
                                      <b-col md="2" v-if="inputStatus=='VIEW' && data.props.alloccurrencyrate.cType=='decimal'" style="text-align: right !important;">
                                        <label class="lbl-value-view-form notranslate">{{data.data.alloccurrencyrate}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW' && data.props.alloccurrencyrate.cType=='numeric'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.alloccurrencyrate}}</label>
                                      </b-col>
                                      <b-col md="2" v-else-if="inputStatus=='VIEW'">
                                        <label class="lbl-value-view-form notranslate">{{data.data.alloccurrencyrate}}</label>
                                      </b-col>

                                    </b-row>

                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_PaymentD.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->

							</b-row>
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
			Module:"AP",
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
            BaseCurrencyCd: null,
            CreditCharge: [],
            DataDetail: [],

            M_AP_PaymentD :{
                creditno: '',
                referenceno: '',
                trxtype: '',
                headerdescs: '',
                descs: '',
                vatpaidby: '',
                withholdingpaidby: '',
                outstandingamt: '',
                totalallocatedamt: '0',
                currencycd: '',
                operator: '',
                detailoutstandingamt: '',
                creditcurrencyrate: '',
                allocationamt: '0',
                debitcurrencyrate: '0',
                remarks: ''
                    }
            ,
            PI_creditno: { 
                cValidate :'', 
                cName: 'creditno', 
                cLabel: 'Doc. No', 
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
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_headerdescs: { 
                cValidate :'', 
                cName: 'headerdescs', 
                cLabel: 'Description', 
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
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Detail Description', 
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
            PI_vatpaidby: { 
                cValidate :'', 
                cName: 'vatpaidby', 
                cId: 'rdbvatpaidby', 
                cRadioOptions: [{ text: 'Creditor', value: 'C' }, { text: 'Management', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'VAT Paid By', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_withholdingpaidby: { 
                cValidate :'', 
                cName: 'withholdingpaidby', 
                cId: 'rdbwithholdingpaidby', 
                cRadioOptions: [{ text: 'Creditor', value: 'C' }, { text: 'Management', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'With Holding Paid By', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_outstandingamt: { 
                cValidate :'', 
                cName: 'outstandingamt', 
                cLabel: 'Outstanding Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalallocatedamt: { 
                cValidate :'cmax_value:a', 
                cName: 'totalallocatedamt', 
                cLabel: 'Allocation Amount', 
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
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_operator: { 
                cValidate :'', 
                cName: 'operator', 
                cId: 'rdboperator', 
                cRadioOptions: [{ text: 'Multiply (*)', value: '*' }, { text: 'Divide (/)', value: '/' }], 
                cRadioDefaultOption: '', 
                cLabel:'Operator', 
                cLabelSize: 4, 
                cDefault: '', 
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentD.trxtype = data.id
            this.M_AP_PaymentD.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnvatpaidbyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatpaidby}
            }
        })
        this.$forceUpdate()
        },
        OnwithholdingpaidbyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{withholdingpaidby}
            }
        })
        this.$forceUpdate()
        },
        OntotalallocateamtChange (data) {
            // if (this.M_AR_OfficialReceiptD.fullallocate == "Y") return
            if (this.inputStatus != 'VIEW') {
                var otdtotal = parseFloat(this.replaceAllString(this.M_AP_PaymentD.outstandingamt, ',', '', 'number'))

                if (data <= 0 || data == '') {
                    for (let a = 0 ; a < this.CreditCharge.length ; a ++) {
                        // var x = (parseFloat(this.replaceAllString(this.CreditCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
                        this.CreditCharge[a].data.allocamt = this.isCurrency(0, this.decimal) //parseFloat(x).toFixed(this.decimal)

                        // this.PI_totalallocatedamt.cValidate = 'max_value:' + this.M_AR_OfficialReceiptD.outstandingamt + '|cmax_value:Allocation Amount Cant be greater Than Outstanding Amount'
                    }
                }
                else {
                    for (let a = 0 ; a < this.CreditCharge.length ; a ++) {
                        var otd = parseFloat(this.replaceAllString(this.CreditCharge[a].data.outstanding, ',', '', 'number'))
                        var xdata = parseFloat(this.replaceAllString(data, ',', '', 'number'))

                        if (xdata < otdtotal) {
                            var x = (otd / parseFloat(this.TotalCharge)) * xdata
                            this.CreditCharge[a].data.allocamt = this.isCurrency(x, this.decimal)
                            // this.PI_totalallocatedamt.cValidate = 'max_value:' + this.M_AR_OfficialReceiptD.outstandingamt + '|cmax_value:Allocation Amount Cant be greater Than Outstanding Amount'
                        }
                        else {
                            this.CreditCharge[a].data.allocamt = this.isCurrency(otd, this.decimal)
                        }
                    }
                }
            }
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_PaymentD.currencycd = data.id
            this.M_AP_PaymentD.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
        },
        paramFromParent(){
            this.$parent.showForm = false
            this.$store.commit('setNewStatus', false)
            let data = this.$store.getters.GetPage1Data
            this.M_AP_PaymentD.currencycd = data.CurrencyCd
            // this.getSpec()
            this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + (data.DebitNo ? data.DebitNo : '') + "', '" + (data.CreditorCd ? data.CreditorCd : '') + "'"
            console.log(data)
            if (data.DebitNo && data.DebitNo != '') {
                if (data.CurrencyCd.toUpperCase() == this.BaseCurrencyCd.toUpperCase()) {
                this.FormToABSList().doGetList('','eb_getList')
                }
                else {
                this.propList.initialWhere = " (CurrencyCd = '" + data.CurrencyCd + "' OR CurrencyCd = '" + this.BaseCurrencyCd + "') "
                this.FormToABSList().doGetList('','eb_getList')
                }
            }
            else {
                this.propList.initialWhere = " 1 = 0 "
                this.FormToABSList().doGetList('','eb_getList')
            }
        },
        M_CheckboxChecked(data, status, index){
        },
        M_Insert() {
        },
        M_Update() {
            var paramFn = {
                OptionFunctionCd: "GetAPDebitHStatus",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.DataRowPage1.DebitNo,
            }
            this.FnDynamicFunction(paramFn)
            .then(ress => {
                if (ress[0].Status == 'P') {
                    this.alertError('Cannot Edit Data, status already Posted')
                    return
                }
                else {
                    if (this.DataRow.DebitSequenceNo && this.DataRow.DebitSequenceNo !== '' && this.DataRow.DebitSequenceNo.toString() !== "0") {
                        this.Update()
                    }
                    else {
                        this.Insert()
                    }
                }
            })
        },
        Update() {
            // 1. DebitAllocation (Update LineNo:1, Insert LineNo:2) *CreditCharge
            // 2. DebitDDebitH (Update LineNo:2) *Master
            // 3. BatchMaster (Update LineNo:3) *Master

            var debitsequenceno = this.DataRow.DebitSequenceNo
            var debitno = this.DataRowPage1.DebitNo
            var debitcurrencycd = this.DataRowPage1.CurrencyCd
            var DebitAllocation_Param = []
            var DebitDDebitH_Param = {}
            var BatchMaster_Param = {}

            // 1
            for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                if (this.DataDetail[x].DebitDetailSequenceNo) {
                    //update
                    DebitAllocation_Param.push({
                        _Method_:'UPDATE',
                        _LineNo_: 1,
                        DebitSequenceNo: debitsequenceno,
                        DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                        CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                        CurrencyOperator: this.M_AP_PaymentD.operator,
                        CreditCurrencyCd: this.M_AP_PaymentD.currencycd,
                        DebitCurrencyCd: debitcurrencycd,
                        CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].CurrencyRate, this.decimal) , ',', '', 'number'),
                        DebitCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal) , ',', '', 'number'),
                        AllocationAmt: this.replaceAllString( this.isCurrency(this.CreditCharge[x].data.allocamt, this.decimal) , ',', '', 'number'),
                        UserEdit: this.getDataUser().UserId
                    })
                }
                else {
                    //insert
                    if (parseFloat(this.replaceAllString( this.isCurrency(this.CreditCharge[x].data.allocamt, this.decimal) , ',', '', 'number')) > 0) {
                        DebitAllocation_Param.push({
                            _Method_:'SAVE',
                            _LineNo_: 2,
                            DebitSequenceNo: debitsequenceno,
                            CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                            CurrencyOperator: this.M_AP_PaymentD.operator,
                            CreditCurrencyCd: this.M_AP_PaymentD.currencycd,
                            DebitCurrencyCd: debitcurrencycd,
                            CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].CurrencyRate, this.decimal) , ',', '', 'number'),
                            DebitCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal) , ',', '', 'number'),
                            AllocationAmt: this.replaceAllString( this.isCurrency(this.CreditCharge[x].data.allocamt, this.decimal) , ',', '', 'number'),
                            UserInput: this.getDataUser().UserId
                        })
                    }
                }
            }

            // 2
            DebitDDebitH_Param = {
                _Method_:'UPDATE',
                _LineNo_: 2,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitSequenceNo: debitsequenceno,
                DebitNo: debitno,
                CurrencyOperator: this.M_AP_PaymentD.operator,
                Remarks: this.M_AP_PaymentD.remarks,
                UserEdit: this.getDataUser().UserId
            }

            // 3
            BatchMaster_Param = {
                _Method_:'UPDATE',
                _LineNo_: 3,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: debitno,
                EntryType: "P",
                UserEdit: this.getDataUser().UserId
            }

            // Process
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: [{
                    A_Looping: DebitAllocation_Param,
                    B_Update: DebitDDebitH_Param,
                    C_Update: BatchMaster_Param
                }]
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate("Data Has Been Saved Successfully")
                this.refreshListParent(true)
            })
        },
        Insert() {
            // 1. DebitD (Insert LineNo:1) *Master With Output:DebitSequenceNo
            // 2. DebitAllocation (Insert LineNo:2) *CreditCharge
            // 2. DebitDDebitH (Update LineNo:2) *Master
            // 4. BatchMaster (Update LineNo:3) *Master

            var creditsequenceno = this.DataRow.CreditSequenceNo
            var debitno = this.DataRowPage1.DebitNo
            var debitcurrencycd = this.DataRowPage1.CurrencyCd
            var OutputParam = "DebitSequenceNo"
            var DebitD_Param = {}
            var DebitAllocation_Param = []
            var DebitDDebitH_Param = {}
            var BatchMaster_Param = {}

            // 1
            DebitD_Param = {
                _Method_:'SAVE',
                _LineNo_: 1,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: debitno,
                CreditSequenceNo: creditsequenceno,
                CurrencyOperator: this.M_AP_PaymentD.operator,
                Remarks: this.M_AP_PaymentD.remarks,
                UserInput: this.getDataUser().UserId,
                DebitSequenceNo_Output: ""
            }

            // 2
            for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                if (parseFloat(this.replaceAllString( this.isCurrency(this.CreditCharge[x].data.allocamt, this.decimal) , ',', '', 'number')) > 0) {
                    DebitAllocation_Param.push({
                        _Method_:'SAVE',
                        _LineNo_: 2,
                        DebitSequenceNo: OutputParam,
                        CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                        CurrencyOperator: this.M_AP_PaymentD.operator,
                        CreditCurrencyCd: this.M_AP_PaymentD.currencycd,
                        DebitCurrencyCd: debitcurrencycd,
                        CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].CurrencyRate, this.decimal) , ',', '', 'number'),
                        DebitCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal) , ',', '', 'number'),
                        AllocationAmt: this.replaceAllString( this.isCurrency(this.CreditCharge[x].data.allocamt, this.decimal) , ',', '', 'number'),
                        UserInput: this.getDataUser().UserId
                    })
                }
            }

            // 3
            DebitDDebitH_Param = {
                _Method_:'UPDATE',
                _LineNo_: 2,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitSequenceNo: OutputParam,
                DebitNo: debitno,
                CurrencyOperator: this.M_AP_PaymentD.operator,
                Remarks: this.M_AP_PaymentD.remarks,
                UserEdit: this.getDataUser().UserId
            }

            // 4
            BatchMaster_Param = {
                _Method_:'UPDATE',
                _LineNo_: 3,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: debitno,
                EntryType: "P",
                UserEdit: this.getDataUser().UserId
            }

            // Process
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: [{
                    A_Insert: DebitD_Param,
                    B_Looping: DebitAllocation_Param,
                    C_Update: DebitDDebitH_Param,
                    D_Update: BatchMaster_Param
                }]
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate("Data Has Been Saved Successfully")
                this.refreshListParent(true)
            })
        },
        M_ClearForm(){
            this.M_AP_PaymentD = {
                creditno: '',
                referenceno: '',
                trxtype: '',
                headerdescs: '',
                descs: '',
                vatpaidby: '',
                withholdingpaidby: '',
                outstandingamt: '',
                totalallocatedamt: '0',
                currencycd: '',
                operator: '',
                detailoutstandingamt: '',
                creditcurrencyrate: '',
                allocationamt: '0',
                debitcurrencyrate: '0',
                remarks: ''
            }
        },
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_PaymentD.currencycd = data.CurrencyCd
        },
        M_Edit(){
        },
        M_Delete(dt){
        },
        getCreditCharge(record) {
            var paramFn = {
                OptionFunctionCd: "SelectCreditChargesDebitAllocation",
                ModuleCd: this.Module,
                CreditSequenceNo: record.CreditSequenceNo,
                DebitNo: this.DataRowPage1.DebitNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }
            this.FnDynamicFunction(paramFn)
            .then(ress => {
                if (ress == null) return
                var datas = []
                this.DataDetail = ress
                this.CreditCharge = []
                var totalChargeAmt = 0
                for (let x = 0; x < ress.length; x ++) {
                    totalChargeAmt += parseFloat(ress[x].ChargeAmt)
                    var nextChargeAmt = parseFloat(ress[x].ChargeAmt) - parseFloat(ress[x].AllocatedByOtherDocumentAmt)
                    this.CreditCharge.push({
                        data: {
                            outstanding: nextChargeAmt && nextChargeAmt != '' && parseFloat(nextChargeAmt) > 0 ? this.isCurrency(nextChargeAmt, this.decimal) : '',
                            currencyrate: ress[x].CurrencyRate && ress[x].CurrencyRate != '' && parseFloat(ress[x].CurrencyRate) > 0 ? this.isCurrency(ress[x].CurrencyRate, this.decimal) : '',
                            allocamt: ress[x].AllocationAmt && ress[x].AllocationAmt != '' && parseFloat(ress[x].AllocationAmt) > 0 ? this.isCurrency(ress[x].AllocationAmt, this.decimal) : '',
                            alloccurrencyrate: ress[x].AllocationCurrencyRate && ress[x].AllocationCurrencyRate != '' && parseFloat(ress[x].AllocationCurrencyRate) > 0 ? this.isCurrency(ress[x].AllocationCurrencyRate, this.decimal) : ''
                        },
                        props: {
                            label: {
                                cLabel: ress[x].TaxTypeDescs, 
                                cLabelSize: 4, 
                                cValue: '', 
                                cPageLevel: this.PageLevel, 
                                cTabIndex: this.TabIndex, 
                                cVisible: true,
                                cClass: 'lbl-col-align'
                            },
                            outstanding: {
                                cValidate :'', 
                                cName: 'outstanding_' + (x+1), 
                                cLabel: '', 
                                cLabelSize: 4, 
                                cOrder: 0, 
                                cKey: false, 
                                cType: 'decimal',
                                cDecimal: 2,
                                cVisible: true, 
                                cProtect: true, 
                                cPageLevel: this.PageLevel, 
                                cTabIndex: this.TabIndex, 
                                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex ,
                                cRowDisable: []
                            },
                            currencyrate: {
                                cValidate :'', 
                                cName: 'currencyrate_' + (x+1), 
                                cLabel: '', 
                                cLabelSize: 4, 
                                cOrder: 0, 
                                cKey: false, 
                                cType: 'decimal',
                                cDecimal: 2,
                                cVisible: true, 
                                cProtect: true, 
                                cPageLevel: this.PageLevel, 
                                cTabIndex: this.TabIndex, 
                                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                                cRowDisable: []
                            },
                            allocamt: {
                                cValidate :'', 
                                cName: 'allocamt_' + (x+1), 
                                cLabel: '', 
                                cLabelSize: 4, 
                                cOrder: 0, 
                                cKey: false, 
                                cType: 'decimal',
                                cDecimal: 2,
                                cVisible: true, 
                                cProtect: false, 
                                cPageLevel: this.PageLevel, 
                                cTabIndex: this.TabIndex, 
                                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex ,
                                cRowDisable: []
                            },
                            alloccurrencyrate: {
                                cValidate :'', 
                                cName: 'alloccurrencyrate_' + (x+1), 
                                cLabel: '', 
                                cLabelSize: 4, 
                                cOrder: 0, 
                                cKey: false, 
                                cType: 'decimal',
                                cDecimal: 2,
                                cVisible: true, 
                                cProtect: true, 
                                cPageLevel: this.PageLevel, 
                                cTabIndex: this.TabIndex, 
                                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex ,
                                cRowDisable: []
                            },
                        }
                    })
                }

                this.TotalCharge = totalChargeAmt
            })
        },
        getDataBy (record) {
            this.getCreditCharge(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditorCd: this.DataRowPage1.CreditorCd,
                CurrencyCd: record.CurrencyCd,
                DebitNo: this.DataRowPage1.DebitNo,
                DebitSequenceNo: record.DebitSequenceNo,
                CreditSequenceNo: record.CreditSequenceNo,
                SubportfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_AP_PaymentD = {
                    creditno: data.creditno,
                    referenceno: data.referenceno,
                    trxtype: data.trxtype,
                    headerdescs: data.headerdescs,
                    descs: data.descs,
                    vatpaidby: data.vatpaidby,
                    withholdingpaidby: data.withholdingpaidby,
                    outstandingamt: this.isCurrency(this.TotalCharge, this.decimal),
                    totalallocatedamt: this.isCurrency(data.totalallocatedamt, this.decimal),
                    currencycd: data.currencycd,
                    operator: data.operator,
                    remarks: data.remarks
                }

                this.M_AP_PaymentD.trxtypeLabel = this.M_AP_PaymentD.trxtype != null && this.M_AP_PaymentD.trxtype != '' ? data.trxtype :'' 
                this.M_AP_PaymentD.currencycdLabel = this.M_AP_PaymentD.currencycd != null && this.M_AP_PaymentD.currencycd != '' ? data.currencycd :'' 

                this.PI_totalallocatedamt.cValidate = 'max_value:' + this.replaceAllString(this.M_AP_PaymentD.outstandingamt, ',', '', 'number') + '|cmax_value:Allocation Amount Cant be greater Than Outstanding Amount'
                this.IEBy.Input = data.user_input
                this.IEBy.Edit = data.user_edit

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
                  }
                } 
            })
        },
        handleInput (indexField, data, index) {
            if (this.CreditCharge[indexField].props[index].cType == 'text') {
                if (data) {
                this.CreditCharge[indexField].data[index] = data.toString()
                }
            }
            else {
                this.CreditCharge[indexField].data[index] = data
            }
        },
        formatNumber(evt,indexField, data, index){
            evt = (evt) ? evt : window.event
            var charCode = (evt.which) ? evt.which : evt.keyCode
            
            if(this.CreditCharge[indexField].props[index].cType == 'decimal' || this.CreditCharge[indexField].props[index].cType == 'numeric'){
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault()
                }
                else if(charCode == 46){
                    if (this.CreditCharge[indexField].props[index].cType == 'numeric') {
                        evt.preventDefault()
                    }
                    else {
                        var str = this.CreditCharge[indexField].data[index]
                        if(str.indexOf('.') !== -1){
                            evt.preventDefault()
                        }
                        else {
                            return true
                        }
                    }
                }
                else if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8 || charCode == 32) {
                    evt.preventDefault()
                }
                else if (charCode == 13) {
                    return true
                }
                else {
                    return true
                }
            }
            else{
                if (charCode == 13) {
                    return true
                }
            }
        },
        isCurrency2 (indexField, data, index) {
            if (this.CreditCharge[indexField].props[index].cType == 'decimal') {
                if(this.CreditCharge[indexField].data[index] !== ''){
                var num = this.replaceAllString(this.CreditCharge[indexField].data[index], ',', '', 'number')
                var numSplit = null

                if (num.toString().indexOf('.') > -1) {
                    numSplit = num.toString().split('.')
                    if (numSplit[1].length < this.CreditCharge[indexField].props[index].cDecimal) {
                    }
                    else {
                        var x = parseFloat(num).toFixed(this.CreditCharge[indexField].props[index].cDecimal)
                        var nn = x.toString().split('.')
                        numSplit[0] = nn[0]
                        numSplit[1] = nn[1]
                    }
                } else {
                    numSplit = [num, '00']
                }

                var numReal = (numSplit[0] && numSplit[0] != '') ? numSplit[0] : 0
                var numDecimal = '.' + numSplit[1]

                this.CreditCharge[indexField].data[index] = numReal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + numDecimal
                }
            }
        },
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.getSpec()
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

