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
                                        <ABSinputTextVuex :prop="PI_creditrisk" v-model="M_TN_AssessmentUpdateFinance.creditrisk"  ref="ref_creditrisk"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_defferedincome" v-model="M_TN_AssessmentUpdateFinance.defferedincome"  ref="ref_defferedincome"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditriskscore" v-model="M_TN_AssessmentUpdateFinance.creditriskscore"  ref="ref_creditriskscore"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_securitydeposit" v-model="M_TN_AssessmentUpdateFinance.securitydeposit"  ref="ref_securitydeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netdefferedincome" v-model="M_TN_AssessmentUpdateFinance.netdefferedincome"  ref="ref_netdefferedincome"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_downpayment" v-model="M_TN_AssessmentUpdateFinance.downpayment"  ref="ref_downpayment"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netdefferedincomescore" v-model="M_TN_AssessmentUpdateFinance.netdefferedincomescore"  ref="ref_netdefferedincomescore"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_installment" v-model="M_TN_AssessmentUpdateFinance.installment"  ref="ref_installment"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymenthistory" v-model="M_TN_AssessmentUpdateFinance.paymenthistory"  ref="ref_paymenthistory"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_TN_AssessmentUpdateFinance.servicecharge"  ref="ref_servicecharge"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_paymenthistoryscore" v-model="M_TN_AssessmentUpdateFinance.paymenthistoryscore"  ref="ref_paymenthistoryscore"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_AssessmentUpdateFinance.promotionlevy"  ref="ref_promotionlevy"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_AssessmentUpdateFinance.remarks"  ref="ref_remarks" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_promotionlevymonthly" v-model="M_TN_AssessmentUpdateFinance.promotionlevymonthly"  ref="ref_promotionlevymonthly"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_utilities" v-model="M_TN_AssessmentUpdateFinance.utilities"  ref="ref_utilities"/>
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
            FormType: "View",
			Module:"TN",
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_AssessmentUpdateFinance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                assessmentno: '',
                creditrisk: '0',
                creditriskscore: '0',
                defferedincome: '0',
                securitydeposit: '0',
                netdefferedincome: '0',
                netdefferedincomescore: '0',
                downpayment: '0',
                installment: '0',
                servicecharge: '0',
                promotionlevy: '0',
                promotionlevymonthly: '0',
                utilities: '0',
                paymenthistory: '0',
                paymenthistoryscore: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_creditrisk: { 
                cValidate :'', 
                cName: 'creditrisk', 
                cLabel: 'Credit Risk', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_defferedincome: { 
                cValidate :'', 
                cName: 'defferedincome', 
                cLabel: 'Deffered Income', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditriskscore: { 
                cValidate :'', 
                cName: 'creditriskscore', 
                cLabel: 'Credit Risk Score', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_securitydeposit: { 
                cValidate :'', 
                cName: 'securitydeposit', 
                cLabel: 'Security Deposit', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedincome: { 
                cValidate :'', 
                cName: 'netdefferedincome', 
                cLabel: 'Net Deffered Income', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_downpayment: { 
                cValidate :'', 
                cName: 'downpayment', 
                cLabel: 'Down Payment', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netdefferedincomescore: { 
                cValidate :'', 
                cName: 'netdefferedincomescore', 
                cLabel: 'Net Deffered Score', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_installment: { 
                cValidate :'', 
                cName: 'installment', 
                cLabel: 'Installment', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymenthistory: { 
                cValidate :'', 
                cName: 'paymenthistory', 
                cLabel: 'Payment Historical', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_servicecharge: { 
                cValidate :'', 
                cName: 'servicecharge', 
                cLabel: 'Service Charge', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymenthistoryscore: { 
                cValidate :'', 
                cName: 'paymenthistoryscore', 
                cLabel: 'Payment Score', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_promotionlevy: { 
                cValidate :'', 
                cName: 'promotionlevy', 
                cLabel: 'Promo Levy', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
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
                cOrder:24, 
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
            PI_promotionlevymonthly: { 
                cValidate :'', 
                cName: 'promotionlevymonthly', 
                cLabel: 'Promo Levy Monthly', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_utilities: { 
                cValidate :'', 
                cName: 'utilities', 
                cLabel: 'Utilities', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
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
            this.$parent.showForm = true
            this.getDataBy()
        },		       
        M_Insert() {
        },
        M_Update() {
        },
		M_ClearForm(){
            this.M_TN_AssessmentUpdateFinance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                assessmentno: '',
                creditrisk: '0',
                creditriskscore: '0',
                defferedincome: '0',
                securitydeposit: '0',
                netdefferedincome: '0',
                netdefferedincomescore: '0',
                downpayment: '0',
                installment: '0',
                servicecharge: '0',
                promotionlevy: '0',
                promotionlevymonthly: '0',
                utilities: '0',
                paymenthistory: '0',
                paymenthistoryscore: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
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
                AssessmentNo: this.DataRowPage1.AssessmentNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_AssessmentUpdateFinance = {
                subportfoliocd: data.subportfoliocd,
                assessmentno: this.DataRowPage1.AssessmentNo,
                creditrisk: this.isCurrency(data.creditrisk, this.decimal),
                creditriskscore: this.isCurrency(data.creditriskscore, this.decimal),
                defferedincome: this.isCurrency(data.defferedincome, this.decimal),
                securitydeposit: this.isCurrency(data.securitydeposit, this.decimal),
                netdefferedincome: this.isCurrency(data.netdefferedincome, this.decimal),
                netdefferedincomescore: this.isCurrency(data.netdefferedincomescore, this.decimal),
                downpayment: this.isCurrency(data.downpayment, this.decimal),
                installment: this.isCurrency(data.installment, this.decimal),
                servicecharge: this.isCurrency(data.servicecharge, this.decimal),
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal),
                promotionlevymonthly: this.isCurrency(data.promotionlevymonthly, this.decimal),
                utilities: this.isCurrency(data.utilities, this.decimal),
                paymenthistory: this.isCurrency(data.paymenthistory, this.decimal),
                paymenthistoryscore: this.isCurrency(data.paymenthistoryscore, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                // lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
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

