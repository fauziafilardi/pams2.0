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
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_BillingDateAdjustment.fromapplicationno" :label="M_TN_BillingDateAdjustment.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_BillingDateAdjustment.toapplicationno" :label="M_TN_BillingDateAdjustment.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypefromChange" :prop="PI_trxtypefrom" :value="M_TN_BillingDateAdjustment.trxtypefrom" :label="M_TN_BillingDateAdjustment.trxtypefromLabel" ref="ref_trxtypefrom"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntrxtypetoChange" :prop="PI_trxtypeto" :value="M_TN_BillingDateAdjustment.trxtypeto" :label="M_TN_BillingDateAdjustment.trxtypetoLabel" ref="ref_trxtypeto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_BillingDateAdjustment.startdate" :valueTo="M_TN_BillingDateAdjustment.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntargetbillingdateChange" :prop="PI_targetbillingdate" v-model="M_TN_BillingDateAdjustment.targetbillingdate"  ref="ref_targetbillingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntargetcredittermsChange" :prop="PI_targetcreditterms" v-model="M_TN_BillingDateAdjustment.targetcreditterms" :label="M_TN_BillingDateAdjustment.targetcredittermsLabel" ref="ref_targetcreditterms" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntargetduedateChange" :prop="PI_targetduedate" v-model="M_TN_BillingDateAdjustment.targetduedate"  ref="ref_targetduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex :prop="PI_remarks" v-model="M_TN_BillingDateAdjustment.remarks"  ref="ref_remarks" />
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

            M_TN_BillingDateAdjustment :{
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtypefrom: '',
                trxtypeto: '',
                startdate: '',
                enddate: '',
                targetbillingdate: '',
                targetcreditterms: '',
                dueday:0,
                targetduedate: '',
                remarks: '',
                userinput: ''
            }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo '    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A' AND ISNULL(DebtorCd, '') <> '' AND RED >= CAST(GETDATE() as date) "   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'required', 
                cName: 'fromapplicationno', 
                cLabel: 'From Application No', 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_toapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A' AND ISNULL(DebtorCd, '') <> '' AND RED >= CAST(GETDATE() as date) "   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'required', 
                cName: 'toapplicationno', 
                cLabel: 'To Application No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_trxtypefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypefrom', 
                cLabel: 'From Transaction Type', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_trxtypeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtypeto', 
                cLabel: 'To Transaction Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Date Period', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_targetbillingdate: { 
                cValidate :'', 
                cName: 'targetbillingdate', 
                cLabel: 'Target Billing Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_targetcreditterms: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'targetcreditterms', 
                cLabel: 'Target Credit Terms', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' , 
            }, 
            PI_targetduedate: { 
                cValidate :'', 
                cName: 'targetduedate', 
                cLabel: 'Target Due Date', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder:9, 
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
        OnfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_BillingDateAdjustment.fromapplicationno = data.id
            this.M_TN_BillingDateAdjustment.fromapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
            this.M_TN_BillingDateAdjustment.toapplicationno = data.id
            this.M_TN_BillingDateAdjustment.toapplicationnoLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_BillingDateAdjustment.toapplicationno = data.id
            this.M_TN_BillingDateAdjustment.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypefromChange (data) {
        this.$nextTick(() => {
            this.M_TN_BillingDateAdjustment.trxtypefrom = data.id
            this.M_TN_BillingDateAdjustment.trxtypefromLabel = data.label
            if (this.inputStatus != "VIEW") {
            this.M_TN_BillingDateAdjustment.trxtypeto = data.id
            this.M_TN_BillingDateAdjustment.trxtypetoLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OntrxtypetoChange (data) {
        this.$nextTick(() => {
            this.M_TN_BillingDateAdjustment.trxtypeto = data.id
            this.M_TN_BillingDateAdjustment.trxtypetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypeto}
            }
        })
        this.$forceUpdate()
        },
        OntargetbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (data && data != '') {
                    if (this.M_TN_BillingDateAdjustment.dueday && this.M_TN_BillingDateAdjustment.dueday != '') {
                        this.M_TN_BillingDateAdjustment.targetduedate = this.dateAdd2( 'd', data, this.M_TN_BillingDateAdjustment.dueday )
                    }
                    else {
                        this.M_TN_BillingDateAdjustment.targetduedate = data
                    }
                }
            }
        })
        this.$forceUpdate()
        },
        OntargetcredittermsChange (data) {
        this.$nextTick(() => {
            this.M_TN_BillingDateAdjustment.targetcreditterms = data.id
            this.M_TN_BillingDateAdjustment.targetcredittermsLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetCreditTermsData(data.id).then(dt => {
                    if (dt != null) {
                    var datas = dt[0]
                    this.M_TN_BillingDateAdjustment.dueday = datas.Dueday
                        if (datas.Dueday && datas.Dueday != '') {
                            if (this.M_TN_BillingDateAdjustment.targetbillingdate && this.M_TN_BillingDateAdjustment.targetbillingdate != '' ){
                                this.M_TN_BillingDateAdjustment.targetduedate = this.dateAdd2('d', this.M_TN_BillingDateAdjustment.targetbillingdate, this.M_TN_BillingDateAdjustment.dueday)
                            }
                        }
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OntargetduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{targetduedate}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().doEdit(true) 
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
                ApplicationNoFrom: this.M_TN_BillingDateAdjustment.fromapplicationno == '' || this.M_TN_BillingDateAdjustment.fromapplicationno == null ? 'NULL' : this.M_TN_BillingDateAdjustment.fromapplicationno,
                ApplicationNoTo: this.M_TN_BillingDateAdjustment.toapplicationno == '' || this.M_TN_BillingDateAdjustment.toapplicationno == null ? 'NULL' : this.M_TN_BillingDateAdjustment.toapplicationno,
                TrxTypeFrom: this.M_TN_BillingDateAdjustment.trxtypefrom,
                TrxTypeTo: this.M_TN_BillingDateAdjustment.trxtypeto,
                StartDate: this.M_TN_BillingDateAdjustment.startdate,
                EndDate: this.M_TN_BillingDateAdjustment.enddate,
                TargetBillingDate: this.M_TN_BillingDateAdjustment.targetbillingdate,
                TargetCreditTermsCd: this.M_TN_BillingDateAdjustment.targetcreditterms == '' || this.M_TN_BillingDateAdjustment.targetcreditterms == null ? 'NULL' : this.M_TN_BillingDateAdjustment.targetcreditterms,
                TargetDueDate: this.M_TN_BillingDateAdjustment.targetduedate,
                Remarks: this.M_TN_BillingDateAdjustment.remarks,
                UserInput: this.getDataUser().UserId
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doEdit()
                })
            })
        },
		M_ClearForm(){
            this.M_TN_BillingDateAdjustment = {
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtypefrom: '',
                trxtypeto: '',
                startdate: '',
                enddate: '',
                targetbillingdate: '',
                targetcreditterms: '',
                dueday:0,
                targetduedate: '',
                remarks: '',
                userinput: ''
            }
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
            this.getToolbar().doEdit()
        }
        ,MdtRange_startdate (data) {
            this.M_TN_BillingDateAdjustment.startdate = data
            this.M_TN_BillingDateAdjustment.enddate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_BillingDateAdjustment.enddate = data
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
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
