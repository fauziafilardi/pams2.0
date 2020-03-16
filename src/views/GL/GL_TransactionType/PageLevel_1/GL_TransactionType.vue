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
                                        <ABSinputTextVuex :prop="PI_trxtype" v-model="M_GL_TransactionType.trxtype"  ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_TransactionType.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shortdescs" v-model="M_GL_TransactionType.shortdescs"  ref="ref_shortdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">                                        
                                        <ABSInputSelectList @change="OnrunningcdChange" :prop="PI_runningcd" :value="M_GL_TransactionType.runningcd" :label="M_GL_TransactionType.runningcdLabel" ref="ref_runningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_predefineddescs" v-model="M_GL_TransactionType.predefineddescs"  ref="ref_predefineddescs" /> -->
                                        <ABSInputSelectList @change="OnpredefinedjournalcdChange" :prop="PI_predefinedjournalcd" :value="M_GL_TransactionType.predefinedjournalcd" :label="M_GL_TransactionType.predefinedjournalcdLabel" ref="ref_predefinedjournalcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnlinedescsChange" :prop="PI_linedescs" v-model="M_GL_TransactionType.linedescs"  ref="ref_linedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnnextperiodreversalChange" :prop="PI_nextperiodreversal" v-model="M_GL_TransactionType.nextperiodreversal"  ref="ref_nextperiodreversal" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncurrencycontrolChange" :prop="PI_currencycontrol" v-model="M_GL_TransactionType.currencycontrol"  ref="ref_currencycontrol" />
                                      </b-col>
                                    </b-row>

                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="Ont0statusChange" :prop="PI_t0status" v-model="M_GL_TransactionType.t0status"  ref="ref_t0status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="Ont0statusChange" :prop="PI_t0status" v-model="M_GL_TransactionType.t0status"  ref="ref_t0status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="Ont0statusChange" :prop="PI_t0status" v-model="M_GL_TransactionType.t0status"  ref="ref_t0status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="Ont0statusChange" :prop="PI_t0status" v-model="M_GL_TransactionType.t0status"  ref="ref_t0status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="Ont0statusChange" :prop="PI_t0status" v-model="M_GL_TransactionType.t0status"  ref="ref_t0status" />
                                      </b-col>
                                    </b-row> -->

                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Analysis Category Permisssion
                                        </span>
                                    </div>

                                </b-col> <!-- table close -->
                                    
							</b-row>
							<ABSTAnalysisRadioButton :prop="PTAnalysis" v-model="dataT" />
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
		cInsertKey:'id=TrxType,label=TrxType+|+Descs',
		FormType: "List",
		Module:"GL",
            propList: {
                initialWhere: "ModuleCd = 'GL'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_TransactionType :{
                trxtype: '',
                descs: '',
                shortdescs: '',
                runningcd: '',
                predefinedjournalcd: '',
                linedescs: 'Y',
                nextperiodreversal: 'N',
                currencycontrol: 'Y',
                t0status: '',
                t1status: '',
                t2status: '',
                t3status: '',
                t4status: '',
                t5status: '',
                t6status: '',
                t7status: '',
                t8status: '',
                t9status: '',
                t10status: '',
                t11status: '',
                t12status: '',
                t13status: '',
                t14status: '',
                t15status: '',
                t16status: '',
                t17status: '',
                t18status: '',
                t19status: '',
                t20status: '',
                t21status: '',
                t22status: '',
                t23status: '',
                t24status: '',
                t25status: '',
                t26status: '',
                t27status: '',
                t28status: '',
                t29status: '',
                t30status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                runcddescs: '',
                predefineddescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    } 
            ,
            PI_trxtype: { 
                cValidate :'required|max:8', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type ', 
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
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_shortdescs: { 
                cValidate :'max:30', 
                cName: 'shortdescs', 
                cLabel: 'Short Description', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_runningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCodeH_NoModule'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "ModuleCd is null or ModuleCd = 'GL'"   , 
                    ParamWhere: '',

                        }, 
                cValidate :'', 
                cName: 'runningcd', 
                cLabel: 'Running Code ', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_predefinedjournalcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLPreDefinedJournal'    , 
                    ColumnDB: 'PreDefinedJournalCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'predefinedjournalcd', 
                cLabel: 'PreDefined Journal', 
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
                cMasterUrl: 'CM/GL_PredefinedJournal' ,
                cDisplayColumn: 'PreDefinedJournalCd,Descs' , 
            }, 
            PI_linedescs: { 
                cValidate :'required', 
                cName: 'linedescs', 
                cId: 'rdblinedescs', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },{ text: 'Copy', value: 'C' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Description per Line ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_nextperiodreversal: { 
                cValidate :'required', 
                cName: 'nextperiodreversal', 
                cId: 'rdbnextperiodreversal', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Next Period Reversal ', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycontrol: { 
                cValidate :'required', 
                cName: 'currencycontrol', 
                cId: 'rdbcurrencycontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Currency Control ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            
            PI_t0status: { 
                cValidate :'', 
                cName: 't0status', 
                cId: 'rdbt0status', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Location', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 

			      PTAnalysis: {
                cPageLevel: 1,
                cTabIndex: 1,
                // cPageMasterSeq: this.data.PageMasterSeq,
                // cFormPageNo: this.data.PageOrder
            },
            dataT: {}
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
        OnrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_TransactionType.runningcd = data.id
            this.M_GL_TransactionType.runningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsourcecurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OnpredefinedjournalcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_TransactionType.predefinedjournalcd = data.id
            this.M_GL_TransactionType.predefinedjournalcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromsourcecurrencycd}
            }
        })
        this.$forceUpdate()
        },        
        OnlinedescsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{linedescs}
            }
        })
        this.$forceUpdate()
        },
        OnnextperiodreversalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{nextperiodreversal}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{currencycontrol}
            }
        })
        this.$forceUpdate()
        },

