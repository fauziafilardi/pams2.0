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
                  <!-- {{VisibleForm}}     -->
					<b-col v-show="VisibleForm" md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_msg" v-model="M_TN_DetailTenancySubPortfolio.msg"  ref="ref_msg" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_subportfolioname" v-model="M_TN_DetailTenancySubPortfolio.subportfolioname"  ref="ref_subportfolioname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnsubportfoliocategoryChange" :prop="PI_subportfoliocategory" :value="M_TN_DetailTenancySubPortfolio.subportfoliocategory" :label="M_TN_DetailTenancySubPortfolio.subportfoliocategoryLabel" ref="ref_subportfoliocategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnsubportfoliochargecoverageChange" :prop="PI_subportfoliochargecoverage" :value="M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage" :label="M_TN_DetailTenancySubPortfolio.subportfoliochargecoverageLabel" ref="ref_subportfoliochargecoverage"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsubportfoliostrataChange" :prop="PI_subportfoliostrata" v-model="M_TN_DetailTenancySubPortfolio.subportfoliostrata"  ref="ref_subportfoliostrata" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnsubportfolioabccategoryChange" :prop="PI_subportfolioabccategory" :value="M_TN_DetailTenancySubPortfolio.subportfolioabccategory" :label="M_TN_DetailTenancySubPortfolio.subportfolioabccategoryLabel" ref="ref_subportfolioabccategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnsubportfolioclusterChange" :prop="PI_subportfoliocluster" :value="M_TN_DetailTenancySubPortfolio.subportfoliocluster" :label="M_TN_DetailTenancySubPortfolio.subportfolioclusterLabel" ref="ref_subportfoliocluster"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnsubportfoliogroupChange" :prop="PI_subportfoliogroup" :value="M_TN_DetailTenancySubPortfolio.subportfoliogroup" :label="M_TN_DetailTenancySubPortfolio.subportfoliogroupLabel" ref="ref_subportfoliogroup"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpipelinemallChange" :prop="PI_pipelinemall" v-model="M_TN_DetailTenancySubPortfolio.pipelinemall"  ref="ref_pipelinemall" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_DetailTenancySubPortfolio.operatingfromhour" :valueTo="M_TN_DetailTenancySubPortfolio.operatingtohour"  ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_operatingtohour" v-model="M_TN_DetailTenancySubPortfolio.operatingtohour"  ref="ref_operatingtohour"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totallandarea" v-model="M_TN_DetailTenancySubPortfolio.totallandarea"  ref="ref_totallandarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalbuilduparea" v-model="M_TN_DetailTenancySubPortfolio.totalbuilduparea"  ref="ref_totalbuilduparea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalinbuildingparkingarea" v-model="M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea"  ref="ref_totalinbuildingparkingarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalopenparkingarea" v-model="M_TN_DetailTenancySubPortfolio.totalopenparkingarea"  ref="ref_totalopenparkingarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalpublicarea" v-model="M_TN_DetailTenancySubPortfolio.totalpublicarea"  ref="ref_totalpublicarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalfootprintarea" v-model="M_TN_DetailTenancySubPortfolio.totalfootprintarea"  ref="ref_totalfootprintarea"/>
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "Form",
            Module:"TN",
            VisibleForm: true,
            propList: {
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_DetailTenancySubPortfolio :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                subportfolioname: '',
                subportfoliocategory: 'W',
                subportfoliochargecoverage: 'R',
                subportfolioabccategory: '1',
                subportfoliostrata: 'N',
                subportfoliocluster: '1',
                subportfoliogroup: '1',
                pipelinemall: 'N',
                totallandarea: '0',
                totalbuilduparea: '0',
                totalinbuildingparkingarea: '0',
                totalopenparkingarea: '0',
                totalpublicarea: '0',
                totalfootprintarea: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                operatingfromhour: '',
                operatingtohour: '',
                rowid: 0
                    }
            ,
            PI_msg: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_subportfolioname: { 
                cValidate :'max:50', 
                cName: 'subportfolioname', 
                cLabel: 'SubPortfolio Name', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliocategory: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'subportfoliocategory', 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
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
                cOption: [{ label: 'Own', id: 'W' },{ label: 'Manage', id: 'M' },{ label: 'Other', id: 'O' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_subportfoliochargecoverage: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'subportfoliochargecoverage', 
                cLabel: 'Charge Coverage', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
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
                cOption: [{ label: 'Rental', id: 'R' },{ label: 'Service Utility', id: 'S' },{ label: 'All', id: 'A' },{ label: 'Other', id: 'O' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_subportfoliostrata: { 
                cValidate :'', 
                cName: 'subportfoliostrata', 
                cId: 'rdbsubportfoliostrata', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'Strata SubPortfolio', 
                cLabelSize: 4, 
                cOrder: 4, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfolioabccategory: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'subportfolioabccategory', 
                cLabel: 'ABC Category', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
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
                cOption: [{ label: 'Grade AAA', id: '1' },{ label: 'Grade AA', id: '2' },{ label: 'Grade A', id: '3' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_subportfoliocluster: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'subportfoliocluster', 
                cLabel: 'SubPortfolio Cluster', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
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
                cOption: [{ label: 'Cluster A', id: '1' },{ label: 'Cluster B', id: '2' },{ label: 'Cluster C', id: '3' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_subportfoliogroup: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'subportfoliogroup', 
                cLabel: 'SubPortfolio Group', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
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
                cOption: [{ label: 'Group A', id: '1' },{ label: 'Group B', id: '2' },{ label: 'Group C', id: '3' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_pipelinemall: { 
                cValidate :'', 
                cName: 'pipelinemall', 
                cId: 'rdbpipelinemall', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                cRadioDefaultOption: '', 
                cLabel:'Pipeline Mall', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingfromhour: { 
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating Hour Start - End', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },  
            PI_totallandarea: { 
                cValidate :'max:50', 
                cName: 'totallandarea', 
                cLabel: 'Total Land Area', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalbuilduparea: { 
                cValidate :'max:50', 
                cName: 'totalbuilduparea', 
                cLabel: 'Total Build Up Area', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalinbuildingparkingarea: { 
                cValidate :'max:50', 
                cName: 'totalinbuildingparkingarea', 
                cLabel: 'Total In Building Parking', 
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
            PI_totalopenparkingarea: { 
                cValidate :'max:50', 
                cName: 'totalopenparkingarea', 
                cLabel: 'Total Open Parking', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalpublicarea: { 
                cValidate :'max:50', 
                cName: 'totalpublicarea', 
                cLabel: 'Total Public Area', 
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
            PI_totalfootprintarea: { 
                cValidate :'max:50', 
                cName: 'totalfootprintarea', 
                cLabel: 'Total Foot Print Area', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'numeric',
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      OnsubportfoliocategoryChange (data) {
        this.$nextTick(() => {
            this.M_TN_DetailTenancySubPortfolio.subportfoliocategory = data.id
            this.M_TN_DetailTenancySubPortfolio.subportfoliocategoryLabel = data.label
        })
        this.$forceUpdate()
        },
        OnsubportfoliochargecoverageChange (data) {
        this.$nextTick(() => {
          this.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage = data.id
          this.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverageLabel = data.label
        })
        this.$forceUpdate()
        },
        OnsubportfolioabccategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OnsubportfolioclusterChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliostrataChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliogroupChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OnpipelinemallChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{pipelinemall}
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
      
      this.VisibleForm = false		
		},		
		doDoubleClick(){
        },
		rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            // this.$parent.showForm = true
            // this.getToolbar().isNew = true
            // this.getToolbar().statusFunction[6].disabled = true
        //      this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[3].disabled = false
            
            this.getDataBy()
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.DataRowPage1.SubPortfolioCd,
                SubPortfolioName: this.M_TN_DetailTenancySubPortfolio.subportfolioname,
                SubPortfolioCategory: this.M_TN_DetailTenancySubPortfolio.subportfoliocategory,
                SubPortfolioChargeCoverage: this.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage,
                SubPortfolioABCCategory: this.M_TN_DetailTenancySubPortfolio.subportfolioabccategory,
                SubPortfolioStrata: this.M_TN_DetailTenancySubPortfolio.subportfoliostrata,
                SubPortfolioCluster: this.M_TN_DetailTenancySubPortfolio.subportfoliocluster,
                SubPortfolioGroup: this.M_TN_DetailTenancySubPortfolio.subportfoliogroup,
                PipelineMall: this.M_TN_DetailTenancySubPortfolio.pipelinemall,
                TotalLandArea: this.M_TN_DetailTenancySubPortfolio.totallandarea,
                TotalBuildUpArea: this.M_TN_DetailTenancySubPortfolio.totalbuilduparea,
                TotalInBuildingParkingArea: this.M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea,
                TotalOpenParkingArea: this.M_TN_DetailTenancySubPortfolio.totalopenparkingarea,
                TotalPublicArea: this.M_TN_DetailTenancySubPortfolio.totalpublicarea,
                TotalFootPrintArea: this.M_TN_DetailTenancySubPortfolio.totalfootprintarea,
                OperatingFromHour: this.M_TN_DetailTenancySubPortfolio.operatingfromhour,
                OperatingToHour: this.M_TN_DetailTenancySubPortfolio.operatingtohour,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.DataRowPage1.LastUpdateStamp
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
                this.getDataBy()
            })
        },
        M_Update() {          
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.DataRowPage1.SubPortfolioCd,
                SubPortfolioName: this.M_TN_DetailTenancySubPortfolio.subportfolioname,
                SubPortfolioCategory: this.M_TN_DetailTenancySubPortfolio.subportfoliocategory,
                SubPortfolioChargeCoverage: this.M_TN_DetailTenancySubPortfolio.subportfoliochargecoverage,
                SubPortfolioABCCategory: this.M_TN_DetailTenancySubPortfolio.subportfolioabccategory,
                SubPortfolioStrata: this.M_TN_DetailTenancySubPortfolio.subportfoliostrata,
                SubPortfolioCluster: this.M_TN_DetailTenancySubPortfolio.subportfoliocluster,
                SubPortfolioGroup: this.M_TN_DetailTenancySubPortfolio.subportfoliogroup,
                PipelineMall: this.M_TN_DetailTenancySubPortfolio.pipelinemall,
                TotalLandArea: this.M_TN_DetailTenancySubPortfolio.totallandarea,
                TotalBuildUpArea: this.M_TN_DetailTenancySubPortfolio.totalbuilduparea,
                TotalInBuildingParkingArea: this.M_TN_DetailTenancySubPortfolio.totalinbuildingparkingarea,
                TotalOpenParkingArea: this.M_TN_DetailTenancySubPortfolio.totalopenparkingarea,
                TotalPublicArea: this.M_TN_DetailTenancySubPortfolio.totalpublicarea,
                TotalFootPrintArea: this.M_TN_DetailTenancySubPortfolio.totalfootprintarea,
                OperatingFromHour: this.M_TN_DetailTenancySubPortfolio.operatingfromhour,
                OperatingToHour: this.M_TN_DetailTenancySubPortfolio.operatingtohour,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_TN_DetailTenancySubPortfolio.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
                
				
            })
            // this.VisibleForm = true
        },
		M_ClearForm(){
            this.M_TN_DetailTenancySubPortfolio = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                subportfolioname: '',
                subportfoliocategory: 'W',
                subportfoliochargecoverage: 'R',
                subportfolioabccategory: '1',
                subportfoliostrata: 'N',
                subportfoliocluster: '1',
                subportfoliogroup: '1',
                pipelinemall: 'N',
                totallandarea: 0,
                totalbuilduparea: 0,
                totalinbuildingparkingarea: 0,
                totalopenparkingarea: 0,
                totalpublicarea: 0,
                totalfootprintarea: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                operatingfromhour: '',
                operatingtohour: '',
                rowid: 0
                    }
            		
		},
        M_New(){
          this.VisibleForm = true


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
        getDataBy () {
          // console.log(this.DataRowPage1)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               subportfoliocd: this.DataRowPage1.SubPortfolioCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                if(response.Data.length > 0){
                  // console.log('1')
                  this.VisibleForm = true
                    // this.$store.commit('setStatus', 'EDIT')
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
this.M_TN_DetailTenancySubPortfolio = {
                subportfoliocd: data.subportfoliocd,
                subportfolioname: data.subportfolioname,
                subportfoliocategory: data.subportfoliocategory,
                subportfoliochargecoverage: data.subportfoliochargecoverage,
                subportfolioabccategory: data.subportfolioabccategory,
                subportfoliostrata: data.subportfoliostrata,
                subportfoliocluster: data.subportfoliocluster,
                subportfoliogroup: data.subportfoliogroup,
                pipelinemall: data.pipelinemall,
                totallandarea: this.isCurrency(data.totallandarea, this.decimal),
                totalbuilduparea: this.isCurrency(data.totalbuilduparea, this.decimal),
                totalinbuildingparkingarea: this.isCurrency(data.totalinbuildingparkingarea, this.decimal),
                totalopenparkingarea: this.isCurrency(data.totalopenparkingarea, this.decimal),
                totalpublicarea: this.isCurrency(data.totalpublicarea, this.decimal),
                totalfootprintarea: this.isCurrency(data.totalfootprintarea, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: this.DataRowPage1.LastUpdateStamp,
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                }
            else {
                    // console.log('2')
                    this.VisibleForm = false
                    // this.$store.commit('setStatus', 'NEW')
                    this.getToolbar().FormStatus = 'NEW'
                    // this.M_ClearForm()
                    this.getToolbar().ProcessPS()
                    
                }
            })
        }
        ,MdtRange_operatingfromhour (data) {
            this.M_TN_DetailTenancySubPortfolio.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data) {
            this.M_TN_DetailTenancySubPortfolio.operatingtohour = data
        }
		
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
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

