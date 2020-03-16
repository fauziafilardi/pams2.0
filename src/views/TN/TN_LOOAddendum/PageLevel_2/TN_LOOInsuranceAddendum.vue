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
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_ContractInsurance.contactid" :label="M_TN_ContractInsurance.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_contactname" v-model="M_TN_ContractInsurance.contactname"  ref="ref_contactname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OninsurancecategorycdChange" :prop="PI_insurancecategorycd" :value="M_TN_ContractInsurance.insurancecategorycd" :label="M_TN_ContractInsurance.insurancecategorycdLabel" ref="ref_insurancecategorycd"/>
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSCompute :prop="PI_insurancecategorydescs" v-model="M_TN_ContractInsurance.insurancecategorydescs"  ref="ref_insurancecategorydescs" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <!-- <ABSinputDateVuex @input="OnstartdateChange" :prop="PI_startdate" v-model="M_TN_ContractInsurance.startdate"  ref="ref_startdate" /> -->
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_ContractInsurance.startdate" :valueTo="M_TN_ContractInsurance.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_insuranceamt" v-model="M_TN_ContractInsurance.insuranceamt"  ref="ref_insuranceamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_suminsuredamt" v-model="M_TN_ContractInsurance.suminsuredamt"  ref="ref_suminsuredamt"/>
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
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractInsurance :{
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
                applicationno: '',
                addendumsequenceno: '',
                sequenceno: 0,
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
                cOrder: 0, 
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
            PI_contactname: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
            PI_insurancecategorydescs: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Start - End Date', 
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
                cValidate :'required', 
                cName: 'insuranceamt', 
                cLabel: 'Insurance Amount', 
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
            PI_suminsuredamt: { 
                cValidate :'required', 
                cName: 'suminsuredamt', 
                cLabel: 'Sum Insured Amount', 
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
            this.M_TN_ContractInsurance.contactid = data.id
            this.M_TN_ContractInsurance.contactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OninsurancecategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractInsurance.insurancecategorycd = data.id
            this.M_TN_ContractInsurance.insurancecategorycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{insurancecategorycd}
            }
        })
        this.$forceUpdate()
        },
        MdtRange_startdate (data) {
            this.M_TN_ContractInsurance.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_ContractInsurance.enddate = data
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
            this.M_TN_ContractInsurance.applicationno = data.ApplicationNo
            this.M_TN_ContractInsurance.addendumsequenceno = data.AddendumSequenceNo
            this.propList.initialWhere =" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '" + data.ApplicationNo + "' AND AddendumSequenceNo = '" + data.AddendumSequenceNo + "'"

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractInsurance.applicationno,
                AddendumSequenceNo: this.M_TN_ContractInsurance.addendumsequenceno,
                ContactId: this.M_TN_ContractInsurance.contactid == '' || this.M_TN_ContractInsurance.contactid == null ? 'NULL' : this.M_TN_ContractInsurance.contactid ,
                InsuranceCategoryCd: this.M_TN_ContractInsurance.insurancecategorycd == '' || this.M_TN_ContractInsurance.insurancecategorycd == null ? 'NULL' : this.M_TN_ContractInsurance.insurancecategorycd ,
                StartDate: this.M_TN_ContractInsurance.startdate == '' || this.M_TN_ContractInsurance.startdate == null ? 'NULL' : this.M_TN_ContractInsurance.startdate ,
                EndDate: this.M_TN_ContractInsurance.enddate == '' || this.M_TN_ContractInsurance.enddate == null ? 'NULL' : this.M_TN_ContractInsurance.enddate,
                InsuranceAmt: this.M_TN_ContractInsurance.insuranceamt ? this.replaceAllString(this.M_TN_ContractInsurance.insuranceamt,',','','number') : 0 ,
                SumInsuredAmt: this.M_TN_ContractInsurance.suminsuredamt ? this.replaceAllString(this.M_TN_ContractInsurance.suminsuredamt,',','','number') : 0 ,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SequenceNo: this.M_TN_ContractInsurance.sequenceno,
                ApplicationNo: this.M_TN_ContractInsurance.applicationno,
                AddendumSequenceNo: this.M_TN_ContractInsurance.addendumsequenceno,
                ContactId: this.M_TN_ContractInsurance.contactid == '' || this.M_TN_ContractInsurance.contactid == null ? 'NULL' : this.M_TN_ContractInsurance.contactid ,
                InsuranceCategoryCd: this.M_TN_ContractInsurance.insurancecategorycd == '' || this.M_TN_ContractInsurance.insurancecategorycd == null ? 'NULL' : this.M_TN_ContractInsurance.insurancecategorycd ,
                StartDate: this.M_TN_ContractInsurance.startdate == '' || this.M_TN_ContractInsurance.startdate == null ? 'NULL' : this.M_TN_ContractInsurance.startdate ,
                EndDate: this.M_TN_ContractInsurance.enddate == '' || this.M_TN_ContractInsurance.enddate == null ? 'NULL' : this.M_TN_ContractInsurance.enddate,
                InsuranceAmt: this.M_TN_ContractInsurance.insuranceamt ? this.replaceAllString(this.M_TN_ContractInsurance.insuranceamt,',','','number') : 0 ,
                SumInsuredAmt: this.M_TN_ContractInsurance.suminsuredamt ? this.replaceAllString(this.M_TN_ContractInsurance.suminsuredamt,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractInsurance.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_ContractInsurance = {
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
                applicationno: '',
                addendumsequenceno: '',
                sequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractInsurance.applicationno = data.ApplicationNo
            this.M_TN_ContractInsurance.addendumsequenceno = data.AddendumSequenceNo
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    SequenceNo: value.SequenceNo,
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "Sequence No " + value.SequenceNo
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
,                sequenceno: record.SequenceNo,
                applicationno: record.ApplicationNo,
                AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractInsurance = {
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
                applicationno: record.ApplicationNo,
                addendumsequenceno: this.DataRowPage1.AddendumSequenceNo,
                sequenceno: record.SequenceNo,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                    
                this.M_TN_ContractInsurance.contactidLabel = this.M_TN_ContractInsurance.contactid != null && this.M_TN_ContractInsurance.contactid != '' ? data.contactid + this.separator + data.contactname :'' 
                this.M_TN_ContractInsurance.insurancecategorycdLabel = this.M_TN_ContractInsurance.insurancecategorycd != null && this.M_TN_ContractInsurance.insurancecategorycd != '' ? data.insurancecategorycd + this.separator + data.insurancecategorydescs :'' 
                
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

