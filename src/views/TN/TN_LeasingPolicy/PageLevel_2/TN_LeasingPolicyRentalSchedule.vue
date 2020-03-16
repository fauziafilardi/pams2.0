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
                                <b-col md="6" id="col-left"> <!-- table open left-->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_fromperiod" v-model="M_TN_LeasingPolicyRentalSchedule.fromperiod"  ref="ref_fromperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex @change="OndpppercentageChange" :prop="PI_dpppercentage" v-model="M_TN_LeasingPolicyRentalSchedule.dpppercentage"  ref="ref_dpppercentage"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_dpschedule" v-model="M_TN_LeasingPolicyRentalSchedule.dpschedule"  ref="ref_dpschedule"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_securitydepositrental" v-model="M_TN_LeasingPolicyRentalSchedule.securitydepositrental"  ref="ref_securitydepositrental"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_securitydepositsc" v-model="M_TN_LeasingPolicyRentalSchedule.securitydepositsc"  ref="ref_securitydepositsc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_installmentend" v-model="M_TN_LeasingPolicyRentalSchedule.installmentend"  ref="ref_installmentend"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_directterminationrental" v-model="M_TN_LeasingPolicyRentalSchedule.directterminationrental"  ref="ref_directterminationrental"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_replacementterminationrental" v-model="M_TN_LeasingPolicyRentalSchedule.replacementterminationrental"  ref="ref_replacementterminationrental"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close left -->
                                <b-col md="6" id="col-left"> <!-- table open right -->
                                      <b-row>
                                        <b-col md="12">
                                            <ABSinputTextVuex :prop="PI_toperiod" v-model="M_TN_LeasingPolicyRentalSchedule.toperiod"  ref="ref_toperiod"/>
                                        </b-col>
                                      </b-row>
                                      <b-row>
                                        <b-col md="12">
                                            <ABSinputTextVuex :prop="PI_installmentpercentage" v-model="M_TN_LeasingPolicyRentalSchedule.installmentpercentage"  ref="ref_installmentpercentage"/>
                                        </b-col>
                                      </b-row>
                                      <b-row>
                                        <b-col md="12">
                                            <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LeasingPolicyRentalSchedule.remarks"  ref="ref_remarks" />
                                        </b-col>
                                      </b-row>
                                </b-col> <!-- table close right-->
                  
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
                initialWhere:"SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And LeasingPolicyYear = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LeasingPolicyRentalSchedule :{
                leasingpolicyyear: 0,
                sequenceno: 0,
                fromperiod: '0',
                toperiod: '0',
                dpppercentage: '0',
                trxtype: '',
                transtype: '',
                dpschedule: '0',
                securitydepositrental: '0',
                securitydepositsc: '0',
                installmentpercentage: 100,
                installmentend: '0',
                directterminationrental: '0',
                replacementterminationrental: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_fromperiod: { 
                cValidate :'max:4', 
                cName: 'fromperiod', 
                cLabel: 'From Period', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_toperiod: { 
                cValidate :'max:4', 
                cName: 'toperiod', 
                cLabel: 'To Period', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_dpppercentage: { 
                cValidate :'max:5', 
                cName: 'dpppercentage', 
                cLabel: 'DP Percentage', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_installmentpercentage: { 
                cValidate :'max:5', 
                cName: 'installmentpercentage', 
                cLabel: 'Installment Percentage', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_dpschedule: { 
                cValidate :'max:22', 
                cName: 'dpschedule', 
                cLabel: 'DP Schedule', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
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
                cOrder:11, 
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
            PI_securitydepositrental: { 
                cValidate :'max:22', 
                cName: 'securitydepositrental', 
                cLabel: 'Sec. Dep. Rental', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_securitydepositsc: { 
                cValidate :'max:22', 
                cName: 'securitydepositsc', 
                cLabel: 'Sec. Dep. SC', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_installmentend: { 
                cValidate :'max:22', 
                cName: 'installmentend', 
                cLabel: 'Installment End', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_directterminationrental: { 
                cValidate :'max:22', 
                cName: 'directterminationrental', 
                cLabel: 'Direct Termination Rental', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_replacementterminationrental: { 
                cValidate :'max:22', 
                cName: 'replacementterminationrental', 
                cLabel: 'Replacement Termination Rental', 
                cLabelSize: 4, 
                cOrder: 8, 
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
        OndpppercentageChange (data) {
        this.$nextTick(() => {
            var nil = this.M_TN_LeasingPolicyRentalSchedule.dpppercentage  
            if (this.inputStatus != "VIEW") {
//{dpppercentage}
            this.M_TN_LeasingPolicyRentalSchedule.installmentpercentage = 100 - nil 
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
            this.M_TN_LeasingPolicyRentalSchedule.leasingpolicyyear = data.LeasingPolicyYear 
            this.propList.initialWhere ="SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And LeasingPolicyYear = '" + data.LeasingPolicyYear + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            // console.log(this.M_TN_LeasingPolicyRentalSchedule)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LeasingPolicyYear: this.M_TN_LeasingPolicyRentalSchedule.leasingpolicyyear,
                FromPeriod: this.M_TN_LeasingPolicyRentalSchedule.fromperiod == '' || this.M_TN_LeasingPolicyRentalSchedule.fromperiod == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.fromperiod ,
                ToPeriod: this.M_TN_LeasingPolicyRentalSchedule.toperiod == '' || this.M_TN_LeasingPolicyRentalSchedule.toperiod == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.toperiod ,
                DPPPercentage: this.M_TN_LeasingPolicyRentalSchedule.dpppercentage == '' ? 0 : this.replaceAllString(this.M_TN_LeasingPolicyRentalSchedule.dpppercentage,',','','number') ,
                DPSchedule: this.M_TN_LeasingPolicyRentalSchedule.dpschedule == '' || this.M_TN_LeasingPolicyRentalSchedule.dpschedule == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.dpschedule,
                SecurityDepositRental: this.M_TN_LeasingPolicyRentalSchedule.securitydepositrental,
                DirectTerminationRental: this.M_TN_LeasingPolicyRentalSchedule.directterminationrental,
                ReplacementTerminationRental: this.M_TN_LeasingPolicyRentalSchedule.replacementterminationrental,
                SecurityDepositSc: this.M_TN_LeasingPolicyRentalSchedule.securitydepositsc,
                InstallmentEnd: this.M_TN_LeasingPolicyRentalSchedule.installmentend == '' || this.M_TN_LeasingPolicyRentalSchedule.installmentend == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.installmentend,
                Remarks: this.M_TN_LeasingPolicyRentalSchedule.remarks,
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LeasingPolicyYear: this.M_TN_LeasingPolicyRentalSchedule.leasingpolicyyear,
                FromPeriod: this.M_TN_LeasingPolicyRentalSchedule.fromperiod == '' || this.M_TN_LeasingPolicyRentalSchedule.fromperiod == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.fromperiod ,
                ToPeriod: this.M_TN_LeasingPolicyRentalSchedule.toperiod == '' || this.M_TN_LeasingPolicyRentalSchedule.toperiod == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.toperiod ,
                DPPPercentage: this.M_TN_LeasingPolicyRentalSchedule.dpppercentage ? this.replaceAllString(this.M_TN_LeasingPolicyRentalSchedule.dpppercentage,',','','number') : 0 ,
                DPSchedule: this.M_TN_LeasingPolicyRentalSchedule.dpschedule == '' || this.M_TN_LeasingPolicyRentalSchedule.dpschedule == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.dpschedule,
                SecurityDepositRental: this.M_TN_LeasingPolicyRentalSchedule.securitydepositrental,
                DirectTerminationRental: this.M_TN_LeasingPolicyRentalSchedule.directterminationrental,
                ReplacementTerminationRental: this.M_TN_LeasingPolicyRentalSchedule.replacementterminationrental,
                SecurityDepositSC: this.M_TN_LeasingPolicyRentalSchedule.securitydepositsc,
                InstallmentEnd: this.M_TN_LeasingPolicyRentalSchedule.installmentend == '' || this.M_TN_LeasingPolicyRentalSchedule.installmentend == null ? 0 : this.M_TN_LeasingPolicyRentalSchedule.installmentend,
                Remarks: this.M_TN_LeasingPolicyRentalSchedule.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LeasingPolicyRentalSchedule.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LeasingPolicyRentalSchedule = {
                leasingpolicyyear: 0,
                sequenceno: 0,
                fromperiod: '',
                toperiod: '',
                dpppercentage: '',
                dpschedule: '',
                securitydepositrental: '',
                securitydepositsc: '',
                installmentpercentage: '',
                installmentend: '',
                directterminationrental: '',
                replacementterminationrental: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LeasingPolicyRentalSchedule.leasingpolicyyear = data.LeasingPolicyYear 



        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SequenceNo: value.SequenceNo,
                    LeasingPolicyYear: value.LeasingPolicyYear,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                leasingpolicyyear: record.LeasingPolicyYear,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LeasingPolicyRentalSchedule = {
                leasingpolicyyear: data.leasingpolicyyear,
                sequenceno: data.sequenceno,
                fromperiod: data.fromperiod,
                toperiod: data.toperiod,
                dpppercentage: this.isCurrency(data.dpppercentage, this.decimal),
                dpschedule: this.isCurrency(data.dpschedule, this.decimal),
                securitydepositrental: this.isCurrency(data.securitydepositrental, this.decimal),
                securitydepositsc: this.isCurrency(data.securitydepositsc, this.decimal),
                installmentpercentage: this.isCurrency(data.installmentpercentage, this.decimal),
                installmentend: this.isCurrency(data.installmentend, this.decimal),
                directterminationrental: this.isCurrency(data.directterminationrental, this.decimal),
                replacementterminationrental: this.isCurrency(data.replacementterminationrental, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
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

