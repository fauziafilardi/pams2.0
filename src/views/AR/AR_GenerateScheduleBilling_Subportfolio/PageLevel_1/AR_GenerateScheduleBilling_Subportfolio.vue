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
                                                <b-col md=4>
                                                    <ABSinputDateVuex
                                                        :prop="PI_BillingDate" 
                                                        v-model="BillingDate"
                                                    />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md=4>
                                                    <ABSInputSelectList
                                                        @change="OnTrxTypeFromChange"
                                                        :prop="PI_TrxTypeFrom"
                                                        :value="TrxTypeFrom"
                                                        :label="TrxTypeFromLabel"
                                                    />
                                                </b-col>
                                                <b-col md=4>
                                                    <ABSInputSelectList
                                                        @change="OnTrxTypeToChange"
                                                        :prop="PI_TrxTypeTo"
                                                        :value="TrxTypeTo"
                                                        :label="TrxTypeToLabel"
                                                    />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md=4>
                                                    <ABSInputSelectList 
                                                        @change="OnSubPortfolioChange"
                                                        :prop="PI_SubPortfolio" 
                                                        :value="SubPortfolio" 
                                                        :label="SubPortfolioLabel"
                                                    />
                                                </b-col>
                                            </b-row>
                                            <b-row>
                                                <b-col md=4>
                                                    <b-row>
                                                        <b-col offset="4">
                                                            <label class="text-field-form">( Leave blank to process all SubPortfolio )</label>
                                                        </b-col>
                                                    </b-row>
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
            PI_TrxTypeFrom: {
                dataLookUp: {
                    LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                    ColumnDB: "TrxType",
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ModuleCd = 'AR' AND TrxClass IN ('I','P')",
                    ParamWhere: ""
                },
                cName: "TrxTypeFrom",
                cLabel: "Trans. Type From",
                cType: "lookup",
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
                cDisplayColumn: 'TransactionType,Descs'
            },
            PI_TrxTypeTo: {
                dataLookUp: {
                    LookUpCd: "GetLookupCMTransTypeBySubPortfolio",
                    ColumnDB: "TrxType",
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ModuleCd = 'AR' AND TrxClass IN ('I','P')",
                    ParamWhere: ""
                },
                cName: "TrxTypeTo",
                cLabel: "Trans. Type To",
                cType: "lookup",
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: 'TransactionType,Descs'
            },
            PI_SubPortfolio: {
                dataLookUp: {
                    LookUpCd: "GetSubPortfolioCd",
                    ColumnDB: "SubPortfolioCd",
                    InitialWhere: "",
                    ParamWhere: "",
                    SourceField: 'SubPortfolioCd,SubPortfolioName=Name,TimeEdit',
                    DisplayLookUp: 'SubPortfolioCd,SubPortfolioName'
                },
                cName: "SubPortfolio",
                cLabel: "SubPortfolio",
                cType: "lookup",
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'SubPortfolioCd,SubPortfolioName'
            },
            BillingDate: '',
            TrxTypeFrom: '',
            TrxTypeFromLabel: '',
            TrxTypeTo: '',
            TrxTypeToLabel: '',
            SubPortfolio: '',
            SubPortfolioLabel: '',
            
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
         OnTrxTypeFromChange (data) {
           this.TrxTypeFrom = data.id
           this.TrxTypeFromLabel = data.label
           this.TrxTypeTo = data.id
           this.TrxTypeToLabel = data.label
        },
        OnTrxTypeToChange (data) {
            this.TrxTypeTo = data.id
            this.TrxTypeToLabel = data.label
        },
        OnSubPortfolioChange (data) {
            this.SubPortfolio = data.id
            this.SubPortfolioLabel = data.label
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

            var subportfolio = this.SubPortfolio == '' || this.SubPortfolio == null ? 'NULL' : this.SubPortfolio
            var billingdt = this.BillingDate == '' || this.BillingDate == null ? 'NULL' : this.BillingDate
            var trxtypefrom = this.TrxTypeFrom == '' || this.TrxTypeFrom == null ? 'NULL' : this.TrxTypeFrom
            var trxtypeto = this.TrxTypeTo == '' || this.TrxTypeTo == null ? 'NULL' : this.TrxTypeTo

            dataPost.push({
                SubPortfolioCd: subportfolio,
                BillingDate: billingdt,
                TrxTypeFrom: trxtypefrom,
                TrxTypeTo: trxtypeto,
                UserInput: this.getDataUser().UserId,
                OutputMessage_Output: ''
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlPostMulti(), param).then(response => {
                if (response == null) return

                this.BillingDate = ''
                this.TrxTypeFrom = ''
                this.TrxTypeFromLabel = ''
                this.TrxTypeTo = ''
                this.TrxTypeToLabel = ''
                this.SubPortfolio = ''
                this.SubPortfolioLabel = ''
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.$store.commit('setEventStatus', 'POST')
            })
        },
		M_ClearForm(){
            this.BillingDate = ''
            this.TrxTypeFrom = ''
            this.TrxTypeFromLabel = ''
            this.TrxTypeTo = ''
            this.TrxTypeToLabel = ''
            this.SubPortfolio = ''
            this.SubPortfolioLabel = ''
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
