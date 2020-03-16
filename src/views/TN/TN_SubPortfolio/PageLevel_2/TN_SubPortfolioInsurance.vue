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
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_SubPortfolioInsurance.contactid" :label="M_TN_SubPortfolioInsurance.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OninsurancecategorycdChange" :prop="PI_insurancecategorycd" :value="M_TN_SubPortfolioInsurance.insurancecategorycd" :label="M_TN_SubPortfolioInsurance.insurancecategorycdLabel" ref="ref_insurancecategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex @input="OnstartdateChange" :prop="PI_startdate" :valueFrom="M_TN_SubPortfolioInsurance.startdate" :valueTo="M_TN_SubPortfolioInsurance.enddate" @from="MdtRange_startdate" @to="MdtRange_enddate"    ref="ref_startdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_insuranceamt" v-model="M_TN_SubPortfolioInsurance.insuranceamt"  ref="ref_insuranceamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_suminsuredamt" v-model="M_TN_SubPortfolioInsurance.suminsuredamt"  ref="ref_suminsuredamt"/>
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
                initialWhere:"SubPortfolioCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_SubPortfolioInsurance :{
                contactid: '',
                insurancecategorycd: '',
                startdate: '',
                enddate: '',
                insuranceamt: '0',
                suminsuredamt: '0',
                userinput: '',
                useredit: this.getDataUser().UserId,
                contactname: '',
                insurancecategorydescs: '',
                sequenceno: 0,
                subportfoliocd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMInsurance'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'contactid', 
                cLabel: 'Insurance Company ID', 
                cKey: false, 
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
                cMasterUrl: 'CM/CM_Insurance' ,
                cDisplayColumn: 'ContactID,Name' ,
            }, 
            PI_insurancecategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMInsuranceCategory'    , 
                    ColumnDB: 'InsuranceCategoryCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'insurancecategorycd', 
                cLabel: 'Insurance Category', 
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
                cMasterUrl: 'CM/CM_InsuranceCategory' ,
                cDisplayColumn: 'InsuranceCategoryCd,Descs' ,
            }, 
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Start Date - End', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_insuranceamt: { 
                cValidate :'required|max:16', 
                cName: 'insuranceamt', 
                cLabel: 'Insurance Amount', 
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
            PI_suminsuredamt: { 
                cValidate :'required|max:16', 
                cName: 'suminsuredamt', 
                cLabel: 'Sum Insured Amount', 
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
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolioInsurance.contactid = data.id
            this.M_TN_SubPortfolioInsurance.contactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OninsurancecategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolioInsurance.insurancecategorycd = data.id
            this.M_TN_SubPortfolioInsurance.insurancecategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{insurancecategorycd}
            }
        })
        this.$forceUpdate()
        },
        OnstartdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{startdate}
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
            this.M_TN_SubPortfolioInsurance.subportfoliocd = data.SubPortfolioCd 
            this.propList.initialWhere =" SubPortfolioCd = '" + data.SubPortfolioCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            // console.log(this.M_TN_SubPortfolioInsurance)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.M_TN_SubPortfolioInsurance.subportfoliocd,
                ContactId: this.M_TN_SubPortfolioInsurance.contactid == '' || this.M_TN_SubPortfolioInsurance.contactid == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.contactid ,
                InsuranceCategoryCd: this.M_TN_SubPortfolioInsurance.insurancecategorycd == '' || this.M_TN_SubPortfolioInsurance.insurancecategorycd == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.insurancecategorycd ,
                StartDate: this.M_TN_SubPortfolioInsurance.startdate == '' || this.M_TN_SubPortfolioInsurance.startdate == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.startdate ,
                EndDate: this.M_TN_SubPortfolioInsurance.enddate  == '' || this.M_TN_SubPortfolioInsurance.enddate == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.enddate ,
                InsuranceAmt: this.M_TN_SubPortfolioInsurance.insuranceamt ? this.replaceAllString(this.M_TN_SubPortfolioInsurance.insuranceamt,',','','number') : 0 ,
                SumInsuredAmt: this.M_TN_SubPortfolioInsurance.suminsuredamt ? this.replaceAllString(this.M_TN_SubPortfolioInsurance.suminsuredamt,',','','number') : 0 ,
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
                SequenceNo: this.M_TN_SubPortfolioInsurance.sequenceno,
                SubportfolioCd: this.M_TN_SubPortfolioInsurance.subportfoliocd,
                ContactId: this.M_TN_SubPortfolioInsurance.contactid == '' || this.M_TN_SubPortfolioInsurance.contactid == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.contactid ,
                InsuranceCategoryCd: this.M_TN_SubPortfolioInsurance.insurancecategorycd == '' || this.M_TN_SubPortfolioInsurance.insurancecategorycd == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.insurancecategorycd ,
                StartDate: this.M_TN_SubPortfolioInsurance.startdate == '' || this.M_TN_SubPortfolioInsurance.startdate == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.startdate ,
                EndDate: this.M_TN_SubPortfolioInsurance.enddate == '' || this.M_TN_SubPortfolioInsurance.enddate == null ? 'NULL' : this.M_TN_SubPortfolioInsurance.enddate ,
                InsuranceAmt: this.M_TN_SubPortfolioInsurance.insuranceamt ? this.replaceAllString(this.M_TN_SubPortfolioInsurance.insuranceamt,',','','number') : 0 ,
                SumInsuredAmt: this.M_TN_SubPortfolioInsurance.suminsuredamt ? this.replaceAllString(this.M_TN_SubPortfolioInsurance.suminsuredamt,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_SubPortfolioInsurance.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_SubPortfolioInsurance = {
                contactid: '',
                insurancecategorycd: '',
                startdate: '',
                enddate: '',
                insuranceamt: '',
                suminsuredamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                contactname: '',
                insurancecategorydescs: '',
                sequenceno: 0,
                subportfoliocd: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_SubPortfolioInsurance.subportfoliocd = data.SubPortfolioCd 



        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_SubPortfolioInsurance.subportfoliocd = data.SubPortfolioCd 
        },
        M_Delete(dt){           
            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                SubPortfolioCd: value.SubPortfolioCd,
                SequenceNo: value.SequenceNo,
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
,                subportfoliocd: record.SubportfolioCd,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_SubPortfolioInsurance = {
                contactid: data.contactid,
                insurancecategorycd: data.insurancecategorycd,
                startdate: data.startdate,
                enddate: data.enddate,
                insuranceamt: this.isCurrency(data.insuranceamt, this.decimal),
                suminsuredamt: this.isCurrency(data.suminsuredamt, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                contactname: data.contactname,
                insurancecategorydescs: data.insurancecategorydescs,
                sequenceno: this.isCurrency(data.sequenceno, this.decimal),
                subportfoliocd: record.SubportfolioCd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_SubPortfolioInsurance.contactidLabel = this.M_TN_SubPortfolioInsurance.contactid != null && this.M_TN_SubPortfolioInsurance.contactid != '' ? data.contactid + this.separator + data.contactname :'' 
                this.M_TN_SubPortfolioInsurance.insurancecategorycdLabel = this.M_TN_SubPortfolioInsurance.insurancecategorycd != null && this.M_TN_SubPortfolioInsurance.insurancecategorycd != '' ? data.insurancecategorycd + this.separator + data.insurancecategorydescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_SubPortfolioInsurance.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_SubPortfolioInsurance.enddate = data
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

