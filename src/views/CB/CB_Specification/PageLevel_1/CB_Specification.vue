<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnforexrevaluationtrxtypeChange" :prop="PI_forexrevaluationtrxtype" :value="M_CB_Specification.forexrevaluationtrxtype" :label="M_CB_Specification.forexrevaluationtrxtypeLabel" ref="ref_forexrevaluationtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrevaluationrunningcdChange" :prop="PI_revaluationrunningcd" :value="M_CB_Specification.revaluationrunningcd" :label="M_CB_Specification.revaluationrunningcdLabel" ref="ref_revaluationrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbatchcontrolChange" :prop="PI_batchcontrol" v-model="M_CB_Specification.batchcontrol"  ref="ref_batchcontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbatchnumberingChange" :prop="PI_batchnumbering" v-model="M_CB_Specification.batchnumbering"  ref="ref_batchnumbering" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnreceiptchequecontrolChange" :prop="PI_receiptchequecontrol" v-model="M_CB_Specification.receiptchequecontrol"  ref="ref_receiptchequecontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpaymentchequecontrolChange" :prop="PI_paymentchequecontrol" v-model="M_CB_Specification.paymentchequecontrol"  ref="ref_paymentchequecontrol" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnparunningcdChange" :prop="PI_parunningcd" :value="M_CB_Specification.parunningcd" :label="M_CB_Specification.parunningcdLabel" ref="ref_parunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndepositcancellationaccountcdChange" :prop="PI_depositcancellationaccountcd" :value="M_CB_Specification.depositcancellationaccountcd" :label="M_CB_Specification.depositcancellationaccountcdLabel" ref="ref_depositcancellationaccountcd" />
                                      </b-col>
                                    </b-row>    
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndefdepcanceltrxtypeChange" :prop="PI_defdepcanceltrxtype" :value="M_CB_Specification.defdepcanceltrxtype" :label="M_CB_Specification.defdepcanceltrxtypeLabel"  ref="ref_defdepcanceltrxtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_Specification.remarks"  ref="ref_remarks" />
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
            FormType: "Form",
			Module:"CB",	
            IEBy: {Input: '', Edit: ''},

            M_CB_Specification :{
                forexrevaluationtrxtype: '',
                forexrevaluationtrxtypedescs: '',
                revaluationrunningcd: '',
                revaluationrunningcddescs: '',
                depositcancellationaccountcd: '',
                depositcancellationaccountcddescs: '',
                batchcontrol: 'N',
                batchnumbering: 'A',
                receiptchequecontrol: 'Y',
                paymentchequecontrol: 'Y',
                userinput: '',
                useredit: this.getDataUser().UserId,
                parunningcd: '',
                parunningcddescs: '',
                remarks: '',
                lastupdatestamp: 0,
                defdepcanceltrxtype: '',
                defdepcanceltrxtypedescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0
                    }
            ,					
            PI_forexrevaluationtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL' AND RunningCd IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'forexrevaluationtrxtype', 
                cLabel: 'Forex Revaluation Trans. Type', 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_revaluationrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'CB')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'revaluationrunningcd', 
                cLabel: 'Revaluation Running Code', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_batchcontrol: { 
                cValidate :'', 
                cName: 'batchcontrol', 
                cId: 'rdbbatchcontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Batch Control', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_batchnumbering: { 
                cValidate :'', 
                cName: 'batchnumbering', 
                cId: 'rdbbatchnumbering', 
                cRadioOptions: [{ text: 'Manual', value: 'M' }, { text: 'Semi Auto', value: 'S' }, { text: 'Auto', value: 'A' }], 
                cRadioDefaultOption: 'A', 
                cLabel:'Batch Numbering ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_receiptchequecontrol: { 
                cValidate :'', 
                cName: 'receiptchequecontrol', 
                cId: 'rdbreceiptchequecontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Receipt Cheque Control', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_paymentchequecontrol: { 
                cValidate :'', 
                cName: 'paymentchequecontrol', 
                cId: 'rdbpaymentchequecontrol', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'Y', 
                cLabel:'Payment Cheque Control', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_parunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: "(ModuleCd is null OR ModuleCd = 'CB')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'parunningcd', 
                cLabel: 'Payment Advice Running Code', 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_depositcancellationaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'depositcancellationaccountcd', 
                cLabel: 'Deposit Cancellation Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' 
            }, 
            PI_defdepcanceltrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd='GL' and RunningCd is not null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defdepcanceltrxtype', 
                cLabel: 'Default Deposit Cancellation Income Trans. Type', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'TrxType,Descs'
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks  ', 
                cLabelSize: 4, 
                cOrder:10, 
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
    }
  },
    methods: {		
        OnforexrevaluationtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_Specification.forexrevaluationtrxtype = data.id
            this.M_CB_Specification.forexrevaluationtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{forexrevaluationtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnrevaluationrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Specification.revaluationrunningcd = data.id
            this.M_CB_Specification.revaluationrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{revaluationrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnbatchcontrolChange (data) {
        this.$nextTick(() => {
            if (data == "Y")
             { 
                this.M_CB_Specification.batchnumbering = "M" 
                this.PI_batchnumbering.cProtect = true
             }else{
                 this.PI_batchnumbering.cProtect = false
             }
            if (this.inputStatus != "VIEW") {
        

            }
        })
        this.$forceUpdate()
        },
        OnbatchnumberingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{batchnumbering}
            }
        })
        this.$forceUpdate()
        },
        OnreceiptchequecontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{receiptchequecontrol}
            }
        })
        this.$forceUpdate()
        },
        OnpaymentchequecontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{paymentchequecontrol}
            }
        })
        this.$forceUpdate()
        },
        OnparunningcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Specification.parunningcd = data.id
            this.M_CB_Specification.parunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parunningcd}
            }
        })
        this.$forceUpdate()
        },
        OndepositcancellationaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Specification.depositcancellationaccountcd = data.id
            this.M_CB_Specification.depositcancellationaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parunningcd}
            }
        })
        this.$forceUpdate()
        },
        OndefdepcanceltrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_Specification.defdepcanceltrxtype = data.id
            this.M_CB_Specification.defdepcanceltrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{parunningcd}
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
           this.getToolbar().statusFunction[1].disabled = false
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
        M_Save() {
            if (this.getToolbar().FormStatus == 'NEW'){
                this.M_Insert()
            }else{
                this.M_Update()
            }
           
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ForexRevaluationTrxType: this.M_CB_Specification.forexrevaluationtrxtype == '' || this.M_CB_Specification.forexrevaluationtrxtype == null ? 'NULL' : this.M_CB_Specification.forexrevaluationtrxtype ,
                RevaluationRunningCd: this.M_CB_Specification.revaluationrunningcd == '' || this.M_CB_Specification.revaluationrunningcd == null ? 'NULL' : this.M_CB_Specification.revaluationrunningcd ,
                ReceiptChequeControl: this.M_CB_Specification.receiptchequecontrol,
                PaymentChequeControl: this.M_CB_Specification.paymentchequecontrol,
                BatchControl: this.M_CB_Specification.batchcontrol,
                BatchNumbering: this.M_CB_Specification.batchnumbering,
                PARunningCd: this.M_CB_Specification.parunningcd == '' || this.M_CB_Specification.parunningcd == null ? 'NULL' : this.M_CB_Specification.parunningcd ,
                DepositCancellationAccountCd: this.M_CB_Specification.depositcancellationaccountcd,
                Remarks: this.M_CB_Specification.remarks,
                UserInput: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_Specification.lastupdatestamp,
                DefDepCancelTrxType: this.M_CB_Specification.defdepcanceltrxtype                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ForexRevaluationTrxType: this.M_CB_Specification.forexrevaluationtrxtype == '' || this.M_CB_Specification.forexrevaluationtrxtype == null ? 'NULL' : this.M_CB_Specification.forexrevaluationtrxtype ,
                RevaluationRunningCd: this.M_CB_Specification.revaluationrunningcd == '' || this.M_CB_Specification.revaluationrunningcd == null ? 'NULL' : this.M_CB_Specification.revaluationrunningcd ,
                ReceiptChequeControl: this.M_CB_Specification.receiptchequecontrol,
                PaymentChequeControl: this.M_CB_Specification.paymentchequecontrol,
                BatchControl: this.M_CB_Specification.batchcontrol,
                BatchNumbering: this.M_CB_Specification.batchnumbering,
                PARunningCd: this.M_CB_Specification.parunningcd == '' || this.M_CB_Specification.parunningcd == null ? 'NULL' : this.M_CB_Specification.parunningcd ,
                DepositCancellationAccountCd: this.M_CB_Specification.depositcancellationaccountcd,
                Remarks: this.M_CB_Specification.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_Specification.lastupdatestamp,
                DefDepCancelTrxType: this.M_CB_Specification.defdepcanceltrxtype                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'view')

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_CB_Specification = {
                forexrevaluationtrxtype: '',
                forexrevaluationtrxtypedescs: '',
                revaluationrunningcd: '',
                revaluationrunningcddescs: '',
                depositcancellationaccountcd: '',
                depositcancellationaccountcddescs: '',
                batchcontrol: 'N',
                batchnumbering: 'A',
                receiptchequecontrol: 'Y',
                paymentchequecontrol: 'Y',
                userinput: '',
                useredit: this.getDataUser().UserId,
                parunningcd: '',
                parunningcddescs: '',
                remarks: '',
                lastupdatestamp: 0,
                defdepcanceltrxtype: '',
                defdepcanceltrxtypedescs: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                timeedit: '',
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_forexrevaluationtrxtype.focus()
        },
        M_Edit(){
            this.$refs.ref_forexrevaluationtrxtype.focus()
        },
        M_Delete(dt){       

            //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                if(response.Data.length > 0){
                 // this.$store.commit('setStatus', 'EDIT')
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()

                
            this.M_CB_Specification = {
                forexrevaluationtrxtype: data.forexrevaluationtrxtype,
                forexrevaluationtrxtypedescs: data.forexrevaluationtrxtypedescs,
                revaluationrunningcd: data.revaluationrunningcd,
                revaluationrunningcddescs: data.revaluationrunningcddescs,
                depositcancellationaccountcd: data.depositcancellationaccountcd,
                depositcancellationaccountcdLabel: data.depositcancellationaccountcd + " | " + data.depositcancellationaccountcddescs,
                batchcontrol: data.batchcontrol,
                batchnumbering: data.batchnumbering,
                receiptchequecontrol: data.receiptchequecontrol,
                paymentchequecontrol: data.paymentchequecontrol,
                userinput: data.userinput,
                useredit: data.useredit,
                parunningcd: data.parunningcd,
                parunningcddescs: data.parunningcddescs,
                remarks: data.remarks,
                lastupdatestamp: data.lastupdatestamp,
                defdepcanceltrxtype: data.defdepcanceltrxtype,
                defdepcanceltrxtypeLabel: data.defdepcanceltrxtype + " | " + data.defdepcanceltrxtypedescs,
                subportfoliocd: data.subportfoliocd,
                timeedit: data.timeedit,
                rowid: data.rowid
                    }
                 

                this.M_CB_Specification.forexrevaluationtrxtypeLabel = this.M_CB_Specification.forexrevaluationtrxtype != null && this.M_CB_Specification.forexrevaluationtrxtype != '' ? data.forexrevaluationtrxtype + this.separator + data.forexrevaluationtrxtypedescs :'' 
                this.M_CB_Specification.revaluationrunningcdLabel = this.M_CB_Specification.revaluationrunningcd != null && this.M_CB_Specification.revaluationrunningcd != '' ? data.revaluationrunningcd + this.separator + data.revaluationrunningcddescs :'' 
                this.M_CB_Specification.parunningcdLabel = this.M_CB_Specification.parunningcd != null && this.M_CB_Specification.parunningcd != '' ? data.parunningcd + this.separator + data.parunningcddescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                }
            else {
                    // this.$store.commit('setStatus', 'NEW')
                    this.getToolbar().FormStatus = 'NEW'
                    this.getToolbar().ProcessPS()
                }
            })
        },
		setToolbarButton () {            
        }
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.getDataBy()
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
