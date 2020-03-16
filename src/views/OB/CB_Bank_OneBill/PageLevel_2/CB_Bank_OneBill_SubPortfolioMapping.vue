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
                                        <ABSInputSelectList @change="OnsubportfoliocdChange" :prop="PI_subportfoliocd" :value="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd" :label="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocdLabel" ref="ref_subportfoliocd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd" :label="M_CB_Bank_OneBill_SubPortfolioMapping.paymentcdLabel" ref="ref_paymentcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliobankcdChange" :prop="PI_subportfoliobankcd" :value="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd" :label="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcdLabel" ref="ref_subportfoliobankcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_banktransfercode" v-model="M_CB_Bank_OneBill_SubPortfolioMapping.banktransfercode"  ref="ref_banktransfercode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliocbtrxtypeChange" :prop="PI_subportfoliocbtrxtype" :value="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype" :label="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtypeLabel" ref="ref_subportfoliocbtrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OntransfertypeChange" :prop="PI_transfertype" v-model="M_CB_Bank_OneBill_SubPortfolioMapping.transfertype"  ref="ref_transfertype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfolioortrxtypeChange" :prop="PI_subportfolioortrxtype" :value="M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype" :label="M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtypeLabel" ref="ref_subportfolioortrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_citizenship" v-model="M_CB_Bank_OneBill_SubPortfolioMapping.citizenship"  ref="ref_citizenship"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfoliodeposittrxtypeChange" :prop="PI_subportfoliodeposittrxtype" :value="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype" :label="M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtypeLabel" ref="ref_subportfoliodeposittrxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_resident" v-model="M_CB_Bank_OneBill_SubPortfolioMapping.resident"  ref="ref_resident"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6"></b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_beneficiaryaddress" v-model="M_CB_Bank_OneBill_SubPortfolioMapping.beneficiaryaddress"  ref="ref_beneficiaryaddress"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6"></b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_citycode" v-model="M_CB_Bank_OneBill_SubPortfolioMapping.citycode"  ref="ref_citycode"/>
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
			Module:"OB",
            propList: {
                initialWhere:"SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CB_Bank_OneBill_SubPortfolioMapping :{
                sequenceno: 0,
                subportfoliocdob: '',
                bankcd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                subportfoliobankcd: '',
                subportfoliocbtrxtype: '',
                subportfolioortrxtype: '',
                subportfoliodeposittrxtype: '',
                paymentcd: '',
                banktransfercode: '',
                transfertype: 'P',
                citizenship: '',
                resident: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                beneficiaryaddress: '',
                citycode: '',
                rowid: 0
                    }
            ,
            PI_subportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolio'    , 
                    ColumnDB: 'SubPortFolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfoliocd', 
                cLabel: 'Subportfolio ', 
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
                cMasterUrl: 'CM/CM_SubPortfolio' ,
                cDisplayColumn: 'SubPortFolioCd,SubPortFolioClassCd' ,
            }, 
            PI_paymentcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMPaymentType'    , 
                    ColumnDB: 'PaymentCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'paymentcd', 
                cLabel: 'Payment Type ', 
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
                cMasterUrl: 'CM/CM_PaymentType' ,
                cDisplayColumn: 'PaymentCd,Descs' ,
            }, 
            PI_subportfoliobankcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUpBankCdCB'    , 
                    ColumnDB: 'BankCd'   , 
                    InitialWhere: "SubPortfolioCd = '' AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfoliobankcd', 
                cLabel: 'Subportfolio Bank ', 
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
                cMasterUrl: 'CB/CB_Bank' ,
                cDisplayColumn: 'BankCd,Name' ,
            }, 
            PI_banktransfercode: { 
                cValidate :'required|max:10', 
                cName: 'banktransfercode', 
                cLabel: 'Bank Transfer Code ', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliocbtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetSubPortfolioCBTrxType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '' AND ModuleCd = 'CB' AND TrxClass IN ('M','T') AND STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfoliocbtrxtype', 
                cLabel: 'Subportfolio CB Trans Type ', 
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
                cMasterUrl: 'CB/CB_SubPortofolioTransType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_transfertype: { 
                cValidate :'', 
                cName: 'transfertype', 
                cId: 'rdbtransfertype', 
                cRadioOptions: [{ text: 'PB', value: 'P' },{ text: 'SKN', value: 'S' },{ text: 'RTGS', value: 'R' },], 
                cRadioDefaultOption: '', 
                cLabel:'Transfer Type', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfolioortrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetSubPortfolioCBTrxType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '' AND ModuleCd = 'AR' AND TrxClass ='M'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfolioortrxtype', 
                cLabel: 'Subportfolio OR Trans Type ', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_citizenship: { 
                cValidate :'max:10', 
                cName: 'citizenship', 
                cLabel: 'Citizenship', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliodeposittrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetSubPortfolioCBTrxType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '' AND ModuleCd = 'AR' AND TrxClass ='S'"   ,  
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfoliodeposittrxtype', 
                cLabel: 'Subportfolio Deposit Trans Type ', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_resident: { 
                cValidate :'max:10', 
                cName: 'resident', 
                cLabel: 'Resident', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_beneficiaryaddress: { 
                cValidate :'max:50', 
                cName: 'beneficiaryaddress', 
                cLabel: 'Beneficiary Address', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_citycode: { 
                cValidate :'max:50', 
                cName: 'citycode', 
                cLabel: 'City Code', 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OnsubportfoliocdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd = data.id
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.PI_subportfoliobankcd.dataLookUp.InitialWhere = "SubPortfolioCd = '"+ data.id +"' AND STATUS = 'A'"
                this.PI_subportfoliocbtrxtype.dataLookUp.InitialWhere = "SubPortfolioCd = '"+ data.id +"' AND ModuleCd = 'CB' AND TrxClass IN ('M','T') AND STATUS = 'A'"
                this.PI_subportfolioortrxtype.dataLookUp.InitialWhere = "SubPortfolioCd = '"+ data.id +"' AND ModuleCd = 'AR' AND TrxClass ='M'"
                this.PI_subportfoliodeposittrxtype.dataLookUp.InitialWhere = "SubPortfolioCd = '"+ data.id +"' AND ModuleCd = 'AR' AND TrxClass ='S'"
            }
        })
        this.$forceUpdate()
        },
        OnpaymentcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd = data.id
            this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliobankcdChange (data) {
        this.$nextTick(() => {
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd = data.id
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliobankcd}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliocbtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype = data.id
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliocbtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OntransfertypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data != 'P'){
                    this.PI_citizenship.cProtect = false
                    this.PI_resident.cProtect = false
                    this.PI_beneficiaryaddress.cProtect = false
                    this.PI_citycode.cProtect = false
                    this.PI_citizenship.cValidate = 'required'
                    this.PI_resident.cValidate = 'required'
                    this.PI_beneficiaryaddress.cValidate = 'required'
                    this.PI_citycode.cValidate = 'required'
                }else{
                    this.PI_citizenship.cProtect = true
                    this.PI_resident.cProtect = true
                    this.PI_beneficiaryaddress.cProtect = true
                    this.PI_citycode.cProtect = true
                    this.PI_citizenship.cValidate = ''
                    this.PI_resident.cValidate = ''
                    this.PI_beneficiaryaddress.cValidate = ''
                    this.PI_citycode.cValidate = ''
                }
            }
        })
        this.$forceUpdate()
        },
        OnsubportfolioortrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype = data.id
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfolioortrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliodeposittrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype = data.id
            this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliodeposittrxtype}
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
            this.M_CB_Bank_OneBill_SubPortfolioMapping.contactid = data.ContactID 
            this.M_CB_Bank_OneBill_SubPortfolioMapping.bankcd = data.BankCd 
            this.propList.initialWhere ="BankCd = '"+ data.BankCd +"'"
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd ,
                SubPortfolioBankCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd ,
                SubPortfolioCBTrxType: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype ,
                SubPortfolioORTrxType: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype ,
                SubPortfolioDepositTrxType: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype ,
                PaymentCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd ,
                BankTransferCode: this.M_CB_Bank_OneBill_SubPortfolioMapping.banktransfercode,
                TransferType: this.M_CB_Bank_OneBill_SubPortfolioMapping.transfertype,
                Citizenship: this.M_CB_Bank_OneBill_SubPortfolioMapping.citizenship,
                Resident: this.M_CB_Bank_OneBill_SubPortfolioMapping.resident,
                UserInput: this.getDataUser().UserId ,
                BankCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.bankcd,
                BeneficiaryAddress: this.M_CB_Bank_OneBill_SubPortfolioMapping.beneficiaryaddress,
                CityCode: this.M_CB_Bank_OneBill_SubPortfolioMapping.citycode                
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
                SequenceNo: this.M_CB_Bank_OneBill_SubPortfolioMapping.sequenceno,
                SubPortfolioCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd ,
                SubPortfolioBankCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd ,
                SubPortfolioCBTrxType: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype ,
                SubPortfolioORTrxType: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype ,
                SubPortfolioDepositTrxType: this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype ,
                PaymentCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd == '' || this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd == null ? 'NULL' : this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd ,
                BankTransferCode: this.M_CB_Bank_OneBill_SubPortfolioMapping.banktransfercode,
                TransferType: this.M_CB_Bank_OneBill_SubPortfolioMapping.transfertype,
                Citizenship: this.M_CB_Bank_OneBill_SubPortfolioMapping.citizenship,
                Resident: this.M_CB_Bank_OneBill_SubPortfolioMapping.resident,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CB_Bank_OneBill_SubPortfolioMapping.lastupdatestamp,
                BankCd: this.M_CB_Bank_OneBill_SubPortfolioMapping.bankcd,
                BeneficiaryAddress: this.M_CB_Bank_OneBill_SubPortfolioMapping.beneficiaryaddress,
                CityCode: this.M_CB_Bank_OneBill_SubPortfolioMapping.citycode                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_CB_Bank_OneBill_SubPortfolioMapping = {
                sequenceno: 0,
                subportfoliocdob: '',
                bankcd: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                subportfoliobankcd: '',
                subportfoliocbtrxtype: '',
                subportfolioortrxtype: '',
                subportfoliodeposittrxtype: '',
                paymentcd: '',
                banktransfercode: '',
                transfertype: 'P',
                citizenship: '',
                resident: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                beneficiaryaddress: '',
                citycode: '',
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CB_Bank_OneBill_SubPortfolioMapping.contactid = data.ContactID
            this.M_CB_Bank_OneBill_SubPortfolioMapping.bankcd = data.BankCd 

            this.$refs.ref_subportfoliocd.focus()



        },
        M_Edit(){
            this.$refs.ref_subportfoliocd.focus()
        },
        M_Delete(dt){           

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          SequenceNo: value.SequenceNo,
          ContactId: value.ContactID,
          BankCd: value.BankCd,
          LastUpdateStamp: value.LastUpdateStamp,
          _Message_: ''
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
                lastupdatestamp: record.LastUpdateStamp,
                bankcd: record.BankCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CB_Bank_OneBill_SubPortfolioMapping = {
                sequenceno: data.sequenceno,
                subportfoliocdob: data.subportfoliocdob,
                bankcd: data.bankcd,
                subportfoliocd: data.subportfoliocd,
                subportfoliobankcd: data.subportfoliobankcd,
                subportfoliocbtrxtype: data.subportfoliocbtrxtype,
                subportfolioortrxtype: data.subportfolioortrxtype,
                subportfoliodeposittrxtype: data.subportfoliodeposittrxtype,
                paymentcd: data.paymentcd,
                banktransfercode: data.banktransfercode,
                transfertype: data.transfertype,
                citizenship: data.citizenship,
                resident: data.resident,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                beneficiaryaddress: data.beneficiaryaddress,
                citycode: data.citycode,
                rowid: data.rowid
                    }
                 

                this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocdLabel = this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd != null && this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocd != '' ? data.subportfoliocd + this.separator  :'' 
                this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcdLabel = this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd != null && this.M_CB_Bank_OneBill_SubPortfolioMapping.paymentcd != '' ? data.paymentcd + this.separator  :'' 
                this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcdLabel = this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd != null && this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliobankcd != '' ? data.subportfoliobankcd + this.separator  :'' 
                this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtypeLabel = this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype != null && this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliocbtrxtype != '' ? data.subportfoliocbtrxtype + this.separator  :'' 
                this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtypeLabel = this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype != null && this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfolioortrxtype != '' ? data.subportfolioortrxtype + this.separator  :'' 
                this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtypeLabel = this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype != null && this.M_CB_Bank_OneBill_SubPortfolioMapping.subportfoliodeposittrxtype != '' ? data.subportfoliodeposittrxtype + this.separator  :'' 
  

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

