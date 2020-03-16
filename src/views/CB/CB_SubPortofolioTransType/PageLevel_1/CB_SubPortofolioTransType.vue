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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_CB_SubPortofolioTransType.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_SubPortofolioTransType.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_CB_SubPortofolioTransType.shortdescs"  ref="ref_shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OntrxclassChange" :prop="PI_trxclass" :value="M_CB_SubPortofolioTransType.trxclass" :label="M_CB_SubPortofolioTransType.trxclassLabel" ref="ref_trxclass"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditoraccountcdChange" :prop="PI_debtorcreditoraccountcd" :value="M_CB_SubPortofolioTransType.debtorcreditoraccountcd" :label="M_CB_SubPortofolioTransType.debtorcreditoraccountcdLabel" ref="ref_debtorcreditoraccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnroundingaccountcdChange" :prop="PI_roundingaccountcd" :value="M_CB_SubPortofolioTransType.roundingaccountcd" :label="M_CB_SubPortofolioTransType.roundingaccountcdLabel" ref="ref_roundingaccountcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_CB_SubPortofolioTransType.runningcd" :label="M_CB_SubPortofolioTransType.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnglamortizationrunningcdChange" :prop="PI_glamortizationrunningcd" :value="M_CB_SubPortofolioTransType.glamortizationrunningcd" :label="M_CB_SubPortofolioTransType.glamortizationrunningcdLabel" ref="ref_glamortizationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_CB_SubPortofolioTransType.taxcd" :label="M_CB_SubPortofolioTransType.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxbasepercent" v-model="M_CB_SubPortofolioTransType.taxbasepercent"  ref="ref_taxbasepercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_CB_SubPortofolioTransType.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngltrxtypeChange" :prop="PI_gltrxtype" :value="M_CB_SubPortofolioTransType.gltrxtype" :label="M_CB_SubPortofolioTransType.gltrxtypeLabel" ref="ref_gltrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndefaultbankcdChange" :prop="PI_defaultbankcd" :value="M_CB_SubPortofolioTransType.defaultbankcd" :label="M_CB_SubPortofolioTransType.defaultbankcdLabel" ref="ref_defaultbankcd"/>
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
		Module:"CB",
            propList: {
                initialWhere: "ModuleCd= 'CB' AND SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'TimeEdit DESC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_SubPortofolioTransType :{
                gltrxtypedescs: '',
                descs1: '',
                runningcodedescs: '',
                shortdescs: '',
                trxclass: '',
                taxdescs: '',
                descs: '',
                trxtype: '',
                debtorcreditoraccountcd: '',
                runningcd: '',
                taxcd: '',
                taxbasepercent: '0',
                gltrxtype: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                defaultbankcd: '',
                status: '',
                glamortizationrunningcd: '',
                glamortizationrunningcddescs: '',
                roundingaccountcd: '',
                roundingaccountdescs: '',
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
                cKey: true, 
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
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxclass: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'trxclass', 
                cLabel: 'Trans. Class', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [
                    { label: 'Payment', id: 'M' },
                    { label: 'Cash Purchase', id: 'C' },
                    { label: 'Bank Transfer', id: 'B' },
                    { label: 'Bank Reconcile', id: 'R' },
                    { label: 'Bank Receipt', id: 'T' },
                    { label: 'Forex', id: 'F' },
                    { label: 'Advance Payment', id: 'A' },
                    { label: 'Advance Received', id: 'D' },
                    { label: 'PA Settlement', id: 'S' }
                ],
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_debtorcreditoraccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtorcreditoraccountcd', 
                cLabel: 'Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_roundingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' And SubPortfolioCd= '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'roundingaccountcd', 
                cLabel: 'Rounding Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'CB')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Running Code', 
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
            PI_glamortizationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'CB')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glamortizationrunningcd', 
                cLabel: 'Deposit Allocation Running Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cOrder: 9, 
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
            PI_taxbasepercent: { 
                cValidate :'max:4|max_value:100', 
                cName: 'taxbasepercent', 
                cLabel: 'Tax Based', 
                cLabelSize: 4, 
                cLastLabel: '%',
                cOrder: 10, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Active', value: 'A' }, { text: 'Non Active', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Status ', 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_defaultbankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd= '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defaultbankcd', 
                cLabel: 'Default Bank Code', 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,BankName' ,
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
        OndebtorcreditoraccountcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.debtorcreditoraccountcd = data.id
            this.M_CB_SubPortofolioTransType.debtorcreditoraccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditoraccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.runningcd = data.id
            this.M_CB_SubPortofolioTransType.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{runningcd}
            }
        })
        this.$forceUpdate()
        },
        OnglamortizationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.glamortizationrunningcd = data.id
            this.M_CB_SubPortofolioTransType.glamortizationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glamortizationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.taxcd = data.id
            this.M_CB_SubPortofolioTransType.taxcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
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
        OngltrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.gltrxtype = data.id
            this.M_CB_SubPortofolioTransType.gltrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{gltrxtype}
            }
        })
        this.$forceUpdate()
        },
        OndefaultbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.defaultbankcd = data.id
            this.M_CB_SubPortofolioTransType.defaultbankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defaultbankcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxclassChange(data){
            this.M_CB_SubPortofolioTransType.trxclass = data.id
            this.M_CB_SubPortofolioTransType.trxclassLabel = data.label
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data.id == "C") {
                this.PI_taxcd.cProtect = false
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_taxbasepercent.cProtect = false
                } 
                else if ( data.id == "A") {
                this.PI_taxcd.cProtect = true
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_taxbasepercent.cProtect = true
                } 
                else if ( data.id == "T") {
                this.PI_taxcd.cProtect = true
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_taxbasepercent.cProtect = true
                } 
                else {
                this.PI_taxcd.cProtect = false
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_taxbasepercent.cProtect = false
                  
                }
            this.M_CB_TransactionTypeMaster.trxclass = data.id
            }
        })
        this.$forceUpdate()
        },
        OnroundingaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_SubPortofolioTransType.roundingaccountcd = data.id
            this.M_CB_SubPortofolioTransType.roundingaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{roundingaccountcd}
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TrxType: this.M_CB_SubPortofolioTransType.trxtype,
                AccountCd: this.M_CB_SubPortofolioTransType.debtorcreditoraccountcd == '' || this.M_CB_SubPortofolioTransType.debtorcreditoraccountcd == null ? 'NULL' : this.M_CB_SubPortofolioTransType.debtorcreditoraccountcd ,
                RoundingAccountCd: this.M_CB_SubPortofolioTransType.roundingaccountcd == '' || this.M_CB_SubPortofolioTransType.roundingaccountcd == null ? 'NULL' : this.M_CB_SubPortofolioTransType.roundingaccountcd,
                RunningCd: this.M_CB_SubPortofolioTransType.runningcd == '' || this.M_CB_SubPortofolioTransType.runningcd == null ? 'NULL' : this.M_CB_SubPortofolioTransType.runningcd ,
                GLAmortizationRunningCd: this.M_CB_SubPortofolioTransType.glamortizationrunningcd == '' || this.M_CB_SubPortofolioTransType.glamortizationrunningcd == null ? 'NULL' : this.M_CB_SubPortofolioTransType.glamortizationrunningcd ,
                TaxCd: this.M_CB_SubPortofolioTransType.taxcd == '' || this.M_CB_SubPortofolioTransType.taxcd == null ? 'NULL' : this.M_CB_SubPortofolioTransType.taxcd ,
                TaxBasePercent: this.M_CB_SubPortofolioTransType.taxbasepercent,
                GLTrxType: this.M_CB_SubPortofolioTransType.gltrxtype == '' || this.M_CB_SubPortofolioTransType.gltrxtype == null ? 'NULL' : this.M_CB_SubPortofolioTransType.gltrxtype ,
                DefaultBankCd: this.M_CB_SubPortofolioTransType.defaultbankcd == '' || this.M_CB_SubPortofolioTransType.defaultbankcd == null ? 'NULL' : this.M_CB_SubPortofolioTransType.defaultbankcd ,
                Status: this.M_CB_SubPortofolioTransType.status,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_SubPortofolioTransType.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_SubPortofolioTransType = {
                gltrxtypedescs: '',
                descs1: '',
                runningcodedescs: '',
                shortdescs: '',
                trxclass: '',
                taxdescs: '',
                descs: '',
                trxtype: '',
                debtorcreditoraccountcd: '',
                runningcd: '',
                taxcd: '',
                taxbasepercent: '0',
                gltrxtype: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeedit: '',
                defaultbankcd: '',
                status: '',
                glamortizationrunningcd: '',
                glamortizationrunningcddescs: '',
                roundingaccountcd: '',
                roundingaccountdescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
            this.$refs.ref_shortdescs.focus()
        },
        M_Delete(dt){       

           //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                trxtype: record.TransType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
this.M_CB_SubPortofolioTransType = {
                gltrxtypedescs: data.gltrxtypedescs,
                descs1: data.descs1,
                runningcodedescs: data.runningcodedescs,
                shortdescs: data.shortdescs,
                trxclass: data.trxclass,
                taxdescs: data.taxdescs,
                descs: data.descs,
                trxtype: data.trxtype,
                debtorcreditoraccountcd: data.debtorcreditoraccountcd,
                runningcd: data.runningcd,
                taxcd: data.taxcd,
                taxbasepercent: data.taxbasepercent,
                gltrxtype: data.gltrxtype,
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
                userinput: data.userinput,
                useredit: data.useredit,
                timeedit: data.timeedit,
                defaultbankcd: data.defaultbankcd,
                status: data.status,
                glamortizationrunningcd: data.glamortizationrunningcd,
                glamortizationrunningcddescs: data.glamortizationrunningcddescs,
                roundingaccountcd: data.roundingaccountcd,
                roundingaccountdescs: data.roundingaccountdescs,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }

                this.OntrxclassChange(data.trxclass)
                 

                this.M_CB_SubPortofolioTransType.debtorcreditoraccountcdLabel = this.M_CB_SubPortofolioTransType.debtorcreditoraccountcd != null && this.M_CB_SubPortofolioTransType.debtorcreditoraccountcd != '' ? data.debtorcreditoraccountcd + this.separator + data.descs1 :'' 
                this.M_CB_SubPortofolioTransType.runningcdLabel = this.M_CB_SubPortofolioTransType.runningcd != null && this.M_CB_SubPortofolioTransType.runningcd != '' ? data.runningcd + this.separator + data.runningcodedescs :'' 
                this.M_CB_SubPortofolioTransType.glamortizationrunningcdLabel = this.M_CB_SubPortofolioTransType.glamortizationrunningcd != null && this.M_CB_SubPortofolioTransType.glamortizationrunningcd != '' ? data.glamortizationrunningcd + this.separator + data.glamortizationrunningcddescs :'' 
                this.M_CB_SubPortofolioTransType.taxcdLabel = this.M_CB_SubPortofolioTransType.taxcd != null && this.M_CB_SubPortofolioTransType.taxcd != '' ? data.taxcd + this.separator + data.taxdescs :'' 
                this.M_CB_SubPortofolioTransType.gltrxtypeLabel = this.M_CB_SubPortofolioTransType.gltrxtype != null && this.M_CB_SubPortofolioTransType.gltrxtype != '' ? data.gltrxtype + this.separator + data.gltrxtypedescs :'' 
                this.M_CB_SubPortofolioTransType.defaultbankcdLabel = this.M_CB_SubPortofolioTransType.defaultbankcd != null && this.M_CB_SubPortofolioTransType.defaultbankcd != '' ? data.defaultbankcd + this.separator + data.bankname :'' 
                this.M_CB_SubPortofolioTransType.roundingaccountcdLabel = this.M_CB_SubPortofolioTransType.roundingaccountcd != null && this.M_CB_SubPortofolioTransType.roundingaccountcd != '' ? data.roundingaccountcd + this.separator + data.roundingaccountdescs :'' 
                

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

