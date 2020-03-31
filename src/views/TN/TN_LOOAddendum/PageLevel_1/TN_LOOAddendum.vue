<template>
  <div>
    <ABSListVuex
      :prop="propList"
      :title="data.QueryName"
      @rowClicked="$parent.rowClicked"
      @rowDblClicked="$parent.doDoubleClick"
      @rowLinkClick="$parent.rowLink"
      @pageSize="$parent.M_PageSize"
      @pagination="$parent.M_Pagination"
      @filter="$parent.M_Advance_Filter"
      @headTable="$parent.M_Head_Table"
      @refreshColumn="$parent.refreshColumn"
    />

    <div
      v-show="$parent.showForm"
      :style="'margin-top:10px;'"
      class="el"
      mousetip
      mousetip-msg="I'm a tooltip"
    >
      <div class="div-collapse" v-b-toggle.collapse1>
        <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
          Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}}
          <font-awesome-icon icon="sort-down" class="icon-style-1__master" />
        </span>
      </div>
      <b-collapse id="collapse1" :visible="true">
        <b-row style="padding-left: 10px; padding-bottom: 10px; !important;">
          <b-col md="12" id="col-left" class="bColMasterForm">
            <b-form
              :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex"
              :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex"
            >
              <b-row style="padding-left:10px;">
                <b-col md="6" id="col-left">
                  <!-- table open -->
                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnapplicationnoChange"
                        :prop="PI_applicationno"
                        :value="M_TN_LOOAddendum.applicationno"
                        :label="M_TN_LOOAddendum.applicationnoLabel"
                        ref="ref_applicationno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_addendumrefno"
                        v-model="M_TN_LOOAddendum.addendumrefno"
                        ref="ref_addendumrefno"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <ABSinputDateVuex
                        @input="OnaddendumdateChange"
                        :prop="PI_addendumdate"
                        v-model="M_TN_LOOAddendum.addendumdate"
                        ref="ref_addendumdate"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnaddendumtypecdChange"
                        :prop="PI_addendumtypecd"
                        :value="M_TN_LOOAddendum.addendumtypecd"
                        :label="M_TN_LOOAddendum.addendumtypecdLabel"
                        ref="ref_addendumtypecd"
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_loono"
                        v-model="M_TN_LOOAddendum.loono"
                        ref="ref_loono"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateVuex
                        @input="OnloodateChange"
                        :prop="PI_loodate"
                        v-model="M_TN_LOOAddendum.loodate"
                        ref="ref_loodate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <!-- <ABSinputTextVuex @input="OncontactidChange" :prop="PI_contactid" :value="M_TN_LOOAddendum.contactidLabel" :label="M_TN_LOOAddendum.contactidLabel" ref="ref_contactid"/> -->
                      <ABSinputTextVuex
                        :prop="PI_contactid"
                        v-model="M_TN_LOOAddendum.contactidLabel"
                        ref="ref_contactid"
                      />
                      <!-- <b-row>
                          <b-col md="12">
                            <b-row>
                              <b-col md="4" class="lbl-col-align">
                                <ABSLabelOnly
                                :prop="{cLabel: 'Customer', 
                                  cLabelSize: 4, 
                                  cValue: '', 
                                  cPageLevel: PageLevel, 
                                  cTabIndex: TabIndex, 
                                  cVisible: true,
                                  cClass: 'lbl-col-align'}"
                                />
                              </b-col>
                              <b-col md="5" style="margin-left: 5px;">
                                <ABSTextBoxOnly @input="OncontactidChange" :prop="PI_contactid" v-model="M_TN_LOOAddendum.contactid"  ref="ref_contactid" />
                              </b-col>
                              <b-col md="2">
                                {{ M_TN_LOOAddendum.customername }}
                              </b-col>
                            </b-row>
                          </b-col>
                      </b-row>-->
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <!-- <ABSinputTextVuex @input="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LOOAddendum.customercategorycdLabel" :label="M_TN_LOOAddendum.customercategorycdLabel" ref="ref_customercategorycd"/> -->
                      <ABSinputTextVuex
                        :prop="PI_customercategorycd"
                        v-model="M_TN_LOOAddendum.customercategorycdLabel"
                        ref="ref_customercategorycd"
                      />
                      <!-- <b-row>
                          <b-col md="12">
                            <b-row>
                              <b-col md="4" class="lbl-col-align">
                                <ABSLabelOnly
                                :prop="{cLabel: 'Customer Category', 
                                  cLabelSize: 4, 
                                  cValue: '', 
                                  cPageLevel: PageLevel, 
                                  cTabIndex: TabIndex, 
                                  cVisible: true,
                                  cClass: 'lbl-col-align'}"
                                />
                              </b-col>
                              <b-col md="5" style="margin-left: 10px;">
                                <ABSTextBoxOnly @input="OncustomercategorycdChange" :prop="PI_customercategorycd" v-model="M_TN_LOOAddendum.customercategorycd"  ref="ref_customercategorycd" />
                              </b-col>
                              <b-col md="2">
                                {{ M_TN_LOOAddendum.customercategorydescs }}
                              </b-col>
                            </b-row>
                          </b-col>
                      </b-row>-->
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_assessmentno"
                        v-model="M_TN_LOOAddendum.assessmentno"
                        ref="ref_assessmentno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_customerstatus"
                        v-model="M_TN_LOOAddendum.customerstatus"
                        ref="ref_customerstatus"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_referenceno"
                        v-model="M_TN_LOOAddendum.referenceno"
                        ref="ref_referenceno"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnbrandcdChange"
                        :prop="PI_brandcd"
                        :value="M_TN_LOOAddendum.brandcd"
                        :label="M_TN_LOOAddendum.brandcdLabel"
                        ref="ref_brandcd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_theme"
                        v-model="M_TN_LOOAddendum.theme"
                        ref="ref_theme"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_class"
                        v-model="M_TN_LOOAddendum.class"
                        ref="ref_class"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_category"
                        v-model="M_TN_LOOAddendum.category"
                        ref="ref_category"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateRangeVuex
                        :prop="PI_startdate"
                        :valueFrom="M_TN_LOOAddendum.startdate"
                        :valueTo="M_TN_LOOAddendum.enddate"
                        ref="ref_startdate"
                        @from="MdtRange_startdate"
                        @to="MdtRange_enddate"
                        @fromBlur="BlurRange_startdate"
                        @toBlur="BlurRange_enddate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <b-row>
                        <b-col md="4" class="lbl-col-align">
                          <label
                            :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'"
                            for
                          >Lease Period</label>
                        </b-col>
                        <b-col md="1" style="margin-left: 10px;">
                          <ABSTextBoxOnly
                            @input="OnleaseperiodChange"
                            :prop="PI_leaseperiod"
                            v-model="M_TN_LOOAddendum.leaseperiod"
                            ref="ref_leaseperiod"
                          />
                        </b-col>
                        <b-col md="4">
                          <label
                            :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'"
                            for
                          >{{M_TN_LOOAddendum.chargeperiod}} and {{M_TN_LOOAddendum.perioddays}} days. Free</label>
                        </b-col>
                        <b-col md="1">
                          <ABSTextBoxOnly
                            :prop="PI_freerentalperiod"
                            v-model="M_TN_LOOAddendum.freerentalperiod"
                            ref="ref_freerentalperiod"
                          />
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateRangeVuex
                        :prop="PI_rcd"
                        :valueFrom="M_TN_LOOAddendum.rcd"
                        :valueTo="M_TN_LOOAddendum.red"
                        ref="ref_rcd"
                        @from="MdtRange_rcd"
                        @to="MdtRange_red"
                        @fromBlur="BlurRange_rcd"
                        @toBlur="BlurRange_red"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateRangeVuex
                        :prop="PI_utilitiesstartdate"
                        :valueFrom="M_TN_LOOAddendum.utilitiesstartdate"
                        :valueTo="M_TN_LOOAddendum.utilitiesenddate"
                        ref="ref_utilitiesstartdate"
                        @from="MdtRange_utilitiesstartdate"
                        @to="MdtRange_utilitiesenddate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <!-- <ABSinputTextVuex @input="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_LOOAddendum.currencycdLabel" :label="M_TN_LOOAddendum.currencycdLabel" ref="ref_currencycd"/> -->
                      <ABSinputTextVuex
                        :prop="PI_currencycd"
                        v-model="M_TN_LOOAddendum.currencycdLabel"
                        ref="ref_currencycd"
                      />
                      <!-- <b-row>
                          <b-col md="12">
                            <b-row>
                              <b-col md="4" class="lbl-col-align">
                                <ABSLabelOnly
                                :prop="{cLabel: 'Lease Currency', 
                                  cLabelSize: 4, 
                                  cValue: '', 
                                  cPageLevel: PageLevel, 
                                  cTabIndex: TabIndex, 
                                  cVisible: true,
                                  cClass: 'lbl-col-align'}"
                                />
                              </b-col>
                              <b-col md="5" style="margin-left: 10px;">
                                <ABSTextBoxOnly :prop="PI_currencycd" v-model="M_TN_LOOAddendum.currencycd"  ref="ref_currencycd" />
                              </b-col>
                              <b-col md="2">
                                {{ M_TN_LOOAddendum.currencydescs }}
                              </b-col>
                            </b-row>
                          </b-col>
                      </b-row>-->
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_totalrental"
                        v-model="M_TN_LOOAddendum.totalrental"
                        ref="ref_totalrental"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputRadioButtonVuex
                        @input="OnantennastatusChange"
                        :prop="PI_antennastatus"
                        v-model="M_TN_LOOAddendum.antennastatus"
                        ref="ref_antennastatus"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputRadioButtonVuex
                        @input="OnpeggingrateChange"
                        :prop="PI_peggingrate"
                        v-model="M_TN_LOOAddendum.peggingrate"
                        ref="ref_peggingrate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputRadioButtonVuex
                        @input="OnchargeareaChange"
                        :prop="PI_chargearea"
                        v-model="M_TN_LOOAddendum.chargearea"
                        ref="ref_chargearea"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_totalarealot"
                        v-model="M_TN_LOOAddendum.totalarealot"
                        ref="ref_totalarealot"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_baserentalrate"
                        v-model="M_TN_LOOAddendum.baserentalrate"
                        ref="ref_baserentalrate"
                      />
                    </b-col>
                  </b-row>
                </b-col>
                <b-col md="6" id="col-right">
                  <b-row>
                    <b-col md="12">
                      <ABSCompute
                        :prop="PI_status"
                        v-model="M_TN_LOOAddendum.status"
                        ref="ref_status"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_telephoneline"
                        v-model="M_TN_LOOAddendum.telephoneline"
                        ref="ref_telephoneline"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_securitydepositrental"
                        v-model="M_TN_LOOAddendum.securitydepositrental"
                        ref="ref_securitydepositrental"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_securitydepositsc"
                        v-model="M_TN_LOOAddendum.securitydepositsc"
                        ref="ref_securitydepositsc"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_servicecharge"
                        v-model="M_TN_LOOAddendum.servicecharge"
                        ref="ref_servicecharge"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_promotionlevy"
                        v-model="M_TN_LOOAddendum.promotionlevy"
                        ref="ref_promotionlevy"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_telephonedeposit"
                        v-model="M_TN_LOOAddendum.telephonedeposit"
                        ref="ref_telephonedeposit"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_fitoutdeposit"
                        v-model="M_TN_LOOAddendum.fitoutdeposit"
                        ref="ref_fitoutdeposit"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_sinkingfund"
                        v-model="M_TN_LOOAddendum.sinkingfund"
                        ref="ref_sinkingfund"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputRadioButtonVuex
                        @input="OnrentalbaseChange"
                        :prop="PI_rentalbase"
                        v-model="M_TN_LOOAddendum.rentalbase"
                        ref="ref_rentalbase"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputRadioButtonVuex
                        @input="OnrevenuesharetypeChange"
                        :prop="PI_revenuesharetype"
                        v-model="M_TN_LOOAddendum.revenuesharetype"
                        ref="ref_revenuesharetype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_renewalperiod"
                        v-model="M_TN_LOOAddendum.renewalperiod"
                        ref="ref_renewalperiod"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_rentalratetype"
                        v-model="M_TN_LOOAddendum.rentalratetype"
                        ref="ref_rentalratetype"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_marketingid"
                        v-model="M_TN_LOOAddendum.marketingid"
                        ref="ref_marketingid"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputTextVuex
                        :prop="PI_fitoutpic"
                        v-model="M_TN_LOOAddendum.fitoutpic"
                        ref="ref_fitoutpic"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <b-row>
                        <b-col md="4" class="lbl-col-align">
                          <label
                            :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'"
                            for
                          >Fit Out Comm. Date</label>
                        </b-col>
                        <b-col md="3" style="margin-left: 10px;">
                          <ABSTextBoxOnly
                            :prop="PI_fitoutcommencedon"
                            v-model="M_TN_LOOAddendum.fitoutcommencedon"
                            ref="ref_fitoutcommencedon"
                          />
                        </b-col>
                        <b-col md="1">
                          <label
                            :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'"
                            for
                          >Duration</label>
                        </b-col>
                        <b-col md="1" style="padding-left: 20px !important;">
                          <ABSTextBoxOnly
                            :prop="PI_freerentalperiod"
                            v-model="M_TN_LOOAddendum.freerentalperiod"
                            ref="ref_freerentalperiod"
                          />
                        </b-col>
                        <b-col md="1">
                          <label
                            :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'"
                            for
                          >day(s)</label>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSinputDateVuex
                        @input="OnhandoverdateChange"
                        :prop="PI_handoverdate"
                        v-model="M_TN_LOOAddendum.handoverdate"
                        ref="ref_handoverdate"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSInputTimeRange
                        :prop="PI_operatingfromhour"
                        :valueFrom="M_TN_LOOAddendum.operatingfromhour"
                        :valueTo="M_TN_LOOAddendum.operatingtohour"
                        ref="ref_operatingfromhour"
                        @from="MdtRange_operatingfromhour"
                        @to="MdtRange_operatingtohour"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSInputSelectList
                        @change="OnmediacdChange"
                        :prop="PI_mediacd"
                        :value="M_TN_LOOAddendum.mediacd"
                        :label="M_TN_LOOAddendum.mediacdLabel"
                        ref="ref_mediacd"
                      />
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col md="12">
                      <ABSTextAreaVuex
                        @input="OnremarksChange"
                        :prop="PI_remarks"
                        v-model="M_TN_LOOAddendum.remarks"
                        ref="ref_remarks"
                      />
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
  props: { PageLevel: "", TabIndex: "", data: "" },
  data() {
    return {
      isOnAppNo: false,
      cInsertKey: "",
      FormType: "List",
      Module: "TN",
      propList: {
        initialWhere:
          "CustomerType = 'L' AND AddendumSequenceNo <> 0 AND ContractStatus IN ('1','2','3','4') AND SubPortfolioCd ='" +
          this.getDataUser().SubPortfolioCd +
          "' AND StatusCd = 'N'",
        LineNo: this.$parent.data.PageOrder,
        PageLevel: this.PageLevel,
        TabIndex: this.TabIndex,
        OrderBy: "",
        SourceField: "",
        ParamView: ""
      },
      isError: false,
      dataSpec: [],
      IsContractAddendumEditable: 0,
      IEBy: { Input: "", Edit: "" },
      TNSpec: "",

      M_TN_LOOAddendum: {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        applicationno: "",
        addendumsequenceno: 0,
        deviationapprovalno: "",
        copyfromapplicationno: "",
        loono: "",
        loodate: "",
        loino: "",
        loidate: "",
        lano: "",
        ladate: "",
        contactid: "",
        customername: "",
        eventno: "",
        eventdescs: "",
        customercategorycd: "",
        customercategorydescs: "",
        assessmentno: "",
        customersource: "",
        chargeperiod: "days",
        baserentalrate: 0,
        status: "",
        tenantstatus: "",
        contractstatus: "",
        referenceno: "",
        brandcd: "",
        brandname: "",
        lotthemecd: "",
        lotclasssequenceno: 0,
        lotcategorysequenceno: 0,
        startdate: "",
        enddate: "",
        leaseperiod: "0",
        freerentalperiod: "0",
        rcd: "",
        red: "",
        utilitiesstartdate: "",
        utilitiesenddate: "",
        currencycd: "",
        currencydescs: "",
        contractamt: 0,
        addendumrefno: "",
        addendumdate: "",
        addendumtypecd: "",
        addendumtypedescs: "",
        peggingrate: "N",
        revenuesharetype: "R",
        chargearea: "N",
        telephoneline: "",
        securitydepositrental: "",
        securitydepositsc: "",
        rentalbase: "R",
        renewalperiod: "",
        rentalratetype: "unknown",
        antennastatus: "",
        marketingid: "",
        fitoutcommencedon: "",
        fitouttime: 0,
        fitoutpic: "",
        handoverdate: "",
        operatingfromhour: "",
        operatingtohour: "",
        solicitorid: "",
        solicitorname: "",
        mediacd: "",
        servicecharge: "",
        promotionlevy: "",
        telephonedeposit: "",
        fitoutdeposit: "",
        sinkingfund: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        totalnetarea: 0,
        totalgrossarea: 0,
        totalsemigrossarea: 0,
        theme: "",
        class: "",
        category: "",
        marketingname: "",
        perioddays: 0,
        lastupdatestamp: 0,
        rowid: 0,
        customerstatus: "unknown",
        addendumrunningcd: ""
      },
      PI_applicationno: {
        dataLookUp: {
          LookUpCd: "GetLookUp_ApplicationNo",
          ColumnDB: "ApplicationNo",
          InitialWhere:
            "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "applicationno",
        cLabel: "Application No",
        cKey: true,
        cLabelSize: 4,
        cOrder: 1,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "ApplicationNo,LOONo"
      },
      PI_status: {
        cLabel: "Status",
        cLabelSize: 4,
        cValue: "",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cVisible: true,
        cStyle: "font-weight: bold;"
      },
      PI_addendumrefno: {
        cValidate: "required|max:20",
        cName: "addendumrefno",
        cLabel: "Addendum No",
        cLabelSize: 4,
        cOrder: 2,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_telephoneline: {
        cValidate: "max:3",
        cName: "telephoneline",
        cLabel: "Telephone Line(s)",
        cLabelSize: 4,
        cOrder: 20,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_addendumdate: {
        cValidate: "required",
        cName: "addendumdate",
        cLabel: "Addendum Date",
        cLabelSize: 4,
        cOrder: 3,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_securitydepositrental: {
        cValidate: "",
        cName: "securitydepositrental",
        cLabel: "Security Deposit Rental",
        cLabelSize: 4,
        cOrder: 21,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "Months"
      },
      PI_addendumtypecd: {
        dataLookUp: {
          LookUpCd: "GetAddendumType",
          ColumnDB: "AddendumTypeCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "addendumtypecd",
        cLabel: "Addendum Type",
        cKey: false,
        cLabelSize: 4,
        cOrder: 5,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "AddendumTypeCd,Descs"
      },
      PI_securitydepositsc: {
        cValidate: "",
        cName: "securitydepositsc",
        cLabel: "Security Deposit SC",
        cLabelSize: 4,
        cOrder: 22,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "Months"
      },
      PI_loono: {
        cValidate: "max:20",
        cName: "loono",
        cLabel: "LOO No",
        cLabelSize: 4,
        cOrder: 6,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_servicecharge: {
        cValidate: "",
        cName: "servicecharge",
        cLabel: "Service Charge",
        cLabelSize: 4,
        cOrder: 23,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "PSM"
      },
      PI_loodate: {
        cValidate: "",
        cName: "loodate",
        cLabel: "LOO Date",
        cLabelSize: 4,
        cOrder: 7,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_promotionlevy: {
        cValidate: "",
        cName: "promotionlevy",
        cLabel: "Promotion Levy",
        cLabelSize: 4,
        cOrder: 24,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "PSM"
      },
      PI_contactid: {
        dataLookUp: {
          LookUpCd: "",
          ColumnDB: "",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "contactid",
        cLabel: "Customer",
        cKey: false,
        cLabelSize: 4,
        cOrder: 8,
        cTriggered: false,
        cDefault: "",
        cProtect: true,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "ContactId,Name"
      },
      PI_telephonedeposit: {
        cValidate: "",
        cName: "telephonedeposit",
        cLabel: "Telephone Deposit",
        cLabelSize: 4,
        cOrder: 25,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "Lines"
      },
      PI_customercategorycd: {
        dataLookUp: {
          LookUpCd: "",
          ColumnDB: "",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "customercategorycd",
        cLabel: "Customer Category",
        cKey: false,
        cLabelSize: 4,
        cOrder: 8,
        cTriggered: false,
        cDefault: "",
        cProtect: true,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "CustomerCategoryCd,Descs"
      },
      PI_fitoutdeposit: {
        cValidate: "",
        cName: "fitoutdeposit",
        cLabel: "Fit Out Deposit",
        cLabelSize: 4,
        cOrder: 26,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "PSM"
      },
      // PI_tenantstatus: {
      //     cLabel: 'Customer Status',
      //     cLabelSize: 4,
      //     cValue: '',
      //     cPageLevel: this.PageLevel,
      //     cTabIndex: this.TabIndex,
      //     cVisible: true
      // },
      PI_sinkingfund: {
        cValidate: "",
        cName: "sinkingfund",
        cLabel: "Sinking Fund",
        cLabelSize: 4,
        cOrder: 27,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cLastLabel: "PSM"
      },
      PI_assessmentno: {
        cValidate: "max:20",
        cName: "assessmentno",
        cLabel: "Assessment No",
        cLabelSize: 4,
        cOrder: 10,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_rentalbase: {
        cValidate: "",
        cName: "rentalbase",
        cId: "rdbrentalbase",
        cRadioOptions: [
          { text: "Full Rental", value: "R" },
          { text: "Revenue Share", value: "S" },
          { text: "Combine", value: "C" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Rental Base",
        cLabelSize: 4,
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_referenceno: {
        cValidate: "max:60",
        cName: "referenceno",
        cLabel: "Customer Ref No",
        cLabelSize: 4,
        cOrder: 11,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_revenuesharetype: {
        cValidate: "",
        cName: "revenuesharetype",
        cId: "rdbrevenuesharetype",
        cRadioOptions: [
          { text: "Staggered", value: "S" },
          { text: "Range Scale", value: "R" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Revenue Share Calc.",
        cLabelSize: 4,
        cOrder: 28,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_brandcd: {
        dataLookUp: {
          LookUpCd: "GetBrandCd",
          ColumnDB: "BrandCd",
          InitialWhere: "LeasingStatus = 'Y'",
          ParamWhere: ""
        },
        cValidate: "required",
        cName: "brandcd",
        cLabel: "Brand Name",
        cKey: false,
        cLabelSize: 4,
        cOrder: 12,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "BrandCd,BrandName"
      },
      PI_renewalperiod: {
        cValidate: "",
        cName: "renewalperiod",
        cLabel: "Renewal Period",
        cLabelSize: 4,
        cOrder: 29,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_theme: {
        cValidate: "",
        cName: "theme",
        cLabel: "Theme",
        cLabelSize: 4,
        cOrder: 0,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      // PI_contractamt: {
      //     cLabel: 'Rental Type ',
      //     cLabelSize: 4,
      //     cValue: '',
      //     cPageLevel: this.PageLevel,
      //     cTabIndex: this.TabIndex,
      //     cVisible: true
      // },
      PI_class: {
        cValidate: "",
        cName: "class",
        cLabel: "Class",
        cLabelSize: 4,
        cOrder: 0,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_marketingid: {
        cValidate: "max:20",
        cName: "marketingid",
        cLabel: "Marketing",
        cLabelSize: 4,
        cOrder: 30,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_category: {
        cValidate: "",
        cName: "category",
        cLabel: "Category",
        cLabelSize: 4,
        cOrder: 0,
        cKey: true,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_fitoutpic: {
        cValidate: "",
        cName: "fitoutpic",
        cLabel: "Fit Out PIC",
        cLabelSize: 4,
        cOrder: 31,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_startdate: {
        cValidate: "",
        cName: "startdate",
        cLabel: "Lease Start - End Date ",
        cLabelSize: 4,
        cOrder: 13,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_fitoutcommencedon: {
        cValidate: "",
        cName: "fitoutcommencedon",
        cLabel: "Fit Out Comm. Date",
        cLabelSize: 4,
        cOrder: 32,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_leaseperiod: {
        cValidate: "required",
        cName: "leaseperiod",
        cLabel: "Lease Period ",
        cLabelSize: 4,
        cOrder: 14,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_handoverdate: {
        cValidate: "",
        cName: "handoverdate",
        cLabel: "Hand Over Date",
        cLabelSize: 4,
        cOrder: 33,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_freerentalperiod: {
        cValidate: "",
        cName: "freerentalperiod",
        cLabel: "Free",
        cLabelSize: 4,
        cOrder: 15,
        cKey: false,
        cType: "numeric",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_operatingfromhour: {
        cValidate: "",
        cName: "operatingfromhour",
        cLabel: "Operating From Hour",
        cLabelSize: 4,
        cOrder: 34,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_rcd: {
        cValidate: "required",
        cName: "rcd",
        cLabel: "RCD - RED ",
        cLabelSize: 4,
        cOrder: 16,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_operatingtohour: {
        cValidate: "",
        cName: "operatingtohour",
        cLabel: "Operating To Hour",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_utilitiesstartdate: {
        cValidate: "required",
        cName: "utilitiesstartdate",
        cLabel: "Utilities Start - End Date",
        cLabelSize: 4,
        cOrder: 17,
        cKey: false,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_mediacd: {
        dataLookUp: {
          LookUpCd: "GetLookupTNMedia",
          ColumnDB: "MediaCd",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "mediacd",
        cLabel: "Information Source",
        cKey: false,
        cLabelSize: 4,
        cOrder: 35,
        cTriggered: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "TN/TN_Media",
        cDisplayColumn: "MediaCd,Descs"
      },
      PI_currencycd: {
        dataLookUp: {
          LookUpCd: "",
          ColumnDB: "",
          InitialWhere: "",
          ParamWhere: ""
        },
        cValidate: "",
        cName: "currencycd",
        cLabel: "Lease Currency",
        cKey: false,
        cLabelSize: 4,
        cOrder: 8,
        cTriggered: false,
        cDefault: "",
        cProtect: true,
        cVisible: true,
        cAsync: false,
        cFilter: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cStatic: false,
        cOption: [],
        cMasterUrl: "",
        cDisplayColumn: "CurrencyCd,Descs"
      },
      PI_remarks: {
        cValidate: "",
        cName: "remarks",
        cLabel: "Remarks",
        cLabelSize: 4,
        cOrder: 36,
        cKey: false,
        cDefault: "",
        cProtect: false,
        cVisible: true,
        cResize: false,
        cReadOnly: false,
        cRows: 3,
        cMaxRows: 3,
        cSize: "md",
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_totalrental: {
        cValidate: "",
        cName: "totalrental",
        cLabel: "Total Rental",
        cLabelSize: 4,
        cOrder: 0,
        cKey: true,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: false,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_antennastatus: {
        cValidate: "",
        cName: "antennastatus",
        cId: "rdbantennastatus",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Antenna Lease",
        cLabelSize: 4,
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex,
        cKey: true
      },
      PI_peggingrate: {
        cValidate: "",
        cName: "peggingrate",
        cId: "rdbpeggingrate",
        cRadioOptions: [
          { text: "Yes", value: "Y" },
          { text: "No", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Peg Rate",
        cLabelSize: 4,
        cOrder: 19,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_chargearea: {
        cValidate: "",
        cName: "chargearea",
        cId: "rdbchargearea",
        cRadioOptions: [
          { text: "Gross", value: "G" },
          { text: "Semi", value: "S" },
          { text: "Net", value: "N" }
        ],
        cRadioDefaultOption: "",
        cLabel: "Base Calculation Area",
        cLabelSize: 4,
        cOrder: 0,
        cProtect: false,
        cVisible: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_totalarealot: {
        cValidate: "",
        cName: "totalarealot",
        cLabel: "Total Area (Gross/Semi/Net)",
        cLabelSize: 4,
        cOrder: 0,
        cKey: true,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_baserentalrate: {
        cValidate: "",
        cName: "baserentalrate",
        cLabel: "Average Rate",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "decimal",
        cDecimal: 2,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_customerstatus: {
        cValidate: "",
        cName: "customerstatus",
        cLabel: "Customer Status",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cDecimal: 2,
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },
      PI_rentalratetype: {
        cValidate: "",
        cName: "rentalratetype",
        cLabel: "Rental Type",
        cLabelSize: 4,
        cOrder: 0,
        cKey: false,
        cType: "text",
        cVisible: true,
        cProtect: true,
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cParentForm: "FormScope_" + this.PageLevel + "_" + this.TabIndex
      },

      PTAnalysis: {
        cPageLevel: this.PageLevel,
        cTabIndex: this.TabIndex,
        cPageMasterSeq: this.data.PageMasterSeq,
        cFormPageNo: this.data.PageOrder,
        cProtect: false
      }
    };
  },
  computed: {
    inputStatus() {
      if (
        this.$store.getters.getLevel == this.PageLevel &&
        this.$store.getters.getTab == this.TabIndex
      ) {
        return this.$store.getters.getStatus.toUpperCase();
      } else {
        return "VIEW";
      }
    },
    DataRow() {
      return this.$store.getters.GetPage1Data;
    }
  },
  methods: {
    GetLeasingPolicyDefault() {
      //proses onChange RCD Date
      var dt = new Date(this.M_TN_LOOAddendum.rcd);
      var year = dt.getFullYear();

      var param = {
        OptionFunctionCd: "GetLeasingPolicyData",
        ModuleCd: this.Module,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        LeasingPolicyYear: year,
        CustomerCategoryCd: this.M_TN_LOOAddendum.customercategorycd,
        LeasePeriod: this.M_TN_LOOAddendum.leaseperiod
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress[0];
        // this.isCurrency(data.servicecharge, this.decimal)
        this.M_TN_LOOAddendum.servicecharge = this.isCurrency(
          data.ServiceCharge,
          this.decimal
        );
        this.M_TN_LOOAddendum.promotionlevy = this.isCurrency(
          data.PromotionLevy,
          this.decimal
        );
        this.M_TN_LOOAddendum.telephonedeposit = this.isCurrency(
          data.TelephoneDeposit,
          this.decimal
        );
        this.M_TN_LOOAddendum.fitoutdeposit = this.isCurrency(
          data.FitOutDeposit,
          this.decimal
        );
        this.M_TN_LOOAddendum.sinkingfund = this.isCurrency(
          data.SinkingFund,
          this.decimal
        );

        this.M_TN_LOOAddendum.securitydepositrental =
          data.SecurityDepositRental;
        this.M_TN_LOOAddendum.securitydepositsc = data.SecurityDepositSC;
        console.log("perioddays", this.M_TN_LOOAddendum.perioddays);
        console.log("perioddays", this.M_TN_LOOAddendum.chargeperiod);
        switch (this.M_TN_LOOAddendum.chargeperiod) {
          case "months":
            // var dtred = this.dateAdd2('M',this.M_TN_LOOAddendum.rcd,this.M_TN_LOOAddendum.leaseperiod)
            // var check = moment(dtred, 'YYYY/MM/DD');
            // var check2 = moment(this.M_TN_LOOAddendum.rcd, 'YYYY/MM/DD');
            // var iDay1 = parseInt(check.format('D'))
            // var iDay2 = parseInt(check2.format('D'))
            // if(iDay1>=iDay2){
            //   this.M_TN_LOOAddendum.red = this.dateAdd2('D',this.M_TN_LOOAddendum.rcd,-1)
            // }
            this.M_TN_LOOAddendum.red = this.dateAdd2(
              "D",
              this.dateAdd2(
                "M",
                this.M_TN_LOOAddendum.rcd,
                this.M_TN_LOOAddendum.leaseperiod
              ),
              -1
            );

            if (this.M_TN_LOOAddendum.perioddays > 0) {
              this.M_TN_LOOAddendum.red = this.dateAdd2(
                "D",
                this.M_TN_LOOAddendum.red,
                this.M_TN_LOOAddendum.perioddays
              );
            }
            break;
          case "days":
            this.M_TN_LOOAddendum.red = this.dateAdd2(
              "D",
              this.M_TN_LOOAddendum.rcd,
              this.M_TN_LOOAddendum.leaseperiod
            );
            break;
          case "years":
            this.M_TN_LOOAddendum.red = this.dateAdd2(
              "D",
              this.dateAdd2(
                "Y",
                this.M_TN_LOOAddendum.rcd,
                this.M_TN_LOOAddendum.leaseperiod
              ),
              -1
            );

            if (this.M_TN_LOOAddendum.perioddays > 0) {
              this.M_TN_LOOAddendum.red = this.dateAdd2(
                "D",
                this.M_TN_LOOAddendum.red,
                this.M_TN_LOOAddendum.perioddays
              );
            }
            break;
        }
        console.log("GetLeasingPolicyDefault", this.M_TN_LOOAddendum.red);
      });
    },

    GetContractAddendumData(event = null) {
      var param = {
        OptionFunctionCd: "GetContractAddendumData",
        ModuleCd: this.Module,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ApplicationNo: this.M_TN_LOOAddendum.applicationno,
        AddendumSequenceNo: this.M_TN_LOOAddendum.addendumsequenceno
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress[0];

        if (event == "M_Edit") {
          if (
            data.Status != "C" ||
            data.Status != "X" ||
            (data.Status != "P" && data.DeviationApprovalNo != "") ||
            data.DeviationApprovalNo != null
          ) {
            this.IsContractAddendumEditable = 1;
          }
          return;
        }
      });
    },

    GetContract(ApplicationNo) {
      var param = {
        OptionFunctionCd: "GetContractData",
        ModuleCd: this.Module,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ApplicationNo: ApplicationNo
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress[0];
        // console.log('GetContract')
        // console.log(data)
        this.M_TN_LOOAddendum.rcd = data.RCD;
        this.M_TN_LOOAddendum.leaseperiod = data.LeasePeriod;
        this.M_TN_LOOAddendum.loono = data.LOONo;
        this.M_TN_LOOAddendum.loodate = data.LOODate;
        this.M_TN_LOOAddendum.contactid = data.ContactId;
        this.M_TN_LOOAddendum.customername = data.CustomerName;
        this.M_TN_LOOAddendum.customercategorycd = data.CustomerCategoryCd;
        this.M_TN_LOOAddendum.customercategorydescs =
          data.CustomerCategoryDescs;

        switch (data.TenantStatus) {
          case "N":
            this.M_TN_LOOAddendum.customerstatus = "NEW";
            break;
          case "P":
            this.M_TN_LOOAddendum.customerstatus = "Replacement";
            break;
          case "R":
            this.M_TN_LOOAddendum.customerstatus = "Renew";
            break;
          default:
            this.M_TN_LOOAddendum.customerstatus = "Unassigned";
            break;
        }

        this.M_TN_LOOAddendum.contractstatus = data.ContractStatus;

        switch (data.Status) {
          case "N":
            this.M_TN_LOOAddendum.status = "New / Pending Addendum";
            break;
          case "P":
            this.M_TN_LOOAddendum.status = "Posted Addendum";
            break;
        }

        this.M_TN_LOOAddendum.assessmentno = data.AssessmentNo;
        this.M_TN_LOOAddendum.referenceno = data.ReferenceNo;
        this.M_TN_LOOAddendum.brandcd = data.BrandCd;
        this.M_TN_LOOAddendum.brandname = data.BrandName;
        this.M_TN_LOOAddendum.theme = data.Theme;
        this.M_TN_LOOAddendum.class = data.Class;
        this.M_TN_LOOAddendum.category = data.Category;
        this.M_TN_LOOAddendum.startdate = data.StartDate;
        this.M_TN_LOOAddendum.enddate = data.EndDate;

        switch (data.ChargePeriod) {
          case "M":
            this.M_TN_LOOAddendum.chargeperiod = "months";
            break;
          case "D":
            this.M_TN_LOOAddendum.chargeperiod = "days";
            break;
          case "Y":
            this.M_TN_LOOAddendum.chargeperiod = "years";
            break;
        }

        this.M_TN_LOOAddendum.copyfromapplicationno = data.ApplicationNo;

        this.M_TN_LOOAddendum.freerentalperiod = data.FreeRentalPeriod;

        console.log(data.ContractStatus);
        console.log(this.dataSpec.AmortizeStartAt);
        if (data.ContractStatus == "" || this.dataSpec.AmortizeStartAt == "") {
          this.PI_rcd.cProtect = true;
        } else {
          if (this.dataSpec.AmortizeStartAt == "O" && data.ContractStatus < 2) {
            this.PI_rcd.cProtect = false;
          } else if (
            this.dataSpec.AmortizeStartAt == "I" &&
            data.ContractStatus < 3
          ) {
            this.PI_rcd.cProtect = false;
          } else if (
            this.dataSpec.AmortizeStartAt == "A" &&
            data.ContractStatus < 4
          ) {
            this.PI_rcd.cProtect = false;
          } else {
            this.PI_rcd.cProtect = true;
          }
        }

        this.M_TN_LOOAddendum.utilitiesstartdate = data.UtilitiesStartDate;
        this.M_TN_LOOAddendum.utilitiesenddate = data.UtilitiesEndDate;
        this.M_TN_LOOAddendum.currencycd = data.CurrencyCd;
        this.M_TN_LOOAddendum.totalrental = this.isCurrency(
          data.ContractAmt,
          this.decimal
        );
        // this.M_TN_LOOAddendum.peggingrate = this.isCurrency(data.PeggingRate, this.decimal)
        this.M_TN_LOOAddendum.peggingrate = data.PeggingRate;
        this.M_TN_LOOAddendum.revenuesharetype = data.RevenueShareType;
        this.M_TN_LOOAddendum.chargearea = data.ChargeArea;

        if (data.AntennaStatus == "") {
          this.M_TN_LOOAddendum.antennastatus = "N";
        } else {
          this.M_TN_LOOAddendum.antennastatus = data.AntennaStatus;
        }

        this.M_TN_LOOAddendum.totalarealot =
          this.isCurrency(data.TotalGrossArea, this.decimal) +
          " / " +
          this.isCurrency(data.TotalSemiGrossArea, this.decimal) +
          " / " +
          this.isCurrency(data.TotalNetArea, this.decimal);

        this.M_TN_LOOAddendum.baserentalrate = data.BaseRentalRate;
        this.M_TN_LOOAddendum.telephoneline = data.TelephoneLine;
        this.M_TN_LOOAddendum.rentalbase = data.RentalBase;
        this.M_TN_LOOAddendum.renewalperiod = data.RenewalPeriod;

        switch (data.RentalRateType) {
          case "F":
            this.M_TN_LOOAddendum.rentalratetype = "Flat";
            break;
          case "S":
            this.M_TN_LOOAddendum.rentalratetype = "Step Up";
            break;
          default:
            this.M_TN_LOOAddendum.rentalratetype = "Unassigned";
            break;
        }

        (this.M_TN_LOOAddendum.marketingid = data.MarketingID),
          (this.M_TN_LOOAddendum.fitoutcommencedon = data.FitOutCommencedOn);
        this.M_TN_LOOAddendum.fitouttime = data.FitOutTime;
        this.M_TN_LOOAddendum.fitoutpic = data.FitOutPIC;
        this.M_TN_LOOAddendum.handoverdate = data.HandOverDate;
        this.M_TN_LOOAddendum.operatingfromhour = data.OperatingFromHour;
        this.M_TN_LOOAddendum.operatingtohour = data.OperatingToHour;
        (this.M_TN_LOOAddendum.mediacd = data.MediaCd),
          (this.M_TN_LOOAddendum.securitydepositrental =
            data.SecurityDepositRental);
        this.M_TN_LOOAddendum.securitydepositsc = data.SecurityDepositSC;

        this.M_TN_LOOAddendum.servicecharge = this.isCurrency(
          data.ServiceCharge,
          this.decimal
        );
        this.M_TN_LOOAddendum.promotionlevy = this.isCurrency(
          data.PromotionLevy,
          this.decimal
        );
        this.M_TN_LOOAddendum.telephonedeposit = this.isCurrency(
          data.TelephoneDeposit,
          this.decimal
        );
        this.M_TN_LOOAddendum.fitoutdeposit = this.isCurrency(
          data.FitOutDeposit,
          this.decimal
        );
        this.M_TN_LOOAddendum.sinkingfund = this.isCurrency(
          data.SinkingFund,
          this.decimal
        );
        this.M_TN_LOOAddendum.remarks = data.Remarks;

        this.M_TN_LOOAddendum.copyfromapplicationnoLabel =
          this.M_TN_LOOAddendum.copyfromapplicationno != null &&
          this.M_TN_LOOAddendum.copyfromapplicationno != ""
            ? data.ApplicationNo + this.separator + data.LOONo
            : "";
        this.M_TN_LOOAddendum.brandcdLabel =
          this.M_TN_LOOAddendum.brandcd != null &&
          this.M_TN_LOOAddendum.brandcd != ""
            ? data.BrandCd + this.separator + data.BrandName
            : "";
        // this.M_TN_LOOAddendum.marketingidLabel = this.M_TN_LOOAddendum.marketingid != null && this.M_TN_LOOAddendum.marketingid != '' ? data.MarketingId + this.separator + data.MarketingName :''
        this.M_TN_LOOAddendum.mediacdLabel =
          this.M_TN_LOOAddendum.mediacd != null &&
          this.M_TN_LOOAddendum.mediacd != ""
            ? data.MediaCd + this.separator
            : "";

        setTimeout(() => {
          this.M_TN_LOOAddendum.red = data.RED;
          this.M_TN_LOOAddendum.perioddays = data.PeriodDays;
          console.log("GetContract", this.M_TN_LOOAddendum.red);
        }, 100);
        // this.M_TN_LOOAddendum.currencycdLabel = this.M_TN_LOOAddendum.currencycd != null && this.M_TN_LOOAddendum.currencycd != '' ? data.CurrencyCd + this.separator  :''

        // this.SetLookUpBrand(this.M_TN_LOOAddendum.contactid)
      });
    },
    SetLookUpBrand() {
      if (
        this.M_TN_LOOAddendum.contactid != "" &&
        this.M_TN_LOOAddendum.contactid != null
      ) {
        // alert(this.M_TN_LOOAddendum.contactid)
        var param = {
          OptionFunctionCd: "GetDataBrand",
          ModuleCd: this.Module,
          BrandCd: this.M_TN_LOOAddendum.contactid
        };

        this.FnDynamicFunction(param).then(ress => {
          if (ress.length > 0) {
            this.PI_brandcd.dataLookUp.InitialWhere +=
              "AND (BrandOwnerId = '" +
              this.M_TN_LOOAddendum.contactid +
              "' OR  ISNULL(BrandOwnerId,'')='')";
          }
        });
      }
    },
    GetSpecificationData() {
      var param = {
        OptionFunctionCd: "GetSpecification",
        ModuleCd: this.Module,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null || ress.length == 0) {
          this.alertError("Please setup the Tenancy Specification first.");
          this.isError = true;
          return;
        } else {
          this.isError = false;
        }

        this.dataSpec = ress[0];

        // if (ress == null) return
        // var data = ress[0]
        // // console.log('GetSpec')
        // // console.log(data)

        // if (data.AddendumRunningCd != null && data.AddendumRunningCd != "") {
        //   this.M_TN_LOOAddendum.addendumrefno = "(auto)"
        //   this.PI_addendumrefno.cProtect = true
        // } else {
        //   this.M_TN_LOOAddendum.addendumrefno = ""
        //   this.PI_addendumrefno.cProtect = false
        // }

        this.PI_antennastatus.cProtect = true;
        this.PI_chargearea.cProtect = true;
        this.PI_rentalbase.cProtect = true;
        this.PI_baserentalrate.cProtect = true;
        this.PI_totalrental.cProtect = true;
        this.PI_theme.cProtect = true;
        this.PI_class.cProtect = true;
        this.PI_category.cProtect = true;
        this.PI_totalarealot.cProtect = true;
      });
    },
    OncustomercategorycdChange(data) {
      this.SetLookUpBrand();
    },
    OncontactidChange(data) {
      this.SetLookUpBrand();
    },
    OncurrencycdChange(data) {},
    OnapplicationnoChange(data) {
      this.$nextTick(() => {
        this.M_TN_LOOAddendum.applicationno = data.id;
        this.M_TN_LOOAddendum.applicationnoLabel = data.label;
        this.isOnAppNo = true;
        if (this.inputStatus != "VIEW") {
          this.GetContract(data.id);
          this.SetLookUpBrand();
          setTimeout(() => {
            this.isOnAppNo = false;
            console.log("OnapplicationnoChange", this.isOnAppNo);
          }, 2000);
        }
      });
      this.$forceUpdate();
    },
    MdtRange_operatingfromhour(data) {
      this.M_TN_LOOAddendum.operatingfromhour = data;
    },
    MdtRange_operatingtohour(data) {
      this.M_TN_LOOAddendum.operatingtohour = data;
    },
    OnaddendumdateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{addendumdate}
        }
      });
      this.$forceUpdate();
    },
    OnaddendumtypecdChange(data) {
      this.$nextTick(() => {
        this.M_TN_LOOAddendum.addendumtypecd = data.id;
        this.M_TN_LOOAddendum.addendumtypecdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{addendumtypecd}
        }
      });
      this.$forceUpdate();
    },
    OnloodateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{loodate}
        }
      });
      this.$forceUpdate();
    },
    OnrentalbaseChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{rentalbase}
        }
      });
      this.$forceUpdate();
    },
    OnrevenuesharetypeChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{revenuesharetype}
        }
      });
      this.$forceUpdate();
    },
    OnbrandcdChange(data) {
      this.$nextTick(() => {
        this.M_TN_LOOAddendum.brandcd = data.id;
        this.M_TN_LOOAddendum.brandcdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{brandcd}
        }
      });
      this.$forceUpdate();
    },
    OnfitoutcommencedonChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{fitoutcommencedon}
        }
      });
      this.$forceUpdate();
    },
    OnhandoverdateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{handoverdate}
        }
      });
      this.$forceUpdate();
    },
    OnmediacdChange(data) {
      this.$nextTick(() => {
        this.M_TN_LOOAddendum.mediacd = data.id;
        this.M_TN_LOOAddendum.mediacdLabel = data.label;
        if (this.inputStatus != "VIEW") {
          //{mediacd}
        }
      });
      this.$forceUpdate();
    },
    OnremarksChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{remarks}
        }
      });
      this.$forceUpdate();
    },
    OnantennastatusChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{antennastatus}
        }
      });
      this.$forceUpdate();
    },
    OnpeggingrateChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{peggingrate}
        }
      });
      this.$forceUpdate();
    },
    OnchargeareaChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          //{chargearea}
        }
      });
      this.$forceUpdate();
    },

    setToolbarButton() {
      this.getToolbar().statusFunction[2].disabled = true;
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
      this.$refs.modalTest.show();
    },
    paramFromParent() {},
    M_Post(dt) {},
    M_Insert() {
      if (this.M_TN_LOOAddendum.applicationno == "(auto)") {
        this.M_TN_LOOAddendum.applicationno == "null";
      }

      if (this.M_TN_LOOAddendum.loono == "(auto)") {
        this.M_TN_LOOAddendum.loono == "null";
      }

      if (this.M_TN_LOOAddendum.addendumrefno == "(auto)") {
        this.M_TN_LOOAddendum.addendumrefno = "null";
      }

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ApplicationNo:
          this.M_TN_LOOAddendum.applicationno == "" ||
          this.M_TN_LOOAddendum.applicationno == null
            ? "NULL"
            : this.M_TN_LOOAddendum.applicationno,
        LOONo: this.M_TN_LOOAddendum.loono,
        LOODate:
          this.M_TN_LOOAddendum.loodate == "" ||
          this.M_TN_LOOAddendum.loodate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.loodate,
        CopyFromApplicationNo: this.M_TN_LOOAddendum.copyfromapplicationno,
        AddendumRefNo: this.M_TN_LOOAddendum.addendumrefno,
        AddendumDate:
          this.M_TN_LOOAddendum.addendumdate == "" ||
          this.M_TN_LOOAddendum.addendumdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.addendumdate,
        AddendumTypeCd:
          this.M_TN_LOOAddendum.addendumtypecd == "" ||
          this.M_TN_LOOAddendum.addendumtypecd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.addendumtypecd,
        EventNo: this.M_TN_LOOAddendum.eventno,
        AssessmentNo: this.M_TN_LOOAddendum.assessmentno,
        ContactId: this.M_TN_LOOAddendum.contactid,
        ReferenceNo: this.M_TN_LOOAddendum.referenceno,
        BrandCd:
          this.M_TN_LOOAddendum.brandcd == "" ||
          this.M_TN_LOOAddendum.brandcd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.brandcd,
        BrandName: this.M_TN_LOOAddendum.brandname,
        StartDate:
          this.M_TN_LOOAddendum.startdate == "" ||
          this.M_TN_LOOAddendum.startdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.startdate,
        EndDate: this.M_TN_LOOAddendum.enddate,
        LeasePeriod: this.M_TN_LOOAddendum.leaseperiod,
        FreeRentalPeriod: this.M_TN_LOOAddendum.freerentalperiod,
        RCD:
          this.M_TN_LOOAddendum.rcd == "" || this.M_TN_LOOAddendum.rcd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.rcd,
        RED:
          this.M_TN_LOOAddendum.red == "" || this.M_TN_LOOAddendum.red == null
            ? "NULL"
            : this.M_TN_LOOAddendum.red,
        UtilitiesStartDate:
          this.M_TN_LOOAddendum.utilitiesstartdate == "" ||
          this.M_TN_LOOAddendum.utilitiesstartdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.utilitiesstartdate,
        UtilitiesEndDate:
          this.M_TN_LOOAddendum.utilitiesenddate == "" ||
          this.M_TN_LOOAddendum.utilitiesenddate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.utilitiesenddate,
        CurrencyCd: this.M_TN_LOOAddendum.currencycd,
        PeggingRate: this.M_TN_LOOAddendum.peggingrate,
        RevenueShareType: this.M_TN_LOOAddendum.revenuesharetype,
        ChargeArea: this.M_TN_LOOAddendum.chargearea,
        TelephoneLine: this.M_TN_LOOAddendum.telephoneline,
        SecurityDepositRental: this.M_TN_LOOAddendum.securitydepositrental,
        SecurityDepositSC: this.M_TN_LOOAddendum.securitydepositsc,
        RentalBase: this.M_TN_LOOAddendum.rentalbase,
        RenewalPeriod: this.M_TN_LOOAddendum.renewalperiod,
        MarketingID: this.M_TN_LOOAddendum.marketingid,
        AntennaStatus: this.M_TN_LOOAddendum.antennastatus,
        FitOutCommencedOn:
          this.M_TN_LOOAddendum.fitoutcommencedon == "" ||
          this.M_TN_LOOAddendum.fitoutcommencedon == null
            ? "NULL"
            : this.M_TN_LOOAddendum.fitoutcommencedon,
        FitOutTime: this.M_TN_LOOAddendum.fitouttime,
        FitOutPIC: this.M_TN_LOOAddendum.fitoutpic,
        HandOverDate:
          this.M_TN_LOOAddendum.handoverdate == "" ||
          this.M_TN_LOOAddendum.handoverdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.handoverdate,
        OperatingFromHour: this.M_TN_LOOAddendum.operatingfromhour,
        OperatingToHour: this.M_TN_LOOAddendum.operatingtohour,
        MediaCd:
          this.M_TN_LOOAddendum.mediacd == "" ||
          this.M_TN_LOOAddendum.mediacd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.mediacd,
        ServiceCharge: this.M_TN_LOOAddendum.servicecharge
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.servicecharge,
              ",",
              "",
              "number"
            )
          : 0,
        PromotionLevy: this.M_TN_LOOAddendum.promotionlevy
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.promotionlevy,
              ",",
              "",
              "number"
            )
          : 0,
        TelephoneDeposit: this.M_TN_LOOAddendum.telephonedeposit
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.telephonedeposit,
              ",",
              "",
              "number"
            )
          : 0,
        FitOutDeposit: this.M_TN_LOOAddendum.fitoutdeposit
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.fitoutdeposit,
              ",",
              "",
              "number"
            )
          : 0,
        SinkingFund: this.M_TN_LOOAddendum.sinkingfund
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.sinkingfund,
              ",",
              "",
              "number"
            )
          : 0,
        Remarks: this.M_TN_LOOAddendum.remarks,
        UserInput: this.getDataUser().UserId,
        CustomerCategory: this.M_TN_LOOAddendum.customercategorycd
      };

      this.postJSON(this.getUrlInsert(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultInsert(response.Message);
      });
    },
    M_Update() {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        ApplicationNo:
          this.M_TN_LOOAddendum.applicationno == "" ||
          this.M_TN_LOOAddendum.applicationno == null
            ? "NULL"
            : this.M_TN_LOOAddendum.applicationno,
        AddendumSequenceNo: this.M_TN_LOOAddendum.addendumsequenceno,
        AddendumRefNo: this.M_TN_LOOAddendum.addendumrefno,
        AddendumDate:
          this.M_TN_LOOAddendum.addendumdate == "" ||
          this.M_TN_LOOAddendum.addendumdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.addendumdate,
        AddendumTypeCd:
          this.M_TN_LOOAddendum.addendumtypecd == "" ||
          this.M_TN_LOOAddendum.addendumtypecd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.addendumtypecd,
        LOONo: this.M_TN_LOOAddendum.loono,
        LOODate:
          this.M_TN_LOOAddendum.loodate == "" ||
          this.M_TN_LOOAddendum.loodate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.loodate,
        ContactId: this.M_TN_LOOAddendum.contactid,
        EventNo: this.M_TN_LOOAddendum.eventno,
        AssessmentNo: this.M_TN_LOOAddendum.assessmentno,
        ReferenceNo: this.M_TN_LOOAddendum.referenceno,
        BrandCd:
          this.M_TN_LOOAddendum.brandcd == "" ||
          this.M_TN_LOOAddendum.brandcd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.brandcd,
        BrandName: this.M_TN_LOOAddendum.brandname,
        StartDate:
          this.M_TN_LOOAddendum.startdate == "" ||
          this.M_TN_LOOAddendum.startdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.startdate,
        EndDate: this.M_TN_LOOAddendum.enddate,
        LeasePeriod: this.M_TN_LOOAddendum.leaseperiod,
        FreeRentalPeriod: this.M_TN_LOOAddendum.freerentalperiod,
        RCD:
          this.M_TN_LOOAddendum.rcd == "" || this.M_TN_LOOAddendum.rcd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.rcd,
        RED:
          this.M_TN_LOOAddendum.red == "" || this.M_TN_LOOAddendum.red == null
            ? "NULL"
            : this.M_TN_LOOAddendum.red,
        UtilitiesStartDate:
          this.M_TN_LOOAddendum.utilitiesstartdate == "" ||
          this.M_TN_LOOAddendum.utilitiesstartdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.utilitiesstartdate,
        UtilitiesEndDate:
          this.M_TN_LOOAddendum.utilitiesenddate == "" ||
          this.M_TN_LOOAddendum.utilitiesenddate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.utilitiesenddate,
        CurrencyCd: this.M_TN_LOOAddendum.currencycd,
        ContractAmt: this.M_TN_LOOAddendum.contractamt,
        PeggingRate: this.M_TN_LOOAddendum.peggingrate,
        RevenueShareType: this.M_TN_LOOAddendum.revenuesharetype,
        ChargeArea: this.M_TN_LOOAddendum.chargearea,
        TelephoneLine: this.M_TN_LOOAddendum.telephoneline,
        SecurityDepositRental: this.M_TN_LOOAddendum.securitydepositrental,
        SecurityDepositSC: this.M_TN_LOOAddendum.securitydepositsc,
        RentalBase: this.M_TN_LOOAddendum.rentalbase,
        RenewalPeriod: this.M_TN_LOOAddendum.renewalperiod,
        MarketingID: this.M_TN_LOOAddendum.marketingid,
        AntennaStatus: this.M_TN_LOOAddendum.antennastatus,
        FitOutCommencedOn:
          this.M_TN_LOOAddendum.fitoutcommencedon == "" ||
          this.M_TN_LOOAddendum.fitoutcommencedon == null
            ? "NULL"
            : this.M_TN_LOOAddendum.fitoutcommencedon,
        FitOutTime: this.M_TN_LOOAddendum.fitouttime,
        FitOutPIC: this.M_TN_LOOAddendum.fitoutpic,
        HandOverDate:
          this.M_TN_LOOAddendum.handoverdate == "" ||
          this.M_TN_LOOAddendum.handoverdate == null
            ? "NULL"
            : this.M_TN_LOOAddendum.handoverdate,
        OperatingFromHour: this.M_TN_LOOAddendum.operatingfromhour,
        OperatingToHour: this.M_TN_LOOAddendum.operatingtohour,
        MediaCd:
          this.M_TN_LOOAddendum.mediacd == "" ||
          this.M_TN_LOOAddendum.mediacd == null
            ? "NULL"
            : this.M_TN_LOOAddendum.mediacd,
        ServiceCharge: this.M_TN_LOOAddendum.servicecharge
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.servicecharge,
              ",",
              "",
              "number"
            )
          : 0,
        PromotionLevy: this.M_TN_LOOAddendum.promotionlevy
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.promotionlevy,
              ",",
              "",
              "number"
            )
          : 0,
        TelephoneDeposit: this.M_TN_LOOAddendum.telephonedeposit
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.telephonedeposit,
              ",",
              "",
              "number"
            )
          : 0,
        FitOutDeposit: this.M_TN_LOOAddendum.fitoutdeposit
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.fitoutdeposit,
              ",",
              "",
              "number"
            )
          : 0,
        SinkingFund: this.M_TN_LOOAddendum.sinkingfund
          ? this.replaceAllString(
              this.M_TN_LOOAddendum.sinkingfund,
              ",",
              "",
              "number"
            )
          : 0,
        Remarks: this.M_TN_LOOAddendum.remarks,
        UserEdit: this.getDataUser().UserId,
        LastUpdateStamp: this.M_TN_LOOAddendum.lastupdatestamp,
        CustomerCategory: this.M_TN_LOOAddendum.customercategorycd
      };

      this.postJSON(this.getUrlUpdate(), param).then(response => {
        if (response == null) return;

        //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
        this.$parent.resultUpdate(response.Message);
      });
    },
    M_ClearForm() {
      this.M_TN_LOOAddendum = {
        subportfoliocd: this.getDataUser().SubPortfolioCd,
        applicationno: "",
        addendumsequenceno: 0,
        deviationapprovalno: "",
        copyfromapplicationno: "",
        loono: "",
        loodate: this.getToday(),
        loino: "",
        loidate: "",
        lano: "",
        ladate: "",
        contactid: "",
        customername: "",
        eventno: "",
        eventdescs: "",
        customercategorycd: "",
        customercategorydescs: "",
        assessmentno: "",
        customersource: "",
        chargeperiod: "days",
        baserentalrate: 0,
        status: "",
        tenantstatus: "unknown",
        contractstatus: "",
        referenceno: "",
        brandcd: "",
        brandname: "",
        lotthemecd: "",
        lotclasssequenceno: 0,
        lotcategorysequenceno: 0,
        startdate: "",
        enddate: "",
        leaseperiod: "0",
        freerentalperiod: "0",
        rcd: "",
        red: "",
        utilitiesstartdate: "",
        utilitiesenddate: "",
        currencycd: "",
        currencydescs: "",
        contractamt: 0,
        addendumrefno: "",
        addendumdate: this.getToday(),
        addendumtypecd: "",
        addendumtypedescs: "",
        peggingrate: "N",
        revenuesharetype: "R",
        chargearea: "N",
        telephoneline: "",
        securitydepositrental: "",
        securitydepositsc: "",
        rentalbase: "R",
        renewalperiod: "",
        rentalratetype: "unknown",
        antennastatus: "N",
        marketingid: "",
        fitoutcommencedon: "",
        fitouttime: 0,
        fitoutpic: "",
        handoverdate: "",
        operatingfromhour: "",
        operatingtohour: "",
        solicitorid: "",
        solicitorname: "",
        mediacd: "",
        servicecharge: "",
        promotionlevy: "",
        telephonedeposit: "",
        fitoutdeposit: "",
        sinkingfund: "",
        remarks: "",
        userinput: "",
        useredit: this.getDataUser().UserId,
        totalnetarea: 0,
        totalgrossarea: 0,
        totalsemigrossarea: 0,
        theme: "",
        class: "",
        category: "",
        marketingname: "",
        perioddays: 0,
        lastupdatestamp: 0,
        rowid: 0,
        customerstatus: "unknown",
        totalarealot: "0.00 / 0.00 / 0.00",
        addendumrunningcd: ""
      };
    },
    M_New() {
      this.M_TN_LOOAddendum.addendumrunningcd = this.dataSpec.AddendumRunningCd;

      if (
        this.M_TN_LOOAddendum.addendumrunningcd != null &&
        this.M_TN_LOOAddendum.addendumrunningcd != ""
      ) {
        this.M_TN_LOOAddendum.addendumrefno = "(auto)";
        this.PI_addendumrefno.cProtect = true;
      } else {
        this.M_TN_LOOAddendum.addendumrefno = "";
        this.PI_addendumrefno.cProtect = false;
      }

      this.PI_antennastatus.cProtect = true;
      this.PI_chargearea.cProtect = true;
      this.PI_rentalbase.cProtect = true;
      this.PI_baserentalrate.cProtect = true;
      this.PI_totalrental.cProtect = true;
      this.PI_theme.cProtect = true;
      this.PI_class.cProtect = true;
      this.PI_category.cProtect = true;
      this.PI_totalarealot.cProtect = true;

      // this.GetSpecificationData()
    },
    M_Edit() {
      this.GetContractAddendumData("M_Edit");

      if (this.IsContractAddendumEditable == 1) {
        this.SetLookUpBrand();
      }
    },
    M_Delete(dt) {
      var data = this.FormToABSList().getRowSelected();
      var dataDelete = [];

      data.forEach(value => {
        dataDelete.push({});
      });

      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        Data: dataDelete
      };

      this.postJSONMulti(this.getUrlNewDeleteMulti(), param).then(response => {
        if (response == null) return;

        this.$parent.resultPost();
      });
    },
    getDataBy(record) {
      var param = {
        OptionSeq: this.getOptionSeq().OptionSeq,
        LineNo: this.$parent.data.PageOrder,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        applicationno: record.ApplicationNo,
        addendumsequenceno: record.AddendumSequenceNo
      };

      this.postEncode(this.getUrlById(), param).then(response => {
        // response from API
        if (response == null) return;

        var data = response.Data[0];
        // console.log('getDataby')
        // console.log(data)
        this.M_TN_LOOAddendum = {
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
          contactidLabel:
            data.contactid && data.contactid != ""
              ? data.contactid + this.separator + data.customername
              : "",
          customername: data.customername,
          eventno: data.eventno,
          eventdescs: data.eventdescs,
          customercategorycd: data.customercategorycd,
          customercategorycdLabel:
            data.customercategorycd && data.customercategorycd != ""
              ? data.customercategorycd +
                this.separator +
                data.customercategorydescs
              : "",
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
          currencycdLabel:
            data.currencycd && data.currencycd != ""
              ? data.currencycd + this.separator + data.currencydescs
              : "",
          currencydescs: data.currencydescs,
          contractamt: this.isCurrency(data.contractamt, this.decimal),
          addendumrefno: data.addendumrefno,
          addendumdate: data.addendumdate,
          addendumtypecd: data.addendumtypecd,
          addendumtypedescs: data.addendumtypedescs,
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
          marketingid: data.marketingname,
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
          telephonedeposit: this.isCurrency(
            data.telephonedeposit,
            this.decimal
          ),
          fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal),
          sinkingfund: this.isCurrency(data.sinkingfund, this.decimal),
          remarks: data.remarks,
          userinput: data.userinput,
          useredit: data.useredit,
          totalnetarea: this.isCurrency(data.totalnetarea, this.decimal),
          totalgrossarea: this.isCurrency(data.totalgrossarea, this.decimal),
          totalsemigrossarea: this.isCurrency(
            data.totalsemigrossarea,
            this.decimal
          ),
          theme: data.theme,
          class: data.class,
          category: data.category,
          marketingname: data.marketingname,
          perioddays: data.perioddays,
          lastupdatestamp: record.LastUpdateStamp,
          rowid: data.rowid,
          totalrental: this.isCurrency(data.contractamt, this.decimal)
        };

        switch (data.tenantstatus) {
          case "N":
            this.M_TN_LOOAddendum.customerstatus = "NEW";
            break;
          case "P":
            this.M_TN_LOOAddendum.customerstatus = "Replacement";
            break;
          case "R":
            this.M_TN_LOOAddendum.customerstatus = "Renew";
            break;
          default:
            this.M_TN_LOOAddendum.customerstatus = "Unassigned";
            break;
        }

        switch (data.status) {
          case "A":
          case "N":
            switch (data.contractstatus) {
              case 1:
                this.M_TN_LOOAddendum.status = "Pending LOO";
                break;
              case 2:
              case 3:
              case 4:
                this.M_TN_LOOAddendum.status = "Approved LOO";
                break;
            }
            break;
          case "X":
            this.M_TN_LOOAddendum.status = "Terminated Agreement";
            break;
          case "C":
            this.M_TN_LOOAddendum.status = "Cancelled Agreement";
            break;
        }

        switch (data.chargeperiod) {
          case "M":
            this.M_TN_LOOAddendum.chargeperiod = "months";
            break;
          case "D":
            this.M_TN_LOOAddendum.chargeperiod = "days";
            break;
          case "Y":
            this.M_TN_LOOAddendum.chargeperiod = "years";
            break;
        }

        if (data.antennastatus == "") {
          this.M_TN_LOOAddendum.antennastatus = "N";
        } else {
          this.M_TN_LOOAddendum.antennastatus = data.antennastatus;
        }

        this.M_TN_LOOAddendum.totalarealot =
          this.isCurrency(data.totalgrossarea, this.decimal) +
          " / " +
          this.isCurrency(data.totalsemigrossarea, this.decimal) +
          " / " +
          this.isCurrency(data.totalnetarea, this.decimal);

        switch (data.rentalratetype) {
          case "F":
            this.M_TN_LOOAddendum.rentalratetype = "Flat";
            break;
          case "S":
            this.M_TN_LOOAddendum.rentalratetype = "Step Up";
            break;
          default:
            this.M_TN_LOOAddendum.rentalratetype = "Unassigned";
            break;
        }

        this.M_TN_LOOAddendum.applicationnoLabel =
          this.M_TN_LOOAddendum.applicationno != null &&
          this.M_TN_LOOAddendum.applicationno != ""
            ? data.applicationno + this.separator + data.loono
            : "";
        this.M_TN_LOOAddendum.addendumtypecdLabel =
          this.M_TN_LOOAddendum.addendumtypecd != null &&
          this.M_TN_LOOAddendum.addendumtypecd != ""
            ? data.addendumtypecd + this.separator + data.addendumtypedescs
            : "";
        this.M_TN_LOOAddendum.brandcdLabel =
          this.M_TN_LOOAddendum.brandcd != null &&
          this.M_TN_LOOAddendum.brandcd != ""
            ? data.brandcd + this.separator + data.brandname
            : "";
        this.M_TN_LOOAddendum.mediacdLabel =
          this.M_TN_LOOAddendum.mediacd != null &&
          this.M_TN_LOOAddendum.mediacd != ""
            ? data.mediacd + this.separator + data.mediadescs
            : "";

        this.IEBy.Input = data.userinput;
        this.IEBy.Edit = data.useredit;
      });
    },
    MdtRange_startdate(data) {
      this.M_TN_LOOAddendum.startdate = data;
      this.M_TN_LOOAddendum.utilitiesstartdate = this.dateAdd2("M", data, 1);
    },
    MdtRange_enddate(data) {
      this.M_TN_LOOAddendum.enddate = data;
      this.M_TN_LOOAddendum.utilitiesenddate = this.dateAdd2("M", data, 1);
    },
    BlurRange_startdate(data) {},
    BlurRange_enddate(data) {
      // this.M_TN_LOO.enddate = data
    },
    MdtRange_rcd(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          this.M_TN_LOOAddendum.rcd = data;
          console.log("MdtRange_rcd", this.M_TN_LOOAddendum.rcd);
          if (this.isOnAppNo == false) {
            if (
              this.M_TN_LOOAddendum.leaseperiod &&
              this.M_TN_LOOAddendum.leaseperiod != "" &&
              data &&
              data != ""
            ) {
              this.M_TN_LOOAddendum.red = this.dateAdd2(
                "d",
                this.dateAdd2("m", data, this.M_TN_LOOAddendum.leaseperiod),
                -1
              );
            }
            console.log("MdtRange_rcd", this.M_TN_LOOAddendum.red);
            this.SetLookUpBrand();
            this.GetLeasingPolicyDefault();
            this.GetLeasePeriode();
          }
        }
      });
      this.$forceUpdate();
    },
    BlurRange_rcd(data) {
      // kena onchange
      // this.M_TN_LOO.rcd = data
    },
    BlurRange_red(data) {
      // this.M_TN_LOO.red = data
    },
    MdtRange_red(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          this.M_TN_LOOAddendum.red = data;
          console.log("MdtRange_red", this.M_TN_LOOAddendum.red);

          this.GetLeasePeriode();
        }
      });
      this.$forceUpdate();
    },
    MdtRange_utilitiesstartdate(data) {
      this.M_TN_LOOAddendum.utilitiesstartdate = data;
    },
    MdtRange_utilitiesenddate(data) {
      this.M_TN_LOOAddendum.utilitiesenddate = data;
    },
    GetLeasePeriode() {
      // console.log(this.M_TN_LOO.rcd, this.M_TN_LOO.red)
      var param = {
        OptionFunctionCd: "GetTNLeasePeriod",
        ModuleCd: this.Module,
        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
        tgl_awal: this.M_TN_LOOAddendum.rcd,
        tgl_akhir: this.M_TN_LOOAddendum.red
      };

      this.FnDynamicFunction(param).then(ress => {
        if (ress == null) return;
        var data = ress[0];
        // console.log(data)

        this.M_TN_LOOAddendum.leaseperiod = data.Month;
        this.M_TN_LOOAddendum.perioddays = data.Day;
      });
    },
    OnleaseperiodChange(data) {
      this.$nextTick(() => {
        if (this.inputStatus != "VIEW") {
          if (this.isOnAppNo == false) {
            if (
              this.M_TN_LOOAddendum.leaseperiod &&
              this.M_TN_LOOAddendum.leaseperiod != ""
            ) {
              if (
                this.M_TN_LOOAddendum.rcd &&
                this.M_TN_LOOAddendum.rcd != ""
              ) {
                console.log();
                this.M_TN_LOOAddendum.red = this.dateAdd2(
                  "d",
                  this.dateAdd2("m", this.M_TN_LOOAddendum.rcd, data),
                  -1
                );
                this.M_TN_LOOAddendum.perioddays = 0;
              }
            }
          }
        }
      });
      this.$forceUpdate();
    }
  },
  beforeCreate: function() {},
  created: function() {
    this.$store.commit("setFormType", "List");
    this.getToolbar().ProcessPS();
  },
  beforeMount: function() {},
  mounted: function() {
    this.hideSideBarMenu();
    this.FormToABSList().doGetList("", "eb_getList");
    this.GetSpecificationData();
    // [Global:GetSpecification].then(FnOpt9 => { if (FnOpt9 != null) {
    //      this.TNSpec = FnOpt9 } })
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {}
};
</script>

