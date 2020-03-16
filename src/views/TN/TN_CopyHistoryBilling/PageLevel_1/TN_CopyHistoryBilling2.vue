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
                                        <ABSInputSelectList @change="OnfromapplicationnoChange" :prop="PI_fromapplicationno" :value="M_TN_CopyHistoryBilling2.fromapplicationno" :label="M_TN_CopyHistoryBilling2.fromapplicationnoLabel" ref="ref_fromapplicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntoapplicationnoChange" :prop="PI_toapplicationno" :value="M_TN_CopyHistoryBilling2.toapplicationno" :label="M_TN_CopyHistoryBilling2.toapplicationnoLabel" ref="ref_toapplicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_TN_CopyHistoryBilling2.trxtype" :label="M_TN_CopyHistoryBilling2.trxtypeLabel" ref="ref_trxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbillingdateChange" :prop="PI_billingdate" v-model="M_TN_CopyHistoryBilling2.billingdate"  ref="ref_billingdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdatefromChange" :prop="PI_trxdatefrom" v-model="M_TN_CopyHistoryBilling2.trxdatefrom"  ref="ref_trxdatefrom" />
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntrxdatetoChange" :prop="PI_trxdateto" v-model="M_TN_CopyHistoryBilling2.trxdateto"  ref="ref_trxdateto" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_fromperiod" v-model="M_TN_CopyHistoryBilling2.fromperiod"  ref="ref_fromperiod"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_fromyear" v-model="M_TN_CopyHistoryBilling2.fromyear"  ref="ref_fromyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CopyHistoryBilling2.remarks"  ref="ref_remarks" />
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

            M_TN_CopyHistoryBilling2 :{
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                billingdate: '',
                trxdatefrom: '',
                trxdateto: '',
                fromperiod: '',
                fromyear: '',
                remarks: ''
                    }
            ,					
            PI_fromapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"' AND Status = 'A'"   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'required', 
                cName: 'fromapplicationno', 
                cLabel: 'From Application No', 
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
                cDisplayColumn: 'ApplicationNo' ,
            }, 
            PI_toapplicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'  AND Status = 'A'"   , 
                    ParamWhere: ''  ,
                    SourceField: "ApplicationNo,ContractNo=LOONo,BusinessName,Name,TimeEdit",
                    DisplayLookUp:'ApplicationNo'
                        }, 
                cValidate :'required', 
                cName: 'toapplicationno', 
                cLabel: 'To Application No', 
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
                cDisplayColumn: 'ApplicationNo' ,
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
                cMasterUrl: 'AR/AR_TransactionTypeSubPortfolioMaintenance' ,
                cDisplayColumn: 'TransactionType,Descs' ,
            }, 
            PI_billingdate: { 
                cValidate :'required', 
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
            PI_trxdatefrom: { 
                cValidate :'', 
                cName: 'trxdatefrom', 
                cLabel: 'Amortize Date From', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cLabel: 'Amortize Date to', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fromperiod: { 
                cValidate :'required|max:2|max_value:12', 
                cName: 'fromperiod', 
                cLabel: 'From Month', 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cOrder: 7, 
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
                cOrder:8, 
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
        OnfromapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CopyHistoryBilling2.fromapplicationno = data.id
            this.M_TN_CopyHistoryBilling2.fromapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_TN_CopyHistoryBilling2.toapplicationno = data.id
                this.M_TN_CopyHistoryBilling2.toapplicationnoLabel = data.label
            }
        })
        this.$forceUpdate()
        },
        OntoapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CopyHistoryBilling2.toapplicationno = data.id
            this.M_TN_CopyHistoryBilling2.toapplicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{toapplicationno}
            }
        })
        this.$forceUpdate()
        },
        OntrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_TN_CopyHistoryBilling2.trxtype = data.id
            this.M_TN_CopyHistoryBilling2.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{trxtype}
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
            this.M_Update()
        },
        M_Update() {
            // console.log(this.M_TN_CopyHistoryBilling2)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FromApplicationNo: this.M_TN_CopyHistoryBilling2.fromapplicationno == '' || this.M_TN_CopyHistoryBilling2.fromapplicationno == null ? 'NULL' : this.M_TN_CopyHistoryBilling2.fromapplicationno,
                ToApplicationNo: this.M_TN_CopyHistoryBilling2.toapplicationno == '' || this.M_TN_CopyHistoryBilling2.toapplicationno == null ? 'NULL' : this.M_TN_CopyHistoryBilling2.toapplicationno,
                TrxType: this.M_TN_CopyHistoryBilling2.trxtype == '' || this.M_TN_CopyHistoryBilling2.trxtype == null ? 'NULL' : this.M_TN_CopyHistoryBilling2.trxtype,
                BillingDate: this.M_TN_CopyHistoryBilling2.billingdate,
                TrxDateFrom: this.M_TN_CopyHistoryBilling2.trxdatefrom,
                TrxDateTo: this.M_TN_CopyHistoryBilling2.trxdateto,
                FromPeriod: this.M_TN_CopyHistoryBilling2.fromperiod,
                FromYear: this.M_TN_CopyHistoryBilling2.fromyear,
                Remarks: this.M_TN_CopyHistoryBilling2.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doEdit()
                })
            })
        },
		M_ClearForm(){
            this.M_TN_CopyHistoryBilling2 = {
                dummy: '',
                fromapplicationno: '',
                toapplicationno: '',
                trxtype: '',
                billingdate: '',
                trxdatefrom: '',
                trxdateto: '',
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
        },
        getDataBy (record) {
            this.M_ClearForm()
            this.$store.commit('setStatus', 'view')
            this.getToolbar().doEdit()
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
