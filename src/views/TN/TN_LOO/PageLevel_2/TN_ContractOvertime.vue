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
                                        <ABSInputSelectList @change="OnovertimecdChange" :prop="PI_overtimecd" :value="M_TN_ContractOvertime.overtimecd" :label="M_TN_ContractOvertime.overtimecdLabel" ref="ref_overtimecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_ContractOvertime.lotno" :label="M_TN_ContractOvertime.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_TN_ContractOvertime.currencycd" :label="M_TN_ContractOvertime.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_TN_ContractOvertime.credittermscd" :label="M_TN_ContractOvertime.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargetypeChange" :prop="PI_chargetypee" v-model="M_TN_ContractOvertime.chargetypee"  ref="ref_chargetypee" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chargevalue" v-model="M_TN_ContractOvertime.chargevalue"  ref="ref_chargevalue"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractOvertime.remarks"  ref="ref_remarks" />
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
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractOvertime :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                sequenceno: 0,
                overtimecd: '',
                lotno: '',
                currencycd: '',
                credittermscd: '',
                chargetypee: '',
                chargevalue: '0',
                addresscd: '',
                addresscontactid: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
                rowid: 0,
                credittermsdescs: '',
                overtimedescs: '',
                lotdescs: '',
                currencydescs: ''
                    }
            ,
            PI_overtimecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNOvertime'    , 
                    ColumnDB: 'OvertimeCd'   , 
                    InitialWhere: "SUBPORTFOLIOCD='"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'overtimecd', 
                cLabel: 'Overtime Code', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_Overtime' ,
                cDisplayColumn: 'OvertimeCd,Descs' ,
            }, 
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLot'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'lotno', 
                cLabel: 'Lot No ', 
                cKey: false, 
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
                cMasterUrl: 'TN/TN_Lot' ,
                cDisplayColumn: 'LotNo,LotType' ,
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
                cMasterUrl: 'CM/CM_Currency' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
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
                cLabel: 'Credit Term ', 
                cKey: false, 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_chargetypee: { 
                cValidate :'', 
                cName: 'chargetypee', 
                cId: 'rdbchargetypee', 
                cRadioOptions: [{ text: 'Fixed', value: 'F' },{ text: 'Hourly', value: 'H' },], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_chargevalue: { 
                cValidate :'required', 
                cName: 'chargevalue', 
                cLabel: 'Charge Value ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
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
            } ,
            ContractDataOver:[]        
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
        GetDefault(OVcd){
            var param = {
                    OptionFunctionCd: "GetDefaultContractOvertime",
                    ModuleCd: "TN",
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    OvertimeCd: OVcd
                  }

                  this.FnDynamicFunction(param)
                  .then(ress => {
                    // if (ress == null) return
                    if (ress.length > 0) {
                      var data = ress[0]


                      this.M_TN_ContractOvertime.currencycd = data.CurrencyCd
                      this.M_TN_ContractOvertime.currencycdLabel = data.CurrencyCd+' | '+data.CurrencyDescs

                      this.M_TN_ContractOvertime.credittermscd = data.CreditTermsCd
                      this.M_TN_ContractOvertime.credittermscdLabel = data.CreditTermsCd+' | '+data.CreditTermsDescs

                      if(data.ChargeType !=''){
                          this.M_TN_ContractOvertime.chargetypee = data.ChargeType
                      }
                      this.M_TN_ContractOvertime.chargevalue = this.isCurrency(data.ChargeValue,this.decimal)
                    }

                  })
        },
        OnovertimecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractOvertime.overtimecd = data.id
            this.M_TN_ContractOvertime.overtimecdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.GetDefault(data.id)
            }
        })
        this.$forceUpdate()
        },
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractOvertime.lotno = data.id
            this.M_TN_ContractOvertime.lotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotno}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractOvertime.currencycd = data.id
            this.M_TN_ContractOvertime.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractOvertime.credittermscd = data.id
            this.M_TN_ContractOvertime.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{credittermscd}
            }
        })
        this.$forceUpdate()
        },
        OnchargetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargetype}
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
            // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
                if (
                    (data.Status != 'A' && data.ContractStatus != 1) ||
                    (data.Status != 'N' && data.ContractStatus != 1) ||
                    (data.Status == 'C') ||
                    (data.Status == 'X')
                ) {
                    this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }
                else {
                    this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                }
            // }
            this.M_TN_ContractOvertime.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '" + data.ApplicationNo + "' "
            this.PI_lotno.dataLookUp.InitialWhere = "SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' and LotNo IN (Select LotNo From TN_ContractLot Where SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' and ApplicationNo= '"+this.DataRowPage1.ApplicationNo+"')"   , 

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractOvertime.applicationno,
                OvertimeCd: this.M_TN_ContractOvertime.overtimecd == '' || this.M_TN_ContractOvertime.overtimecd == null ? 'NULL' : this.M_TN_ContractOvertime.overtimecd ,
                LotNo: this.M_TN_ContractOvertime.lotno == '' || this.M_TN_ContractOvertime.lotno == null ? 'NULL' : this.M_TN_ContractOvertime.lotno ,
                CurrencyCd: this.M_TN_ContractOvertime.currencycd == '' || this.M_TN_ContractOvertime.currencycd == null ? 'NULL' : this.M_TN_ContractOvertime.currencycd ,
                CreditTermsCd: this.M_TN_ContractOvertime.credittermscd == '' || this.M_TN_ContractOvertime.credittermscd == null ? 'NULL' : this.M_TN_ContractOvertime.credittermscd ,
                ChargeType: this.M_TN_ContractOvertime.chargetypee,
                ChargeValue: this.M_TN_ContractOvertime.chargevalue ? this.replaceAllString(this.M_TN_ContractOvertime.chargevalue,',','','number') : 0 ,
                Remarks: this.M_TN_ContractOvertime.remarks,
                UserInput: this.getDataUser().UserId ,
                UserEdit: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractOvertime.applicationno,
                SequenceNo: this.M_TN_ContractOvertime.sequenceno,
                OvertimeCd: this.M_TN_ContractOvertime.overtimecd == '' || this.M_TN_ContractOvertime.overtimecd == null ? 'NULL' : this.M_TN_ContractOvertime.overtimecd ,
                LotNo: this.M_TN_ContractOvertime.lotno == '' || this.M_TN_ContractOvertime.lotno == null ? 'NULL' : this.M_TN_ContractOvertime.lotno ,
                CurrencyCd: this.M_TN_ContractOvertime.currencycd == '' || this.M_TN_ContractOvertime.currencycd == null ? 'NULL' : this.M_TN_ContractOvertime.currencycd ,
                CreditTermsCd: this.M_TN_ContractOvertime.credittermscd == '' || this.M_TN_ContractOvertime.credittermscd == null ? 'NULL' : this.M_TN_ContractOvertime.credittermscd ,
                ChargeType: this.M_TN_ContractOvertime.chargetypee,
                ChargeValue: this.M_TN_ContractOvertime.chargevalue ? this.replaceAllString(this.M_TN_ContractOvertime.chargevalue,',','','number') : 0 ,
                Remarks: this.M_TN_ContractOvertime.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractOvertime.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_ContractOvertime = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                sequenceno: 0,
                overtimecd: '',
                lotno: '',
                currencycd: '',
                credittermscd: '',
                chargetypee: 'F',
                chargevalue: '',
                addresscd: '',
                addresscontactid: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
                rowid: 0,
                credittermsdescs: '',
                overtimedescs: '',
                lotdescs: '',
                currencydescs: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractOvertime.applicationno = data.ApplicationNo 



        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SequenceNo: value.SequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "Sequence No " + value.SequenceNo
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
,                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                sequenceno: record.SequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractOvertime = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                sequenceno: record.SequenceNo,
                overtimecd: data.overtimecd,
                lotno: data.lotno,
                currencycd: data.currencycd,
                credittermscd: data.credittermscd,
                chargetypee: data.chargetype,
                chargevalue: this.isCurrency(data.chargevalue, this.decimal),
                addresscd: data.addresscd,
                addresscontactid: data.addresscontactid,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                credittermsdescs: data.credittermsdescs,
                overtimedescs: data.overtimedescs,
                lotdescs: data.lotdescs,
                currencydescs: data.currencydescs
                    }
                 

                this.M_TN_ContractOvertime.overtimecdLabel = this.M_TN_ContractOvertime.overtimecd != null && this.M_TN_ContractOvertime.overtimecd != '' ? data.overtimecd + this.separator + data.overtimedescs :'' 
                this.M_TN_ContractOvertime.lotnoLabel = this.M_TN_ContractOvertime.lotno != null && this.M_TN_ContractOvertime.lotno != '' ? data.lotno + this.separator + data.lotdescs :'' 
                this.M_TN_ContractOvertime.currencycdLabel = this.M_TN_ContractOvertime.currencycd != null && this.M_TN_ContractOvertime.currencycd != '' ? data.currencycd + this.separator + data.currencydescs :'' 
                this.M_TN_ContractOvertime.credittermscdLabel = this.M_TN_ContractOvertime.credittermscd != null && this.M_TN_ContractOvertime.credittermscd != '' ? data.credittermscd + this.separator + data.credittermsdescs :'' 
  

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

