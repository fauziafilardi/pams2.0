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
                                        <ABSInputSelectList @change="OndeviationcdChange" :prop="PI_deviationcd" :value="M_TN_SubPortfolioDeviationControl.deviationcd" :label="M_TN_SubPortfolioDeviationControl.deviationcdLabel" ref="ref_deviationcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_shortdescs" v-model="M_TN_SubPortfolioDeviationControl.shortdescs"  ref="ref_shortdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnprocessstatusChange" :prop="PI_processstatus" v-model="M_TN_SubPortfolioDeviationControl.processstatus"  ref="ref_processstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnworkflowcontrolChange" :prop="PI_workflowcontrol" v-model="M_TN_SubPortfolioDeviationControl.workflowcontrol"  ref="ref_workflowcontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnantennacontrolChange" :prop="PI_antennacontrol" v-model="M_TN_SubPortfolioDeviationControl.antennacontrol"  ref="ref_antennacontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_SubPortfolioDeviationControl.remarks"  ref="ref_remarks" />
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
                initialWhere:"SubPortfolioCd = '" + this.ValKey + "' And LeasingStatus = 'L'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_SubPortfolioDeviationControl :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                deviationsequenceno: 0,
                deviationcd: '',
                loostatus: '',
                loistatus: '',
                lastatus: '',
                loocontrol: '',
                loicontrol: '',
                lacontrol: '',
                antennacontrol: 'N',
                leasingstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                processstatus: [],
                workflowcontrol: [],
                lastupdatestamp: 0,
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
                controlsequenceno: 0,
                rowid: 0,
                shortdescs: ''
                    }
            ,
            PI_deviationcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpDeviationMaster'    , 
                    ColumnDB: 'DeviationCd'   , 
                    InitialWhere: "LeasingStatus = 'L'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'deviationcd', 
                cLabel: 'Deviation Code', 
                cKey: true, 
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
                cDisplayColumn: 'DeviationCd,ShortDescs' ,
            }, 
            PI_shortdescs: { 
                cName: 'shortdescs',
                cLabel: 'Short Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_processstatus: { 
                cValidate :'', 
                cName: 'processstatus', 
                cLabel: 'Process Status', 
                cLabelSize: 4, 
                cOptions: [{ text: 'LOO Status', value: 'O' }, { text: 'LOI Status', value: 'I' }, { text: 'LA Status', value: 'A' }], 
                cOrder: 2, 
                cKey: false, 
                cVisible: true, 
                cProtect: true, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_workflowcontrol: { 
                cValidate :'', 
                cName: 'workflowcontrol', 
                cLabel: 'Workflow Control', 
                cLabelSize: 4, 
                cOptions: [{ text: 'LOO Control', value: 'O' }, { text: 'LOI Control', value: 'I' }, { text: 'LA Control', value: 'A' }], 
                cOrder: 3, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_antennacontrol: { 
                cValidate :'', 
                cName: 'antennacontrol', 
                cId: 'rdbantennacontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Antenna Control', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cOrder:5, 
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
        OndeviationcdChange (data) {
            
        this.$nextTick(() => {
            this.M_TN_SubPortfolioDeviationControl.deviationcd = data.id
            this.M_TN_SubPortfolioDeviationControl.deviationcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                
                if (data.id && data.id != "") {
                this.GetDeviationCdData(data.id) 
                }
            }
        })
        this.$forceUpdate()
        },
        OnprocessstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{processstatus}
            }
        })
        this.$forceUpdate()
        },
        OnworkflowcontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{workflowcontrol}
            }
        })
        this.$forceUpdate()
        },
        OnantennacontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{antennacontrol}
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
        GetDeviationCdData (DeviationCd) {
            //  console.log(DebitNo)

            var param = {
                OptionFunctionCd: "GetDeviationCdData",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DeviationCd: DeviationCd,
                
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                    var processstatus = []
                    if(ress[0].LOOStatus == 'Y'){
                        processstatus.push('O')
                    }
                    if(ress[0].LOIStatus == 'Y'){
                        processstatus.push('I')
                    }
                    if(ress[0].LAStatus == 'Y'){
                        processstatus.push('A')
                    }

                    var workflowcontrol = []
                    if(ress[0].LOOStatus == 'Y'){
                        workflowcontrol.push('O')
                    }
                    if(ress[0].LOIStatus == 'Y'){
                        workflowcontrol.push('I')
                    }
                    if(ress[0].LAStatus == 'Y'){
                        workflowcontrol.push('A')
                    }
                this.M_TN_SubPortfolioDeviationControl.shortdescs = ress[0].ShortDescs
                this.M_TN_SubPortfolioDeviationControl.processstatus = processstatus
                this.M_TN_SubPortfolioDeviationControl.workflowcontrol = workflowcontrol
            })
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
            this.M_TN_SubPortfolioDeviationControl.subportfoliocd = data.SubPortfolioCd 
            this.propList.initialWhere ="SubPortfolioCd = '" + data.SubPortfolioCd + "' And LeasingStatus = 'L'"
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_TN_SubPortfolioDeviationControl.subportfoliocd,
                DeviationCd: this.M_TN_SubPortfolioDeviationControl.deviationcd == '' || this.M_TN_SubPortfolioDeviationControl.deviationcd == null ? 'NULL' : this.M_TN_SubPortfolioDeviationControl.deviationcd ,
                LOOStatus: this.M_TN_SubPortfolioDeviationControl.processstatus.indexOf('O') > -1 ? 'Y' : 'N',
                LOIStatus: this.M_TN_SubPortfolioDeviationControl.processstatus.indexOf('I') > -1 ? 'Y' : 'N',
                LAStatus: this.M_TN_SubPortfolioDeviationControl.processstatus.indexOf('A') > -1 ? 'Y' : 'N',
                LOOControl: this.M_TN_SubPortfolioDeviationControl.workflowcontrol.indexOf('O') > -1 ? 'Y' : 'N',
                LOIControl: this.M_TN_SubPortfolioDeviationControl.workflowcontrol.indexOf('I') > -1 ? 'Y' : 'N',
                LAControl: this.M_TN_SubPortfolioDeviationControl.workflowcontrol.indexOf('A') > -1 ? 'Y' : 'N',
                AntennaControl: this.M_TN_SubPortfolioDeviationControl.antennacontrol,
                LeasingStatus: 'L',
                Remarks: this.M_TN_SubPortfolioDeviationControl.remarks,
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
                SubPortfolioCd: this.M_TN_SubPortfolioDeviationControl.subportfoliocd,
                DeviationCd: this.M_TN_SubPortfolioDeviationControl.deviationcd == '' || this.M_TN_SubPortfolioDeviationControl.deviationcd == null ? 'NULL' : this.M_TN_SubPortfolioDeviationControl.deviationcd ,
                DeviationSequenceNo: this.M_TN_SubPortfolioDeviationControl.deviationsequenceno,
                LOOStatus: this.M_TN_SubPortfolioDeviationControl.processstatus.indexOf('O') > -1 ? 'Y' : 'N',
                LOIStatus: this.M_TN_SubPortfolioDeviationControl.processstatus.indexOf('I') > -1 ? 'Y' : 'N',
                LAStatus: this.M_TN_SubPortfolioDeviationControl.processstatus.indexOf('A') > -1 ? 'Y' : 'N',
                LOOControl: this.M_TN_SubPortfolioDeviationControl.workflowcontrol.indexOf('O') > -1 ? 'Y' : 'N',
                LOIControl: this.M_TN_SubPortfolioDeviationControl.workflowcontrol.indexOf('I') > -1 ? 'Y' : 'N',
                LAControl: this.M_TN_SubPortfolioDeviationControl.workflowcontrol.indexOf('A') > -1 ? 'Y' : 'N',
                AntennaControl: this.M_TN_SubPortfolioDeviationControl.antennacontrol,
                LeasingStatus: 'L',
                Remarks: this.M_TN_SubPortfolioDeviationControl.remarks,
                UserEdit: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_SubPortfolioDeviationControl = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                deviationsequenceno: 0,
                deviationcd: '',
                loostatus: '',
                loistatus: '',
                lastatus: '',
                loocontrol: '',
                loicontrol: '',
                lacontrol: '',
                antennacontrol: 'N',
                leasingstatus: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                processstatus: [],
                workflowcontrol: [],
                lastupdatestamp: 0,
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
                controlsequenceno: 0,
                rowid: 0,
                shortdescs: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_SubPortfolioDeviationControl.subportfoliocd = data.SubPortfolioCd 



        },
        M_Edit(){
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                SubPortfolioCd: value.SubPortfolioCd,
                DeviationSequenceNo: value.DeviationSequenceNo,
                DeviationCd: value.DeviationCd,
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
                deviationsequenceno: record.DeviationSequenceNo,
                deviationcd: record.DeviationCd,
                leasingstatus: record.LeasingStatus				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                // var processstatus = []
                // if(data.loostatus == 'Y'){
                //     processstatus.push('O')
                // }
                // if(data.loistatus == 'Y'){
                //     processstatus.push('I')
                // }
                // if(data.lastatus == 'Y'){
                //     processstatus.push('A')
                // }

                // var workflowcontrol = []
                // if(data.loostatus == 'Y'){
                //     workflowcontrol.push('O')
                // }
                // if(data.loistatus == 'Y'){
                //     workflowcontrol.push('I')
                // }
                // if(data.lastatus == 'Y'){
                //     workflowcontrol.push('A')
                // }

               
this.M_TN_SubPortfolioDeviationControl = {
                subportfoliocd: data.subportfoliocd,
                deviationsequenceno: this.isCurrency(data.deviationsequenceno, this.decimal),
                deviationcd: data.deviationcd,
                loostatus: data.loostatus,
                loistatus: data.loistatus,
                lastatus: data.lastatus,
                loocontrol: data.loocontrol,
                loicontrol: data.loicontrol,
                lacontrol: data.lacontrol,
                antennacontrol: data.antennacontrol,
                leasingstatus: data.leasingstatus,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
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
                controlsequenceno: this.isCurrency(data.controlsequenceno, this.decimal),
                rowid: this.isCurrency(data.rowid, this.decimal),
                shortdescs: data.shortdescs,
                // processstatus: processstatus,
                // workflowcontrol: workflowcontrol
                    }
                 
                this.M_TN_SubPortfolioDeviationControl.processstatus = []
                this.M_TN_SubPortfolioDeviationControl.workflowcontrol = []

                if (data.loostatus && data.loostatus != '' && data.loostatus == "Y") this.M_TN_SubPortfolioDeviationControl.processstatus.push("O")
                if (data.lastatus && data.lastatus != '' && data.lastatus == "Y") this.M_TN_SubPortfolioDeviationControl.processstatus.push("A")
                if (data.loistatus && data.loistatus != '' && data.loistatus == "Y") this.M_TN_SubPortfolioDeviationControl.processstatus.push("I")

                if (data.loocontrol && data.loocontrol != '' && data.loocontrol == "Y") this.M_TN_SubPortfolioDeviationControl.workflowcontrol.push("O")
                if (data.lacontrol && data.lacontrol != '' && data.lacontrol == "Y") this.M_TN_SubPortfolioDeviationControl.workflowcontrol.push("A")
                if (data.loicontrol && data.loicontrol != '' && data.loicontrol == "Y") this.M_TN_SubPortfolioDeviationControl.workflowcontrol.push("I")
                this.M_TN_SubPortfolioDeviationControl.deviationcdLabel = this.M_TN_SubPortfolioDeviationControl.deviationcd != null && this.M_TN_SubPortfolioDeviationControl.deviationcd != '' ? data.deviationcd + this.separator + data.shortdescs :'' 
  

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

