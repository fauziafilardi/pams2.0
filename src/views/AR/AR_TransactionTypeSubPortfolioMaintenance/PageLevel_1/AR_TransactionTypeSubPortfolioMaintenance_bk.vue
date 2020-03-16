<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      @rowClicked = "rowClicked"
      @rowDblClicked = "doDoubleClick"
      @rowLinkClick = "rowLink"
      @pageSize = "M_PageSize"
      @pagination = "M_Pagination"
      @filter = "M_Advance_Filter"
      @headTable = "M_Head_Table"
    />


        <div v-show="$parent.isDetail"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
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
                                <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col md="6">
                                        <!-- <ABSCompute :prop="PI_trxtype" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.trxtype" /> -->
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_descs" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.descs" /> -->
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_shortdescs" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.shortdescs" /> -->
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_trxtypegroupcd" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.trxtypegroupcd" /> -->
                                        <ABSinputTextVuex :prop="PI_trxtypegroupcd" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.trxtypegroupcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <!-- <ABSCompute :prop="PI_trxclass" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.trxclass" /> -->
                                        <ABSinputTextVuex :prop="PI_trxclass" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.trxclass"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.runningcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnglamortizationrunningcdChange" :prop="PI_glamortizationrunningcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_journaltype" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.journaltype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_amortizestatus" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.amortizestatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OngltrxtypeChange" :prop="PI_gltrxtype" :value="M_AR_TransactionTypeSubPortfolioMaintenance.gltrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_amortizemethod" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.amortizemethod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnglamortizationtrxtypeChange" :prop="PI_glamortizationtrxtype" :value="M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_journalcategory" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.journalcategory" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnindirectrunningcdChange" :prop="PI_indirectrunningcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.indirectrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_fixamt" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.fixamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.taxcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxbasepercent" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.taxbasepercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocpriority" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.allocpriority"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_stampduty" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.stampduty" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_status" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OndebtorcreditorprefixcdChange" :prop="PI_debtorcreditorprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditoraccountcdChange" :prop="PI_debtorcreditoraccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditoraccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OndebtorcreditorvatprefixcdChange" :prop="PI_debtorcreditorvatprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvatprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorvataccountcdChange" :prop="PI_debtorcreditorvataccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvataccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OndebtorcreditorwithholdingprefixcdChange" :prop="PI_debtorcreditorwithholdingprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorwithholdingaccountcdChange" :prop="PI_debtorcreditorwithholdingaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnadvanceprefixcdChange" :prop="PI_advanceprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.advanceprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnadvanceaccountcdChange" :prop="PI_advanceaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.advanceaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OndepositprefixcdChange" :prop="PI_depositprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.depositprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndepositaccountcdChange" :prop="PI_depositaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.depositaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnunderpaymentprefixcdChange" :prop="PI_underpaymentprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnunderpaymentaccountcdChange" :prop="PI_underpaymentaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnoverpaymentprefixcdChange" :prop="PI_overpaymentprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnoverpaymentaccountcdChange" :prop="PI_overpaymentaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnincomeexpenseprefixcdChange" :prop="PI_incomeexpenseprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnincomeexpenseaccountcdChange" :prop="PI_incomeexpenseaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OndefferedprefixcdChange" :prop="PI_defferedprefixcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.defferedprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndefferedaccountcdChange" :prop="PI_defferedaccountcd" :value="M_AR_TransactionTypeSubPortfolioMaintenance.defferedaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_penaltystatus" v-model="M_AR_TransactionTypeSubPortfolioMaintenance.penaltystatus" />
                                      </b-col>
                                    </b-row>
                                </b-col>
                  
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		FormType: "List",
		Module:"AR",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_TransactionTypeSubPortfolioMaintenance :{
                trxtype: '',
                modulecd: '',
                amortizemethod: '',
                descs: '',
                shortdescs: '',
                trxclass: '',
                runningcd: '',
                glamortizationrunningcd: '',
                journaltype: '',
                amortizestatus: '',
                journalcategory: '',
                indirectrunningcd: '',
                gltrxtype: '',
                glamortizationtrxtype: '',
                glmodulecd: '',
                currencycd: '',
                fixamt: '0',
                taxcd: '',
                taxbasepercent: '0',
                allocpriority: '0',
                stampduty: '',
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
                trxtypegroupcd: '',
                status: '',
                dueday: 0,
                arstraightlineaccountcd: '',
                incomestraightlineaccountcd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            // PI_trxtype: { 
            //     cLabel:'Trans. Type', 
            //     cValue:'', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            // }, 
            // PI_descs: { 
            //     cLabel:'Description', 
            //     cValue:'', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            // }, 
            // PI_shortdescs: { 
            //     cLabel:'Short Description', 
            //     cValue:'', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            // }, 
            // PI_trxtypegroupcd: { 
            //     cLabel:'Trans. Type Group', 
            //     cValue:'', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            // }, 
            // PI_trxclass: { 
            //     cLabel:'Trans. Class', 
            //     cValue:'', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            // },

            PI_trxtype: { 
                cValidate :'required', 
                cName:'trxtype', 
                cLabel:'trxtype', 
                cOrder:0, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            },
            PI_descs: { 
                cValidate :'required', 
                cName:'descs', 
                cLabel:'descs', 
                cOrder:0, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            },
            PI_shortdescs: { 
                cValidate :'required', 
                cName:'shortdescs', 
                cLabel:'shortdescs', 
                cOrder:0, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            },
            PI_trxtypegroupcd: { 
                cValidate :'required', 
                cName:'trxtypegroupcd', 
                cLabel:'trxtypegroupcd', 
                cOrder:0, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            },
            PI_trxclass: { 
                cValidate :'required', 
                cName:'trxclass', 
                cLabel:'trxclass', 
                cOrder:0, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            },
            
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetRunningCd'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'runningcd', 
                cLabel:'Trans. Running Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_RunningCd' ,
                cDisplayColumn:'RunningCd' ,
            }, 
            PI_glamortizationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'glamortizationrunningcd', 
                cLabel:'Amortization Running Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_RunningCd' ,
                cDisplayColumn:'RunningCd,Descs' ,
            }, 
            PI_journaltype: { 
                cValidate :'', 
                cName:'journaltype', 
                cId:'rdbjournaltype', 
                cRadioOptions: [{ text: 'Income', value: 'I' }, { text: 'Deffered', value: 'D' }], 
                cLabel:'JournalType', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizestatus: { 
                cValidate :'', 
                cName:'amortizestatus', 
                cId:'rdbamortizestatus', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Auto', value: 'A' }], 
                cLabel:'AmortizeStatus', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_gltrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'gltrxtype', 
                cLabel:'GL Trans. Type', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_TransactionType' ,
                cDisplayColumn:'TrxType,Descs' ,
            }, 
            PI_amortizemethod: { 
                cValidate :'', 
                cName:'amortizemethod', 
                cId:'rdbamortizemethod', 
                cRadioOptions: [{ text: 'Full Month', value: 'F' },{ text: 'Cut Off Date', value: 'C' },], 
                cLabel:'Amortize Method', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_glamortizationtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'glamortizationtrxtype', 
                cLabel:'GL Amortization Trans.Type', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_TransactionType' ,
                cDisplayColumn:'TrxType,Descs' ,
            }, 
            PI_journalcategory: { 
                cValidate :'', 
                cName:'journalcategory', 
                cId:'rdbjournalcategory', 
                cRadioOptions: [{ text: 'Direct', value: 'D' }, { text: 'Indirect', value: 'I' }], 
                cLabel:'JournalCategory', 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_indirectrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'indirectrunningcd', 
                cLabel:'Indirect Running Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_RunningCd' ,
                cDisplayColumn:'RunningCd,Descs' ,
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'currencycd', 
                cLabel:'Currency', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_Currency' ,
                cDisplayColumn:'CurrencyCd,Descs' ,
            },
            PI_fixamt: { 
                cValidate :'required', 
                cName:'fixamt', 
                cLabel:'fixamt', 
                cOrder:0, 
                cKey:false, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName:'taxcd', 
                cLabel:'Tax', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_TaxSubportfolio' ,
                cDisplayColumn:'TaxCd,TranslatedCategory' ,
            }, 
            PI_taxbasepercent: { 
                cValidate :'required', 
                cName:'taxbasepercent', 
                cLabel:'Tax Based', 
                cOrder:0, 
                cKey:false, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocpriority: { 
                cValidate :'required', 
                cName:'allocpriority', 
                cLabel:'Allocation Priority', 
                cOrder:0, 
                cKey:false, 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_stampduty: { 
                cValidate :'', 
                cName:'stampduty', 
                cId:'rdbstampduty', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cLabel:'StampDuty', 
                cOrder:0, 
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
                cName:'credittermscd', 
                cLabel:'Credit Terms', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'CM/CM_CreditTerms' ,
                cDisplayColumn:'CreditTermsCd,Descs' ,
            }, 
            PI_status: { 
                cValidate :'', 
                cName:'status', 
                cId:'rdbstatus', 
                cRadioOptions: [{ text: 'Active', value: 'A' }, { text: 'Non Active', value: 'N' }], 
                cLabel:'Status', 
                cOrder:0, 
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
                cName:'debtorcreditorprefixcd', 
                cLabel:'AR Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditoraccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'debtorcreditoraccountcd', 
                cLabel:'AR Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_debtorcreditorvatprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'debtorcreditorvatprefixcd', 
                cLabel:'AR VAT Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditorvataccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'debtorcreditorvataccountcd', 
                cLabel:'AR VAT Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_debtorcreditorwithholdingprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'debtorcreditorwithholdingprefixcd', 
                cLabel:'AR Withholding Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditorwithholdingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'debtorcreditorwithholdingaccountcd', 
                cLabel:'AR Withholding Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_advanceprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'advanceprefixcd', 
                cLabel:'Advance Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_advanceaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'advanceaccountcd', 
                cLabel:'Advance Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_depositprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'depositprefixcd', 
                cLabel:'Deposit Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_depositaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'depositaccountcd', 
                cLabel:'Deposit Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_underpaymentprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'underpaymentprefixcd', 
                cLabel:'Under Payment Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_underpaymentaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'underpaymentaccountcd', 
                cLabel:'Under Payment Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_overpaymentprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'overpaymentprefixcd', 
                cLabel:'Over Payment Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_overpaymentaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'overpaymentaccountcd', 
                cLabel:'Over Payment Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_incomeexpenseprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'incomeexpenseprefixcd', 
                cLabel:'Income Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_incomeexpenseaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'incomeexpenseaccountcd', 
                cLabel:'Income Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_defferedprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'defferedprefixcd', 
                cLabel:'Deffered Account Prefix', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn:'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_defferedaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName:'defferedaccountcd', 
                cLabel:'Deffered Account Code', 
                cKey:false, 
                cOrder:0, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cMasterUrl:'GL/GL_ChartOfAccount' ,
                cDisplayColumn:'AccountCd,Descs1' ,
            }, 
            PI_penaltystatus: { 
                cValidate :'', 
                cName:'penaltystatus', 
                cId:'rdbpenaltystatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cLabel:'PenaltyStatus', 
                cOrder:0, 
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
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.runningcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.runningcdLabel = data.label
//{runningcd}
        })
        this.$forceUpdate()
        },
        OnglamortizationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationrunningcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationrunningcdLabel = data.label
//{glamortizationrunningcd}
        })
        this.$forceUpdate()
        },
        OngltrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.gltrxtype = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.gltrxtypeLabel = data.label
