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
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_GenerateProfitSharing.fromapplicationno" :label="M_TN_GenerateProfitSharing.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_GenerateProfitSharing.toapplicationno" :label="M_TN_GenerateProfitSharing.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_fromtrxdate" :valueFrom="M_TN_GenerateProfitSharing.fromtrxdate" :valueTo="M_TN_GenerateProfitSharing.totrxdate" ref="ref_fromtrxdate" @from="MdtRange_fromtrxdate" @to="MdtRange_totrxdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_GenerateProfitSharing.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_GenerateProfitSharing.remarks"  ref="ref_remarks" />
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

            M_TN_GenerateProfitSharing :{
                fromapplicationno: '',
                toapplicationno: '',
                fromtrxdate: '',
                totrxdate: '',
                billingdate: '',
                remarks: ''
                    }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status ='A' and applicationno in (select distinct applicationno from TN_ContractRevenueShare where subportfoliocd='"+this.getDataUser().SubPortfolioCd+"') AND ISNULL(TerminateStatus,'N') <> 'Y' AND applicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractTermination tct WHERE tct.[Status] = 'N') AND applicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractAddendum tca WHERE tca.[Status] = 'N') AND ( CAST(RED AS DATE) >= CAST(DATEADD(MONTH,-(SELECT ISNULL(BillingMonthTolerance,0) FROM TN_Specification WHERE SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'),GETDATE()) AS DATE) ) ",
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromapplicationno', 
                cLabel: 'From Application No', 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_toapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"' AND Status ='A' and applicationno in (select distinct applicationno from TN_ContractRevenueShare where subportfoliocd='"+this.getDataUser().SubPortfolioCd+"') AND ISNULL(TerminateStatus,'N') <> 'Y' AND applicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractTermination tct WHERE tct.[Status] = 'N') AND applicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractAddendum tca WHERE tca.[Status] = 'N') AND ( CAST(RED AS DATE) >= CAST(DATEADD(MONTH,-(SELECT ISNULL(BillingMonthTolerance,0) FROM TN_Specification WHERE SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'),GETDATE()) AS DATE) ) "   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'toapplicationno', 
                cLabel: 'To Application No ', 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_fromtrxdate: { 
                cValidate :'required', 
                cName: 'fromtrxdate', 
                cLabel: 'Trans. Date From', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
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
        OnfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_GenerateProfitSharing.fromapplicationno = data.id
            this.M_TN_GenerateProfitSharing.fromapplicationnoLabel = data.label

            this.M_TN_GenerateProfitSharing.toapplicationno = data.id
            this.M_TN_GenerateProfitSharing.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_GenerateProfitSharing.toapplicationno = data.id
            this.M_TN_GenerateProfitSharing.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingdate}
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromApplicationNo: this.M_TN_GenerateProfitSharing.fromapplicationno,
                ToApplicationNo: this.M_TN_GenerateProfitSharing.toapplicationno,
                FromTrxDate: this.M_TN_GenerateProfitSharing.fromtrxdate,
                ToTrxDate: this.M_TN_GenerateProfitSharing.totrxdate,
                BillingDate: this.M_TN_GenerateProfitSharing.billingdate,
                Remarks: this.M_TN_GenerateProfitSharing.remarks,
                UserInput: this.getDataUser().UserId

                
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
            this.M_TN_GenerateProfitSharing = {
                fromapplicationno: '',
                toapplicationno: '',
                fromtrxdate: '',
                totrxdate: '',
                billingdate: '',
                remarks: ''
                    }
            		
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_GenerateProfitSharing = {
                fromapplicationno: data.fromapplicationno,
                toapplicationno: data.toapplicationno,
                fromtrxdate: data.fromtrxdate,
                totrxdate: data.totrxdate,
                billingdate: data.billingdate,
                remarks: data.remarks
                    }
                 

                this.M_TN_GenerateProfitSharing.fromapplicationnoLabel = this.M_TN_GenerateProfitSharing.fromapplicationno != null && this.M_TN_GenerateProfitSharing.fromapplicationno != '' ? data.fromapplicationno :'' 
                this.M_TN_GenerateProfitSharing.toapplicationnoLabel = this.M_TN_GenerateProfitSharing.toapplicationno != null && this.M_TN_GenerateProfitSharing.toapplicationno != '' ? data.toapplicationno :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
        }
        ,MdtRange_fromtrxdate (data) {
            this.M_TN_GenerateProfitSharing.fromtrxdate = data
        }
        ,MdtRange_totrxdate (data) {
            this.M_TN_GenerateProfitSharing.totrxdate = data
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
