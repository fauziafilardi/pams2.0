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
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ContractSubLeaseBillingAssessment.trxtype" :label="M_TN_ContractSubLeaseBillingAssessment.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex  @input="OntotalareaChange" :prop="PI_totalarea" v-model="M_TN_ContractSubLeaseBillingAssessment.totalarea"  ref="ref_totalarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ContractSubLeaseBillingAssessment.descs"  ref="ref_descs"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_ContractSubLeaseBillingAssessment.billingrate"  ref="ref_billingrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_ContractSubLeaseBillingAssessment.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_ContractSubLeaseBillingAssessment.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_ContractSubLeaseBillingAssessment.credittermscd" :label="M_TN_ContractSubLeaseBillingAssessment.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnaddresscdChange" :prop="PI_addresscd" :value="M_TN_ContractSubLeaseBillingAssessment.addresscd" :label="M_TN_ContractSubLeaseBillingAssessment.addresscdLabel" ref="ref_addresscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_ContractSubLeaseBillingAssessment.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ContractSubLeaseBillingAssessment.currencycd" :label="M_TN_ContractSubLeaseBillingAssessment.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractSubLeaseBillingAssessment.remarks"  ref="ref_remarks" />
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
                initialWhere:"BillingType = 'I' AND  SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND SubleaseAssignmentNo = '"+ this.ValKey +"' AND ApplicationNo = '" + this.ValKey + "' AND TrxType IN ( SELECT TrxType FROM TN_TransactionTypeMapping WHERE TenancyChargeType='I' AND SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "')",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractSubLeaseBillingAssessment :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                trxdescs: '',
                descs: '',
                assigntype: 'S',
                billingdate: this.getToday(),
                credittermscd: '',
                creditdescs: '',
                dueday: 0,
                billingduedate: this.getToday(),
                currencycd: '',
                currencydescs: '',
                totalarea: '0',
                billingrate: '0',
                billingamt: '0',
                addresscd: '',
                billingsequenceno: 0,
                subleaseassignmentno: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                address1: '',
                subleasebillingsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TrxType'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "TenancyChargeType = 'I' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
            PI_totalarea: { 
                cValidate :'required|max:22', 
                cName: 'totalarea', 
                cLabel: 'Total Area ', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingrate: { 
                cValidate :'required|max:22', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingdate: { 
                cValidate :'required|max:20', 
                cName: 'billingdate', 
                cLabel: 'Billing Date ', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_billingamt: { 
                cValidate :'required|max:22', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount ', 
                cLabelSize: 4, 
                cOrder:9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCreditTerms'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms ', 
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
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_addresscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_CMContactAddress'    , 
                    ColumnDB: 'AddressCd'   , 
                    InitialWhere: "1=0"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'addresscd', 
                cLabel: 'Billing Address ', 
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
                cDisplayColumn: 'AddressCd,Address1' ,
            }, 
            PI_billingduedate: { 
                cValidate :'required', 
                cName: 'billingduedate', 
                cLabel: 'Due Date ', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder: 11, 
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
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency ', 
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
                cDisplayColumn: 'CurrencyCd,Descs' ,
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OntotalareaChange (data) {
        this.$nextTick(() => {
            
        })
        this.$forceUpdate()
        },
        OnbillingrateChange (data) {
        this.$nextTick(() => {
            var billingrt = this.M_TN_ContractSubLeaseBillingAssessment.billingrate
            var toarea = this.M_TN_ContractSubLeaseBillingAssessment.totalarea

            
            if (this.inputStatus != "VIEW") {
                this.M_TN_ContractSubLeaseBillingAssessment.billingamt = toarea * billingrt
            }
            
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseBillingAssessment.trxtype = data.id
            this.M_TN_ContractSubLeaseBillingAssessment.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                 if (data && data != '') {
                    if (this.M_TN_ContractSubLeaseBillingAssessment.dueday && this.M_TN_ContractSubLeaseBillingAssessment.dueday != '') {
                        this.M_TN_ContractSubLeaseBillingAssessment.billingduedate = this.dateAdd2( 'd', data, this.M_TN_ContractSubLeaseBillingAssessment.dueday )
                    }
                }
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseBillingAssessment.credittermscd = data.id
            this.M_TN_ContractSubLeaseBillingAssessment.credittermscdLabel = data.id + ' | ' +data.label
            this.M_TN_ContractSubLeaseBillingAssessment.dueday = data.DueDay
            if (this.inputStatus != "VIEW") {
                if (this.M_TN_ContractSubLeaseBillingAssessment.billingdate != '' ){
                    this.M_TN_ContractSubLeaseBillingAssessment.billingduedate = this.dateAdd2('D', this.M_TN_ContractSubLeaseBillingAssessment.billingdate, data.DueDay)    

                }
            }
        })
        this.$forceUpdate()
        },
        OnaddresscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseBillingAssessment.addresscd = data.id
            this.M_TN_ContractSubLeaseBillingAssessment.addresscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{addresscd}
            }
        })
        this.$forceUpdate()
        },
        OnbillingduedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingduedate}
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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractSubLeaseBillingAssessment.currencycd = data.id
            this.M_TN_ContractSubLeaseBillingAssessment.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
            console.log(data)
            this.M_TN_ContractSubLeaseBillingAssessment.subleaseassignmentno = data.SubleaseNo 
            this.propList.initialWhere ="BillingType = 'I' AND  SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "' AND SubleaseAssignmentNo = '" + data.SubleaseNo + "' AND ApplicationNo = '" + data.ApplicationNo + "' AND TrxType IN ( SELECT TrxType FROM TN_TransactionTypeMapping WHERE TenancyChargeType='I' AND SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "') "
        
            this.PI_addresscd.dataLookUp.InitialWhere = "BillingStatus = 'Y' And  SubportfoliCd ='" +this.getDataUser().SubPortfolioCd+ "' AND SubleaseAssignmentNo ='" + data.SubleaseNo + "'"
            
            if (
                    (data.Status == 'New')
                ) {
                    this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                    
                }
                else {
                    this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AssignType: 'S',
                SubleaseAssignmentNo: this.M_TN_ContractSubLeaseBillingAssessment.subleaseassignmentno,
                TrxType: this.M_TN_ContractSubLeaseBillingAssessment.trxtype == '' || this.M_TN_ContractSubLeaseBillingAssessment.trxtype == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.trxtype ,
                Descs: this.M_TN_ContractSubLeaseBillingAssessment.descs,
                BillingDate: this.M_TN_ContractSubLeaseBillingAssessment.billingdate == '' || this.M_TN_ContractSubLeaseBillingAssessment.billingdate == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.billingdate ,
                CreditTermsCd: this.M_TN_ContractSubLeaseBillingAssessment.credittermscd == '' || this.M_TN_ContractSubLeaseBillingAssessment.credittermscd == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.credittermscd ,
                BillingDueDate: this.M_TN_ContractSubLeaseBillingAssessment.billingduedate == '' || this.M_TN_ContractSubLeaseBillingAssessment.billingduedate == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.billingduedate ,
                CurrencyCd: this.M_TN_ContractSubLeaseBillingAssessment.currencycd == '' || this.M_TN_ContractSubLeaseBillingAssessment.currencycd == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.currencycd ,
                TotalArea: this.M_TN_ContractSubLeaseBillingAssessment.totalarea ? this.replaceAllString(this.M_TN_ContractSubLeaseBillingAssessment.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_ContractSubLeaseBillingAssessment.billingrate ? this.replaceAllString(this.M_TN_ContractSubLeaseBillingAssessment.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_ContractSubLeaseBillingAssessment.billingamt ? this.replaceAllString(this.M_TN_ContractSubLeaseBillingAssessment.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_ContractSubLeaseBillingAssessment.addresscd == '' || this.M_TN_ContractSubLeaseBillingAssessment.addresscd == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.addresscd ,
                Remarks: this.M_TN_ContractSubLeaseBillingAssessment.remarks,
                AssignType: this.M_TN_ContractSubLeaseBillingAssessment.assigntype,
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                AssignType: 'S',
                SubleaseAssignmentNo: this.M_TN_ContractSubLeaseBillingAssessment.subleaseassignmentno,
                BillingSequenceNo: this.M_TN_ContractSubLeaseBillingAssessment.billingsequenceno,
                TrxType: this.M_TN_ContractSubLeaseBillingAssessment.trxtype == '' || this.M_TN_ContractSubLeaseBillingAssessment.trxtype == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.trxtype ,
                Descs: this.M_TN_ContractSubLeaseBillingAssessment.descs,
                BillingDate: this.M_TN_ContractSubLeaseBillingAssessment.billingdate == '' || this.M_TN_ContractSubLeaseBillingAssessment.billingdate == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.billingdate ,
                CreditTermsCd: this.M_TN_ContractSubLeaseBillingAssessment.credittermscd == '' || this.M_TN_ContractSubLeaseBillingAssessment.credittermscd == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.credittermscd ,
                BillingDueDate: this.M_TN_ContractSubLeaseBillingAssessment.billingduedate == '' || this.M_TN_ContractSubLeaseBillingAssessment.billingduedate == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.billingduedate ,
                CurrencyCd: this.M_TN_ContractSubLeaseBillingAssessment.currencycd == '' || this.M_TN_ContractSubLeaseBillingAssessment.currencycd == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.currencycd ,
                TotalArea: this.M_TN_ContractSubLeaseBillingAssessment.totalarea ? this.replaceAllString(this.M_TN_ContractSubLeaseBillingAssessment.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_ContractSubLeaseBillingAssessment.billingrate ? this.replaceAllString(this.M_TN_ContractSubLeaseBillingAssessment.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_ContractSubLeaseBillingAssessment.billingamt ? this.replaceAllString(this.M_TN_ContractSubLeaseBillingAssessment.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_ContractSubLeaseBillingAssessment.addresscd == '' || this.M_TN_ContractSubLeaseBillingAssessment.addresscd == null ? 'NULL' : this.M_TN_ContractSubLeaseBillingAssessment.addresscd ,
                Remarks: this.M_TN_ContractSubLeaseBillingAssessment.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractSubLeaseBillingAssessment.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractSubLeaseBillingAssessment = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                assigntype: 'S',
                trxdescs: '',
                descs: '',
                billingdate: this.getToday(),
                credittermscd: '',
                creditdescs: '',
                billingduedate: this.getToday(),
                currencycd: '',
                currencydescs: '',
                dueday: 0,
                totalarea: '0',
                billingrate: '0',
                billingamt: '0',
                addresscd: '',
                subleaseassignmentno: '',
                remarks: '',
                billingsequenceno: 0,
                userinput: '',
                useredit: this.getDataUser().UserId,
                address1: '',
                subleasebillingsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractSubLeaseBillingAssessment.subleaseassignmentno = data.SubleaseNo 

            this.$refs.ref_trxtype.focus()

        },
        M_Edit(){
            this.$refs.ref_trxtype.focus()
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BillingSequenceNo: value.BillingSequenceNo,
                    SubleaseAssignmentNo: value.SubleaseAssignmentNo,
                    LastUpdateStamp: value.LastUpdateStamp,


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

                this.$parent.resultPost()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                subleaseassignmentno: record.SubleaseAssignmentNo,
                billingsequenceno: record.SubLeaseBillingSequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractSubLeaseBillingAssessment = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: data.trxtype,
                trxdescs: data.trxdescs,
                descs: data.descs,
                billingdate: data.billingdate,
                credittermscd: data.credittermscd,
                creditdescs: data.creditdescs,
                billingduedate: data.billingduedate,
                currencycd: data.currencycd,
                currencydescs: data.currencydescs,
                totalarea: this.isCurrency(data.totalarea, this.decimal),
                billingrate: this.isCurrency(data.billingrate, this.decimal),
                billingamt: this.isCurrency(data.billingamt, this.decimal),
                addresscd: data.addresscd,
                subleaseassignmentno: data.subleaseassignmentno,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                address1: data.address1,
                billingsequenceno: record.SubLeaseBillingSequenceNo,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_ContractSubLeaseBillingAssessment.trxtypeLabel = this.M_TN_ContractSubLeaseBillingAssessment.trxtype != null && this.M_TN_ContractSubLeaseBillingAssessment.trxtype != '' ? data.trxtype + this.separator + data.trxdescs :'' 
                this.M_TN_ContractSubLeaseBillingAssessment.credittermscdLabel = this.M_TN_ContractSubLeaseBillingAssessment.credittermscd != null && this.M_TN_ContractSubLeaseBillingAssessment.credittermscd != '' ? data.credittermscd + this.separator + data.creditdescs :'' 
                this.M_TN_ContractSubLeaseBillingAssessment.addresscdLabel = this.M_TN_ContractSubLeaseBillingAssessment.addresscd != null && this.M_TN_ContractSubLeaseBillingAssessment.addresscd != '' ? data.addresscd + this.separator + data.address1 :'' 
                this.M_TN_ContractSubLeaseBillingAssessment.currencycdLabel = this.M_TN_ContractSubLeaseBillingAssessment.currencycd != null && this.M_TN_ContractSubLeaseBillingAssessment.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
  

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

