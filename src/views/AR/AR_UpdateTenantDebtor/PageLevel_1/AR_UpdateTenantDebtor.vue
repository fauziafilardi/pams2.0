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
                                <b-col md="6" id="col-left">
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_applicationno" v-model="M_AR_UpdateTenantDebtor.applicationno"  ref="ref_applicationno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_loono" v-model="M_AR_UpdateTenantDebtor.loono"  ref="ref_loono"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_AR_UpdateTenantDebtor.loodate"  ref="ref_loodate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_loino" v-model="M_AR_UpdateTenantDebtor.loino"  ref="ref_loino"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateVuex @input="OnloidateChange" :prop="PI_loidate" v-model="M_AR_UpdateTenantDebtor.loidate"  ref="ref_loidate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_lano" v-model="M_AR_UpdateTenantDebtor.lano"  ref="ref_lano"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateVuex @input="OnladateChange" :prop="PI_ladate" v-model="M_AR_UpdateTenantDebtor.ladate"  ref="ref_ladate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_contactid" v-model="M_AR_UpdateTenantDebtor.contactname"  ref="ref_contactid"/>
                                    </b-col>
                                  </b-row>
                                   <b-row>
                                    <b-col  md="12">
                                      <ABSInputSelectList @change="OndebtorcdChange" :prop="PI_debtorcd" :value="M_AR_UpdateTenantDebtor.debtorcd" :label="M_AR_UpdateTenantDebtor.debtorcdLabel" ref="ref_debtorcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputRadioButtonVuex @input="OnamortizemethodChange" :prop="PI_amortizemethod" v-model="M_AR_UpdateTenantDebtor.amortizemethod"  ref="ref_amortizemethod" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_customercategorycd" v-model="M_AR_UpdateTenantDebtor.customercategorycd"  ref="ref_customercategorycd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSCompute :prop="PI_tenantstatus" v-model="M_AR_UpdateTenantDebtor.tenantstatus"  ref="ref_tenantstatus" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_UpdateTenantDebtor.referenceno"  ref="ref_referenceno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputTextVuex :prop="PI_brandcd" v-model="M_AR_UpdateTenantDebtor.brandcd"  ref="ref_brandcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSCompute :prop="PI_theme" v-model="M_AR_UpdateTenantDebtor.theme"  ref="ref_theme"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSCompute :prop="PI_class" v-model="M_AR_UpdateTenantDebtor.class"  ref="ref_class"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSCompute :prop="PI_category" v-model="M_AR_UpdateTenantDebtor.category"  ref="ref_category"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_AR_UpdateTenantDebtor.startdate" :valueTo="M_AR_UpdateTenantDebtor.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                    </b-col>
                                  </b-row>
                                 <b-row>
                                    <b-col  md="12">
                                      <b-row>
                                        <b-col md="4" class="lbl-col-align">
                                          <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                        </b-col>
                                        <b-col md="1" style="margin-left: 10px;">
                                          <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="M_AR_UpdateTenantDebtor.leaseperiod"  ref="ref_leaseperiod"/>    
                                        </b-col>
                                        <b-col md="4">
                                          {{M_AR_UpdateTenantDebtor.chargeperiod}} and {{M_AR_UpdateTenantDebtor.perioddays}} days . Free
                                        </b-col>  
                                        <b-col md="1">
                                          <ABSTextBoxOnly :prop="PI_freerentalperiod" v-model="M_AR_UpdateTenantDebtor.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                                        </b-col>
                                      </b-row>
                                    </b-col>
                                  </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_rcdred" :valueFrom="M_AR_UpdateTenantDebtor.rcd" :valueTo="M_AR_UpdateTenantDebtor.red" ref="ref_reserved" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateRangeVuex :prop="PI_utilitiesstartdate" :valueFrom="M_AR_UpdateTenantDebtor.utilitiesstartdate" :valueTo="M_AR_UpdateTenantDebtor.utilitiesenddate" ref="ref_utilitiesstartdate" @from="MdtRange_utilitiesstartdate" @to="MdtRange_utilitiesenddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_UpdateTenantDebtor.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSCompute :prop="PI_contractamt" v-model="M_AR_UpdateTenantDebtor.contractamt"  ref="ref_contractamt"/>
                                      </b-col>
                                    </b-row>
                                </b-col>				
                                <b-col md="6" id="col-right"> <!-- table open -->
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_UpdateTenantDebtor.status"  ref="ref_status"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_chargearea" v-model="M_AR_UpdateTenantDebtor.chargearea"  ref="ref_chargearea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_totalgrossarea" v-model="M_AR_UpdateTenantDebtor.totalgrossarea"  ref="ref_totalgrossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                      <ABSCompute :prop="PI_baserentalrate" v-model="M_AR_UpdateTenantDebtor.baserentalrate"  ref="ref_baserentalrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_telephoneline" v-model="M_AR_UpdateTenantDebtor.telephoneline"  ref="ref_telephoneline"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="M_AR_UpdateTenantDebtor.securitydepositrental"  ref="ref_securitydepositrental"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="M_AR_UpdateTenantDebtor.securitydepositsc"  ref="ref_securitydepositsc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_AR_UpdateTenantDebtor.servicecharge"  ref="ref_servicecharge"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_AR_UpdateTenantDebtor.promotionlevy"  ref="ref_promotionlevy"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_AR_UpdateTenantDebtor.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_AR_UpdateTenantDebtor.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_AR_UpdateTenantDebtor.sinkingfund"  ref="ref_sinkingfund"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_rentalbase" v-model="M_AR_UpdateTenantDebtor.rentalbase"  ref="ref_rentalbase"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="M_AR_UpdateTenantDebtor.revenuesharetype"  ref="ref_revenuesharetype" />
                                    </b-col>
                                  </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_renewalperiod" v-model="M_AR_UpdateTenantDebtor.renewalperiod"  ref="ref_renewalperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_marketingid" v-model="M_AR_UpdateTenantDebtor.marketingid"  ref="ref_marketingid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_fitoutpic" v-M_AR_UpdateTenantDebtor="M_AR_UpdateTenantDebtor.fitoutpic"  ref="ref_fitoutpic"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnfitoutcommencedonChange" :prop="PI_fitoutcommencedon" v-model="M_AR_UpdateTenantDebtor.fitoutcommencedon"  ref="ref_fitoutcommencedon" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_fitouttime" v-model="M_AR_UpdateTenantDebtor.fitouttime"  ref="ref_fitouttime"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="M_AR_UpdateTenantDebtor.handoverdate"  ref="ref_handoverdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row> 
                                      <b-col md="12">                                      
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_AR_UpdateTenantDebtor.operatingfromhour" :valueTo="M_AR_UpdateTenantDebtor.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnmediacdChange" :prop="PI_mediacd" :value="M_AR_UpdateTenantDebtor.mediacd" :label="M_AR_UpdateTenantDebtor.mediacdLabel" ref="ref_mediacd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_UpdateTenantDebtor.remarks"  ref="ref_remarks" />
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
		Module:"AR",
            propList: {
                initialWhere: "Status = 'A' AND SubPortfolioCd ='" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'TimeEdit DESC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_UpdateTenantDebtor :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                contactid: '',
                contactname: '',
                customercategorycd: '',
                customercategory: '',
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
                rcd: '',
                red: '',
                chargearea: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: '',
                peggingrate: '',
                revenuesharetype: '',
                telephoneline: '',
                securitydepositrental: '0',
                securitydepositsc: '0',
                rentalbase: '',
                baserentalrate:'',
                renewalperiod: 0,
                rentalratetype: '',
                antennastatus: '',
                marketingid: '',
                perioddays: '',
                fitoutcommencedon: '',
                fitouttime: '',
                operatingfromhour: '',
                operatingtohour: '',
                mediacd: '',
                servicecharge: '0',
                promotionlevy: '0',
                telephonedeposit: '0',
                fitoutdeposit: '0',
                sinkingfund: '0',
                remarks: '',
                amortizemethod: '',
                userinput: '',
                businessname: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: '',
                debtorcd: '',
                chargeperiod: '',
                freerentalperiod: '',
                totalgrossarea: '',
                totalsemigrossarea: '',
                theme: '',
                class: '',
                category: '',
                handoverdate: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_applicationno: { 
                cValidate :'', 
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
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cLabel: 'Status', 
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
            PI_loono: { 
                cValidate :'', 
                cName: 'loono', 
                cLabel: 'LOO No', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargearea: { 
                cValidate :'', 
                cName: 'chargearea', 
                cLabel: 'Base Calculation Area', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 5, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalgrossarea: { 
                cValidate :'', 
                cName: 'totalgrossarea', 
                cLabel: 'Gross - Semi - Net Area', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loino: { 
                cValidate :'', 
                cName: 'loino', 
                cLabel: 'LOI No', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_baseren: { 
                cValidate :'', 
                cName: 'bareren', 
                cLabel: 'Base Rent', 
                cLabelSize: 4,  
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            
            PI_loidate: { 
                cValidate :'', 
                cName: 'loidate', 
                cLabel: 'LOI Date', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            
            PI_lano: { 
                cValidate :'', 
                cName: 'lano', 
                cLabel: 'LA No', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_baserentalrate: { 
                cValidate :'', 
                cName: 'baserentalrate', 
                cLabel: 'Average Rate', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
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
                cRadioDefaultOption: 'R', 
                cLabel:'Revenue Share Calc.', 
                cLabelSize: 4, 
                cOrder: 31, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
                cOrder: 11, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_telephoneline: { 
                cValidate :'', 
                cName: 'telephoneline', 
                cLabel: 'Telephone Line (s)', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_contactid: { 
                cValidate :'', 
                cName: 'contactid', 
                cLabel: 'Customer Name', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: true, 
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
                cOrder: 14, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupARDebtor'    , 
                    ColumnDB: 'DebtorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 15, 
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
                cMasterUrl: 'AR/AR_Debtor' ,
                cDisplayColumn: 'DebtorCd,DebtorName' ,
            }, 
            PI_securitydepositsc: { 
                cValidate :'', 
                cName: 'securitydepositsc', 
                cLabel: 'Security Deposit SC', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_amortizemethod: { 
                cValidate :'', 
                cName: 'amortizemethod', 
                cId: 'rdbamortizemethod', 
                cRadioOptions: [{ text: 'Actual Rate', value: 'R' },{ text: 'Average', value: 'A' },], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false,
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_servicecharge: { 
                cValidate :'', 
                cName: 'servicecharge', 
                cLabel: 'Service Charge', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customercategorycd: { 
                cValidate :'', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 20, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tenantstatus: { 
                cLabel: 'Customer Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_telephonedeposit: { 
                cValidate :'', 
                cName: 'telephonedeposit', 
                cLabel: 'Telephone Deposit', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: true, 
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
                cOrder: 22, 
                cKey: true, 
                cType: 'text',
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
                cOrder: 23, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandcd: { 
                cValidate :'', 
                cName: 'brandcd', 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sinkingfund: { 
                cValidate :'', 
                cName: 'sinkingfund', 
                cLabel: 'Sinking Fund', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_theme: { 
                cValidate :'', 
                cName: 'theme', 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: true, 
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
                cLabel: 'Rental Base', 
                cLabelSize: 4, 
                cOrder: 27, 
                cKey: true, 
                cType: 'text',
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
                cOrder: 28, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_marketingid: { 
                cValidate :'', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_category: { 
                cValidate :'', 
                cName: 'category', 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 31, 
                cKey: false, 
                cType: 'text',
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
                cOrder: 32, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Lease Start Date - End Date', 
                cLabelSize: 4, 
                cOrder: 33, 
                cKey: true, 
                cVisible:  true, 
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
                cOrder: 34, 
                cKey: true, 
                cType: 'text',
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
                cOrder: 35, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingfromhour: { 
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cOrder: 38, 
                cKey: false,                 
                cVisible: true, 
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
                cOrder: 39, 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:34, 
                cKey: true, 
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
            PI_leaseperiod: { 
                cValidate :'', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cOrder: 35, 
                cKey: true, 
                cType: 'numeric',
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
                cOrder: 14, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rcdred: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cOrder: 36, 
                cKey: true, 
                cVisible:  true, 
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
                cOrder: 16, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Lease Currency', 
                cLabelSize: 4, 
                cOrder: 37, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_contractamt: { 
                cValidate :'', 
                cName: 'contractamt', 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cOrder: 38, 
                cKey: true, 
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
                cFormPageNo: this.data.PageOrder
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
        GetDebtorCdDisable(ApplicationNo){
            var param = {
                OptionFunctionCd: "GetDebtorCdDisable",
                ModuleCd: this.Module,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                ApplicationNo: ApplicationNo
            }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                // console.log(ress)
                var data = ress[0]

                if(parseInt(data.N0) > 0 ){
                    this.PI_debtorcd.cKey = true
                    this.PI_amortizemethod.cKey = true
                }else{
                  this.PI_debtorcd.cKey = false
                  this.PI_amortizemethod.cKey = false
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
        OnloidateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{loidate}
            }
        })
        this.$forceUpdate()
        },
        OnladateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{ladate}
            }
        })
        this.$forceUpdate()
        },
        OndebtorcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_UpdateTenantDebtor.debtorcd = data.id
            this.M_AR_UpdateTenantDebtor.debtorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtorcd}
            }
        })
        this.$forceUpdate()
        },
        OnamortizemethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizemethod}
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
        OnstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startdate}
            }
        })
        this.$forceUpdate()
        },
        OnenddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{enddate}
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
        OnrcdChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{rcd}
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
                ApplicationNo: this.M_AR_UpdateTenantDebtor.applicationno,
                DebtorCd: this.M_AR_UpdateTenantDebtor.debtorcd == '' || this.M_AR_UpdateTenantDebtor.debtorcd == null ? 'NULL' : this.M_AR_UpdateTenantDebtor.debtorcd ,
                Amortize: this.M_AR_UpdateTenantDebtor.amortizemethod,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_UpdateTenantDebtor.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_UpdateTenantDebtor = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                contactid: '',
                contactname: '',
                customercategorycd: '',
                customercategory: '',
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
                rcd: '',
                red: '',
                freerentalperiod:'',
                chargearea: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: '',
                peggingrate: '',
                revenuesharetype: '',
                telephoneline: '',
                securitydepositrental: '0',
                securitydepositsc: '0',
                rentalbase: '',
                renewalperiod: 0,
                rentalratetype: '',
                antennastatus: '',
                marketingid: '',
                fitoutcommencedon: '',
                fitouttime: '',
                operatingfromhour: '',
                operatingtohour: '',
                mediacd: '',
                servicecharge: '0',
                promotionlevy: '0',
                telephonedeposit: '0',
                fitoutdeposit: '0',
                sinkingfund: '0',
                baserentalrate: '',
                remarks: '',
                amortizemethod: '',
                userinput: '',
                businessname: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: '',
                debtorcd: '',
                totalgrossarea: '',
                totalsemigrossarea: '',
                theme: '',
                class: '',
                category: '',
                perioddays: '',
                chargeperiod:'', 
                lastupdatestamp: 0,
                handoverdate: '',
                rowid: 0
                    }
            		
		},
        M_New(){
          let data = this.$store.getters.GetPage1Data
        },
        M_Edit(){
          let data = this.$store.getters.GetPage1Data

          // console.log(this.M_AR_UpdateTenantDebtor.applicationno)
          this.GetDebtorCdDisable(this.M_AR_UpdateTenantDebtor.applicationno)
          this.PI_debtorcd.dataLookUp.InitialWhere = "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status='Y' AND ContactId='"+this.M_AR_UpdateTenantDebtor.contactid+"'"
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var tenantsts = ""
                if(data.tenantstatus) {
                  if(data.tenantstatus == 'N') {
                    tenantsts = "New"
                  }
                  else if(data.tenantstatus == 'P'){
                    tenantsts = "Replacement"
                  }
                  else{
                    tenantsts = "Renew"
                  }
                }
this.M_AR_UpdateTenantDebtor = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                copyfromapplicationno: data.copyfromapplicationno,
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                contactid: data.contactid,
                contactname: data.contactid + this.separator + data.contactname,
                customercategorycd: data.customercategorycd + ' | ' + data.customercategory,
                customercategory: data.customercategory,
                status: data.status,
                tenantstatus: data.tenantstatus,
                contractstatus: data.contractstatus,
                referenceno: data.referenceno,
                brandcd: data.brandcd + this.separator + data.brandname,
                brandname: data.brandname,
                lotthemecd: data.lotthemecd,
                freerentalperiod: data.freerentalperiod,
                baserentalrate: this.isCurrency(data.baserentalrate, this.decimal),
                lotclasssequenceno: data.lotclasssequenceno,
                lotcategorysequenceno: data.lotcategorysequenceno,
                startdate: data.startdate,
                enddate: data.enddate,
                leaseperiod: data.leaseperiod,
                perioddays: data.perioddays,
                rcd: data.rcd,
                red: data.red,
                chargearea: data.chargearea,
                utilitiesstartdate: data.utilitiesstartdate,
                utilitiesenddate: data.utilitiesenddate,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                peggingrate: data.peggingrate,
                revenuesharetype: data.revenuesharetype,
                telephoneline: data.telephoneline,
                securitydepositrental: data.securitydepositrental,
                securitydepositsc: data.securitydepositsc,
                rentalbase: data.rentalbase,
                renewalperiod: data.renewalperiod,
                rentalratetype: data.rentalratetype,
                antennastatus: data.antennastatus,
                marketingid: data.marketingid,
                fitoutcommencedon: data.fitoutcommencedon,
                fitouttime: data.fitouttime,
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                mediacd: data.mediacd,
                servicecharge: this.isCurrency(data.servicecharge, this.decimal),
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal),
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal),
                fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal),
                sinkingfund: this.isCurrency(data.sinkingfund, this.decimal),
                remarks: data.remarks,
                amortizemethod: data.amortizemethod,
                userinput: data.userinput,
                businessname: data.businessname,
                useredit: data.useredit,
                totalnetarea: this.isCurrency(data.totalnetarea, this.decimal),
                chargeperiod: data.chargeperiod,
                debtorcd: data.debtorcd,
                totalgrossarea: this.isCurrency(data.totalgrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalsemigrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalnetarea, this.decimal),
                totalsemigrossarea: this.isCurrency(data.totalsemigrossarea, this.decimal),
                theme: data.theme,
                class: data.class,
                category: data.category,
                handoverdate: data.handoverdate,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_UpdateTenantDebtor.debtorcdLabel = this.M_AR_UpdateTenantDebtor.debtorcd != null && this.M_AR_UpdateTenantDebtor.debtorcd != '' ? data.debtorcd + this.separator + data.contactname :'' 
                this.M_AR_UpdateTenantDebtor.mediacdLabel = this.M_AR_UpdateTenantDebtor.mediacd != null && this.M_AR_UpdateTenantDebtor.mediacd != '' ? data.mediacd + this.separator + data.mediadescs :'' 
                // this.M_AR_UpdateTenantDebtor.contactidLabel = this.M_AR_UpdateTenantDebtor.contactid != null && this.M_AR_UpdateTenantDebtor.contactid != '' ? data.contactid + this.separator + data.mediadescs :'' 
                // this.M_AR_UpdateTenantDebtor.mediacdLabel = this.M_AR_UpdateTenantDebtor.mediacd != null && this.M_AR_UpdateTenantDebtor.mediacd != '' ? data.mediacd + this.separator + data.mediadescs :'' 
                
                
                switch (data.tenantstatus) {
                  case "N":
                    this.M_AR_UpdateTenantDebtor.tenantstatus = "NEW"
                    break;
                  case "P":
                    this.M_AR_UpdateTenantDebtor.tenantstatus = "Replacement"
                    break;
                  case "R":
                    this.M_AR_UpdateTenantDebtor.tenantstatus = "Renew"
                    break;
                  default:
                    this.M_AR_UpdateTenantDebtor.tenantstatus = "Unassigned"
                    break;
                }
                var pending = false

                if(data.chargeperiod == 'D'){
                  this.M_AR_UpdateTenantDebtor.chargeperiod = "days"
                }else if(data.chargeperiod == 'M'){
                  this.M_AR_UpdateTenantDebtor.chargeperiod = "month"
                }

                if (data.status == 'A' || data.status == 'N') {
                  if (data.contractstatus == '1') {
                    if(data.customertype == 'L'){
                      this.M_AR_UpdateTenantDebtor.status = "Pending LOO / Leasing"
                      pending = true
                    }
                    else if(data.customertype == 'C'){
                      this.M_AR_UpdateTenantDebtor.status = "Pending LOO / Casual Leasing"
                      pending = true
                    }
                  }
                  else if (data.contractstatus == '2' || data.contractstatus == '3' || data.contractstatus == '4') {
                    if(data.customertype == 'L'){
                      this.M_AR_UpdateTenantDebtor.status = "Approved LOO / Leasing"
                      pending = false
                    }
                    else if(data.customertype == 'C'){
                      this.M_AR_UpdateTenantDebtor.status = "Approved LOO / Casual Leasing"
                      pending = false
                    }
                  }
                }
                else if (data.status == 'X') {
                  this.M_AR_UpdateTenantDebtor.status = "Terminated Agreement"
                  pending = false
                }
                else if (data.status == 'C') {
                  this.M_AR_UpdateTenantDebtor.status = "Cancelled Agreement"
                  pending = false
                }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        MdtRange_startdate (data) {
            this.M_AR_UpdateTenantDebtor.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_AR_UpdateTenantDebtor.enddate = data
        },
        MdtRange_rcd (data) {
            this.M_AR_UpdateTenantDebtor.rcd = data
        },
        MdtRange_red (data) {
            this.M_AR_UpdateTenantDebtor.red = data
        },

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

