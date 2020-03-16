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
                                        <ABSCompute :prop="PI_debtorcd" v-model="M_AR_ReminderMaintH.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_debtorname" v-model="M_AR_ReminderMaintH.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnremindernoChange" :prop="PI_reminderno" v-model="M_AR_ReminderMaintH.reminderno"  ref="ref_reminderno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnreminderdateChange" :prop="PI_reminderdate" v-model="M_AR_ReminderMaintH.reminderdate"  ref="ref_reminderdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_ReminderMaintH.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno2" v-model="M_AR_ReminderMaintH.oldreferenceno"  ref="ref_oldreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_AR_ReminderMaintH.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_ReminderMaintH.reasoncd" :label="M_AR_ReminderMaintH.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_ReminderMaintH.reasondescs"  ref="ref_reasondescs"/>
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
		Module:"AR",
            propList: {
                initialWhere: " SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_ReminderMaintH :{
                reminderno: 0,
                debtorcd: '',
                referenceno: '',
                oldreferenceno: '',
                reminderdate: '',
                status: '',
                reasoncd: '',
                reasondescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                cmreasondescs: '',
                // debtorname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_debtorcd: { 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            // PI_debtorname: { 
            //     cLabel: 'Debtor Name', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
            PI_reminderno: { 
                cValidate :'', 
                cName: 'reminderno', 
                cLabel: 'Reminder No', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminderdate: { 
                cValidate :'required', 
                cName: 'reminderdate', 
                cLabel: 'Reminder Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_referenceno2: { 
                cValidate :'', 
                cName: 'oldreferenceno', 
                cLabel: 'oldReference No', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'N' }, { text: 'No', value: 'X' }], 
                cRadioDefaultOption: '', 
                cLabel:'Include Reminder ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OnremindernoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{reminderno}
            }
        })
        this.$forceUpdate()
        },
        OnreminderdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {   
//{reminderdate}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data == 'N'){
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true

                    this.PI_reasoncd.cValidate = ''
                    this.$refs.ref_reasoncd.isRequired = false

                    this.PI_reasondescs.cValidate = ''
                    this.$refs.ref_reasondescs.isRequired = false

                    
                } else {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false

                    this.PI_reasoncd.cValidate = 'required'
                    this.$refs.ref_reasoncd.isRequired = true

                    this.PI_reasondescs.cValidate = 'required'
                    this.$refs.ref_reasondescs.isRequired = true
                }
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_AR_ReminderMaintH.reasoncd = data.id
            this.M_AR_ReminderMaintH.reasoncdLabel = data.label

            this.M_AR_ReminderMaintH.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
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
            if(this.M_AR_ReminderMaintH.status == 'N'){
                console.log(this.M_AR_ReminderMaintH)
                var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ReferenceNo: this.M_AR_ReminderMaintH.referenceno,
                OldReferenceNo: this.M_AR_ReminderMaintH.oldreferenceno,
                DebtorCd: this.M_AR_ReminderMaintH.debtorcd,
                Status: 'N',
                ReminderNo: this.M_AR_ReminderMaintH.reminderno == '' || this.M_AR_ReminderMaintH.reminderno == null ? 'NULL' : this.M_AR_ReminderMaintH.reminderno ,
                ReminderDate: this.M_AR_ReminderMaintH.reminderdate == '' || this.M_AR_ReminderMaintH.reminderdate == null ? 'NULL' : this.M_AR_ReminderMaintH.reminderdate ,
                ReasonCd: '' ,
                ReasonDescs: '',
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_ReminderMaintH.lastupdatestamp                
                }
            }
            else{
                console.log(this.M_AR_ReminderMaintH)
                var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ReferenceNo: this.M_AR_ReminderMaintH.referenceno,
                OldReferenceNo: this.M_AR_ReminderMaintH.oldreferenceno,
                DebtorCd: this.M_AR_ReminderMaintH.debtorcd,
                Status: 'X',
                ReminderNo: this.M_AR_ReminderMaintH.reminderno == '' || this.M_AR_ReminderMaintH.reminderno == null ? 'NULL' : this.M_AR_ReminderMaintH.reminderno ,
                ReminderDate: this.M_AR_ReminderMaintH.reminderdate == '' || this.M_AR_ReminderMaintH.reminderdate == null ? 'NULL' : this.M_AR_ReminderMaintH.reminderdate ,
                ReasonCd: this.M_AR_ReminderMaintH.reasoncd == '' || this.M_AR_ReminderMaintH.reasoncd == null ? 'NULL' : this.M_AR_ReminderMaintH.reasoncd ,
                ReasonDescs: this.M_AR_ReminderMaintH.reasondescs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_ReminderMaintH.lastupdatestamp                
                }
            }
            

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_ReminderMaintH = {
                reminderno: 0,
                debtorcd: '',
                referenceno: '',
                oldreferenceno: '',
                reminderdate: '',
                status: '',
                reasoncd: '',
                reasondescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                cmreasondescs: '',
                // debtorname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                referenceno: record.ReferenceNo,
                debtorcd: record.DebtorCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
                this.M_AR_ReminderMaintH = {
                    reminderno: data.reminderno,
                    debtorcd: data.debtorcd,
                    referenceno: data.referenceno,
                    oldreferenceno: data.referenceno,
                    reminderdate: data.reminderdate,
                    status: data.status,
                    reasoncd: data.reasoncd,
                    reasondescs: data.reasondescs,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    cmreasondescs: data.cmreasondescs,
                    // debtorname: data.debtorname,
                    subportfoliocd: data.subportfoliocd,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                 

                this.M_AR_ReminderMaintH.reasoncdLabel = this.M_AR_ReminderMaintH.reasoncd != null ? data.reasoncd + this.separator + data.reasondescs :'' 
         

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