//{gltrxtype}
        })
        this.$forceUpdate()
        },
        OnglamortizationtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationtrxtype = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationtrxtypeLabel = data.label
//{glamortizationtrxtype}
        })
        this.$forceUpdate()
        },
        OnindirectrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.indirectrunningcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.indirectrunningcdLabel = data.label
//{indirectrunningcd}
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.currencycd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.currencycdLabel = data.label
//{currencycd}
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.taxcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.taxcdLabel = data.label
//{taxcd}
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.credittermscd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.credittermscdLabel = data.label
//{credittermscd}
        })
        this.$forceUpdate()
        },
        OndebtorcreditorprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorprefixcdLabel = data.label
//{debtorcreditorprefixcd}
        })
        this.$forceUpdate()
        },
        OndebtorcreditoraccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditoraccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditoraccountcdLabel = data.label
//{debtorcreditoraccountcd}
        })
        this.$forceUpdate()
        },
        OndebtorcreditorvatprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvatprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvatprefixcdLabel = data.label
//{debtorcreditorvatprefixcd}
        })
        this.$forceUpdate()
        },
        OndebtorcreditorvataccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvataccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvataccountcdLabel = data.label
//{debtorcreditorvataccountcd}
        })
        this.$forceUpdate()
        },
        OndebtorcreditorwithholdingprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingprefixcdLabel = data.label
