<template>
    <div class="height--full">
        <HeaderFormListVuex2 :isProcess = "true" />        
        <div class="content-app-form__body form-process">
            <div class="tab-form-process">
            <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
                <b-collapse id="collapse1" :visible="true">
                    <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
                        <b-col md="12" id="col-left" class="bColMasterForm">	
                            <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                                <b-row style="padding-left:10px;">					
                                    <b-col md="12" id="col-left"> <!-- table open -->
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSInputSelectList @change="OnfromrevtrxtypeChange" :prop="PI_fromrevtrxtype" :value="M_GL_RevaluationInquiry.fromrevtrxtype" :label="M_GL_RevaluationInquiry.fromrevtrxtypeLabel" ref="ref_fromrevtrxtype"/>
                                            </b-col>
                                            <b-col md="6">
                                                <ABSInputSelectList @change="OntorevtrxtypeChange" :prop="PI_torevtrxtype" :value="M_GL_RevaluationInquiry.torevtrxtype" :label="M_GL_RevaluationInquiry.torevtrxtypeLabel" ref="ref_torevtrxtype"/>
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputDateVuex @input="OnfromrevdateChange" :prop="PI_fromrevdate" v-model="M_GL_RevaluationInquiry.fromrevdate"  ref="ref_fromrevdate" />
                                            </b-col>
                                            <b-col md="6">
                                                <ABSinputDateVuex @input="OntorevdateChange" :prop="PI_torevdate" v-model="M_GL_RevaluationInquiry.torevdate"  ref="ref_torevdate" />
                                            </b-col>
                                        </b-row>
                                        <b-row>
                                            <b-col  md="6">
                                                <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_GL_RevaluationInquiry.status"  ref="ref_status" />
                                            </b-col>
                                        </b-row>
                                        <ABSTAnalysisFromTo :prop="PTAnalysis" v-model="M_GL_AccountInquiryTAnalysis" />
                                        <b-row style="padding-top:10px;">
                                            <b-col offset="6">
                                                <b-button style="font-size: 10px;padding-top: 3px;padding-bottom: 3px;" @click="doGenerate"><font-awesome-icon icon="list" class="icon-style-1"/> Generate Inquiry</b-button>
                                            </b-col>
                                        </b-row>
                                    </b-col> <!-- table close -->
                                </b-row>
                                <!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
                            </b-form>
                            <div :style="'margin-top:25px;'">
                                <hr :style="'padding-top: 12px'">
                            </div>
                        </b-col>
                    </b-row>
                </b-collapse>
            </div>
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab title="Inquiry Result" active>
                        <ABSListVuex
                            :prop = "propList"
                            :title = "'Revaluation Inquiry'"
                            :isProcess = "false"
                            @rowClicked = "rowClicked"
                            @rowDblClicked = "doDoubleClick"
                            @rowLinkClick = "rowLink"
                            @pageSize = "M_PageSize"
                            @pagination = "M_Pagination"
                            @filter = "M_Advance_Filter"
                            @ref= "ref_abslist"
                        />
                    </b-tab>                    
                </b-tabs>
            </div>
            
            
            </div>
        </div>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
		cInsertKey:'',
		FormType: "Process",
		Module:"GL",
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND StatusCd = 'N'",
                LineNo: 0,
                PageLevel: 1,
                TabIndex: 1,
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_RevaluationInquiry :{
                fromrevtrxtype: '',
                torevtrxtype: '',
                fromrevdate: '',
                torevdate: '',
                status: ''
                    }
            ,
            PI_fromrevtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromrevtrxtype', 
                cLabel: 'From Revaluation TrxType ', 
                cKey: false, 
                cLabelSize: 4,
                cOrder: 1, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_torevtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster',
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'torevtrxtype', 
                cLabel: 'To Revaluation Trx Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_fromrevdate: { 
                cValidate :'', 
                cName: 'fromrevdate', 
                cLabel: 'From Revaluation Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
            }, 
            PI_torevdate: { 
                cValidate :'', 
                cName: 'torevdate', 
                cLabel: 'To Revaluation Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus',
                cRadioOptions: [{ text: 'New', value: 'N' },{ text: 'Posted', value: 'P' },{ text: 'All', value: 'All' },], 
                cRadioDefaultOption: '', 
                cLabel:'Status ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: 1, 
                cTabIndex: 1, 
                cParentForm: 'FormScope_' + 1 + '_' + 1 
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        doGenerate() {
            this.propList.initialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"

            if (this.M_GL_RevaluationInquiry.fromrevtrxtype != '' && this.M_GL_RevaluationInquiry.torevtrxtype != '') {
                this.propList.initialWhere += " AND RevaluationTrxType BETWEEN '" + this.M_GL_RevaluationInquiry.fromrevtrxtype + "' AND '" + this.M_GL_RevaluationInquiry.torevtrxtype + "'" 
            }
            
            if (this.M_GL_RevaluationInquiry.fromrevdate != '' && this.M_GL_RevaluationInquiry.torevdate != '') {
                this.propList.initialWhere += " AND RevaluationDate BETWEEN '" + this.M_GL_RevaluationInquiry.fromrevdate + "' AND '" + this.M_GL_RevaluationInquiry.torevdate + "'" 
            }

            if (this.M_GL_RevaluationInquiry.status != 'All') {
                this.propList.initialWhere += " AND StatusCd = '" + this.M_GL_RevaluationInquiry.status + "'"
            }

            this.toList().doGetList('','eb_getList')
        },
        toList() {
            return this.$children[2].$children[0].$children[0]
            // return this.$refs.ref_abslist
        },
        OnfromrevtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_RevaluationInquiry.fromrevtrxtype = data.id
            this.M_GL_RevaluationInquiry.fromrevtrxtypeLabel = data.label

            this.M_GL_RevaluationInquiry.torevtrxtype = data.id
            this.M_GL_RevaluationInquiry.torevtrxtypeLabel = data.label
            
            if (this.inputStatus != "VIEW") {
//{fromrevtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntorevtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_RevaluationInquiry.torevtrxtype = data.id
            this.M_GL_RevaluationInquiry.torevtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{torevtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnfromrevdateChange (data) {
        this.$nextTick(() => {
            this.M_GL_RevaluationInquiry.torevdate = data
            if (this.inputStatus != "VIEW") {
//{fromrevdate}
            }
        })
        this.$forceUpdate()
        },
        OntorevdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{torevdate}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
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
            this.toList().doGetList(data,'eb_getList')
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
            this.M_GL_RevaluationInquiry = {
                fromrevtrxtype: '',
                torevtrxtype: '',
                fromrevdate: '',
                torevdate: '',
                status: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_fromrevtrxtype.focus()
        },
        M_Edit(){
            this.$refs.ref_fromrevtrxtype.focus()
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
this.M_GL_RevaluationInquiry = {
                fromrevtrxtype: data.fromrevtrxtype,
                torevtrxtype: data.torevtrxtype,
                fromrevdate: data.fromrevdate,
                torevdate: data.torevdate,
                status: data.status
                    }
                 

                this.M_GL_RevaluationInquiry.fromrevtrxtypeLabel = this.M_GL_RevaluationInquiry.fromrevtrxtype != null ? data.fromrevtrxtype + this.separator  :'' 
                this.M_GL_RevaluationInquiry.torevtrxtypeLabel = this.M_GL_RevaluationInquiry.torevtrxtype != null ? data.torevtrxtype + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','View')
        this.$store.commit('setStatus', 'new')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.$store.commit('setListDisable', false)
        this.M_GL_RevaluationInquiry.status = 'N'        
        this.toList().doGetList('','eb_getList')

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

