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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requestno" v-model="M_TN_UnLoadingUpdate.requestno"  ref="ref_requestno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loono" v-model="M_TN_UnLoadingUpdate.loonodate"  ref="ref_loonodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex  :prop="PI_requestdate" v-model="M_TN_UnLoadingUpdate.requestdate"  ref="ref_requestdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_clano" v-model="M_TN_UnLoadingUpdate.clanodate"  ref="ref_clanodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_UnLoadingUpdate.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_eventname" v-model="M_TN_UnLoadingUpdate.eventname"  ref="ref_eventname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_UnLoadingUpdate.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_eventfromto" v-model="M_TN_UnLoadingUpdate.eventfromto" ref="ref_eventfromto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_name" v-model="M_TN_UnLoadingUpdate.name"  ref="ref_name" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_location" v-model="M_TN_UnLoadingUpdate.location"  ref="ref_location" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_TN_UnLoadingUpdate.effectivedate"  ref="ref_effectivedate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_UnLoadingUpdate.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requestby" v-model="M_TN_UnLoadingUpdate.requestby"  ref="ref_requestby"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requesterpic" v-model="M_TN_UnLoadingUpdate.requesterpic"  ref="ref_requesterpic"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_phoneno" v-model="M_TN_UnLoadingUpdate.phoneno"  ref="ref_phoneno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_UnLoadingUpdate.reasoncd" :label="M_TN_UnLoadingUpdate.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_UnLoadingUpdate.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Unloading Update
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputDateTime @input="OnactualdateChange" :prop="PI_actualdate" v-model="M_TN_UnLoadingUpdate.actualdate"  ref="ref_actualdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnitemcompliedtolistChange" :prop="PI_itemcompliedtolist" v-model="M_TN_UnLoadingUpdate.itemcompliedtolist"  ref="ref_itemcompliedtolist" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_checkby" v-model="M_TN_UnLoadingUpdate.checkby"  ref="ref_checkby"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnupdatenotesChange" :prop="PI_updatenotes" v-model="M_TN_UnLoadingUpdate.updatenotes"  ref="ref_updatenotes" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_UnLoadingUpdate.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
                initialWhere: "StatusLoading in ('Y','C') AND RequestType = 'U' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},
            DataSelected: [],
            CanDelete: true,     			

            M_TN_UnLoadingUpdate :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                requestno: '',
                requesttype: '',
                requestdate: '',
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
                fromdate: '',
                todate: '',
                location: '',
                rowid: 0,
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
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loono: { 
                cLabel: 'LOO No - Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_requestdate: { 
                cValidate :'max:20', 
                cName: 'requestdate', 
                cLabel: 'Request Date', 
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
            PI_loodate: { 
                cLabel: 'LOO Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'max:20', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_clano: { 
                cLabel: 'CLA No - Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                cValidate :'', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
            PI_cladate: { 
                cLabel: 'CLA Date', 
                cLabelSize: 4, 
                cValue: '', 
                cKey: true,
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
            PI_eventname: { 
                cLabel: 'Event Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_effectivedate: { 
                cValidate :'max:20', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date', 
                cLabelSize: 4,
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromdate: { 
                cValidate :'', 
                cName: 'fromdate', 
                cLabel: 'Event From - To', 
                cLabelSize: 4,
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_requestby: { 
                cValidate :'max:50', 
                cName: 'requestby', 
                cLabel: 'Request By', 
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
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
            PI_requesterpic: { 
                cValidate :'max:50', 
                cName: 'requesterpic', 
                cLabel: 'Customer PIC', 
                cLabelSize: 4, 
                cKey: true, 
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
                cKey: true, 
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
            PI_phoneno: { 
                cValidate :'max:50', 
                cName: 'phoneno', 
                cLabel: 'Phone No', 
                cLabelSize: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
                cLabel: 'Reason Code', 
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
                cValidate :'max:150', 
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
            PI_actualdate: { 
                cValidate :'required', 
                cName: 'actualdate', 
                cLabel: 'Actual Unloading', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cFormat: 'dd/MM/yyyy', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_itemcompliedtolist: { 
                cValidate :'', 
                cName: 'itemcompliedtolist', 
                cId: 'rdbitemcompliedtolist', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Item According to List', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_checkby: { 
                cValidate :'max:50', 
                cName: 'checkby', 
                cLabel: 'Check By', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_updatenotes: { 
                cValidate :'max:150', 
                cName:'updatenotes', 
                cLabel:'Notes', 
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
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'On Progress', value: 'Y' },{ text: 'Completed', value: 'C' },], 
                cRadioDefaultOption: '', 
                cLabel:'Unloading Status', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        OnrequestnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{requestno}
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
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_UnLoadingUpdate.reasoncd = data.id
            this.M_TN_UnLoadingUpdate.reasoncdLabel = data.label
            this.M_TN_UnLoadingUpdate.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
            }
        })
        this.$forceUpdate()
        },
        OnactualdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{actualdate}
            }
        })
        this.$forceUpdate()
        },
        OnitemcompliedtolistChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{itemcompliedtolist}
            }
        })
        this.$forceUpdate()
        },
        OnupdatenotesChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{updatenotes}
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
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
    },
    M_CheckboxChecked (data, status, index) {
          if (status === true) {
            if (data.Status && data.Status != 'Complete') {
              // this.$store.commit('setDeleteStatus', true)
              this.DataSelected.push({idx: index, CanDelete: true})
            }
            else {
              // this.$store.commit('setDeleteStatus', false)
              this.DataSelected.push({idx: index, CanDelete: false})
            }
          }
          else {
            this.$store.commit('setDeleteStatus', true)
            var id = this.DataSelected.map(x => x.idx).indexOf(index)
            this.DataSelected.splice(id,1)
          }

          if (this.DataSelected.length == 0) {
            this.CanDelete = true
            // this.$store.commit('setDeleteStatus', this.CanDelete)
          }
          else {
            for (var a = 0; a < this.DataSelected.length; a++) {
              if (this.DataSelected[a].CanDelete == false) {
                this.CanDelete = false
                break
              }
            }
          }
          
          this.$store.commit('setDeleteStatus', this.CanDelete)
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_UnLoadingUpdate.applicationno,
                RequestNo: this.M_TN_UnLoadingUpdate.requestno == '' || this.M_TN_UnLoadingUpdate.requestno == null ? 'NULL' : this.M_TN_UnLoadingUpdate.requestno ,
                ActualDate: this.M_TN_UnLoadingUpdate.actualdate == '' || this.M_TN_UnLoadingUpdate.actualdate == null ? 'NULL' : this.M_TN_UnLoadingUpdate.actualdate ,
                ItemCompliedToList: this.M_TN_UnLoadingUpdate.itemcompliedtolist,
                CheckBy: this.M_TN_UnLoadingUpdate.checkby,
                UpdateNotes: this.M_TN_UnLoadingUpdate.updatenotes,
                ReasonCd: this.M_TN_UnLoadingUpdate.reasoncd == '' || this.M_TN_UnLoadingUpdate.reasoncd == null ? 'NULL' : this.M_TN_UnLoadingUpdate.reasoncd ,
                ReasonDescs: this.M_TN_UnLoadingUpdate.reasondescs,
                Status: this.M_TN_UnLoadingUpdate.status,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_UnLoadingUpdate.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_UnLoadingUpdate = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                requestno: '',
                requesttype: '',
                requestdate: '',
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
                fromdate: '',
                todate: '',
                location: '',
                rowid: 0,
                loonodate: '',
                clanodate: '',
                eventfromto: ''
                    }
            		
		},
        M_New(){
          this.$refs.ref_requestno.focus()
        },
        M_Edit(){
          this.$refs.ref_applicationno.focus()
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    RequestNo: value.RequestNo == '' || value.RequestNo == null ? 'NULL' : value.RequestNo ,
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
,               subportfoliocd: record.SubPortfolioCd,
                applicationno: record.ApplicationNo,
                requestno: record.RequestNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_UnLoadingUpdate = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
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
                fromdate: data.fromdate,
                todate: data.todate,
                location: data.location,
                rowid: data.rowid,
                loonodate: data.loono + ' - ' + this.momentDateFormatting(data.loodate, 'DD/MM/YYYY'),
                clanodate: data.lano + ' - ' + this.momentDateFormatting(data.ladate, 'DD/MM/YYYY'),
                eventfromto: this.momentDateFormatting(data.rcd, 'DD/MM/YYYY') + ' - ' + this.momentDateFormatting(data.red, 'DD/MM/YYYY')
                 
                    }
                 

                this.M_TN_UnLoadingUpdate.reasoncdLabel = this.M_TN_UnLoadingUpdate.reasoncd != null && this.M_TN_UnLoadingUpdate.reasoncd != '' ? data.reasoncd  :'' 
         
                if(data.status == 'C'){
                   this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }else{
                   this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_fromdate (data) {
            this.M_TN_UnLoadingUpdate.fromdate = data
        }
        ,MdtRange_todate (data) {
            this.M_TN_UnLoadingUpdate.todate = data
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

