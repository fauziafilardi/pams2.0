<template>
    <div>
    
        <ABSListVuex :prop="propList" :title="data.QueryName" @rowClicked="$parent.rowClicked" @rowDblClicked="$parent.doDoubleClick" @rowLinkClick="$parent.rowLink" @pageSize="$parent.M_PageSize" @pagination="$parent.M_Pagination" @filter="$parent.M_Advance_Filter"
    
            @headTable="$parent.M_Head_Table" @refreshColumn="$parent.refreshColumn" />
    
    
    
    
    
        <div v-show="$parent.showForm" :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
    
            <div class="div-collapse" v-b-toggle.collapse1>
    
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
    
                        Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
    
                    </span>
    
            </div>
    
            <b-collapse id="collapse1" :visible="true">
    
                <b-row style="padding-left: 10px; padding-bottom: 10px; !important;">
    
                    <b-col md="12" id="col-left" class="bColMasterForm">
    
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
    
                            <b-row style="padding-left:10px;">
                                <b-col md="6" id="col-left">
                                    <b-row>
                                        <b-col md="12">
    
                                            <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_LOOCL.applicationno" ref="ref_applicationno" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="12">
    
                                            <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_LOOCL.loono" ref="ref_loono" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">
    
                                            <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_LOOCL.loodate" ref="ref_loodate" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">
    
                                            <ABSInputSelectList @change="OncopyfromapplicationnoChange" :prop="PI_copyfromapplicationno" :value="M_TN_LOOCL.copyfromapplicationno" :label="M_TN_LOOCL.copyfromapplicationnoLabel" ref="ref_copyfromapplicationno" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">
    
                                            <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_LOOCL.contactid" :label="M_TN_LOOCL.contactidLabel" ref="ref_contactid" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">
    
                                            <ABSInputSelectList @change="OneventnoChange" :prop="PI_eventno" :value="M_TN_LOOCL.eventno" :label="M_TN_LOOCL.eventnoLabel" ref="ref_eventno" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">
    
                                            <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LOOCL.customercategorycd" :label="M_TN_LOOCL.customercategorycdLabel" ref="ref_customercategorycd" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">
    
                                            <ABSCompute :prop="PI_customersource" v-model="M_TN_LOOCL.customersource" ref="ref_customersource" />
    
                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">

                                            <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_LOOCL.referenceno" ref="ref_referenceno" />

                                        </b-col>
                                    </b-row>
                                    <b-row>                                        
                                        <b-col md="12">

                                            <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_LOOCL.brandcd" :label="M_TN_LOOCL.brandcdLabel" ref="ref_brandcd" />

                                        </b-col>
                                    </b-row>

                                    <b-row>
    
                                        <b-col md="12">
    
                                            <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_LOOCL.brandname" ref="ref_brandname" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
    
                                        <b-col md="12">
    
                                            <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_LOOCL.marketingid" :label="M_TN_LOOCL.marketingidLabel" ref="ref_marketingid" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
    
                                        <b-col md="12">
    
                                            <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_LOOCL.operatingfromhour" :valueTo="M_TN_LOOCL.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
    
                                        </b-col>
    
                                    </b-row>

                                </b-col>
    
                                <b-col md="6" id="col-left">
    
                                    <!-- table open -->
    
                                    <b-row>
    
                                        
    
                                        <b-col md="12">
    
                                            <ABSCompute :prop="PI_status" v-model="M_TN_LOOCL.status" ref="ref_status" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
    
                                        
    
                                        <b-col md="12">
    
                                            <b-row>
    
                                                <b-col md="4" class="lbl-col-align">
    
                                                    <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
    
                                                </b-col>
    
                                                <b-col md="1" style="margin-left: 10px;">
    
                                                    <ABSTextBoxOnly @input="OnleaseperiodChange" :prop="PI_leaseperiod" v-model="M_TN_LOOCL.leaseperiod" ref="ref_leaseperiod" />
    
                                                </b-col>
    
                                                <b-col md="4">
    
                                                    {{M_TN_LOOCL.chargeperiod}}
    
                                                </b-col>
    
                                            </b-row>
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LOOCL.rcd" :valueTo="M_TN_LOOCL.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_LOOCL.utilitiesstartdate" :valueTo="M_TN_LOOCL.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOOCL.currencycd" :label="M_TN_LOOCL.currencycdLabel" ref="ref_currencycd" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSCompute :prop="PI_totalrental" v-model="M_TN_LOOCL.totalrental" ref="ref_totalrental" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSCompute :prop="PI_totalarealot" v-model="M_TN_LOOCL.totalarealot" ref="ref_totalarealot" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_LOOCL.telephoneline" ref="ref_telephoneline" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LOOCL.telephonedeposit" ref="ref_telephonedeposit" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    <b-row>
                                        
    
                                        <b-col md="12">
    
                                            <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOCL.remarks" ref="ref_remarks" />
    
                                        </b-col>
    
                                    </b-row>
    
                                    
    
                                </b-col>
    
                                <!-- table close -->
    
    
    
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
import { truncate } from 'fs';

