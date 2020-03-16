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
<!-- :hideCheckboxAndGear=true -->

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
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_LOO.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_LOO.loono"  ref="ref_loono"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_LOO.loodate"  ref="ref_loodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncopyfromapplicationnoChange" :prop="PI_copyfromapplicationno" :value="M_TN_LOO.copyfromapplicationno" :label="M_TN_LOO.copyfromapplicationnoLabel" ref="ref_copyfromapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_LOO.contactid" :label="M_TN_LOO.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LOO.customercategorycd" :label="M_TN_LOO.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_customerstatus" v-model="M_TN_LOO.customerstatus"  ref="ref_customerstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnassessmentnoChange" :prop="PI_assessmentno" :value="M_TN_LOO.assessmentno" :label="M_TN_LOO.assessmentnoLabel" ref="ref_assessmentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_LOO.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_LOO.brandcd" :label="M_TN_LOO.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_theme" v-model="M_TN_LOO.theme"  ref="ref_theme" />
                                      </b-col>
                                      
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_class" v-model="M_TN_LOO.class"  ref="ref_class" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_category" v-model="M_TN_LOO.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_LOO.startdate" :valueTo="M_TN_LOO.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" @fromBlur="BlurRange_startdate" @toBlur="BlurRange_enddate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 10px;">
                                            <ABSTextBoxOnly @input="OnleaseperiodChange" :prop="PI_leaseperiod" v-model="M_TN_LOO.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            {{M_TN_LOO.chargeperiod}} and {{M_TN_LOO.perioddays}} days . Free
                                          </b-col>  
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_freerentalperiod" v-model="M_TN_LOO.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LOO.rcd" :valueTo="M_TN_LOO.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" @fromBlur="BlurRange_rcd" @toBlur="BlurRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_LOO.utilitiesstartdate" :valueTo="M_TN_LOO.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">                                        
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOO.currencycd" :label="M_TN_LOO.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_totalrental" v-model="M_TN_LOO.totalrental"  ref="ref_totalrental" />
                                      </b-col> 
                                    </b-row> 
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_baserentalrate" v-model="M_TN_LOO.baserentalrate"  ref="ref_baserentalrate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnantennastatusChange" :prop="PI_antennastatus" v-model="M_TN_LOO.antennastatus"  ref="ref_antennastatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnpeggingrateChange" :prop="PI_peggingrate" v-model="M_TN_LOO.peggingrate"  ref="ref_peggingrate" />
                                      </b-col>
                                    </b-row>
                                    
                                    
                                </b-col> <!-- table close left-->
                                <b-col md="6" id="col-right"> <!-- table open right -->
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_status" v-model="M_TN_LOO.status"  ref="ref_status" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_LOO.chargearea"  ref="ref_chargearea" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_totalarealot" v-model="M_TN_LOO.totalarealot"  ref="ref_totalarealot" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_LOO.telephoneline"  ref="ref_telephoneline"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="M_TN_LOO.securitydepositrental"  ref="ref_securitydepositrental"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="M_TN_LOO.securitydepositsc"  ref="ref_securitydepositsc"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_TN_LOO.servicecharge"  ref="ref_servicecharge"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_LOO.promotionlevy"  ref="ref_promotionlevy"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LOO.telephonedeposit"  ref="ref_telephonedeposit"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_TN_LOO.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_TN_LOO.sinkingfund"  ref="ref_sinkingfund"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnrentalbaseChange" :prop="PI_rentalbase" v-model="M_TN_LOO.rentalbase"  ref="ref_rentalbase" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="M_TN_LOO.revenuesharetype"  ref="ref_revenuesharetype" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_renewalperiod" v-model="M_TN_LOO.renewalperiod"  ref="ref_renewalperiod"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_rentalratetype" v-model="M_TN_LOO.rentalratetype"  ref="ref_rentalratetype" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_LOO.marketingid" :label="M_TN_LOO.marketingidLabel" ref="ref_marketingid"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_fitoutpic" v-model="M_TN_LOO.fitoutpic"  ref="ref_fitoutpic"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputDateVuex @input="OnfitoutcommencedonChange" :prop="PI_fitoutcommencedon" v-model="M_TN_LOO.fitoutcommencedon"  ref="ref_fitoutcommencedon" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="M_TN_LOO.handoverdate"  ref="ref_handoverdate" />
                                    </b-col>
                                  </b-row>
                                  <b-row> 
                                    <b-col md="12">                                      
                                      <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_LOO.operatingfromhour" :valueTo="M_TN_LOO.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnmediacdChange" :prop="PI_mediacd" :value="M_TN_LOO.mediacd" :label="M_TN_LOO.mediacdLabel" ref="ref_mediacd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOO.remarks"  ref="ref_remarks" />
                                    </b-col>
                                  </b-row>
                                </b-col> <!-- table close right-->

                  
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
import moment from 'moment'
export default {
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
          statusOnChange: 0,
		cInsertKey:'',
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "CustomerType = 'L' AND ContractStatus IN ('1','2','3','4') AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
    isError:false, 
    dataSpec:[],
    IsContractEditable:0,
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_LOO :{
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
                customersource: '',
                chargeperiod: 'months',
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
                freerentalperiod: '0',
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                peggingrate: 'N',
                revenuesharetype: 'R',
                chargearea: 'N',
                telephoneline: '0',
                securitydepositrental: '0',
                securitydepositsc: '0',
                rentalbase: 'R',
                renewalperiod: '0',
                rentalratetype: 'unknown',
                antennastatus: 'N',
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
                servicecharge: '0',
                promotionlevy: '0',
                telephonedeposit: '0',
                fitoutdeposit: '0',
                sinkingfund: '0',
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
                applicationleasingrunningcd: '',
                looleasingrunningcd: '',
                customerstatus: 'unknown',
                totalarealot: "0.00 / 0.00 / 0.00",
                totalrental: "0.00"
                    }
            ,
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStyle: 'font-weight: bold;'
            }, 
            PI_applicationno: { 
                cValidate :'required|max:30', 
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
            PI_telephoneline: { 
                cValidate :'', 
                cName: 'telephoneline', 
                cLabel: 'Telephone Line(s)', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStyle: "text-align: right;" 
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
            PI_securitydepositrental: { 
                cValidate :'', 
                cName: 'securitydepositrental', 
                cLabel: 'Security Deposit Rental', 
                cLabelSize: 4, 
                cOrder: 23, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'Months'  
            }, 
            PI_loodate: { 
                cValidate :'', 
                cName: 'loodate', 
                cLabel: 'LOO Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_securitydepositsc: { 
                cValidate :'', 
                cName: 'securitydepositsc', 
                cLabel: 'Security Deposit SC', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'Months' 
            }, 
            PI_copyfromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNCopyFrom'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'copyfromapplicationno', 
                cLabel: 'Copy From', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
            PI_servicecharge: { 
                cValidate :'', 
                cName: 'servicecharge', 
                cLabel: 'Service Charge', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupOwnerId'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: "HoldReleaseStatus IS NULL"   , 
                    ParamWhere: '',
                    SourceField:'ContactId,ContactClassCd,TranslatedCategory,Name,TimeEdit',
                    DisplayLookUp:'ContactId,Name'  
                        }, 
                cValidate :'required', 
                cName: 'contactid', 
                cLabel: 'Customer ', 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_promotionlevy: { 
                cValidate :'', 
                cName: 'promotionlevy', 
                cLabel: 'Promotion Levy', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCustomerCategoryCd'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "LeasingStatus = 'Y' AND SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category ', 
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
                cMasterUrl: 'TN/TN_CustomerCategory' ,
                cDisplayColumn: 'CustomerCategoryCd,Descs' ,
            }, 
            PI_telephonedeposit: { 
                cValidate :'', 
                cName: 'telephonedeposit', 
                cLabel: 'Telephone Deposit', 
                cLabelSize: 4, 
                cOrder: 27, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'Lines' 
            }, 
            PI_customerstatus: {                 
                cValidate :'', 
                cName: 'customerstatus', 
                cLabel: 'Customer Status', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex             
                
            }, 
            PI_fitoutdeposit: { 
                cValidate :'', 
                cName: 'fitoutdeposit', 
                cLabel: 'Fit Out Deposit', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_assessmentno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNTenantAssessment'    , 
                    ColumnDB: 'AssessmentNo'   , 
                    InitialWhere: "SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"' AND ContactID=''"  , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'assessmentno', 
                cLabel: 'Assessment No', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'AssessmentNo,Descs' ,
            }, 
            PI_sinkingfund: { 
                cValidate :'', 
                cName: 'sinkingfund', 
                cLabel: 'Sinking Fund', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_referenceno: { 
                cValidate :'max:60', 
                cName: 'referenceno', 
                cLabel: 'Customer Ref No', 
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
            PI_rentalbase: { 
                cValidate :'', 
                cName: 'rentalbase', 
                cId: 'rdbrentalbase', 
                cRadioOptions: [{ text: 'Full Rental', value: 'R' },{ text: 'Revenue Share', value: 'S' },{ text: 'Combine', value: 'C' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Rental Base', 
                cLabelSize: 4, 
                cOrder: 30, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetBrandCd'    , 
                    ColumnDB: 'BrandCd'   , 
                    InitialWhere: "ISNULL(LeasingStatus,'') = 'Y'"   , 
                    ParamWhere: '',  
                    SourceField:'BrandCd,BrandName,LotTheme=Theme,LotClass=Class,LotCategory=Category,TimeEdit',
                    DisplayLookUp:'BrandCd,BrandName'
                        }, 
                cValidate :'required', 
                cName: 'brandcd', 
                cLabel: 'Brand Name', 
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
                cDisplayColumn: 'BrandCd,BrandName' ,
            }, 
            PI_revenuesharetype: { 
                cValidate :'', 
                cName: 'revenuesharetype', 
                cId: 'rdbrevenuesharetype', 
                cRadioOptions: [{ text: 'Staggered', value: 'S' },{ text: 'Range Scale', value: 'R' },], 
                cRadioDefaultOption: 'R', 
                cLabel:'Revenue Share Calc.', 
                cLabelSize: 4, 
                cOrder: 31, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_theme: {                 
                cValidate :'', 
                cName: 'theme', 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true
            }, 
            PI_renewalperiod: { 
                cValidate :'', 
                cName: 'renewalperiod', 
                cLabel: 'Renewal Period', 
                cLabelSize: 4, 
                cOrder: 32, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_class: {                 
                cValidate :'', 
                cName: 'class', 
                cLabel: 'Class', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                
            }, 
            PI_rentalratetype: {                 
                cValidate :'', 
                cName: 'rentalratetype', 
                cLabel: 'Rental Type', 
                cLabelSize: 4, 
                cOrder: 33, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_category: {                 
                cValidate :'', 
                cName: 'category', 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_marketingid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_MarketingBrandPIC'    , 
                    ColumnDB: 'MarketingID'   , 
                    InitialWhere: "BrandCd = ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 34, 
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
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Lease Start - End Date', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fitoutpic: { 
                cValidate :'', 
                cName: 'fitoutpic', 
                cLabel: 'Fit Out PIC', 
                cLabelSize: 4, 
                cOrder: 35, 
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
                cOrder: 13, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
              

                // cValidate :'required|max:3', 
                // cName: 'leaseperiod', 
                // cLabel: 'Lease Period', 
                // cLabelSize: 4, 
                // cOrder: 0, 
                // cKey: false, 
                // cType: 'numeric',
                // cVisible: true, 
                // cProtect: false, 
                // cPageLevel: this.PageLevel, 
                // cTabIndex: this.TabIndex, 
                // cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fitoutcommencedon: { 
                cValidate :'', 
                cName: 'fitoutcommencedon', 
                cLabel: 'Fit Out Comm. Date', 
                cLabelSize: 4, 
                cOrder: 36, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargeperiod: { 
                // cLabel: 'Charge Period', 
                // cLabelSize: 4, 
                // cValue: '', 
                // cPageLevel: this.PageLevel, 
                // cTabIndex: this.TabIndex, 
                // cVisible: true

                cValidate :'', 
                cName: 'chargeperiod', 
                cLabel: 'Charge Period', 
                cLabelSize: 4, 
                cOrder: 99, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_handoverdate: { 
                cValidate :'', 
                cName: 'handoverdate', 
                cLabel: 'Hand Over Date', 
                cLabelSize: 4, 
                cOrder: 37, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_perioddays: { 
                cLabel: 'Period Days', 
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
                cOrder: 38, 
                cKey: false,
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 

            }, 
            PI_freerentalperiod: { 
                cValidate :'', 
                cName: 'freerentalperiod', 
                cLabel: 'Free', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            // PI_operatingtohour: { 
            //     cValidate :'', 
            //     cName: 'operatingtohour', 
            //     cLabel: 'Operating Hour To', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_rcd: { 
                cValidate :'required|date_format:YYYY-MM-DD', 
                cValidateTo : 'required',
                cName: 'rcd', 
                cLabel: 'RCD - RED ', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_mediacd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNMedia'    , 
                    ColumnDB: 'MediaCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'mediacd', 
                cLabel: 'Information Source', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 39, 
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
                cMasterUrl: 'TN/TN_MEDIA',
                cDisplayColumn: 'MediaCd,Descs' ,
            }, 
            PI_utilitiesstartdate: { 
                cValidate :'required', 
                cName: 'utilitiesstartdate', 
                cLabel: 'Utilities Start - End Date', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder:40, 
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
                cOrder: 17, 
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
            PI_totalrental: {                 
                cValidate :'', 
                cName: 'totalrental', 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_antennastatus: { 
                cValidate :'', 
                cName: 'antennastatus', 
                cId: 'rdbantennastatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Antenna Lease', 
                cLabelSize: 4, 
                cOrder: 18, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_peggingrate: { 
                cValidate :'', 
                cName: 'peggingrate', 
                cId: 'rdbpeggingrate', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Peg Rate', 
                cDefault:'N',
                cLabelSize: 4, 
                cOrder: 19, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargearea: { 
                cValidate :'', 
                cName: 'chargearea', 
                cId: 'rdbchargearea', 
                cRadioOptions: [{ text: 'Gross', value: 'G' },{ text: 'Semi', value: 'S' },{ text: 'Net', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Base Calculation Area', 
                cLabelSize: 4, 
                cOrder: 20, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalarealot: { 
                cValidate :'', 
                cName: 'totalarealot', 
                cLabel: 'Total Area (Gross/Semi/Net)', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_baserentalrate: {                 
                cValidate :'', 
                cName: 'baserentalrate', 
                cLabel: 'Average Rate', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
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
        GetStatus(Status){
          switch (data.status) {
            case "A":
            case "N":
              switch (data.contractstatus) {
                case 2, 3, 4:
                  this.M_TN_LOO.status = "Approved LOO"
                  break;                      
                case 1:
                  this.M_TN_LOO.status = "Pending LOO"
                  this.PI_loono.cProtect = true
                  this.PI_loodate.cProtect = true
                  break;
              }
              break;
            case "X":
              this.M_TN_LOO.status = "Terminated Agreement"
              break;
            case "C":
              this.M_TN_LOO.status = "Cancelled Agreement"
              break;                  
          }
        },
        GetSpecificationData(){ 
          var param = {
            OptionFunctionCd: "GetSpecification",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null || ress.length==0) {
                  this.alertError('Please setup the Tenancy Specification first.')
                  this.isError = true
                  return
                }else{
                  this.isError = false
                }
                // var data = ress[0]
                this.dataSpec = ress[0]

                 
                this.M_TN_LOO.applicationleasingrunningcd = this.dataSpec.ApplicationLeasingRunningCd
                this.M_TN_LOO.looleasingrunningcd = this.dataSpec.LOOLeasingRunningCd

                if (this.M_TN_LOO.applicationleasingrunningcd != null && this.M_TN_LOO.applicationleasingrunningcd != "")
                    { this.M_TN_LOO.applicationno = "(auto)"
                    this.PI_applicationno.cProtect = true }
                else {
                    this.M_TN_LOO.applicationno = ""
                    this.PI_applicationno.cProtect = false }

                if (this.M_TN_LOO.looleasingrunningcd != null && this.M_TN_LOO.looleasingrunningcd != "")
                    { this.M_TN_LOO.loono = "(auto)"
                    this.PI_loono.cProtect = true }
                else {
                    this.M_TN_LOO.loono = ""
                    this.PI_loono.cProtect = false }
                this.M_TN_LOO.loodate = this.getToday()  
            })
        },	
        OnloodateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{loodate}
            }
        })
        this.$forceUpdate()
        },
        GetLeasePeriode(){
          // console.log(this.M_TN_LOO.rcd, this.M_TN_LOO.red)
          var param = {
            OptionFunctionCd: "GetTNLeasePeriod",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            tgl_awal: this.M_TN_LOO.rcd,
            tgl_akhir: this.M_TN_LOO.red
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              // console.log(data)

              this.M_TN_LOO.leaseperiod = data.Month
              this.M_TN_LOO.perioddays = data.Day
              
          })
        },
        GetContract(ApplicationNo,event=null){
           var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: ApplicationNo
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              
              if(event=='M_Edit'){
                if(data.Status !='C' || data.Status!='X' && data.DeviationApprovalNo =='' ||data.DeviationApprovalNo ==null){
                  this.IsContractEditable = 1
                }
                return
              }
                
                
                this.M_TN_LOO.copyfromapplicationno = data.ApplicationNo
                this.M_TN_LOO.contactid = data.ContactId
                this.M_TN_LOO.customercategorycd = data.CustomerCategoryCd
                this.M_TN_LOO.referenceno = data.ReferenceNo
                this.M_TN_LOO.brandcd = data.BrandCd
                this.M_TN_LOO.theme = data.Theme
                this.M_TN_LOO.class = data.Class
                this.M_TN_LOO.category = data.Category
                // this.M_TN_LOO.chargeperiod = data.ChargePeriod
                // console.log(data.ChargePeriod)
                switch (data.ChargePeriod) {
                  case "M":
                    this.M_TN_LOO.chargeperiod = "months"
                    break;
                  case "D":
                    this.M_TN_LOO.chargeperiod = "days"
                    break;
                  case "Y":
                    this.M_TN_LOO.chargeperiod = "years"
                    break;
                }
                this.M_TN_LOO.freerentalperiod = data.FreeRentalPeriod
                this.M_TN_LOO.currencycd = data.CurrencyCd
                this.M_TN_LOO.peggingrate = data.PeggingRate
                this.M_TN_LOO.revenuesharetype = data.RevenueShareType
                this.M_TN_LOO.chargearea = data.ChargeArea
                this.M_TN_LOO.rentalbase = data.RentalBase
                this.M_TN_LOO.renewalperiod = data.RenewalPeriod
                this.M_TN_LOO.marketingid = data.MarketingID
                this.M_TN_LOO.operatingfromhour = data.OperatingFromHour
                this.M_TN_LOO.operatingtohour = data.OperatingToHour
                this.M_TN_LOO.mediacd = data.MediaCd
                this.M_TN_LOO.servicecharge = data.ServiceCharge
                this.M_TN_LOO.promotionlevy = data.PromotionLevy
                this.M_TN_LOO.telephonedeposit = data.TelephoneDeposit
                this.M_TN_LOO.fitoutdeposit = data.FitOutDeposit
                this.M_TN_LOO.sinkingfund = data.SinkingFund
                this.M_TN_LOO.remarks = data.Remarks
                this.M_TN_LOO.securitydepositrental = data.SecurityDepositRental
                this.M_TN_LOO.securitydepositsc = data.SecurityDepositSC

              this.M_TN_LOO.copyfromapplicationnoLabel = this.M_TN_LOO.copyfromapplicationno != null && this.M_TN_LOO.copyfromapplicationno != '' ? data.ApplicationNo + this.separator  + data.LOONo :'' 
              this.M_TN_LOO.contactidLabel = this.M_TN_LOO.contactid != null && this.M_TN_LOO.contactid != '' ? data.ContactId + this.separator + data.CustomerName  :'' 
              this.M_TN_LOO.customercategorycdLabel = this.M_TN_LOO.customercategorycd != null && this.M_TN_LOO.customercategorycd != '' ? data.CustomerCategoryCd + this.separator + data.CustomerCategoryDescs  :'' 
              this.M_TN_LOO.brandcdLabel = this.M_TN_LOO.brandcd != null && this.M_TN_LOO.brandcd != '' ? data.BrandCd + this.separator + data.BrandName  :'' 
              this.M_TN_LOO.marketingidLabel = this.M_TN_LOO.marketingid != null && this.M_TN_LOO.marketingid != '' ? data.MarketingId + this.separator + data.MarketingName :'' 
              this.M_TN_LOO.mediacdLabel = this.M_TN_LOO.mediacd != null && this.M_TN_LOO.mediacd != '' ? data.MediaCd + this.separator  :'' 
              this.M_TN_LOO.currencycdLabel = this.M_TN_LOO.currencycd != null && this.M_TN_LOO.currencycd != '' ? data.CurrencyCd + this.separator  :''
              
              this.SetLookUpBrand()
              // this.SetLookUpBrand(this.M_TN_LOO.contactid)

            })
        },
        SetLookUpBrand(){
          if(this.M_TN_LOO.contactid != '' && this.M_TN_LOO.contactid !=null){
            
            var param = {
            OptionFunctionCd: "GetDataBrand",
            ModuleCd: this.Module,
            BrandCd: this.M_TN_LOO.contactid
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress.length > 0) {
                  this.PI_brandcd.dataLookUp .InitialWhere += "AND (BrandOwnerId = '" + this.M_TN_LOO.contactid + "' OR  ISNULL(BrandOwnerId,'')='')"
                }
            })

          }
          
        },
        GetLeasingPolicyDefault(){
          //proses onChange RCD Date
        var dt = new Date(this.M_TN_LOO.rcd)
        var year = dt.getFullYear()

           var param = {
            OptionFunctionCd: "GetLeasingPolicyData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            LeasingPolicyYear: year,
            CustomerCategoryCd: this.M_TN_LOO.customercategorycd,
            LeasePeriod: this.M_TN_LOO.leaseperiod
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              // this.isCurrency(data.servicecharge, this.decimal)
              this.M_TN_LOO.servicecharge = this.isCurrency(data.ServiceCharge, this.decimal)
              this.M_TN_LOO.promotionlevy = this.isCurrency(data.PromotionLevy, this.decimal)
              this.M_TN_LOO.telephonedeposit = this.isCurrency(data.TelephoneDeposit, this.decimal)
              this.M_TN_LOO.fitoutdeposit = this.isCurrency(data.FitOutDeposit, this.decimal)
              this.M_TN_LOO.sinkingfund = this.isCurrency(data.SinkingFund, this.decimal)

              this.M_TN_LOO.securitydepositrental = this.isCurrency(data.SecurityDepositRental, this.decimal)
              this.M_TN_LOO.securitydepositsc = this.isCurrency(data.SecurityDepositSC, this.decimal)
              
              switch (this.M_TN_LOO.chargeperiod) {
                  case "months":
                    var dtred = this.dateAdd2('M',this.M_TN_LOO.rcd,this.M_TN_LOO.leaseperiod)
                    var check = moment(dtred, 'YYYY/MM/DD');
                    var check2 = moment(this.M_TN_LOO.rcd, 'YYYY/MM/DD');
                    var iDay1 = parseInt(check.format('D'))
                    var iDay2 = parseInt(check2.format('D'))
                  // console.log(dtred)
                  //   console.log(check)
                  //   console.log(check2)
                  //   console.log(iDay1)
                  //   console.log(iDay2)
                    if(iDay1>=iDay2){
                      this.M_TN_LOO.red = this.dateAdd2('D',this.M_TN_LOO.rcd,-1)
                      // console.log(this.M_TN_LOO.red)
                    }
                    this.M_TN_LOO.red = this.dateAdd2('D',this.dateAdd2('M',this.M_TN_LOO.rcd,this.M_TN_LOO.leaseperiod),-1)
                    // console.log(this.M_TN_LOO.red)
                    break;
                  case "days":
                    this.M_TN_LOO.red = this.dateAdd2('D',this.M_TN_LOO.rcd,this.M_TN_LOO.leaseperiod)
                    break;
                  case "years":
                    this.M_TN_LOO.red = this.dateAdd2('D',this.dateAdd2('Y',this.M_TN_LOO.rcd,this.M_TN_LOO.leaseperiod),-1)
                    break;
                }
       

            })
        },
        OncopyfromapplicationnoChange (data) {          
        this.$nextTick(() => {
            this.M_TN_LOO.copyfromapplicationno = data.id
            this.M_TN_LOO.copyfromapplicationnoLabel = data.label
                    
            if (this.inputStatus != "VIEW") {
              
              this.GetContract(data.id)    
            }
        })
        this.$forceUpdate()
        },
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.contactid = data.id
            this.M_TN_LOO.contactidLabel = data.label

            

            if (this.inputStatus != "VIEW") {
              this.PI_assessmentno.dataLookUp.InitialWhere = "SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"' AND ContactID='"+ data.id +"'"
              this.M_TN_LOO.customercategorycd = ''
              this.M_TN_LOO.customercategorycdLabel = ''
              this.SetLookUpBrand()

            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.customercategorycd = data.id
            this.M_TN_LOO.customercategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_LOO.chargeperiod = data.ChargePeriodDescs
              this.SetLookUpBrand()

            }
        })
        this.$forceUpdate()
        },
        OnassessmentnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.assessmentno = data.id
            this.M_TN_LOO.assessmentnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{assessmentno}
            }
        })
        this.$forceUpdate()
        },
        OnrentalbaseChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{rentalbase}
            }
        })
        this.$forceUpdate()
        },
        OnbrandcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.brandcd = data.id
            this.M_TN_LOO.brandcdLabel = data.label

            this.PI_marketingid.dataLookUp.InitialWhere = "BrandCd='"+data.id+"'"
            if (this.inputStatus != "VIEW") {
              this.M_TN_LOO.theme = data.LotTheme
              this.M_TN_LOO.class = data.LotClass
              this.M_TN_LOO.category = data.LotCategory
              
            }
        })
        this.$forceUpdate()
        },
        OnrevenuesharetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revenuesharetype}
            }
        })
        this.$forceUpdate()
        },
        OnmarketingidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.marketingid = data.id
            this.M_TN_LOO.marketingidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketingid}
            }
        })
        this.$forceUpdate()
        },
        OnleaseperiodChange(data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(this.statusOnChange !== 2){
                if (this.M_TN_LOO.leaseperiod && this.M_TN_LOO.leaseperiod != '') {
                  if (this.M_TN_LOO.rcd && this.M_TN_LOO.rcd != '') {
                    // console.log()
                    this.M_TN_LOO.red = this.dateAdd2('d', this.dateAdd2('m', this.M_TN_LOO.rcd, data), -1)
                    this.M_TN_LOO.perioddays = 0
                  }
                }
                this.statusOnChange = 1

                setTimeout(() => {
                  this.statusOnChange = 2
                }, 10);
              }
              else {
                this.statusOnChange = 0
              }
            }
          })
          this.$forceUpdate()
        },
        OnfitoutcommencedonChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fitoutcommencedon}
            }
        })
        this.$forceUpdate()
        },
        OnhandoverdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{handoverdate}
            }
        })
        this.$forceUpdate()
        },
        OnmediacdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.mediacd = data.id
            this.M_TN_LOO.mediacdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{mediacd}
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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOO.currencycd = data.id
            this.M_TN_LOO.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OnantennastatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{antennastatus}
            }
        })
        this.$forceUpdate()
        },
        OnpeggingrateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{peggingrate}
            }
        })
        this.$forceUpdate()
        },
        OnchargeareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargearea}
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
        M_CheckboxChecked(data, status, index){

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
          if(this.isError==true){
            this.alertError('Please setup the Tenancy Specification first.')
            return
          }
        if (this.M_TN_LOO.applicationno == "(auto)")
             { this.M_TN_LOO.applicationno = "null" }
        if (this.M_TN_LOO.loono == "(auto)")
             { this.M_TN_LOO.loono = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOO.applicationno,
                LOONo: this.M_TN_LOO.loono,
                LOODate: this.M_TN_LOO.loodate == '' || this.M_TN_LOO.loodate == null ? 'NULL' : this.M_TN_LOO.loodate ,
                CopyFromApplicationNo: this.M_TN_LOO.copyfromapplicationno == '' || this.M_TN_LOO.copyfromapplicationno == null ? 'NULL' : this.M_TN_LOO.copyfromapplicationno ,
                CustomerType: this.M_TN_LOO.customertype,
                ContactId: this.M_TN_LOO.contactid,
                EventNo: this.M_TN_LOO.eventno,
                CustomerCategory: this.M_TN_LOO.customercategorycd == '' || this.M_TN_LOO.customercategorycd == null ? 'NULL' : this.M_TN_LOO.customercategorycd ,
                AssessmentNo: this.M_TN_LOO.assessmentno == '' || this.M_TN_LOO.assessmentno == null ? 'NULL' : this.M_TN_LOO.assessmentno,
                ReferenceNo: this.M_TN_LOO.referenceno,
                BrandCd: this.M_TN_LOO.brandcd == '' || this.M_TN_LOO.brandcd == null ? 'NULL' : this.M_TN_LOO.brandcd ,
                BrandName: this.M_TN_LOO.brandname == '' || this.M_TN_LOO.brandname == null ? 'NULL' : this.M_TN_LOO.brandname ,
                StartDate: this.M_TN_LOO.startdate == '' || this.M_TN_LOO.startdate == null ? 'NULL' : this.M_TN_LOO.startdate ,
                EndDate: this.M_TN_LOO.enddate,
                LeasePeriod: this.M_TN_LOO.leaseperiod,
                FreeRentalPeriod: this.M_TN_LOO.freerentalperiod,
                RCD: this.M_TN_LOO.rcd == '' || this.M_TN_LOO.rcd == null ? 'NULL' : this.M_TN_LOO.rcd ,
                RED: this.M_TN_LOO.red == '' || this.M_TN_LOO.red == null ? 'NULL' : this.M_TN_LOO.red ,
                UtilitiesStartDate: this.M_TN_LOO.utilitiesstartdate == '' || this.M_TN_LOO.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOO.utilitiesstartdate ,
                UtilitiesEndDate: this.M_TN_LOO.utilitiesenddate == '' || this.M_TN_LOO.utilitiesenddate == null ? 'NULL' : this.M_TN_LOO.utilitiesenddate ,
                CurrencyCd: this.M_TN_LOO.currencycd == '' || this.M_TN_LOO.currencycd == null ? 'NULL' : this.M_TN_LOO.currencycd ,
                PeggingRate: this.M_TN_LOO.peggingrate,
                RevenueShareType: this.M_TN_LOO.revenuesharetype,
                ChargeArea: this.M_TN_LOO.chargearea,
                TelephoneLine: this.M_TN_LOO.telephoneline,
                SecurityDepositRental: this.M_TN_LOO.securitydepositrental,
                SecurityDepositSC: this.M_TN_LOO.securitydepositsc,
                RentalBase: this.M_TN_LOO.rentalbase,
                RenewalPeriod: this.M_TN_LOO.renewalperiod,
                MarketingID: this.M_TN_LOO.marketingid == '' || this.M_TN_LOO.marketingid == null ? 'NULL' : this.M_TN_LOO.marketingid ,
                AntennaStatus: this.M_TN_LOO.antennastatus,
                FitOutCommencedOn: this.M_TN_LOO.fitoutcommencedon == '' || this.M_TN_LOO.fitoutcommencedon == null ? 'NULL' : this.M_TN_LOO.fitoutcommencedon ,
                FitOutTime: this.M_TN_LOO.fitouttime,
                FitOutPIC: this.M_TN_LOO.fitoutpic,
                HandOverDate: this.M_TN_LOO.handoverdate == '' || this.M_TN_LOO.handoverdate == null ? 'NULL' : this.M_TN_LOO.handoverdate ,
                OperatingFromHour: this.M_TN_LOO.operatingfromhour,
                OperatingToHour: this.M_TN_LOO.operatingtohour,
                MediaCd: this.M_TN_LOO.mediacd == '' || this.M_TN_LOO.mediacd == null ? 'NULL' : this.M_TN_LOO.mediacd ,
                ServiceCharge: this.M_TN_LOO.servicecharge ? this.replaceAllString(this.M_TN_LOO.servicecharge,',','','number') : 0 ,
                PromotionLevy: this.M_TN_LOO.promotionlevy ? this.replaceAllString(this.M_TN_LOO.promotionlevy,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_LOO.telephonedeposit ? this.replaceAllString(this.M_TN_LOO.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.M_TN_LOO.fitoutdeposit ? this.replaceAllString(this.M_TN_LOO.fitoutdeposit,',','','number') : 0 ,
                SinkingFund: this.M_TN_LOO.sinkingfund ? this.replaceAllString(this.M_TN_LOO.sinkingfund,',','','number') : 0 ,
                Remarks: this.M_TN_LOO.remarks,
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
                ApplicationNo: this.M_TN_LOO.applicationno,
                LOONo: this.M_TN_LOO.loono,
                LOODate: this.M_TN_LOO.loodate == '' || this.M_TN_LOO.loodate == null ? 'NULL' : this.M_TN_LOO.loodate ,
                ContactId: this.M_TN_LOO.contactid,
                EventNo: this.M_TN_LOO.eventno,
                AssessmentNo: this.M_TN_LOO.assessmentno,
                ReferenceNo: this.M_TN_LOO.referenceno,
                BrandCd: this.M_TN_LOO.brandcd == '' || this.M_TN_LOO.brandcd == null ? 'NULL' : this.M_TN_LOO.brandcd ,
                BrandName: this.M_TN_LOO.brandname == '' || this.M_TN_LOO.brandname == null ? 'NULL' : this.M_TN_LOO.brandname ,
                StartDate: this.M_TN_LOO.startdate == '' || this.M_TN_LOO.startdate == null ? 'NULL' : this.M_TN_LOO.startdate ,
                EndDate: this.M_TN_LOO.enddate,
                LeasePeriod: this.M_TN_LOO.leaseperiod,
                FreeRentalPeriod: this.M_TN_LOO.freerentalperiod,
                RCD: this.M_TN_LOO.rcd == '' || this.M_TN_LOO.rcd == null ? 'NULL' : this.M_TN_LOO.rcd ,
                RED: this.M_TN_LOO.red == '' || this.M_TN_LOO.red == null ? 'NULL' : this.M_TN_LOO.red ,
                UtilitiesStartDate: this.M_TN_LOO.utilitiesstartdate == '' || this.M_TN_LOO.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOO.utilitiesstartdate ,
                UtilitiesEndDate: this.M_TN_LOO.utilitiesenddate == '' || this.M_TN_LOO.utilitiesenddate == null ? 'NULL' : this.M_TN_LOO.utilitiesenddate ,
                CurrencyCd: this.M_TN_LOO.currencycd == '' || this.M_TN_LOO.currencycd == null ? 'NULL' : this.M_TN_LOO.currencycd ,
                PeggingRate: this.M_TN_LOO.peggingrate,
                RevenueShareType: this.M_TN_LOO.revenuesharetype,
                ChargeArea: this.M_TN_LOO.chargearea,
                TelephoneLine: this.M_TN_LOO.telephoneline,
                SecurityDepositRental: this.M_TN_LOO.securitydepositrental,
                SecurityDepositSC: this.M_TN_LOO.securitydepositsc,
                RentalBase: this.M_TN_LOO.rentalbase,
                RenewalPeriod: this.M_TN_LOO.renewalperiod,
                MarketingID: this.M_TN_LOO.marketingid == '' || this.M_TN_LOO.marketingid == null ? 'NULL' : this.M_TN_LOO.marketingid ,
                AntennaStatus: this.M_TN_LOO.antennastatus,
                FitOutCommencedOn: this.M_TN_LOO.fitoutcommencedon == '' || this.M_TN_LOO.fitoutcommencedon == null ? 'NULL' : this.M_TN_LOO.fitoutcommencedon ,
                FitOutTime: this.M_TN_LOO.fitouttime,
                FitOutPIC: this.M_TN_LOO.fitoutpic,
                HandOverDate: this.M_TN_LOO.handoverdate == '' || this.M_TN_LOO.handoverdate == null ? 'NULL' : this.M_TN_LOO.handoverdate ,
                OperatingFromHour: this.M_TN_LOO.operatingfromhour,
                OperatingToHour: this.M_TN_LOO.operatingtohour,
                MediaCd: this.M_TN_LOO.mediacd == '' || this.M_TN_LOO.mediacd == null ? 'NULL' : this.M_TN_LOO.mediacd ,
                ServiceCharge: this.M_TN_LOO.servicecharge ? this.replaceAllString(this.M_TN_LOO.servicecharge,',','','number') : 0 ,
                PromotionLevy: this.M_TN_LOO.promotionlevy ? this.replaceAllString(this.M_TN_LOO.promotionlevy,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_LOO.telephonedeposit ? this.replaceAllString(this.M_TN_LOO.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.M_TN_LOO.fitoutdeposit ? this.replaceAllString(this.M_TN_LOO.fitoutdeposit,',','','number') : 0 ,
                SinkingFund: this.M_TN_LOO.sinkingfund ? this.replaceAllString(this.M_TN_LOO.sinkingfund,',','','number') : 0 ,
                Remarks: this.M_TN_LOO.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LOO.lastupdatestamp,
                CustomerCategory: this.M_TN_LOO.customercategorycd                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LOO = {
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
                customersource: '',
                chargeperiod: 'months',
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
                freerentalperiod: '0',
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                peggingrate: 'N',
                revenuesharetype: 'R',
                chargearea: 'N',
                telephoneline: '0',
                securitydepositrental: '0',
                securitydepositsc: '0',
                rentalbase: 'R',
                renewalperiod: '0',
                rentalratetype: 'unknown',
                antennastatus: 'N',
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
                servicecharge: '0',
                promotionlevy: '0',
                telephonedeposit: '0',
                fitoutdeposit: '0',
                sinkingfund: '0',
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
                customerstatus: 'unknown',
                totalrental: "0.00",
                totalarealot: ' 0.00 / 0.00 / 0.00 '
                    }
            		
		},
        M_New(){
        this.GetSpecificationData()
        
        // this.M_TN_LOO.applicationleasingrunningcd = this.dataSpec.ApplicationLeasingRunningCd
        // this.M_TN_LOO.looleasingrunningcd = this.dataSpec.LOOLeasingRunningCd

        // if (this.M_TN_LOO.applicationleasingrunningcd != null && this.M_TN_LOO.applicationleasingrunningcd != "")
        //     { this.M_TN_LOO.applicationno = "(auto)"
        //       this.PI_applicationno.cProtect = true }
        // else {
        //       this.M_TN_LOO.applicationno = ""
        //       this.PI_applicationno.cProtect = false }

        // if (this.M_TN_LOO.looleasingrunningcd != null && this.M_TN_LOO.looleasingrunningcd != "")
        //       { this.M_TN_LOO.loono = "(auto)"
        //         this.PI_loono.cProtect = true }
        // else {
        //         this.M_TN_LOO.loono = ""
        //         this.PI_loono.cProtect = false 
        //       }
        // this.M_TN_LOO.loodate = this.getToday() 
        // this.PI_loono.cProtect = false
            this.PI_loodate.cProtect = false
            this.PI_copyfromapplicationno.cProtect = false
            this.PI_contactid.cProtect = false
            this.PI_customercategorycd.cProtect = false
            this.PI_assessmentno.cProtect = false
            this.PI_referenceno.cProtect = false
            this.PI_brandcd.cProtect = false
            this.PI_leaseperiod.cProtect = false
            this.PI_freerentalperiod.cProtect = false
            this.PI_rcd.cProtect = false
            this.PI_utilitiesstartdate.cProtect = false
            this.PI_currencycd.cProtect = false
            this.PI_startdate.cProtect = false
            this.PI_telephoneline.cProtect = false
            this.PI_securitydepositrental.cProtect = false
            this.PI_securitydepositsc.cProtect = false
            this.PI_servicecharge.cProtect = false
            this.PI_promotionlevy.cProtect = false
            this.PI_telephonedeposit.cProtect = false
            this.PI_fitoutdeposit.cProtect = false
            this.PI_sinkingfund.cProtect = false
            this.PI_rentalbase.cProtect = false
            this.PI_revenuesharetype.cProtect = false
            this.PI_renewalperiod.cProtect = false
            this.PI_marketingid.cProtect = false
            this.PI_fitoutpic.cProtect = false
            this.PI_fitoutcommencedon.cProtect = false
            this.PI_handoverdate.cProtect = false
            this.PI_operatingfromhour.cProtect = false
            this.PI_mediacd.cProtect = false
            this.PI_antennastatus.cProtect = false
            this.PI_peggingrate.cProtect = false
            this.PI_chargearea.cProtect = false
            this.PTAnalysis.cProtect = false
			
        },
        M_Edit(){
          this.GetContract(this.DataRow.ApplicationNo,'M_Edit')

          if(this.IsContractEditable == 1 && this.DataRow.ContractStatus =='1'){
              this.SetLookUpBrand()
          }
        },
        M_Delete(dt){       

           var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: value.ApplicationNo,
                  LastUpdateStamp: value.LastUpdateStamp,
                  _Message_: "Application No " + value.ApplicationNo
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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)

this.M_TN_LOO = {
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
                lotclasssequenceno: this.isCurrency(data.lotclasssequenceno, this.decimal),
                lotcategorysequenceno: this.isCurrency(data.lotcategorysequenceno, this.decimal),
                startdate: data.startdate,
                enddate: data.enddate,
                leaseperiod: data.leaseperiod,
                freerentalperiod: data.freerentalperiod,
                rcd: this.momentDateFormatting(data.rcd, 'YYYY-MM-DD'),
                red: this.momentDateFormatting(data.red, 'YYYY-MM-DD'),
                utilitiesstartdate: data.utilitiesstartdate,
                utilitiesenddate: data.utilitiesenddate,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                peggingrate: data.peggingrate,
                revenuesharetype: data.revenuesharetype,
                chargearea: data.chargearea,
                telephoneline: data.telephoneline,
                securitydepositrental: data.securitydepositrental, 
                securitydepositsc: data.securitydepositsc, 
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
                rowid: this.isCurrency(data.rowid, this.decimal),
                totalrental: this.isCurrency(data.contractamt, this.decimal)
                    }
                
                switch (data.tenantstatus) {
                  case "N":
                    this.M_TN_LOO.customerstatus = "NEW"
                    break;
                  case "P":
                    this.M_TN_LOO.customerstatus = "Replacement"
                    break;
                  case "R":
                    this.M_TN_LOO.customerstatus = "Renew"
                    break;
                  default:
                    this.M_TN_LOO.customerstatus = "Unassigned"
                    break;
                }
                var pending = false

                if (data.status == 'A' || data.status == 'N') {
                  if (data.contractstatus == '1') {
                    this.M_TN_LOO.status = "Pending LOO"
                    pending = true
                    this.PI_loono.cKey = true
                    this.PI_freerentalperiod.cKey = false
                  }
                  else if (data.contractstatus == '2' || data.contractstatus == '3' || data.contractstatus == '4') {
                    this.M_TN_LOO.status = "Approved LOO"
                    pending = false
                    this.PI_freerentalperiod.cKey = true
                  }
                }
                else if (data.status == 'X') {
                  this.M_TN_LOO.status = "Terminated Agreement"
                  pending = false
                  this.PI_freerentalperiod.cKey = true
                }
                else if (data.status == 'C') {
                  this.M_TN_LOO.status = "Cancelled Agreement"
                  pending = false
                  this.PI_freerentalperiod.cKey = true
                }

                // switch (data.status) {
                //   case "A":
                //   case "N":
                //     switch (data.contractstatus) {
                //       case 1:
                //         this.M_TN_LOO.status = "Pending LOO"
                //         pending = true
                //         break;
                //       case 2:
                //       case 3:
                //       case 4:
                //         this.M_TN_LOO.status = "Approved LOO"
                //         break;                      
                //     }
                //     break;
                //   case "X":
                //     this.M_TN_LOO.status = "Terminated Agreement"
                //     break;
                //   case "C":
                //     this.M_TN_LOO.status = "Cancelled Agreement"
                //     break;                  
                // }

                if(!pending){
                  this.PI_loono.cProtect = true
                  this.PI_loodate.cProtect = true
                  this.PI_copyfromapplicationno.cProtect = true
                  this.PI_contactid.cProtect = true
                  this.PI_customercategorycd.cProtect = true
                  this.PI_assessmentno.cProtect = true
                  this.PI_referenceno.cProtect = true
                  this.PI_brandcd.cProtect = true
                  this.PI_leaseperiod.cProtect = true
                  this.PI_freerentalperiod.cProtect = true
                  this.PI_rcd.cProtect = true
                  this.PI_utilitiesstartdate.cProtect = true
                  this.PI_currencycd.cProtect = true
                  this.PI_startdate.cProtect = true
                  this.PI_telephoneline.cProtect = true
                  this.PI_securitydepositrental.cProtect = true
                  this.PI_securitydepositsc.cProtect = true
                  this.PI_servicecharge.cProtect = true
                  this.PI_promotionlevy.cProtect = true
                  this.PI_telephonedeposit.cProtect = true
                  this.PI_fitoutdeposit.cProtect = true
                  this.PI_sinkingfund.cProtect = true
                  this.PI_rentalbase.cProtect = true
                  this.PI_revenuesharetype.cProtect = true
                  this.PI_renewalperiod.cProtect = true
                  this.PI_marketingid.cProtect = true
                  this.PI_fitoutpic.cProtect = true
                  this.PI_fitoutcommencedon.cProtect = true
                  this.PI_handoverdate.cProtect = true
                  this.PI_operatingfromhour.cProtect = true
                  this.PI_mediacd.cProtect = true
                  this.PI_antennastatus.cProtect = true
                  this.PI_peggingrate.cProtect = true
                  this.PI_chargearea.cProtect = true
                  this.PTAnalysis.cProtect = true
                }
                else {
                  this.PI_loono.cProtect = false
                  this.PI_loodate.cProtect = false
                  this.PI_copyfromapplicationno.cProtect = false
                  this.PI_contactid.cProtect = false
                  this.PI_customercategorycd.cProtect = false
                  this.PI_assessmentno.cProtect = false
                  this.PI_referenceno.cProtect = false
                  this.PI_brandcd.cProtect = false
                  this.PI_leaseperiod.cProtect = false
                  this.PI_freerentalperiod.cProtect = false
                  this.PI_rcd.cProtect = false
                  this.PI_utilitiesstartdate.cProtect = false
                  this.PI_currencycd.cProtect = false
                  this.PI_startdate.cProtect = false
                  this.PI_telephoneline.cProtect = false
                  this.PI_securitydepositrental.cProtect = false
                  this.PI_securitydepositsc.cProtect = false
                  this.PI_servicecharge.cProtect = false
                  this.PI_promotionlevy.cProtect = false
                  this.PI_telephonedeposit.cProtect = false
                  this.PI_fitoutdeposit.cProtect = false
                  this.PI_sinkingfund.cProtect = false
                  this.PI_rentalbase.cProtect = false
                  this.PI_revenuesharetype.cProtect = false
                  this.PI_renewalperiod.cProtect = false
                  this.PI_marketingid.cProtect = false
                  this.PI_fitoutpic.cProtect = false
                  this.PI_fitoutcommencedon.cProtect = false
                  this.PI_handoverdate.cProtect = false
                  this.PI_operatingfromhour.cProtect = false
                  this.PI_mediacd.cProtect = false
                  this.PI_antennastatus.cProtect = false
                  this.PI_peggingrate.cProtect = false
                  this.PI_chargearea.cProtect = false
                  this.PTAnalysis.cProtect = false
                }

                switch (data.chargeperiod) {
                  case "M":
                    this.M_TN_LOO.chargeperiod = "months"
                    break;
                  case "D":
                    this.M_TN_LOO.chargeperiod = "days"
                    break;
                  case "Y":
                    this.M_TN_LOO.chargeperiod = "years"
                    break;
                }

                if(data.antennastatus == ''){
                  this.M_TN_LOO.antennastatus = "N"
                } else {
                  this.M_TN_LOO.antennastatus = data.antennastatus
                }

                this.M_TN_LOO.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) +' / '+ this.isCurrency(data.totalsemigrossarea, this.decimal) +' / '+ this.isCurrency(data.totalnetarea, this.decimal)

                switch (data.rentalratetype) {
                  case "F":
                    this.M_TN_LOO.rentalratetype = "Flat"
                    break;
                  case "S":
                    this.M_TN_LOO.rentalratetype = "Step Up"
                    break;
                  default:
                    this.M_TN_LOO.rentalratetype = "Unassigned"
                    break;
                }

                this.M_TN_LOO.copyfromapplicationnoLabel = this.M_TN_LOO.copyfromapplicationno != null && this.M_TN_LOO.copyfromapplicationno != '' ? data.copyfromapplicationno + this.separator + data.loono :'' 
                this.M_TN_LOO.contactidLabel = this.M_TN_LOO.contactid != null && this.M_TN_LOO.contactid != '' ? data.contactid + this.separator + data.customername  :'' 
                this.M_TN_LOO.customercategorycdLabel = this.M_TN_LOO.customercategorycd != null && this.M_TN_LOO.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs  :'' 
                this.M_TN_LOO.assessmentnoLabel = this.M_TN_LOO.assessmentno != null && this.M_TN_LOO.assessmentno != '' ? data.assessmentno  :'' 
                this.M_TN_LOO.brandcdLabel = this.M_TN_LOO.brandcd != null && this.M_TN_LOO.brandcd != '' ? data.brandcd + this.separator + data.brandname :'' 
                this.M_TN_LOO.marketingidLabel = this.M_TN_LOO.marketingid != null && this.M_TN_LOO.marketingid != '' ? data.marketingid + this.separator + data.marketingname :'' 
                this.M_TN_LOO.mediacdLabel = this.M_TN_LOO.mediacd != null && this.M_TN_LOO.mediacd != '' ? data.mediacd + this.separator + data.mediadescs :'' 
                this.M_TN_LOO.currencycdLabel = this.M_TN_LOO.currencycd != null && this.M_TN_LOO.currencycd != '' ? data.currencycd + this.separator + data.currencydescs  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                this.$forceUpdate()
            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_LOO.startdate = data
            //add one month
            var a = this.momentDateFormatting(data, 'YYYY-MM-DD')
            var b = this.momentDateFormatting(this.M_TN_LOO.enddate, 'YYYY-MM-DD')
            // var startDate = this.dateAdd2('d', a, -1)
            // console.log(startDate);
            this.PI_rcd.cValidate = 'required|date_format:YYYY-MM-DD|min_date:' + a + '|max_date:' + b
            this.PI_rcd.cValidateTo = 'required|date_format:YYYY-MM-DD|max_date:' + b
            // var b = this.momentDateFormatting(this.M_TN_LOO.startdate, 'YYYYMMDD')
            // var c = this.momentDateFormatting(this.M_TN_LOO.enddate, 'YYYYMMDD')

            // console.log(parseInt(a))
            // console.log(parseInt(a))
            // if(parseInt(a) <= parseInt(b)){
            //   this.PI_rcd.cValidate = 'RCD could not be less than Lease Start Date')
            // }
            // if(parseInt(a) >= parseInt(c)){
            //   this.PI_rcd.cValidate = 'RCD could not be less more Lease Start Date')
            // }

            
            // if (data && data != '') {
            //   var endDate = this.momentDateFormatting(data, 'YYYY-MM-DD')
            //   var startDate = this.momentDateFormatting(data, 'YYYY-MM-DD')
            //   if (this.M_TN_LOO.enddate && this.M_TN_LOO.enddate != '') {
            //     endDate = this.momentDateFormatting(this.M_TN_LOO.enddate, 'YYYY-MM-DD')
            //   }

            //   this.PI_rcd.cValidate = 'required|date_format:YYYY-MM-DD|date_between:' + startDate + ',' + endDate
            // }
            // else {
            //   this.PI_rcd.cValidate = 'required'
            // }
        
            this.M_TN_LOO.utilitiesstartdate = this.dateAdd2('M',data,1)
        }
        ,MdtRange_enddate (data) {
            this.M_TN_LOO.enddate = data

            var a = this.momentDateFormatting(this.M_TN_LOO.startdate, 'YYYY-MM-DD')
            var b = this.momentDateFormatting(data, 'YYYY-MM-DD')

            this.PI_rcd.cValidate = 'required|date_format:YYYY-MM-DD|min_date:' + a + '|max_date:' + b
            this.PI_rcd.cValidateTo = 'required|date_format:YYYY-MM-DD|max_date:' + b

            // if (data && data != '') {
            //   if (this.M_TN_LOO.startdate && this.M_TN_LOO.startdate != '') {
            //     var startDate = this.momentDateFormatting(this.M_TN_LOO.startdate, 'YYYY-MM-DD')
            //     var endDate = this.momentDateFormatting(data, 'YYYY-MM-DD')
            //     this.PI_rcd.cValidate = 'required|date_format:YYYY-MM-DD|date_between:' + startDate + ',' + endDate
            //   }
            // }
            // else {
            //   this.PI_rcd.cValidate = 'required'
            // }

            this.M_TN_LOO.utilitiesenddate = this.dateAdd2('M',data,1)
        }
        ,BlurRange_startdate(data) {
          
        }
        ,BlurRange_enddate (data) {
            // this.M_TN_LOO.enddate = data
        }
        ,MdtRange_rcd (data) {
          if (this.inputStatus != "VIEW") {
            this.M_TN_LOO.rcd = data
            
            

            if (this.M_TN_LOO.leaseperiod && this.M_TN_LOO.leaseperiod != '' &&( data && data != '')) {
              this.M_TN_LOO.red = this.dateAdd2('d', this.dateAdd2('m', data, this.M_TN_LOO.leaseperiod), -1)
              // console.log(this.M_TN_LOO.rcd, this.M_TN_LOO.red)
            }

            this.SetLookUpBrand()
            this.GetLeasingPolicyDefault()
            this.GetLeasePeriode()
            }
          // kena onchange 
            
        }
        ,MdtRange_red (data) {
          if (this.inputStatus != "VIEW") {
            this.M_TN_LOO.red = data
            if (this.statusOnChange !== 1) {
              this.GetLeasePeriode()
              this.statusOnChange = 2
            }
            else {
              this.statusOnChange = 0
            }
          }
        }
        ,BlurRange_rcd (data) {
          // kena onchange 

            // this.M_TN_LOO.rcd = data
        }
        ,BlurRange_red (data) {
            // this.M_TN_LOO.red = data
        }
        ,MdtRange_utilitiesstartdate (data) {
            this.M_TN_LOO.utilitiesstartdate = data
        }
        ,MdtRange_utilitiesenddate (data) {
            this.M_TN_LOO.utilitiesenddate = data
        }
        ,MdtRange_operatingfromhour (data){
            this.M_TN_LOO.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
            this.M_TN_LOO.operatingtohour = data
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
      // this.GetSpecificationData()
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

