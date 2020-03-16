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
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex" v-on:submit.prevent>
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                    
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnfinyearChange" :prop="PI_finyear" v-model="M_GL_GIRECalculationZOC.finyear"  ref="ref_finyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="2">
                                            <ABSLabelOnly
                                          :prop="{cLabel: 'Retained Earning', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                        <b-col md="2">
                                          <!-- <label>Outstanding Amount</label> -->
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Income', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cStyle: 'text-decoration: underline;',
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                        <b-col md="2">
                                          
                                        </b-col>
                                        <b-col md="2">
                                          <!-- <label>Allocation Amount</label> -->
                                          <ABSLabelOnly
                                          :prop="{cLabel: 'Expense', 
                                            cLabelSize: 4, 
                                            cValue: '', 
                                            cPageLevel: PageLevel, 
                                            cTabIndex: TabIndex, 
                                            cVisible: true,
                                            cStyle: 'text-decoration: underline;',
                                            cClass: 'lbl-col-align'}"
                                          />
                                        </b-col>
                                        <b-col md="2">
                                         
                                        </b-col>
                                      </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_incomecredit" v-model="M_GL_GIRECalculationZOC.incomecredit"  ref="ref_incomecredit" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_expensedebit" v-model="M_GL_GIRECalculationZOC.expensedebit"  ref="ref_expensedebit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_incomedebit" v-model="M_GL_GIRECalculationZOC.incomedebit"  ref="ref_incomedebit" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_expensecredit" v-model="M_GL_GIRECalculationZOC.expensecredit"  ref="ref_expensecredit" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_income" v-model="M_GL_GIRECalculationZOC.income"  ref="ref_income" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_expense" v-model="M_GL_GIRECalculationZOC.expense"  ref="ref_expense" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_retainedearning" v-model="M_GL_GIRECalculationZOC.retainedearning"  ref="ref_retainedearning" />
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
			Module:"GL",	
            IEBy: {Input: '', Edit: ''},

            M_GL_GIRECalculationZOC :{
                finyear: '',
                incomecredit: '',
                expensedebit: '',
                incomedebit: '',
                expensecredit: '',
                income: '',
                expense: '',
                retainedearning: ''
                    }
            ,
            PI_finyear: { 
                cValidate :'required|min:4|max:4', 
                cName: 'finyear', 
                cLabel: 'Retained Earning Year', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },  
            PI_incomecredit: { 
                cLabel: 'Credit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_expensedebit: { 
                cLabel: 'Debit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_incomedebit: { 
                cLabel: 'Debit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cStyle: 'text-decoration: underline;',
                cVisible: true 
            }, 
            PI_expensecredit: { 
                cLabel: 'Credit', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cStyle: 'text-decoration: underline;',
                cVisible: true 
            }, 
            PI_income: { 
                cLabel: 'Income', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_expense: { 
                cLabel: 'Expense', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_retainedearning: { 
                cLabel: 'Retained Earning (I-E) ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
        OnfinyearChange (data) {   
            if (this.inputStatus != "VIEW") {
                if (data == '' || data.length < 4) {
            return
            }
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                this.getDataBy(this.M_GL_GIRECalculationZOC.finyear)

                }
            })
            this.$forceUpdate()

            }         
        
        },
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
           this.getToolbar().isNew = true
            this.getToolbar().statusFunction[0].disabled = true
            // this.getToolbar().statusFunction[5].disabled = false
           this.getToolbar().statusFunction[7].disabled = true
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
            this.M_GL_GIRECalculationZOC.finyear = ''
            this.getDataBy(1753)
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
                FinYear: this.M_GL_GIRECalculationZOC.finyear,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                User: this.getDataUser().UserId                
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
                FinYear: this.M_GL_GIRECalculationZOC.finyear,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                User: this.getDataUser().UserId                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                
                this.$parent.resultUpdate('Retained Earning Successfully Calculated!')
            })
           
        },
		M_ClearForm(){
            this.M_GL_GIRECalculationZOC = {
                finyear: '',
                incomecredit: '',
                expensedebit: '',
                incomedebit: '',
                expensecredit: '',
                income: '',
                expense: '',
                retainedearning: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_finyear.focus()
        },
        M_Edit(){
            this.$refs.ref_finyear.focus()
        },
        M_Delete(dt){       

         
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                FinYear: record
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // this.M_GL_GIRECalculationZOC = {
                //     finyear: data.finyear,
                //     incomecredit: data.incomecredit,
                //     expensedebit: data.expensedebit,
                //     incomedebit: data.incomedebit,
                //     expensecredit: data.expensecredit,
                //     income: data.income,
                //     expense: data.expense,
                //     retainedearning: data.retainedearning
                // }
                if(data.retainedearningamt !=null || data.retainedearningamt != 0){
                    this.M_GL_GIRECalculationZOC.incomecredit = this.isCurrency(data.incomecredit, this.decimal),
                    this.M_GL_GIRECalculationZOC.expensedebit = this.isCurrency(data.expensedebit, this.decimal),
                    this.M_GL_GIRECalculationZOC.incomedebit = this.isCurrency(data.incomedebit, this.decimal),
                    this.M_GL_GIRECalculationZOC.expensecredit = this.isCurrency(data.expensecredit, this.decimal),
                    this.M_GL_GIRECalculationZOC.income = this.isCurrency(data.income,this.decimal),
                    this.M_GL_GIRECalculationZOC.expense = this.isCurrency(data.expense,this.decimal),
                    this.M_GL_GIRECalculationZOC.retainedearning = this.isCurrency(data.retainedearningamt ,this.decimal)
                }else{
                    this.M_GL_GIRECalculationZOC.incomecredit = this.isCurrency(0, this.decimal),
                    this.M_GL_GIRECalculationZOC.expensedebit = this.isCurrency(0, this.decimal),
                    this.M_GL_GIRECalculationZOC.incomedebit = this.isCurrency(0, this.decimal),
                    this.M_GL_GIRECalculationZOC.expensecredit = this.isCurrency(0, this.decimal),
                    this.M_GL_GIRECalculationZOC.income = this.isCurrency(0,this.decimal),
                    this.M_GL_GIRECalculationZOC.expense = this.isCurrency(0,this.decimal),
                    this.M_GL_GIRECalculationZOC.retainedearning = this.isCurrency(0 ,this.decimal)
                }
                

                // this.IEBy.Input = data.userinput
                // this.IEBy.Edit = data.useredit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        // this.$store.commit('setFormType','Form')
        this.$store.commit('setStatus','new')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
		
        // // this.getToolbar().ProcessPS()
        
        // this.getToolbar().doEdit(true)
        // this.hideSideBarMenu()
        this.getToolbar().doEdit(true)
        this.$store.commit('setFormType','Form')

        // this.getToolbar().FormStatus = 'NEW'

        this.getToolbar().ProcessPS()
        this.hideSideBarMenu()
        this.getDataBy(1753)
        this.getToolbar().FormStatus = 'EDIT'
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
