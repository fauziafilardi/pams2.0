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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_AP_TransactionTypeMaster.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_TransactionTypeMaster.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_AP_TransactionTypeMaster.shortdescs"  ref="ref_shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypegroupcdChange" :prop="PI_trxtypegroupcd" v-model="M_AP_TransactionTypeMaster.trxtypegroupcd" :label="M_AP_TransactionTypeMaster.trxtypegroupcdLabel" ref="ref_trxtypegroupcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OntrxclassChange" :prop="PI_trxclass" :value="M_AP_TransactionTypeMaster.trxclass" :label="M_AP_TransactionTypeMaster.trxclassLabel"  ref="ref_trxclass"/>
                                      </b-col>
                                    </b-row>
                                   
                                    <b-row>
                                        <b-col md="6">
                                            <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_AP_TransactionTypeMaster.runningcd" :label="M_AP_TransactionTypeMaster.runningcdLabel" ref="ref_runningcd"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputSelectList @change="OnglamortizationrunningcdChange" :prop="PI_glamortizationrunningcd" :value="M_AP_TransactionTypeMaster.glamortizationrunningcd" :label="M_AP_TransactionTypeMaster.glamortizationrunningcdLabel" ref="ref_glamortizationrunningcd"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournaltypeChange" :prop="PI_journaltype" v-model="M_AP_TransactionTypeMaster.journaltype"  ref="ref_journaltype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngltrxtypeChange" :prop="PI_gltrxtype" :value="M_AP_TransactionTypeMaster.gltrxtype" :label="M_AP_TransactionTypeMaster.gltrxtypeLabel" ref="ref_gltrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnglamortizationtrxtypeChange" :prop="PI_glamortizationtrxtype" :value="M_AP_TransactionTypeMaster.glamortizationtrxtype" :label="M_AP_TransactionTypeMaster.glamortizationtrxtypeLabel" ref="ref_glamortizationtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxbasepercent" v-model="M_AP_TransactionTypeMaster.taxbasepercent"  ref="ref_taxbasepercent"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_allocpriority" v-model="M_AP_TransactionTypeMaster.allocpriority"  ref="ref_allocpriority"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_AP_TransactionTypeMaster.currencycd" :label="M_AP_TransactionTypeMaster.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_AP_TransactionTypeMaster.taxcd" :label="M_AP_TransactionTypeMaster.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                  
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Account Prefix / Account Code
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorprefixcdChange" :prop="PI_debtorcreditorprefixcd" :value="M_AP_TransactionTypeMaster.debtorcreditorprefixcd" :label="M_AP_TransactionTypeMaster.debtorcreditorprefixcdLabel" ref="ref_debtorcreditorprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditoraccountcdChange" :prop="PI_debtorcreditoraccountcd" :value="M_AP_TransactionTypeMaster.debtorcreditoraccountcd" :label="M_AP_TransactionTypeMaster.debtorcreditoraccountcdLabel" ref="ref_debtorcreditoraccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorvatprefixcdChange" :prop="PI_debtorcreditorvatprefixcd" :value="M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd" :label="M_AP_TransactionTypeMaster.debtorcreditorvatprefixcdLabel" ref="ref_debtorcreditorvatprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorvataccountcdChange" :prop="PI_debtorcreditorvataccountcd" :value="M_AP_TransactionTypeMaster.debtorcreditorvataccountcd" :label="M_AP_TransactionTypeMaster.debtorcreditorvataccountcdLabel" ref="ref_debtorcreditorvataccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorwithholdingprefixcdChange" :prop="PI_debtorcreditorwithholdingprefixcd" :value="M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd" :label="M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcdLabel" ref="ref_debtorcreditorwithholdingprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndebtorcreditorwithholdingaccountcdChange" :prop="PI_debtorcreditorwithholdingaccountcd" :value="M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd" :label="M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcdLabel" ref="ref_debtorcreditorwithholdingaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnadvanceprefixcdChange" :prop="PI_advanceprefixcd" :value="M_AP_TransactionTypeMaster.advanceprefixcd" :label="M_AP_TransactionTypeMaster.advanceprefixcdLabel" ref="ref_advanceprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnadvanceaccountcdChange" :prop="PI_advanceaccountcd" :value="M_AP_TransactionTypeMaster.advanceaccountcd" :label="M_AP_TransactionTypeMaster.advanceaccountcdLabel" ref="ref_advanceaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndepositprefixcdChange" :prop="PI_depositprefixcd" :value="M_AP_TransactionTypeMaster.depositprefixcd" :label="M_AP_TransactionTypeMaster.depositprefixcdLabel" ref="ref_depositprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndepositaccountcdChange" :prop="PI_depositaccountcd" :value="M_AP_TransactionTypeMaster.depositaccountcd" :label="M_AP_TransactionTypeMaster.depositaccountcdLabel" ref="ref_depositaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnunderpaymentprefixcdChange" :prop="PI_underpaymentprefixcd" :value="M_AP_TransactionTypeMaster.underpaymentprefixcd" :label="M_AP_TransactionTypeMaster.underpaymentprefixcdLabel" ref="ref_underpaymentprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnunderpaymentaccountcdChange" :prop="PI_underpaymentaccountcd" :value="M_AP_TransactionTypeMaster.underpaymentaccountcd" :label="M_AP_TransactionTypeMaster.underpaymentaccountcdLabel" ref="ref_underpaymentaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnoverpaymentprefixcdChange" :prop="PI_overpaymentprefixcd" :value="M_AP_TransactionTypeMaster.overpaymentprefixcd" :label="M_AP_TransactionTypeMaster.overpaymentprefixcdLabel" ref="ref_overpaymentprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnoverpaymentaccountcdChange" :prop="PI_overpaymentaccountcd" :value="M_AP_TransactionTypeMaster.overpaymentaccountcd" :label="M_AP_TransactionTypeMaster.overpaymentaccountcdLabel" ref="ref_overpaymentaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnincomeexpenseprefixcdChange" :prop="PI_incomeexpenseprefixcd" :value="M_AP_TransactionTypeMaster.incomeexpenseprefixcd" :label="M_AP_TransactionTypeMaster.incomeexpenseprefixcdLabel" ref="ref_incomeexpenseprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnincomeexpenseaccountcdChange" :prop="PI_incomeexpenseaccountcd" :value="M_AP_TransactionTypeMaster.incomeexpenseaccountcd" :label="M_AP_TransactionTypeMaster.incomeexpenseaccountcdLabel" ref="ref_incomeexpenseaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndefferedprefixcdChange" :prop="PI_defferedprefixcd" :value="M_AP_TransactionTypeMaster.defferedprefixcd" :label="M_AP_TransactionTypeMaster.defferedprefixcdLabel" ref="ref_defferedprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndefferedaccountcdChange" :prop="PI_defferedaccountcd" :value="M_AP_TransactionTypeMaster.defferedaccountcd" :label="M_AP_TransactionTypeMaster.defferedaccountcdLabel" ref="ref_defferedaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditoraccruedprefixcdChange" :prop="PI_creditoraccruedprefixcd" :value="M_AP_TransactionTypeMaster.creditoraccruedprefixcd" :label="M_AP_TransactionTypeMaster.creditoraccruedprefixcdLabel" ref="ref_creditoraccruedprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OncreditoraccruedaccountcdChange" :prop="PI_creditoraccruedaccountcd" :value="M_AP_TransactionTypeMaster.creditoraccruedaccountcd" :label="M_AP_TransactionTypeMaster.creditoraccruedaccountcdLabel" ref="ref_creditoraccruedaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">                                        
                                        <ABSInputSelectList @change="OnroundingprefixcdChange" :prop="PI_roundingprefixcd" :value="M_AP_TransactionTypeMaster.roundingprefixcd" :label="M_AP_TransactionTypeMaster.roundingprefixcdLabel" ref="ref_roundingprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnroundingaccountcdChange" :prop="PI_roundingaccountcd" :value="M_AP_TransactionTypeMaster.roundingaccountcd" :label="M_AP_TransactionTypeMaster.roundingaccountcdLabel" ref="ref_roundingaccountcd"/>
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
		FormType: "List",
		Module:"AP",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

             M_AP_TransactionTypeMaster :{
                shortdescs: '',
                trxclass: 'I',
                currencycddescs: '',
                descs: '',
                trxtypegroupcd: '',
                trxtype: '',
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
                creditoraccruedaccountcd: '',
                creditoraccruedprefixcd: '',
                runningcd: '',
                currencycd: '',
                debtorcreditorvataccountcd: '',
                debtorcreditorwithholdingaccountcd: '',
                debtorcreditorvatprefixcd: '',
                debtorcreditorwithholdingprefixcd: '',
                taxbasepercent: '100',
                gltrxtype: '',
                allocpriority: '9',
                glamortizationrunningcd: '',
                glamortizationtrxtype: '',
                taxcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                journaltype: 'E',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_trxtype: { 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_shortdescs: { 
                cValidate :'', 
                cName: 'shortdescs', 
                cLabel: 'Short Description', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxtypegroupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTrxTypeGroup'    , 
                    ColumnDB: 'TrxTypeGroupCd'   , 
                    InitialWhere: "(ModuleCd is NULL OR ModuleCd = 'AP')"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'', 
                cName: 'trxtypegroupcd', 
                cLabel: 'Trans. Type Group', 
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
                cMasterUrl: 'AP/AP_TransTypeSubportfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
             PI_trxclass: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'trxclass', 
                cLabel: 'Trans. Class', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'I', 
                cProtect: false, 
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
                    { label: 'Deposit', id: 'S' },
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
                    InitialWhere: "ModuleCd IS NULL	OR ModuleCd = 'AP'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'RunningCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Trans. Running Code', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            },
            PI_glamortizationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "ModuleCd IS NULL	OR ModuleCd = 'AP'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'RunningCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'glamortizationrunningcd', 
                cLabel: 'Amortization Running Code', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            },
            PI_journaltype: { 
                cValidate :'', 
                cName: 'journaltype', 
                cId: 'rdbjournaltype', 
                cRadioOptions: [{ text: 'Expense', value: 'E' }, { text: 'Prepaid', value: 'D' }], 
                cRadioDefaultOption: 'E', 
                cLabel:'Invoice Journal Type', 
                cLabelSize: 4, 
                cDefault: '', 
                cOrder: 5, 
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
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'', 
                cName: 'gltrxtype', 
                cLabel: 'GL Trans. Type', 
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
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_glamortizationtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TransactionType,Descs' 
                        }, 
                cValidate :'', 
                cName: 'glamortizationtrxtype', 
                cLabel: 'GL Amort Trans. Type', 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_taxbasepercent: { 
                cValidate :'required', 
                cName: 'taxbasepercent', 
                cLabel: 'Tax Based', 
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
            PI_allocpriority: { 
                cValidate :'required|max:1', 
                cName: 'allocpriority', 
                cLabel: 'Allocation Priority', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'CurrencyCd,Descs' 
                        }, 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_taxcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'TaxCd, Descs' 
                        }, 
                cValidate :'', 
                cName: 'taxcd', 
                cLabel: 'Tax', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
   
            PI_debtorcreditorprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorprefixcd', 
                cLabel: 'AP Account Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditoraccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'debtorcreditoraccountcd', 
                cLabel: 'AP Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_debtorcreditorvatprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorvatprefixcd', 
                cLabel: 'AP VAT Account Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditorvataccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description_1' 
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorvataccountcd', 
                cLabel: 'AP VAT Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_debtorcreditorwithholdingprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorwithholdingprefixcd', 
                cLabel: 'AP Withholding Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_debtorcreditorwithholdingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description_1' 
                        }, 
                cValidate :'', 
                cName: 'debtorcreditorwithholdingaccountcd', 
                cLabel: 'AP Withholding Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 18, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_advanceprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'advanceprefixcd', 
                cLabel: 'Advance Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 19, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_advanceaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'advanceaccountcd', 
                cLabel: 'Advance Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_depositprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'depositprefixcd', 
                cLabel: 'Deposit Account Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_depositaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'depositaccountcd', 
                cLabel: 'Deposit Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_underpaymentprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'underpaymentprefixcd', 
                cLabel: 'Under Payment Account Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_underpaymentaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'underpaymentaccountcd', 
                cLabel: 'Under Payment Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_overpaymentprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'overpaymentprefixcd', 
                cLabel: 'Over Payment Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 25, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_overpaymentaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'overpaymentaccountcd', 
                cLabel: 'Over Payment Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 26, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_incomeexpenseprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'incomeexpenseprefixcd', 
                cLabel: 'Expense Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 27, 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_incomeexpenseaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'incomeexpenseaccountcd', 
                cLabel: 'Expense Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 28, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_defferedprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'defferedprefixcd', 
                cLabel: 'Prepaid Account Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_defferedaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'defferedaccountcd', 
                cLabel: 'Prepaid Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 30, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_creditoraccruedprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'PrefixCd,ChartOfAccountPrefix' 
                        }, 
                cValidate :'', 
                cName: 'creditoraccruedprefixcd', 
                cLabel: 'Goods On Order Account Prefix', 
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
                cMasterUrl: 'GL/GL_SubmoduleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_creditoraccruedaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'creditoraccruedaccountcd', 
                cLabel: 'Goods On Order Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 
            PI_roundingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'roundingaccountcd', 
                cLabel: 'Rounding Correction Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            },
            PI_roundingprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: 'AccountCd,Description' 
                        }, 
                cValidate :'', 
                cName: 'roundingprefixcd', 
                cLabel: 'Rounding Correction Account Prefix', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description' ,
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
         OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.runningcd = data.id
            this.M_AP_TransactionTypeMaster.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OnglamortizationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.glamortizationrunningcd = data.id
            this.M_AP_TransactionTypeMaster.glamortizationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {

            }
            })
            this.$forceUpdate()
        },
        OntrxclassChange (data){            
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.ChangeTransactionClass(data.id)
            }
            })
            this.$forceUpdate()
        },	
        OntrxtypegroupcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.trxtypegroupcd = data.id
            this.M_AP_TransactionTypeMaster.trxtypegroupcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypegroupcd}
            }
        })
        this.$forceUpdate()
        },
        OnjournaltypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journaltype}
            }
        })
        this.$forceUpdate()
        },
        OngltrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.gltrxtype = data.id
            this.M_AP_TransactionTypeMaster.gltrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{gltrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnglamortizationtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.glamortizationtrxtype = data.id
            this.M_AP_TransactionTypeMaster.glamortizationtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glamortizationtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.currencycd = data.id
            this.M_AP_TransactionTypeMaster.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.taxcd = data.id
            this.M_AP_TransactionTypeMaster.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd = data.id
            this.M_AP_TransactionTypeMaster.debtorcreditorprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditoraccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd = data.id
            this.M_AP_TransactionTypeMaster.debtorcreditoraccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditoraccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorvatprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd = data.id
            this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorvatprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorvataccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd = data.id
            this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorvataccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorwithholdingprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd = data.id
            this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorwithholdingprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcreditorwithholdingaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd = data.id
            this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditorwithholdingaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnadvanceprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.advanceprefixcd = data.id
            this.M_AP_TransactionTypeMaster.advanceprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{advanceprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnadvanceaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.advanceaccountcd = data.id
            this.M_AP_TransactionTypeMaster.advanceaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{advanceaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndepositprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.depositprefixcd = data.id
            this.M_AP_TransactionTypeMaster.depositprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{depositprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndepositaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.depositaccountcd = data.id
            this.M_AP_TransactionTypeMaster.depositaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{depositaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnunderpaymentprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.underpaymentprefixcd = data.id
            this.M_AP_TransactionTypeMaster.underpaymentprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{underpaymentprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnunderpaymentaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.underpaymentaccountcd = data.id
            this.M_AP_TransactionTypeMaster.underpaymentaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{underpaymentaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnoverpaymentprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.overpaymentprefixcd = data.id
            this.M_AP_TransactionTypeMaster.overpaymentprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{overpaymentprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnoverpaymentaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.overpaymentaccountcd = data.id
            this.M_AP_TransactionTypeMaster.overpaymentaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{overpaymentaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnincomeexpenseprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd = data.id
            this.M_AP_TransactionTypeMaster.incomeexpenseprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{incomeexpenseprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnincomeexpenseaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd = data.id
            this.M_AP_TransactionTypeMaster.incomeexpenseaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{incomeexpenseaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OndefferedprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.defferedprefixcd = data.id
            this.M_AP_TransactionTypeMaster.defferedprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndefferedaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.defferedaccountcd = data.id
            this.M_AP_TransactionTypeMaster.defferedaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OncreditoraccruedprefixcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd = data.id
            this.M_AP_TransactionTypeMaster.creditoraccruedprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditoraccruedprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OncreditoraccruedaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd = data.id
            this.M_AP_TransactionTypeMaster.creditoraccruedaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditoraccruedaccountcd}
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
		M_CheckboxChecked(data, status, index){

        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TrxType: this.M_AP_TransactionTypeMaster.trxtype,
                Descs: this.M_AP_TransactionTypeMaster.descs,
                ShortDescs: this.M_AP_TransactionTypeMaster.shortdescs,
                TrxTypeGroupCd: this.M_AP_TransactionTypeMaster.trxtypegroupcd == '' || this.M_AP_TransactionTypeMaster.trxtypegroupcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.trxtypegroupcd,
                TrxClass: this.M_AP_TransactionTypeMaster.trxclass,
                DebtorCreditorAccountCd: this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd ,
                DebtorCreditorPrefixCd: this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd ,
                AdvanceAccountCd: this.M_AP_TransactionTypeMaster.advanceaccountcd == '' || this.M_AP_TransactionTypeMaster.advanceaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.advanceaccountcd ,
                AdvancePrefixCd: this.M_AP_TransactionTypeMaster.advanceprefixcd == '' || this.M_AP_TransactionTypeMaster.advanceprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.advanceprefixcd ,
                DepositAccountCd: this.M_AP_TransactionTypeMaster.depositaccountcd == '' || this.M_AP_TransactionTypeMaster.depositaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.depositaccountcd ,
                DepositPrefixCd: this.M_AP_TransactionTypeMaster.depositprefixcd == '' || this.M_AP_TransactionTypeMaster.depositprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.depositprefixcd ,
                UnderPaymentAccountCd: this.M_AP_TransactionTypeMaster.underpaymentaccountcd == '' || this.M_AP_TransactionTypeMaster.underpaymentaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.underpaymentaccountcd ,
                UnderPaymentPrefixCd: this.M_AP_TransactionTypeMaster.underpaymentprefixcd == '' || this.M_AP_TransactionTypeMaster.underpaymentprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.underpaymentprefixcd ,
                OverPaymentAccountCd: this.M_AP_TransactionTypeMaster.overpaymentaccountcd == '' || this.M_AP_TransactionTypeMaster.overpaymentaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.overpaymentaccountcd ,
                OverPaymentPrefixCd: this.M_AP_TransactionTypeMaster.overpaymentprefixcd == '' || this.M_AP_TransactionTypeMaster.overpaymentprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.overpaymentprefixcd ,
                IncomeExpenseAccountCd: this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd == '' || this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd ,
                IncomeExpensePrefixCd: this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd == '' || this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd ,
                DefferedAccountCd: this.M_AP_TransactionTypeMaster.defferedaccountcd == '' || this.M_AP_TransactionTypeMaster.defferedaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.defferedaccountcd ,
                DefferedPrefixCd: this.M_AP_TransactionTypeMaster.defferedprefixcd == '' || this.M_AP_TransactionTypeMaster.defferedprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.defferedprefixcd ,
                RoundingAccountCd: this.M_AP_TransactionTypeMaster.roundingaccountcd == '' || this.M_AP_TransactionTypeMaster.roundingaccountcd == null ? 'NULL' :this.M_AP_TransactionTypeMaster.roundingaccountcd,
                RoundingPrefixCd: this.M_AP_TransactionTypeMaster.roundingprefixcd == '' || this.M_AP_TransactionTypeMaster.roundingprefixcd == null ? 'NULL' :this.M_AP_TransactionTypeMaster.roundingprefixcd,
                CreditorAccruedAccountCd: this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd == '' || this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd ,
                CreditorAccruedPrefixCd: this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd == '' || this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd ,
                RunningCd: this.M_AP_TransactionTypeMaster.runningcd == '' || this.M_AP_TransactionTypeMaster.runningcd == null ? 'NULL' :this.M_AP_TransactionTypeMaster.runningcd,
                GLAmortizationRunningCd: this.M_AP_TransactionTypeMaster.glamortizationrunningcd == '' || this.M_AP_TransactionTypeMaster.glamortizationrunningcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.glamortizationrunningcd ,
                TaxBasePercent: this.M_AP_TransactionTypeMaster.taxbasepercent,
                GLTrxType: this.M_AP_TransactionTypeMaster.gltrxtype == '' || this.M_AP_TransactionTypeMaster.gltrxtype == null ? 'NULL' : this.M_AP_TransactionTypeMaster.gltrxtype ,
                GLAmortizationTrxType: this.M_AP_TransactionTypeMaster.glamortizationtrxtype == '' || this.M_AP_TransactionTypeMaster.glamortizationtrxtype == null ? 'NULL' : this.M_AP_TransactionTypeMaster.glamortizationtrxtype ,
                CurrencyCd: this.M_AP_TransactionTypeMaster.currencycd == '' || this.M_AP_TransactionTypeMaster.currencycd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.currencycd ,
                TaxCd: this.M_AP_TransactionTypeMaster.taxcd == '' || this.M_AP_TransactionTypeMaster.taxcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.taxcd ,
                DebtorCreditorVATAccountCd: this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd ,
                DebtorCreditorWithholdingAccountCd: this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd ,
                DebtorCreditorVATPrefixCd: this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd ,
                DebtorCreditorWithholdingPrefixCd: this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd ,
                UserInput: this.getDataUser().UserId ,
                JournalType: this.M_AP_TransactionTypeMaster.journaltype,
                AllocPriority: this.M_AP_TransactionTypeMaster.allocpriority                
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
                TrxType: this.M_AP_TransactionTypeMaster.trxtype,
                Descs: this.M_AP_TransactionTypeMaster.descs,
                ShortDescs: this.M_AP_TransactionTypeMaster.shortdescs,
                TrxClass: this.M_AP_TransactionTypeMaster.trxclass,
                TrxTypeGroupCd: this.M_AP_TransactionTypeMaster.trxtypegroupcd == '' || this.M_AP_TransactionTypeMaster.trxtypegroupcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.trxtypegroupcd,
                DebtorCreditorAccountCd: this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd ,
                DebtorCreditorPrefixCd: this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd ,
                AdvanceAccountCd: this.M_AP_TransactionTypeMaster.advanceaccountcd == '' || this.M_AP_TransactionTypeMaster.advanceaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.advanceaccountcd ,
                AdvancePrefixCd: this.M_AP_TransactionTypeMaster.advanceprefixcd == '' || this.M_AP_TransactionTypeMaster.advanceprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.advanceprefixcd ,
                DepositAccountCd: this.M_AP_TransactionTypeMaster.depositaccountcd == '' || this.M_AP_TransactionTypeMaster.depositaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.depositaccountcd ,
                DepositPrefixCd: this.M_AP_TransactionTypeMaster.depositprefixcd == '' || this.M_AP_TransactionTypeMaster.depositprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.depositprefixcd ,
                UnderPaymentAccountCd: this.M_AP_TransactionTypeMaster.underpaymentaccountcd == '' || this.M_AP_TransactionTypeMaster.underpaymentaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.underpaymentaccountcd ,
                UnderPaymentPrefixCd: this.M_AP_TransactionTypeMaster.underpaymentprefixcd == '' || this.M_AP_TransactionTypeMaster.underpaymentprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.underpaymentprefixcd ,
                OverPaymentAccountCd: this.M_AP_TransactionTypeMaster.overpaymentaccountcd == '' || this.M_AP_TransactionTypeMaster.overpaymentaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.overpaymentaccountcd ,
                OverPaymentPrefixCd: this.M_AP_TransactionTypeMaster.overpaymentprefixcd == '' || this.M_AP_TransactionTypeMaster.overpaymentprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.overpaymentprefixcd ,
                IncomeExpenseAccountCd: this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd == '' || this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd ,
                IncomeExpensePrefixCd: this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd == '' || this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd ,
                DefferedAccountCd: this.M_AP_TransactionTypeMaster.defferedaccountcd == '' || this.M_AP_TransactionTypeMaster.defferedaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.defferedaccountcd ,
                DefferedPrefixCd: this.M_AP_TransactionTypeMaster.defferedprefixcd == '' || this.M_AP_TransactionTypeMaster.defferedprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.defferedprefixcd ,
                RoundingAccountCd: this.M_AP_TransactionTypeMaster.roundingaccountcd == '' || this.M_AP_TransactionTypeMaster.roundingaccountcd == null ? 'NULL' :this.M_AP_TransactionTypeMaster.roundingaccountcd,
                RoundingPrefixCd: this.M_AP_TransactionTypeMaster.roundingprefixcd == '' || this.M_AP_TransactionTypeMaster.roundingprefixcd == null ? 'NULL' :this.M_AP_TransactionTypeMaster.roundingprefixcd,
                CreditorAccruedAccountCd: this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd == '' || this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd ,
                CreditorAccruedPrefixCd: this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd == '' || this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd ,
                RunningCd: this.M_AP_TransactionTypeMaster.runningcd == '' || this.M_AP_TransactionTypeMaster.runningcd == null ? 'NULL' :this.M_AP_TransactionTypeMaster.runningcd,
                GLAmortizationRunningCd: this.M_AP_TransactionTypeMaster.glamortizationrunningcd == '' || this.M_AP_TransactionTypeMaster.glamortizationrunningcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.glamortizationrunningcd ,
                CurrencyCd: this.M_AP_TransactionTypeMaster.currencycd == '' || this.M_AP_TransactionTypeMaster.currencycd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.currencycd ,
                DebtorCreditorVATAccountCd: this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd ,
                DebtorCreditorWithholdingAccountCd: this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd ,
                DebtorCreditorVATPrefixCd: this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd ,
                DebtorCreditorWithholdingPrefixCd: this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == '' || this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd ,
                TaxCd: this.M_AP_TransactionTypeMaster.taxcd == '' || this.M_AP_TransactionTypeMaster.taxcd == null ? 'NULL' : this.M_AP_TransactionTypeMaster.taxcd ,
                TaxBasePercent: this.M_AP_TransactionTypeMaster.taxbasepercent,
                GLTrxType: this.M_AP_TransactionTypeMaster.gltrxtype == '' || this.M_AP_TransactionTypeMaster.gltrxtype == null ? 'NULL' : this.M_AP_TransactionTypeMaster.gltrxtype ,
                GLAmortizationTrxType: this.M_AP_TransactionTypeMaster.glamortizationtrxtype == '' || this.M_AP_TransactionTypeMaster.glamortizationtrxtype == null ? 'NULL' : this.M_AP_TransactionTypeMaster.glamortizationtrxtype ,
                UserEdit: this.getDataUser().UserId ,
                JournalType: this.M_AP_TransactionTypeMaster.journaltype,
                AllocPriority: this.M_AP_TransactionTypeMaster.allocpriority,
                LastUpdateStamp: this.M_AP_TransactionTypeMaster.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AP_TransactionTypeMaster = {
                currencydescs: '',
                trxtypegroupcd: '',
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
                creditoraccruedaccountcd: '',
                creditoraccruedprefixcd: '',
                trxtype: '',
                descs: '',
                shortdescs: '',
                trxclass: 'I',
                runningcd: '',
                currencycd: '',
                debtorcreditorvataccountcd: '',
                debtorcreditorwithholdingaccountcd: '',
                debtorcreditorvatprefixcd: '',
                debtorcreditorwithholdingprefixcd: '',
                taxbasepercent: '100',
                gltrxtype: '',
                journaltype: 'E',
                userinput: '',
                useredit: this.getDataUser().UserId,
                glamortizationtrxtype: '',
                allocpriority: '9',
                glamortizationrunningcd: '',
                taxcd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            	
	
		},
        M_New(){
            this.M_AP_TransactionTypeMaster.trxclass = 'I' // default invoice
			this.ChangeTransactionClass(this.M_AP_TransactionTypeMaster.trxclass)
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
					_Message_:'',
                    TrxType: value.TrxType,
                    LastUpdateStamp: value.LastUpdateStamp,


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
                LineNo: this.$parent.data.PageOrder,
                trxtype: record.TrxType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                 var data = response.Data[0]
this.M_AP_TransactionTypeMaster = {
                shortdescs: data.shortdescs,
                trxclass: data.trxclass,
                currencycddescs: data.currencycddescs,
                descs: data.descs,
                trxtypegroupcd: data.trxtypegroupcd,
                trxtype: data.trxtype,
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
                roundingprefixcd: data.roundingprefixcd,
                creditoraccruedaccountcd: data.creditoraccruedaccountcd,
                creditoraccruedprefixcd: data.creditoraccruedprefixcd,
                runningcd: data.runningcd,
                currencycd: data.currencycd,
                debtorcreditorvataccountcd: data.debtorcreditorvataccountcd,
                debtorcreditorwithholdingaccountcd: data.debtorcreditorwithholdingaccountcd,
                debtorcreditorvatprefixcd: data.debtorcreditorvatprefixcd,
                debtorcreditorwithholdingprefixcd: data.debtorcreditorwithholdingprefixcd,
                taxbasepercent: this.isCurrency(data.taxbasepercent, this.decimal),
                gltrxtype: data.gltrxtype,
                allocpriority: data.allocpriority,
                glamortizationrunningcd: data.glamortizationrunningcd,
                glamortizationtrxtype: data.glamortizationtrxtype,
                taxcd: data.taxcd,
                userinput: data.userinput,
                useredit: data.useredit,
                journaltype: data.journaltype,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                
                this.M_AP_TransactionTypeMaster.roundingaccountcdLabel = this.M_AP_TransactionTypeMaster.roundingaccountcd != null && this.M_AP_TransactionTypeMaster.roundingaccountcd != '' ? data.roundingaccountcd + this.separator + data.roundingaccountcddescs: ''
                this.M_AP_TransactionTypeMaster.roundingprefixcdLabel = this.M_AP_TransactionTypeMaster.roundingprefixcd != null && this.M_AP_TransactionTypeMaster.roundingprefixcd != '' ? data.roundingprefixcd + this.separator + data.roundingprefixcddescs: ''
                this.M_AP_TransactionTypeMaster.gltrxtypeLabel = this.M_AP_TransactionTypeMaster.gltrxtype != null && this.M_AP_TransactionTypeMaster.gltrxtype != '' ? data.gltrxtype + this.separator + data.gltrxtypedescs:'' 
                this.M_AP_TransactionTypeMaster.glamortizationtrxtypeLabel = this.M_AP_TransactionTypeMaster.glamortizationtrxtype != null && this.M_AP_TransactionTypeMaster.glamortizationtrxtype != '' ? data.glamortizationtrxtype + this.separator + data.glamortizationtrxtypedescs :'' 
                this.M_AP_TransactionTypeMaster.currencycdLabel = this.M_AP_TransactionTypeMaster.currencycd != null && this.M_AP_TransactionTypeMaster.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_AP_TransactionTypeMaster.taxcdLabel = this.M_AP_TransactionTypeMaster.taxcd != null && this.M_AP_TransactionTypeMaster.taxcd != '' ? data.taxcd + this.separator + data.taxcddescs :'' 
                this.M_AP_TransactionTypeMaster.debtorcreditorprefixcdLabel = this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd != null && this.M_AP_TransactionTypeMaster.debtorcreditorprefixcd != '' ? data.debtorcreditorprefixcd + this.separator + data.debtorcreditorprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.debtorcreditoraccountcdLabel = this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd != null && this.M_AP_TransactionTypeMaster.debtorcreditoraccountcd != '' ? data.debtorcreditoraccountcd + this.separator + data.debtorcreditoraccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcdLabel = this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd != null && this.M_AP_TransactionTypeMaster.debtorcreditorvatprefixcd != '' ? data.debtorcreditorvatprefixcd + this.separator + data.debtorcreditorvatprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcdLabel = this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd != null && this.M_AP_TransactionTypeMaster.debtorcreditorvataccountcd != '' ? data.debtorcreditorvataccountcd + this.separator +data.debtorcreditorvataccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcdLabel = this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd != null && this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingprefixcd != '' ? data.debtorcreditorwithholdingprefixcd + this.separator + data.debtorcreditorwithholdingprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcdLabel = this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd != null && this.M_AP_TransactionTypeMaster.debtorcreditorwithholdingaccountcd != '' ? data.debtorcreditorwithholdingaccountcd + this.separator + data.debtorcreditorwithholdingaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.advanceprefixcdLabel = this.M_AP_TransactionTypeMaster.advanceprefixcd != null && this.M_AP_TransactionTypeMaster.advanceprefixcd != '' ? data.advanceprefixcd + this.separator + data.advanceprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.advanceaccountcdLabel = this.M_AP_TransactionTypeMaster.advanceaccountcd != null && this.M_AP_TransactionTypeMaster.advanceaccountcd != '' ? data.advanceaccountcd + this.separator + data.advanceaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.depositprefixcdLabel = this.M_AP_TransactionTypeMaster.depositprefixcd != null && this.M_AP_TransactionTypeMaster.depositprefixcd != '' ? data.depositprefixcd + this.separator + data.depositprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.depositaccountcdLabel = this.M_AP_TransactionTypeMaster.depositaccountcd != null && this.M_AP_TransactionTypeMaster.depositaccountcd != '' ? data.depositaccountcd + this.separator + data.depositaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.underpaymentprefixcdLabel = this.M_AP_TransactionTypeMaster.underpaymentprefixcd != null && this.M_AP_TransactionTypeMaster.underpaymentprefixcd != '' ? data.underpaymentprefixcd + this.separator + data.underpaymentprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.underpaymentaccountcdLabel = this.M_AP_TransactionTypeMaster.underpaymentaccountcd != null && this.M_AP_TransactionTypeMaster.underpaymentaccountcd != '' ? data.underpaymentaccountcd + this.separator + data.underpaymentaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.overpaymentprefixcdLabel = this.M_AP_TransactionTypeMaster.overpaymentprefixcd != null && this.M_AP_TransactionTypeMaster.overpaymentprefixcd != '' ? data.overpaymentprefixcd + this.separator + data.overpaymentprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.overpaymentaccountcdLabel = this.M_AP_TransactionTypeMaster.overpaymentaccountcd != null && this.M_AP_TransactionTypeMaster.overpaymentaccountcd != '' ? data.overpaymentaccountcd + this.separator + data.overpaymentaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.incomeexpenseprefixcdLabel = this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd != null && this.M_AP_TransactionTypeMaster.incomeexpenseprefixcd != '' ? data.incomeexpenseprefixcd + this.separator + data.incomeexpenseprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.incomeexpenseaccountcdLabel = this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd != null && this.M_AP_TransactionTypeMaster.incomeexpenseaccountcd != '' ? data.incomeexpenseaccountcd + this.separator + data.incomeexpenseaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.defferedprefixcdLabel = this.M_AP_TransactionTypeMaster.defferedprefixcd != null && this.M_AP_TransactionTypeMaster.defferedprefixcd != '' ? data.defferedprefixcd + this.separator + data.defferedprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.defferedaccountcdLabel = this.M_AP_TransactionTypeMaster.defferedaccountcd != null && this.M_AP_TransactionTypeMaster.defferedaccountcd != '' ? data.defferedaccountcd + this.separator + data.defferedaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.creditoraccruedprefixcdLabel = this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd != null && this.M_AP_TransactionTypeMaster.creditoraccruedprefixcd != '' ? data.creditoraccruedprefixcd + this.separator + data.creditoraccruedprefixcddescs :'' 
                this.M_AP_TransactionTypeMaster.creditoraccruedaccountcdLabel = this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd != null && this.M_AP_TransactionTypeMaster.creditoraccruedaccountcd != '' ? data.creditoraccruedaccountcd + this.separator + data.creditoraccruedaccountcddescs :'' 
                this.M_AP_TransactionTypeMaster.runningcdLabel = this.M_AP_TransactionTypeMaster.runningcd != null && this.M_AP_TransactionTypeMaster.runningcd != '' ? data.runningcd + this.separator + data.runningcddescs :'' 
                this.M_AP_TransactionTypeMaster.glamortizationrunningcdLabel = this.M_AP_TransactionTypeMaster.glamortizationrunningcd != null && this.M_AP_TransactionTypeMaster.glamortizationrunningcd != '' ? data.glamortizationrunningcd + this.separator + data.glamortizationrunningcddescs :'' 
                this.M_AP_TransactionTypeMaster.trxtypegroupcdLabel = this.M_AP_TransactionTypeMaster.trxtypegroupcd != null && this.M_AP_TransactionTypeMaster.trxtypegroupcd != '' ? data.trxtypegroupcd :'' 

                this.ChangeTransactionClass(data.trxclass)
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,ChangeTransactionClass(trxclass) {
              switch (trxclass) {
                case 'I':

                    this.PI_currencycd.cProtect = false
                    this.PI_taxcd.cProtect = false
                    this.PI_taxcd.cValidate = ''
                    this.PI_allocpriority.cProtect = false
                    this.PI_allocpriority.cValidate = ''
                    this.PI_taxbasepercent.cProtect = false
                    this.PI_taxbasepercent.cValidate = ''
                    this.PI_journaltype.cProtect = false


                    this.PI_debtorcreditoraccountcd.cProtect = false
                    this.PI_debtorcreditorprefixcd.cProtect = false
                    this.PI_debtorcreditorvatprefixcd.cProtect = false
                    this.PI_debtorcreditorvataccountcd.cProtect = false
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = false
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = false
                    
                    this.PI_advanceaccountcd.cProtect = true
                    this.PI_advanceprefixcd.cProtect = true

                    this.PI_depositprefixcd.cProtect = true
                    this.PI_depositaccountcd.cProtect = true

                    this.PI_underpaymentaccountcd.cProtect = true
                    this.PI_underpaymentprefixcd.cProtect = true

                    this.PI_overpaymentprefixcd.cProtect = true
                    this.PI_overpaymentaccountcd.cProtect = true

                    this.PI_incomeexpenseaccountcd.cProtect = false
                    this.PI_incomeexpenseprefixcd.cProtect = false

                    this.PI_defferedprefixcd.cProtect = false
                    this.PI_defferedaccountcd.cProtect = false

                    this.PI_roundingaccountcd.cProtect = true
                    this.PI_roundingprefixcd.cProtect = true

                    this.PI_creditoraccruedaccountcd.cProtect = false
                    this.PI_creditoraccruedprefixcd.cProtect = false
                    break;

                case 'D':

                    this.PI_currencycd.cProtect = true
                    this.PI_taxcd.cProtect = true
                    this.PI_taxcd.cValidate = ''
                    this.PI_allocpriority.cProtect = true
                    this.PI_allocpriority.cValidate = ''
                    this.PI_taxbasepercent.cProtect = true
                    this.PI_taxbasepercent.cValidate = ''
                    this.PI_journaltype.cProtect = true


                    this.PI_debtorcreditoraccountcd.cProtect = false
                    this.PI_debtorcreditorprefixcd.cProtect = false
                    this.PI_debtorcreditorvatprefixcd.cProtect = true
                    this.PI_debtorcreditorvataccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = true
                    
                    this.PI_advanceaccountcd.cProtect = true
                    this.PI_advanceprefixcd.cProtect = true

                    this.PI_depositprefixcd.cProtect = true
                    this.PI_depositaccountcd.cProtect = true

                    this.PI_underpaymentaccountcd.cProtect = true
                    this.PI_underpaymentprefixcd.cProtect = true

                    this.PI_overpaymentprefixcd.cProtect = true
                    this.PI_overpaymentaccountcd.cProtect = true

                    this.PI_incomeexpenseaccountcd.cProtect = true
                    this.PI_incomeexpenseprefixcd.cProtect = true

                    this.PI_defferedprefixcd.cProtect = true
                    this.PI_defferedaccountcd.cProtect = true

                    this.PI_roundingaccountcd.cProtect = true
                    this.PI_roundingprefixcd.cProtect = true

                    this.PI_creditoraccruedaccountcd.cProtect = true
                    this.PI_creditoraccruedprefixcd.cProtect = true
                    break;

                case 'C':

                
                    this.PI_currencycd.cProtect = false
                    this.PI_taxcd.cProtect = false
                    this.PI_allocpriority.cProtect = false
                    this.PI_allocpriority.cValidate = 'required'
                    this.PI_taxbasepercent.cProtect = false
                    this.PI_taxbasepercent.cValidate = 'required'
                    this.PI_journaltype.cProtect = true


                    this.PI_debtorcreditoraccountcd.cProtect = false
                    this.PI_debtorcreditorprefixcd.cProtect = false
                    this.PI_debtorcreditorvatprefixcd.cProtect = false
                    this.PI_debtorcreditorvataccountcd.cProtect = false
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = false
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = false
                    
                    this.PI_advanceaccountcd.cProtect = true
                    this.PI_advanceprefixcd.cProtect = true

                    this.PI_depositprefixcd.cProtect = true
                    this.PI_depositaccountcd.cProtect = true

                    this.PI_underpaymentaccountcd.cProtect = true
                    this.PI_underpaymentprefixcd.cProtect = true

                    this.PI_overpaymentprefixcd.cProtect = true
                    this.PI_overpaymentaccountcd.cProtect = true

                    this.PI_incomeexpenseaccountcd.cProtect = true
                    this.PI_incomeexpenseprefixcd.cProtect = true

                    this.PI_defferedprefixcd.cProtect = true
                    this.PI_defferedaccountcd.cProtect = true

                    this.PI_roundingaccountcd.cProtect = true
                    this.PI_roundingprefixcd.cProtect = true

                    this.PI_creditoraccruedaccountcd.cProtect = true
                    this.PI_creditoraccruedprefixcd.cProtect = true
                    break;
                case 'M':

                    this.PI_currencycd.cProtect = true
                    this.PI_taxcd.cProtect = true
                    this.PI_taxcd.cValidate = ''
                    this.PI_allocpriority.cProtect = true
                    this.PI_allocpriority.cValidate = ''
                    this.PI_taxbasepercent.cProtect = true
                    this.PI_taxbasepercent.cValidate = ''
                    this.PI_journaltype.cProtect = true


                    this.PI_debtorcreditoraccountcd.cProtect = true
                    this.PI_debtorcreditorprefixcd.cProtect = true
                    this.PI_debtorcreditorvatprefixcd.cProtect = true
                    this.PI_debtorcreditorvataccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = true
                    
                    this.PI_advanceaccountcd.cProtect = true
                    this.PI_advanceprefixcd.cProtect = true

                    this.PI_depositprefixcd.cProtect = true
                    this.PI_depositaccountcd.cProtect = true

                    this.PI_underpaymentaccountcd.cProtect = false
                    this.PI_underpaymentprefixcd.cProtect = false

                    this.PI_overpaymentprefixcd.cProtect = false
                    this.PI_overpaymentaccountcd.cProtect = false

                    this.PI_incomeexpenseaccountcd.cProtect = true
                    this.PI_incomeexpenseprefixcd.cProtect = true

                    this.PI_defferedprefixcd.cProtect = true
                    this.PI_defferedaccountcd.cProtect = true

                    this.PI_roundingaccountcd.cProtect = false
                    this.PI_roundingprefixcd.cProtect = false

                    this.PI_creditoraccruedaccountcd.cProtect = true
                    this.PI_creditoraccruedprefixcd.cProtect = true
                    break;
                case 'S':
                    this.PI_currencycd.cProtect = true
                    this.PI_taxcd.cProtect = true
                    this.PI_taxcd.cValidate = ''
                    this.PI_allocpriority.cProtect = true
                    this.PI_allocpriority.cValidate = ''
                    this.PI_taxbasepercent.cProtect = true
                    this.PI_taxbasepercent.cValidate = ''
                    this.PI_journaltype.cProtect = true

                //'Disable Debtor, Advance, Under, Over, Income, Deffered
                    this.PI_debtorcreditoraccountcd.cProtect = true
                    this.PI_debtorcreditorprefixcd.cProtect = true
                    this.PI_debtorcreditorvatprefixcd.cProtect = true
                    this.PI_debtorcreditorvataccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = true
                    
                    this.PI_advanceaccountcd.cProtect = true
                    this.PI_advanceprefixcd.cProtect = true

                    this.PI_depositprefixcd.cProtect = false
                    this.PI_depositaccountcd.cProtect = false

                    this.PI_underpaymentaccountcd.cProtect = true
                    this.PI_underpaymentprefixcd.cProtect = true

                    this.PI_overpaymentprefixcd.cProtect = true
                    this.PI_overpaymentaccountcd.cProtect = true

                    this.PI_incomeexpenseaccountcd.cProtect = true
                    this.PI_incomeexpenseprefixcd.cProtect = true

                    this.PI_defferedprefixcd.cProtect = true
                    this.PI_defferedaccountcd.cProtect = true

                    this.PI_roundingaccountcd.cProtect = true
                    this.PI_roundingprefixcd.cProtect = true

                    this.PI_creditoraccruedaccountcd.cProtect = true
                    this.PI_creditoraccruedprefixcd.cProtect = true
                    break;
                case 'A':

                    this.PI_currencycd.cProtect = true
                    this.PI_taxcd.cProtect = true
                    this.PI_taxcd.cValidate = ''
                    this.PI_allocpriority.cProtect = true
                    this.PI_allocpriority.cValidate = ''
                    this.PI_taxbasepercent.cProtect = true
                    this.PI_taxbasepercent.cValidate = ''
                    this.PI_journaltype.cProtect = true
                //disable debtor, deposit, under, over, income, deffered
                    this.PI_debtorcreditoraccountcd.cProtect = true
                    this.PI_debtorcreditorprefixcd.cProtect = true
                    this.PI_debtorcreditorvatprefixcd.cProtect = true
                    this.PI_debtorcreditorvataccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = true
                    
                    this.PI_advanceaccountcd.cProtect = false
                    this.PI_advanceprefixcd.cProtect = false

                    this.PI_depositprefixcd.cProtect = true
                    this.PI_depositaccountcd.cProtect = true

                    this.PI_underpaymentaccountcd.cProtect = true
                    this.PI_underpaymentprefixcd.cProtect = true

                    this.PI_overpaymentprefixcd.cProtect = true
                    this.PI_overpaymentaccountcd.cProtect = true

                    this.PI_incomeexpenseaccountcd.cProtect = true
                    this.PI_incomeexpenseprefixcd.cProtect = true

                    this.PI_defferedprefixcd.cProtect = true
                    this.PI_defferedaccountcd.cProtect = true

                    this.PI_roundingaccountcd.cProtect = true
                    this.PI_roundingprefixcd.cProtect = true

                    this.PI_creditoraccruedaccountcd.cProtect = true
                    this.PI_creditoraccruedprefixcd.cProtect = true
                    break;
                case 'R':

                    this.PI_currencycd.cProtect = false
                    this.PI_taxcd.cProtect = false
                    this.PI_taxcd.cValidate = ''
                    this.PI_allocpriority.cProtect = false
                    this.PI_allocpriority.cValidate = 'required'
                    this.PI_taxbasepercent.cProtect = false
                    this.PI_taxbasepercent.cValidate = 'required'
                    this.PI_journaltype.cProtect = true

                    
                //disable debtor, deposit, under, over, income, deffered
                    this.PI_debtorcreditoraccountcd.cProtect = true
                    this.PI_debtorcreditorprefixcd.cProtect = true
                    this.PI_debtorcreditorvatprefixcd.cProtect = true
                    this.PI_debtorcreditorvataccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingaccountcd.cProtect = true
                    this.PI_debtorcreditorwithholdingprefixcd.cProtect = true
                    
                    this.PI_advanceaccountcd.cProtect = true
                    this.PI_advanceprefixcd.cProtect = true

                    this.PI_depositprefixcd.cProtect = true
                    this.PI_depositaccountcd.cProtect = true

                    this.PI_underpaymentaccountcd.cProtect = false
                    this.PI_underpaymentprefixcd.cProtect = false

                    this.PI_overpaymentprefixcd.cProtect = false
                    this.PI_overpaymentaccountcd.cProtect = false

                    this.PI_incomeexpenseaccountcd.cProtect = true
                    this.PI_incomeexpenseprefixcd.cProtect = true

                    this.PI_defferedprefixcd.cProtect = true
                    this.PI_defferedaccountcd.cProtect = true

                    this.PI_roundingaccountcd.cProtect = false
                    this.PI_roundingprefixcd.cProtect = false

                    this.PI_creditoraccruedaccountcd.cProtect = true
                    this.PI_creditoraccruedprefixcd.cProtect = true
                    break;
            } 
                     
        },

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

