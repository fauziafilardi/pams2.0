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
                                        <ABSinputTextVuex :prop="PI_stepno" v-model="M_TN_CLProgress.stepno"  ref="ref_stepno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_CLProgress.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnprocesstypeChange" :prop="PI_processtypetest" v-model="M_TN_CLProgress.processtypeee"  ref="ref_processtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnmandatoryChange" :prop="PI_mandatorytest" v-model="M_TN_CLProgress.mandatoryyy"  ref="ref_mandatory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_estimateddays" v-model="M_TN_CLProgress.estimateddays"  ref="ref_estimateddays"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparentleasingprogresssequencenoChange" :prop="PI_parentleasingprogresssequenceno" :value="M_TN_CLProgress.parentleasingprogresssequenceno" :label="M_TN_CLProgress.parentleasingprogresssequencenoLabel" ref="ref_parentleasingprogresssequenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndocumentrequiredChange" :prop="PI_documentrequiredtest" v-model="M_TN_CLProgress.documentrequireddd"  ref="ref_documentrequired" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnprocessindicatorChange" :prop="PI_processindicatortest" v-model="M_TN_CLProgress.processindicatorrr"  ref="ref_processindicator" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLProgress.remarks"  ref="ref_remarks" />
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
                initialWhere:"LeasingStatus='C' AND SubPortfolioCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CLProgress :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                leasingprogresssequencno: 0,
                leasingstatus: '',
                stepno: '0',
                descs: '',
                processtypeee: '1',
                processindicatorrrr: '1',
                mandatoryyy: 'Y',
                estimateddays: '0',
                parentleasingprogresssequenceno: '',
                documentrequireddd: 'N',
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
                cValidate :'required|max:9', 
                cName: 'stepno', 
                cLabel: 'Step No', 
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
            PI_processtypetest: { 
                cValidate :'', 
                cName: 'processtypeee', 
                cId: 'rbtprocess', 
                cRadioOptions: [{ text: 'LOO', value: '1' },{ text: 'LA', value: '3' },{ text: 'After LA', value: '4' },], 
                cRadioDefaultOption: '', 
                cLabel:'Process Type', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_mandatorytest: { 
                cValidate :'', 
                cName: 'mandatoryyy', 
                cId: 'rbtmando', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Mandatory', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cOrder: 5, 
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
                cDisplayColumn: 'LeasingProgressSequenceNo,Descs' ,
            }, 
            PI_documentrequiredtest: { 
                cValidate :'', 
                cName: 'documentrequireddd', 
                cId: 'rbtdocument', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Document Required', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_processindicatortest: { 
                cValidate :'', 
                cName: 'processindicatorrr', 
                cId: 'rbtindicator', 
                cRadioOptions: [{ text: 'None', value: '1' },{ text: 'Hand Over', value: '2' },{ text: 'FitOut Start', value: '3' },{ text: 'FitOut Finished', value: '4' },{ text: 'Opening', value: '5' },], 
                cRadioDefaultOption: '', 
                cLabel:'Process Indicator', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:9, 
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
        OnprocesstypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{processtype}
            }
        })
        this.$forceUpdate()
        },
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
            this.M_TN_CLProgress.parentleasingprogresssequenceno = data.id
            this.M_TN_CLProgress.parentleasingprogresssequencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parentleasingprogresssequenceno}
            }
        })
        this.$forceUpdate()
        },
        OndocumentrequiredChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{documentrequired}
            }
        })
        this.$forceUpdate()
        },
        OnprocessindicatorChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{processindicator}
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
            this.M_TN_CLProgress.subportfoliocd = data.SubPortfolioCd 
            this.propList.initialWhere ="LeasingStatus='C' AND SubPortfolioCd = '" + data.SubPortfolioCd + "' "

            this.PI_parentleasingprogresssequenceno.dataLookUp.InitialWhere = "LeasingStatus='C' AND SubPortfolioCd = '" + data.SubPortfolioCd + "'"
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_TN_CLProgress.subportfoliocd,
                LeasingStatus: 'C',
                StepNo: this.M_TN_CLProgress.stepno,
                Descs: this.M_TN_CLProgress.descs,
                ProcessType: this.M_TN_CLProgress.processtypeee,
                ProcessIndicator: this.M_TN_CLProgress.processindicatorrr,
                Mandatory: this.M_TN_CLProgress.mandatoryyy,
                EstimatedDays: this.M_TN_CLProgress.estimateddays,
                ParentLeasingProgressSequenceNo: this.M_TN_CLProgress.parentleasingprogresssequenceno == '' || this.M_TN_CLProgress.parentleasingprogresssequenceno == null ? 'NULL' : this.M_TN_CLProgress.parentleasingprogresssequenceno ,
                DocumentRequired: this.M_TN_CLProgress.documentrequireddd,
                Remarks: this.M_TN_CLProgress.remarks,
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
                SubPortfolioCd: this.M_TN_CLProgress.subportfoliocd,
                LeasingProgressSequencNo: this.M_TN_CLProgress.leasingprogresssequencno,
                LeasingStatus: 'C',
                StepNo: this.M_TN_CLProgress.stepno,
                Descs: this.M_TN_CLProgress.descs,
                ProcessType: this.M_TN_CLProgress.processtypeee,
                ProcessIndicator: this.M_TN_CLProgress.processindicatorrr,
                Mandatory: this.M_TN_CLProgress.mandatoryyy,
                EstimatedDays: this.M_TN_CLProgress.estimateddays,
                ParentLeasingProgressSequenceNo: this.M_TN_CLProgress.parentleasingprogresssequenceno == '' || this.M_TN_CLProgress.parentleasingprogresssequenceno == null ? 'NULL' : this.M_TN_CLProgress.parentleasingprogresssequenceno ,
                DocumentRequired: this.M_TN_CLProgress.documentrequireddd,
                Remarks: this.M_TN_CLProgress.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLProgress.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLProgress = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                leasingprogresssequencno: 0,
                leasingstatus: '',
                stepno: '0',
                descs: '',
                processtypeee: '1',
                processindicatorrr: '1',
                mandatoryyy: 'Y',
                estimateddays: '0',
                parentleasingprogresssequenceno: '',
                documentrequireddd: 'N',
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
            this.M_TN_CLProgress.subportfoliocd = data.SubPortfolioCd 



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
                LeasingStatus: 'C',
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

            // var param = {
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     SubPortfolioCd:this.getDataUser().SubPortfolioCd,
            //     PortfolioCd:this.getDataUser().PortfolioCd,
            //     LineNo: this.$parent.data.PageOrder,
            //     Data: dt
			// 	//,SourceValue:''
            // }
            
            // this.postJSONMulti( this.getUrlDeleteMulti(), param )
            // .then(response => {
            //     if (response == null) return
				
			// 	var message = "Deleting Data Successfully"   				
			// 	//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
			// 	this.$parent.resultDelete(message)
                    
					
            // })
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
this.M_TN_CLProgress = {
                subportfoliocd: data.subportfoliocd,
                leasingprogresssequencno: this.isCurrency(data.leasingprogresssequencno, this.decimal),
                leasingstatus: data.leasingstatus,
                stepno: this.isCurrency(data.stepno, this.decimal),
                descs: data.descs,
                processtypeee: data.processtype,
                processindicatorrr: data.processindicator,
                mandatoryyy: data.mandatory,
                estimateddays: this.isCurrency(data.estimateddays, this.decimal),
                parentleasingprogresssequenceno: data.parentleasingprogresssequenceno,
                documentrequireddd: data.documentrequired,
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
                 

                this.M_TN_CLProgress.parentleasingprogresssequencenoLabel = this.M_TN_CLProgress.parentleasingprogresssequenceno != null && this.M_TN_CLProgress.parentleasingprogresssequenceno != '' ? data.parentleasingprogresssequenceno + this.separator + data.parentleasingprogress :'' 
  

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

