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
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_CLPolicyCharges.customercategorycd" :label="M_TN_CLPolicyCharges.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_securitydeposit" v-model="M_TN_CLPolicyCharges.securitydeposit"  ref="ref_securitydeposit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_minimumrental" v-model="M_TN_CLPolicyCharges.minimumrental"  ref="ref_minimumrental"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLPolicyCharges.remarks"  ref="ref_remarks" />
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
                initialWhere:"SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND CLPolicyYear = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CLPolicyCharges :{
                customercategorycd: '',
                securitydeposit: '0',
                minimumrental: 0,
                remarks: '',
                customercategorydescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                clpolicyyear: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCustomerCategoryCd'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "SubportfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND CLStatus='Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
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
                cMasterUrl: 'TN/TN_CustomerCategory' ,
                cDisplayColumn: 'CustomerCategoryCd' ,
            }, 
            PI_securitydeposit: { 
                cValidate :'max:12', 
                cName: 'securitydeposit', 
                cLabel: 'Security Deposit', 
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
            PI_minimumrental: { 
                cValidate :'max:12', 
                cName: 'minimumrental', 
                cLabel: 'Minimum Rental', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:4, 
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
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLPolicyCharges.customercategorycd = data.id
            this.M_TN_CLPolicyCharges.customercategorycdLabel = data.id + ' | ' + data.Descs
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
            // console.log(data)
            this.M_TN_CLPolicyCharges.clpolicyyear = data.CLPolicyYear 
            this.M_TN_CLPolicyCharges.customercategorycd = data.CustomerCategoryCd 
            this.propList.initialWhere =" SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND CLPolicyYear = '" + data.CLPolicyYear + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CLPolicyYear: this.M_TN_CLPolicyCharges.clpolicyyear,
                CustomerCategoryCd: this.M_TN_CLPolicyCharges.customercategorycd == '' || this.M_TN_CLPolicyCharges.customercategorycd == null ? 'NULL' : this.M_TN_CLPolicyCharges.customercategorycd ,
                SecurityDeposit: this.M_TN_CLPolicyCharges.securitydeposit ? this.replaceAllString(this.M_TN_CLPolicyCharges.securitydeposit,',','','number') : 0 ,
                MinimumRental: this.M_TN_CLPolicyCharges.minimumrental ? this.replaceAllString(this.M_TN_CLPolicyCharges.minimumrental,',','','number') : 0 ,
                Remarks: this.M_TN_CLPolicyCharges.remarks,
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
            console.log(this.M_TN_CLPolicyCharges)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CLPolicyYear: this.M_TN_CLPolicyCharges.clpolicyyear,
                CustomerCategoryCd: this.M_TN_CLPolicyCharges.customercategorycd == '' || this.M_TN_CLPolicyCharges.customercategorycd == null ? 'NULL' : this.M_TN_CLPolicyCharges.customercategorycd ,
                SecurityDeposit: this.M_TN_CLPolicyCharges.securitydeposit ? this.replaceAllString(this.M_TN_CLPolicyCharges.securitydeposit,',','','number') : 0 ,
                MinimumRental: this.M_TN_CLPolicyCharges.minimumrental ? this.replaceAllString(this.M_TN_CLPolicyCharges.minimumrental,',','','number') : 0 ,
                Remarks: this.M_TN_CLPolicyCharges.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLPolicyCharges.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLPolicyCharges = {
                customercategorycd: '',
                securitydeposit: '',
                minimumrental: '',
                remarks: '',
                customercategorydescs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                clpolicyyear: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_CLPolicyCharges.clpolicyyear = data.CLPolicyYear 
            this.$refs.ref_customercategorycd.focus()
        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_CLPolicyCharges.clpolicyyear = data.CLPolicyYear 
            this.$refs.ref_securitydeposit.focus()
        },
        M_Delete(dt){           

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          SubportfolioCd: this.getDataUser().SubPortfolioCd,
          CLPolicyYear: value.CLPolicyYear,
          CustomerCategoryCd: value.CustomerCategoryCd,
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
                clpolicyyear: record.CLPolicyYear,
                customercategorycd: record.CustomerCategoryCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                console.log(data)
this.M_TN_CLPolicyCharges = {
                customercategorycd: data.customercategorycd,
                securitydeposit: this.isCurrency(data.securitydeposit, this.decimal),
                minimumrental: this.isCurrency(data.minimumrental, this.decimal),
                remarks: data.remarks,
                customercategorydescs: data.customercategorydescs,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                clpolicyyear: this.isCurrency(data.clpolicyyear, this.decimal),
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_CLPolicyCharges.customercategorycdLabel = this.M_TN_CLPolicyCharges.customercategorycd != null && this.M_TN_CLPolicyCharges.customercategorycd != '' ? data.customercategorycd + this.separator + data.customercategorydescs :'' 
  

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

