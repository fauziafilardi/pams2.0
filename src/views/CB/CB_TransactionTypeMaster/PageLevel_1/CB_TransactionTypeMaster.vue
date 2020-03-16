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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_CB_TransactionTypeMaster.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_TransactionTypeMaster.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_CB_TransactionTypeMaster.shortdescs"  ref="ref_shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OntrxclassChange" :prop="PI_trxclass" :value="M_CB_TransactionTypeMaster.trxclass" :label="M_CB_TransactionTypeMaster.trxclassLabel" ref="ref_trxclass"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtorcreditoraccountcdChange" :prop="PI_debtorcreditoraccountcd" :value="M_CB_TransactionTypeMaster.debtorcreditoraccountcd" :label="M_CB_TransactionTypeMaster.debtorcreditoraccountcdLabel" ref="ref_debtorcreditoraccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnroundingaccountcdChange" :prop="PI_roundingaccountcd" :value="M_CB_TransactionTypeMaster.roundingaccountcd" :label="M_CB_TransactionTypeMaster.roundingaccountcdLabel" ref="ref_roundingaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_CB_TransactionTypeMaster.runningcd" :label="M_CB_TransactionTypeMaster.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnglamortizationrunningcdChange" :prop="PI_glamortizationrunningcd" :value="M_CB_TransactionTypeMaster.glamortizationrunningcd" :label="M_CB_TransactionTypeMaster.glamortizationrunningcdLabel" ref="ref_glamortizationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcdChange" :prop="PI_taxcd" :value="M_CB_TransactionTypeMaster.taxcd" :label="M_CB_TransactionTypeMaster.taxcdLabel" ref="ref_taxcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err3">
                                            <b-row v-show="err3">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red">  * Tax is Required </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntaxbasepercentChange" :prop="PI_taxbasepercent" v-model="M_CB_TransactionTypeMaster.taxbasepercent"  ref="ref_taxbasepercent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err1 || err2">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> * Invalid Tax is Based </label></b-col>
                                            </b-row>                                            
                                            <b-row v-show="err2">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red">  * Tax Based is Required </label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                        <b-col md="6">
                                            <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_CB_TransactionTypeMaster.status"  ref="ref_status" />
                                        </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngltrxtypeChange" :prop="PI_gltrxtype" :value="M_CB_TransactionTypeMaster.gltrxtype" :label="M_CB_TransactionTypeMaster.gltrxtypeLabel" ref="ref_gltrxtype"/>
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
        error: false,
        err1: false,
        err2: false,
        err3: false,
		FormType: "List",
		Module:"CB",
            propList: {
                initialWhere: "ModuleCd = 'CB'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'TimeEdit DESC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_TransactionTypeMaster :{
                descs1: '',
                runningcodedescs: '',
                taxdescs: '',
                gltrxtypedescs: '',
                trxtype: '',
                descs: '',
                shortdescs: '',
                trxclass: 'M',
                roundingaccountcd: '',
                roundingaccountcddescs: '',
                debtorcreditoraccountcd: '',
                runningcd: '',
                taxcd: '',
                taxbasepercent: '',
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
                glamortizationrunningcddescs: '',
                glamortizationrunningcd: '',
                roundingaccountdescs: '',
                lastupdatestamp: 0,
                rowid: 0,
                // status:''
                    }
            ,
            PI_trxtype: { 
                cValidate :'required|max:8', 
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
                cValidate :'required|max:60', 
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
                cValidate :'max:30', 
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
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
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
            PI_roundingaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
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
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'CB')"   , 
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
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'CB')"   , 
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
                cValidate :'required', 
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
                cValidate :'required', 
                cName: 'taxbasepercent', 
                cLabel: 'Tax Based', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: '%' 
            },
            // PI_status: { 
            //     cValidate :'', 
            //     cName: 'status', 
            //     cId: 'rdbstatus', 
            //     cRadioOptions: [{ text: 'Active', value: 'P' },{ text: 'Non Active', value: 'S' },{ text: 'RTGS', value: 'R' },], 
            //     cRadioDefaultOption: '', 
            //     cLabel:'Status', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            }
        }
    },
    watch: {
        // 'M_CB_TransactionTypeMaster.trxclass'() {
        //     alert(this.M_CB_TransactionTypeMaster.trxclass)
        //     if (this.M_CB_TransactionTypeMaster.trxclass == 'C') {
        //         this.PI_taxcd.cValidate = 'required'
        //         this.PI_debtorcreditoraccountcd.cValidate = ''
        //         this.PI_taxbasepercent.cValidate = 'required'
                
        //         this.$refs.ref_taxcd.isRequired = true
        //         this.$refs.ref_debtorcreditoraccountcd.isRequired = false
        //         this.$refs.ref_taxbasepercent.isRequired = true
        //     }
        //     else if(this.M_CB_TransactionTypeMaster.trxclass == 'A' || this.M_CB_TransactionTypeMaster.trxclass == 'T'){
        //         this.PI_taxcd.cValidate = ''
        //         this.PI_debtorcreditoraccountcd.cValidate = 'required'
        //         this.PI_taxbasepercent.cValidate = ''

        //         this.$refs.ref_taxcd.isRequired = false
        //         this.$refs.ref_debtorcreditoraccountcd.isRequired = true
        //         this.$refs.ref_taxbasepercent.isRequired = false
        //     }
        //     else {
        //         this.PI_taxcd.cValidate = 'required'
        //         this.PI_debtorcreditoraccountcd.cValidate = ''
        //         this.PI_taxbasepercent.cValidate = 'required'
                
        //         this.$refs.ref_taxcd.isRequired = true
        //         this.$refs.ref_debtorcreditoraccountcd.isRequired = false
        //         this.$refs.ref_taxbasepercent.isRequired = true
        //     }
        // }
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
        OntaxbasepercentChange(data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    if(data != '' || data != null){
                        this.err2 = false
                        this.error = false
                    }

                    if(data > 100){
                        this.error = true
                        this.err1 = true
                    } else {
                        this.err1 = false
                        this.error = false
                    }
                }
            })
        },	
        OndebtorcreditoraccountcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd = data.id
            this.M_CB_TransactionTypeMaster.debtorcreditoraccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcreditoraccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_TransactionTypeMaster.runningcd = data.id
            this.M_CB_TransactionTypeMaster.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{runningcd}
            }
        })
        this.$forceUpdate()
        },
        OnglamortizationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_TransactionTypeMaster.glamortizationrunningcd = data.id
            this.M_CB_TransactionTypeMaster.glamortizationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glamortizationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OntaxcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_TransactionTypeMaster.taxcd = data.id
            this.M_CB_TransactionTypeMaster.taxcdLabel = data.label

            if(this.M_CB_TransactionTypeMaster.taxcd != '' || this.M_CB_TransactionTypeMaster.taxcd != null){
                this.err3 = false
                this.error = false
            }

            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OngltrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_TransactionTypeMaster.gltrxtype = data.id
            this.M_CB_TransactionTypeMaster.gltrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{gltrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnroundingaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_TransactionTypeMaster.roundingaccountcd = data.id
            this.M_CB_TransactionTypeMaster.roundingaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcd}
            }
        })
        this.$forceUpdate()
        },
        OntrxclassChange(data){
            // console.log(data)
            this.M_CB_TransactionTypeMaster.trxclass = data.id
            this.M_CB_TransactionTypeMaster.trxclassLabel = data.label
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data.id == 'C') {
                this.PI_taxcd.cProtect = false
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_taxbasepercent.cProtect = false
                this.M_CB_TransactionTypeMaster.taxbasepercent = ''
                this.PI_taxcd.cValidate = 'required'
                this.PI_debtorcreditoraccountcd.cValidate = ''
                this.PI_taxbasepercent.cValidate = 'required'
                this.$refs.ref_taxcd.isRequired = true
                this.$refs.ref_debtorcreditoraccountcd.isRequired = false
                this.$refs.ref_taxbasepercent.isRequired = true

                } 
                else if ( data.id == 'A') {
                this.PI_taxcd.cProtect = true
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_taxbasepercent.cProtect = true
                this.M_CB_TransactionTypeMaster.taxbasepercent = '100'
                this.PI_taxcd.cValidate = ''
                this.PI_debtorcreditoraccountcd.cValidate = 'required'
                this.PI_taxbasepercent.cValidate = ''
                this.$refs.ref_taxcd.isRequired = false
                this.$refs.ref_debtorcreditoraccountcd.isRequired = true
                this.$refs.ref_taxbasepercent.isRequired = false
                } 
                else if ( data.id == 'T') {
                this.PI_taxcd.cProtect = true
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_taxbasepercent.cProtect = true
                this.M_CB_TransactionTypeMaster.taxbasepercent = '100'
                this.PI_taxcd.cValidate = ''
                this.PI_debtorcreditoraccountcd.cValidate = 'required'
                this.PI_taxbasepercent.cValidate = ''
                this.$refs.ref_taxcd.isRequired = false
                this.$refs.ref_debtorcreditoraccountcd.isRequired = true
                this.$refs.ref_taxbasepercent.isRequired = false
                } 
                else {
                this.PI_taxcd.cProtect = false
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_taxbasepercent.cProtect = false
                this.PI_taxcd.cValidate = 'required'
                this.PI_debtorcreditoraccountcd.cValidate = ''
                this.PI_taxbasepercent.cValidate = 'required'
                this.$refs.ref_taxcd.isRequired = true
                this.$refs.ref_debtorcreditoraccountcd.isRequired = false
                this.$refs.ref_taxbasepercent.isRequired = true
                  
                }
            this.M_CB_TransactionTypeMaster.trxclass = data.id
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = true
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
            // console.log(record)
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
            if((this.M_CB_TransactionTypeMaster.taxbasepercent == '' || this.M_CB_TransactionTypeMaster.taxbasepercent == null) && (this.M_CB_TransactionTypeMaster.taxcd == '' || this.M_CB_TransactionTypeMaster.taxcd == null) ){
                this.error = true
                this.err3 = true
                this.err2 = true                
                return
            } else {
                this.err3 = false
                this.err2 = false                
                this.error = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TrxType: this.M_CB_TransactionTypeMaster.trxtype,
                Descs: this.M_CB_TransactionTypeMaster.descs,
                ShortDescs: this.M_CB_TransactionTypeMaster.shortdescs,
                TrxClass: this.M_CB_TransactionTypeMaster.trxclass,
                RoundingAccountCd: this.M_CB_TransactionTypeMaster.roundingaccountcd == '' || this.M_CB_TransactionTypeMaster.runningaccountcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.runningaccountcd,
                AccountCd: this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd == '' || this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd ,
                RunningCd: this.M_CB_TransactionTypeMaster.runningcd == '' || this.M_CB_TransactionTypeMaster.runningcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.runningcd ,
                GLAmortizationRunningCd: this.M_CB_TransactionTypeMaster.glamortizationrunningcd == '' || this.M_CB_TransactionTypeMaster.glamortizationrunningcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.glamortizationrunningcd ,
                TaxCd: this.M_CB_TransactionTypeMaster.taxcd == '' || this.M_CB_TransactionTypeMaster.taxcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.taxcd ,
                TaxBasePercent: this.M_CB_TransactionTypeMaster.taxbasepercent,
                GLTrxType: this.M_CB_TransactionTypeMaster.gltrxtype == '' || this.M_CB_TransactionTypeMaster.gltrxtype == null ? 'NULL' : this.M_CB_TransactionTypeMaster.gltrxtype ,
                UserInput: this.getDataUser().UserId                 
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
                TrxType: this.M_CB_TransactionTypeMaster.trxtype,
                Descs: this.M_CB_TransactionTypeMaster.descs,
                ShortDescs: this.M_CB_TransactionTypeMaster.shortdescs,
                TrxClass: this.M_CB_TransactionTypeMaster.trxclass,
                AccountCd: this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd == '' || this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd ,
                RoundingAccountCd: this.M_CB_TransactionTypeMaster.roundingaccountcd == '' || this.M_CB_TransactionTypeMaster.roundingaccountcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.roundingaccountcd,
                RunningCd: this.M_CB_TransactionTypeMaster.runningcd == '' || this.M_CB_TransactionTypeMaster.runningcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.runningcd ,
                GLAmortizationRunningCd: this.M_CB_TransactionTypeMaster.glamortizationrunningcd == '' || this.M_CB_TransactionTypeMaster.glamortizationrunningcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.glamortizationrunningcd ,
                TaxCd: this.M_CB_TransactionTypeMaster.taxcd == '' || this.M_CB_TransactionTypeMaster.taxcd == null ? 'NULL' : this.M_CB_TransactionTypeMaster.taxcd ,
                TaxBasePercent: this.M_CB_TransactionTypeMaster.taxbasepercent,
                GLTrxType: this.M_CB_TransactionTypeMaster.gltrxtype == '' || this.M_CB_TransactionTypeMaster.gltrxtype == null ? 'NULL' : this.M_CB_TransactionTypeMaster.gltrxtype ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_TransactionTypeMaster.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_TransactionTypeMaster = {
                descs1: '',
                runningcodedescs: '',
                taxdescs: '',
                gltrxtypedescs: '',
                trxtype: '',
                descs: '',
                shortdescs: '',
                trxclass: 'M',
                roundingaccountcd: '',
                roundingaccountcddescs: '',
                debtorcreditoraccountcd: '',
                runningcd: '',
                taxcd: '',
                taxbasepercent: '',
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
                glamortizationrunningcddescs: '',
                glamortizationrunningcd: '',
                roundingaccountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
            this.$refs.ref_shortdescs.focus()
            if(this.M_CB_TransactionTypeMaster.trxclass == 'M' || this.M_CB_TransactionTypeMaster.trxclass == 'D' || this.M_CB_TransactionTypeMaster.trxclass == 'B' || this.M_CB_TransactionTypeMaster.trxclass == 'C' || this.M_CB_TransactionTypeMaster.trxclass == 'S'){
                this.PI_debtorcreditoraccountcd.cProtect = true

                this.PI_taxcd.cProtect = false
                this.PI_taxbasepercent.cProtect = false
            }else if(this.M_CB_TransactionTypeMaster.trxclass == 'T'){
                this.PI_taxcd.cProtect = true
                this.PI_taxbasepercent.cProtect = true

                this.PI_debtorcreditoraccountcd.cProtect = false
            }  
        },
        M_Delete(dt){       

          var data = this.FormToABSList().getRowSelected()
          var dataDelete = []          

          data.forEach((value) => {
            dataDelete.push({
              // SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              TrxType: value.TrxType,
              LastUpdateStamp: value.LastUpdateStamp,
              _Message_: ""
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
                LineNo: this.$parent.data.PageOrder
,                trxtype: record.TrxType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CB_TransactionTypeMaster = {
                descs1: data.descs1,
                runningcodedescs: data.runningcodedescs,
                taxdescs: data.taxdescs,
                gltrxtypedescs: data.gltrxtypedescs,
                trxtype: data.trxtype,
                descs: data.descs,
                shortdescs: data.shortdescs,
                trxclass: data.trxclass,
                roundingaccountcd: data.roundingaccountcd,
                debtorcreditoraccountcd: data.debtorcreditoraccountcd,
                runningcd: data.runningcd,
                roundingaccountdescs: data.roundingaccountdescs,
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
                glamortizationrunningcddescs: data.glamortizationrunningcddescs,
                glamortizationrunningcd: data.glamortizationrunningcd,
                roundingaccountdescs: data.roundingaccountdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CB_TransactionTypeMaster.debtorcreditoraccountcdLabel = this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd != null && this.M_CB_TransactionTypeMaster.debtorcreditoraccountcd != '' ? data.debtorcreditoraccountcd + this.separator + data.descs1 :'' 
                this.M_CB_TransactionTypeMaster.runningcdLabel = this.M_CB_TransactionTypeMaster.runningcd != null && this.M_CB_TransactionTypeMaster.runningcd != '' ? data.runningcd + this.separator + data.runningcodedescs :'' 
                this.M_CB_TransactionTypeMaster.glamortizationrunningcdLabel = this.M_CB_TransactionTypeMaster.glamortizationrunningcd != null && this.M_CB_TransactionTypeMaster.glamortizationrunningcd != '' ? data.glamortizationrunningcd + this.separator + data.glamortizationrunningcddescs :'' 
                this.M_CB_TransactionTypeMaster.taxcdLabel = this.M_CB_TransactionTypeMaster.taxcd != null && this.M_CB_TransactionTypeMaster.taxcd != '' ? data.taxcd + this.separator + data.taxdescs :'' 
                this.M_CB_TransactionTypeMaster.gltrxtypeLabel = this.M_CB_TransactionTypeMaster.gltrxtype != null && this.M_CB_TransactionTypeMaster.gltrxtype != '' ? data.gltrxtype + this.separator + data.gltrxtypedescs :'' 
                this.M_CB_TransactionTypeMaster.roundingaccountcdLabel = this.M_CB_TransactionTypeMaster.roundingaccountcd != null && this.M_CB_TransactionTypeMaster.roundingaccountcd != '' ? data.roundingaccountcd + this.separator + data.roundingaccountdescs :'' 

                if ( data.trxclass == 'C') {
                this.PI_taxcd.cProtect = false
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_taxbasepercent.cProtect = false
                this.PI_taxcd.cValidate = 'required'
                this.PI_debtorcreditoraccountcd.cValidate = ''
                this.PI_taxbasepercent.cValidate = 'required'

                } 
                else if ( data.trxclass == 'A') {
                this.PI_taxcd.cProtect = true
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_taxbasepercent.cProtect = true
                this.PI_taxcd.cValidate = ''
                this.PI_debtorcreditoraccountcd.cValidate = 'required'
                this.PI_taxbasepercent.cValidate = ''
                } 
                else if ( data.trxclass == 'T') {
                this.PI_taxcd.cProtect = true
                this.PI_debtorcreditoraccountcd.cProtect = false
                this.PI_taxbasepercent.cProtect = true
                this.PI_taxcd.cValidate = ''
                this.PI_debtorcreditoraccountcd.cValidate = 'required'
                this.PI_taxbasepercent.cValidate = ''
                } 
                else {
                this.PI_taxcd.cProtect = false
                this.PI_debtorcreditoraccountcd.cProtect = true
                this.PI_taxbasepercent.cProtect = false
                this.PI_taxcd.cValidate = 'required'
                this.PI_debtorcreditoraccountcd.cValidate = ''
                this.PI_taxbasepercent.cValidate = 'required'
                  
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

