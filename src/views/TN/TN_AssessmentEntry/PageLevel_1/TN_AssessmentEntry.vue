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
                                        <ABSinputTextVuex :prop="PI_assessmentno" v-model="M_TN_AssessmentEntry.assessmentno"  ref="ref_assessmentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputDateVuex @input="OnassessmentdateChange" :prop="PI_assessmentdate" v-model="M_TN_AssessmentEntry.assessmentdate"  ref="ref_assessmentdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelect2 @change="OnassessmenttypeChange" :prop="PI_assessmenttype" :value="M_TN_AssessmentEntry.assessmenttype" :label="M_TN_AssessmentEntry.assessmenttypeLabel" ref="ref_assessmenttype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_AssessmentEntry.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_AssessmentEntry.applicationno" :label="M_TN_AssessmentEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSInputSelectList @change="OnassessmentcdChange" :prop="PI_assessmentcd" :value="M_TN_AssessmentEntry.assessmentcd" :label="M_TN_AssessmentEntry.assessmentcdLabel" ref="ref_assessmentcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_passingscore" v-model="M_TN_AssessmentEntry.passingscore"  ref="ref_passingscore"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_totalscore" v-model="M_TN_AssessmentEntry.totalscore"  ref="ref_totalscore"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_AssessmentEntry.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_AssessmentEntry.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_tenantname" v-model="M_TN_AssessmentEntry.tenantname"  ref="ref_tenantname" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_marketing" v-model="M_TN_AssessmentEntry.marketing"  ref="ref_marketing" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_lotlist" v-model="M_TN_AssessmentEntry.lotlist"  ref="ref_lotlist" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_grossseminetarea" v-model="M_TN_AssessmentEntry.grossseminetarea"  ref="ref_grossseminetarea" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_shopname" v-model="M_TN_AssessmentEntry.shopname"  ref="ref_shopname" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_customercategory" v-model="M_TN_AssessmentEntry.customercategory"  ref="ref_customercategory" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSCompute :prop="PI_leaseperiod" v-model="M_TN_AssessmentEntry.leaseperiod"  ref="ref_leaseperiod" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_AssessmentEntry.rcd" :valueTo="M_TN_AssessmentEntry.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_totaloutlet" v-model="M_TN_AssessmentEntry.totaloutlet"  ref="ref_totaloutlet"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnbrandcategoryChange" :prop="PI_brandcategory" v-model="M_TN_AssessmentEntry.brandcategory"  ref="ref_brandcategory" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_tenantgroup" v-model="M_TN_AssessmentEntry.tenantgroup"  ref="ref_tenantgroup" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_brandingroup" v-model="M_TN_AssessmentEntry.brandingroup"  ref="ref_brandingroup" />
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            AssessmentRunningCd: '',

            M_TN_AssessmentEntry :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                assessmentno: '',
                assessmentdate: '',
                assessmenttype: '2',
                assessmentcd: '',
                assessmentcddescs: '',
                totalscore: 0,
                descs: '',
                passingscore: 0,
                remarks: '',
                applicationno: '',
                userinput: '',
                status: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0,
                tenantname: '',
                marketing: '',
                lotlist: '',
                grossseminetarea: '',
                shopname: '',
                customercategory: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                totaloutlet: '',
                brandcategory: 'N',
                tenantgroup: '',
                brandingroup: ''
                    }
            ,
            PI_assessmentno: { 
                cValidate :'max:20', 
                cName: 'assessmentno', 
                cLabel: 'Assessment No', 
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
            PI_tenantname: { 
                cLabel: 'Tenant Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_assessmentdate: { 
                cValidate :'', 
                cName: 'assessmentdate', 
                cLabel: 'Assessment Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_marketing: { 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_assessmenttype: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'assessmenttype', 
                cLabel: 'Assessment Type', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'New Tenant', id: '1' },{ label: 'Renewal Contract', id: '2' },{ label: 'Early Termination', id: '3' },{ label: 'Rental Review', id: '4' },{ label: 'Relocation', id: '5' },{ label: 'Other', id: '6' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_lotlist: { 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
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
            PI_grossseminetarea: { 
                cLabel: 'Gross - Semi - Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpAssessment_ApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And Status in ('A','N')"   , 
                    ParamWhere: ''
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No ', 
                cKey: true, 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_shopname: { 
                cLabel: 'Shop Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_assessmentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCMAssessment'    , 
                    ColumnDB: 'AssessmentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'assessmentcd', 
                cLabel: 'Assessment Code ', 
                cKey: true, 
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
                cDisplayColumn: 'AssessmentCd,Descs' ,
            }, 
            PI_customercategory: { 
                cLabel: 'Tenant Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_passingscore: { 
                cLabel: 'Passing Score', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_leaseperiod: { 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_totalscore: { 
                cLabel: 'Total Score', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cKey: true, 
                cVisible:  true, 
                cProtect: true, 
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
            PI_totaloutlet: { 
                cLabel: 'Total Outlet', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:7, 
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
            PI_brandcategory: { 
                cValidate :'', 
                cName: 'brandcategory', 
                cId: 'rdbbrandcategory', 
                cRadioOptions: [{ text: 'National', value: 'N' },{ text: 'International', value: 'I' },{ text: 'Local', value: 'L' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Brand Category', 
                cLabelSize: 4,
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tenantgroup: { 
                cLabel: 'Tenant Group', 
                cLabelSize: 4, 
                cValue: '',
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_brandingroup: { 
                cLabel: 'Other Brand in Group', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
        OnassessmentdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assessmentdate}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_AssessmentEntry.applicationno = data.id
            this.M_TN_AssessmentEntry.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.getApplicationData(data.id)
            }
        })
        this.$forceUpdate()
        },
        OnassessmentcdChange (data) {
          // console.log(data)
        this.$nextTick(() => {
            this.M_TN_AssessmentEntry.assessmentcd = data.id
            this.M_TN_AssessmentEntry.assessmentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_TN_AssessmentEntry.passingscore = this.isCurrency(data.PassingScore, this.decimal)
            }
        })
        this.$forceUpdate()
        },
        OnassessmenttypeChange (data){
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assessmenttype}
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
        OnbrandcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{brandcategory}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[2].disabled = false
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
          if (this.M_TN_AssessmentEntry.assessmentno == "(auto)") {
            this.FnGenerateRunningCode(
              this.getDataUser().SubPortfolioCd,
              this.AssessmentRunningCd,
              this.getDataUser().UserId,
              this.M_TN_AssessmentEntry.assessmentdate
            ).then(dt9 => {
              if (dt9 != null) {
                this.M_TN_AssessmentEntry.assessmentno = dt9.RunningCode
                var param = {
                  OptionSeq: this.getOptionSeq().OptionSeq,
                  LineNo: this.$parent.data.PageOrder,
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  AssessmentNo: this.M_TN_AssessmentEntry.assessmentno,
                  AssessmentDate: this.M_TN_AssessmentEntry.assessmentdate == '' || this.M_TN_AssessmentEntry.assessmentdate == null ? 'NULL' : this.M_TN_AssessmentEntry.assessmentdate ,
                  ApplicationNo: this.M_TN_AssessmentEntry.applicationno == '' || this.M_TN_AssessmentEntry.applicationno == null ? 'NULL' : this.M_TN_AssessmentEntry.applicationno ,
                  AssessmentType: this.M_TN_AssessmentEntry.assessmenttype,
                  AssessmentCd: this.M_TN_AssessmentEntry.assessmentcd == '' || this.M_TN_AssessmentEntry.assessmentcd == null ? 'NULL' : this.M_TN_AssessmentEntry.assessmentcd ,
                  Descs: this.M_TN_AssessmentEntry.descs,
                  PassingScore: this.M_TN_AssessmentEntry.passingscore == '' || this.M_TN_AssessmentEntry.passingscore == null ? 0 : this.M_TN_AssessmentEntry.passingscore,
                  TotalScore: 0,
                  Status: 'N',
                  Remarks: this.M_TN_AssessmentEntry.remarks,
                  UserInput: this.getDataUser().UserId
                }

                this.postJSON(this.getUrlInsert(), param)
                .then((response) => {
                  if(response == null) return
                  this.$parent.resultInsert(response.Message)
                })
              }
            })
          } else {
            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              AssessmentNo: this.M_TN_AssessmentEntry.assessmentno,
              AssessmentDate: this.M_TN_AssessmentEntry.assessmentdate == '' || this.M_TN_AssessmentEntry.assessmentdate == null ? 'NULL' : this.M_TN_AssessmentEntry.assessmentdate ,
              ApplicationNo: this.M_TN_AssessmentEntry.applicationno == '' || this.M_TN_AssessmentEntry.applicationno == null ? 'NULL' : this.M_TN_AssessmentEntry.applicationno ,
              AssessmentType: this.M_TN_AssessmentEntry.assessmenttype,
              AssessmentCd: this.M_TN_AssessmentEntry.assessmentcd == '' || this.M_TN_AssessmentEntry.assessmentcd == null ? 'NULL' : this.M_TN_AssessmentEntry.assessmentcd ,
              Descs: this.M_TN_AssessmentEntry.descs,
              PassingScore: this.M_TN_AssessmentEntry.passingscore == '' || this.M_TN_AssessmentEntry.passingscore == null ? 0 : this.M_TN_AssessmentEntry.passingscore,
              TotalScore: 0,
              Status: 'N',
              Remarks: this.M_TN_AssessmentEntry.remarks,
              UserInput: this.getDataUser().UserId              
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if(response == null) return
              this.$parent.resultInsert(response.Message)
            })
          }
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                AssessmentNo: this.M_TN_AssessmentEntry.assessmentno,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_AssessmentEntry.applicationno == '' || this.M_TN_AssessmentEntry.applicationno == null ? 'NULL' : this.M_TN_AssessmentEntry.applicationno ,
                AssessmentType: this.M_TN_AssessmentEntry.assessmenttype,
                AssessmentCd: this.M_TN_AssessmentEntry.assessmentcd == '' || this.M_TN_AssessmentEntry.assessmentcd == null ? 'NULL' : this.M_TN_AssessmentEntry.assessmentcd ,
                Descs: this.M_TN_AssessmentEntry.descs,
                Remarks: this.M_TN_AssessmentEntry.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_AssessmentEntry.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_AssessmentEntry = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                assessmentno: '',
                assessmentdate: this.momentDate(new Date()),
                assessmenttype: '2',
                assessmentcd: '',
                assessmentcddescs: '',
                totalscore: '',
                descs: '',
                passingscore: '',
                remarks: '',
                applicationno: '',
                userinput: '',
                status: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0,
                tenantname: '',
                marketing: '',
                lotlist: '',
                grossseminetarea: '0.00 / 0.00 / 0.00',
                shopname: '',
                customercategory: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                totaloutlet: '',
                brandcategory: '',
                tenantgroup: '',
                brandingroup: ''
                    }
            		
		},
        M_New(){
        if (this.AssessmentRunningCd != null && this.AssessmentRunningCd != "")
             { this.M_TN_AssessmentEntry.assessmentno = "(auto)"
             this.PI_assessmentno.cProtect = true }
        else {
             this.M_TN_AssessmentEntry.assessmentno = ""
             this.PI_assessmentno.cProtect = false }
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    AssessmentNo: value.AssessmentNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''


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
                assessmentno: record.AssessmentNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
                var sts = ''
                if (data.status == 'N') {
                  sts = 'Pending'
                }
                else if (data.status == 'C') {
                  sts = 'Confirmed'
                }
                else if (data.status == 'A') {
                  sts = 'Approved'
                }
                else if (data.status == 'X') {
                  sts = 'Cancel'
                }
                else {
                  sts = 'Closing'
                }
this.M_TN_AssessmentEntry = {
                subportfoliocd: data.subportfoliocd,
                assessmentno: data.assessmentno,
                assessmentdate: data.assessmentdate,
                assessmenttype: data.assessmenttype,
                assessmentcd: data.assessmentcd,
                assessmentcddescs: data.assessmentcddescs,
                totalscore: this.isCurrency(data.totalscore, this.decimal),
                descs: data.descs,
                passingscore: this.isCurrency(data.passingscore, this.decimal),
                remarks: data.remarks,
                applicationno: data.applicationno,
                userinput: data.userinput,
                status: sts,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                tenantname: '',
                marketing: '',
                lotlist: '',
                grossseminetarea: '',
                shopname: '',
                customercategory: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                totaloutlet: '',
                brandcategory: '',
                tenantgroup: '',
                brandingroup: ''
                    }
                 

                this.M_TN_AssessmentEntry.applicationnoLabel = this.M_TN_AssessmentEntry.applicationno != null && this.M_TN_AssessmentEntry.applicationno != '' ? data.applicationno + this.separator + data.descs :'' 
                this.M_TN_AssessmentEntry.assessmentcdLabel = this.M_TN_AssessmentEntry.assessmentcd != null && this.M_TN_AssessmentEntry.assessmentcd != '' ? data.assessmentcd + this.separator + data.assessmentcddescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                this.getApplicationData(data.applicationno)

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_AssessmentEntry.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_AssessmentEntry.red = data
        },
        getSpec () {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: 1,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.postEncode( this.getUrlById(), param )
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) return

            this.AssessmentRunningCd = ress.Data[0].assessmentrunningcd
            this.FormToABSList().doGetList('','eb_getList')
          })
        },
        getApplicationData (appNo) {
          var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: appNo
          }

          this.postEncode( this.getUrlById() + '2', param )
          .then(response => {
            if(response == null) return
            var data = response.Data[0]
            
            this.M_TN_AssessmentEntry.tenantname = data.tenantname
            this.M_TN_AssessmentEntry.marketing = data.marketing
            this.M_TN_AssessmentEntry.lotlist = data.lotlist
            this.M_TN_AssessmentEntry.grossseminetarea = this.isCurrency(data.grossarea, this.decimal) + " / " + this.isCurrency(data.semigrossarea, this.decimal) + " / " + this.isCurrency(data.netarea, this.decimal)
            this.M_TN_AssessmentEntry.shopname = data.shopname
            this.M_TN_AssessmentEntry.customercategory = data.customercategory
            this.M_TN_AssessmentEntry.leaseperiod = this.isCurrency(data.leaseperiod, this.decimal)
            this.M_TN_AssessmentEntry.rcd = data.rcd
            this.M_TN_AssessmentEntry.red = data.red
            this.M_TN_AssessmentEntry.totaloutlet = this.isCurrency(data.totaloutlet, this.decimal)
            this.M_TN_AssessmentEntry.brandcategory = data.brandcategory
            this.M_TN_AssessmentEntry.tenantgroup = data.name
            this.M_TN_AssessmentEntry.brandingroup = data.name
          })
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
        this.getSpec()
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

