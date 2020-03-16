<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="6" id="col-left"> <!-- table open left -->
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnapplicationleasingrunningcdChange" :prop="PI_applicationleasingrunningcd" :value="M_TN_Specification.applicationleasingrunningcd" :label="M_TN_Specification.applicationleasingrunningcdLabel" ref="ref_applicationleasingrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnapplicationclrunningcdChange" :prop="PI_applicationclrunningcd" :value="M_TN_Specification.applicationclrunningcd" :label="M_TN_Specification.applicationclrunningcdLabel" ref="ref_applicationclrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlooleasingrunningcdChange" :prop="PI_looleasingrunningcd" :value="M_TN_Specification.looleasingrunningcd" :label="M_TN_Specification.looleasingrunningcdLabel" ref="ref_looleasingrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlooclrunningcdChange" :prop="PI_looclrunningcd" :value="M_TN_Specification.looclrunningcd" :label="M_TN_Specification.looclrunningcdLabel" ref="ref_looclrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnloileasingrunningcdChange" :prop="PI_loileasingrunningcd" :value="M_TN_Specification.loileasingrunningcd" :label="M_TN_Specification.loileasingrunningcdLabel" ref="ref_loileasingrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlaleasingrunningcdChange" :prop="PI_laleasingrunningcd" :value="M_TN_Specification.laleasingrunningcd" :label="M_TN_Specification.laleasingrunningcdLabel" ref="ref_laleasingrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnlaclrunningcdChange" :prop="PI_laclrunningcd" :value="M_TN_Specification.laclrunningcd" :label="M_TN_Specification.laclrunningcdLabel" ref="ref_laclrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnleasingbudgetrunningcdChange" :prop="PI_leasingbudgetrunningcd" :value="M_TN_Specification.leasingbudgetrunningcd" :label="M_TN_Specification.leasingbudgetrunningcdLabel" ref="ref_leasingbudgetrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnclbudgetrunningcdChange" :prop="PI_clbudgetrunningcd" :value="M_TN_Specification.clbudgetrunningcd" :label="M_TN_Specification.clbudgetrunningcdLabel" ref="ref_clbudgetrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OndeviationrunningcdChange" :prop="PI_deviationrunningcd" :value="M_TN_Specification.deviationrunningcd" :label="M_TN_Specification.deviationrunningcdLabel" ref="ref_deviationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncldeviationrunningcdChange" :prop="PI_cldeviationrunningcd" :value="M_TN_Specification.cldeviationrunningcd" :label="M_TN_Specification.cldeviationrunningcdLabel" ref="ref_cldeviationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnreservationrunningcdChange" :prop="PI_reservationrunningcd" :value="M_TN_Specification.reservationrunningcd" :label="M_TN_Specification.reservationrunningcdLabel" ref="ref_reservationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnclreservationrunningcdChange" :prop="PI_clreservationrunningcd" :value="M_TN_Specification.clreservationrunningcd" :label="M_TN_Specification.clreservationrunningcdLabel" ref="ref_clreservationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList  @change="OnaddendumrunningcdChange" :prop="PI_addendumrunningcd" :value="M_TN_Specification.addendumrunningcd" :label="M_TN_Specification.addendumrunningcdLabel"  ref="ref_addendumrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncladdendumrunningcdChange" :prop="PI_claddendumrunningcd" :value="M_TN_Specification.claddendumrunningcd" :label="M_TN_Specification.claddendumrunningcdLabel" ref="ref_claddendumrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncancellationrunningcdChange" :prop="PI_cancellationrunningcd" :value="M_TN_Specification.cancellationrunningcd" :label="M_TN_Specification.cancellationrunningcdLabel" ref="ref_cancellationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnclcancellationrunningcdChange" :prop="PI_clcancellationrunningcd" :value="M_TN_Specification.clcancellationrunningcd" :label="M_TN_Specification.clcancellationrunningcdLabel"  ref="ref_clcancellationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnloadingrunningcdChange" :prop="PI_loadingrunningcd" :value="M_TN_Specification.loadingrunningcd" :label="M_TN_Specification.loadingrunningcdLabel" ref="ref_loadingrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnunloadingrunningcdChange" :prop="PI_unloadingrunningcd" :value="M_TN_Specification.unloadingrunningcd" :label="M_TN_Specification.unloadingrunningcdLabel" ref="ref_unloadingrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnsubleaserunningcdChange" :prop="PI_subleaserunningcd" :value="M_TN_Specification.subleaserunningcd" :label="M_TN_Specification.subleaserunningcdLabel" ref="ref_subleaserunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnassignmentrunningcdChange" :prop="PI_assignmentrunningcd" :value="M_TN_Specification.assignmentrunningcd" :label="M_TN_Specification.assignmentrunningcdLabel" ref="ref_assignmentrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnterminationrunningcdChange" :prop="PI_terminationrunningcd" :value="M_TN_Specification.terminationrunningcd" :label="M_TN_Specification.terminationrunningcdLabel" ref="ref_terminationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnclterminationrunningcdChange" :prop="PI_clterminationrunningcd" :value="M_TN_Specification.clterminationrunningcd" :label="M_TN_Specification.clterminationrunningcdLabel" ref="ref_clterminationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnassetenhancementrunningcdChange" :prop="PI_assetenhancementrunningcd" :value="M_TN_Specification.assetenhancementrunningcd" :label="M_TN_Specification.assetenhancementrunningcdLabel" ref="ref_assetenhancementrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnaddendumcancellationrunningcdChange" :prop="PI_addendumcancellationrunningcd" :value="M_TN_Specification.addendumcancellationrunningcd" :label="M_TN_Specification.addendumcancellationrunningcdLabel" ref="ref_addendumcancellationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OneventrunningcdChange" :prop="PI_eventrunningcd" :value="M_TN_Specification.eventrunningcd" :label="M_TN_Specification.eventrunningcdLabel" ref="ref_eventrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnterminationrentaltranstypeChange" :prop="PI_terminationrentaltranstype" :value="M_TN_Specification.terminationrentaltranstype" :label="M_TN_Specification.terminationrentaltranstypeLabel" ref="ref_terminationrentaltranstype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnterminationsctranstypeChange" :prop="PI_terminationsctranstype" :value="M_TN_Specification.terminationsctranstype" :label="M_TN_Specification.terminationsctranstypeLabel" ref="ref_terminationsctranstype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OncancellationreasoncdChange" :prop="PI_cancellationreasoncd" :value="M_TN_Specification.cancellationreasoncd" :label="M_TN_Specification.cancellationreasoncdLabel" ref="ref_cancellationreasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnaddendumtypecdChange" :prop="PI_addendumtypecd" :value=  "M_TN_Specification.addendumtypecd" :label="M_TN_Specification.addendumtypecdLabel" ref="ref_addendumtypecd"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close left -->
                                <b-col md="6" id="col-right"> <!-- table open right -->
                                  <b-row>  
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_tenantreviewperiod" v-model="M_TN_Specification.tenantreviewperiod"  ref="ref_tenantreviewperiod"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnstartbillingatChange" :prop="PI_startbillingat" v-model="M_TN_Specification.startbillingat"  ref="ref_startbillingat" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnleasestartatChange" :prop="PI_leasestartat" v-model="M_TN_Specification.leasestartat"  ref="ref_leasestartat" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnamortizestartatChange" :prop="PI_amortizestartat" v-model="M_TN_Specification.amortizestartat"  ref="ref_amortizestartat" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_lootimelimit" v-model="M_TN_Specification.lootimelimit"  ref="ref_lootimelimit"/>  
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_loitimelimit" v-model="M_TN_Specification.loitimelimit"  ref="ref_loitimelimit"/>  
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_latimelimit" v-model="M_TN_Specification.latimelimit"  ref="ref_latimelimit"/>  
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_cllootimelimit" v-model="M_TN_Specification.cllootimelimit"  ref="ref_cllootimelimit"/>  
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_clatimelimit" v-model="M_TN_Specification.clatimelimit"  ref="ref_clatimelimit"/>  
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OncalculationroundingChange" :prop="PI_calculationrounding" v-model="M_TN_Specification.calculationrounding"  ref="ref_calculationrounding" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_maximumtemporaryleaseperiod" v-model="M_TN_Specification.maximumtemporaryleaseperiod"  ref="ref_maximumtemporaryleaseperiod"/>  
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnstepuprateallowChange" :prop="PI_stepuprateallow" v-model="M_TN_Specification.stepuprateallow"  ref="ref_stepuprateallow" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnflatrateallowChange" :prop="PI_flatrateallow" v-model="M_TN_Specification.flatrateallow"  ref="ref_flatrateallow" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col  md="12">
                                      <ABSinputCheckBox @input="OnleasingassessmentreqChange" :prop="PI_leasingassessmentreq" v-model="M_TN_Specification.leasingassessmentreq"  ref="ref_leasingassessmentreq" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnclnewtenantapprovalChange" :prop="PI_clnewtenantapproval" v-model="M_TN_Specification.clnewtenantapproval"  ref="ref_clnewtenantapproval" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnallowdirectlooChange" :prop="PI_allowdirectloo" v-model="M_TN_Specification.allowdirectloo"  ref="ref_allowdirectloo" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnclallowdirectlooChange" :prop="PI_clallowdirectloo" v-model="M_TN_Specification.clallowdirectloo"  ref="ref_clallowdirectloo" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnleasingamortizemethodChange" :prop="PI_leasingamortizemethod" v-model="M_TN_Specification.leasingamortizemethod"  ref="ref_leasingamortizemethod" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_billingmonthtolerance" v-model="M_TN_Specification.billingmonthtolerance"  ref="ref_billingmonthtolerance"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_Specification.remarks"  ref="ref_remarks" />
                                    </b-col>
                                  </b-row>
                                </b-col> <!-- table close right -->                   
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
            FormType: "Form",
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_Specification :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                allowdirectloo: 'Y',
                applicationleasingrunningcd: '',
                descsapplicationleasingrc: '',
                applicationclrunningcd: '',
                descsapplicationclrc: '',
                looleasingrunningcd: '',
                descslooleasingrc: '',
                looclrunningcd: '',
                descslooclrunningrc: '',
                loileasingrunningcd: '',
                descsloileasingrc: '',
                loiclrunningcd: '',
                descsloiclrc: '',
                laleasingrunningcd: '',
                descslaleasingrc: '',
                laclrunningcd: '',
                descslaclrc: '',
                tenantreviewperiod: '',
                leasingbudgetrunningcd: '',
                descsleasingbudgetrc: '',
                clbudgetrunningcd: '',
                descsclbudgetrc: '',
                deviationrunningcd: '',
                descsdeviationrc: '',
                cldeviationrunningcd: '',
                descscldeviationrc: '',
                startbillingat: 'O',
                leasestartat: 'O',
                amortizestartat: 'O',
                lootimelimit: '',
                loitimelimit: '',
                latimelimit: '',
                calculationrounding: 1,
                maximumtemporaryleaseperiod: '',
                stepuprateallow: 'Y',
                flatrateallow: 'Y',
                newtenantassessment: '',
                replacementtenantassessment: '',
                renewaltenantassessment: '',
                addendumrunningcd: '',
                clallowdirectloo: 'Y',
                billingmonthtolerance: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                cllootimelimit: '',
                clatimelimit: '',
                clnewtenantapproval: 'Y',
                leasingamortizemethod: 'R',
                reservationrunningcd: '',
                descsreservationrc: '',
                clreservationrunningcd: '',
                descsclreservationrc: '',
                addendumrunningcd: '',
                descsaddendumrc: '',
                claddendumrunningcd: '',
                descscladdendumrc: '',
                cancellationrunningcd: '',
                descscancellationrc: '',
                clcancellationrunningcd: '',
                descsclcancellationrc: '',
                loadingrunningcd: '',
                descsloadingrc: '',
                unloadingrunningcd: '',
                descsunloadingrc: '',
                subleaserunningcd: '',
                descssubleaserc: '',
                assignmentrunningcd: '',
                descsassignmentrc: '',
                cancellationreasoncd: '',
                descscancellationreason: '',
                terminationrunningcd: '',
                descsearlyterminationrc: '',
                clterminationrunningcd: '',
                descsclearlyterminationrc: '',
                assetenhancementrunningcd: '',
                descsassetenhancementrc: '',
                addendumcancellationrunningcd: '',
                descsaddendumcancellationrc: '',
                eventrunningcd: '',
                descseventrc: '',
                terminationrentaltranstype: '',
                descsterminationrentaltranstype: '',
                terminationsctranstype: '',
                descsterminationsctranstype: '',
                addendumtypecd: '',
                descsaddendumtype: '',
                rowid: 0,
                leasingassessmentreq: []
                    }
            ,					
            PI_applicationleasingrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'applicationleasingrunningcd', 
                cLabel: 'Leasing Application RC ', 
                cKey: false, 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_tenantreviewperiod: { 
                cValidate :'required|max:5', 
                cName: 'tenantreviewperiod', 
                cLabel: 'Tenant Review Time', 
                cLabelSize: 4, 
                cOrder: 31, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Day',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_applicationclrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'applicationclrunningcd', 
                cLabel: 'Casual Leasing Application RC ', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_startbillingat: { 
                cValidate :'', 
                cName: 'startbillingat', 
                cId: 'rdbstartbillingat', 
                cRadioOptions: [{ text: 'LOO', value: 'O' }, { text: 'LOI', value: 'I' }, { text: 'LA', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Start Billing At ', 
                cLabelSize: 4, 
                cOrder: 32, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_looleasingrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'looleasingrunningcd', 
                cLabel: 'LOO Leasing RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_leasestartat: { 
                cValidate :'', 
                cName: 'leasestartat', 
                cId: 'rdbleasestartat', 
                cRadioOptions: [{ text: 'LOO', value: 'O' }, { text: 'LOI', value: 'I' }, { text: 'LA', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Lease Start At ', 
                cLabelSize: 4, 
                cOrder: 33, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_looclrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'looclrunningcd', 
                cLabel: 'LOO Casual Leasing RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_amortizestartat: { 
                cValidate :'', 
                cName: 'amortizestartat', 
                cId: 'rdbamortizestartat', 
                cRadioOptions: [{ text: 'LOO', value: 'O' }, { text: 'LOI', value: 'I' }, { text: 'LA', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Start At   ', 
                cLabelSize: 4, 
                cOrder: 34, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loileasingrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'loileasingrunningcd', 
                cLabel: 'LOI Leasing RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
            PI_lootimelimit: { 
                cValidate :'required|max:30', 
                cName: 'lootimelimit', 
                cLabel: 'LOO Time Limit', 
                cLabelSize: 4, 
                cOrder: 35, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Day',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_laleasingrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'laleasingrunningcd', 
                cLabel: 'LA Leasing RC ', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_loitimelimit: { 
                cValidate :'required|max:30', 
                cName: 'loitimelimit', 
                cLabel: 'LOI Time Limit', 
                cLabelSize: 4, 
                cOrder: 36, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Day',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_laclrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'laclrunningcd', 
                cLabel: 'LA Casual Leasing RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_latimelimit: { 
                cValidate :'required|max:30', 
                cName: 'latimelimit', 
                cLabel: 'LA Time Limit', 
                cLabelSize: 4, 
                cOrder: 37, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Day',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leasingbudgetrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'leasingbudgetrunningcd', 
                cLabel: 'Leasing Budget RC', 
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
                cDisplayColumn: '' ,
            }, 
            PI_cllootimelimit: { 
                cValidate :'max:30', 
                cName: 'cllootimelimit', 
                cLabel: 'CL LOO Time Limit', 
                cLabelSize: 4, 
                cOrder: 38, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Day',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_clbudgetrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'clbudgetrunningcd', 
                cLabel: 'CL Budget RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
            PI_clatimelimit: { 
                cValidate :'max:30', 
                cName: 'clatimelimit', 
                cLabel: 'CLA Time Limit', 
                cLabelSize: 4, 
                cOrder: 39, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Day',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_deviationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'deviationrunningcd', 
                cLabel: 'Deviation RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_calculationrounding: { 
                cValidate :'', 
                cName: 'calllculationrounding', 
                cId: 'rdbbbcalculationrounding', 
                cRadioOptions: [{ text: 'Cent', value: '1' }, { text: 'Dollar', value: '2' }, { text: 'Ten', value: '3' }, { text: 'Hundred', value: '4' }, { text: 'Thousand', value: '5' }], 
                cRadioDefaultOption: '', 
                cLabel:'Calculation Rounding ', 
                cLabelSize: 4, 
                cOrder: 40, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cldeviationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'cldeviationrunningcd', 
                cLabel: 'CL Deviation RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
            PI_maximumtemporaryleaseperiod: { 
                cValidate :'required|max:30', 
                cName: 'maximumtemporaryleaseperiod', 
                cLabel: 'Max. Temp. Leasing', 
                cLabelSize: 4, 
                cOrder: 41, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: 'Month',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_reservationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'reservationrunningcd', 
                cLabel: 'Reservation RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_stepuprateallow: { 
                cValidate :'', 
                cName: 'stepuprateallow', 
                cId: 'rdbstepuprateallow', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Step Up Rate Allow', 
                cLabelSize: 4, 
                cOrder: 42, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_clreservationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'clreservationrunningcd', 
                cLabel: 'CL Reservation RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
            PI_flatrateallow: { 
                cValidate :'', 
                cName: 'flatrateallow', 
                cId: 'rdbflatrateallow', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Flat Rate Allow ', 
                cLabelSize: 4, 
                cOrder: 43, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addendumrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'addendumrunningcd', 
                cLabel: 'Addendum RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cValidate :'',
            }, 
            PI_leasingassessmentreq: {
                cValidate :'', 
                cName: 'leasingassessmentreq', 
                cLabel: 'Leasing Assessment Req', 
                cLabelSize: 4, 
                cOptions: [{ text: 'New', value: 'N' }, { text: 'Replacement', value: 'R' }, { text: 'Renewal', value: 'E' }], 
                cOrder: 44, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_claddendumrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: '' 
                        }, 
                cValidate :'', 
                cName: 'claddendumrunningcd', 
                cLabel: 'CL Addendum RC', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_clnewtenantapproval: { 
                cValidate :'', 
                cName: 'clnewtenantapproval', 
                cId: 'rdbclnewtenantapproval', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'CL New Tenant Approval', 
                cLabelSize: 4, 
                cOrder: 45, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cancellationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'cancellationrunningcd', 
                cLabel: 'Cancellation RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 16, 
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
            PI_allowdirectloo: { 
                cValidate :'', 
                cName: 'allowdirectloo', 
                cId: 'rdbadll', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Allow Direct Leasing LOO', 
                cLabelSize: 4, 
                cOrder: 46, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_clcancellationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'clcancellationrunningcd', 
                cLabel: 'CL Cancellation RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_clallowdirectloo: { 
                cValidate :'', 
                cName: 'clallowdirectloo', 
                cId: 'rdbclallowdirectloo', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Allow Direct CL LOO    ', 
                cLabelSize: 4, 
                cOrder: 47, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loadingrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'loadingrunningcd', 
                cLabel: 'Loading RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 18, 
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
            PI_leasingamortizemethod: { 
                cValidate :'', 
                cName: 'leasingamortizemethod', 
                cId: 'rdbleasingamortizemethod', 
                cRadioOptions: [{ text: 'Actual Rate', value: 'R' },{ text: 'Average', value: 'A' },], 
                cRadioDefaultOption: '', 
                cLabel:'Amortize Method', 
                cLabelSize: 4, 
                cOrder: 48, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_unloadingrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''
                        }, 
                cValidate :'', 
                cName: 'unloadingrunningcd', 
                cLabel: 'Unloading RC', 
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
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_billingmonthtolerance: { 
                cValidate :'required|max:30', 
                cName: 'billingmonthtolerance', 
                cLabel: 'Billing Tolerance', 
                cLabelSize: 4, 
                cOrder: 49, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false,
                cLastLabel: 'Month', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subleaserunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''
                        }, 
                cValidate :'', 
                cName: 'subleaserunningcd', 
                cLabel: 'Sublease RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 20, 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:50, 
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
            PI_assignmentrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'assignmentrunningcd', 
                cLabel: 'Assignment RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 21, 
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
            PI_terminationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''
                        }, 
                cValidate :'', 
                cName: 'terminationrunningcd', 
                cLabel: 'Early Termination RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 22, 
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
            PI_clterminationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''
                        }, 
                cValidate :'', 
                cName: 'clterminationrunningcd', 
                cLabel: 'CL Early Termination RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cDisplayColumn: 'RunningCd,De' ,
            }, 
            PI_assetenhancementrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''
                        }, 
                cValidate :'', 
                cName: 'assetenhancementrunningcd', 
                cLabel: 'Asset Enhancement RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 24, 
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
            PI_addendumcancellationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'addendumcancellationrunningcd', 
                cLabel: 'Addendum Cancellation RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 25, 
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
            PI_eventrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMRunningCodeH'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'eventrunningcd', 
                cLabel: 'Event RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 26, 
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
            PI_terminationrentaltranstype: { 
                dataLookUp: { 
                    LookUpCd: 'GetTransType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'AR' AND TenancyChargeType IN ('K','L') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'terminationrentaltranstype', 
                cLabel: 'TransType Termination Rental', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 27, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_terminationsctranstype: { 
                dataLookUp: { 
                    LookUpCd: 'GetTransType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'AR' AND TenancyChargeType IN ('K','L') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'terminationsctranstype', 
                cLabel: 'TransType Termination SC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 28, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_cancellationreasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMReasonCd'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: "(ModuleCd IS NULL OR ModuleCd = 'TN')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'cancellationreasoncd', 
                cLabel: 'Cancelation Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 29, 
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
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_addendumtypecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetAddendumType'    , 
                    ColumnDB: 'AddendumTypeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'addendumtypecd', 
                cLabel: 'Addendum Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 30, 
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
    }
  },
    methods: {		
        OnapplicationleasingrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.applicationleasingrunningcd = data.id
            this.M_TN_Specification.applicationleasingrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{applicationleasingrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationclrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.applicationclrunningcd = data.id
            this.M_TN_Specification.applicationclrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{applicationclrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnstartbillingatChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startbillingat}
            }
        })
        this.$forceUpdate()
        },
        OnlooleasingrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.looleasingrunningcd = data.id
            this.M_TN_Specification.looleasingrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{looleasingrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnleasestartatChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{leasestartat}
            }
        })
        this.$forceUpdate()
        },
        OnlooclrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.looclrunningcd = data.id
            this.M_TN_Specification.looclrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{looclrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnamortizestartatChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{amortizestartat}
            }
        })
        this.$forceUpdate()
        },
        OnloileasingrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.loileasingrunningcd = data.id
            this.M_TN_Specification.loileasingrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{loileasingrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnlaleasingrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.laleasingrunningcd = data.id
            this.M_TN_Specification.laleasingrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{laleasingrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnlaclrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.laclrunningcd = data.id
            this.M_TN_Specification.laclrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{laclrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnleasingbudgetrunningcdChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_TN_Specification.leasingbudgetrunningcd = data.id
            this.M_TN_Specification.leasingbudgetrunningcdLabel = data.id + ' | ' + data.Descs
            if (this.inputStatus != "VIEW") {
//{leasingbudgetrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnclbudgetrunningcdChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_TN_Specification.clbudgetrunningcd = data.id
            this.M_TN_Specification.clbudgetrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{clbudgetrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OndeviationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.deviationrunningcd = data.id
            this.M_TN_Specification.deviationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{deviationrc}
            }
        })
        this.$forceUpdate()
        },
        OncalculationroundingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{calculationrounding}
            }
        })
        this.$forceUpdate()
        },
        OncldeviationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.cldeviationrunningcd = data.id
            this.M_TN_Specification.cldeviationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{cldeviationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnreservationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.reservationrunningcd = data.id
            this.M_TN_Specification.reservationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{reservationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnstepuprateallowChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{stepuprateallow}
            }
        })
        this.$forceUpdate()
        },
        OnclreservationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.clreservationrunningcd = data.id
            this.M_TN_Specification.clreservationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{clreservationrc}
            }
        })
        this.$forceUpdate()
        },
        OnaddendumrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.addendumrunningcd = data.id
            this.M_TN_Specification.addendumrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{clreservationrc}
            }
        })
        this.$forceUpdate()
        },
        OnflatrateallowChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{flatrateallow}
            }
        })
        this.$forceUpdate()
        },
        OnleasingassessmentreqChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
            }
        })
        this.$forceUpdate()
        },
        OncladdendumrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.claddendumrunningcd = data.id
            this.M_TN_Specification.claddendumrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{claddendumrc}
            }
        })
        this.$forceUpdate()
        },
        OnclnewtenantapprovalChange (data) {

        },
        OncancellationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.cancellationrunningcd = data.id
            this.M_TN_Specification.cancellationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{cancellationrc}
            }
        })
        this.$forceUpdate()
        },
        OnallowdirectlooChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{adll}
            }
        })
        this.$forceUpdate()
        },
        OnclcancellationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.clcancellationrunningcd = data.id
            this.M_TN_Specification.clcancellationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{clcancellationrc}
            }
        })
        this.$forceUpdate()
        },
        OnclallowdirectlooChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{adcl}
            }
        })
        this.$forceUpdate()
        },
        OnloadingrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.loadingrunningcd = data.id
            this.M_TN_Specification.loadingrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{loadingrc}
            }
        })
        this.$forceUpdate()
        },
        OnleasingamortizemethodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{leasingamortizemethod}
            }
        })
        this.$forceUpdate()
        },
        OnunloadingrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.unloadingrunningcd = data.id
            this.M_TN_Specification.unloadingrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{unloadingrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnsubleaserunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.subleaserunningcd = data.id
            this.M_TN_Specification.subleaserunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subleaserunningcd}
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
        OnassignmentrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.assignmentrunningcd = data.id
            this.M_TN_Specification.assignmentrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{assigmentrc}
            }
        })
        this.$forceUpdate()
        },
        OnterminationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.terminationrunningcd = data.id
            this.M_TN_Specification.terminationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{terminationrc}
            }
        })
        this.$forceUpdate()
        },
        OnclterminationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.clterminationrunningcd = data.id
            this.M_TN_Specification.clterminationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{clterminationrc}
            }
        })
        this.$forceUpdate()
        },
        OnassetenhancementrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.assetenhancementrunningcd = data.id
            this.M_TN_Specification.assetenhancementrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{assetenhancementrc}
            }
        })
        this.$forceUpdate()
        },
        OnaddendumcancellationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.addendumcancellationrunningcd = data.id
            this.M_TN_Specification.addendumcancellationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addendumcancellationrc}
            }
        })
        this.$forceUpdate()
        },
        OneventrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.eventrunningcd = data.id
            this.M_TN_Specification.eventrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{eventrc}
            }
        })
        this.$forceUpdate()
        },
        OnterminationrentaltranstypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.terminationrentaltranstype = data.id
            this.M_TN_Specification.terminationrentaltranstypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{terminationrentaltranstype}
            }
        })
        this.$forceUpdate()
        },
        OnterminationsctranstypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.terminationsctranstype = data.id
            this.M_TN_Specification.terminationsctranstypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{terminationsctranstype}
            }
        })
        this.$forceUpdate()
        },
        OncancellationreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.cancellationreasoncd = data.id
            this.M_TN_Specification.cancellationreasoncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{cancellationreasoncd}
            }
        })
        this.$forceUpdate()
        },
        OnaddendumtypecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_Specification.addendumtypecd = data.id
            this.M_TN_Specification.addendumtypecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addendumtypecd}
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
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Save() {
          console.log( this.M_TN_Specification)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationLeasingRunningCd: this.M_TN_Specification.applicationleasingrunningcd == '' || this.M_TN_Specification.applicationleasingrunningcd == null ? 'NULL' : this.M_TN_Specification.applicationleasingrunningcd ,
                ApplicationCLRunningCd: this.M_TN_Specification.applicationclrunningcd == '' || this.M_TN_Specification.applicationclrunningcd == null ? 'NULL' : this.M_TN_Specification.applicationclrunningcd ,
                LOOLeasingRunningCd: this.M_TN_Specification.looleasingrunningcd == '' || this.M_TN_Specification.looleasingrunningcd == null ? 'NULL' : this.M_TN_Specification.looleasingrunningcd ,
                LOOCLRunningCd: this.M_TN_Specification.looclrunningcd == '' || this.M_TN_Specification.looclrunningcd == null ? 'NULL' : this.M_TN_Specification.looclrunningcd ,
                LOILeasingRunningCd: this.M_TN_Specification.loileasingrunningcd == '' || this.M_TN_Specification.loileasingrunningcd == null ? 'NULL' : this.M_TN_Specification.loileasingrunningcd ,
                LALeasingRunningCd: this.M_TN_Specification.laleasingrunningcd == '' || this.M_TN_Specification.laleasingrunningcd == null ? 'NULL' : this.M_TN_Specification.laleasingrunningcd ,
                LACLRunningCd: this.M_TN_Specification.laclrunningcd == '' || this.M_TN_Specification.laclrunningcd == null ? 'NULL' : this.M_TN_Specification.laclrunningcd ,
                TenantReviewPeriod: this.M_TN_Specification.tenantreviewperiod,
                LeasingBudgetRunningCd: this.M_TN_Specification.leasingbudgetrunningcd == '' || this.M_TN_Specification.leasingbudgetrunningcd == null ? 'NULL' : this.M_TN_Specification.leasingbudgetrunningcd ,
                CLBudgetRC: this.M_TN_Specification.clbudgetrunningcd == '' || this.M_TN_Specification.clbudgetrunningcd == null ? 'NULL' : this.M_TN_Specification.clbudgetrunningcd ,
                DeviationRC: this.M_TN_Specification.deviationrunningcd == '' || this.M_TN_Specification.deviationrunningcd == null ? 'NULL' : this.M_TN_Specification.deviationrunningcd ,
                CLDeviationRC: this.M_TN_Specification.cldeviationrunningcd == '' || this.M_TN_Specification.cldeviationrunningcd == null ? 'NULL' : this.M_TN_Specification.cldeviationrunningcd ,
                TerminationRC: this.M_TN_Specification.terminationrunningcd == '' || this.M_TN_Specification.terminationrunningcd == null ? 'NULL' : this.M_TN_Specification.terminationrunningcd ,
                CLTerminationRC: this.M_TN_Specification.clterminationrunningcd == '' || this.M_TN_Specification.clterminationrunningcd == null ? 'NULL' : this.M_TN_Specification.clterminationrunningcd ,
                AssetEnhancementRC: this.M_TN_Specification.assetenhancementrunningcd == '' || this.M_TN_Specification.assetenhancementrunningcd == null ? 'NULL' : this.M_TN_Specification.assetenhancementrunningcd ,
                TerminationRentalTransType: this.M_TN_Specification.terminationrentaltranstype == '' || this.M_TN_Specification.terminationrentaltranstype == null ? 'NULL' : this.M_TN_Specification.terminationrentaltranstype ,
                TerminationSCTransType: this.M_TN_Specification.terminationsctranstype == '' || this.M_TN_Specification.terminationsctranstype == null ? 'NULL' : this.M_TN_Specification.terminationsctranstype ,
                StartBillingAt: this.M_TN_Specification.startbillingat,
                AmortizeStartAt: this.M_TN_Specification.amortizestartat,
                LeaseStartAt: this.M_TN_Specification.leasestartat,
                LOOTimeLimit: this.M_TN_Specification.lootimelimit,
                LOITimeLimit: this.M_TN_Specification.loitimelimit,
                LATimeLimit: this.M_TN_Specification.latimelimit,
                CalculationRounding: this.M_TN_Specification.calculationrounding,
                MaximumTemporaryLeasePeriod: this.M_TN_Specification.maximumtemporaryleaseperiod,
                StepUpRateAllow: this.M_TN_Specification.stepuprateallow,
                FlatRateAllow: this.M_TN_Specification.flatrateallow,
                NewTenantAssessment: this.M_TN_Specification.leasingassessmentreq.indexOf('N') >= 0 ? 'Y' : 'N',
                ReplacementTenantAssessment: this.M_TN_Specification.leasingassessmentreq.indexOf('R') >= 0 ? 'Y' : 'N',
                RenewalTenantAssessment: this.M_TN_Specification.leasingassessmentreq.indexOf('E') >= 0 ? 'Y' : 'N',
                AllowDirectLOO: this.M_TN_Specification.allowdirectloo,
                CLAllowDirectLOO: this.M_TN_Specification.clallowdirectloo,
                BillingMonthTolerance: this.M_TN_Specification.billingmonthtolerance,
                Remarks: this.M_TN_Specification.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_Specification.lastupdatestamp,
                CLLOOTimeLimit: this.M_TN_Specification.cllootimelimit,
                CLATimeLimit: this.M_TN_Specification.clatimelimit,
                CLNewTenantApproval: this.M_TN_Specification.clnewtenantapproval,
                LeasingAmortizeMethod: this.M_TN_Specification.leasingamortizemethod,
                ReservationRC: this.M_TN_Specification.reservationrc == '' || this.M_TN_Specification.reservationrc == null ? 'NULL' : this.M_TN_Specification.reservationrc ,
                CLReservationRC: this.M_TN_Specification.clreservationrunningcd == '' || this.M_TN_Specification.clreservationrunningcd == null ? 'NULL' : this.M_TN_Specification.clreservationrunningcd ,
                AddendumRC: this.M_TN_Specification.addendumrunningcd == '' || this.M_TN_Specification.addendumrunningcd == null ? 'NULL' : this.M_TN_Specification.addendumrunningcd,
                CLAddendumRC: this.M_TN_Specification.claddendumrc == '' || this.M_TN_Specification.claddendumrc == null ? 'NULL' : this.M_TN_Specification.claddendumrc ,
                CancellationRC: this.M_TN_Specification.cancellationrunningcd == '' || this.M_TN_Specification.cancellationrunningcd == null ? 'NULL' : this.M_TN_Specification.cancellationrunningcd ,
                CLCancellationRC: this.M_TN_Specification.clcancellationrunningcd == '' || this.M_TN_Specification.clcancellationrunningcd == null ? 'NULL' : this.M_TN_Specification.clcancellationrunningcd ,
                LoadingRC: this.M_TN_Specification.loadingrunningcd == '' || this.M_TN_Specification.loadingrunningcd == null ? 'NULL' : this.M_TN_Specification.loadingrunningcd ,
                UnloadingRC: this.M_TN_Specification.unloadingrunningcd == '' || this.M_TN_Specification.unloadingrunningcd == null ? 'NULL' : this.M_TN_Specification.unloadingrunningcd ,
                SubleaseRC: this.M_TN_Specification.subleaserunningcd == '' || this.M_TN_Specification.subleaserunningcd == null ? 'NULL' : this.M_TN_Specification.subleaserunningcd ,
                AssigmentRC: this.M_TN_Specification.assignmentrunningcd == '' || this.M_TN_Specification.assignmentrunningcd == null ? 'NULL' : this.M_TN_Specification.assignmentrunningcd ,
                CancellationReason: this.M_TN_Specification.cancellationreasoncd == '' || this.M_TN_Specification.cancellationreasoncd == null ? 'NULL' : this.M_TN_Specification.cancellationreasoncd ,
                AddendumCancellationRC: this.M_TN_Specification.addendumcancellationrunningcd == '' || this.M_TN_Specification.addendumcancellationrunningcd == null ? 'NULL' : this.M_TN_Specification.addendumcancellationrunningcd ,
                EventRC: this.M_TN_Specification.eventrunningcd == '' || this.M_TN_Specification.eventrunningcd == null ? 'NULL' : this.M_TN_Specification.eventrunningcd ,
                AddendumTypeCd: this.M_TN_Specification.addendumtypecd == '' || this.M_TN_Specification.addendumtypecd == null ? 'NULL' : this.M_TN_Specification.addendumtypecd                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'view')

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_TN_Specification = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                allowdirectloo: 'Y',
                applicationleasingrunningcd: '',
                descsapplicationleasingrc: '',
                applicationclrunningcd: '',
                descsapplicationclrc: '',
                looleasingrunningcd: '',
                descslooleasingrc: '',
                looclrunningcd: '',
                descslooclrunningrc: '',
                loileasingrunningcd: '',
                descsloileasingrc: '',
                loiclrunningcd: '',
                descsloiclrc: '',
                laleasingrunningcd: '',
                descslaleasingrc: '',
                laclrunningcd: '',
                descslaclrc: '',
                tenantreviewperiod: '',
                leasingbudgetrunningcd: '',
                descsleasingbudgetrc: '',
                clbudgetrunningcd: '',
                descsclbudgetrc: '',
                deviationrunningcd: '',
                descsdeviationrc: '',
                cldeviationrunningcd: '',
                descscldeviationrc: '',
                startbillingat: 'O',
                leasestartat: 'O',
                amortizestartat: 'O',
                lootimelimit: '',
                loitimelimit: '',
                latimelimit: '',
                calculationrounding: 1,
                maximumtemporaryleaseperiod: '',
                stepuprateallow: 'Y',
                flatrateallow: 'Y',
                newtenantassessment: '',
                replacementtenantassessment: '',
                renewaltenantassessment: '',
                addendumrunningcd: '',
                clallowdirectloo: 'Y',
                billingmonthtolerance: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                cllootimelimit: '',
                clatimelimit: '',
                clnewtenantapproval: 'Y',
                leasingamortizemethod: 'R',
                reservationrunningcd: '',
                descsreservationrc: '',
                clreservationrunningcd: '',
                descsclreservationrc: '',
                addendumrunningcd: '',
                descsaddendumrc: '',
                claddendumrunningcd: '',
                descscladdendumrc: '',
                cancellationrunningcd: '',
                descscancellationrc: '',
                clcancellationrunningcd: '',
                descsclcancellationrc: '',
                loadingrunningcd: '',
                descsloadingrc: '',
                unloadingrunningcd: '',
                descsunloadingrc: '',
                subleaserunningcd: '',
                descssubleaserc: '',
                assignmentrunningcd: '',
                descsassignmentrc: '',
                cancellationreasoncd: '',
                descscancellationreason: '',
                terminationrunningcd: '',
                descsearlyterminationrc: '',
                clterminationrunningcd: '',
                descsclearlyterminationrc: '',
                assetenhancementrunningcd: '',
                descsassetenhancementrc: '',
                addendumcancellationrunningcd: '',
                descsaddendumcancellationrc: '',
                eventrunningcd: '',
                descseventrc: '',
                terminationrentaltranstype: '',
                descsterminationrentaltranstype: '',
                terminationsctranstype: '',
                descsterminationsctranstype: '',
                addendumtypecd: '',
                descsaddendumtype: '',
                rowid: 0,
                leasingassessmentreq: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
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
,               SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                console.log(data)
                var leasingassessmentreq = []
                if (data.newtenantassessment == 'Y'){
                    leasingassessmentreq.push('N')
                } 
                if (data.replacementtenantassessment == 'Y'){
                    leasingassessmentreq.push('R')
                }
                if (data.renewaltenantassessment == 'Y'){
                    leasingassessmentreq.push('E')
                }
                
                if(response.Data.length > 0){
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
this.M_TN_Specification = {
  
                subportfoliocd: data.subportfoliocd,
                allowdirectloo: data.allowdirectloo,
                applicationleasingrunningcd: data.applicationleasingrunningcd,
                descsapplicationleasingrc: data.descsapplicationleasingrc,
                applicationclrunningcd: data.applicationclrunningcd,
                descsapplicationclrc: data.descsapplicationclrc,
                looleasingrunningcd: data.looleasingrunningcd,
                descslooleasingrc: data.descslooleasingrc,
                looclrunningcd: data.looclrunningcd,
                descslooclrunningrc: data.descslooclrunningrc,
                loileasingrunningcd: data.loileasingrunningcd,
                descsloileasingrc: data.descsloileasingrc,
                loiclrunningcd: data.loiclrunningcd,
                descsloiclrc: data.descsloiclrc,
                laleasingrunningcd: data.laleasingrunningcd,
                descslaleasingrc: data.descslaleasingrc,
                laclrunningcd: data.laclrunningcd,
                descslaclrc: data.descslaclrc,
                tenantreviewperiod: data.tenantreviewperiod,
                leasingbudgetrunningcd: data.leasingbudgetrunningcd,
                descsleasingbudgetrc: data.descsleasingbudgetrc,
                clbudgetrunningcd: data.clbudgetrunningcd,
                descsclbudgetrc: data.descsclbudgetrc,
                deviationrunningcd: data.deviationrunningcd,
                descsdeviationrc: data.descsdeviationrc,
                cldeviationrunningcd: data.cldeviationrunningcd,
                descscldeviationrc: data.descscldeviationrc,
                startbillingat: data.startbillingat,
                leasestartat: data.leasestartat,
                amortizestartat: data.amortizestartat,
                lootimelimit: data.lootimelimit,
                loitimelimit: data.loitimelimit,
                renewaltenantassessment: data.renewaltenantassessment,
                latimelimit: data.latimelimit,
                calculationrounding: data.calculationrounding,
                maximumtemporaryleaseperiod: data.maximumtemporaryleaseperiod,
                stepuprateallow: data.stepuprateallow,
                flatrateallow: data.flatrateallow,
                newtenantassessment: data.newtenantassessment,
                replacementtenantassessment: data.replacementtenantassessment,
                addendumrunningcd: data.addendumrunningcd,
                clallowdirectloo: data.clallowdirectloo,
                billingmonthtolerance: data.billingmonthtolerance,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: data.lastupdatestamp,
                cllootimelimit: data.cllootimelimit,
                clatimelimit: data.clatimelimit,
                clnewtenantapproval: data.clnewtenantapproval,
                leasingamortizemethod: data.leasingamortizemethod,
                reservationrunningcd: data.reservationrunningcd,
                descsreservationrc: data.descsreservationrc,
                clreservationrunningcd: data.clreservationrunningcd,
                descsclreservationrc: data.descsclreservationrc,
                addendumrunningcd: data.addendumrunningcd,
                descsaddendumrc: data.descsaddendumrc,
                claddendumrunningcd: data.claddendumrunningcd,
                descscladdendumrc: data.descscladdendumrc,
                cancellationrunningcd: data.cancellationrunningcd,
                descscancellationrc: data.descscancellationrc,
                clcancellationrunningcd: data.clcancellationrunningcd,
                descsclcancellationrc: data.descsclcancellationrc,
                loadingrunningcd: data.loadingrunningcd,
                descsloadingrc: data.descsloadingrc,
                unloadingrunningcd: data.unloadingrunningcd,
                descsunloadingrc: data.descsunloadingrc,
                subleaserunningcd: data.subleaserunningcd,
                descssubleaserc: data.descssubleaserc,
                assignmentrunningcd: data.assignmentrunningcd,
                descsassignmentrc: data.descsassignmentrc,
                cancellationreasoncd: data.cancellationreasoncd,
                descscancellationreason: data.descscancellationreason,
                terminationrunningcd: data.terminationrunningcd,
                descsearlyterminationrc: data.descsearlyterminationrc,
                clterminationrunningcd: data.clterminationrunningcd,
                descsclearlyterminationrc: data.descsclearlyterminationrc,
                assetenhancementrunningcd: data.assetenhancementrunningcd,
                descsassetenhancementrc: data.descsassetenhancementrc,
                addendumcancellationrunningcd: data.addendumcancellationrunningcd,
                descsaddendumcancellationrc: data.descsaddendumcancellationrc,
                eventrunningcd: data.eventrunningcd,
                descseventrc: data.descseventrc,
                terminationrentaltranstype: data.terminationrentaltranstype,
                descsterminationrentaltranstype: data.descsterminationrentaltranstype,
                terminationsctranstype: data.terminationsctranstype,
                descsterminationsctranstype: data.descsterminationsctranstype,
                addendumtypecd: data.addendumtypecd,
                descsaddendumtype: data.descsaddendumtype,
                rowid: this.isCurrency(data.rowid, this.decimal),
                leasingassessmentreq: leasingassessmentreq
                    }
                 

                this.M_TN_Specification.applicationleasingrunningcdLabel = this.M_TN_Specification.applicationleasingrunningcd != null && this.M_TN_Specification.applicationleasingrunningcd != '' ? data.applicationleasingrunningcd + this.separator + data.descsapplicationleasingrc :'' 
                this.M_TN_Specification.applicationclrunningcdLabel = this.M_TN_Specification.applicationclrunningcd != null && this.M_TN_Specification.applicationclrunningcd != '' ? data.applicationclrunningcd + this.separator + data.descsapplicationclrc :'' 
                this.M_TN_Specification.looleasingrunningcdLabel = this.M_TN_Specification.looleasingrunningcd != null && this.M_TN_Specification.looleasingrunningcd != '' ? data.looleasingrunningcd + this.separator + data.descslooleasingrc :'' 
                this.M_TN_Specification.looclrunningcdLabel = this.M_TN_Specification.looclrunningcd != null && this.M_TN_Specification.looclrunningcd != '' ? data.looclrunningcd + this.separator + data.descslooclrunningrc :'' 
                this.M_TN_Specification.loileasingrunningcdLabel = this.M_TN_Specification.loileasingrunningcd != null && this.M_TN_Specification.loileasingrunningcd != '' ? data.loileasingrunningcd + this.separator + data.descsloileasingrc :'' 
                this.M_TN_Specification.laleasingrunningcdLabel = this.M_TN_Specification.laleasingrunningcd != null && this.M_TN_Specification.laleasingrunningcd != '' ? data.laleasingrunningcd + this.separator + data.descslaleasingrc :'' 
                this.M_TN_Specification.laclrunningcdLabel = this.M_TN_Specification.laclrunningcd != null && this.M_TN_Specification.laclrunningcd != '' ? data.laclrunningcd + this.separator + data.descslaclrc :'' 
                this.M_TN_Specification.leasingbudgetrunningcdLabel = this.M_TN_Specification.leasingbudgetrunningcd != null && this.M_TN_Specification.leasingbudgetrunningcd != '' ? data.leasingbudgetrunningcd + this.separator + data.descsleasingbudgetrc :'' 
                this.M_TN_Specification.clbudgetrunningcdLabel = this.M_TN_Specification.clbudgetrunningcd != null && this.M_TN_Specification.clbudgetrunningcd != '' ? data.clbudgetrunningcd + this.separator + data.descsclbudgetrc :'' 
                this.M_TN_Specification.deviationrunningcdLabel = this.M_TN_Specification.deviationrunningcd != null && this.M_TN_Specification.deviationrunningcd != '' ? data.deviationrunningcd + this.separator + data.descsdeviationrc :'' 
                this.M_TN_Specification.cldeviationrunningcdLabel = this.M_TN_Specification.cldeviationrunningcd != null && this.M_TN_Specification.cldeviationrunningcd != '' ? data.cldeviationrunningcd + this.separator + data.descscldeviationrc :''
                this.M_TN_Specification.reservationrunningcdLabel = this.M_TN_Specification.reservationrunningcd != null && this.M_TN_Specification.reservationrunningcd != '' ? data.reservationrunningcd + this.separator + data.descsreservationrc :'' 
                this.M_TN_Specification.clreservationrunningcdLabel = this.M_TN_Specification.clreservationrunningcd != null && this.M_TN_Specification.clreservationrunningcd != '' ? data.clreservationrunningcd + this.separator + data.descsclreservationrc  :'' 
                this.M_TN_Specification.addendumrunningcdLabel = this.M_TN_Specification.addendumrunningcd != null && this.M_TN_Specification.addendumrunningcd != '' ? data.addendumrunningcd + this.separator + data.descsaddendumrc :'' 
                this.M_TN_Specification.claddendumrunningcdLabel = this.M_TN_Specification.claddendumrunningcd != null && this.M_TN_Specification.claddendumrunningcd != '' ? data.claddendumrunningcd + this.separator + data.descscladdendumrc :'' 
                this.M_TN_Specification.cancellationrunningcdLabel = this.M_TN_Specification.cancellationrunningcd != null && this.M_TN_Specification.cancellationrunningcd != '' ? data.cancellationrunningcd + this.separator + data.descscancellationrc :'' 
                this.M_TN_Specification.clcancellationrunningcdLabel = this.M_TN_Specification.clcancellationrunningcd != null && this.M_TN_Specification.clcancellationrunningcd != '' ? data.clcancellationrunningcd + this.separator + data.descsclcancellationrc :'' 
                this.M_TN_Specification.loadingrunningcdLabel = this.M_TN_Specification.loadingrunningcd != null && this.M_TN_Specification.loadingrunningcd != '' ? data.loadingrunningcd + this.separator + data.descsloadingrc :'' 
                this.M_TN_Specification.unloadingrunningcdLabel = this.M_TN_Specification.unloadingrunningcd != null && this.M_TN_Specification.unloadingrunningcd != '' ? data.unloadingrunningcd + this.separator + data.descsunloadingrc :'' 
                this.M_TN_Specification.subleaserunningcdLabel = this.M_TN_Specification.subleaserunningcd != null && this.M_TN_Specification.subleaserunningcd != '' ? data.subleaserunningcd + this.separator + data.descssubleaserc  :'' 
                this.M_TN_Specification.assignmentrunningcdLabel = this.M_TN_Specification.assignmentrunningcd != null && this.M_TN_Specification.assignmentrunningcd != '' ? data.assignmentrunningcd + this.separator + data.descsassignmentrc :'' 
                this.M_TN_Specification.terminationrunningcdLabel = this.M_TN_Specification.terminationrunningcd != null && this.M_TN_Specification.terminationrunningcd != '' ? data.terminationrunningcd + this.separator + data.descsearlyterminationrc :'' 
                this.M_TN_Specification.clterminationrunningcdLabel = this.M_TN_Specification.clterminationrunningcd != null && this.M_TN_Specification.clterminationrunningcd != '' ? data.clterminationrunningcd + this.separator + data.descsclearlyterminationrc :'' 
                this.M_TN_Specification.assetenhancementrunningcdLabel = this.M_TN_Specification.assetenhancementrunningcd != null && this.M_TN_Specification.assetenhancementrunningcd != '' ? data.assetenhancementrunningcd + this.separator + data.descsassetenhancementrc  :'' 
                this.M_TN_Specification.addendumcancellationrunningcdLabel = this.M_TN_Specification.addendumcancellationrunningcd != null && this.M_TN_Specification.addendumcancellationrunningcd != '' ? data.addendumcancellationrunningcd + this.separator + data.descsaddendumcancellationrc :'' 
                this.M_TN_Specification.eventrunningcdLabel = this.M_TN_Specification.eventrunningcd != null && this.M_TN_Specification.eventrunningcd != '' ? data.eventrunningcd + this.separator + data.descseventrc :'' 
                this.M_TN_Specification.terminationrentaltranstypeLabel = this.M_TN_Specification.terminationrentaltranstype != null && this.M_TN_Specification.terminationrentaltranstype != '' ? data.terminationrentaltranstype + this.separator + data.descsterminationrentaltranstype :'' 
                this.M_TN_Specification.terminationsctranstypeLabel = this.M_TN_Specification.terminationsctranstype != null && this.M_TN_Specification.terminationsctranstype != '' ? data.terminationsctranstype + this.separator + data.descsterminationsctranstype :'' 
                this.M_TN_Specification.cancellationreasoncdLabel = this.M_TN_Specification.cancellationreasoncd != null && this.M_TN_Specification.cancellationreasoncd != '' ? data.cancellationreasoncd + this.separator + data.descscancellationreason :'' 
                this.M_TN_Specification.addendumtypecdLabel = this.M_TN_Specification.addendumtypecd != null && this.M_TN_Specification.addendumtypecd != '' ? data.addendumtypecd + this.separator + data.descsaddendumtype :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit
                }
            else {
                    // this.$store.commit('setStatus', 'NEW')
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                }

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.getDataBy()
        this.hideSideBarMenu()
		
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
