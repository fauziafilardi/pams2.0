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
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_CLReservationEntry.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_CLReservationEntry.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reservationno" v-model="M_TN_CLReservationEntry.reservationno"  ref="ref_reservationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_CLReservationEntry.marketingid" :label="M_TN_CLReservationEntry.marketingidLabel" ref="ref_marketingid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnreservationdateChange" :prop="PI_reservationdate" v-model="M_TN_CLReservationEntry.reservationdate"  ref="ref_reservationdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_leaseperiod" v-model="M_TN_CLReservationEntry.leaseperiod"  ref="ref_leaseperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                          <ABSInputSelectList @change="OncustomerChange" :prop="PI_customer" :value="M_TN_CLReservationEntry.customer" :label="M_TN_CLReservationEntry.customerLabel" ref="ref_customer"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_freerentalperiod" v-model="M_TN_CLReservationEntry.freerentalperiod"  ref="ref_freerentalperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OneventnameChange" :prop="PI_eventname" :value="M_TN_CLReservationEntry.eventname" :label="M_TN_CLReservationEntry.eventnameLabel" ref="ref_eventname"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcdred" :valueFrom="M_TN_CLReservationEntry.rcd" :valueTo="M_TN_CLReservationEntry.red" ref="ref_reserved" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_eventcustomercategory" v-model="M_TN_CLReservationEntry.eventcustomercategory"  ref="ref_eventcustomercategory"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_totalgrossarea" v-model="M_TN_CLReservationEntry.totalgrossarea"  ref="ref_totalgrossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_eventcustomersource" v-model="M_TN_CLReservationEntry.eventcustomersource"  ref="ref_eventcustomersource"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLReservationEntry.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_eventbrandname" v-model="M_TN_CLReservationEntry.eventbrandname"  ref="ref_eventbrandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputTimeRange :prop="PI_eventoperatinghour" :valueFrom="M_TN_CLReservationEntry.eventoperatingfromhour" :valueTo="M_TN_CLReservationEntry.eventoperatingtohour" ref="ref_eventoperatinghour" @from="MdtRange_eventoperatingfromhour" @to="MdtRange_eventoperatingtohour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_eventdate" :valueFrom="M_TN_CLReservationEntry.eventstartdate" :valueTo="M_TN_CLReservationEntry.eventenddate" ref="ref_eventdate" @from="MdtRange_eventstartdate" @to="MdtRange_eventenddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_eventrcdred" :valueFrom="M_TN_CLReservationEntry.eventrcd" :valueTo="M_TN_CLReservationEntry.eventred" ref="ref_eventrcdred" @from="MdtRange_eventrcd" @to="MdtRange_eventred" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_eventleaseperiod" v-model="M_TN_CLReservationEntry.eventleaseperiod"  ref="ref_eventleaseperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_CLReservationEntry.customercategorycd" :label="M_TN_CLReservationEntry.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_CLReservationEntry.brandcd" :label="M_TN_CLReservationEntry.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputTimeRange :prop="PI_operatinghour" :valueFrom="M_TN_CLReservationEntry.operatingfromhour" :valueTo="M_TN_CLReservationEntry.operatingtohour" ref="ref_operatinghour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_CLReservationEntry.reasoncd" :label="M_TN_CLReservationEntry.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_CLReservationEntry.reasondescs"  ref="ref_reasondescs"/>
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
                initialWhere: "ContractStatus ='5' and CustomerType = 'C' AND SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_CLReservationEntry :{
                applicationno: '',
                reservationno: '',
                reservationdate: '',
                customer: '',
                customerLabel: '',
                eventname: '',
                eventnameLabel: '',
                eventcustomercategory: '',
                eventcustomersource: '',
                eventbrandname: '',
                eventoperatingfromhour: '',
                eventoperatingtohour: '',
                eventstartdate: '',
                eventenddate: '',
                eventrcd: '', //rcd
                eventred: '', //red
                eventleaseperiod: '',
                customercategorycd: '',
                customercategorycdLabel: '',
                brandcd: '',
                brandcdLabel: '',
                brandname: '',
                operatingfromhour: '',
                operatingtohour: '',
                reasoncd: '',
                reasoncdLabel: '',
                reasondescs: '',
                status: '',
                marketingid: '',
                marketingidLabel: '',
                leaseperiod: '',
                freerentalperiod: '',
                rcd: '', //reserved rcd
                red: '', //reserved red
                totalgrossarea: '',
                remarks: '',
                lastupdatestamp: '',
                chargeperiod: '',
                eventchargeperiod: ''
            },
            PI_applicationno: { 
                cValidate :'required|max:20', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
            PI_reservationno: { 
                cValidate :'max:20', 
                cName: 'reservationno', 
                cLabel: 'Reservation No', 
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
            PI_reservationdate: { 
                cValidate :'', 
                cName: 'reservationdate', 
                cLabel: 'Reservation Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_customer: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'customer', 
                cLabel: 'Customer', 
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
            PI_eventname: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNEvent'    , 
                    ColumnDB: 'EventNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'eventname', 
                cLabel: 'Event Name', 
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
                cDisplayColumn: 'EventNo, Descs' ,
            },
            PI_eventcustomercategory: { 
                cValidate :'max:60', 
                cName: 'eventcustomercategory', 
                cLabel: 'Customer Category', 
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
            PI_eventcustomersource: { 
                cValidate :'max:60', 
                cName: 'eventcustomersource', 
                cLabel: 'Customer Source', 
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
            PI_eventbrandname: {
                cValidate :'max:8', 
                cName: 'eventbrandname', 
                cLabel: 'Product Type / Name', 
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
            PI_eventoperatinghour: {
                cValidate :'', 
                cName: 'eventoperatinghour', 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cOrder: 9, 
                cFormat: 'HH:mm',
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_eventdate: {
                cValidate :'', 
                cName: 'eventdate', 
                cLabel: 'Start Date - End Date', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_eventrcdred: {
                cValidate :'', 
                cName: 'eventrcdred', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cProtectFrom: false,
                cProtectTo: true,
                cOrder: 11, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_eventleaseperiod: {
                cValidate :'max:10', 
                cName: 'eventleaseperiod', 
                cLabel: 'Lease - Charge Period', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'days',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNCustomerCategory'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and CLStatus = 'Y'"   , 
                    ParamWhere: ''  ,
                    SourceField: "CustomerCategoryCd,Descs,ChargePeriod=ChargePeriodDescs,TimeEdit",
                    DisplayLookUp: "CustomerCategoryCd,Descs"
                        }, 
                cValidate :'required', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cDisplayColumn: 'CustomerCategoryCd,Descs' ,
            },
            PI_brandcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNBrand'    , 
                    ColumnDB: 'BrandCd'   , 
                    InitialWhere: "BrandOwnerId = ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Product Type / Name', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 14, 
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
            PI_operatinghour: {
                cValidate :'', 
                cName: 'operatinghour', 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cOrder: 15, 
                cFormat: 'HH:mm',
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
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
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
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
            PI_marketingid: { 
                dataLookUp: { 
                    LookUpCd: 'GetMarketingBrandPIC'    , 
                    ColumnDB: 'MarketingId'   , 
                    InitialWhere: "SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 18, 
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
                cDisplayColumn: 'MarketingID,MarketingName' ,
            },
            PI_leaseperiod: {
                cValidate :'max:3', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'days.',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_freerentalperiod: {
                cValidate :'max:3', 
                cName: 'freerentalperiod', 
                cLabel: 'Free', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_rcdred: {
                cValidate :'', 
                cName: 'rcdred', 
                cLabel: 'Reserved From - To', 
                cLabelSize: 4, 
                cProtectFrom: false,
                cProtectTo: true,
                cOrder: 21, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_totalgrossarea: { 
                cLabel: 'Total Gross Area', 
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
                cOrder: 22, 
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
                if (ress.length < 1) return

                this.TNSpec = ress[0]
            })
        },
        OnreservationdateChange (data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {}
            })
            this.$forceUpdate()
        },
        OnmarketingidChange (data) {
            this.$nextTick(() => {
                this.M_TN_CLReservationEntry.marketingid = data.id
                this.M_TN_CLReservationEntry.marketingidLabel = data.label
                if (this.inputStatus != "VIEW") {}
            })
            this.$forceUpdate()
        },
        OncustomerChange (data) {
            this.$nextTick(() => {
                this.M_TN_CLReservationEntry.customer = data.id
                this.M_TN_CLReservationEntry.customerLabel = data.label
                if (this.inputStatus != "VIEW") {
                    var param = {
                        OptionFunctionCd: "IsCustomerHasBrand",
                        ModuleCd: this.Module,
                        BrandOwnerId: data.id
                    }

                    this.FnDynamicFunction(param)
                    .then(ress => {
                        if (ress == null) return
                        if (ress.length < 1) return
                        var data = ress[0]
                        if (data.HasBrand.toString() == '1') {
                            this.PI_brandcd.dataLookUp.InitialWhere = "BrandOwnerId = '" + data.id + "'"
                        }
                    })
                }
            })
            this.$forceUpdate()
        },
        OneventnameChange (data) {
            this.$nextTick(() => {
                this.M_TN_CLReservationEntry.eventname = data.id
                this.M_TN_CLReservationEntry.eventnameLabel = data.label
                if (this.inputStatus != "VIEW") {
                    var param = {
                        OptionFunctionCd: "GetEventInfo",
                        ModuleCd: this.Module,
                        EventNo: data.id
                    }

                    this.FnDynamicFunction(param)
                    .then(ress => {
                        if (ress == null) return
                        if (ress.length < 1) return
                        var data = ress[0]
                        this.M_TN_CLReservationEntry.eventcustomercategorycd = data.CustomerCategoryCd
                        this.M_TN_CLReservationEntry.eventcustomersource = data.Organizer
                        this.M_TN_CLReservationEntry.eventbrandname = data.BrandCd
                        this.M_TN_CLReservationEntry.eventoperatingfromhour = data.OperatingFromHour
                        this.M_TN_CLReservationEntry.eventoperatingtohour = data.OperatingToHour
                        this.M_TN_CLReservationEntry.eventrcd = data.FromDate
                        this.M_TN_CLReservationEntry.eventred = data.ToDate
                        this.M_TN_CLReservationEntry.eventstartdate = data.FromDate
                        this.M_TN_CLReservationEntry.eventenddate = data.ToDate
                        this.M_TN_CLReservationEntry.eventleaseperiod = data.LeasePeriod
                        this.M_TN_CLReservationEntry.eventchargeperiod = data.ChargePeriod
                        this.M_TN_CLReservationEntry.customercategorycd = data.CustomerCategoryCd
                        this.M_TN_CLReservationEntry.customercategorycdLabel = data.CustomerCategoryCd
                        this.M_TN_CLReservationEntry.brandcd = data.BrandCd
                        this.M_TN_CLReservationEntry.brandcdLabel = data.BrandName
                    })
                }
            })
            this.$forceUpdate()
        },
        MdtRange_rcd (data) {
            this.M_TN_CLReservationEntry.rcd = data
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    var year = data && data != '' ? this.momentDateFormatting(data, 'YYYY') : this.momentDateFormatting(new Date(), 'YYYY')
                    var period = this.M_TN_CLReservationEntry.leaseperiod && this.M_TN_CLReservationEntry.leaseperiod != '' ? parseInt(this.M_TN_CLReservationEntry.leaseperiod) : 0
                    var param = {
                        OptionFunctionCd: "GetLeasingPolicyData",
                        ModuleCd: this.Module,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        LeasingPolicyYear: data,
                        CustomerCategoryCd: year,
                        LeasePeriod: period
                    }

                    this.FnDynamicFunction(param)
                    .then(ress => {
                        if (ress == null) return
                        if (ress.length < 1) return
                        
                        if (this.M_TN_CLReservationEntry.chargeperiod == 'days') {
                            this.M_TN_CLReservationEntry.red = this.dateadd2('d', data, (period-1))
                        }
                        else if (this.M_TN_CLReservationEntry.chargeperiod == 'months') {
                            var temp = this.dateadd2('m', data, (period))
                            this.M_TN_CLReservationEntry.red = this.dateadd2('d', temp, (-1))
                        }
                        else {
                            var temp = this.dateadd2('y', data, (period))
                            this.M_TN_CLReservationEntry.red = this.dateadd2('d', temp, (-1))
                        }
                    })
                }
            })
            this.$forceUpdate()
        },
        MdtRange_red (data) {
            this.M_TN_CLReservationEntry.red = data
        },
        OnremarksChange (data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {}
            })
            this.$forceUpdate()
        },
        MdtRange_eventoperatingfromhour (data) {
            this.M_TN_CLReservationEntry.eventoperatingfromhour = data
        },
        MdtRange_eventoperatingtohour (data) {
            this.M_TN_CLReservationEntry.eventoperatingtohour = data
        },
        MdtRange_eventstartdate (data) {
            this.M_TN_CLReservationEntry.eventstartdate = data
        },
        MdtRange_eventenddate (data) {
            this.M_TN_CLReservationEntry.eventenddate = data
        },
        MdtRange_eventrcd (data) {
            this.M_TN_CLReservationEntry.eventrcd = data

                    if (this.M_TN_CLReservationEntry.leaseperiod && this.M_TN_CLReservationEntry.leaseperiod != '') {
                        this.M_TN_CLReservationEntry.eventred = this.dateAdd2('d', data, this.M_TN_CLReservationEntry.leaseperiod)
                    }
        },
        MdtRange_eventred (data) {
            this.M_TN_CLReservationEntry.eventred = data
        },
        OncustomercategorycdChange (data) {
            this.$nextTick(() => {
                this.M_TN_CLReservationEntry.customercategorycd = data.id
                this.M_TN_CLReservationEntry.customercategorycdLabel = data.label
                if (this.inputStatus != "VIEW") {}
            })
            this.$forceUpdate()
        },
        OnbrandcdChange (data) {
            this.$nextTick(() => {
                this.M_TN_CLReservationEntry.brandcd = data.id
                this.M_TN_CLReservationEntry.brandcdLabel = data.label
                if (this.inputStatus != "VIEW") {
                    this.M_TN_CLReservationEntry.brandname = data.BrandName
                }
            })
            this.$forceUpdate()
        },
        MdtRange_operatingfromhour (data) {
            this.M_TN_CLReservationEntry.operatingfromhour = data
        },
        MdtRange_operatingtohour (data) {
            this.M_TN_CLReservationEntry.operatingtohour = data
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLReservationEntry.reasoncd = data.id
            this.M_TN_CLReservationEntry.reasoncdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_CLReservationEntry.reasondescs = data.Descs
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
            if (this.M_TN_CLReservationEntry.applicationno == '(auto)') {
                this.FnGenerateRunningCode(
                    this.getDataUser().SubPortfolioCd,
                    this.TNSpec.ApplicationLeasingRunningCd,
                    this.getDataUser().UserId,
                    this.M_TN_CLReservationEntry.reservationdate
                )
                .then(dt9 => {
                    if (dt9 == null) return
                    // console.log(dt9)
                    this.M_TN_CLReservationEntry.applicationno = dt9.RunningCode
                    // console.log(dt9)
                    if (this.M_TN_CLReservationEntry.reservationno == '(auto)') {
                        this.FnGenerateRunningCode(
                            this.getDataUser().SubPortfolioCd,
                            this.TNSpec.CLReservationRunningCd,
                            this.getDataUser().UserId,
                            this.M_TN_CLReservationEntry.reservationdate
                        )
                        .then(dt10 => {
                            if (dt10 == null) return
                            // console.log(dt10)
                            this.M_TN_CLReservationEntry.reservationno = dt10.RunningCode
                            // console.log(dt10)
                            //Mari Insert Dibawah
                            var param = {			
                                OptionSeq: this.getOptionSeq().OptionSeq,
                                LineNo: this.$parent.data.PageOrder,
                                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                                ApplicationNo: this.M_TN_CLReservationEntry.applicationno,
                                ReservationNo: this.M_TN_CLReservationEntry.reservationno,
                                ReservationDate: this.M_TN_CLReservationEntry.reservationdate,
                                Customer: this.M_TN_CLReservationEntry.customer == '' || this.M_TN_CLReservationEntry.customer == null ? 'NULL' : this.M_TN_CLReservationEntry.customer,
                                EventNo: this.M_TN_CLReservationEntry.eventname == '' || this.M_TN_CLReservationEntry.eventname == null ? 'NULL' : this.M_TN_CLReservationEntry.eventname,
                                CustomerCategoryCd: this.M_TN_CLReservationEntry.customercategorycd == '' || this.M_TN_CLReservationEntry.customercategorycd == null ? 'NULL' : this.M_TN_CLReservationEntry.customercategorycd,
                                BrandCd: this.M_TN_CLReservationEntry.brandcd == '' || this.M_TN_CLReservationEntry.brandcd == null ? 'NULL' : this.M_TN_CLReservationEntry.brandcd,
                                BrandName: this.M_TN_CLReservationEntry.brandname,
                                OperatingFromHour: this.M_TN_CLReservationEntry.eventoperatingfromhour,
                                OperatingToHour: this.M_TN_CLReservationEntry.eventoperatingtohour,
                                ReservationReasonCd: this.M_TN_CLReservationEntry.reasoncd == '' || this.M_TN_CLReservationEntry.reasoncd == null ? 'NULL' : this.M_TN_CLReservationEntry.reasoncd,
                                ReservationReasonDescs: this.M_TN_CLReservationEntry.reasondescs,
                                ContractStatus: '5',
                                MarketingId: this.M_TN_CLReservationEntry.marketingid == '' || this.M_TN_CLReservationEntry.marketingid == null ? 'NULL' : this.M_TN_CLReservationEntry.marketingid,
                                LeasePeriod: this.M_TN_CLReservationEntry.leaseperiod,
                                ChargePeriod: this.M_TN_CLReservationEntry.chargeperiod,
                                RCD: this.M_TN_CLReservationEntry.eventrcd,
                                RED: this.M_TN_CLReservationEntry.eventred,
                                EventFromdate: this.M_TN_CLReservationEntry.eventfromdate,
                                EventTodate: this.M_TN_CLReservationEntry.eventtodate,
                                CustomerType: 'C',
                                TenantStatus: 'N',
                                LeaseStatus: 'N',
                                StopAfterLeaseStatus: 'N',
                                RentalRateType: 'F',
                                CustomerSource: this.M_TN_CLReservationEntry.eventcustomersource,
                                RevenueShareType: 'S',
                                RentalBase: 'F',
                                ChargeArea: 'G',
                                Status: 'N',
                                AntennaStatus: 'N',
                                TemporaryShopStatus: 'N',
                                Remarks: this.M_TN_CLReservationEntry.remarks,
                                UserInput: this.getDataUser().UserId,
                            }

                            this.postJSON(this.getUrlInsert(), param)
                            .then((response) => {
                                if(response == null) return
                                this.$parent.resultInsert(response.Message)
                            })
                        })
                    }
                    else {
                        //Mari Insert Dibawah
                        var param = {			
                            OptionSeq: this.getOptionSeq().OptionSeq,
                            LineNo: this.$parent.data.PageOrder,
                            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                            ApplicationNo: this.M_TN_CLReservationEntry.applicationno,
                            ReservationNo: this.M_TN_CLReservationEntry.reservationno,
                            ReservationDate: this.M_TN_CLReservationEntry.reservationdate,
                            Customer: this.M_TN_CLReservationEntry.customer == '' || this.M_TN_CLReservationEntry.customer == null ? 'NULL' : this.M_TN_CLReservationEntry.customer,
                            EventNo: this.M_TN_CLReservationEntry.eventname == '' || this.M_TN_CLReservationEntry.eventname == null ? 'NULL' : this.M_TN_CLReservationEntry.eventname,
                            CustomerCategoryCd: this.M_TN_CLReservationEntry.customercategorycd == '' || this.M_TN_CLReservationEntry.customercategorycd == null ? 'NULL' : this.M_TN_CLReservationEntry.customercategorycd,
                            BrandCd: this.M_TN_CLReservationEntry.brandcd == '' || this.M_TN_CLReservationEntry.brandcd == null ? 'NULL' : this.M_TN_CLReservationEntry.brandcd,
                            BrandName: this.M_TN_CLReservationEntry.brandname,
                            OperatingFromHour: this.M_TN_CLReservationEntry.eventoperatingfromhour,
                            OperatingToHour: this.M_TN_CLReservationEntry.eventoperatingtohour,
                            ReservationReasonCd: this.M_TN_CLReservationEntry.reasoncd == '' || this.M_TN_CLReservationEntry.reasoncd == null ? 'NULL' : this.M_TN_CLReservationEntry.reasoncd,
                            ReservationReasonDescs: this.M_TN_CLReservationEntry.reasondescs,
                            ContractStatus: '5',
                            MarketingId: this.M_TN_CLReservationEntry.marketingid == '' || this.M_TN_CLReservationEntry.marketingid == null ? 'NULL' : this.M_TN_CLReservationEntry.marketingid,
                            LeasePeriod: this.M_TN_CLReservationEntry.leaseperiod,
                            ChargePeriod: this.M_TN_CLReservationEntry.chargeperiod,
                            RCD: this.M_TN_CLReservationEntry.eventrcd,
                            RED: this.M_TN_CLReservationEntry.eventred,
                            EventFromdate: this.M_TN_CLReservationEntry.eventfromdate,
                            EventTodate: this.M_TN_CLReservationEntry.eventtodate,
                            CustomerType: 'C',
                            TenantStatus: 'N',
                            LeaseStatus: 'N',
                            StopAfterLeaseStatus: 'N',
                            RentalRateType: 'F',
                            CustomerSource: this.M_TN_CLReservationEntry.eventcustomersource,
                            RevenueShareType: 'S',
                            RentalBase: 'F',
                            ChargeArea: 'G',
                            Status: 'N',
                            AntennaStatus: 'N',
                            TemporaryShopStatus: 'N',
                            Remarks: this.M_TN_CLReservationEntry.remarks,
                            UserInput: this.getDataUser().UserId,
                        }

                        this.postJSON(this.getUrlInsert(), param)
                        .then((response) => {
                            if(response == null) return
                            this.$parent.resultInsert(response.Message)
                        })
                    }
                })
            }
            else {
                //Mari Insert Dibawah
                var param = {			
                    OptionSeq: this.getOptionSeq().OptionSeq,
                    LineNo: this.$parent.data.PageOrder,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: this.M_TN_CLReservationEntry.applicationno,
                    ReservationNo: this.M_TN_CLReservationEntry.reservationno,
                    ReservationDate: this.M_TN_CLReservationEntry.reservationdate,
                    Customer: this.M_TN_CLReservationEntry.customer == '' || this.M_TN_CLReservationEntry.customer == null ? 'NULL' : this.M_TN_CLReservationEntry.customer,
                    EventNo: this.M_TN_CLReservationEntry.eventname == '' || this.M_TN_CLReservationEntry.eventname == null ? 'NULL' : this.M_TN_CLReservationEntry.eventname,
                    CustomerCategoryCd: this.M_TN_CLReservationEntry.customercategorycd == '' || this.M_TN_CLReservationEntry.customercategorycd == null ? 'NULL' : this.M_TN_CLReservationEntry.customercategorycd,
                    BrandCd: this.M_TN_CLReservationEntry.brandcd == '' || this.M_TN_CLReservationEntry.brandcd == null ? 'NULL' : this.M_TN_CLReservationEntry.brandcd,
                    BrandName: this.M_TN_CLReservationEntry.brandname,
                    OperatingFromHour: this.M_TN_CLReservationEntry.eventoperatingfromhour,
                    OperatingToHour: this.M_TN_CLReservationEntry.eventoperatingtohour,
                    ReservationReasonCd: this.M_TN_CLReservationEntry.reasoncd == '' || this.M_TN_CLReservationEntry.reasoncd == null ? 'NULL' : this.M_TN_CLReservationEntry.reasoncd,
                    ReservationReasonDescs: this.M_TN_CLReservationEntry.reasondescs,
                    ContractStatus: '5',
                    MarketingId: this.M_TN_CLReservationEntry.marketingid == '' || this.M_TN_CLReservationEntry.marketingid == null ? 'NULL' : this.M_TN_CLReservationEntry.marketingid,
                    LeasePeriod: this.M_TN_CLReservationEntry.leaseperiod,
                    ChargePeriod: this.M_TN_CLReservationEntry.chargeperiod,
                    RCD: this.M_TN_CLReservationEntry.eventrcd,
                    RED: this.M_TN_CLReservationEntry.eventred,
                    EventFromdate: this.M_TN_CLReservationEntry.eventfromdate,
                    EventTodate: this.M_TN_CLReservationEntry.eventtodate,
                    CustomerType: 'C',
                    TenantStatus: 'N',
                    LeaseStatus: 'N',
                    StopAfterLeaseStatus: 'N',
                    RentalRateType: 'F',
                    CustomerSource: this.M_TN_CLReservationEntry.eventcustomersource,
                    RevenueShareType: 'S',
                    RentalBase: 'F',
                    ChargeArea: 'G',
                    Status: 'N',
                    AntennaStatus: 'N',
                    TemporaryShopStatus: 'N',
                    Remarks: this.M_TN_CLReservationEntry.remarks,
                    UserInput: this.getDataUser().UserId,
                }

                this.postJSON(this.getUrlInsert(), param)
                .then((response) => {
                    if(response == null) return
                    this.$parent.resultInsert(response.Message)
                })
            }
        },
        M_Update() {
            console.log(this.M_TN_CLReservationEntry)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_CLReservationEntry.applicationno,
                ReservationNo: this.M_TN_CLReservationEntry.reservationno,
                ReservationDate: this.M_TN_CLReservationEntry.reservationdate,
                Customer: this.M_TN_CLReservationEntry.customer == '' || this.M_TN_CLReservationEntry.customer == null ? 'NULL' : this.M_TN_CLReservationEntry.customer,
                EventNo: this.M_TN_CLReservationEntry.eventname == '' || this.M_TN_CLReservationEntry.eventname == null ? 'NULL' : this.M_TN_CLReservationEntry.eventname,
                CustomerCategoryCd: this.M_TN_CLReservationEntry.customercategorycd == '' || this.M_TN_CLReservationEntry.customercategorycd == null ? 'NULL' : this.M_TN_CLReservationEntry.customercategorycd,
                BrandCd: this.M_TN_CLReservationEntry.brandcd == '' || this.M_TN_CLReservationEntry.brandcd == null ? 'NULL' : this.M_TN_CLReservationEntry.brandcd,
                BrandName: this.M_TN_CLReservationEntry.brandname == '' || this.M_TN_CLReservationEntry.brandname == null ? 'NULL' : this.M_TN_CLReservationEntry.brandname,
                OperatingFromHour: this.M_TN_CLReservationEntry.eventoperatingfromhour,
                OperatingToHour: this.M_TN_CLReservationEntry.eventoperatingtohour,
                ReservationReasonCd: this.M_TN_CLReservationEntry.reasoncd == '' || this.M_TN_CLReservationEntry.reasoncd == null ? 'NULL' : this.M_TN_CLReservationEntry.reasoncd,
                ReservationReasonDescs: this.M_TN_CLReservationEntry.reasondescs,
                ContractStatus: '5',
                MarketingId: this.M_TN_CLReservationEntry.marketingid == '' || this.M_TN_CLReservationEntry.marketingid == null ? 'NULL' : this.M_TN_CLReservationEntry.marketingid,
                LeasePeriod: this.M_TN_CLReservationEntry.leaseperiod,
                ChargePeriod: this.M_TN_CLReservationEntry.chargeperiod,
                RCD: this.M_TN_CLReservationEntry.eventrcd,
                RED: this.M_TN_CLReservationEntry.eventred,
                EventFromdate: this.M_TN_CLReservationEntry.eventstartdate,
                EventTodate: this.M_TN_CLReservationEntry.eventenddate,
                CustomerType: 'C',
                TenantStatus: 'N',
                LeaseStatus: 'N',
                StopAfterLeaseStatus: 'N',
                RentalRateType: 'F',
                CustomerSource: this.M_TN_CLReservationEntry.eventcustomersource,
                RevenueShareType: 'S',
                RentalBase: 'F',
                ChargeArea: 'G',
                Status: 'N',
                AntennaStatus: 'N',
                TemporaryShopStatus: 'N',
                Remarks: this.M_TN_CLReservationEntry.remarks,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_TN_CLReservationEntry.lastupdatestamp          
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)	
            })
        },
		M_ClearForm(){
            this.M_TN_CLReservationEntry = {
                applicationno: '',
                reservationno: '',
                reservationdate: this.getToday(),
                customer: '',
                eventname: '',
                eventnameLabel: '',
                eventcustomercategory: '',
                eventcustomersource: '',
                eventbrandname: '',
                eventoperatingfromhour: '',
                eventoperatingtohour: '',
                eventstartdate: '',
                eventenddate: '',
                eventrcd: '', //rcd
                eventred: '', //red
                eventleaseperiod: '',
                customercategorycd: '',
                customercategorycdLabel: '',
                brandcd: '',
                brandcdLabel: '',
                brandname: '',
                operatingfromhour: '',
                operatingtohour: '',
                reasoncd: '',
                reasoncdLabel: '',
                reasondescs: '',
                status: '',
                marketingid: '',
                marketingidLabel: '',
                leaseperiod: '',
                freerentalperiod: '',
                rcd: '', //reserved rcd
                red: '', //reserved red
                totalgrossarea: '',
                remarks: '',
                lastupdatestamp: '',
                chargeperiod: '',
                eventchargeperiod: ''
            }		
		},
        M_New(){
            if (this.TNSpec.ApplicationLeasingRunningCd != null && this.TNSpec.ApplicationLeasingRunningCd != "") {
                this.M_TN_CLReservationEntry.applicationno = "(auto)"
                this.PI_applicationno.cProtect = true
            }
            else {
                this.M_TN_CLReservationEntry.applicationno = ""
                this.PI_applicationno.cProtect = false
            }

            if (this.TNSpec.CLReservationRunningCd != null && this.TNSpec.CLReservationRunningCd != "") {
                this.M_TN_CLReservationEntry.reservationno = "(auto)"
                this.PI_reservationno.cProtect = true
            }
            else {
                this.M_TN_CLReservationEntry.reservationno = ""
                this.PI_reservationno.cProtect = false
            }	
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			data.forEach((value) => {
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
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
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: record.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
                this.M_TN_CLReservationEntry = {
                    applicationno: record.ApplicationNo,
                    reservationno: data.loono,
                    reservationdate: data.loodate,
                    customer: data.contactid,
                    customerLabel: data.contactid, 
                    eventname: data.eventno,
                    eventnameLabel: data.eventno,
                    eventcustomercategory: data.eventcustomercategorycd,
                    eventcustomersource: data.organizer,
                    eventbrandname: data.eventbrandcd,
                    eventoperatingfromhour: data.eventoperatingfromhour,
                    eventoperatingtohour: data.eventoperatingtohour,
                    eventstartdate: data.eventfromdate,
                    eventenddate: data.eventtodate,
                    eventrcd: data.eventfromdate, //rcd
                    eventred: data.eventtodate, //red
                    eventleaseperiod: data.leaseperiod,
                    customercategorycd: data.customercategorycd,
                    customercategorycdLabel: (data.customercategorycd && data.customercategorycd != '') ? (data.customercategorycd + this.separator + data.customercategorydescs) : '' ,
                    brandcd: data.brandcd,
                    brandcdLabel: (data.brandcd && data.brandcd != '') ? (data.brandcd + this.separator + data.brandname) : '',
                    operatingfromhour: data.operatingfromhour,
                    operatingtohour: data.operatingtohour,
                    reasoncd: data.reservationreasoncd,
                    reasoncdLabel: (data.reservationreasoncd && data.reservationreasoncd != '') ? (data.reservationreasoncd + this.separator + data.reservationreasondescs) : '',
                    reasondescs: data.reservationreasondescs,
                    status: data.contractstatus,
                    marketingid: data.marketingid,
                    marketingidLabel: data.marketingid,
                    leaseperiod: data.leaseperiod,
                    freerentalperiod: '',
                    rcd: data.rcd, //reserved rcd
                    red: data.red, //reserved red
                    totalgrossarea: this.isCurrency(data.totalgrossarea, this.decimal),
                    remarks: data.remarks,
                    lastupdatestamp: record.LastUpdateStamp
                }

                if (data.eventchargeperiod == 'M') {
                  this.PI_eventleaseperiod.cLastLabel = 'months'
                  this.M_TN_CLReservationEntry.eventchargeperiod = 'months'
                }
                else if (data.eventchargeperiod == 'Y') {
                  this.PI_eventleaseperiod.cLastLabel = 'years'
                  this.M_TN_CLReservationEntry.eventchargeperiod = 'years'
                }
                else {
                  this.PI_eventleaseperiod.cLastLabel = 'days'
                  this.M_TN_CLReservationEntry.eventchargeperiod = 'days'
                }

                if (data.chargeperiod == 'M') {
                  this.PI_leaseperiod.cLastLabel = 'months.'
                  this.M_TN_CLReservationEntry.chargeperiod = 'months'
                }
                else if (data.eventchargeperiod == 'Y') {
                  this.PI_leaseperiod.cLastLabel = 'years.'
                  this.M_TN_CLReservationEntry.chargeperiod = 'years'
                }
                else {
                  this.PI_leaseperiod.cLastLabel = 'days.'
                  this.M_TN_CLReservationEntry.chargeperiod = 'days'
                }
         

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
        this.GetSpecificationData()
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

