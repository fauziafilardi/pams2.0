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
                  <!-- <b-col md="12" id="col-left"> 
                      <b-row>
                        <b-col  md="6">
                          <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_ContractConcession.applicationno" :label="M_TN_ContractConcession.applicationnoLabel" ref="ref_applicationno"/>
                        </b-col>
                        <b-col md="6">
                          <ABSCompute :prop="PI_status" v-model="M_TN_ContractConcession.status"  ref="ref_status" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_concessionno" v-model="M_TN_ContractConcession.concessionno"  ref="ref_concessionno"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_ContractConcession.telephoneline"  ref="ref_telephoneline"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputDateVuex @input="OnconcessiondateChange" :prop="PI_concessiondate" v-model="M_TN_ContractConcession.concessiondate"  ref="ref_concessiondate" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="M_TN_ContractConcession.securitydepositrental"  ref="ref_securitydepositrental"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_TN_ContractConcession.runningcd" :label="M_TN_ContractConcession.runningcdLabel" ref="ref_runningcd"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="M_TN_ContractConcession.securitydepositsc"  ref="ref_securitydepositsc"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_ContractConcession.loono"  ref="ref_loono"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_TN_ContractConcession.servicecharge"  ref="ref_servicecharge"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_ContractConcession.loodate"  ref="ref_loodate" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_ContractConcession.promotionlevy"  ref="ref_promotionlevy"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_contactid" v-model="M_TN_ContractConcession.contactid"  ref="ref_contactid" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_ContractConcession.telephonedeposit"  ref="ref_telephonedeposit"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_customercategorycd" v-model="M_TN_ContractConcession.customercategorycd"  ref="ref_customercategorycd" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_TN_ContractConcession.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_tenantstatus" v-model="M_TN_ContractConcession.tenantstatus"  ref="ref_tenantstatus" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_TN_ContractConcession.sinkingfund"  ref="ref_sinkingfund"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_assessmentno" v-model="M_TN_ContractConcession.assessmentno"  ref="ref_assessmentno" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputRadioButtonVuex @input="OnrentalbaseChange" :prop="PI_rentalbase" v-model="M_TN_ContractConcession.rentalbase"  ref="ref_rentalbase" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_ContractConcession.referenceno"  ref="ref_referenceno"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="M_TN_ContractConcession.revenuesharetype"  ref="ref_revenuesharetype" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_brandcd" v-model="M_TN_ContractConcession.brandcd"  ref="ref_brandcd"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_renewalperiod" v-model="M_TN_ContractConcession.renewalperiod"  ref="ref_renewalperiod"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_theme" v-model="M_TN_ContractConcession.theme"  ref="ref_theme" />
                        </b-col>
                        <b-col md="6">
                          <ABSCompute :prop="PI_rentalratetype" v-model="M_TN_ContractConcession.rentalratetype"  ref="ref_rentalratetype" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_class" v-model="M_TN_ContractConcession.class"  ref="ref_class" />
                        </b-col>
                        <b-col md="6">
                          <ABSCompute :prop="PI_marketingid" v-model="M_TN_ContractConcession.marketingid"  ref="ref_marketingid" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_category" v-model="M_TN_ContractConcession.category"  ref="ref_category" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_fitoutpic" v-model="M_TN_ContractConcession.fitoutpic"  ref="ref_fitoutpic"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_ContractConcession.startdate" :valueTo="M_TN_ContractConcession.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_fitoutcommencedon" v-model="M_TN_ContractConcession.fitoutcommencedon"  ref="ref_fitoutcommencedon"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_leaseperiod" v-model="M_TN_ContractConcession.leaseperiod"  ref="ref_leaseperiod"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_fitouttime" v-model="M_TN_ContractConcession.fitouttime"  ref="ref_fitouttime"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_chargeperiod" v-model="M_TN_ContractConcession.chargeperiod"  ref="ref_chargeperiod" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_handoverdate" v-model="M_TN_ContractConcession.handoverdate"  ref="ref_handoverdate"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_periodadddaysdesc" v-model="M_TN_ContractConcession.periodadddaysdesc"  ref="ref_periodadddaysdesc" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_operatingfromhour" v-model="M_TN_ContractConcession.operatingfromhour"  ref="ref_operatingfromhour"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_freerentalperiod" v-model="M_TN_ContractConcession.freerentalperiod"  ref="ref_freerentalperiod"/>
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_operatingtohour" v-model="M_TN_ContractConcession.operatingtohour"  ref="ref_operatingtohour"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_ContractConcession.rcd" :valueTo="M_TN_ContractConcession.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                        </b-col>
                        <b-col md="6">
                          <ABSinputTextVuex :prop="PI_mediacd" v-model="M_TN_ContractConcession.mediacd"  ref="ref_mediacd"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_ContractConcession.utilitiesstartdate" :valueTo="M_TN_ContractConcession.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                        </b-col>
                        <b-col md="6">
                          <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractConcession.remarks"  ref="ref_remarks" />
                        </b-col>
                      </b-row>
                  
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_currencycd" v-model="M_TN_ContractConcession.currencycd"  ref="ref_currencycd" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_totalrental" v-model="M_TN_ContractConcession.totalrental"  ref="ref_totalrental" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputRadioButtonVuex @input="OnantennastatusChange" :prop="PI_antennastatus" v-model="M_TN_ContractConcession.antennastatus"  ref="ref_antennastatus" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputRadioButtonVuex @input="OnpeggingrateChange" :prop="PI_peggingrate" v-model="M_TN_ContractConcession.peggingrate"  ref="ref_peggingrate" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_ContractConcession.chargearea"  ref="ref_chargearea" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_totalarealot" v-model="M_TN_ContractConcession.totalarealot"  ref="ref_totalarealot" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSCompute :prop="PI_baserentalrate" v-model="M_TN_ContractConcession.baserentalrate"  ref="ref_baserentalrate" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_totalbillingamt" v-model="M_TN_ContractConcession.totalbillingamt"  ref="ref_totalbillingamt"/>
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col  md="6">
                          <ABSinputTextVuex :prop="PI_totaldiscountamt" v-model="M_TN_ContractConcession.totaldiscountamt"  ref="ref_totaldiscountamt"/>
                        </b-col>
                      </b-row>
                  </b-col> -->
                  <b-col md="12" id="col-left">
                    <b-row>
                      <b-col  md="6">
                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_ContractConcession.applicationno" :label="M_TN_ContractConcession.applicationnoLabel" ref="ref_applicationno"/>
                      </b-col>
                      <b-col  md="6">
                        <ABSCompute :prop="PI_status" v-model="M_TN_ContractConcession.status"  ref="ref_status" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <!-- <ABSinputTextVuex :prop="PI_addendumrefno" v-model="M_TN_ContractConcession.addendumrefno"  ref="ref_addendumrefno"/> -->
                        <ABSinputTextVuex :prop="PI_concessionno" v-model="M_TN_ContractConcession.concessionno"  ref="ref_concessionno"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_TN_ContractConcession.telephoneline"  ref="ref_telephoneline"/>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col md="6">
                        <!-- <ABSinputDateVuex @input="OnaddendumdateChange" :prop="PI_addendumdate" v-model="M_TN_ContractConcession.addendumdate"  ref="ref_addendumdate" /> -->
                        <ABSinputDateVuex @input="OnconcessiondateChange" :prop="PI_concessiondate" v-model="M_TN_ContractConcession.concessiondate"  ref="ref_concessiondate" />
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="M_TN_ContractConcession.securitydepositrental"  ref="ref_securitydepositrental"/>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col md="6">
                        <!-- <ABSInputSelectList @change="OnaddendumtypecdChange" :prop="PI_addendumtypecd" :value="M_TN_ContractConcession.addendumtypecd" :label="M_TN_ContractConcession.addendumtypecdLabel" ref="ref_addendumtypecd"/> -->
                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_TN_ContractConcession.runningcd" :label="M_TN_ContractConcession.runningcdLabel" ref="ref_runningcd"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="M_TN_ContractConcession.securitydepositsc"  ref="ref_securitydepositsc"/>
                      </b-col>
                    </b-row>

                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_ContractConcession.loono"  ref="ref_loono"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_TN_ContractConcession.servicecharge"  ref="ref_servicecharge"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_ContractConcession.loodate"  ref="ref_loodate" />
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_ContractConcession.promotionlevy"  ref="ref_promotionlevy"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_contactid" v-model="M_TN_ContractConcession.contactid"  ref="ref_contactid"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_ContractConcession.telephonedeposit"  ref="ref_telephonedeposit"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">                                        
                        <ABSinputTextVuex :prop="PI_customercategorycd" v-model="M_TN_ContractConcession.customercategorycd"  ref="ref_customercategorycd"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_TN_ContractConcession.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_assessmentno" v-model="M_TN_ContractConcession.assessmentno"  ref="ref_assessmentno"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_TN_ContractConcession.sinkingfund"  ref="ref_sinkingfund"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_customerstatus" v-model="M_TN_ContractConcession.customerstatus"  ref="ref_customerstatus" />
                      </b-col>
                      <b-col md="6">
                        <ABSinputRadioButtonVuex @input="OnrentalbaseChange" :prop="PI_rentalbase" v-model="M_TN_ContractConcession.rentalbase"  ref="ref_rentalbase" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_ContractConcession.referenceno"  ref="ref_referenceno"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="M_TN_ContractConcession.revenuesharetype"  ref="ref_revenuesharetype" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <!-- <ABSInputSelectList @change="OnbrandcdChange" :prop="PI_brandcd" :value="M_TN_ContractConcession.brandcd" :label="M_TN_ContractConcession.brandcdLabel" ref="ref_brandcd"/> -->
                        <ABSinputTextVuex :prop="PI_brandcd" v-model="M_TN_ContractConcession.brandcd"  ref="ref_brandcd"/>
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_renewalperiod" v-model="M_TN_ContractConcession.renewalperiod"  ref="ref_renewalperiod"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_theme" v-model="M_TN_ContractConcession.theme"  ref="ref_theme" />
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_rentalratetype" v-model="M_TN_ContractConcession.rentalratetype"  ref="ref_rentalratetype" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_class" v-model="M_TN_ContractConcession.class"  ref="ref_class" />
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_marketingid" v-model="M_TN_ContractConcession.marketingid"  ref="ref_marketingid" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_category" v-model="M_TN_ContractConcession.category"  ref="ref_category" />
                      </b-col>
                      <b-col md="6">
                        <ABSinputTextVuex :prop="PI_fitoutpic" v-model="M_TN_ContractConcession.fitoutpic"  ref="ref_fitoutpic"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_ContractConcession.startdate" :valueTo="M_TN_ContractConcession.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                      </b-col>
                      <b-col md="6">
                        <!-- <ABSinputDateVuex @input="OnfitoutcommencedonChange" :prop="PI_fitoutcommencedon" v-model="M_TN_ContractConcession.fitoutcommencedon"  ref="ref_fitoutcommencedon" /> -->
                        <b-row>
                          <b-col md="4" class="lbl-col-align">
                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Fit Out Comm. Date</label>
                          </b-col>
                          <b-col md="1" style="margin-left: 10px;">
                            <ABSTextBoxOnly :prop="PI_fitoutcommencedon" v-model="M_TN_ContractConcession.fitoutcommencedon"  ref="ref_fitoutcommencedon"/>    
                          </b-col>
                          <b-col md="1">
                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Duration</label>
                          </b-col>  
                          <b-col md="1">
                            <ABSTextBoxOnly :prop="PI_freerentalperiod" v-model="M_TN_ContractConcession.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                          </b-col>
                          <b-col md="1">
                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">day(s)</label>
                          </b-col>  
                        </b-row>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <b-row>
                          <b-col md="4" class="lbl-col-align">
                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                          </b-col>
                          <b-col md="1" style="margin-left: 10px;">
                            <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="M_TN_ContractConcession.leaseperiod"  ref="ref_leaseperiod"/>    
                          </b-col>
                          <b-col md="4">
                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">{{M_TN_ContractConcession.chargeperiod}} and {{M_TN_ContractConcession.perioddays}} days .Free </label>
                          </b-col>  
                          <b-col md="1">
                            <ABSTextBoxOnly :prop="PI_freerentalperiod" v-model="M_TN_ContractConcession.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                          </b-col>
                        </b-row>
                      </b-col>
                      <b-col md="6">
                        <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="M_TN_ContractConcession.handoverdate"  ref="ref_handoverdate" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_ContractConcession.rcd" :valueTo="M_TN_ContractConcession.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                      </b-col>
                      <b-col md="6">
                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_ContractConcession.operatingfromhour" :valueTo="M_TN_ContractConcession.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_TN_ContractConcession.utilitiesstartdate" :valueTo="M_TN_ContractConcession.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                      </b-col>
                      <b-col md="6">                                        
                        <!-- <ABSInputSelectList @change="OnmediacdChange" :prop="PI_mediacd" :value="M_TN_ContractConcession.mediacd" :label="M_TN_ContractConcession.mediacdLabel" ref="ref_mediacd"/> -->
                        <ABSinputTextVuex :prop="PI_mediacd" v-model="M_TN_ContractConcession.mediacd"  ref="ref_mediacd"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">                                        
                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_TN_ContractConcession.currencycd"  ref="ref_currencycd" />
                      </b-col>
                      <b-col md="6">
                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractConcession.remarks"  ref="ref_remarks" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_totalrental" v-model="M_TN_ContractConcession.totalrental"  ref="ref_totalrental" />
                      </b-col>                                      
                      <b-col md="6">
                        
                      </b-col>
                    </b-row>
                    
                    <b-row>
                      <b-col  md="6">
                        <ABSinputRadioButtonVuex @input="OnantennastatusChange" :prop="PI_antennastatus" v-model="M_TN_ContractConcession.antennastatus"  ref="ref_antennastatus" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputRadioButtonVuex @input="OnpeggingrateChange" :prop="PI_peggingrate" v-model="M_TN_ContractConcession.peggingrate"  ref="ref_peggingrate" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_ContractConcession.chargearea"  ref="ref_chargearea" />
                      </b-col>
                    </b-row>                                    
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_totalarealot" v-model="M_TN_ContractConcession.totalarealot"  ref="ref_totalarealot" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_baserentalrate" v-model="M_TN_ContractConcession.baserentalrate"  ref="ref_baserentalrate" />
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_totalbillingamt" v-model="M_TN_ContractConcession.totalbillingamt"  ref="ref_totalbillingamt"/>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col  md="6">
                        <ABSinputTextVuex :prop="PI_totaldiscountamt" v-model="M_TN_ContractConcession.totaldiscountamt"  ref="ref_totaldiscountamt"/>
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND [Status] = 'N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            TNSpec: '',

            M_TN_ContractConcession :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                concessionsequenceno: 0,
                concessionno: '',
                concessiondate: this.getToday(),
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
                fitouttime: '0',
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
                theme: '',
                class: '',
                category: '',
                marketingname: '',
                perioddays: 0,
                totalnetarea: 0,
                totalgrossarea: 0,
                totalsemigrossarea: 0,
                totalbillingamt: '0',
                totaldiscountamt: '0',
                lastupdatestamp: 0,
                rowid: 0,
                customerstatus: 'unknown'
                    }
            ,
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
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_ApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
            PI_concessionno: { 
                cValidate :'required|max:20', 
                cName: 'concessionno', 
                cLabel: 'Concession No', 
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
            PI_telephoneline: { 
                cValidate :'max:3', 
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
            PI_concessiondate: { 
                cValidate :'required', 
                cName: 'concessiondate', 
                cLabel: 'Concession Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'Months' 
            }, 
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'runningcd', 
                cLabel: 'Running Code', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'Months' 
            }, 
            PI_loono: { 
                cValidate :'max:20', 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_loodate: { 
                cValidate :'', 
                cName: 'loodate', 
                cLabel: 'LOO Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_contactid: {
                cValidate :'max:20', 
                cName: 'contactid', 
                cLabel: 'Customer', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex                 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'Lines' 
            }, 
            PI_customercategorycd: { 
                cValidate :'max:20', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_tenantstatus: { 
                cLabel: 'Customer Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cLastLabel: 'PSM' 
            }, 
            PI_assessmentno: {
                cValidate :'max:20', 
                cName: 'assessmentno', 
                cLabel: 'Assessment No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cDecimal: 2, 
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
                cRadioDefaultOption: '', 
                cLabel:'Rental Base', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'max:60', 
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
            PI_revenuesharetype: { 
                cValidate :'', 
                cName: 'revenuesharetype', 
                cId: 'rdbrevenuesharetype', 
                cRadioOptions: [{ text: 'Staggered', value: 'S' },{ text: 'Range Scale', value: 'R' },], 
                cRadioDefaultOption: 'S', 
                cLabel:'Revenue Share Calc.', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandcd: { 
                cValidate :'required|max:8', 
                cName: 'brandcd', 
                cLabel: 'Brand Name', 
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
            PI_renewalperiod: { 
                cValidate :'', 
                cName: 'renewalperiod', 
                cLabel: 'Renewal Period', 
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
            PI_theme: { 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_rentalratetype: { 
                cLabel: 'Rental Type ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_class: { 
                cLabel: 'Class', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_marketingid: {
                cValidate :'max:20', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
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
            PI_category: { 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_fitoutpic: { 
                cValidate :'max:50', 
                cName: 'fitoutpic', 
                cLabel: 'Fit Out PIC', 
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
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Lease Start - End Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
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
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
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
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fitouttime: { 
                cValidate :'', 
                cName: 'fitouttime', 
                cLabel: 'Duration', 
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
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_periodadddaysdesc: { 
                cLabel: 'Period Add Days', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_freerentalperiod: { 
                cValidate :'', 
                cName: 'freerentalperiod', 
                cLabel: 'Free', 
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
            PI_rcd: { 
                cValidate :'required', 
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
            PI_mediacd: { 
                cValidate :'max:5', 
                cName: 'mediacd', 
                cLabel: 'Information Source', 
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
            PI_utilitiesstartdate: { 
                cValidate :'required', 
                cName: 'utilitiesstartdate', 
                cLabel: 'Utilities Start - End Date', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cValidate :'max:5', 
                cName: 'currencycd', 
                cLabel: 'Lease Currency', 
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
            PI_totalrental: { 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_antennastatus: { 
                cValidate :'', 
                cName: 'antennastatus', 
                cId: 'rdbantennastatus', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Antenna Lease', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cRadioDefaultOption: '', 
                cLabel:'Peg Rate', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cRadioDefaultOption: '', 
                cLabel:'Base Calculation Area', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalarealot: { 
                cLabel: 'Total Area (Gross/Semi/Net)', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_baserentalrate: { 
                cLabel: 'Average Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalbillingamt: { 
                cValidate :'', 
                cName: 'totalbillingamt', 
                cLabel: 'Total Billing Amount', 
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
            PI_totaldiscountamt: { 
                cValidate :'', 
                cName: 'totaldiscountamt', 
                cLabel: 'Total Discount Amount', 
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
      GetLeasingPolicyDefault(){
        var dt = new Date(this.M_TN_ContractConcession.rcd)
        var year = dt.getFullYear()

           var param = {
            OptionFunctionCd: "GetLeasingPolicyData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            LeasingPolicyYear: year,
            CustomerCategoryCd: this.M_TN_ContractConcession.customercategorycd,
            LeasePeriod: this.M_TN_ContractConcession.leaseperiod
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              // this.isCurrency(data.servicecharge, this.decimal)
              this.M_TN_ContractConcession.servicecharge = this.isCurrency(data.ServiceCharge, this.decimal)
              this.M_TN_ContractConcession.promotionlevy = this.isCurrency(data.PromotionLevy, this.decimal)
              this.M_TN_ContractConcession.telephonedeposit = this.isCurrency(data.TelephoneDeposit, this.decimal)
              this.M_TN_ContractConcession.fitoutdeposit = this.isCurrency(data.FitOutDeposit, this.decimal)
              this.M_TN_ContractConcession.sinkingfund = this.isCurrency(data.SinkingFund, this.decimal)

              this.M_TN_ContractConcession.securitydepositrental = this.isCurrency(data.SecurityDepositRental, this.decimal)
              this.M_TN_ContractConcession.securitydepositsc = this.isCurrency(data.SecurityDepositSC, this.decimal)
              
              switch (this.M_TN_ContractConcession.chargeperiod) {
                  case "months":
                    // var dtred = this.dateAdd2('M',this.M_TN_ContractConcession.rcd,this.M_TN_ContractConcession.leaseperiod)
                    // var check = moment(dtred, 'YYYY/MM/DD');
                    // var check2 = moment(this.M_TN_ContractConcession.rcd, 'YYYY/MM/DD');
                    // var iDay1 = parseInt(check.format('D'))
                    // var iDay2 = parseInt(check2.format('D'))
                    // if(iDay1>=iDay2){
                    //   this.M_TN_ContractConcession.red = this.dateAdd2('D',this.M_TN_ContractConcession.rcd,-1)
                    // }
                    this.M_TN_ContractConcession.red = this.dateAdd2('D',this.dateAdd2('M',this.M_TN_ContractConcession.rcd,this.M_TN_ContractConcession.leaseperiod),-1)
                    break;
                  case "days":
                    this.M_TN_ContractConcession.red = this.dateAdd2('D',this.M_TN_ContractConcession.rcd,this.M_TN_ContractConcession.leaseperiod)
                    break;
                  case "years":
                    this.M_TN_ContractConcession.red = this.dateAdd2('D',this.dateAdd2('Y',this.M_TN_ContractConcession.rcd,this.M_TN_ContractConcession.leaseperiod),-1)
                    break;
                }
       

            })
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
              console.log('GetContract')
              console.log(data)
              
                this.M_TN_ContractConcession.loono = data.LOONo
                this.M_TN_ContractConcession.loodate = data.LOODate
                this.M_TN_ContractConcession.contactid = data.ContactId
                this.M_TN_ContractConcession.customername = data.CustomerName
                this.M_TN_ContractConcession.customercategorycd = data.CustomerCategoryCd
                this.M_TN_ContractConcession.customercategorydescs = data.CustomerCategoryDescs

                switch (data.TenantStatus){
                  case "N":
                      this.M_TN_ContractConcession.customerstatus = "NEW"
                      break;
                    case "P":
                      this.M_TN_ContractConcession.customerstatus = "Replacement"
                      break;
                    case "R":
                      this.M_TN_ContractConcession.customerstatus = "Renew"
                      break;
                    default:
                      this.M_TN_ContractConcession.customerstatus = "Unassigned"
                      break;
                  }

                this.M_TN_ContractConcession.contractstatus = data.ContractStatus

                switch (data.Status) {                    
                  case "N":
                    this.M_TN_ContractConcession.status = "New / Pending Addendum"                      
                    break;
                  case "P":
                    this.M_TN_ContractConcession.status = "Posted Addendum"
                    break;                 
                }

                this.M_TN_ContractConcession.assessmentno = data.AssessmentNo
                this.M_TN_ContractConcession.referenceno = data.ReferenceNo
                this.M_TN_ContractConcession.brandcd = data.BrandCd
                this.M_TN_ContractConcession.brandname = data.BrandName
                this.M_TN_ContractConcession.theme = data.Theme
                this.M_TN_ContractConcession.class = data.Class
                this.M_TN_ContractConcession.category = data.Category
                this.M_TN_ContractConcession.startdate = data.StartDate
                this.M_TN_ContractConcession.enddate = data.EndDate
                this.M_TN_ContractConcession.leaseperiod = data.LeasePeriod

                switch (data.ChargePeriod) {
                  case "M":
                    this.M_TN_ContractConcession.chargeperiod = "months"
                    break;
                  case "D":
                    this.M_TN_ContractConcession.chargeperiod = "days"
                    break;
                  case "Y":
                    this.M_TN_ContractConcession.chargeperiod = "years"
                    break;
                }

                this.M_TN_ContractConcession.copyfromapplicationno = data.ApplicationNo
                
                this.M_TN_ContractConcession.freerentalperiod = data.FreeRentalPeriod
                this.M_TN_ContractConcession.rcd = data.RCD
                //contract status
                this.M_TN_ContractConcession.red = data.RED
                this.M_TN_ContractConcession.utilitiesstartdate = data.UtilitiesStartDate
                this.M_TN_ContractConcession.utilitiesenddate = data.UtilitiesEndDate                
                this.M_TN_ContractConcession.currencycd = data.CurrencyCd
                this.M_TN_ContractConcession.totalrental = this.isCurrency(data.ContractAmt, this.decimal)
                this.M_TN_ContractConcession.peggingrate = this.isCurrency(data.PeggingRate, this.decimal)
                this.M_TN_ContractConcession.revenuesharetype = data.RevenueShareType
                this.M_TN_ContractConcession.chargearea = data.ChargeArea

                if(data.AntennaStatus == ''){
                  this.M_TN_ContractConcession.antennastatus = "N"
                } else {
                  this.M_TN_ContractConcession.antennastatus = data.AntennaStatus
                }

                this.M_TN_ContractConcession.totalarealot = this.isCurrency(data.TotalGrossArea, this.decimal) +' / '+ this.isCurrency(data.TotalSemiGrossArea, this.decimal) +' / '+ this.isCurrency(data.TotalNetArea, this.decimal)

                this.M_TN_ContractConcession.baserentalrate = this.isCurrency(data.BaseRentalRate, this.decimal)
                this.M_TN_ContractConcession.telephoneline = data.TelephoneLine
                this.M_TN_ContractConcession.rentalbase = data.RentalBase                
                this.M_TN_ContractConcession.renewalperiod = data.RenewalPeriod

                switch (data.RentalRateType) {
                  case "F":
                    this.M_TN_ContractConcession.rentalratetype = "Flat"
                    break;
                  case "S":
                    this.M_TN_ContractConcession.rentalratetype = "Step Up"
                    break;
                  default:
                    this.M_TN_ContractConcession.rentalratetype = "Unassigned"
                    break;
                }

                this.M_TN_ContractConcession.marketingid = data.MarketingID,
                this.M_TN_ContractConcession.fitoutcommencedon = data.FitOutCommencedOn
                this.M_TN_ContractConcession.fitouttime = data.FitOutTime
                this.M_TN_ContractConcession.fitoutpic = data.FitOutPIC
                this.M_TN_ContractConcession.handoverdate = data.HandOverDate                
                this.M_TN_ContractConcession.operatingfromhour = data.OperatingFromHour
                this.M_TN_ContractConcession.operatingtohour = data.OperatingToHour
                this.M_TN_ContractConcession.mediacd = data.MediaCd,
                this.M_TN_ContractConcession.securitydepositrental = data.SecurityDepositRental,
                this.M_TN_ContractConcession.securitydepositsc = data.SecurityDepositSC, 

                this.M_TN_ContractConcession.servicecharge = this.isCurrency(data.ServiceCharge, this.decimal)
                this.M_TN_ContractConcession.promotionlevy = this.isCurrency(data.PromotionLevy, this.decimal)
                this.M_TN_ContractConcession.telephonedeposit = this.isCurrency(data.TelephoneDeposit, this.decimal)
                this.M_TN_ContractConcession.fitoutdeposit = this.isCurrency(data.FitOutDeposit, this.decimal)
                this.M_TN_ContractConcession.sinkingfund = this.isCurrency(data.SinkingFund, this.decimal)
                this.M_TN_ContractConcession.remarks = data.Remarks               
                

              this.M_TN_ContractConcession.copyfromapplicationnoLabel = this.M_TN_ContractConcession.copyfromapplicationno != null && this.M_TN_ContractConcession.copyfromapplicationno != '' ? data.ApplicationNo + this.separator  + data.LOONo :'' 
              this.M_TN_ContractConcession.brandcdLabel = this.M_TN_ContractConcession.brandcd != null && this.M_TN_ContractConcession.brandcd != '' ? data.BrandCd + this.separator + data.BrandName  :'' 
              // this.M_TN_ContractConcession.marketingidLabel = this.M_TN_ContractConcession.marketingid != null && this.M_TN_ContractConcession.marketingid != '' ? data.MarketingId + this.separator + data.MarketingName :'' 
              this.M_TN_ContractConcession.mediacdLabel = this.M_TN_ContractConcession.mediacd != null && this.M_TN_ContractConcession.mediacd != '' ? data.MediaCd + this.separator  :'' 
              // this.M_TN_ContractConcession.currencycdLabel = this.M_TN_ContractConcession.currencycd != null && this.M_TN_ContractConcession.currencycd != '' ? data.CurrencyCd + this.separator  :''                  

              // this.SetLookUpBrand(this.M_TN_ContractConcession.contactid)

            })
        },
        SetLookUpBrand(ContactId){
          // console.log(ContactId)
          // if(ContactId != null || ContactId != ''){
          //   this.PI_brandcd.dataLookUp.InitialWhere = "BrandOwnerId='"+ ContactId +"'"
          // }
        },
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

                if (data.AddendumRunningCd != null && data.AddendumRunningCd != "") { 
                  this.M_TN_ContractConcession.concessionno = "(auto)"
                  this.PI_concessionno.cProtect = true 
                } else {
                  this.M_TN_ContractConcession.concessionno = ""
                  this.PI_concessionno.cProtect = false 
                }

                this.PI_antennastatus.cProtect = true
                this.PI_chargearea.cProtect = true
                this.PI_rentalbase.cProtect = true
                this.PI_baserentalrate.cProtect = true
                this.PI_totalrental.cProtect = true
                this.PI_theme.cProtect = true
                this.PI_class.cProtect = true
                this.PI_category.cProtect = true
                this.PI_totalarealot.cProtect = true

            })
        },
        OnhandoverdateChange(data){
          this.$nextTick(() => {

          })
          this.$forceUpdate()
        }	,	
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractConcession.applicationno = data.id
            this.M_TN_ContractConcession.applicationnoLabel = data.label
            this.GetContract(data.id)
            if (this.inputStatus != "VIEW") {
//{applicationno}
            }
        })
        this.$forceUpdate()
        },
        OnconcessiondateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{concessiondate}
            }
        })
        this.$forceUpdate()
        },
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractConcession.runningcd = data.id
            this.M_TN_ContractConcession.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{runningcd}
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
        OnrentalbaseChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{rentalbase}
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
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
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
           this.getToolbar().statusFunction[1].disabled = true
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
        if (this.M_TN_ContractConcession.concessionno == "(auto)")
             { this.M_TN_ContractConcession.concessionno = "null" }

        if (this.M_TN_ContractConcession.applicationno == "(auto)"){
          this.M_TN_ContractConcession.applicationno = "null"
        }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ConcessionNo: this.M_TN_ContractConcession.concessionno,
                ConcessionDate: this.M_TN_ContractConcession.concessiondate == '' || this.M_TN_ContractConcession.concessiondate == null ? 'NULL' : this.M_TN_ContractConcession.concessiondate ,
                ApplicationNo: this.M_TN_ContractConcession.applicationno == '' || this.M_TN_ContractConcession.applicationno == null ? 'NULL' : this.M_TN_ContractConcession.applicationno ,
                Status: "N",
                Remarks: this.M_TN_ContractConcession.remarks,
                UserInput: this.getDataUser().UserId,
                RunningCd: this.M_TN_ContractConcession.runningcd                 
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractConcession = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                concessionsequenceno: 0,
                concessionno: '',
                concessiondate: this.getToday(),
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
                freerentalperiod: '0',
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                peggingrate: '',
                revenuesharetype: 'R  ',
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
                fitouttime: '0',
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
                theme: '',
                class: '',
                category: '',
                marketingname: '',
                perioddays: 0,
                totalnetarea: 0,
                totalgrossarea: 0,
                totalsemigrossarea: 0,
                totalbillingamt: '0',
                totaldiscountamt: '0',
                lastupdatestamp: 0,
                rowid: 0,
                customerstatus: 'unknown'
                    }
            		
		},
        M_New(){
          this.GetSpecificationData()       
			
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

                this.$parent.resultDelete()
            })           
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                concessionsequenceno: record.ConcessionSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_ContractConcession = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                concessionsequenceno: data.concessionsequenceno,
                concessionno: data.concessionno,
                concessiondate: data.concessiondate,
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
                securitydepositrental: data.securitydepositrental,
                securitydepositsc: data.securitydepositsc,
                rentalbase: data.rentalbase,
                renewalperiod: data.renewalperiod,
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
                theme: data.theme,
                class: data.class,
                category: data.category,
                marketingname: data.marketingname,
                perioddays: data.perioddays,
                totalnetarea: this.isCurrency(data.totalnetarea, this.decimal),
                totalgrossarea: this.isCurrency(data.totalgrossarea, this.decimal),
                totalsemigrossarea: this.isCurrency(data.totalsemigrossarea, this.decimal),
                totalbillingamt: this.isCurrency(data.totalbillingamt, this.decimal),
                totaldiscountamt: this.isCurrency(data.totaldiscountamt, this.decimal),
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }

                    switch (data.tenantstatus) {
                  case "N":
                    this.M_TN_ContractConcession.customerstatus = "NEW"
                    break;
                  case "P":
                    this.M_TN_ContractConcession.customerstatus = "Replacement"
                    break;
                  case "R":
                    this.M_TN_ContractConcession.customerstatus = "Renew"
                    break;
                  default:
                    this.M_TN_ContractConcession.customerstatus = "Unassigned"
                    break;
                }

                switch (data.status) {
                  case "A":
                  case "N":
                    switch (data.contractstatus) {                      
                      case 2:
                      case 3:
                      case 4:
                        this.M_TN_ContractConcession.status = "Approved LOO"                                            
                        break;                      
                      case 1:
                        this.M_TN_ContractConcession.status = "Pending LOO"
                        break;
                    }
                    break;
                  case "X":
                    this.M_TN_ContractConcession.status = "Terminated Agreement"
                    break;
                  case "C":
                    this.M_TN_ContractConcession.status = "Cancelled Agreement"
                    break;                  
                }

                switch (data.chargeperiod) {
                  case "M":
                    this.M_TN_ContractConcession.chargeperiod = "months"
                    break;
                  case "D":
                    this.M_TN_ContractConcession.chargeperiod = "days"
                    break;
                  case "Y":
                    this.M_TN_ContractConcession.chargeperiod = "years"
                    break;
                }

                if(data.antennastatus == ''){
                  this.M_TN_ContractConcession.antennastatus = "N"
                } else {
                  this.M_TN_ContractConcession.antennastatus = data.antennastatus
                }

                this.M_TN_ContractConcession.totalarealot = this.isCurrency(data.totalgrossarea, this.decimal) +' / '+ this.isCurrency(data.totalsemigrossarea, this.decimal) +' / '+ this.isCurrency(data.totalnetarea, this.decimal)

                switch (data.rentalratetype) {
                  case "F":
                    this.M_TN_ContractConcession.rentalratetype = "Flat"
                    break;
                  case "S":
                    this.M_TN_ContractConcession.rentalratetype = "Step Up"
                    break;
                  default:
                    this.M_TN_ContractConcession.rentalratetype = "Unassigned"
                    break;
                }
                 

                this.M_TN_ContractConcession.applicationnoLabel = this.M_TN_ContractConcession.applicationno != null && this.M_TN_ContractConcession.applicationno != '' ? data.applicationno :'' 
                this.M_TN_ContractConcession.runningcdLabel = this.M_TN_ContractConcession.runningcd != null && this.M_TN_ContractConcession.runningcd != '' ? data.runningcd  :'' 
                this.M_TN_ContractConcession.contactid = data.contactid + this.separator + data.customername
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_ContractConcession.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_ContractConcession.enddate = data
        }
        ,MdtRange_rcd (data) {
            this.M_TN_ContractConcession.rcd = data
            this.GetLeasingPolicyDefault()
        }
        ,MdtRange_red (data) {
            this.M_TN_ContractConcession.red = data
        }
        ,MdtRange_utilitiesstartdate (data) {
            this.M_TN_ContractConcession.utilitiesstartdate = data
        }
        ,MdtRange_utilitiesenddate (data) {
            this.M_TN_ContractConcession.utilitiesenddate = data
        }
        ,MdtRange_operatingfromhour (data){
          this.M_TN_ContractConcession.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
          this.M_TN_ContractConcession.operatingtohour = data
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

        // [Global:GetSpecification].then(FnOpt9 => { if (FnOpt9 != null) { 
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

