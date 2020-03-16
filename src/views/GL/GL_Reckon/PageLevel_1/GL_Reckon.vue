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
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_message" v-model="M_GL_Reckon.message"  ref="ref_message" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnstartdateChange" :prop="PI_startdate" v-model="M_GL_Reckon.startdate"  ref="ref_startdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntodateChange" :prop="PI_todate" v-model="M_GL_Reckon.todate"  ref="ref_todate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_GL_Reckon.accountcd" :label="M_GL_Reckon.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                          <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="addToList"><font-awesome-icon icon="list" class="icon-style-1"/> Add To List</b-button>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnlistChange" :prop="PI_list" v-model="M_GL_Reckon.list"  ref="ref_list" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntypeChange" :prop="PI_type" v-model="M_GL_Reckon.type"  ref="ref_type" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnoutputChange" :prop="PI_output" v-model="M_GL_Reckon.output"  ref="ref_output" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4">
                                                    <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate</b-button>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_el1" v-model="M_GL_Reckon.el1"  ref="ref_el1" />
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
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},

            M_GL_Reckon :{
                startdate: '',
                todate: '',
                accountcd: '',
                list: '',
                type: '',
                output: ''
                    }
            ,					
            PI_message: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Start Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_todate: { 
                cValidate :'required', 
                cName: 'todate', 
                cLabel: 'End Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAccountCd'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
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
                cDisplayColumn: '' ,
            }, 
            PI_list: { 
                cValidate :'', 
                cName:'list', 
                cLabel:'List of Account Code', 
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
            PI_type: { 
                cValidate :'', 
                cName: 'type', 
                cId: 'rdbtype', 
                cRadioOptions: [
                    { text: 'Debit Data Only Exist in Ledger and No Data Found in SubLedger', value: '1' },
                    { text: 'Debit Data Only Exist in SubLedger and No Data Found in Ledger', value: '2' },
                    { text: 'Credit Data Only Exist in Ledger and No Data Found in SubLedger', value: '3' },
                    { text: 'Credit Data Only Exist in SubLedger and No Data Found in Ledger', value: '4' }
                ], 
                cRadioDefaultOption: '', 
                cLabel:'Filter By', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_output: { 
                cValidate :'', 
                cName: 'output', 
                cId: 'rdboutput', 
                cRadioOptions: [{ text: 'Viewer', value: 'V' },{ text: 'Excel', value: 'E' },], 
                cRadioDefaultOption: '', 
                cLabel:'Output ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_el1: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
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
        OnstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startdate}
            }
        })
        this.$forceUpdate()
        },
        OntodateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{todate}
            }
        })
        this.$forceUpdate()
        },
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_Reckon.accountcd = data.id
            this.M_GL_Reckon.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
        OnlistChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{list}
            }
        })
        this.$forceUpdate()
        },
        OntypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{type}
            }
        })
        this.$forceUpdate()
        },
        OnoutputChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{output}
            }
        })
        this.$forceUpdate()
        },

        addToList () {
            var acc = this.M_GL_Reckon.accountcd
            if (acc && acc != "") {
                if (this.M_GL_Reckon.list && this.M_GL_Reckon.list != "") {
                    this.M_GL_Reckon.list = this.M_GL_Reckon.list.trim() + "," + acc
                }
                else {
                    this.M_GL_Reckon.list = acc
                }
            }
        },

        doGenerate () {
            if (this.M_GL_Reckon.accountcd == "" && this.M_GL_Reckon.list == "") {
                this.alertError("Please Insert Account Code")
                return
            }

            var param = {
                SubPortolioCd: this.getDataUser().SubPortolioCd,
                StartDate: this.M_GL_Reckon.startdate,
                EndDate: this.M_GL_Reckon.todate,
                AccountCd: this.M_GL_Reckon.accountcd
            }
        },
	
		setToolbarButton () {
            this.getToolbar().statusFunction[5].disabled = true
            this.getToolbar().statusFunction[6].disabled = true
            this.getToolbar().statusFunction[7].disabled = false
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
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
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
            this.M_GL_Reckon = {
                startdate: '',
                todate: '',
                accountcd: '',
                list: '',
                type: '',
                output: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
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
this.M_GL_Reckon = {
                startdate: data.startdate,
                todate: data.todate,
                accountcd: data.accountcd,
                list: data.list,
                type: data.type,
                output: data.output
                    }
                 

                this.M_GL_Reckon.accountcdLabel = this.M_GL_Reckon.accountcd != null ? data.accountcd + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','EDIT')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().FormStatus = 'EDIT'
        this.getToolbar().ProcessPS()
        
        this.getToolbar().doEdit(true)
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
