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
                                        <ABSinputTextVuex :prop="PI_vatno" v-model="M_AR_CancelReportedTaxBatchMaster.vatno"  ref="ref_vatno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_vatdate" v-model="M_AR_CancelReportedTaxBatchMaster.vatdate"  ref="ref_vatdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_CancelReportedTaxBatchMaster.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CancelReportedTaxBatchMaster.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_CancelReportedTaxBatchMaster.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_CancelReportedTaxBatchMaster.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AR_CancelReportedTaxBatchMaster.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AR_CancelReportedTaxBatchMaster.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncancelstatusChange" :prop="PI_cancelstatus" v-model="M_AR_CancelReportedTaxBatchMaster.cancelstatus"  ref="ref_cancelstatus" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncreditdateChange" :prop="PI_creditdate" v-model="M_AR_CancelReportedTaxBatchMaster.creditdate"  ref="ref_creditdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_CancelReportedTaxBatchMaster.reasoncd" :label="M_AR_CancelReportedTaxBatchMaster.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_CancelReportedTaxBatchMaster.reasondescs"  ref="ref_reasondescs"/>
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
		Module:"AR",
            propList: {
                initialWhere: "SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            Status: '',

            M_AR_CancelReportedTaxBatchMaster :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                debitno: '',
                vatno: '',
                debitdate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                standardcommon: '',
                vatdate: '',
                vatstatus: '',
                status: '',
                cancelstatus: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                currencycd: '',
                creditdate: '',
                reasoncd: '',
                reasondescs: '',
                contactid: '',
                name: '',
                mallname: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_vatno: { 
                cValidate :'', 
                cName: 'vatno', 
                cLabel: 'Tax Invoice No', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_vatdate: { 
                cValidate :'', 
                cName: 'vatdate', 
                cLabel: 'Tax Invoice Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_debitno: { 
                cValidate :'', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_debitdate: { 
                cValidate :'', 
                cName: 'debitdate', 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_netamt: { 
                cValidate :'', 
                cName: 'netamt', 
                cLabel: 'Doc. Amount', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'Tax Amount', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_cancelstatus: { 
                cValidate :'', 
                cName: 'cancelstatus', 
                cId: 'rdbcancelstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'X' }, { text: 'No', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Cancel', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditdate: { 
                cValidate :'required', 
                cName: 'creditdate', 
                cLabel: 'Credit Date', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:60', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OncancelstatusChange (data) {
        // this.M_AR_CancelReportedTaxBatchMaster.cancelstatus = data
      //  console.log(data)
                   this.$nextTick(() => {
                if(data == 'X'){  
                  this.PI_reasoncd.cProtect = false
              this.PI_reasondescs.cProtect = false
              this.PI_creditdate.cProtect = false
              } 
              else {
              this.PI_reasoncd.cProtect = true
              this.PI_reasondescs.cProtect = true
              this.PI_creditdate.cProtect = true
              }
                   })

        this.$forceUpdate()
        },
        OncreditdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_AR_CancelReportedTaxBatchMaster.reasoncd = data.id
            this.M_AR_CancelReportedTaxBatchMaster.reasoncdLabel = data.label
            this.M_AR_CancelReportedTaxBatchMaster.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {

            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
                
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TaxInvoiceNo: this.M_AR_CancelReportedTaxBatchMaster.vatno,
                DebitNo: this.M_AR_CancelReportedTaxBatchMaster.debitno,
                CreditDate: this.M_AR_CancelReportedTaxBatchMaster.creditdate == '' || this.M_AR_CancelReportedTaxBatchMaster.creditdate == null ? 'NULL' : this.M_AR_CancelReportedTaxBatchMaster.creditdate ,
                Status: this.M_AR_CancelReportedTaxBatchMaster.cancelstatus,
                ReasonCd: this.M_AR_CancelReportedTaxBatchMaster.reasoncd == '' || this.M_AR_CancelReportedTaxBatchMaster.reasoncd == null ? 'NULL' : this.M_AR_CancelReportedTaxBatchMaster.reasoncd ,
                ReasonDescs: this.M_AR_CancelReportedTaxBatchMaster.reasondescs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CancelReportedTaxBatchMaster.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CancelReportedTaxBatchMaster = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                debitno: '',
                vatno: '',
                debitdate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                standardcommon: '',
                vatdate: '',
                vatstatus: '',
                status: 'A',
                useredit: this.getDataUser().UserId,
                userinput: '',
                currencycd: '',
                creditdate: '',
                reasoncd: '',
                reasondescs: '',
                contactid: '',
                name: '',
                mallname: '',
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
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TaxInvoiceNo: record.VATNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                  // console.log(data)
            this.M_AR_CancelReportedTaxBatchMaster = {
              
                subportfoliocd: data.subportfoliocd,
                debtorcd: data.debtorcd,
                debitno: data.debitno,
                vatno: data.vatno,
                debitdate: data.debitdate,
                trxamt: data.trxamt,
                netamt: this.isCurrency(data.netamt),
                vatamt: this.isCurrency(data.vatamt),
                standardcommon: data.standardcommon,
                vatdate: data.vatdate,
                vatstatus: data.vatstatus,
                status: data.status,
                useredit: data.useredit,
                userinput: data.userinput,
                currencycd: data.currencycd,
                creditdate: data.creditdate,
                reasoncd: data.reasoncd,
                reasoncdLabel: data.reasoncd,
                reasondescs: data.reasondescs,
                contactid: data.contactid,
                name: data.name,
                mallname: data.mallname,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                }
                
                this.M_AR_CancelReportedTaxBatchMaster.cancelstatus = 
                this.M_AR_CancelReportedTaxBatchMaster.status != "X" 
                ? "A"
                : "X";

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
            })
        },
        
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

