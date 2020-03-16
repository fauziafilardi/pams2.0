<template>
    <div>
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
                                        <ABSinputTextVuex :prop="PI_totalinvoice" v-model="M_TN_ContractHistory.totalinvoice"  ref="ref_totalinvoice" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaldebitnote" v-model="M_TN_ContractHistory.totaldebitnote"  ref="ref_totaldebitnote" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalbilling" v-model="M_TN_ContractHistory.totalbilling"  ref="ref_totalbilling" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalpayment" v-model="M_TN_ContractHistory.totalpayment"  ref="ref_totalpayment" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalcreditnote" v-model="M_TN_ContractHistory.totalcreditnote"  ref="ref_totalcreditnote" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaladvance" v-model="M_TN_ContractHistory.totaladvance"  ref="ref_totaladvance" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaldeposit" v-model="M_TN_ContractHistory.totaldeposit"  ref="ref_totaldeposit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaloutstanding" v-model="M_TN_ContractHistory.totaloutstanding"  ref="ref_totaloutstanding" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalaging" v-model="M_TN_ContractHistory.totalaging"  ref="ref_totalaging" />
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
            FormType: "Form",
			Module:"TN",
       
            IEBy: {Input: '', Edit: ''},   			
            IsContractEditable:0,
            M_TN_ContractHistory :{
              totalinvoice: '',
              totaldebitnote: '',
              totalbilling: '',
              totalpayment: '',
              totalcreditnote: '',
              totaladvance: '',
              totaldeposit: '',
              totaloutstanding: '',
              totalaging: '',
            }
            ,
            PI_totalinvoice: { 
              cValidate :'', 
              cName: 'totalinvoice', 
              cLabel: 'Total Invoice',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totaldebitnote: { 
              cValidate :'', 
              cName: 'totaldebitnote', 
              cLabel: 'Total Debit Note',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalbilling: { 
              cValidate :'', 
              cName: 'totalbilling', 
              cLabel: 'Total Billing', 
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalpayment: { 
              cValidate :'', 
              cName: 'totalpayment', 
              cLabel: 'Total Payment',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalcreditnote: { 
              cValidate :'', 
              cName: 'totalcreditnote', 
              cLabel: 'Total Credit Note',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totaladvance: { 
              cValidate :'', 
              cName: 'totaladvance', 
              cLabel: 'Total Advance',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totaldeposit: { 
              cValidate :'', 
              cName: 'totaldeposit', 
              cLabel: 'Total Deposit',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totaloutstanding: { 
              cValidate :'', 
              cName: 'totaloutstanding', 
              cLabel: 'Total Outstanding',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
              cPageLevel: this.PageLevel, 
              cTabIndex: this.TabIndex, 
              cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalaging: { 
              cValidate :'', 
              cName: 'totalaging', 
              cLabel: 'Total Aging',
              cLabelSize: 4, 
              cOrder: 0, 
              cKey: false, 
              cType: 'text',
              cDecimal: 0, 
              cVisible: true, 
              cProtect: true, 
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
    },
	DataRow(){
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
		    GetContract(ApplicationNo){  
           var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: ApplicationNo
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]
              
              // var sContractStatus = data.ContractStatus

                if(data.Status !='C' || data.Status!='X' && data.DeviationApprovalNo !='' ||data.DeviationApprovalNo !=null){
                  this.getToolbar().statusFunction[0].disabled = true
                    this.getToolbar().statusFunction[1].disabled = true
                                        
                }else{
                  if(data.ContractStatus=='1'){
                    this.getToolbar().statusFunction[0].disabled = false
                    this.getToolbar().statusFunction[1].disabled = false
                  }

                }                        

            })
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
            this.$parent.showForm = true
            let data = this.$store.getters.GetPage1Data
            this.GetContract(data.ApplicationNo)
            this.getDataBy()
            // this.getToolbar().statusFunction[4].disabled = false


            // }
        },		       
        M_Insert() {
        },
        M_Update() {
        },
		M_ClearForm(){
      this.M_TN_ContractHistory = {
        totalinvoice: '',
        totaldebitnote: '',
        totalbilling: '',
        totalpayment: '',
        totalcreditnote: '',
        totaladvance: '',
        totaldeposit: '',
        totaloutstanding: '',
        totalaging: ''
      }
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
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.DataRowPage1.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_TN_ContractHistory = {
                  totalinvoice: this.isCurrency(data.totalinvoice, this.decimal),
                  totaldebitnote: this.isCurrency(data.totaldebitnote, this.decimal),
                  totalbilling: this.isCurrency(data.totalbilling, this.decimal),
                  totalpayment: this.isCurrency(data.totalpayment, this.decimal),
                  totalcreditnote: this.isCurrency(data.totalcreditnote, this.decimal),
                  totaladvance: this.isCurrency(data.totaladvance, this.decimal),
                  totaldeposit: this.isCurrency(data.totaldeposit, this.decimal),
                  totaloutstanding: this.isCurrency(data.totaloutstanding, this.decimal),
                  totalaging: this.isCurrency(data.totalaging, this.decimal)
                }
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

