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
                                        <ABSinputTextVuex :prop="PI_paymentsequenceno" v-model="M_TN_TransactionTypeMappingCLProgress.paymentsequenceno"  ref="ref_paymentsequenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnstepnoChange" :prop="PI_stepno" :value="M_TN_TransactionTypeMappingCLProgress.stepno" :label="M_TN_TransactionTypeMappingCLProgress.stepnoLabel" ref="ref_stepno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnprocesstypeChange" :prop="PI_processtype" v-model="M_TN_TransactionTypeMappingCLProgress.processtype"  ref="ref_processtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnmandatoryChange" :prop="PI_mandatory" v-model="M_TN_TransactionTypeMappingCLProgress.mandatory"  ref="ref_mandatory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnprocessindicatorChange" :prop="PI_processindicator" v-model="M_TN_TransactionTypeMappingCLProgress.processindicator"  ref="ref_processindicator" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_TransactionTypeMappingCLProgress.remarks"  ref="ref_remarks" />
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
                initialWhere:"TransType = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_TransactionTypeMappingCLProgress :{
                leasingprogresssequenceno: 0,
                descs: '',
                processtype: '',
                mandatory: '',
                processindicator: '',
                stepno: 0,
                paymentsequenceno: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                transtype: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_paymentsequenceno: { 
                cValidate :'max:8', 
                cName: 'paymentsequenceno', 
                cLabel: 'Payment Sequence', 
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
            PI_stepno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLeasingProgress'    , 
                    ColumnDB: 'StepNo'   , 
                    InitialWhere: "LeasingStatus = 'C' and SubportfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ProcessType IN ('3','4')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'stepno', 
                cLabel: 'Progress Step', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cDisplayColumn: 'StepNo,Descs' ,
            }, 
            PI_processtype: { 
                cValidate :'', 
                cName: 'processtypeee', 
                cId: 'rdbprocesstype', 
                cRadioOptions: [{ text: 'LA', value: '3' },{ text: 'After LA', value: '4' },], 
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
            PI_mandatory: { 
                cValidate :'', 
                cName: 'mandatoryyy', 
                cId: 'rdbmandatory', 
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
            PI_processindicator: { 
                cValidate :'', 
                cName: 'processindicatorrrr', 
                cId: 'rdbprocessindicator', 
                cRadioOptions: [{ text: 'None', value: '1' },{ text: 'HandOver', value: '2' },{ text: 'FitOut Start', value: '3' },{ text: 'FitOut Finished', value: '4' },{ text: 'Opening', value: '5' },], 
                cRadioDefaultOption: '', 
                cLabel:'Process Indicator', 
                cLabelSize: 4, 
                cOrder: 5, 
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
        OnstepnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_TransactionTypeMappingCLProgress.stepno = data.id
            this.M_TN_TransactionTypeMappingCLProgress.stepnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{stepno}
            }
        })
        this.$forceUpdate()
        },
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
            this.M_TN_TransactionTypeMappingCLProgress.transtype = data.TrxType 
            this.propList.initialWhere ="LeasingStatus = 'C' and SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' and TrxType = '" + data.TrxType + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            // console.log(this.M_TN_TransactionTypeMappingCLProgress)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TransType: this.M_TN_TransactionTypeMappingCLProgress.transtype,
                ProgressStep: this.M_TN_TransactionTypeMappingCLProgress.stepno == '' || this.M_TN_TransactionTypeMappingCLProgress.stepno == null ? 'NULL' : this.M_TN_TransactionTypeMappingCLProgress.stepno ,
                PaymentSequenceNo: this.M_TN_TransactionTypeMappingCLProgress.paymentsequenceno ? this.replaceAllString(this.M_TN_TransactionTypeMappingCLProgress.paymentsequenceno, ',', '', 'number') : 0,
                Remarks: this.M_TN_TransactionTypeMappingCLProgress.remarks,
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
            // console.log(this.M_TN_TransactionTypeMappingCLProgress)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TransType: this.M_TN_TransactionTypeMappingCLProgress.transtype,
                ProgressStep: this.M_TN_TransactionTypeMappingCLProgress.stepno == '' || this.M_TN_TransactionTypeMappingCLProgress.stepno == null ? 'NULL' : this.M_TN_TransactionTypeMappingCLProgress.stepno ,
                Remarks: this.M_TN_TransactionTypeMappingCLProgress.remarks,
                PaymentSequenceNo: this.M_TN_TransactionTypeMappingCLProgress.paymentsequenceno,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_TransactionTypeMappingCLProgress.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_TransactionTypeMappingCLProgress = {
                leasingprogresssequenceno: 0,
                descs: '',
                processtype: '',
                mandatory: '',
                processindicator: '',
                stepno: 0,
                paymentsequenceno: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                transtype: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            // console.log(data)
            this.M_TN_TransactionTypeMappingCLProgress.transtype = data.TrxType 
            this.M_TN_TransactionTypeMappingCLProgress.trxtype = data.TrxType 



        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            // console.log(data)
            this.M_TN_TransactionTypeMappingCLProgress.transtype = data.TrxType 
            this.M_TN_TransactionTypeMappingCLProgress.trxtype = data.TrxType 

        },
        M_Delete(dt){  
             var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
            // console.log(value)
          dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          TransType: value.TrxType,
          PaymentSequenceNo: value.PaymentSequenceNo,
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
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                paymentsequentno: record.PaymentSequenceNo,
                transtype: record.TrxType,
                stepno: record.StepNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                // console.log(data)
this.M_TN_TransactionTypeMappingCLProgress = {
                leasingprogresssequenceno: data.leasingprogresssequenceno,
                descs: data.descs,
                transtype: record.TrxType,
                processtype: data.processtype,
                mandatory: data.mandatory,
                processindicator: data.processindicator,
                stepno: data.stepno,
                paymentsequenceno: data.paymentsequenceno,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                trxtype: data.trxtype,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_TransactionTypeMappingCLProgress.stepnoLabel = this.M_TN_TransactionTypeMappingCLProgress.stepno != null && this.M_TN_TransactionTypeMappingCLProgress.stepno != '' ? data.stepno + this.separator + data.descs :'' 
  

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

