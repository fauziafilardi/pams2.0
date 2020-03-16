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
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_LOI.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_loino" v-model="M_TN_LOI.loino"  ref="ref_loino"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex :prop="PI_loidate" v-model="M_TN_LOI.loidate"  ref="ref_loidate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_LOI.loono"  ref="ref_loono"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_LOI.loodate"  ref="ref_loodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncopyfromapplicationnoChange" :prop="PI_copyfromapplicationno" :value="M_TN_LOI.copyfromapplicationno" :label="M_TN_LOI.copyfromapplicationnoLabel" ref="ref_copyfromapplicationno"/>
                                      </b-col>                              
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_LOI.contactid" :label="M_TN_LOI.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LOI.customercategorycd" :label="M_TN_LOI.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_customerstatus" v-model="M_TN_LOI.customerstatus"  ref="ref_customerstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnassessmentnoChange" :prop="PI_assessmentno" :value="M_TN_LOI.assessmentno" :label="M_TN_LOI.assessmentnoLabel" ref="ref_assessmentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_LOI.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_LOI.brandcd" :label="M_TN_LOI.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_theme" v-model="M_TN_LOI.theme"  ref="ref_theme" />
                                      </b-col>                              
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_class" v-model="M_TN_LOI.class"  ref="ref_class" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_category" v-model="M_TN_LOI.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_LOI.startdate" :valueTo="M_TN_LOI.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="M_TN_LOI.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            {{M_TN_LOI.chargeperiod}} and {{M_TN_LOI.perioddays}} days . Free 
                                          </b-col>  
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_freerentalperiod" v-model="M_TN_LOI.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LOI.rcd" :valueTo="M_TN_LOI.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_LOI.utilitiesstartdate" :valueTo="M_TN_LOI.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOI.currencycd" :label="M_TN_LOI.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_totalrental" v-model="M_TN_LOI.totalrental"  ref="ref_totalrental" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnantennastatusChange" :prop="PI_antennastatus" v-model="M_TN_LOI.antennastatus"  ref="ref_antennastatus" />
                                      </b-col>   
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnpeggingrateChange" :prop="PI_peggingrate" v-model="M_TN_LOI.peggingrate"  ref="ref_peggingrate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>                                      
                                      <b-col  md="12">
                                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_LOI.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_totalarealot" v-model="M_TN_LOI.totalarealot"  ref="ref_totalarealot" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_baserentalrate" v-model="M_TN_LOI.baserentalrate"  ref="ref_baserentalrate" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right">
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSCompute :prop="PI_status" v-model="M_TN_LOI.status"  ref="ref_status" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_LOI.telephoneline"  ref="ref_telephoneline"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="M_TN_LOI.securitydepositrental"  ref="ref_securitydepositrental"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="M_TN_LOI.securitydepositsc"  ref="ref_securitydepositsc"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_TN_LOI.servicecharge"  ref="ref_servicecharge"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>                              
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_LOI.promotionlevy"  ref="ref_promotionlevy"/>
                                    </b-col>        
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LOI.telephonedeposit"  ref="ref_telephonedeposit"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_TN_LOI.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_TN_LOI.sinkingfund"  ref="ref_sinkingfund"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnrentalbaseChange" :prop="PI_rentalbase" v-model="M_TN_LOI.rentalbase"  ref="ref_rentalbase" />
                                    </b-col>
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="M_TN_LOI.revenuesharetype"  ref="ref_revenuesharetype" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_renewalperiod" v-model="M_TN_LOI.renewalperiod"  ref="ref_renewalperiod"/>
                                    </b-col>        
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_rentalratetype" v-model="M_TN_LOI.rentalratetype"  ref="ref_rentalratetype" />
                                    </b-col>
                                  </b-row>
                                  <b-row>                                      
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_LOI.marketingid" :label="M_TN_LOI.marketingidLabel" ref="ref_marketingid"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_fitoutpic" v-model="M_TN_LOI.fitoutpic"  ref="ref_fitoutpic"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateVuex @input="OnfitoutcommencedonChange" :prop="PI_fitoutcommencedon" v-model="M_TN_LOI.fitoutcommencedon"  ref="ref_fitoutcommencedon" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="M_TN_LOI.handoverdate"  ref="ref_handoverdate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>  
                                    <b-col  md="12">                                        
                                      <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_LOI.operatingfromhour" :valueTo="M_TN_LOI.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnsolicitoridChange" :prop="PI_solicitorid" :value="M_TN_LOI.solicitorid" :label="M_TN_LOI.solicitoridLabel" ref="ref_solicitorid"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OnmediacdChange" :prop="PI_mediacd" :value="M_TN_LOI.mediacd" :label="M_TN_LOI.mediacdLabel" ref="ref_mediacd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>                                  
                                    <b-col  md="12">
                                      <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOI.remarks"  ref="ref_remarks" />
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
                initialWhere: "CustomerType = 'L' AND ContractStatus IN ('2','3','4') AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_LOI :{
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
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loino: { 
                cValidate :'', 
                cName: 'loino', 
                cLabel: 'LOI No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_loidate: { 
                cValidate :'', 
                cName: 'loidate', 
                cLabel: 'LOI Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_securitydepositrental: { 
                cValidate :'', 
                cName: 'securitydepositrental', 
                cLabel: 'Security Deposit Rental', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_securitydepositsc: { 
                cValidate :'', 
                cName: 'securitydepositsc', 
                cLabel: 'Security Deposit SC', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
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
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: "HoldReleaseStatus IS NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'contactid', 
                cLabel: 'Customer ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
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
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
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
                cOrder: 0, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
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
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
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
                cProtect: true, 
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
                cOrder: 0, 
                cProtect: true, 
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
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'brandcd', 
                cLabel: 'Brand Name', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder: 0, 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_class: {                 
                cValidate :'', 
                cName: 'class', 
                cLabel: 'Class', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder: 0, 
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
                cOrder: 0, 
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
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fitoutpic: { 
                cValidate :'', 
                cName: 'fitoutpic', 
                cLabel: 'Fit Out PIC', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leaseperiod: { 
                cValidate :'', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
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
                // cProtect: true, 
                // cPageLevel: this.PageLevel, 
                // cTabIndex: this.TabIndex, 
                // cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fitoutcommencedon: { 
                cValidate :'', 
                cName: 'fitoutcommencedon', 
                cLabel: 'Fit Out Comm. Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargeperiod: { 
                cLabel: 'Charge Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_handoverdate: { 
                cValidate :'', 
                cName: 'handoverdate', 
                cLabel: 'Hand Over Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
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
                cOrder: 0, 
                cKey: false,                 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 

            }, 
            PI_freerentalperiod: { 
                cValidate :'', 
                cName: 'freerentalperiod', 
                cLabel: 'Free', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
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
            //     cProtect: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_rcd: { 
                cValidate :'required', 
                cName: 'rcd', 
                cLabel: 'RCD - RED ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
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
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'TN/TN_Media' ,
                cDisplayColumn: 'MediaCd,Descs' ,
            }, 
            PI_utilitiesstartdate: { 
                cValidate :'required', 
                cName: 'utilitiesstartdate', 
                cLabel: 'Utilities Start - End Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
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
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
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
            PI_solicitorid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNSolicitor'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'solicitorid', 
                cLabel: 'Solicitor ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'ContactID,Name' ,
            }, 
            PI_totalrental: {                 
                cValidate :'', 
                cName: 'totalrental', 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder: 0, 
                cProtect: true, 
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
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
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
                cOrder: 0, 
                cProtect: true, 
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
                cOrder: 0, 
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
                cOrder: 0, 
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
        // GetStatus(Status){
        //   switch (data.status) {
        //     case "A":
        //     case "N":
        //       switch (data.contractstatus) {
        //         case 2, 3, 4:
        //           this.M_TN_LOI.status = "Approved LOI"
        //           break;                      
        //         case 1:
        //           this.M_TN_LOI.status = "Pending LOI"
        //           this.PI_loono.cProtect = true
        //           this.PI_loodate.cProtect = true
        //           break;
        //       }
        //       break;
        //     case "X":
        //       this.M_TN_LOI.status = "Terminated Agreement"
        //       break;
        //     case "C":
        //       this.M_TN_LOI.status = "Cancelled Agreement"
        //       break;                  
        //   }
        // },
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
                 
                this.M_TN_LOI.applicationleasingrunningcd = data.ApplicationLeasingRunningCd
                this.M_TN_LOI.looleasingrunningcd = data.LOOLeasingRunningCd

                if (this.M_TN_LOI.applicationleasingrunningcd != null && this.M_TN_LOI.applicationleasingrunningcd != "")
                    { this.M_TN_LOI.applicationno = "(auto)"
                    this.PI_applicationno.cProtect = true }
                else {
                    this.M_TN_LOI.applicationno = ""
                    this.PI_applicationno.cProtect = false }

                if (this.M_TN_LOI.looleasingrunningcd != null && this.M_TN_LOI.looleasingrunningcd != "")
                    { this.M_TN_LOI.loono = "(auto)"
                    this.PI_loono.cProtect = true }
                else {
                    this.M_TN_LOI.loono = ""
                    this.PI_loono.cProtect = false }
                this.M_TN_LOI.loodate = this.getToday()  
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

        GetContract(ApplicationNo){
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
              // console.log(data);
              
                if((data.Status !='C' || data.Status!='X' && data.DeviationApprovalNo =='' || data.DeviationApprovalNo == null)){                      
                  if( this.DataRow.ContractStatus == '2'){
                     this.PI_loino.cProtect = false //false
                      this.PI_loidate.cProtect = false
                      this.PI_solicitorid.cProtect = false  
                  }else{
                      this.PI_loino.cProtect = true //true
                      this.PI_loidate.cProtect = true
                      this.PI_solicitorid.cProtect = true
                  }
                }else{
                      this.PI_loino.cProtect = true //true
                      this.PI_loidate.cProtect = true
                      this.PI_solicitorid.cProtect = true
                                         

                }

              
              

            })
        },
        SetLookUpBrand(ContactId){
          // console.log(ContactId)
          if(ContactId != null || ContactId != ''){
            this.PI_brandcd.dataLookUp.InitialWhere = "BrandOwnerId='"+ ContactId +"'"
          }
        },
        OnsolicitoridChange (data){
          this.$nextTick(() => {
            this.M_TN_LOI.solicitorid = data.id
            this.M_TN_LOI.solicitoridLabel = data.label                      
            if (this.inputStatus != "VIEW") {
              
            }
        })
        this.$forceUpdate()
        },
        OncopyfromapplicationnoChange (data) {          
        this.$nextTick(() => {
            this.M_TN_LOI.copyfromapplicationno = data.id
            this.M_TN_LOI.copyfromapplicationnoLabel = data.label
                    
            if (this.inputStatus != "VIEW") {
              this.GetContract(data.id)      
            }
        })
        this.$forceUpdate()
        },
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOI.contactid = data.id
            this.M_TN_LOI.contactidLabel = data.label

            this.PI_assessmentno.dataLookUp.InitialWhere = "SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"' AND ContactID='"+ data.id +"'"

            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOI.customercategorycd = data.id
            this.M_TN_LOI.customercategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{customercategorycd}
            }
        })
        this.$forceUpdate()
        },
        OnassessmentnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LOI.assessmentno = data.id
            this.M_TN_LOI.assessmentnoLabel = data.label
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
            this.M_TN_LOI.brandcd = data.id
            this.M_TN_LOI.brandcdLabel = data.label

            this.PI_marketingid.dataLookUp.InitialWhere = "BrandCd='"+data.id+"'"
            if (this.inputStatus != "VIEW") {

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
            this.M_TN_LOI.marketingid = data.id
            this.M_TN_LOI.marketingidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketingid}
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
            this.M_TN_LOI.mediacd = data.id
            this.M_TN_LOI.mediacdLabel = data.label
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
            this.M_TN_LOI.currencycd = data.id
            this.M_TN_LOI.currencycdLabel = data.label
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
        if (this.M_TN_LOI.applicationno == "(auto)")
             { this.M_TN_LOI.applicationno = "null" }
        if (this.M_TN_LOI.loono == "(auto)")
             { this.M_TN_LOI.loono = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOI.applicationno,
                LOONo: this.M_TN_LOI.loono,
                LOODate: this.M_TN_LOI.loodate == '' || this.M_TN_LOI.loodate == null ? 'NULL' : this.M_TN_LOI.loodate ,
                CopyFromApplicationNo: this.M_TN_LOI.copyfromapplicationno == '' || this.M_TN_LOI.copyfromapplicationno == null ? 'NULL' : this.M_TN_LOI.copyfromapplicationno ,
                CustomerType: this.M_TN_LOI.customertype,
                ContactId: this.M_TN_LOI.contactid,
                EventNo: this.M_TN_LOI.eventno,
                CustomerCategory: this.M_TN_LOI.customercategorycd == '' || this.M_TN_LOI.customercategorycd == null ? 'NULL' : this.M_TN_LOI.customercategorycd ,
                AssessmentNo: this.M_TN_LOI.assessmentno,
                ReferenceNo: this.M_TN_LOI.referenceno,
                BrandCd: this.M_TN_LOI.brandcd == '' || this.M_TN_LOI.brandcd == null ? 'NULL' : this.M_TN_LOI.brandcd ,
                BrandName: this.M_TN_LOI.brandname,
                StartDate: this.M_TN_LOI.startdate == '' || this.M_TN_LOI.startdate == null ? 'NULL' : this.M_TN_LOI.startdate ,
                EndDate: this.M_TN_LOI.enddate,
                LeasePeriod: this.M_TN_LOI.leaseperiod,
                FreeRentalPeriod: this.M_TN_LOI.freerentalperiod,
                RCD: this.M_TN_LOI.rcd == '' || this.M_TN_LOI.rcd == null ? 'NULL' : this.M_TN_LOI.rcd ,
                RED: this.M_TN_LOI.red == '' || this.M_TN_LOI.red == null ? 'NULL' : this.M_TN_LOI.red ,
                UtilitiesStartDate: this.M_TN_LOI.utilitiesstartdate == '' || this.M_TN_LOI.utilitiesstartdate == null ? 'NULL' : this.M_TN_LOI.utilitiesstartdate ,
                UtilitiesEndDate: this.M_TN_LOI.utilitiesenddate == '' || this.M_TN_LOI.utilitiesenddate == null ? 'NULL' : this.M_TN_LOI.utilitiesenddate ,
                CurrencyCd: this.M_TN_LOI.currencycd == '' || this.M_TN_LOI.currencycd == null ? 'NULL' : this.M_TN_LOI.currencycd ,
                PeggingRate: this.M_TN_LOI.peggingrate,
                RevenueShareType: this.M_TN_LOI.revenuesharetype,
                ChargeArea: this.M_TN_LOI.chargearea,
                TelephoneLine: this.M_TN_LOI.telephoneline,
                SecurityDepositRental: this.M_TN_LOI.securitydepositrental,
                SecurityDepositSC: this.M_TN_LOI.securitydepositsc,
                RentalBase: this.M_TN_LOI.rentalbase,
                RenewalPeriod: this.M_TN_LOI.renewalperiod,
                MarketingID: this.M_TN_LOI.marketingid == '' || this.M_TN_LOI.marketingid == null ? 'NULL' : this.M_TN_LOI.marketingid ,
                AntennaStatus: this.M_TN_LOI.antennastatus,
                FitOutCommencedOn: this.M_TN_LOI.fitoutcommencedon == '' || this.M_TN_LOI.fitoutcommencedon == null ? 'NULL' : this.M_TN_LOI.fitoutcommencedon ,
                FitOutTime: this.M_TN_LOI.fitouttime,
                FitOutPIC: this.M_TN_LOI.fitoutpic,
                HandOverDate: this.M_TN_LOI.handoverdate == '' || this.M_TN_LOI.handoverdate == null ? 'NULL' : this.M_TN_LOI.handoverdate ,
                OperatingFromHour: this.M_TN_LOI.operatingfromhour,
                OperatingToHour: this.M_TN_LOI.operatingtohour,
                MediaCd: this.M_TN_LOI.mediacd == '' || this.M_TN_LOI.mediacd == null ? 'NULL' : this.M_TN_LOI.mediacd ,
                ServiceCharge: this.M_TN_LOI.servicecharge ? this.replaceAllString(this.M_TN_LOI.servicecharge,',','','number') : 0 ,
                PromotionLevy: this.M_TN_LOI.promotionlevy ? this.replaceAllString(this.M_TN_LOI.promotionlevy,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_LOI.telephonedeposit ? this.replaceAllString(this.M_TN_LOI.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.M_TN_LOI.fitoutdeposit ? this.replaceAllString(this.M_TN_LOI.fitoutdeposit,',','','number') : 0 ,
                SinkingFund: this.M_TN_LOI.sinkingfund ? this.replaceAllString(this.M_TN_LOI.sinkingfund,',','','number') : 0 ,
                Remarks: this.M_TN_LOI.remarks,
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
                ApplicationNo: this.M_TN_LOI.applicationno,
                LOINo: this.M_TN_LOI.loino,
                LOIDate: this.M_TN_LOI.loidate == '' || this.M_TN_LOI.loidate == null ? 'NULL' : this.M_TN_LOI.loidate ,
                Remarks: this.M_TN_LOI.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LOI.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LOI = {
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
        // if (this.M_TN_LOI.applicationleasingrunningcd != null && this.M_TN_LOI.applicationleasingrunningcd != "")
        //      { this.M_TN_LOI.applicationno = "(auto)"
        //      this.PI_applicationno.cProtect = true }
        // else {
        //      this.M_TN_LOI.applicationno = ""
        //      this.PI_applicationno.cProtect = false }

        // if (this.M_TN_LOI.LOOLeasingRunningCd != null && this.M_TN_LOI.LOOLeasingRunningCd != "")
        //      { this.M_TN_LOI.loono = "(auto)"
        //      this.PI_loono.cProtect = true }
        // else {
        //      this.M_TN_LOI.loono = ""
        //      this.PI_loono.cProtect = false }
			
        },
        M_Edit(){                               
            
            this.PTAnalysis.cProtect = true
         
        },
        M_Delete(dt){       

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
				


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
this.M_TN_LOI = {
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
                // status: data.status,
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
                leaseperiod: this.isCurrency(data.leaseperiod, this.decimal),
                freerentalperiod: this.isCurrency(data.freerentalperiod, this.decimal),
                rcd: data.rcd,
                red: data.red,
                utilitiesstartdate: data.utilitiesstartdate,
                utilitiesenddate: data.utilitiesenddate,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                peggingrate: data.peggingrate,
                revenuesharetype: data.revenuesharetype,
                chargearea: data.chargearea,
                telephoneline: this.isCurrency(data.telephoneline, this.decimal),
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
                rowid: this.isCurrency(data.rowid, this.decimal),
                totalrental: this.isCurrency(data.contractamt, this.decimal)
                    }
                
                switch (data.tenantstatus) {
                  case "N":
                    this.M_TN_LOI.customerstatus = "NEW"
                    break;
                  case "P":
                    this.M_TN_LOI.customerstatus = "Replacement"
                    break;
                  case "R":
                    this.M_TN_LOI.customerstatus = "Renew"
                    break;
                  default:
                    this.M_TN_LOI.customerstatus = "Unassigned"
                    break;
                }

                var pending = false

                if (data.status == 'A' || data.status == 'N') {
                  if (data.contractstatus == '2') {
                    this.M_TN_LOI.status = "Pending LOI"
                    pending = true
                    this.PI_loono.cKey = true
                  }
                  else if (data.contractstatus == '3' || data.contractstatus == '4') {
                    this.M_TN_LOI.status = "Approved LOI"
                    pending = false
                  }
                }
                else if (data.status == 'X') {
                  this.M_TN_LOI.status = "Terminated Agreement"
                  pending = false
                }
                else if (data.status == 'C') {
                  this.M_TN_LOI.status = "Cancelled Agreement"
                  pending = false
                }


                switch (data.chargeperiod) {
                  case "M":
                    this.M_TN_LOI.chargeperiod = "months"
                    break;
                  case "D":
                    this.M_TN_LOI.chargeperiod = "days"
                    break;
                  case "Y":
                    this.M_TN_LOI.chargeperiod = "years"
                    break;
                }

                // if(data.contractstatus == 'X' ){
                //   this.PI_loino.cKey = true
                // }
                // else{
                //   this.PI_loino.cKey = true
                // }
                // console.log(pending);
                if(!pending){
                  this.PI_loino.cProtect = true
                  this.PI_loidate.cProtect = true
                  this.PI_remarks.cProtect = true
                  this.PI_solicitorid.cProtect = true
                }
                else {
                  this.PI_loino.cProtect = false
                  this.PI_loidate.cProtect = false
                  this.PI_remarks.cProtect = false
                  this.PI_solicitorid.cProtect = false
                }

                if(data.antennastatus == ''){
                  this.M_TN_LOI.antennastatus = "N"
                } else {
                  this.M_TN_LOI.antennastatus = data.antennastatus
                }

                 if (
                    (data.status != 'A' && data.contractstatus != 2) ||
                    (data.status != 'N' && data.contractstatus != 2) ||
                    (data.status == 'C') ||
                    (data.status == 'X')
                ) {
                    this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }
                else {
                    this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                }

                this.M_TN_LOI.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) +' / '+ this.isCurrency(data.totalsemigrossarea, this.decimal) +' / '+ this.isCurrency(data.totalnetarea, this.decimal)

                switch (data.rentalratetype) {
                  case "F":
                    this.M_TN_LOI.rentalratetype = "Flat"
                    break;
                  case "S":
                    this.M_TN_LOI.rentalratetype = "Step Up"
                    break;
                  default:
                    this.M_TN_LOI.rentalratetype = "Unassigned"
                    break;
                }

                this.M_TN_LOI.copyfromapplicationnoLabel = this.M_TN_LOI.copyfromapplicationno != null && this.M_TN_LOI.copyfromapplicationno != '' ? data.copyfromapplicationno + this.separator + data.loono :'' 
                this.M_TN_LOI.contactidLabel = this.M_TN_LOI.contactid != null && this.M_TN_LOI.contactid != '' ? data.contactid + this.separator + data.customername  :'' 
                this.M_TN_LOI.customercategorycdLabel = this.M_TN_LOI.customercategorycd != null && this.M_TN_LOI.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs  :'' 
                this.M_TN_LOI.assessmentnoLabel = this.M_TN_LOI.assessmentno != null && this.M_TN_LOI.assessmentno != '' ? data.assessmentno  :'' 
                this.M_TN_LOI.brandcdLabel = this.M_TN_LOI.brandcd != null && this.M_TN_LOI.brandcd != '' ? data.brandcd + this.separator + data.brandname :'' 
                this.M_TN_LOI.marketingidLabel = this.M_TN_LOI.marketingid != null && this.M_TN_LOI.marketingid != '' ? data.marketingid + this.separator + data.marketingname :'' 
                this.M_TN_LOI.mediacdLabel = this.M_TN_LOI.mediacd != null && this.M_TN_LOI.mediacd != '' ? data.mediacd + this.separator + data.mediadescs :'' 
                this.M_TN_LOI.currencycdLabel = this.M_TN_LOI.currencycd != null && this.M_TN_LOI.currencycd != '' ? data.currencycd + this.separator + data.currencydescs  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                this.GetContract(data.applicationno)
                this.$nextTick(() => {
                  this.$forceUpdate()
                })
                

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_LOI.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_LOI.enddate = data
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LOI.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_LOI.red = data
        }
        ,MdtRange_utilitiesstartdate (data) {
            this.M_TN_LOI.utilitiesstartdate = data
        }
        ,MdtRange_utilitiesenddate (data) {
            this.M_TN_LOI.utilitiesenddate = data
        }
        ,MdtRange_operatingfromhour (data){
            this.M_TN_LOI.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
            this.M_TN_LOI.operatingtohour = data
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
        // [GetSpecification].then(FnOpt9 => { if (FnOpt9 != null) { 
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

