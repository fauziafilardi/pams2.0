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
                                        <ABSinputTextVuex :prop="PI_requestno" v-model="M_TN_CLLoadingEntry.requestno"  ref="ref_requestno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loonodate" v-model="M_TN_CLLoadingEntry.loonodate"  ref="ref_loonodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnrequestdateChange" :prop="PI_requestdate" v-model="M_TN_CLLoadingEntry.requestdate"  ref="ref_requestdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_clanodate" v-model="M_TN_CLLoadingEntry.clanodate"  ref="ref_clanodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_CLLoadingEntry.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_eventtype" v-model="M_TN_CLLoadingEntry.eventtype"  ref="ref_eventtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_CLLoadingEntry.applicationno" :label="M_TN_CLLoadingEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_eventname" v-model="M_TN_CLLoadingEntry.eventname"  ref="ref_eventname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_name" v-model="M_TN_CLLoadingEntry.name"  ref="ref_name" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_eventfromto" v-model="M_TN_CLLoadingEntry.eventfromto" ref="ref_eventfromto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_TN_CLLoadingEntry.effectivedate"  ref="ref_effectivedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requestby" v-model="M_TN_CLLoadingEntry.requestby"  ref="ref_requestby"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_location" v-model="M_TN_CLLoadingEntry.location"  ref="ref_location" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requesterpic" v-model="M_TN_CLLoadingEntry.requesterpic"  ref="ref_requesterpic"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_phoneno" v-model="M_TN_CLLoadingEntry.phoneno"  ref="ref_phoneno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLLoadingEntry.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND RequestType = 'L' AND Status = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_CLLoadingEntry :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                nameapp: '',
                requestno: '',
                requesttype: '',
                requestdate: this.getToday(),
                descs: '',
                effectivedate: '',
                requestby: '',
                requesterpic: '',
                phoneno: '',
                actualdate: '',
                itemcompliedtolist: '',
                checkby: '',
                updatenotes: '',
                reasoncd: '',
                reasondescs: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                eventdescs: '',
                loono: '',
                loodate: '',
                lano: '',
                ladate: '',
                rcd: '',
                red: '',
                contactid: '',
                eventtype: '',
                name: '',
                eventname: '',
                location: '',
                loonodate: '',
                clanodate: '',
                eventfromto: ''
                    }
            ,
            PI_requestno: { 
                cValidate :'max:20', 
                cName: 'requestno', 
                cLabel: 'Request No', 
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
            PI_loonodate: { 
                cLabel: 'LOO No - Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_loono: { 
                cLabel: 'LOO No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_loodate: { 
                cLabel: 'LOO Date', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_requestdate: { 
                cValidate :'', 
                cName: 'requestdate', 
                cLabel: 'Request Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_clanodate: { 
                cLabel: 'CLA No - Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_clano: { 
                cLabel: 'CLA No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_cladate: { 
                cLabel: 'CLA Date', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'max:60', 
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
            PI_eventtype: { 
                cLabel: 'Event Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetApplicationNo_UnLoadingEntry'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and Status='A' and CustomerType ='C' and RED>GetDate()"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
                cDisplayColumn: 'ApplicationNo,Name' ,
            }, 
            PI_eventname: { 
                cLabel: 'Event Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_name: { 
                cLabel: 'Tenant Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_eventfromto: { 
                cLabel: 'Event From - To', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_effectivedate: { 
                cValidate :'required|', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_location: { 
                cLabel: 'Location', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_requestby: { 
                cValidate :'max:50', 
                cName: 'requestby', 
                cLabel: 'Request By', 
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
            PI_requesterpic: { 
                cValidate :'max:50', 
                cName: 'requesterpic', 
                cLabel: 'Customer PIC', 
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
            PI_phoneno: { 
                cValidate :'max:50', 
                cName: 'phoneno', 
                cLabel: 'Phone No', 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cFormPageNo: this.data.PageOrder,
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
      GetSpecificationData(){ 
          var param = {
            OptionFunctionCd: "GetSpecification",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]

                if (data.LoadingRunningCd != null && data.LoadingRunningCd != "") { 
                  this.M_TN_CLLoadingEntry.requestno = "(auto)"
                } else {
                  this.M_TN_CLLoadingEntry.requestno = ""
                }

            })
        },
        OnrequestdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{requestdate}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLLoadingEntry.applicationno = data.id
            this.M_TN_CLLoadingEntry.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetTNApplicationNo(data.id)
//{applicationno}
            }
        })
        this.$forceUpdate()
        },
        OneffectivedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{effectivedate}
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
    GetTNApplicationNo (ApplicationNo) {
            var param = {
                OptionFunctionCd: "GetApplicationNoLoadingEntry",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: ApplicationNo,
                
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
 
                this.M_TN_CLLoadingEntry.eventname = ress[0].Descs
                this.M_TN_CLLoadingEntry.eventtype = ress[0].Type
                this.M_TN_CLLoadingEntry.requesterpic = ress[0].Name
                this.M_TN_CLLoadingEntry.phoneno = ress[0].PhoneNo
          })
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
        if (this.M_TN_CLLoadingEntry.requestno == "(auto)")
             { this.M_TN_CLLoadingEntry.requestno = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RequestNo: this.M_TN_CLLoadingEntry.requestno,
                RequestDate: this.M_TN_CLLoadingEntry.requestdate == '' || this.M_TN_CLLoadingEntry.requestdate == null ? 'NULL' : this.M_TN_CLLoadingEntry.requestdate ,
                ApplicationNo: this.M_TN_CLLoadingEntry.applicationno,
                Descs: this.M_TN_CLLoadingEntry.descs,
                EffectiveDate: this.M_TN_CLLoadingEntry.effectivedate == '' || this.M_TN_CLLoadingEntry.effectivedate == null ? 'NULL' : this.M_TN_CLLoadingEntry.effectivedate ,
                RequestBy: this.M_TN_CLLoadingEntry.requestby,
                RequesterPIC: this.M_TN_CLLoadingEntry.requesterpic,
                PhoneNo: this.M_TN_CLLoadingEntry.phoneno,
                Remarks: this.M_TN_CLLoadingEntry.remarks,
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
                RequestNo: this.M_TN_CLLoadingEntry.requestno,
                RequestDate: this.M_TN_CLLoadingEntry.requestdate == '' || this.M_TN_CLLoadingEntry.requestdate == null ? 'NULL' : this.M_TN_CLLoadingEntry.requestdate ,
                ApplicationNo: this.M_TN_CLLoadingEntry.applicationno,
                Descs: this.M_TN_CLLoadingEntry.descs,
                EffectiveDate: this.M_TN_CLLoadingEntry.effectivedate == '' || this.M_TN_CLLoadingEntry.effectivedate == null ? 'NULL' : this.M_TN_CLLoadingEntry.effectivedate ,
                RequestBy: this.M_TN_CLLoadingEntry.requestby,
                RequesterPIC: this.M_TN_CLLoadingEntry.requesterpic,
                PhoneNo: this.M_TN_CLLoadingEntry.phoneno,
                Remarks: this.M_TN_CLLoadingEntry.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLLoadingEntry.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLLoadingEntry = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                nameapp: '',
                requestno: '',
                requesttype: '',
                requestdate: this.getToday(),
                descs: '',
                effectivedate: '',
                requestby: '',
                requesterpic: '',
                phoneno: '',
                actualdate: '',
                itemcompliedtolist: '',
                checkby: '',
                updatenotes: '',
                reasoncd: '',
                reasondescs: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                eventdescs: '',
                loono: '',
                loodate: '',
                lano: '',
                ladate: '',
                rcd: '',
                red: '',
                contactid: '',
                eventtype: '',
                name: '',
                eventname: '',
                location: '',
                loonodate: '',
                clanodate: '',
                eventfromto: ''
                    }
            		
		},
        M_New(){
          
          this.GetSpecificationData()
        // if (this.TNSpec.LoadingRunningCd != null && this.TNSpec.LoadingRunningCd != "")
        //      { this.M_TN_CLLoadingEntry.requestno = "(auto)"
        //      this.PI_requestno.cProtect = true }
        // else {
        //      this.M_TN_CLLoadingEntry.requestno = ""
        //      this.PI_requestno.cProtect = false }
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    RequestNo: value.RequestNo,
                    ApplicationNo: value.ApplicationNo,
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
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                requestno: record.RequestNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_CLLoadingEntry = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                nameapp: data.nameapp,
                requestno: data.requestno,
                requesttype: data.requesttype,
                requestdate: data.requestdate,
                descs: data.descs,
                effectivedate: data.effectivedate,
                requestby: data.requestby,
                requesterpic: data.requesterpic,
                phoneno: data.phoneno,
                actualdate: data.actualdate,
                itemcompliedtolist: data.itemcompliedtolist,
                checkby: data.checkby,
                updatenotes: data.updatenotes,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                eventdescs: data.eventdescs,
                loono: data.loono,
                loodate: data.loodate,
                lano: data.lano,
                ladate: data.ladate,
                rcd: data.rcd,
                red: data.red,
                contactid: data.contactid,
                eventtype: data.eventtype,
                name: data.name,
                eventname: data.eventname,
                location: data.location,
                loonodate: data.loono + ' - ' + this.momentDateFormatting(data.loodate, 'DD/MM/YYYY'),
                clanodate: data.lano + ' - ' + this.momentDateFormatting(data.ladate, 'DD/MM/YYYY'),
                eventfromto: this.momentDateFormatting(data.rcd, 'DD/MM/YYYY') + ' - ' + this.momentDateFormatting(data.red, 'DD/MM/YYYY')
                    
                    }
                 

                this.M_TN_CLLoadingEntry.applicationnoLabel = this.M_TN_CLLoadingEntry.applicationno != null && this.M_TN_CLLoadingEntry.applicationno != '' ? data.applicationno + this.separator + data.nameapp :'' 
         

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

