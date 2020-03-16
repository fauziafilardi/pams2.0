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
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_lineno" v-model="M_GL_ViewDeletedJournalD.lineno"  ref="ref_lineno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_detaildescs" v-model="M_GL_ViewDeletedJournalD.detaildescs"  ref="ref_detaildescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_accountcd" v-model="M_GL_ViewDeletedJournalD.accountcd"  ref="ref_accountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_accountdescs" v-model="M_GL_ViewDeletedJournalD.accountdescs"  ref="ref_accountdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_GL_ViewDeletedJournalD.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_GL_ViewDeletedJournalD.currencyrate"  ref="ref_currencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_baseamt" v-model="M_GL_ViewDeletedJournalD.baseamt"  ref="ref_baseamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitcredit" v-model="M_GL_ViewDeletedJournalD.debitcredit"  ref="ref_debitcredit" />
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Transaction Analysis 
                                        </span>
                                    </div>
                                </b-col> <!-- table close -->
                  
							</b-row>
							<ABSTAnalysisLookUp ref="analysisLookUp" :prop="PTAnalysis" v-model="dataT" @input="OnAnalysisInput" />
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
                initialWhere:"JournalNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '[LineNo] ASC', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_ViewDeletedJournalD :{
                journalno: 0,
                lineno: 0,
                detaildescs: '',
                accountcd: '',
                currencyrate: '0',
                trxamt: '0',
                baseamt: '0',
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
                accountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_lineno: { 
                cLabel: 'Line No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            },
            PI_detaildescs: { 
                cValidate :'', 
                cName: 'detaildescs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountcd: { 
                cValidate :'', 
                cName: 'accountcd', 
                cLabel: 'Account Code', 
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
            PI_accountdescs: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Other Amount', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder: 4, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_debitcredit: { 
                cLabel: 'D/C', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cAnalysisType: 'Analysis Category'
            },

            dataT: {
                // T2status: null,
                // T2label: null,
                // T3status: null,
                // T3label: null,
                // T4status: null,
                // T4label: null,
                // T5status: null,
                // T5label: null,
                // T6status: null,
                // T6label: null,
                // T7status: null,
                // T7label: null,
                // T8status: null,
                // T8label: null,
                // T9status: null,
                // T9label: null,
                // T10status: null,
                // T10label: null,
                // T11status: null,
                // T11label: null,
                // T12status: null,
                // T12label: null,
                // T13status: null,
                // T13label: null,
                // T14status: null,
                // T14label: null,
                // T15status: null,
                // T15label: null,
                // T16status: null,
                // T16label: null,
                // T17status: null,
                // T17label: null,
                // T18status: null,
                // T18label: null,
                // T19status: null,
                // T19label: null,
                // T20status: null,
                // T20label: null,
                // T21status: null,
                // T21label: null,
                // T22status: null,
                // T22label: null,
                // T23status: null,
                // T23label: null,
                // T24status: null,
                // T24label: null,
                // T25status: null,
                // T25label: null,
                // T26status: null,
                // T26label: null,
                // T27status: null,
                // T27label: null,
                // T28status: null,
                // T28label: null,
                // T29status: null,
                // T29label: null,
                // T30status: null,
                // T30label: null
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
        OnAnalysisInput() {
            console.log(this.dataT)
        },
		
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[1].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
            this.M_GL_ViewDeletedJournalD.journalno = data.JournalNo 
            this.propList.initialWhere =" JournalNo = '" + data.JournalNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
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
                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_ViewDeletedJournalD = {
                journalno: 0,
                lineno: 0,
                detaildescs: '',
                accountcd: '',
                currencyrate: '0',
                trxamt: '0',
                baseamt: '0',
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
                accountdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_ViewDeletedJournalD.journalno = data.JournalNo 



        },
        M_Edit(){
        },
        M_Delete(dt){           

         //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                journalno: record.JournalNo,
                lineno: record.LineNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_GL_ViewDeletedJournalD = {
                journalno: data.journalno,
                lineno: data.lineno,
                detaildescs: data.detaildescs,
                accountcd: data.accountcd,
                currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                baseamt: this.isCurrency(data.baseamt, this.decimal),
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
                accountdescs: data.accountdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                
                if(data.debitcredit == 'C'){
                    this.M_GL_ViewDeletedJournalD.debitcredit = 'Credit'
                }else{
                    this.M_GL_ViewDeletedJournalD.debitcredit = 'Debit'
                }

                for (let a = 2; a <= 30; a++) {
                    this.dataT['T'+a] = data['t'+a]
                    this.dataT['T'+a+'label'] = data['t'+a]
                }

                this.$refs.analysisLookUp.OnInput()

                // console.log(this.dataT)

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

