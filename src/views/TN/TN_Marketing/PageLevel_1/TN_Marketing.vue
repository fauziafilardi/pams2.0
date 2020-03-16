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
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_Marketing.contactid" :label="M_TN_Marketing.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_Marketing.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnmarketingagentChange" :prop="PI_marketingagent" :value="M_TN_Marketing.marketingagent" :label="M_TN_Marketing.marketingagentLabel" ref="ref_marketingagent"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnmarketinggroupcdChange" :prop="PI_marketinggroupcd" :value="M_TN_Marketing.marketinggroupcd" :label="M_TN_Marketing.marketinggroupcdLabel" ref="ref_marketinggroupcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnstartdateChange" :prop="PI_startdate" v-model="M_TN_Marketing.startdate"  ref="ref_startdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_Marketing.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_Marketing.reasoncd" :label="M_TN_Marketing.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_Marketing.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_Marketing.remarks"  ref="ref_remarks" />
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
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' And Status ='A'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_Marketing :{
                contactid: '',
                referenceno: '',
                marketingagent: '',
                marketinggroupcd: '',
                startdate: '',
                status: 'A',
                reasoncd: '',
                reasondescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                contactname: '',
                cmreasondescs: '',
                marketingagent1: '',
                marketingagentname: '',
                marketinggroupname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd
                    }
            ,
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'contactid', 
                cLabel: 'Contact ID ', 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_marketingagent: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNMarketingAgent'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'marketingagent', 
                cLabel: 'Marketing Agent ', 
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
                cMasterUrl: 'TN/TN_MarketingAgent' ,
                cDisplayColumn: 'ContactID,Name' ,
            }, 
            PI_marketinggroupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupMarketingGroup'    , 
                    ColumnDB: 'MarketingGroupCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'marketinggroupcd', 
                cLabel: 'Marketing Group ', 
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
                cMasterUrl: 'TN/TN_MarketingGroup' ,
                cDisplayColumn: 'MarketingGroupCd,Descs' ,
            }, 
            PI_startdate: { 
                cValidate :'max:20', 
                cName: 'startdate', 
                cLabel: 'Start Date', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
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
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 6, 
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
                    InitialWhere: "ModuleCd='TN' or ModuleCd is null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cValidate :'required|max:150', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_Marketing.contactid = data.id
            this.M_TN_Marketing.contactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OnmarketingagentChange (data) {
        this.$nextTick(() => {
            this.M_TN_Marketing.marketingagent = data.id
            this.M_TN_Marketing.marketingagentLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketingagent}
            }
        })
        this.$forceUpdate()
        },
        OnmarketinggroupcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Marketing.marketinggroupcd = data.id
            this.M_TN_Marketing.marketinggroupcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketinggroupcd}
            }
        })
        this.$forceUpdate()
        },
        OnstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startdate}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data == 'N') {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false
                    this.PI_reasoncd.cValidate = 'required'
                    this.PI_reasondescs.cValidate = 'required'

                } 
                else {
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true
                    this.PI_reasoncd.cValidate = ''
                    this.PI_reasondescs.cValidate = ''
                    this.M_TN_Marketing.reasoncd = ""
                    this.M_TN_Marketing.reasoncdLabel = ""
                    this.M_TN_Marketing.reasondescs = ""
                }
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Marketing.reasoncd = data.id
            this.M_TN_Marketing.reasoncdLabel = data.label
            this.M_TN_Marketing.reasondescs = data.Descs
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ContactId: this.M_TN_Marketing.contactid == '' || this.M_TN_Marketing.contactid == null ? 'NULL' : this.M_TN_Marketing.contactid ,
                ReferenceNo: this.M_TN_Marketing.referenceno,
                MarketingAgent: this.M_TN_Marketing.marketingagent == '' || this.M_TN_Marketing.marketingagent == null ? 'NULL' : this.M_TN_Marketing.marketingagent ,
                MarketingGroupCd: this.M_TN_Marketing.marketinggroupcd == '' || this.M_TN_Marketing.marketinggroupcd == null ? 'NULL' : this.M_TN_Marketing.marketinggroupcd ,
                StartDate: this.M_TN_Marketing.startdate == '' || this.M_TN_Marketing.startdate == null ? 'NULL' : this.M_TN_Marketing.startdate ,
                Status: this.M_TN_Marketing.status,
                ReasonCd: this.M_TN_Marketing.reasoncd == '' || this.M_TN_Marketing.reasoncd == null ? 'NULL' : this.M_TN_Marketing.reasoncd ,
                ReasonDescs: this.M_TN_Marketing.reasondescs,
                Remarks: this.M_TN_Marketing.remarks,
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ContactId: this.M_TN_Marketing.contactid == '' || this.M_TN_Marketing.contactid == null ? 'NULL' : this.M_TN_Marketing.contactid ,
                ReferenceNo: this.M_TN_Marketing.referenceno,
                MarketingAgent: this.M_TN_Marketing.marketingagent == '' || this.M_TN_Marketing.marketingagent == null ? 'NULL' : this.M_TN_Marketing.marketingagent ,
                MarketingGroupCd: this.M_TN_Marketing.marketinggroupcd == '' || this.M_TN_Marketing.marketinggroupcd == null ? 'NULL' : this.M_TN_Marketing.marketinggroupcd ,
                StartDate: this.M_TN_Marketing.startdate == '' || this.M_TN_Marketing.startdate == null ? 'NULL' : this.M_TN_Marketing.startdate ,
                Status: this.M_TN_Marketing.status,
                ReasonCd: this.M_TN_Marketing.reasoncd == '' || this.M_TN_Marketing.reasoncd == null ? 'NULL' : this.M_TN_Marketing.reasoncd ,
                ReasonDescs: this.M_TN_Marketing.reasondescs,
                Remarks: this.M_TN_Marketing.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_Marketing.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_Marketing = {
                contactid: '',
                referenceno: '',
                marketingagent: '',
                marketinggroupcd: '',
                startdate: '',
                status: 'A',
                reasoncd: '',
                reasondescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                contactname: '',
                cmreasondescs: '',
                marketingagent1: '',
                marketingagentname: '',
                marketinggroupname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ContactId: value.ContactID == '' || value.ContactID == null ? 'NULL' : value.ContactID ,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''


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
,               SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                contactid: record.ContactID
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_Marketing = {
                contactid: data.contactid,
                referenceno: data.referenceno,
                marketingagent: data.marketingagent,
                marketinggroupcd: data.marketinggroupcd,
                startdate: data.startdate,
                status: data.status,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                contactname: data.contactname,
                cmreasondescs: data.cmreasondescs,
                marketingagent1: data.marketingagent1,
                marketingagentname: data.marketingagentname,
                marketinggroupname: data.marketinggroupname,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_Marketing.contactidLabel = this.M_TN_Marketing.contactid != null && this.M_TN_Marketing.contactid != '' ? data.contactid + this.separator + data.contactname :'' 
                this.M_TN_Marketing.marketingagentLabel = this.M_TN_Marketing.marketingagent != null && this.M_TN_Marketing.marketingagent != '' ? data.marketingagent + this.separator + data.marketingagentname :'' 
                this.M_TN_Marketing.marketinggroupcdLabel = this.M_TN_Marketing.marketinggroupcd != null && this.M_TN_Marketing.marketinggroupcd != '' ? data.marketinggroupcd + this.separator + data.marketinggroupname :'' 
                this.M_TN_Marketing.reasoncdLabel = this.M_TN_Marketing.reasoncd != null && this.M_TN_Marketing.reasoncd != '' ? data.reasoncd :'' 
         

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

