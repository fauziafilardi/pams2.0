<template>
    <div>        
        <!-- <HeaderFormListVuex2 :isProcess = "true" /> -->

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
                                <b-col md="12" id="col-left"> 
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_tenantsalesestimationhighest" v-model="M_TN_ContractTenantSalesEstimation.tenantsalesestimationhighest"  ref="ref_tenantsalesestimationhighest"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_tenantsalesestimationlowest" v-model="M_TN_ContractTenantSalesEstimation.tenantsalesestimationlowest"  ref="ref_tenantsalesestimationlowest"/>
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
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "Form",
			Module:"TN",
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractTenantSalesEstimation :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                tenantsalesestimationhighest: '0',
                tenantsalesestimationlowest: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_tenantsalesestimationhighest: { 
                cValidate :'', 
                cName: 'tenantsalesestimationhighest', 
                cLabel: 'Tenant Sales Estimation (Highest)', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cIsAlwaysShow: true
            }, 
            PI_tenantsalesestimationlowest: { 
                cValidate :'', 
                cName: 'tenantsalesestimationlowest', 
                cLabel: 'Tenant Sales Estimation (Lowest)', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cIsAlwaysShow: true
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
		
		setToolbarButton () {
        //    this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[5].disabled = false//save
           this.getToolbar().isNew = true
            this.getToolbar().statusFunction[6].disabled = true
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
            this.getToolbar().isNew = true
            this.getToolbar().statusFunction[6].disabled = true
        //      this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
        //    this.getToolbar().statusFunction[3].disabled = false
            
            this.getDataBy(this.DataRowPage1);

			
            // this.getToolbar().doEdit(true)

            // this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd : this.getDataUser().SubPortfolioCd,
                ApplicationNo : this.DataRowPage1.ApplicationNo,
                TenantSalesEstimationHighest : this.M_TN_ContractTenantSalesEstimation.tenantsalesestimationhighest,
                TenantSalesEstimationLowest : this.M_TN_ContractTenantSalesEstimation.tenantsalesestimationlowest,
                UserInput : this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                // this.$parent.resultInsert(response.Message)
                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doNew()
                })
					
				
            })
        },
        M_Update() {
        },
		M_ClearForm(){
            this.$nextTick(()=>{
                this.M_TN_ContractTenantSalesEstimation = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                tenantsalesestimationhighest: '0',
                tenantsalesestimationlowest: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            })
            this.$forceUpdate()
            
            		
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

                this.$parent.resultPost()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractTenantSalesEstimation = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                tenantsalesestimationhighest: this.isCurrency(data.tenantsalesestimationhighest, this.decimal),
                tenantsalesestimationlowest: this.isCurrency(data.tenantsalesestimationlowest, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    created: function() {
        // this.$store.commit('setFormType','Edit')
        // this.$store.commit('setStatus', 'new')
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy(this.DataRowPage1);
        // console.log('2')
        
        // this.$store.commit('setListDisable', true)
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

