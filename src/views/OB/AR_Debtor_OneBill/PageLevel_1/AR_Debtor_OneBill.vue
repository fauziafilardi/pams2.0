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
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_AR_Debtor_OneBill.contactid" :label="M_AR_Debtor_OneBill.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_Debtor_OneBill.debtorcd"  ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_businessname" v-model="M_AR_Debtor_OneBill.businessname"  ref="ref_businessname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_passwordattachment" v-model="M_AR_Debtor_OneBill.passwordattachment"  ref="ref_passwordattachment"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_AR_Debtor_OneBill.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncredittermscdChange" :prop="PI_credittermscd" :value="M_AR_Debtor_OneBill.credittermscd" :label="M_AR_Debtor_OneBill.credittermscdLabel" ref="ref_credittermscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_creditlimit" v-model="M_AR_Debtor_OneBill.creditlimit"  ref="ref_creditlimit"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnvatpaidbyChange" :prop="PI_vatpaidby" v-model="M_AR_Debtor_OneBill.vatpaidby"  ref="ref_vatpaidby" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnwithholdingpaidbyChange" :prop="PI_withholdingpaidby" v-model="M_AR_Debtor_OneBill.withholdingpaidby"  ref="ref_withholdingpaidby" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnreminderChange" :prop="PI_reminder" v-model="M_AR_Debtor_OneBill.reminder"  ref="ref_reminder" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnpenaltyChange" :prop="PI_penalty" v-model="M_AR_Debtor_OneBill.penalty"  ref="ref_penalty" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_graceperiod" v-model="M_AR_Debtor_OneBill.graceperiod"  ref="ref_graceperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_AR_Debtor_OneBill.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_Debtor_OneBill.reasoncd" :label="M_AR_Debtor_OneBill.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_Debtor_OneBill.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndebtoraccountcdChange" :prop="PI_debtoraccountcd" :value="M_AR_Debtor_OneBill.debtoraccountcd" :label="M_AR_Debtor_OneBill.debtoraccountcdLabel" ref="ref_debtoraccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_Debtor_OneBill.remarks"  ref="ref_remarks" />
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
		Module:"OB",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_Debtor_OneBill :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                contactid: '',
                debtorcd: '',
                passwordattachment: '',
                referenceno: '',
                credittermscd: '',
                creditlimit: '0',
                vatpaidby: '',
                withholdingpaidby: '',
                d0: '',
                d1: '',
                d2: '',
                d3: '',
                d4: '',
                d5: '',
                d6: '',
                d7: '',
                d8: '',
                d9: '',
                graceperiod: '0',
                reminder: '',
                penalty: '',
                reasoncd: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                credittermsdescs: '',
                cmreasondescs: '',
                contactname: '',
                outstandingtransactioncount: 0,
                debtoraccountcd: '',
                debtoraccountdescs: '',
                businessname: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'contactid', 
                cLabel: 'Contact ID', 
                cKey: true, 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_debtorcd: { 
                cValidate :'required|max:10', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
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
            PI_businessname: { 
                cValidate :'max:50', 
                cName: 'businessname', 
                cLabel: 'Business Name', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_passwordattachment: { 
                cValidate :'max:50', 
                cName: 'passwordattachment', 
                cLabel: 'Password Attachment', 
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
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
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
                cLabel: 'Credit Terms', 
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
                cMasterUrl: 'CM/CM_CreditTerms' ,
                cDisplayColumn: 'CreditTermsCd,Descs' ,
            }, 
            PI_creditlimit: { 
                cValidate :'required|max:16', 
                cName: 'creditlimit', 
                cLabel: 'Credit Limit', 
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
            PI_vatpaidby: { 
                cValidate :'', 
                cName: 'vatpaidby', 
                cId: 'rdbvatpaidby', 
                cRadioOptions: [{ text: 'Debtor', value: 'D' }, { text: 'Management', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'VAT Paid By ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_withholdingpaidby: { 
                cValidate :'', 
                cName: 'withholdingpaidby', 
                cId: 'rdbwithholdingpaidby', 
                cRadioOptions: [{ text: 'Debtor', value: 'D' }, { text: 'Management', value: 'M' }], 
                cRadioDefaultOption: '', 
                cLabel:'Withholding Tax Paid By ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reminder: { 
                cValidate :'', 
                cName: 'reminder', 
                cId: 'rdbreminder', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Reminder ', 
                cLabelSize: 4, 
                cOrder: 10, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_penalty: { 
                cValidate :'', 
                cName: 'penalty', 
                cId: 'rdbpenalty', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Penalty ', 
                cLabelSize: 4, 
                cOrder: 11, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_graceperiod: { 
                cValidate :'required|max:12', 
                cName: 'graceperiod', 
                cLabel: 'Grace Period', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'numeric',
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
                cRadioOptions: [{ text: 'Active', value: 'A' }, { text: 'Non Active', value: 'N' }], 
                cRadioDefaultOption: '', 
                cLabel:'Status ', 
                cLabelSize: 4, 
                cOrder: 13, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: "(ModuleCd='AR' OR ModuleCd is null)"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 14, 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:150', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debtoraccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'debtoraccountcd', 
                cLabel: 'Aging Report Account', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:17, 
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
            },
            SubPortfolioCd: ""
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
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_AR_Debtor_OneBill.contactid = data.id
            this.M_AR_Debtor_OneBill.contactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OncredittermscdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Debtor_OneBill.credittermscd = data.id
            this.M_AR_Debtor_OneBill.credittermscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{credittermscd}
            }
        })
        this.$forceUpdate()
        },
        OnvatpaidbyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatpaidby}
            }
        })
        this.$forceUpdate()
        },
        OnwithholdingpaidbyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{withholdingpaidby}
            }
        })
        this.$forceUpdate()
        },
        OnreminderChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{reminder}
            }
        })
        this.$forceUpdate()
        },
        OnpenaltyChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{penalty}
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
            this.M_AR_Debtor_OneBill.reasoncd = data.id
            this.M_AR_Debtor_OneBill.reasoncdLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.M_AR_Debtor_OneBill.reasondescs = data.Descs
            }
        })
        this.$forceUpdate()
        },
        OndebtoraccountcdChange (data) {
        this.$nextTick(() => {
            this.M_AR_Debtor_OneBill.debtoraccountcd = data.id
            this.M_AR_Debtor_OneBill.debtoraccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{debtoraccountcd}
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
                SubPortfolioCd: this.M_AR_Debtor_OneBill.subportfoliocd,
                ContactId: this.M_AR_Debtor_OneBill.contactid == '' || this.M_AR_Debtor_OneBill.contactid == null ? 'NULL' : this.M_AR_Debtor_OneBill.contactid ,
                DebtorCd: this.M_AR_Debtor_OneBill.debtorcd,
                PasswordAttachment: this.M_AR_Debtor_OneBill.passwordattachment,
                ReferenceNo: this.M_AR_Debtor_OneBill.referenceno,
                CreditTermsCd: this.M_AR_Debtor_OneBill.credittermscd == '' || this.M_AR_Debtor_OneBill.credittermscd == null ? 'NULL' : this.M_AR_Debtor_OneBill.credittermscd ,
                CreditLimit: this.M_AR_Debtor_OneBill.creditlimit ? this.replaceAllString(this.M_AR_Debtor_OneBill.creditlimit,',','','number') : 0 ,
                VATPaidBy: this.M_AR_Debtor_OneBill.vatpaidby,
                WithholdingPaidBy: this.M_AR_Debtor_OneBill.withholdingpaidby,
                Reminder: this.M_AR_Debtor_OneBill.reminder,
                Penalty: this.M_AR_Debtor_OneBill.penalty,
                GracePeriod: this.M_AR_Debtor_OneBill.graceperiod,
                D0: this.M_AR_Debtor_OneBill.d0,
                D1: this.M_AR_Debtor_OneBill.d1,
                D2: this.M_AR_Debtor_OneBill.d2,
                D3: this.M_AR_Debtor_OneBill.d3,
                D4: this.M_AR_Debtor_OneBill.d4,
                D5: this.M_AR_Debtor_OneBill.d5,
                D6: this.M_AR_Debtor_OneBill.d6,
                D7: this.M_AR_Debtor_OneBill.d7,
                D8: this.M_AR_Debtor_OneBill.d8,
                D9: this.M_AR_Debtor_OneBill.d9,
                TerminateBy: this.getDataUser().UserId,
                TerminateDate: this.M_AR_Debtor_OneBill.terminatedate,
                ReasonCd: this.M_AR_Debtor_OneBill.reasondescs,
                ReasonDescs: this.M_AR_Debtor_OneBill.reasondescs,
                Status: this.M_AR_Debtor_OneBill.status,
                Remarks: this.M_AR_Debtor_OneBill.remarks,
                UserInput: this.getDataUser().UserId ,
                DebtorAccountCd: this.M_AR_Debtor_OneBill.debtoraccountcd == '' || this.M_AR_Debtor_OneBill.debtoraccountcd == null ? 'NULL' : this.M_AR_Debtor_OneBill.debtoraccountcd ,
                BusinessName: this.M_AR_Debtor_OneBill.businessname                
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
                SubPortfolioCd: this.M_AR_Debtor_OneBill.subportfoliocd,
                ContactId: this.M_AR_Debtor_OneBill.contactid == '' || this.M_AR_Debtor_OneBill.contactid == null ? 'NULL' : this.M_AR_Debtor_OneBill.contactid ,
                DebtorCd: this.M_AR_Debtor_OneBill.debtorcd,
                PasswordAttachment: this.M_AR_Debtor_OneBill.passwordattachment,
                ReferenceNo: this.M_AR_Debtor_OneBill.referenceno,
                CreditTermsCd: this.M_AR_Debtor_OneBill.credittermscd == '' || this.M_AR_Debtor_OneBill.credittermscd == null ? 'NULL' : this.M_AR_Debtor_OneBill.credittermscd ,
                CreditLimit: this.M_AR_Debtor_OneBill.creditlimit ? this.replaceAllString(this.M_AR_Debtor_OneBill.creditlimit,',','','number') : 0 ,
                VATPaidBy: this.M_AR_Debtor_OneBill.vatpaidby,
                WithholdingPaidBy: this.M_AR_Debtor_OneBill.withholdingpaidby,
                Reminder: this.M_AR_Debtor_OneBill.reminder,
                Penalty: this.M_AR_Debtor_OneBill.penalty,
                GracePeriod: this.M_AR_Debtor_OneBill.graceperiod,
                D0: this.M_AR_Debtor_OneBill.d0,
                D1: this.M_AR_Debtor_OneBill.d1,
                D2: this.M_AR_Debtor_OneBill.d2,
                D3: this.M_AR_Debtor_OneBill.d3,
                D4: this.M_AR_Debtor_OneBill.d4,
                D5: this.M_AR_Debtor_OneBill.d5,
                D6: this.M_AR_Debtor_OneBill.d6,
                D7: this.M_AR_Debtor_OneBill.d7,
                D8: this.M_AR_Debtor_OneBill.d8,
                D9: this.M_AR_Debtor_OneBill.d9,
                TerminateBy: this.getDataUser().UserId,
                TerminateDate: this.M_AR_Debtor_OneBill.terminatedate,
                ReasonCd: this.M_AR_Debtor_OneBill.reasondescs,
                ReasonDescs: this.M_AR_Debtor_OneBill.reasondescs,
                Status: this.M_AR_Debtor_OneBill.status,
                Remarks: this.M_AR_Debtor_OneBill.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_Debtor_OneBill.lastupdatestamp,
                DebtorAccountCd: this.M_AR_Debtor_OneBill.debtoraccountcd == '' || this.M_AR_Debtor_OneBill.debtoraccountcd == null ? 'NULL' : this.M_AR_Debtor_OneBill.debtoraccountcd ,
                BusinessName: this.M_AR_Debtor_OneBill.businessname                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_AR_Debtor_OneBill = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                contactid: '',
                debtorcd: '',
                passwordattachment: '',
                referenceno: '',
                credittermscd: '',
                creditlimit: '0',
                vatpaidby: '',
                withholdingpaidby: '',
                d0: '',
                d1: '',
                d2: '',
                d3: '',
                d4: '',
                d5: '',
                d6: '',
                d7: '',
                d8: '',
                d9: '',
                graceperiod: '0',
                reminder: '',
                penalty: '',
                reasoncd: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                credittermsdescs: '',
                cmreasondescs: '',
                contactname: '',
                outstandingtransactioncount: 0,
                debtoraccountcd: '',
                debtoraccountdescs: '',
                businessname: '',
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

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          _Message_:'',
          ContactId: value.ContactID,
          SubPortFolioCd: value.SubPortFolioCd,
          DebtorCd: value.DebtorCd,
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
,                subportfoliocd: record.SubPortFolioCd,
                debtorcd: record.DebtorCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_Debtor_OneBill = {
                subportfoliocd: record.SubPortFolioCd,
                contactid: record.ContactID,
                debtorcd: record.DebtorCd,
                passwordattachment: data.passwordattachment,
                referenceno: data.referenceno,
                credittermscd: record.CreditTerms,
                creditlimit: record.CreditLimit,
                vatpaidby: data.vatpaidby,
                withholdingpaidby: data.withholdingpaidby,
                d0: data.d0,
                d1: data.d1,
                d2: data.d2,
                d3: data.d3,
                d4: data.d4,
                d5: data.d5,
                d6: data.d6,
                d7: data.d7,
                d8: data.d8,
                d9: data.d9,
                graceperiod: data.graceperiod,
                reminder: data.reminder,
                penalty: data.penalty,
                reasoncd: data.reasoncd,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                credittermsdescs: data.credittermsdescs,
                cmreasondescs: data.cmreasondescs,
                contactname: data.contactname,
                outstandingtransactioncount: data.outstandingtransactioncount,
                debtoraccountcd: data.debtoraccountcd,
                debtoraccountdescs: data.debtoraccountdescs,
                businessname: data.businessname,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_AR_Debtor_OneBill.contactidLabel = this.M_AR_Debtor_OneBill.contactid != null ? data.contactid + this.separator + data.contactname :'' 
                this.M_AR_Debtor_OneBill.credittermscdLabel = this.M_AR_Debtor_OneBill.credittermscd != null ? data.credittermscd + this.separator + data.credittermsdescs :'' 
                this.M_AR_Debtor_OneBill.reasoncdLabel = this.M_AR_Debtor_OneBill.reasoncd != null ? data.reasoncd + this.separator + data.cmreasondescs :'' 
                this.M_AR_Debtor_OneBill.debtoraccountcdLabel = this.M_AR_Debtor_OneBill.debtoraccountcd != null ? data.debtoraccountcd + this.separator + data.debtoraccountdescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        getSpec () {
            var param = {
                OptionFunctionCd: "GetSubPortfolioOneBill",
                ModuleCd: "AR"
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                if (FnOpt2 == null) return
                if (FnOpt2.length > 0) {
                    var data = FnOpt2[0]
                    this.SubPortfolioCd = data.SubPortfolioCd
                
                this.propList.initialWhere = "SubPortfolioCd = '" +data.SubPortfolioCd+ "' AND SubPortfolioCd IN (SELECT TOP  1 Z.SubPortfolioCd FROM CM_SubPortfolio Z WHERE Z.OneBillMaster='Y' ) AND ContactID IN (SELECT Z.ContactID FROM CM_Contact Z WHERE Z.ClassificationCentralID='Y' AND ISNULL(Z.ParentID,'')<>'' )"
                this.FormToABSList().doGetList('','eb_getList')
                }
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
        this.getSpec()

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

