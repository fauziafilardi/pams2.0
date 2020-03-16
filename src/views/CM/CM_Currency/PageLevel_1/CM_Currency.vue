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
                                        <ABSInputSelectList @change="OncurrencycdChange" :prop="PI_currencycd" :value="M_CM_Currency.currencycd" :label="M_CM_Currency.currencycdLabel" ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CM_Currency.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencysign" v-model="M_CM_Currency.currencysign"  ref="ref_currencysign" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnoperatorChange" :prop="PI_operator" v-model="M_CM_Currency.operator"  ref="ref_operator" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rate" v-model="M_CM_Currency.rate"  ref="ref_rate"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            GL Revaluation Account Code
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnglforexgainaccountcdChange" :prop="PI_glforexgainaccountcd" :value="M_CM_Currency.glforexgainaccountcd" :label="M_CM_Currency.glforexgainaccountcdLabel" ref="ref_glforexgainaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnglforexlossaccountcdChange" :prop="PI_glforexlossaccountcd" :value="M_CM_Currency.glforexlossaccountcd" :label="M_CM_Currency.glforexlossaccountcdLabel" ref="ref_glforexlossaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Sub Module Forex Account Code
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrealizeforexgainprefixcdChange" :prop="PI_realizeforexgainprefixcd" :value="M_CM_Currency.realizeforexgainprefixcd" :label="M_CM_Currency.realizeforexgainprefixcdLabel" ref="ref_realizeforexgainprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnrealizeforexgainaccountcdChange" :prop="PI_realizeforexgainaccountcd" :value="M_CM_Currency.realizeforexgainaccountcd" :label="M_CM_Currency.realizeforexgainaccountcdLabel" ref="ref_realizeforexgainaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnrealizeforexlossprefixcdChange" :prop="PI_realizeforexlossprefixcd" :value="M_CM_Currency.realizeforexlossprefixcd" :label="M_CM_Currency.realizeforexlossprefixcdLabel" ref="ref_realizeforexlossprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnrealizeforexlossaccountcdChange" :prop="PI_realizeforexlossaccountcd" :value="M_CM_Currency.realizeforexlossaccountcd" :label="M_CM_Currency.realizeforexlossaccountcdLabel" ref="ref_realizeforexlossaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnunrealizeforexgainprefixcdChange" :prop="PI_unrealizeforexgainprefixcd" :value="M_CM_Currency.unrealizeforexgainprefixcd" :label="M_CM_Currency.unrealizeforexgainprefixcdLabel" ref="ref_unrealizeforexgainprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnunrealizeforexgainaccountcdChange" :prop="PI_unrealizeforexgainaccountcd" :value="M_CM_Currency.unrealizeforexgainaccountcd" :label="M_CM_Currency.unrealizeforexgainaccountcdLabel" ref="ref_unrealizeforexgainaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnunrealizeforexlossprefixcdChange" :prop="PI_unrealizeforexlossprefixcd" :value="M_CM_Currency.unrealizeforexlossprefixcd" :label="M_CM_Currency.unrealizeforexlossprefixcdLabel" ref="ref_unrealizeforexlossprefixcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnunrealizeforexlossaccountcdChange" :prop="PI_unrealizeforexlossaccountcd" :value="M_CM_Currency.unrealizeforexlossaccountcd" :label="M_CM_Currency.unrealizeforexlossaccountcdLabel" ref="ref_unrealizeforexlossaccountcd"/>
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
		cInsertKey:'id=CurrencyCd, label=CurrencyCd+|+Descs',
		FormType: "List",
		Module:"CM",
            propList: {
                initialWhere: "SubPortfolioCd='" + this.getDataUser().SubPortfolioCd+ "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_Currency :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                currencycd: '',
                descs: '',
                currencysign: '',
                unitname: '',
                subunitname: '',
                operator: '*',
                rate: '0',
                realizeforexgainaccountcd: '',
                realizeforexlossaccountcd: '',
                unrealizeforexgainaccountcd: '',
                unrealizeforexlossaccountcd: '',
                realizeforexgainprefixcd: '',
                realizeforexlossprefixcd: '',
                unrealizeforexgainprefixcd: '',
                unrealizeforexlossprefixcd: '',
                glforexgainaccountcd: '',
                glforexlossaccountcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
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
                t30: ''
                    }
            ,
            PI_currencycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCurrency'    , 
                    ColumnDB: 'CurrencyCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'currencycd', 
                cLabel: 'Currency Code', 
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
                cMasterUrl: 'CM/CM_CurrencyMaster' ,
                cDisplayColumn: 'CurrencyCd,Descs' ,
            }, 
            PI_descs: { 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencysign: { 
                cLabel: 'Currency Sign', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_operator: { 
                cValidate :'', 
                cName: 'operator', 
                cId: 'rdboperator', 
                cRadioOptions: [{ text: 'Multiply (*)', value: '*' }, { text: 'Divide (/)', value: '/' }], 
                cRadioDefaultOption: '*', 
                cLabel:'Operator', 
                cLabelSize: 4, 
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rate: { 
                cValidate :'required|max:13', 
                cName: 'rate', 
                cLabel: 'Rate', 
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
            PI_glforexgainaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glforexgainaccountcd', 
                cLabel: 'Forex Gain A/c Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
            PI_glforexlossaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glforexlossaccountcd', 
                cLabel: 'Forex Loss A/c Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
            PI_realizeforexgainprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'realizeforexgainprefixcd', 
                cLabel: 'Realize Forex Gain A/c Prefix', 
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
                cMasterUrl: 'GL/GL_SubModuleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_realizeforexgainaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'realizeforexgainaccountcd', 
                cLabel: 'Realize Forex Gain A/c Code', 
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
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_realizeforexlossprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'realizeforexlossprefixcd', 
                cLabel: 'Realize Forex Loss A/c Prefix', 
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
                cMasterUrl: 'GL/GL_SubModuleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_realizeforexlossaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'realizeforexlossaccountcd', 
                cLabel: 'Realize Forex Loss A/c Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_unrealizeforexgainprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'unrealizeforexgainprefixcd', 
                cLabel: 'UnRealize Forex Gain A/c Prefix', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
            PI_unrealizeforexgainaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'unrealizeforexgainaccountcd', 
                cLabel: 'UnRealize Forex Gain A/c Code', 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_unrealizeforexlossprefixcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountPrefix'    , 
                    ColumnDB: 'PrefixCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'unrealizeforexlossprefixcd', 
                cLabel: 'UnRealize Forex Loss A/c Prefix', 
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
                cMasterUrl: 'GL/GL_SubModuleAccountPrefix' ,
                cDisplayColumn: 'PrefixCd,ChartOfAccountPrefix' ,
            }, 
            PI_unrealizeforexlossaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCodeBySubportfolio'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "STATUS = 'A' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'unrealizeforexlossaccountcd', 
                cLabel: 'UnRealize Forex Loss A/c Code', 
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
        OncurrencycdChange (data) {
        if (this.M_CM_Currency.currencycd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.currencycd = data.id
            this.M_CM_Currency.currencycdLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.M_CM_Currency.descs = data.Descs
        this.M_CM_Currency.currencysign = data.CurrencySign

            }
        })
        this.$forceUpdate()
        },
        OnoperatorChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{operator}
            }
        })
        this.$forceUpdate()
        },
        OnglforexgainaccountcdChange (data) {
        if (this.M_CM_Currency.glforexgainaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.glforexgainaccountcd = data.id
            this.M_CM_Currency.glforexgainaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glforexgainaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnglforexlossaccountcdChange (data) {
        if (this.M_CM_Currency.glforexlossaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.glforexlossaccountcd = data.id
            this.M_CM_Currency.glforexlossaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glforexlossaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnrealizeforexgainprefixcdChange (data) {
        if (this.M_CM_Currency.realizeforexgainprefixcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.realizeforexgainprefixcd = data.id
            this.M_CM_Currency.realizeforexgainprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{realizeforexgainprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnrealizeforexgainaccountcdChange (data) {
        if (this.M_CM_Currency.realizeforexgainaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.realizeforexgainaccountcd = data.id
            this.M_CM_Currency.realizeforexgainaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{realizeforexgainaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnrealizeforexlossprefixcdChange (data) {
        if (this.M_CM_Currency.realizeforexlossprefixcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.realizeforexlossprefixcd = data.id
            this.M_CM_Currency.realizeforexlossprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{realizeforexlossprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnrealizeforexlossaccountcdChange (data) {
        if (this.M_CM_Currency.realizeforexlossaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.realizeforexlossaccountcd = data.id
            this.M_CM_Currency.realizeforexlossaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{realizeforexlossaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnunrealizeforexgainprefixcdChange (data) {
        if (this.M_CM_Currency.unrealizeforexgainprefixcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.unrealizeforexgainprefixcd = data.id
            this.M_CM_Currency.unrealizeforexgainprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{unrealizeforexgainprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnunrealizeforexgainaccountcdChange (data) {
        if (this.M_CM_Currency.unrealizeforexgainaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.unrealizeforexgainaccountcd = data.id
            this.M_CM_Currency.unrealizeforexgainaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{unrealizeforexgainaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnunrealizeforexlossprefixcdChange (data) {
        if (this.M_CM_Currency.unrealizeforexlossprefixcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.unrealizeforexlossprefixcd = data.id
            this.M_CM_Currency.unrealizeforexlossprefixcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{unrealizeforexlossprefixcd}
            }
        })
        this.$forceUpdate()
        },
        OnunrealizeforexlossaccountcdChange (data) {
        if (this.M_CM_Currency.unrealizeforexlossaccountcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_Currency.unrealizeforexlossaccountcd = data.id
            this.M_CM_Currency.unrealizeforexlossaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{unrealizeforexlossaccountcd}
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CurrencyCd: this.M_CM_Currency.currencycd == '' || this.M_CM_Currency.currencycd == null ? 'NULL' : this.M_CM_Currency.currencycd ,
                Operator: this.M_CM_Currency.operator,
                Rate: this.M_CM_Currency.rate ? this.replaceAllString(this.M_CM_Currency.rate,',','','number') : 0 ,
                RealizeForexGainAccountCd: this.M_CM_Currency.realizeforexgainaccountcd == '' || this.M_CM_Currency.realizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainaccountcd ,
                RealizeForexLossAccountCd: this.M_CM_Currency.realizeforexlossaccountcd == '' || this.M_CM_Currency.realizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossaccountcd ,
                UnRealizeForexGainAccountCd: this.M_CM_Currency.unrealizeforexgainaccountcd == '' || this.M_CM_Currency.unrealizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainaccountcd ,
                UnRealizeForexLossAccountCd: this.M_CM_Currency.unrealizeforexlossaccountcd == '' || this.M_CM_Currency.unrealizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossaccountcd ,
                RealizeForexGainPrefixCd: this.M_CM_Currency.realizeforexgainprefixcd == '' || this.M_CM_Currency.realizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainprefixcd ,
                RealizeForexLossPrefixCd: this.M_CM_Currency.realizeforexlossprefixcd == '' || this.M_CM_Currency.realizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossprefixcd ,
                UnRealizeForexGainPrefixCd: this.M_CM_Currency.unrealizeforexgainprefixcd == '' || this.M_CM_Currency.unrealizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainprefixcd ,
                UnRealizeForexLossPrefixCd: this.M_CM_Currency.unrealizeforexlossprefixcd == '' || this.M_CM_Currency.unrealizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossprefixcd ,
                GLForexGainAccountCd: this.M_CM_Currency.glforexgainaccountcd == '' || this.M_CM_Currency.glforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexgainaccountcd ,
                GLForexLossAccountCd: this.M_CM_Currency.glforexlossaccountcd == '' || this.M_CM_Currency.glforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexlossaccountcd ,
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CurrencyCd: this.M_CM_Currency.currencycd == '' || this.M_CM_Currency.currencycd == null ? 'NULL' : this.M_CM_Currency.currencycd ,
                Operator: this.M_CM_Currency.operator,
                Rate: this.M_CM_Currency.rate ? this.replaceAllString(this.M_CM_Currency.rate,',','','number') : 0 ,
                RealizeForexGainAccountCd: this.M_CM_Currency.realizeforexgainaccountcd == '' || this.M_CM_Currency.realizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainaccountcd ,
                RealizeForexLossAccountCd: this.M_CM_Currency.realizeforexlossaccountcd == '' || this.M_CM_Currency.realizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossaccountcd ,
                UnRealizeForexGainAccountCd: this.M_CM_Currency.unrealizeforexgainaccountcd == '' || this.M_CM_Currency.unrealizeforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainaccountcd ,
                UnRealizeForexLossAccountCd: this.M_CM_Currency.unrealizeforexlossaccountcd == '' || this.M_CM_Currency.unrealizeforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossaccountcd ,
                RealizeForexGainPrefixCd: this.M_CM_Currency.realizeforexgainprefixcd == '' || this.M_CM_Currency.realizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexgainprefixcd ,
                RealizeForexLossPrefixCd: this.M_CM_Currency.realizeforexlossprefixcd == '' || this.M_CM_Currency.realizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.realizeforexlossprefixcd ,
                UnRealizeForexGainPrefixCd: this.M_CM_Currency.unrealizeforexgainprefixcd == '' || this.M_CM_Currency.unrealizeforexgainprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexgainprefixcd ,
                UnRealizeForexLossPrefixCd: this.M_CM_Currency.unrealizeforexlossprefixcd == '' || this.M_CM_Currency.unrealizeforexlossprefixcd == null ? 'NULL' : this.M_CM_Currency.unrealizeforexlossprefixcd ,
                GLForexGainAccountCd: this.M_CM_Currency.glforexgainaccountcd == '' || this.M_CM_Currency.glforexgainaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexgainaccountcd ,
                GLForexLossAccountCd: this.M_CM_Currency.glforexlossaccountcd == '' || this.M_CM_Currency.glforexlossaccountcd == null ? 'NULL' : this.M_CM_Currency.glforexlossaccountcd ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_Currency.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_Currency = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                currencycd: '',
                descs: '',
                currencysign: '',
                unitname: '',
                subunitname: '',
                operator: '*',
                rate: '0',
                realizeforexgainaccountcd: '',
                realizeforexlossaccountcd: '',
                unrealizeforexgainaccountcd: '',
                unrealizeforexlossaccountcd: '',
                realizeforexgainprefixcd: '',
                realizeforexlossprefixcd: '',
                unrealizeforexgainprefixcd: '',
                unrealizeforexlossprefixcd: '',
                glforexgainaccountcd: '',
                glforexlossaccountcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
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
                t30: ''
                    }
            		
		},
        M_New(){
            this.$refs.ref_currencycd.focus()
			
        },
        M_Edit(){
            this.$refs.ref_operator.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

            
            data.forEach((value) => {
            dataDelete.push({
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            CurrencyCd: value.CurrencyCd,
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
,                subportfoliocd: record.SubPortfolioCd,
                currencycd: record.CurrencyCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CM_Currency = {
                subportfoliocd: data.subportfoliocd,
                currencycd: data.currencycd,
                descs: data.descs,
                currencysign: data.currencysign,
                unitname: data.unitname,
                subunitname: data.subunitname,
                operator: data.operator,
                rate: this.isCurrency(data.rate, data.decimal),
                realizeforexgainaccountcd: data.realizeforexgainaccountcd,
                realizeforexlossaccountcd: data.realizeforexlossaccountcd,
                unrealizeforexgainaccountcd: data.unrealizeforexgainaccountcd,
                unrealizeforexlossaccountcd: data.unrealizeforexlossaccountcd,
                realizeforexgainprefixcd: data.realizeforexgainprefixcd,
                realizeforexlossprefixcd: data.realizeforexlossprefixcd,
                unrealizeforexgainprefixcd: data.unrealizeforexgainprefixcd,
                unrealizeforexlossprefixcd: data.unrealizeforexlossprefixcd,
                glforexgainaccountcd: data.glforexgainaccountcd,
                glforexlossaccountcd: data.glforexlossaccountcd,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
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
                t30: data.t30
                    }
                 

                this.M_CM_Currency.currencycdLabel = this.M_CM_Currency.currencycd != null ? data.currencycd   :'' 
                this.M_CM_Currency.glforexgainaccountcdLabel = this.M_CM_Currency.glforexgainaccountcd != null ? data.glforexgainaccountcd  :'' 
                this.M_CM_Currency.glforexlossaccountcdLabel = this.M_CM_Currency.glforexlossaccountcd != null ? data.glforexlossaccountcd  :'' 
                this.M_CM_Currency.realizeforexgainprefixcdLabel = this.M_CM_Currency.realizeforexgainprefixcd != null ? data.realizeforexgainprefixcd  :'' 
                this.M_CM_Currency.realizeforexgainaccountcdLabel = this.M_CM_Currency.realizeforexgainaccountcd != null ? data.realizeforexgainaccountcd  :'' 
                this.M_CM_Currency.realizeforexlossprefixcdLabel = this.M_CM_Currency.realizeforexlossprefixcd != null ? data.realizeforexlossprefixcd  :'' 
                this.M_CM_Currency.realizeforexlossaccountcdLabel = this.M_CM_Currency.realizeforexlossaccountcd != null ? data.realizeforexlossaccountcd  :'' 
                this.M_CM_Currency.unrealizeforexgainprefixcdLabel = this.M_CM_Currency.unrealizeforexgainprefixcd != null ? data.unrealizeforexgainprefixcd  :'' 
                this.M_CM_Currency.unrealizeforexgainaccountcdLabel = this.M_CM_Currency.unrealizeforexgainaccountcd != null ? data.unrealizeforexgainaccountcd  :'' 
                this.M_CM_Currency.unrealizeforexlossprefixcdLabel = this.M_CM_Currency.unrealizeforexlossprefixcd != null ? data.unrealizeforexlossprefixcd  :'' 
                this.M_CM_Currency.unrealizeforexlossaccountcdLabel = this.M_CM_Currency.unrealizeforexlossaccountcd != null ? data.unrealizeforexlossaccountcd  :'' 
         

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

