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
                                        <ABSCompute :prop="PI_stepno" v-model="M_TN_ContractWatchListMonitoring.stepno"  ref="ref_stepno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OncontractstatusChange" :prop="PI_contractstatus" v-model="M_TN_ContractWatchListMonitoring.contractstatus"  ref="ref_contractstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_descs" v-model="M_TN_ContractWatchListMonitoring.descs"  ref="ref_descs" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_applicationno" v-model="M_TN_ContractWatchListMonitoring.applicationno"  ref="ref_applicationno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_estimatedstartdate" v-model="M_TN_ContractWatchListMonitoring.estimatedstartdate"  ref="ref_estimatedstartdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loonodate" v-model="M_TN_ContractWatchListMonitoring.loonodate"  ref="ref_loonodate" />
                                      </b-col>
                                      <!-- <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">LOO No/Date</label>
                                          </b-col>
                                          <b-col md="3" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_loono" v-model="M_TN_ContractWatchListMonitoring.loono"  ref="ref_loono"/>    
                                          </b-col>
                                          <b-col md="1">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">/</label>
                                          </b-col>  
                                          <b-col md="3">
                                            <ABSDateOnly :prop="PI_loodate" v-model="M_TN_ContractWatchListMonitoring.loodate"  ref="ref_loodate"/>                                            
                                          </b-col>
                                        </b-row>
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnprocessindicatorChange" :prop="PI_processindicator" v-model="M_TN_ContractWatchListMonitoring.processindicator"  ref="ref_processindicator" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_loinodate" v-model="M_TN_ContractWatchListMonitoring.loinodate"  ref="ref_loinodate" />
                                      </b-col>
                                      <!-- <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">LOI No/Date</label>
                                          </b-col>
                                          <b-col md="3" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_loino" v-model="M_TN_ContractWatchListMonitoring.loino"  ref="ref_loino"/>    
                                          </b-col>
                                          <b-col md="1">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">/</label>
                                          </b-col>  
                                          <b-col md="3">
                                            <ABSDateOnly :prop="PI_loidate" v-model="M_TN_ContractWatchListMonitoring.loidate"  ref="ref_loidate"/>                                            
                                          </b-col>
                                        </b-row>
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_TN_ContractWatchListMonitoring.status"  ref="ref_status" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_lanodate" v-model="M_TN_ContractWatchListMonitoring.lanodate"  ref="ref_lanodate" />
                                      </b-col>
                                      <!-- <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">LA No/Date</label>
                                          </b-col>
                                          <b-col md="3" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_lano" v-model="M_TN_ContractWatchListMonitoring.lano"  ref="ref_lano"/>    
                                          </b-col>
                                          <b-col md="1">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">/</label>
                                          </b-col>  
                                          <b-col md="3">
                                            <ABSDateOnly :prop="PI_ladate" v-model="M_TN_ContractWatchListMonitoring.ladate"  ref="ref_ladate"/>                                            
                                          </b-col>
                                        </b-row>
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnactualstartdateChange" :prop="PI_actualstartdate" v-model="M_TN_ContractWatchListMonitoring.actualstartdate"  ref="ref_actualstartdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_customername" v-model="M_TN_ContractWatchListMonitoring.customername"  ref="ref_customername" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncompletedateChange" :prop="PI_completedate" v-model="M_TN_ContractWatchListMonitoring.completedate"  ref="ref_completedate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_brandname" v-model="M_TN_ContractWatchListMonitoring.brandname"  ref="ref_brandname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_updatedescs" v-model="M_TN_ContractWatchListMonitoring.updatedescs"  ref="ref_updatedescs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_name" v-model="M_TN_ContractWatchListMonitoring.name"  ref="ref_name" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_ContractWatchListMonitoring.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_rcdred" v-model="M_TN_ContractWatchListMonitoring.rcdred"  ref="ref_rcdred" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractWatchListMonitoring.remarks"  ref="ref_remarks" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_themeclasscat" v-model="M_TN_ContractWatchListMonitoring.themeclasscat"  ref="ref_themeclasscat" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6"></b-col>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossseminetarea" v-model="M_TN_ContractWatchListMonitoring.grossseminetarea"  ref="ref_grossseminetarea" />
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
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractWatchListMonitoring :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                contractwatchlistsequenceno: 0,
                watchlistsequenceno: 0,
                applicationno: '',
                terminationno: '',
                stepno: 0,
                descs: '',
                estimatedstartdate: '',
                watchliststartdate: '',
                actualstartdate: '',
                completedate: '',
                updatedescs: '',
                referenceno: '',
                documentrequired: '',
                contractstatus: '',
                processindicator: '',
                updateuser: '',
                updatedate: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                rcd: '',
                red: '',
                name: '',
                brandname: '',
                themename: '',
                classname: '',
                catname: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                loonodate: '',
                loinodate: '',
                lanodate: '',
                rcdred: '',
                themeclasscat: '',
                grossseminetarea: ''
                    }
            ,
            PI_stepno: { 
                cLabel: 'Step No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_contractstatus: { 
                cValidate :'', 
                cName: 'contractstatus', 
                cId: 'rdbcontractstatus', 
                cRadioOptions: [{ text: 'LOO', value: '1' },{ text: 'LOO Confirmed', value: '2' },{ text: 'LOI Confirmed', value: '3' },{ text: 'LA Confirmed', value: '4' },{ text: 'Reservation', value: '5' },], 
                cRadioDefaultOption: '', 
                cLabel:'Contract Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_descs: { 
                cLabel: 'Step Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: {
                cLabel: 'Application No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true

                // cValidate :'max:20', 
                // cName: 'applicationno', 
                // cLabel: 'Application No', 
                // cLabelSize: 4, 
                // cOrder: 50, 
                // cKey: false, 
                // cType: 'text',
                // cVisible: true, 
                // cProtect: true, 
                // cPageLevel: this.PageLevel, 
                // cTabIndex: this.TabIndex, 
                // cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
             
            PI_estimatedstartdate: { 
                cLabel: 'Estimated Start Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
                
                // cValidate :'', 
                // cName: 'estimatedstartdate', 
                // cLabel: 'Estimated Start Date', 
                // cLabelSize: 4, 
                // cOrder: 20, 
                // cKey: false, 
                // cVisible:  true, 
                // cProtect: true, 
                // cPageLevel: this.PageLevel, 
                // cTabIndex: this.TabIndex, 
                // cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loonodate: { 
                cLabel: 'LOO No/Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            // PI_loono: {
            //     cValidate :'', 
            //     cName: 'loono', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            // },
            // PI_loodate: {
            //     cValidate :'', 
            //     cName: 'loodate', 
            //     cLabel: '', 
            //     cLabelSize: 5, 
            //     cOrder: 20, 
            //     cKey: false, 
            //     cVisible:  true, 
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_processindicator: { 
                cValidate :'', 
                cName: 'processindicator', 
                cId: 'rdbprocessindicator', 
                cRadioOptions: [{ text: 'None', value: '1' },{ text: 'Hand Over', value: '2' },], 
                cRadioDefaultOption: '', 
                cLabel:'Process Indicator', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_loinodate: { 
                cLabel: 'LOI No/Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            // PI_loino: {
            //     cValidate :'', 
            //     cName: 'loino', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            // },
            // PI_loidate: {
            //     cValidate :'', 
            //     cName: 'loidate', 
            //     cLabel: '', 
            //     cLabelSize: 5, 
            //     cOrder: 20, 
            //     cKey: false, 
            //     cVisible:  true, 
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // },             
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Pending', value: 'N' },{ text: 'Done', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lanodate: { 
                cLabel: 'LA No/Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            // PI_lano: {
            //     cValidate :'', 
            //     cName: 'lano', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            // },
            // PI_ladate: {
            //     cValidate :'', 
            //     cName: 'ladate', 
            //     cLabel: '', 
            //     cLabelSize: 5, 
            //     cOrder: 20, 
            //     cKey: false, 
            //     cVisible:  true, 
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // },  
            PI_actualstartdate: { 
                cValidate :'', 
                cName: 'actualstartdate', 
                cLabel: 'Actual Start Date', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customername: { 
                cLabel: 'Customer Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_completedate: { 
                cValidate :'', 
                cName: 'completedate', 
                cLabel: 'Completed Date', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandname: { 
                cLabel: 'Business Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_updatedescs: { 
                cValidate :'max:150', 
                cName: 'updatedescs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 40, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_name: { 
                cLabel: 'Marketing Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 50, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rcdred: { 
                cLabel: 'RCD-RED', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_themeclasscat: { 
                cLabel: 'Theme/Class/Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_grossseminetarea: { 
                cLabel: 'Gross/Semi/Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
        OncontractstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{contractstatus}
            }
        })
        this.$forceUpdate()
        },
        OnprocessindicatorChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{processindicator}
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
        OnactualstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{actualstartdate}
            }
        })
        this.$forceUpdate()
        },
        OncompletedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{completedate}
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ContractWatchListSequenceNo: this.M_TN_ContractWatchListMonitoring.contractwatchlistsequenceno,
                ApplicationNo: this.M_TN_ContractWatchListMonitoring.applicationno,
                Status: this.M_TN_ContractWatchListMonitoring.status,
                ActualStartDate: this.M_TN_ContractWatchListMonitoring.actualstartdate == '' || this.M_TN_ContractWatchListMonitoring.actualstartdate == null ? 'NULL' : this.M_TN_ContractWatchListMonitoring.actualstartdate ,
                CompleteDate: this.M_TN_ContractWatchListMonitoring.completedate == '' || this.M_TN_ContractWatchListMonitoring.completedate == null ? 'NULL' : this.M_TN_ContractWatchListMonitoring.completedate ,
                UpdateDescs: this.M_TN_ContractWatchListMonitoring.updatedescs,
                ReferenceNo: this.M_TN_ContractWatchListMonitoring.referenceno,
                Remarks: this.M_TN_ContractWatchListMonitoring.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractWatchListMonitoring.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractWatchListMonitoring = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                contractwatchlistsequenceno: 0,
                watchlistsequenceno: 0,
                applicationno: '',
                terminationno: '',
                stepno: 0,
                descs: '',
                estimatedstartdate: '',
                watchliststartdate: '',
                actualstartdate: '',
                completedate: '',
                updatedescs: '',
                referenceno: '',
                documentrequired: '',
                contractstatus: '',
                processindicator: '',
                updateuser: '',
                updatedate: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                rcd: '',
                red: '',
                name: '',
                brandname: '',
                themename: '',
                classname: '',
                catname: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                loonodate: '',
                loinodate: '',
                lanodate: '',
                rcdred: '',
                themeclasscat: '',
                grossseminetarea: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){ 
          // var data = this.FormToABSList().getRowSelected()  
          // var dataDelete = []
          
          // data.forEach((value) => {
            
          //   dataDelete.push({
          //       LotNo: value.LotNo,
          //       SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          //       BillingSequenceNo: value.BillingSequenceNo,
          //       LastUpdateStamp: value.LastUpdateStamp,
          //   })
          // })
          
          // var param = {
          //           OptionSeq: this.getOptionSeq().OptionSeq,
          //           LineNo: this.$parent.data.PageOrder,
          //           Data: dataDelete
          //       }
                
          //       this.postJSONMulti( this.getUrlNewDeleteMulti(), param )
          //       .then(response => {
          //           if (response == null) return

          //           this.$parent.resultDelete()
          //       })
          

        //     var param = {
        //         OptionSeq: this.getOptionSeq().OptionSeq,
        //         SubPortfolioCd:this.getDataUser().SubPortfolioCd,
        //         PortfolioCd:this.getDataUser().PortfolioCd,
        //         LineNo: this.$parent.data.PageOrder,
        //         Data: dt
				// //,SourceValue:''
        //     }
            
        //     this.postJSONMulti( this.getUrlDeleteMulti(), param )
        //     .then(response => {
        //         if (response == null) return
				// var message = "Deleting Data Successfully"   				
				// //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				// this.$parent.resultDelete(message)
				


            // })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                contractwatchlistsequenceno: record.ContractWatchListSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_ContractWatchListMonitoring = {
                subportfoliocd: data.subportfoliocd,
                contractwatchlistsequenceno: this.isCurrency(data.contractwatchlistsequenceno, this.decimal),
                watchlistsequenceno: this.isCurrency(data.watchlistsequenceno, this.decimal),
                applicationno: data.applicationno,
                terminationno: data.terminationno,
                stepno: this.isCurrency(data.stepno, this.decimal),
                descs: data.descs,
                estimatedstartdate: data.estimatedstartdate,
                watchliststartdate: data.watchliststartdate,
                actualstartdate: data.actualstartdate,
                completedate: data.completedate,
                updatedescs: data.updatedescs,
                referenceno: data.referenceno,
                documentrequired: data.documentrequired,
                contractstatus: data.contractstatus,
                processindicator: data.processindicator,
                updateuser: data.updateuser,
                updatedate: data.updatedate,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                rcd: data.rcd,
                red: data.red,
                name: data.name,
                brandname: data.brandname,
                themename: data.themename,
                classname: data.classname,
                catname: data.catname,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                loonodate: data.loonodate,
                loinodate: data.loinodate,
                lanodate: data.lanodate,
                rcdred: data.rcdred,
                themeclasscat: data.themeclasscat,
                grossseminetarea: data.grossseminetarea,
                customername: data.name
                    }
                if(data.actualstartdate == '' || data.actualstartdate == null){
                  this.M_TN_ContractWatchListMonitoring.actualstartdate = this.getToday()
                }

                if(data.completedate == '' || data.completedate == null){
                  this.M_TN_ContractWatchListMonitoring.completedate = this.getToday()
                }

                var vladate = ''
                if(data.ladate == '' || data.ladate == null){
                  this.vladate = ''
                }else{
                  this.vladate = this.momentDateFormatting(data.ladate, 'DD/MM/YYYY')
                }

                var vloidate = ''
                if(data.loidate == '' || data.loidate == null){
                  this.vloidate = ''
                }else{
                  this.vloidate = this.momentDateFormatting(data.loidate, 'DD/MM/YYYY')
                }

                var vloodate = ''
                if(data.loodate == '' || data.loodate == null){
                  this.vloodate = ''
                }else{
                  this.vloodate = this.momentDateFormatting(data.loodate, 'DD/MM/YYYY')
                }
                

                // this.M_TN_ContractWatchListMonitoring.loonodate = data.loono != null || data.loono != '' ? data.loono : '' + ' / ' + data.loodate != null || data.loodate != '' ? data.loodate : ''
                // this.M_TN_ContractWatchListMonitoring.loinodate = data.loino != null || data.loino != '' ? data.loino : '' + ' / ' + data.loidate != null || data.loidate != '' ? data.loidate : ''
                // this.M_TN_ContractWatchListMonitoring.lanodate = data.lano != null || data.lano != '' ? data.lano : '' + ' / ' + data.ladate != null || data.ladate != '' ? data.ladate : ''
                this.M_TN_ContractWatchListMonitoring.loonodate = data.loono + ' / ' + this.vloodate
                this.M_TN_ContractWatchListMonitoring.loinodate = data.loino + ' / ' + this.vloidate
                this.M_TN_ContractWatchListMonitoring.lanodate = data.lano + ' / ' + this.vladate
                

                this.M_TN_ContractWatchListMonitoring.themeclasscat = data.themename + ' / ' + data.classname + ' / ' + data.catname
                this.M_TN_ContractWatchListMonitoring.rcdred = this.momentDateFormatting(data.rcd, 'DD/MM/YYYY') + ' - ' + this.momentDateFormatting(data.red, 'DD/MM/YYYY')
                this.M_TN_ContractWatchListMonitoring.grossseminetarea = this.isCurrency(data.grossarea, this.decimal) + ' / ' + this.isCurrency(data.semigrossarea, this.decimal) + ' / ' + this.isCurrency(data.netarea, this.decimal)

         

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

