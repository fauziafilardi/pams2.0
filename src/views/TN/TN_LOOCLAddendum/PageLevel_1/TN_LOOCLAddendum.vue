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
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_LOOCLAddendum.applicationno" :label="M_TN_LOOCLAddendum.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_LOOCLAddendum.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_addendumrefno" v-model="M_TN_LOOCLAddendum.addendumrefno"  ref="ref_addendumrefno"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="M_TN_LOOCLAddendum.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">{{M_TN_LOOCLAddendum.chargeperiod}}</label>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnaddendumdateChange" :prop="PI_addendumdate" v-model="M_TN_LOOCLAddendum.addendumdate"  ref="ref_addendumdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LOOCLAddendum.rcd" :valueTo="M_TN_LOOCLAddendum.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaddendumtypecdChange" :prop="PI_addendumtypecd" :value="M_TN_LOOCLAddendum.addendumtypecd" :label="M_TN_LOOCLAddendum.addendumtypecdLabel" ref="ref_addendumtypecd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_LOOCLAddendum.utilitiesstartdate" :valueTo="M_TN_LOOCLAddendum.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_LOOCLAddendum.loono"  ref="ref_loono"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOOCLAddendum.currencycd" :label="M_TN_LOOCLAddendum.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_LOOCLAddendum.loodate"  ref="ref_loodate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_totalrental" v-model="M_TN_LOOCLAddendum.totalrental"  ref="ref_totalrental" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_LOOCLAddendum.contactid" :label="M_TN_LOOCLAddendum.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_totalarealot" v-model="M_TN_LOOCLAddendum.totalarealot"  ref="ref_totalarealot" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OneventnoChange" :prop="PI_eventno" :value="M_TN_LOOCLAddendum.eventno" :label="M_TN_LOOCLAddendum.eventnoLabel" ref="ref_eventno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_LOOCLAddendum.telephoneline"  ref="ref_telephoneline"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LOOCLAddendum.customercategorycd" :label="M_TN_LOOCLAddendum.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LOOCLAddendum.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customersource" v-model="M_TN_LOOCLAddendum.customersource"  ref="ref_customersource" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOCLAddendum.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_LOOCLAddendum.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_LOOCLAddendum.brandcd" :label="M_TN_LOOCLAddendum.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_LOOCLAddendum.brandname"  ref="ref_brandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_LOOCLAddendum.marketingid" :label="M_TN_LOOCLAddendum.marketingidLabel" ref="ref_marketingid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_LOOCLAddendum.operatingfromhour" :valueTo="M_TN_LOOCLAddendum.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />                                        
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
                initialWhere: "CustomerType = 'C' AND AddendumSequenceNo <> 0 AND ContractStatus IN ('1','3','4') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND [Status] = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_LOOCLAddendum :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: 0,
                deviationapprovalno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: this.getToday(),
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                contactid: '',
                customername: '',
                eventno: '',
                eventdescs: '',
                customercategorycd: '',
                customercategorydescs: '',
                assessmentno: '',
                customersource: 'unknown',
                chargeperiod: 'days',
                baserentalrate: 0,
                status: '',
                tenantstatus: '',
                contractstatus: '',
                referenceno: '',
                brandcd: '',
                brandname: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                startdate: '',
                enddate: '',
                leaseperiod: '0',
                freerentalperiod: 0,
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                addendumrefno: '',
                addendumdate: this.getToday(),
                addendumtypecd: '',
                addendumtypedescs: '',
                peggingrate: '',
                revenuesharetype: '',
                chargearea: '',
                telephoneline: '0',
                securitydepositrental: 0,
                securitydepositsc: 0,
                rentalbase: '',
                renewalperiod: 0,
                rentalratetype: '',
                antennastatus: '',
                marketingid: '',
                fitoutcommencedon: '',
                fitouttime: 0,
                fitoutpic: '',
                handoverdate: '',
                operatingfromhour: '',
                operatingtohour: '',
                solicitorid: '',
                solicitorname: '',
                mediacd: '',
                servicecharge: 0,
                promotionlevy: 0,
                telephonedeposit: '0',
                fitoutdeposit: 0,
                sinkingfund: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: 0,
                totalgrossarea: 0,
                totalsemigrossarea: 0,
                theme: '',
                class: '',
                category: '',
                marketingname: '',
                perioddays: 0,
                lastupdatestamp: 0,
                rowid: 0,
                totalrental: '0.00',
                totalarealot: '0.00 / 0.00 / 0.00'
                    }
            ,
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpCL_ApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ApplicationNo,LOONo' ,
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_addendumrefno: { 
                cValidate :'required|max:20', 
                cName: 'addendumrefno', 
                cLabel: 'Addendum No', 
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
            PI_leaseperiod: { 
                cValidate :'max:10', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addendumdate: { 
                cValidate :'required', 
                cName: 'addendumdate', 
                cLabel: 'Addendum Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargeperiod: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_addendumtypecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetAddendumType'    , 
                    ColumnDB: 'AddendumTypeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addendumtypecd', 
                cLabel: 'Addendum Type', 
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
                cDisplayColumn: 'AddendumTypeCd,Descs' ,
            }, 
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loono: { 
                cValidate :'max:20', 
                cName: 'loono', 
                cLabel: 'LOO No', 
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
            PI_utilitiesstartdate: { 
                cValidate :'', 
                cName: 'utilitiesstartdate', 
                cLabel: 'Utilities Start - End Date', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loodate: { 
                cValidate :'', 
                cName: 'loodate', 
                cLabel: 'LOO Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Lease Currency ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 19, 
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
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'contactid', 
                cLabel: 'Customer', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
            PI_totalrental: { 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_eventno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNEvent'    , 
                    ColumnDB: 'EventNo'   , 
                    InitialWhere: "STATUS = 'Y' AND SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: '',
                    SourceField: "EventNo,Descs,TimeEdit",
                    DisplayLookUp: "EventNo,Descs"  
                        }, 
                cValidate :'', 
                cName: 'eventno', 
                cLabel: 'Event Name', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
            PI_totalarealot: { 
                cLabel: 'Total Area (Gross/Semi/Net)', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_telephoneline: { 
                cValidate :'max:3', 
                cName: 'telephoneline', 
                cLabel: 'Telephone Line(s)', 
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
            PI_customersource: { 
                cLabel: 'Customer Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_telephonedeposit: { 
                cValidate :'', 
                cName: 'telephonedeposit', 
                cLabel: 'Deposit', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'max:60', 
                cName: 'referenceno', 
                cLabel: 'Customer Ref No', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:22, 
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
            PI_brandcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetBrandCd'    , 
                    ColumnDB: 'BrandCd'   , 
                    InitialWhere: "CLStatus = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Product Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
            PI_brandname: { 
                cValidate :'', 
                cName: 'brandname', 
                cLabel: 'Product Name', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_marketingid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_MarketingBrandPIC'    , 
                    ColumnDB: 'MarketingID'   , 
                    InitialWhere: "BrandCd=''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cDisplayColumn: 'MarketingID,Name' ,
            }, 
            PI_operatingfromhour: { 
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating From Hour', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingtohour: { 
                cValidate :'', 
                cName: 'operatingtohour', 
                cLabel: 'Operating To Hour', 
                cLabelSize: 4, 
                cOrder: 14, 
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
       GetContract(){
           var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOCLAddendum.applicationno
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              
              this.M_TN_LOOCLAddendum.loono = data.LOONo
              this.M_TN_LOOCLAddendum.loodate = data.LOODate
              this.M_TN_LOOCLAddendum.contactid = data.ContactId
              this.M_TN_LOOCLAddendum.contactidLabel = this.M_TN_LOOCLAddendum.contactid != null && this.M_TN_LOOCLAddendum.contactid != '' ? data.ContactId + this.separator + data.CustomerName :''
              this.M_TN_LOOCLAddendum.customercategorycd = data.CustomerCategoryCd
              this.M_TN_LOOCLAddendum.customercategorycdLabel = this.M_TN_LOOCLAddendum.customercategorycd != null && this.M_TN_LOOCLAddendum.customercategorycd != '' ? data.CustomerCategoryCd + this.separator + data.CustomerCategoryDescs :'' 
              this.M_TN_LOOCLAddendum.customersource = data.CustomerSource
              this.M_TN_LOOCLAddendum.contractstatus = data.ContractStatus
              this.M_TN_LOOCLAddendum.status = data.Status
              switch (data.Status) {
                case "N":
                  this.M_TN_LOOCLAddendum.status = "New / Pending Addendum"
                  break;
                case "P":
                  this.M_TN_LOOCLAddendum.status = "Posted Addendum"
                  break;
              }
              this.M_TN_LOOCLAddendum.referenceno = data.ReferenceNo
              this.M_TN_LOOCLAddendum.brandcd = data.BrandCd
              this.M_TN_LOOCLAddendum.brandcdLabel = this.M_TN_LOOCLAddendum.brandcd != null && this.M_TN_LOOCLAddendum.brandcd != '' ? data.BrandCd + this.separator + data.BrandName :''
              this.M_TN_LOOCLAddendum.brandname = data.BrandName
              this.M_TN_LOOCLAddendum.leaseperiod = data.LeasePeriod
              this.M_TN_LOOCLAddendum.chargeperiod = data.ChargePeriod
              switch (data.ChargePeriod) {
                case "M":
                  this.M_TN_LOOCLAddendum.chargeperiod = "months"
                  break;
                case "D":
                  this.M_TN_LOOCLAddendum.chargeperiod = "days"
                  break;
                case "Y":
                  this.M_TN_LOOCLAddendum.chargeperiod = "years"
                  break;
              }
              this.M_TN_LOOCLAddendum.rcd = data.RCD
              this.M_TN_LOOCLAddendum.red = data.RED
              this.M_TN_LOOCLAddendum.utilitiesstartdate = data.UtilitiesStartDate
              this.M_TN_LOOCLAddendum.utilitiesenddate = data.UtilitiesEndDate
              this.M_TN_LOOCLAddendum.currencycd = data.CurrencyCd
              this.M_TN_LOOCLAddendum.currencycdLabel = this.M_TN_LOOCLAddendum.currencycd != null && this.M_TN_LOOCLAddendum.currencycd != '' ? data.CurrencyCd :'' 
              this.M_TN_LOOCLAddendum.totalrental = this.isCurrency(data.ContractAmt, this.decimal)
              this.M_TN_LOOCLAddendum.totalarealot = this.isCurrency(data.TotalGrossArea, this.decimal) +' / '+ this.isCurrency(data.TotalSemiGrossArea, this.decimal) +' / '+ this.isCurrency(data.TotalNetArea, this.decimal)
              this.M_TN_LOOCLAddendum.telephoneline = data.TelephoneLine
              this.M_TN_LOOCLAddendum.eventno = data.EventNo
              this.M_TN_LOOCLAddendum.eventnoLabel = this.M_TN_LOOCLAddendum.eventno != null && this.M_TN_LOOCLAddendum.eventno != '' ? data.EventNo + this.separator + data.EventDescs :''
              this.M_TN_LOOCLAddendum.marketingid = data.MarketingID
              this.M_TN_LOOCLAddendum.marketingidLabel = this.M_TN_LOOCLAddendum.marketingid != null && this.M_TN_LOOCLAddendum.marketingid != '' ? data.MarketingID + this.separator + data.MarketingName :''
              this.M_TN_LOOCLAddendum.operatingfromhour = data.OperatingFromHour
              this.M_TN_LOOCLAddendum.operatingtohour = data.OperatingToHour
              this.M_TN_LOOCLAddendum.telephonedeposit = this.isCurrency(data.TelephoneDeposit, this.decimal)
              this.M_TN_LOOCLAddendum.remarks = data.Remarks

              // this.M_TN_LOOCLAddendum.applicationnoLabel = this.M_TN_LOOCLAddendum.applicationno != null && this.M_TN_LOOCLAddendum.applicationno != '' ? data.applicationno + this.separator  :'' 
              // this.M_TN_LOOCLAddendum.addendumtypecdLabel = this.M_TN_LOOCLAddendum.addendumtypecd != null && this.M_TN_LOOCLAddendum.addendumtypecd != '' ? data.addendumtypecd + this.separator  :''

            })
        },
        GetContractDataAddendum(){
           var param = {
            OptionFunctionCd: "GetContractDataAddendum",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOCLAddendum.applicationno
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              this.M_TN_LOOCLAddendum.addendumrefno = data.AddendumRefNo
            })
        },
        SetLookUpBrand(){
          
          if(this.M_TN_LOOCLAddendum.contactid != '' || this.M_TN_LOOCLAddendum.contactid != null){
            this.PI_brandcd.dataLookUp.InitialWhere += "CLStatus = 'Y' AND (a.BrandOwnerId = '" + this.M_TN_LOOCLAddendum.contactid + "' OR  ISNULL(a.BrandOwnerId,'')='')"
          }else{
            this.PI_brandcd.dataLookUp.InitialWhere += "CLStatus = 'Y'"
          }
        },
        GetEvent(){
        var param = {
            OptionFunctionCd: "GetEventData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            EventNo: this.M_TN_LOOCLAddendum.eventno
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              console.log(data)
              this.M_TN_LOOCLAddendum.customercategorycd = data.CustomerCategoryCd
              this.M_TN_LOOCLAddendum.customercategorycdLabel = this.M_TN_LOOCLAddendum.customercategorycd != null && this.M_TN_LOOCLAddendum.customercategorycd != '' ? data.CustomerCategoryCd + this.separator + data.CustomerCategoryDescs  :''
              
              switch (data.Organizer) {
                case "E":
                  this.M_TN_LOOCLAddendum.customersource = 'EO'
                  break;
                case "I":
                  this.M_TN_LOOCLAddendum.customersource = 'Inhouse'
                  break;
              }

              this.M_TN_LOOCLAddendum.brandcd = data.BrandCd
              this.M_TN_LOOCLAddendum.brandcdLabel = this.M_TN_LOOCLAddendum.brandcd != null && this.M_TN_LOOCLAddendum.brandcd != '' ? data.BrandCd + this.separator + data.BrandDescs  :''
              this.M_TN_LOOCLAddendum.leaseperiod = data.LeasePeriod
              
              switch (data.chargeperiod) {
                  case "M":
                    this.M_TN_LOOCLAddendum.chargeperiod = 'months'
                    break;
                  case "D":
                    this.M_TN_LOOCLAddendum.chargeperiod = 'days'
                    break;
                  case "Y":
                    this.M_TN_LOOCLAddendum.chargeperiod = 'years'
                    break;
                }
              
              this.M_TN_LOOCLAddendum.red = data.FromDate
              this.M_TN_LOOCLAddendum.rcd = data.ToDate

              this.M_TN_LOOCLAddendum.operatingfromhour = data.OperatingFromHour
              this.M_TN_LOOCLAddendum.operatingtohour = data.OperatingToHour
              this.M_TN_LOOCLAddendum.brandname = data.BrandDescs
              
              
            })
      },
      GetBaseCurrency(){
         var param = {
            OptionFunctionCd: "GetBaseCurrency",
            ModuleCd: this.Module,
          }
        
        this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]

                this.M_TN_LOOCLAddendum.currencycd = data.BaseCurrencyCd
                this.M_TN_LOOCLAddendum.currencycdLabel = data.BaseCurrencyCd + this.separator + data.Descs  
                  
            })

      },
      GetDefaultOperatingHours(){
        var param = {
            OptionFunctionCd: "GetDefaultOperatingHours",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }
        
        this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]
                this.M_TN_LOOCLAddendum.operatingfromhour = data.OperatingFromHour
                this.M_TN_LOOCLAddendum.operatingtohour = data.OperatingToHour            
            })

      },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.applicationno = data.id
            this.M_TN_LOOCLAddendum.applicationnoLabel = data.label
            this.GetContract()
            this.GetContractDataAddendum()
            this.SetLookUpBrand()
            if (this.inputStatus != "VIEW") {
//{applicationno}
            }
        })
        this.$forceUpdate()
        },
        OnaddendumdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{addendumdate}
            }
        })
        this.$forceUpdate()
        },
        OnaddendumtypecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.addendumtypecd = data.id
            this.M_TN_LOOCLAddendum.addendumtypecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addendumtypecd}
            }
        })
        this.$forceUpdate()
        },
        OnloodateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{loodate}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.currencycd = data.id
            this.M_TN_LOOCLAddendum.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.contactid = data.id
            this.M_TN_LOOCLAddendum.contactidLabel = data.label
            this.SetLookUpBrand()
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OneventnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.eventno = data.id
            this.M_TN_LOOCLAddendum.eventnoLabel = data.label
            this.GetEvent()

            this.PI_customercategorycd.cProtect = true
              // this.PI_brandname.cProtect = true
              this.PI_operatingfromhour.cProtect = true
              this.PI_leaseperiod.cProtect = true
              this.PI_rcd.cProtect = true
              this.PI_brandcd.cProtect = true
            if (this.inputStatus != "VIEW") {
//{eventno}
            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.customercategorycd = data.id
            this.M_TN_LOOCLAddendum.customercategorycdLabel = data.label
            this.SetLookUpBrand()
            if (this.inputStatus != "VIEW") {
//{customercategorycd}
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
        OnbrandcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.brandcd = data.id
            this.M_TN_LOOCLAddendum.brandcdLabel = data.label

            this.M_TN_LOOCLAddendum.brandname = data.Descs

            this.PI_marketingid.dataLookUp.InitialWhere = "BrandCd='"+data.id+"'"
            if (this.inputStatus != "VIEW") {
//{brandcd}
            }
        })
        this.$forceUpdate()
        },
        OnmarketingidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOOCLAddendum.marketingid = data.id
            this.M_TN_LOOCLAddendum.marketingidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketingid}
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCLAddendum.applicationno == '' || this.M_TN_LOOCLAddendum.applicationno == null ? 'NULL' : this.M_TN_LOOCLAddendum.applicationno ,
                LOONo: this.M_TN_LOOCLAddendum.loono,
                LOODate: this.M_TN_LOOCLAddendum.loodate == '' || this.M_TN_LOOCLAddendum.loodate == null ? 'NULL' : this.M_TN_LOOCLAddendum.loodate ,
                CopyFromApplicationNo: this.M_TN_LOOCLAddendum.copyfromapplicationno,
                CustomerType: "C",
                ContactId: this.M_TN_LOOCLAddendum.contactid,
                AddendumRefNo: this.M_TN_LOOCLAddendum.addendumrefno,
                AddendumDate: this.M_TN_LOOCLAddendum.addendumdate == '' || this.M_TN_LOOCLAddendum.addendumdate == null ? 'NULL' : this.M_TN_LOOCLAddendum.addendumdate ,
                AddendumTypeCd: this.M_TN_LOOCLAddendum.addendumtypecd == '' || this.M_TN_LOOCLAddendum.addendumtypecd == null ? 'NULL' : this.M_TN_LOOCLAddendum.addendumtypecd ,
                EventNo: this.M_TN_LOOCLAddendum.eventno == '' || this.M_TN_LOOCLAddendum.eventno == null ? 'NULL' : this.M_TN_LOOCLAddendum.eventno ,
                CustomerCategory: this.M_TN_LOOCLAddendum.customercategorycd == '' || this.M_TN_LOOCLAddendum.customercategorycd == null ? 'NULL' : this.M_TN_LOOCLAddendum.customercategorycd ,
                ReferenceNo: this.M_TN_LOOCLAddendum.referenceno,
                BrandCd: this.M_TN_LOOCLAddendum.brandname,
                BrandName: this.M_TN_LOOCLAddendum.brandname,
                StartDate: this.M_TN_LOOCLAddendum.startdate,
                EndDate: this.M_TN_LOOCLAddendum.enddate,
                LeasePeriod: this.M_TN_LOOCLAddendum.leaseperiod,
                FreeRentalPeriod: this.M_TN_LOOCLAddendum.freerentalperiod,
                RCD: this.M_TN_LOOCLAddendum.rcd == '' || this.M_TN_LOOCLAddendum.rcd == null ? 'NULL' : this.M_TN_LOOCLAddendum.rcd ,
                RED: this.M_TN_LOOCLAddendum.red,
                UtilitiesStartDate: this.M_TN_LOOCLAddendum.utilitiesstartdate == '' || this.M_TN_LOOCLAddendum.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOOCLAddendum.utilitiesstartdate ,
                UtilitiesEndDate: this.M_TN_LOOCLAddendum.utilitiesenddate,
                CurrencyCd: this.M_TN_LOOCLAddendum.currencycd == '' || this.M_TN_LOOCLAddendum.currencycd == null ? 'NULL' : this.M_TN_LOOCLAddendum.currencycd ,
                PeggingRate: this.M_TN_LOOCLAddendum.peggingrate,
                RevenueShareType: 'S',
                ChargeArea: "G",
                TelephoneLine: this.M_TN_LOOCLAddendum.telephoneline,
                SecurityDepositRental: this.M_TN_LOOCLAddendum.securitydepositrental,
                SecurityDepositSC: this.M_TN_LOOCLAddendum.securitydepositsc,
                RentalBase: "F",
                RenewalPeriod: this.M_TN_LOOCLAddendum.renewalperiod,
                MarketingID: this.M_TN_LOOCLAddendum.marketingid == '' || this.M_TN_LOOCLAddendum.marketingid == null ? 'NULL' : this.M_TN_LOOCLAddendum.marketingid ,
                FitOutCommencedOn: this.M_TN_LOOCLAddendum.fitoutcommencedon,
                FitOutTime: this.M_TN_LOOCLAddendum.fitouttime,
                OperatingFromHour: this.M_TN_LOOCLAddendum.operatingfromhour,
                OperatingToHour: this.M_TN_LOOCLAddendum.operatingtohour,
                MediaCd: this.M_TN_LOOCLAddendum.mediacd == '' || this.M_TN_LOOCLAddendum.mediacd == null ? 'NULL' : this.M_TN_LOOCLAddendum.mediacd,
                ServiceCharge: this.M_TN_LOOCLAddendum.servicecharge,
                PromotionLevy: this.M_TN_LOOCLAddendum.promotionlevy,
                TelephoneDeposit: this.M_TN_LOOCLAddendum.telephonedeposit ? this.replaceAllString(this.M_TN_LOOCLAddendum.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.M_TN_LOOCLAddendum.fitoutdeposit,
                SinkingFund: this.M_TN_LOOCLAddendum.sinkingfund,
                Remarks: this.M_TN_LOOCLAddendum.remarks,
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
                ApplicationNo: this.M_TN_LOOCLAddendum.applicationno == '' || this.M_TN_LOOCLAddendum.applicationno == null ? 'NULL' : this.M_TN_LOOCLAddendum.applicationno ,
                AddendumSequenceNo: this.M_TN_LOOCLAddendum.addendumsequenceno,
                AddendumRefNo: this.M_TN_LOOCLAddendum.addendumrefno,
                AddendumDate: this.M_TN_LOOCLAddendum.addendumdate == '' || this.M_TN_LOOCLAddendum.addendumdate == null ? 'NULL' : this.M_TN_LOOCLAddendum.addendumdate ,
                AddendumTypeCd: this.M_TN_LOOCLAddendum.addendumtypecd == '' || this.M_TN_LOOCLAddendum.addendumtypecd == null ? 'NULL' : this.M_TN_LOOCLAddendum.addendumtypecd ,
                LOONo: this.M_TN_LOOCLAddendum.loono,
                LOODate: this.M_TN_LOOCLAddendum.loodate == '' || this.M_TN_LOOCLAddendum.loodate == null ? 'NULL' : this.M_TN_LOOCLAddendum.loodate ,
                ContactId: this.M_TN_LOOCLAddendum.referenceno,
                EventNo: this.M_TN_LOOCLAddendum.eventno == '' || this.M_TN_LOOCLAddendum.eventno == null ? 'NULL' : this.M_TN_LOOCLAddendum.eventno ,
                CustomerCategory: this.M_TN_LOOCLAddendum.customercategorycd == '' || this.M_TN_LOOCLAddendum.customercategorycd == null ? 'NULL' : this.M_TN_LOOCLAddendum.customercategorycd ,
                ReferenceNo: this.M_TN_LOOCLAddendum.referenceno,
                BrandCd: this.M_TN_LOOCLAddendum.brandcd == '' || this.M_TN_LOOCLAddendum.brandcd == null ? 'NULL' : this.M_TN_LOOCLAddendum.brandcd,
                BrandName: this.M_TN_LOOCLAddendum.brandname,
                LeasePeriod: this.M_TN_LOOCLAddendum.leaseperiod,
                RCD: this.M_TN_LOOCLAddendum.rcd == '' || this.M_TN_LOOCLAddendum.rcd == null ? 'NULL' : this.M_TN_LOOCLAddendum.rcd ,
                RED: this.M_TN_LOOCLAddendum.red == '' || this.M_TN_LOOCLAddendum.red == null ? 'NULL' : this.M_TN_LOOCLAddendum.red,
                UtilitiesStartDate: this.M_TN_LOOCLAddendum.utilitiesstartdate == '' || this.M_TN_LOOCLAddendum.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOOCLAddendum.utilitiesstartdate ,
                UtilitiesEndDate: this.M_TN_LOOCLAddendum.utilitiesenddate == '' || this.M_TN_LOOCLAddendum.utilitiesenddate == null ? 'NULL' : this.M_TN_LOOCLAddendum.utilitiesenddate ,
                CurrencyCd: this.M_TN_LOOCLAddendum.currencycd == '' || this.M_TN_LOOCLAddendum.currencycd == null ? 'NULL' : this.M_TN_LOOCLAddendum.currencycd ,
                TelephoneLine: this.M_TN_LOOCLAddendum.telephoneline,
                MarketingID: this.M_TN_LOOCLAddendum.marketingid == '' || this.M_TN_LOOCLAddendum.marketingid == null ? 'NULL' : this.M_TN_LOOCLAddendum.marketingid ,
                OperatingFromHour: this.M_TN_LOOCLAddendum.operatingfromhour,
                OperatingToHour: this.M_TN_LOOCLAddendum.operatingtohour,
                TelephoneDeposit: this.M_TN_LOOCLAddendum.telephonedeposit ? this.replaceAllString(this.M_TN_LOOCLAddendum.telephonedeposit,',','','number') : 0 ,
                Remarks: this.M_TN_LOOCLAddendum.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LOOCLAddendum.lastupdatestamp,
                ContactId: this.M_TN_LOOCLAddendum.contactid,                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LOOCLAddendum = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: 0,
                deviationapprovalno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: this.getToday(),
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                contactid: '',
                customername: '',
                eventno: '',
                eventdescs: '',
                customercategorycd: '',
                customercategorydescs: '',
                assessmentno: '',
                customersource: 'unknown',
                chargeperiod: 'days',
                baserentalrate: 0,
                status: '',
                tenantstatus: '',
                contractstatus: '',
                referenceno: '',
                brandcd: '',
                brandname: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                startdate: '',
                enddate: '',
                leaseperiod: '0',
                freerentalperiod: 0,
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                addendumrefno: '',
                addendumdate: this.getToday(),
                addendumtypecd: '',
                addendumtypedescs: '',
                peggingrate: '',
                revenuesharetype: '',
                chargearea: '',
                telephoneline: '0',
                securitydepositrental: 0,
                securitydepositsc: 0,
                rentalbase: '',
                renewalperiod: 0,
                rentalratetype: '',
                antennastatus: '',
                marketingid: '',
                fitoutcommencedon: '',
                fitouttime: 0,
                fitoutpic: '',
                handoverdate: '',
                operatingfromhour: '',
                operatingtohour: '',
                solicitorid: '',
                solicitorname: '',
                mediacd: '',
                servicecharge: 0,
                promotionlevy: 0,
                telephonedeposit: '0',
                fitoutdeposit: 0,
                sinkingfund: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: 0,
                totalgrossarea: 0,
                totalsemigrossarea: 0,
                theme: '',
                class: '',
                category: '',
                marketingname: '',
                perioddays: 0,
                lastupdatestamp: 0,
                rowid: 0,
                totalrental: '0.00',
                totalarealot: '0.00 / 0.00 / 0.00'
                    }
            		
		},
        M_New(){
          this.GetDefaultOperatingHours()
          this.GetBaseCurrency()
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({


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
                var msg = "Delete Successfuly"
                this.$parent.resultDelete(msg)
            })           
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                addendumsequenceno: record.AddendumSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_LOOCLAddendum = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                addendumsequenceno: data.addendumsequenceno,
                deviationapprovalno: data.deviationapprovalno,
                copyfromapplicationno: data.copyfromapplicationno,
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                contactid: data.contactid,
                customername: data.customername,
                eventno: data.eventno,
                eventdescs: data.eventdescs,
                customercategorycd: data.customercategorycd,
                customercategorydescs: data.customercategorydescs,
                assessmentno: data.assessmentno,
                customersource: data.customersource,
                chargeperiod: data.chargeperiod,
                baserentalrate: this.isCurrency(data.baserentalrate, this.decimal),
                status: data.status,
                tenantstatus: data.tenantstatus,
                contractstatus: data.contractstatus,
                referenceno: data.referenceno,
                brandcd: data.brandcd,
                brandname: data.brandname,
                lotthemecd: data.lotthemecd,
                lotclasssequenceno: data.lotclasssequenceno,
                lotcategorysequenceno: data.lotcategorysequenceno,
                startdate: data.startdate,
                enddate: data.enddate,
                leaseperiod: data.leaseperiod, 
                freerentalperiod: this.isCurrency(data.freerentalperiod, this.decimal),
                rcd: data.rcd,
                red: data.red,
                utilitiesstartdate: data.utilitiesstartdate,
                utilitiesenddate: data.utilitiesenddate,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                addendumrefno: data.addendumrefno,
                addendumdate: data.addendumdate,
                addendumtypecd: data.addendumtypecd,
                addendumtypedescs: data.addendumtypedescs,
                peggingrate: data.peggingrate,
                revenuesharetype: data.revenuesharetype,
                chargearea: data.chargearea,
                telephoneline: data.telephoneline,
                securitydepositrental: this.isCurrency(data.securitydepositrental, this.decimal),
                securitydepositsc: this.isCurrency(data.securitydepositsc, this.decimal),
                rentalbase: data.rentalbase,
                renewalperiod: this.isCurrency(data.renewalperiod, this.decimal),
                rentalratetype: data.rentalratetype,
                antennastatus: data.antennastatus,
                marketingid: data.marketingid,
                fitoutcommencedon: data.fitoutcommencedon,
                fitouttime: this.isCurrency(data.fitouttime, this.decimal),
                fitoutpic: data.fitoutpic,
                handoverdate: data.handoverdate,
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                solicitorid: data.solicitorid,
                solicitorname: data.solicitorname,
                mediacd: data.mediacd,
                servicecharge: this.isCurrency(data.servicecharge, this.decimal),
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal),
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal),
                fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal),
                sinkingfund: this.isCurrency(data.sinkingfund, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                totalnetarea: this.isCurrency(data.totalnetarea, this.decimal),
                totalgrossarea: this.isCurrency(data.totalgrossarea, this.decimal),
                totalsemigrossarea: this.isCurrency(data.totalsemigrossarea, this.decimal),
                theme: data.theme,
                class: data.class,
                category: data.category,
                marketingname: data.marketingname,
                perioddays: this.isCurrency(data.perioddays, this.decimal),
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                totalrental: this.isCurrency(data.contractamt, this.decimal),
                totalarealot: data.totalarealot
                    }
                 

                this.M_TN_LOOCLAddendum.applicationnoLabel = this.M_TN_LOOCLAddendum.applicationno != null && this.M_TN_LOOCLAddendum.applicationno != '' ? data.applicationno + this.separator + data.loono :'' 
                this.M_TN_LOOCLAddendum.addendumtypecdLabel = this.M_TN_LOOCLAddendum.addendumtypecd != null && this.M_TN_LOOCLAddendum.addendumtypecd != '' ? data.addendumtypecd + this.separator + data.addendumtypedescs :'' 
                this.M_TN_LOOCLAddendum.currencycdLabel = this.M_TN_LOOCLAddendum.currencycd != null && this.M_TN_LOOCLAddendum.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_LOOCLAddendum.contactidLabel = this.M_TN_LOOCLAddendum.contactid != null && this.M_TN_LOOCLAddendum.contactid != '' ? data.contactid + this.separator + data.customername :'' 
                this.M_TN_LOOCLAddendum.eventnoLabel = this.M_TN_LOOCLAddendum.eventno != null && this.M_TN_LOOCLAddendum.eventno != '' ? data.eventno + this.separator + data.eventdescs :'' 
                this.M_TN_LOOCLAddendum.customercategorycdLabel = this.M_TN_LOOCLAddendum.customercategorycd != null && this.M_TN_LOOCLAddendum.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs :'' 
                this.M_TN_LOOCLAddendum.brandcdLabel = this.M_TN_LOOCLAddendum.brandcd != null && this.M_TN_LOOCLAddendum.brandcd != '' ? data.brandcd + this.separator + data.brandname :'' 
                this.M_TN_LOOCLAddendum.marketingidLabel = this.M_TN_LOOCLAddendum.marketingid != null && this.M_TN_LOOCLAddendum.marketingid != '' ? data.marketingid + this.separator + data.marketingname :'' 

                switch (data.status) {
                    case "A":
                    case "N":
                      switch (data.contractstatus) {
                        case 1:
                          this.M_TN_LOOCLAddendum.status = "Pending LOO"
                          break;                      
                        case 2:
                        case 3:
                        case 4:
                          this.M_TN_LOOCLAddendum.status = "Approved LOO"                                            
                          break; 
                      }
                      break;
                    case "X":
                      this.M_TN_LOOCLAddendum.status = "Terminated Agreement"
                      break;
                    case "C":
                      this.M_TN_LOOCLAddendum.status = "Cancelled Agreement"
                      break;                  
                  }

                switch (data.chargeperiod) {
                  case "M":
                    this.M_TN_LOOCLAddendum.chargeperiod = "months"
                    break;
                  case "D":
                    this.M_TN_LOOCLAddendum.chargeperiod = "days"
                    break;
                  case "Y":
                    this.M_TN_LOOCLAddendum.chargeperiod = "years"
                    break;
                }

                this.M_TN_LOOCLAddendum.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) +' / '+ this.isCurrency(data.totalsemigrossarea, this.decimal) +' / '+ this.isCurrency(data.totalnetarea, this.decimal)
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LOOCLAddendum.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_LOOCLAddendum.red = data
        }
        ,MdtRange_utilitiesstartdate (data) {
            this.M_TN_LOOCLAddendum.utilitiesstartdate = data
        }
        ,MdtRange_utilitiesenddate (data) {
            this.M_TN_LOOCLAddendum.utilitiesenddate = data
        }
        ,MdtRange_operatingfromhour (data){
          this.M_TN_LOOCLAddendum.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
          this.M_TN_LOOCLAddendum.operatingtohour = data
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
        //[Global:GetSpecification].then(FnOpt10 => { if (FnOpt10 != null) { 
        //     this.TNSpec = FnOpt9 } })

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