//{debtorcreditorwithholdingprefixcd}
        })
        this.$forceUpdate()
        },
        OndebtorcreditorwithholdingaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingaccountcdLabel = data.label
//{debtorcreditorwithholdingaccountcd}
        })
        this.$forceUpdate()
        },
        OnadvanceprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceprefixcdLabel = data.label
//{advanceprefixcd}
        })
        this.$forceUpdate()
        },
        OnadvanceaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceaccountcdLabel = data.label
//{advanceaccountcd}
        })
        this.$forceUpdate()
        },
        OndepositprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.depositprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.depositprefixcdLabel = data.label
//{depositprefixcd}
        })
        this.$forceUpdate()
        },
        OndepositaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.depositaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.depositaccountcdLabel = data.label
//{depositaccountcd}
        })
        this.$forceUpdate()
        },
        OnunderpaymentprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentprefixcdLabel = data.label
//{underpaymentprefixcd}
        })
        this.$forceUpdate()
        },
        OnunderpaymentaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentaccountcdLabel = data.label
//{underpaymentaccountcd}
        })
        this.$forceUpdate()
        },
        OnoverpaymentprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentprefixcdLabel = data.label
//{overpaymentprefixcd}
        })
        this.$forceUpdate()
        },
        OnoverpaymentaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentaccountcdLabel = data.label
