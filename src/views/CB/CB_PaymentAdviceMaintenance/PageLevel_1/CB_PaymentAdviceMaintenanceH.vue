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
                                        <ABSinputTextVuex :prop="PI_paymentadviceno" v-model="M_CB_PaymentAdviceMaintenanceH.paymentadviceno"  ref="ref_paymentadviceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_paymentadvicedate" v-model="M_CB_PaymentAdviceMaintenanceH.paymentadvicedate"  ref="ref_paymentadvicedate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_srnirno" v-model="M_CB_PaymentAdviceMaintenanceH.srnirno"  ref="ref_srnirno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_srnirdate" v-model="M_CB_PaymentAdviceMaintenanceH.srnirdate"  ref="ref_srnirdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_PaymentAdviceMaintenanceH.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_expecteddate" v-model="M_CB_PaymentAdviceMaintenanceH.expecteddate"  ref="ref_expecteddate"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_requestby" v-model="M_CB_PaymentAdviceMaintenanceH.requestby"  ref="ref_requestby"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sentto" v-model="M_CB_PaymentAdviceMaintenanceH.sentto"  ref="ref_sentto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_priority" v-model="M_CB_PaymentAdviceMaintenanceH.priority"  ref="ref_priority"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_PaymentAdviceMaintenanceH.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_advancerequestamt" v-model="M_CB_PaymentAdviceMaintenanceH.advancerequestamt"  ref="ref_advancerequestamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_advancerealizationamt" v-model="M_CB_PaymentAdviceMaintenanceH.advancerealizationamt"  ref="ref_advancerealizationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_PaymentAdviceMaintenanceH.remarks"  ref="ref_remarks" />
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
		Module:"CB",
            propList: {
                initialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND CashPurchaseStatus = 'A'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_PaymentAdviceMaintenanceH :{
                trxtype: '',
                srnirno: '',
                srnirdate: '',
                descs: '',
                expecteddate: '',
                sentto: '',
                remarks: '',
                feedback: '',
                recommendation: '',
                priority: '0',
                status: '',
                useredit: this.getDataUser().UserId,
                reasoncd: '',
                reasondescs: '',
                userinput: '',
                requestby: '',
                cashpurchasestatus: '',
                currencycd: '',
                paymentadviceno: '',
                paymentadvicedate: '',
                advancerequestamt: '0',
                advancerealizationamt: '0',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_paymentadviceno: { 
                cValidate :'', 
                cName: 'paymentadviceno', 
                cLabel: 'Payment Advice No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentadvicedate: { 
                cValidate :'', 
                cName: 'paymentadvicedate', 
                cLabel: 'Payment Advice Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_srnirno: { 
                cValidate :'', 
                cName: 'srnirno', 
                cLabel: 'Request No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_srnirdate: { 
                cValidate :'', 
                cName: 'srnirdate', 
                cLabel: 'Request Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,                 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_expecteddate: { 
                cValidate :'', 
                cName: 'expecteddate', 
                cLabel: 'Expected Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,                 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_requestby: { 
                cValidate :'', 
                cName: 'requestby', 
                cLabel: 'Requested By', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sentto: { 
                cValidate :'', 
                cName: 'sentto', 
                cLabel: 'Send To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_priority: { 
                cValidate :'', 
                cName: 'priority', 
                cLabel: 'Priority', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cLastLabel: ' (1-9), 1=Highest',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_advancerequestamt: { 
                cValidate :'', 
                cName: 'advancerequestamt', 
                cLabel: 'Total Advance Request', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_advancerealizationamt: { 
                cValidate :'', 
                cName: 'advancerealizationamt', 
                cLabel: 'Total Advance Taken', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cOrder:0, 
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
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[1].disabled = true
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_PaymentAdviceMaintenanceH = {
                trxtype: '',
                srnirno: '',
                srnirdate: '',
                descs: '',
                expecteddate: '',
                sentto: '',
                remarks: '',
                feedback: '',
                recommendation: '',
                priority: '0',
                status: '',
                useredit: this.getDataUser().UserId,
                reasoncd: '',
                reasondescs: '',
                userinput: '',
                requestby: '',
                cashpurchasestatus: '',
                currencycd: '',
                paymentadviceno: '',
                paymentadvicedate: '',
                advancerequestamt: '0',
                advancerealizationamt: '0',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

         //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                srnirno: record.SRnIRNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CB_PaymentAdviceMaintenanceH = {
                trxtype: data.trxtype,
                srnirno: data.srnirno,
                srnirdate: data.srnirdate,
                descs: data.descs,
                expecteddate: data.expecteddate,
                sentto: data.sentto,
                remarks: data.remarks,
                feedback: data.feedback,
                recommendation: data.recommendation,
                priority: data.priority,
                status: data.status,
                useredit: data.useredit,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                userinput: data.userinput,
                requestby: data.requestby,
                cashpurchasestatus: data.cashpurchasestatus,
                currencycd: data.currencycd,
                paymentadviceno: data.paymentadviceno,
                paymentadvicedate: data.paymentadvicedate,
                advancerequestamt: this.isCurrency(data.advancerequestamt, this.decimal),
                advancerealizationamt: this.isCurrency(data.advancerealizationamt, this.decimal),
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
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

