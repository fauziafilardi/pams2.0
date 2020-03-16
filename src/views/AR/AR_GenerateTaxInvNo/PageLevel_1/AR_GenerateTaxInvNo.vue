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
                                        <ABSinputRadioButtonVuex @input="OntaxinvoicetypeChange" :prop="PI_taxinvoicetype" v-model="M_AR_GenerateTaxInvNo.taxinvoicetype"  ref="ref_taxinvoicetype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OngeneratedateChange" :prop="PI_generatedate" v-model="M_AR_GenerateTaxInvNo.generatedate"  ref="ref_generatedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_total" v-model="M_AR_GenerateTaxInvNo.total"  ref="ref_total"/>
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

            M_AR_GenerateTaxInvNo :{
                taxinvoicetype: 'S',
                generatedate: '',
                total: ''
                    }
            ,					
            PI_taxinvoicetype: { 
                cValidate :'', 
                cName: 'taxinvoicetype', 
                cId: 'rdbtaxinvoicetype', 
                cRadioOptions: [{ text: 'Standard', value: 'S' }, { text: 'Common', value: 'C' }, { text: 'Withholding', value: 'W' }], 
                cRadioDefaultOption: 'S', 
                cLabel:'Tax Invoice Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_generatedate: { 
                cValidate :'required', 
                cName: 'generatedate', 
                cLabel: 'Generate Date ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_total: { 
                cValidate :'required|max:12', 
                cName: 'total', 
                cLabel: 'Total Record to be Generated ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
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
        OntaxinvoicetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxinvoicetype}
            }
        })
        this.$forceUpdate()
        },
        OngeneratedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{generatedate}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
           this.getToolbar().statusFunction[2].disabled = true
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TaxInvoiceType: this.M_AR_GenerateTaxInvNo.taxinvoicetype,
                TotalRecord: this.M_AR_GenerateTaxInvNo.total,
                UserInput: this.getDataUser().UserId,
                GenerateDate: this.M_AR_GenerateTaxInvNo.generatedate,
                OutputMessage: ''
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')

                    // this.getToolbar().FormStatus = 'EDIT'
                    // this.getToolbar().ProcessPS()
                    // this.$store.commit('setStatus', 'view')
					// this.$store.commit('setEventStatus', 'Save')

                    // this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TaxInvoiceType: this.M_AR_GenerateTaxInvNo.taxinvoicetype,
                TotalRecord: this.M_AR_GenerateTaxInvNo.total,
                UserInput: this.getDataUser().UserId,
                GenerateDate: this.M_AR_GenerateTaxInvNo.generatedate,
                OutputMessage: ''
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'edit')
                    // this.getToolbar().setButton(false)
                    // this.$store.commit('setStatus', 'edit')
                    // this.getToolbar().doEdit(true)

                    // this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.$nextTick(() => {
                this.M_AR_GenerateTaxInvNo = {
                taxinvoicetype: 'S',
                generatedate: '',
                total: ''
                    }
            })
            this.$forceUpdate()
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'edit')
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder

//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 // response from API
//                 if(response == null) return
                
//                 var data = response.Data[0]
// this.M_AR_GenerateTaxInvNo = {
//                 taxinvoicetype: data.taxinvoicetype,
//                 generatedate: data.generatedate,
//                 total: data.total
//                     }
                 

         

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
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
