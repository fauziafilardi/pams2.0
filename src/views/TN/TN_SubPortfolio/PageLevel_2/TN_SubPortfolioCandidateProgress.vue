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
                                        <ABSinputTextVuex :prop="PI_stepno" v-model="M_TN_SubPortfolioCandidateProgress.stepno"  ref="ref_stepno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_SubPortfolioCandidateProgress.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnmandatoryChange" :prop="PI_mandatoryy" v-model="M_TN_SubPortfolioCandidateProgress.mandatoryy"  ref="ref_mandatory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_estimateddays" v-model="M_TN_SubPortfolioCandidateProgress.estimateddays"  ref="ref_estimateddays"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparentleasingprogresssequencenoChange" :prop="PI_parentleasingprogresssequenceno" :value="M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno" :label="M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequencenoLabel" ref="ref_parentleasingprogresssequenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_SubPortfolioCandidateProgress.remarks"  ref="ref_remarks" />
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
            FormType: "List",
			Module:"TN",
            propList: {
                initialWhere:"LeasingStatus = 'T' AND SubPortfolioCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_SubPortfolioCandidateProgress :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                leasingprogresssequencno: 0,
                leasingstatus: '',
                stepno: '0',
                descs: '',
                processtype: '',
                processindicator: '',
                mandatoryy: 'Y',
                estimateddays: '0',
                parentleasingprogresssequenceno: '',
                documentrequired: '',
                remarks: '',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                parentleasingprogress: ''
                    }
            ,
            PI_stepno: { 
                cValidate :'required:max:9', 
                cName: 'stepno', 
                cLabel: 'Step Sequence', 
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
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_mandatoryy: { 
                cValidate :'', 
                cName: 'mandatoryy', 
                cId: 'rbtmandatory', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Mandatory', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_estimateddays: { 
                cValidate :'max:9', 
                cName: 'estimateddays', 
                cLabel: 'Estimated Days', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_parentleasingprogresssequenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLeaseProgressStep'    , 
                    ColumnDB: 'LeasingProgressSequencNo'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'parentleasingprogresssequenceno', 
                cLabel: 'Parent Code', 
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
                cDisplayColumn: 'LeasingProgressSequenceNo,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:6, 
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
        OnmandatoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{mandatory}
            }
        })
        this.$forceUpdate()
        },
        OnparentleasingprogresssequencenoChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno = data.id
            this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parentleasingprogresssequenceno}
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_SubPortfolioCandidateProgress.subportfoliocd = data.SubPortfolioCd 
            this.propList.initialWhere ="LeasingStatus = 'T' AND SubPortfolioCd = '" + data.SubPortfolioCd + "' "

            this.PI_parentleasingprogresssequenceno.dataLookUp.InitialWhere = "LeasingStatus = 'T' AND SubPortfolioCd = '" + data.SubPortfolioCd + "'"
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_TN_SubPortfolioCandidateProgress.subportfoliocd,
                LeasingStatus: 'T',
                StepNo: this.M_TN_SubPortfolioCandidateProgress.stepno,
                Descs: this.M_TN_SubPortfolioCandidateProgress.descs,
                ProcessType: '9',
                ProcessIndicator: '1',
                Mandatory: this.M_TN_SubPortfolioCandidateProgress.mandatoryy,
                EstimatedDays: this.M_TN_SubPortfolioCandidateProgress.estimateddays ? this.replaceAllString(this.M_TN_SubPortfolioCandidateProgress.estimateddays, ',', '', 'number') : 0,
                ParentLeasingProgressSequenceNo: this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno == '' || this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno == null ? 'NULL' : this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno ,
                DocumentRequired: 'N',
                Remarks: this.M_TN_SubPortfolioCandidateProgress.remarks,
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
                SubPortfolioCd: this.M_TN_SubPortfolioCandidateProgress.subportfoliocd,
                LeasingProgressSequencNo: this.M_TN_SubPortfolioCandidateProgress.leasingprogresssequencno,
                LeasingStatus: 'T',
                StepNo: this.M_TN_SubPortfolioCandidateProgress.stepno,
                Descs: this.M_TN_SubPortfolioCandidateProgress.descs,
                ProcessType: '9',
                ProcessIndicator: '1',
                Mandatory: this.M_TN_SubPortfolioCandidateProgress.mandatoryy,
                EstimatedDays: this.M_TN_SubPortfolioCandidateProgress.estimateddays ? this.replaceAllString(this.M_TN_SubPortfolioCandidateProgress.estimateddays, ',', '', 'number') : 0,
                ParentLeasingProgressSequenceNo: this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno == '' || this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno == null ? 'NULL' : this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno ,
                DocumentRequired: 'N',
                Remarks: this.M_TN_SubPortfolioCandidateProgress.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_SubPortfolioCandidateProgress.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_SubPortfolioCandidateProgress = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                leasingprogresssequencno: 0,
                leasingstatus: '',
                stepno: '',
                descs: '',
                processtype: '',
                processindicator: '',
                mandatoryy: 'Y',
                estimateddays: '',
                parentleasingprogresssequenceno: '',
                documentrequired: '',
                remarks: '',
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                parentleasingprogress: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_SubPortfolioCandidateProgress.subportfoliocd = data.SubPortfolioCd 



        },
        M_Edit(){
        },
        M_Delete(dt){           

             var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                SubPortfolioCd: value.SubPortfolioCd,
                LeasingProgressSequencNo: value.LeasingProgressSequencNo,
                LeasingStatus: 'T',
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
,                subportfoliocd: record.SubPortfolioCd,
                leasingprogresssequencno: record.LeasingProgressSequencNo,
                leasingstatus: record.LeasingStatus				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_SubPortfolioCandidateProgress = {
                subportfoliocd: data.subportfoliocd,
                leasingprogresssequencno: this.isCurrency(data.leasingprogresssequencno, this.decimal),
                leasingstatus: data.leasingstatus,
                stepno: this.isCurrency(data.stepno, this.decimal),
                descs: data.descs,
                processtype: data.processtype,
                processindicator: data.processindicator,
                mandatoryy: data.mandatory,
                estimateddays: this.isCurrency(data.estimateddays, this.decimal),
                parentleasingprogresssequenceno: data.parentleasingprogresssequenceno,
                documentrequired: data.documentrequired,
                remarks: data.remarks,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: this.isCurrency(data.controlsequenceno, this.decimal),
                rowid: this.isCurrency(data.rowid, this.decimal),
                parentleasingprogress: data.parentleasingprogress
                    }
                 

                this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequencenoLabel = this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno != null && this.M_TN_SubPortfolioCandidateProgress.parentleasingprogresssequenceno != '' ? data.parentleasingprogresssequenceno + this.separator + data.parentleasingprogress :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
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

