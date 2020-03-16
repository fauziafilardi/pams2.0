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
                                        <ABSinputTextVuex :prop="PI_lineno" v-model="M_GL_PreDefinedJournalDetail.lineno"  ref="ref_lineno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lineprompt" v-model="M_GL_PreDefinedJournalDetail.lineprompt"  ref="ref_lineprompt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baselineno" v-model="M_GL_PreDefinedJournalDetail.baselineno"  ref="ref_baselineno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_PreDefinedJournalDetail.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_GL_PreDefinedJournalDetail.accountcd" :label="M_GL_PreDefinedJournalDetail.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_GL_PreDefinedJournalDetail.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_PreDefinedJournalDetail.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baseamt" v-model="M_GL_PreDefinedJournalDetail.baseamt"  ref="ref_baseamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OndebitcreditChange" :prop="PI_debitcredit" v-model="M_GL_PreDefinedJournalDetail.debitcredit"  ref="ref_debitcredit"/>
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
			Module:"GL",
            propList: {
                initialWhere:"PreDefinedJournalCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_PreDefinedJournalDetail :{
                predefinedjournalcd: '',
                lineno: '',
                lineprompt: '',
                baselineno: '',
                descs: '',
                accountcd: '',
                trxamt: '',
                baseamt: '',
                currencyrate: '',
                debitcredit: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountcddescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_lineno: { 
                cValidate :'', 
                cName: 'lineno', 
                cLabel: 'Line No', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lineprompt: { 
                cValidate :'required|max:60', 
                cName: 'lineprompt', 
                cLabel: 'Line Prompt ', 
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
            PI_baselineno: { 
                cValidate :'', 
                cName: 'baselineno', 
                cLabel: 'Base Line No', 
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
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Other Amount', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencyrate: { 
                cValidate :'', 
                cName: 'currencyrate', 
                cLabel: 'Rate', 
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
            PI_baseamt: { 
                cValidate :'', 
                cName: 'baseamt', 
                cLabel: 'Amount', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitcredit: { 
                cValidate :'max:1', 
                cName: 'debitcredit', 
                cLabel: 'D/C', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
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
        OnaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_PreDefinedJournalDetail.accountcd = data.id
            this.M_GL_PreDefinedJournalDetail.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
		OndebitcreditChange(data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                var letters = /^[C-Dc-d]+$/;
                if(data.match(letters))
                {
                // return true;
                }
                else
                {
                // alert("message");
                // return false;
                this.M_GL_PreDefinedJournalDetail.debitcredit = ''
                }
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
            this.M_GL_PreDefinedJournalDetail.predefinedjournalcd = data.PreDefinedJournalCd 
            this.propList.initialWhere =" PreDefinedJournalCd = '" + data.PreDefinedJournalCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            console.log(this.M_GL_PreDefinedJournalDetail)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNoV2: this.$parent.data.PageOrder,
                PreDefinedJournalCd: this.M_GL_PreDefinedJournalDetail.predefinedjournalcd,
                LineNo: this.M_GL_PreDefinedJournalDetail.lineno,
                LinePrompt: this.M_GL_PreDefinedJournalDetail.lineprompt,
                BaseLineNo: this.M_GL_PreDefinedJournalDetail.baselineno == '' || this.M_GL_PreDefinedJournalDetail.baselineno == null ? 0 : this.M_GL_PreDefinedJournalDetail.baselineno,
                Descs: this.M_GL_PreDefinedJournalDetail.descs,
                AccountCd: this.M_GL_PreDefinedJournalDetail.accountcd == '' || this.M_GL_PreDefinedJournalDetail.accountcd == null ? 'NULL' : this.M_GL_PreDefinedJournalDetail.accountcd ,
                TrxAmt: this.M_GL_PreDefinedJournalDetail.trxamt,
                BaseAmt: this.M_GL_PreDefinedJournalDetail.baseamt,
                CurrencyRate: this.M_GL_PreDefinedJournalDetail.currencyrate,
                DebitCredit: this.M_GL_PreDefinedJournalDetail.debitcredit,
                T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                User: this.getDataUser().UserId                
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
                LineNoV2: this.$parent.data.PageOrder,
                PreDefinedJournalCd: this.M_GL_PreDefinedJournalDetail.predefinedjournalcd,
                LineNo: this.M_GL_PreDefinedJournalDetail.lineno,
                LinePrompt: this.M_GL_PreDefinedJournalDetail.lineprompt,
                BaseLineNo: this.M_GL_PreDefinedJournalDetail.baselineno,
                Descs: this.M_GL_PreDefinedJournalDetail.descs,
                AccountCd: this.M_GL_PreDefinedJournalDetail.accountcd == '' || this.M_GL_PreDefinedJournalDetail.accountcd == null ? 'NULL' : this.M_GL_PreDefinedJournalDetail.accountcd ,
                TrxAmt: this.M_GL_PreDefinedJournalDetail.trxamt,
                BaseAmt: this.M_GL_PreDefinedJournalDetail.baseamt,
                CurrencyRate: this.M_GL_PreDefinedJournalDetail.currencyrate,
                DebitCredit: this.M_GL_PreDefinedJournalDetail.debitcredit,
               T0: this.getDataUser().PortfolioCd,
                T1: this.getDataUser().SubPortfolioCd,
                User: this.getDataUser().UserId,
                LastUpdateStamp: this.M_GL_PreDefinedJournalDetail.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_PreDefinedJournalDetail = {
                predefinedjournalcd: '',
                lineno: '',
                lineprompt: '',
                baselineno: '',
                descs: '',
                accountcd: '',
                trxamt: '',
                baseamt: '',
                currencyrate: '',
                debitcredit: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                accountcddescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_PreDefinedJournalDetail.predefinedjournalcd = data.PreDefinedJournalCd 

            this.$refs.ref_lineno.focus()

        },
        M_Edit(){
            this.$refs.ref_lineprompt.focus()
        },
        M_Delete(dt){           

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                PreDefinedJournalCd: value.PreDefinedJournalCd,
                LineNo: value.LineNo,
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
,                predefinedjournalcd: record.PreDefinedJournalCd,
                lineno: record.LineNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_GL_PreDefinedJournalDetail = {
                    predefinedjournalcd: data.predefinedjournalcd,
                    lineno: data.lineno,
                    lineprompt: data.lineprompt,
                    baselineno: data.baselineno,
                    descs: data.descs,
                    accountcd: data.accountcd,
                    trxamt: data.trxamt,
                    baseamt: data.baseamt,
                    currencyrate: data.currencyrate,
                    debitcredit: data.debitcredit,
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
                    userinput: data.userinput,
                    useredit: data.useredit,
                    accountcddescs: data.accountcddescs,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                 

                this.M_GL_PreDefinedJournalDetail.accountcdLabel = this.M_GL_PreDefinedJournalDetail.accountcd != null ? data.accountcd + this.separator + data.accountcddescs :'' 
  

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

