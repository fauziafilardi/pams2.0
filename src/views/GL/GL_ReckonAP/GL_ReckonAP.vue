<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />
        
        <div class="content-app-form__body" style="background-color: white;padding-top: 1px !important;margin-left: 15px;margin-right: 15px;height: 95%;overflow-y: auto;overflow-x: hidden;padding-bottom: 80px;">
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + 1 + '_' + 1" :data-vv-value-path="'FormScope_' + 1 + '_' + 1">
                                <b-row style="padding-left:10px;">					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSCompute :prop="PI_message" v-model="M_GL_Reckon.message"  ref="ref_message" /> -->
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
                                                <b-col md="4" style="text-align: right !important;">
                                                    <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate</b-button>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_el1" v-model="M_GL_Reckon.el1"  ref="ref_el1" />
                                      </b-col>
                                    </b-row> -->
                                    </b-col> <!-- table close -->
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                            </b-form>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <ABSListVuex
                :prop = "propList"
                :title = "'Reckon AR VS TB'"
                :isProcess = "false"
                @rowClicked = "rowClicked"
                @rowDblClicked = "doDoubleClick"
                @rowLinkClick = "rowLink"
                @pageSize = "M_PageSize"
                @pagination = "M_Pagination"
                @filter = "M_Advance_Filter"
                v-show="showTable"
                ref="ref_AbsList"
            />
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
			cInsertKey:'',
            FormType: "Inquiry",
            Module:"GL",	
            showTable: false,
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
            IEBy: {Input: '', Edit: ''},

            M_GL_Reckon :{
                startdate: '',
                todate: '',
                accountcd: '',
                list: '',
                type: '1',
                output: 'V'
                    }
            ,					
            PI_message: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: false 
            }, 
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Start Date ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_todate: { 
                cValidate :'required', 
                cName: 'todate', 
                cLabel: 'End Date ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
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
                cOrder: 3, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: '' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_list: { 
                cValidate :'', 
                cName:'list', 
                cLabel:'List of Account Code', 
                cLabelSize: 4, 
                cOrder:4, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1, 
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
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_output: { 
                cValidate :'', 
                cName: 'output', 
                cId: 'rdboutput', 
                cRadioOptions: [{ text: 'Viewer', value: 'V' },{ text: 'Excel', value: 'E' },], 
                cRadioDefaultOption: '', 
                cLabel:'Output ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_el1: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cVisible: false 
            }, 
            
            // PTAnalysis: {
            //     cPageLevel: 1,
            //     cTabIndex: 1,
            //     cPageMasterSeq: this.data.PageMasterSeq,
            //     cFormPageNo: this.data.PageOrder
            // }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == 1 && this.$store.getters.getTab == 1){
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
            console.log(data)
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
                this.M_GL_Reckon.accountcd = ""
                this.M_GL_Reckon.accountcdLabel = ""
            }
        },

        doGenerate () {
            var scopeForm = "FormScope_" + 1 + "_" + 1
            this.$validator._base.validateAll(scopeForm).then((result) => {
                if (!result) return
                
                if (this.M_GL_Reckon.list == "") {
                    this.alertError("Please Insert Account Code")
                    return
                }
                    var LineNo = (parseInt(this.M_GL_Reckon.type) - 1)
                    this.propList.LineNo = LineNo
                    this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "','" + this.M_GL_Reckon.startdate + "','" + this.M_GL_Reckon.todate + "','" + this.M_GL_Reckon.list.trim() + "'"
                if (this.M_GL_Reckon.output == 'V') {

                    
                    if (this.M_GL_Reckon.type == '1') {
                        this.propList.OrderBy = " CreditNo ASC "
                    }
                    else if (this.M_GL_Reckon.type == '2') {
                        this.propList.OrderBy = " SubPortfolioCd ASC, ReferenceNo ASC "
                    }
                    else if (this.M_GL_Reckon.type == '3') {
                        this.propList.OrderBy = " DebitNo ASC "
                    }
                    else if (this.M_GL_Reckon.type == '4') {
                        this.propList.OrderBy = " SubPortfolioCd ASC, ReferenceNo ASC "
                    }
                    
                    this.toList().doGetList('','eb_getList')
                    this.showTable = true
                    // console.log(this.$refs.ref_AbsList)
                }
                else {
                    // Excel
                    if (this.M_GL_Reckon.type == '1') {
                        this.propList.OrderBy = " CreditNo ASC "
                    }
                    else if (this.M_GL_Reckon.type == '2') {
                        this.propList.OrderBy = " SubPortfolioCd ASC, ReferenceNo ASC "
                    }
                    else if (this.M_GL_Reckon.type == '3') {
                        this.propList.OrderBy = " DebitNo ASC "
                    }
                    else if (this.M_GL_Reckon.type == '4') {
                        this.propList.OrderBy = " SubPortfolioCd ASC, ReferenceNo ASC "
                    }
                    this.getTokenExcel()
                }
            })
        },

        toList() {
            return this.$children[2]
        },
	
		setToolbarButton () {
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
        },
        M_Update() {
        },
		M_ClearForm(){
            this.M_GL_Reckon = {
                startdate: '',
                todate: '',
                accountcd: '',
                list: '',
                type: '1',
                output: 'V'
                    }
            		
		},
        M_New(){
			this.$refs.ref_startdate.focus()
        },
        M_Edit(){
            this.$refs.ref_startdate.focus()
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
        },
        getTokenExcel(){
            var param = {
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.propList.LineNo,
                InitialWhere:this.propList.initialWhere,
                ParamView:this.propList.ParamView,
                SortField : this.propList.OrderBy
            }

            this.postJSON(this.getUrlGetTokenExportReckon(), param).then(response => {
                if (response == null) return
                // console.log(response.Data.Token)
                var url = this.getFileExcel('Reckon AP VS TB', response.Data.Token)
                window.location.href = url
                this.$refs.modalExport.hide()
            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Inquiry')
        this.$store.commit('setStatus', 'new')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.$store.commit('setListDisable', false)
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
