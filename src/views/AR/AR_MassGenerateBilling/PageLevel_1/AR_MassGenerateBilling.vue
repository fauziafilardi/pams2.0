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
                                        <ABSinputDateVuex :prop="PI_BillingDate" v-model="BillingDate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList
                                            @change="OntrxtypegroupcdChange"
                                            :prop="PI_TrxTypeGroup"
                                            :value="TrxTypeGroup"
                                            :label="TrxTypeGroupLabel"
                                        />
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
			Module:"AR",	
            IEBy: {Input: '', Edit: ''},

            PI_BillingDate: {
                cValidate :'required', 
                cName: "BillingDate",
                cNameError: "Billing Date",
                cLabel: "Billing Date",
                cOrder: 1,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            },
            PI_TrxTypeGroup: {
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransactionTypeGroup'    , 
                    ColumnDB: 'TrxTypeGroupCd'   , 
                    InitialWhere: "ModuleCd is null or ModuleCd = 'AR'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'TrxTypeGroup', 
                cLabel: 'Trans. Type Group', 
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
                cDisplayColumn: 'TrxTypeGroupCd,Descs' ,
            },
            BillingDate: '',
            TrxTypeGroup: '',
            TrxTypeGroupLabel: '',
            
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
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingdate}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypegroupcdChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.TrxTypeGroup = data.id
            this.TrxTypeGroupLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtypegroupcd}
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
        },
        M_Insert() {
        },
        M_Update() {
            var dataPost = []
            
            var billingdt = this.BillingDate == '' || this.BillingDate == null ? 'NULL' : this.BillingDate
            var trxtypegroup = this.TrxTypeGroup
            
            dataPost.push({
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BillingDate: billingdt,
                TrxTypeGroupCd: trxtypegroup,
                UserInput: this.getDataUser().UserId,
                _Message_: "Generating Data Successfully"
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return
                this.$store.commit('setEventStatus', 'POST')
            })
        },
		M_ClearForm(){
            this.BillingDate = ""
            this.TrxTypeGroup = ""
            this.TrxTypeGroupLabel = ""
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
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
                this.M_AR_MassGenerateBilling = {
                    billingdate: data.billingdate,
                    trxtypegroupcd: data.trxtypegroupcd
                }
                 

                this.M_AR_MassGenerateBilling.trxtypegroupcdLabel = this.M_AR_MassGenerateBilling.trxtypegroupcd != null ? data.trxtypegroupcd + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setStatus','EDIT')
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().FormStatus = 'EDIT'
        this.getToolbar().ProcessPS()
        
        this.getToolbar().doEdit(true)
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
