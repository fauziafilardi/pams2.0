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
                                        <ABSCompute :prop="PI_applicationno" v-model="M_AR_Contract_Inquiry2.applicationno"  ref="ref_applicationno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_AR_Contract_Inquiry2.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_loonodate" v-model="M_AR_Contract_Inquiry2.loonodate"  ref="ref_loonodate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_telephoneline" v-model="M_AR_Contract_Inquiry2.telephoneline"  ref="ref_telephoneline" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customer" v-model="M_AR_Contract_Inquiry2.customer"  ref="ref_customer" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_securitydepositrental" v-model="M_AR_Contract_Inquiry2.securitydepositrental"  ref="ref_securitydepositrental" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customercategorycd" v-model="M_AR_Contract_Inquiry2.customercategorycd"  ref="ref_customercategorycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_securitydepositsc" v-model="M_AR_Contract_Inquiry2.securitydepositsc"  ref="ref_securitydepositsc" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_customerstatus" v-model="M_AR_Contract_Inquiry2.customerstatus"  ref="ref_customerstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_servicecharge" v-model="M_AR_Contract_Inquiry2.servicecharge"  ref="ref_servicecharge" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_assessmentno" v-model="M_AR_Contract_Inquiry2.assessmentno"  ref="ref_assessmentno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_promotionlevy" v-model="M_AR_Contract_Inquiry2.promotionlevy"  ref="ref_promotionlevy" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_referenceno" v-model="M_AR_Contract_Inquiry2.referenceno"  ref="ref_referenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_telephonedeposit" v-model="M_AR_Contract_Inquiry2.telephonedeposit"  ref="ref_telephonedeposit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_brandcd" v-model="M_AR_Contract_Inquiry2.brandcd"  ref="ref_brandcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_fitoutdeposit" v-model="M_AR_Contract_Inquiry2.fitoutdeposit"  ref="ref_fitoutdeposit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_theme" v-model="M_AR_Contract_Inquiry2.theme"  ref="ref_theme" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_sinkingfund" v-model="M_AR_Contract_Inquiry2.sinkingfund"  ref="ref_sinkingfund" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_class" v-model="M_AR_Contract_Inquiry2.class"  ref="ref_class" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnrentalbaseChange" :prop="PI_rentalbase" v-model="M_AR_Contract_Inquiry2.rentalbase"  ref="ref_rentalbase" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_category" v-model="M_AR_Contract_Inquiry2.category"  ref="ref_category" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnrevenuesharetypeChange" :prop="PI_revenuesharetype" v-model="M_AR_Contract_Inquiry2.revenuesharetype"  ref="ref_revenuesharetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_startdate" v-model="M_AR_Contract_Inquiry2.startdate"  ref="ref_startdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_renewalperiod" v-model="M_AR_Contract_Inquiry2.renewalperiod"  ref="ref_renewalperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_leaseperiod" v-model="M_AR_Contract_Inquiry2.leaseperiod"  ref="ref_leaseperiod" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_marketing" v-model="M_AR_Contract_Inquiry2.marketing"  ref="ref_marketing" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_rcd" v-model="M_AR_Contract_Inquiry2.rcd"  ref="ref_rcd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_fitoutpic" v-model="M_AR_Contract_Inquiry2.fitoutpic"  ref="ref_fitoutpic" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_utilitiesstartdate" v-model="M_AR_Contract_Inquiry2.utilitiesstartdate"  ref="ref_utilitiesstartdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_fitoutcommdate" v-model="M_AR_Contract_Inquiry2.fitoutcommdate"  ref="ref_fitoutcommdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_AR_Contract_Inquiry2.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_handoverdate" v-model="M_AR_Contract_Inquiry2.handoverdate"  ref="ref_handoverdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalrental" v-model="M_AR_Contract_Inquiry2.totalrental"  ref="ref_totalrental" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_operatingfromhour" v-model="M_AR_Contract_Inquiry2.operatingfromhour"  ref="ref_operatingfromhour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnantennastatusChange" :prop="PI_antennastatus" v-model="M_AR_Contract_Inquiry2.antennastatus"  ref="ref_antennastatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_informationsource" v-model="M_AR_Contract_Inquiry2.informationsource"  ref="ref_informationsource" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpeggingrateChange" :prop="PI_peggingrate" v-model="M_AR_Contract_Inquiry2.peggingrate"  ref="ref_peggingrate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_remarks" v-model="M_AR_Contract_Inquiry2.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_AR_Contract_Inquiry2.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_totalarealot" v-model="M_AR_Contract_Inquiry2.totalarealot"  ref="ref_totalarealot" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_baserent" v-model="M_AR_Contract_Inquiry2.baserent"  ref="ref_baserent" />
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
		FormType: "View",
		Module:"AR",
            propList: {
                initialWhere: "CustomerType = 'L' AND ContractStatus IN ('1','2','3','4') AND ISConfirmed = 'Y' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_Contract_Inquiry2 :{
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
                baserentalrate: '',
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
                leaseperiod: 0,
                freerentalperiod: 0,
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: '',
                peggingrate: '',
                revenuesharetype: '',
                chargearea: '',
                telephoneline: 0,
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
                servicecharge: '',
                promotionlevy: '',
                telephonedeposit: '',
                fitoutdeposit: '',
                sinkingfund: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: '',
                totalgrossarea: '',
                totalsemigrossarea: '',
                theme: '',
                class: '',
                category: '',
                marketingname: '',
                perioddays: 0,
                lastupdatestamp: 0,
                rowid: 0,
                loonodate: '',
                customer: '',
                customerstatus: '',
                totalrental: '',
                totalarealot: '',
                baserent: ''
                    }
            ,
            PI_applicationno: { 
                cLabel: 'Application No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_loonodate: { 
                cLabel: 'LOO No - Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_telephoneline: { 
                cLabel: 'Telephone Line(s)', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customer: { 
                cLabel: 'Customer                     ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_securitydepositrental: { 
                cLabel: 'Security Deposit Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customercategorycd: { 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_securitydepositsc: { 
                cLabel: 'Security Deposit SC', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customerstatus: { 
                cLabel: 'Customer Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_servicecharge: { 
                cLabel: 'Service Charge', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_assessmentno: { 
                cLabel: 'Assessment No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_promotionlevy: { 
                cLabel: 'Promotion Levy', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cLabel: 'Customer Ref No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_telephonedeposit: { 
                cLabel: 'Telephone Deposit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_brandcd: { 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_fitoutdeposit: { 
                cLabel: 'Fit Out Deposit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_theme: { 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_sinkingfund: { 
                cLabel: 'Sinking Fund', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_class: { 
                cLabel: 'Class', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_category: { 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_revenuesharetype: { 
                cValidate :'', 
                cName: 'revenuesharetype', 
                cId: 'rdbrevenuesharetype', 
                cRadioOptions: [{ text: 'Staggered', value: 'S' },{ text: 'Range Scale', value: 'R' },], 
                cRadioDefaultOption: '', 
                cLabel:'Revenue Share Calc.', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startdate: { 
                cLabel: 'Lease Start - End Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_renewalperiod: { 
                cLabel: 'Renewal Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_leaseperiod: { 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_marketing: { 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_rcd: { 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_fitoutpic: { 
                cLabel: 'Fit Out PIC', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_utilitiesstartdate: { 
                cLabel: 'Utilities Start - End Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_fitoutcommdate: { 
                cLabel: 'Fit Out Comm. Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencycd: { 
                cLabel: 'Lease Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_handoverdate: { 
                cLabel: 'Hand Over Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalrental: { 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_operatingfromhour: { 
                cLabel: 'Operating Hour', 
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
            PI_informationsource: { 
                cLabel: 'Information Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_remarks: { 
                cLabel: 'Remarks', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_baserent: { 
                cLabel: 'Average Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AR_Contract_Inquiry2 = {
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
                baserentalrate: '',
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
                leaseperiod: 0,
                freerentalperiod: 0,
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: '',
                peggingrate: '',
                revenuesharetype: '',
                chargearea: '',
                telephoneline: 0,
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
                servicecharge: '',
                promotionlevy: '',
                telephonedeposit: '',
                fitoutdeposit: '',
                sinkingfund: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: '',
                totalgrossarea: '',
                totalsemigrossarea: '',
                theme: '',
                class: '',
                category: '',
                marketingname: '',
                perioddays: 0,
                lastupdatestamp: 0,
                rowid: 0,
                loonodate: '',
                customer: '',
                customerstatus: '',
                totalrental: '',
                totalarealot: '',
                baserent: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
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
                var customerstatus = ''
                var status = ''
                var leaseperiod = ''
                var rentaltype = ''

                switch(data.tenantstatus){
                  case "N":
                    customerstatus = "New"
                  break;
                  case "P":
                    customerstatus = "Replacement"
                  break;
                  case "R":
                    customerstatus = "Renew"
                  break;
                  default:
                    customerstatus = "Unassigned"
                  break;
                }

                if (data.status == 'X') {
                  status = 'Terminated Agreement'
                }
                else if (data.status == 'C') {
                  status = 'Cancelled Agreement'
                }
                else if (data.status == 'A' || data.status == 'N') {
                  if (data.contractstatus.toString() == '1') {
                    status = 'Pending LOO'
                  }
                  else if (data.contractstatus.toString() == '2' || data.contractstatus.toString() == '3' || data.contractstatus.toString() == '4') {
                    status = 'Approved LOO'
                  }
                }

                if (data.chargeperiod == 'M') {
                  leaseperiod = data.leaseperiod.toString() + ' months and ' + data.perioddays.toString() + ' days. Free ' + data.freerentalperiod.toString()
                }
                else if (data.chargeperiod == 'Y') {
                  leaseperiod = data.leaseperiod.toString() + ' years and ' + data.perioddays.toString() + ' days. Free ' + data.freerentalperiod.toString()
                }
                else if (data.chargeperiod == 'D') {
                  leaseperiod = data.leaseperiod.toString() + ' days and ' + data.perioddays.toString() + ' days. Free ' + data.freerentalperiod.toString()
                }

                if (data.rentalratetype == 'F') {
                  rentaltype = 'Flat'
                }
                else if (data.rentalratetype == 'S') {
                  rentaltype = 'Step Up'
                }
                else {
                  rentaltype = 'Unassigned'
                }

this.M_AR_Contract_Inquiry2 = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                deviationapprovalno: data.deviationapprovalno,
                copyfromapplicationno: data.copyfromapplicationno,
                loonodate: (data.loono && data.loono != '' ? data.loono : '') + this.separator + (data.loodate && data.loodate != '' ? this.momentDateFormatting(data.loodate, 'DD/MM/YYYY') : ''),
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                contactid: data.contactid,
                customer: (data.contactid && data.contactid != '' ? data.contactid : '') + this.separator + (data.customername && data.customername != '' ? data.customername : ''),
                customername: data.customername,
                eventno: data.eventno,
                eventdescs: data.eventdescs,
                customercategorycd: (data.customercategorycd && data.customercategorycd != '' ? data.customercategorycd : '') + this.separator + (data.customercategorydescs && data.customercategorydescs != '' ? data.customercategorydescs : ''),
                customercategorydescs: data.customercategorydescs,
                assessmentno: data.assessmentno && data.assessmentno != '' ? data.assessmentno : '-',
                customersource: data.customersource,
                chargeperiod: data.chargeperiod,
                baserentalrate: data.baserentalrate,
                status: status,
                tenantstatus: data.tenantstatus,
                contractstatus: data.contractstatus,
                referenceno: data.referenceno,
                brandcd: (data.brandcd && data.brandcd != '' ? data.brandcd : '') + this.separator + (data.brandname && data.brandname != '' ? data.brandname : ''),
                brandname: data.brandname,
                lotthemecd: data.lotthemecd,
                lotclasssequenceno: data.lotclasssequenceno,
                lotcategorysequenceno: data.lotcategorysequenceno,
                startdate: (data.startdate && data.startdate != '' ? this.momentDateFormatting(data.startdate, 'DD/MM/YYYY') : '') + ' - ' + (data.enddate && data.enddate != '' ? this.momentDateFormatting(data.enddate, 'DD/MM/YYYY') : ''),
                enddate: data.enddate,
                leaseperiod: leaseperiod,
                freerentalperiod: data.freerentalperiod,
                rcd: (data.rcd && data.rcd != '' ? this.momentDateFormatting(data.rcd, 'DD/MM/YYYY') : '') + ' - ' + (data.red && data.red != '' ? this.momentDateFormatting(data.red, 'DD/MM/YYYY') : ''),
                red: data.red,
                utilitiesstartdate: (data.utilitiesstartdate && data.utilitiesstartdate != '' ? this.momentDateFormatting(data.utilitiesstartdate, 'DD/MM/YYYY') : '') + ' - ' + (data.utilitiesenddate && data.utilitiesenddate != '' ? this.momentDateFormatting(data.utilitiesenddate, 'DD/MM/YYYY') : ''),
                utilitiesenddate: data.utilitiesenddate,
                currencycd: (data.currencycd && data.currencycd != '' ? data.currencycd : '') + this.separator + (data.currencydescs && data.currencydescs != '' ? data.currencydescs : ''),
                contractamt: data.contractamt,
                peggingrate: data.peggingrate,
                revenuesharetype: data.revenuesharetype,
                chargearea: data.chargearea,
                telephoneline: data.telephoneline,
                securitydepositrental: data.securitydepositrental.toString() + ' Months',
                securitydepositsc: data.securitydepositsc.toString() + ' Months',
                rentalbase: data.rentalbase,
                renewalperiod: data.renewalperiod.toString() + ', Rental Type : ' + rentaltype,
                rentalratetype: data.rentalratetype,
                antennastatus: data.antennastatus && data.antennastatus != '' ? data.antennastatus : 'N',
                marketing: (data.marketingid && data.marketingid != '' ? data.marketingid : '') + this.separator + (data.marketingname && data.marketingname != '' ? data.marketingname : ''),
                marketingid: data.marketingid,
                fitoutcommencedon: data.fitoutcommencedon,
                fitouttime: data.fitouttime,
                fitoutcommdate: (data.fitoutcommencedon && data.fitoutcommencedon != '' ? this.momentDateFormatting(data.fitoutcommencedon, 'DD/MM/YYYY') : '') + ' Duration ' + data.fitouttime + ' day(s)',
                fitoutpic: data.fitoutpic,
                handoverdate: (data.handoverdate && data.handoverdate != '' ? this.momentDateFormatting(data.handoverdate, 'DD/MM/YYYY') : ''),
                operatingfromhour: data.operatingfromhour + ' - ' + data.operatingtohour,
                operatingtohour: data.operatingtohour,
                solicitorid: data.solicitorid,
                solicitorname: data.solicitorname,
                mediacd: data.mediacd,
                informationsource: data.mediacd,
                servicecharge: this.isCurrency(data.servicecharge, this.decimal).toString() + ' PSM',
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal).toString() + ' PSM',
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal).toString() + ' Lines',
                fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal).toString() + ' PSM',
                sinkingfund: this.isCurrency(data.sinkingfund, this.decimal).toString() + ' PSM',
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                totalnetarea: data.totalnetarea,
                totalgrossarea: data.totalgrossarea,
                totalsemigrossarea: data.totalsemigrossarea,
                theme: data.theme,
                class: data.class,
                category: data.category,
                marketingname: data.marketingname,
                perioddays: data.perioddays,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                customerstatus: customerstatus,
                totalrental: this.isCurrency(data.contractamt, this.decimal),
                totalarealot: this.isCurrency(data.totalgrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalsemigrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalnetarea, this.decimal),
                baserent: this.isCurrency(data.baserentalrate, this.decimal)
                    }
                 

         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','View')
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

