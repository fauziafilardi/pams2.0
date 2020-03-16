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
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_LACL.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_LACL.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lano" v-model="M_TN_LACL.lano"  ref="ref_lano"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="M_TN_LACL.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            {{M_TN_LACL.chargeperiod}} 
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnladateChange" :prop="PI_ladate" v-model="M_TN_LACL.ladate"  ref="ref_ladate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LACL.rcd" :valueTo="M_TN_LACL.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_LACL.loono"  ref="ref_loono"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_LACL.utilitiesstartdate" :valueTo="M_TN_LACL.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_loodate" v-model="M_TN_LACL.loodate"  ref="ref_loodate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LACL.currencycd" :label="M_TN_LACL.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncopyfromapplicationnoChange" :prop="PI_copyfromapplicationno" :value="M_TN_LACL.copyfromapplicationno" :label="M_TN_LACL.copyfromapplicationnoLabel" ref="ref_copyfromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_totalrental" v-model="M_TN_LACL.totalrental"  ref="ref_totalrental" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_LACL.contactid" :label="M_TN_LACL.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_totalarealot" v-model="M_TN_LACL.totalarealot"  ref="ref_totalarealot" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OneventnoChange" :prop="PI_eventno" :value="M_TN_LACL.eventno" :label="M_TN_LACL.eventnoLabel" ref="ref_eventno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_LACL.telephoneline"  ref="ref_telephoneline"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LACL.customercategorycd" :label="M_TN_LACL.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LACL.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customersource" v-model="M_TN_LACL.customersource"  ref="ref_customersource" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LACL.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_LACL.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_LACL.brandcd" :label="M_TN_LACL.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_LACL.brandname"  ref="ref_brandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_LACL.marketingid" :label="M_TN_LACL.marketingidLabel" ref="ref_marketingid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                       <b-col  md="6">                                        
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_LACL.operatingfromhour" :valueTo="M_TN_LACL.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
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
                initialWhere: "CustomerType = 'C' AND ContractStatus IN ('3','4') AND SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'TimeEdit DESC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LACL :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                deviationapprovalno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: '',
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
                customersource: '',
                chargeperiod: '',
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
                totalrental: '',
                totalarealot: ''
                    }
            ,
            PI_applicationno: { 
                cValidate :'', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
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
            PI_lano: { 
                cValidate :'', 
                cName: 'lano', 
                cLabel: 'LA No', 
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
            PI_leaseperiod: { 
                cValidate :'', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ladate: { 
                cValidate :'', 
                cName: 'ladate', 
                cLabel: 'LA Date', 
                cLabelSize: 4, 
                cOrder: 0, 
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
            PI_loono: { 
                cValidate :'', 
                cName: 'loono', 
                cLabel: 'LOO No', 
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
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_utilitiesstartdate: { 
                cValidate :'', 
                cName: 'utilitiesstartdate', 
                cLabel: 'Utilities Start - End Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_copyfromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'CopyFrom'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'copyfromapplicationno', 
                cLabel: 'Copy From', 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCurrencyCd'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Lease Currency', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'CurrencyCd,Descs,CurrencySign' ,
            }, 
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'Customer'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'contactid', 
                cLabel: 'Customer', 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
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
                    LookUpCd: ''    , 
                    ColumnDB: 'Event'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'eventno', 
                cLabel: 'Event Name', 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
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
                    LookUpCd: ''    , 
                    ColumnDB: 'CustomerCategory'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
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
                cDisplayColumn: '' ,
            }, 
            PI_telephoneline: { 
                cValidate :'', 
                cName: 'telephoneline', 
                cLabel: 'Telephone Line(s)', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder: 0, 
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
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Customer Ref No', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:0, 
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
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Product Type', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'BrandCd,BrandName' ,
            }, 
            PI_brandname: { 
                cValidate :'', 
                cName: 'brandname', 
                cLabel: 'Product Name', 
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
            PI_marketingid: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: 'Marketing'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_operatingfromhour: { 
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating From Hour', 
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
            PI_operatingtohour: { 
                cValidate :'', 
                cName: 'operatingtohour', 
                cLabel: 'Operating To Hour', 
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
      getSpecification () {
        var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
        }
        this.postJSON(this.getUrlById() + '2', param)
        .then((response) => {
          if(response == null) return
    
          if (response.Data.length == 0) {
            this.alertWarning('Please setup the Tenancy Specification first')
          }
        })
      },
        OnladateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{ladate}
            }
        })
        this.$forceUpdate()
        },
        OncopyfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LACL.copyfromapplicationno = data.id
            this.M_TN_LACL.copyfromapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{copyfromapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LACL.currencycd = data.id
            this.M_TN_LACL.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LACL.contactid = data.id
            this.M_TN_LACL.contactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OneventnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LACL.eventno = data.id
            this.M_TN_LACL.eventnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{eventno}
            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LACL.customercategorycd = data.id
            this.M_TN_LACL.customercategorycdLabel = data.label
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
            this.M_TN_LACL.brandcd = data.id
            this.M_TN_LACL.brandcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{brandcd}
            }
        })
        this.$forceUpdate()
        },
        OnmarketingidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LACL.marketingid = data.id
            this.M_TN_LACL.marketingidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketingid}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
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
                ApplicationNo: this.M_TN_LACL.applicationno,
                LANo: this.M_TN_LACL.lano,
                LADate: this.M_TN_LACL.ladate == '' || this.M_TN_LACL.ladate == null ? 'NULL' : this.M_TN_LACL.ladate ,
                Remarks: this.M_TN_LACL.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LACL.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LACL = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                deviationapprovalno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: '',
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
                customersource: '',
                chargeperiod: '',
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
                totalrental: '',
                totalarealot: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
          this.PI_applicationno.cProtect = true
          this.PI_lano.cProtect = true
          this.PI_ladate.cProtect = true
          this.PI_loono.cProtect = true
          this.PI_loodate.cProtect=true
          this.PI_copyfromapplicationno.cProtect = true
          this.PI_contactid.cProtect = true
          this.PI_eventno.cProtect = true
          this.PI_customercategorycd.cProtect = true
          this.PI_customersource.cProtect = true
          this.PI_referenceno.cProtect = true
          this.PI_brandcd.cProtect=true
          this.PI_brandname.cProtect=true
          this.PI_marketingid.cProtect=true
          this.PI_operatingfromhour.cProtect=true
          this.PI_leaseperiod.cProtect=true
          this.PI_rcd.cProtect=true
          this.PI_utilitiesstartdate.cProtect=true
          this.PI_currencycd.cProtect=true
          this.PI_telephoneline.cProtect=true
          this.PI_telephonedeposit.cProtect=true

          if (this.M_TN_LACL.contractstatus == 3 &&
             (this.M_TN_LACL.contractstatus != 'X' || this.M_TN_LACL.contractstatus != 'C') &&
             (this.M_TN_LACL.contractstatus.deviationapprovalno == null || this.M_TN_LACL.contractstatus.deviationapprovalno == '') ) {
            this.PI_applicationno.cProtect = true
            this.PI_lano.cProtect = false
            this.PI_ladate.cProtect = false
            // this.PI_loono.cProtect = true
            // this.PI_loodate.cProtect = true
            // this.PI_copyfromapplicationno.cProtect = true
            // this.PI_contactid.cProtect = true
            // this.PI_eventno.cProtect = true
            // this.PI_customercategorycd.cProtect = true
            // this.PI_customersource.cProtect = true
            // this.PI_referenceno.cProtect = true
            // this.PI_brandcd.cProtect=true
            // this.PI_brandname.cProtect=true
            // this.PI_marketingid.cProtect=true
            // this.PI_operatingfromhour.cProtect=true
            // this.PI_leaseperiod.cProtect=true
            // this.PI_rcd.cProtect=true
            // this.PI_utilitiesstartdate.cProtect=true
            // this.PI_currencycd.cProtect=true
            // this.PI_telephoneline.cProtect=true
            // this.PI_telephonedeposit.cProtect=true
          } else {
            // this.PI_applicationno.cProtect = true
            // this.PI_lano.cProtect = true
            // this.PI_ladate.cProtect = true
            // this.PI_loono.cProtect = true
            // this.PI_loodate.cProtect=true
            // this.PI_copyfromapplicationno.cProtect = true
            // this.PI_contactid.cProtect = true
            // this.PI_eventno.cProtect = true
            // this.PI_customercategorycd.cProtect = true
            // this.PI_customersource.cProtect = true
            // this.PI_referenceno.cProtect = true
            // this.PI_brandcd.cProtect=true
            // this.PI_brandname.cProtect=true
            // this.PI_marketingid.cProtect=true
            // this.PI_operatingfromhour.cProtect=true
            // this.PI_leaseperiod.cProtect=true
            // this.PI_rcd.cProtect=true
            // this.PI_utilitiesstartdate.cProtect=true
            // this.PI_currencycd.cProtect=true
            // this.PI_telephoneline.cProtect=true
            // this.PI_telephonedeposit.cProtect=true
          }
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

                this.$parent.resultPost()
            })           
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param ) 
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
this.M_TN_LACL = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
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
                freerentalperiod: data.freerentalperiod,
                rcd: data.rcd,
                red: data.red,
                utilitiesstartdate: data.utilitiesstartdate,
                utilitiesenddate: data.utilitiesenddate,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
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
                perioddays: data.perioddays,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                totalrental: this.isCurrency(data.contractamt, this.decimal),
                totalarealot: data.totalarealot
                    }
                 

                this.M_TN_LACL.copyfromapplicationnoLabel = this.M_TN_LACL.copyfromapplicationno != null && this.M_TN_LACL.copyfromapplicationno != '' ? data.copyfromapplicationno + this.separator  :'' 
                this.M_TN_LACL.currencycdLabel = this.M_TN_LACL.currencycd != null && this.M_TN_LACL.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_LACL.contactidLabel = this.M_TN_LACL.contactid != null && this.M_TN_LACL.contactid != '' ? data.contactid + this.separator + data.customername :'' 
                this.M_TN_LACL.eventnoLabel = this.M_TN_LACL.eventno != null && this.M_TN_LACL.eventno != '' ? data.eventno + this.separator  :'' 
                this.M_TN_LACL.customercategorycdLabel = this.M_TN_LACL.customercategorycd != null && this.M_TN_LACL.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs :'' 
                this.M_TN_LACL.brandcdLabel = this.M_TN_LACL.brandcd != null && this.M_TN_LACL.brandcd != '' ? data.brandcd + this.separator + data.brandname :'' 
                this.M_TN_LACL.marketingidLabel = this.M_TN_LACL.marketingid != null && this.M_TN_LACL.marketingid != '' ? data.marketingid + this.separator  :'' 

                switch (data.status) {
                  case "A":
                  case "N":
                    switch (data.contractstatus) {                      
                      case 3:
                        this.M_TN_LACL.status = "Pending CLA"
                        break;
                      case 4:
                        this.M_TN_LACL.status = "Approved CLA"
                        break;
                    }
                    break;
                  case "X":
                    this.M_TN_LACL.status = "Terminated Agreement"
                    break;
                  case "C":
                    this.M_TN_LACL.status = "Cancelled Agreement"
                    break;
                }
                
                switch (data.chargeperiod) {
                  case "M":
                    this.M_TN_LACL.chargeperiod = 'months'
                    break;
                  case "D":
                    this.M_TN_LACL.chargeperiod = 'days'
                    break;
                  default:
                    this.M_TN_LACL.chargeperiod = 'years'
                    break;
                }

                this.M_TN_LACL.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) +' / '+ this.isCurrency(data.totalsemigrossarea, this.decimal) +' / '+ this.isCurrency(data.totalnetarea, this.decimal)
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LACL.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_LACL.red = data
        }
        ,MdtRange_utilitiesstartdate (data) {
            this.M_TN_LACL.utilitiesstartdate = data
        }
        ,MdtRange_utilitiesenddate (data) {
            this.M_TN_LACL.utilitiesenddate = data
        }
        ,MdtRange_operatingfromhour (data){
            this.M_TN_LACL.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
            this.M_TN_LACL.operatingtohour = data
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
      this.getSpecification()
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

