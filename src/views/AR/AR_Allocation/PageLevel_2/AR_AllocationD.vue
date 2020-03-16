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
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnkautounderoverChange" :prop="PI_kautounderover" v-model="M_AR_AllocationD.kautounderover"  ref="ref_kautounderover" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_AllocationD.debitno"  ref="ref_debitno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_AllocationD.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_headerdescs" v-model="M_AR_AllocationD.headerdescs"  ref="ref_headerdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_descs" v-model="M_AR_AllocationD.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnvatpaidbyChange" :prop="PI_vatpaidby" v-model="M_AR_AllocationD.vatpaidby"  ref="ref_vatpaidby" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnwithholdingpaidbyChange" :prop="PI_withholdingpaidby" v-model="M_AR_AllocationD.withholdingpaidby"  ref="ref_withholdingpaidby" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_outstandingamt" v-model="M_AR_AllocationD.outstandingamt"  ref="ref_outstandingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OntotalallocateamtChange" :prop="PI_totalallocatedamt" v-model="M_AR_AllocationD.totalallocatedamt"  ref="ref_totalallocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitcurrencycd" v-model="M_AR_AllocationD.debitcurrencycd"  ref="ref_debitcurrencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputCheckBox @input="OnfullallocateChange" :prop="PI_fullallocate" v-model="M_AR_AllocationD.fullallocate"  ref="ref_fullallocate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnoperatorChange" :prop="PI_operator" v-model="M_AR_AllocationD.operator"  ref="ref_operator" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                      <b-row>
                                        <b-col md="2"></b-col>
                                        <b-col md="2">
                                          <!-- <label>Outstanding Amount</label> -->
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
                                          <!-- <label>Currency Rate</label> -->
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
                                          <!-- <label>Allocation Amount</label> -->
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
                                          <!-- <label>Allocation Currency Rate</label> -->
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
                                    <b-row v-for="(data, index) in DebitCharge" v-bind:key="index">
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="data.props.label"
                                        />
                                      </b-col>
                                      <!-- <b-col md="2">
                                        <ABSTextBoxOnly
                                          :prop="data.props.outstanding"
                                          rowLine=0
                                          v-model="data.data.outstanding"
                                          :ref="'ref_outstanding_' + (index + 1)"
                                        />
                                      </b-col> 
                                      <b-col md="2">
                                        <ABSTextBoxOnly
                                          :prop="data.props.currencyrate"
                                          rowLine=0
                                          v-model="data.data.currencyrate"
                                          :ref="'ref_currencyrate_' + (index + 1)"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly
                                          :prop="data.props.allocamt"
                                          rowLine=0
                                          v-model="data.data.allocamt"
                                          :ref="'ref_allocamt_' + (index + 1)"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly
                                          :prop="data.props.alloccurrencyrate"
                                          rowLine=0
                                          v-model="data.data.alloccurrencyrate"
                                          :ref="'ref_alloccurrencyrate_' + (index + 1)"
                                        />
                                      </b-col>                                      
                                      -->
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
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_AllocationD.remarks"  ref="ref_remarks" />
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
                ParamView: ""
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_AllocationD :{
                autounderover: '',
                journalcategory: '',
                debitno: '',
                trxtype: '',
                descs: '',
                headerdescs: '',
                debitcurrencycd: '',
                currencyrate: '',
                vatpaidby: '',
                withholdingpaidby: '',
                taxcurrencyrate: '',
                remarks: '',
                totalallocatedamt: '0',
                currentcurrencyrate: '',
                currenttaxcurrencyrate: '',
                operator: '',
                taxcd: '',
                rowid: 0,
                lastupdatestamp: 0,
                toutstandingamt: '',
                detailoutstandingamt: '',
                detailcurrencyrate: '',
                detailallocamt: '',
                outstandingamt: '',
                fullallocate: '',
                detailoutstandingamt: '',
                debitcurrencyrate: '',
                allocationamt: '0',
                creditcurrencyrate: '0'
                    }
            ,
            PI_kautounderover: { 
                cValidate :'', 
                cName: 'kautounderover', 
                cLabel: '', 
                cLabelSize: 4, 
                cOptions: [{text:'Otomatis Isikan Sisa Total Alokasi dengan Total Pembayaran ke Over/Under Payment ? ', value: 'Y'}], 
                cOrder: 101, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitno: { 
                cValidate: '', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 102, 
                cKey: false, 
                cVisible: true,
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_trxtype: { 
                cValidate: '',
                cLabel: 'Trans. Type',
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 103, 
                cKey: false, 
                cVisible: true,
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_headerdescs: { 
                cValidate: '',
                cLabel: 'Description',
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 104, 
                cKey: false, 
                cVisible: true,
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_descs: { 
                cValidate: '',
                cLabel: 'Detail Description',
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 105, 
                cKey: false, 
                cVisible: true,
                cProtect: true, 
                cDefault: '', 
                cResize: false, 
                cReadOnly: false, 
                cRows: 2, 
                cMaxRows: 2, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_vatpaidby: { 
                cValidate :'', 
                cName: 'vatpaidby', 
                cId: 'rdbvatpaidby', 
                cRadioOptions: [{ text: 'Debtor', value: 'D' }, { text: 'Management', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'VAT Paid By', 
                cLabelSize: 4, 
                cOrder: 106, 
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
                cRadioOptions: [{ text: 'Debtor', value: 'D' }, { text: 'Management', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'Withholding Paid By   ', 
                cLabelSize: 4, 
                cOrder: 107, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_outstandingamt: { 
                cLabel: 'Outstanding Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_totalallocatedamt: { 
                cValidate :'required', 
                cName: 'totalallocatedamt', 
                cLabel: 'Allocation Amount', 
                cLabelSize: 4, 
                cOrder: 108, 
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
                cLabel: 'Allocation', 
                cLabelSize: 4, 
                cOptions: [{text:'Auto Allocate', value: 'Y'}], 
                cOrder: 108, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_debitcurrencycd: { 
                cValidate: '',
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 110, 
                cKey: false, 
                cVisible: true,
                cProtect: true, 
                cDefault: '', 
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
                cOrder: 111, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_detailoutstandingamt: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_detailcurrencyrate: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_detailallocamt: { 
                cValidate :'', 
                cName: 'allocationamt', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 112, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_detailalloccurrencyamt: { 
                cValidate :'', 
                cName: 'creditcurrencyrate', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 113, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
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
                cOrder: 114, 
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
            DataDetail: null,
            DebitCharge: [],
            TotalCharge: 0,
            FnAllocationAmt: 0,
            BaseCurrencyCd: ""
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
        OnfullallocateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if (data == "Y") {
                this.M_AR_AllocationD.totalallocatedamt = this.isCurrency(this.TotalCharge, this.decimal)
                // console.log(this.DebitCharge)
                for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
                  // console.log(this.DebitCharge[a].data.outstanding)
                  this.DebitCharge[a].data.allocamt = this.DebitCharge[a].data.outstanding
                }
              }
              else {
                this.M_AR_AllocationD.totalallocatedamt = ''
                // console.log(this.DebitCharge)
                for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
                  // console.log(this.DebitCharge[a].data.outstanding)
                  this.DebitCharge[a].data.allocamt = ''
                }
              }
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
          this.getToolbar().statusFunction[0].disabled = true
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
            this.M_AR_AllocationD.debitcurrencycd = data.CurrencyCd
            this.getSpec()
        },		       
        M_Insert() {
        },
        M_Update(){
          // console.log(this.DataRow)
          if (this.DataRow.CreditSequenceNo == 0) {
            var param = {
              OptionFunctionCd: 'CheckCreditNoteChargeToInvoiceD',
              ModuleCd: this.Module,
              SequenceNo: this.DataRow.DebitSequenceNo
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (!FnOpt2 || FnOpt2.length > 0) {
                  this.alertError("Cannot Edit Data, Invoice has already change to CN")
                  return
                }

                this.M_UpdateOR()
            })
          }
          else {
            this.M_UpdateOR()
          }
        },
        InsertOR() {
          if (this.M_AR_AllocationD.journalcategory == "I" && this.DataDetail[x].AllocationAmt == 0) return
          var param1 = {}
          param1 = {
            _Method_:'UPDATE',                 
            _LineNo_: this.$parent.data.PageOrder ,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            DebitNo: this.M_AR_AllocationD.debitno ,
            DebitSequenceNo: this.DataRow.DebitSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            VatPaidByManagement: this.M_AR_AllocationD.vatpaidby == "M" ? "Y" : "N" ,
            VatPaidByDebtor: this.M_AR_AllocationD.vatpaidby == "D" ? "Y" : "N" ,
            WithHoldingPaidByManagement: this.M_AR_AllocationD.withholdingpaidby == "M" ? "Y" : "N" ,
            WithHoldingPaidByDebtor: this.M_AR_AllocationD.withholdingpaidby == "D" ? "Y" : "N" ,
            JournalCategory: this.M_AR_AllocationD.journalcategory ,
            AllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number') ,
            CurrencyOperator: this.M_AR_AllocationD.operator ,
            Remarks: this.M_AR_AllocationD.remarks ? this.M_AR_AllocationD.remarks : '' ,
            UserInput: this.getDataUser().UserId
          }


        },
        UpdateOR () {},
        M_Updatex() {
          var param1 = {
            OptionSeq: this.getOptionSeq().OptionSeq ,
            LineNo: this.$parent.data.PageOrder ,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            DebitNo: this.M_AR_AllocationD.debitno ,
            DebitSequenceNo: this.DataRow.DebitSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            VatPaidByManagement: this.M_AR_AllocationD.vatpaidby == "M" ? "Y" : "N" ,
            VatPaidByDebtor: this.M_AR_AllocationD.vatpaidby == "D" ? "Y" : "N" ,
            WithHoldingPaidByManagement: this.M_AR_AllocationD.withholdingpaidby == "M" ? "Y" : "N" ,
            WithHoldingPaidByDebtor: this.M_AR_AllocationD.withholdingpaidby == "D" ? "Y" : "N" ,
            JournalCategory: this.M_AR_AllocationD.journalcategory ,
            AllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number') ,
            CurrencyOperator: this.M_AR_AllocationD.operator ,
            Remarks: this.M_AR_AllocationD.remarks ? this.M_AR_AllocationD.remarks : '' ,
            UserInput: this.getDataUser().UserId,
            CreditSequenceNoO_Output: ''
          }

          this.postJSON(this.getUrlUpdate(), param1).then(response => {
            if (response == null) return
            // this.$parent.resultUpdate(response.Message)
            this.M_Update2(response.Data.CreditSequenceNoO)
            this.refreshListParent(true)
          })
        },
        M_UpdateOR() {
          var dataToPost = []

          var param1 = {}
          param1 = {
            _Method_:'UPDATE',                 
            _LineNo_: this.$parent.data.PageOrder ,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            // DebitNo: this.M_AR_AllocationD.debitno ,
            DebitSequenceNo: this.DataRow.DebitSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            // CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            // VatPaidByManagement: this.M_AR_AllocationD.vatpaidby == "M" ? "Y" : "N" ,
            // VatPaidByDebtor: this.M_AR_AllocationD.vatpaidby == "D" ? "Y" : "N" ,
            // WithHoldingPaidByManagement: this.M_AR_AllocationD.withholdingpaidby == "M" ? "Y" : "N" ,
            // WithHoldingPaidByDebtor: this.M_AR_AllocationD.withholdingpaidby == "D" ? "Y" : "N" ,
            // JournalCategory: this.M_AR_AllocationD.journalcategory ,
            // AllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number') ,
            CurrencyOperator: this.M_AR_AllocationD.operator ,
            Remarks: this.M_AR_AllocationD.remarks ? this.M_AR_AllocationD.remarks : '' ,
            UserInput: this.getDataUser().UserId,
            CreditSequenceNo_Output: ""
          }

          var cr = "CreditSequenceNo"
          if (this.DataRow.CreditSequenceNo == 0) {
            cr = "CreditSequenceNo"
          }
          else {
            cr = this.DataRow.CreditSequenceNo
          }

          var param2 = []
          if (this.DataRow.CreditSequenceNo == 0) {
            if (this.M_AR_AllocationD.journalcategory == "D") {
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                param2.push({
                  _Method_:'SAVE',                 
                  _LineNo_: 1 ,
                  CreditSequenceNo: cr,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  CurrencyOperator: this.M_AR_AllocationD.operator,
                  DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  DebitCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].CurrencyRate, this.decimal), ',', '', 'number' ),
                  CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal), ',', '', 'number' ),
                  AllocationAmt: this.replaceAllString(this.DebitCharge[x].data.allocamt, ',', '', 'number'),
                  UserInput: this.getDataUser().UserId
                })
              }
            }
            else {
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                param2.push({
                  _Method_:'SAVE',                 
                  _LineNo_: 2 ,
                  CreditSequenceNo: cr,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  TotalAllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number'),
                  DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  AllocationAmt: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationAmt, this.decimal), ',', '', 'number' ),
                  VATPaidBy: this.M_AR_AllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_AllocationD.withholdingpaidby,
                  CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal), ',', '', 'number' ),
                  CurrencyOperator: this.M_AR_AllocationD.operator,
                  TaxCd: this.M_AR_AllocationD.taxcd,
                  TaxType: this.DataDetail[x].TaxType,
                  TaxClass: this.DataDetail[x].TaxTypeDescs,
                  UserInput: this.getDataUser().UserId
                })
              }
            }
          }
          else {
            if (this.M_AR_AllocationD.journalcategory == "D") {
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                if (this.DataDetail[x].CreditDetailSequenceNo != 0) {
                  param2.push({
                    _Method_:'UPDATE',                 
                    _LineNo_: 2 ,
                    CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                    UserEdit: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_AllocationD.operator,
                    DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    // DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    // CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].CurrencyRate, this.decimal), ',', '', 'number' ),
                    CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal), ',', '', 'number' ),
                    AllocationAmt: this.replaceAllString(this.DebitCharge[x].data.allocamt, ',', '', 'number')
                  })
                }
                else if (this.replaceAllString(this.DebitCharge[x].data.allocamt, ',', '', 'number') != 0) {
                  param2.push({
                    _Method_:'SAVE',                 
                    _LineNo_: 1 ,
                    CreditSequenceNo: cr,
                    UserInput: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_AllocationD.operator,
                    DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    // DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    // CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].CurrencyRate, this.decimal), ',', '', 'number' ),
                    CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal), ',', '', 'number' ),
                    AllocationAmt: this.replaceAllString(this.DebitCharge[x].data.allocamt, ',', '', 'number')
                  })
                }
              }
            }
            else {
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                param2.push({
                  _Method_:'UPDATE',
                  _LineNo_: 3 ,
                  CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                  CreditSequenceNo: cr,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  TotalAllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number'),
                  DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  VATPaidBy: this.M_AR_AllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_AllocationD.withholdingpaidby,
                  CreditCurrencyRate: this.replaceAllString( this.isCurrency(this.DataDetail[x].AllocationCurrencyRate, this.decimal), ',' ,'', 'number' ),
                  CurrencyOperator: this.M_AR_AllocationD.operator,
                  TaxCd: this.M_AR_AllocationD.taxcd,
                  TaxType: this.DataDetail[x].TaxType,
                  TaxClass: this.DataDetail[x].TaxTypeDescs,
                  UserEdit: this.getDataUser().UserId
                })
              }
            }
          }

          var param3 = {}
          param3 = {
            _Method_:'UPDATE2',
            _LineNo_: 1 ,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd ,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            CreditSequenceNo: cr ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CurrencyOperator: this.M_AR_AllocationD.operator ,
            Remarks: this.M_AR_AllocationD.remarks ? this.M_AR_AllocationD.remarks : '' ,
            UserEdit: this.getDataUser().UserId ,
            EntryType: 'R'
          }

          if (this.DataRow.CreditSequenceNo == 0) {
            dataToPost.push({
              A_Update: param1,
              B_Looping: param2,
              C_Update : param3
            })
          }
          else {
            dataToPost.push({
              A_Looping: param2,
              B_Update: param3
            })
          }

          

          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            Data: dataToPost
          }
          
          this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
          .then(response => {
            if (response == null) return

            this.$parent.resultUpdate("Data Has Been Saved Successfully")
            this.refreshListParent(true)
          })
        },
        M_Update2(CreditSequenceNo) {
          var param = {}
          var paramU = {}
          var url = ""
          var urlU = ""
          var status = ""
          var lineno = this.$parent.data.PageOrder
          var linenoU = this.$parent.data.PageOrder
          if (CreditSequenceNo == 0) {
            //Insert
            if (this.M_AR_AllocationD.journalcategory == "D") {
              //Direct
              url = this.getUrlInsertMulti()
              status = "I"
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  CreditSequenceNo: CreditSequenceNo,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  CurrencyOperator: this.M_AR_AllocationD.operator,
                  DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  DebitCurrencyRate: parseFloat(this.DataDetail[x].CurrencyRate).toFixed(this.decimal),
                  CreditCurrencyRate: parseFloat(this.DataDetail[x].AllocationCurrencyRate).toFixed(this.decimal),
                  AllocationAmt: parseFloat(this.DataDetail[x].AllocationAmt).toFixed(this.decimal),
                  UserInput: this.getDataUser().UserId
                })
              }

              param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: lineno,
                Data: dataPost
              }
            }
            else {
              //Indirect
              url = this.getUrlInsertMulti()
              status = "I"
              lineno = 2
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  CreditSequenceNo: CreditSequenceNo,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  TotalAllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number'),
                  DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  AllocationAmt: parseFloat(this.DataDetail[x].AllocationAmt).toFixed(this.decimal),
                  VATPaidBy: this.M_AR_AllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_AllocationD.withholdingpaidby,
                  CreditCurrencyRate: parseFloat(this.DataDetail[x].AllocationCurrencyRate).toFixed(this.decimal),
                  CurrencyOperator: this.M_AR_AllocationD.operator,
                  TaxCd: this.M_AR_AllocationD.taxcd,
                  TaxType: this.DataDetail[x].TaxType,
                  TaxClass: this.DataDetail[x].TaxTypeDescs,
                  UserInput: this.getDataUser().UserId
                })
              }
              
              param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: lineno,
                Data: dataPost
              }
            }
          }
          else {
            //Update
            if (this.M_AR_AllocationD.journalcategory == "D") {
              //Direct
              var dataPostU = []
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                if (this.DataDetail[x].CreditDetailSequenceNo != 0) {
                  urlU = this.getUrlUpdateMulti()
                  status = "U"
                  linenoU = 2
                  
                  dataPostU.push({
                    CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                    UserEdit: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_AllocationD.operator,
                    DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: parseFloat(this.DataDetail[x].CurrencyRate).toFixed(this.decimal),
                    CreditCurrencyRate: parseFloat(this.DataDetail[x].AllocationCurrencyRate).toFixed(this.decimal),
                    AllocationAmt: parseFloat(this.DataDetail[x].AllocationAmt).toFixed(this.decimal)
                  })
                }
                else if (this.DataDetail[x].AllocationAmt != 0) {
                  url = this.getUrlInsertMulti()
                  status = "I"

                  dataPost.push({
                    CreditSequenceNo: CreditSequenceNo,
                    UserInput: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_AllocationD.operator,
                    DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: parseFloat(this.DataDetail[x].CurrencyRate).toFixed(this.decimal),
                    CreditCurrencyRate: parseFloat(this.DataDetail[x].AllocationCurrencyRate).toFixed(this.decimal),
                    AllocationAmt: parseFloat(this.DataDetail[x].AllocationAmt).toFixed(this.decimal)
                  })
                }
              }
              //
              paramU = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: linenoU,
                Data: dataPostU
              }
              param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: lineno,
                Data: dataPost
              }
            }
            else {
              //Indirect
              url = this.getUrlUpdateMulti()
              status = "U"
              lineno = 3
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                  CreditSequenceNo: CreditSequenceNo,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  TotalAllocationAmt: this.replaceAllString(this.M_AR_AllocationD.totalallocatedamt, ',', '', 'number'),
                  DebitCurrencyCd: this.M_AR_AllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  VATPaidBy: this.M_AR_AllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_AllocationD.withholdingpaidby,
                  CreditCurrencyRate: parseFloat(this.DataDetail[x].AllocationCurrencyRate).toFixed(this.decimal),
                  CurrencyOperator: this.M_AR_AllocationD.operator,
                  TaxCd: this.M_AR_AllocationD.taxcd,
                  TaxType: this.DataDetail[x].TaxType,
                  TaxClass: this.DataDetail[x].TaxTypeDescs,
                  UserEdit: this.getDataUser().UserId
                })
              }
              
              param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: lineno,
                Data: dataPost
              }
            }
          }

          if (CreditSequenceNo != 0 && this.M_AR_AllocationD.journalcategory == "D") {
            if (urlU != "") {
              this.postJSONMulti( urlU, paramU )
              .then(response => {
                if (response == null) return
                if (url != "") {
                  this.postJSONMulti( url, param )
                  .then(response => {
                    if (response == null) return
                    this.M_Update3()
                  })
                }
                else {
                  this.M_Update3()
                }
              })
            }
            else {
              if (url != "") {
                this.postJSONMulti( url, param )
                .then(response => {
                  if (response == null) return
                  this.M_Update3()
                })
              }
            }
          }
          else {
            this.postJSONMulti( url, param )
            .then(response => {
              if (response == null) return
              this.M_Update3()
            })
          }
        },
        M_Update3() {
          var param3 = {
            OptionSeq: this.getOptionSeq().OptionSeq ,
            LineNo: this.$parent.data.PageOrder ,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd ,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CurrencyOperator: this.M_AR_AllocationD.operator ,
            Remarks: this.M_AR_AllocationD.remarks ? this.M_AR_AllocationD.remarks : '' ,
            UserEdit: this.getDataUser().UserId ,
            AutoUnderOver: this.M_AR_AllocationD.autounderover
          }

          this.postJSON(this.getUrlUpdate() + "2", param3).then(response => {
            if (response == null) return
            this.$parent.resultUpdate(response.Message)
            this.refreshListParent(true)

          })
        },
        M_ClearForm(){
          this.M_AR_AllocationD = {
            autounderover: '',
            journalcategory: '',
            debitno: '',
            trxtype: '',
            descs: '',
            headerdescs: '',
            debitcurrencycd: '',
            currencyrate: '',
            vatpaidby: '',
            withholdingpaidby: '',
            taxcurrencyrate: '',
            remarks: '',
            totalallocatedamt: '0',
            currentcurrencyrate: '',
            currenttaxcurrencyrate: '',
            operator: '',
            taxcd: '',
            rowid: 0,
            lastupdatestamp: 0,
            toutstandingamt: '',
            detailoutstandingamt: '',
            detailcurrencyrate: '',
            detailallocamt: '',
            outstandingamt: '',
            fullallocate: '',
            detailoutstandingamt: '',
            debitcurrencyrate: '',
            allocationamt: '0',
            creditcurrencyrate: '0'
          }

          this.DataDetail = null
          this.DebitCharge = []
          this.TotalCharge = 0
          this.FnAllocationAmt = 0
        },
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_AllocationD.debitcurrencycd = data.CurrencyCd
        },
        M_Edit(){
        },
        M_Delete(dt){
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

                      if (this.DataRowPage1.CreditNo && this.DataRowPage1.CreditNo != '') {
                        if (this.DataRowPage1.CurrencyCd.toUpperCase() != data.BaseCurrencyCd.toUpperCase()) {
                          this.propList.initialWhere = " (CurrencyCd = '" + this.DataRowPage1.CurrencyCd + "' OR CurrencyCd = '" + data.BaseCurrencyCd + "') "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.CreditNo + "', '" + this.DataRowPage1.DebtorCd + "'"
                          this.FormToABSList().doGetList('','eb_getList')
                        }
                        else {
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.CreditNo + "', '" + this.DataRowPage1.DebtorCd + "'"
                          this.FormToABSList().doGetList('','eb_getList')
                        }
                      }
                      else {
                        this.propList.initialWhere = " 1 = 0 "
                          this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + this.DataRowPage1.CreditNo + "', '" + this.DataRowPage1.DebtorCd + "'"
                        this.FormToABSList().doGetList('','eb_getList')
                      }
                    }
                } 
            })
        },
        getDataBy (record) {
          var paramFn = {
            OptionFunctionCd: "SelectDebitChargesCreditAllocation2",
            ModuleCd: this.Module,
            DebitSequenceNo: record.DebitSequenceNo,
            CreditNo: this.DataRowPage1.CreditNo,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }
          this.FnDynamicFunction(paramFn)
          .then(ress => {
            if (ress == null) return
            console.log(ress)
            var datas = []
            this.DataDetail = ress
            var totalChargeAmt = 0
            for (let x = 0; x < ress.length; x ++) {
              totalChargeAmt += parseFloat(ress[x].ChargeAmt)
              datas.push({
                data: {
                  // label: ress[x].TaxTypeDescs,
                  outstanding: this.isCurrency(ress[x].ChargeAmt, this.decimal),
                  currencyrate: this.isCurrency(ress[x].CurrencyRate, this.decimal),
                  allocamt: this.isCurrency(ress[x].AllocationAmt, this.decimal),
                  alloccurrencyrate: this.isCurrency(ress[x].AllocationCurrencyRate, this.decimal)
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
                    cOrder: 102, 
                    cKey: false, 
                    cType: 'decimal',
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
                    cOrder: 102, 
                    cKey: false, 
                    cType: 'decimal',
                    cVisible: true, 
                    cProtect: true, 
                    cPageLevel: this.PageLevel, 
                    cTabIndex: this.TabIndex, 
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex ,
                    cRowDisable: []
                  },
                  allocamt: {
                    cValidate :'', 
                    cName: 'allocamt_' + (x+1), 
                    cLabel: '', 
                    cLabelSize: 4, 
                    cOrder: 102, 
                    cKey: false, 
                    cType: 'decimal',
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
                    cOrder: 102, 
                    cKey: false, 
                    cType: 'decimal',
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
            this.DebitCharge = datas

            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              currencycd: record.CurrencyCd,
              debitsequenceno: record.DebitSequenceNo,
              creditsequenceno: record.CreditSequenceNo,
              creditno: this.DataRowPage1.CreditNo,
              debtorcd: this.DataRowPage1.DebtorCd,
              SubportfolioCd: this.getDataUser().SubPortfolioCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
              if(response == null) return

              var data = response.Data[0]
              this.M_AR_AllocationD = {
                autounderover: '',
                journalcategory: data.journalcategory,
                debitno: data.debitno,
                trxtype: data.trxtype,
                descs: data.descs,
                headerdescs: data.headerdescs,
                debitcurrencycd: data.currencycd,
                currencyrate: data.currencyrate,
                vatpaidby: data.vatpaidby,
                withholdingpaidby: data.withholdingpaidby,
                taxcurrencyrate: data.taxcurrencyrate,
                remarks: data.remarks,
                totalallocatedamt: this.isCurrency(data.totalallocatedamt, this.decimal),
                currentcurrencyrate: data.currentcurrencyrate,
                currenttaxcurrencyrate: data.currenttaxcurrencyrate,
                operator: data.operator,
                taxcd: data.taxcd,
                rowid: data.rowid,
                lastupdatestamp: record.LastUpdateStamp,
                toutstandingamt: data.toutstandingamt,
                detailoutstandingamt: data.detailoutstandingamt,
                detailcurrencyrate: data.detailcurrencyrate,
                detailallocamt: data.detailallocamt,
                outstandingamt: record.OutstandingAmt,
                fullallocate: data.totalallocatedamt > 0 ? "Y" : "N",
                debitcurrencyrate: data.debitcurrencyrate,
                allocationamt: data.allocationamt,
                creditcurrencyrate: data.creditcurrencyrate
              }

              this.IEBy.Input = data.userinput
              this.IEBy.Edit = data.useredit
            })
          })
        },
        FullAllocate() {
            if (this.M_AR_AllocationD.fullallocate == "Y")
            {
              this.FnAllocationAmt = this.M_AR_AllocationD.outstandingamt
              AutoSplitAllocationAmount()
            }
            else
            {
              this.FnAllocationAmt = 0
              AutoSplitAllocationAmount()
            }
        },
        AutoSplitAllocationAmount(){
          var txtallocated = this.FnAllocationAmt
          var digitcent =  2

          var totaldebit = 0
          var allocatedvalue = 0
          var totalallocated = 0
          var difference = 0

          var debit = []
          var credit = []

          for (let a = 0 ; a < this.DataDetail.length ; a ++) {
            if (this.DataDetail[a].ChargeAmt && this.DataDetail[a].ChargeAmt != '') {
              debit.push(this.DataDetail[a].ChargeAmt)
              totaldebit = totaldebit + parseFloat(this.DataDetail[a].ChargeAmt)
            }

            if (this.DataDetail[a].AllocationAmt && this.DataDetail[a].AllocationAmt != '') {
              credit.push(this.DataDetail[a].AllocationAmt)
            }
          }

          if (credit.length==0) return false
                 	
          if (txtallocated == 0) {
            for (let b = 0 ; b < credit.length ; b ++) {
              credit[b].value= 0
            }
          }
          else {
            allocatedvalue = txtallocated
            allocatedvalue = this.replaceAllString(allocatedvalue, ',', '', 'number')

            for (let c = 0 ; c < credit.length ; c ++) {
              if (parseFloat(allocatedvalue) <= 0) {
                credit[c].value = 0
              }
              else if (parseFloat(totaldebit) > parseFloat(allocatedvalue)) {
                credit[c].value = (debit[c]/totaldebit) * allocatedvalue
              }
              else {
                credit[c].value = debit[c]
              }
            }

            totalallocated = 0
            var tempvalue
            for (let d = 0 ; d < credit.length ; d ++) {
              tempvalue = credit[d].value
              tempvalue = this.replaceAllString(tempvalue, ',', '', 'number')
              totalallocated = totalallocated + parseFloat(tempvalue)
            }
          }
            
          difference = allocatedvalue - totalallocated

          if (difference != 0) {
            difference = difference * Math.pow(10, digitcent)
            difference = Math.round(difference)
            difference = difference * Math.pow(10, (digitcent*-1))
            var tempvalue
            for (let e = 0 ; e < credit.length ; e ++) {
              tempvalue = credit[e].value
              tempvalue = this.replaceAllString(tempvalue, ',', '', 'number')

              if ((parseFloat(tempvalue) + parseFloat(difference)) <= parseFloat(debit[e])) {
                  credit[e].value = parseFloat(tempvalue) + parseFloat(difference)
                  break
              }
            }
          }
        },
      
      OntotalallocateamtChange (data) {
        // if (this.M_AR_AllocationD.fullallocate == "Y") return
        if (data <= 0 || data == '') {
          for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
            // var x = (parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
            this.DebitCharge[a].data.allocamt = this.isCurrency(0, this.decimal) //parseFloat(x).toFixed(this.decimal)
          }
        }
        else {
          for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
            var x = (parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
            this.DebitCharge[a].data.allocamt = this.isCurrency(x, this.decimal)
          }
        }
      },
      handleInput (indexField, data, index) {
        // console.log(this.DebitCharge[indexField].props[index])
      if (this.DebitCharge[indexField].props[index].cType == 'text') {
        if (data) {
          this.DebitCharge[indexField].data[index] = data.toString()
        }
      }
      else {
        this.DebitCharge[indexField].data[index] = data
      }
      // this.$emit('input', this.value)
      // this.onInput()
    },
    formatNumber(evt,indexField, data, index){     
      
      evt = (evt) ? evt : window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      
      if(this.DebitCharge[indexField].props[index].cType == 'decimal' || this.DebitCharge[indexField].props[index].cType == 'numeric'){
        // console.log('lala')
        
        
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
          evt.preventDefault()
        }
        else if(charCode == 46){
          if (this.DebitCharge[indexField].props[index].cType == 'numeric') {
            evt.preventDefault()
          }
          else {
            var str = this.DebitCharge[indexField].data[index]
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
          // this.$emit('onEnterPress', this.value)
          return true
        }
        else {
          return true
        }
      }else{
          if (charCode == 13) {
            // this.$emit('onEnterPress', this.value)
            return true
          }
      }
    },
    isCurrency2 (indexField, data, index) {
      // console.log(this.value)
      if (this.DebitCharge[indexField].props[index].cType == 'decimal') {
        // console.log(this.value)
        // this.value = this.isCurrency(this.value, this.decimal)
        if(this.DebitCharge[indexField].data[index] !== ''){
          var num = this.replaceAllString(this.DebitCharge[indexField].data[index], ',', '', 'number')
          // console.log(num)
          var numSplit = null
          if (num.toString().indexOf('.') > -1) {
            numSplit = num.toString().split('.')
            if (numSplit[1].length < this.DebitCharge[indexField].props[index].cDecimal) {
              // var dc = this.decimals.slice(0, (this.DebitCharge[indexField].cDecimal - numSplit[1].length))

              // numSplit[1] += dc
            }
            else {
              var x = parseFloat(num).toFixed(this.DebitCharge[indexField].props[index].cDecimal)
              var nn = x.toString().split('.')
              numSplit[0] = nn[0]
              numSplit[1] = nn[1]
            }
          } else {
            // numSplit = [num, this.decimals]
            numSplit = [num, '00']
          }

          // console.log(numSplit)
          var numReal = (numSplit[0] && numSplit[0] != '') ? numSplit[0] : 0
          var numDecimal = '.' + numSplit[1]

          this.DebitCharge[indexField].data[index] = numReal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + numDecimal
        }
      }
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

