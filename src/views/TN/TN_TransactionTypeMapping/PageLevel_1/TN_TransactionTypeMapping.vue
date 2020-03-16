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
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_TransactionTypeMapping.trxtype" :label="M_TN_TransactionTypeMapping.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OntenancychargetypeChange" :prop="PI_tenancychargetype" :value="M_TN_TransactionTypeMapping.tenancychargetype" :label="M_TN_TransactionTypeMapping.tenancychargetypeLabel" ref="ref_tenancychargetype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingday" v-model="M_TN_TransactionTypeMapping.billingday"  ref="ref_billingday"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingmonth" v-model="M_TN_TransactionTypeMapping.billingmonth"  ref="ref_billingmonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingdueday" v-model="M_TN_TransactionTypeMapping.billingdueday"  ref="ref_billingdueday"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_billingduemonth" v-model="M_TN_TransactionTypeMapping.billingduemonth"  ref="ref_billingduemonth"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_TransactionTypeMapping.remarks"  ref="ref_remarks" />
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
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_TransactionTypeMapping :{
                trxtype: '',
                tenancychargetype: 'B',
                remarks: '',
                billingduemonth: '0',
                billingmonth: '0',
                billingday: '0',
                billingdueday: '0',
                descs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
        rowid: 0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetTransTypeAR'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='AR'and TrxClass in ('I','T') and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans. Type', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_tenancychargetype: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'tenancychargetype', 
                cLabel: 'Charge Type', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Down Payment', id: 'A' },
                { label: 'Rental Installment', id: 'B' },
                { label: 'Revenue Share', id: 'C' },
                { label: 'Service Charge', id: 'D' },
                { label: 'Sinking Fund', id: 'E' },
                { label: 'Promotion Levy', id: 'F' },
                { label: 'Food Court Levy', id: 'G' },
                { label: 'Administration', id: 'H' },
                { label: 'Sublease', id: 'I' },
                { label: 'Assignment', id: 'J' },
                { label: 'Rental Deposit', id: '1' },
                { label: 'Service Charge Deposit', id: '2' },
                { label: 'Telephone Deposit', id: '3' },
                { label: 'Fit Out Deposit', id: '4' },
                { label: 'Other Charges', id: 'Y' },
                { label: 'Other Deposit', id: 'Z' },
                { label: 'Penalty Rental', id: 'K' },
                { label: 'Penalty Service Charge', id: 'L' },], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_billingday: { 
                cValidate :'required', 
                cName: 'billingday', 
                cLabel: 'Billing Day', 
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
            PI_billingmonth: { 
                cValidate :'required', //cValidate :'required|min_value:1|max_value:31', 
                cName: 'billingmonth', 
                cLabel: 'Billing Month', 
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
            PI_billingdueday: { 
                cValidate :'max:2', 
                cName: 'billingdueday', 
                cLabel: 'Billing Due Day', 
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
            PI_billingduemonth: { 
                cValidate :'max:2', 
                cName: 'billingduemonth', 
                cLabel: 'Billing Due Month', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:7, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_TransactionTypeMapping.trxtype = data.id
            this.M_TN_TransactionTypeMapping.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
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
	    OntenancychargetypeChange(data) {
            this.M_TN_TransactionTypeMapping.tenancychargetype = data.id
            this.M_TN_TransactionTypeMapping.tenancychargetypeLabel = data.label
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tenancychargetype}
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
            // console.log(this.M_TN_TransactionTypeMapping)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TransType: this.M_TN_TransactionTypeMapping.trxtype == '' || this.M_TN_TransactionTypeMapping.trxtype == null ? 'NULL' : this.M_TN_TransactionTypeMapping.trxtype,
                TenancyChargeType: this.M_TN_TransactionTypeMapping.tenancychargetype,
                BillingDay: this.M_TN_TransactionTypeMapping.billingday,
                BillingMonth: this.M_TN_TransactionTypeMapping.billingmonth,
                BillingDueDay: this.M_TN_TransactionTypeMapping.billingdueday,
                BillingDueMonth: this.M_TN_TransactionTypeMapping.billingduemonth,
                Remarks: this.M_TN_TransactionTypeMapping.remarks,
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
            // console.log(this.M_TN_TransactionTypeMapping)   
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TransType: this.M_TN_TransactionTypeMapping.trxtype == '' || this.M_TN_TransactionTypeMapping.trxtype == null ? 'NULL' : this.M_TN_TransactionTypeMapping.trxtype,
                TenancyChargeType: this.M_TN_TransactionTypeMapping.tenancychargetype,
                BillingDay: this.M_TN_TransactionTypeMapping.billingday,
                BillingMonth: this.M_TN_TransactionTypeMapping.billingmonth,
                BillingDueDay: this.M_TN_TransactionTypeMapping.billingdueday,
                BillingDueMonth: this.M_TN_TransactionTypeMapping.billingduemonth,
                Remarks: this.M_TN_TransactionTypeMapping.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_TransactionTypeMapping.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_TransactionTypeMapping = {
                trxtype: '',
                tenancychargetype: 'B',
                remarks: '',
                billingduemonth: '',
                billingmonth: '',
                billingday: '',
                billingdueday: '',
                descs: '',
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
            // console.log(value)
          dataDelete.push({
          TransType: value.TransType,
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
,               SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TransType: record.TrxType
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_TransactionTypeMapping = {
                trxtype: data.trxtype,
                tenancychargetype: data.tenancychargetype,
                remarks: data.remarks,
                billingduemonth: data.billingduemonth,
                billingmonth: data.billingmonth,
                billingday: data.billingday,
                billingdueday: data.billingdueday,
                descs: data.descs,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_TransactionTypeMapping.trxtypeLabel = this.M_TN_TransactionTypeMapping.trxtype != null && this.M_TN_TransactionTypeMapping.trxtype != '' ? data.trxtype + this.separator + data.descs :'' 
         

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

