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
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_ChargeTermination2.fromapplicationno" :label="M_TN_ChargeTermination2.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_ChargeTermination2.toapplicationno" :label="M_TN_ChargeTermination2.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ChargeTermination2.trxtype" :label="M_TN_ChargeTermination2.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_ChargeTermination2.startdate" :valueTo="M_TN_ChargeTermination2.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_ChargeTermination2.reasoncd" :label="M_TN_ChargeTermination2.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_ChargeTermination2.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ChargeTermination2.remarks"  ref="ref_remarks" />
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

            M_TN_ChargeTermination2 :{
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                startdate: '',
                enddate: '',
                descs: '',
                reasoncd: '',
                reasondescs: '',
                remarks: ''
                    }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'', 
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
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
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
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: "ModuleCd = 'TN' OR ModuleCd is null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
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
                cOrder:7, 
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
            this.M_TN_ChargeTermination2.fromapplicationno = data.id
            this.M_TN_ChargeTermination2.fromapplicationnoLabel = data.label

            this.M_TN_ChargeTermination2.toapplicationno = data.id
            this.M_TN_ChargeTermination2.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
            
//{fromapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargeTermination2.toapplicationno = data.id
            this.M_TN_ChargeTermination2.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargeTermination2.trxtype = data.id
            this.M_TN_ChargeTermination2.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ChargeTermination2.reasoncd = data.id
            this.M_TN_ChargeTermination2.reasoncdLabel = data.label
            this.M_TN_ChargeTermination2.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
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
            this.M_ClearForm()
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
                FromApplicationNo: this.M_TN_ChargeTermination2.fromapplicationno == '' || this.M_TN_ChargeTermination2.fromapplicationno == null ? 'NULL' : this.M_TN_ChargeTermination2.fromapplicationno,
                ToApplicationNo: this.M_TN_ChargeTermination2.toapplicationno == '' || this.M_TN_ChargeTermination2.toapplicationno == null ? 'NULL' : this.M_TN_ChargeTermination2.toapplicationno,
                TrxType: this.M_TN_ChargeTermination2.trxtype == '' || this.M_TN_ChargeTermination2.trxtype == null ? 'NULL' : this.M_TN_ChargeTermination2.trxtype,
                StartDate: this.M_TN_ChargeTermination2.startdate,
                EndDate: this.M_TN_ChargeTermination2.enddate,
                ReasonCd: this.M_TN_ChargeTermination2.reasoncd,
                ReasonDescs: this.M_TN_ChargeTermination2.reasondescs,
                Remarks: this.M_TN_ChargeTermination2.remarks,
                UserInput: this.getDataUser().UserId,
                Count_Output: 0,
                Result_Output: 0
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                var cnt = response.Data.Count && response.Data.Count != '' ? response.Data.Count : 0
                var result = response.Data.Result && response.Data.Result != '' ? response.Data.Result : 0
                var msg = cnt.toString() + ' Addendum Created/Updated And ' + result.toString() + ' Billing Addendum Created/Updated'

                // if (parseInt(cnt) == 0 && parseInt(result) == 0) {}

                this.alertInfo(msg)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doEdit()
                })
            })
        },
		M_ClearForm(){
            this.M_TN_ChargeTermination2 = {
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                startdate: '',
                descs: '',
                enddate: '',
                reasoncd: '',
                reasondescs: '',
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
            this.M_TN_ChargeTermination2.startdate = data
            this.M_TN_ChargeTermination2.enddate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_ChargeTermination2.enddate = data
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
