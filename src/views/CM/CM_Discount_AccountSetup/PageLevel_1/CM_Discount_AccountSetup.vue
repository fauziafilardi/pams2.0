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
                                        <ABSinputTextVuex :prop="PI_discountcd" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountcd"  ref="ref_discountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CM_Discount_AccountSetup_AccountSetup.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntypeChange" :prop="PI_type" v-model="M_CM_Discount_AccountSetup_AccountSetup.type"  ref="ref_type" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_discountamt" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountamt"  ref="ref_discountamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row style="height: 20px !important;">
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: '', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="1" style="text-align: center !important;">1</b-col>
                                      <!-- <b-col md="1">                                        
                                        <ABSTextBoxOnly :prop="PI_discountrate1" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate1"  ref="ref_discountrate1"/>
                                      </b-col> -->
                                      <b-col md="1" style="text-align: center !important;">2</b-col>
                                      <!-- <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate2" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate2"  ref="ref_discountrate2"/>
                                      </b-col> -->
                                      <b-col md="1" style="text-align: center !important;">3</b-col>
                                      <!-- <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate3" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate3"  ref="ref_discountrate3"/>
                                      </b-col> -->
                                      <b-col md="1" style="text-align: center !important;">4</b-col>
                                      <!-- <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate4" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate4"  ref="ref_discountrate4"/>
                                      </b-col> -->
                                      <b-col md="1" style="text-align: center !important;">5</b-col>
                                      <!-- <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate5" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate5"  ref="ref_discountrate5"/>
                                      </b-col> -->
                                      <b-col md="1" style="text-align: center !important;">6</b-col>
                                      <!-- <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate6" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate6"  ref="ref_discountrate6"/>
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: '%Discount Matrix', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <!-- <b-col md="1" style="max-width: 2.333333% !important;">1</b-col> -->
                                      <b-col md="1">                                        
                                        <ABSTextBoxOnly :prop="PI_discountrate1" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate1"  ref="ref_discountrate1"/>
                                      </b-col>
                                      <!-- <b-col md="1" style="max-width: 2.333333% !important;">2</b-col> -->
                                      <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate2" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate2"  ref="ref_discountrate2"/>
                                      </b-col>
                                      <!-- <b-col md="1" style="max-width: 2.333333% !important;">3</b-col> -->
                                      <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate3" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate3"  ref="ref_discountrate3"/>
                                      </b-col>
                                      <!-- <b-col md="1" style="max-width: 2.333333% !important;">4</b-col> -->
                                      <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate4" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate4"  ref="ref_discountrate4"/>
                                      </b-col>
                                      <!-- <b-col md="1" style="max-width: 2.333333% !important;">5</b-col> -->
                                      <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate5" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate5"  ref="ref_discountrate5"/>
                                      </b-col>
                                      <!-- <b-col md="1" style="max-width: 2.333333% !important;">6</b-col> -->
                                      <b-col md="1">
                                        <ABSTextBoxOnly :prop="PI_discountrate6" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate6"  ref="ref_discountrate6"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-col md="12" id="col-left"> 
                                    <b-row>
                                      <b-col md="2" class="lbl-col-align"><label class="lbl-value-view-form">%Discount Matrix</label></b-col>
                                      <b-col  md="1">
                                        <ABSinputTextVuex :prop="PI_discountrate1" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate1"  ref="ref_discountrate1"/>
                                      </b-col>
                                      <b-col  md="1">
                                        <ABSinputTextVuex :prop="PI_discountrate2" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate2"  ref="ref_discountrate2"/>
                                      </b-col>
                                      <b-col  md="1">
                                        <ABSinputTextVuex :prop="PI_discountrate3" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate3"  ref="ref_discountrate3"/>
                                      </b-col>
                                      <b-col  md="1">
                                        <ABSinputTextVuex :prop="PI_discountrate4" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate4"  ref="ref_discountrate4"/>
                                      </b-col>
                                      <b-col  md="1">
                                        <ABSinputTextVuex :prop="PI_discountrate5" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate5"  ref="ref_discountrate5"/>
                                      </b-col>
                                      <b-col  md="1">
                                        <ABSinputTextVuex :prop="PI_discountrate6" v-model="M_CM_Discount_AccountSetup_AccountSetup.discountrate6"  ref="ref_discountrate6"/>
                                      </b-col>                                      
                                      </b-row>
                                </b-col>  -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OndefferedprefixcdChange" :prop="PI_defferedprefixcd" :value="M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd" :label="M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcdLabel" ref="ref_defferedprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OndefferedaccountcdChange" :prop="PI_defferedaccountcd" :value="M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd" :label="M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcdLabel" ref="ref_defferedaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnprefixcdChange" :prop="PI_prefixcd" :value="M_CM_Discount_AccountSetup_AccountSetup.prefixcd" :label="M_CM_Discount_AccountSetup_AccountSetup.prefixcdLabel" ref="ref_prefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnaccountcdChange" :prop="PI_accountcd" :value="M_CM_Discount_AccountSetup_AccountSetup.accountcd" :label="M_CM_Discount_AccountSetup_AccountSetup.accountcdLabel" ref="ref_accountcd"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
		Module:"CM",
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

            M_CM_Discount_AccountSetup_AccountSetup :{
                discountcd: '',
                descs: '',
                type: 'P',
                discountamt: '0',
                discountrate1: '0',
                discountrate2: '0',
                discountrate3: '0',
                discountrate4: '0',
                discountrate5: '0',
                discountrate6: '0',
                accountcd: '',
                prefixcd: '',
                defferedaccountcd: '',
                defferedprefixcd: '',
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
                timeinput: '',
                timeedit: '',
                lastupdatestamp: '',
                controlsequenceno: 0,
                rowid: 0
                    }
            ,
            PI_discountcd: { 
                cValidate :'', 
                cName: 'discountcd', 
                cLabel: 'Discount Code', 
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
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
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
            PI_type: { 
                cValidate :'', 
                cName: 'type', 
                cId: 'rdbtype', 
                cRadioOptions: [{ text: 'Percent', value: 'P' }, { text: 'Fixed', value: 'F' }], 
                cRadioDefaultOption: 'P', 
                cLabel:'	Discount Type', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountamt: { 
                cValidate :'', 
                cName: 'discountamt', 
                cLabel: 'Discount Amount', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountrate1: { 
                cValidate :'|	max_value:100', 
                cName: 'discountrate1', 
                cLabel: '1', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountrate2: { 
                cValidate :'|	max_value:100', 
                cName: 'discountrate2', 
                cLabel: '2', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountrate3: { 
                cValidate :'|	max_value:100', 
                cName: 'discountrate3', 
                cLabel: '3', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountrate4: { 
                cValidate :'|	max_value:100', 
                cName: 'discountrate4', 
                cLabel: '4', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountrate5: { 
                cValidate :'|	max_value:100', 
                cName: 'discountrate5', 
                cLabel: '5', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_discountrate6: { 
                cValidate :'|	max_value:100', 
                cName: 'discountrate6', 
                cLabel: '6', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_defferedprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defferedprefixcd', 
                cLabel: 'Deffered Discount Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cMasterUrl: 'GL/GL_SubModuleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_defferedaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'defferedaccountcd', 
                cLabel: 'Deffered Discount Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
            PI_prefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'prefixcd', 
                cLabel: 'Expense Discount Account Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cMasterUrl: 'GL/GL_SubModuleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_accountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'accountcd', 
                cLabel: 'Expense Discount Account Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
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
        OntypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{type}
            }
        })
        this.$forceUpdate()
        },
        OndefferedprefixcdChange (data) {
          console.log(data)
        if (this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd = data.id
            this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OndefferedaccountcdChange (data) {
        console.log(data)
        if (this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd = data.id
            this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{defferedaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnprefixcdChange (data) {
        console.log(data)
        if (this.M_CM_Discount_AccountSetup_AccountSetup.prefixcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Discount_AccountSetup_AccountSetup.prefixcd = data.id
            this.M_CM_Discount_AccountSetup_AccountSetup.prefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{prefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnaccountcdChange (data) {
        console.log(data)
        if (this.M_CM_Discount_AccountSetup_AccountSetup.accountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Discount_AccountSetup_AccountSetup.accountcd = data.id
            this.M_CM_Discount_AccountSetup_AccountSetup.accountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{accountcd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
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
        },		
        M_Post(){
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
                DiscountCd: this.M_CM_Discount_AccountSetup_AccountSetup.discountcd,
                AccountCd: this.M_CM_Discount_AccountSetup_AccountSetup.accountcd == '' || this.M_CM_Discount_AccountSetup_AccountSetup.accountcd == null ? 'NULL' : this.M_CM_Discount_AccountSetup_AccountSetup.accountcd ,
                PrefixCd: this.M_CM_Discount_AccountSetup_AccountSetup.prefixcd == '' || this.M_CM_Discount_AccountSetup_AccountSetup.prefixcd == null ? 'NULL' : this.M_CM_Discount_AccountSetup_AccountSetup.prefixcd ,
                DefferedAccountCd: this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd == '' || this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd == null ? 'NULL' : this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd ,
                DefferedPrefixCd: this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd == '' || this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd == null ? 'NULL' : this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_Discount_AccountSetup_AccountSetup.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_Discount_AccountSetup_AccountSetup = {
                discountcd: '',
                descs: '',
                type: 'P',
                discountamt: '0',
                discountrate1: '0',
                discountrate2: '0',
                discountrate3: '0',
                discountrate4: '0',
                discountrate5: '0',
                discountrate6: '0',
                accountcd: '',
                prefixcd: '',
                defferedaccountcd: '',
                defferedprefixcd: '',
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
                timeinput: '',
                timeedit: '',
                lastupdatestamp: '',
                controlsequenceno: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
          this.$refs.ref_discountcd.focus()
        },
        M_Edit(){
          this.$refs.ref_defferedprefixcd.focus()
        },
        M_Delete(dt){       

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
            _Message_: ''
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
,                discountcd: record.DiscountCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CM_Discount_AccountSetup_AccountSetup = {
                discountcd: data.discountcd,
                descs: data.descs,
                type: data.type,
                discountamt: this.isCurrency(data.discountamt, this.decimal),
                discountrate1: this.isCurrency(data.discountrate1, this.decimal),
                discountrate2: this.isCurrency(data.discountrate2, this.decimal),
                discountrate3: this.isCurrency(data.discountrate3, this.decimal),
                discountrate4: this.isCurrency(data.discountrate4, this.decimal),
                discountrate5: this.isCurrency(data.discountrate5, this.decimal),
                discountrate6: this.isCurrency(data.discountrate6, this.decimal),
                accountcd: data.accountcd,
                prefixcd: data.prefixcd,
                defferedaccountcd: data.defferedaccountcd,
                defferedprefixcd: data.defferedprefixcd,
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
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid
                    }
                 

                this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcdLabel = this.M_CM_Discount_AccountSetup_AccountSetup.defferedprefixcd != null ? data.defferedprefixcd  :'' 
                this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcdLabel = this.M_CM_Discount_AccountSetup_AccountSetup.defferedaccountcd != null ? data.defferedaccountcd   :'' 
                this.M_CM_Discount_AccountSetup_AccountSetup.prefixcdLabel = this.M_CM_Discount_AccountSetup_AccountSetup.prefixcd != null ? data.prefixcd  :'' 
                this.M_CM_Discount_AccountSetup_AccountSetup.accountcdLabel = this.M_CM_Discount_AccountSetup_AccountSetup.accountcd != null ? data.accountcd   :'' 
         

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