//{overpaymentaccountcd}
        })
        this.$forceUpdate()
        },
        OnincomeexpenseprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseprefixcdLabel = data.label
//{incomeexpenseprefixcd}
        })
        this.$forceUpdate()
        },
        OnincomeexpenseaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseaccountcdLabel = data.label
//{incomeexpenseaccountcd}
        })
        this.$forceUpdate()
        },
        OndefferedprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedprefixcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedprefixcdLabel = data.label
//{defferedprefixcd}
        })
        this.$forceUpdate()
        },
        OndefferedaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedaccountcd = data.id
            this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedaccountcdLabel = data.label
//{defferedaccountcd}
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
		},
        M_Head_Table () {
            this.$store.commit('setEventStatus', 'HEADTABLE')
            this.$store.commit('setLevel',this.PageLevel)
            this.$parent.isDetail = false
            this.FormToMasterPage().ValidasiPage()
        },
        M_PageSize(){
			this.$store.commit('setEventStatus', 'PAGESIZE')
            this.$store.commit('setLevel',this.PageLevel)
            this.$parent.isDetail = false
            this.FormToMasterPage().ValidasiPage()
        },
        M_TabClick(){
        },
        M_Pagination(){
			this.$store.commit('setEventStatus', 'PAGINATION')
            this.$store.commit('setLevel',this.PageLevel)
            this.$parent.isDetail = false
            this.FormToMasterPage().ValidasiPage()
        },
        M_Advance_Filter(){
        },
        M_Search(data){
            this.$store.commit('setEventStatus', 'ONSEARCHENTER')
            this.$store.commit('setLevel',this.PageLevel)
            this.$parent.isDetail = false
            this.FormToMasterPage().ValidasiPage()
            this.FormToABSList().doGetList(data,'eb_getList')
        },
        M_Post(){
        },
        M_Refresh(){
        },
		doDoubleClick(){
        },
        SaveData () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.FormToABSList().doGetList('','save')

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setListDisable', false)
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')
                    this.FormToABSList().doGetList('','eb_getList')
                    this.$parent.isDetail = false

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        UpdateData () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: this.M_AR_TransactionTypeSubPortfolioMaintenance.trxtype,
                ModuleCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.modulecd,
                RunningCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.runningcd,
                GLAmortizationRunningCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationrunningcd,
                JournalType: this.ARFieldHelper.JOURNAL_TYPE_INCOME,
                AmortizeMethod: this.M_AR_TransactionTypeSubPortfolioMaintenance.amortizemethod,
                AmortizeStatus: this.ARFieldHelper.AMORTIZE_STATUS_MANUAL,
                JournalCategory: this.ARFieldHelper.JOURNAL_CATEGORY_INDIRECT,
                IndirectRunningCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.indirectrunningcd,
                GLTrxType: this.M_AR_TransactionTypeSubPortfolioMaintenance.gltrxtype,
                GLAmortizationTrxType: this.M_AR_TransactionTypeSubPortfolioMaintenance.glamortizationtrxtype,
                GLModuleCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.glmodulecd,
                CurrencyCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.currencycd,
                FixAmt: this.M_AR_TransactionTypeSubPortfolioMaintenance.fixamt,
                TaxCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.taxcd,
                TaxBasePercent: this.M_AR_TransactionTypeSubPortfolioMaintenance.taxbasepercent,
                AllocPriority: this.M_AR_TransactionTypeSubPortfolioMaintenance.allocpriority,
                StampDuty: this.M_AR_TransactionTypeSubPortfolioMaintenance.stampduty,
                CreditTermsCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.credittermscd,
                DebtorCreditorAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditoraccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditoraccountcd,
                DebtorCreditorPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorprefixcd,
                AdvanceAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceaccountcd,
                AdvancePrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.advanceprefixcd,
                DepositAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.depositaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.depositaccountcd,
                DepositPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.depositprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.depositprefixcd,
                UnderPaymentAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentaccountcd,
                UnderPaymentPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.underpaymentprefixcd,
                OverPaymentAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentaccountcd,
                OverPaymentPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.overpaymentprefixcd,
                IncomeExpenseAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseaccountcd,
                IncomeExpensePrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.incomeexpenseprefixcd,
                DefferedAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedaccountcd,
                DefferedPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.defferedprefixcd,
                RoundingAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.roundingaccountcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.roundingaccountcd,
                RoundingPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.roundingprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.roundingprefixcd,
                PenaltyStatus: this.M_AR_TransactionTypeSubPortfolioMaintenance.penaltystatus,
                Status: this.ARFieldHelper.TRANSACTION_TYPE_STATUS_NOT_ACTIVE,
                DebtorCreditorVATAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvataccountcd,
                DebtorCreditorWithholdingAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingaccountcd,
                DebtorCreditorVATPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvatprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorvatprefixcd,
                DebtorCreditorWithholdingPrefixCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingprefixcd == null ? 'NULL' : this.M_AR_TransactionTypeSubPortfolioMaintenance.debtorcreditorwithholdingprefixcd,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_TransactionTypeSubPortfolioMaintenance.lastupdatestamp,
                ARStraightLineAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.arstraightlineaccountcd,
                IncomeStraightLineAccountCd: this.M_AR_TransactionTypeSubPortfolioMaintenance.incomestraightlineaccountcd                
            }
            console.log(param)

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setListDisable', false)
                    this.$store.commit('setStatus', 'view')

                    this.FormToABSList().doGetList('','update')
                    this.$parent.isDetail = false

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })

        },
		m_ClearForm(){
            this.M_AR_TransactionTypeSubPortfolioMaintenance = {
                trxtype: '',
                modulecd: '',
                amortizemethod: '',
                descs: '',
                shortdescs: '',
                trxclass: '',
                runningcd: '',
                glamortizationrunningcd: '',
                journaltype: '',
                amortizestatus: '',
                journalcategory: '',
                indirectrunningcd: '',
                gltrxtype: '',
                glamortizationtrxtype: '',
                glmodulecd: '',
                currencycd: '',
                fixamt: '0',
                taxcd: '',
                taxbasepercent: '0',
                allocpriority: '0',
                stampduty: '',
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
                trxtypegroupcd: '',
                status: '',
                dueday: 0,
                arstraightlineaccountcd: '',
                incomestraightlineaccountcd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            this.$parent.state = 'NEW'
			this.m_ClearForm()

            this.FormToMasterPage().ValidasiPage()
            this.$parent.isDetail = true
			

            //this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Edit(){
            //this.$nextTick().then(() => document.getElementById("???").focus())
        },
        M_Delete(){
        },
        M_Save(){
            if(this.inputStatus == 'EDIT')
			{			
                this.UpdateData()			
            }
            else 
			{
                this.SaveData()
            }        
        },
        paramFromParent(){

        },
		M_Cancel() {},
        rowClicked (record, index) {
            this.$parent.state = 'UPDATE'
			this.$parent.isDetail = true
            this.$store.commit('SetPage1Data', record)
            this.$store.commit('setEventStatus', 'rowClick')
            this.$store.commit('setLevel',this.PageLevel)
            this.getDataBy(record)
            

            this.FormToMasterPage().ValidasiPage()
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                subportfoliocd: this.getDataUser().SubPortfolioCd,
                modulecd: record.ModuleCd,
                trxtype: record.TrxType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_TransactionTypeSubPortfolioMaintenance = {
                trxtype: data.TrxType,
                modulecd: data.ModuleCd,
                amortizemethod: data.AmortizeMethod,
                descs: data.Descs,
                shortdescs: data.ShortDescs,
                trxclass: data.TrxClass,
                runningcd: data.RunningCd,
                glamortizationrunningcd: data.GLAmortizationRunningCd,
                journaltype: data.JournalType,
                amortizestatus: data.AmortizeStatus,
                journalcategory: data.JournalCategory,
                indirectrunningcd: data.IndirectRunningCd,
                gltrxtype: data.GLTrxType,
                glamortizationtrxtype: data.GLAmortizationTrxType,
                glmodulecd: data.GLModuleCd,
                currencycd: data.CurrencyCd,
                fixamt: data.FixAmt,
                taxcd: data.TaxCd,
                taxbasepercent: data.TaxBasePercent,
                allocpriority: data.AllocPriority,
                stampduty: data.StampDuty,
                credittermscd: data.CreditTermsCd,
                debtorcreditoraccountcd: data.DebtorCreditorAccountCd,
                debtorcreditorprefixcd: data.DebtorCreditorPrefixCd,
                advanceaccountcd: data.AdvanceAccountCd,
                advanceprefixcd: data.AdvancePrefixCd,
                depositaccountcd: data.DepositAccountCd,
                depositprefixcd: data.DepositPrefixCd,
                underpaymentaccountcd: data.UnderPaymentAccountCd,
                underpaymentprefixcd: data.UnderPaymentPrefixCd,
                overpaymentaccountcd: data.OverPaymentAccountCd,
                overpaymentprefixcd: data.OverPaymentPrefixCd,
                incomeexpenseaccountcd: data.IncomeExpenseAccountCd,
                incomeexpenseprefixcd: data.IncomeExpensePrefixCd,
                defferedaccountcd: data.DefferedAccountCd,
                defferedprefixcd: data.DefferedPrefixCd,
                roundingaccountcd: data.RoundingAccountCd,
                roundingprefixcd: data.RoundingPrefixCd,
                penaltystatus: data.PenaltyStatus,
                debtorcreditorvataccountcd: data.DebtorCreditorVATAccountCd,
                debtorcreditorwithholdingaccountcd: data.DebtorCreditorWithholdingAccountCd,
                debtorcreditorvatprefixcd: data.DebtorCreditorVATPrefixCd,
                debtorcreditorwithholdingprefixcd: data.DebtorCreditorWithholdingPrefixCd,
                predefinedjournalcd: data.PreDefinedJournalCd,
                linedescs: data.LineDescs,
                nextperiodreversal: data.NextPeriodReversal,
                currencycontrol: data.CurrencyControl,
                allowchangetanalysis: data.AllowChangeTAnalysis,
                t0: data.T0,
                t1: data.T1,
                t2: data.T2,
                t3: data.T3,
                t4: data.T4,
                t5: data.T5,
                t6: data.T6,
                t7: data.T7,
                t8: data.T8,
                t9: data.T9,
                t10: data.T10,
                t11: data.T11,
                t12: data.T12,
                t13: data.T13,
                t14: data.T14,
                t15: data.T15,
                t16: data.T16,
                t17: data.T17,
                t18: data.T18,
                t19: data.T19,
                t20: data.T20,
                t21: data.T21,
                t22: data.T22,
                t23: data.T23,
                t24: data.T24,
                t25: data.T25,
                t26: data.T26,
                t27: data.T27,
                t28: data.T28,
                t29: data.T29,
                t30: data.T30,
                remarks: data.Remarks,
                userinput: data.UserInput,
                useredit: data.UserEdit,
                trxtypegroupcd: data.TrxTypeGroupCd,
                status: data.Status,
                dueday: data.DueDay,
                arstraightlineaccountcd: data.ARStraightLineAccountCd,
                incomestraightlineaccountcd: data.IncomeStraightLineAccountCd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.RowId
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

