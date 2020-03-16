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
                                        <ABSinputTextVuex :prop="PI_prefixcd" v-model="M_GL_SubModuleAccountPrefix.prefixcd"  ref="ref_prefixcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_chartofaccountprefix" v-model="M_GL_SubModuleAccountPrefix.chartofaccountprefix"  ref="ref_chartofaccountprefix"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_SubModuleAccountPrefix.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_accountdescs" v-model="M_GL_SubModuleAccountPrefix.accountdescs"  ref="ref_accountdescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnaccounttypeChange" :prop="PI_accounttype" :value="M_GL_SubModuleAccountPrefix.accounttype" :label="M_GL_SubModuleAccountPrefix.accounttypeLabel" ref="ref_accounttype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlinkaccountcdChange" :prop="PI_linkaccountcd" :value="M_GL_SubModuleAccountPrefix.linkaccountcd" :label="M_GL_SubModuleAccountPrefix.linkaccountcdLabel" ref="ref_linkaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_GL_SubModuleAccountPrefix.currencycd" :label="M_GL_SubModuleAccountPrefix.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Analysis Category Permission
                                        </span>
                                    </div>
                                </b-col> <!-- table close -->
                  
							</b-row>
							<ABSTAnalysisRadioButtonTransactionType :prop="PTAnalysis" v-model="dataT" />
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
		cInsertKey:'id=PrefixCd,label=PrefixCd+|+Descs',
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

            M_GL_SubModuleAccountPrefix :{
                prefixcd: '',
                chartofaccountprefix: '',
                descs: '',
                accountdescs: '',
                accounttype: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                linkaccountdescs: '',
                a0descs: '',
                a1descs: '',
                a2descs: '',
                a3descs: '',
                a4descs: '',
                a5descs: '',
                a6descs: '',
                a7descs: '',
                a8descs: '',
                a9descs: '',
                currencydescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_prefixcd: { 
                cValidate :'required|max:8', 
                cName: 'prefixcd', 
                cLabel: 'Account Prefix Code', 
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
            PI_chartofaccountprefix: { 
                cValidate :'required|max:10', 
                cName: 'chartofaccountprefix', 
                cLabel: 'Account Prefix', 
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
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Account Prefix Description', 
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
            PI_accountdescs: { 
                cValidate :'max:60', 
                cName: 'accountdescs', 
                cLabel: 'Account Description ', 
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
            PI_accounttype: { 
                dataLookUp: null, 
                cValidate :'required', 
                cName: 'accounttype', 
                cLabel: 'Account Type', 
                // cLabelSize: 6,
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'A', 
                cProtect: false, 
                // cLastLabel: 'A, L, P, I, E, D, C',
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
            PI_linkaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'linkaccountcd', 
                cLabel: 'Link Account Code  ', 
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
                cLabel: 'Currency   ', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 

			PTAnalysis: {
                cPageLevel: 1,
                cTabIndex: 1,
                // cPageMasterSeq: this.data.PageMasterSeq,
                // cFormPageNo: this.data.PageOrder
            },
            dataT: {}
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
        OnaccounttypeChange (data) {
            console.log(data)
        this.$nextTick(() => {
            this.M_GL_SubModuleAccountPrefix.accounttype = data.id
            this.M_GL_SubModuleAccountPrefix.accounttypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accounttype}
            }
        })
        this.$forceUpdate()
        },
        OnlinkaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubModuleAccountPrefix.linkaccountcd = data.id
            this.M_GL_SubModuleAccountPrefix.linkaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{linkaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OncurrencycdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubModuleAccountPrefix.currencycd = data.id
            this.M_GL_SubModuleAccountPrefix.currencycdLabel = data.label
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
        },		
        M_Post(){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                PrefixCd: this.M_GL_SubModuleAccountPrefix.prefixcd,
                ChartOfAccountPrefix: this.M_GL_SubModuleAccountPrefix.prefixcd,
                Descs: this.M_GL_SubModuleAccountPrefix.prefixcd,
                AccountDescs: this.M_GL_SubModuleAccountPrefix.accountdescs,
                AccountType: this.M_GL_SubModuleAccountPrefix.accounttype,
                A0: this.M_GL_SubModuleAccountPrefix.a0,
                A1: this.M_GL_SubModuleAccountPrefix.a1,
                A2: this.M_GL_SubModuleAccountPrefix.a2,
                A3: this.M_GL_SubModuleAccountPrefix.a3,
                A4: this.M_GL_SubModuleAccountPrefix.a4,
                A5: this.M_GL_SubModuleAccountPrefix.a5,
                A6: this.M_GL_SubModuleAccountPrefix.a6,
                A7: this.M_GL_SubModuleAccountPrefix.a7,
                A8: this.M_GL_SubModuleAccountPrefix.a8,
                A9: this.M_GL_SubModuleAccountPrefix.a9,
                T0Status: this.dataT.T0status,
                T1Status: this.dataT.T1status,
                T2Status: this.dataT.T2status,
                T3Status: this.dataT.T3status,
                T4Status: this.dataT.T4status,
                T5Status: this.dataT.T5status,
                T6Status: this.dataT.T6status,
                T7Status: this.dataT.T7status,
                T8Status: this.dataT.T8status,
                T9Status: this.dataT.T9status,
                LinkAccountCd: this.M_GL_SubModuleAccountPrefix.linkaccountcd == '' || this.M_GL_SubModuleAccountPrefix.linkaccountcd == null ? 'NULL' : this.M_GL_SubModuleAccountPrefix.linkaccountcd ,
                CurrencyCd: this.M_GL_SubModuleAccountPrefix.currencycd == '' || this.M_GL_SubModuleAccountPrefix.currencycd == null ? 'NULL' : this.M_GL_SubModuleAccountPrefix.currencycd ,
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
                PrefixCd: this.M_GL_SubModuleAccountPrefix.prefixcd,
                ChartOfAccountPrefix: this.M_GL_SubModuleAccountPrefix.prefixcd,
                Descs: this.M_GL_SubModuleAccountPrefix.prefixcd,
                AccountDescs: this.M_GL_SubModuleAccountPrefix.accountdescs,
                AccountType: this.M_GL_SubModuleAccountPrefix.accounttype,
                A0: this.M_GL_SubModuleAccountPrefix.a0,
                A1: this.M_GL_SubModuleAccountPrefix.a1,
                A2: this.M_GL_SubModuleAccountPrefix.a2,
                A3: this.M_GL_SubModuleAccountPrefix.a3,
                A4: this.M_GL_SubModuleAccountPrefix.a4,
                A5: this.M_GL_SubModuleAccountPrefix.a5,
                A6: this.M_GL_SubModuleAccountPrefix.a6,
                A7: this.M_GL_SubModuleAccountPrefix.a7,
                A8: this.M_GL_SubModuleAccountPrefix.a8,
                A9: this.M_GL_SubModuleAccountPrefix.a9,
                T0Status: this.dataT.T0status,
                T1Status: this.dataT.T1status,
                T2Status: this.dataT.T2status,
                T3Status: this.dataT.T3status,
                T4Status: this.dataT.T4status,
                T5Status: this.dataT.T5status,
                T6Status: this.dataT.T6status,
                T7Status: this.dataT.T7status,
                T8Status: this.dataT.T8status,
                T9Status: this.dataT.T9status,
                LinkAccountCd: this.M_GL_SubModuleAccountPrefix.linkaccountcd == '' || this.M_GL_SubModuleAccountPrefix.linkaccountcd == null ? 'NULL' : this.M_GL_SubModuleAccountPrefix.linkaccountcd ,
                CurrencyCd: this.M_GL_SubModuleAccountPrefix.currencycd == '' || this.M_GL_SubModuleAccountPrefix.currencycd == null ? 'NULL' : this.M_GL_SubModuleAccountPrefix.currencycd ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_SubModuleAccountPrefix.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_SubModuleAccountPrefix = {
                prefixcd: '',
                chartofaccountprefix: '',
                descs: '',
                accountdescs: '',
                accounttype: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                linkaccountdescs: '',
                a0descs: '',
                a1descs: '',
                a2descs: '',
                a3descs: '',
                a4descs: '',
                a5descs: '',
                a6descs: '',
                a7descs: '',
                a8descs: '',
                a9descs: '',
                currencydescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			this.$refs.ref_prefixcd.focus()
        },
        M_Edit(){
            this.$refs.ref_chartofaccountprefix.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                PrefixCd: value.PrefixCd,
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
,                prefixcd: record.PrefixCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_SubModuleAccountPrefix = {
                prefixcd: data.prefixcd,
                chartofaccountprefix: data.chartofaccountprefix,
                descs: data.descs,
                accountdescs: data.accountdescs,
                accounttype: data.accounttype,
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
                t0status: data.t0status,
                t1status: data.t1status,
                t2status: data.t2status,
                t3status: data.t3status,
                t4status: data.t4status,
                t5status: data.t5status,
                t6status: data.t6status,
                t7status: data.t7status,
                t8status: data.t8status,
                t9status: data.t9status,
                linkaccountcd: data.linkaccountcd,
                currencycd: data.currencycd,
                userinput: data.userinput,
                useredit: data.useredit,
                linkaccountdescs: data.linkaccountdescs,
                a0descs: data.a0descs,
                a1descs: data.a1descs,
                a2descs: data.a2descs,
                a3descs: data.a3descs,
                a4descs: data.a4descs,
                a5descs: data.a5descs,
                a6descs: data.a6descs,
                a7descs: data.a7descs,
                a8descs: data.a8descs,
                a9descs: data.a9descs,
                currencydescs: data.currencydescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_SubModuleAccountPrefix.linkaccountcdLabel = this.M_GL_SubModuleAccountPrefix.linkaccountcd != null ? data.linkaccountcd + this.separator + data.linkaccountdescs :'' 
                this.M_GL_SubModuleAccountPrefix.currencycdLabel = this.M_GL_SubModuleAccountPrefix.currencycd != null ? data.currencycd + this.separator + data.currencydescs :'' 
         

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

