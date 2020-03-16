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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LeasingPolicyServiceCharge.customercategorycd" :label="M_TN_LeasingPolicyServiceCharge.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_servicecharge" v-model="M_TN_LeasingPolicyServiceCharge.servicecharge"  ref="ref_servicecharge"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_directterminationsc" v-model="M_TN_LeasingPolicyServiceCharge.directterminationsc"  ref="ref_directterminationsc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_replacementterminationsc" v-model="M_TN_LeasingPolicyServiceCharge.replacementterminationsc"  ref="ref_replacementterminationsc"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LeasingPolicyServiceCharge.remarks"  ref="ref_remarks" />
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

            M_TN_LeasingPolicyServiceCharge :{
                leasingpolicyyear: 0,
                customercategorycd: '',
                descs: '',
                servicecharge: '',
                directterminationsc: '',
                replacementterminationsc: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNCustomerCategory'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and LeasingStatus = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category', 
                cKey: true, 
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
                cDisplayColumn: 'CustomerCategoryCd,Descs' ,
            }, 
            PI_xxx120807: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_servicecharge: { 
                cValidate :'max:22', 
                cName: 'servicecharge', 
                cLabel: 'Service Charge', 
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
            PI_directterminationsc: { 
                cValidate :'max:22', 
                cName: 'directterminationsc', 
                cLabel: 'Direct Termination SC.', 
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
            PI_replacementterminationsc: { 
                cValidate :'max:22', 
                cName: 'replacementterminationsc', 
                cLabel: 'Replacement Termination SC.', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:5, 
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
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LeasingPolicyServiceCharge.customercategorycd = data.id
            this.M_TN_LeasingPolicyServiceCharge.customercategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{customercategorycd}
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
            this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear = data.LeasingPolicyYear 
            this.propList.initialWhere ="SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' And LeasingPolicyYear = '" + data.LeasingPolicyYear + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LeasingPolicyYear: this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear,
                CustomerCategoryCd: this.M_TN_LeasingPolicyServiceCharge.customercategorycd == '' || this.M_TN_LeasingPolicyServiceCharge.customercategorycd == null ? 'NULL' : this.M_TN_LeasingPolicyServiceCharge.customercategorycd ,
                ServiceCharge: this.M_TN_LeasingPolicyServiceCharge.servicecharge ? this.replaceAllString(this.M_TN_LeasingPolicyServiceCharge.servicecharge,',','','number') : 0 ,
                DirectTerminationSC: this.M_TN_LeasingPolicyServiceCharge.directterminationsc,
                ReplacementTerminationSC: this.M_TN_LeasingPolicyServiceCharge.replacementterminationsc,
                Remarks: this.M_TN_LeasingPolicyServiceCharge.remarks,
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
                LeasingPolicyYear: this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear,
                ServiceCharge: this.M_TN_LeasingPolicyServiceCharge.servicecharge ? this.replaceAllString(this.M_TN_LeasingPolicyServiceCharge.servicecharge,',','','number') : 0 ,
                DirectTerminationSC: this.M_TN_LeasingPolicyServiceCharge.directterminationsc,
                ReplacementTerminationSC: this.M_TN_LeasingPolicyServiceCharge.replacementterminationsc,
                CustomerCategoryCd: this.M_TN_LeasingPolicyServiceCharge.customercategorycd == '' || this.M_TN_LeasingPolicyServiceCharge.customercategorycd == null ? 'NULL' : this.M_TN_LeasingPolicyServiceCharge.customercategorycd ,
                Remarks: this.M_TN_LeasingPolicyServiceCharge.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LeasingPolicyServiceCharge.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LeasingPolicyServiceCharge = {
                leasingpolicyyear: 0,
                customercategorycd: '',
                descs: '',
                servicecharge: '',
                directterminationsc: '',
                replacementterminationsc: '',
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
            this.M_TN_LeasingPolicyServiceCharge.leasingpolicyyear = data.LeasingPolicyYear 



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
                leasingpolicyyear: record.LeasingPolicyYear,
                customercategorycd: record.CustomerCategoryCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LeasingPolicyServiceCharge = {
                leasingpolicyyear: data.leasingpolicyyear,
                customercategorycd: data.customercategorycd,
                descs: data.descs,
                servicecharge: this.isCurrency(data.servicecharge, this.decimal),
                directterminationsc: data.directterminationsc,
                replacementterminationsc: data.replacementterminationsc,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_LeasingPolicyServiceCharge.customercategorycdLabel = this.M_TN_LeasingPolicyServiceCharge.customercategorycd != null && this.M_TN_LeasingPolicyServiceCharge.customercategorycd != '' ? data.customercategorycd + this.separator + data.descs :'' 
  

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

