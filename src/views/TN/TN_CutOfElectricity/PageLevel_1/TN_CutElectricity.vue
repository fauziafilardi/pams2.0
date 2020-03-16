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
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_CutElectricity.applicationno" :label="M_TN_CutElectricity.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_customername" v-model="M_TN_CutElectricity.customername"  ref="ref_customername"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_CutElectricity.brandname"  ref="ref_brandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lotno" v-model="M_TN_CutElectricity.lotno"  ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_marketing" v-model="M_TN_CutElectricity.marketing"  ref="ref_marketing"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_outstandingamt" v-model="M_TN_CutElectricity.outstandingamt"  ref="ref_outstandingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reminderno" v-model="M_TN_CutElectricity.reminderno"  ref="ref_reminderno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OncutclosetransdateChange" :prop="PI_cutclosetransdate" v-model="M_TN_CutElectricity.cutclosetransdate"  ref="ref_cutclosetransdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncutclosereasoncdChange" :prop="PI_cutclosereasoncd" :value="M_TN_CutElectricity.cutclosereasoncd" :label="M_TN_CutElectricity.cutclosereasoncdLabel" ref="ref_cutclosereasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_cutclosereasondescs" v-model="M_TN_CutElectricity.cutclosereasondescs"  ref="ref_cutclosereasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CutElectricity.remarks"  ref="ref_remarks" />
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
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_CutElectricity :{
                applicationno: '',
                customername: '',
                brandname: '',
                lotno: '',
                marketing: '',
                outstandingamt: '0',
                reminderno: '',
                cutclosetransdate: '',
                cutclosereasondescs: '',
                cutclosereasoncd: '',
                cutclosedate: this.getToday(),
                remarks: '',
                lastupdatestamp: 0
                    }
            ,					
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "Status='A' AND ApplicationNo Not IN (SELECT TN_ContractSuspend.ApplicationNo FROM TN_ContractSuspend WHERE TN_ContractSuspend.SuspendType = 'e' and TN_ContractSuspend.Status='Y') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cKey: false, 
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
                cDisplayColumn: 'ApplicationNo,BusinessName' ,
            }, 
            PI_customername: { 
                cValidate :'', 
                cName: 'customername', 
                cLabel: 'Customer Name', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandname: { 
                cValidate :'', 
                cName: 'brandname', 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotno: { 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_marketing: { 
                cValidate :'', 
                cName: 'marketing', 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_outstandingamt: { 
                cValidate :'', 
                cName: 'outstandingamt', 
                cLabel: 'Total Outstanding', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminderno: { 
                cValidate :'', 
                cName: 'reminderno', 
                cLabel: 'Reminder No', 
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
            PI_cutclosetransdate: { 
                cValidate :'required', 
                cName: 'cutclosetransdate', 
                cLabel: 'Cut Close Trans Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cutclosereasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'cutclosereasoncd', 
                cLabel: 'Reason Code', 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_cutclosereasondescs: { 
                cValidate :'', 
                cName: 'cutclosereasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:8, 
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
    }
  },
    methods: {		
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CutElectricity.applicationno = data.id
            this.M_TN_CutElectricity.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.GetTNApplicationNo(data.id) 
                this.GetTNTotalOutStanding(data.id)
//{applicationno}
            }
        })
        this.$forceUpdate()
        },
        OncutclosetransdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{cutclosetransdate}
            }
        })
        this.$forceUpdate()
        },
        OncutclosereasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CutElectricity.cutclosereasoncd = data.id
            this.M_TN_CutElectricity.cutclosereasoncdLabel = data.label
            this.M_TN_CutElectricity.cutclosereasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{cutclosereasoncd}
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
           this.getToolbar().doEdit(true)
        },
        GetTNApplicationNo (ApplicationNo) {
            var param = {
                OptionFunctionCd: "GetTNApplicationNo",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: ApplicationNo,
                
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
 
                this.M_TN_CutElectricity.brandname = ress[0].BrandName //this.M_FormatingDate(ress[0].DebitDate)
                this.M_TN_CutElectricity.lotno = ress[0].LotList
                this.M_TN_CutElectricity.customername = ress[0].Name
                this.M_TN_CutElectricity.marketing = ress[0].MarketingId
            })
        },
        GetTNTotalOutStanding (ApplicationNo) {
            var param = {
                OptionFunctionCd: "GetTNTotalOutStanding",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: ApplicationNo,
                
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
 
                this.M_TN_CutElectricity.outstandingamt = this.isCurrency(ress[0].amt)
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
            this.M_Refresh()			
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_CutElectricity.applicationno == '' || this.M_TN_CutElectricity.applicationno == null ? 'NULL' : this.M_TN_CutElectricity.applicationno ,
                SuspendType: this.M_TN_CutElectricity.suspendtype,
                OutstandingAmt: this.M_TN_CutElectricity.outstandingamt,
                CutCloseTransDate: this.M_TN_CutElectricity.cutclosetransdate == '' || this.M_TN_CutElectricity.cutclosetransdate == null ? 'NULL' : this.M_TN_CutElectricity.cutclosetransdate ,
                CutCloseReasonCd: this.M_TN_CutElectricity.cutclosereasoncd == '' || this.M_TN_CutElectricity.cutclosereasoncd == null ? 'NULL' : this.M_TN_CutElectricity.cutclosereasoncd ,
                CutCloseReasonDescs: this.M_TN_CutElectricity.cutclosereasondescs,
                CutCloseBy: this.getDataUser().UserId,
                CutCloseDate: this.M_TN_CutElectricity.cutclosedate,
                SuspendType: this.M_TN_CutElectricity.suspendtype,
                Status: this.M_TN_CutElectricity.status,
                Remarks: this.M_TN_CutElectricity.remarks,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CutElectricity.lastupdatestamp                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    // this.M_ClearForm()
                    // this.$store.commit('setStatus', 'view')
                    // this.getToolbar().doEdit()
                    
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doNew()

                    // this.getToolbar().FormStatus = 'EDIT'
                    // this.getToolbar().ProcessPS()
                    // this.M_ClearForm()
                    // this.$store.commit('setStatus', 'view')
                    // this.$store.commit('setStatus', 'new')
					// this.$store.commit('setEventStatus', 'Save')

                    // this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_CutElectricity.applicationno == '' || this.M_TN_CutElectricity.applicationno == null ? 'NULL' : this.M_TN_CutElectricity.applicationno ,
                SuspendType: 'E',
                OutstandingAmt: this.M_TN_CutElectricity.outstandingamt,
                CutCloseTransDate: this.M_TN_CutElectricity.cutclosetransdate,
                CutCloseReasonCd: this.M_TN_CutElectricity.cutclosereasoncd == '' || this.M_TN_CutElectricity.cutclosereasoncd == null ? 'NULL' : this.M_TN_CutElectricity.cutclosereasoncd ,
                CutCloseReasonDescs: this.M_TN_CutElectricity.cutclosereasondescs,
                CutCloseBy: this.getDataUser().UserId,
                CutCloseDate: this.M_TN_CutElectricity.cutclosedate,
                Status: 'Y',
                Remarks: this.M_TN_CutElectricity.remarks,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CutElectricity.lastupdatestamp                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit()
					
                })
            })
        },
		M_ClearForm(){
            this.$nextTick(() => {
            this.M_TN_CutElectricity = {
                applicationno: '',
                customername: '',
                brandname: '',
                lotno: '',
                marketing: '',
                outstandingamt: '',
                reminderno: '',
                cutclosetransdate: '',
                cutclosereasondescs: '',
                cutclosereasoncd: '',
                cutclosedate: this.getToday(),
                remarks: '',
                lastupdatestamp: 0
                    }
            })
            this.$forceUpdate()
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
				


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
// this.M_TN_CutElectricity = {
//                 applicationno: data.applicationno,
//                 customername: data.customername,
//                 brandname: data.brandname,
//                 lotno: data.lotno,
//                 marketing: data.marketing,
//                 outstandingamt: data.outstandingamt,
//                 reminderno: data.reminderno,
//                 cutclosetransdate: data.cutclosetransdate,
//                 cutclosereasondescs: data.cutclosereasondescs,
//                 cutclosereasoncd: data.cutclosereasoncd,
//                 remarks: data.remarks
//                     }
                 

//                 this.M_TN_CutElectricity.applicationnoLabel = this.M_TN_CutElectricity.applicationno != null && this.M_TN_CutElectricity.applicationno != '' ? data.applicationno + this.separator  :'' 
//                 this.M_TN_CutElectricity.cutclosereasoncdLabel = this.M_TN_CutElectricity.cutclosereasoncd != null && this.M_TN_CutElectricity.cutclosereasoncd != '' ? data.cutclosereasoncd + this.separator  :'' 
         

//                 this.IEBy.Input = data.UserInput
//                 this.IEBy.Edit = data.UserEdit

//             })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
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