//         Ont0statusChange (data) {
//         this.$nextTick(() => {
//             if (this.inputStatus != "VIEW") {
// //{currencycontrol}
//             }
//         })
//         this.$forceUpdate()
//         },
	
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
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TrxType: this.M_GL_TransactionType.trxtype,
                Descs: this.M_GL_TransactionType.descs,
                ShortDescs: this.M_GL_TransactionType.shortdescs,
                RunningCd: this.M_GL_TransactionType.runningcd  == '' || this.M_GL_TransactionType.runningcd == null ? 'NULL' : this.M_GL_TransactionType.runningcd,
                PreDefinedJournalCd: this.M_GL_TransactionType.predefinedjournalcd == '' || this.M_GL_TransactionType.predefinedjournalcd == null ? 'NULL' : this.M_GL_TransactionType.predefinedjournalcd,
                LineDescs: this.M_GL_TransactionType.linedescs,
                NextPeriodReversal: this.M_GL_TransactionType.nextperiodreversal,
                CurrencyControl: this.M_GL_TransactionType.currencycontrol,
                T0Status: '',
                T1Status: '',
                T2Status: this.dataT.T2status,
                T3Status: this.dataT.T3status,
                T4Status: this.dataT.T4status,
                T5Status: this.dataT.T5status,
                T6Status: this.dataT.T6status,
                T7Status: this.dataT.T7status,
                T8Status: this.dataT.T8status,
                T9Status: this.dataT.T9status,
                T10Status: this.dataT.T10status,
                T11Status: this.dataT.T11status,
                T12Status: this.dataT.T12status,
                T13Status: this.dataT.T13status,
                T14Status: this.dataT.T14status,
                T15Status: this.dataT.T15status,
                T16Status: this.dataT.T16status,
                T17Status: this.dataT.T17status,
                  T18Status: '',
                  T19Status: '',
                  T20Status: '',
                T21Status: this.dataT.T21status,
                T22Status: this.dataT.T22status,
                  T23Status: '',
                  T24Status: '',
                  T25Status: '',
                  T26Status: '',
                T27Status: this.dataT.T27status,
                T28Status: this.dataT.T28status,
                T29Status: this.dataT.T29status,
                T30Status: this.dataT.T30status,
                // T0Status: this.M_GL_TransactionType.t0status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T1Status: this.M_GL_TransactionType.t1status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T2Status: this.M_GL_TransactionType.t2status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T3Status: this.M_GL_TransactionType.t3status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T4Status: this.M_GL_TransactionType.t4status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T5Status: this.M_GL_TransactionType.t5status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T6Status: this.M_GL_TransactionType.t6status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T7Status: this.M_GL_TransactionType.t7status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T8Status: this.M_GL_TransactionType.t8status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T9Status: this.M_GL_TransactionType.t9status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T10Status: this.M_GL_TransactionType.t10status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T11Status: this.M_GL_TransactionType.t11status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T12Status: this.M_GL_TransactionType.t12status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T13Status: this.M_GL_TransactionType.t13status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T14Status: this.M_GL_TransactionType.t14status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T15Status: this.M_GL_TransactionType.t15status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T16Status: this.M_GL_TransactionType.t16status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T17Status: this.M_GL_TransactionType.t17status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T18Status: this.M_GL_TransactionType.t18status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T19Status: this.M_GL_TransactionType.t19status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T20Status: this.M_GL_TransactionType.t20status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T21Status: this.M_GL_TransactionType.t21status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T22Status: this.M_GL_TransactionType.t22status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T23Status: this.M_GL_TransactionType.t23status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T24Status: this.M_GL_TransactionType.t24status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T25Status: this.M_GL_TransactionType.t25status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T26Status: this.M_GL_TransactionType.t26status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T27Status: this.M_GL_TransactionType.t27status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T28Status: this.M_GL_TransactionType.t28status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T29Status: this.M_GL_TransactionType.t29status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
                // T30Status: this.M_GL_TransactionType.t30status == '' || this.M_GL_TransactionType.t0status == null ? 'NULL' : this.M_GL_TransactionType.t0status,
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
                TrxType: this.M_GL_TransactionType.trxtype,
                Descs: this.M_GL_TransactionType.descs,
                ShortDescs: this.M_GL_TransactionType.shortdescs,
                RunningCd: this.M_GL_TransactionType.runningcd  == '' || this.M_GL_TransactionType.runningcd == null ? 'NULL' : this.M_GL_TransactionType.runningcd,
                PreDefinedJournalCd: this.M_GL_TransactionType.predefinedjournalcd == '' || this.M_GL_TransactionType.predefinedjournalcd == null ? 'NULL' : this.M_GL_TransactionType.predefinedjournalcd,
                LineDescs: this.M_GL_TransactionType.linedescs,
                NextPeriodReversal: this.M_GL_TransactionType.nextperiodreversal,
                CurrencyControl: this.M_GL_TransactionType.currencycontrol,
                T0Status: '',
                T1Status: '',
                T2Status: this.dataT.T2status,
                T3Status: this.dataT.T3status,
                T4Status: this.dataT.T4status,
                T5Status: this.dataT.T5status,
                T6Status: this.dataT.T6status,
                T7Status: this.dataT.T7status,
                T8Status: this.dataT.T8status,
                T9Status: this.dataT.T9status,
                T10Status: this.dataT.T10status,
                T11Status: this.dataT.T11status,
                T12Status: this.dataT.T12status,
                T13Status: this.dataT.T13status,
                T14Status: this.dataT.T14status,
                T15Status: this.dataT.T15status,
                T16Status: this.dataT.T16status,
                T17Status: this.dataT.T17status,
                  T18Status: '',
                  T19Status: '',
                  T20Status: '',
                T21Status: this.dataT.T21status,
                T22Status: this.dataT.T22status,
                  T23Status: '',
                  T24Status: '',
                  T25Status: '',
                  T26Status: '',
                T27Status: this.dataT.T27status,
                T28Status: this.dataT.T28status,
                T29Status: this.dataT.T29status,
                T30Status: this.dataT.T30status,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_TransactionType.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_TransactionType = {
                trxtype: '',
                descs: '',
                shortdescs: '',
                runningcd: '',
                predefinedjournalcd: '',
                linedescs: 'Y',
                nextperiodreversal: 'N',
                currencycontrol: 'Y',
                t0status: '',
                t1status: '',
                t2status: '',
                t3status: '',
                t4status: '',
                t5status: '',
                t6status: '',
                t7status: '',
                t8status: '',
                t9status: '',
                t10status: '',
                t11status: '',
                t12status: '',
                t13status: '',
                t14status: '',
                t15status: '',
                t16status: '',
                t17status: '',
                t18status: '',
                t19status: '',
                t20status: '',
                t21status: '',
                t22status: '',
                t23status: '',
                t24status: '',
                t25status: '',
                t26status: '',
                t27status: '',
                t28status: '',
                t29status: '',
                t30status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                runcddescs: '',
                predefineddescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
          this.$refs.ref_trxtype.focus()
        },
        M_Edit(){
          this.$refs.ref_descs.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                TrxType: value.TrxType,
                LastUpdateStamp: value.LastUpdateStamp,
                _Message_: ""
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
,                trxtype: record.TrxType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_GL_TransactionType = {
                    trxtype: data.trxtype,
                    descs: data.descs,
                    shortdescs: data.shortdescs,
                    runningcd: data.runningcd,
                    predefinedjournalcd: data.predefinedjournalcd,
                    linedescs: data.linedescs,
                    nextperiodreversal: data.nextperiodreversal,
                    currencycontrol: data.currencycontrol,
                    t0status: data.t0status,
                    t1status: data.t1status,
                    t2status: data.t2status,
                    t3status: data.t3status,
                    t4status: data.t4status,
                    t5status: data.t5status,
                    t6status: data.t6status,
                    t7status: data.t7status,
                    t8status: data.t8status,
                    t9status: data.t9status,
                    t10status: data.t10status,
                    t11status: data.t11status,
                    t12status: data.t12status,
                    t13status: data.t13status,
                    t14status: data.t14status,
                    t15status: data.t15status,
                    t16status: data.t16status,
                    t17status: data.t17status,
                    t18status: data.t18status,
                    t19status: data.t19status,
                    t20status: data.t20status,
                    t21status: data.t21status,
                    t22status: data.t22status,
                    t23status: data.t23status,
                    t24status: data.t24status,
                    t25status: data.t25status,
                    t26status: data.t26status,
                    t27status: data.t27status,
                    t28status: data.t28status,
                    t29status: data.t29status,
                    t30status: data.t30status,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    runcddescs: data.runcddescs,
                    predefineddescs: data.predefineddescs,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                this.M_GL_TransactionType.runningcdLabel = this.M_GL_TransactionType.runningcd != null ? data.runningcd + this.separator + data.runcddescs :'' 
                this.M_GL_TransactionType.predefinedjournalcdLabel = this.M_GL_TransactionType.predefinedjournalcd != null ? data.predefinedjournalcd + this.separator + data.predefineddescs :'' 
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
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

