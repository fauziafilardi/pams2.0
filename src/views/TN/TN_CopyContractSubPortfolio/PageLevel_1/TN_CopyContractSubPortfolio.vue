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
                                        <ABSInputSelectList @change="OnsubportfoliocdChange" :prop="PI_subportfoliocd" :value="M_TN_CopyContractSubPortfolio.subportfoliocd" :label="M_TN_CopyContractSubPortfolio.subportfoliocdLabel" ref="ref_subportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_CopyContractSubPortfolio.fromapplicationno" :label="M_TN_CopyContractSubPortfolio.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_CopyContractSubPortfolio.toapplicationno" :label="M_TN_CopyContractSubPortfolio.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnwithbillingChange" :prop="PI_withbilling" v-model="M_TN_CopyContractSubPortfolio.withbilling"  ref="ref_withbilling" />
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

            M_TN_CopyContractSubPortfolio :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                fromapplicationno: '',
                toapplicationno: '',
                withbilling: 'N'
                    }
            ,					
            PI_subportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetSubPortfolio'    , 
                    ColumnDB: 'SubPortfolioCd'   , 
                    InitialWhere: "SubPortfolioChargeCoverage IN ('S','A') AND UserId='"+this.getDataUser().UserId+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio To', 
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
                cDisplayColumn: 'SubPortfolioCd,Name' ,
            }, 
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetContract'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND STATUS NOT IN ('C','X')", 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'fromapplicationno', 
                cLabel: 'Contract From', 
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
                cDisplayColumn: 'ApplicationNo,LotList' ,
            }, 
            PI_toapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetContract'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status NOT IN ('C','X')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'toapplicationno', 
                cLabel: 'Contract To', 
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
                cDisplayColumn: 'ApplicationNo,LotList' ,
            }, 
            PI_withbilling: { 
                cValidate :'', 
                cName: 'withbilling', 
                cId: 'rdbwithbilling', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Include Charges,  Schedule Billing(New/Pending),  Deposit Billing(New/Pending)', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
        OnsubportfoliocdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CopyContractSubPortfolio.subportfoliocd = data.id
            this.M_TN_CopyContractSubPortfolio.subportfoliocdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliocd}
            }
        })
        this.$forceUpdate()
        },
        OnfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CopyContractSubPortfolio.fromapplicationno = data.id
            this.M_TN_CopyContractSubPortfolio.fromapplicationnoLabel = data.label

            this.M_TN_CopyContractSubPortfolio.toapplicationno = data.id
            this.M_TN_CopyContractSubPortfolio.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CopyContractSubPortfolio.toapplicationno = data.id
            this.M_TN_CopyContractSubPortfolio.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OnwithbillingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{withbilling}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = 
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromApplicationNo: this.M_TN_CopyContractSubPortfolio.fromapplicationno,
                ToApplicationNo: this.M_TN_CopyContractSubPortfolio.toapplicationno,
                DestSubPortfolioCd: this.M_TN_CopyContractSubPortfolio.subportfoliocd,
                WithBilling: this.M_TN_CopyContractSubPortfolio.withbilling,
                UserInput: this.getDataUser().UserId
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doNew()
                    
                    // this.getToolbar().FormStatus = 'EDIT'
                    // this.getToolbar().ProcessPS()
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
                FromApplicationNo: this.M_TN_CopyContractSubPortfolio.fromapplicationno,
                ToApplicationNo: this.M_TN_CopyContractSubPortfolio.toapplicationno,
                DestSubPortfolioCd: this.M_TN_CopyContractSubPortfolio.subportfoliocd,
                WithBilling: this.M_TN_CopyContractSubPortfolio.withbilling,
                UserInput: this.getDataUser().UserId
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if(response == null) return

                    // this.$parent.resultInsert("Copy Data Successfully!")
                    this.alertSuccess(response.Message)

                    .then(()=>{
                        this.M_ClearForm()
                        this.$store.commit('setStatus', 'view')
                        // this.$store.commit('setStatus', 'new')
                        this.getToolbar().doNew()
                    })
                    // this.getToolbar().FormStatus = 'EDIT'
                    // this.getToolbar().ProcessPS()
                    // this.$store.commit('setStatus', 'view')
                    // this.$store.commit('setStatus', 'New')
              
            })
        },
		M_ClearForm(){
            this.$nextTick(() => {
                this.M_TN_CopyContractSubPortfolio = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                fromapplicationno: '',
                toapplicationno: '',
                withbilling: 'N'
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
           this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
            this.getToolbar().doNew()
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
