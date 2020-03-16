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
                                        <ABSInputSelectList @change="OnfromlotnoChange" :prop="PI_fromlotno" :value="M_TN_StrataBillingScheduleTermination.fromlotno" :label="M_TN_StrataBillingScheduleTermination.fromlotnoLabel" ref="ref_fromlotno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntolotnoChange" :prop="PI_tolotno" :value="M_TN_StrataBillingScheduleTermination.tolotno" :label="M_TN_StrataBillingScheduleTermination.tolotnoLabel" ref="ref_tolotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_StrataBillingScheduleTermination.trxtype" :label="M_TN_StrataBillingScheduleTermination.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnstartdateChange" :prop="PI_startdate" v-model="M_TN_StrataBillingScheduleTermination.startdate"  ref="ref_startdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnenddateChange" :prop="PI_enddate" v-model="M_TN_StrataBillingScheduleTermination.enddate"  ref="ref_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_StrataBillingScheduleTermination.reasoncd" :label="M_TN_StrataBillingScheduleTermination.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_StrataBillingScheduleTermination.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataBillingScheduleTermination.remarks"  ref="ref_remarks" />
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

            M_TN_StrataBillingScheduleTermination :{
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                startdate: '',
                descs: '',
                reasoncd: '',
                enddate: '',
                reasondescs: '',
                remarks: ''
                    }
            ,					
            PI_fromlotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotNoLookUp'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromlotno', 
                cLabel: 'From Lot No', 
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
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_tolotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotNoLookUp'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tolotno', 
                cLabel: 'To Lot No', 
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
                cDisplayColumn: 'LotNo,Descs' ,
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Start Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_enddate: { 
                cValidate :'required', 
                cName: 'enddate', 
                cLabel: 'End Date', 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:20', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 7, 
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
        OnfromlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingScheduleTermination.fromlotno = data.id
            this.M_TN_StrataBillingScheduleTermination.fromlotnoLabel = data.label

            this.M_TN_StrataBillingScheduleTermination.tolotno = data.id
            this.M_TN_StrataBillingScheduleTermination.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromlotno}
            }
        })
        this.$forceUpdate()
        },
        OntolotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingScheduleTermination.tolotno = data.id
            this.M_TN_StrataBillingScheduleTermination.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tolotno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingScheduleTermination.trxtype = data.id
            this.M_TN_StrataBillingScheduleTermination.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnstartdateChange (data) {
            this.M_TN_StrataBillingScheduleTermination.startdate = data

            this.M_TN_StrataBillingScheduleTermination.enddate = data
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startdate}
            }
        })
        this.$forceUpdate()
        },
        OnenddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{enddate}
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingScheduleTermination.reasoncd = data.id
            this.M_TN_StrataBillingScheduleTermination.reasoncdLabel = data.label
            this.M_TN_StrataBillingScheduleTermination.reasondescs = data.Descs
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
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromLotNo: this.M_TN_StrataBillingScheduleTermination.fromlotno == '' || this.M_TN_StrataBillingScheduleTermination.fromlotno == null ? 'NULL' : this.M_TN_StrataBillingScheduleTermination.fromlotno,
                ToLotNo: this.M_TN_StrataBillingScheduleTermination.tolotno == '' || this.M_TN_StrataBillingScheduleTermination.tolotno == null ? 'NULL' : this.M_TN_StrataBillingScheduleTermination.tolotno,
                TrxType: this.M_TN_StrataBillingScheduleTermination.trxtype == '' || this.M_TN_StrataBillingScheduleTermination.trxtype == null ? 'NULL' : this.M_TN_StrataBillingScheduleTermination.trxtype,
                StartDate: this.M_TN_StrataBillingScheduleTermination.startdate,
                EndDate: this.M_TN_StrataBillingScheduleTermination.enddate,
                ReasonCd: this.M_TN_StrataBillingScheduleTermination.reasoncd,
                ReasonDescs: this.M_TN_StrataBillingScheduleTermination.reasondescs,
                Remarks: this.M_TN_StrataBillingScheduleTermination.remarks,
                UserInput: this.getDataUser().UserId
                
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
            this.M_TN_StrataBillingScheduleTermination = {
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                startdate: '',
                descs: '',
                reasoncd: '',
                enddate: '',
                reasondescs: '',
                remarks: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
				


            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_StrataBillingScheduleTermination = {
                dummy: data.dummy,
                fromlotno: data.fromlotno,
                tolotno: data.tolotno,
                trxtype: data.trxtype,
                startdate: data.startdate,
                descs: data.descs,
                reasoncd: data.reasoncd,
                enddate: data.enddate,
                reasondescs: data.reasondescs,
                remarks: data.remarks
                    }
                 

                this.M_TN_StrataBillingScheduleTermination.fromlotnoLabel = this.M_TN_StrataBillingScheduleTermination.fromlotno != null && this.M_TN_StrataBillingScheduleTermination.fromlotno != '' ? data.fromlotno :'' 
                this.M_TN_StrataBillingScheduleTermination.tolotnoLabel = this.M_TN_StrataBillingScheduleTermination.tolotno != null && this.M_TN_StrataBillingScheduleTermination.tolotno != '' ? data.tolotno :'' 
                this.M_TN_StrataBillingScheduleTermination.trxtypeLabel = this.M_TN_StrataBillingScheduleTermination.trxtype != null && this.M_TN_StrataBillingScheduleTermination.trxtype != '' ? data.trxtype + this.separator + data.descs :'' 
                this.M_TN_StrataBillingScheduleTermination.reasoncdLabel = this.M_TN_StrataBillingScheduleTermination.reasoncd != null && this.M_TN_StrataBillingScheduleTermination.reasoncd != '' ? data.reasoncd + this.separator + data.descs :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
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
