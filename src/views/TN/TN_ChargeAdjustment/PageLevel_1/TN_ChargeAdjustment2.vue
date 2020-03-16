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
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_ChargeAdjustment2.fromapplicationno" :label="M_TN_ChargeAdjustment2.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_ChargeAdjustment2.toapplicationno" :label="M_TN_ChargeAdjustment2.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ChargeAdjustment2.trxtype" :label="M_TN_ChargeAdjustment2.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_ChargeAdjustment2.startdate" :valueTo="M_TN_ChargeAdjustment2.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnadjustmenttypeChange" :prop="PI_adjustmenttype" v-model="M_TN_ChargeAdjustment2.adjustmenttype"  ref="ref_adjustmenttype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_ChargeAdjustment2.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_adjustmentvalue" v-model="M_TN_ChargeAdjustment2.adjustmentvalue"  ref="ref_adjustmentvalue"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargetoChange" :prop="PI_chargeto" v-model="M_TN_ChargeAdjustment2.chargeto"  ref="ref_chargeto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ChargeAdjustment2.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col offset="2" md="4">
                                            <span>
                                                * If charge to Billing Period and if monthly income in the schedule is not filled or 0, the adjustment value will be applied to billing amount. 
                                            </span>
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

            M_TN_ChargeAdjustment2 :{
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                startdate: '',
                enddate: '',
                adjustmenttype: 'F',
                status: 'I',
                adjustmentvalue: '',
                chargeto: 'R',
                remarks: ''
                    }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A' AND EndDate>GETDATE()"   , 
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
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A' AND EndDate>GETDATE()"   , 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Date Period', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_adjustmenttype: { 
                cValidate :'required', 
                cName: 'adjustmenttype', 
                cId: 'rdbadjustmenttype', 
                cRadioOptions: [{ text: 'Fix Amount', value: 'F' },{ text: 'Percentage', value: 'P' }], 
                cRadioDefaultOption: 'F', 
                cLabel:'Adjustment Type', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'required', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Increment', value: 'I' },{ text: 'Decrement', value: 'D' },], 
                cRadioDefaultOption: 'I', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_adjustmentvalue: { 
                cValidate :'required|max:20', 
                cName: 'adjustmentvalue', 
                cLabel: 'Adjustment Value', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargeto: { 
                cValidate :'required', 
                cName: 'chargeto', 
                cId: 'rdbchargeto', 
                cRadioOptions: [{ text: 'Rate', value: 'R' },{ text: 'Billing Period *', value: 'A' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Charge To', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:8, 
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
            this.M_TN_ChargeAdjustment2.fromapplicationno = data.id
            this.M_TN_ChargeAdjustment2.fromapplicationnoLabel = data.label

            this.M_TN_ChargeAdjustment2.toapplicationno = data.id
            this.M_TN_ChargeAdjustment2.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
            
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargeAdjustment2.toapplicationno = data.id
            this.M_TN_ChargeAdjustment2.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargeAdjustment2.trxtype = data.id
            this.M_TN_ChargeAdjustment2.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnadjustmenttypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{adjustmenttype}
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
        OnchargetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargeto}
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
                FromApplicationNo: this.M_TN_ChargeAdjustment2.fromapplicationno == '' || this.M_TN_ChargeAdjustment2.fromapplicationno == null ? 'NULL' : this.M_TN_ChargeAdjustment2.fromapplicationno,
                ToApplicationNo: this.M_TN_ChargeAdjustment2.toapplicationno == '' || this.M_TN_ChargeAdjustment2.toapplicationno == null ? 'NULL' : this.M_TN_ChargeAdjustment2.toapplicationno,
                TrxType: this.M_TN_ChargeAdjustment2.trxtype == '' || this.M_TN_ChargeAdjustment2.trxtype == null ? 'NULL' : this.M_TN_ChargeAdjustment2.trxtype,
                StartDate: this.M_TN_ChargeAdjustment2.startdate,
                EndDate: this.M_TN_ChargeAdjustment2.enddate,
                AdjustmentType: this.M_TN_ChargeAdjustment2.adjustmenttype,
                Status: this.M_TN_ChargeAdjustment2.status,
                AdjustmentValue: this.M_TN_ChargeAdjustment2.adjustmentvalue ? this.replaceAllString(this.M_TN_ChargeAdjustment2.adjustmentvalue, ',', '', 'number') : 0,
                ChargeTo: this.M_TN_ChargeAdjustment2.chargeto,
                Remarks: this.M_TN_ChargeAdjustment2.remarks,
                UserInput: this.getDataUser().UserId,
                BillingAdjustmentMessage_Output: ''
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                var msg = response.Data.BillingAdjustmentMessage
                this.alertWithHtml('Information', 'info', msg)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doEdit()
                })
            })
        },
		M_ClearForm(){
            this.M_TN_ChargeAdjustment2 = {
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                startdate: '',
                enddate: '',
                adjustmenttype: 'F',
                status: 'I',
                adjustmentvalue: '',
                chargeto: 'R',
                remarks: ''
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
            this.M_TN_ChargeAdjustment2.startdate = data
            this.M_TN_ChargeAdjustment2.enddate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_ChargeAdjustment2.enddate = data
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
