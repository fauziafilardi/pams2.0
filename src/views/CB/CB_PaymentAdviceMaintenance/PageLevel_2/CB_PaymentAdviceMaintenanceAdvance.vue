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
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_status" v-model="M_CB_PaymentAdviceMaintenanceAdvance.status"  ref="ref_status"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_PaymentAdviceMaintenanceAdvance.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_advanceexpecteddate" v-model="M_CB_PaymentAdviceMaintenanceAdvance.advanceexpecteddate"  ref="ref_advanceexpecteddate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_advancerequestamt" v-model="M_CB_PaymentAdviceMaintenanceAdvance.advancerequestamt"  ref="ref_advancerequestamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_PaymentAdviceMaintenanceAdvance.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Additional Information
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_PaymentAdviceMaintenanceAdvance.trxtype" :label="M_CB_PaymentAdviceMaintenanceAdvance.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_PaymentAdviceMaintenanceAdvance.bankcd" :label="M_CB_PaymentAdviceMaintenanceAdvance.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_PaymentAdviceMaintenanceAdvance.paymentcd" :label="M_CB_PaymentAdviceMaintenanceAdvance.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnadvancereceiverpersonnelidChange" :prop="PI_advancereceiverpersonnelid" v-model="M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid" :label="M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelidLabel" ref="ref_advancereceiverpersonnelid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_PaymentAdviceMaintenanceAdvance.chequereferenceno"  ref="ref_chequereferenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequereferencedate" v-model="M_CB_PaymentAdviceMaintenanceAdvance.chequereferencedate"  ref="ref_chequereferencedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_PaymentAdviceMaintenanceAdvance.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_PaymentAdviceMaintenanceAdvance.chequeduedate"  ref="ref_chequeduedate" />
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
                initialWhere:"SRnIRNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_PaymentAdviceMaintenanceAdvance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                srniradvancesequenceno: 0,
                srnirno: '',
                descs: '',
                advanceexpecteddate: '',
                advancerequestamt: '0',
                advancerealizationamt: '',
                trxtype: '',
                modulecd: '',
                bankcd: '',
                paymentcd: '',
                advancereceiverpersonnelid: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                paymentno: '',
                advancepaymentdate: '',
                advancepaymentby: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                statusdescs: '',
                trxtypedescs: '',
                paymenttypedescs: '',
                bankname: '',
                advancereceiverpersonnelname: '',
                currencycd: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cLabel: ' Status', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: ' Description', 
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
            PI_advanceexpecteddate: { 
                cValidate :'', 
                cName: 'advanceexpecteddate', 
                cLabel: 'Expected Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true,                 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_advancerequestamt: { 
                cValidate :'', 
                cName: 'advancerequestamt', 
                cLabel: 'Advance Request Amount', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
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
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'CB' AND TrxClass = 'A' AND Status='A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'trxtype', 
                cLabel: 'Trans Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
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
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "" , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'bankcd', 
                cLabel: 'Bank Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_paymentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'PaymentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cDisplayColumn: 'PaymentCd,Descs' ,
            }, 
            PI_advancereceiverpersonnelid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupAdvancePersonnel'    , 
                    ColumnDB: 'AdvanceReceiverPersonnelID'   , 
                    InitialWhere: "Status='A' AND SubPortfolioCd='"+ this.getDataUser().SubPortfolioCd +"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'paymentvoucherreceiverid', 
                cLabel: 'Receiver ID ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cDisplayColumn: 'AdvanceReceiverPersonnelID,PersonnelName' ,
            }, 
            PI_chequereferenceno: { 
                cValidate :'', 
                cName: 'chequereferenceno', 
                cLabel: 'Cheque / Ref. No', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequereferencedate: { 
                cValidate :'', 
                cName: 'chequereferencedate', 
                cLabel: 'Cheque / Ref Date ', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_issuedbank: { 
                cValidate :'', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequeduedate: { 
                cValidate :'', 
                cName: 'chequeduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cVisible:  true, 
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
        OnadvancereceiverpersonnelidChange (data){
            this.$nextTick(() => {
                this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid = data.id
                this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelidLabel = data.label
                if (this.inputStatus != "VIEW") {

                }
            })
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype = data.id
            this.M_CB_PaymentAdviceMaintenanceAdvance.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_PaymentAdviceMaintenanceAdvance.bankcd = data.id
            this.M_CB_PaymentAdviceMaintenanceAdvance.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcd = data.id
            this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{paymentcd}
            }
        })
        this.$forceUpdate()
        },
        OnchequeduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chequeduedate}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
          //  this.getToolbar().statusFunction[0].disabled = true
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            // console.log(data)
            this.M_CB_PaymentAdviceMaintenanceAdvance.srnirno = data.SRnIRNo 
            this.propList.initialWhere =" SRnIRNo = '" + data.SRnIRNo + "' "

            this.PI_bankcd.dataLookUp.InitialWhere = "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND STATUS = 'A' AND BankCurrencyCd = '"+ data.CurrencyCd+"' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                Descs: this.M_CB_PaymentAdviceMaintenanceAdvance.descs,
                AdvanceExpectedDate: this.M_CB_PaymentAdviceMaintenanceAdvance.advanceexpecteddate,
                AdvanceRequestAmt: this.M_CB_PaymentAdviceMaintenanceAdvance.advancerequestamt ? this.replaceAllString(this.M_CB_PaymentAdviceMaintenanceAdvance.advancerequestamt,',','','number') : 0 ,
                UserInput: this.getDataUser().UserId ,
                Remarks: this.getDataUser().UserId,
                SRnIRNo: this.M_CB_PaymentAdviceMaintenanceAdvance.srnirno                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
        this.FnValidateTrxType().then(dt29 => 
        { if (dt29 != null) { 
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                SRnIRAdvanceSequenceNo: this.M_CB_PaymentAdviceMaintenanceAdvance.srniradvancesequenceno,
                UserEdit: this.getDataUser().UserId ,
                Remarks: this.M_CB_PaymentAdviceMaintenanceAdvance.remarks,
                TrxType: this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype == null ? 'NULL' : this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype ,
                ModuleCd: this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype == null ? 'NULL' : this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype ,
                PaymentCd: this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcd == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcd == null ? 'NULL' : this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcd ,
                BankCd: this.M_CB_PaymentAdviceMaintenanceAdvance.bankcd == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.bankcd == null ? 'NULL' : this.M_CB_PaymentAdviceMaintenanceAdvance.bankcd ,
                AdvanceReceiverPersonnelID: this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid == null ? 'NULL' :this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid,
                ChequeReferenceNo: this.M_CB_PaymentAdviceMaintenanceAdvance.chequereferenceno,
                ChequeReferenceDate: this.M_CB_PaymentAdviceMaintenanceAdvance.chequereferencedate == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.chequereferencedate == null ? 'NULL' : this.M_CB_PaymentAdviceMaintenanceAdvance.chequereferencedate ,
                ChequeDueDate: this.M_CB_PaymentAdviceMaintenanceAdvance.chequeduedate == '' || this.M_CB_PaymentAdviceMaintenanceAdvance.chequeduedate == null ? 'NULL' : this.M_CB_PaymentAdviceMaintenanceAdvance.chequeduedate ,
                IssuedBank: this.M_CB_PaymentAdviceMaintenanceAdvance.issuedbank,
                LastUpdateStamp: this.M_CB_PaymentAdviceMaintenanceAdvance.lastupdatestamp,
                SRnIRNo: this.M_CB_PaymentAdviceMaintenanceAdvance.srnirno                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
      } })

        },
		M_ClearForm(){
            this.M_CB_PaymentAdviceMaintenanceAdvance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                srniradvancesequenceno: 0,
                srnirno: '',
                descs: '',
                advanceexpecteddate: '',
                advancerequestamt: '0',
                advancerealizationamt: '',
                trxtype: '',
                modulecd: '',
                bankcd: '',
                paymentcd: '',
                advancereceiverpersonnelid: '',
                chequereferenceno: '',
                chequereferencedate: '',
                issuedbank: '',
                chequeduedate: '',
                paymentno: '',
                advancepaymentdate: '',
                advancepaymentby: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                statusdescs: '',
                trxtypedescs: '',
                paymenttypedescs: '',
                bankname: '',
                advancereceiverpersonnelname: '',
                currencycd: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CB_PaymentAdviceMaintenanceAdvance.srnirno = data.SRnIRNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()
          var dataDelete = []          

          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              SRnIRNo: value.SRnIRNo,
              SRnIRAdvanceSequenceNo: value.SRnIRAdvanceSequenceNo,
              LastUpdateStamp: value.LastUpdateStamp,
              _Message_: ""
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
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                srniradvancesequenceno: record.SRnIRAdvanceSequenceNo,
                srnirno: record.SRnIRNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CB_PaymentAdviceMaintenanceAdvance = {
                subportfoliocd: data.subportfoliocd,
                srniradvancesequenceno: data.srniradvancesequenceno,
                srnirno: data.srnirno,
                descs: data.descs,
                advanceexpecteddate: data.advanceexpecteddate,
                advancerequestamt: this.isCurrency(data.advancerequestamt, this.decimal),
                advancerealizationamt: data.advancerealizationamt,
                trxtype: data.trxtype,
                modulecd: data.modulecd,
                bankcd: data.bankcd,
                paymentcd: data.paymentcd,
                advancereceiverpersonnelid: data.advancereceiverpersonnelid,
                chequereferenceno: data.chequereferenceno,
                chequereferencedate: data.chequereferencedate,
                issuedbank: data.issuedbank,
                chequeduedate: data.chequeduedate,
                paymentno: data.paymentno,
                advancepaymentdate: data.advancepaymentdate,
                advancepaymentby: data.advancepaymentby,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                statusdescs: data.statusdescs,
                trxtypedescs: data.trxtypedescs,
                paymenttypedescs: data.paymenttypedescs,
                bankname: data.bankname,
                advancereceiverpersonnelname: data.advancereceiverpersonnelname,
                currencycd: data.currencycd,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CB_PaymentAdviceMaintenanceAdvance.trxtypeLabel = this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype != null && this.M_CB_PaymentAdviceMaintenanceAdvance.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs :'' 
                this.M_CB_PaymentAdviceMaintenanceAdvance.bankcdLabel = this.M_CB_PaymentAdviceMaintenanceAdvance.bankcd != null && this.M_CB_PaymentAdviceMaintenanceAdvance.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcdLabel = this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcd != null && this.M_CB_PaymentAdviceMaintenanceAdvance.paymentcd != '' ? data.paymentcd + this.separator + data.paymenttypedescs :'' 
                this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelidLabel = this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid != null && this.M_CB_PaymentAdviceMaintenanceAdvance.advancereceiverpersonnelid != '' ? data.advancereceiverpersonnelid + this.separator + data.advancereceiverpersonnelname :'' 

                if(data.statusdescs == 'Taken' || data.status == 'Y'){
                   this.getToolbar().statusFunction[1].disabled = true
                   this.getToolbar().statusFunction[2].disabled = true
                }
                else if(data.statusdescs == 'Pending' || data.status == 'N'){
                   this.getToolbar().statusFunction[1].disabled = false
                   this.getToolbar().statusFunction[2].disabled = false
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

