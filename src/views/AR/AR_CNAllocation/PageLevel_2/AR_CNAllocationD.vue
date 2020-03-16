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
                                        <ABSinputCheckBox @input="OnkautounderoverChange" :prop="PI_kautounderover" v-model="M_AR_CNAllocationD.kautounderover"  ref="ref_kautounderover" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CNAllocationD.debitno"  ref="ref_debitno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_CNAllocationD.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_headerdescs" v-model="M_AR_CNAllocationD.headerdescs"  ref="ref_headerdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_CNAllocationD.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnvatpaidbyChange" :prop="PI_vatpaidby" v-model="M_AR_CNAllocationD.vatpaidby"  ref="ref_vatpaidby" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnwithholdingpaidbyChange" :prop="PI_withholdingpaidby" v-model="M_AR_CNAllocationD.withholdingpaidby"  ref="ref_withholdingpaidby" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_outstandingamt" v-model="M_AR_CNAllocationD.outstandingamt"  ref="ref_outstandingamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OntotalallocateamtChange" :prop="PI_totalallocatedamt" v-model="M_AR_CNAllocationD.totalallocatedamt"  ref="ref_totalallocatedamt"/>
                                        <!-- <ABSinputCheckBoxOnly @input="OnfullallocateChange" :prop="PI_fullallocate" v-model="M_AR_CNAllocationD.fullallocate"  ref="ref_fullallocate" /> -->
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6" offset="10">
                                        <ABSinputCheckBoxOnly @input="OnfullallocateChange" :prop="PI_fullallocate" v-model="M_AR_CNAllocationD.fullallocate"  ref="ref_fullallocate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitcurrencycd" v-model="M_AR_CNAllocationD.debitcurrencycd"  ref="ref_debitcurrencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnoperatorChange" :prop="PI_operator" v-model="M_AR_CNAllocationD.operator"  ref="ref_operator" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <!-- <span class="master-span-form">
                                            Revaluation
                                        </span> -->
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
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_CNAllocationD.remarks"  ref="ref_remarks" />
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
                ParamView: "'"+this.getDataUser().SubPortfolioCd+"','','',''" 
            },
       
            IEBy: {Input: '', Edit: ''},
            CreditSequenceNoOutput:0,

            M_AR_CNAllocationD :{
                autounderover: '',
                journalcategory: '',
                debitno: '',
                trxtype: '',
                descs: '',
                headerdescs: '',
                currencycd: '',
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
                debitcurrencycd: '',
                debitcurrencyrate: '',
                allocationamt: '0',
                creditcurrencyrate: '0'
                    }
            ,
            // PI_kautounderover: { 
            //     cValidate :'', 
            //     cName: 'kautounderover', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOptions: [{text:'Otomatis Isikan Sisa Total Alokasi dengan Total Pembayaran ke Over/Under Payment ? ', value: 'Y'}], 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cVisible: true, 
            //     cProtect: false, 
            //     cDefault: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_debitno: { 
                cValidate: '', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cValue: '', 
                cOrder: 1, 
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
                cOrder: 2, 
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
                cOrder: 3, 
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
                cOrder: 4, 
                cKey: false, 
                cVisible: true,
                cProtect: true, 
                cDefault: '', 
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
                cOrder: 5, 
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
                cOrder: 6, 
                cProtect: false, 
                cKey: true,
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
                cVisible: true
            }, 
            PI_totalallocatedamt: { 
                cValidate :'', 
                cName: 'totalallocatedamt', 
                cLabel: 'Allocation Amount', 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cOrder: 8, 
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
                cOrder: 9, 
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
                cOrder: 10, 
                cProtect: false, 
                cKey:true,
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
                cOrder: 11, 
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
                cOrder: 12, 
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
                cOrder:13, 
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
//         OnkautounderoverChange (data) {
//         this.$nextTick(() => {
//             if (this.inputStatus != "VIEW") {
// //{kautounderover}
//             }
//         })
//         this.$forceUpdate()
//         },
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
                this.M_AR_CNAllocationD.totalallocatedamt = this.TotalCharge
                // console.log(this.DebitCharge)
                for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
                  // console.log(this.DebitCharge[a].data.outstanding)
                  this.DebitCharge[a].data.allocamt = this.DebitCharge[a].data.outstanding
                }
              }
              else {
                this.M_AR_CNAllocationD.totalallocatedamt = ''
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
            // console.log('data header',data)
            this.propList.ParamView ="'"+this.getDataUser().SubPortfolioCd+"','"+data.DebtorCd+"','"+data.CreditNo+"','"+data.CurrencyCd+"'"
        // this.propList.ParamView

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
        },
        M_InsertOR(){
          var totallll = 0
          // console.log(this.DebitCharge)
          for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
            // var x = (parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
            totallll += parseFloat(this.replaceAllString(this.DebitCharge[a].data.allocamt ? this.DebitCharge[a].data.allocamt : 0, ',', '', 'number')) //parseFloat(x).toFixed(this.decimal)
          }

          var dataUpdate = []
          
          var param1 = {
            _Method_:'UPDATE',
            _LineNo_: this.$parent.data.PageOrder ,
            CreditSequenceNoOutput_output: this.DataRow.CreditSequenceNo,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            DebitNo: this.M_AR_CNAllocationD.debitno ,
            DebitSequenceNo: this.DataRow.DebitSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            VatPaidByManagement: this.M_AR_CNAllocationD.vatpaidby == "M" ? "Y" : "N" ,
            VatPaidByDebtor: this.M_AR_CNAllocationD.vatpaidby == "D" ? "Y" : "N" ,
            WithHoldingPaidByManagement: this.M_AR_CNAllocationD.withholdingpaidby == "M" ? "Y" : "N" ,
            WithHoldingPaidByDebtor: this.M_AR_CNAllocationD.withholdingpaidby == "D" ? "Y" : "N" ,
            JournalCategory: this.M_AR_CNAllocationD.journalcategory ,
            AllocationAmt: totallll, //this.M_AR_CNAllocationD.totalallocatedamt ,
            CurrencyOperator: this.M_AR_CNAllocationD.operator ,
            Remarks: this.M_AR_CNAllocationD.remarks ,
            UserInput: this.getDataUser().UserId
            
          }         

          
          if (this.M_AR_CNAllocationD.journalcategory == "D") {
            var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  _Method_:'SAVE',
                  _LineNo_: this.$parent.data.PageOrder ,
                  CreditSequenceNo: 'CreditSequenceNoOutput',
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  CurrencyOperator: this.M_AR_CNAllocationD.operator,
                  DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  DebitCurrencyRate: this.DataDetail[x].CurrencyRate,
                  CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                  AllocationAmt: this.DebitCharge[x].data.allocamt,
                  UserInput: this.getDataUser().UserId
                })
              }
          }else{
            for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  _Method_:'SAVE',
                  _LineNo_: 3 ,
                  CreditSequenceNo: 'CreditSequenceNoOutput',
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,                  
                  DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  VATPaidBy: this.M_AR_CNAllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_CNAllocationD.withholdingpaidby,
                  CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                  TotalAllocationAmt: totallll, //this.M_AR_CNAllocationD.totalallocatedamt,
                  CurrencyOperator: this.M_AR_CNAllocationD.operator,
                  TaxCd: this.M_AR_CNAllocationD.taxcd,
                  TaxType: this.DataDetail[x].TaxType,
                  TaxClass: this.DataDetail[x].TaxTypeDescs,
                  UserInput: this.getDataUser().UserId,
                  // AllocationAmt: this.DataDetail[x].AllocationAmt
                })
              }

          }

          var param3 = {
            _Method_:'UPDATE2',
            _LineNo_: this.$parent.data.PageOrder ,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd ,
            CreditSequenceNo: 'CreditSequenceNoOutput' ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CurrencyOperator: this.M_AR_CNAllocationD.operator ,
            Remarks: this.M_AR_CNAllocationD.remarks ,
            UserEdit: this.getDataUser().UserId //,
            // AutoUnderOver: this.M_AR_CNAllocationD.autounderover
          }

          dataUpdate.push({
            A_Insert_1:param1,
            B_looping_1:dataPost,
            C_Insert_2 : param3
          })

           var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate('Data Successfully Saved')
            })

        },
        M_UpdateOR(){
          var totallll = 0
          for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
            // var x = (parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
            totallll += parseFloat(this.replaceAllString(this.DebitCharge[a].data.allocamt, ',', '', 'number')) //parseFloat(x).toFixed(this.decimal)
          }

          var dataPost =[]
          var dataUpdate =[]
          // var linenoU = this.$parent.data.PageOrder

           var param1 = {
            _Method_:'UPDATE',
            _LineNo_: this.$parent.data.PageOrder ,
            CreditSequenceNoOutput_output: this.DataRow.CreditSequenceNo,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            DebitNo: this.M_AR_CNAllocationD.debitno ,
            DebitSequenceNo: this.DataRow.DebitSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            VatPaidByManagement: this.M_AR_CNAllocationD.vatpaidby == "M" ? "Y" : "N" ,
            VatPaidByDebtor: this.M_AR_CNAllocationD.vatpaidby == "D" ? "Y" : "N" ,
            WithHoldingPaidByManagement: this.M_AR_CNAllocationD.withholdingpaidby == "M" ? "Y" : "N" ,
            WithHoldingPaidByDebtor: this.M_AR_CNAllocationD.withholdingpaidby == "D" ? "Y" : "N" ,
            JournalCategory: this.M_AR_CNAllocationD.journalcategory ,
            AllocationAmt: totallll, //this.M_AR_CNAllocationD.totalallocatedamt ,
            CurrencyOperator: this.M_AR_CNAllocationD.operator ,
            Remarks: this.M_AR_CNAllocationD.remarks ,
            UserInput: this.getDataUser().UserId
            
          }   
          
          
          for (let x = 0 ; x < this.DataDetail.length ; x ++) {
              if (this.M_AR_CNAllocationD.journalcategory == "D") 
              {
                // var dataPostU = []
                // var dataPost = []
                  if (this.DataDetail[x].CreditDetailSequenceNo != 0) {
                    // status = "U"
                    // linenoU = 3
                    
                    dataPost.push({     
                      _Method_:'UPDATE',                 
                      _LineNo_: 3 ,
                      CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                      UserEdit: this.getDataUser().UserId,
                      DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                      CurrencyOperator: this.M_AR_CNAllocationD.operator,
                      DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                      CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                      DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                      CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                      DebitCurrencyRate: this.DataDetail[x].CurrencyRate,
                      CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                      AllocationAmt: this.DebitCharge[x].data.allocamt
                    })
                }
                
                else if (this.DebitCharge[x].data.allocamt != 0) {
                  // status = "I"

                  dataPost.push({
                    _Method_:'SAVE',
                    _LineNo_: this.$parent.data.PageOrder ,
                    CreditSequenceNo: this.DataRow.CreditSequenceNo,
                    UserInput: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_CNAllocationD.operator,
                    DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: this.DataDetail[x].CurrencyRate,
                    CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                    AllocationAmt: this.DebitCharge[x].data.allocamt
                  })
                }
              }
              else
              {
                  dataPost.push({
                      _Method_:'UPDATE3',
                      _LineNo_: 3,
                      CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                      CreditSequenceNo: this.DataRow.CreditSequenceNo,
                      DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                      TotalAllocationAmt: totallll, //this.M_AR_CNAllocationD.totalallocatedamt,
                      DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                      CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                      BaseCurrencyCd: this.BaseCurrencyCd,
                      VATPaidBy: this.M_AR_CNAllocationD.vatpaidby,
                      WithholdingPaidBy: this.M_AR_CNAllocationD.withholdingpaidby,
                      CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                      CurrencyOperator: this.M_AR_CNAllocationD.operator,
                      TaxCd: this.M_AR_CNAllocationD.taxcd,
                      TaxType: this.DataDetail[x].TaxType,
                      TaxClass: this.DataDetail[x].TaxTypeDescs,
                      UserEdit: this.getDataUser().UserId
                  })
              }
          }//end looping

          var param3 = {
            _Method_:'UPDATE2',
            _LineNo_: this.$parent.data.PageOrder ,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CurrencyOperator: this.M_AR_CNAllocationD.operator ,
            Remarks: this.M_AR_CNAllocationD.remarks ,
            UserEdit: this.getDataUser().UserId //,
            // AutoUnderOver: this.M_AR_CNAllocationD.autounderover
          }

          dataUpdate.push({
            A_Insert_1:param1,
            B_looping_1: dataPost,
            C_Insert_2 : param3
          })
          //getUrlProsesDataPostMulti
          var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }
            
            this.postJSONMulti( this.getUrlProsesDataPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultUpdate('Data Successfully Saved')
            })
        },
        M_Update(){
          // if(this.DataRow.CreditSequenceNo == 0)
          // {
          //   this.M_InsertOR()
          // }
          // else
          // {
          //   this.M_UpdateOR()
          // }
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

                this.M_InsertOR()
            })
          }
          else {
            this.M_UpdateOR()
          }
        },
        M_UpdateOLD() {
          var param1 = {
            OptionSeq: this.getOptionSeq().OptionSeq ,
            LineNo: this.$parent.data.PageOrder ,
            CreditSequenceNoOutput_output: this.DataRow.CreditSequenceNo,
            SubportfolioCd: this.getDataUser().SubPortfolioCd ,
            DebitNo: this.M_AR_CNAllocationD.debitno ,
            DebitSequenceNo: this.DataRow.DebitSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            VatPaidByManagement: this.M_AR_CNAllocationD.vatpaidby == "M" ? "Y" : "N" ,
            VatPaidByDebtor: this.M_AR_CNAllocationD.vatpaidby == "D" ? "Y" : "N" ,
            WithHoldingPaidByManagement: this.M_AR_CNAllocationD.withholdingpaidby == "M" ? "Y" : "N" ,
            WithHoldingPaidByDebtor: this.M_AR_CNAllocationD.withholdingpaidby == "D" ? "Y" : "N" ,
            JournalCategory: this.M_AR_CNAllocationD.journalcategory ,
            AllocationAmt: this.M_AR_CNAllocationD.totalallocatedamt ,
            CurrencyOperator: this.M_AR_CNAllocationD.operator ,
            Remarks: this.M_AR_CNAllocationD.remarks ,
            UserInput: this.getDataUser().UserId
            
          }

          this.postJSON(this.getUrlUpdate(), param1).then(response => {
            if (response == null) return
            
            this.CreditSequenceNoOutput = response.Data.CreditSequenceNoOutput_output==0?this.DataRow.CreditSequenceNo:response.Data.CreditSequenceNoOutput_output
            // this.$parent.resultUpdate(response.Message)
            this.M_Update2()
          })
        },
        M_Update2() {
          // alert('M_Update2')
          var param = {}
          var paramU = {}
          var url = ""
          var urlU = ""
          var status = ""
          var lineno = this.$parent.data.PageOrder
          var linenoU = this.$parent.data.PageOrder
          if (this.DataRow.CreditSequenceNo == 0) {
            //Insert
            if (this.M_AR_CNAllocationD.journalcategory == "D") {
              //Direct
              url = this.getUrlInsertMulti()
              status = "I"
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  CreditSequenceNo: this.CreditSequenceNoOutput,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  CurrencyOperator: this.M_AR_CNAllocationD.operator,
                  DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  DebitCurrencyRate: this.DataDetail[x].CurrencyRate,
                  CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                  AllocationAmt: this.DataDetail[x].AllocationAmt,
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
              lineno = 3
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                dataPost.push({
                  CreditSequenceNo: this.CreditSequenceNoOutput,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,                  
                  DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  VATPaidBy: this.M_AR_CNAllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_CNAllocationD.withholdingpaidby,
                  CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                  TotalAllocationAmt: this.M_AR_CNAllocationD.totalallocatedamt,
                  CurrencyOperator: this.M_AR_CNAllocationD.operator,
                  TaxCd: this.M_AR_CNAllocationD.taxcd,
                  TaxType: this.DataDetail[x].TaxType,
                  TaxClass: this.DataDetail[x].TaxTypeDescs,
                  UserInput: this.getDataUser().UserId,
                  // AllocationAmt: this.DataDetail[x].AllocationAmt
                })
              }
              
              param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: lineno,
                Data: dataPost
              }
            }
          }//updateOR
          else {
            //Update
            if (this.M_AR_CNAllocationD.journalcategory == "D") {
              //Direct
              var dataPostU = []
              var dataPost = []
              for (let x = 0 ; x < this.DataDetail.length ; x ++) {
                if (this.DataDetail[x].CreditDetailSequenceNo != 0) {
                  urlU = this.getUrlUpdateMulti()
                  status = "U"
                  linenoU = 3
                  
                  dataPostU.push({
                    CreditDetailSequenceNo: this.DataDetail[x].CreditDetailSequenceNo,
                    UserEdit: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_CNAllocationD.operator,
                    DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: this.DataDetail[x].CurrencyRate,
                    CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                    AllocationAmt: this.DataDetail[x].AllocationAmt
                  })
                }
                else if (this.DataDetail[x].AllocationAmt != 0) {
                  url = this.getUrlInsertMulti()
                  status = "I"

                  dataPost.push({
                    CreditSequenceNo: this.DataRow.CreditSequenceNo,
                    UserInput: this.getDataUser().UserId,
                    DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                    CurrencyOperator: this.M_AR_CNAllocationD.operator,
                    DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                    CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                    DebitCurrencyRate: this.DataDetail[x].CurrencyRate,
                    CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                    AllocationAmt: this.DataDetail[x].AllocationAmt
                  })
                }
              }//loop end
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
                  CreditSequenceNo: this.DataRow.CreditSequenceNo,
                  DebitDetailSequenceNo: this.DataDetail[x].DebitDetailSequenceNo,
                  TotalAllocationAmt: this.M_AR_CNAllocationD.totalallocatedamt,
                  DebitCurrencyCd: this.M_AR_CNAllocationD.debitcurrencycd,
                  CreditCurrencyCd: this.DataRowPage1.CurrencyCd,
                  BaseCurrencyCd: this.BaseCurrencyCd,
                  VATPaidBy: this.M_AR_CNAllocationD.vatpaidby,
                  WithholdingPaidBy: this.M_AR_CNAllocationD.withholdingpaidby,
                  CreditCurrencyRate: this.DataDetail[x].AllocationCurrencyRate,
                  CurrencyOperator: this.M_AR_CNAllocationD.operator,
                  TaxCd: this.M_AR_CNAllocationD.taxcd,
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

          if (this.DataRow.CreditSequenceNo != 0 && this.M_AR_CNAllocationD.journalcategory == "D") {
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
            CreditSequenceNo: this.DataRow.CreditSequenceNo ,
            CreditNo: this.DataRowPage1.CreditNo ,
            CurrencyOperator: this.M_AR_CNAllocationD.operator ,
            Remarks: this.M_AR_CNAllocationD.remarks ,
            UserEdit: this.getDataUser().UserId //,
            // AutoUnderOver: this.M_AR_CNAllocationD.autounderover
          }

          this.postJSON(this.getUrlUpdate() + "2", param3).then(response => {
            if (response == null) return
            this.$parent.resultUpdate(response.Message)

          })
        },
		M_ClearForm(){
            this.M_AR_CNAllocationD = {
                autounderover: '',
                journalcategory: '',
                debitno: '',
                trxtype: '',
                descs: '',
                headerdescs: '',
                currencycd: '',
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
                debitcurrencycd: '',
                outstandingamt: '',
                fullallocate: '',
                detailoutstandingamt: '',
                debitcurrencyrate: '',
                allocationamt: '0',
                creditcurrencyrate: '0'
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_CNAllocationD.currencycd = data.CurrencyCd 



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
                    }
                } 
            })
        },
        getDataBy (record) {
          // console.log(this.DataRowPage1)
          // console.log(record)
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
            var datas = []
            this.DebitCharge = []
            this.DataDetail = ress
            var totalChargeAmt = 0
            for (let x = 0; x < ress.length; x ++) {
              totalChargeAmt += parseFloat(ress[x].ChargeAmt)
              this.DebitCharge.push({
                data: {
                  // label: ress[x].TaxTypeDescs,
                  outstanding: ress[x].ChargeAmt && ress[x].ChargeAmt != '' && parseFloat(ress[x].ChargeAmt) > 0 ? this.isCurrency(ress[x].ChargeAmt, this.decimal) : '',
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
                    cVisible: true, 
                    cProtect: true, 
                    cPageLevel: this.PageLevel, 
                    cTabIndex: this.TabIndex, 
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
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
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
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
                    cVisible: true, 
                    cProtect: true, 
                    cPageLevel: this.PageLevel, 
                    cTabIndex: this.TabIndex, 
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                    cRowDisable: []

                  },
                }
              })
            }

            this.TotalCharge = totalChargeAmt
            // this.DebitCharge = datas

            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              currencycd: record.CurrencyCd,
              debitsequenceno: record.DebitSequenceNo,
              creditsequenceno: record.CreditSequenceNo,
              creditno: this.DataRowPage1.ReceiptNo,
              debtorcd: this.DataRowPage1.DebtorCd,
              SubportfolioCd: this.getDataUser().SubPortfolioCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
              if(response == null) return

              var data = response.Data[0]
              this.M_AR_CNAllocationD = {
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
                totalallocatedamt: data.totalallocatedamt && data.totalallocatedamt != '' && parseFloat(data.totalallocatedamt) > 0 ? this.isCurrency(data.totalallocatedamt, this.decimal) : '',
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
                outstandingamt: this.isCurrency(record.OutstandingAmt, this.decimal),
                fullallocate: data.totalallocatedamt > 0 ? "Y" : "",
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
            if (this.M_AR_CNAllocationD.fullallocate == "Y")
            {
              this.FnAllocationAmt = this.M_AR_CNAllocationD.outstandingamt
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
        // console.log(data)
        if (this.inputStatus != 'VIEW') {
          data = this.replaceAllString(data, ',', '', 'number')
          // if (this.M_AR_CNAllocationD.fullallocate == "Y") return
          if (data <= 0 || data == '') {
            for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
              // var x = (parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
              this.DebitCharge[a].data.allocamt = this.isCurrency(0, this.decimal) //parseFloat(x).toFixed(this.decimal)
            }
          }
          else {
            for (let a = 0 ; a < this.DebitCharge.length ; a ++) {
              // var ostdamt = parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number'))
              // if (data <= 0) {
              //   this.DebitCharge[a].data.allocamt = this.isCurrency(0, this.decimal)
              // }
              // else if (ostdamt >= data) {
              //   this.DebitCharge[a].data.allocamt = this.isCurrency(0, this.decimal)
              // }
              var x = (parseFloat(this.replaceAllString(this.DebitCharge[a].data.outstanding, ',', '', 'number')) / parseFloat(this.TotalCharge)) * parseFloat(this.replaceAllString(data, ',', '', 'number'))
              this.DebitCharge[a].data.allocamt = parseFloat(x).toFixed(this.decimal)
            }
          }
        }
         this.$forceUpdate()
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

