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
                                        <ABSInputSelectList @change="OnfromlotnoChange" :prop="PI_fromlotno" :value="M_TN_StrataCopyHistoryBilling.fromlotno" :label="M_TN_StrataCopyHistoryBilling.fromlotnoLabel" ref="ref_fromlotno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntolotnoChange" :prop="PI_tolotno" :value="M_TN_StrataCopyHistoryBilling.tolotno" :label="M_TN_StrataCopyHistoryBilling.tolotnoLabel" ref="ref_tolotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_StrataCopyHistoryBilling.trxtype" :label="M_TN_StrataCopyHistoryBilling.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_StrataCopyHistoryBilling.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdatefromChange" :prop="PI_trxdatefrom" v-model="M_TN_StrataCopyHistoryBilling.trxdatefrom"  ref="ref_trxdatefrom" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntrxdatetoChange" :prop="PI_trxdateto" v-model="M_TN_StrataCopyHistoryBilling.trxdateto"  ref="ref_trxdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fromperiod" v-model="M_TN_StrataCopyHistoryBilling.fromperiod"  ref="ref_fromperiod"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_fromyear" v-model="M_TN_StrataCopyHistoryBilling.fromyear"  ref="ref_fromyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataCopyHistoryBilling.remarks"  ref="ref_remarks" />
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
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_StrataCopyHistoryBilling :{
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                trxdateto: '',
                billingdate: '',
                trxdatefrom: '',
                fromperiod: '',
                fromyear: '',
                remarks: ''
                    }
            ,					
            PI_fromlotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotNoLookUp'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'fromlotno', 
                cLabel: 'Copy From Lot No', 
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
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_tolotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotNoLookUp'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotUsage = 'L' AND StrataStatus = 'Y' AND OwnerID IS NOT NULL"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'tolotno', 
                cLabel: 'Copy To Lot No ', 
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
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_trxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeBySubPortfolio'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND MODULECD = 'AR' AND TrxClass='I'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'trxtype', 
                cLabel: 'Transaction Type', 
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_billingdate: { 
                cValidate :'required', 
                cName: 'billingdate', 
                cLabel: 'Billing Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdatefrom: { 
                cValidate :'', 
                cName: 'trxdatefrom', 
                cLabel: 'Amortize Date From', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxdateto: { 
                cValidate :'', 
                cName: 'trxdateto', 
                cLabel: 'Amortize Date To ', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromperiod: { 
                cValidate :'required', 
                cName: 'fromperiod', 
                cLabel: 'From Month', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromyear: { 
                cValidate :'required|max:4', 
                cName: 'fromyear', 
                cLabel: 'From Year', 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cOrder:9, 
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
        OnfromlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataCopyHistoryBilling.fromlotno = data.id
            this.M_TN_StrataCopyHistoryBilling.fromlotnoLabel = data.label

            this.M_TN_StrataCopyHistoryBilling.tolotno = data.id
            this.M_TN_StrataCopyHistoryBilling.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{fromlotno}
            }
        })
        this.$forceUpdate()
        },
        OntolotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataCopyHistoryBilling.tolotno = data.id
            this.M_TN_StrataCopyHistoryBilling.tolotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tolotno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataCopyHistoryBilling.trxtype = data.id
            this.M_TN_StrataCopyHistoryBilling.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd,'AR', data.id)
                .then(dt => {
                  if (dt.length == 0) return
                  var datas = dt[0]
                  
                    if(datas.JournalType == 'D' && datas.AmortizeStatus== 'A'){
                        this.PI_trxdatefrom.cProtect = false
                        this.PI_trxdateto.cProtect = false
                        this.PI_trxdatefrom.cValidate = 'required'
                        this.PI_trxdateto.cValidate = 'required'
                    }else{
                        this.PI_trxdatefrom.cProtect = true
                        this.PI_trxdateto.cProtect = true
                        this.PI_trxdatefrom.cValidate = ''
                        this.PI_trxdateto.cValidate = ''
                    }
                })
            }
        })
        this.$forceUpdate()
        },
        OnbillingdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{billingdate}
            }
        })
        this.$forceUpdate()
        },
        OntrxdatefromChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdatefrom}
            }
        })
        this.$forceUpdate()
        },
        OntrxdatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{trxdateto}
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
           this.getToolbar().doEdit(true)
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
                
                this.alertSuccess(response.Message)
                .then(() => {

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromLotNo: this.M_TN_StrataCopyHistoryBilling.fromlotno == '' || this.M_TN_StrataCopyHistoryBilling.fromlotno == null ? 'NULL' : this.M_TN_StrataCopyHistoryBilling.fromlotno,
                ToLotNo: this.M_TN_StrataCopyHistoryBilling.tolotno == '' || this.M_TN_StrataCopyHistoryBilling.tolotno == null ? 'NULL' : this.M_TN_StrataCopyHistoryBilling.tolotno,
                TrxType: this.M_TN_StrataCopyHistoryBilling.trxtype == '' || this.M_TN_StrataCopyHistoryBilling.trxtype == null ? 'NULL' : this.M_TN_StrataCopyHistoryBilling.trxtype,
                BillingDate: this.M_TN_StrataCopyHistoryBilling.billingdate,
                TrxDateFrom: this.M_TN_StrataCopyHistoryBilling.trxdatefrom,
                TrxDateTo: this.M_TN_StrataCopyHistoryBilling.trxdateto,
                FromPeriod: this.M_TN_StrataCopyHistoryBilling.fromperiod,
                FromYear: this.M_TN_StrataCopyHistoryBilling.fromyear,
                Remarks: this.M_TN_StrataCopyHistoryBilling.remarks,
                UserInput: this.getDataUser().UserId
                
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
            this.M_TN_StrataCopyHistoryBilling = {
                dummy: '',
                fromlotno: '',
                tolotno: '',
                trxtype: '',
                trxdateto: '',
                billingdate: '',
                trxdatefrom: '',
                fromperiod: '',
                fromyear: '',
                remarks: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
				


            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_StrataCopyHistoryBilling = {
                dummy: data.dummy,
                fromlotno: data.fromlotno,
                tolotno: data.tolotno,
                trxtype: data.trxtype,
                trxdateto: data.trxdateto,
                billingdate: data.billingdate,
                trxdatefrom: data.trxdatefrom,
                fromperiod: data.fromperiod,
                fromyear: data.fromyear,
                remarks: data.remarks
                    }
                 

                this.M_TN_StrataCopyHistoryBilling.fromlotnoLabel = this.M_TN_StrataCopyHistoryBilling.fromlotno != null && this.M_TN_StrataCopyHistoryBilling.fromlotno != '' ? data.fromlotno + this.separator  :'' 
                this.M_TN_StrataCopyHistoryBilling.tolotnoLabel = this.M_TN_StrataCopyHistoryBilling.tolotno != null && this.M_TN_StrataCopyHistoryBilling.tolotno != '' ? data.tolotno + this.separator  :'' 
                this.M_TN_StrataCopyHistoryBilling.trxtypeLabel = this.M_TN_StrataCopyHistoryBilling.trxtype != null && this.M_TN_StrataCopyHistoryBilling.trxtype != '' ? data.trxtype + this.separator  :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
         this.getToolbar().ProcessPS()
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