export default {
    props: { PageLevel: '', TabIndex: '', data: '' },
    data() {
        return {
            ContactId: '',
            cInsertKey: '',
            FormType: "List",
            Module: "TN",
            propList: {
                initialWhere: "CustomerType = 'C' AND ContractStatus IN ('1','3','4') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex,
                OrderBy: '',
                SourceField: '',
                ParamView: ''
            },

            IEBy: { Input: '', Edit: '' },
            TNSpec: '',

            M_TN_LOOCL: {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
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
            },
            PI_applicationno: {
                cValidate: 'required|max:30',
                cName: 'applicationno',
                cLabel: 'Application No ',
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
            PI_loono: {
                cValidate: '',
                cName: 'loono',
                cLabel: 'LOO No',
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
            PI_leaseperiod: {
                cValidate: '',
                cName: 'leaseperiod',
                cLabel: 'Lease Period',
                cLabelSize: 4,
                cOrder: 12,
                cKey: false,
                cType: 'numeric',
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_loodate: {
                cValidate: '',
                cName: 'loodate',
                cLabel: 'LOO Date',
                cLabelSize: 4,
                cOrder: 1,
                cKey: false,
                cVisible: true,
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
            PI_copyfromapplicationno: {
                dataLookUp: {
                    LookUpCd: 'GetLookUp_TNCopyFrom',
                    ColumnDB: 'ApplicationNo',
                    InitialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: ''
                },
                cValidate: '',
                cName: 'copyfromapplicationno',
                cLabel: 'Copy From',
                cKey: false,
                cLabelSize: 4,
                cOrder: 2,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'ApplicationNo,LOONo',
            },
            PI_rcd: {
                cValidate: 'required',
                cName: 'rcd',
                cLabel: 'RCD - RED ',
                cLabelSize: 4,
                cOrder: 13,
                cKey: false,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_contactid: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCMContact',
                    ColumnDB: 'ContactId',
                    InitialWhere: " HoldReleaseStatus IS NULL ",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'contactid',
                cLabel: 'Customer ',
                cKey: false,
                cLabelSize: 4,
                cOrder: 3,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'ContactId,Name',
            },
            PI_utilitiesstartdate: {
                cValidate: 'required',
                cName: 'utilitiesstartdate',
                cLabel: 'Utilities Start - End Date',
                cLabelSize: 4,
                cOrder: 14,
                cKey: false,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_eventno: {
                dataLookUp: {
                    LookUpCd: 'GetLookUp_TNEvent',
                    ColumnDB: 'EventNo',
                    InitialWhere: "Status = 'Y' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                    SourceField: "EventNo,Descs,TimeEdit",
                    ParamWhere: ''
                },
                cValidate: '',
                cName: 'eventno',
                cLabel: 'Event Name',
                cKey: false,
                cLabelSize: 4,
                cOrder: 4,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'EventNo,Descs',
            },
            PI_currencycd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCMCurrency',
                    ColumnDB: 'CurrencyCd',
                    InitialWhere: "",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'currencycd',
                cLabel: 'Lease Currency',
                cKey: false,
                cLabelSize: 4,
                cOrder: 15,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'CurrencyCd,Descs',
            },
            PI_customercategorycd: {
                dataLookUp: {
                    LookUpCd: 'GetCustomerCategoryCd',
                    ColumnDB: 'CustomerCategoryCd',
                    InitialWhere: "CLStatus = 'Y' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'customercategorycd',
                cLabel: 'Customer Category ',
                cKey: false,
                cLabelSize: 4,
                cOrder: 5,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: 'TN/TN_CustomerCategory',
                cDisplayColumn: 'CustomerCategoryCd,Descs',
            },
            PI_totalrental: {
                cLabel: 'Total Rental',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
            },
            PI_customersource: {
                cLabel: 'Customer Source',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
            },
            PI_totalarealot: {
                cLabel: 'Total Area (Gross/Semi/Net)',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
            },
            PI_referenceno: {
                cValidate: '',
                cName: 'referenceno',
                cLabel: 'Customer Ref No',
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
            PI_telephoneline: {
                cValidate: '',
                cName: 'telephoneline',
                cLabel: 'Telephone Line(s)',
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
            PI_brandcd: {
                dataLookUp: {
                    LookUpCd: 'GetBrandCd',
                    ColumnDB: 'BrandCd',
                    InitialWhere: "ISNULL(CLStatus,'')='Y' AND (BrandOwnerId = '' OR  ISNULL(BrandOwnerId,'')='')",
                    ParamWhere: ''
                },
                cValidate: '',
                cName: 'brandcd',
                cLabel: 'Product Type',
                cKey: false,
                cLabelSize: 4,
                cOrder: 7,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'BrandCd,BrandName',
            },
            PI_telephonedeposit: {
                cValidate: '',
                cName: 'telephonedeposit',
                cLabel: 'Deposit ',
                cLabelSize: 4,
                cOrder: 17,
                cKey: false,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_brandname: {
                cValidate: '',
                cName: 'brandname',
                cLabel: 'Product Name',
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
            PI_remarks: {
                cValidate: '',
                cName: 'remarks',
                cLabel: 'Remarks',
                cLabelSize: 4,
                cOrder: 18,
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
            PI_marketingid: {
                dataLookUp: {
                    LookUpCd: 'GetLookUp_MarketingBrandPIC',
                    ColumnDB: 'MarketingID',
                    InitialWhere: "BrandCd = ''",
                    ParamWhere: ''
                },
                cValidate: '',
                cName: 'marketingid',
                cLabel: 'Marketing',
                cKey: false,
                cLabelSize: 4,
                cOrder: 9,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'MarketingID,Name',
            },
            PI_operatingfromhour: {
                cValidate: '',
                cName: 'operatingfromhour',
                cLabel: 'Operating From Hour',
                cLabelSize: 4,
                cOrder: 11,
                cKey: false,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_operatingtohour: {
                cValidate: '',
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
    computed: {
        inputStatus() {
            if (this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
                return this.$store.getters.getStatus.toUpperCase()
            } else {
                return 'VIEW'
            }
        },
        DataRow() {
            return this.$store.getters.GetPage1Data
        }
    },
    methods: {
        GetEventData() {
            var param = {
                OptionFunctionCd: "GetEventData",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                EventNo: this.M_TN_LOOCL.eventno
            }

            this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    var data = ress[0]
                    // console.log(data)
                    this.M_TN_LOOCL.customercategorycd = data.CustomerCategoryCd
                    this.M_TN_LOOCL.customercategorycdLabel = this.M_TN_LOOCL.customercategorycd != null && this.M_TN_LOOCL.customercategorycd != '' ? data.CustomerCategoryCd + this.separator + data.CustomerCategoryDescs : ''

                    switch (data.Organizer) {
                        case "E":
                            this.M_TN_LOOCL.customersource = 'EO'
                            break;
                        case "I":
                            this.M_TN_LOOCL.customersource = 'Inhouse'
                            break;
                    }

                    this.M_TN_LOOCL.brandcd = data.BrandCd
                    this.M_TN_LOOCL.brandcdLabel = this.M_TN_LOOCL.brandcd != null && this.M_TN_LOOCL.brandcd != '' ? data.BrandCd + this.separator + data.BrandDescs : ''
                    this.M_TN_LOOCL.leaseperiod = data.LeasePeriod

                    switch (data.ChargePeriod) {
                        case "M":
                            this.M_TN_LOOCL.chargeperiod = 'months'
                            break;
                        case "D":
                            this.M_TN_LOOCL.chargeperiod = 'days'
                            break;
                        case "Y":
                            this.M_TN_LOOCL.chargeperiod = 'years'
                            break;
                    }

                    this.M_TN_LOOCL.rcd = data.FromDate
                    this.M_TN_LOOCL.red = data.ToDate

                    this.M_TN_LOOCL.operatingfromhour = data.OperatingFromHour
                    this.M_TN_LOOCL.operatingtohour = data.OperatingToHour
                    this.M_TN_LOOCL.brandname = data.BrandDescs


                })
        },
        GetContract() {
            var param = {
                OptionFunctionCd: "GetContractData",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCL.copyfromapplicationno
            }

            this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    var data = ress[0]

                    this.M_TN_LOOCL.contactid = data.ContactId
                    this.M_TN_LOOCL.contactidLabel = this.M_TN_LOOCL.contactid != null && this.M_TN_LOOCL.contactid != '' ? data.ContactId + this.separator + data.CustomerName : ''
                    this.M_TN_LOOCL.customercategorycd = data.CustomerCategoryCd
                    this.M_TN_LOOCL.customercategorycdLabel = this.M_TN_LOOCL.customercategorycd != null && this.M_TN_LOOCL.customercategorycd != '' ? data.CustomerCategoryCd + this.separator + data.CustomerCategoryDescs : ''
                    this.M_TN_LOOCL.customersource = data.CustomerSource
                    this.M_TN_LOOCL.referenceno = data.ReferenceNo
                    this.M_TN_LOOCL.brandcd = data.BrandCd
                    this.M_TN_LOOCL.brandcdLabel = this.M_TN_LOOCL.brandcd != null && this.M_TN_LOOCL.brandcd != '' ? data.BrandCd + this.separator + data.BrandName : ''

                    switch (data.ChargePeriod) {
                        case "M":
                            this.M_TN_LOOCL.chargeperiod = 'months'
                            break;
                        case "D":
                            this.M_TN_LOOCL.chargeperiod = 'days'
                            break;
                        default:
                            this.M_TN_LOOCL.chargeperiod = 'years'
                            break;
                    }
                    this.M_TN_LOOCL.currencycd = data.CurrencyCd
                    this.M_TN_LOOCL.currencycdLabel = this.M_TN_LOOCL.currencycd != null && this.M_TN_LOOCL.currencycd != '' ? data.CurrencyCd + this.separator : ''
                    this.M_TN_LOOCL.marketingid = data.MarketingID
                    this.M_TN_LOOCL.marketingidLabel = this.M_TN_LOOCL.marketingid != null && this.M_TN_LOOCL.marketingid != '' ? data.MarketingID + this.separator + data.MarketingName : ''
                    this.M_TN_LOOCL.operatingfromhour = data.OperatingFromHour
                    this.M_TN_LOOCL.operatingtohour = data.OperatingToHour
                    this.M_TN_LOOCL.telephonedeposit = this.isCurrency(data.TelephoneDeposit, this.decimal)
                    this.M_TN_LOOCL.remarks = data.Remarks

                    this.PI_customercategorycd.cProtect = false
                    this.PI_operatingfromhour.cProtect = false
                    this.PI_leaseperiod.cProtect = false
                    this.PI_rcd.cProtect = false
                    this.PI_brandcd.cProtect = false
                })
        },
        SetLookUpBrand() {
            if (this.M_TN_LOOCL.contactid != null || this.M_TN_LOOCL.contactid != '') {
                this.PI_brandcd.dataLookUp.InitialWhere += "AND (BrandOwnerId = '" + this.M_TN_LOOCL.contactid + "' OR  ISNULL(BrandOwnerId,'')='')"
            }
        },
        GetBaseCurrency() {
            var param = {
                OptionFunctionCd: "GetBaseCurrency",
                ModuleCd: this.Module,
            }

            this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    var data = ress[0]
                    this.M_TN_LOOCL.currencycd = data.BaseCurrencyCd
                    this.M_TN_LOOCL.currencycdLabel = data.BaseCurrencyCd + this.separator + data.Descs
                })

        },
        GetDefaultOperatingHours() {
            var param = {
                OptionFunctionCd: "GetDefaultOperatingHours",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    var data = ress[0]
                    this.M_TN_LOOCL.operatingfromhour = data.OperatingFromHour
                    this.M_TN_LOOCL.operatingtohour = data.OperatingToHour
                })

        },
        GetSpecificationData() {
            var param = {
                OptionFunctionCd: "GetSpecification",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    var data = ress[0]

                    if (data.ApplicationCLRunningCd != null && data.ApplicationCLRunningCd != "") {
                        this.M_TN_LOOCL.applicationno = "(auto)"
                        this.PI_applicationno.cProtect = true
                    } else {
                        this.M_TN_LOOCL.applicationno = ""
                        this.PI_applicationno.cProtect = false
                    }
                    if (data.LOOCLRunningCd != null && data.LOOCLRunningCd != "") {
                        this.M_TN_LOOCL.loono = "(auto)"
                        this.PI_loono.cProtect = true
                    } else {
                        this.M_TN_LOOCL.loono = ""
                        this.PI_loono.cProtect = false
                    }

                })
        },
        OnleaseperiodChange(data) {
            // console.log(data)
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    var lp = data && data != '' ? data : 0
                    if (this.M_TN_LOOCL.rcd && this.M_TN_LOOCL.rcd != '') {
                        var nextDate = this.dateAdd2('d', this.M_TN_LOOCL.rcd, (lp - 1))

                        this.M_TN_LOOCL.red = nextDate
                        this.M_TN_LOOCL.utilitiesstartdate = this.M_TN_LOOCL.rcd
                        this.M_TN_LOOCL.utilitiesenddate = nextDate
                    }
                //     if (data && data != '') {
                //         if (this.M_TN_LOOCL.rcd && this.M_TN_LOOCL.rcd != '') {
                //             this.M_TN_LOOCL.red = this.dateAdd2('d', this.M_TN_LOOCL.rcd, (this.M_TN_LOOCL.leaseperiod - 1))
                //             console.log(this.M_TN_LOOCL.leaseperiod)
                //             this.M_TN_LOOCL.utilitiesenddate = this.M_TN_LOOCL.red
                //         }
                //         else {
                //             this.M_TN_LOOCL.red = this.M_TN_LOOCL.rcd
                //         }
                //     }
                }
            })
            this.$forceUpdate()
        },
        OnloodateChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{loodate}
                }
            })
            this.$forceUpdate()
        },
        OncopyfromapplicationnoChange(data) {
            this.$nextTick(() => {
                this.M_TN_LOOCL.copyfromapplicationno = data.id
                this.M_TN_LOOCL.copyfromapplicationnoLabel = data.label


                if (this.inputStatus != "VIEW") {
                    this.GetContract()
                }
            })
            this.$forceUpdate()
        },
        OncontactidChange(data) {
            this.$nextTick(() => {
                this.M_TN_LOOCL.contactid = data.id
                this.M_TN_LOOCL.contactidLabel = data.label
                if (this.inputStatus != "VIEW") {
                    this.M_TN_LOOCL.eventno = ''
                    this.M_TN_LOOCL.eventnoLabel = ''

                    this.M_TN_LOOCL.customercategorycd = ''
                    this.M_TN_LOOCL.customercategorycdLabel = ''

                    this.M_TN_LOOCL.customersource = ''

                    this.M_TN_LOOCL.brandcd = ''
                    this.M_TN_LOOCL.brandcdLabel = ''

                    this.SetLookUpBrand()
                    // this.PI_brandcd.dataLookUp.InitialWhere += "AND (BrandOwnerId = '" + data.id + "' OR  ISNULL(BrandOwnerId,'')='')"
                }
            })
            this.$forceUpdate()
        },
        OneventnoChange(data) {
            this.$nextTick(() => {
                this.M_TN_LOOCL.eventno = data.id
                this.M_TN_LOOCL.eventnoLabel = data.label

                if (this.inputStatus != "VIEW") {
                    this.PI_customercategorycd.cProtect = true
                    this.PI_brandname.cProtect = false
                    this.PI_operatingfromhour.cProtect = true
                    this.PI_leaseperiod.cProtect = true
                    this.PI_rcd.cProtect = true
                    this.PI_brandcd.cProtect = true

                    this.GetEventData()
                }
            })
            this.$forceUpdate()
        },
        OncurrencycdChange(data) {
            this.$nextTick(() => {
                this.M_TN_LOOCL.currencycd = data.id
                this.M_TN_LOOCL.currencycdLabel = data.label
                if (this.inputStatus != "VIEW") {
                    //{currencycd}
                }
            })
            this.$forceUpdate()
        },
        OncustomercategorycdChange(data) {
            this.$nextTick(() => {
                this.M_TN_LOOCL.customercategorycd = data.id
                this.M_TN_LOOCL.customercategorycdLabel = data.label
                if (this.inputStatus != "VIEW") {
                    //{customercategorycd}
                }
            })
            this.$forceUpdate()
        },
        OnbrandcdChange(data) {
            // console.log(data)
            this.$nextTick(() => {
                this.M_TN_LOOCL.brandcd = data.id
                this.M_TN_LOOCL.brandcdLabel = data.label
                this.M_TN_LOOCL.brandname = data.BrandName
                if (this.inputStatus != "VIEW") {
                    this.PI_marketingid.dataLookUp.InitialWhere = "BrandCd = '" + data.id + "'"
                }
            })
            this.$forceUpdate()
        },
        OnremarksChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{remarks}
                }
            })
            this.$forceUpdate()
        },
        OnmarketingidChange(data) {
            this.$nextTick(() => {
                this.M_TN_LOOCL.marketingid = data.id
                this.M_TN_LOOCL.marketingidLabel = data.label
                if (this.inputStatus != "VIEW") {
                    //{marketingid}
                }
            })
            this.$forceUpdate()
        },

        setToolbarButton() {
            //this.getToolbar().statusFunction[4].disabled = false
        },
        M_Head_Table() {},
        M_PageSize() {},
        M_TabClick() {},
        M_Pagination() {},
        M_Advance_Filter() {},
        M_Search(data) {},
        M_Refresh() {},
        M_Cancel() {},
        doDoubleClick() {},
        rowClicked(record, index) {},
        rowLink: function(url) {
            this.$refs.modalTest.show()
        },
        paramFromParent() {},
        M_Post(dt) {},
        M_Insert() {
            if (this.M_TN_LOOCL.applicationno == "(auto)") { this.M_TN_LOOCL.applicationno = "null" }
            if (this.M_TN_LOOCL.loono == "(auto)") { this.M_TN_LOOCL.loono = "null" }
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCL.applicationno,
                LOONo: this.M_TN_LOOCL.loono,
                LOODate: this.M_TN_LOOCL.loodate == '' || this.M_TN_LOOCL.loodate == null ? 'NULL' : this.M_TN_LOOCL.loodate,
                CopyFromApplicationNo: this.M_TN_LOOCL.copyfromapplicationno == '' || this.M_TN_LOOCL.copyfromapplicationno == null ? 'NULL' : this.M_TN_LOOCL.copyfromapplicationno,
                CustomerType: 'C',
                ContactId: this.M_TN_LOOCL.contactid == '' || this.M_TN_LOOCL.contactid == null ? 'NULL' : this.M_TN_LOOCL.contactid,
                EventNo: this.M_TN_LOOCL.eventno == '' || this.M_TN_LOOCL.eventno == null ? 'NULL' : this.M_TN_LOOCL.eventno,
                CustomerCategory: this.M_TN_LOOCL.customercategorycd == '' || this.M_TN_LOOCL.customercategorycd == null ? 'NULL' : this.M_TN_LOOCL.customercategorycd,
                ReferenceNo: this.M_TN_LOOCL.referenceno,
                BrandCd: this.M_TN_LOOCL.brandcd == '' || this.M_TN_LOOCL.brandcd == null ? 'NULL' : this.M_TN_LOOCL.brandcd,
                BrandName: this.M_TN_LOOCL.brandname,
                StartDate: this.M_TN_LOOCL.startdate == '' || this.M_TN_LOOCL.startdate == null ? 'NULL' : this.M_TN_LOOCL.startdate,
                EndDate: this.M_TN_LOOCL.enddate == '' || this.M_TN_LOOCL.enddate == null ? 'NULL' : this.M_TN_LOOCL.enddate,
                LeasePeriod: this.M_TN_LOOCL.leaseperiod,
                FreeRentalPeriod: this.M_TN_LOOCL.freerentalperiod,
                RCD: this.M_TN_LOOCL.rcd == '' || this.M_TN_LOOCL.rcd == null ? 'NULL' : this.M_TN_LOOCL.rcd,
                RED: this.M_TN_LOOCL.red == '' || this.M_TN_LOOCL.red == null ? 'NULL' : this.M_TN_LOOCL.red,
                UtilitiesStartDate: this.M_TN_LOOCL.utilitiesstartdate == '' || this.M_TN_LOOCL.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOOCL.utilitiesstartdate,
                UtilitiesEndDate: this.M_TN_LOOCL.utilitiesenddate == '' || this.M_TN_LOOCL.utilitiesenddate == null ? 'NULL' : this.M_TN_LOOCL.utilitiesenddate,
                CurrencyCd: this.M_TN_LOOCL.currencycd == '' || this.M_TN_LOOCL.currencycd == null ? 'NULL' : this.M_TN_LOOCL.currencycd,
                PeggingRate: this.M_TN_LOOCL.peggingrate,
                RevenueShareType: this.M_TN_LOOCL.revenuesharetype,
                ChargeArea: this.M_TN_LOOCL.chargearea,
                TelephoneLine: this.M_TN_LOOCL.telephoneline && this.M_TN_LOOCL.telephoneline != '' ? this.M_TN_LOOCL.telephoneline : 0,
                SecurityDepositRental: this.M_TN_LOOCL.securitydepositrental,
                SecurityDepositSC: this.M_TN_LOOCL.securitydepositsc,
                RentalBase: this.M_TN_LOOCL.rentalbase,
                RenewalPeriod: this.M_TN_LOOCL.renewalperiod,
                MarketingID: this.M_TN_LOOCL.marketingid == '' || this.M_TN_LOOCL.marketingid == null ? 'NULL' : this.M_TN_LOOCL.marketingid,
                FitOutCommencedOn: this.M_TN_LOOCL.fitoutcommencedon,
                FitOutTime: this.M_TN_LOOCL.fitouttime,
                OperatingFromHour: this.M_TN_LOOCL.operatingfromhour,
                OperatingToHour: this.M_TN_LOOCL.operatingtohour,
                MediaCd: this.M_TN_LOOCL.mediacd == '' || this.M_TN_LOOCL.mediacd == null ? 'NULL' : this.M_TN_LOOCL.mediacd,
                ServiceCharge: this.M_TN_LOOCL.servicecharge,
                PromotionLevy: this.M_TN_LOOCL.promotionlevy,
                TelephoneDeposit: this.M_TN_LOOCL.telephonedeposit ? this.replaceAllString(this.M_TN_LOOCL.telephonedeposit, ',', '', 'number') : 0,
                FitOutDeposit: this.M_TN_LOOCL.fitoutdeposit,
                SinkingFund: this.M_TN_LOOCL.sinkingfund,
                Remarks: this.M_TN_LOOCL.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
                .then((response) => {
                    if (response == null) return

                    //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                    this.$parent.resultInsert(response.Message)


                })


        },
        M_Update() {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCL.applicationno,
                LOONo: this.M_TN_LOOCL.loono,
                LOODate: this.M_TN_LOOCL.loodate == '' || this.M_TN_LOOCL.loodate == null ? 'NULL' : this.M_TN_LOOCL.loodate,
                ContactId: this.M_TN_LOOCL.contactid,
                EventNo: this.M_TN_LOOCL.eventno == '' || this.M_TN_LOOCL.eventno == null ? 'NULL' : this.M_TN_LOOCL.eventno,
                CustomerCategory: this.M_TN_LOOCL.customercategorycd == '' || this.M_TN_LOOCL.customercategorycd == null ? 'NULL' : this.M_TN_LOOCL.customercategorycd,
                AssessmentNo: this.M_TN_LOOCL.assessmentno,
                ReferenceNo: this.M_TN_LOOCL.referenceno,
                BrandCd: this.M_TN_LOOCL.brandcd,
                BrandName: this.M_TN_LOOCL.brandname,
                StartDate: this.M_TN_LOOCL.startdate,
                EndDate: this.M_TN_LOOCL.enddate,
                LeasePeriod: this.M_TN_LOOCL.leaseperiod,
                FreeRentalPeriod: this.M_TN_LOOCL.freerentalperiod,
                RCD: this.M_TN_LOOCL.rcd == '' || this.M_TN_LOOCL.rcd == null ? 'NULL' : this.M_TN_LOOCL.rcd,
                RED: this.M_TN_LOOCL.red,
                UtilitiesStartDate: this.M_TN_LOOCL.utilitiesstartdate == '' || this.M_TN_LOOCL.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOOCL.utilitiesstartdate,
                UtilitiesEndDate: this.M_TN_LOOCL.utilitiesenddate,
                CurrencyCd: this.M_TN_LOOCL.currencycd == '' || this.M_TN_LOOCL.currencycd == null ? 'NULL' : this.M_TN_LOOCL.currencycd,
                PeggingRate: this.M_TN_LOOCL.peggingrate,
                RevenueShareType: this.M_TN_LOOCL.revenuesharetype,
                ChargeArea: this.M_TN_LOOCL.chargearea,
                TelephoneLine: this.M_TN_LOOCL.telephoneline,
                SecurityDepositRental: this.M_TN_LOOCL.securitydepositrental,
                SecurityDepositSC: this.M_TN_LOOCL.securitydepositsc,
                RentalBase: this.M_TN_LOOCL.rentalbase,
                RenewalPeriod: this.M_TN_LOOCL.renewalperiod,
                MarketingID: this.M_TN_LOOCL.marketingid == '' || this.M_TN_LOOCL.marketingid == null ? 'NULL' : this.M_TN_LOOCL.marketingid,
                AntennaStatus: this.M_TN_LOOCL.status,
                FitOutCommencedOn: this.M_TN_LOOCL.fitoutcommencedon,
                FitOutTime: this.M_TN_LOOCL.fitouttime,
                FitOutPIC: this.M_TN_LOOCL.fitoutpic,
                HandOverDate: this.M_TN_LOOCL.handoverdate,
                OperatingFromHour: this.M_TN_LOOCL.operatingfromhour,
                OperatingToHour: this.M_TN_LOOCL.operatingtohour,
                MediaCd: this.M_TN_LOOCL.mediacd == '' || this.M_TN_LOOCL.mediacd == null ? 'NULL' : this.M_TN_LOOCL.mediacd,
                ServiceCharge: this.M_TN_LOOCL.servicecharge,
                PromotionLevy: this.M_TN_LOOCL.promotionlevy,
                TelephoneDeposit: this.M_TN_LOOCL.telephonedeposit ? this.replaceAllString(this.M_TN_LOOCL.telephonedeposit, ',', '', 'number') : 0,
                FitOutDeposit: this.M_TN_LOOCL.fitoutdeposit,
                SinkingFund: this.M_TN_LOOCL.sinkingfund,
                Remarks: this.M_TN_LOOCL.remarks,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_TN_LOOCL.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
                .then((response) => {
                    if (response == null) return

                    //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                    this.$parent.resultUpdate(response.Message)

                })
        },
        M_ClearForm() {
            this.M_TN_LOOCL = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
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
                leaseperiod: '',
                freerentalperiod: 0,
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                peggingrate: '',
                revenuesharetype: 'S',
                chargearea: 'G',
                telephoneline: '',
                securitydepositrental: 0,
                securitydepositsc: 0,
                rentalbase: 'F',
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
                telephonedeposit: '',
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
        M_New() {
            this.GetSpecificationData()
            this.GetDefaultOperatingHours()
            this.GetBaseCurrency()

        },
        M_Edit() {},
        setEnableControl(status, contractStatus){
            if (contractStatus != 1 || (status == 'X' || status == 'C')) {
                // this.PI_applicationno.cKey = true
                // this.PI_loono.cKey = true
                this.PI_loodate.cKey = true
                this.PI_copyfromapplicationno.cKey = true
                this.PI_contactid.cKey = true
                this.PI_eventno.cKey = true
                this.PI_customercategorycd.cKey = true
                this.PI_referenceno.cKey = true
                this.PI_brandcd.cKey = true
                this.PI_brandname.cKey = true
                this.PI_marketingid.cKey = true
                this.PI_operatingfromhour.cKey = true
                this.PI_leaseperiod.cKey = true
                this.PI_rcd.cKey = true
                this.PI_utilitiesstartdate.cKey = true
                this.PI_currencycd.cKey = true
                this.PI_telephoneline.cKey = true
                this.PI_telephonedeposit.cKey = true
            } else {
                // this.PI_loono.cKey = false
                this.PI_loodate.cKey = false
                this.PI_copyfromapplicationno.cKey = false
                this.PI_contactid.cKey = false
                this.PI_eventno.cKey = false
                this.PI_customercategorycd.cKey = false
                this.PI_referenceno.cKey = false
                this.PI_brandcd.cKey = false
                this.PI_brandname.cKey = false
                this.PI_marketingid.cKey = false
                this.PI_operatingfromhour.cKey = false
                this.PI_leaseperiod.cKey = false
                this.PI_rcd.cKey = false
                this.PI_utilitiesstartdate.cKey = false
                this.PI_currencycd.cKey = false
                this.PI_telephoneline.cKey = false
                this.PI_telephonedeposit.cKey = false
            }
        },
        M_Delete(dt) {
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []


            data.forEach((value) => {
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: value.ApplicationNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: ''
                })
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataDelete
            }

            this.postJSONMulti(this.getUrlNewDeleteMulti(), param)
                .then(response => {
                    if (response == null) return

                    this.$parent.resultDelete()
                })
        },
        getDataBy(record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo
            }

            this.postEncode(this.getUrlById(), param)
                .then(response => {
                    // response from API
                    if (response == null) return

                    var data = response.Data[0]
                    // console.log(data)
                    this.M_TN_LOOCL = {
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
                        perioddays: this.isCurrency(data.perioddays, this.decimal),
                        lastupdatestamp: record.LastUpdateStamp,
                        rowid: data.rowid,
                        totalrental: this.isCurrency(data.contractamt, this.decimal),
                        totalarealot: data.totalarealot
                    }

                    this.setEnableControl(data.status, data.contractstatus)

                    // if(data.customersource == 'E'){
                    //     this.M_TN_LOOCL.customersource = ''
                    // }

                    this.M_TN_LOOCL.customersource = data.customersource == 'E' ? 'EO' : 'Direct'

                    this.M_TN_LOOCL.copyfromapplicationnoLabel = this.M_TN_LOOCL.copyfromapplicationno != null && this.M_TN_LOOCL.copyfromapplicationno != '' ? data.copyfromapplicationno + this.separator : ''
                    this.M_TN_LOOCL.contactidLabel = this.M_TN_LOOCL.contactid != null && this.M_TN_LOOCL.contactid != '' ? data.contactid + this.separator + data.customername : ''
                    this.M_TN_LOOCL.eventnoLabel = this.M_TN_LOOCL.eventno != null && this.M_TN_LOOCL.eventno != '' ? data.eventno + this.separator + data.eventdescs : ''
                    this.M_TN_LOOCL.currencycdLabel = this.M_TN_LOOCL.currencycd != null && this.M_TN_LOOCL.currencycd != '' ? data.currencycd + this.separator + data.currencydescs : ''
                    this.M_TN_LOOCL.customercategorycdLabel = this.M_TN_LOOCL.customercategorycd != null && this.M_TN_LOOCL.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs : ''
                    this.M_TN_LOOCL.brandcdLabel = this.M_TN_LOOCL.brandcd != null && this.M_TN_LOOCL.brandcd != '' ? data.brandcd + this.separator + data.brandname : ''
                    this.M_TN_LOOCL.marketingidLabel = this.M_TN_LOOCL.marketingid != null && this.M_TN_LOOCL.marketingid != '' ? data.marketingid + this.separator + data.marketingname : ''

                    // switch (data.status) {
                    //     case "A":
                    //     case "N":
                    //         switch (data.contractstatus) {
                    //             case 1:
                    //                 this.M_TN_LOOCL.status = 'Pending LOO'
                    //                 break;
                    //             case 2:
                    //             case 3:
                    //             case 4:
                    //                 this.M_TN_LOOCL.status = "Approved LOO"
                    //                 break;
                    //         }
                    //         break;
                    //     case "X":
                    //         this.M_TN_LOOCL.status = "Terminated Agreement"
                    //         break;
                    //     case "C":
                    //         this.M_TN_LOOCL.status = "Cancelled Agreement"
                    //         break;
                    // }

                    if (data.status == 'A' || data.status == 'N') {
                        if (data.contractstatus == '1') {
                            this.M_TN_LOOCL.status = "Pending LOO"
                            // pending = true
                        }
                        else if (data.contractstatus == '2' || data.contractstatus == '3' || data.contractstatus == '4') {
                            this.M_TN_LOOCL.status = "Approved LOO"
                            // pending = false
                        }
                        }
                        else if (data.status == 'X') {
                        this.M_TN_LOOCL.status = "Terminated Agreement"
                        // pending = false
                        }
                        else if (data.status == 'C') {
                        this.M_TN_LOOCL.status = "Cancelled Agreement"
                        // pending = false
                        }

                    switch (data.chargeperiod) {
                        case "M":
                            this.M_TN_LOOCL.chargeperiod = 'months'
                            break;
                        case "D":
                            this.M_TN_LOOCL.chargeperiod = 'days'
                            break;
                        default:
                            this.M_TN_LOOCL.chargeperiod = 'years'
                            break;
                    }

                    this.M_TN_LOOCL.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalsemigrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalnetarea, this.decimal)
                    this.SetLookUpBrand()


                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit

                })
        },
        MdtRange_rcd(data) {
            if (this.inputStatus != "VIEW") {
                this.M_TN_LOOCL.rcd = data
                if(this.M_TN_LOOCL.eventno && this.M_TN_LOOCL.eventnoLabel != ''){
                    if (this.M_TN_LOOCL.leaseperiod && this.M_TN_LOOCL.leaseperiod != '') {
                        this.M_TN_LOOCL.red = this.dateAdd2('d', data, (this.M_TN_LOOCL.leaseperiod - 1))
                    }
                }
                else{
                    if (this.M_TN_LOOCL.leaseperiod && this.M_TN_LOOCL.leaseperiod != '') {
                        this.M_TN_LOOCL.red = this.dateAdd2('d', data, (this.M_TN_LOOCL.leaseperiod - 1))
                        this.M_TN_LOOCL.utilitiesstartdate = data
                        this.M_TN_LOOCL.utilitiesenddate = this.dateAdd2('d', data, (this.M_TN_LOOCL.leaseperiod - 1))
                    }
                }

            }
        },
        MdtRange_red(data) {
            this.M_TN_LOOCL.red = data
        },
        MdtRange_utilitiesstartdate(data) {
            this.M_TN_LOOCL.utilitiesstartdate = data
        },
        MdtRange_utilitiesenddate(data) {
            this.M_TN_LOOCL.utilitiesenddate = data
        },
        MdtRange_operatingfromhour(data) {
            this.M_TN_LOOCL.operatingfromhour = data
        },
        MdtRange_operatingtohour(data) {
            this.M_TN_LOOCL.operatingtohour = data
        }

    },
    beforeCreate: function() {},
    created: function() {
        this.$store.commit('setFormType', 'List')
        this.getToolbar().ProcessPS()
    },
    beforeMount: function() {},
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('', 'eb_getList')
        // [Global:GetSpecification].then(FnOpt9 => { if (FnOpt9 != null) { 
        //      data = FnOpt9 } })

    },
    beforeUpdate: function() {},
    updated: function() {},
    beforeDestroy: function() {},
    destroyed: function() {}
}
</script>

