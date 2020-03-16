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
                                        <ABSInputSelectList @change="OnfromlotnoChange" :prop="PI_fromlotno" :value="M_TN_StrataBillingAdjustment.fromlotno" :label="M_TN_StrataBillingAdjustment.fromlotnoLabel" ref="ref_fromlotno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntolotnoChange" :prop="PI_tolotno" :value="M_TN_StrataBillingAdjustment.tolotno" :label="M_TN_StrataBillingAdjustment.tolotnoLabel" ref="ref_tolotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_StrataBillingAdjustment.trxtype" :label="M_TN_StrataBillingAdjustment.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_StrataBillingAdjustment.startdate" :valueTo="M_TN_StrataBillingAdjustment.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnadjustmenttypeChange" :prop="PI_adjustmenttype" v-model="M_TN_StrataBillingAdjustment.adjustmenttype"  ref="ref_adjustmenttype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincrementdecrementstatusChange" :prop="PI_incrementdecrementstatus" v-model="M_TN_StrataBillingAdjustment.incrementdecrementstatus"  ref="ref_incrementdecrementstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_adjustmentvalue" v-model="M_TN_StrataBillingAdjustment.adjustmentvalue"  ref="ref_adjustmentvalue"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargetoChange" :prop="PI_chargeto" v-model="M_TN_StrataBillingAdjustment.chargeto"  ref="ref_chargeto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataBillingAdjustment.remarks"  ref="ref_remarks" />
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

            M_TN_StrataBillingAdjustment :{
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                startdate: '',
                adjustmenttype: 'F',
                incrementdecrementstatus: 'I',
                adjustmentvalue: '0',
                chargeto: 'R',
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
                cLabel: 'Period Date', 
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
                cRadioOptions: [{ text: 'Fix Amount', value: 'F' },{ text: 'Percentage', value: 'P' },], 
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
            PI_incrementdecrementstatus: { 
                cValidate :'required', 
                cName: 'incrementdecrementstatus', 
                cId: 'rdbincrementdecrementstatus', 
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
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
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
                cRadioOptions: [{ text: 'Rate', value: 'R' },{ text: 'Billing Amount', value: 'A' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Charge To', 
                cLabelSize: 4, 
                cOrder: 8, 
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
        OnfromlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingAdjustment.fromlotno = data.id
            this.M_TN_StrataBillingAdjustment.fromlotnoLabel = data.label

            this.M_TN_StrataBillingAdjustment.tolotno = data.id
            this.M_TN_StrataBillingAdjustment.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromlotno}
            }
        })
        this.$forceUpdate()
        },
        OntolotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingAdjustment.tolotno = data.id
            this.M_TN_StrataBillingAdjustment.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tolotno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataBillingAdjustment.trxtype = data.id
            this.M_TN_StrataBillingAdjustment.trxtypeLabel = data.label
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
        OnincrementdecrementstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{incrementdecrementstatus}
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
                FromLotNo: this.M_TN_StrataBillingAdjustment.fromlotno == '' || this.M_TN_StrataBillingAdjustment.fromlotno == null ? 'NULL' : this.M_TN_StrataBillingAdjustment.fromlotno,
                ToLotNo: this.M_TN_StrataBillingAdjustment.tolotno == '' || this.M_TN_StrataBillingAdjustment.tolotno == null ? 'NULL' : this.M_TN_StrataBillingAdjustment.tolotno,
                TrxType: this.M_TN_StrataBillingAdjustment.trxtype == '' || this.M_TN_StrataBillingAdjustment.trxtype == null ? 'NULL' : this.M_TN_StrataBillingAdjustment.trxtype,
                StartDate: this.M_TN_StrataBillingAdjustment.startdate,
                EndDate: this.M_TN_StrataBillingAdjustment.enddate,
                AdjustmentType: this.M_TN_StrataBillingAdjustment.adjustmenttype,
                IncrementDecrementStatus: this.M_TN_StrataBillingAdjustment.incrementdecrementstatus,
                AdjustmentValue: this.M_TN_StrataBillingAdjustment.adjustmentvalue,
                ChargeTo: this.M_TN_StrataBillingAdjustment.chargeto,
                Remarks: this.M_TN_StrataBillingAdjustment.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_TN_StrataBillingAdjustment = {
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                startdate: '',
                adjustmenttype: 'F',
                incrementdecrementstatus: 'I',
                adjustmentvalue: '0',
                chargeto: 'R',
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
this.M_TN_StrataBillingAdjustment = {
                dummy: data.dummy,
                fromlotno: data.fromlotno,
                tolotno: data.tolotno,
                trxtype: data.trxtype,
                descs: data.descs,
                startdate: data.startdate,
                adjustmenttype: data.adjustmenttype,
                incrementdecrementstatus: data.incrementdecrementstatus,
                adjustmentvalue: data.adjustmentvalue,
                chargeto: data.chargeto,
                remarks: data.remarks
                    }
                 

                this.M_TN_StrataBillingAdjustment.fromlotnoLabel = this.M_TN_StrataBillingAdjustment.fromlotno != null && this.M_TN_StrataBillingAdjustment.fromlotno != '' ? data.fromlotno :'' 
                this.M_TN_StrataBillingAdjustment.tolotnoLabel = this.M_TN_StrataBillingAdjustment.tolotno != null && this.M_TN_StrataBillingAdjustment.tolotno != '' ? data.tolotno :'' 
                this.M_TN_StrataBillingAdjustment.trxtypeLabel = this.M_TN_StrataBillingAdjustment.trxtype != null && this.M_TN_StrataBillingAdjustment.trxtype != '' ? data.trxtype + this.separator + data.descs :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_StrataBillingAdjustment.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_StrataBillingAdjustment.enddate = data
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
