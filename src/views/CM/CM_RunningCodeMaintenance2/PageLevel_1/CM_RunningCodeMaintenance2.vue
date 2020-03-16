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
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_CM_RunningCodeMaintenance2.runningcd" :label="M_CM_RunningCodeMaintenance2.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliocdChange" :prop="PI_subportfoliocd" :value="M_CM_RunningCodeMaintenance2.subportfoliocd" :label="M_CM_RunningCodeMaintenance2.subportfoliocdLabel" ref="ref_subportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnrunningyearChange" :prop="PI_runningyear" v-model="M_CM_RunningCodeMaintenance2.runningyear"  ref="ref_runningyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnrunningmonthChange" :prop="PI_runningmonth" v-model="M_CM_RunningCodeMaintenance2.runningmonth"  ref="ref_runningmonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_runningno" v-model="M_CM_RunningCodeMaintenance2.runningno"  ref="ref_runningno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_next" v-model="M_CM_RunningCodeMaintenance2.next"  ref="ref_next"/>
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
			Module:"CM",	
            IEBy: {Input: '', Edit: ''},

            M_CM_RunningCodeMaintenance2 :{
                runningcd: '',
                runningcdLabel: '',
                subportfoliocd: '',
                subportfoliocdLabel: '',
                runningyear: '',
                runningmonth: '',
                runningno: '',
                next: '',
                reseton: ''
                    }
            ,					
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'runningcd', 
                cLabel: 'Running Code', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_subportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolio_New'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio Code', 
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
                cDisplayColumn: 'SubPortFolioCd,Name' ,
            }, 
            PI_runningyear: { 
                cValidate :'max:4|max_value:2999|min_value:1753', 
                cName: 'runningyear', 
                cLabel: 'Year', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_runningmonth: { 
                cValidate :'max:2|min_value:1|max_value:12', 
                cName: 'runningmonth', 
                cLabel: 'Month', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_runningno: { 
                cValidate :'max:9', 
                cName: 'runningno', 
                cLabel: 'Current', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: '',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_next: { 
                cValidate :'', 
                cName: 'next', 
                cLabel: 'Next', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
                cLastLabel: '',
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
        SCM_GetValueCurrentNext(RunningCd,SubPortolioCd,RunningMonth,RunningYear){
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                RunningCd: RunningCd,
                SubportfolioCd: SubPortolioCd,
                RunningMonth: RunningMonth,
                RunningYear: RunningYear
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                
                if(response.Data.length > 0){
                    this.M_CM_RunningCodeMaintenance2.runningcd = data.runningcd
                    this.M_CM_RunningCodeMaintenance2.runningyear = data.runningyear
                    this.M_CM_RunningCodeMaintenance2.runningmonth = data.runningmonth
                    this.M_CM_RunningCodeMaintenance2.runningno = data.currentrunningno
                    this.M_CM_RunningCodeMaintenance2.next = data.nextrunningno
                    this.M_CM_RunningCodeMaintenance2.reseton = data.reseton

                    this.PI_runningno.cLastLabel = data.currentrunningcd
                    this.PI_next.cLastLabel = data.nextrunningcd

                    this.M_CM_RunningCodeMaintenance2.runningcdLabel = this.M_CM_RunningCodeMaintenance2.runningcd != null ? data.runningcd + this.separator + data.descs : '' 
                    
                    
                    if(data.basedon == 'P'){
                        this.PI_subportfoliocd.cProtect = true
                        this.M_CM_RunningCodeMaintenance2.subportfoliocd = this.getDataUser().SubPortfolioCd
                        this.M_CM_RunningCodeMaintenance2.subportfoliocdLabel = this.getDataUser().label
                    }

                    if(data.basedon == 'S'){
                        this.PI_subportfoliocd.cProtect = false
                        this.M_CM_RunningCodeMaintenance2.subportfoliocd = data.subportfoliocd
                        this.M_CM_RunningCodeMaintenance2.subportfoliocdLabel = data.subportfoliocd
                    }

                    switch(data.reseton){
                        case "M":
                            this.PI_runningmonth.cProtect = true
                            this.PI_runningyear.cProtect = false
                            break
                        case "Y":
                            this.PI_runningmonth.cProtect = false
                            this.PI_runningyear.cProtect = true
                            break
                        case "N":
                            this.PI_runningmonth.cProtect = true
                            this.PI_runningyear.cProtect = true
                            break
                    }

                    
                } else {
                    this.M_CM_RunningCodeMaintenance2.runningno = ''
                    this.PI_runningno.cLastLabel = ''
                    this.M_CM_RunningCodeMaintenance2.next = ''
                    this.PI_next.cLastLabel = ''
                    this.PI_runningmonth.cProtect = false
                    this.PI_runningyear.cProtect = false
                } 
            })
        },		
        OnrunningcdChange (data) {
            this.M_CM_RunningCodeMaintenance2.runningcd = data.id
            this.M_CM_RunningCodeMaintenance2.runningcdLabel = data.label
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    this.M_CM_RunningCodeMaintenance2.runningmonth = ''
                    this.M_CM_RunningCodeMaintenance2.runningyear = ''
                    this.SCM_GetValueCurrentNext(data.id,this.M_CM_RunningCodeMaintenance2.subportfoliocd,this.M_CM_RunningCodeMaintenance2.runningmonth,this.M_CM_RunningCodeMaintenance2.runningyear)
                }
            })
            this.$forceUpdate()
        },
        OnsubportfoliocdChange (data) {
            this.M_CM_RunningCodeMaintenance2.subportfoliocd = data.id
            this.M_CM_RunningCodeMaintenance2.subportfoliocdLabel = data.label
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    this.SCM_GetValueCurrentNext(this.M_CM_RunningCodeMaintenance2.runningcd,data.id,this.M_CM_RunningCodeMaintenance2.runningmonth,this.M_CM_RunningCodeMaintenance2.runningyear)
                }
            })
            this.$forceUpdate()
        },
        OnrunningmonthChange (data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    this.SCM_GetValueCurrentNext(this.M_CM_RunningCodeMaintenance2.runningcd,this.M_CM_RunningCodeMaintenance2.subportfoliocd,data,this.M_CM_RunningCodeMaintenance2.runningyear)
                }
            })
            this.$forceUpdate()
        },
        OnrunningyearChange (data){
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    this.SCM_GetValueCurrentNext(this.M_CM_RunningCodeMaintenance2.runningcd,this.M_CM_RunningCodeMaintenance2.subportfoliocd,this.M_CM_RunningCodeMaintenance2.runningmonth,data)
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
            // this.getToolbar().doNew(true)
            // this.$store.commit('setStatus', 'new')
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
        M_Post(){
        },
        M_Insert() {
            var RunningMonth = ''
            var RunningYear = ''
            
            if(this.M_CM_RunningCodeMaintenance2.reseton == 'N'){
                RunningMonth = 0
                RunningYear = 0
            } else {
                RunningMonth = this.M_CM_RunningCodeMaintenance2.runningmonth
                RunningYear = this.M_CM_RunningCodeMaintenance2.runningyear
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                RunningCd: this.M_CM_RunningCodeMaintenance2.runningcd,
                SubportfolioCd: this.M_CM_RunningCodeMaintenance2.subportfoliocd,
                RunningNo: this.M_CM_RunningCodeMaintenance2.runningno,
                UserInput: this.getDataUser().UserId,
                RunningMonth: RunningMonth,
                RunningYear: RunningYear               
            }

            // var param = {			
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: this.$parent.data.PageOrder,
                
            // }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                    this.getToolbar().doNew(true)
                    this.$store.commit('setStatus', 'new')
                    this.$store.commit('setEventStatus', 'Save')                    

                    this.FormToMasterPage().ValidasiPage()
                    this.PI_subportfoliocd.cProtect = false
                    this.PI_runningmonth.cProtect = false
                    this.PI_runningyear.cProtect = false
                })
            })
        },
        M_Update() {
            var RunningMonth = ''
            var RunningYear = ''
            
            if(this.M_CM_RunningCodeMaintenance2.reseton == 'N'){
                RunningMonth = 0
                RunningYear = 0
            } else {
                RunningMonth = this.M_CM_RunningCodeMaintenance2.runningmonth
                RunningYear = this.M_CM_RunningCodeMaintenance2.runningyear
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                RunningCd: this.M_CM_RunningCodeMaintenance2.runningcd,
                SubportfolioCd: this.M_CM_RunningCodeMaintenance2.subportfoliocd,
                RunningNo: this.M_CM_RunningCodeMaintenance2.runningno,
                UserInput: this.getDataUser().UserId,
                RunningMonth: RunningMonth,
                RunningYear: RunningYear               
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
            this.M_CM_RunningCodeMaintenance2 = {
                runningcd: '',
                runningcdLabel: '',
                subportfoliocd: '',
                subportfoliocdLabel: '',
                runningyear: '',
                runningmonth: '',
                runningno: '',
                next: '',
                reseton: ''
                    }
            
            this.PI_runningcd.cProtect = false
            this.PI_subportfoliocd.cProtect = false
            this.PI_runningyear.cProtect = false
            this.PI_runningmonth.cProtect = false
            this.PI_runningno.cProtect = false
            this.PI_next.cProtect = true

            this.PI_runningno.cLastLabel = ''
            this.PI_next.cLastLabel = ''
		},
        M_New(){
            this.$refs.ref_runningcd.focus()
			
        },
        M_Edit(){
            this.$refs.ref_runningcd.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                _Message_: ''
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
            this.M_ClearForm()
            this.getToolbar().doNew(true)
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.getToolbar().doNew(true)
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
