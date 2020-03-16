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
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="TN_LA.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_lano" v-model="TN_LA.lano"  ref="ref_lano"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnladateChange" :prop="PI_ladate" v-model="TN_LA.ladate"  ref="ref_ladate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_loino" v-model="TN_LA.loino"  ref="ref_loino"/>
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnloidateChange" :prop="PI_loidate" v-model="TN_LA.loidate"  ref="ref_loidate" />
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_loono" v-model="TN_LA.loono"  ref="ref_loono"/>
                                      </b-col>                                      
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="TN_LA.loodate"  ref="ref_loodate" />
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncopyfromapplicationnoChange" :prop="PI_copyfromapplicationno" :value="TN_LA.copyfromapplicationno" :label="TN_LA.copyfromapplicationnoLabel" ref="ref_copyfromapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="TN_LA.contactid" :label="TN_LA.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="TN_LA.customercategorycd" :label="TN_LA.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_customerstatus" v-model="TN_LA.customerstatus"  ref="ref_customerstatus" />
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <!-- <b-col md="12">
                                        <ABSInputSelectList @change="OnassessmentnoChange" :prop="PI_assessmentno" :value="TN_LA.assessmentno" :label="TN_LA.assessmentnoLabel" ref="ref_assessmentno"/>
                                      </b-col> -->
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="TN_LA.referenceno"  ref="ref_referenceno"/>
                                      </b-col>                               
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="TN_LA.brandcd" :label="TN_LA.brandcdLabel" ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_theme" v-model="TN_LA.theme"  ref="ref_theme" />
                                      </b-col>  
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_class" v-model="TN_LA.class"  ref="ref_class" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_category" v-model="TN_LA.category"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="TN_LA.startdate" :valueTo="TN_LA.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <!-- <ABSinputTextVuex :prop="PI_leaseperiod" v-model="TN_LA.leaseperiod"  ref="ref_leaseperiod"/> -->
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="TN_LA.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            {{TN_LA.chargeperiod}} and {{TN_LA.perioddays}} days . Free 
                                          </b-col>  
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_freerentalperiod" v-model="TN_LA.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="TN_LA.rcd" :valueTo="TN_LA.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="TN_LA.currencycd" :label="TN_LA.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="TN_LA.utilitiesstartdate" :valueTo="TN_LA.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                                      </b-col>     
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_totalrental" v-model="TN_LA.totalrental"  ref="ref_totalrental" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnantennastatusChange" :prop="PI_antennastatus" v-model="TN_LA.antennastatus"  ref="ref_antennastatus" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnpeggingrateChange" :prop="PI_peggingrate" v-model="TN_LA.peggingrate"  ref="ref_peggingrate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="TN_LA.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_totalarealot" v-model="TN_LA.totalarealot"  ref="ref_totalarealot" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_baserentalrate" v-model="TN_LA.baserentalrate"  ref="ref_baserentalrate" />
                                      </b-col>
                                    </b-row>
                                  </b-col> <!-- table close -->
                                  <b-col md="6" id="col-right">  
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_status" v-model="TN_LA.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_telephoneline" v-model="TN_LA.telephoneline"  ref="ref_telephoneline"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="TN_LA.securitydepositrental"  ref="ref_securitydepositrental"/>
                                      </b-col>
                                    </b-row>                               
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="TN_LA.securitydepositsc"  ref="ref_securitydepositsc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_servicecharge" v-model="TN_LA.servicecharge"  ref="ref_servicecharge"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_promotionlevy" v-model="TN_LA.promotionlevy"  ref="ref_promotionlevy"/>
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="TN_LA.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="TN_LA.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_sinkingfund" v-model="TN_LA.sinkingfund"  ref="ref_sinkingfund"/>
                                      </b-col>
                                    </b-row>                        
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnrentalbaseChange" :prop="PI_rentalbase" v-model="TN_LA.rentalbase"  ref="ref_rentalbase" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="TN_LA.revenuesharetype"  ref="ref_revenuesharetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_renewalperiod" v-model="TN_LA.renewalperiod"  ref="ref_renewalperiod"/>
                                      </b-col>       
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_rentalratetype" v-model="TN_LA.rentalratetype"  ref="ref_rentalratetype" />
                                      </b-col>      
                                    </b-row>
                                    <b-row>                            
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="TN_LA.marketingid" :label="TN_LA.marketingidLabel" ref="ref_marketingid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_fitoutpic" v-model="TN_LA.fitoutpic"  ref="ref_fitoutpic"/>
                                      </b-col>  
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnfitoutcommencedonChange" :prop="PI_fitoutcommencedon" v-model="TN_LA.fitoutcommencedon"  ref="ref_fitoutcommencedon" />
                                      </b-col>  
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="TN_LA.handoverdate"  ref="ref_handoverdate" />
                                      </b-col>  
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">                                        
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="TN_LA.operatingfromhour" :valueTo="TN_LA.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnsolicitoridChange" :prop="PI_solicitorid" :value="TN_LA.solicitorid" :label="TN_LA.solicitoridLabel" ref="ref_solicitorid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnmediacdChange" :prop="PI_mediacd" :value="TN_LA.mediacd" :label="TN_LA.mediacdLabel" ref="ref_mediacd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>                        
                                      <b-col md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="TN_LA.remarks"  ref="ref_remarks" />
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
    stError:'',
            propList: {
                initialWhere: "CustomerType = 'L' AND ContractStatus IN ('3','4') AND SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            TN_LA :{
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
                // cLastLabel: 'Months' 
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
                // cLastLabel: 'Months' 
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
                // cLastLabel: 'PSM' 
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
                // cLastLabel: 'PSM' 
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
                // cLastLabel: 'Lines' 
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
                // cLastLabel: 'PSM' 
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
                cVisible:  false, 
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
                // cLastLabel: 'PSM' 
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
                cValidate :'required|max:3', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
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
                cProtect: true, 
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
                    LookUpCd: ''    , 
                    ColumnDB: 'SolicitorCd'   , 
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
                cDisplayColumn: 'SolicitorCd,Descs' ,
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
        GetStatus(Status){
          switch (data.status) {
            case "A":
            case "N":
              switch (data.contractstatus) {
                case 2, 3, 4:
                  this.TN_LA.status = "Approved LA"
                  break;                      
                case 1:
                  this.TN_LA.status = "Pending LA"
                  this.PI_loono.cProtect = true
                  this.PI_loodate.cProtect = true
                  break;
              }
              break;
            case "X":
              this.TN_LA.status = "Terminated Agreement"
              break;
            case "C":
              this.TN_LA.status = "Cancelled Agreement"
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

                if(ress==null || ress.length==0){
                  

                }
                
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
              // console.log(this.DataRow)
              // console.log(data.Status +'<=status || DeviationApprovalNo=>'+data.DeviationApprovalNo+ ' contractstatus : '+this.DataRow.ContractStatus)
                if((data.Status !='C' || data.Status!='X' && data.DeviationApprovalNo =='' || data.DeviationApprovalNo == null)){                      
                  if( this.DataRow.ContractStatus == 3){
                      this.PI_lano.cProtect = false //false
                      this.PI_ladate.cProtect = false //false
                      this.PI_remarks.cProtect = false
                      // this.PI_solicitorid.cProtect = false  
                  }else{
                      this.PI_lano.cProtect = true //true
                      this.PI_ladate.cProtect = true //true
                      this.PI_remarks.cProtect = true
                      // this.PI_solicitorid.cProtect = true
                  }
                }else{
                      this.PI_lano.cProtect = true //true
                      this.PI_ladate.cProtect = true //true
                      this.PI_remarks.cProtect = true
                      // this.PI_solicitorid.cProtect = true
                                         

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
            this.TN_LA.solicitorid = data.id
            this.TN_LA.solicitoridLabel = data.label                      
            if (this.inputStatus != "VIEW") {
              
            }
        })
        this.$forceUpdate()
        },
        OncopyfromapplicationnoChange (data) {          
        this.$nextTick(() => {
            this.TN_LA.copyfromapplicationno = data.id
            this.TN_LA.copyfromapplicationnoLabel = data.label
            this.GetContract(data.id)            
            if (this.inputStatus != "VIEW") {
              
            }
        })
        this.$forceUpdate()
        },
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.TN_LA.contactid = data.id
            this.TN_LA.contactidLabel = data.label

            this.PI_assessmentno.dataLookUp.InitialWhere = "SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"' AND ContactID='"+ data.id +"'"

            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.TN_LA.customercategorycd = data.id
            this.TN_LA.customercategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{customercategorycd}
            }
        })
        this.$forceUpdate()
        },
        OnassessmentnoChange (data) {
        this.$nextTick(() => {
            this.TN_LA.assessmentno = data.id
            this.TN_LA.assessmentnoLabel = data.label
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
            this.TN_LA.brandcd = data.id
            this.TN_LA.brandcdLabel = data.label

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
            this.TN_LA.marketingid = data.id
            this.TN_LA.marketingidLabel = data.label
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
            this.TN_LA.mediacd = data.id
            this.TN_LA.mediacdLabel = data.label
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
            this.TN_LA.currencycd = data.id
            this.TN_LA.currencycdLabel = data.label
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
        if (this.TN_LA.applicationno == "(auto)")
             { this.TN_LA.applicationno = "null" }
        if (this.TN_LA.loono == "(auto)")
             { this.TN_LA.loono = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.TN_LA.applicationno,
                LOONo: this.TN_LA.loono,
                LOODate: this.TN_LA.loodate == '' || this.TN_LA.loodate == null ? 'NULL' : this.TN_LA.loodate ,
                CopyFromApplicationNo: this.TN_LA.copyfromapplicationno == '' || this.TN_LA.copyfromapplicationno == null ? 'NULL' : this.TN_LA.copyfromapplicationno ,
                CustomerType: this.TN_LA.customertype,
                ContactId: this.TN_LA.contactid,
                EventNo: this.TN_LA.eventno,
                CustomerCategory: this.TN_LA.customercategorycd == '' || this.TN_LA.customercategorycd == null ? 'NULL' : this.TN_LA.customercategorycd ,
                AssessmentNo: this.TN_LA.assessmentno,
                ReferenceNo: this.TN_LA.referenceno,
                BrandCd: this.TN_LA.brandcd == '' || this.TN_LA.brandcd == null ? 'NULL' : this.TN_LA.brandcd ,
                BrandName: this.TN_LA.brandname,
                StartDate: this.TN_LA.startdate == '' || this.TN_LA.startdate == null ? 'NULL' : this.TN_LA.startdate ,
                EndDate: this.TN_LA.enddate,
                LeasePeriod: this.TN_LA.leaseperiod,
                FreeRentalPeriod: this.TN_LA.freerentalperiod,
                RCD: this.TN_LA.rcd == '' || this.TN_LA.rcd == null ? 'NULL' : this.TN_LA.rcd ,
                RED: this.TN_LA.red == '' || this.TN_LA.red == null ? 'NULL' : this.TN_LA.red ,
                UtilitiesStartDate: this.TN_LA.utilitiesstartdate == '' || this.TN_LA.utilitiesstartdate == null ? 'NULL' : this.TN_LA.utilitiesstartdate ,
                UtilitiesEndDate: this.TN_LA.utilitiesenddate == '' || this.TN_LA.utilitiesenddate == null ? 'NULL' : this.TN_LA.utilitiesenddate ,
                CurrencyCd: this.TN_LA.currencycd == '' || this.TN_LA.currencycd == null ? 'NULL' : this.TN_LA.currencycd ,
                PeggingRate: this.TN_LA.peggingrate,
                RevenueShareType: this.TN_LA.revenuesharetype,
                ChargeArea: this.TN_LA.chargearea,
                TelephoneLine: this.TN_LA.telephoneline,
                SecurityDepositRental: this.TN_LA.securitydepositrental,
                SecurityDepositSC: this.TN_LA.securitydepositsc,
                RentalBase: this.TN_LA.rentalbase,
                RenewalPeriod: this.TN_LA.renewalperiod,
                MarketingID: this.TN_LA.marketingid == '' || this.TN_LA.marketingid == null ? 'NULL' : this.TN_LA.marketingid ,
                AntennaStatus: this.TN_LA.antennastatus,
                FitOutCommencedOn: this.TN_LA.fitoutcommencedon == '' || this.TN_LA.fitoutcommencedon == null ? 'NULL' : this.TN_LA.fitoutcommencedon ,
                FitOutTime: this.TN_LA.fitouttime,
                FitOutPIC: this.TN_LA.fitoutpic,
                HandOverDate: this.TN_LA.handoverdate == '' || this.TN_LA.handoverdate == null ? 'NULL' : this.TN_LA.handoverdate ,
                OperatingFromHour: this.TN_LA.operatingfromhour,
                OperatingToHour: this.TN_LA.operatingtohour,
                MediaCd: this.TN_LA.mediacd == '' || this.TN_LA.mediacd == null ? 'NULL' : this.TN_LA.mediacd ,
                ServiceCharge: this.TN_LA.servicecharge ? this.replaceAllString(this.TN_LA.servicecharge,',','','number') : 0 ,
                PromotionLevy: this.TN_LA.promotionlevy ? this.replaceAllString(this.TN_LA.promotionlevy,',','','number') : 0 ,
                TelephoneDeposit: this.TN_LA.telephonedeposit ? this.replaceAllString(this.TN_LA.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.TN_LA.fitoutdeposit ? this.replaceAllString(this.TN_LA.fitoutdeposit,',','','number') : 0 ,
                SinkingFund: this.TN_LA.sinkingfund ? this.replaceAllString(this.TN_LA.sinkingfund,',','','number') : 0 ,
                Remarks: this.TN_LA.remarks,
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
          // console.log(this.TN_LA)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.TN_LA.applicationno,
                LANo: this.TN_LA.lano,
                LADate: this.TN_LA.ladate == '' || this.TN_LA.ladate == null ? 'NULL' : this.TN_LA.ladate ,
                Remarks: this.TN_LA.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.TN_LA.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.TN_LA = {
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
        // this.GetSpecificationData()
        // if (this.TN_LA.applicationleasingrunningcd != null && this.TN_LA.applicationleasingrunningcd != "")
        //      { this.TN_LA.applicationno = "(auto)"
        //      this.PI_applicationno.cProtect = true }
        // else {
        //      this.TN_LA.applicationno = ""
        //      this.PI_applicationno.cProtect = false }

        // if (this.TN_LA.LOOLeasingRunningCd != null && this.TN_LA.LOOLeasingRunningCd != "")
        //      { this.TN_LA.loono = "(auto)"
        //      this.PI_loono.cProtect = true }
        // else {
        //      this.TN_LA.loono = ""
        //      this.PI_loono.cProtect = false }
			
        },
        M_Edit(){
          // this.PI_remarks.cProtect = false
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
this.TN_LA = {
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
                    this.TN_LA.customerstatus = "NEW"
                    break;
                  case "P":
                    this.TN_LA.customerstatus = "Replacement"
                    break;
                  case "R":
                    this.TN_LA.customerstatus = "Renew"
                    break;
                  default:
                    this.TN_LA.customerstatus = "Unassigned"
                    break;
                }

                // switch (data.status) {
                //   case "A":
                //   case "N":
                //     switch (data.contractstatus) {                      
                //       case 2, 3, 4:
                //         this.TN_LA.status = "Approved LA"                                            
                //         break;                      
                //       case 1:
                //         this.TN_LA.status = "Pending LA"
                //         break;
                //     }
                //     break;
                //   case "X":
                //     this.TN_LA.status = "Terminated Agreement"
                //     break;
                //   case "C":
                //     this.TN_LA.status = "Cancelled Agreement"
                //     break;                  
                // }

                if (data.status == 'A' || data.status == 'N') {
                  if (data.contractstatus == '3') {
                    this.TN_LA.status = "Pending LA"
                  }
                  else if (data.contractstatus == '4') {
                    this.TN_LA.status = "Approved LA"
                  }
                }
                else if (data.status == 'X') {
                  this.TN_LA.status = "Terminated Agreement"
                }
                else if (data.status == 'C') {
                  this.TN_LA.status = "Cancelled Agreement"
                }

                if (
                    (data.status != 'A' && data.contractstatus != 3) ||
                    (data.status != 'N' && data.contractstatus != 3) ||
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

                switch (data.chargeperiod) {
                  case "M":
                    this.TN_LA.chargeperiod = "months"
                    break;
                  case "D":
                    this.TN_LA.chargeperiod = "days"
                    break;
                  case "Y":
                    this.TN_LA.chargeperiod = "years"
                    break;
                }

                if(data.antennastatus == ''){
                  this.TN_LA.antennastatus = "N"
                } else {
                  this.TN_LA.antennastatus = data.antennastatus
                }

                this.TN_LA.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) +' / '+ this.isCurrency(data.totalsemigrossarea, this.decimal) +' / '+ this.isCurrency(data.totalnetarea, this.decimal)

                switch (data.rentalratetype) {
                  case "F":
                    this.TN_LA.rentalratetype = "Flat"
                    break;
                  case "S":
                    this.TN_LA.rentalratetype = "Step Up"
                    break;
                  default:
                    this.TN_LA.rentalratetype = "Unassigned"
                    break;
                }

                this.TN_LA.copyfromapplicationnoLabel = this.TN_LA.copyfromapplicationno != null && this.TN_LA.copyfromapplicationno != '' ? data.copyfromapplicationno + this.separator + data.loono :'' 
                this.TN_LA.contactidLabel = this.TN_LA.contactid != null && this.TN_LA.contactid != '' ? data.contactid + this.separator + data.customername  :'' 
                this.TN_LA.customercategorycdLabel = this.TN_LA.customercategorycd != null && this.TN_LA.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs  :'' 
                this.TN_LA.assessmentnoLabel = this.TN_LA.assessmentno != null && this.TN_LA.assessmentno != '' ? data.assessmentno  :'' 
                this.TN_LA.brandcdLabel = this.TN_LA.brandcd != null && this.TN_LA.brandcd != '' ? data.brandcd + this.separator + data.brandname :'' 
                this.TN_LA.marketingidLabel = this.TN_LA.marketingid != null && this.TN_LA.marketingid != '' ? data.marketingid + this.separator + data.marketingname :'' 
                this.TN_LA.mediacdLabel = this.TN_LA.mediacd != null && this.TN_LA.mediacd != '' ? data.mediacd + this.separator + data.mediadescs :'' 
                this.TN_LA.currencycdLabel = this.TN_LA.currencycd != null && this.TN_LA.currencycd != '' ? data.currencycd + this.separator + data.currencydescs  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                this.GetContract(data.applicationno)
                this.$forceUpdate()

            })
        }
        ,MdtRange_startdate (data) {
            this.TN_LA.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.TN_LA.enddate = data
        }
        ,MdtRange_rcd (data) {
            this.TN_LA.rcd = data
        }
        ,MdtRange_red (data) {
            this.TN_LA.red = data
        }
        ,MdtRange_utilitiesstartdate (data) {
            this.TN_LA.utilitiesstartdate = data
        }
        ,MdtRange_utilitiesenddate (data) {
            this.TN_LA.utilitiesenddate = data
        }
        ,MdtRange_operatingfromhour (data){
            this.TN_LA.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
            this.TN_LA.operatingtohour = data
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

