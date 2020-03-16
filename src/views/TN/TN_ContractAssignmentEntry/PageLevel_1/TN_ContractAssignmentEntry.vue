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
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_subleaseassignmentno" v-model="M_TN_ContractAssignmentEntry.subleaseassignmentno"  ref="ref_subleaseassignmentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnsubleaseassignmentdateChange" :prop="PI_subleaseassignmentdate" v-model="M_TN_ContractAssignmentEntry.subleaseassignmentdate"  ref="ref_subleaseassignmentdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_ContractAssignmentEntry.applicationno" :label="M_TN_ContractAssignmentEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnsubleaseassignmentcontactidChange" :prop="PI_subleaseassignmentcontactid" :value="M_TN_ContractAssignmentEntry.subleaseassignmentcontactid" :label="M_TN_ContractAssignmentEntry.subleaseassignmentcontactidLabel" ref="ref_subleaseassignmentcontactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnsubleaseassignmentaddresscdChange" :prop="PI_subleaseassignmentaddresscd" :value="M_TN_ContractAssignmentEntry.subleaseassignmentaddresscd" :label="M_TN_ContractAssignmentEntry.subleaseassignmentaddresscdLabel" ref="ref_subleaseassignmentaddresscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ContractAssignmentEntry.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_customerrequestno" v-model="M_TN_ContractAssignmentEntry.customerrequestno"  ref="ref_customerrequestno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OncustomerrequestdateChange" :prop="PI_customerrequestdate" v-model="M_TN_ContractAssignmentEntry.customerrequestdate"  ref="ref_customerrequestdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_totalaging" v-model="M_TN_ContractAssignmentEntry.totalaging"  ref="ref_totalaging" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_totalamortizedinvoice" v-model="M_TN_ContractAssignmentEntry.totalamortizedinvoice"  ref="ref_totalamortizedinvoice"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_lano" v-model="M_TN_ContractAssignmentEntry.lano"  ref="ref_lano" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_ladate" v-model="M_TN_ContractAssignmentEntry.ladate"  ref="ref_ladate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_contactid" v-model="M_TN_ContractAssignmentEntry.contactid"  ref="ref_contactid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_customercategorycd" v-model="M_TN_ContractAssignmentEntry.customercategorycd"  ref="ref_customercategorycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_brandname" v-model="M_TN_ContractAssignmentEntry.brandname"  ref="ref_brandname" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_ContractAssignmentEntry.rcd" :valueTo="M_TN_ContractAssignmentEntry.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 5px;">
                                            <ABSTextBoxOnly @input="OnleaseperiodChange" :prop="PI_leaseperiod" v-model="M_TN_ContractAssignmentEntry.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            {{M_TN_ContractAssignmentEntry.chargeperiod}} and {{M_TN_ContractAssignmentEntry.perioddays}} days
                                          </b-col>  
                                          <!-- <b-col md="1">
                                            <ABSCompute :prop="PI_freerentalperiod" v-model="M_TN_ContractAssignmentEntry.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                                          </b-col> -->
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_TN_ContractAssignmentEntry.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_contractamt" v-model="M_TN_ContractAssignmentEntry.contractamt"  ref="ref_contractamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_grossseminetarea" v-model="M_TN_ContractAssignmentEntry.grossseminetarea"  ref="ref_grossseminetarea" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_con_rcd" v-model="M_TN_ContractAssignmentEntry.con_rcd"  ref="ref_con_rcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_con_red" v-model="M_TN_ContractAssignmentEntry.con_red"  ref="ref_con_red"/>
                                      </b-col>
                                    </b-row> -->
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right">
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_telephoneline" v-model="M_TN_ContractAssignmentEntry.telephoneline"  ref="ref_telephoneline" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_securitydepositrental" v-model="M_TN_ContractAssignmentEntry.securitydepositrental"  ref="ref_securitydepositrental" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_securitydepositsc" v-model="M_TN_ContractAssignmentEntry.securitydepositsc"  ref="ref_securitydepositsc" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_servicecharge" v-model="M_TN_ContractAssignmentEntry.servicecharge"  ref="ref_servicecharge" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_promotionlevy" v-model="M_TN_ContractAssignmentEntry.promotionlevy"  ref="ref_promotionlevy" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_telephonedeposit" v-model="M_TN_ContractAssignmentEntry.telephonedeposit"  ref="ref_telephonedeposit" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_fitoutdeposit" v-model="M_TN_ContractAssignmentEntry.fitoutdeposit"  ref="ref_fitoutdeposit" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_sinkingfund" v-model="M_TN_ContractAssignmentEntry.sinkingfund"  ref="ref_sinkingfund" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_rentalbase" v-model="M_TN_ContractAssignmentEntry.rentalbase"  ref="ref_rentalbase" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_revenuesharetype" v-model="M_TN_ContractAssignmentEntry.revenuesharetype"  ref="ref_revenuesharetype" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_marketingid" v-model="M_TN_ContractAssignmentEntry.marketingid"  ref="ref_marketingid" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSCompute :prop="PI_operatingfromhour" v-model="M_TN_ContractAssignmentEntry.operatingfromhour"  ref="ref_operatingfromhour" />
                                      </b-col>
                                  </b-row>
                                  <b-row>
                                      <b-col md="12">
                                          <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractAssignmentEntry.remarks"  ref="ref_remarks" />
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
                initialWhere: "SubleaseAssignmentType='A' AND SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},
            TNSpec: '',

            M_TN_ContractAssignmentEntry :{
                subleaseassignmentno: '',
                subleaseassignmentdate: '',
                applicationno: '',
                subleaseassignmentcontactid: '',
                namecustomer: '',
                brandcd: '',
                brandname: '',
                descs: '',
                name: '',
                customerrequestno: '',
                customerrequestdate: '',
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
                totalamortizedinvoice: '0',
                leaseperiod: 0,
                currencycd: '',
                contractamt: 0,
                marketingid: '',
                operatingfromhour: ' - ',
                operatingtohour: '',
                grossdescs: '0.00 / 0.00 / 0.00',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                telephoneline: 0,
                securitydepositrental: 0,
                securitydepositsc: 0,
                servicecharge: 0,
                promotionlevy: 0,
                telephonedeposit: 0,
                fitoutdeposit: 0,
                sinkingfund: 0,
                rentalbase: '',
                revenuesharetype: '',
                subleaseassignmentaddresscd: '',
                addressdescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                totalaging: '',
                grossseminetarea: '0.00 / 0.00 / 0.00',
                chargeperiod: 'months',
                perioddays: '',
                freerentalperiod: '',
                    }
            ,
            PI_subleaseassignmentno: { 
                cValidate :'max:20', 
                cName: 'subleaseassignmentno', 
                cLabel: 'Assignment No', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_telephoneline: { 
                cLabel: 'Telephone Line', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_subleaseassignmentdate: { 
                cValidate :'', 
                cName: 'subleaseassignmentdate', 
                cLabel: 'Assignment Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_securitydepositrental: { 
                cLabel: 'Security Deposit Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_ApplicationNo_V3'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "ContractStatus IN ('2','3','4') AND ISNULL(TerminateStatus, 'N') = 'N' AND RED >= GETDATE() AND Status = 'A' AND AntennaStatus = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo NOT IN  (SELECT ca.ApplicationNo FROM TN_ContractAddendum ca WHERE ca.SubPortfolioCd = SubPortfolioCd AND ca.[Status] = 'N') AND ApplicationNo NOT IN (SELECT ct.ApplicationNo FROM TN_ContractTermination ct WHERE ct.SubPortfolioCd = SubPortfolioCd AND ct.[Status] = 'N')", 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,CustomerName=Name,BrandName,LotNo=LotList,RCD,RED,TimeEdit",
                    DisplayLookUp: "ApplicationNo,CustomerName"
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,CustomerName' ,
            }, 
            PI_securitydepositsc: { 
                cLabel: 'Security Deposit SC', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_subleaseassignmentcontactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'subleaseassignmentcontactid', 
                cLabel: 'Assignment Customer', 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_servicecharge: { 
                cLabel: 'Service Charge', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_subleaseassignmentaddresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactAndAddressSubportfolio'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactId = ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subleaseassignmentaddresscd', 
                cLabel: 'Customer Address', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'AddressCd,Address1' ,
            }, 
            PI_promotionlevy: { 
                cLabel: 'Promotion Levy', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_telephonedeposit: { 
                cLabel: 'Telephone Deposit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customerrequestno: { 
                cValidate :'', 
                cName: 'customerrequestno', 
                cLabel: 'Customer Req No', 
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
            PI_fitoutdeposit: { 
                cLabel: 'Fit Out Deposit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customerrequestdate: { 
                cValidate :'max:60', 
                cName: 'customerrequestdate', 
                cLabel: 'Customer Req Date', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sinkingfund: { 
                cLabel: 'Sinking Fund', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalaging: { 
                cLabel: 'Total Aging', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_rentalbase: { 
                cLabel: 'Rental Base', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalamortizedinvoice: { 
                cValidate :'max:22', 
                cName: 'totalamortizedinvoice', 
                cLabel: 'Total Amortized Invoice', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revenuesharetype: { 
                cLabel: 'Revenue Share Calc', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lano: { 
                cLabel: 'LA No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_marketingid: { 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_ladate: { 
                cLabel: 'LA Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_operatingfromhour: { 
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_contactid: { 
                cLabel: 'Customer', 
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
            PI_customercategorycd: { 
                cLabel: 'Customer Catagory', 
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
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
            PI_currencycd: { 
                cLabel: 'Lease Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_contractamt: { 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_grossseminetarea: { 
                cLabel: 'Gross / Semi / Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_con_rcd: { 
                cValidate :'', 
                cName: 'con_rcd', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 0, 
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
        OnsubleaseassignmentdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{subleaseassignmentdate}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractAssignmentEntry.applicationno = data.id
            this.M_TN_ContractAssignmentEntry.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_ContractAssignmentEntry.red = this.momentDateFormat(data.RED, 'DD/MM/YYYY')
              this.M_TN_ContractAssignmentEntry.rcd = this.momentDateFormat(data.RCD, 'DD/MM/YYYY')
            }
        })
        this.$forceUpdate()
        },
        OnsubleaseassignmentcontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid = data.id
            this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactidLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.PI_subleaseassignmentaddresscd.dataLookUp.InitialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactId = '" + data.id + "'"
            }
        })
        this.$forceUpdate()
        },
        OnsubleaseassignmentaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractAssignmentEntry.subleaseassignmentaddresscd = data.id
            this.M_TN_ContractAssignmentEntry.subleaseassignmentaddresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subleaseassignmentaddresscd}
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
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
        setToolbarButton () {
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
        if (this.M_TN_ContractAssignmentEntry.subleaseassignmentno == "(auto)")
             { this.M_TN_ContractAssignmentEntry.subleaseassignmentno = "null" }
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SubleaseAssignmentNo: this.M_TN_ContractAssignmentEntry.subleaseassignmentno,
                SubleaseAssignmentDate: this.M_TN_ContractAssignmentEntry.subleaseassignmentdate == '' || this.M_TN_ContractAssignmentEntry.subleaseassignmentdate == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.subleaseassignmentdate ,
                SubleaseAssignmentRCD: this.M_TN_ContractAssignmentEntry.rcd == '' || this.M_TN_ContractAssignmentEntry.rcd == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.rcd ,
                SubleaseAssignmentRED: this.M_TN_ContractAssignmentEntry.red,
                TotalAmortizedInvoice: this.M_TN_ContractAssignmentEntry.totalamortizedinvoice ? this.replaceAllString(this.M_TN_ContractAssignmentEntry.totalamortizedinvoice,',','','number') : 0 ,
                ApplicationNo: this.M_TN_ContractAssignmentEntry.applicationno,
                SubleaseAssignmentContactID: this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == '' || this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid ,
                SubleaseAssignmentAddressCd: this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == '' || this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid ,
                Descs: this.M_TN_ContractAssignmentEntry.descs,
                CustomerRequestNo: this.M_TN_ContractAssignmentEntry.customerrequestno,
                CustomerRequestDate: this.M_TN_ContractAssignmentEntry.customerrequestdate == '' || this.M_TN_ContractAssignmentEntry.customerrequestdate == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.customerrequestdate ,
                Remarks: this.M_TN_ContractAssignmentEntry.remarks,
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
                SubleaseAssignmentNo: this.M_TN_ContractAssignmentEntry.subleaseassignmentno,
                SubleaseAssignmentDate: this.M_TN_ContractAssignmentEntry.subleaseassignmentdate == '' || this.M_TN_ContractAssignmentEntry.subleaseassignmentdate == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.subleaseassignmentdate ,
                SubleaseAssignmentRCD: this.M_TN_ContractAssignmentEntry.rcd == '' || this.M_TN_ContractAssignmentEntry.rcd == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.rcd ,
                SubleaseAssignmentRED: this.M_TN_ContractAssignmentEntry.red,
                TotalAmortizedInvoice: this.M_TN_ContractAssignmentEntry.totalamortizedinvoice ? this.replaceAllString(this.M_TN_ContractAssignmentEntry.totalamortizedinvoice,',','','number') : 0 ,
                ApplicationNo: this.M_TN_ContractAssignmentEntry.applicationno,
                SubleaseAssignmentContactID: this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == '' || this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid ,
                SubleaseAssignmentAddressCd: this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == '' || this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid ,
                Descs: this.M_TN_ContractAssignmentEntry.descs,
                CustomerRequestNo: this.M_TN_ContractAssignmentEntry.customerrequestno,
                CustomerRequestDate: this.M_TN_ContractAssignmentEntry.customerrequestdate == '' || this.M_TN_ContractAssignmentEntry.customerrequestdate == null ? 'NULL' : this.M_TN_ContractAssignmentEntry.customerrequestdate ,
                Remarks: this.M_TN_ContractAssignmentEntry.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractAssignmentEntry.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractAssignmentEntry = {
                subleaseassignmentno: '',
                subleaseassignmentdate: this.momentDate(new Date()),
                applicationno: '',
                subleaseassignmentcontactid: '',
                namecustomer: '',
                brandcd: '',
                brandname: '',
                descs: '',
                name: '',
                customerrequestno: '',
                customerrequestdate: this.momentDate(new Date()),
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
                totalamortizedinvoice: '',
                leaseperiod: '',
                currencycd: '',
                contractamt: '',
                marketingid: '',
                operatingfromhour: ' - ',
                operatingtohour: '',
                grossdescs: '0.00 / 0.00 / 0.00',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                telephoneline: '',
                securitydepositrental: '',
                securitydepositsc: '',
                servicecharge: '',
                promotionlevy: '',
                telephonedeposit: '',
                fitoutdeposit: '',
                sinkingfund: '',
                rentalbase: '',
                revenuesharetype: '',
                subleaseassignmentaddresscd: '',
                addressdescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: '',
                rowid: '',
                totalaging: '',
                grossseminetarea: '0.00 / 0.00 / 0.00',
                chargeperiod: 'months',
                perioddays: '',
                freerentalperiod: '',
                    }
            		
		},
        M_New(){
          if (this.TNSpec.AssignmentRunningCd != null && this.TNSpec.AssignmentRunningCd != "") {
            this.M_TN_ContractAssignmentEntry.subleaseassignmentno = "(auto)"
            this.PI_subleaseassignmentno.cProtect = true
            this.$refs.ref_subleaseassignmentdate.focus()
          }
          else {
            this.M_TN_ContractAssignmentEntry.subleaseassignmentno = ""
            this.PI_subleaseassignmentno.cProtect = false
            this.$refs.ref_subleaseassignmentno.focus()
          }
          this.PI_subleaseassignmentaddresscd.dataLookUp.InitialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ContactId = ''"
        },
        M_Edit(){
          let data = this.$store.getters.GetPage1Data
          // console.log(data)
          if(data.Status == 'New'){
            this.$refs.ref_subleaseassignmentdate.focus()
          }
          else{
            this.$refs.ref_remarks.focus()
          }
        },
        M_Delete(dt){       
          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
      
          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              SubleaseAssignmentNo: value.SubleaseAssignmentNo,
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
          if (record.Status == 'New') {
            this.PI_subleaseassignmentdate.cKey = false
            this.PI_applicationno.cKey = true
            this.PI_subleaseassignmentcontactid.cKey = false
            this.PI_subleaseassignmentaddresscd.cKey = false
            this.PI_descs.cKey = false
            this.PI_customerrequestno.cKey = false
            this.PI_customerrequestdate.cKey = false
            this.PI_totalamortizedinvoice.cKey = false
          }
          else {
            this.PI_subleaseassignmentdate.cKey = true
            this.PI_applicationno.cKey = true
            this.PI_subleaseassignmentcontactid.cKey = true
            this.PI_subleaseassignmentaddresscd.cKey = true
            this.PI_descs.cKey = true
            this.PI_customerrequestno.cKey = true
            this.PI_customerrequestdate.cKey = true
            this.PI_totalamortizedinvoice.cKey = true
          }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                subleaseassignmentno: record.SubleaseAssignmentNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_ContractAssignmentEntry = {
                subleaseassignmentno: data.subleaseassignmentno,
                subleaseassignmentdate: data.subleaseassignmentdate,
                applicationno: data.applicationno,
                subleaseassignmentcontactid: data.subleaseassignmentcontactid,
                namecustomer: data.namecustomer,
                brandcd: data.brandcd,
                brandname: data.brandname,
                descs: data.descs,
                name: data.name,
                customerrequestno: data.customerrequestno,
                customerrequestdate: data.customerrequestdate,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lano: data.lano,
                ladate: data.ladate,
                contactid: data.contactid,
                customercategorycd: data.customercategorycd,
                rcd: data.rcd,
                red: data.red,
                con_rcd: data.con_rcd,
                con_red: data.con_red,
                totalamortizedinvoice: this.isCurrency(data.totalamortizedinvoice, this.decimal),
                leaseperiod: data.leaseperiod,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                marketingid: data.marketingid,
                operatingfromhour: data.operatingfromhour + " - " + data.operatingtohour,
                operatingtohour: data.operatingtohour,
                grossdescs: this.isCurrency(data.grossarea, this.decimal) + " / " + this.isCurrency(data.semigrossarea, this.decimal) + " / " + this.isCurrency(data.netarea, this.decimal),
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                telephoneline: data.telephoneline,
                securitydepositrental: data.securitydepositrental,
                securitydepositsc: data.securitydepositsc,
                servicecharge: this.isCurrency(data.servicecharge, this.decimal),
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal),
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal),
                fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal),
                sinkingfund: this.isCurrency(data.sinkingfund, this.decimal),
                rentalbase: data.rentalbase,
                revenuesharetype: data.revenuesharetype,
                subleaseassignmentaddresscd: data.subleaseassignmentaddresscd,
                addressdescs: data.addressdescs,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                totalaging: data.totalaging,
                grossseminetarea: this.isCurrency(data.grossarea, this.decimal) + " / " + this.isCurrency(data.semigrossarea, this.decimal) + " / " + this.isCurrency(data.netarea, this.decimal),
                chargeperiod: data.chargeperiod,
                perioddays: data.perioddays,
                freerentalperiod: data.freerentalperiod,
                    }
                 

                this.M_TN_ContractAssignmentEntry.applicationnoLabel = this.M_TN_ContractAssignmentEntry.applicationno != null && this.M_TN_ContractAssignmentEntry.applicationno != '' ? data.applicationno + this.separator + data.name :'' 
                this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactidLabel = this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid != null && this.M_TN_ContractAssignmentEntry.subleaseassignmentcontactid != '' ? data.subleaseassignmentcontactid + this.separator + data.namecustomer :'' 
                this.M_TN_ContractAssignmentEntry.subleaseassignmentaddresscdLabel = this.M_TN_ContractAssignmentEntry.subleaseassignmentaddresscd != null && this.M_TN_ContractAssignmentEntry.subleaseassignmentaddresscd != '' ? data.subleaseassignmentaddresscd + this.separator + data.addressdescs :'' 
         
                switch (data.chargeperiod) {
                  case "M":
                      this.M_TN_ContractAssignmentEntry.chargeperiod = 'months'
                      break;
                  case "D":
                      this.M_TN_ContractAssignmentEntry.chargeperiod = 'days'
                      break;
                  default:
                      this.M_TN_ContractAssignmentEntry.chargeperiod = 'years'
                      break;
                }  
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        // ,MdtRange_operatingfromhour (data) {
        //     this.M_TN_ContractAssignmentEntry.operatingfromhour = data
        // }
        // ,MdtRange_operatingtohour (data) {
        //     this.M_TN_ContractAssignmentEntry.operatingtohour = data
        // }
        ,MdtRange_rcd (data) {
            this.M_TN_ContractAssignmentEntry.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_ContractAssignmentEntry.red = data
        },
        getSpec () {
          var param = {
            OptionFunctionCd: "GetSpecification",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) {
              this.alertError("Please Check TN Specification")
              return
            }

            this.TNSpec = ress[0]
            this.FormToABSList().doGetList('','eb_getList')
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
      this.getSpec()
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

