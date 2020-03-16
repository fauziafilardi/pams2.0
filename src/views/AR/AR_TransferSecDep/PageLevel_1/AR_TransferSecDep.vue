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
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntransferdateChange" :prop="PI_transferdate" v-model="M_AR_TransferSecDep.transferdate"  ref="ref_transferdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndntransactiontypeChange" :prop="PI_dntransactiontype" :value="M_AR_TransferSecDep.dntransactiontype" :label="M_AR_TransferSecDep.dntransactiontypeLabel" ref="ref_dntransactiontype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaltransactiontypeChange" :prop="PI_altransactiontype" :value="M_AR_TransferSecDep.altransactiontype" :label="M_AR_TransferSecDep.altransactiontypeLabel" ref="ref_altransactiontype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndnaccountcdChange" :prop="PI_dnaccountcd" :value="M_AR_TransferSecDep.dnaccountcd" :label="M_AR_TransferSecDep.dnaccountcdLabel" ref="ref_dnaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliotoChange" :prop="PI_subportfolioto" :value="M_AR_TransferSecDep.subportfolioto" :label="M_AR_TransferSecDep.subportfoliotoLabel" ref="ref_subportfolioto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_AR_TransferSecDep.bankcd" :label="M_AR_TransferSecDep.bankcdLabel" ref="ref_bankcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncbtrxtypeChange" :prop="PI_cbtrxtype" :value="M_AR_TransferSecDep.cbtrxtype" :label="M_AR_TransferSecDep.cbtrxtypeLabel" ref="ref_cbtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngltrxtypeChange" :prop="PI_gltrxtype" :value="M_AR_TransferSecDep.gltrxtype" :label="M_AR_TransferSecDep.gltrxtypeLabel" ref="ref_gltrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebitaccountcdChange" :prop="PI_debitaccountcd" :value="M_AR_TransferSecDep.debitaccountcd" :label="M_AR_TransferSecDep.debitaccountcdLabel" ref="ref_debitaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncreditaccountcdChange" :prop="PI_creditaccountcd" :value="M_AR_TransferSecDep.creditaccountcd" :label="M_AR_TransferSecDep.creditaccountcdLabel" ref="ref_creditaccountcd"/>
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
		FormType: "Process",
		Module:"AR",
            propList: {
                initialWhere: "SubPortfolioCd ='"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_TransferSecDep :{
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                transferdate: '',
                subportfolioto: '',
                dntransactiontype: '',
                dnaccountcd: '',
                altransactiontype: '',
                bankcd: '',
                cbtrxtype: '',
                gltrxtype: '',
                debitaccountcd: '',
                creditaccountcd: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_transferdate: { 
                cValidate :'required', 
                cName: 'transferdate', 
                cLabel: 'Transfer Date ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_dntransactiontype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'D'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'dntransactiontype', 
                cLabel: 'Debit Note Transaction Type', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_altransactiontype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass = 'M'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'altransactiontype', 
                cLabel: 'Allocation Transaction Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_dnaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'dnaccountcd', 
                cLabel: 'Debit Note Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_subportfolioto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolio'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfolioto', 
                cLabel: 'Copy Security Deposit to Subportfolio', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cDisplayColumn: 'SubPortFolioCd,Name' ,
            }, 
            PI_bankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupBankCode'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortFolioCd='' AND STATUS = 'A'", 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bankcd', 
                cLabel: 'Bank Code', 
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
                cDisplayColumn: 'BankCd,Name' ,
            }, 
            PI_cbtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetTrxType2'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd ='' AND ModuleCd = 'CB' AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'cbtrxtype', 
                cLabel: 'Payment Transaction Type ', 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_gltrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "ModuleCd = 'GL'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'gltrxtype', 
                cLabel: 'GL Transaction Type', 
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
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_debitaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'debitaccountcd', 
                cLabel: 'Subportfolio Target Debit Account Code', 
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
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 
            PI_creditaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'creditaccountcd', 
                cLabel: 'Subportfolio Target Credit Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cDisplayColumn: 'AccountCd,Description_1' ,
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        OntransferdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{transferdate}
            }
        })
        this.$forceUpdate()
        },
        OndntransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.dntransactiontype = data.id
            this.M_AR_TransferSecDep.dntransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{dntransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OnaltransactiontypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.altransactiontype = data.id
            this.M_AR_TransferSecDep.altransactiontypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{altransactiontype}
            }
        })
        this.$forceUpdate()
        },
        OndnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.dnaccountcd = data.id
            this.M_AR_TransferSecDep.dnaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{dnaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliotoChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.subportfolioto = data.id
            this.M_AR_TransferSecDep.subportfoliotoLabel = data.label

            this.PI_bankcd.dataLookUp.InitialWhere = "SubPortFolioCd='"+ data.SubPortFolioCd +"' AND STATUS = 'A'"
            this.PI_cbtrxtype.dataLookUp.InitialWhere = "SubPortfolioCd ='"+ data.SubPortFolioCd +"' AND ModuleCd = 'CB' AND STATUS = 'A'"
            if (this.inputStatus != "VIEW") {
//{subportfolioto}
            }
        })
        this.$forceUpdate()
        },
        OnbankcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.bankcd = data.id
            this.M_AR_TransferSecDep.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bankcd}
            }
        })
        this.$forceUpdate()
        },
        OncbtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.cbtrxtype = data.id
            this.M_AR_TransferSecDep.cbtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{cbtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OngltrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.gltrxtype = data.id
            this.M_AR_TransferSecDep.gltrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{gltrxtype}
            }
        })
        this.$forceUpdate()
        },
        OndebitaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.debitaccountcd = data.id
            this.M_AR_TransferSecDep.debitaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debitaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OncreditaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_TransferSecDep.creditaccountcd = data.id
            this.M_AR_TransferSecDep.creditaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{creditaccountcd}
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
            var param1 = {
                _Method_: 'POST',
                _LineNo_: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                TransferDate: this.M_AR_TransferSecDep.transferdate == '' || this.M_AR_TransferSecDep.transferdate == null ? 'NULL' : this.M_AR_TransferSecDep.transferdate,
                SubportfolioTo: this.M_AR_TransferSecDep.subportfolioto == '' || this.M_AR_TransferSecDep.subportfolioto == null ? 'NULL' : this.M_AR_TransferSecDep.subportfolioto,
                DNTransactionType: this.M_AR_TransferSecDep.dntransactiontype == '' || this.M_AR_TransferSecDep.dntransactiontype == null ? 'NULL' : this.M_AR_TransferSecDep.dntransactiontype,
                ALTransactionType: this.M_AR_TransferSecDep.altransactiontype == '' || this.M_AR_TransferSecDep.altransactiontype == null ? 'NULL' : this.M_AR_TransferSecDep.altransactiontype,
                DNAccountCd: this.M_AR_TransferSecDep.dnaccountcd == '' || this.M_AR_TransferSecDep.dnaccountcd == null ? 'NULL' : this.M_AR_TransferSecDep.dnaccountcd,
                CBTrxType: this.M_AR_TransferSecDep.cbtrxtype == '' || this.M_AR_TransferSecDep.cbtrxtype == null ? 'NULL' : this.M_AR_TransferSecDep.cbtrxtype,
                GLTrxType: this.M_AR_TransferSecDep.gltrxtype == '' || this.M_AR_TransferSecDep.gltrxtype == null ? 'NULL' : this.M_AR_TransferSecDep.gltrxtype,
                BankCd: this.M_AR_TransferSecDep.bankcd == '' || this.M_AR_TransferSecDep.bankcd == null ? 'NULL' : this.M_AR_TransferSecDep.bankcd,
                DebitAccountCd: this.M_AR_TransferSecDep.debitaccountcd == '' || this.M_AR_TransferSecDep.debitaccountcd == null ? 'NULL' : this.M_AR_TransferSecDep.debitaccountcd,
                CreditAccountCd: this.M_AR_TransferSecDep.creditaccountcd == '' || this.M_AR_TransferSecDep.creditaccountcd == null ? 'NULL' : this.M_AR_TransferSecDep.creditaccountcd,
                Status: 'N',                
                UserInput: this.getDataUser().UserId,
                SequenceNo_Output: ''
            }

            var dataSecDeptH = []
            var data = this.FormToABSList().getRowSelected()
            
            for (let index = 0; index < data.length; index++) {
                // const element = array[index];
                console.log(data[index])
                dataSecDeptH.push({
                    _Method_: 'POST2',
                    _LineNo_: this.$parent.data.PageOrder,
                    SequenceNo: 'SequenceNo',
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    CreditNo: data[index].CreditNo,
                    DebtorCd: data[index].DebtorCd,                    
                    UserInput: this.getDataUser().UserId,
                    _Message_: 'Save Successfully with sequenceno'
                })                
            }

            var dataToPost = [{
                A_Insert: param1,
                B_Looping_Insert: dataSecDeptH
            }]

            var paramToPost = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataToPost
            }

            this.postJSONMulti( this.getUrlProsesDataPostMulti(), paramToPost )
            .then(response => {
                if (response == null) return
                // this.$parent.resultInsert("Data Has Been Save Successfully")

                this.alertSuccess('Save Successfully with Sequenceno')
                
                this.$store.commit('setFormType','Process')
                this.M_ClearForm()
                this.$store.commit('setStatus', 'view')
                this.$store.commit('setStatus', 'new')
                this.$store.commit('setListDisable', false)
                this.getToolbar().ProcessPS()
                // this.M_ClearForm()
                this.FormToABSList().doGetList('','eb_getList')
            })
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
            this.M_AR_TransferSecDep = {
                sequenceno: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                transferdate: '',
                subportfolioto: '',
                dntransactiontype: '',
                dnaccountcd: '',
                altransactiontype: '',
                bankcd: '',
                cbtrxtype: '',
                gltrxtype: '',
                debitaccountcd: '',
                creditaccountcd: '',
                status: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
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
        },        
        getDataBy (record) {
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder

//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 // response from API
//                 if(response == null) return
                
//                 var data = response.Data[0]
// this.M_AR_TransferSecDep = {
//                 sequenceno: data.sequenceno,
//                 subportfoliocd: data.subportfoliocd,
//                 transferdate: data.transferdate,
//                 subportfolioto: data.subportfolioto,
//                 dntransactiontype: data.dntransactiontype,
//                 dnaccountcd: data.dnaccountcd,
//                 altransactiontype: data.altransactiontype,
//                 bankcd: data.bankcd,
//                 cbtrxtype: data.cbtrxtype,
//                 gltrxtype: data.gltrxtype,
//                 debitaccountcd: data.debitaccountcd,
//                 creditaccountcd: data.creditaccountcd,
//                 status: data.status,
//                 userinput: data.userinput,
//                 useredit: data.useredit,
//                 timeinput: data.timeinput,
//                 timeedit: data.timeedit,
//                 lastupdatestamp: record.LastUpdateStamp,
//                 rowid: data.rowid
//                     }
                 

//                 this.M_AR_TransferSecDep.dntransactiontypeLabel = this.M_AR_TransferSecDep.dntransactiontype != null && this.M_AR_TransferSecDep.dntransactiontype != '' ? data.dntransactiontype + this.separator  :'' 
//                 this.M_AR_TransferSecDep.altransactiontypeLabel = this.M_AR_TransferSecDep.altransactiontype != null && this.M_AR_TransferSecDep.altransactiontype != '' ? data.altransactiontype + this.separator  :'' 
//                 this.M_AR_TransferSecDep.dnaccountcdLabel = this.M_AR_TransferSecDep.dnaccountcd != null && this.M_AR_TransferSecDep.dnaccountcd != '' ? data.dnaccountcd + this.separator  :'' 
//                 this.M_AR_TransferSecDep.subportfoliotoLabel = this.M_AR_TransferSecDep.subportfolioto != null && this.M_AR_TransferSecDep.subportfolioto != '' ? data.subportfolioto + this.separator  :'' 
//                 this.M_AR_TransferSecDep.bankcdLabel = this.M_AR_TransferSecDep.bankcd != null && this.M_AR_TransferSecDep.bankcd != '' ? data.bankcd + this.separator  :'' 
//                 this.M_AR_TransferSecDep.cbtrxtypeLabel = this.M_AR_TransferSecDep.cbtrxtype != null && this.M_AR_TransferSecDep.cbtrxtype != '' ? data.cbtrxtype + this.separator  :'' 
//                 this.M_AR_TransferSecDep.gltrxtypeLabel = this.M_AR_TransferSecDep.gltrxtype != null && this.M_AR_TransferSecDep.gltrxtype != '' ? data.gltrxtype + this.separator  :'' 
//                 this.M_AR_TransferSecDep.debitaccountcdLabel = this.M_AR_TransferSecDep.debitaccountcd != null && this.M_AR_TransferSecDep.debitaccountcd != '' ? data.debitaccountcd + this.separator  :'' 
//                 this.M_AR_TransferSecDep.creditaccountcdLabel = this.M_AR_TransferSecDep.creditaccountcd != null && this.M_AR_TransferSecDep.creditaccountcd != '' ? data.creditaccountcd + this.separator  :'' 
         

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

//             })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','Process')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.$store.commit('setFormType','Process')
        this.$store.commit('setStatus', 'new')
        this.$store.commit('setListDisable', false)
        this.$store.commit('setLevel', this.PageLevel)
        this.$store.commit('setTab', this.TabIndex)
        this.getToolbar().ProcessPS()
        this.hideSideBarMenu()
        // this.toList().doGetList('','eb_getList')

        // this.hideSideBarMenu()
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

