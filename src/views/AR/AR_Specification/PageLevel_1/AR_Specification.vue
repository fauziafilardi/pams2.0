<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
              <span>
                <span style="float:Left; color: #81b3e9 !important;letter-spacing: 1px;margin-top: 2px;margin-left: 3px" >
                    Account Receivable Specification <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
              </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbatchcontrolChange" :prop="PI_batchcontrol" v-model="M_AR_Specification.batchcontrol"  ref="ref_batchcontrol" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnamortizationpaymentcontrolChange" :prop="PI_amortizationpaymentcontrol" v-model="M_AR_Specification.amortizationpaymentcontrol"  ref="ref_amortizationpaymentcontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbatchnumberingChange" :prop="PI_batchnumbering" v-model="M_AR_Specification.batchnumbering"  ref="ref_batchnumbering" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnprintdocumentChange" :prop="PI_printdocument" v-model="M_AR_Specification.printdocument"  ref="ref_printdocument" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntemporaryinvoicerunningcdChange" :prop="PI_temporaryinvoicerunningcd" :value="M_AR_Specification.temporaryinvoicerunningcd" :label="M_AR_Specification.temporaryinvoicerunningcdLabel" ref="ref_temporaryinvoicerunningcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnunidentifieddebtorcdChange" :prop="PI_unidentifieddebtorcd" :value="M_AR_Specification.unidentifieddebtorcd" :label="M_AR_Specification.unidentifieddebtorcdLabel" ref="ref_unidentifieddebtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndefaultreceiptbankcdChange" :prop="PI_defaultreceiptbankcd" :value="M_AR_Specification.defaultreceiptbankcd" :label="M_AR_Specification.defaultreceiptbankcdLabel" ref="ref_defaultreceiptbankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_maximumunderpaymentamt" v-model="M_AR_Specification.maximumunderpaymentamt"  ref="ref_maximumunderpaymentamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_maximumoverpaymentamt" v-model="M_AR_Specification.maximumoverpaymentamt"  ref="ref_maximumoverpaymentamt"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Revaluation
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnforexrevaluationtrxtypeChange" :prop="PI_forexrevaluationtrxtype" :value="M_AR_Specification.forexrevaluationtrxtype" :label="M_AR_Specification.forexrevaluationtrxtypeLabel" ref="ref_forexrevaluationtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrevaluationrunningcdChange" :prop="PI_revaluationrunningcd" :value="M_AR_Specification.revaluationrunningcd" :label="M_AR_Specification.revaluationrunningcdLabel" ref="ref_revaluationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnrevaluationincludevatChange" :prop="PI_revaluationincludevat" v-model="M_AR_Specification.revaluationincludevat"  ref="ref_revaluationincludevat" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Deposit
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndepositbillingjournalChange" :prop="PI_depositbillingjournal" v-model="M_AR_Specification.depositbillingjournal"  ref="ref_depositbillingjournal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndeposittaxcdChange" :prop="PI_deposittaxcd" :value="M_AR_Specification.deposittaxcd" :label="M_AR_Specification.deposittaxcdLabel" ref="ref_deposittaxcd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Stamp Duty
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstampdutybasedonChange" :prop="PI_stampdutybasedon" v-model="M_AR_Specification.stampdutybasedon"  ref="ref_stampdutybasedon" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnstampdutytrxtypeChange" :prop="PI_stampdutytrxtype" :value="M_AR_Specification.stampdutytrxtype" :label="M_AR_Specification.stampdutytrxtypeLabel" ref="ref_stampdutytrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnstampdutytaxcdChange" :prop="PI_stampdutytaxcd" :value="M_AR_Specification.stampdutytaxcd" :label="M_AR_Specification.stampdutytaxcdLabel" ref="ref_stampdutytaxcd"/>
                                      </b-col>
                                    </b-row>
                                     <div class="div-collapse">
                                        <span class="master-span-form">
                                            Tax Handling
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalmodeChange" :prop="PI_journalmode" v-model="M_AR_Specification.journalmode"  ref="ref_journalmode" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnwithholdingtreatmentChange" :prop="PI_withholdingtreatment" v-model="M_AR_Specification.withholdingtreatment"  ref="ref_withholdingtreatment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnwithholdingtrxtypeChange" :prop="PI_withholdingtrxtype" :value="M_AR_Specification.withholdingtrxtype" :label="M_AR_Specification.withholdingtrxtypeLabel" ref="ref_withholdingtrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnvattrxtypeChange" :prop="PI_vattrxtype" :value="M_AR_Specification.vattrxtype" :label="M_AR_Specification.vattrxtypeLabel" ref="ref_vattrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnaccruedwithholdingmodeChange" :prop="PI_accruedwithholdingmode" v-model="M_AR_Specification.accruedwithholdingmode"  ref="ref_accruedwithholdingmode" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnaccruedwithholdingothersadditionaljournalChange" :prop="PI_accruedwithholdingothersadditionaljournal" v-model="M_AR_Specification.accruedwithholdingothersadditionaljournal"  ref="ref_accruedwithholdingothersadditionaljournal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncnotherstrxtypeChange" :prop="PI_cnotherstrxtype" :value="M_AR_Specification.cnotherstrxtype" :label="M_AR_Specification.cnotherstrxtypeLabel" ref="ref_cnotherstrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnallocationotherstrxtypeChange" :prop="PI_allocationotherstrxtype" :value="M_AR_Specification.allocationotherstrxtype" :label="M_AR_Specification.allocationotherstrxtypeLabel" ref="ref_allocationotherstrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxsettlementrunningcdChange" :prop="PI_taxsettlementrunningcd" :value="M_AR_Specification.taxsettlementrunningcd" :label="M_AR_Specification.taxsettlementrunningcdLabel" ref="ref_taxsettlementrunningcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntaxsettlementcancellationrunningcdChange" :prop="PI_taxsettlementcancellationrunningcd" :value="M_AR_Specification.taxsettlementcancellationrunningcd" :label="M_AR_Specification.taxsettlementcancellationrunningcdLabel" ref="ref_taxsettlementcancellationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnvatexemptionmethodChange" :prop="PI_vatexemptionmethod" v-model="M_AR_Specification.vatexemptionmethod"  ref="ref_vatexemptionmethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                          <ABSInputSelectList @change="OnwriteoffvattrxtypeChange" :prop="PI_writeoffvattrxtype" :value="M_AR_Specification.writeoffvattrxtype" :label="M_AR_Specification.writeoffvattrxtypeLabel" ref="ref_writeoffvattrxtype" />
                                      </b-col>
                                      <b-col md="6">
                                          <ABSInputSelectList @change="OnwriteoffvataccountcdChange" :prop="PI_writeoffvataccountcd" :value="M_AR_Specification.writeoffvataccountcd" :label="M_AR_Specification.writeoffvataccountcdLabel" ref="ref_writeoffvataccountcd" />
                                      </b-col>
                                    </b-row>
                                     <div class="div-collapse">
                                        <span class="master-span-form">
                                            Penalty
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @change="OnpenaltyfromChange" :prop="PI_penaltyfrom" :value="M_AR_Specification.penaltyfrom" :label="M_AR_Specification.penaltyfromLabel" ref="ref_penaltyfrom"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnpenaltytypeChange" :prop="PI_penaltytype" :value="M_AR_Specification.penaltytype" :label="M_AR_Specification.penaltytypeLabel" ref="ref_penaltytype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpenaltytrxtypeChange" :prop="PI_penaltytrxtype" :value="M_AR_Specification.penaltytrxtype" :label="M_AR_Specification.penaltytrxtypeLabel" ref="ref_penaltytrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_penaltydaysinyear" v-model="M_AR_Specification.penaltydaysinyear"  ref="ref_penaltydaysinyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpenaltycurrencycdChange" :prop="PI_penaltycurrencycd" :value="M_AR_Specification.penaltycurrencycd" :label="M_AR_Specification.penaltycurrencycdLabel" ref="ref_penaltycurrencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnpenaltytaxcdChange" :prop="PI_penaltytaxcd" :value="M_AR_Specification.penaltytaxcd" :label="M_AR_Specification.penaltytaxcdLabel" ref="ref_penaltytaxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_penaltyvalue" v-model="M_AR_Specification.penaltyvalue"  ref="ref_penaltyvalue"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnpenaltyamtChange" :prop="PI_penaltyamt" v-model="M_AR_Specification.penaltyamt"  ref="ref_penaltyamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpenaltyincludewithholdingChange" :prop="PI_penaltyincludewithholding" v-model="M_AR_Specification.penaltyincludewithholding"  ref="ref_penaltyincludewithholding" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Aging Period
                                        </span>
                                    </div>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="2">
                                        <ABSinputTextVuex :prop="PI_age1" v-model="M_AR_Specification.age1"  ref="ref_age1"/>
                                      </b-col>
                                      <b-col  md="2">
                                        <ABSinputTextVuex :prop="PI_age2" v-model="M_AR_Specification.age2"  ref="ref_age2"/>
                                      </b-col>
                                      <b-col  md="2">
                                        <ABSinputTextVuex :prop="PI_age3" v-model="M_AR_Specification.age3"  ref="ref_age3"/>
                                      </b-col>
                                      <b-col  md="2">
                                        <ABSinputTextVuex :prop="PI_age4" v-model="M_AR_Specification.age4"  ref="ref_age4"/>
                                      </b-col>
                                      <b-col  md="2">
                                        <ABSinputTextVuex :prop="PI_age5" v-model="M_AR_Specification.age5"  ref="ref_age5"/>
                                      </b-col>
                                      <b-col  md="2">
                                        <ABSinputTextVuex :prop="PI_age6" v-model="M_AR_Specification.age6"  ref="ref_age6"/>
                                      </b-col>
                                      
                                    </b-row>
                                </b-col> <!-- table close -->
                                <div class="div-collapse">
                                        <span class="master-span-form">
                                            Reminder
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreminderrunningcdChange" :prop="PI_reminderrunningcd" :value="M_AR_Specification.reminderrunningcd" :label="M_AR_Specification.reminderrunningcdLabel" ref="ref_reminderrunningcd"/>
                                      </b-col>
                                    </b-row>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reminder1" v-model="M_AR_Specification.reminder1"  ref="ref_reminder1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reminder2" v-model="M_AR_Specification.reminder2"  ref="ref_reminder2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reminder3" v-model="M_AR_Specification.reminder3"  ref="ref_reminder3"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reminder4" v-model="M_AR_Specification.reminder4"  ref="ref_reminder4"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_whttolerancedays" v-model="M_AR_Specification.whttolerancedays"  ref="ref_whttolerancedays"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex  :prop="PI_remarks" v-model="M_AR_Specification.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Allocation Priority
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfirstpriorityChange" :prop="PI_firstpriority" v-model="M_AR_Specification.firstpriority"  ref="ref_firstpriority" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsecondpriorityChange" :prop="PI_secondpriority" v-model="M_AR_Specification.secondpriority"  ref="ref_secondpriority" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnthirdpriorityChange" :prop="PI_thirdpriority" v-model="M_AR_Specification.thirdpriority"  ref="ref_thirdpriority" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Straight Line Adjustment Setting
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstraightlineadjustmentChange" :prop="PI_straightlineadjustment" v-model="M_AR_Specification.straightlineadjustment"  ref="ref_straightlineadjustment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpphincludestraightlineadjustmentChange" :prop="PI_pphincludestraightlineadjustment" v-model="M_AR_Specification.pphincludestraightlineadjustment"  ref="ref_pphincludestraightlineadjustment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstraightlineadjustmentvalueChange" :prop="PI_straightlineadjustmentvalue" v-model="M_AR_Specification.straightlineadjustmentvalue"  ref="ref_straightlineadjustmentvalue" />
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
			Module:"AR",	
            IEBy: {Input: '', Edit: ''},

            M_AR_Specification :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                modulecd: '',
                stampdutybasedon: '',
                stampdutytrxtype: '',
                stampdutytaxcd: '',
                detailforextrx: '',
                forexrevaluationtrxtype: '',
                revaluationincludevat: '',
                revaluationrunningcd: '',
                reminderrunningcd: '',
                taxsettlementrunningcd: '',
                taxsettlementcancellationrunningcd: '',
                unidentifieddebtorcd: '',
                printdocument: '',
                batchcontrol: '',
                batchnumbering: '',
                amortizationpaymentcontrol: '',
                temporaryinvoicerunningcd: '',
                journalmode: '',
                withholdingtreatment: '',
                accruedwithholdingmode: '',
                accruedwithholdingothersadditionaljournal: '',
                depositbillingjournal: '',
                deposittaxcd: '',
                cnotherstrxtype: '',
                allocationotherstrxtype: '',
                penaltyincludewithholding: 'N',
                vattrxtype: '',
                withholdingtrxtype: '',
                taxinvoicetrxtype: '',
                penaltyamt: '',
                penaltytrxtype: '',
                penaltycurrencycd: '',
                penaltytaxcd: '',
                penaltydaysinyear: '0',
                penaltytype: '',
                penaltyvalue: '0',
                maximumunderpaymentamt: '0',
                maximumoverpaymentamt: '0',
                age1: '0',
                age2: '0',
                age3: '0',
                age4: '0',
                age5: '0',
                age6: '0',
                reminder1: '0',
                reminder2: '0',
                reminder3: '0',
                reminder4: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                defaultreceiptbankcd: '',
                lastupdatestamp: 0,
                transactioncount: 0,
                writeoffvattrxtype: '',    
                writeoffvattrxtypeLabel: '',
                writeoffvataccountcd: '',
                writeoffvataccountcdLabel: '',
                firstpriority: '',
                secondpriority: '',
                thirdpriority: '',
                whttolerancedays: '0',
                straightlineadjustment: 'N',
                pphincludestraightlineadjustment: '',
                straightlineadjustmentvalue: '',
                penaltyfrom: '',
                vatexemptionmethod: '',
                rowid: 0
                    }
            ,					
            PI_batchcontrol: { 
                cValidate :'', 
                cName: 'batchcontrol', 
                cId: 'rdbbatchcontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Batch Control ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizationpaymentcontrol: { 
                cValidate :'', 
                cName: 'amortizationpaymentcontrol', 
                cId: 'rdbamortizationpaymentcontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchnumbering: { 
                cValidate :'', 
                cName: 'batchnumbering', 
                cId: 'rdbbatchnumbering', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Semi Auto', value: 'S' }, { text: 'Auto', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Batch Numbering', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_printdocument: { 
                cValidate :'', 
                cName: 'printdocument', 
                cId: 'rdbprintdocument', 
                cRadioOptions: [{ text: 'Before Posting', value: 'B' }, { text: 'After Posting', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Print Document ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_temporaryinvoicerunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'temporaryinvoicerunningcd', 
                cLabel: 'Temporary Invoice Running Code', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_unidentifieddebtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' And Status='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'unidentifieddebtorcd', 
                cLabel: 'Unidentified Debtor Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_defaultreceiptbankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status='A' "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defaultreceiptbankcd', 
                cLabel: 'Default Receipt Bank', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_maximumunderpaymentamt: { 
                cValidate :'required|max:16', 
                cName: 'maximumunderpaymentamt', 
                cLabel: 'Max. Under Payment Amount', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_maximumoverpaymentamt: { 
                cValidate :'required|max:16', 
                cName: 'maximumoverpaymentamt', 
                cLabel: 'Max. Over Payment Amount', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_forexrevaluationtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL' AND RunningCd IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'forexrevaluationtrxtype', 
                cLabel: 'Forex Revaluation Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_revaluationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'revaluationrunningcd', 
                cLabel: 'Forex Revaluation Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_revaluationincludevat: { 
                cValidate :'', 
                cName: 'revaluationincludevat', 
                cId: 'rdbrevaluationincludevat', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'Forex Revaluation Include VAT', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_depositbillingjournal: { 
                cValidate :'', 
                cName: 'depositbillingjournal', 
                cId: 'rdbdepositbillingjournal', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Deposit Billing Journal', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_deposittaxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'deposittaxcd', 
                cLabel: 'Deposit Tax Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_stampdutybasedon: { 
                cValidate :'', 
                cName: 'stampdutybasedon', 
                cId: 'rdbstampdutybasedon', 
                cRadioOptions: [{ text: 'Invoice', value: 'I' }, { text: 'OR', value: 'O' }], 
                cRadioDefaultOption: '', 
                cLabel:'Stamp Duty Based On', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_stampdutytrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetTrxType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AR' AND TrxClass = 'I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'stampdutytrxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cMasterUrl: 'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_stampdutytaxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'stampdutytaxcd', 
                cLabel: 'Tax', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_journalmode: { 
                cValidate :'', 
                cName: 'journalmode', 
                cId: 'rdbjournalmode', 
                cRadioOptions: [{ text: 'Combine', value: 'C' }, { text: 'Split AR/VAT', value: 'S' }, { text: 'Split AR/VAT/Withholding', value: 'W' }], 
                cRadioDefaultOption: '', 
                cLabel:'Journal Mode', 
                cLabelSize: 4, 
                cKey: true,
                cOrder: 14, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_withholdingtreatment: { 
                cValidate :'', 
                cName: 'withholdingtreatment', 
                cId: 'rdbwithholdingtreatment', 
                cRadioOptions: [{ text: 'AR Expense', value: 'A' }, { text: 'AR Prepaid', value: 'A' }, { text: 'Expense Withholding', value: 'E' }, { text: 'Prepaid Withholding', value: 'P' }], 
                cRadioDefaultOption: '', 
                cLabel:'Withholding Treatment', 
                cLabelSize: 4, 
                cKey: true,
                cOrder: 15, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_withholdingtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL' and RunningCd is not null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'withholdingtrxtype', 
                cLabel: 'Withholding Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_vattrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL' and RunningCd is not null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'vattrxtype', 
                cLabel: 'VAT Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_accruedwithholdingmode: { 
                cValidate :'', 
                cName: 'accruedwithholdingmode', 
                cId: 'rdbaccruedwithholdingmode', 
                cRadioOptions: [{ text: 'Standard', value: 'S' }, { text: 'Others', value: 'O' }], 
                cRadioDefaultOption: '', 
                cLabel:'Accrued Withholding Mode', 
                cLabelSize: 4, 
                cOrder: 18, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accruedwithholdingothersadditionaljournal: { 
                cValidate :'', 
                cName: 'accruedwithholdingothersadditionaljournal', 
                cId: 'rdbaccruedwithholdingothersadditionaljournal', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Accrued Withholding Others Additional Journal', 
                cLabelSize: 4, 
                cOrder: 19, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cnotherstrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AR' AND TrxClass = 'C' and RunningCd is not null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'cnotherstrxtype', 
                cLabel: 'Credit Note Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 20, 
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
                cMasterUrl: 'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_allocationotherstrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND ModuleCd = 'AR' AND TrxClass='M'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'allocationotherstrxtype', 
                cLabel: 'Allocation Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 21, 
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
                cMasterUrl: 'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_taxsettlementrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxsettlementrunningcd', 
                cLabel: 'Tax Settlement Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 22, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_taxsettlementcancellationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxsettlementcancellationrunningcd', 
                cLabel: 'Tax Settlement Cancellation Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_vatexemptionmethod: { 
                cValidate :'', 
                cName: 'vatexemptionmethod', 
                cId: 'rdbvatexemptionmethod', 
                cRadioOptions: [{ text: 'Auto', value: 'A' },{ text: 'Manual', value: 'M' },], 
                cRadioDefaultOption: '', 
                cLabel:'VAT Exemption Method', 
                cLabelSize: 4, 
                cOrder: 24, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_writeoffvattrxtype:{
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'M'"   , 
                    ParamWhere: ''
                        },
                cValidate :'', 
                cName:'writeoffvattrxtype', 
                cLabel:'VAT Exemption Trans. Type', 
                cLabelSize: 4, 
                cOrder:25, 
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
                cDisplayColumn: 'TrxType, Descs',  
            },
            PI_writeoffvataccountcd:{
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''
                        },
                cValidate :'', 
                cName:'writeoffvataccountcd', 
                cLabel:'VAT Exemption Account Code', 
                cLabelSize: 4, 
                cOrder:26, 
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
                cDisplayColumn: 'AccountCd,Descs1',  
            },
            PI_penaltyfrom: { 
                cValidate :'', 
                cName: 'penaltyfrom', 
                cId: 'rdbpenaltyfrom', 
                cRadioOptions: [{ text: 'Due Date', value: 'D' },{ text: 'Due Date + Grace Period', value: 'G' },], 
                cRadioDefaultOption: '', 
                cLabel:'Penalty From ', 
                cLabelSize: 4, 
                cOrder: 27, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_penaltytype: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'penaltytype', 
                cLabel: 'Penalty Type', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: false, 
                cTriggered: false, 
                // cDefault: 'D', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'None', id: 'N' },{ label: 'Yearly %', id: 'Y' },{ label: 'Daily %', id: 'D' },{ label: 'Fixed Daily', id: 'F' },{ label: 'Fixed Once', id: 'O'}], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_penaltytrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'P'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'penaltytrxtype', 
                cLabel: 'Penalty Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 29, 
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
                cMasterUrl: 'AR/AR_TransactionTypeMaster' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_penaltydaysinyear: { 
                cValidate :'required|max:3', 
                cName: 'penaltydaysinyear', 
                cLabel: 'Penalty Days in Year', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_penaltycurrencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'penaltycurrencycd', 
                cLabel: 'Penalty Currency', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 31, 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_penaltytaxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'penaltytaxcd', 
                cLabel: 'Penalty Tax', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 32, 
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
                cMasterUrl: 'CM/CM_TaxMaster' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_penaltyvalue: { 
                cValidate :'required|max:13', 
                cName: 'penaltyvalue', 
                cLabel: 'Penalty Value', 
                cLabelSize: 4, 
                cOrder: 33, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_penaltyamt: { 
                cValidate :'', 
                cName: 'penaltyamt', 
                cId: 'rdbpenaltyamt', 
                cRadioOptions: [{ text: 'In Full', value: 'F' }, { text: 'In Partial', value: 'P' }], 
                cRadioDefaultOption: '', 
                cLabel:'Penalty Amount', 
                cLabelSize: 4, 
                cOrder: 34, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_penaltyincludewithholding: { 
                cValidate :'', 
                cName: 'penaltyincludewithholding', 
                cId: 'rdbpenaltyincludewithholding', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Include Withholding', 
                cLabelSize: 4, 
                cOrder: 35, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_age1: { 
                cValidate :'max:12', 
                cName: 'age1', 
                cLabel: 'Age 1', 
                cLabelSize: 4, 
                cOrder: 36, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_age2: { 
                cValidate :'max:12', 
                cName: 'age2', 
                cLabel: 'Age 2', 
                cLabelSize: 4, 
                cOrder: 37, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_age3: { 
                cValidate :'max:12', 
                cName: 'age3', 
                cLabel: 'Age 3', 
                cLabelSize: 4, 
                cOrder: 38, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_age4: { 
                cValidate :'max:12', 
                cName: 'age4', 
                cLabel: 'Age 4', 
                cLabelSize: 4, 
                cOrder: 39, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_age5: { 
                cValidate :'max:12', 
                cName: 'age5', 
                cLabel: 'Age 5', 
                cLabelSize: 4, 
                cOrder: 40, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_age6: { 
                cValidate :'max:12', 
                cName: 'age6', 
                cLabel: 'Age 6', 
                cLabelSize: 4, 
                cOrder: 41, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminderrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'reminderrunningcd', 
                cLabel: 'Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 42, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_reminder1: { 
                cValidate :'max:12', 
                cName: 'reminder1', 
                cLabel: 'Reminder 1', 
                cLabelSize: 4, 
                cOrder: 43, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminder2: { 
                cValidate :'max:12', 
                cName: 'reminder2', 
                cLabel: 'Reminder 2', 
                cLabelSize: 4, 
                cOrder: 44, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminder3: { 
                cValidate :'max:12', 
                cName: 'reminder3', 
                cLabel: 'Reminder 3', 
                cLabelSize: 4, 
                cOrder: 45, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminder4: { 
                cValidate :'max:12', 
                cName: 'reminder4', 
                cLabel: 'Reminder 4', 
                cLabelSize: 4, 
                cOrder: 46, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_whttolerancedays: { 
                cValidate :'max:12', 
                cName: 'whttolerancedays', 
                cLabel: 'Withholding Tolerance Days', 
                cLabelSize: 4, 
                cOrder: 47, 
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
                cOrder: 48, 
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
            PI_firstpriority: { 
                cValidate :'', 
                cName: 'firstpriority', 
                cId: 'rdbfirstpriority', 
                cRadioOptions: [{ text: 'Trans Type Priority', value: 'P' }, { text: 'Due Date    ', value: 'D' }, { text: 'Trans Type Code    ', value: 'T' }], 
                cRadioDefaultOption: '', 
                cLabel:'1st Priority', 
                cLabelSize: 4, 
                cOrder: 49, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_secondpriority: { 
                cValidate :'', 
                cName: 'secondpriority', 
                cId: 'rdbsecondpriority', 
                cRadioOptions: [{ text: 'Trans Type Priority', value: 'P' }, { text: 'Due Date', value: 'D' }, { text: 'Trans Type Code', value: 'T' }], 
                cRadioDefaultOption: '', 
                cLabel:'2nd Priority', 
                cLabelSize: 4, 
                cOrder: 50, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_thirdpriority: { 
                cValidate :'', 
                cName: 'thirdpriority', 
                cId: 'rdbthirdpriority', 
                cRadioOptions: [{ text: 'Trans Type Priority', value: 'P' }, { text: 'Due Date', value: 'D' }, { text: 'Trans Type Code', value: 'T' }], 
                cRadioDefaultOption: '', 
                cLabel:'3rd Priority', 
                cLabelSize: 4 , 
                cOrder: 51, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_straightlineadjustment: { 
                cValidate :'', 
                cName: 'straightlineadjustment', 
                cId: 'rdbstraightlineadjustment', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'Straight Line Adjustment', 
                cLabelSize: 4, 
                cOrder: 52, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_pphincludestraightlineadjustment: { 
                cValidate :'', 
                cName: 'pphincludestraightlineadjustment', 
                cId: 'rdbpphincludestraightlineadjustment', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'pph Include in Adjustment', 
                cLabelSize: 4, 
                cOrder: 53, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_straightlineadjustmentvalue: { 
                cValidate :'', 
                cName: 'straightlineadjustmentvalue', 
                cId: 'rdbstraightlineadjustmentvalue', 
                cRadioOptions: [{ text: 'Actual', value: 'A' },{ text: 'Average', value: 'E' },], 
                cRadioDefaultOption: '', 
                cLabel:'Straight Line Adjustment Value', 
                cLabelSize: 4, 
                cOrder: 54, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
        OnbatchcontrolChange (value) {
            if (this.value == 'Y') {
                this.PI_batchnumbering.value = 'M'
                this.PI_batchnumbering.cProtect = true
            }else{
                this.PI_batchnumbering.cProtect = false
            }
        this.$forceUpdate()
        },

        OnamortizationpaymentcontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizationpaymentcontrol}
            }
        })
        this.$forceUpdate()
        },
        OnbatchnumberingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchnumbering}
            }
        })
        this.$forceUpdate()
        },
        OnprintdocumentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{printdocument}
            }
        })
        this.$forceUpdate()
        },
        OntemporaryinvoicerunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.temporaryinvoicerunningcd = data.id
            this.M_AR_Specification.temporaryinvoicerunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{temporaryinvoicerunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnunidentifieddebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.unidentifieddebtorcd = data.id
            this.M_AR_Specification.unidentifieddebtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{unidentifieddebtorcd}
            }
        })
        this.$forceUpdate()
        },
        OndefaultreceiptbankcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.defaultreceiptbankcd = data.id
            this.M_AR_Specification.defaultreceiptbankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defaultreceiptbankcd}
            }
        })
        this.$forceUpdate()
        },
        OnforexrevaluationtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.forexrevaluationtrxtype = data.id
            this.M_AR_Specification.forexrevaluationtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{forexrevaluationtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnrevaluationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.revaluationrunningcd = data.id
            this.M_AR_Specification.revaluationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{revaluationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnrevaluationincludevatChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revaluationincludevat}
            }
        })
        this.$forceUpdate()
        },
        OndepositbillingjournalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{depositbillingjournal}
            }
        })
        this.$forceUpdate()
        },
        OndeposittaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.deposittaxcd = data.id
            this.M_AR_Specification.deposittaxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{deposittaxcd}
            }
        })
        this.$forceUpdate()
        },
        OnstampdutybasedonChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{stampdutybasedon}
            }
        })
        this.$forceUpdate()
        },
        OnstampdutytrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.stampdutytrxtype = data.id
            this.M_AR_Specification.stampdutytrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{stampdutytrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnstampdutytaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.stampdutytaxcd = data.id
            this.M_AR_Specification.stampdutytaxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{stampdutytaxcd}
            }
        })
        this.$forceUpdate()
        },
        OnjournalmodeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journalmode}
            }
        })
        this.$forceUpdate()
        },
        OnwithholdingtreatmentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{withholdingtreatment}
            }
        })
        this.$forceUpdate()
        },
        OnwithholdingtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.withholdingtrxtype = data.id
            this.M_AR_Specification.withholdingtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{withholdingtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnvattrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.vattrxtype = data.id
            this.M_AR_Specification.vattrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{vattrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnaccruedwithholdingmodeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{accruedwithholdingmode}
            }
        })
        this.$forceUpdate()
        },
        OnaccruedwithholdingothersadditionaljournalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{accruedwithholdingothersadditionaljournal}
            }
        })
        this.$forceUpdate()
        },
        OncnotherstrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.cnotherstrxtype = data.id
            this.M_AR_Specification.cnotherstrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{cnotherstrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnallocationotherstrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.allocationotherstrxtype = data.id
            this.M_AR_Specification.allocationotherstrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{allocationotherstrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntaxsettlementrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.taxsettlementrunningcd = data.id
            this.M_AR_Specification.taxsettlementrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxsettlementrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OntaxsettlementcancellationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.taxsettlementcancellationrunningcd = data.id
            this.M_AR_Specification.taxsettlementcancellationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxsettlementcancellationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnvatexemptionmethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatexemptionmethod}
            }
        })
        this.$forceUpdate()
        },
        OnwriteoffvattrxtypeChange (data) {
        
            this.M_AR_Specification.writeoffvattrxtype = data.id
            this.M_AR_Specification.writeoffvattrxtypeLabel = data.label
            this.$forceUpdate()
        },
        OnwriteoffvataccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.writeoffvataccountcd = data.id
            this.M_AR_Specification.writeoffvataccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        OnpenaltyfromChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{penaltyfrom}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltytypeChange (data) {
           this.M_AR_Specification.penaltytype = data.id
            this.M_AR_Specification.penaltytypeLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{penaltyfrom}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltytrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.penaltytrxtype = data.id
            this.M_AR_Specification.penaltytrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{penaltytrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltycurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.penaltycurrencycd = data.id
            this.M_AR_Specification.penaltycurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{penaltycurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltytaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.penaltytaxcd = data.id
            this.M_AR_Specification.penaltytaxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{penaltytaxcd}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltyamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{penaltyamt}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltyincludewithholdingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{penaltyincludewithholding}
            }
        })
        this.$forceUpdate()
        },
        OnreminderrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Specification.reminderrunningcd = data.id
            this.M_AR_Specification.reminderrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{reminderrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnfirstpriorityChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{firstpriority}
            }
        })
        this.$forceUpdate()
        },
        OnsecondpriorityChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{secondpriority}
            }
        })
        this.$forceUpdate()
        },
        OnthirdpriorityChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{thirdpriority}
            }
        })
        this.$forceUpdate()
        },
        OnstraightlineadjustmentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{straightlineadjustmentvalue}
            }
        })
        this.$forceUpdate()
        },
        OnpphincludestraightlineadjustmentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{pphincludestraightlineadjustment}
            }
        })
        this.$forceUpdate()
        },
        OnstraightlineadjustmentvalueChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{straightlineadjustmentvalue}
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
      this.getDataBy()	
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
          console.log(this.M_AR_Specification)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ModuleCd: this.M_AR_Specification.modulecd,
                StampDutyBasedOn: this.ARFieldHelper.SPECIFICATION_STAMP_DUTY_BASED_ON_OFFICIAL_RECEIPT,
                StampDutyTrxType: this.M_AR_Specification.stampdutytrxtype == '' || this.M_AR_Specification.stampdutytrxtype == null ? 'NULL' : this.M_AR_Specification.stampdutytrxtype ,
                StampDutyTaxCd: this.M_AR_Specification.stampdutytaxcd == '' || this.M_AR_Specification.stampdutytaxcd == null ? 'NULL' : this.M_AR_Specification.stampdutytaxcd ,
                DetailForexTrx: this.M_AR_Specification.detailforextrx,
                ForexRevaluationTrxType: this.M_AR_Specification.forexrevaluationtrxtype == '' || this.M_AR_Specification.forexrevaluationtrxtype == null ? 'NULL' : this.M_AR_Specification.forexrevaluationtrxtype ,
                RevaluationIncludeVAT: this.M_AR_Specification.revaluationincludevat,
                RevaluationRunningCd: this.M_AR_Specification.revaluationrunningcd == '' || this.M_AR_Specification.revaluationrunningcd == null ? 'NULL' : this.M_AR_Specification.revaluationrunningcd ,
                ReminderRunningCd: this.M_AR_Specification.reminderrunningcd == '' || this.M_AR_Specification.reminderrunningcd == null ? 'NULL' : this.M_AR_Specification.reminderrunningcd ,
                TaxSettlementRunningCd: this.M_AR_Specification.taxsettlementrunningcd == '' || this.M_AR_Specification.taxsettlementrunningcd == null ? 'NULL' : this.M_AR_Specification.taxsettlementrunningcd ,
                TaxSettlementCancellationRunningCd: this.M_AR_Specification.taxsettlementcancellationrunningcd == '' || this.M_AR_Specification.taxsettlementcancellationrunningcd == null ? 'NULL' : this.M_AR_Specification.taxsettlementcancellationrunningcd ,
                UnidentifiedDebtorCd: this.M_AR_Specification.unidentifieddebtorcd == '' || this.M_AR_Specification.unidentifieddebtorcd == null ? 'NULL' : this.M_AR_Specification.unidentifieddebtorcd ,
                GLModuleCd: 'GL',
                PrintDocument: this.ARFieldHelper.SPECIFICATION_PRINT_DOCUMENT_BEFORE_POSTING,
                BatchControl: this.M_AR_Specification.batchcontrol,
                BatchNumbering: this.M_AR_Specification.batchnumbering,
                AmortizationPaymentControl: this.M_AR_Specification.amortizationpaymentcontrol,
                TemporaryInvoiceRunningCd: this.M_AR_Specification.temporaryinvoicerunningcd == '' || this.M_AR_Specification.temporaryinvoicerunningcd == null ? 'NULL' : this.M_AR_Specification.temporaryinvoicerunningcd ,
                JournalMode: this.ARFieldHelper.SPECIFICATION_TAX_HANDLING_JOURNAL_MODE_SPLIT_AR_VAT_WITHHOLDING,
                WithHoldingTreatment: this.M_AR_Specification.withholdingtreatment,
                AccruedWithholdingMode: this.M_AR_Specification.accruedwithholdingmode,
                AccruedWithholdingOthersAdditionalJournal: this.M_AR_Specification.accruedwithholdingothersadditionaljournal,
                DepositBillingJournal: this.M_AR_Specification.depositbillingjournal,
                DepositTaxCd: this.M_AR_Specification.deposittaxcd == '' || this.M_AR_Specification.deposittaxcd == null ? 'NULL' : this.M_AR_Specification.deposittaxcd ,
                CNOthersTrxType: this.M_AR_Specification.cnotherstrxtype == '' || this.M_AR_Specification.cnotherstrxtype == null ? 'NULL' : this.M_AR_Specification.cnotherstrxtype ,
                AllocationOthersTrxType: this.M_AR_Specification.allocationotherstrxtype == '' || this.M_AR_Specification.allocationotherstrxtype == null ? 'NULL' : this.M_AR_Specification.allocationotherstrxtype ,
                WithHoldingTrxType: this.M_AR_Specification.withholdingtrxtype == '' || this.M_AR_Specification.withholdingtrxtype == null ? 'NULL' : this.M_AR_Specification.withholdingtrxtype ,
                VATTrxType: this.M_AR_Specification.vattrxtype == '' || this.M_AR_Specification.vattrxtype == null ? 'NULL' : this.M_AR_Specification.vattrxtype ,
                TaxInvoiceTrxType: this.M_AR_Specification.taxinvoicetrxtype == '' || this.M_AR_Specification.taxinvoicetrxtype == null ? 'NULL' : this.M_AR_Specification.taxinvoicetrxtype,
                PenaltyAmt: this.ARFieldHelper.SPECIFICATION_SPLIT_PENALTY_AMOUNT_IN_PARTIAL,
                PenaltyTrxType: this.M_AR_Specification.penaltytrxtype == '' || this.M_AR_Specification.penaltytrxtype == null ? 'NULL' : this.M_AR_Specification.penaltytrxtype ,
                PenaltyCurrencyCd: this.M_AR_Specification.penaltycurrencycd == '' || this.M_AR_Specification.penaltycurrencycd == null ? 'NULL' : this.M_AR_Specification.penaltycurrencycd ,
                PenaltyTaxCd: this.M_AR_Specification.penaltytaxcd == '' || this.M_AR_Specification.penaltytaxcd == null ? 'NULL' : this.M_AR_Specification.penaltytaxcd ,
                PenaltyDaysInYear: this.M_AR_Specification.penaltydaysinyear,
                PenaltyType: this.M_AR_Specification.penaltytype,
                PenaltyValue: this.M_AR_Specification.penaltyvalue ? this.replaceAllString(this.M_AR_Specification.penaltyvalue,',','','number') : 0 ,
                PenaltyIncludeWithholding: this.M_AR_Specification.penaltyincludewithholding,
                MaximumUnderPaymentAmt: this.M_AR_Specification.maximumunderpaymentamt ? this.replaceAllString(this.M_AR_Specification.maximumunderpaymentamt,',','','number') : 0 ,
                MaximumOverPaymentAmt: this.M_AR_Specification.maximumoverpaymentamt ? this.replaceAllString(this.M_AR_Specification.maximumoverpaymentamt,',','','number') : 0 ,
                Age1: this.M_AR_Specification.age1,
                Age2: this.M_AR_Specification.age2,
                Age3: this.M_AR_Specification.age3,
                Age4: this.M_AR_Specification.age4,
                Age5: this.M_AR_Specification.age5,
                Age6: this.M_AR_Specification.age6,
                Reminder1: this.M_AR_Specification.reminder1,
                Reminder2: this.M_AR_Specification.reminder2,
                Reminder3: this.M_AR_Specification.reminder3,
                Reminder4: this.M_AR_Specification.reminder4,
                Remarks: this.M_AR_Specification.remarks,
                DefaultReceiptBankCd: this.M_AR_Specification.defaultreceiptbankcd == '' || this.M_AR_Specification.defaultreceiptbankcd == null ? 'NULL' : this.M_AR_Specification.defaultreceiptbankcd ,
                UserInput: this.getDataUser().UserId ,
                WriteOffVATTrxType: this.M_AR_Specification.writeoffvattrxtype == '' || this.M_AR_Specification.writeoffvattrxtype == null ? 'NULL' : this.M_AR_Specification.writeoffvattrxtype,
                WriteOffVATAccountCd: this.M_AR_Specification.writeoffvataccountcd == '' || this.M_AR_Specification.writeoffvataccountcd == null ? 'NULL' : this.M_AR_Specification.writeoffvataccountcd,
                LastUpdateStamp: this.M_AR_Specification.lastupdatestamp,
                FirstPriority: this.M_AR_Specification.firstpriority,
                SecondPriority: this.M_AR_Specification.secondpriority,
                ThirdPriority: this.M_AR_Specification.thirdpriority,
                WHTToleranceDays: this.M_AR_Specification.whttolerancedays,
                StraightLineAdjustment: this.M_AR_Specification.straightlineadjustment,
                PPhIncludeStraightLineAdjustment: this.M_AR_Specification.pphincludestraightlineadjustment,
                StraightLineAdjustmentValue: this.M_AR_Specification.straightlineadjustmentvalue,
                PenaltyFrom: this.M_AR_Specification.penaltyfrom,
                VATExemptionMethod: this.M_AR_Specification.vatexemptionmethod                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Save() {
          console.log(this.M_AR_Specification)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ModuleCd: this.M_AR_Specification.modulecd,
                StampDutyBasedOn: this.ARFieldHelper.SPECIFICATION_STAMP_DUTY_BASED_ON_OFFICIAL_RECEIPT,
                StampDutyTrxType: this.M_AR_Specification.stampdutytrxtype == '' || this.M_AR_Specification.stampdutytrxtype == null ? 'NULL' : this.M_AR_Specification.stampdutytrxtype ,
                StampDutyTaxCd: this.M_AR_Specification.stampdutytaxcd == '' || this.M_AR_Specification.stampdutytaxcd == null ? 'NULL' : this.M_AR_Specification.stampdutytaxcd ,
                DetailForexTrx: this.M_AR_Specification.detailforextrx,
                ForexRevaluationTrxType: this.M_AR_Specification.forexrevaluationtrxtype == '' || this.M_AR_Specification.forexrevaluationtrxtype == null ? 'NULL' : this.M_AR_Specification.forexrevaluationtrxtype ,
                RevaluationIncludeVAT: this.M_AR_Specification.revaluationincludevat,
                RevaluationRunningCd: this.M_AR_Specification.revaluationrunningcd == '' || this.M_AR_Specification.revaluationrunningcd == null ? 'NULL' : this.M_AR_Specification.revaluationrunningcd ,
                ReminderRunningCd: this.M_AR_Specification.reminderrunningcd == '' || this.M_AR_Specification.reminderrunningcd == null ? 'NULL' : this.M_AR_Specification.reminderrunningcd ,
                TaxSettlementRunningCd: this.M_AR_Specification.taxsettlementrunningcd == '' || this.M_AR_Specification.taxsettlementrunningcd == null ? 'NULL' : this.M_AR_Specification.taxsettlementrunningcd ,
                TaxSettlementCancellationRunningCd: this.M_AR_Specification.taxsettlementcancellationrunningcd == '' || this.M_AR_Specification.taxsettlementcancellationrunningcd == null ? 'NULL' : this.M_AR_Specification.taxsettlementcancellationrunningcd ,
                UnidentifiedDebtorCd: this.M_AR_Specification.unidentifieddebtorcd == '' || this.M_AR_Specification.unidentifieddebtorcd == null ? 'NULL' : this.M_AR_Specification.unidentifieddebtorcd ,
                GLModuleCd: 'GL',
                PrintDocument: this.ARFieldHelper.SPECIFICATION_PRINT_DOCUMENT_BEFORE_POSTING,
                BatchControl: this.M_AR_Specification.batchcontrol,
                BatchNumbering: this.M_AR_Specification.batchnumbering,
                AmortizationPaymentControl: this.M_AR_Specification.amortizationpaymentcontrol,
                TemporaryInvoiceRunningCd: this.M_AR_Specification.temporaryinvoicerunningcd == '' || this.M_AR_Specification.temporaryinvoicerunningcd == null ? 'NULL' : this.M_AR_Specification.temporaryinvoicerunningcd ,
                JournalMode: this.ARFieldHelper.SPECIFICATION_TAX_HANDLING_JOURNAL_MODE_SPLIT_AR_VAT_WITHHOLDING,
                WithHoldingTreatment: this.M_AR_Specification.withholdingtreatment,
                AccruedWithholdingMode: this.M_AR_Specification.accruedwithholdingmode,
                AccruedWithholdingOthersAdditionalJournal: this.M_AR_Specification.accruedwithholdingothersadditionaljournal,
                DepositBillingJournal: this.M_AR_Specification.depositbillingjournal,
                DepositTaxCd: this.M_AR_Specification.deposittaxcd == '' || this.M_AR_Specification.deposittaxcd == null ? 'NULL' : this.M_AR_Specification.deposittaxcd ,
                CNOthersTrxType: this.M_AR_Specification.cnotherstrxtype == '' || this.M_AR_Specification.cnotherstrxtype == null ? 'NULL' : this.M_AR_Specification.cnotherstrxtype ,
                AllocationOthersTrxType: this.M_AR_Specification.allocationotherstrxtype == '' || this.M_AR_Specification.allocationotherstrxtype == null ? 'NULL' : this.M_AR_Specification.allocationotherstrxtype ,
                WithHoldingTrxType: this.M_AR_Specification.withholdingtrxtype == '' || this.M_AR_Specification.withholdingtrxtype == null ? 'NULL' : this.M_AR_Specification.withholdingtrxtype ,
                TaxInvoiceTrxType: this.M_AR_Specification.taxinvoicetrxtype == '' || this.M_AR_Specification.taxinvoicetrxtype == null ? 'NULL' : this.M_AR_Specification.taxinvoicetrxtype,
                VatTrxType: this.M_AR_Specification.vattrxtype == '' || this.M_AR_Specification.vattrxtype == null ? 'NULL' : this.M_AR_Specification.vattrxtype ,
                PenaltyAmt: this.ARFieldHelper.SPECIFICATION_SPLIT_PENALTY_AMOUNT_IN_PARTIAL,
                PenaltyTrxType: this.M_AR_Specification.penaltytrxtype == '' || this.M_AR_Specification.penaltytrxtype == null ? 'NULL' : this.M_AR_Specification.penaltytrxtype ,
                PenaltyCurrencyCd: this.M_AR_Specification.penaltycurrencycd == '' || this.M_AR_Specification.penaltycurrencycd == null ? 'NULL' : this.M_AR_Specification.penaltycurrencycd ,
                PenaltyTaxCd: this.M_AR_Specification.penaltytaxcd == '' || this.M_AR_Specification.penaltytaxcd == null ? 'NULL' : this.M_AR_Specification.penaltytaxcd ,
                PenaltyDaysInYear: this.M_AR_Specification.penaltydaysinyear,
                PenaltyType: this.M_AR_Specification.penaltytype,
                PenaltyValue: this.M_AR_Specification.penaltyvalue ? this.replaceAllString(this.M_AR_Specification.penaltyvalue,',','','number') : 0 ,
                PenaltyIncludeWithholding: this.M_AR_Specification.penaltyincludewithholding,
                MaximumUnderPaymentAmt: this.M_AR_Specification.maximumunderpaymentamt ? this.replaceAllString(this.M_AR_Specification.maximumunderpaymentamt,',','','number') : 0 ,
                MaximumOverPaymentAmt: this.M_AR_Specification.maximumoverpaymentamt ? this.replaceAllString(this.M_AR_Specification.maximumoverpaymentamt,',','','number') : 0 ,
                Age1: this.M_AR_Specification.age1,
                Age2: this.M_AR_Specification.age2,
                Age3: this.M_AR_Specification.age3,
                Age4: this.M_AR_Specification.age4,
                Age5: this.M_AR_Specification.age5,
                Age6: this.M_AR_Specification.age6,
                Reminder1: this.M_AR_Specification.reminder1,
                Reminder2: this.M_AR_Specification.reminder2,
                Reminder3: this.M_AR_Specification.reminder3,
                Reminder4: this.M_AR_Specification.reminder4,
                Remarks: this.M_AR_Specification.remarks,
                DefaultReceiptBankCd: this.M_AR_Specification.defaultreceiptbankcd == '' || this.M_AR_Specification.defaultreceiptbankcd == null ? 'NULL' : this.M_AR_Specification.defaultreceiptbankcd ,
                UserEdit: this.getDataUser().UserId ,
                WriteOffVATTrxType: this.M_AR_Specification.writeoffvattrxtype == '' || this.M_AR_Specification.writeoffvattrxtype == null ? 'NULL' : this.M_AR_Specification.writeoffvattrxtype ,
                WriteOffVATAccountCd: this.M_AR_Specification.writeoffvataccountcd == '' || this.M_AR_Specification.writeoffvataccountcd == null ? 'NULL' : this.M_AR_Specification.writeoffvataccountcd,
                LastUpdateStamp: this.M_AR_Specification.lastupdatestamp,
                FirstPriority: this.M_AR_Specification.firstpriority,
                SecondPriority: this.M_AR_Specification.secondpriority,
                ThirdPriority: this.M_AR_Specification.thirdpriority,
                WHTToleranceDays: this.M_AR_Specification.whttolerancedays,
                StraightLineAdjustment: this.M_AR_Specification.straightlineadjustmentvalue,
                PPhIncludeStraightLineAdjustment: this.M_AR_Specification.pphincludestraightlineadjustment,
                StraightLineAdjustmentValue: this.M_AR_Specification.straightlineadjustmentvalue,
                PenaltyFrom: this.M_AR_Specification.penaltyfrom,
                VATExemptionMethod: this.M_AR_Specification.vatexemptionmethod                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'view')

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_AR_Specification = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                modulecd: '',
                stampdutybasedon: '',
                stampdutytrxtype: '',
                stampdutytaxcd: '',
                detailforextrx: '',
                forexrevaluationtrxtype: '',
                revaluationincludevat: '',
                revaluationrunningcd: '',
                reminderrunningcd: '',
                taxsettlementrunningcd: '',
                taxsettlementcancellationrunningcd: '',
                unidentifieddebtorcd: '',
                printdocument: '',
                batchcontrol: '',
                batchnumbering: '',
                amortizationpaymentcontrol: '',
                temporaryinvoicerunningcd: '',
                journalmode: '',
                withholdingtreatment: '',
                accruedwithholdingmode: '',
                accruedwithholdingothersadditionaljournal: '',
                depositbillingjournal: '',
                deposittaxcd: '',
                cnotherstrxtype: '',
                allocationotherstrxtype: '',
                penaltyincludewithholding: '',
                vattrxtype: '',
                withholdingtrxtype: '',
                taxinvoicetrxtype: '',
                penaltyamt: '',
                penaltytrxtype: '',
                penaltycurrencycd: '',
                penaltytaxcd: '',
                penaltydaysinyear: '0',
                penaltytype: '',
                penaltyvalue: '0',
                maximumunderpaymentamt: '0',
                maximumoverpaymentamt: '0',
                age1: '0',
                age2: '0',
                age3: '0',
                age4: '0',
                age5: '0',
                age6: '0',
                reminder1: '0',
                reminder2: '0',
                reminder3: '0',
                reminder4: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                defaultreceiptbankcd: '',
                lastupdatestamp: 0,
                transactioncount: 0,
                writeoffvattrxtype: '',
                writeoffvataccountcd: '',
                firstpriority: '',
                secondpriority: '',
                thirdpriority: '',
                whttolerancedays: '0',
                straightlineadjustment: '',
                pphincludestraightlineadjustment: '',
                straightlineadjustmentvalue: '',
                penaltyfrom: '',
                vatexemptionmethod: '',
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
                
                var data = response.Data[0]
                console.log(data)
                if(response.Data.length > 0){

                    // this.$store.commit('setStatus', 'EDIT')
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
              this.M_AR_Specification = {
                subportfoliocd: data.subportfoliocd,
                modulecd: data.modulecd,
                stampdutybasedon: data.stampdutybasedon,
                stampdutytrxtype: data.stampdutytrxtype,
                stampdutytaxcd: data.stampdutytaxcd,
                detailforextrx: data.detailforextrx,
                forexrevaluationtrxtype: data.forexrevaluationtrxtype,
                revaluationincludevat: data.revaluationincludevat,
                revaluationrunningcd: data.revaluationrunningcd,
                reminderrunningcd: data.reminderrunningcd,
                taxsettlementrunningcd: data.taxsettlementrunningcd,
                taxsettlementcancellationrunningcd: data.taxsettlementcancellationrunningcd,
                unidentifieddebtorcd: data.unidentifieddebtorcd,
                printdocument: data.printdocument,
                batchcontrol: data.batchcontrol,
                batchnumbering: data.batchnumbering,
                amortizationpaymentcontrol: data.amortizationpaymentcontrol,
                temporaryinvoicerunningcd: data.temporaryinvoicerunningcd,
                journalmode: data.journalmode,
                withholdingtreatment: data.withholdingtreatment,
                accruedwithholdingmode: data.accruedwithholdingmode,
                accruedwithholdingothersadditionaljournal: data.accruedwithholdingothersadditionaljournal,
                depositbillingjournal: data.depositbillingjournal,
                deposittaxcd: data.deposittaxcd,
                cnotherstrxtype: data.cnotherstrxtype,
                allocationotherstrxtype: data.allocationotherstrxtype,
                penaltyincludewithholding: data.penaltyincludewithholding,
                vattrxtype: data.vattrxtype,
                withholdingtrxtype: data.withholdingtrxtype,
                taxinvoicetrxtype: data.taxinvoicetrxtype,
                penaltyamt: data.penaltyamt,
                penaltytrxtype: data.penaltytrxtype,
                penaltycurrencycd: data.penaltycurrencycd,
                penaltytaxcd: data.penaltytaxcd,
                penaltydaysinyear: data.penaltydaysinyear,
                penaltytype: data.penaltytype,
                penaltyvalue: this.isCurrency(data.penaltyvalue),
                maximumunderpaymentamt: this.isCurrency(data.maximumunderpaymentamt),
                maximumoverpaymentamt: this.isCurrency(data.maximumoverpaymentamt),
                age1: data.age1,
                age2: data.age2,
                age3: data.age3,
                age4: data.age4,
                age5: data.age5,
                age6: data.age6,
                reminder1: data.reminder1,
                reminder2: data.reminder2,
                reminder3: data.reminder3,
                reminder4: data.reminder4,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                defaultreceiptbankcd: data.defaultreceiptbankcd,
                lastupdatestamp: data.lastupdatestamp,
                transactioncount: data.transactioncount,
                writeoffvattrxtype: data.writeoffvattrxtype,                
                writeoffvattrxtypeLabel: data.writeoffvattrxtype,
                writeoffvataccountcd: data.writeoffvataccountcd,
                writeoffvataccountcdLabel: data.writeoffvataccountcd,
                firstpriority: data.firstpriority,
                secondpriority: data.secondpriority,
                thirdpriority: data.thirdpriority,
                whttolerancedays: data.whttolerancedays,
                straightlineadjustment: data.straightlineadjustment,
                pphincludestraightlineadjustment: data.pphincludestraightlineadjustment,
                straightlineadjustmentvalue: data.straightlineadjustmentvalue,
                penaltyfrom: data.penaltyfrom,
                vatexemptionmethod: data.vatexemptionmethod,
                rowid: data.rowid,
                temporaryinvoicerunningdescs: data.temporaryinvoicerunningdescs,
                allocationotherstrxtypedecs: data.allocationotherstrxtypedecs,
                forexrevaluationtrxtypedescs: data.forexrevaluationtrxtypedescs,
                penaltycurrencydescs: data.penaltycurrencydescs,
                penaltytaxdescs: data.penaltytaxdescs,
                unidentifieddebtorname: data.unidentifieddebtorname,
                defaultreceiptbankname: data.defaultreceiptbankname,
                penaltytrxtypedescs: data.penaltytrxtypedescs,
                deposittaxdescs: data.deposittaxdescs,
                revaluationrunningdescs: data.revaluationrunningdescs,
                stampdutytrxtypedescs: data.stampdutytrxtypedescs,
                stampdutytaxdescs: data.stampdutytaxdescs,
                taxsettlementcancellationrunningdescs: data.taxsettlementcancellationrunningdescs,
                taxsettlementrunningdescs: data.taxsettlementrunningdescs,
                vattrxtypedescs: data.vattrxtypedescs,
                cnotherstrxtypedecs: data.cnotherstrxtypedecs,
                withholdingtrxtypedescs: data.withholdingtrxtypedescs,
                writeoffvataccountdescs: data.writeoffvataccountdescs,
                writeoffvattrxtypedescs: data.writeoffvattrxtypedescs

                    }
                 

                this.M_AR_Specification.temporaryinvoicerunningcdLabel = this.M_AR_Specification.temporaryinvoicerunningcd != null ? data.temporaryinvoicerunningcd + this.separator + data.temporaryinvoicerunningdescs :'' 
                this.M_AR_Specification.unidentifieddebtorcdLabel = this.M_AR_Specification.unidentifieddebtorcd != null ? data.unidentifieddebtorcd + this.separator + data.unidentifieddebtorname :'' 
                this.M_AR_Specification.defaultreceiptbankcdLabel = this.M_AR_Specification.defaultreceiptbankcd != null ? data.defaultreceiptbankcd + this.separator + data.defaultreceiptbankname :'' 
                this.M_AR_Specification.forexrevaluationtrxtypeLabel = this.M_AR_Specification.forexrevaluationtrxtype != null ? data.forexrevaluationtrxtype + this.separator + data.forexrevaluationtrxtypedescs :'' 
                this.M_AR_Specification.revaluationrunningcdLabel = this.M_AR_Specification.revaluationrunningcd != null ? data.revaluationrunningcd + this.separator + data.revaluationrunningdescs :'' 
                this.M_AR_Specification.deposittaxcdLabel = this.M_AR_Specification.deposittaxcd != null ? data.deposittaxcd + this.separator + data.deposittaxdescs :'' 
                this.M_AR_Specification.stampdutytrxtypeLabel = this.M_AR_Specification.stampdutytrxtype != null ? data.stampdutytrxtype + this.separator + data.stampdutytrxtypedescs :'' 
                this.M_AR_Specification.stampdutytaxcdLabel = this.M_AR_Specification.stampdutytaxcd != null ? data.stampdutytaxcd + this.separator + data.stampdutytaxdescs :'' 
                this.M_AR_Specification.withholdingtrxtypeLabel = this.M_AR_Specification.withholdingtrxtype != null ? data.withholdingtrxtype + this.separator + data.withholdingtrxtypedescs :'' 
                this.M_AR_Specification.vattrxtypeLabel = this.M_AR_Specification.vattrxtype != null ? data.vattrxtype + this.separator + data.vattrxtypedescs :'' 
                this.M_AR_Specification.cnotherstrxtypeLabel = this.M_AR_Specification.cnotherstrxtype != null ? data.cnotherstrxtype + this.separator + data.cnotherstrxtypedecs :'' 
                this.M_AR_Specification.allocationotherstrxtypeLabel = this.M_AR_Specification.allocationotherstrxtype != null ? data.allocationotherstrxtype + this.separator + data.allocationotherstrxtypedecs :'' 
                this.M_AR_Specification.taxsettlementrunningcdLabel = this.M_AR_Specification.taxsettlementrunningcd != null ? data.taxsettlementrunningcd + this.separator + data.taxsettlementrunningdescs :'' 
                this.M_AR_Specification.taxsettlementcancellationrunningcdLabel = this.M_AR_Specification.taxsettlementcancellationrunningcd != null ? data.taxsettlementcancellationrunningcd + this.separator + data.taxsettlementcancellationrunningdescs :'' 
                this.M_AR_Specification.penaltytrxtypeLabel = this.M_AR_Specification.penaltytrxtype != null ? data.penaltytrxtype + this.separator + data.penaltytrxtypedescs :'' 
                this.M_AR_Specification.penaltycurrencycdLabel = this.M_AR_Specification.penaltycurrencycd != null ? data.penaltycurrencycd + this.separator + data.penaltycurrencydescs :'' 
                this.M_AR_Specification.penaltytaxcdLabel = this.M_AR_Specification.penaltytaxcd != null ? data.penaltytaxcd + this.separator + data.stampdutytaxdescs :'' 
                this.M_AR_Specification.reminderrunningcdLabel = this.M_AR_Specification.reminderrunningcd != null ? data.reminderrunningcd :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                }
            else {
                    // this.$store.commit('setStatus', 'NEW')
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                }
            })
        },
        setToolbarButton () {            
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
