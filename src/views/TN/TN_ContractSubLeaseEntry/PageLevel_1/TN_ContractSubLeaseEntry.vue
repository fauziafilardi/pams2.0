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
                <b-col md="6" id="col-left"> <!-- table open -->
                    <b-row>
                      <b-col md="12">
                        <ABSinputTextVuex :prop="PI_subleaseassignmentno" v-model="M_TN_ContractSubLeaseEntry.subleaseassignmentno"  ref="ref_subleaseassignmentno"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSinputDateVuex @input="OnsubleaseassignmentdateChange" :prop="PI_subleaseassignmentdate" v-model="M_TN_ContractSubLeaseEntry.subleaseassignmentdate"  ref="ref_subleaseassignmentdate" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_ContractSubLeaseEntry.applicationno" :label="M_TN_ContractSubLeaseEntry.applicationnoLabel" ref="ref_applicationno"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSInputSelectList @change="OnsubleaseassignmentcontactidChange" :prop="PI_subleaseassignmentcontactid" :value="M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid" :label="M_TN_ContractSubLeaseEntry.subleaseassignmentcontactidLabel" ref="ref_subleaseassignmentcontactid"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_ContractSubLeaseEntry.brandcd" :label="M_TN_ContractSubLeaseEntry.brandcdLabel" ref="ref_brandcd"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ContractSubLeaseEntry.descs"  ref="ref_descs"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSinputTextVuex :prop="PI_customerrequestno" v-model="M_TN_ContractSubLeaseEntry.customerrequestno"  ref="ref_customerrequestno"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSinputDateVuex @input="OncustomerrequestdateChange" :prop="PI_customerrequestdate" v-model="M_TN_ContractSubLeaseEntry.customerrequestdate"  ref="ref_customerrequestdate" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_totalaging" v-model="M_TN_ContractSubLeaseEntry.totalaging"  ref="ref_totalaging" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_lano" v-model="M_TN_ContractSubLeaseEntry.lano"  ref="ref_lano"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_contactid" v-model="M_TN_ContractSubLeaseEntry.contactid"  ref="ref_contactid" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_customercategorycd" v-model="M_TN_ContractSubLeaseEntry.customercategorycd"  ref="ref_customercategorycd" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_brandname" v-model="M_TN_ContractSubLeaseEntry.brandname"  ref="ref_brandname" />
                      </b-col>
                    </b-row>
                </b-col> <!-- table close -->
                <b-col md="6" id="col-right">
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_ContractSubLeaseEntry.rcd" :valueTo="M_TN_ContractSubLeaseEntry.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <b-row>
                        <b-col md="4" class="lbl-col-align">
                          <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                        </b-col>
                        <b-col md="1" style="margin-left: 5px;">
                          <ABSTextBoxOnly @input="OnleaseperiodChange" :prop="PI_leaseperiod" v-model="M_TN_ContractSubLeaseEntry.leaseperiod"  ref="ref_leaseperiod"/>    
                        </b-col>
                        <b-col md="4">
                          {{M_TN_ContractSubLeaseEntry.chargeperiod}} and {{M_TN_ContractSubLeaseEntry.perioddays}} days
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_currencycd" v-model="M_TN_ContractSubLeaseEntry.currencycd"  ref="ref_currencycd" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_contractamt" v-model="M_TN_ContractSubLeaseEntry.contractamt"  ref="ref_contractamt" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_totalgrossarea" v-model="M_TN_ContractSubLeaseEntry.totalgrossarea"  ref="ref_totalgrossarea"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_totalsemigrossarea" v-model="M_TN_ContractSubLeaseEntry.totalsemigrossarea"  ref="ref_totalsemigrossarea"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_totalnetarea" v-model="M_TN_ContractSubLeaseEntry.totalnetarea"  ref="ref_totalnetarea"/>
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_marketingid" v-model="M_TN_ContractSubLeaseEntry.marketingid"  ref="ref_marketingid" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute  :prop="PI_ladate" v-model="M_TN_ContractSubLeaseEntry.ladate"  ref="ref_ladate" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSCompute :prop="PI_status" v-model="M_TN_ContractSubLeaseEntry.status"  ref="ref_status" />
                      </b-col>
                  </b-row>
                  <b-row>
                      <b-col md="12">
                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractSubLeaseEntry.remarks"  ref="ref_remarks" />
                      </b-col>
                  </b-row>
                </b-col>
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
                initialWhere: "SubleaseAssignmentType = 'S' AND SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_ContractSubLeaseEntry :{
                subleaseassignmentno: '',
                applicationno: '',
                subleaseassignmentcontactid: '',
                subleaseassignmentdate: this.getToday(),
                brandcd: '',
                descs: '',
                customerrequestno: '',
                customerrequestdate: this.getToday(),
                status: 'N',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lano: '',
                ladate: '',
                contactid: '',
                customercategorycd: '',
                rcd: '',
                red: '',
                con_rcd: '',
                con_red: '',
                leaseperiod: 0,
                currencycd: '',
                contractamt: 0,
                marketingid: '',
                operatingfromhour: '',
                operatingtohour: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                brandname: '',
                applicationname: '',
                subleasecustomername: '',
                lotno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                lanodate: '',
                grossseminetarea: '',
                chargeperiod: 'months',
                perioddays: '',
                freerentalperiod: '',
                    }
            ,
            PI_subleaseassignmentno: { 
                cValidate :'', 
                cName: 'subleaseassignmentno', 
                cLabel: 'Sublease No', 
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
            PI_rcd: { 
                cValidate :'', 
                cValidateTo: '',
                cName: 'rcd', 
                cLabel: 'RCD  - RED', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subleaseassignmentdate: { 
                cValidate :'', 
                cName: 'subleaseassignmentdate', 
                cLabel: 'Sublease Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_con_red: { 
                cValidate :'', 
                cName: 'con_red', 
                cLabel: '', 
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_ApplicationNo_V2'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "ContractStatus IN ('2','3','4') AND TerminateStatus ='N' AND (GETDATE() BETWEEN RCD AND RED) AND Status = 'A' AND AntennaStatus = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo NOT IN (SELECT x.ApplicationNo FROM TN_ContractSubleaseAssignment x WHERE x.Status = 'N') AND ISNULL(TerminateStatus, 'N') = 'N'",
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,Name' ,
            }, 
            PI_leaseperiod: { 
                // cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_freerentalperiod: { 
                cValidate :'', 
                cName: 'freerentalperiod', 
                // cLabel: 'Free', 
                cLabelSize: 4, 
                // cOrder: 14, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subleaseassignmentcontactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_SubleaseCustomer'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'subleaseassignmentcontactid', 
                cLabel: 'Sublease Customer', 
                cKey: true, 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_currencycd: { 
                cLabel: 'Lease Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_brandcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNBrand'    , 
                    ColumnDB: 'BrandCd'   , 
                    InitialWhere: "LeasingStatus = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Sublease Brand', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'BrandCd,BrandName' ,
            }, 
            PI_contractamt: { 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalgrossarea: { 
                cValidate :'', 
                cName: 'totalgrossarea', 
                cLabel: 'Gross', 
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_customerrequestno: { 
                cValidate :'max:60', 
                cName: 'customerrequestno', 
                cLabel: 'Customer Req No', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalsemigrossarea: { 
                cValidate :'', 
                cName: 'totalsemigrossarea', 
                cLabel: 'Semi', 
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_marketingid: { 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalnetarea: { 
                cValidate :'', 
                cName: 'totalnetarea', 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_customerrequestdate: { 
                cValidate :'', 
                cName: 'customerrequestdate', 
                cLabel: 'Customer Req Date', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingfromhour: { 
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalaging: { 
                cLabel: 'Total Aging', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lano: { 
                cValidate :'', 
                cName: 'lano', 
                cLabel: 'LA No', 
                cLabelSize: 4,
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ladate: { 
                cValidate :'', 
                cName: 'ladate', 
                cLabel: 'LA Date', 
                cLabelSize: 4,
                cKey: true, 
                cVisible:  true, 
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
                cOrder:11, 
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
            PI_contactid: { 
                cLabel: 'Customer', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customercategorycd: { 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_brandname: { 
                cLabel: 'Brand Name', 
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

                if (data.AssignmentRunningCd != null && data.AssignmentRunningCd != "") { 
                  this.M_TN_ContractSubLeaseEntry.subleaseassignmentno = "(auto)"
                } else {
                  this.M_TN_ContractSubLeaseEntry.subleaseassignmentno = ""
                }

            })
        },			
        OnsubleaseassignmentdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              this.PI_applicationno.dataLookUp.InitialWhere = "ContractStatus IN ('2','3','4') AND TerminateStatus ='N' AND ('"+data+"' BETWEEN RCD AND RED) AND Status = 'A' AND AntennaStatus = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo NOT IN (SELECT x.ApplicationNo FROM TN_ContractSubleaseAssignment x WHERE x.Status = 'N') AND ISNULL(TerminateStatus, 'N') = 'N'"
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseEntry.applicationno = data.id
            this.M_TN_ContractSubLeaseEntry.applicationnoLabel = data.label
            this.M_TN_ContractSubLeaseEntry.rcd = this.momentDateFormat(data.RCD, 'DD/MM/YYYY')
            this.PI_rcd.cValidate = "min_date:" + this.momentDateFormat(data.RCD, 'DD/MM/YYYY')
            this.M_TN_ContractSubLeaseEntry.red = this.momentDateFormat(data.RED, 'DD/MM/YYYY')
            this.PI_rcd.cValidateTo = "max_date:" + this.momentDateFormat(data.RED, 'DD/MM/YYYY')
            if (this.inputStatus != "VIEW") {
              
//{applicationno}
            }
        })
        this.$forceUpdate()
        },
        OnsubleaseassignmentcontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid = data.id
            this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subleaseassignmentcontactid}
            }
        })
        this.$forceUpdate()
        },
        OnbrandcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseEntry.brandcd = data.id
            this.M_TN_ContractSubLeaseEntry.brandcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{brandcd}
            }
        })
        this.$forceUpdate()
        },
        OncustomerrequestdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{customerrequestdate}
            }
        })
        this.$forceUpdate()
        },
        OnoperatingfromhourChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{operatingfromhour}
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
          //  this.getToolbar().statusFunction[0].disabled = true
          //  this.getToolbar().statusFunction[1].disabled = true
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
          if (record.Status.toUpperCase() == 'NEW') {
            this.$store.commit('setEditStatus', true)
          }
          else {
            this.$store.commit('setEditStatus', false)
          }
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
        if (this.M_TN_ContractSubLeaseEntry.subleaseassignmentno == "(auto)")
             { this.M_TN_ContractSubLeaseEntry.subleaseassignmentno = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SubleaseAssignmentNo: this.M_TN_ContractSubLeaseEntry.subleaseassignmentno,
                SubleaseAssignmentDate: this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate == '' || this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate ,
                ApplicationNo: this.M_TN_ContractSubLeaseEntry.applicationno,
                SubleaseAssignmentContactID: this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid == '' || this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid ,
                BrandCd: this.M_TN_ContractSubLeaseEntry.brandcd == '' || this.M_TN_ContractSubLeaseEntry.brandcd == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.brandcd ,
                Descs: this.M_TN_ContractSubLeaseEntry.descs,
                CustomerRequestNo: this.M_TN_ContractSubLeaseEntry.customerrequestno,
                CustomerRequestDate: this.M_TN_ContractSubLeaseEntry.customerrequestdate == '' || this.M_TN_ContractSubLeaseEntry.customerrequestdate == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.customerrequestdate ,
                Status: 'N',
                RCD: this.M_TN_ContractSubLeaseEntry.rcd == '' || this.M_TN_ContractSubLeaseEntry.rcd == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.rcd ,
                RED: this.M_TN_ContractSubLeaseEntry.red,
                Remarks: this.M_TN_ContractSubLeaseEntry.remarks,
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
                SubleaseAssignmentNo: this.M_TN_ContractSubLeaseEntry.subleaseassignmentno,
                SubleaseAssignmentDate: this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate == '' || this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.subleaseassignmentdate ,
                ApplicationNo: this.M_TN_ContractSubLeaseEntry.applicationno,
                SubleaseAssignmentContactID: this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid == '' || this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid ,
                BrandCd: this.M_TN_ContractSubLeaseEntry.brandcd == '' || this.M_TN_ContractSubLeaseEntry.brandcd == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.brandcd ,
                Descs: this.M_TN_ContractSubLeaseEntry.descs,
                CustomerRequestNo: this.M_TN_ContractSubLeaseEntry.customerrequestno,
                CustomerRequestDate: this.M_TN_ContractSubLeaseEntry.customerrequestdate == '' || this.M_TN_ContractSubLeaseEntry.customerrequestdate == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.customerrequestdate ,
                RCD: this.M_TN_ContractSubLeaseEntry.rcd == '' || this.M_TN_ContractSubLeaseEntry.rcd == null ? 'NULL' : this.M_TN_ContractSubLeaseEntry.rcd ,
                RED: this.M_TN_ContractSubLeaseEntry.red,
                Remarks: this.M_TN_ContractSubLeaseEntry.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractSubLeaseEntry.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractSubLeaseEntry = {
                subleaseassignmentno: '',
                applicationno: '',
                subleaseassignmentcontactid: '',
                subleaseassignmentdate: this.getToday(),
                brandcd: '',
                descs: '',
                customerrequestno: '',
                customerrequestdate: this.getToday(),
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lano: '',
                ladate: '',
                contactid: '',
                customercategorycd: '',
                rcd: '',
                red: '',
                con_rcd: '',
                con_red: '',
                leaseperiod: '',
                currencycd: '',
                contractamt: '',
                marketingid: '',
                operatingfromhour: '',
                operatingtohour: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                brandname: '',
                applicationname: '',
                subleasecustomername: '',
                lotno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                lanodate: '',
                grossseminetarea: '',
                chargeperiod: 'months',
                perioddays: '',
                freerentalperiod: '',
                    }
            		
		},
        M_New(){
          this.GetSpecificationData()
        // if (this.TNSpec.AssignmentRunningCd != null && this.TNSpec.AssignmentRunningCd != "")
        //      { this.M_TN_ContractSubLeaseEntry.subleaseassignmentno = "(auto)"
        //      this.PI_subleaseassignmentno.cProtect = true }
        // else {
        //      this.M_TN_ContractSubLeaseEntry.subleaseassignmentno = ""
        //      this.PI_subleaseassignmentno.cProtect = false }
        this.$refs.ref_applicationno.focus()
			
        },
        M_Edit(){
          let data = this.$store.getters.GetPage1Data
          console.log(data)

          if(data.Status == 'New'){
            this.$refs.ref_subleaseassignmentcontactid.focus()
          }else{
            this.$refs.ref_remarks.focus()
          }
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SubleaseAssignmentNo: value.SubleaseNo,
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
                subleaseassignmentno: record.SubleaseNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var status = ""
                if(data.status){
                  if(data.status == 'N'){
                    status = "Pending"
                  }
                  else if(data.status == 'Y'){
                    status = "Approved"
                  }
                  else if(data.status == 'C'){
                    status = "Cancel"
                  }
                  else{
                    status = "Unknown"
                  }
                  
                }
this.M_TN_ContractSubLeaseEntry = {
                subleaseassignmentno: data.subleaseassignmentno,
                applicationno: data.applicationno,
                subleaseassignmentcontactid: data.subleaseassignmentcontactid,
                subleaseassignmentdate: this.getToday(data.subleaseassignmentdate),
                brandcd: data.subleasebrandcd,
                descs: data.descs,
                customerrequestno: data.customerrequestno,
                customerrequestdate: data.customerrequestdate,
                status: status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lano: data.lano,
                ladate: this.getToday(data.ladate),
                contactid: (data.contactid && data.contactid != '' ? data.contactid + this.separator + data.applicationname : ''),
                customercategorycd: (data.customercategorycd && data.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs : ''),
                rcd: data.rcd,
                red: data.red,
                con_rcd: data.con_rcd,
                con_red: data.con_red,
                leaseperiod: data.leaseperiod,
                currencycd: (data.currencycd && data.currencycd != '' ? data.currencycd + this.separator + data.currencydescs : ''),
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                marketingid: (data.marketingid && data.marketingid != '' ? data.marketingid + this.separator + data.marketingname : ''),
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                totalgrossarea: this.isCurrency(data.grossarea, this.decimal),
                totalsemigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                totalnetarea: this.isCurrency(data.netarea, this.decimal),
                brandname: data.brandname,
                applicationname: data.applicationname,
                subleasecustomername: data.subleasecustomername,
                lotno: data.lotno,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                lanodate: data.lanodate,
                grossseminetarea: data.grossseminetarea,
                chargeperiod: data.chargeperiod,
                perioddays: data.perioddays,
                freerentalperiod: data.freerentalperiod,
                totalaging: this.isCurrency(data.totalaging, this.decimal)
                    }
                 
                if(data.status == 'N'){
                  this.PI_subleaseassignmentdate.cKey = false
                  this.PI_subleaseassignmentcontactid.cKey = false
                  this.PI_brandcd.cKey = false
                  this.PI_descs.cKey = false
                  this.PI_customerrequestno.cKey = false
                  this.PI_customerrequestdate.cKey = false
                  this.PI_rcd.cKey = false
                }else{
                  this.PI_subleaseassignmentdate.cKey = true
                  this.PI_subleaseassignmentcontactid.cKey = true
                  this.PI_brandcd.cKey = true
                  this.PI_descs.cKey = true
                  this.PI_customerrequestno.cKey = true
                  this.PI_customerrequestdate.cKey = true
                  this.PI_rcd.cKey = true
                }

                switch (data.chargeperiod) {
                    case "M":
                        this.M_TN_ContractSubLeaseEntry.chargeperiod = 'months'
                        break;
                    case "D":
                        this.M_TN_ContractSubLeaseEntry.chargeperiod = 'days'
                        break;
                    default:
                        this.M_TN_ContractSubLeaseEntry.chargeperiod = 'years'
                        break;
                }
                this.M_TN_ContractSubLeaseEntry.applicationnoLabel = this.M_TN_ContractSubLeaseEntry.applicationno != null && this.M_TN_ContractSubLeaseEntry.applicationno != '' ? data.applicationno + this.separator + data.applicationname :'' 
                this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactidLabel = this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid != null && this.M_TN_ContractSubLeaseEntry.subleaseassignmentcontactid != '' ? data.subleaseassignmentcontactid + this.separator + data.subleasecustomername :'' 
                this.M_TN_ContractSubLeaseEntry.brandcdLabel = this.M_TN_ContractSubLeaseEntry.brandcd != null && this.M_TN_ContractSubLeaseEntry.brandcd != '' ? data.subleasebrandcd + this.separator + data.subleasebrandname :''

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_ContractSubLeaseEntry.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_ContractSubLeaseEntry.red = data
        }
        ,MdtRange_operatingfromhour (data) {
            this.M_TN_ContractSubLeaseEntry.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data) {
            this.M_TN_ContractSubLeaseEntry.operatingtohour = data
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
        // [Global:GetSpecification].then(FnOpt10 => { if (FnOpt10 != null) { 
        //      this.TNSpec = FnOpt9 } })

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

