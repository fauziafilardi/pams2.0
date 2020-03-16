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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_TransactionTypeMaster.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_TransactionTypeMaster.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_AR_TransactionTypeMaster.shortdescs"  ref="ref_shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypegroupcdChange" :prop="PI_trxtypegroupcd" :value="M_AR_TransactionTypeMaster.trxtypegroupcd" :label="M_AR_TransactionTypeMaster.trxtypegroupcdLabel" ref="ref_trxtypegroupcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OntrxclassChange" :prop="PI_trxclass" :value="M_AR_TransactionTypeMaster.trxclass" :label="M_AR_TransactionTypeMaster.trxclassLabel" ref="ref_trxclass"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_AR_TransactionTypeMaster.runningcd" :label="M_AR_TransactionTypeMaster.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnglamortizationrunningcdChange" :prop="PI_glamortizationrunningcd" :value="M_AR_TransactionTypeMaster.glamortizationrunningcd" :label="M_AR_TransactionTypeMaster.glamortizationrunningcdLabel" ref="ref_glamortizationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournaltypeChange" :prop="PI_journaltype" v-model="M_AR_TransactionTypeMaster.journaltype"  ref="ref_journaltype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnamortizestatusChange" :prop="PI_amortizestatus" v-model="M_AR_TransactionTypeMaster.amortizestatus"  ref="ref_amortizestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngltrxtypeChange" :prop="PI_gltrxtype" :value="M_AR_TransactionTypeMaster.gltrxtype" :label="M_AR_TransactionTypeMaster.gltrxtypeLabel" ref="ref_gltrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnamortizemethodChange" :prop="PI_amortizemethod" v-model="M_AR_TransactionTypeMaster.amortizemethod"  ref="ref_amortizemethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalcategoryChange" :prop="PI_journalcategory" v-model="M_AR_TransactionTypeMaster.journalcategory"  ref="ref_journalcategory" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnglamortizationtrxtypeChange" :prop="PI_glamortizationtrxtype" :value="M_AR_TransactionTypeMaster.glamortizationtrxtype" :label="M_AR_TransactionTypeMaster.glamortizationtrxtypeLabel" ref="ref_glamortizationtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_TransactionTypeMaster.currencycd" :label="M_AR_TransactionTypeMaster.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnindirectrunningcdChange" :prop="PI_indirectrunningcd" :value="M_AR_TransactionTypeMaster.indirectrunningcd" :label="M_AR_TransactionTypeMaster.indirectrunningcdLabel" ref="ref_indirectrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_TransactionTypeMaster.taxcd" :label="M_AR_TransactionTypeMaster.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_fixamt" v-model="M_AR_TransactionTypeMaster.fixamt"  ref="ref_fixamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocpriority" v-model="M_AR_TransactionTypeMaster.allocpriority"  ref="ref_allocpriority"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxbasepercent" v-model="M_AR_TransactionTypeMaster.taxbasepercent"  ref="ref_taxbasepercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_AR_TransactionTypeMaster.credittermscd" :label="M_AR_TransactionTypeMaster.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnstampdutyChange" :prop="PI_stampduty" v-model="M_AR_TransactionTypeMaster.stampduty"  ref="ref_stampduty" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_AR_TransactionTypeMaster.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Account Prefix / Account Code
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorprefixcdChange" :prop="PI_debtorcreditorprefixcd" :value="M_AR_TransactionTypeMaster.debtorcreditorprefixcd" :label="M_AR_TransactionTypeMaster.debtorcreditorprefixcdLabel" ref="ref_debtorcreditorprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditoraccountcdChange" :prop="PI_debtorcreditoraccountcd" :value="M_AR_TransactionTypeMaster.debtorcreditoraccountcd" :label="M_AR_TransactionTypeMaster.debtorcreditoraccountcdLabel" ref="ref_debtorcreditoraccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorvatprefixcdChange" :prop="PI_debtorcreditorvatprefixcd" :value="M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd" :label="M_AR_TransactionTypeMaster.debtorcreditorvatprefixcdLabel" ref="ref_debtorcreditorvatprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorvataccountcdChange" :prop="PI_debtorcreditorvataccountcd" :value="M_AR_TransactionTypeMaster.debtorcreditorvataccountcd" :label="M_AR_TransactionTypeMaster.debtorcreditorvataccountcdLabel" ref="ref_debtorcreditorvataccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorwithholdingprefixcdChange" :prop="PI_debtorcreditorwithholdingprefixcd" :value="M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd" :label="M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcdLabel" ref="ref_debtorcreditorwithholdingprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorwithholdingaccountcdChange" :prop="PI_debtorcreditorwithholdingaccountcd" :value="M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd" :label="M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcdLabel" ref="ref_debtorcreditorwithholdingaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnadvanceprefixcdChange" :prop="PI_advanceprefixcd" :value="M_AR_TransactionTypeMaster.advanceprefixcd" :label="M_AR_TransactionTypeMaster.advanceprefixcdLabel" ref="ref_advanceprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnadvanceaccountcdChange" :prop="PI_advanceaccountcd" :value="M_AR_TransactionTypeMaster.advanceaccountcd" :label="M_AR_TransactionTypeMaster.advanceaccountcdLabel" ref="ref_advanceaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndepositprefixcdChange" :prop="PI_depositprefixcd" :value="M_AR_TransactionTypeMaster.depositprefixcd" :label="M_AR_TransactionTypeMaster.depositprefixcdLabel" ref="ref_depositprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndepositaccountcdChange" :prop="PI_depositaccountcd" :value="M_AR_TransactionTypeMaster.depositaccountcd" :label="M_AR_TransactionTypeMaster.depositaccountcdLabel" ref="ref_depositaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnunderpaymentprefixcdChange" :prop="PI_underpaymentprefixcd" :value="M_AR_TransactionTypeMaster.underpaymentprefixcd" :label="M_AR_TransactionTypeMaster.underpaymentprefixcdLabel" ref="ref_underpaymentprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnunderpaymentaccountcdChange" :prop="PI_underpaymentaccountcd" :value="M_AR_TransactionTypeMaster.underpaymentaccountcd" :label="M_AR_TransactionTypeMaster.underpaymentaccountcdLabel" ref="ref_underpaymentaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnoverpaymentprefixcdChange" :prop="PI_overpaymentprefixcd" :value="M_AR_TransactionTypeMaster.overpaymentprefixcd" :label="M_AR_TransactionTypeMaster.overpaymentprefixcdLabel" ref="ref_overpaymentprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnoverpaymentaccountcdChange" :prop="PI_overpaymentaccountcd" :value="M_AR_TransactionTypeMaster.overpaymentaccountcd" :label="M_AR_TransactionTypeMaster.overpaymentaccountcdLabel" ref="ref_overpaymentaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnincomeexpenseprefixcdChange" :prop="PI_incomeexpenseprefixcd" :value="M_AR_TransactionTypeMaster.incomeexpenseprefixcd" :label="M_AR_TransactionTypeMaster.incomeexpenseprefixcdLabel" ref="ref_incomeexpenseprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnincomeexpenseaccountcdChange" :prop="PI_incomeexpenseaccountcd" :value="M_AR_TransactionTypeMaster.incomeexpenseaccountcd" :label="M_AR_TransactionTypeMaster.incomeexpenseaccountcdLabel" ref="ref_incomeexpenseaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndefferedprefixcdChange" :prop="PI_defferedprefixcd" :value="M_AR_TransactionTypeMaster.defferedprefixcd" :label="M_AR_TransactionTypeMaster.defferedprefixcdLabel" ref="ref_defferedprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndefferedaccountcdChange" :prop="PI_defferedaccountcd" :value="M_AR_TransactionTypeMaster.defferedaccountcd" :label="M_AR_TransactionTypeMaster.defferedaccountcdLabel" ref="ref_defferedaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnroundingprefixcdChange" :prop="PI_roundingprefixcd" :value="M_AR_TransactionTypeMaster.roundingprefixcd" :label="M_AR_TransactionTypeMaster.roundingprefixcdLabel" ref="ref_roundingprefixcd"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onroundingaccountcdchange" :prop="PI_roundingaccountcd" :value="M_AR_TransactionTypeMaster.roundingaccountcd" :label="M_AR_TransactionTypeMaster.roundingaccountcdLabel" ref="ref_roundingaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">

                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnarstraightlineaccountcdChange" :prop="PI_arstraightlineaccountcd" :value="M_AR_TransactionTypeMaster.arstraightlineaccountcd" :label="M_AR_TransactionTypeMaster.arstraightlineaccountcdLabel" ref="ref_arstraightlineaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                          
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onincomestraightlineaccountcdchange" :prop="PI_incomestraightlineaccountcd" :value="M_AR_TransactionTypeMaster.incomestraightlineaccountcd" :label="M_AR_TransactionTypeMaster.incomestraightlineaccountcdLabel" ref="ref_incomestraightlineaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Penalty
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpenaltystatusChange" :prop="PI_penaltystatus" v-model="M_AR_TransactionTypeMaster.penaltystatus"  ref="ref_penaltystatus" />
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
		cInsertKey:'id=TrxType,label=TrxType+|+Descs',
		FormType: "List",
		Module:"AR",
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_TransactionTypeMaster :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                modulecd: '',
                amortizemethod: 'C',
                descs: '',
                shortdescs: '',
                trxclass: 'I',
                trxclassdescs: '',
                trxtypegroupcd: '',
                runningcd: '',
                glamortizationrunningcd: '',
                journaltype: 'D',
                amortizestatus: 'A  ',
                journalcategory: 'D',
                indirectrunningcd: '',
                gltrxtype: '',
                glamortizationtrxtype: '',
                glmodulecd: '',
                currencycd: '',
                fixamt: '0',
                taxcd: '',
                taxbasepercent: '0',
                allocpriority: '0',
                stampduty: 'N',
                credittermscd: '',
                debtorcreditoraccountcd: '',
                debtorcreditorprefixcd: '',
                advanceaccountcd: '',
                advanceprefixcd: '',
                depositaccountcd: '',
                depositprefixcd: '',
                underpaymentaccountcd: '',
                underpaymentprefixcd: '',
                overpaymentaccountcd: '',
                overpaymentprefixcd: '',
                incomeexpenseaccountcd: '',
                incomeexpenseprefixcd: '',
                defferedaccountcd: '',
                defferedprefixcd: '',
                roundingaccountcd: '',
                roundingprefixcd: '',
                penaltystatus: 'Y',
                debtorcreditorvataccountcd: '',
                debtorcreditorwithholdingaccountcd: '',
                debtorcreditorvatprefixcd: '',
                debtorcreditorwithholdingprefixcd: '',
                predefinedjournalcd: '',
                linedescs: '',
                nextperiodreversal: '',
                currencycontrol: '',
                allowchangetanalysis: '',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                arstraightlineaccountcd: '',
                incomestraightlineaccountcd: '',
                status: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_trxtype: { 
                cValidate :'required|max:8', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
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
            PI_shortdescs: { 
                cValidate :'max:30', 
                cName: 'shortdescs', 
                cLabel: 'Short Description', 
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
            PI_trxtypegroupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransactionTypeGroup'    , 
                    ColumnDB: 'TrxTypeGroupCd'   , 
                    InitialWhere: "ModuleCd is null or ModuleCd = 'AR'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypegroupcd', 
                cLabel: 'Trans. Type Group', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cMasterUrl: 'CM/CM_TransactionTypeGroup' ,
                cDisplayColumn: 'TrxTypeGroupCd,Descs' ,
            }, 
            PI_trxclass: { 
                dataLookUp: null, 
                cValidate :'required', 
                cName: 'trxclass', 
                cLabel: 'Trans. Class', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'I', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [
                    { label: 'Credit Note', id: 'C' },
                    { label: 'Debit Note', id: 'D' },
                    { label: 'Invoice', id: 'I' },
                    { label: 'Payment', id: 'M' },
                    { label: 'Penalty', id: 'P' },
                    { label: 'Deposit Receipt', id: 'S' },
                    { label: 'Invoice Deposit', id: 'T' },
                    { label: 'Advance', id: 'A' },
                    { label: 'Refund', id: 'R' }
                ],   
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Trans. Running Code', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_glamortizationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glamortizationrunningcd', 
                cLabel: 'Amortization Running Code', 
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
            PI_journaltype: { 
                cValidate :'', 
                cName: 'journaltype', 
                cId: 'rdbjournaltype', 
                cRadioOptions: [{ text: 'Income', value: 'I' }, { text: 'Deffered', value: 'D' }], 
                cRadioDefaultOption: 'I', 
                cLabel:'Invoice Journal Type ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizestatus: { 
                cValidate :'', 
                cName: 'amortizestatus', 
                cId: 'rdbamortizestatus', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Auto', value: 'A' }], 
                cRadioDefaultOption: 'M', 
                cLabel:'Amortize Status ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_gltrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'gltrxtype', 
                cLabel: 'GL Trans. Type', 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_amortizemethod: { 
                cValidate :'', 
                cName: 'amortizemethod', 
                cId: 'rdbamortizemethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journalcategory: { 
                cValidate :'', 
                cName: 'journalcategory', 
                cId: 'rdbjournalcategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' }, { text: 'Indirect', value: 'I' }], 
                cRadioDefaultOption: 'D', 
                cLabel:'Journal Category ', 
                cLabelSize: 4, 
                cOrder: 12, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_glamortizationtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glamortizationtrxtype', 
                cLabel: 'GL Amortization Trans.Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cMasterUrl: 'CM/CM_Currency' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_indirectrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'AR')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'indirectrunningcd', 
                cLabel: 'Indirect Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 15, 
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
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cMasterUrl: 'CM/CM_TaxSubportfolio' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_fixamt: { 
                cValidate :'required|max:16', 
                cName: 'fixamt', 
                cLabel: 'Fixed Amount', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocpriority: { 
                cValidate :'required|max:1', 
                cName: 'allocpriority', 
                cLabel: 'Allocation Priority ', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cLastLabel: '(1-9) 1 : Highest',
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxbasepercent: { 
                cValidate :'required|max_value:100', 
                cName: 'taxbasepercent', 
                cLabel: 'Tax Based ', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cLastLabel: '%',
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus',   
                cRadioOptions: [{ text: 'Active', value: 'A' }, { text: 'Non Active', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 21, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_stampduty: { 
                cValidate :'', 
                cName: 'stampduty', 
                cId: 'rdbstampduty', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Stamp Duty', 
                cLabelSize: 4, 
                cOrder: 22, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcreditorprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorprefixcd', 
                cLabel: 'AR Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix  ' ,
            }, 
            PI_debtorcreditoraccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditoraccountcd', 
                cLabel: 'AR Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_debtorcreditorvatprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorvatprefixcd', 
                cLabel: 'AR VAT Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 25, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditorvataccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorvataccountcd', 
                cLabel: 'AR VAT Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 26, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_debtorcreditorwithholdingprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorwithholdingprefixcd', 
                cLabel: 'AR Withholding Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 27, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditorwithholdingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorwithholdingaccountcd', 
                cLabel: 'AR Withholding Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 28, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_advanceprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'advanceprefixcd', 
                cLabel: 'Advance Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 29, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_advanceaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'advanceaccountcd', 
                cLabel: 'Advance Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 30, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_depositprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'depositprefixcd', 
                cLabel: 'Deposit Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 31, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_depositaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'depositaccountcd', 
                cLabel: 'Deposit Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 32, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_underpaymentprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'underpaymentprefixcd', 
                cLabel: 'Under Payment Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 33, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_underpaymentaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'underpaymentaccountcd', 
                cLabel: 'Under Payment Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 34, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_overpaymentprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'overpaymentprefixcd', 
                cLabel: 'Over Payment Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 35, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_overpaymentaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'overpaymentaccountcd', 
                cLabel: 'Over Payment Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 36, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_incomeexpenseprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'incomeexpenseprefixcd', 
                cLabel: 'Income Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 37, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_incomeexpenseaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'incomeexpenseaccountcd', 
                cLabel: 'Income Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 38, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_defferedprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defferedprefixcd', 
                cLabel: 'Deffered Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 39, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_defferedaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defferedaccountcd', 
                cLabel: 'Deffered Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 40, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_roundingprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'roundingprefixcd', 
                cLabel: 'Rounding Correction Account Prefix ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 41, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_roundingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'roundingaccountcd', 
                cLabel: 'Rounding Correction Account Code ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 42, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_arstraightlineaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'arstraightlineaccountcd', 
                cLabel: 'AR Straight Line Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 43, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            },
            PI_incomestraightlineaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'incomestraightlineaccountcd', 
                cLabel: 'Income Straight Line Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 44, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_penaltystatus: { 
                cValidate :'', 
                cName: 'penaltystatus', 
                cId: 'rdbpenaltystatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Penalty Status', 
                cLabelSize: 4, 
                cOrder: 45, 
                cProtect: true, 
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OntrxtypegroupcdChange (data) {
        this.$nextTick(() => {
            
            if (this.inputStatus != "VIEW") {
//{trxtypegroupcd}
            this.M_AR_TransactionTypeMaster.trxtypegroupcd = data.id
            this.M_AR_TransactionTypeMaster.trxtypegroupcdLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OntrxclassChange(value){
            this.M_AR_TransactionTypeMaster.trxclass = value.id
            this.M_AR_TransactionTypeMaster.trxclassLabel = value.label
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.runningcd = data.id
            this.M_AR_TransactionTypeMaster.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{runningcd}
            }
        })
        this.$forceUpdate()
        },
        OnglamortizationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.glamortizationrunningcd = data.id
            this.M_AR_TransactionTypeMaster.glamortizationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glamortizationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnjournaltypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data == 'I'){
                    if(this.M_AR_TransactionTypeMaster.trxclass == 'I' || this.M_AR_TransactionTypeMaster.trxclass == 'T' || this.M_AR_TransactionTypeMaster.trxclass == 'D'){
                        this.PI_amortizestatus.cProtect = true
                        this.PI_amortizemethod.cProtect = true
                    }
                }
                else if(data == 'D'){
                    if(this.M_AR_TransactionTypeMaster.trxclass == 'I' || this.M_AR_TransactionTypeMaster.trxclass == 'T' || this.M_AR_TransactionTypeMaster.trxclass == 'D'){
                        this.PI_amortizestatus.cProtect = false
                        this.PI_amortizemethod.cProtect = false
                    }
                } 
//{journaltype}
            }
        })
        this.$forceUpdate()
        },
        OnamortizestatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizestatus}
            }
        })
        this.$forceUpdate()
        },
        OngltrxtypeChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.gltrxtype = data.id
            this.M_AR_TransactionTypeMaster.gltrxtypeLabel = data.id + ' | ' +data.label
            if (this.inputStatus != "VIEW") {
//{gltrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnamortizemethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizemethod}
            }
        })
        this.$forceUpdate()
        },
        OnjournalcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journalcategory}
            }
        })
        this.$forceUpdate()
        },
        OnglamortizationtrxtypeChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.glamortizationtrxtype = data.id
            this.M_AR_TransactionTypeMaster.glamortizationtrxtypeLabel = data.id + ' | ' +data.label
            if (this.inputStatus != "VIEW") {
//{glamortizationtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.currencycd = data.id
            this.M_AR_TransactionTypeMaster.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OnindirectrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.indirectrunningcd = data.id
            this.M_AR_TransactionTypeMaster.indirectrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{indirectrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.taxcd = data.id
            this.M_AR_TransactionTypeMaster.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.credittermscd = data.id
            this.M_AR_TransactionTypeMaster.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{credittermscd}
            }
        })
        this.$forceUpdate()
        },
        OnstampdutyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{stampduty}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd = data.id
            this.M_AR_TransactionTypeMaster.debtorcreditorprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditoraccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd = data.id
            this.M_AR_TransactionTypeMaster.debtorcreditoraccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditoraccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorvatprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd = data.id
            this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorvatprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorvataccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd = data.id
            this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorvataccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorwithholdingprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd = data.id
            this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorwithholdingprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorwithholdingaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd = data.id
            this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorwithholdingaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnadvanceprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.advanceprefixcd = data.id
            this.M_AR_TransactionTypeMaster.advanceprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{advanceprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnadvanceaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.advanceaccountcd = data.id
            this.M_AR_TransactionTypeMaster.advanceaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{advanceaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndepositprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.depositprefixcd = data.id
            this.M_AR_TransactionTypeMaster.depositprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{depositprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndepositaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.depositaccountcd = data.id
            this.M_AR_TransactionTypeMaster.depositaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{depositaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnunderpaymentprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.underpaymentprefixcd = data.id
            this.M_AR_TransactionTypeMaster.underpaymentprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{underpaymentprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnunderpaymentaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.underpaymentaccountcd = data.id
            this.M_AR_TransactionTypeMaster.underpaymentaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{underpaymentaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnoverpaymentprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.overpaymentprefixcd = data.id
            this.M_AR_TransactionTypeMaster.overpaymentprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{overpaymentprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnoverpaymentaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.overpaymentaccountcd = data.id
            this.M_AR_TransactionTypeMaster.overpaymentaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{overpaymentaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnincomeexpenseprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd = data.id
            this.M_AR_TransactionTypeMaster.incomeexpenseprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{incomeexpenseprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnincomeexpenseaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd = data.id
            this.M_AR_TransactionTypeMaster.incomeexpenseaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{incomeexpenseaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndefferedprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.defferedprefixcd = data.id
            this.M_AR_TransactionTypeMaster.defferedprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndefferedaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.defferedaccountcd = data.id
            this.M_AR_TransactionTypeMaster.defferedaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnroundingprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.roundingprefixcd = data.id
            this.M_AR_TransactionTypeMaster.roundingprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        Onroundingaccountcdchange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.roundingaccountcd = data.id
            this.M_AR_TransactionTypeMaster.roundingaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnarstraightlineaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.arstraightlineaccountcd = data.id
            this.M_AR_TransactionTypeMaster.arstraightlineaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        Onincomestraightlineaccountcdchange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd = data.id
            this.M_AR_TransactionTypeMaster.incomestraightlineaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltystatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{penaltystatus}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_AR_TransactionTypeMaster.subportfoliocd,
                TrxType: this.M_AR_TransactionTypeMaster.trxtype,
                ModuleCd: this.Module,
                Descs: this.M_AR_TransactionTypeMaster.descs,
                ShortDescs: this.M_AR_TransactionTypeMaster.shortdescs,
                TrxTypeGroupCd: this.M_AR_TransactionTypeMaster.trxtypegroupcd == '' || this.M_AR_TransactionTypeMaster.trxtypegroupcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.trxtypegroupcd,
                TrxClass: this.M_AR_TransactionTypeMaster.trxclass == '' || this.M_AR_TransactionTypeMaster.trxclass == null ? 'NULL' : this.M_AR_TransactionTypeMaster.trxclass,
                AmortizeMethod: this.M_AR_TransactionTypeMaster.amortizemethod,
                RunningCd: this.M_AR_TransactionTypeMaster.runningcd == '' || this.M_AR_TransactionTypeMaster.runningcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.runningcd ,
                GLAmortizationRunningCd: this.M_AR_TransactionTypeMaster.glamortizationrunningcd == '' || this.M_AR_TransactionTypeMaster.glamortizationrunningcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.glamortizationrunningcd ,
                JournalType: this.M_AR_TransactionTypeMaster.journaltype,
                AmortizeStatus: this.M_AR_TransactionTypeMaster.amortizestatus,
                JournalCategory: this.M_AR_TransactionTypeMaster.journalcategory,
                IndirectRunningCd: this.M_AR_TransactionTypeMaster.indirectrunningcd == '' || this.M_AR_TransactionTypeMaster.indirectrunningcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.indirectrunningcd ,
                GLTrxType: this.M_AR_TransactionTypeMaster.gltrxtype == '' || this.M_AR_TransactionTypeMaster.gltrxtype == null ? 'NULL' : this.M_AR_TransactionTypeMaster.gltrxtype ,
                GLAmortizationTrxType: this.M_AR_TransactionTypeMaster.glamortizationtrxtype == '' || this.M_AR_TransactionTypeMaster.glamortizationtrxtype == null ? 'NULL' : this.M_AR_TransactionTypeMaster.glamortizationtrxtype ,
                GLModuleCd: 'GL',
                CurrencyCd: this.M_AR_TransactionTypeMaster.currencycd == '' || this.M_AR_TransactionTypeMaster.currencycd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.currencycd ,
                FixAmt: this.M_AR_TransactionTypeMaster.fixamt ? this.replaceAllString(this.M_AR_TransactionTypeMaster.fixamt,',','','number') : 0 ,
                TaxCd: this.M_AR_TransactionTypeMaster.taxcd == '' || this.M_AR_TransactionTypeMaster.taxcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.taxcd ,
                TaxBasePercent: this.M_AR_TransactionTypeMaster.taxbasepercent == '' || this.M_AR_TransactionTypeMaster.taxbasepercent == null ? 0.0 : this.M_AR_TransactionTypeMaster.taxbasepercent,
                AllocPriority: this.M_AR_TransactionTypeMaster.allocpriority == '' || this.M_AR_TransactionTypeMaster.allocpriority == null ? '' : this.M_AR_TransactionTypeMaster.allocpriority,
                StampDuty: this.M_AR_TransactionTypeMaster.stampduty,
                CreditTermsCd: this.M_AR_TransactionTypeMaster.credittermscd == '' || this.M_AR_TransactionTypeMaster.credittermscd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.credittermscd ,
                DebtorCreditorAccountCd: this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd ,
                DebtorCreditorPrefixCd: this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd ,
                AdvanceAccountCd: this.M_AR_TransactionTypeMaster.advanceaccountcd == '' || this.M_AR_TransactionTypeMaster.advanceaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.advanceaccountcd ,
                AdvancePrefixCd: this.M_AR_TransactionTypeMaster.advanceprefixcd == '' || this.M_AR_TransactionTypeMaster.advanceprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.advanceprefixcd ,
                DepositAccountCd: this.M_AR_TransactionTypeMaster.depositaccountcd == '' || this.M_AR_TransactionTypeMaster.depositaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.depositaccountcd ,
                DepositPrefixCd: this.M_AR_TransactionTypeMaster.depositprefixcd == '' || this.M_AR_TransactionTypeMaster.depositprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.depositprefixcd ,
                UnderPaymentAccountCd: this.M_AR_TransactionTypeMaster.underpaymentaccountcd == '' || this.M_AR_TransactionTypeMaster.underpaymentaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.underpaymentaccountcd ,
                UnderPaymentPrefixCd: this.M_AR_TransactionTypeMaster.underpaymentprefixcd == '' || this.M_AR_TransactionTypeMaster.underpaymentprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.underpaymentprefixcd ,
                OverPaymentAccountCd: this.M_AR_TransactionTypeMaster.overpaymentaccountcd == '' || this.M_AR_TransactionTypeMaster.overpaymentaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.overpaymentaccountcd ,
                OverPaymentPrefixCd: this.M_AR_TransactionTypeMaster.overpaymentprefixcd == '' || this.M_AR_TransactionTypeMaster.overpaymentprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.overpaymentprefixcd ,
                IncomeExpenseAccountCd: this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd == '' || this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd ,
                IncomeExpensePrefixCd: this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd == '' || this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd ,
                DefferedAccountCd: this.M_AR_TransactionTypeMaster.defferedaccountcd == '' || this.M_AR_TransactionTypeMaster.defferedaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.defferedaccountcd ,
                DefferedPrefixCd: this.M_AR_TransactionTypeMaster.defferedprefixcd == '' || this.M_AR_TransactionTypeMaster.defferedprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.defferedprefixcd ,
                RoundingAccountCd: this.M_AR_TransactionTypeMaster.roundingaccountcd == '' || this.M_AR_TransactionTypeMaster.roundingaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.roundingaccountcd,
                RoundingPrefixCd: this.M_AR_TransactionTypeMaster.roundingprefixcd == '' || this.M_AR_TransactionTypeMaster.roundingprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.roundingprefixcd,
                PenaltyStatus: this.M_AR_TransactionTypeMaster.penaltystatus,
                DebtorCreditorVATAccountCd: this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd ,
                DebtorCreditorWithholdingAccountCd: this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd ,
                DebtorCreditorVATPrefixCd: this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd ,
                DebtorCreditorWithholdingPrefixCd: this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd ,
                UserInput: this.getDataUser().UserId ,
                ARStraightLineAccountCd: this.M_AR_TransactionTypeMaster.arstraightlineaccountcd == '' || this.M_AR_TransactionTypeMaster.arstraightlineaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.arstraightlineaccountcd,
                IncomeStraightLineAccountCd: this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd == '' || this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd                
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
                TrxType: this.M_AR_TransactionTypeMaster.trxtype,
                SubPortfolioCd: this.M_AR_TransactionTypeMaster.subportfoliocd, 
                ModuleCd: this.M_AR_TransactionTypeMaster.modulecd,
                Descs: this.M_AR_TransactionTypeMaster.descs,
                ShortDescs: this.M_AR_TransactionTypeMaster.shortdescs,
                // TrxTypeGroupCd: this.M_AR_TransactionTypeMaster.trxtypegroupcd == '' || this.M_AR_TransactionTypeMaster.trxtypegroupcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.trxtypegroupcd,
                TrxClass: this.M_AR_TransactionTypeMaster.trxclass == '' || this.M_AR_TransactionTypeMaster.trxclass == null ? 'NULL' : this.M_AR_TransactionTypeMaster.trxclass ,
                AmortizeMethod: this.M_AR_TransactionTypeMaster.amortizemethod,
                RunningCd: this.M_AR_TransactionTypeMaster.runningcd == '' || this.M_AR_TransactionTypeMaster.runningcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.runningcd ,
                GLAmortizationRunningCd: this.M_AR_TransactionTypeMaster.glamortizationrunningcd == '' || this.M_AR_TransactionTypeMaster.glamortizationrunningcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.glamortizationrunningcd ,
                JournalType: this.M_AR_TransactionTypeMaster.journaltype,
                AmortizeStatus: this.M_AR_TransactionTypeMaster.amortizestatus,
                JournalCategory: this.M_AR_TransactionTypeMaster.journalcategory,
                IndirectRunningCd: this.M_AR_TransactionTypeMaster.indirectrunningcd == '' || this.M_AR_TransactionTypeMaster.indirectrunningcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.indirectrunningcd ,
                GLTrxType: this.M_AR_TransactionTypeMaster.gltrxtype == '' || this.M_AR_TransactionTypeMaster.gltrxtype == null ? 'NULL' : this.M_AR_TransactionTypeMaster.gltrxtype ,
                GLAmortizationTrxType: this.M_AR_TransactionTypeMaster.glamortizationtrxtype == '' || this.M_AR_TransactionTypeMaster.glamortizationtrxtype == null ? 'NULL' : this.M_AR_TransactionTypeMaster.glamortizationtrxtype ,
                GLModuleCd: 'GL',
                Status: this.M_AR_TransactionTypeMaster.status,
                CurrencyCd: this.M_AR_TransactionTypeMaster.currencycd == '' || this.M_AR_TransactionTypeMaster.currencycd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.currencycd ,
                FixAmt: this.M_AR_TransactionTypeMaster.fixamt ? this.replaceAllString(this.M_AR_TransactionTypeMaster.fixamt,',','','number') : 0 ,
                TaxCd: this.M_AR_TransactionTypeMaster.taxcd == '' || this.M_AR_TransactionTypeMaster.taxcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.taxcd ,
                TaxBasePercent: this.M_AR_TransactionTypeMaster.taxbasepercent == '' || this.M_AR_TransactionTypeMaster.taxbasepercent == null ? '' : this.M_AR_TransactionTypeMaster.taxbasepercent,
                AllocPriority: this.M_AR_TransactionTypeMaster.allocpriority == '' || this.M_AR_TransactionTypeMaster.allocpriority == null ? 'NULL' : this.M_AR_TransactionTypeMaster.allocpriority,
                StampDuty: this.M_AR_TransactionTypeMaster.stampduty,
                CreditTermsCd: this.M_AR_TransactionTypeMaster.credittermscd == '' || this.M_AR_TransactionTypeMaster.credittermscd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.credittermscd ,
                DebtorCreditorAccountCd: this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd ,
                DebtorCreditorPrefixCd: this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd ,
                AdvanceAccountCd: this.M_AR_TransactionTypeMaster.advanceaccountcd == '' || this.M_AR_TransactionTypeMaster.advanceaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.advanceaccountcd ,
                AdvancePrefixCd: this.M_AR_TransactionTypeMaster.advanceprefixcd == '' || this.M_AR_TransactionTypeMaster.advanceprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.advanceprefixcd ,
                DepositAccountCd: this.M_AR_TransactionTypeMaster.depositaccountcd == '' || this.M_AR_TransactionTypeMaster.depositaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.depositaccountcd ,
                DepositPrefixCd: this.M_AR_TransactionTypeMaster.depositprefixcd == '' || this.M_AR_TransactionTypeMaster.depositprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.depositprefixcd ,
                UnderPaymentAccountCd: this.M_AR_TransactionTypeMaster.underpaymentaccountcd == '' || this.M_AR_TransactionTypeMaster.underpaymentaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.underpaymentaccountcd ,
                UnderPaymentPrefixCd: this.M_AR_TransactionTypeMaster.underpaymentprefixcd == '' || this.M_AR_TransactionTypeMaster.underpaymentprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.underpaymentprefixcd ,
                OverPaymentAccountCd: this.M_AR_TransactionTypeMaster.overpaymentaccountcd == '' || this.M_AR_TransactionTypeMaster.overpaymentaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.overpaymentaccountcd ,
                OverPaymentPrefixCd: this.M_AR_TransactionTypeMaster.overpaymentprefixcd == '' || this.M_AR_TransactionTypeMaster.overpaymentprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.overpaymentprefixcd ,
                IncomeExpenseAccountCd: this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd == '' || this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd ,
                IncomeExpensePrefixCd: this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd == '' || this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd ,
                DefferedAccountCd: this.M_AR_TransactionTypeMaster.defferedaccountcd == '' || this.M_AR_TransactionTypeMaster.defferedaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.defferedaccountcd ,
                DefferedPrefixCd: this.M_AR_TransactionTypeMaster.defferedprefixcd == '' || this.M_AR_TransactionTypeMaster.defferedprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.defferedprefixcd ,
                RoundingAccountCd: this.M_AR_TransactionTypeMaster.roundingaccountcd == '' || this.M_AR_TransactionTypeMaster.roundingaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.roundingaccountcd,
                RoundingPrefixCd: this.M_AR_TransactionTypeMaster.roundingprefixcd == '' || this.M_AR_TransactionTypeMaster.roundingprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.roundingprefixcd,
                PenaltyStatus: this.M_AR_TransactionTypeMaster.penaltystatus,
                DebtorCreditorVATAccountCd: this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd ,
                DebtorCreditorWithholdingAccountCd: this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd ,
                DebtorCreditorVATPrefixCd: this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd ,
                DebtorCreditorWithholdingPrefixCd: this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == '' || this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_TransactionTypeMaster.lastupdatestamp,
                ARStraightLineAccountCd: this.M_AR_TransactionTypeMaster.arstraightlineaccountcd == '' || this.M_AR_TransactionTypeMaster.arstraightlineaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.arstraightlineaccountcd,
                IncomeStraightLineAccountCd: this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd == '' || this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd              
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_TransactionTypeMaster = {
                trxtype: '',
                modulecd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                amortizemethod: 'C',
                descs: '',
                shortdescs: '',
                trxclass: 'I',
                trxtypegroupcd: '',
                runningcd: '',
                glamortizationrunningcd: '',
                journaltype: 'D',
                amortizestatus: 'A',
                journalcategory: 'D',
                indirectrunningcd: '',
                gltrxtype: '',
                glamortizationtrxtype: '',
                glmodulecd: '',
                currencycd: '',
                fixamt: 0,
                taxcd: '',
                taxbasepercent: '100',
                allocpriority: '0',
                stampduty: 'N',
                credittermscd: '',
                debtorcreditoraccountcd: '',
                debtorcreditorprefixcd: '',
                advanceaccountcd: '',
                advanceprefixcd: '',
                depositaccountcd: '',
                depositprefixcd: '',
                underpaymentaccountcd: '',
                underpaymentprefixcd: '',
                overpaymentaccountcd: '',
                overpaymentprefixcd: '',
                incomeexpenseaccountcd: '',
                incomeexpenseprefixcd: '',
                defferedaccountcd: '',
                defferedprefixcd: '',
                roundingaccountcd: '',
                roundingprefixcd: '',
                penaltystatus: '',
                debtorcreditorvataccountcd: '',
                debtorcreditorwithholdingaccountcd: '',
                debtorcreditorvatprefixcd: '',
                debtorcreditorwithholdingprefixcd: '',
                predefinedjournalcd: '',
                linedescs: '',
                nextperiodreversal: '',
                currencycontrol: '',
                allowchangetanalysis: '',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                arstraightlineaccountcd: '',
                incomestraightlineaccountcd: '',
                status: '',
                lastupdatestamp: 0,
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
                    TrxType: value.TrxType,
                    ModuleCd: value.ModuleCd,
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
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,               
                SubPortfolioCd: record.SubportfolioCd,
                ModuleCd: 'AR',
                trxtype: record.TrxType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
            this.M_AR_TransactionTypeMaster = {
                subportfoliocd: record.SubportfolioCd,
                trxtype: record.TrxType,
                modulecd: 'AR',
                amortizemethod: data.amortizemethod,
                descs: data.descs,
                shortdescs: data.shortdescs,
                trxclass: data.trxclass,
                trxtypegroupcd: data.trxtypegroupcd,
                runningcd: data.runningcd,
                glamortizationrunningcd: data.glamortizationrunningcd,
                journaltype: data.journaltype,
                amortizestatus: data.amortizestatus,
                journalcategory: data.journalcategory,
                indirectrunningcd: data.indirectrunningcd,
                gltrxtype: data.gltrxtype,
                glamortizationtrxtype: data.glamortizationtrxtype,
                glmodulecd: data.glmodulecd,
                currencycd: data.currencycd,
                fixamt: this.isCurrency(data.fixamt, this.decimal),
                taxcd: data.taxcd,
                taxbasepercent: data.taxbasepercent,
                allocpriority: data.allocpriority,
                stampduty: data.stampduty,
                credittermscd: data.credittermscd,
                debtorcreditoraccountcd: data.debtorcreditoraccountcd,
                debtorcreditorprefixcd: data.debtorcreditorprefixcd,
                advanceaccountcd: data.advanceaccountcd,
                advanceprefixcd: data.advanceprefixcd,
                depositaccountcd: data.depositaccountcd,
                depositprefixcd: data.depositprefixcd,
                underpaymentaccountcd: data.underpaymentaccountcd,
                underpaymentprefixcd: data.underpaymentprefixcd,
                overpaymentaccountcd: data.overpaymentaccountcd,
                overpaymentprefixcd: data.overpaymentprefixcd,
                incomeexpenseaccountcd: data.incomeexpenseaccountcd,
                incomeexpenseprefixcd: data.incomeexpenseprefixcd,
                defferedaccountcd: data.defferedaccountcd,
                defferedprefixcd: data.defferedprefixcd,
                roundingaccountcd: data.roundingaccountcd,
                roundingaccountcdLabel: data.roundingaccountcd,
                roundingprefixcd: data.roundingprefixcd,
                roundingprefixcdLabel: data.roundingprefixcd,
                penaltystatus: data.penaltystatus,
                debtorcreditorvataccountcd: data.debtorcreditorvataccountcd,
                debtorcreditorwithholdingaccountcd: data.debtorcreditorwithholdingaccountcd,
                debtorcreditorvatprefixcd: data.debtorcreditorvatprefixcd,
                debtorcreditorwithholdingprefixcd: data.debtorcreditorwithholdingprefixcd,
                predefinedjournalcd: data.predefinedjournalcd,
                linedescs: data.linedescs,
                nextperiodreversal: data.nextperiodreversal,
                currencycontrol: data.currencycontrol,
                allowchangetanalysis: data.allowchangetanalysis,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                arstraightlineaccountcd: data.arstraightlineaccountcd,
                arstraightlineaccountcdLabel: data.arstraightlineaccountcd,
                incomestraightlineaccountcd: data.incomestraightlineaccountcd,
                incomestraightlineaccountcdLabel: data.incomestraightlineaccountcd,
                status: data.status,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_TransactionTypeMaster.trxtypegroupcdLabel = this.M_AR_TransactionTypeMaster.trxtypegroupcd != null ? data.trxtypegroupcd + this.separator + data.descstrxtypegroupcd :'' 
                this.M_AR_TransactionTypeMaster.runningcdLabel = this.M_AR_TransactionTypeMaster.runningcd != null ? data.runningcd + this.separator + data.descsrunningcd :'' 
                this.M_AR_TransactionTypeMaster.glamortizationrunningcdLabel = this.M_AR_TransactionTypeMaster.glamortizationrunningcd != null ? data.glamortizationrunningcd + this.separator + data.descsglamortizationrunningcd :'' 
                this.M_AR_TransactionTypeMaster.gltrxtypeLabel = this.M_AR_TransactionTypeMaster.gltrxtype != null ? data.gltrxtype + this.separator + data.descsgltrxtype :'' 
                this.M_AR_TransactionTypeMaster.glamortizationtrxtypeLabel = this.M_AR_TransactionTypeMaster.glamortizationtrxtype != null ? data.glamortizationtrxtype + this.separator + data.descsglamortizationtrxtype :'' 
                this.M_AR_TransactionTypeMaster.currencycdLabel = this.M_AR_TransactionTypeMaster.currencycd != null ? data.currencycd + this.separator + data.descscurrencycd :'' 
                this.M_AR_TransactionTypeMaster.indirectrunningcdLabel = this.M_AR_TransactionTypeMaster.indirectrunningcd != null ? data.indirectrunningcd + this.separator + data.descsindirectrunningcd :'' 
                this.M_AR_TransactionTypeMaster.taxcdLabel = this.M_AR_TransactionTypeMaster.taxcd != null ? data.taxcd + this.separator + data.descstaxtype :'' 
                this.M_AR_TransactionTypeMaster.credittermscdLabel = this.M_AR_TransactionTypeMaster.credittermscd != null ? data.credittermscd + this.separator + data.descscredittermscd :'' 
                this.M_AR_TransactionTypeMaster.debtorcreditorprefixcdLabel = this.M_AR_TransactionTypeMaster.debtorcreditorprefixcd != null ? data.debtorcreditorprefixcd + this.separator + data.descsdebtorcreditorprefixcd :'' 
                this.M_AR_TransactionTypeMaster.debtorcreditoraccountcdLabel = this.M_AR_TransactionTypeMaster.debtorcreditoraccountcd != null ? data.debtorcreditoraccountcd + this.separator + data.descsdebtorcreditoraccountcd :'' 
                this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcdLabel = this.M_AR_TransactionTypeMaster.debtorcreditorvatprefixcd != null ? data.debtorcreditorvatprefixcd + this.separator + data.descsdebtorcreditorvatprefixcd :'' 
                this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcdLabel = this.M_AR_TransactionTypeMaster.debtorcreditorvataccountcd != null ? data.debtorcreditorvataccountcd + this.separator + data.descsdebtorcreditorvataccountcd :'' 
                this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcdLabel = this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingprefixcd != null ? data.debtorcreditorwithholdingprefixcd + this.separator + data.descsdebtorcreditorwithholdingprefixcd :'' 
                this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcdLabel = this.M_AR_TransactionTypeMaster.debtorcreditorwithholdingaccountcd != null ? data.debtorcreditorwithholdingaccountcd + this.separator + data.descsdebtorcreditorwithholdingaccountcd :'' 
                this.M_AR_TransactionTypeMaster.advanceprefixcdLabel = this.M_AR_TransactionTypeMaster.advanceprefixcd != null ? data.advanceprefixcd + this.separator + data.descsadvanceprefixcd :'' 
                this.M_AR_TransactionTypeMaster.advanceaccountcdLabel = this.M_AR_TransactionTypeMaster.advanceaccountcd != null ? data.advanceaccountcd + this.separator + data.descsadvanceaccountcd :'' 
                this.M_AR_TransactionTypeMaster.depositprefixcdLabel = this.M_AR_TransactionTypeMaster.depositprefixcd != null ? data.depositprefixcd + this.separator + data.descsdepositprefixcd :'' 
                this.M_AR_TransactionTypeMaster.depositaccountcdLabel = this.M_AR_TransactionTypeMaster.depositaccountcd != null ? data.depositaccountcd + this.separator + data.descsdepositaccountcd :'' 
                this.M_AR_TransactionTypeMaster.underpaymentprefixcdLabel = this.M_AR_TransactionTypeMaster.underpaymentprefixcd != null ? data.underpaymentprefixcd + this.separator + data.descstrxtypegroupcd :'' 
                this.M_AR_TransactionTypeMaster.underpaymentaccountcdLabel = this.M_AR_TransactionTypeMaster.underpaymentaccountcd != null ? data.underpaymentaccountcd + this.separator + data.descsunderpaymentaccountcd :'' 
                this.M_AR_TransactionTypeMaster.overpaymentprefixcdLabel = this.M_AR_TransactionTypeMaster.overpaymentprefixcd != null ? data.overpaymentprefixcd + this.separator + data.descsoverpaymentprefixcd :'' 
                this.M_AR_TransactionTypeMaster.overpaymentaccountcdLabel = this.M_AR_TransactionTypeMaster.overpaymentaccountcd != null ? data.overpaymentaccountcd + this.separator + data.descsoverpaymentaccountcd :'' 
                this.M_AR_TransactionTypeMaster.incomeexpenseprefixcdLabel = this.M_AR_TransactionTypeMaster.incomeexpenseprefixcd != null ? data.incomeexpenseprefixcd + this.separator + data.descsincomeexpenseprefixcd :'' 
                this.M_AR_TransactionTypeMaster.incomeexpenseaccountcdLabel = this.M_AR_TransactionTypeMaster.incomeexpenseaccountcd != null ? data.incomeexpenseaccountcd + this.separator + data.descsincomeexpenseaccountcd :'' 
                this.M_AR_TransactionTypeMaster.defferedprefixcdLabel = this.M_AR_TransactionTypeMaster.defferedprefixcd != null ? data.defferedprefixcd + this.separator + data.descsdefferedprefixcd :'' 
                this.M_AR_TransactionTypeMaster.defferedaccountcdLabel = this.M_AR_TransactionTypeMaster.defferedaccountcd != null ? data.defferedaccountcd + this.separator + data.descsdefferedaccountcd :'' 
                this.M_AR_TransactionTypeMaster.arstraightlineaccountcdLabel = this.M_AR_TransactionTypeMaster.arstraightlineaccountcd != null ? data.arstraightlineaccountcd + this.separator + data.descsarstraightlineaccountcd :''
                this.M_AR_TransactionTypeMaster.incomestraightlineaccountcdLabel = this.M_AR_TransactionTypeMaster.incomestraightlineaccountcd != null ? data.incomestraightlineaccountcd + this.separator + data.descsincomestraightlineaccountcd :''
                this.M_AR_TransactionTypeMaster.roundingaccountcdLabel = this.M_AR_TransactionTypeMaster.roundingaccountcd != null ? data.roundingaccountcd + this.separator + data.descsroundingaccountcd :''
                this.M_AR_TransactionTypeMaster.roundingprefixcdLabel = this.M_AR_TransactionTypeMaster.roundingprefixcd != null ? data.roundingprefixcd + this.separator + data.descsroundingprefixcd :''

                if(data.journaltype == 'I'){
                    this.PI_amortizestatus.cProtect = true
                    this.PI_amortizemethod.cProtect = false  //\
                    this.M_AR_TransactionTypeMaster.amortizemethod = 'C'
                    this.M_AR_TransactionTypeMaster.amortizestatus = 'M'
                }
                else if(data.journaltype == 'D'){
                    this.PI_amortizestatus.cProtect = false
                    this.PI_amortizemethod.cProtect = false  //\
                    this.M_AR_TransactionTypeMaster.amortizemethod = 'C'
                    this.M_AR_TransactionTypeMaster.amortizestatus = 'M'
                }

                if ( data.trxclass == 'I') {
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_debtorcreditorprefixcd.cProtect = false
                this.PI_debtorcreditorvataccountcd.cProtect = false
                this.PI_debtorcreditorvatprefixcd.cProtect = false
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = false
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = false

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = true
                this.PI_underpaymentprefixcd.cProtect = true
                this.PI_overpaymentaccountcd.cProtect = true
                this.PI_overpaymentprefixcd.cProtect = true

                this.PI_incomeexpenseaccountcd.cProtect = false
                this.PI_incomeexpenseprefixcd.cProtect = false
                this.PI_defferedaccountcd.cProtect = false
                this.PI_defferedprefixcd.cProtect = false

                this.PI_roundingprefixcd.cProtect = true
                this.PI_roundingaccountcd.cProtect = true

                this.PI_journaltype.cProtect = false
                this.PI_journalcategory.cProtect = false
                this.PI_currencycd.cProtect = false
                this.PI_taxcd.cProtect = false
                this.PI_currencycd.cValidate = 'required'
                this.$refs.ref_currencycd.isRequired = true
                this.PI_fixamt.cProtect = false
                this.PI_taxbasepercent.cProtect = false
                this.PI_stampduty.cProtect = false
                
                this.PI_allocpriority.cProtect = false

                if(data.journaltype == 'I'){
                    this.PI_amortizemethod.cProtect = true  //\
                    this.PI_amortizestatus.cProtect = true
                }
                else if(data.journaltype == 'D'){
                    this.PI_amortizemethod.cProtect = false
                    this.PI_amortizestatus.cProtect = false
                }
                
                this.PI_glamortizationtrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false
                this.PI_penaltystatus.cProtect = false
    
                }
                else if ( data.trxclass == 'D') {
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_debtorcreditorprefixcd.cProtect = false
                this.PI_debtorcreditorvataccountcd.cProtect = false
                this.PI_debtorcreditorvatprefixcd.cProtect = false
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = false
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = false

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = true
                this.PI_underpaymentprefixcd.cProtect = true
                this.PI_overpaymentaccountcd.cProtect = true
                this.PI_overpaymentprefixcd.cProtect = true

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = true
                this.PI_roundingaccountcd.cProtect = true

                this.PI_journaltype.cProtect = false
                this.PI_journalcategory.cProtect = false
                this.PI_currencycd.cProtect = false
                this.PI_taxcd.cProtect = false
                this.PI_currencycd.cValidate = 'required'
                this.$refs.ref_currencycd.isRequired = true
                this.PI_fixamt.cProtect = false
                this.PI_taxbasepercent.cProtect = false
                this.PI_stampduty.cProtect = false
                this.PI_allocpriority.cProtect = false
                // this.PI_amortizestatus.cProtect = true
                // this.PI_amortizemethod.cProtect = false  //\
                if(data.journaltype == 'I'){
                    this.PI_amortizemethod.cProtect = true  //\
                    this.PI_amortizestatus.cProtect = true
                }
                else if(data.journaltype == 'D'){
                    this.PI_amortizemethod.cProtect = false
                    this.PI_amortizestatus.cProtect = false
                }
                this.PI_gltrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false

                }
                else if ( data.trxclass == 'C') {
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_debtorcreditorprefixcd.cProtect = false
                this.PI_debtorcreditorvataccountcd.cProtect = true
                this.PI_debtorcreditorvatprefixcd.cProtect = true
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = true

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = true
                this.PI_underpaymentprefixcd.cProtect = true
                this.PI_overpaymentaccountcd.cProtect = true
                this.PI_overpaymentprefixcd.cProtect = true

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = true
                this.PI_roundingaccountcd.cProtect = true

                this.PI_journaltype.cProtect = true
                this.PI_journalcategory.cProtect = true
                this.PI_currencycd.cProtect = true
                this.PI_taxcd.cProtect = true
                this.PI_currencycd.cValidate = ''
                this.$refs.ref_currencycd.isRequired = false
                this.PI_fixamt.cProtect = true
                this.PI_taxbasepercent.cProtect = true
                this.PI_stampduty.cProtect = true
                this.PI_penaltystatus.cProtect = true
                this.PI_amortizestatus.cProtect = true
                this.PI_amortizemethod.cProtect = false  //\
                this.PI_gltrxtype.cProtect = false 
                this.PI_glamortizationtrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false

                } 
                else if ( data.trxclass == 'M') {
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_debtorcreditorprefixcd.cProtect = true
                this.PI_debtorcreditorvataccountcd.cProtect = true
                this.PI_debtorcreditorvatprefixcd.cProtect = true
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = true

                this.PI_advanceaccountcd.cProtect = false
                this.PI_advanceprefixcd.cProtect = false
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = false
                this.PI_underpaymentprefixcd.cProtect = false
                this.PI_overpaymentaccountcd.cProtect = false
                this.PI_overpaymentprefixcd.cProtect = false

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = false
                this.PI_roundingaccountcd.cProtect = false

                this.PI_journaltype.cProtect = true
                this.PI_journalcategory.cProtect = true
                this.PI_currencycd.cProtect = true
                this.PI_taxcd.cProtect = true
                this.PI_currencycd.cValidate = ''
                this.$refs.ref_currencycd.isRequired = false
                this.PI_fixamt.cProtect = true
                this.PI_taxbasepercent.cProtect = true
                this.PI_stampduty.cProtect = true
                this.PI_penaltystatus.cProtect = true

                this.PI_allocpriority.cProtect = false
                this.PI_amortizestatus.cProtect = true
                this.PI_amortizemethod.cProtect = false  //\
                this.PI_gltrxtype.cProtect = false 
                this.PI_glamortizationtrxtype.cProtect = false
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false
                this.PI_penaltystatus.cProtect = true
                
                
                } 
                else if ( data.trxclass == 'P') {
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_debtorcreditorprefixcd.cProtect = false
                this.PI_debtorcreditorvataccountcd.cProtect = false
                this.PI_debtorcreditorvatprefixcd.cProtect = false
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = false
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = false

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = true
                this.PI_underpaymentprefixcd.cProtect = true
                this.PI_overpaymentaccountcd.cProtect = true
                this.PI_overpaymentprefixcd.cProtect = true

                this.PI_incomeexpenseaccountcd.cProtect = false
                this.PI_incomeexpenseprefixcd.cProtect = false
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = true
                this.PI_roundingaccountcd.cProtect = true

                this.PI_journaltype.cProtect = true
                this.PI_journalcategory.cProtect = false
                this.PI_currencycd.cProtect = false
                this.PI_taxcd.cProtect = false
                this.PI_currencycd.cValidate = ''
                this.$refs.ref_currencycd.isRequired = false
                this.PI_fixamt.cProtect = true
                this.PI_taxbasepercent.cProtect = true
                this.PI_stampduty.cProtect = false

                this.PI_amortizestatus.cProtect = true
                this.PI_amortizemethod.cProtect = true
                this.PI_allocpriority.cProtect = false
                this.PI_gltrxtype.cProtect = false 
                this.PI_glamortizationtrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false
                this.PI_penaltystatus.cProtect = true

                }
                else if ( data.trxclass == 'T') {
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_debtorcreditorprefixcd.cProtect = false
                this.PI_debtorcreditorvataccountcd.cProtect = true
                this.PI_debtorcreditorvatprefixcd.cProtect = true
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = true

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = false
                this.PI_depositprefixcd.cProtect = false
                this.PI_underpaymentaccountcd.cProtect = true
                this.PI_underpaymentprefixcd.cProtect = true
                this.PI_overpaymentaccountcd.cProtect = true
                this.PI_overpaymentprefixcd.cProtect = true

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = true
                this.PI_roundingaccountcd.cProtect = true

                this.PI_journaltype.cProtect = false
                this.PI_journalcategory.cProtect = false
                this.PI_currencycd.cProtect = false
                this.PI_taxcd.cProtect = true
                this.PI_currencycd.cValidate = 'required'
                this.$refs.ref_currencycd.isRequired = true
                this.PI_fixamt.cProtect = true
                this.PI_taxbasepercent.cProtect = true
                this.PI_stampduty.cProtect = false

                this.PI_allocpriority.cProtect = false
                // this.PI_amortizestatus.cProtect = true
                if(data.journaltype == 'I'){
                    this.PI_amortizemethod.cProtect = true  //\
                    this.PI_amortizestatus.cProtect = true
                }
                else if(data.journaltype == 'D'){
                    this.PI_amortizemethod.cProtect = false
                    this.PI_amortizestatus.cProtect = false
                }
                this.PI_gltrxtype.cProtect = false 
                this.PI_glamortizationrunningcd.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false
                this.PI_penaltystatus.cProtect = false

                }
                else if ( data.trxclass == 'S') {
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_debtorcreditorprefixcd.cProtect = true
                this.PI_debtorcreditorvataccountcd.cProtect = true
                this.PI_debtorcreditorvatprefixcd.cProtect = true
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = true

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = false
                this.PI_depositprefixcd.cProtect = false
                this.PI_underpaymentaccountcd.cProtect = false
                this.PI_underpaymentprefixcd.cProtect = false
                this.PI_overpaymentaccountcd.cProtect = false
                this.PI_overpaymentprefixcd.cProtect = false

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = false
                this.PI_roundingaccountcd.cProtect = false

                this.PI_journaltype.cProtect = true
                this.PI_journalcategory.cProtect = true
                this.PI_currencycd.cProtect = true
                this.PI_taxcd.cProtect = true
                this.PI_currencycd.cValidate = ''
                this.$refs.ref_currencycd.isRequired = false
                this.PI_fixamt.cProtect = true
                this.PI_taxbasepercent.cProtect = true
                this.PI_stampduty.cProtect = true

                this.PI_allocpriority.cProtect = false
                this.PI_amortizestatus.cProtect = true
                this.PI_amortizemethod.cProtect = false  //\
                this.PI_glamortizationtrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false

                }
                else if ( data.trxclass == 'A') {
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_debtorcreditorprefixcd.cProtect = true
                this.PI_debtorcreditorvataccountcd.cProtect = true
                this.PI_debtorcreditorvatprefixcd.cProtect = true
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = true

                this.PI_advanceaccountcd.cProtect = false
                this.PI_advanceprefixcd.cProtect = false
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = true
                this.PI_underpaymentprefixcd.cProtect = true
                this.PI_overpaymentaccountcd.cProtect = true
                this.PI_overpaymentprefixcd.cProtect = true

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = true
                this.PI_roundingaccountcd.cProtect = true

                this.PI_journaltype.cProtect = true
                this.PI_journalcategory.cProtect = true
                this.PI_currencycd.cProtect = true
                this.PI_taxcd.cProtect = true
                this.PI_currencycd.cValidate = ''
                this.$refs.ref_currencycd.isRequired = false
                this.PI_fixamt.cProtect = true
                this.PI_taxbasepercent.cProtect = true
                this.PI_stampduty.cProtect = true
                this.PI_penaltystatus.cProtect = true

                this.PI_allocpriority.cProtect = false
                this.PI_amortizestatus.cProtect = true
                this.PI_amortizemethod.cProtect = false  //\
                this.PI_glamortizationtrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_arstraightlineaccountcd.cKey = false
                this.PI_incomestraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cKey = false

                }
                else if ( data.trxclass == 'R') {
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_debtorcreditorprefixcd.cProtect = true
                this.PI_debtorcreditorvataccountcd.cProtect = true
                this.PI_debtorcreditorvatprefixcd.cProtect = true
                this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                this.PI_debtorcreditorwithholdingprefixcd.cProtect = true

                this.PI_advanceaccountcd.cProtect = true
                this.PI_advanceprefixcd.cProtect = true
                this.PI_depositaccountcd.cProtect = true
                this.PI_depositprefixcd.cProtect = true
                this.PI_underpaymentaccountcd.cProtect = false
                this.PI_underpaymentprefixcd.cProtect = false
                this.PI_overpaymentaccountcd.cProtect = false
                this.PI_overpaymentprefixcd.cProtect = false

                this.PI_incomeexpenseaccountcd.cProtect = true
                this.PI_incomeexpenseprefixcd.cProtect = true
                this.PI_defferedaccountcd.cProtect = true
                this.PI_defferedprefixcd.cProtect = true

                this.PI_roundingprefixcd.cProtect = false
                this.PI_roundingaccountcd.cProtect = false
                this.PI_journaltype.cProtect = true
                this.PI_journalcategory.cProtect = true
                this.PI_currencycd.cProtect = false
                this.PI_taxcd.cProtect = false
                this.PI_currencycd.cValidate = 'required'
                this.$refs.ref_currencycd.isRequired = true
                this.PI_fixamt.cProtect = false
                this.PI_taxbasepercent.cProtect = false
                this.PI_stampduty.cProtect = true
                this.PI_allocpriority.cProtect = false
                this.PI_penaltystatus.cProtect = true
                this.PI_amortizestatus.cProtect = true
                this.PI_amortizemethod.cProtect = false  //\
                this.PI_gltrxtype.cProtect = false 
                this.PI_glamortizationrunningcd.cProtect = false 
                this.PI_glamortizationtrxtype.cProtect = false 
                this.PI_arstraightlineaccountcd.cProtect = false
                this.PI_incomestraightlineaccountcd.cProtect = false

                }
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
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

