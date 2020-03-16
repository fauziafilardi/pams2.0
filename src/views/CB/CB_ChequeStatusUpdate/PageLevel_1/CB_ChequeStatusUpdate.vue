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
                                        <ABSinputTextVuex :prop="PI_chequeno" v-model="M_CB_ChequeStatusUpdate.chequeno"  ref="ref_chequeno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequeduedate" v-model="M_CB_ChequeStatusUpdate.chequeduedate"  ref="ref_chequeduedate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_ChequeStatusUpdate.issuedbank"  ref="ref_issuedbank"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_CB_ChequeStatusUpdate.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditorcd" v-model="M_CB_ChequeStatusUpdate.creditorcd"  ref="ref_creditorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_trxmode" v-model="M_CB_ChequeStatusUpdate.trxmode"  ref="ref_trxmode" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_CB_ChequeStatusUpdate.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_chequereferencedate" v-model="M_CB_ChequeStatusUpdate.chequereferencedate"  ref="ref_chequereferencedate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_ChequeStatusUpdate.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_ChequeStatusUpdate.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_ChequeStatusUpdate.bankcd" :label="M_CB_ChequeStatusUpdate.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chequebankinby" v-model="M_CB_ChequeStatusUpdate.chequebankinby"  ref="ref_chequebankinby"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_CB_ChequeStatusUpdate.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_chequeclearancedate" v-model="M_CB_ChequeStatusUpdate.chequeclearancedate"  ref="ref_chequeclearancedate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_CB_ChequeStatusUpdate.reasoncd" :label="M_CB_ChequeStatusUpdate.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_CB_ChequeStatusUpdate.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_ChequeStatusUpdate.remarks"  ref="ref_remarks" />
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
                initialWhere: "Status = 'T' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_ChequeStatusUpdate :{
                chequeno: '',
                chequebankindate: '',
                chequeduedate: '',
                debtorcd: '',
                creditorcd: '',
                trxmode: '',
                referenceno: '',
                chequereferencedate: '',
                currencycd: '',
                trxamt: '0',
                bankcd: '',
                chequebankinby: '',
                status: '',
                chequeclearancedate: '',
                reasoncd: '',
                reasondescs: '',
                remarks: '',
                issuedbank: '',
                bankname: '',
                reasondescription: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                debtorname: '',
                creditorname: '',
                lastupdatestamp: 0,
                banksequenceno: 0,
                timeedit: '',
                rowid: 0
                
                    }
                    
            ,
            
            PI_chequeno: { 
                cValidate :'', 
                cName: 'chequeno', 
                cLabel: 'Cheque No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequeduedate: { 
                cValidate :'max:10', 
                cName: 'chequeduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_issuedbank: { 
                cValidate :'', 
                cName: 'issuedbank', 
                cLabel: 'Issue Bank', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtorname: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_creditorcd: { 
                cValidate :'', 
                cName: 'creditorcd', 
                cLabel: 'Creditor Code', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_creditorname: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxmode: { 
                cLabel: 'Trans. Mode', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequereferencedate: { 
                cValidate :'max:10', 
                cName: 'chequereferencedate', 
                cLabel: 'Reference Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Amount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCBBank'    , 
                    ColumnDB: 'BankCd'   ,  
                    InitialWhere: ""   , 
                    ParamWhere: ''   
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'BankCd,ContactId' ,
            }, 
            PI_chequebankinby: { 
                cValidate :'max:50', 
                cName: 'chequebankinby', 
                cLabel: 'Bank In By', 
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
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Pending', value: 'T' },{ text: 'Clear', value: 'Y' },{ text: 'cancel', value: 'X' }], 
                cRadioDefaultOption: '', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chequeclearancedate: { 
                cValidate :'', 
                cName: 'chequeclearancedate', 
                cLabel: 'Clearance Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
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
                cValidate :'', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_ChequeStatusUpdate.bankcd = data.id
            this.M_CB_ChequeStatusUpdate.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_CB_ChequeStatusUpdate.reasoncd = data.id
            this.M_CB_ChequeStatusUpdate.reasoncdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{reasoncd}
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
        // if (this.M_CB_ChequeStatusUpdate.status == "T")
        //      { this.M_CB_ChequeStatusUpdate.chequeclearancedate = "null"
        //      this.M_CB_ChequeStatusUpdate.reasoncd = "null"
        //      this.M_CB_ChequeStatusUpdate.reasondescs = "" }
        // if (this.M_CB_ChequeStatusUpdate.status == "Y")
        //      { this.M_CB_ChequeStatusUpdate.reasoncd = "null"
        //      this.M_CB_ChequeStatusUpdate.reasondescs = "" }
        // if (this.M_CB_ChequeStatusUpdate.status == "X")
        //      { this.M_CB_ChequeStatusUpdate.chequeclearancedate = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                BankSequenceNo: this.M_CB_ChequeStatusUpdate.banksequenceno,
                BankCd: this.M_CB_ChequeStatusUpdate.bankcd == '' || this.M_CB_ChequeStatusUpdate.bankcd == null ? 'NULL' : this.M_CB_ChequeStatusUpdate.bankcd ,
                ChequeBankInBy: this.M_CB_ChequeStatusUpdate.chequebankinby,
                Status: this.M_CB_ChequeStatusUpdate.status,
                ClearBy: this.getDataUser().UserId,
                ChequeClearanceDate: this.M_CB_ChequeStatusUpdate.chequeclearancedate,
                ReasonCd: this.M_CB_ChequeStatusUpdate.reasoncd == '' || this.M_CB_ChequeStatusUpdate.reasoncd == null ? 'NULL' : this.M_CB_ChequeStatusUpdate.reasoncd ,
                ReasonDescs: this.M_CB_ChequeStatusUpdate.reasondescs,
                Remarks: this.M_CB_ChequeStatusUpdate.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_ChequeStatusUpdate.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })


        },
		M_ClearForm(){
            this.M_CB_ChequeStatusUpdate = {
                chequeno: '',
                chequebankindate: '',
                chequeduedate: '',
                debtorcd: '',
                creditorcd: '',
                trxmode: '',
                referenceno: '',
                chequereferencedate: '',
                currencycd: '',
                trxamt: '0',
                bankcd: '',
                chequebankinby: '',
                status: '',
                chequeclearancedate: '',
                reasoncd: '',
                reasondescs: '',
                remarks: '',
                issuedbank: '',
                bankname: '',
                reasondescription: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                debtorname: '',
                creditorname: '',
                lastupdatestamp: 0,
                banksequenceno: 0,
                timeedit: '',
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
                LineNo: this.$parent.data.PageOrder,
                banksequenceno: record.BankSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var trxmode = ""
                if(data.trxmode) {
                  if(data.trxmode == 'D') {
                    trxmode = "Debit"
                  }
                  else if(data.trxmode == 'C'){
                    trxmode = "Kredit"
                  }
                }
// console.log(data)
this.M_CB_ChequeStatusUpdate = {
                chequeno: data.chequeno,
                chequebankindate: data.chequebankindate,
                chequeduedate: data.chequeduedate,
                debtorcd: data.debtorcd,
                creditorcd: data.creditorcd,
                trxmode: trxmode,
                referenceno: data.referenceno,
                chequereferencedate: data.chequereferencedate,
                currencycd: data.currencycd,
                trxamt: this.isCurrency(data.trxamt),
                bankcd: data.bankcd,
                chequebankinby: data.chequebankinby,
                status: data.status,
                chequeclearancedate: data.chequeclearancedate,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs,
                remarks: data.remarks,
                issuedbank: data.issuedbank,
                bankname: data.bankname,
                reasondescription: data.reasondescription,
                userinput: data.userinput,
                useredit: data.useredit,
                debtorname: data.debtorname,
                creditorname: data.creditorname,
                lastupdatestamp: record.LastUpdateStamp,
                banksequenceno: record.BankSequenceNo,
                timeedit: data.timeedit,
                rowid: data.rowid
                    }

                this.M_CB_ChequeStatusUpdate.bankcdLabel = this.M_CB_ChequeStatusUpdate.bankcd != null && this.M_CB_ChequeStatusUpdate.bankcd != '' ? data.bankcd + this.separator + data.bankname :'' 
                this.M_CB_ChequeStatusUpdate.reasoncdLabel = this.M_CB_ChequeStatusUpdate.reasoncd != null && this.M_CB_ChequeStatusUpdate.reasoncd != '' ? data.reasoncd + this.separator + data.reasondescription :'' 
                this.PI_bankcd.dataLookUp.InitialWhere = "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "'  AND Currency = '" + this.M_CB_ChequeStatusUpdate.currencycd +  "'  AND Status='A'"


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

