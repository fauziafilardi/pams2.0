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
                                        <ABSinputTextVuex :prop="PI_clbudgetno" v-model="M_TN_CLBudget.clbudgetno"  ref="ref_clbudgetno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnbudgetdateChange" :prop="PI_budgetdate" v-model="M_TN_CLBudget.budgetdate"  ref="ref_budgetdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_budgetyear" v-model="M_TN_CLBudget.budgetyear" @onBlur="onBlurBudgetYear" ref="ref_budgetyear"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_budgetsource" v-model="M_TN_CLBudget.budgetsourceDesc"  ref="ref_budgetsource" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_CLBudget.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLBudget.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                </b-col> <!-- table close -->
                                </b-col> <!-- table close -->
                  
							</b-row>
                            <ABSGrid
                                :prop="param"
                                @onBlur_rentalrate="onBlur_rentalrate"
                                :PageLevel="PageLevel"
                                :TabIndex="TabIndex"
                                v-model="budgetDetail"
                                ref="ref_GridCLBudget"
                            />
                                <!-- @changeCheckbox="changeCheckbox"
                                @onBlur="onBlur"
                                @total="sumTotal" -->
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
        isOnBlurBudgetYear: false,
		cInsertKey:'',
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd ='"+this.getDataUser().SubPortfolioCd+"' AND Status='N'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            BudgetRunningCd: '',

            M_TN_CLBudget :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                clbudgetno: '',
                budgetdate: this.M_FormatingDate(new Date()),
                budgetyear: '',
                descs: '',
                confirmedby: '',
                confirmeddate: '',
                budgetsource: '',
                budgetsourceDesc: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_clbudgetno: { 
                cValidate :'required|max:20', 
                cName: 'clbudgetno', 
                cLabel: 'Budget No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_budgetdate: { 
                cValidate :'required', 
                cName: 'budgetdate', 
                cLabel: 'Budget Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_budgetyear: { 
                cValidate :'max:4', 
                cName: 'budgetyear', 
                cLabel: 'Budget Year', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'number',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_budgetsource: { 
                cLabel: 'Source ', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cValidate :'max:60', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cFormPageNo: this.data.PageOrder,
				cProtect: false
            },
            param: {
                cDisplayColumn: 'zonecd,zonedescs,chargeareadescs,chargeperioddescs,starttooffer,totalarea=decimal,rentalrate=decimal,totalrental=decimal,jan=decimal,feb=decimal,mar=decimal,apr=decimal,may=decimal,jun=decimal,jul=decimal,aug=decimal,sept=decimal,oct=decimal,nov=decimal,dec=decimal',
                // cTotalColumn: 'totalbaserent',
                comp: [
                    // {
                    //     slot: 'zonecd',
                    //     compType: 'ABSTextBoxOnly',
                        // cIsAlwaysShow: false,
                        // cHideRowColumnCSS: true,
                    //     cValidate :'', 
                    //     cName: 'zonecd', 
                    //     cLabel: '', 
                    //     cLabelSize: 4, 
                    //     cOrder: 0, 
                    //     cKey: false, 
                    //     cType: '',
                    //     cVisible: true, 
                    //     cProtect: false, 
                    //     cPageLevel: this.PageLevel, 
                    //     cTabIndex: this.TabIndex, 
                    //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    // },
                    // {
                    //     slot: 'zonedescs',
                    //     compType: 'ABSTextBoxOnly',
                        // cIsAlwaysShow: false,
                        // cHideRowColumnCSS: true,
                    //     cValidate :'', 
                    //     cName: 'zonedescs', 
                    //     cLabel: '', 
                    //     cLabelSize: 4, 
                    //     cOrder: 0, 
                    //     cKey: false, 
                    //     cType: '',
                    //     cVisible: true, 
                    //     cProtect: false, 
                    //     cPageLevel: this.PageLevel, 
                    //     cTabIndex: this.TabIndex, 
                    //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    // },
                    {
                        slot: 'starttooffer',
                        compType: 'ABSDateOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'',
                        cName: 'starttooffer',
                        cLabel: '',
                        cLabelSize: 4,
                        cOrder: 0,
                        cKey: false,
                        cType: '',
                        cVisible: true,
                        cProtect: false,
                        cFormat: 'dd/MM/yyyy',
                        cPageLevel: this.PageLevel,
                        cTabIndex: this.TabIndex,
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cLabelValue: 'Previous'
                    },
                    // {
                    //     slot: 'totalarea',
                    //     compType: 'ABSTextBoxOnly',
                    //     cIsAlwaysShow: false,
                    //     cValidate :'', 
                    //     cName: 'totalarea', 
                    //     cLabel: '', 
                    //     cLabelSize: 4, 
                    //     cOrder: 0, 
                    //     cKey: false, 
                    //     cType: 'decimal',
                    //     cVisible: true, 
                    //     cProtect: false, 
                    //     cPageLevel: this.PageLevel, 
                    //     cTabIndex: this.TabIndex, 
                    //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
                    // },
                    {
                        slot: 'rentalrate',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'rentalrate', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'jan',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'jan', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'feb',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'feb', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'mar',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'mar', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'apr',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'apr', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'may',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'may', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'jun',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'jun', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'jul',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'jul', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'aug',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'aug', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'sept',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'sept', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'oct',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'oct', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'nov',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'nov', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                    {
                        slot: 'dec',
                        compType: 'ABSTextBoxOnly',
                        cIsAlwaysShow: false,
                        cHideRowColumnCSS: true,
                        cValidate :'', 
                        cName: 'dec', 
                        cLabel: '', 
                        cLabelSize: 4, 
                        cOrder: 0, 
                        cKey: false, 
                        cType: 'decimal',
                        cVisible: true, 
                        cProtect: false, 
                        cPageLevel: this.PageLevel, 
                        cTabIndex: this.TabIndex, 
                        cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                        cWhenLabel: 'genap'
                    },
                ]
            },
            budgetDetail: []
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
        onBlurBudgetYear (year) {
            var record = {
                CLBudgetNo: ''
            }
            this.getDataBy2(record, year)
            this.isOnBlurBudgetYear = true
        },
        getBudgetSource (budgetYear) {
            var param = {
                OptionFunctionCd: "GetBudgetSource",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BudgetYear: budgetYear
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return

                // if (ress.length < 1) return

                var data = ress[0]
                data.CountData
            })
        },
        onBlur_rentalrate (index) {
            this.budgetDetail[index].totalrental = parseFloat(this.replaceAllString(this.budgetDetail[index].totalarea, ',', ''), this.decimal) * parseFloat(this.replaceAllString(this.budgetDetail[index].rentalrate, ',', ''), this.decimal)
            
            // this.budgetDetail[index].totalarea = this.isCurrency(this.budgetDetail[index].totalarea, this.decimal).toString()
            // this.budgetDetail[index].rentalrate = this.isCurrency(this.budgetDetail[index].rentalrate, this.decimal).toString()

            this.budgetDetail[index].totalrental = this.isCurrency(this.budgetDetail[index].totalrental, this.decimal).toString()

            this.$refs.ref_GridCLBudget.recalculateTotal()
        },
        OnbudgetdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{budgetdate}
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
        },		
        M_Post(dt){
        },
        getDetailData () {
            var parameterData = []
            for (let x = 0 ; x < this.budgetDetail.length ; x ++) {
               
                if (x % 2 == 0) {
                    console.log(this.budgetDetail[x].starttooffer)
                    if(this.budgetDetail[x].starttooffer !='Invalid date'){
                        parameterData.push({
                        _LineNo_: this.$parent.data.PageOrder,
                        _Method_: 'SAVE2',
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        CLBudgetNo: this.M_TN_CLBudget.clbudgetno,
                        
                        ZoneCd: this.budgetDetail[x].zonecd,
                        StartToOffer: this.budgetDetail[x].starttooffer,
                        RentalRate: this.replaceAllString(this.budgetDetail[x].rentalrate, ',', ''),

                        Jan: this.budgetDetail[x].jan,
                        Feb: this.budgetDetail[x].feb,
                        Mar: this.budgetDetail[x].mar,
                        Apr: this.budgetDetail[x].apr,
                        May: this.budgetDetail[x].may,
                        Jun: this.budgetDetail[x].jun,
                        Jul: this.budgetDetail[x].jul,
                        Aug: this.budgetDetail[x].aug,
                        Sept: this.budgetDetail[x].sept,
                        Oct: this.budgetDetail[x].oct,
                        Nov: this.budgetDetail[x].nov,
                        Dec: this.budgetDetail[x].dec,

                        UserInput: this.getDataUser().UserId
                    })
                    }
                    
                }
            }
            return parameterData
        },
        M_Insert() {

            if(this.BudgetRunningCd !=''){
                this.FnGenerateRunningCode(
                this.getDataUser().SubPortfolioCd,
                this.BudgetRunningCd,
                this.getDataUser().UserId,
                this.M_TN_CLBudget.budgetdate
                ).then(dt =>{
                    if (dt == null) return
                    this.M_TN_CLBudget.clbudgetno = dt.RunningCode

                    var dataInsert = []
                    var param1 = {
                        _Method_: 'SAVE',
                        _LineNo_: this.$parent.data.PageOrder,
                        SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                        CLBudgetNo: this.M_TN_CLBudget.clbudgetno,
                        BudgetDate: this.M_TN_CLBudget.budgetdate == '' || this.M_TN_CLBudget.budgetdate == null ? 'NULL' : this.M_TN_CLBudget.budgetdate ,
                        BudgetYear: this.M_TN_CLBudget.budgetyear,
                        Descs: this.M_TN_CLBudget.descs,
                        Remarks: this.M_TN_CLBudget.remarks,
                        UserInput: this.getDataUser().UserId
                    }

                    var param2 = this.getDetailData()

                    dataInsert.push({
                        A_Insert: param1,
                        B_Looping: param2
                    })

                    var param = {
                        OptionSeq: this.getOptionSeq().OptionSeq,
                        LineNo: this.$parent.data.PageOrder,
                        Data: dataInsert
                    }
                    
                    this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
                    .then(response => {
                    if (response == null) return
                        // this.alertSuccess('Data Has Been Save Successfully')
                        this.$parent.resultInsert(response.Message)
                    })
                })
            }
            
        },
        M_Update () {

            var dataUpdate = []
            var param1 = {
                _Method_: 'UPDATE',
                _LineNo_: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CLBudgetNo: this.M_TN_CLBudget.clbudgetno,
                BudgetDate: this.M_TN_CLBudget.budgetdate == '' || this.M_TN_CLBudget.budgetdate == null ? 'NULL' : this.M_TN_CLBudget.budgetdate ,
                BudgetYear: this.M_TN_CLBudget.budgetyear,
                Descs: this.M_TN_CLBudget.descs,
                Remarks: this.M_TN_CLBudget.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLBudget.lastupdatestamp
            }

            var param2 = this.getDetailData()

            dataUpdate.push({
                A_Update: param1,
                B_Looping: param2
            })

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataUpdate
            }
            
            this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
            .then(response => {
            if (response == null) return
                this.$parent.resultUpdate('Data Has Been Save Successfully')
            })
        },
		M_ClearForm(){
            this.M_TN_CLBudget = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                clbudgetno: '',
                budgetdate: this.M_FormatingDate(new Date()),
                budgetyear: '',
                descs: '',
                confirmedby: '',
                confirmeddate: '',
                budgetsource: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        fn_getSpecTN(){
            var param = {
                OptionFunctionCd: "GetSpecification",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
              }

              this.FnDynamicFunction(param)
              .then(ress => {
                if (ress == null) return

                if (ress.length < 1) return

                var data = ress[0]

                if (data.CLBudgetRunningCd!=''){
                    this.BudgetRunningCd = data.CLBudgetRunningCd
                    this.PI_clbudgetno.cValidate=''
                    this.M_TN_CLBudget.clbudgetno ='(AUTO)'
                    this.PI_clbudgetno.cProtect = true
                } else {
                    this.PI_clbudgetno.cValidate='required|max:20'
                    this.PI_clbudgetno.cProtect = false
                    this.BudgetRunningCd = ''
                }

                
                

              })
        },
        M_New(){
            this.fn_getSpecTN()

            var record = {
                    CLBudgetNo: ''
                }
           this.getDataBy2(record, 0)


        // [Global:GetBudgetRunningCd].then(FnOpt1 => { if (FnOpt1 != null) { 
        //      if (FnOpt1.CLBudgetRunningCd != "" && FnOpt1.CLBudgetRunningCd != null)
        //           { this.PI_clbudgetno.cProtect = true
        //           this.M_TN_CLBudget.clbudgetno = "(auto)" }
        // else {
        //      this.PI_clbudgetno.cProtect = false
        //           this.M_TN_CLBudget.clbudgetno = "" } } })
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			data.forEach((value) => {
				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    CLBudgetNo: value.CLBudgetNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''
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
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                clbudgetno: record.CLBudgetNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]

                this.M_TN_CLBudget = {
                    subportfoliocd: data.subportfoliocd,
                    clbudgetno: data.clbudgetno,
                    budgetdate: this.momentDate(data.budgetdate),
                    budgetyear: data.budgetyear,
                    descs: data.descs,
                    confirmedby: data.confirmedby,
                    confirmeddate: data.confirmeddate,
                    budgetsource: data.budgetsource,
                    budgetsourceDesc: data.budgetsource == 'R' ? 'Revision' : 'New Budget',
                    status: data.status,
                    remarks: data.remarks,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

                this.getDataBy2(record, data.budgetyear)

            })
        },

        getDataBy2 (record, year) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BudgetNo: record.CLBudgetNo,
                BudgetYear: year
            }

            this.postEncode(this.getUrlById() + '2', param)
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data

                this.budgetDetail = []

                for (let j = 0; j < data.length; j++) {
                    this.budgetDetail.push({
                        zonecd: data[j].zonecd,
                        zonedescs: data[j].zonedescs,
                        chargeareadescs: data[j].chargeareadescs,
                        chargeperioddescs: data[j].chargeperioddescs,
                        starttooffer: this.momentDate(data[j].starttooffer),

                        totalarea: data[j].totalarea,
                        rentalrate: data[j].rentalrate,
                        totalrental: data[j].totalrental,

                        jan: data[j].jan,
                        feb: data[j].feb,
                        mar: data[j].mar,
                        apr: data[j].apr,
                        may: data[j].may,
                        jun: data[j].jun,
                        jul: data[j].jul,
                        aug: data[j].aug,
                        sept: data[j].sept,
                        oct: data[j].oct,
                        nov: data[j].nov,
                        dec: data[j].dec
                    })

                    this.budgetDetail.push({
                        zonecd: null,
                        zonedescs: null,
                        chargeareadescs: null,
                        chargeperioddescs: null,
                        starttooffer: 'Previous',
                        
                        totalarea: data[j].previoustotalarea,
                        rentalrate: data[j].previousrentalrate,
                        totalrental: data[j].previoustotalrental,

                        jan: data[j].previousjan,
                        feb: data[j].previousfeb,
                        mar: data[j].previousmar,
                        apr: data[j].previousapr,
                        may: data[j].previousmay,
                        jun: data[j].previousjun,
                        jul: data[j].previousjul,
                        aug: data[j].previousaug,
                        sept: data[j].previoussept,
                        oct: data[j].previousoct,
                        nov: data[j].previousnov,
                        dec: data[j].previousdec
                    })
                }

                this.$refs.ref_GridCLBudget.allColumn = ['zonecd','zonedescs','chargeareadescs','chargeperioddescs','starttooffer','totalarea','rentalrate','totalrental','jan','feb','mar','apr','may','jun','jul','aug','sept','oct','nov','dec']
                this.$refs.ref_GridCLBudget.fields = []
                this.$refs.ref_GridCLBudget.fieldDecimal = []
                this.$refs.ref_GridCLBudget.setHeaderTable()
                this.$refs.ref_GridCLBudget.items = this.budgetDetail
                this.$refs.ref_GridCLBudget.recalculateTotal()

                if (this.isOnBlurBudgetYear) {
                    this.getBudgetSource(this.M_TN_CLBudget.budgetyear)
                    this.isOnBlurBudgetYear = false
                }
                
                
                // this.M_TN_CLBudget = {
                //     subportfoliocd: data.subportfoliocd,
                //     clbudgetno: data.clbudgetno,
                //     budgetdate: data.budgetdate,
                //     budgetyear: data.budgetyear,
                //     descs: data.descs,
                //     confirmedby: data.confirmedby,
                //     confirmeddate: data.confirmeddate,
                //     budgetsource: data.budgetsource,
                //     budgetsourceDesc: data.budgetsource == 'R' ? 'Revision' : 'New Budget',
                //     status: data.status,
                //     remarks: data.remarks,
                //     userinput: data.userinput,
                //     useredit: data.useredit,
                //     lastupdatestamp: record.LastUpdateStamp,
                //     rowid: data.rowid
                // }
            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','List')
        this.getToolbar().ProcessPS()
        // var popo = setInterval(() => {
                // this.fn_getSpecTN()
            //     clearInterval(popo)
            // }, 5000);
        
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')
        this.$refs.ref_GridCLBudget.footClone = false
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

