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
                                <!-- <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_leasingpolicyyear" v-model="M_TN_LeasingPolicy.leasingpolicyyear"  ref="ref_leasingpolicyyear"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_occupancyrate" v-model="M_TN_LeasingPolicy.occupancyrate"  ref="ref_occupancyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_LeasingPolicy.promotionlevy"  ref="ref_promotionlevy"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_stepuppercentage" v-model="M_TN_LeasingPolicy.stepuppercentage"  ref="ref_stepuppercentage"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_TN_LeasingPolicy.sinkingfund"  ref="ref_sinkingfund"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_flatpercentage" v-model="M_TN_LeasingPolicy.flatpercentage"  ref="ref_flatpercentage"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LeasingPolicy.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>  
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_TN_LeasingPolicy.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LeasingPolicy.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> -->
                                <b-col md="6" id="col-left">
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_leasingpolicyyear" v-model="M_TN_LeasingPolicy.leasingpolicyyear"  ref="ref_leasingpolicyyear"/>
                                      </b-col>                                      
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_promotionlevy" v-model="M_TN_LeasingPolicy.promotionlevy"  ref="ref_promotionlevy"/>
                                      </b-col>                                      
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_sinkingfund" v-model="M_TN_LeasingPolicy.sinkingfund"  ref="ref_sinkingfund"/>
                                      </b-col>                                      
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_telephonedeposit" v-model="M_TN_LeasingPolicy.telephonedeposit"  ref="ref_telephonedeposit"/>
                                      </b-col>  
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_fitoutdeposit" v-model="M_TN_LeasingPolicy.fitoutdeposit"  ref="ref_fitoutdeposit"/>
                                      </b-col>                                      
                                    </b-row>
                                </b-col>
                                <b-col md="6" id="col-left">
                                    <b-row>
                                        <b-col md="12">
                                            <ABSinputTextVuex :prop="PI_occupancyrate" v-model="M_TN_LeasingPolicy.occupancyrate"  ref="ref_occupancyrate"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="12">
                                            <ABSinputTextVuex :prop="PI_stepuppercentage" v-model="M_TN_LeasingPolicy.stepuppercentage"  ref="ref_stepuppercentage"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>                                            
                                        <b-col md="12">
                                            <ABSinputTextVuex :prop="PI_flatpercentage" v-model="M_TN_LeasingPolicy.flatpercentage"  ref="ref_flatpercentage"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>        
                                        <b-col md="12">
                                            <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LeasingPolicy.remarks"  ref="ref_remarks" />
                                        </b-col>
                                    </b-row>
                                </b-col>
                  
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
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LeasingPolicy :{
                leasingpolicyyear: '0',
                promotionlevy: '0',
                sinkingfund: '0',
                stepuppercentage: '0',
                flatpercentage: '0',
                telephonedeposit: '0',
                fitoutdeposit: '0',
                occupancyrate: '0',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_leasingpolicyyear: { 
                cValidate :'required|max:4', 
                cName: 'leasingpolicyyear', 
                cLabel: 'Budget Year', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_occupancyrate: { 
                cValidate :'max:22', 
                cName: 'occupancyrate', 
                cLabel: 'Occupancy', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_promotionlevy: { 
                cValidate :'max:22', 
                cName: 'promotionlevy', 
                cLabel: 'Promotion Levy', 
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
            PI_stepuppercentage: { 
                cValidate :'max:22', 
                cName: 'stepuppercentage', 
                cLabel: 'Yearly Step up', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sinkingfund: { 
                cValidate :'max:22', 
                cName: 'sinkingfund', 
                cLabel: 'Sinking Fund', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_flatpercentage: { 
                cValidate :'max:22', 
                cName: 'flatpercentage', 
                cLabel: 'Yearly Flat', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_telephonedeposit: { 
                cValidate :'max:22', 
                cName: 'telephonedeposit', 
                cLabel: 'Telephone Deposit', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder:9, 
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
            PI_fitoutdeposit: { 
                cValidate :'max:22', 
                cName: 'fitoutdeposit', 
                cLabel: 'Fit Out Deposit', 
                cLabelSize: 4, 
                cOrder: 5, 
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
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LeasingPolicyYear: this.M_TN_LeasingPolicy.leasingpolicyyear,
                PromotionLevy: this.M_TN_LeasingPolicy.promotionlevy ? this.replaceAllString(this.M_TN_LeasingPolicy.promotionlevy,',','','number') : 0 ,
                SinkingFund: this.M_TN_LeasingPolicy.sinkingfund ? this.replaceAllString(this.M_TN_LeasingPolicy.sinkingfund,',','','number') : 0 ,
                StepUpPercentage: this.M_TN_LeasingPolicy.stepuppercentage ? this.replaceAllString(this.M_TN_LeasingPolicy.stepuppercentage,',','','number') : 0 ,
                FlatPercentage: this.M_TN_LeasingPolicy.flatpercentage ? this.replaceAllString(this.M_TN_LeasingPolicy.flatpercentage,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_LeasingPolicy.telephonedeposit ? this.replaceAllString(this.M_TN_LeasingPolicy.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.M_TN_LeasingPolicy.fitoutdeposit ? this.replaceAllString(this.M_TN_LeasingPolicy.fitoutdeposit,',','','number') : 0 ,
                OccupancyRate: this.M_TN_LeasingPolicy.occupancyrate ? this.replaceAllString(this.M_TN_LeasingPolicy.occupancyrate,',','','number') : 0 ,
                Remarks: this.M_TN_LeasingPolicy.remarks,
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
                LeasingPolicyYear: this.M_TN_LeasingPolicy.leasingpolicyyear,
                PromotionLevy: this.M_TN_LeasingPolicy.promotionlevy ? this.replaceAllString(this.M_TN_LeasingPolicy.promotionlevy,',','','number') : 0 ,
                SinkingFund: this.M_TN_LeasingPolicy.sinkingfund ? this.replaceAllString(this.M_TN_LeasingPolicy.sinkingfund,',','','number') : 0 ,
                StepUpPercentage: this.M_TN_LeasingPolicy.stepuppercentage ? this.replaceAllString(this.M_TN_LeasingPolicy.stepuppercentage,',','','number') : 0 ,
                FlatPercentage: this.M_TN_LeasingPolicy.flatpercentage ? this.replaceAllString(this.M_TN_LeasingPolicy.flatpercentage,',','','number') : 0 ,
                TelephoneDeposit: this.M_TN_LeasingPolicy.telephonedeposit ? this.replaceAllString(this.M_TN_LeasingPolicy.telephonedeposit,',','','number') : 0 ,
                FitOutDeposit: this.M_TN_LeasingPolicy.fitoutdeposit ? this.replaceAllString(this.M_TN_LeasingPolicy.fitoutdeposit,',','','number') : 0 ,
                OccupancyRate: this.M_TN_LeasingPolicy.occupancyrate ? this.replaceAllString(this.M_TN_LeasingPolicy.occupancyrate,',','','number') : 0 ,
                Remarks: this.M_TN_LeasingPolicy.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LeasingPolicy.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LeasingPolicy = {
                leasingpolicyyear: '',
                promotionlevy: '',
                sinkingfund: '',
                stepuppercentage: '',
                flatpercentage: '',
                telephonedeposit: '',
                fitoutdeposit: '',
                occupancyrate: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
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
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
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
                leasingpolicyyear: record.LeasingPolicyYear
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_LeasingPolicy = {
                leasingpolicyyear: data.leasingpolicyyear,
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal),
                sinkingfund: this.isCurrency(data.sinkingfund, this.decimal),
                stepuppercentage: this.isCurrency(data.stepuppercentage, this.decimal),
                flatpercentage: this.isCurrency(data.flatpercentage, this.decimal),
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal),
                fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal),
                occupancyrate: this.isCurrency(data.occupancyrate, this.decimal),
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
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
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

