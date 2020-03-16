<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnassessmentrunningcdChange" :prop="PI_assessmentrunningcd" :value="M_TN_AssessmentSpecification.assessmentrunningcd" :label="M_TN_AssessmentSpecification.assessmentrunningcdLabel" ref="ref_assessmentrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2"></b-col>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: '1', 
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
                                        :prop="{cLabel: '2', 
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
                                        :prop="{cLabel: '3', 
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
                                        :prop="{cLabel: '4', 
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
                                        :prop="{cLabel: '5', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                    </b-row>
                                    <!-- End -->
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: 'Aging', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_aging1" v-model="M_TN_AssessmentSpecification.aging1"  ref="ref_aging1"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_aging2" v-model="M_TN_AssessmentSpecification.aging2"  ref="ref_aging2"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_aging3" v-model="M_TN_AssessmentSpecification.aging3"  ref="ref_aging3"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_aging4" v-model="M_TN_AssessmentSpecification.aging4"  ref="ref_aging4"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_aging5" v-model="M_TN_AssessmentSpecification.aging5"  ref="ref_aging5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: 'Aging Score', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_agingscore1" v-model="M_TN_AssessmentSpecification.agingscore1"  ref="ref_agingscore1"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_agingscore2" v-model="M_TN_AssessmentSpecification.agingscore2"  ref="ref_agingscore2"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_agingscore3" v-model="M_TN_AssessmentSpecification.agingscore3"  ref="ref_agingscore3"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_agingscore4" v-model="M_TN_AssessmentSpecification.agingscore4"  ref="ref_agingscore4"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_agingscore5" v-model="M_TN_AssessmentSpecification.agingscore5"  ref="ref_agingscore5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: 'Payment History', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentterm1" v-model="M_TN_AssessmentSpecification.paymentterm1"  ref="ref_paymentterm1"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentterm2" v-model="M_TN_AssessmentSpecification.paymentterm2"  ref="ref_paymentterm2"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentterm3" v-model="M_TN_AssessmentSpecification.paymentterm3"  ref="ref_paymentterm3"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentterm4" v-model="M_TN_AssessmentSpecification.paymentterm4"  ref="ref_paymentterm4"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentterm5" v-model="M_TN_AssessmentSpecification.paymentterm5"  ref="ref_paymentterm5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: 'Payment Score', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentscore1" v-model="M_TN_AssessmentSpecification.paymentscore1"  ref="ref_paymentscore1"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentscore2" v-model="M_TN_AssessmentSpecification.paymentscore2"  ref="ref_paymentscore2"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentscore3" v-model="M_TN_AssessmentSpecification.paymentscore3"  ref="ref_paymentscore3"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentscore4" v-model="M_TN_AssessmentSpecification.paymentscore4"  ref="ref_paymentscore4"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_paymentscore5" v-model="M_TN_AssessmentSpecification.paymentscore5"  ref="ref_paymentscore5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: 'Net Deffered', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdeffered1" v-model="M_TN_AssessmentSpecification.netdeffered1"  ref="ref_netdeffered1"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdeffered2" v-model="M_TN_AssessmentSpecification.netdeffered2"  ref="ref_netdeffered2"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdeffered3" v-model="M_TN_AssessmentSpecification.netdeffered3"  ref="ref_netdeffered3"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdeffered4" v-model="M_TN_AssessmentSpecification.netdeffered4"  ref="ref_netdeffered4"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdeffered5" v-model="M_TN_AssessmentSpecification.netdeffered5"  ref="ref_netdeffered5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: 'Net Deffered Score', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdefferedscore1" v-model="M_TN_AssessmentSpecification.netdefferedscore1"  ref="ref_netdefferedscore1"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdefferedscore2" v-model="M_TN_AssessmentSpecification.netdefferedscore2"  ref="ref_netdefferedscore2"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdefferedscore3" v-model="M_TN_AssessmentSpecification.netdefferedscore3"  ref="ref_netdefferedscore3"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdefferedscore4" v-model="M_TN_AssessmentSpecification.netdefferedscore4"  ref="ref_netdefferedscore4"/>
                                      </b-col>
                                      <b-col md="2">
                                        <ABSTextBoxOnly :prop="PI_netdefferedscore5" v-model="M_TN_AssessmentSpecification.netdefferedscore5"  ref="ref_netdefferedscore5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_AssessmentSpecification.remarks"  ref="ref_remarks" />
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
            FormType: "Form",
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_AssessmentSpecification :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                assessmentrunningcd: '',
                descsrunningcd: '',
                aging1: '',
                agingscore1: '',
                aging2: '',
                agingscore2: '',
                aging3: '',
                agingscore3: '',
                aging4: '',
                agingscore4: '',
                aging5: '',
                agingscore5: '',
                paymentterm1: '',
                paymentscore1: '',
                paymentterm2: '',
                paymentscore2: '',
                paymentterm3: '',
                paymentscore3: '',
                paymentterm4: '',
                paymentscore4: '',
                paymentterm5: '',
                paymentscore5: '',
                netdeffered1: '',
                netdefferedscore1: '',
                netdeffered2: '',
                netdefferedscore2: '',
                netdeffered3: '',
                netdefferedscore3: '',
                netdeffered4: '',
                netdefferedscore4: '',
                netdeffered5: '',
                netdefferedscore5: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,					
            PI_assessmentrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'assessmentrunningcd', 
                cLabel: 'Assessment RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_aging1: { 
                cValidate :'', 
                cName: 'aging1', 
                cLabel: 'Aging 1', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aging2: { 
                cValidate :'', 
                cName: 'aging2', 
                cLabel: 'Aging 2', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aging3: { 
                cValidate :'', 
                cName: 'aging3', 
                cLabel: 'Aging 3', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aging4: { 
                cValidate :'', 
                cName: 'aging4', 
                cLabel: 'Aging 4', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aging5: { 
                cValidate :'', 
                cName: 'aging5', 
                cLabel: 'Aging 5', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_agingscore1: { 
                cValidate :'', 
                cName: 'agingscore1', 
                cLabel: 'Aging Score 1', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_agingscore2: { 
                cValidate :'', 
                cName: 'agingscore2', 
                cLabel: 'Aging Score 2', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_agingscore3: { 
                cValidate :'', 
                cName: 'agingscore3', 
                cLabel: 'Aging Score 3', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_agingscore4: { 
                cValidate :'', 
                cName: 'agingscore4', 
                cLabel: 'Aging Score 4', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_agingscore5: { 
                cValidate :'', 
                cName: 'agingscore5', 
                cLabel: 'Aging Score 5', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentterm1: { 
                cValidate :'', 
                cName: 'paymentterm1', 
                cLabel: 'Payment History 1', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentterm2: { 
                cValidate :'', 
                cName: 'paymentterm2', 
                cLabel: 'Payment History 2', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentterm3: { 
                cValidate :'', 
                cName: 'paymentterm3', 
                cLabel: 'Payment History 3', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentterm4: { 
                cValidate :'', 
                cName: 'paymentterm4', 
                cLabel: 'Payment History 4', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentterm5: { 
                cValidate :'', 
                cName: 'paymentterm5', 
                cLabel: 'Payment History 5', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentscore1: { 
                cValidate :'', 
                cName: 'paymentscore1', 
                cLabel: 'Payment Score 1', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentscore2: { 
                cValidate :'', 
                cName: 'paymentscore2', 
                cLabel: 'Payment Score 2', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentscore3: { 
                cValidate :'', 
                cName: 'paymentscore3', 
                cLabel: 'Payment Score  3', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentscore4: { 
                cValidate :'', 
                cName: 'paymentscore4', 
                cLabel: 'Payment Score 4', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentscore5: { 
                cValidate :'', 
                cName: 'paymentscore5', 
                cLabel: 'Payment Score 5', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdeffered1: { 
                cValidate :'', 
                cName: 'netdeffered1', 
                cLabel: 'Net Deffered 1 ', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdeffered2: { 
                cValidate :'', 
                cName: 'netdeffered2', 
                cLabel: 'Net Deffered 2', 
                cLabelSize: 4, 
                cOrder: 23, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdeffered3: { 
                cValidate :'', 
                cName: 'netdeffered3', 
                cLabel: 'Net Deffered 3', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdeffered4: { 
                cValidate :'', 
                cName: 'netdeffered4', 
                cLabel: 'Net Deffered 4', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdeffered5: { 
                cValidate :'', 
                cName: 'netdeffered5', 
                cLabel: 'Net Deffered 5', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedscore1: { 
                cValidate :'', 
                cName: 'netdefferedscore1', 
                cLabel: 'Net Deffered Score 1', 
                cLabelSize: 4, 
                cOrder: 27, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedscore2: { 
                cValidate :'', 
                cName: 'netdefferedscore2', 
                cLabel: 'Net Deffered Score 2', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedscore3: { 
                cValidate :'', 
                cName: 'netdefferedscore3', 
                cLabel: 'Net Deffered Score 3', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedscore4: { 
                cValidate :'', 
                cName: 'netdefferedscore4', 
                cLabel: 'Net Deffered Score 4', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedscore5: { 
                cValidate :'', 
                cName: 'netdefferedscore5', 
                cLabel: 'Net Deffered Score 5', 
                cLabelSize: 4, 
                cOrder: 31, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
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
                cOrder: 32, 
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
    }
  },
    methods: {		
        OnassessmentrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_AssessmentSpecification.assessmentrunningcd = data.id
            this.M_TN_AssessmentSpecification.assessmentrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{assessmentrunningcd}
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
        },
        M_Insert() {
            this.M_Update()
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AssessmentRunningCd: this.M_TN_AssessmentSpecification.assessmentrunningcd == '' || this.M_TN_AssessmentSpecification.assessmentrunningcd == null ? 'NULL' : this.M_TN_AssessmentSpecification.assessmentrunningcd ,
                Aging1: this.M_TN_AssessmentSpecification.aging1,
                AgingScore1: this.M_TN_AssessmentSpecification.agingscore1,
                Aging2: this.M_TN_AssessmentSpecification.aging2,
                AgingScore2: this.M_TN_AssessmentSpecification.agingscore2,
                Aging3: this.M_TN_AssessmentSpecification.aging3,
                AgingScore3: this.M_TN_AssessmentSpecification.agingscore3,
                Aging4: this.M_TN_AssessmentSpecification.aging4,
                AgingScore4: this.M_TN_AssessmentSpecification.agingscore4,
                Aging5: this.M_TN_AssessmentSpecification.aging5,
                AgingScore5: this.M_TN_AssessmentSpecification.agingscore5,
                PaymentTerm1: this.M_TN_AssessmentSpecification.paymentterm1,
                PaymentScore1: this.M_TN_AssessmentSpecification.paymentscore1,
                PaymentTerm2: this.M_TN_AssessmentSpecification.paymentterm2,
                PaymentScore2: this.M_TN_AssessmentSpecification.paymentscore2,
                PaymentTerm3: this.M_TN_AssessmentSpecification.paymentterm3,
                PaymentScore3: this.M_TN_AssessmentSpecification.paymentscore3,
                PaymentTerm4: this.M_TN_AssessmentSpecification.paymentterm4,
                PaymentScore4: this.M_TN_AssessmentSpecification.paymentscore4,
                PaymentTerm5: this.M_TN_AssessmentSpecification.paymentterm5,
                PaymentScore5: this.M_TN_AssessmentSpecification.paymentscore5,
                NetDeffered1: this.M_TN_AssessmentSpecification.netdeffered1,
                NetDefferedScore1: this.M_TN_AssessmentSpecification.netdefferedscore1,
                NetDeffered2: this.M_TN_AssessmentSpecification.netdeffered2,
                NetDefferedScore2: this.M_TN_AssessmentSpecification.netdefferedscore2,
                NetDeffered3: this.M_TN_AssessmentSpecification.netdeffered3,
                NetDefferedScore3: this.M_TN_AssessmentSpecification.netdefferedscore3,
                NetDeffered4: this.M_TN_AssessmentSpecification.netdeffered4,
                NetDefferedScore4: this.M_TN_AssessmentSpecification.netdefferedscore4,
                NetDeffered5: this.M_TN_AssessmentSpecification.netdeffered5,
                NetDefferedScore5: this.M_TN_AssessmentSpecification.netdefferedscore5,
                Remarks: this.M_TN_AssessmentSpecification.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_AssessmentSpecification.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.alertSuccess(response.Message)
                .then(() => {
                  this.getDataBy()
                  this.getToolbar().FormStatus = 'EDIT'
                  this.getToolbar().ProcessPS()
                  this.$store.commit('setStatus', 'view')
                  this.$store.commit('setEventStatus', 'Save')
                  this.FormToMasterPage().ValidasiPage()
                })
            })
        },
		M_ClearForm(){
            this.M_TN_AssessmentSpecification = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                assessmentrunningcd: '',
                descsrunningcd: '',
                aging1: '',
                agingscore1: '',
                aging2: '',
                agingscore2: '',
                aging3: '',
                agingscore3: '',
                aging4: '',
                agingscore4: '',
                aging5: '',
                agingscore5: '',
                paymentterm1: '',
                paymentscore1: '',
                paymentterm2: '',
                paymentscore2: '',
                paymentterm3: '',
                paymentscore3: '',
                paymentterm4: '',
                paymentscore4: '',
                paymentterm5: '',
                paymentscore5: '',
                netdeffered1: '',
                netdefferedscore1: '',
                netdeffered2: '',
                netdefferedscore2: '',
                netdeffered3: '',
                netdefferedscore3: '',
                netdeffered4: '',
                netdefferedscore4: '',
                netdeffered5: '',
                netdefferedscore5: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                if(response.Data.length > 0){
                  this.getToolbar().FormStatus = 'EDIT'
                  this.getToolbar().ProcessPS()

                  var data = response.Data[0]
                  this.M_TN_AssessmentSpecification = {
                    subportfoliocd: data.subportfoliocd,
                    assessmentrunningcd: data.assessmentrunningcd,
                    descsrunningcd: data.descsrunningcd,
                    aging1: data.aging1,
                    agingscore1: data.agingscore1,
                    aging2: data.aging2,
                    agingscore2: data.agingscore2,
                    aging3: data.aging3,
                    agingscore3: data.agingscore3,
                    aging4: data.aging4,
                    agingscore4: data.agingscore4,
                    aging5: data.aging5,
                    agingscore5: data.agingscore5,
                    paymentterm1: data.paymentterm1,
                    paymentscore1: data.paymentscore1,
                    paymentterm2: data.paymentterm2,
                    paymentscore2: data.paymentscore2,
                    paymentterm3: data.paymentterm3,
                    paymentscore3: data.paymentscore3,
                    paymentterm4: data.paymentterm4,
                    paymentscore4: data.paymentscore4,
                    paymentterm5: data.paymentterm5,
                    paymentscore5: data.paymentscore5,
                    netdeffered1: data.netdeffered1,
                    netdefferedscore1: data.netdefferedscore1,
                    netdeffered2: data.netdeffered2,
                    netdefferedscore2: data.netdefferedscore2,
                    netdeffered3: data.netdeffered3,
                    netdefferedscore3: data.netdefferedscore3,
                    netdeffered4: data.netdeffered4,
                    netdefferedscore4: data.netdefferedscore4,
                    netdeffered5: data.netdeffered5,
                    netdefferedscore5: data.netdefferedscore5,
                    remarks: data.remarks,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    lastupdatestamp: data.lastupdatestamp,
                    rowid: data.rowid
                  }
                      
                  this.M_TN_AssessmentSpecification.assessmentrunningcdLabel = this.M_TN_AssessmentSpecification.assessmentrunningcd != null && this.M_TN_AssessmentSpecification.assessmentrunningcd != '' ? data.assessmentrunningcd + this.separator + data.descsrunningcd :'' 
                  
                  this.IEBy.Input = data.UserInput
                  this.IEBy.Edit = data.UserEdit
                }
                else {
                  this.getToolbar().FormStatus = 'NEW'
                  this.getToolbar().ProcessPS()
                }
                

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.getDataBy()
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
