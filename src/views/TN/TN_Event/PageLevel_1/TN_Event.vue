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
                                        <ABSinputTextVuex :prop="PI_eventno" v-model="M_TN_Event.eventno"  ref="ref_eventno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_Event.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OneventdateChange" :prop="PI_eventdate" v-model="M_TN_Event.eventdate"  ref="ref_eventdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_Event.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OneventtypecdChange" :prop="PI_eventtypecd" :value="M_TN_Event.eventtypecd" :label="M_TN_Event.eventtypecdLabel" ref="ref_eventtypecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_Event.customercategorycd" :label="M_TN_Event.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_Event.brandcd" :label="M_TN_Event.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_fromdate" :valueFrom="M_TN_Event.fromdate" :valueTo="M_TN_Event.todate" ref="ref_fromdate" @from="MdtRange_fromdate" @to="MdtRange_todate" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTimeRange :prop="PI_fromtime" :valueFrom="M_TN_Event.fromtime" :valueTo="M_TN_Event.totime" ref="ref_fromtime" @from="MdtRange_fromtime" @to="MdtRange_totime" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputTimeRange :prop="PI_operatingfromhour" v-model="M_TN_Event.operatingfromhour"  ref="ref_operatingfromhour"/> -->
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_Event.operatingfromhour" :valueTo="M_TN_Event.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnorganizerChange" :prop="PI_organizer" v-model="M_TN_Event.organizer"  ref="ref_organizer" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_Event.remarks"  ref="ref_remarks" />
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
        GetEventRunningCd: null,
		cInsertKey:'',
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status2 IN ('N','Y')",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            EventRunningCd: '',

            M_TN_Event :{
                eventno: '(auto)',
                eventdate: '',
                descs: '',
                eventtypecd: '',
                eventtypedescs: '',
                customercategorycd: '',
                customercategorydescs: '',
                brandcd: '',
                branddescs: '',
                fromdate: '',
                todate: '',
                leaseperiod: 0,
                chargeperiod: '',
                operatingfromhour: '',
                operatingtohour: '',
                organizer: 'E',
                remarks: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lotcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_eventno: { 
                cValidate :'required|max:20', 
                cName: 'eventno', 
                cLabel: 'Event No', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_eventdate: { 
                cValidate :'required', 
                cName: 'eventdate', 
                cLabel: 'Event Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_eventtypecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetEventTypeCd'    , 
                    ColumnDB: 'EventTypeCd'   , 
                    InitialWhere: "", 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'eventtypecd', 
                cLabel: 'Event Type', 
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
                cMasterUrl: 'TN/TN_EventType' ,
                cDisplayColumn: 'EventTypeCd,Descs' ,
            }, 
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCustomerCategoryCd'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND CLStatus='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category ', 
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
                cMasterUrl: 'TN/TN_CustomerCategory' ,
                cDisplayColumn: 'CustomerCategoryCd,Descs' ,
            }, 
            PI_brandcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetBrandCd'    , 
                    ColumnDB: 'BrandCd'   , 
                    InitialWhere: "CLStatus='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Product Type', 
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
                cMasterUrl: 'TN/TN_BrandMaster' ,
                cDisplayColumn: 'BrandCd,BrandName' ,
            }, 
            PI_fromdate: { 
                cValidate :'required', 
                cName: 'fromdate', 
                cLabel: 'From - To Date', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingfromhour: { 
                cValidate :'required', 
                cName: 'fromdate', 
                cLabel: 'From - To Operating Hour', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_organizer: { 
                cValidate :'', 
                cName: 'organizer', 
                cId: 'rdborganizer', 
                cRadioOptions: [{ text: 'Event Organizer', value: 'E' },{ text: 'Inhouse', value: 'I' },], 
                cRadioDefaultOption: 'E', 
                cLabel:'Organizer', 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cOrder:10, 
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        GetEventRunningCdData(){
            var param = {
            OptionFunctionCd: "GetEventRunningCd",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]

                this.EventRunningCd = data.EventRunningCd


                if (data.EventRunningCd != "" && data.EventRunningCd != null) { 
                    this.PI_eventno.cProtect = true
                    this.M_TN_Event.eventno = "(auto)" 
                } else {
                    this.PI_eventno.cProtect = false
                    this.M_TN_Event.eventno = "" 
                } 
            })
        },		
        OneventdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{eventdate}
            }
        })
        this.$forceUpdate()
        },
        OneventtypecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Event.eventtypecd = data.id
            this.M_TN_Event.eventtypecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{eventtypecd}
            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Event.customercategorycd = data.id
            this.M_TN_Event.customercategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{customercategorycd}
            }
        })
        this.$forceUpdate()
        },
        OnbrandcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Event.brandcd = data.id
            this.M_TN_Event.brandcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{brandcd}
            }
        })
        this.$forceUpdate()
        },
        OnorganizerChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{organizer}
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
        if (this.EventRunningCd != "") { 
            this.FnGenerateRunningCode(this.getDataUser().SubPortfolioCd,this.EventRunningCd,this.getDataUser().UserId,this.M_TN_Event.eventdate
            ).then(dt9 => { 
                if (dt9 != null) {
                    this.M_TN_Event.eventno = dt9.RunningCode 
                    var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,                
                    EventNo: this.M_TN_Event.eventno,                
                    EventDate: this.M_TN_Event.eventdate == '' || this.M_TN_Event.eventdate == null ? 'NULL' : this.M_TN_Event.eventdate ,
                    Descs: this.M_TN_Event.descs,
                    EventTypeCd: this.M_TN_Event.eventtypecd == '' || this.M_TN_Event.eventtypecd == null ? 'NULL' : this.M_TN_Event.eventtypecd ,
                    CustomerCategoryCd: this.M_TN_Event.customercategorycd == '' || this.M_TN_Event.customercategorycd == null ? 'NULL' : this.M_TN_Event.customercategorycd ,
                    FromDate: this.M_TN_Event.fromdate == '' || this.M_TN_Event.fromdate == null ? 'NULL' : this.M_TN_Event.fromdate ,
                    ToDate: this.M_TN_Event.todate == '' || this.M_TN_Event.todate == null ? 'NULL' : this.M_TN_Event.todate ,
                    OperatingFromHour: this.M_TN_Event.operatingfromhour,
                    OperatingToHour: this.M_TN_Event.operatingtohour,
                    Organizer: this.M_TN_Event.organizer,
                    BrandCd: this.M_TN_Event.brandcd == '' || this.M_TN_Event.brandcd == null ? 'NULL' : this.M_TN_Event.brandcd ,
                    Remarks: this.M_TN_Event.remarks,
                    UserInput: this.getDataUser().UserId                 
                }
                    this.postJSON(this.getUrlInsert(), param)
                        .then((response) => {
                            if(response == null) return

				            //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                            this.$parent.resultInsert(response.Message)
                        })
            } })  } else {
                var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,                
                    EventNo: this.M_TN_Event.eventno,                
                    EventDate: this.M_TN_Event.eventdate == '' || this.M_TN_Event.eventdate == null ? 'NULL' : this.M_TN_Event.eventdate ,
                    Descs: this.M_TN_Event.descs,
                    EventTypeCd: this.M_TN_Event.eventtypecd == '' || this.M_TN_Event.eventtypecd == null ? 'NULL' : this.M_TN_Event.eventtypecd ,
                    CustomerCategoryCd: this.M_TN_Event.customercategorycd == '' || this.M_TN_Event.customercategorycd == null ? 'NULL' : this.M_TN_Event.customercategorycd ,
                    FromDate: this.M_TN_Event.fromdate == '' || this.M_TN_Event.fromdate == null ? 'NULL' : this.M_TN_Event.fromdate ,
                    ToDate: this.M_TN_Event.todate == '' || this.M_TN_Event.todate == null ? 'NULL' : this.M_TN_Event.todate ,
                    OperatingFromHour: this.M_TN_Event.operatingfromhour,
                    OperatingToHour: this.M_TN_Event.operatingtohour,
                    Organizer: this.M_TN_Event.organizer,
                    BrandCd: this.M_TN_Event.brandcd == '' || this.M_TN_Event.brandcd == null ? 'NULL' : this.M_TN_Event.brandcd ,
                    Remarks: this.M_TN_Event.remarks,
                    UserInput: this.getDataUser().UserId                 
                }
                    this.postJSON(this.getUrlInsert(), param)
                        .then((response) => {
                            if(response == null) return

				            //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                            this.$parent.resultInsert(response.Message)
                        })
            }
            
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                EventNo: this.M_TN_Event.eventno,
                EventDate: this.M_TN_Event.eventdate == '' || this.M_TN_Event.eventdate == null ? 'NULL' : this.M_TN_Event.eventdate ,
                Descs: this.M_TN_Event.descs,
                EventTypeCd: this.M_TN_Event.eventtypecd == '' || this.M_TN_Event.eventtypecd == null ? 'NULL' : this.M_TN_Event.eventtypecd ,
                CustomerCategoryCd: this.M_TN_Event.customercategorycd == '' || this.M_TN_Event.customercategorycd == null ? 'NULL' : this.M_TN_Event.customercategorycd ,
                FromDate: this.M_TN_Event.fromdate == '' || this.M_TN_Event.fromdate == null ? 'NULL' : this.M_TN_Event.fromdate ,
                ToDate: this.M_TN_Event.todate == '' || this.M_TN_Event.todate == null ? 'NULL' : this.M_TN_Event.todate ,
                OperatingFromHour: this.M_TN_Event.operatingfromhour,
                OperatingToHour: this.M_TN_Event.operatingtohour,
                Organizer: this.M_TN_Event.organizer,
                BrandCd: this.M_TN_Event.brandcd == '' || this.M_TN_Event.brandcd == null ? 'NULL' : this.M_TN_Event.brandcd ,
                Remarks: this.M_TN_Event.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_Event.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_Event = {
                eventno: '(auto)',
                eventdate: '',
                descs: '',
                eventtypecd: '',
                eventtypedescs: '',
                customercategorycd: '',
                customercategorydescs: '',
                brandcd: '',
                branddescs: '',
                fromdate: '',
                todate: '',
                leaseperiod: 0,
                chargeperiod: '',
                operatingfromhour: '',
                operatingtohour: '',
                organizer: 'E',
                remarks: '',
                status: 'New',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lotcount: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            this.PI_eventdate.cKey = false
            this.PI_descs.cKey = false
            this.PI_eventtypecd.cKey = false
            this.PI_customercategorycd.cKey = false
            this.PI_brandcd.cKey = false
            this.PI_fromdate.cKey = false
            this.PI_operatingfromhour.cKey = false
            this.PI_organizer.cKey = false
            this.GetEventRunningCdData()

        // [GetEventRunningCd].then(FnOpt4 => { if (FnOpt4 != null) { 
        //      if (FnOpt4.EventRunningCd != "" && FnOpt4.EventRunningCd != null)
        //           { this.PI_eventno.cProtect = true
        //           this.M_TN_Event.eventno = "(auto)" }
        // else {
        //      this.PI_eventno.cProtect = false
        //           this.M_TN_Event.eventno = "" } } })
			
        },
        M_Edit(){
            
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    EventNo: value.EventNo,
                    LastUpdateStamp: value.LastUpdateStamp,
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
            if(record.Status2 == 'Y'){
                this.PI_eventdate.cKey = true
                this.PI_descs.cKey = true
                this.PI_eventtypecd.cKey = true
                this.PI_customercategorycd.cKey = true
                this.PI_brandcd.cKey = true
                this.PI_fromdate.cKey = true
                this.PI_operatingfromhour.cKey = true
                this.PI_organizer.cKey = true                
            }else{
                this.PI_eventdate.cKey = false
                this.PI_descs.cKey = false
                this.PI_eventtypecd.cKey = false
                this.PI_customercategorycd.cKey = false
                this.PI_brandcd.cKey = false
                this.PI_fromdate.cKey = false
                this.PI_operatingfromhour.cKey = false
                this.PI_organizer.cKey = false
            }
            
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                eventno: record.EventNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                
this.M_TN_Event = {
                eventno: data.eventno,
                eventdate: data.eventdate,
                descs: data.descs,
                eventtypecd: data.eventtypecd,
                eventtypedescs: data.eventtypedescs,
                customercategorycd: data.customercategorycd,
                customercategorydescs: data.customercategorydescs,
                brandcd: data.brandcd,
                branddescs: data.branddescs,
                fromdate: data.fromdate,
                todate: data.todate,
                leaseperiod: this.isCurrency(data.leaseperiod, this.decimal),
                chargeperiod: data.chargeperiod,
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                organizer: data.organizer,
                remarks: data.remarks,
                status: data.status,
                userinput: data.userinput,
                useredit: data.useredit,
                lotcount: this.isCurrency(data.lotcount, this.decimal),
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_Event.eventtypecdLabel = this.M_TN_Event.eventtypecd != null && this.M_TN_Event.eventtypecd != '' ? data.eventtypecd + this.separator + data.eventtypedescs :'' 
                this.M_TN_Event.customercategorycdLabel = this.M_TN_Event.customercategorycd != null && this.M_TN_Event.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs :'' 
                this.M_TN_Event.brandcdLabel = this.M_TN_Event.brandcd != null && this.M_TN_Event.brandcd != '' ? data.brandcd + this.separator + data.branddescs :''
                
                switch (data.status) {
                    case "New":
                        this.M_TN_Event.status = "New"
                        break;                
                    default:
                        this.M_TN_Event.status = "Yes"
                        break;
                }         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_fromdate (data) {
            this.M_TN_Event.fromdate = data
        }
        ,MdtRange_todate (data) {
            this.M_TN_Event.todate = data
        }
        ,MdtRange_operatingfromhour (data){
            this.M_TN_Event.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
            this.M_TN_Event.operatingtohour = data
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

