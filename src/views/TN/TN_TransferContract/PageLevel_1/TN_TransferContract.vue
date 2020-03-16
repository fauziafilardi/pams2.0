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
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntransferdateChange" :prop="PI_transferdate" v-model="M_TN_TransferContract.transferdate"  ref="ref_transferdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncutoffdateChange" :prop="PI_cutoffdate" v-model="M_TN_TransferContract.cutoffdate"  ref="ref_cutoffdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliotoChange" :prop="PI_subportfolioto" :value="M_TN_TransferContract.subportfolioto" :label="M_TN_TransferContract.subportfoliotoLabel" ref="ref_subportfolioto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnschedulebillingChange" :prop="PI_schedulebilling" v-model="M_TN_TransferContract.schedulebilling"  ref="ref_schedulebilling" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndepositbillingChange" :prop="PI_depositbilling" v-model="M_TN_TransferContract.depositbilling"  ref="ref_depositbilling" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndefferedincomeChange" :prop="PI_defferedincome" v-model="M_TN_TransferContract.defferedincome"  ref="ref_defferedincome" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnaramortizeChange" :prop="PI_aramortize" v-model="M_TN_TransferContract.aramortize"  ref="ref_aramortize" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnleaseprogressChange" :prop="PI_leaseprogress" v-model="M_TN_TransferContract.leaseprogress"  ref="ref_leaseprogress" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_TransferContract.status"  ref="ref_status" />
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
		FormType: "Process",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "' AND Status In ('N','A')",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_TransferContract :{
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                transferdate: '',
                cutoffdate: '',
                subportfolioto: '',
                schedulebilling: 'Y',
                depositbilling: 'Y',
                defferedincome: 'Y',
                aramortize: 'Y',
                leaseprogress: 'Y',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_transferdate: { 
                cValidate :'required', 
                cName: 'transferdate', 
                cLabel: 'Transfer Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cutoffdate: { 
                cValidate :'required', 
                cName: 'cutoffdate', 
                cLabel: 'Cut Off Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfolioto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolio'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfolioto', 
                cLabel: 'Copy Contract to Subportfolio', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 30, 
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
                cDisplayColumn: 'SubPortFolioCd,SubPortFolioClassCd' ,
            }, 
            PI_schedulebilling: { 
                cValidate :'', 
                cName: 'schedulebilling', 
                cId: 'rdbschedulebilling', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Schedule Billing', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_depositbilling: { 
                cValidate :'', 
                cName: 'depositbilling', 
                cId: 'rdbdepositbilling', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Deposit Billing ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_defferedincome: { 
                cValidate :'', 
                cName: 'defferedincome', 
                cId: 'rdbdefferedincome', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Deffered Income ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aramortize: { 
                cValidate :'', 
                cName: 'aramortize', 
                cId: 'rdbaramortize', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Amortize Schedule', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leaseprogress: { 
                cValidate :'', 
                cName: 'leaseprogress', 
                cId: 'rdbleaseprogress', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Lease Progress ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_status: { 
                cLabel: '', 
                cLabelSize: 4,  
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
		return this.$store.getters.GetPage1Data
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        OntransferdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{transferdate}
            }
        })
        this.$forceUpdate()
        },
        OncutoffdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{cutoffdate}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliotoChange (data) {
        this.$nextTick(() => {
            this.M_TN_TransferContract.subportfolioto = data.id
            this.M_TN_TransferContract.subportfoliotoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfolioto}
            }
        })
        this.$forceUpdate()
        },
        OnschedulebillingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{schedulebilling}
            }
        })
        this.$forceUpdate()
        },
        OndepositbillingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{depositbilling}
            }
        })
        this.$forceUpdate()
        },
        OndefferedincomeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{defferedincome}
            }
        })
        this.$forceUpdate()
        },
        OnaramortizeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{aramortize}
            }
        })
        this.$forceUpdate()
        },
        OnleaseprogressChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{leaseprogress}
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
        M_Post(dt){
            var intSequenceNo = 0
            var param1 = {
                _Method_: 'SAVE',
                _LineNo_: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TransferDate: this.M_TN_TransferContract.transferdate == '' || this.M_TN_TransferContract.transferdate == null ? 'NULL' : this.M_TN_TransferContract.transferdate,
                CutOffDate: this.M_TN_TransferContract.cutoffdate == '' || this.M_TN_TransferContract.cutoffdate == null ? 'NULL' : this.M_TN_TransferContract.cutoffdate,
                SubportfolioTo: this.M_TN_TransferContract.subportfolioto == '' || this.M_TN_TransferContract.subportfolioto == null ? 'NULL' : this.M_TN_TransferContract.subportfolioto,
                ScheduleBilling: this.M_TN_TransferContract.schedulebilling,
                DepositBilling: this.M_TN_TransferContract.depositbilling,
                DefferedIncome: this.M_TN_TransferContract.defferedincome,
                ARAmortize: this.M_TN_TransferContract.aramortize,
                LeaseProgress: this.M_TN_TransferContract.leaseprogress,
                Status: 'N',
                UserInput: this.getDataUser().UserId,
                SequenceNo_Output: ''
            }

            var dataContractH = []
            var data = this.FormToABSList().getRowSelected()
            
            for (let index = 0; index < data.length; index++) {
                // const element = array[index];
                dataContractH.push({
                    _Method_: 'SAVE2',
                    _LineNo_: this.$parent.data.PageOrder,
                    SequenceNo: 'SequenceNo',
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: data[index].ApplicationNo,
                    CutOffDate: this.M_TN_TransferContract.cutoffdate,
                    UserInput: this.getDataUser().UserId
                })                
            }

            var dataToPost = [{
                A_Insert: param1,
                B_Looping_Insert: dataContractH
            }]

            var paramToPost = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataToPost
            }

            this.postJSONMulti( this.getUrlProsesDataPostMulti(), paramToPost )
            .then(response => {
                if (response == null) return
                // this.$parent.resultInsert("Data Has Been Save Successfully")
                               
                this.alertSuccess('Data Has Been Save Successfully')
                
                this.$store.commit('setFormType','Process')
                this.M_ClearForm()
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.$store.commit('setListDisable', false)
                this.getToolbar().ProcessPS()
                // this.M_ClearForm()
                this.FormToABSList().doGetList('','eb_getList')
            })

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
            this.M_TN_TransferContract = {
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                transferdate: '',
                cutoffdate: '',
                subportfolioto: '',
                schedulebilling: 'Y',
                depositbilling: 'Y',
                defferedincome: 'Y',
                aramortize: 'Y',
                leaseprogress: 'Y',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({


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
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder

//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 // response from API
//                 if(response == null) return
                
//                 var data = response.Data[0]
// this.M_TN_TransferContract = {
//                 sequenceno: data.sequenceno,
//                 subportfoliocd: data.subportfoliocd,
//                 transferdate: data.transferdate,
//                 cutoffdate: data.cutoffdate,
//                 subportfolioto: data.subportfolioto,
//                 schedulebilling: data.schedulebilling,
//                 depositbilling: data.depositbilling,
//                 defferedincome: data.defferedincome,
//                 aramortize: data.aramortize,
//                 leaseprogress: data.leaseprogress,
//                 status: data.status,
//                 userinput: data.userinput,
//                 useredit: data.useredit,
//                 timeinput: data.timeinput,
//                 timeedit: data.timeedit,
//                 lastupdatestamp: record.LastUpdateStamp,
//                 rowid: data.rowid
//                     }
                 

//                 this.M_TN_TransferContract.subportfoliotoLabel = this.M_TN_TransferContract.subportfolioto != null && this.M_TN_TransferContract.subportfolioto != '' ? data.subportfolioto + this.separator  :'' 
         

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','Process')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', 1)
        this.$store.commit('setTab', 1)
        this.getToolbar().ProcessPS()
        this.hideSideBarMenu()
        // this.toList().doGetList('','eb_getList')

        // this.hideSideBarMenu()
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

