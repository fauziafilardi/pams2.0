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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                        <ABSinputTextVuex :prop="PI_paymentno" v-model="M_CB_AdvanceReceivedD.paymentno"  ref="ref_paymentno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_paymentdate" v-model="M_CB_AdvanceReceivedD.paymentdate"  ref="ref_paymentdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_AdvanceReceivedD.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_advancerealizationamt" v-model="M_CB_AdvanceReceivedD.advancerealizationamt"  ref="ref_advancerealizationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_advancereturnamt" v-model="M_CB_AdvanceReceivedD.advancereturnamt"  ref="ref_advancereturnamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_srnirno" v-model="M_CB_AdvanceReceivedD.srnirno"  ref="ref_srnirno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_srnirdate" v-model="M_CB_AdvanceReceivedD.srnirdate"  ref="ref_srnirdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_requestby" v-model="M_CB_AdvanceReceivedD.requestby"  ref="ref_requestby"/>
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
			Module:"CB",
            propList: {
                // initialWhere:"CurrencyCd = '" + this.ValKey + "'",
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_AdvanceReceivedD :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                srniradvancesequenceno: 0,
                descs: '',
                advanceexpecteddate: '',
                advancerequestamt: '',
                advancerealizationamt: '0',
                trxtype: '',
                modulecd: '',
                bankcd: '',
                paymentcd: '',
                advancereceiverpersonnelid: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                advancepaymentdate: '',
                advancepaymentby: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                paymentno: '',
                paymentdate: '',
                advancereturnamt: '0',
                advancereturnsequenceno: 0,
                srnirno: '',
                srnirdate: '',
                requestby: '',
                currencycd: ''
                    }
            ,
            PI_paymentno: { 
                cValidate :'', 
                cName: 'paymentno', 
                cLabel: 'Advance No', 
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
            PI_paymentdate: { 
                cValidate :'', 
                cName: 'paymentdate', 
                cLabel: 'Advance Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true,                 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: ' Description', 
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
            PI_advancerealizationamt: { 
                cValidate :'', 
                cName: 'advancerealizationamt', 
                cLabel: 'Advance Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_advancereturnamt: { 
                cValidate :'required', 
                cName: 'advancereturnamt', 
                cLabel: 'Advance Return Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
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
                cKey: true,                 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_requestby: { 
                cValidate :'', 
                cName: 'requestby', 
                cLabel: 'Request By', 
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
		
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
        },
        M_CheckboxChecked (data, status, index) {
            this.$store.commit('setDeleteStatus', false)
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
            this.M_CB_AdvanceReceivedD.currencycd = data.CurrencyCd
            this.M_CB_AdvanceReceivedD.advancereceiverpersonnelid = data.AdvanceReceiverPersonnelID
            this.M_CB_AdvanceReceivedD.paymentno = data.PaymentNo 
            // this.propList.initialWhere =" CurrencyCd = '" + data.CurrencyCd + "' "
            console.log(this.M_CB_AdvanceReceivedD)
            
            this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "','" + this.M_CB_AdvanceReceivedD.currencycd + "','" + this.M_CB_AdvanceReceivedD.advancereceiverpersonnelid + "','"+ this.M_CB_AdvanceReceivedD.paymentno +"'"

            this.FormToABSList().doGetList('','eb_getList')
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                PaymentNo: this.M_CB_AdvanceReceivedD.paymentno,
                SRnIRAdvanceSequenceNo: this.M_CB_AdvanceReceivedD.srniradvancesequenceno,
                AdvanceReturnSequenceNo: this.M_CB_AdvanceReceivedD.advancereturnsequenceno,
                AdvanceReturnAmt: this.M_CB_AdvanceReceivedD.advancereturnamt,
                UserEdit: this.getDataUser().UserId ,
                AdvanceReceiverPersonnelID: this.M_CB_AdvanceReceivedD.advancereceiverpersonnelid,
                CurrencyCd: this.M_CB_AdvanceReceivedD.currencycd                
            }
            console.log(param)
            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_AdvanceReceivedD = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                srniradvancesequenceno: 0,
                descs: '',
                advanceexpecteddate: '',
                advancerequestamt: '',
                advancerealizationamt: '0',
                trxtype: '',
                modulecd: '',
                bankcd: '',
                paymentcd: '',
                advancereceiverpersonnelid: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                advancepaymentdate: '',
                advancepaymentby: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                paymentno: '',
                paymentdate: '',
                advancereturnamt: '0',
                advancereturnsequenceno: 0,
                srnirno: '',
                srnirdate: '',
                requestby: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CB_AdvanceReceivedD.currencycd = data.CurrencyCd 



        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            this.M_CB_AdvanceReceivedD.currencycd = data.CurrencyCd 
        },
        M_Delete(dt){           

            //nothing
        },        
        getDataBy (record) {
            
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                paymentno: record.PaymentNo,
                srniradvancesequenceno: record.SRnIRAdvanceSequenceNo,
                advancereturnsequenceno: record.AdvanceReturnSequenceNo,
                advancereceiverpersonnelid: record.AdvanceReceiverPersonnelID,
                CurrencyCd: record.CurrencyCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CB_AdvanceReceivedD = {
                subportfoliocd: data.subportfoliocd,
                srniradvancesequenceno: data.srniradvancesequenceno,
                descs: data.descs,
                advanceexpecteddate: data.advanceexpecteddate,
                advancerequestamt: data.advancerequestamt,
                advancerealizationamt: this.isCurrency(data.advancerealizationamt, this.decimal),
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                bankcd: data.bankcd,
                paymentcd: data.paymentcd,
                advancereceiverpersonnelid: data.advancereceiverpersonnelid,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                issuedbank: data.issuedbank,
                chequeduedate: data.chequeduedate,
                advancepaymentdate: data.advancepaymentdate,
                advancepaymentby: data.advancepaymentby,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                paymentno: data.paymentno,
                paymentdate: data.paymentdate,
                advancereturnamt: data.advancereturnamt,
                advancereturnsequenceno: data.advancereturnsequenceno,
                srnirno: data.srnirno,
                srnirdate: data.srnirdate,
                requestby: data.requestby,
                currencycd: data.currencycd
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

