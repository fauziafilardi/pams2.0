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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                  <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Current Period / Year <span style="color:red;">*</span></label>
                                          </b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly :prop="PI_currentfinperiod" v-model="M_GL_Specification.currentfinperiod"  ref="ref_currentfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <!-- <ABSTextBoxOnly :prop="PI_openfinyear" v-model="M_GL_SubPortfolioSpecification.openfinyear"  ref="ref_openfinyear"/> -->
                                            <ABSTextBoxOnly :prop="PI_currentfinyear" v-model="M_GL_Specification.currentfinyear"  ref="ref_currentfinyear"/>
                                          </b-col>
                                        </b-row>                                       
                                      </b-col>
                                    </b-row> 
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnjournalsourceChange" :prop="PI_journalsource" v-model="M_GL_Specification.journalsource"  ref="ref_journalsource" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbasecurrencycdChange" :prop="PI_basecurrencycd" :value="M_GL_Specification.basecurrencycd" :label="M_GL_Specification.basecurrencycdLabel" ref="ref_basecurrencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnforcetrxamtChange" :prop="PI_forcetrxamt" v-model="M_GL_Specification.forcetrxamt"  ref="ref_forcetrxamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_activebudget" v-model="M_GL_Specification.activebudget"  ref="ref_activebudget"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_accountgroup" v-model="M_GL_Specification.accountgroup"  ref="ref_accountgroup"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnforcesubmoduleChange" :prop="PI_forcesubmodule" v-model="M_GL_Specification.forcesubmodule"  ref="ref_forcesubmodule" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbatchcontrolChange" :prop="PI_batchcontrol" v-model="M_GL_Specification.batchcontrol"  ref="ref_batchcontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbatchnumberingChange" :prop="PI_batchnumbering" v-model="M_GL_Specification.batchnumbering"  ref="ref_batchnumbering" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_maximumqueuinghour" v-model="M_GL_Specification.maximumqueuinghour"  ref="ref_maximumqueuinghour"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bbcfcode" v-model="M_GL_Specification.bbcfcode"  ref="ref_bbcfcode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_ebcfcode" v-model="M_GL_Specification.ebcfcode"  ref="ref_ebcfcode"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Retained Earning
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnrerecognitionChange" :prop="PI_rerecognition" v-model="M_GL_Specification.rerecognition"  ref="ref_rerecognition" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reperiod" v-model="M_GL_Specification.reperiod"  ref="ref_reperiod"/>
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
      FormType: "Form",
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},

            M_GL_Specification :{
                currentfinperiod: '0',
                currentfinyear: '0',
                journalsource: 'E',
                basecurrencycd: '',
                forcetrxamt: 'Y',
                activebudget: '',
                accountgroup: '0',
                forcesubmodule: 'D',
                batchcontrol: 'Y',
                batchnumbering: 'M',
                rerecognition: 'C',
                reperiod: '0',
                maximumqueuinghour: '0',
                bbcfcode: '',
                ebcfcode: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                descs: '',
                rowid: 0
                    }
            ,					
            PI_currentfinperiod: { 
                cValidate :'required|max:3', 
                cName: 'currentfinperiod', 
                cLabel: 'Current Period', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currentfinyear: { 
                cValidate :'required|max:4', 
                cName: 'currentfinyear', 
                cLabel: 'Current Year', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_journalsource: { 
                cValidate :'', 
                cName: 'journalsource', 
                cId: 'rdbjournalsource', 
                cRadioOptions: [{ text: 'Entry User', value: 'E' },{ text: 'Posting User', value: 'P' },], 
                cRadioDefaultOption: 'E', 
                cLabel:'Journal Source', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_basecurrencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'basecurrencycd', 
                cLabel: 'Base Currency ', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_forcetrxamt: { 
                cValidate :'', 
                cName: 'forcetrxamt', 
                cId: 'rdbforcetrxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Force Other Amount', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_activebudget: { 
                cValidate :'required|max:1', 
                cName: 'activebudget', 
                cLabel: 'Active Budget ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cLastLabel: 'B..L', 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountgroup: { 
                cValidate :'', 
                cName: 'accountgroup', 
                cLabel: 'Account Grouping', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_forcesubmodule: { 
                cValidate :'', 
                cName: 'forcesubmodule', 
                cId: 'rdbforcesubmodule', 
                cRadioOptions: [{ text: 'Direct', value: 'D' },{ text: 'Indirect', value: 'I' },{ text: 'Stand Alone', value: 'S' },], 
                cRadioDefaultOption: 'D', 
                cLabel:'Force Sub Module', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchcontrol: { 
                cValidate :'', 
                cName: 'batchcontrolll', 
                cId: 'rdbbatchcontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Batch Control', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchnumbering: { 
                cValidate :'', 
                cName: 'batchnumberinggg', 
                cId: 'rdbbatchnumbering', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Semi Auto', value: 'S' }, { text: 'Auto', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Batch Numbering', 
                cLabelSize: 4, 
                cOrder: 10, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_maximumqueuinghour: { 
                cValidate :'required|max:12', 
                cName: 'maximumqueuinghour', 
                cLabel: 'Maximum Queuing Hour', 
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
            PI_bbcfcode: { 
                cValidate :'', 
                cName: 'bbcfcode', 
                cLabel: '', 
                cLabelSize: 4, 
                // cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ebcfcode: { 
                cValidate :'', 
                cName: 'ebcfcode', 
                cLabel: '', 
                cLabelSize: 4, 
                // cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rerecognition: { 
                cValidate :'', 
                cName: 'rerecognition', 
                cId: 'rdbrerecognition', 
                cRadioOptions: [{ text: 'Current Year', value: 'C' },{ text: 'Next Year', value: 'N' },], 
                cRadioDefaultOption: 'C', 
                cLabel:'Retained Earning Recognition', 
                cLabelSize: 4, 
                cOrder: 12, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reperiod: { 
                cValidate :'required|max:2', 
                cName: 'reperiod', 
                cLabel: 'Retained Earning / Period', 
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
        OnjournalsourceChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{journalsource}
            }
        })
        this.$forceUpdate()
        },
        OnbasecurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Specification.basecurrencycd = data.id
            this.M_GL_Specification.basecurrencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{basecurrencycd}
            }
        })
        this.$forceUpdate()
        },
        OnforcetrxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{forcetrxamt}
            }
        })
        this.$forceUpdate()
        },
        OnforcesubmoduleChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{forcesubmodule}
            }
        })
        this.$forceUpdate()
        },
        OnbatchcontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchcontrol}
            }
        })
        this.$forceUpdate()
        },
        OnbatchnumberingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchnumbering}
            }
        })
        this.$forceUpdate()
        },
        OnrerecognitionChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{rerecognition}
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
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CurrentFinPeriod: this.M_GL_Specification.currentfinperiod,
                CurrentFinYear: this.M_GL_Specification.currentfinyear,
                JournalSource: this.M_GL_Specification.journalsource,
                BaseCurrencyCd: this.M_GL_Specification.basecurrencycd == '' || this.M_GL_Specification.basecurrencycd == null ? 'NULL' : this.M_GL_Specification.basecurrencycd ,
                ForceTrxAmt: this.M_GL_Specification.forcetrxamt,
                ActiveBudget: this.M_GL_Specification.activebudget,
                AccountGroup: this.M_GL_Specification.accountgroup,
                ForceSubModule: this.M_GL_Specification.forcesubmodule,
                BatchControl: this.M_GL_Specification.batchcontrol,
                BatchNumbering: this.M_GL_Specification.batchnumbering,
                REReCognition: this.M_GL_Specification.rerecognition,
                REPeriod: this.M_GL_Specification.reperiod,
                MaximumQueuingHour: this.M_GL_Specification.maximumqueuinghour,
                BBCFCode: this.M_GL_Specification.bbcfcode,
                EBCFCode: this.M_GL_Specification.ebcfcode,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_Specification.lastupdatestamp                
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CurrentFinPeriod: this.M_GL_Specification.currentfinperiod,
                CurrentFinYear: this.M_GL_Specification.currentfinyear,
                JournalSource: this.M_GL_Specification.journalsource,
                BaseCurrencyCd: this.M_GL_Specification.basecurrencycd == '' || this.M_GL_Specification.basecurrencycd == null ? 'NULL' : this.M_GL_Specification.basecurrencycd ,
                ForceTrxAmt: this.M_GL_Specification.forcetrxamt,
                ActiveBudget: this.M_GL_Specification.activebudget,
                AccountGroup: this.M_GL_Specification.accountgroup,
                ForceSubModule: this.M_GL_Specification.forcesubmodule,
                BatchControl: this.M_GL_Specification.batchcontrol,
                BatchNumbering: this.M_GL_Specification.batchnumbering,
                REReCognition: this.M_GL_Specification.rerecognition,
                REPeriod: this.M_GL_Specification.reperiod,
                MaximumQueuingHour: this.M_GL_Specification.maximumqueuinghour,
                BBCFCode: this.M_GL_Specification.bbcfcode,
                EBCFCode: this.M_GL_Specification.ebcfcode,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_Specification.lastupdatestamp                
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
            this.M_GL_Specification = {
                currentfinperiod: '0',
                currentfinyear: '0',
                journalsource: 'E',
                basecurrencycd: '',
                forcetrxamt: 'Y',
                activebudget: '',
                accountgroup: '0',
                forcesubmodule: 'D',
                batchcontrol: 'Y',
                batchnumbering: 'M',
                rerecognition: 'C',
                reperiod: '0',
                maximumqueuinghour: '0',
                bbcfcode: '',
                ebcfcode: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                descs: '',
                rowid: 0
                    }
            		
		},
        M_New (){
          // this.$refs.ref_currentfinperiod.focus()
        },
        M_Edit (){
          // this.$refs.ref_currentfinperiod.focus()
        },
        M_Delete(dt){       

        //nothing
        },        
        getDataBy (record) {
          
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                
                if(response.Data.length > 0){
                  this.getToolbar().FormStatus = 'EDIT'
                  this.getToolbar().ProcessPS()
                  this.M_GL_Specification = {
                    currentfinperiod: data.currentfinperiod,
                    currentfinyear: data.currentfinyear,
                    journalsource: data.journalsource,
                    basecurrencycd: data.basecurrencycd,
                    // basecurrencycd: {id: data.basecurrencycd, label: data.basecurrencycd + " | " + data.Descs},
                    forcetrxamt: data.forcetrxamt,
                    activebudget: data.activebudget,
                    accountgroup: data.accountgroup,
                    forcesubmodule: data.forcesubmodule,
                    batchcontrol: data.batchcontrol,
                    batchnumbering: data.batchnumbering,
                    rerecognition: data.rerecognition,
                    reperiod: data.reperiod,  
                    maximumqueuinghour: data.maximumqueuinghour,
                    bbcfcode: data.bbcfcode,
                    ebcfcode: data.ebcfcode,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    lastupdatestamp: data.lastupdatestamp,
                    descs: data.descs,
                    rowid: data.rowid
                  }
                    this.M_GL_Specification.basecurrencycdLabel = this.M_GL_Specification.basecurrencycd != null ? data.basecurrencycd + this.separator + data.descs :'' 
                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit
                } else {
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
