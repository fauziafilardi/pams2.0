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
                                <b-col md="6" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_ContractBillingAssignment.trxtype" :label="M_TN_ContractBillingAssignment.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ContractBillingAssignment.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_ContractBillingAssignment.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_ContractBillingAssignment.credittermscd" :label="M_TN_ContractBillingAssignment.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnbillingduedateChange" :prop="PI_billingduedate" v-model="M_TN_ContractBillingAssignment.billingduedate"  ref="ref_billingduedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ContractBillingAssignment.currencycd" :label="M_TN_ContractBillingAssignment.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right"> <!-- table open -->
                                    <b-row>
                                        <b-col  md="12">
                                            <ABSinputTextVuex @input="OntotalareaChange" :prop="PI_totalarea" v-model="M_TN_ContractBillingAssignment.totalarea"  ref="ref_totalarea"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="12">
                                            <ABSinputTextVuex @input="OnbillingrateChange" :prop="PI_billingrate" v-model="M_TN_ContractBillingAssignment.billingrate"  ref="ref_billingrate"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="12">
                                            <ABSinputTextVuex :prop="PI_billingamt" v-model="M_TN_ContractBillingAssignment.billingamt"  ref="ref_billingamt"/>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col  md="12">
                                            <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractBillingAssignment.remarks"  ref="ref_remarks" />
                                        </b-col>
                                    </b-row>
                                </b-col>
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
                initialWhere:"SubleaseAssignmentNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractBillingAssignment :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                trxdescs: '',
                descs: '',
                billingdate: this.momentDate(new Date()),
                credittermscd: '',
                creditdescs: '',
                billingduedate: this.momentDate(new Date()),
                currencycd: '',
                currencydescs: '',
                totalarea: '',
                billingrate: '',
                billingamt: '',
                addresscd: '',
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
                    LookUpCd: 'GetLookupTrxTypeMapping'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "TenancyChargeType = 'J' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  ,
                    SourceField: "TrxType,Descs,TenancyChargeType=ChargeDescs,TimeEdit",
                    DisplayLookUp: "TrxType,Descs"
                        }, 
                cValidate :'', 
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
            PI_billingdate: { 
                cValidate :'', 
                cName: 'billingdate', 
                cLabel: 'Billing Date', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_credittermscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetCreditTermsCd'    , 
                    ColumnDB: 'CreditTermsCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'credittermscd', 
                cLabel: 'Credit Terms', 
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
            PI_billingduedate: {
                cValidate :'', 
                cName: 'billingduedate', 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
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
            PI_totalarea: { 
                cValidate :'max:22', 
                cName: 'totalarea', 
                cLabel: 'Total Area', 
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
            PI_billingrate: { 
                cValidate :'max:22', 
                cName: 'billingrate', 
                cLabel: 'Billing Rate', 
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
            PI_billingamt: { 
                cValidate :'max:22', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresscd: { 
                cValidate :'max:22', 
                cName: 'addresscd', 
                cLabel: 'Billing Address', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:11, 
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
                cFormPageNo: this.data.PageOrder,
				cProtect: false
            },
            ContractData: [],
            DueDay: 0
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
    },
    GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
    },
    GetDataBy2(){
		return this.$store.getters.GetPage2GetDataBy
	}
  },
    methods: {
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBillingAssignment.trxtype = data.id
            this.M_TN_ContractBillingAssignment.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                // this.M_TN_ContractBillingAssignment.descs = data.Descs
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                .then(dt => {
                  if (dt.length == 0) return
                  var datas = dt[0]
                  // console.log(datas)
                  this.M_TN_ContractBillingAssignment.descs = datas.TrxTypeDescs
                  this.M_TN_ContractBillingAssignment.currencycd = datas.CurrencyCd
                  this.M_TN_ContractBillingAssignment.currencycdLabel = datas.CurrencyCd
                  this.M_TN_ContractBillingAssignment.credittermscd = datas.CreditTermsCd
                  this.M_TN_ContractBillingAssignment.credittermscdLabel = datas.CreditTermsCd

                //   var paramGetChargeType = {
                //     OptionFunctionCd: "GetChargeType",
                //     ModuleCd: "TN",
                //     TrxType: data.id
                //   }

                //   this.FnDynamicFunction(paramGetChargeType)
                //   .then(ress => {
                //     if (ress == null) return
                //     if (ress.length < 1) {
                //       return
                //     }
                //     var datas2 = ress[0]
                //     this.M_TN_ContractBilling2.billingtype = datas2.TenancyChargeType
                //     this.M_TN_ContractBilling2.billingtypedesc = datas2.ChargeTypeDescs
                //   })

                  var CreditTermsCd = {id: datas.CreditTermsCd, label: datas.CreditTermsCd}
                  this.OncredittermscdChange(CreditTermsCd)
                })
            }
        })
        this.$forceUpdate()
        },
        OntotalareaChange (data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              var billrate = this.M_TN_ContractBillingAssignment.billingrate && this.M_TN_ContractBillingAssignment.billingrate != '' ? this.M_TN_ContractBillingAssignment.billingrate : 0
              var billamt = this.replaceAllString(data, ',', '', 'number') * this.replaceAllString(billrate, ',', '', 'number')
              this.M_TN_ContractBillingAssignment.billingamt = this.isCurrency(billamt, this.decimal)
            }
          })
          this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (this.DueDay) {
                    this.M_TN_ContractBillingAssignment.billingduedate = this.dateAdd2('d', data, this.DueDay)
                }
            }
        })
        this.$forceUpdate()
        },
        OnbillingrateChange (data) {
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              var totalarea = this.M_TN_ContractBillingAssignment.totalarea && this.M_TN_ContractBillingAssignment.totalarea != '' ? this.M_TN_ContractBillingAssignment.totalarea : 0
              var billamt = this.replaceAllString(totalarea, ',', '', 'number') * this.replaceAllString(data, ',', '', 'number')
              this.M_TN_ContractBillingAssignment.billingamt = this.isCurrency(billamt, this.decimal)
            }
          })
          this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBillingAssignment.credittermscd = data.id
            this.M_TN_ContractBillingAssignment.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetCreditTermsData(data.id)
                .then(ress => {
                    if (ress == null || ress.length < 1) return
                    var dta = ress[0]
                    this.DueDay = dta.Dueday
                    if (this.M_TN_ContractBillingAssignment.billingdate && this.M_TN_ContractBillingAssignment.billingdate !== "") {
                        this.M_TN_ContractBillingAssignment.billingduedate = this.dateAdd2('d', this.M_TN_ContractBillingAssignment.billingdate, dta.Dueday)
                    }
                })
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
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractBillingAssignment.currencycd = data.id
            this.M_TN_ContractBillingAssignment.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
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
            if (data.Status == 'New') {
                this.FormType = "List"
                this.$store.commit('setFormType','List')
                this.getToolbar().ProcessPS()
            }
            else {
                this.FormType = "View"
                this.$store.commit('setFormType','View')
                this.getToolbar().ProcessPS()
            }

			this.getContractData(data.ApplicationNo)
            this.M_TN_ContractBillingAssignment.subleaseassignmentno = data.SubleaseAssignmentNo
            this.propList.initialWhere = " BillingType = 'J' AND  SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + data.ApplicationNo + "' AND SubLeaseAssignmentNo = '" + data.SubleaseAssignmentNo + "' AND TrxType IN ( SELECT TrxType FROM TN_TransactionTypeMapping WHERE TenancyChargeType='J' AND SubPortfolioCd='" + this.getDataUser().SubPortfolioCd + "') "
            
            this.FormToABSList().doGetList('','eb_getList')
        },
        M_Insert() {
            if (this.GetDataBy1.subleaseassignmentaddresscd && this.GetDataBy1.subleaseassignmentaddresscd != '') {
                this.M_TN_ContractBillingAssignment.addresscd = this.GetDataBy1.subleaseassignmentaddresscd
            }
            else {
                this.alertError('Please set customer address first in header.')
                return
            }

            // this.M_TN_ContractBillingAssignment.addresscd = this.GetDataBy1.subleaseassignmentaddresscd
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SubleaseAssignmentNo: this.M_TN_ContractBillingAssignment.subleaseassignmentno,
                TrxType: this.M_TN_ContractBillingAssignment.trxtype == '' || this.M_TN_ContractBillingAssignment.trxtype == null ? 'NULL' : this.M_TN_ContractBillingAssignment.trxtype ,
                Descs: this.M_TN_ContractBillingAssignment.descs,
                BillingDate: this.M_TN_ContractBillingAssignment.billingdate == '' || this.M_TN_ContractBillingAssignment.billingdate == null ? 'NULL' : this.M_TN_ContractBillingAssignment.billingdate ,
                CreditTermsCd: this.M_TN_ContractBillingAssignment.credittermscd == '' || this.M_TN_ContractBillingAssignment.credittermscd == null ? 'NULL' : this.M_TN_ContractBillingAssignment.credittermscd ,
                BillingDueDate: this.M_TN_ContractBillingAssignment.billingduedate == '' || this.M_TN_ContractBillingAssignment.billingduedate == null ? 'NULL' : this.M_TN_ContractBillingAssignment.billingduedate ,
                CurrencyCd: this.M_TN_ContractBillingAssignment.currencycd == '' || this.M_TN_ContractBillingAssignment.currencycd == null ? '' : this.M_TN_ContractBillingAssignment.currencycd ,
                TotalArea: this.M_TN_ContractBillingAssignment.totalarea ? this.replaceAllString(this.M_TN_ContractBillingAssignment.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_ContractBillingAssignment.billingrate ? this.replaceAllString(this.M_TN_ContractBillingAssignment.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_ContractBillingAssignment.billingamt ? this.replaceAllString(this.M_TN_ContractBillingAssignment.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_ContractBillingAssignment.addresscd,
                Remarks: this.M_TN_ContractBillingAssignment.remarks,
                AssignType: 'A',
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            let dataByIdHeader = this.$store.getters.GetPage1GetDataBy

            if (dataByIdHeader.subleaseassignmentaddresscd && dataByIdHeader.subleaseassignmentaddresscd != '') {
                this.M_TN_ContractBillingAssignment.addresscd = dataByIdHeader.subleaseassignmentaddresscd
            }
            else {
                this.alertError('Please set customer address first in header.')
                return
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SubleaseAssignmentNo: this.M_TN_ContractBillingAssignment.subleaseassignmentno,
                BillingSequenceNo: this.M_TN_ContractBillingAssignment.subleasebillingsequenceno,
                TrxType: this.M_TN_ContractBillingAssignment.trxtype == '' || this.M_TN_ContractBillingAssignment.trxtype == null ? 'NULL' : this.M_TN_ContractBillingAssignment.trxtype ,
                Descs: this.M_TN_ContractBillingAssignment.descs,
                BillingDate: this.M_TN_ContractBillingAssignment.billingdate == '' || this.M_TN_ContractBillingAssignment.billingdate == null ? 'NULL' : this.M_TN_ContractBillingAssignment.billingdate ,
                CreditTermsCd: this.M_TN_ContractBillingAssignment.credittermscd == '' || this.M_TN_ContractBillingAssignment.credittermscd == null ? 'NULL' : this.M_TN_ContractBillingAssignment.credittermscd ,
                BillingDueDate: this.M_TN_ContractBillingAssignment.billingduedate == '' || this.M_TN_ContractBillingAssignment.billingduedate == null ? 'NULL' : this.M_TN_ContractBillingAssignment.billingduedate ,
                CurrencyCd: this.M_TN_ContractBillingAssignment.currencycd == '' || this.M_TN_ContractBillingAssignment.currencycd == null ? 'NULL' : this.M_TN_ContractBillingAssignment.currencycd ,
                TotalArea: this.M_TN_ContractBillingAssignment.totalarea ? this.replaceAllString(this.M_TN_ContractBillingAssignment.totalarea,',','','number') : 0 ,
                BillingRate: this.M_TN_ContractBillingAssignment.billingrate ? this.replaceAllString(this.M_TN_ContractBillingAssignment.billingrate,',','','number') : 0 ,
                BillingAmt: this.M_TN_ContractBillingAssignment.billingamt ? this.replaceAllString(this.M_TN_ContractBillingAssignment.billingamt,',','','number') : 0 ,
                AddressCd: this.M_TN_ContractBillingAssignment.addresscd,
                Remarks: this.M_TN_ContractBillingAssignment.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractBillingAssignment.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)	
            })
        },
		M_ClearForm(){
            this.M_TN_ContractBillingAssignment = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                trxtype: '',
                trxdescs: '',
                descs: '',
                billingdate: this.momentDate(new Date()),
                credittermscd: '',
                creditdescs: '',
                billingduedate: this.momentDate(new Date()),
                currencycd: '',
                currencydescs: '',
                totalarea: '',
                billingrate: '',
                billingamt: '',
                addresscd: '',
                subleaseassignmentno: '',
                remarks: '',
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
            this.M_TN_ContractBillingAssignment.subleaseassignmentno = data.SubleaseAssignmentNo
            if (this.ContractData.ChargeArea == 'N') {
                this.M_TN_ContractBillingAssignment.totalarea = this.isCurrency(this.ContractData.TotalNetArea, this.decimal)
            }
            else if (this.ContractData.ChargeArea == 'S') {
                this.M_TN_ContractBillingAssignment.totalarea = this.isCurrency(this.ContractData.TotalSemiGrossArea, this.decimal)
            }
            else {
                this.M_TN_ContractBillingAssignment.totalarea = this.isCurrency(this.ContractData.TotalGrossArea, this.decimal)
            }
        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []
            
			data.forEach((value) => {	
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    BillingSequenceNo: value.SubLeaseBillingSequenceNo,
                    SubleaseAssignmentNo: this.DataRowPage1.SubleaseAssignmentNo,
                    LastUpdateStamp: value.LastUpdateStamp
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
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                subleaseassignmentno: record.SubleaseAssignmentNo,
                billingsequenceno: record.SubLeaseBillingSequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractBillingAssignment = {
                subportfoliocd: data.subportfoliocd,
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
                subleaseassignmentno: record.SubleaseAssignmentNo,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                address1: data.address1,
                subleasebillingsequenceno: record.SubLeaseBillingSequenceNo,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_ContractBillingAssignment.trxtypeLabel = this.M_TN_ContractBillingAssignment.trxtype != null && this.M_TN_ContractBillingAssignment.trxtype != '' ? data.trxtype + this.separator + data.trxdescs :'' 
                this.M_TN_ContractBillingAssignment.credittermscdLabel = this.M_TN_ContractBillingAssignment.credittermscd != null && this.M_TN_ContractBillingAssignment.credittermscd != '' ? data.credittermscd + this.separator + data.creditdescs :'' 
                this.M_TN_ContractBillingAssignment.currencycdLabel = this.M_TN_ContractBillingAssignment.currencycd != null && this.M_TN_ContractBillingAssignment.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getContractData (appNo) {
          var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: appNo
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null || ress.length < 1) return
            this.ContractData = ress[0]
          })
        },
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

