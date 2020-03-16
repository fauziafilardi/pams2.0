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
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_GL_LedgerAllocation.runningcd" :label="M_GL_LedgerAllocation.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocationno" v-model="M_GL_LedgerAllocation.allocationno"  ref="ref_allocationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnallocationdateChange" :prop="PI_allocationdate" v-model="M_GL_LedgerAllocation.allocationdate"  ref="ref_allocationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_GL_LedgerAllocation.accountcd" :label="M_GL_LedgerAllocation.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_GL_LedgerAllocation.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_LedgerAllocation.descs"  ref="ref_descs"/>
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
		FormType: "ListProcess",
		Module:"GL",
            propList: {
                initialWhere: "StatusCd='N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_LedgerAllocation :{
                runningcd: '',
                allocationno: '',
                referenceno: '',
                allocationdate: this.momentDate(new Date()),
                accountcd: '',
                descs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                rundescs: '',
                accountdescs: '',
                status: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: " (ModuleCd is null OR ModuleCd = 'GL') "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Running Code', 
                cKey: true, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_allocationno: { 
                cValidate :'required', 
                cName: 'allocationno', 
                cLabel: 'Allocation No', 
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
            PI_allocationdate: { 
                cValidate :'required', 
                cName: 'allocationdate', 
                cLabel: 'Allocation Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A' AND SuppressRevaluation = 'N'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_referenceno: { 
                cValidate :'required|max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:30', 
                cName: 'descs', 
                cLabel: 'Description', 
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
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAllocation.runningcd = data.id
            this.M_GL_LedgerAllocation.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                if (data.id && data.id != '') {
                    this.M_GL_LedgerAllocation.allocationno = '(auto number)'
                }
            }
        })
        this.$forceUpdate()
        },
        OnallocationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{allocationdate}
            }
        })
        this.$forceUpdate()
        },
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_LedgerAllocation.accountcd = data.id
            this.M_GL_LedgerAllocation.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
            this.getToolbar().statusFunction[4].text = 'Post'
            // this.getToolbar().statusFunction[4].disabled = false
            // this.$store.commit('setIsPost', true)
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
            // if (record.StatusCd == 'P') {
            //     this.$store.commit('setEditStatus', false)
            //     this.$store.commit('setDeleteStatus', false)
            // }
            // else {
            //     this.$store.commit('setEditStatus', true)
            //     this.$store.commit('setDeleteStatus', true)
            // }
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt) {
            var data = this.FormToABSList().getRowSelected()
            var dataPost = []

            data.forEach((value) => {
                dataPost.push({
                    _Message_: " AllocationNo " + value.AllocationNo,
                    SubPortfolioCd :this.getDataUser().SubPortfolioCd,
                    AllocationNo : value.AllocationNo,
                    ReferenceNo : value.ReferenceNo,
                    AccountCd : value.AccountCd,
                    Checked : 'P',
                    User : this.getDataUser().UserId
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }
            
            this.postJSONMulti( this.getUrlPostMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultPost()
            })
        },
        M_Insert() {
        if (this.M_GL_LedgerAllocation.runningcd && this.M_GL_LedgerAllocation.runningcd != "") {
            this.FnGenerateRunningCode(
                this.getDataUser().SubPortfolioCd,
                this.M_GL_LedgerAllocation.runningcd,
                this.getDataUser().UserId,
                this.M_GL_LedgerAllocation.allocationdate
            ).then(dt9 => {
                if (dt9 != null) {
                    this.M_GL_LedgerAllocation.allocationno = dt9.RunningCode
                    var param = {			
                        OptionSeq: this.getOptionSeq().OptionSeq,
                        LineNo: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        AllocationNo: this.M_GL_LedgerAllocation.allocationno,
                        RunCd: this.M_GL_LedgerAllocation.runningcd,
                        AllocationDate: this.M_GL_LedgerAllocation.allocationdate == '' || this.M_GL_LedgerAllocation.allocationdate == null ? 'NULL' : this.M_GL_LedgerAllocation.allocationdate ,
                        AccountCd: this.M_GL_LedgerAllocation.accountcd == '' || this.M_GL_LedgerAllocation.accountcd == null ? 'NULL' : this.M_GL_LedgerAllocation.accountcd ,
                        ReferenceNo: this.M_GL_LedgerAllocation.referenceno,
                        Descs: this.M_GL_LedgerAllocation.descs,
                        UserInput: this.getDataUser().UserId                 
                    }

                    this.postJSON(this.getUrlInsert(), param)
                    .then((response) => {
                        if(response == null) return

                        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                        this.$parent.resultInsert(response.Message)
                    })
                }
            })
        }

        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AllocationNo: this.M_GL_LedgerAllocation.allocationno,
                RunCd: this.M_GL_LedgerAllocation.runningcd,
                AllocationDate: this.M_GL_LedgerAllocation.allocationdate == '' || this.M_GL_LedgerAllocation.allocationdate == null ? 'NULL' : this.M_GL_LedgerAllocation.allocationdate ,
                AccountCd: this.M_GL_LedgerAllocation.accountcd == '' || this.M_GL_LedgerAllocation.accountcd == null ? 'NULL' : this.M_GL_LedgerAllocation.accountcd ,
                ReferenceNo: this.M_GL_LedgerAllocation.referenceno,
                Descs: this.M_GL_LedgerAllocation.descs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_LedgerAllocation.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_LedgerAllocation = {
                runningcd: '',
                allocationno: '',
                referenceno: '',
                allocationdate: this.momentDate(new Date()),
                accountcd: '',
                descs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                rundescs: '',
                accountdescs: '',
                status: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_runningcd.focus()
        },
        M_Edit(){
            this.$refs.ref_allocationdate.focus()
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AllocationNo: value.AllocationNo,
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
                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                subportfoliocd: record.SubPortfolioCd,
                allocationno: record.AllocationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_LedgerAllocation = {
                runningcd: data.runningcd,
                allocationno: data.allocationno,
                referenceno: data.referenceno,
                allocationdate: data.allocationdate,
                accountcd: data.accountcd,
                descs: data.descs,
                userinput: data.userinput,
                useredit: data.useredit,
                rundescs: data.rundescs,
                accountdescs: data.accountdescs,
                status: data.status,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_LedgerAllocation.runningcdLabel = this.M_GL_LedgerAllocation.runningcd != null ? data.runningcd + this.separator + data.rundescs :'' 
                this.M_GL_LedgerAllocation.accountcdLabel = this.M_GL_LedgerAllocation.accountcd != null ? data.accountcd + this.separator + data.accountdescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','ListProcess')
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

