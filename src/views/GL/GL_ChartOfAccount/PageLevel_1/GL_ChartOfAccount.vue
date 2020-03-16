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
                                        <ABSinputTextVuex :prop="PI_accountcd" v-model="M_GL_ChartOfAccount.accountcd"  ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs1" v-model="M_GL_ChartOfAccount.descs1"  ref="ref_descs1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs2" v-model="M_GL_ChartOfAccount.descs2"  ref="ref_descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                     <b-col md="6">
                                        <ABSInputSelect2 @change="OnaccounttypeChange" :prop="PI_accounttype" :value="M_GL_ChartOfAccount.accounttype" :label="M_GL_ChartOfAccount.accounttypeLabel" ref="ref_accounttype"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col><label class="lbl-value-view-form">A (Asset), L(Liabilities), P (Capital), I (Income), E (Expense), D (Debtor), C (Creditor)</label></b-col>
                                            </b-row>                                              
                                        </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_GL_ChartOfAccount.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsuppressrevaluationChange" :prop="PI_suppressrevaluation" v-model="M_GL_ChartOfAccount.suppressrevaluation"  ref="ref_suppressrevaluation" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlinkaccountcdChange" :prop="PI_linkaccountcd" :value="M_GL_ChartOfAccount.linkaccountcd" :label="M_GL_ChartOfAccount.linkaccountcdLabel" ref="ref_linkaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_GL_ChartOfAccount.currencycd" :label="M_GL_ChartOfAccount.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lasttransactiondate" v-model="M_GL_ChartOfAccount.lasttransactiondate"  ref="ref_lasttransactiondate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbudgetcontrolChange" :prop="PI_budgetcontrol" v-model="M_GL_ChartOfAccount.budgetcontrol"  ref="ref_budgetcontrol" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Analysis Category Permission
                                        </span>
                                    </div>
                                </b-col> <!-- table close -->
                  
							</b-row>
							<ABSTAnalysisRadioButton :prop="PTAnalysis" v-model="dataT" />
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
		cInsertKey:'id=AccountCd,label=AccountCd+|+Descs1',
		FormType: "List",
		Module:"GL",
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

            M_GL_ChartOfAccount :{
                accountcd: '',
                descs1: '',
                descs2: '',
                accounttype: '',
                budgetcontrol: 'N',
                a0: '',
                a1: '',
                a2: '',
                a3: '',
                a4: '',
                a5: '',
                a6: '',
                a7: '',
                a8: '',
                a9: '',
                t0status: '',
                t1status: '',
                t2status: '',
                t3status: '',
                t4status: '',
                t5status: '',
                t6status: '',
                t7status: '',
                t8status: '',
                t9status: '',
                linkaccountcd: '',
                currencycd: '',
                lasttransactiondate: '',
                status: 'A',
                suppressrevaluation: 'N',
                userinput: '',
                useredit: this.getDataUser().UserId,
                linkaccountdescs: '',
                currencydescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_accountcd: { 
                cValidate :'required|max:20', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs1: { 
                cValidate :'required|max:60', 
                cName: 'descs1', 
                cLabel: 'Account Description 1', 
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
            PI_descs2: { 
                cValidate :'max:60', 
                cName: 'descs2', 
                cLabel: 'Account Description 2', 
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
            PI_accounttype: { 
                dataLookUp: null, 
                cValidate :'required', 
                cName: 'accounttype', 
                cLabel: 'Account Type', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'A', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Asset', id: 'A' },
                { label: 'Liabilities', id: 'L' },
                { label: 'Capital', id: 'P' },
                { label: 'Income', id: 'I' },
                { label: 'Expense', id: 'E' },
                { label: 'Debtor', id: 'D' },
                { label: 'Creditor', id: 'C' }],
                cMasterUrl: '' ,
                cDisplayColumn: ''
            }, 
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Active', value: 'A' },{ text: 'Suspend', value: 'S' },{ text: 'Header', value: 'H' },], 
                cRadioDefaultOption: 'A', 
                cLabel:'Status', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_suppressrevaluation: { 
                cValidate :'', 
                cName: 'suppressrevaluation', 
                cId: 'rdbsuppressrevaluation', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Suppress Revaluation', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_linkaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'linkaccountcd', 
                cLabel: 'Link Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Description_1' ,
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_lasttransactiondate: { 
                cLabel: 'Last Transaction Date ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_budgetcontrol: { 
                cValidate :'', 
                cName: 'budgetcontrol', 
                cId: 'rdbbudgetcontrol', 
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'By Account Code', value: 'A' },{ text: 'By Account Code and Transaction Analysis', value: 'T' },], 
                cRadioDefaultOption: '', 
                cLabel:'Budget Control', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OnstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{status}
            }
        })
        this.$forceUpdate()
        },
        OnsuppressrevaluationChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{suppressrevaluation}
            }
        })
        this.$forceUpdate()
        },
        OnaccounttypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_ChartOfAccount.accounttype = data.id
            this.M_GL_ChartOfAccount.accounttypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accounttype}
            }
        })
        this.$forceUpdate()
        },
        OnlinkaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ChartOfAccount.linkaccountcd = data.id
            this.M_GL_ChartOfAccount.linkaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{linkaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_ChartOfAccount.currencycd = data.id
            this.M_GL_ChartOfAccount.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{currencycd}
            }
        })
        this.$forceUpdate()
        },
        OnbudgetcontrolChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{budgetcontrol}
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
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,

                AccountCd: this.M_GL_ChartOfAccount.accountcd,
                Descs1: this.M_GL_ChartOfAccount.descs1,
                Descs2: this.M_GL_ChartOfAccount.descs2,
                AccountType: this.M_GL_ChartOfAccount.accounttype,
                BudgetControl: this.M_GL_ChartOfAccount.budgetcontrol,
                LinkAccountCd: this.M_GL_ChartOfAccount.linkaccountcd == '' || this.M_GL_ChartOfAccount.linkaccountcd == null ? 'NULL' : this.M_GL_ChartOfAccount.linkaccountcd ,
                CurrencyCd: this.M_GL_ChartOfAccount.currencycd == '' || this.M_GL_ChartOfAccount.currencycd == null ? 'NULL' : this.M_GL_ChartOfAccount.currencycd ,
                Status: this.M_GL_ChartOfAccount.status,
                SuppressRevaluation: this.M_GL_ChartOfAccount.suppressrevaluation,
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
                AccountCd: this.M_GL_ChartOfAccount.accountcd,
                Descs1: this.M_GL_ChartOfAccount.descs1,
                Descs2: this.M_GL_ChartOfAccount.descs2,
                AccountType: this.M_GL_ChartOfAccount.accounttype,
                BudgetControl: this.M_GL_ChartOfAccount.budgetcontrol,
                LinkAccountCd: this.M_GL_ChartOfAccount.linkaccountcd == '' || this.M_GL_ChartOfAccount.linkaccountcd == null ? 'NULL' : this.M_GL_ChartOfAccount.linkaccountcd ,
                CurrencyCd: this.M_GL_ChartOfAccount.currencycd == '' || this.M_GL_ChartOfAccount.currencycd == null ? 'NULL' : this.M_GL_ChartOfAccount.currencycd ,
                Status: this.M_GL_ChartOfAccount.status,
                SuppressRevaluation: this.M_GL_ChartOfAccount.suppressrevaluation,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_ChartOfAccount.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ChartOfAccount = {
                accountcd: '',
                descs1: '',
                descs2: '',
                accounttype: '',
                budgetcontrol: 'N',
                // a0: '',
                // a1: '',
                // a2: '',
                // a3: '',
                // a4: '',
                // a5: '',
                // a6: '',
                // a7: '',
                // a8: '',
                // a9: '',
                // t0status: '',
                // t1status: '',
                // t2status: '',
                // t3status: '',
                // t4status: '',
                // t5status: '',
                // t6status: '',
                // t7status: '',
                // t8status: '',
                // t9status: '',
                linkaccountcd: '',
                currencycd: '',
                lasttransactiondate: '',
                status: 'A',
                suppressrevaluation: 'N',
                userinput: '',
                useredit: this.getDataUser().UserId,
                linkaccountdescs: '',
                currencydescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_accountcd.focus()
        },
        M_Edit(){
            this.$refs.ref_descs1.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                AccountCd: value.AccountCd,
                LastUpdateStamp: value.LastUpdateStamp,
                _Message_: ""
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
,                accountcd: record.AccountCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_ChartOfAccount = {
                accountcd: data.accountcd,
                descs1: data.descs1,
                descs2: data.descs2,
                accounttype: data.accounttype,
                budgetcontrol: data.budgetcontrol,
                a0: data.a0,
                a1: data.a1,
                a2: data.a2,
                a3: data.a3,
                a4: data.a4,
                a5: data.a5,
                a6: data.a6,
                a7: data.a7,
                a8: data.a8,
                a9: data.a9,
                linkaccountcd: data.linkaccountcd,
                currencycd: data.currencycd,
                lasttransactiondate: data.lasttransactiondate,
                status: data.status,
                suppressrevaluation: data.suppressrevaluation,
                userinput: data.userinput,
                useredit: data.useredit,
                linkaccountdescs: data.linkaccountdescs,
                currencydescs: data.currencydescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_ChartOfAccount.linkaccountcdLabel = this.M_GL_ChartOfAccount.linkaccountcd != null ? data.linkaccountcd + this.separator + data.linkaccountdescs :'' 
                this.M_GL_ChartOfAccount.currencycdLabel = this.M_GL_ChartOfAccount.currencycd != null ? data.currencycd + this.separator + data.currencydescs :'' 
         

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

